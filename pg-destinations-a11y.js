/* Destination index accessible-name correction — 2026-11-24 */
(function(){
  "use strict";
  if(document.documentElement.getAttribute("data-wf-page")!=="6a2bd4ee7e0c8c8a15b02699")return;
  var observer;
  function fix(){
    document.querySelectorAll("#jkx a.jkx__card[aria-label]").forEach(function(card){
      card.removeAttribute("aria-label");
    });
  }
  function observe(){
    var root=document.getElementById("jkx");
    if(!root||observer)return;
    observer=new MutationObserver(fix);
    observer.observe(root,{childList:true,subtree:true,attributes:true,attributeFilter:["aria-label"]});
  }
  function start(){
    fix();observe();
    [200,700,1600,3200].forEach(function(ms){setTimeout(fix,ms);});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();