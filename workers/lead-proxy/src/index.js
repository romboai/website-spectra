const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY = 8000;
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;
const hits = new Map();

function allowedOrigin(origin, env) {
  const list = (env.ALLOWED_ORIGINS || "https://spectra.rombo.ai").split(",").map((s) => s.trim());
  return list.includes(origin);
}

function cors(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
  };
}

function json(status, body, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...cors(origin) },
  });
}

function rateLimited(ip) {
  const now = Date.now();
  const rec = hits.get(ip) || { n: 0, t: now };
  if (now - rec.t > WINDOW_MS) {
    rec.n = 0;
    rec.t = now;
  }
  rec.n += 1;
  hits.set(ip, rec);
  return rec.n > MAX_PER_WINDOW;
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    if (request.method === "OPTIONS") {
      if (!allowedOrigin(origin, env)) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: cors(origin) });
    }
    if (request.method !== "POST") return json(405, { error: "method" }, origin);
    if (!allowedOrigin(origin, env)) return json(403, { error: "origin" }, origin);

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    if (rateLimited(ip)) return json(429, { error: "rate" }, origin);

    const text = await request.text();
    if (text.length > MAX_BODY) return json(413, { error: "size" }, origin);

    let data;
    try {
      data = Object.fromEntries(new URLSearchParams(text));
    } catch {
      return json(400, { error: "parse" }, origin);
    }

    if (data.company_website) return json(200, { ok: true }, origin);
    if (!data.name || !data.email || !data.organization || !data.use_case || !data.consent) {
      return json(400, { error: "fields" }, origin);
    }
    if (!EMAIL.test(data.email) || !data.email.includes(".")) {
      return json(400, { error: "email" }, origin);
    }

    if (env.TURNSTILE_SECRET && data["cf-turnstile-response"]) {
      const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET,
          response: data["cf-turnstile-response"],
        }),
      });
      const verdict = await verify.json();
      if (!verdict.success) return json(400, { error: "turnstile" }, origin);
    }

    const payload = new URLSearchParams({
      name: String(data.name).slice(0, 200),
      email: String(data.email).slice(0, 200),
      organization: String(data.organization).slice(0, 200),
      role: String(data.role || "").slice(0, 200),
      use_case: String(data.use_case).slice(0, 80),
      message: String(data.message || "").slice(0, 2000),
      utm_source: String(data.utm_source || "").slice(0, 80),
      utm_medium: String(data.utm_medium || "").slice(0, 80),
      utm_campaign: String(data.utm_campaign || "").slice(0, 80),
      utm_content: String(data.utm_content || "").slice(0, 80),
      landing_page: String(data.landing_page || "").slice(0, 200),
    });

    if (!env.MAKE_WEBHOOK_URL) return json(503, { error: "not_configured" }, origin);

    const headers = { "Content-Type": "application/x-www-form-urlencoded" };
    if (env.MAKE_WEBHOOK_KEY) headers["x-make-apikey"] = env.MAKE_WEBHOOK_KEY;

    const downstream = await fetch(env.MAKE_WEBHOOK_URL, {
      method: "POST",
      headers,
      body: payload,
    });
    if (!downstream.ok) return json(502, { error: "downstream" }, origin);
    return json(200, { ok: true }, origin);
  },
};
