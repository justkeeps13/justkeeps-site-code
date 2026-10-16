/* jkt-destination-article-cta-2026-09-12-script */
try{
(function(){
  var PAGE="6a3a2752a290eecaf4a9bf36";
  function clean(v){return String(v||"").replace(/\s+/g," ").trim();}
  function boot(){
    if(document.documentElement.getAttribute("data-wf-page")!==PAGE)return;
    if(document.querySelector("[data-jkt-destination-article-cta]"))return;
    var slug=(location.pathname||"").replace(/^\/destinations\//,"").replace(/\/$/,"");
    if(!slug||slug.indexOf("/")>=0)return;
    var root=document.querySelector(".journal_template_wrap>.bio_wrap,.jkt2-body-root,.journal_template_wrapper .bio_wrap");
    if(!root)return;
    var h1=document.querySelector("h1"),name=clean(h1&&h1.textContent).replace(/\s+Destination\s+Guide$/i,"")||"this destination";
    var section=document.createElement("section");
    section.className="jkt-destination-article-cta";
    section.setAttribute("data-jkt-destination-article-cta","true");
    section.setAttribute("aria-labelledby","jkt-destination-article-cta-title");
    var copy=document.createElement("div");copy.className="jkt-destination-article-cta-copy";
    var kicker=document.createElement("p");kicker.className="jkt-destination-article-cta-kicker";kicker.textContent="READY WHEN YOU ARE";
    var title=document.createElement("h2");title.className="jkt-destination-article-cta-title";title.id="jkt-destination-article-cta-title";title.textContent="Plan "+name;
    var message=document.createElement("p");message.className="jkt-destination-article-cta-text";message.textContent="Tell us where you’re heading and what you want the trip to feel like. We’ll take it from there.";
    copy.appendChild(kicker);copy.appendChild(title);copy.appendChild(message);
    var link=document.createElement("a");
    link.className="jkt-destination-article-cta-link";
    link.href="/inquire?destination="+encodeURIComponent(name)+"&lead_source=destination_article";
    link.textContent="PLAN THIS DESTINATION";
    section.appendChild(copy);section.appendChild(link);root.appendChild(section);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
  [500,1500,3000].forEach(function(ms){window.setTimeout(boot,ms);});
})();
}catch(e){console.warn("jkt template block failed: jkt-destination-article-cta-2026-09-12-script",e)}
