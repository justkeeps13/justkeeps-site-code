/* jkt-sitewide-content-normalizer-2026-09-11 */
try{
(function(){
  function path(){var p=location.pathname;while(p.length>1&&p.slice(-1)==='/')p=p.slice(0,-1);return p||'/';}
  function clean(s){return String(s||'').trim().split(' ').filter(function(v){return v;}).join(' ');}
  function demoteExtraHeadings(){
    var hs=Array.prototype.slice.call(document.querySelectorAll('h1'));
    hs.slice(1).forEach(function(h){
      var h2=document.createElement('h2');
      Array.prototype.slice.call(h.attributes).forEach(function(a){h2.setAttribute(a.name,a.value);});
      h2.innerHTML=h.innerHTML;
      h.parentNode.replaceChild(h2,h);
    });
  }
  function fixLabel(){
    if(path()!=='/services/leisure')return;
    document.querySelectorAll('label[for="First-Name"]').forEach(function(label){label.setAttribute('for','Name');});
  }
  function fixExternalLinks(){
    document.querySelectorAll('a[target="_blank"]').forEach(function(a){
      var values=(a.getAttribute('rel')||'').split(' ').filter(function(v){return v;});
      ['noopener','noreferrer'].forEach(function(value){if(values.indexOf(value)<0)values.push(value);});
      a.setAttribute('rel',values.join(' '));
    });
  }
  function fixRelatedAlt(){
    document.querySelectorAll('img.journal_category_image').forEach(function(img){
      if((img.getAttribute('alt')||'').trim())return;
      var link=img.parentElement;
      while(link&&link.tagName!=='A')link=link.parentElement;
      var text=link?clean(link.textContent):'';
      img.setAttribute('alt',text?'Related article: '+text.slice(0,140):'Related journal article');
    });
  }
  function eachText(fn){
    var roots=[document.body].concat(Array.prototype.slice.call(document.querySelectorAll('body *')));
    roots.forEach(function(root){Array.prototype.slice.call(root.childNodes).forEach(function(node){if(node.nodeType===3)fn(node);});});
  }
  function fixText(){
    var p=path(),oldText='Written by JustKeeps',newText='';
    if(p==='/journal/paris-is-always-a-good-idea')newText='ADAPTED FROM MARY JO SHORE FOR JUSTKEEPS TRAVEL';
    if(p==='/journal/wish-masters-justin-keeperman-is-miamis-most-connected-travel-insider')newText='ARCHIVED FROM MIAMI MAGAZINE, BY NILA DO SIMON';
    eachText(function(node){
      if((node.nodeValue||'').indexOf('13 of 14 guides')>=0)node.nodeValue=node.nodeValue.split('13 of 14 guides').join('14 guides');
      if(newText&&(node.nodeValue||'').indexOf(oldText)>=0)node.nodeValue=node.nodeValue.split(oldText).join(newText);
    });
  }
  function run(){if(!document.body)return;demoteExtraHeadings();fixLabel();fixExternalLinks();fixRelatedAlt();fixText();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run,{once:true});
  setTimeout(run,0);setTimeout(run,1200);setTimeout(run,3000);window.addEventListener('load',run,{once:true});
})();
}catch(e){console.warn("jkt block failed: jkt-sitewide-content-normalizer-2026-09-11",e)}

