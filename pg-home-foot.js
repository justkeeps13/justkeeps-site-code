/* pg-home-foot block 1 */
try{
(function () {
    function revealHeroVideo() {
        const video = document.querySelector("#hero-video video");
        const poster = document.getElementById("hero-poster");

        if (!video || !poster) return;

        function reveal() {
            video.classList.add("loaded");
            poster.classList.add("hide");
        }

        if (video.readyState >= 3) {
            reveal();
            return;
        }

        video.addEventListener("canplay", reveal, { once: true });
        video.addEventListener("playing", reveal, { once: true });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", revealHeroVideo, { once: true });
    } else {
        revealHeroVideo();
    }
})();

//-----------testimonial slider-------------------
(function () {
  var selector = ".testimonial-swiper";
  var slider = document.querySelector(selector);

  if (!slider) return; if (document.querySelector(".jkt-approved-testimonial")) { slider.swiper = { el: slider, slides: [] }; slider.setAttribute("aria-hidden", "true"); slider.setAttribute("inert", ""); return; }

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initializeTestimonialSlider() {
    if (typeof window.Swiper !== "function" || slider.swiper) return;

    new window.Swiper(selector, {
      direction: "vertical",
      loop: true,
      speed: reduceMotion ? 0 : 1200,
      slidesPerView: 1,

      effect: reduceMotion ? "slide" : "slide",
      creativeEffect: {        prev: {
          translate: [0, "-100%", -200],
          scale: 0.9,
          opacity: 0.3
        },
        next: {
          translate: [0, "100%", -200],
          scale: 0.9,
          opacity: 0.3
        }
      },
      mousewheel: false,
      allowTouchMove: false,

      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },

      navigation: {
        nextEl: ".testimonial-next",
        prevEl: ".testimonial-prev"
      }
    });
  }

  if (typeof window.Swiper === "function") {
    initializeTestimonialSlider();
    return;
  }

  var script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
  script.async = true;
  script.onload = initializeTestimonialSlider;
  document.head.appendChild(script);
})();

//--------Form Other radio button ------------

$(document).ready(function () {
    $(".other_form_input").hide();

    $('input[name="Your-Guide"]').on("change", function () {

        if ($(".other_form_radio_wrap input[type='radio']").is(":checked")) {
            $(".other_form_input").slideDown();
        } else {
            $(".other_form_input").slideUp().val("");
        }

    });
});
}catch(e){console.warn("jkt page block failed: pg-home-foot block 1",e)}

/* jkt-home-hero-intrinsic-size-2026-08-30 */
try{
(function () {
  var image = document.getElementById("hero-poster");
  if (!image) return;
  image.width = 1200;
  image.height = 630;
  image.setAttribute("fetchpriority", "high");
})();
}catch(e){console.warn("jkt page block failed: jkt-home-hero-intrinsic-size-2026-08-30",e)}

