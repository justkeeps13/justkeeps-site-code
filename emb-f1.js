/* jkt-footer-polish-runtime-2026-09-03 */
try{
(function () {
  function polishFooter() {
    document.querySelectorAll("footer.footer_wrapper").forEach(function (footer) {
      var social = footer.querySelector(".socal_wrap");
      var bottom = footer.querySelector(".footer_bottom_wrap");
      if (social && bottom && social.parentElement !== bottom) bottom.appendChild(social);

      if (social) {
        social.setAttribute("aria-label", "Follow Justkeeps Travel");
        social.querySelectorAll('a[target="_blank"]').forEach(function (link) {
          link.setAttribute("rel", "noopener noreferrer");
        });
      }

      var brand = footer.querySelector(".footer_top_wrap > .footer_item:first-child");
      var logo = brand && brand.querySelector(".footer_logo");
      var journey = brand && brand.querySelector('a[href="/inquire"]');
      var isPhone = window.matchMedia("(max-width: 479px)").matches;
      if (brand) {
        if (isPhone) {
          brand.style.setProperty("grid-column", "1 / -1", "important");
          brand.style.setProperty("display", "flex", "important");
          brand.style.setProperty("flex-direction", "column", "important");
          brand.style.setProperty("align-items", "flex-start", "important");
          brand.style.setProperty("justify-content", "flex-start", "important");
          brand.style.setProperty("gap", "1.35rem", "important");
          brand.style.setProperty("width", "100%", "important");
        } else {
          ["grid-column", "display", "flex-direction", "align-items", "justify-content", "gap", "width"].forEach(function (property) {
            brand.style.removeProperty(property);
          });
        }
      }
      if (logo) logo.style.setProperty("margin", isPhone ? "0" : "", "important");
      if (journey) {
        journey.style.setProperty("margin", isPhone ? "0" : "", "important");
        journey.style.setProperty("align-self", isPhone ? "flex-start" : "", "important");
        journey.style.setProperty("left", isPhone ? "0" : "", "important");
        journey.style.setProperty("right", isPhone ? "auto" : "", "important");
      }
    });
  }

  function installMotion() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var selectors = [
      "main section .section_header",
      "main section .services_title",
      "main section .our_services_item_grid",
      "main section .example_journey_wrap",
      "main section .testimonial_box_wrap",
      "main section .featured_journeys_item",
      "main section .destinations_item",
      "main section .journal_item",
      "main section .what_we_do_item",
      "main section .our_process_item",
      "#jkt-home-master-content .jkh-intro__grid",
      "#jkt-home-master-content .jkh-section-head",
      "#jkt-home-master-content .jkh-intro__image",
      "#jkt-home-master-content .jkh-service",
      "#jkt-home-master-content .jkh-destination",
      "#jkt-home-master-content .jkh-human__image",
      "#jkt-home-master-content .jkh-human__copy",
      "#jkt-home-master-content .jkh-principle",
      "#jkt-home-master-content .jkh-journal-cms-slot",
      "#jkt-home-master-content .jkh-final__grid"
    ];

    var imageSelectors = [
      ".our_services_image_wrap",
      ".example_journey_image",
      ".testimonial_image_wrap",
      ".featured_journeys_image_wrap",
      ".destinations_image_wrap",
      ".jkh-service__image",
      ".jkh-destination__image",
      ".jkh-human__image"
    ];

    var targets = Array.prototype.slice.call(document.querySelectorAll(selectors.join(","))).filter(function (element) {
      if (element.closest(".hero_wrapper, .destinations_banner_wrapper, .featured_journeys_banner_wrapper, footer")) return false;
      return element.getClientRects().length > 0;
    });

    Array.prototype.slice.call(document.querySelectorAll(imageSelectors.join(","))).forEach(function (element) {
      if (!element.closest("main") || !element.getClientRects().length) return;
      element.setAttribute("data-jkt-image-reveal", "");
      if (targets.indexOf(element) === -1) targets.push(element);
    });

    var parentCounts = new Map();
    targets.forEach(function (element) {
      element.setAttribute("data-jkt-reveal", "");
      var parent = element.parentElement;
      var index = parentCounts.get(parent) || 0;
      parentCounts.set(parent, index + 1);
      element.style.setProperty("--jkt-delay", Math.min(index, 4) * 70 + "ms");
    });

    document.documentElement.classList.add("jkt-motion-ready");

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("jkt-in-view");
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: "0px 0px -7% 0px" });

    targets.forEach(function (element) {
      if (element.getBoundingClientRect().top < window.innerHeight * .9) element.classList.add("jkt-in-view");
      else observer.observe(element);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      polishFooter();
      installMotion();
    }, { once: true });
  } else {
    polishFooter();
    installMotion();
  }

  var footerResizeTimer;
  window.addEventListener("resize", function () {
    window.clearTimeout(footerResizeTimer);
    footerResizeTimer = window.setTimeout(polishFooter, 80);
  });
})();
}catch(e){console.warn("jkt embed block failed: jkt-footer-polish-runtime-2026-09-03",e)}