/* jkt-form-post-hardening-2026-09-09 */
try{
(function(){
  function fix(){
    if(!document.body)return;
    document.querySelectorAll('form').forEach(function(form){
      if(form.querySelector('#jkt-destination-explore-search-clean'))return;
      if(form.matches('.jkt-service-destination-form')||form.getAttribute('role')==='search')return;
      var pii=false;
      Array.prototype.slice.call(form.querySelectorAll('input,textarea,select')).forEach(function(field){
        var s=((field.name||'')+' '+(field.id||'')+' '+(field.getAttribute('placeholder')||'')).toLowerCase();
        if(s.indexOf('name')>=0||s.indexOf('email')>=0||s.indexOf('phone')>=0||s.indexOf('telephone')>=0||s.indexOf('destination')>=0||s.indexOf('trip')>=0||s.indexOf('details')>=0)pii=true;
      });
      if(pii){form.setAttribute('method','post');form.method='post';}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix,{once:true});
  setTimeout(fix,0);setTimeout(fix,1200);setTimeout(fix,3000);
})();
}catch(e){console.warn("jkt block failed: jkt-form-post-hardening-2026-09-09",e)}

/* jkt-og-url-fallback-2026-09-09 */
try{
(function(){
  function apply(){
    var canonical=document.querySelector('link[rel="canonical"]');
    var url=canonical&&canonical.href;
    if(!url){return;}
    var meta=document.querySelector('meta[property="og:url"]');
    if(!meta){
      meta=document.createElement('meta');
      meta.setAttribute('property','og:url');
      document.head.appendChild(meta);
    }
    if(!meta.getAttribute('content')){meta.setAttribute('content',url);}
  }
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",apply,{once:true});}
  else{apply();}
})();
}catch(e){console.warn("jkt block failed: jkt-og-url-fallback-2026-09-09",e)}

/* jkt-final-audit-fixes-2026-09-11 */
try{
(function(){
"use strict";
var PATH=(location.pathname||"/").replace(/\/+$/,"")||"/";
var JOURNAL_IMAGE_FIXES={
  "/journal/hyatt-marriott-delta-loyalty-updates-september-2026":{src:"https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa4286d0d204763b780abdd_6a8a575df85543a4bd11cc8c_corporate-executive-private-jet-v1.webp",alt:"Two executives reviewing travel plans inside a private jet cabin"},
  "/journal/production-and-talent-travel-guide":{src:"https://cdn.prod.website-files.com/6a1f886348e8c1c8bceca358/6a99a356e820730ecf2a17dc_executive-private-office-arrival-ai.webp",alt:"Executive travel arrival with a private office and helicopter transfer"}
};
function clean(v){return String(v||"").replace(/\s+/g," ").trim();}
function setImage(img,fix){if(!img)return;img.removeAttribute("srcset");img.removeAttribute("data-src");img.src=fix.src;img.alt=fix.alt;}
function fixJournalImages(){
  if(!/^\/journal(?:\/|$)/.test(PATH))return;
  Object.keys(JOURNAL_IMAGE_FIXES).forEach(function(slug){
    var fix=JOURNAL_IMAGE_FIXES[slug];
    document.querySelectorAll("a[href*=\""+slug+"\"]").forEach(function(a){a.querySelectorAll("img").forEach(function(img){setImage(img,fix);});});
    if(PATH===slug){document.querySelectorAll("img").forEach(function(img){var src=(img.getAttribute("src")||"").toLowerCase();if(src.indexOf("placeholder")>-1||(slug.indexOf("production")>-1&&src.indexOf("justkeeps-cannes-daylight-editorial-v2")>-1))setImage(img,fix);});}
  });
  document.querySelectorAll("a[href*=\"/journal/\"] img").forEach(function(img){if(!clean(img.alt)){var a=img.closest("a"),label=a?clean(a.textContent):"Justkeeps Travel Journal story";img.alt=label;}});
}
function fixJournalGate(){
  if(!/^\/journal(?:\/|$)/.test(PATH))return;
  document.querySelectorAll("#jkt-journal-article-modal-2026-09-11 *").forEach(function(el){if(!el.children.length&&/We.?d love to welcome you in\./i.test(el.textContent||""))el.textContent="Tell us where to send the occasional Justkeeps travel note, then the guide will open.";});
  var modal=document.getElementById("jkt-journal-article-modal-2026-09-11");if(!modal)return;
  var gate=modal.querySelector(".jkt-journal-lead-gate,[class*=\"lead-gate\"]"),read=modal.querySelector(".jkt-journal-modal-read");
  if(!gate||!read)return;
  var cookie=document.cookie||"",access=cookie.split(";").some(function(part){return part.trim()==="jkt-destination-article-access-v1=1";});
  var hasForm=!!gate.querySelector("form"),hasSuccess=!!gate.querySelector(".jkt-journal-lead-success");
  if(!access&&!hasForm&&!hasSuccess)return;
  if(!access&&hasForm){read.style.setProperty("display","none","important");read.setAttribute("aria-hidden","true");read.setAttribute("tabindex","-1");}
  else if(access||hasSuccess){read.style.removeProperty("display");read.removeAttribute("aria-hidden");read.removeAttribute("tabindex");}
}
function fixDestinationGate(){
  if(PATH!=="/destinations")return;var modal=document.getElementById("jkt-article-modal-2026-09-10");if(!modal)return;
  var close=modal.querySelector(".jkt-modal-close"),gate=modal.querySelector(".jkt-lead-gate"),gated=!!(gate&&getComputedStyle(gate).display!=="none"),read=modal.querySelector(".jkt-modal-read");
  modal.classList.toggle("jkt-lead-gated",gated);
  if(read)read.style.display=gated?"none":"";
  if(close)close.textContent=gated?"CONTINUE WITHOUT SUBMITTING":"CLOSE";
}
function run(){fixJournalImages();fixJournalGate();fixDestinationGate();}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run,{once:true});else run();
[0,250,900,1800,3500].forEach(function(ms){setTimeout(run,ms);});
})();
}catch(e){console.warn("jkt block failed: jkt-final-audit-fixes-2026-09-11",e)}

/* jkt-destination-fresh-preview-2026-09-12 */
try{
(function(){
  var path=(location.pathname||"/").replace(/\/+$/,"")||"/";
  if(path!=="/destinations")return;
  var fresh=false;try{fresh=new URLSearchParams(location.search).get("jkt-fresh")==="1"}catch(e){}
  if(!fresh)return;
  try{document.cookie="jkt-destination-article-access-v1=; max-age=0; path=/; SameSite=Lax"}catch(e){}
  try{history.replaceState(null,"",location.pathname)}catch(e){}
})();
}catch(e){console.warn("jkt block failed: jkt-destination-fresh-preview-2026-09-12",e)}

/* jkt-destination-inquiry-prefill-2026-09-12 */
try{
(function(){
  function path(){
    var p=location.pathname||"/";
    while(p.length>1&&p.slice(-1)==="/")p=p.slice(0,-1);
    return p;
  }
  function apply(){
    if(path()!=="/inquire")return true;
    var destination="";
    try{destination=(new URLSearchParams(location.search).get("destination")||"").trim();}catch(e){}
    if(!destination)return true;
    var field=document.getElementById("Destination-s-of-Interest");
    if(!field){
      var fields=document.querySelectorAll("input,textarea");
      for(var i=0;i<fields.length;i++){
        var label=((fields[i].name||"")+" "+(fields[i].id||"")+" "+(fields[i].placeholder||"")).toLowerCase();
        if(label.indexOf("destination")>=0){field=fields[i];break;}
      }
    }
    if(!field)return false;
    field.value=destination;
    field.setAttribute("value",destination);
    field.dispatchEvent(new Event("input",{bubbles:true}));
    field.dispatchEvent(new Event("change",{bubbles:true}));
    return true;
  }
  function boot(){[0,250,800,1600].forEach(function(ms){window.setTimeout(apply,ms);});}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();
}catch(e){console.warn("jkt block failed: jkt-destination-inquiry-prefill-2026-09-12",e)}

/* jkt-service-schema-2026-09-09 */
try{
(function(){
  function clean(value){return String(value||"").replace(/\s+/g," ").trim();}
  function visibleText(selector){
    var el=document.querySelector(selector);
    return el&&el.getBoundingClientRect().width>0&&el.getBoundingClientRect().height>0?clean(el.textContent):"";
  }
  function addSchema(){
    if(!/^\/services\/[^/]+\/?$/.test(location.pathname)||document.getElementById("jkt-service-schema-jsonld"))return;
    var canonical=document.querySelector('link[rel="canonical"]'),url=canonical&&canonical.href;
    if(!url)return;
    var name=visibleText(".jkt-crumb-name")||visibleText("h1")||"Travel service";
    var description=document.querySelector('meta[name="description"]');
    var desc=clean(description&&description.getAttribute("content"))||visibleText(".jkt-mast-sub");
    var title=clean(document.title)||name+" | Justkeeps Travel";
    var orgUrl=location.origin+"/";
    var data={"@context":"https://schema.org","@graph":[
      {"@type":"WebPage","@id":url+"#webpage","url":url,"name":title,"description":desc,"isPartOf":{"@type":"WebSite","name":"Justkeeps Travel","url":orgUrl},"mainEntity":{"@id":url+"#service"}}
    ]};
    var script=document.createElement("script");script.id="jkt-service-schema-jsonld";script.type="application/ld+json";script.textContent=JSON.stringify(data);document.head.appendChild(script);
  }
  function boot(){addSchema();if(!document.getElementById("jkt-service-schema-jsonld"))window.setTimeout(addSchema,500);}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();
}catch(e){console.warn("jkt block failed: jkt-service-schema-2026-09-09",e)}

/* jkt-sitewide-qa-accordion-2026-10-03 */
try{
(function(){function e(){document.querySelectorAll("h2").forEach(function(t){if(!/\b(?:faq|faqs|frequently asked|common questions|questions? and answers?)\b/i.test(t.textContent)||t.dataset.j)return;var s=t.closest("section")||t.parentElement,q=[].slice.call(s.querySelectorAll("h3"));if(!q.length)return;var l=document.createElement("div");l.className="jkt-qa-accordion";q.forEach(function(h){var p=h.nextElementSibling;if(!p||!/^(P|DIV)$/.test(p.tagName))return;var d=document.createElement("details"),u=document.createElement("summary");d.className="jkt-qa-item";u.textContent=h.textContent.trim();p.classList.add("jkt-qa-answer");d.append(u,p);l.append(d);h.remove()});if(l.children.length){t.after(l);t.dataset.j="1"}})}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",e,{once:true});else e();[300,1200,2600].forEach(function(n){setTimeout(e,n)})})();
}catch(e){console.warn("jkt block failed: jkt-sitewide-qa-accordion-2026-10-03",e)}

/* jkt-skip-link-20261013 */
try{
(function () {
  "use strict";
  var linkId = "jkt-skip-link-20261013";
  var mainId = "main-content";

  function installSkipLink() {
    if (!document.body || document.getElementById(linkId)) return;

    var main = document.getElementById(mainId) || document.querySelector("main");
    if (!main) return;
    if (!main.id) main.id = mainId;
    if (!main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");

    var link = document.createElement("a");
    link.id = linkId;
    link.className = linkId;
    link.href = "#" + main.id;
    link.textContent = "Skip to main content";
    link.addEventListener("click", function () {
      window.setTimeout(function () {
        try {
          main.focus({ preventScroll: true });
        } catch (error) {
          main.focus();
        }
      }, 0);
    });
    document.body.insertBefore(link, document.body.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", installSkipLink, { once: true });
  } else {
    installSkipLink();
  }
  [200, 900, 1800].forEach(function (delay) {
    window.setTimeout(installSkipLink, delay);
  });
}());
}catch(e){console.warn("jkt block failed: jkt-skip-link-20261013",e)}