/* jkt-home-affiliations-22x2-2026-09-03 */
try{
(function(){
  var affiliations=[
    "The Leading Hotels of the World logo",
    "Belmond Bellini Club logo",
    "Four Seasons Preferred Partner logo",
    "Dorchester Collection Diamond Club logo",
    "Rosewood Elite logo",
    "Aman logo",
    "Relais & Châteaux Preferred Partner logo",
    "withIN by Small Luxury Hotels of the World logo",
    "Accor Preferred Program logo",
    "Hyatt Privé logo",
    "Shangri-La Circle logo",
    "Mandarin Oriental Fan Club logo",
    "Marriott International STARS and Luminous logo",
    "Oetker Collection Pearl Partner logo",
    "Rocco Forte Knights logo",
    "The Peninsula PenClub logo",
    "IHG Luxury & Lifestyle logo",
    "Kempinski Club 1897 logo",
    "Cheval Blanc logo",
    "Viceroy Hotels & Resorts logo",
    "Jumeirah Passport to Luxury logo"
  ];

  function restoreAffiliations(){
    var root=document.getElementById("network");
    if(!root)return;

    var track=root.querySelector(".logo-carousel-wrap");
    if(!track)return;

    var canonical=Array.prototype.find.call(track.children,function(child){
      return child.tagName==="UL"&&child.classList.contains("logo-carousel");
    })||track.querySelector("ul.logo-carousel");
    if(!canonical)return;

    var items={};
    track.querySelectorAll("li").forEach(function(item){
      var image=item.querySelector("img[alt]");
      var name=image&&image.getAttribute("alt");
      if(name&&!items[name])items[name]=item.cloneNode(true);
    });

    var missing=affiliations.filter(function(name){return !items[name];});
    if(missing.length){
      root.dataset.jktAffiliationsError="missing:"+missing.join("|");
      return;
    }

    canonical.innerHTML="";
    canonical.classList.remove("logo-carousel-clone");
    canonical.removeAttribute("aria-hidden");

    affiliations.forEach(function(name){
      var copy=items[name].cloneNode(true);
      copy.querySelectorAll("img").forEach(function(image){
        image.loading="lazy";
        image.decoding="async";
      });
      canonical.appendChild(copy);
    });

    var filler=items["Aman logo"].cloneNode(true);
    filler.setAttribute("aria-hidden","true");
    filler.dataset.jktAffiliationFiller="true";
    filler.querySelectorAll("img").forEach(function(image){
      image.alt="";
      image.loading="lazy";
      image.decoding="async";
    });
    filler.querySelectorAll("a,button,input,select,textarea,[tabindex]").forEach(function(element){
      element.tabIndex=-1;
    });
    canonical.appendChild(filler);

    Array.prototype.slice.call(track.children).forEach(function(child){
      if(child!==canonical)child.remove();
    });

    var clone=canonical.cloneNode(true);
    clone.classList.add("logo-carousel-clone");
    clone.setAttribute("aria-hidden","true");
    clone.querySelectorAll("[id]").forEach(function(element){element.removeAttribute("id");});
    clone.querySelectorAll("img").forEach(function(image){
      image.alt="";
      image.loading="lazy";
      image.decoding="async";
    });
    clone.querySelectorAll("a,button,input,select,textarea,[tabindex]").forEach(function(element){
      element.tabIndex=-1;
    });
    track.appendChild(clone);

    delete root.dataset.jktAffiliationsError;
    root.dataset.jktAffiliationsRestored="true";
    root.dataset.jktAffiliationsUniqueCount=String(affiliations.length);
    root.dataset.jktAffiliationsCount=String(canonical.children.length);
    track.dataset.jktAffiliationsTracks=canonical.children.length+"/"+clone.children.length;
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",restoreAffiliations,{once:true});
  }else{
    restoreAffiliations();
  }
})();
}catch(e){console.warn("jkt page block failed: jkt-home-affiliations-22x2-2026-09-03",e)}

/* jkt-home-spacing-quotes-safari-script-2026-09-04 */
try{
(function () {
  var safariImage = "https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6a95de7adaec043de563a29c_6a95dc767a0decaefe605aad_safari-elephants-wildlife-context-editorial-v2.jpeg";
  function polishHome() {
    var root = document.getElementById("jkt-home-master-content");
    if (!root) return false;
    root.querySelectorAll(".testimonial-swiper .swiper-slide").forEach(function (slide) {
      var bio = slide.querySelector(".testimonial_bio");
      if (!bio) return;
      var length = (bio.textContent || "").replace(/\s+/g, " ").trim().length;
      slide.classList.remove("jkh-quote-short", "jkh-quote-medium", "jkh-quote-long");
      slide.classList.add(length <= 145 ? "jkh-quote-short" : length <= 245 ? "jkh-quote-medium" : "jkh-quote-long");
    });
    var eastAfrica = root.querySelector('.jkh-destinations a[href="/destinations/east-africa"] img');
    if (eastAfrica) {
      eastAfrica.removeAttribute("srcset");
      eastAfrica.removeAttribute("sizes");
      eastAfrica.src = safariImage;
      eastAfrica.alt = "Elephant family crossing East African grassland with a distant safari vehicle on the track";
    }
    return true;
  }
  function run() {
    polishHome();
    window.setTimeout(polishHome, 250);
    window.setTimeout(polishHome, 1000);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run, { once: true });
  else run();
})();
}catch(e){console.warn("jkt page block failed: jkt-home-spacing-quotes-safari-script-2026-09-04",e)}

