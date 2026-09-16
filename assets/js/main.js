(function () {
  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.getElementById("mobile-navigation");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      menu.classList.toggle("is-open", !open);
      toggle.textContent = open ? "Menu" : "Close";
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        toggle.setAttribute("aria-expanded", "false");
        menu.classList.remove("is-open");
        toggle.textContent = "Menu";
      });
    });
  }

  var tocHost = document.querySelector("[data-toc]");
  if (tocHost) {
    var headings = document.querySelectorAll(".docs-content h2, .docs-content h3");
    if (headings.length) {
      var list = document.createElement("ol");
      headings.forEach(function (heading) {
        if (!heading.id) {
          heading.id = heading.textContent
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
        }
        var item = document.createElement("li");
        var anchor = document.createElement("a");
        anchor.href = "#" + heading.id;
        anchor.textContent = heading.textContent.replace(/#$/, "").trim();
        item.appendChild(anchor);
        list.appendChild(item);

        var copy = document.createElement("a");
        copy.className = "heading-link";
        copy.href = "#" + heading.id;
        copy.textContent = "#";
        copy.setAttribute("aria-label", "Copy link to " + heading.textContent);
        copy.addEventListener("click", function (event) {
          if (navigator.clipboard) {
            event.preventDefault();
            navigator.clipboard.writeText(window.location.origin + window.location.pathname + "#" + heading.id);
          }
        });
        heading.appendChild(copy);
      });
      tocHost.appendChild(list);
    } else {
      tocHost.parentElement.hidden = true;
    }
  }

  var params = new URLSearchParams(window.location.search);
  document.querySelectorAll("[data-utm]").forEach(function (input) {
    var key = input.getAttribute("data-utm");
    if (params.get(key)) input.value = params.get(key);
  });
  document.querySelectorAll("[data-referrer]").forEach(function (input) {
    if (document.referrer) input.value = document.referrer;
  });

  document.querySelectorAll("[data-lead-form]").forEach(function (form) {
    var success = form.querySelector("[data-success]");
    var error = form.querySelector("[data-error]");
    var button = form.querySelector("[type=submit]");
    form.addEventListener("focusin", function () {
      window.spectraTrack && window.spectraTrack("lead_form_started");
    }, { once: true });
    form.addEventListener("submit", function (event) {
      if (form.querySelector("[name=company_website]").value) {
        event.preventDefault();
        return;
      }
      if (form.getAttribute("data-lead-unconfigured") != null) {
        event.preventDefault();
        error && error.classList.add("is-visible");
        window.spectraTrack && window.spectraTrack("lead_form_submit_error");
        return;
      }
      event.preventDefault();
      if (button) {
        button.disabled = true;
        button.classList.add("is-loading");
      }
      var data = new FormData(form);
      fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      })
        .then(function (res) {
          if (!res.ok) throw new Error("request failed");
          success && success.classList.add("is-visible");
          error && error.classList.remove("is-visible");
          form.reset();
          window.spectraTrack && window.spectraTrack("lead_form_submit_success");
        })
        .catch(function () {
          error && error.classList.add("is-visible");
          window.spectraTrack && window.spectraTrack("lead_form_submit_error");
        })
        .finally(function () {
          if (button) {
            button.disabled = false;
            button.classList.remove("is-loading");
          }
        });
    });
  });
})();
