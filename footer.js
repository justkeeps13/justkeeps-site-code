/* jkt-destinations-crawlable-links-2026-09-25 */
try{
(function(){if(location.pathname.replace(/\/+$/,'')!='/destinations')return;function f(){var s=[].slice.call(document.querySelectorAll('.destinations_wrapper .destinations_curated_item'));[].slice.call(document.querySelectorAll('#jkx button.jkx__card')).forEach(function(b){var n=((b.querySelector('h3')||{}).textContent||'').replace(/\s+/g,' ').trim(),x=s.find(function(i){return (((i.querySelector('h3')||{}).textContent||'').replace(/\s+/g,' ').trim())===n});if(!x)return;var a=document.createElement('a'),j,q;for(j=0;j<b.attributes.length;j++){q=b.attributes[j];if(q.name!='type'&&q.name!='onclick')a.setAttribute(q.name,q.value)}a.href=x.getAttribute('href');a.setAttribute('data-jkt-direct-card','1');a.setAttribute('data-jkt-crawlable-link','1');a.setAttribute('aria-label',n+' destination guide');a.style.cssText='text-decoration:none;color:inherit';while(b.firstChild)a.appendChild(b.firstChild);b.replaceWith(a)})}function g(){f();var r=document.getElementById('jkx');if(r)new MutationObserver(f).observe(r,{childList:true,subtree:true})}document.readyState=='loading'?document.addEventListener('DOMContentLoaded',g):g();[250,900,2200,4500].forEach(function(t){setTimeout(f,t)})})();
}catch(e){console.warn("jkt block failed: jkt-destinations-crawlable-links-2026-09-25",e)}