/* jkt-home-quote-fit-late-content-script-2026-09-04 */
try{
(function () {
  function fitQuotes() {
    var root = document.getElementById("jkt-home-master-content");
    if (!root) return;
    root.querySelectorAll(".testimonial-swiper .swiper-slide").forEach(function (slide) {
      var bio = slide.querySelector(".testimonial_bio");
      if (!bio) return;
      var length = (bio.textContent || "").replace(/\s+/g, " ").trim().length;
      slide.classList.remove("jkh-quote-short", "jkh-quote-medium", "jkh-quote-long");
      slide.classList.add(length <= 110 ? "jkh-quote-short" : length <= 190 ? "jkh-quote-medium" : "jkh-quote-long");
    });
  }
  function start() {
    fitQuotes();
    var root = document.getElementById("jkt-home-master-content") || document.body;
    var observer = new MutationObserver(fitQuotes);
    observer.observe(root, { childList: true, subtree: true, characterData: true });
    window.setTimeout(fitQuotes, 250);
    window.setTimeout(fitQuotes, 1000);
    window.setTimeout(fitQuotes, 2500);
    window.setTimeout(function () { fitQuotes(); observer.disconnect(); }, 8000);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start, { once: true });
  else start();
})();
}catch(e){console.warn("jkt page block failed: jkt-home-quote-fit-late-content-script-2026-09-04",e)}

