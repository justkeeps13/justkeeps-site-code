/* tpl-dest-head block 12 */
try{
(function(id){var s=document.getElementById(id);if(!s)return;try{var t=document.createElement('textarea'),d=JSON.parse(s.textContent),f=function(o){if(Array.isArray(o))return o.forEach(f);if(o&&typeof o==='object')for(var k in o){if(k==='name'&&typeof o[k]==='string'&&o[k].indexOf('&')>-1){t.innerHTML=o[k];o[k]=t.value}else f(o[k])}};f(d);s.textContent=JSON.stringify(d)}catch(e){}})('jkt-destination-webpage-schema');
}catch(e){console.warn("jkt template block failed: tpl-dest-head block 12",e)}

/* jkt-tourist-destination-schema-2026-09-09 */
try{
(function(){
  function clean(value){return String(value||"").replace(/\s+/g," ").trim();}
  function visibleHeading(){
    var headings=document.querySelectorAll("h1"),i,el;
    for(i=0;i<headings.length;i++){el=headings[i];if(el.getBoundingClientRect().width>0&&el.getBoundingClientRect().height>0)return clean(el.textContent);}
    return "";
  }
  function addSchema(){
    if(!/^\/destinations\/[^/]+\/?$/.test(location.pathname)||document.getElementById("jkt-tourist-destination-schema-jsonld"))return;
    var canonical=document.querySelector('link[rel="canonical"]'),url=canonical&&canonical.href;
    if(!url)return;
    var fullName=visibleHeading()||"Destination";
    var name=clean(fullName.replace(/\s+Destination\s+Guide$/i,""))||fullName;
    var descEl=document.querySelector('meta[name="description"]');
    var desc=clean(descEl&&descEl.getAttribute("content"));
    var imageEl=document.querySelector('meta[property="og:image"]'),image=imageEl&&imageEl.getAttribute("content");
    if(!image){var img=document.querySelector("main img,img");image=img&&(img.currentSrc||img.src);}
    var data={"@context":"https://schema.org","@type":"TouristDestination","@id":url+"#destination","name":name,"url":url,"description":desc};
    if(image)data.image=image;
    var script=document.createElement("script");script.id="jkt-tourist-destination-schema-jsonld";script.type="application/ld+json";script.textContent=JSON.stringify(data);document.head.appendChild(script);
  }
  function boot(){addSchema();if(!document.getElementById("jkt-tourist-destination-schema-jsonld"))window.setTimeout(addSchema,500);}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();
}catch(e){console.warn("jkt template block failed: jkt-tourist-destination-schema-2026-09-09",e)}
