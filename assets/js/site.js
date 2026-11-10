/* Mills Carter — small progressive enhancements. Every link works without this file. */
(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var menuBtn = document.querySelector(".menu-toggle");
  var mobileQuery = window.matchMedia("(max-width: 960px)");

  /* Mobile menu */
  function setMenu(open) {
    if (!header || !menuBtn) return;
    header.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.querySelector(".menu-label").textContent = open ? "Close" : "Menu";
    document.body.classList.toggle("no-scroll", open);
  }
  if (menuBtn) {
    menuBtn.addEventListener("click", function () {
      setMenu(menuBtn.getAttribute("aria-expanded") !== "true");
    });
  }
  mobileQuery.addEventListener("change", function () { setMenu(false); closeSubs(); });

  /* Services submenu */
  var subItems = Array.prototype.slice.call(document.querySelectorAll(".nav-item.has-sub"));
  function closeSubs(except) {
    subItems.forEach(function (item) {
      if (item === except) return;
      item.classList.remove("is-open");
      var t = item.querySelector(".nav-sub-toggle");
      if (t) t.setAttribute("aria-expanded", "false");
    });
  }
  subItems.forEach(function (item) {
    var toggle = item.querySelector(".nav-sub-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function () {
      var open = !item.classList.contains("is-open");
      closeSubs(item);
      item.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("click", function (e) {
    if (mobileQuery.matches) return;
    if (!e.target.closest(".nav-item.has-sub")) closeSubs();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var openSub = document.querySelector(".nav-item.has-sub.is-open");
    if (openSub && !mobileQuery.matches) {
      closeSubs();
      openSub.querySelector(".nav-sub-toggle").focus();
    } else if (header && header.classList.contains("menu-open")) {
      setMenu(false);
      menuBtn.focus();
    }
  });

  /* Footer year */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());

  /* Gallery lightbox */
  var dialog = document.querySelector(".lightbox");
  if (dialog && typeof dialog.showModal === "function") {
    var big = dialog.querySelector("img");
    var cap = dialog.querySelector("p");
    document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        big.src = btn.getAttribute("data-lightbox");
        big.alt = btn.querySelector("img").alt;
        cap.textContent = btn.querySelector("img").alt;
        dialog.showModal();
      });
    });
    dialog.querySelector(".lightbox-close").addEventListener("click", function () { dialog.close(); });
    dialog.addEventListener("click", function (e) { if (e.target === dialog) dialog.close(); });
  } else if (dialog) {
    /* Very old browsers: open the large image directly */
    document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
      btn.addEventListener("click", function () { window.location.href = btn.getAttribute("data-lightbox"); });
    });
  }

  /* Contact form: validates, then hands the message to the visitor's email app.
     In the Wix build this form is replaced by a native Wix Form. */
  var form = document.querySelector("#contact-form");
  if (form) {
    var status = form.querySelector(".form-status");
    var messages = {
      firstName: "Enter your first name.",
      lastName: "Enter your last name.",
      email: "Enter an email address like name@company.com.",
      message: "Tell us a little about what you need."
    };
    function setError(field, msg) {
      var err = document.getElementById(field.id + "-error");
      field.setAttribute("aria-invalid", msg ? "true" : "false");
      if (err) err.textContent = msg || "";
    }
    form.querySelectorAll("input, textarea, select").forEach(function (field) {
      field.addEventListener("input", function () {
        if (field.getAttribute("aria-invalid") === "true" && field.checkValidity()) setError(field, "");
      });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstInvalid = null;
      form.querySelectorAll("[required]").forEach(function (field) {
        var ok = field.value.trim() !== "" && field.checkValidity();
        setError(field, ok ? "" : messages[field.name]);
        if (!ok && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) { firstInvalid.focus(); return; }

      var d = new FormData(form);
      var name = (d.get("firstName") + " " + d.get("lastName")).trim();
      var subject = "Website enquiry: " + (d.get("topic") || "General") + " (" + name + ")";
      var lines = [
        "Name: " + name,
        "Email: " + d.get("email"),
        "Company: " + (d.get("company") || "-"),
        "Topic: " + (d.get("topic") || "General"),
        "",
        d.get("message")
      ];
      var href = "mailto:inquiry@millscarter.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
      status.textContent = "Your email app should now open with your message ready to send. If nothing happens, email inquiry@millscarter.com directly.";
      window.location.href = href;
    });
  }
})();
