/* jkt-home-hero-align-2026-09-07 */
try{
(function(){
 if(document.documentElement.getAttribute("data-wf-page")!=="6a1f886748e8c1c8bceca3b9")return;
 function fit(){
  var wrap=document.querySelector(".hero_wrap");if(!wrap)return;
  var h1=wrap.querySelector("h1"),sec=wrap.parentElement,cta=wrap.querySelector(".button-group");
  if(!h1||!sec||!cta)return;
  h1.style.removeProperty("font-size");sec.style.removeProperty("padding-top");sec.style.removeProperty("padding-bottom");
  if(window.innerWidth<992){
   wrap.style.removeProperty("align-items");wrap.style.removeProperty("padding-left");
   Array.prototype.forEach.call(wrap.children,function(c){c.style.removeProperty("margin-left");c.style.removeProperty("margin-right");c.style.removeProperty("text-align")});
   h1.style.removeProperty("max-width");
   return;
  }
  wrap.style.setProperty("align-items","flex-start","important");
  wrap.style.setProperty("padding-left","clamp(24px,6vw,88px)","important");
  Array.prototype.forEach.call(wrap.children,function(c){
   c.style.setProperty("margin-left","0","important");
   c.style.setProperty("margin-right","0","important");
   c.style.setProperty("text-align","left","important");
  });
  h1.style.setProperty("max-width","15ch","important");
  var g=0;
  while(cta.getBoundingClientRect().bottom>window.innerHeight-16&&g<14){
   g++;
   var f=parseFloat(getComputedStyle(h1).fontSize);
   h1.style.setProperty("font-size",Math.max(32,f-4)+"px","important");
   var pt=parseFloat(getComputedStyle(sec).paddingTop);
   if(pt>96)sec.style.setProperty("padding-top",Math.max(96,pt-12)+"px","important");
   var pb=parseFloat(getComputedStyle(sec).paddingBottom);
   if(pb>36)sec.style.setProperty("padding-bottom",Math.max(36,pb-12)+"px","important");
  }
 }
 function boot(){
  fit();
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);
  window.addEventListener("load",fit);
  var t;window.addEventListener("resize",function(){clearTimeout(t);t=setTimeout(fit,150)});
  setTimeout(fit,300);setTimeout(fit,900);setTimeout(fit,2000);
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();
}catch(e){console.warn("jkt page block failed: jkt-home-hero-align-2026-09-07",e)}

/* jkt-home-reduced-media-hero */
try{
(function () {
  var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reduceData = (connection && connection.saveData === true) ||
    (window.matchMedia && window.matchMedia("(prefers-reduced-data: reduce)").matches);
  if (!reduceMotion && !reduceData) return;
  document.documentElement.classList.add("jkt-reduced-media");
  function neutralize(root) {
    var wrappers = [];
    if (root && root.matches && root.matches(".hero_bg_video")) wrappers.push(root);
    if (root && root.querySelectorAll) { Array.prototype.push.apply(wrappers, root.querySelectorAll(".hero_bg_video")); }
    wrappers.forEach(function (wrapper) {
      if (wrapper.dataset.jktReducedMedia === "true") return;
      wrapper.dataset.jktReducedMedia = "true";
      var poster = wrapper.getAttribute("data-poster-url");
      if (poster) wrapper.style.backgroundImage = 'url("' + poster + '")';
      wrapper.removeAttribute("data-video-urls");
      wrapper.setAttribute("data-autoplay", "false");
      var video = wrapper.querySelector("video");
      if (!video) return;
      video.pause(); video.removeAttribute("autoplay"); video.removeAttribute("src");
      video.querySelectorAll("source").forEach(function (source) { source.removeAttribute("src"); });
      video.load();
    });
  }
  function init() {
    neutralize(document);
    if (document.documentElement.dataset.jktReducedMediaObserver === "true") return;
    document.documentElement.dataset.jktReducedMediaObserver = "true";
    new MutationObserver(function (records) {
      records.forEach(function (record) { record.addedNodes.forEach(function (node) { if (node.nodeType === 1) neutralize(node); }); });
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", init, { once: true }); } else { init(); }
})();
}catch(e){console.warn("jkt page block failed: jkt-home-reduced-media-hero",e)}

/* jkt-home-anchor-offset-runtime-head-2026-09-27 */
try{
(function(){
  function offsetHomeAnchor(){
    var raw=window.location.hash;
    if(!raw)return;
    var id;
    try{id=decodeURIComponent(raw.slice(1));}catch(error){return;}
    var target=document.getElementById(id);
    var nav=document.querySelector('.navbar.fixed,.navbar');
    if(!target||!nav)return;
    var adjust=function(){
      var clearance=nav.getBoundingClientRect().height+24;
      var top=target.getBoundingClientRect().top;
      if(top<clearance)window.scrollBy(0,top-clearance);
    };
    window.setTimeout(adjust,120);
    window.setTimeout(adjust,700);
  }
  window.addEventListener('load',offsetHomeAnchor,{once:true});
  window.addEventListener('hashchange',offsetHomeAnchor);
  if(document.readyState==='complete')offsetHomeAnchor();
}());
}catch(e){console.warn("jkt page block failed: jkt-home-anchor-offset-runtime-head-2026-09-27",e)}