/* jkt-home-final-runtime-a11y-script-2026-09-05 */
try{
(function(){
var pageId="6a1f886748e8c1c8bceca3b9";
if(document.documentElement.getAttribute("data-wf-page")!==pageId)return;
var focusSelector="a[href],button,input,select,textarea,[tabindex]";

function syncSlideFocus(section){
if(!section)return;
section.querySelectorAll(".swiper-slide").forEach(function(slide){
var hidden=slide.getAttribute("aria-hidden")==="true";
slide.querySelectorAll(focusSelector).forEach(function(node){
if(hidden){
if(!Object.prototype.hasOwnProperty.call(node.dataset,"jktHomePriorTab")){
node.dataset.jktHomePriorTab=node.hasAttribute("tabindex")?node.getAttribute("tabindex"):"none";
}
node.setAttribute("tabindex","-1");
}else if(Object.prototype.hasOwnProperty.call(node.dataset,"jktHomePriorTab")){
var prior=node.dataset.jktHomePriorTab;
if(prior==="none")node.removeAttribute("tabindex");else node.setAttribute("tabindex",prior);
delete node.dataset.jktHomePriorTab;
}
});
});
}

function applyMotion(paused,initial){
var html=document.documentElement;
var video=document.querySelector("#hero-video video");
var slider=document.querySelector(".testimonial-swiper");
html.dataset.jktHomeMotion=paused?"paused":"running";
if(video){
if(paused)video.pause();
else if(!initial&&!html.classList.contains("jkt-reduced-media")){
var play=video.play();
if(play&&typeof play.catch==="function")play.catch(function(){});
}
}
if(slider)slider.dispatchEvent(new Event(paused?"mouseenter":"mouseleave"));

}

function repair(){
var button=document.getElementById("jkt-home-motion-toggle");
if(button){button.remove();button=null;}
var reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
try{sessionStorage.removeItem("jktHomeMotionPaused");}catch(error){}
if(!document.documentElement.dataset.jktHomeMotion)applyMotion(reduce,true);

var section=document.querySelector(".testimonial_wrapper");
if(section){
section.querySelectorAll(".testimonial-prev,.testimonial-next,.swiper-pagination-bullet").forEach(function(control){
control.setAttribute("role","button");
control.setAttribute("tabindex","0");
if(!control.getAttribute("aria-label")){
if(control.classList.contains("testimonial-prev"))control.setAttribute("aria-label","Previous review");
else if(control.classList.contains("testimonial-next"))control.setAttribute("aria-label","Next review");
}
});
if(!section.dataset.jktHomeKeys){
section.dataset.jktHomeKeys="true";
section.addEventListener("keydown",function(event){
var target=event.target&&event.target.closest&&event.target.closest(".testimonial-prev,.testimonial-next,.swiper-pagination-bullet");
if(!target||!section.contains(target)||(event.key!=="Enter"&&event.key!==" "))return;
event.preventDefault();
target.click();
});
}
syncSlideFocus(section);
if(!section.dataset.jktHomeFocusObserver){
section.dataset.jktHomeFocusObserver="true";
new MutationObserver(function(){syncSlideFocus(section);}).observe(section,{subtree:true,childList:true,attributes:true,attributeFilter:["aria-hidden"]});
}
}

document.querySelectorAll(".date_journey a").forEach(function(link){
if(link.href.indexOf("Justkeps+Travel")!==-1)link.href=link.href.replace("Justkeps+Travel","Justkeeps+Travel");
});

var form=document.getElementById("wf-form-Your-Guide");
if(form){
var group=form.querySelector(".your_guide_form_item:first-child");
var label=group&&group.querySelector(".jkt-guide-group-label");
if(group){
if(!label){
label=document.createElement("div");
label.id="jkt-home-guide-group-label";
label.className="your_guide_form_label jkt-guide-group-label";
label.textContent="Choose Your Guide (required)";
group.insertBefore(label,group.firstChild);
}
group.setAttribute("role","group");
group.setAttribute("aria-labelledby",label.id);
group.setAttribute("aria-required","true");
group.querySelectorAll(".text-base").forEach(function(icon){icon.setAttribute("aria-hidden","true");});
}
form.querySelectorAll('input[type="radio"][name="Your-Guide"]').forEach(function(radio){radio.required=true;});
var done=form.parentElement&&form.parentElement.querySelector(".w-form-done");
var fail=form.parentElement&&form.parentElement.querySelector(".w-form-fail");
if(done){done.setAttribute("role","status");done.setAttribute("aria-live","polite");done.setAttribute("tabindex","-1");}
if(fail){fail.setAttribute("role","alert");fail.setAttribute("aria-live","assertive");fail.setAttribute("tabindex","-1");}
}

document.querySelectorAll('[data-jkh-journal-cms="true"] [data-jkh-cms-card]').forEach(function(card){
var title=card.querySelector("[data-jkh-cms-title],h3");
if(title&&title.textContent.trim())card.setAttribute("aria-label","Read: "+title.textContent.trim());
});

var homeLink=document.querySelector('.brand-logo.w-nav-brand[href="/"]');
if(homeLink){
homeLink.setAttribute("aria-label","Justkeeps Travel home");
homeLink.querySelectorAll("img").forEach(function(image){image.alt="";});
}
}

function start(){
repair();
[300,1200,3400,5600,7600].forEach(function(delay){window.setTimeout(repair,delay);});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();
}catch(e){console.warn("jkt page block failed: jkt-home-final-runtime-a11y-script-2026-09-05",e)}

/* jkt-home-body-scope-fix-2026-09-07 */
try{
(function(){
  function scopeHome(){
    if(document.body && !document.body.classList.contains("jkt-home-master")){
      document.body.classList.add("jkt-home-master");
    }
  }
  if(document.readyState==="loading") document.addEventListener("DOMContentLoaded",scopeHome,{once:true});
  else scopeHome();
})();
}catch(e){console.warn("jkt page block failed: jkt-home-body-scope-fix-2026-09-07",e)}
