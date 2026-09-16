(function () {
  var app = document.body && document.body.getAttribute("data-app-url");
  if (!app) return;
  var incoming = new URLSearchParams(window.location.search);
  document.querySelectorAll("a[href]").forEach(function (anchor) {
    var href = anchor.getAttribute("href");
    if (!href || href.indexOf(app) !== 0) return;
    try {
      var url = new URL(anchor.href, window.location.origin);
      incoming.forEach(function (value, key) {
        if (key.indexOf("utm_") === 0 && !url.searchParams.has(key)) {
          url.searchParams.set(key, value);
        }
      });
      var src = anchor.getAttribute("data-cta-src");
      if (src && !url.searchParams.has("src")) url.searchParams.set("src", src);
      anchor.href = url.toString();
    } catch (err) {
      /* ignore malformed hrefs */
    }
  });
})();
