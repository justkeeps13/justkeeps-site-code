/* jkt-services-collection-schema-2026-09-09 */
try{
(function(){
  function clean(value){return String(value||"").replace(/\s+/g," ").trim();}
  function addSchema(){
    var path=location.pathname.replace(/\/+$/,"")||"/";
    if(path!=="/services"||document.getElementById("jkt-services-collection-schema-jsonld"))return;
    var canonical=document.querySelector('link[rel="canonical"]'),url=canonical&&canonical.href;
    if(!url)return;
    var descEl=document.querySelector('meta[name="description"]');
    var desc=clean(descEl&&descEl.getAttribute("content"));
    var data={"@context":"https://schema.org","@type":"CollectionPage","@id":url+"#collection","url":url,"name":clean(document.title),"description":desc,"isPartOf":{"@type":"WebSite","name":"Justkeeps Travel","url":location.origin+"/"},"about":{"@type":"Organization","name":"Justkeeps Travel","url":location.origin+"/"}};
    var script=document.createElement("script");script.id="jkt-services-collection-schema-jsonld";script.type="application/ld+json";script.textContent=JSON.stringify(data);document.head.appendChild(script);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",addSchema,{once:true});else addSchema();
})();
}catch(e){console.warn("jkt page block failed: jkt-services-collection-schema-2026-09-09",e)}