/* jkt-services-menu-repair-2026-09-27 */
try{
(function(){  function init(){    Array.prototype.forEach.call(document.querySelectorAll('[data-jkt-services-arrow="true"]'),function(toggle){      if(toggle.dataset.jktServicesMenuRepair)return;      var menu=document.getElementById(toggle.getAttribute('aria-controls'));      var root=toggle.closest('.w-dropdown');      if(!menu||!root)return;      toggle.dataset.jktServicesMenuRepair='true';      function setOpen(open){        toggle.setAttribute('aria-expanded',open?'true':'false');        toggle.classList.toggle('w--open',open);        menu.classList.toggle('w--open',open);      }      function close(){setOpen(false);}      function activate(event){        event.preventDefault();        event.stopImmediatePropagation();        setOpen(toggle.getAttribute('aria-expanded')!=='true');      }      toggle.addEventListener('click',activate,true);      toggle.addEventListener('keydown',function(event){        if(event.key==='Enter'||event.key===' '||event.key==='ArrowDown'){activate(event);}        else if(event.key==='Escape'){event.preventDefault();close();}      },true);      document.addEventListener('click',function(event){if(!root.contains(event.target))close();});      document.addEventListener('keydown',function(event){if(event.key==='Escape')close();});    });  }  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();  window.addEventListener('load',init,{once:true});})();
;(function(){
  var page=location.pathname;
  if(page.length>1 && page.slice(-1)==='/') page=page.slice(0,-1);
  if(page!=='/journal') return;
  function wording(value){
    return String(value)
      .split('ALL JOURNALS').join('ALL ARTICLES')
      .split(' guides').join(' articles')
      .split(' GUIDES').join(' ARTICLES')
      .replace(/^(1) GUIDE$/,'$1 ARTICLE')
      .split('journal guide').join('journal article');
  }
  function updateJournalLanguage(){
    var root=document.getElementById('jkg');
    if(!root) return;
    Array.prototype.forEach.call(root.querySelectorAll('*'),function(el){
      var grid=el.closest('.jkt-journal-grid');
      if(grid && grid!==el) return;
      if(el.children.length===0 && el.textContent){
        var next=wording(el.textContent);
        if(next!==el.textContent) el.textContent=next;
      }
      ['aria-label','title'].forEach(function(attribute){
        var value=el.getAttribute(attribute);
        if(value) el.setAttribute(attribute,wording(value));
      });
    });
  }
  function installMobileSpacing(){
    if(document.getElementById('jkt-journal-mobile-spacing-2026-09-27')) return;
    var style=document.createElement('style');
    style.id='jkt-journal-mobile-spacing-2026-09-27';
    style.textContent='@media (max-width: 767px){.destinations_banner_wrapper,.destinations_banner_wrapper .destinations_banner_bg,.destinations_banner_wrapper .destinations_banner_image,.destinations_banner_wrapper .destinations_banner_overlay{height:440px!important;min-height:440px!important}.destinations_banner_wrapper .padding-global.height_100,.destinations_banner_wrapper .container-large.height_100{height:360px!important;min-height:360px!important}#jkg .jkg__find{padding:14px 20px 12px!important}#jkg .jkg__eyebrow{display:none!important}}';
    document.head.appendChild(style);
  }
  function forceMobileBannerHeight(){
    if(!window.matchMedia('(max-width: 767px)').matches) return;
    ['.destinations_banner_wrapper','.destinations_banner_wrapper .destinations_banner_bg','.destinations_banner_wrapper .destinations_banner_image','.destinations_banner_wrapper .destinations_banner_overlay'].forEach(function(selector){
      Array.prototype.forEach.call(document.querySelectorAll(selector),function(el){
        el.style.setProperty('height','440px','important');
        el.style.setProperty('min-height','440px','important');
      });
    });
    ['.destinations_banner_wrapper .padding-global.height_100','.destinations_banner_wrapper .container-large.height_100'].forEach(function(selector){
      Array.prototype.forEach.call(document.querySelectorAll(selector),function(el){
        el.style.setProperty('height','360px','important');
        el.style.setProperty('min-height','360px','important');
      });
    });
  }
  function start(){
    installMobileSpacing();
    forceMobileBannerHeight();
    updateJournalLanguage();
    var root=document.getElementById('jkg');
    if(root){
      var queued=false;
      new MutationObserver(function(){
        if(queued) return;
        queued=true;
        requestAnimationFrame(function(){queued=false;updateJournalLanguage();});
      }).observe(root,{childList:true,subtree:true,characterData:true});
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();
}catch(e){console.warn("jkt block failed: jkt-services-menu-repair-2026-09-27",e)}

/* jkt-destination-gate-2026-09-11 */
try{
(function(){
  "use strict";
  var PAGE="6a2bd4ee7e0c8c8a15b02699",PATH=(location.pathname||"/").replace(/\/+$/,"")||"/",KEY="jkt-destination-guide-access-v1",FINAL="jkt-destination-gate-final-2026-09-11";
  if(PATH!=="/destinations"||document.documentElement.getAttribute("data-wf-page")!==PAGE)return;
  if(window.__jktDestinationGateBooted)return;
  window.__jktDestinationGateBooted=true;
  function clean(v){return String(v||"").replace(/\s+/g," ").trim();}
  function cookie(){try{return typeof document.cookie==="string"?document.cookie:""}catch(e){return""}}
  function allowed(){return cookie().split(";").some(function(part){return part.trim()===KEY+"=1";});}
  function setAccess(){try{document.cookie=KEY+"=1; max-age=31536000; path=/; SameSite=Lax"}catch(e){}}
  function findHref(name){
    var wanted=clean(name).toLowerCase(),items=Array.prototype.slice.call(document.querySelectorAll(".destinations_wrapper .destinations_curated_item"));
    var hit=items.find(function(item){var h=item.querySelector("h3");return h&&clean(h.textContent).toLowerCase()===wanted;});
    var raw=hit&&(hit.getAttribute("href")||(hit.querySelector("a[href]")||{}).getAttribute("href"));
    try{return raw?new URL(raw,location.origin).pathname.replace(/\/$/,""):""}catch(e){return""}
  }
  function infoFrom(card){
    var heading=card.querySelector("h3,h2,h1"),image=card.querySelector("img"),destination=clean(heading&&heading.textContent)||"Destination";
    return{destination:destination,title:destination+" Destination Guide",href:findHref(destination),image:image?(image.currentSrc||image.src):"",alt:image?clean(image.alt):""};
  }
  function makeField(type,name,labelText,placeholder,id,required){
    var wrap=document.createElement("div");wrap.className="jkt-dest-final-field";
    var label=document.createElement("label");label.htmlFor=id;label.textContent=labelText+" ";
    if(required){var star=document.createElement("span");star.className="jkt-dest-final-required";star.textContent="*";label.appendChild(star)}else{var optional=document.createElement("span");optional.className="jkt-dest-final-optional";optional.textContent="(optional)";label.appendChild(optional)}
    var input=document.createElement("input");input.type=type;input.name=name;input.id=id;input.placeholder=placeholder;input.autocomplete=name;input.maxLength=type==="email"?254:120;if(required)input.required=true;
    wrap.appendChild(label);wrap.appendChild(input);return{wrap:wrap,input:input};
  }
  function nativeForm(){return document.querySelector('form[data-name="Destination Guide Gate"],form[name="wf-form-Destination-Guide-Gate"]');}
  function setNativeField(form,name,value){
    var input=Array.prototype.slice.call(form.querySelectorAll("input,textarea,select")).find(function(el){return el.name===name||el.getAttribute("data-jkt-destination-meta")===name;});
    if(!input){input=document.createElement("input");input.type="hidden";input.name=name;input.setAttribute("data-jkt-destination-meta",name);form.appendChild(input)}
    input.value=value||"";input.dispatchEvent(new Event("input",{bubbles:true}));input.dispatchEvent(new Event("change",{bubbles:true}));return input;
  }
  function visible(el){if(!el)return false;var style=window.getComputedStyle(el);return style.display!=="none"&&style.visibility!=="hidden";}
  function waitForNativeResult(form,onSuccess,onFailure){
    var wrapper=form.closest(".w-form")||form.parentElement,success=wrapper&&wrapper.querySelector(".w-form-done"),failure=wrapper&&wrapper.querySelector(".w-form-fail"),finished=false,observer=null,timer=null;
    function stop(){finished=true;if(observer)observer.disconnect();if(timer)window.clearTimeout(timer)}
    function inspect(){if(finished)return;if(visible(success)){stop();onSuccess();}else if(visible(failure)){stop();onFailure();}}
    if(!wrapper){onFailure();return}
    observer=new MutationObserver(inspect);observer.observe(wrapper,{attributes:true,childList:true,subtree:true,attributeFilter:["style","class","aria-hidden"]});
    [100,350,800,1500,3000,6000,10000].forEach(function(ms){window.setTimeout(inspect,ms)});
    timer=window.setTimeout(function(){if(!finished){stop();onFailure()}},15000);
    inspect();
  }
  function build(){
    var existing=document.getElementById(FINAL);if(existing&&existing.__jktReady)return existing;
    var modal=document.createElement("div");modal.id=FINAL;modal.setAttribute("role","dialog");modal.setAttribute("aria-modal","true");modal.setAttribute("aria-hidden","true");
    var card=document.createElement("div");card.className="jkt-dest-final-card";card.setAttribute("role","document");
    var image=document.createElement("img");image.className="jkt-dest-final-image";image.alt="";image.loading="eager";image.decoding="async";
    var content=document.createElement("div");content.className="jkt-dest-final-content";
    var title=document.createElement("h2");title.className="jkt-dest-final-title";
    var gate=document.createElement("section");gate.className="jkt-dest-final-gate";
    card.appendChild(image);card.appendChild(content);content.appendChild(title);content.appendChild(gate);modal.appendChild(card);document.body.appendChild(modal);
    modal.__jktReady=true;
    modal.__open=function(info){
      title.textContent=info.title;image.src=info.image||"";image.alt=info.alt||info.title;gate.innerHTML="";
      var kicker=document.createElement("p");kicker.className="jkt-dest-final-kicker";kicker.textContent="BEFORE YOU READ";
      var intro=document.createElement("p");intro.className="jkt-dest-final-intro";intro.textContent="Want occasional travel inspiration from Justkeeps? Share your details to continue.";
      var form=document.createElement("form");form.className="jkt-dest-final-form";form.noValidate=true;
      var n=makeField("text","name","Name","Your name","jkt-dest-final-name",true),em=makeField("email","email","Email","you@example.com","jkt-dest-final-email",true),ph=makeField("tel","Phone","Phone","Optional","jkt-dest-final-phone",false),tim=makeField("text","Travel Timing","Travel timing","Month, season, or flexible","jkt-dest-final-timing",false);
      var consent=document.createElement("label");consent.className="jkt-dest-final-consent";var check=document.createElement("input");check.type="checkbox";check.required=true;var consentText=document.createElement("span");consentText.textContent="Yes, send me occasional Justkeeps travel notes. ";var cstar=document.createElement("span");cstar.className="jkt-dest-final-required";cstar.textContent="*";consentText.appendChild(cstar);consent.appendChild(check);consent.appendChild(consentText);
      var error=document.createElement("p");error.className="jkt-dest-final-error";error.setAttribute("role","alert");
      var actions=document.createElement("div");actions.className="jkt-dest-final-actions";
      var submit=document.createElement("button");submit.type="submit";submit.className="jkt-dest-final-submit";submit.textContent="SUBMIT & VIEW GUIDE";
      var skip=document.createElement("button");skip.type="button";skip.className="jkt-dest-final-skip";skip.textContent="NO THANKS, JUST SHOW ME THE GUIDE";
      actions.appendChild(submit);actions.appendChild(skip);form.appendChild(n.wrap);form.appendChild(em.wrap);form.appendChild(ph.wrap);form.appendChild(tim.wrap);form.appendChild(consent);form.appendChild(error);form.appendChild(actions);gate.appendChild(kicker);gate.appendChild(intro);gate.appendChild(form);
      skip.addEventListener("click",function(){setAccess();window.location.assign(info.href)});
      form.addEventListener("submit",function(e){
        e.preventDefault();error.textContent="";
        if(!clean(n.input.value)){error.textContent="Please enter your name.";n.input.focus();return}
        if(!em.input.checkValidity()){error.textContent="Please enter a valid email address.";em.input.focus();return}
        if(!check.checked){error.textContent="Please check the opt-in box to continue.";check.focus();return}
        var native=nativeForm();if(!native){error.textContent="This guide is not ready yet. Please try again shortly.";return}
        var nativeName=native.querySelector('input[name="name"]'),nativeEmail=native.querySelector('input[name="email"]'),nativePhone=native.querySelector('input[name="Phone"]'),nativeOpt=native.querySelector('input[name="Newsletter-Opt-In"]'),nativeSubmit=native.querySelector('input[type="submit"],button[type="submit"]');
        if(!nativeName||!nativeEmail||!nativeOpt||!nativeSubmit){error.textContent="This guide is not ready yet. Please try again shortly.";return}
        submit.disabled=true;submit.textContent="SENDING...";nativeName.value=clean(n.input.value);nativeEmail.value=clean(em.input.value).toLowerCase();if(nativePhone)nativePhone.value=clean(ph.input.value);nativeOpt.checked=true;
        [nativeName,nativeEmail,nativePhone,nativeOpt].filter(Boolean).forEach(function(field){field.dispatchEvent(new Event("input",{bubbles:true}));field.dispatchEvent(new Event("change",{bubbles:true}))});
        setNativeField(native,"form_type","Destination Guide Gate");setNativeField(native,"lead_source","Destination Guide");setNativeField(native,"Group","Destination Guides");setNativeField(native,"Destination",info.destination);setNativeField(native,"Destination URL",info.href);setNativeField(native,"Source","JustKeeps Travel Destination Gate");setNativeField(native,"Travel Timing",clean(tim.input.value));setNativeField(native,"Article URL",info.href);
        waitForNativeResult(native,function(){setAccess();gate.innerHTML="";var success=document.createElement("p");success.className="jkt-dest-final-success";success.setAttribute("role","status");success.textContent="Thank you. Opening your guide.";gate.appendChild(success);window.setTimeout(function(){window.location.assign(info.href)},250)},function(){submit.disabled=false;submit.textContent="SUBMIT & VIEW GUIDE";error.textContent="We couldn’t send that just yet. Please try again."});
        try{if(typeof native.requestSubmit==="function")native.requestSubmit(nativeSubmit);else nativeSubmit.click()}catch(err){submit.disabled=false;submit.textContent="SUBMIT & VIEW GUIDE";error.textContent="We couldn’t send that just yet. Please try again."}
      });
      modal.classList.add("is-open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";window.setTimeout(function(){n.input.focus()},0);
    };
    return modal;
  }
  function openFrom(card){var info=infoFrom(card);if(!info.href)return;if(allowed()){window.location.assign(info.href);return}var modal=build();modal.__open(info)}
  document.addEventListener("click",function(e){var target=e.target,card=target&&target.closest?target.closest("#jkx .jkx__card"):null;if(!card)return;var info=infoFrom(card);if(!info.href||allowed())return;e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();openFrom(card)},true);
})();
}catch(e){console.warn("jkt block failed: jkt-destination-gate-2026-09-11",e)}

/* jkt-services-direct-link-2026-09-11 */
try{
(function(){
  function installStyle(){
    if(document.getElementById("jkt-services-split-link-style"))return;
    var style=document.createElement("style");
    style.id="jkt-services-split-link-style";
    style.textContent=".navbar .w-dropdown[data-jkt-services-split=\"true\"]{position:relative}.navbar .w-dropdown[data-jkt-services-split=\"true\"]>.jkt-services-main-link{position:absolute!important;top:0;right:42px;bottom:auto;left:0;width:auto!important;height:var(--jkt-services-toggle-height,42px)!important;box-sizing:border-box;z-index:4;display:flex!important;align-items:center;justify-content:center;white-space:nowrap}.navbar .w-dropdown[data-jkt-services-split=\"true\"]>.w-dropdown-toggle{position:relative;z-index:2}.navbar .w-dropdown[data-jkt-services-split=\"true\"]>.w-dropdown-toggle .jkt-services-toggle-label{visibility:hidden!important}@media screen and (max-width:991px){.navbar .w-dropdown[data-jkt-services-split=\"true\"]>.jkt-services-main-link{color:#1b2022!important;text-shadow:none!important}}";
    document.head.appendChild(style);
  }
  function sync(dropdown,toggle){
    var height=toggle.getBoundingClientRect().height;
    if(height)dropdown.style.setProperty("--jkt-services-toggle-height",height+"px");
  }
  function split(){
    installStyle();
    document.querySelectorAll(".navbar .w-dropdown-toggle").forEach(function(toggle){
      var dropdown=toggle.closest(".w-dropdown");
      if(!dropdown)return;
      var split=dropdown.hasAttribute("data-jkt-services-split");
      if(split){sync(dropdown,toggle);return;}
      var link=toggle.querySelector('a[href*="/services"]');
      if(!link)return;
      var label=(toggle.textContent||"").replace(/\s+/g," ").trim().toLowerCase();
      if(label.indexOf("services")===-1)return;
      var labelSpan=document.createElement("span");
      labelSpan.className=(link.className||"")+" jkt-services-toggle-label";
      labelSpan.textContent=link.textContent||"Services";
      labelSpan.setAttribute("aria-hidden","true");
      link.replaceWith(labelSpan);
      var mainLink=link.cloneNode(true);
      mainLink.className=(link.className||"")+" jkt-services-main-link";
      mainLink.removeAttribute("data-jkt-services-direct-link");
      mainLink.setAttribute("aria-label","Services");
      dropdown.insertBefore(mainLink,toggle);
      dropdown.setAttribute("data-jkt-services-split","true");
      toggle.setAttribute("aria-label","Open Services menu");
      toggle.setAttribute("data-jkt-services-arrow","true");
      sync(dropdown,toggle);
    });
  }
  function start(){
    split();
    window.addEventListener("resize",split);
    new MutationObserver(split).observe(document.documentElement,{childList:true,subtree:true});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();
}catch(e){console.warn("jkt block failed: jkt-services-direct-link-2026-09-11",e)}

/* jkt-planning-pillars-surface-2026-10-03 */
try{
(function(){
  function paint(){document.querySelectorAll('.jksection').forEach(function(s){if(s.querySelector('.jkgrid'))s.style.setProperty('background-color','#eee9df','important')});document.querySelectorAll('.fishsection').forEach(function(s){if(/coordinates/i.test(s.textContent||''))s.style.setProperty('background-color','#eee9df','important')})}
  function repairNavId(){document.querySelectorAll('script#jkt-clients-nav-2026-09-14').forEach(function(node){node.id='jkt-clients-nav-runtime-2026-09-14'})}
  function schema(){/* removed 2026-10-05: duplicate #organization node; the home page JSON-LD already carries it */}
  function run(){paint();repairNavId();schema()}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});else run();[0,300,1000,2200].forEach(function(t){setTimeout(run,t)})
})();
}catch(e){console.warn("jkt block failed: jkt-planning-pillars-surface-2026-10-03",e)}

/* jkt-city-bali-hooks-2026-10-03 */
try{
(function(){function f(){var m=document.querySelector('main[data-jkt-city-page="true"]');if(!m)return;document.documentElement.classList.add('jkt-city-bali-ready');var i=m.querySelector('[data-jkt-city-intro="true"]');if(i){var p=i.querySelector('p');if(p)p.classList.add('jkt-city-kicker');var h=i.querySelector('h1');if(h)h.classList.add('text-color-white','text-weight-light');var l=i.querySelector('p:not(:first-child)');if(l)l.classList.add('fishlead','jkt-city-lead')}var n=m.querySelector('nav[aria-label="In this story"]');if(n){n.classList.add('jkt2-toc','jkt-city-toc');Array.prototype.forEach.call(n.querySelectorAll('a'),function(a){var s=a.querySelectorAll('span');if(s[0])s[0].classList.add('jkt-city-toc-num');if(s[2])s[2].classList.add('jkt-city-toc-arrow')})}}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',f,{once:true});else f();window.addEventListener('load',f,{once:true})})();
}catch(e){console.warn("jkt block failed: jkt-city-bali-hooks-2026-10-03",e)}

/* jkt-search-thumb-fix-2026-10-04 */
try{
(function(){var p=null;function load(){if(p)return p;p=fetch("/destinations",{credentials:"same-origin"}).then(function(r){return r.text()}).then(function(h){var d=new DOMParser().parseFromString(h,"text/html"),m={};d.querySelectorAll('a[href*="/destinations/"]').forEach(function(a){var i=a.querySelector("img");if(!i)return;var k=new URL(a.getAttribute("href"),location.origin).pathname;if(!m[k])m[k]=i.getAttribute("src");});return m;}).catch(function(){return {}});return p}function fix(root){if(!root||!root.querySelectorAll)return;var o=root.querySelectorAll("a.jkt-service-destination-option");if(!o.length)return;load().then(function(m){o.forEach(function(a){var k=new URL(a.getAttribute("href"),location.origin).pathname,i=a.querySelector("img");if(i&&m[k]&&i.getAttribute("src")!==m[k])i.src=m[k];});});}document.addEventListener("focusin",function(e){if(e.target&&e.target.classList&&e.target.classList.contains("jkt-service-destination-input"))load();});new MutationObserver(function(ms){ms.forEach(function(x){x.addedNodes.forEach(function(n){if(n.nodeType===1)fix(n.matches&&n.matches("a.jkt-service-destination-option")?n.parentNode:n);});});}).observe(document.documentElement,{childList:true,subtree:true});})();
}catch(e){console.warn("jkt block failed: jkt-search-thumb-fix-2026-10-04",e)}

/* jkt-rel-fold */
try{
(function(){function f(){document.querySelectorAll("section[data-jkt-rel]").forEach(function(s){if(s.getAttribute("data-folded"))return;var h=s.querySelector("h2"),g=s.querySelector(".jkt-rel-grid");if(!h||!g)return;s.setAttribute("data-folded","1");var d=document.createElement("details");d.className="jkt-rel-fold";var sm=document.createElement("summary");s.insertBefore(d,h);sm.appendChild(h);d.appendChild(sm);d.appendChild(g);});}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",f);else f();})();
}catch(e){console.warn("jkt block failed: jkt-rel-fold",e)}

/* jkt-entertainment-hub-schema-loader-2026-10-06 */
try{
(function(){if(location.pathname!="/services/entertainment")return;var d={"@context":"https://schema.org","@graph":[{"@type":"Service","@id":"https://www.justkeepstravel.com/services/entertainment#service","name":"Entertainment Travel Agent and Global Production Travel","serviceType":["Entertainment travel agent","Global touring travel","Production travel"],"provider":{"@id":"https://www.justkeepstravel.com/#organization"},"areaServed":{"@type":"Place","name":"Worldwide"},"url":"https://www.justkeepstravel.com/services/entertainment"},{"@type":"Person","@id":"https://www.justkeepstravel.com/about#justin-keeperman","name":"Justin Keeperman","jobTitle":"Founder and Entertainment Travel Agent","url":"https://www.justkeepstravel.com/about","worksFor":{"@id":"https://www.justkeepstravel.com/#organization"}},{"@type":"TravelAgency","@id":"https://www.justkeepstravel.com/#organization","name":"Justkeeps Travel","url":"https://www.justkeepstravel.com/","founder":{"@id":"https://www.justkeepstravel.com/about#justin-keeperman"}},{"@type":"ItemList","@id":"https://www.justkeepstravel.com/services/entertainment#markets","name":"Entertainment travel markets","itemListElement":[{"@type":"ListItem","position":1,"name":"Los Angeles","url":"https://www.justkeepstravel.com/best-los-angeles-entertainment-travel-agent"},{"@type":"ListItem","position":2,"name":"Beverly Hills","url":"https://www.justkeepstravel.com/best-beverly-hills-entertainment-travel-agent"},{"@type":"ListItem","position":3,"name":"Tennessee","url":"https://www.justkeepstravel.com/best-tennessee-entertainment-travel-agent"},{"@type":"ListItem","position":4,"name":"Nashville","url":"https://www.justkeepstravel.com/best-nashville-entertainment-travel-agent"},{"@type":"ListItem","position":5,"name":"New York","url":"https://www.justkeepstravel.com/best-new-york-entertainment-travel-agent"},{"@type":"ListItem","position":6,"name":"New York City","url":"https://www.justkeepstravel.com/best-new-york-city-entertainment-travel-agent"},{"@type":"ListItem","position":7,"name":"Atlanta","url":"https://www.justkeepstravel.com/best-atlanta-entertainment-travel-agent"},{"@type":"ListItem","position":8,"name":"Las Vegas","url":"https://www.justkeepstravel.com/best-las-vegas-entertainment-travel-agent"},{"@type":"ListItem","position":9,"name":"Miami","url":"https://www.justkeepstravel.com/best-miami-entertainment-travel-agent"},{"@type":"ListItem","position":10,"name":"Chicago","url":"https://www.justkeepstravel.com/best-chicago-entertainment-travel-agent"}]}]};var s=document.createElement("script");s.type="application/ld+json";s.id="jkt-entertainment-hub-schema";s.textContent=JSON.stringify(d);document.head.appendChild(s)})();
}catch(e){console.warn("jkt block failed: jkt-entertainment-hub-schema-loader-2026-10-06",e)}

/* jkt-clients-nav-and-consent-fix-2026-10-09 */
try{
(function(){if(window.jktUxFix)return;window.jktUxFix=1;
var S='html body div[style*="2147483647"]:has(>[data-v])';
var css=S+'{left:24px!important;right:auto!important;bottom:24px!important;width:auto!important;max-width:380px!important;grid-template-columns:1fr 1fr!important;row-gap:10px!important;column-gap:8px!important;padding:16px 18px!important}'+S+'>b{grid-area:1/1/2/3!important}'+S+'>p{grid-area:2/1/3/3!important;padding-right:0!important}'+S+'>button{grid-row:3!important;grid-column:auto!important;width:100%!important;margin:0!important}@media(max-width:600px){'+S+'{left:12px!important;right:12px!important;bottom:12px!important;max-width:none!important}}';
var st=document.createElement('style');st.id='jkt-ux-fix-2026-10-09';st.textContent=css;(document.head||document.documentElement).appendChild(st);
function clean(b){b.style.removeProperty('color');b.style.removeProperty('-webkit-text-fill-color')}
function init(){var b=document.querySelector('.navbar .jkt-clients-nav-trigger');if(!b)return false;clean(b);new MutationObserver(function(){if(b.style.color||b.style.webkitTextFillColor)clean(b)}).observe(b,{attributes:true,attributeFilter:['style']});return true}
var n=0;(function w(){if(init())return;if(++n<40)setTimeout(w,150)})();
})();
}catch(e){console.warn("jkt block failed: jkt-clients-nav-and-consent-fix-2026-10-09",e)}

/* jkt-inquiry-nav-visibility-lock-20261011 */
try{
(function(){if(document.documentElement.getAttribute("data-wf-page")!=="6a82f40c1e7e7decef2e2138")return;function apply(){document.querySelectorAll(".navbar .header-nav-link,.navbar .jkt-services-disclosure,.navbar .jkt-clients-nav-trigger,.navbar .contact_us_btn,.navbar .menu-button,.navbar .w-nav-button").forEach(function(el){el.style.setProperty("color","#fff","important");el.style.setProperty("-webkit-text-fill-color","#fff","important")})}[0,150,700,1600].forEach(function(ms){setTimeout(apply,ms)});window.addEventListener("load",apply,{once:true})})();
}catch(e){console.warn("jkt block failed: jkt-inquiry-nav-visibility-lock-20261011",e)}
