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
    try { var url = new URL(value, location.origin); return url.origin + url.pathname; }
    catch (_) { return ""; }
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
    if (!form || form.dataset.jktLeadMeasurementBound) return;
    var wrapper = form.closest(".w-form");
    var success = wrapper && wrapper.querySelector(".w-form-done");
    var failure = wrapper && wrapper.querySelector(".w-form-fail");
    if (!success) return;
    form.dataset.jktLeadMeasurementBound = "true";
    var pending = false;
    var failureWasVisible = visible(failure);
    function inspect() {
      if (!pending) return;
      if (visible(success)) {
        pending = false;
        send("generate_lead", { form_id: "inquiry_form", lead_source: "website_inquiry" });
        return;
      }
      var failed = visible(failure);
      if (failed && !failureWasVisible) pending = false;
      failureWasVisible = failed;
    }
    form.addEventListener("submit", function () {
      if (!form.checkValidity() || visible(success)) return;
      pending = true;
      failureWasVisible = visible(failure);
    }, true);
    var observer = new MutationObserver(inspect);
    observer.observe(wrapper, {
      subtree: true, childList: true, attributes: true,
      attributeFilter: ["style", "class", "hidden", "aria-hidden"]
    });
  }
  document.addEventListener("click", function (event) {
    if (event.isTrusted === false) return;
    var target = event.target;
    var anchor = target && target.closest ? target.closest('a[href^="tel:"]') : null;
    if (!anchor) return;
    var now = Date.now();
    if (now - lastPhoneClick < 1500) return;
    if (send("phone_click", { contact_method: "phone" })) lastPhoneClick = now;
  }, true);
  function boot() {
    bindInquiry();
    // The form is initially native; retry for the site's delayed layout setup.
    [500, 1500, 3000].forEach(function (delay) { window.setTimeout(bindInquiry, delay); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
})();
