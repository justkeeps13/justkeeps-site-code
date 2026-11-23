/* Justkeeps site-wide refinements, Nov 22 2026. Pairs with site-refine.css.
   1. Phone contact bar: Call, Text, Inquire. Phones only, appears after the first scroll.
   2. Destination guides: a slim band partway down the article. */
try{
(function(){
  var TEL="+15613003540";
  var SHOWN="561.300.3540";
  var root=document.documentElement;
  function ready(fn){if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",fn,{once:true});else fn()}
  function el(tag,cls,text){var n=document.createElement(tag);if(cls)n.className=cls;if(text)n.textContent=text;return n}
  function link(href,cls,text){var a=el("a",cls,text);a.setAttribute("href",href);return a}

  function contactBar(path){
    if(document.querySelector(".jkr-bar"))return;
    var formPage=/^\/(inquire|contact|book)$/.test(path);
    var bar=el("nav","jkr-bar"+(formPage?" jkr-two":""));
    bar.setAttribute("aria-label","Contact Justin");
    bar.appendChild(link("tel:"+TEL,"","Call"));
    bar.appendChild(link("sms:"+TEL,"","Text"));
    if(!formPage)bar.appendChild(link("/inquire","jkr-bar-main","Inquire"));
    document.body.appendChild(bar);
    root.classList.add("jkr-has-bar");
    var ticking=false;
    function update(){
      ticking=false;
      var y=window.pageYOffset||root.scrollTop||0;
      root.classList.toggle("jkr-bar-on",y>Math.min(480,window.innerHeight*0.6));
    }
    window.addEventListener("scroll",function(){if(!ticking){ticking=true;requestAnimationFrame(update)}},{passive:true});
    update();
    document.addEventListener("focusin",function(e){
      var t=e.target;
      if(t&&/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))root.classList.add("jkr-bar-hide");
    });
    document.addEventListener("focusout",function(){root.classList.remove("jkr-bar-hide")});
  }

  function guideBand(path){
    if(!/^\/destinations\/[^\/]+$/.test(path))return;
    var body=document.querySelector(".bio_wrap .w-richtext");
    if(!body||body.querySelector(".jkr-band"))return;
    var heads=[];
    for(var i=0;i<body.children.length;i++){if(body.children[i].tagName==="H2")heads.push(body.children[i])}
    if(heads.length<4)return;
    var h1=document.querySelector("h1");
    var name=h1?h1.textContent.replace(/\s+/g," ").trim():"";
    if(!name)return;
    var band=el("aside","jkr-band");
    band.setAttribute("aria-label","Plan this trip with Justin");
    var copy=el("div","");
    copy.appendChild(el("p","jkr-band-t",name+", planned for you."));
    var sub=el("p","jkr-band-s","Call or text Justin at ");
    sub.appendChild(link("tel:"+TEL,"",SHOWN));
    sub.appendChild(document.createTextNode("."));
    copy.appendChild(sub);
    band.appendChild(copy);
    band.appendChild(link("/inquire?destination="+encodeURIComponent(name)+"&lead_source=destination_article_band","jkr-band-a","Inquire"));
    body.insertBefore(band,heads[Math.ceil(heads.length/2)]);
  }

  ready(function(){
    var path=location.pathname.replace(/\/+$/,"")||"/";
    try{contactBar(path)}catch(e){}
    try{guideBand(path)}catch(e){}
  });
})();
}catch(e){}
