/* Oct 21 2026 audit: the lead popups on Journal and Destinations had fields with no label a screen reader
   could announce. This names any such field from its placeholder (or its name), and watches for popups
   added later. Fields that already have a label, aria-label or aria-labelledby are left alone. */
(function () {
  function nameFor(el) {
    var t = el.getAttribute('placeholder') || el.getAttribute('data-name') || el.getAttribute('name') || '';
    t = t.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
    if (!t || /^field( \d+)?$/i.test(t)) {
      if (el.tagName === 'SELECT') {
        var o = el.options && el.options[0];
        t = o ? o.text.trim() : '';
      }
    }
    return t;
  }
  function labelled(el) {
    if (el.getAttribute('aria-label') || el.getAttribute('aria-labelledby')) return true;
    if (el.closest('label')) return true;
    if (el.id) {
      try { if (document.querySelector('label[for="' + CSS.escape(el.id) + '"]')) return true; } catch (e) {}
    }
    return false;
  }
  function run(root) {
    var els = (root || document).querySelectorAll('input:not([type=hidden]):not([type=submit]):not([type=button]), textarea, select');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      if (labelled(el)) continue;
      var n = nameFor(el);
      if (n) el.setAttribute('aria-label', n);
    }
  }
  function start() {
    run(document);
    if (window.MutationObserver) {
      var pending = false;
      new MutationObserver(function () {
        if (pending) return;
        pending = true;
        setTimeout(function () { pending = false; run(document); }, 150);
      }).observe(document.body, { childList: true, subtree: true });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
