/* emb-home-f63758d0 block 2 */
try{
(function(){
  var items=[
    {quote:"Justin doesn't just plan trips. He creates moments you carry with you forever. Every detail was considered, every experience elevated beyond what we imagined.",client:"SARAH & MICHAEL T.",detail:"Anniversary Trip to Santorini · June 2024",alt:"Santorini, Greece",image:"https://cdn.prod.website-files.com/6a1f886348e8c1c8bceca358/6ac1e8160fecf7516494f71c_santorini-hero-q85-p-1080.webp"},
    {quote:"Working with Justkeeps is like having a trusted friend who happens to know every hotel, every restaurant, and every hidden gem in the world. Absolutely indispensable.",client:"DAVID R.",detail:"Multifamily Safari, Kenya & Tanzania · April 2024",alt:"An elephant family walking through tall grass beside a safari camp at dawn",image:"https://cdn.prod.website-files.com/6a1f886348e8c1c8bceca358/6a8b5565d989c721e67cbb7f_safari-elephants-camp-hero-p-1080.avif"},
    {quote:"The level of personalization was extraordinary. From the moment we arrived to our last sunset, everything was seamless. We'll never travel any other way.",client:"THE THOMPSON FAMILY",detail:"Summer in the Maldives · August 2025",alt:"Maldives sandbank and lagoon",image:"https://cdn.prod.website-files.com/6a1f886348e8c1c8bceca358/6ab74c75b7ba30b650f08f49_maldives-dhoni-sandbank-support-p-1080.webp"},
    {quote:"Justin took our vague idea of 'something special in Japan' and turned it into the most memorable two weeks of our lives. His attention to detail is unmatched.",client:"REBECCA & JAMES L.",detail:"Cultural Immersion, Japan · September 2025",alt:"Kyoto, Japan",image:"https://cdn.prod.website-files.com/6a1f886348e8c1c8bceca358/6ab74c708a6ac06f5fa4a4a0_kyoto-arashiyama-bamboo-teahouse-p-1080.webp"}
  ];
  function boot(){
    var root=document.querySelector("[data-jkt-approved-testimonial]");if(!root)return;
    var host=root.closest(".testimonial_wrap");if(host){host.querySelectorAll(".section_header,.swiper,.slider_control_button").forEach(function(el){el.style.setProperty("display","none","important");});}
    var index=0,stage=root.querySelector("[data-jkt-stage]"),image=root.querySelector("[data-jkt-image]"),quote=root.querySelector("[data-jkt-quote]"),client=root.querySelector("[data-jkt-client]"),detail=root.querySelector("[data-jkt-detail]"),counter=root.querySelector("[data-jkt-counter]");
    function render(){var item=items[index];image.src=item.image;image.alt=item.alt;quote.textContent="\""+item.quote+"\"";client.textContent=item.client;detail.textContent=item.detail;counter.textContent=(index+1<10?"0":"")+(index+1)+" / "+(items.length<10?"0":"")+items.length;stage.setAttribute("aria-label","Client testimonial from "+item.client+". Swipe left or right to change testimonial.");}
    function move(step){index=(index+step+items.length)%items.length;render();}
    root.querySelector("[data-jkt-prev]").addEventListener("click",function(){move(-1);});root.querySelector("[data-jkt-next]").addEventListener("click",function(){move(1);});
    var startX=0,startY=0;stage.addEventListener("touchstart",function(e){if(e.touches&&e.touches[0]){startX=e.touches[0].clientX;startY=e.touches[0].clientY;}},{passive:true});stage.addEventListener("touchend",function(e){if(!e.changedTouches||!e.changedTouches[0])return;var dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;if(Math.abs(dx)>42&&Math.abs(dx)>Math.abs(dy))move(dx<0?1:-1);},{passive:true});stage.addEventListener("keydown",function(e){if(e.key==="ArrowLeft"){e.preventDefault();move(-1);}if(e.key==="ArrowRight"){e.preventDefault();move(1);}});render();
  }
  if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",boot);}else{boot();}
})();
}catch(e){console.warn("jkt embed block failed: emb-home-f63758d0 block 2",e)}