/* block */
try{
(function(){var p=(location.pathname||'/').replace(/\/+$/,'')||'/';if(!/^\/(journal|destinations)(?:\/|$)/.test(p))return;var data,loading;function c(x){return(x||'').replace(/\s+/g,' ').trim()}function get(){if(data)return Promise.resolve(data);if(loading)return loading;loading=fetch('/destinations').then(function(r){return r.text()}).then(function(h){var d=new DOMParser().parseFromString(h,'text/html'),seen={};data=Array.prototype.slice.call(d.querySelectorAll('a[href^="/destinations/"]')).map(function(a){var u=a.getAttribute('href')||'';if(!/^\/destinations\/[^/?#]+/.test(u)||seen[u])return null;seen[u]=1;var t=c((a.querySelector('h1,h2,h3,h4,h5,h6')||a).textContent);return{u:u,t:t,k:(t+' '+u).toLowerCase()}}).filter(Boolean);return data}).catch(function(){return data=[]});return loading}function bind(i){if(i.dataset.jktLateSearch)return;i.dataset.jktLateSearch='1';var native=/^(INPUT|TEXTAREA)$/.test(i.tagName),host=i.closest('form')||i.parentElement;if(!host)return;if(!native){var ph=i.getAttribute('aria-label')||c(i.textContent);i.setAttribute('contenteditable','true');i.setAttribute('data-jkt-placeholder',ph);i.classList.add('jkt-late-search-editable');i.textContent=''}if(getComputedStyle(host).position==='static')host.style.position='relative';var box=document.createElement('div');box.className='jkt-destination-suggestions';box.hidden=true;host.appendChild(box);function v(){return native?(i.value||''):c(i.textContent)}function hide(){box.hidden=true}function draw(list,q){box.innerHTML='<p class="jkt-destination-suggestions__title">'+(list.length?'DESTINATIONS · '+list.length+' MATCH'+(list.length===1?'':'ES'):'DESTINATIONS')+'</p>';if(!list.length){box.innerHTML+='<p class="jkt-destination-suggestions__empty">No destination found for “'+q+'”.</p>'}list.forEach(function(x){var a=document.createElement('a');a.className='jkt-destination-suggestions__item';a.href=x.u;var s=document.createElement('span');s.className='jkt-late-result';s.textContent=x.t;a.appendChild(s);box.appendChild(a)});box.hidden=false}function run(){var q=v(),k=q.toLowerCase();if(!k){hide();return}box.innerHTML='<p class="jkt-destination-suggestions__empty">Finding destinations…</p>';box.hidden=false;get().then(function(all){if(v()!==q)return;draw(all.filter(function(x){return x.k.indexOf(k)>-1}).slice(0,5),q)})}function go(){var a=box.querySelector('a');location.href=a?a.href:'/destinations?search='+encodeURIComponent(v())}i.addEventListener('input',run);i.addEventListener('focus',run);i.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();go()}if(e.key==='Escape')hide()});if(host.tagName==='FORM')host.addEventListener('submit',function(e){e.preventDefault();go()});document.addEventListener('click',function(e){if(!host.contains(e.target))hide()})}function scan(){Array.prototype.slice.call(document.querySelectorAll('input[placeholder],div[role="textbox"][aria-label]')).filter(function(i){return/search (cities|destinations)/i.test((i.getAttribute('placeholder')||'')+' '+(i.getAttribute('aria-label')||''))}).forEach(bind)}scan();var o=new MutationObserver(scan);o.observe(document.body,{subtree:true,childList:true});setTimeout(function(){o.disconnect()},9000)})();
}catch(e){console.warn("jkt embed block failed: block",e)}

/* jkt-journal-byline-2026-10-16 */
try{
(function(){var p=(location.pathname||'').replace(/\/+$/,'');if(p.indexOf('/journal/')!==0)return;var map={'/journal/paris-is-always-a-good-idea':'ADAPTED FROM MARY JO SHORE FOR JUSTKEEPS TRAVEL','/journal/wish-masters-justin-keeperman-is-miamis-most-connected-travel-insider':'ARCHIVED FROM MIAMI MAGAZINE, BY NILA DO SIMON','/journal/a-list-bliss-archived-modern-luxury-brides-profile':'Archived from Modern Luxury Brides'};var want=map[p]||'Written by Justin Keeperman';function fix(){var s=document.querySelector('.jkt2-byline span');if(s&&/^\s*Written by Just\s*keeps\s*$/i.test(s.textContent))s.textContent=want}var o=new MutationObserver(fix);o.observe(document.documentElement,{childList:true,subtree:true});fix();setTimeout(function(){o.disconnect()},15000)})();
}catch(e){console.warn("jkt embed block failed: jkt-journal-byline-2026-10-16",e)}
