/* Justkeeps Travel: consent-aware inquiry and phone measurement. */
(function () {
  "use strict";
  if (window.__jktLeadTrackingInstalled) return;
  window.__jktLeadTrackingInstalled = true;

  var measurementId = "G-DRKW1HV2MF";
  var lastPhoneClick = -Infinity;

  function allowed() {
    return window.__jktConsent === "all" && typeof window.gtag === "function";
  }

  function cleanUrl(value) {
    if (!value) return "";
    try {
      var url = new URL(value, location.origin);
      return url.origin + url.pathname;
    } catch (_) {
      return "";
    }
  }

  function send(name, parameters) {
    if (!allowed()) return false;
    parameters.send_to = measurementId;
    parameters.page_location = cleanUrl(location.href);
    parameters.page_referrer = cleanUrl(document.referrer);
    parameters.transport_type = "beacon";
    window.gtag("event", name, parameters);
    return true;
  }

  function visible(element) {
    if (!element || !element.isConnected || element.hidden) return false;
    var style = window.getComputedStyle(element);
    return style.display !== "none" && style.visibility !== "hidden";
  }

  function bindInquiry() {
    var form = document.getElementById("inquiry_form");
    if (!form) return "missing";
    if (form.dataset.jktLeadMeasurementBound) return "bound";

    var wrapper = form.closest(".w-form");
    var success = wrapper && wrapper.querySelector(".w-form-done");
    var failure = wrapper && wrapper.querySelector(".w-form-fail");
    if (!success) return "pending";

    form.dataset.jktLeadMeasurementBound = "true";

    var pending = false;
    var leadSent = false;
    var failureWasVisible = visible(failure);
    var pollTimer = null;

    function sendLeadOnce() {
      if (leadSent) return true;
      if (!send("generate_lead", {
        form_id: "inquiry_form",
        lead_source: "website_inquiry"
      })) return false;
      leadSent = true;
      return true;
    }

    function deliverLead(remaining) {
      if (sendLeadOnce() || remaining <= 0) return;
      window.setTimeout(function () {
        deliverLead(remaining - 1);
      }, 250);
    }

    function stopPolling() {
      if (pollTimer) window.clearTimeout(pollTimer);
      pollTimer = null;
    }

    function inspect() {
      if (!pending || leadSent) return;

      if (visible(success)) {
        pending = false;
        stopPolling();
        deliverLead(8);
        return;
      }

      var failed = visible(failure);
      if (failed && !failureWasVisible) {
        pending = false;
        stopPolling();
      }
      failureWasVisible = failed;
    }

    function pollForOutcome() {
      if (pollTimer) return;
      var attempts = 0;

      function tick() {
        pollTimer = null;
        inspect();
        if (pending && attempts++ < 24) {
          pollTimer = window.setTimeout(tick, 250);
        }
      }

      tick();
    }

    function arm() {
      if (!form.checkValidity() || visible(success)) return;
      pending = true;
      failureWasVisible = visible(failure);
      inspect();
      if (pending) pollForOutcome();
    }

    form.addEventListener("submit", arm, true);
    form.addEventListener("click", function (event) {
      var target = event.target;
      var submitControl = target && target.closest
        ? target.closest('input[type="submit"],button[type="submit"],.w-button')
        : null;
      if (submitControl && form.contains(submitControl)) arm();
    }, true);

    var observer = new MutationObserver(inspect);
    observer.observe(wrapper, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["style", "class", "hidden", "aria-hidden"]
    });

    return "bound";
  }

  document.addEventListener("click", function (event) {
    if (event.isTrusted === false) return;

    var target = event.target;
    var anchor = target && target.closest
      ? target.closest('a[href^="tel:"]')
      : null;
    if (!anchor) return;

    var now = Date.now();
    if (now - lastPhoneClick < 1500) return;
    if (send("phone_click", { contact_method: "phone" })) lastPhoneClick = now;
  }, true);

  function retryInquiryBinding(delays) {
    if (!delays.length) return;
    window.setTimeout(function () {
      if (bindInquiry() === "pending") retryInquiryBinding(delays.slice(1));
    }, delays[0]);
  }

  function boot() {
    if (bindInquiry() === "pending") retryInquiryBinding([500, 1000, 1500]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();