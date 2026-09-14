(function () {
  var KEY = "spectra-consent";
  var banner = document.getElementById("cookie-banner");
  var stored = localStorage.getItem(KEY);

  window.spectraConsent = stored || "unset";

  if (banner && !stored) banner.hidden = false;

  document.querySelectorAll("[data-consent]").forEach(function (button) {
    button.addEventListener("click", function () {
      var value = button.getAttribute("data-consent") === "accept" ? "accepted" : "rejected";
      localStorage.setItem(KEY, value);
      window.spectraConsent = value;
      if (banner) banner.hidden = true;
      document.dispatchEvent(new CustomEvent("spectra-consent", { detail: value }));
    });
  });
})();
