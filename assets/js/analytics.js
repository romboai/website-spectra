(function () {
  var script = document.currentScript;
  var key = script && script.getAttribute("data-posthog-key");
  var host = (script && script.getAttribute("data-posthog-host")) || "https://eu.i.posthog.com";
  var loaded = false;

  function safeProps() {
    var params = new URLSearchParams(window.location.search);
    var ref = document.referrer ? new URL(document.referrer, window.location.origin).hostname : "";
    return {
      utm_source: params.get("utm_source") || undefined,
      utm_medium: params.get("utm_medium") || undefined,
      utm_campaign: params.get("utm_campaign") || undefined,
      utm_content: params.get("utm_content") || undefined,
      referrer_domain: ref || undefined,
      landing_page: window.location.pathname
    };
  }

  function loadPosthog() {
    if (loaded || !key || window.spectraConsent !== "accepted") return;
    loaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = host.replace(/\/$/, "") + "/static/array.js";
    s.onload = function () {
      if (!window.posthog) return;
      window.posthog.init(key, {
        api_host: host,
        autocapture: false,
        capture_pageview: false,
        disable_session_recording: true,
        mask_all_text: true,
        mask_all_element_attributes: true
      });
      pageview();
    };
    document.head.appendChild(s);
  }

  function pageview() {
    var path = window.location.pathname;
    var map = {
      "/": "homepage_viewed",
      "/docs/": "docs_opened",
      "/docs/getting-started/": "getting_started_opened",
      "/examples/sample-analysis/": "sample_analysis_opened",
      "/research/": "research_opened",
      "/changelog/": "changelog_opened"
    };
    var name = map[path];
    if (name) track(name);
  }

  function track(eventName, extra) {
    if (window.spectraConsent !== "accepted" || !window.posthog) return;
    var props = Object.assign({}, safeProps(), extra || {});
    window.posthog.capture(eventName, props);
  }

  window.spectraTrack = track;

  document.addEventListener("spectra-consent", function (event) {
    if (event.detail === "accepted") loadPosthog();
  });

  if (window.spectraConsent === "accepted") loadPosthog();

  document.addEventListener("click", function (event) {
    var target = event.target.closest("[data-analytics]");
    if (!target) return;
    track(target.getAttribute("data-analytics"));
  });
})();
