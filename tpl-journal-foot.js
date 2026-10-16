/* jkt-journal-article-cover-repair-2026-09-11 */
try{
(function(){
  var MAP={"/journal/private-villa-vacation":{"src":"https://s3.amazonaws.com/webflow-prod-assets/6a1f886348e8c1c8bceca358/6a977096b880c9fb7f9281a4_group-travel-tuscany-hero-v2.webp","alt":"Guests sharing lunch at a private Tuscan estate"},"/journal/how-to-plan-a-group-trip":{"src":"https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6a3f663d1d1f9c2bf42019f5_kameron-kincade-Wn5SVurEt0w-unsplash%20(1).jpg","alt":"Multi-generational group smiling from a safari vehicle in a wooded reserve"},"/journal/group-travel-coordinator":{"src":"https://s3.amazonaws.com/webflow-prod-assets/6a1f886348e8c1c8bceca358/6a954bfa91849a27ff61baa6_justkeeps-entertainment-production-studio-final.webp","alt":"Production coordinators with road cases and garment bags beside a discreet vehicle"},"/journal/best-places-to-visit-in-october":{"src":"https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6a9cf87e4a935f84bb1efebb_6a9cf80e7a9470764f030f1c_jkt-dest-crete-hero-v1.jpeg","alt":"Empty pink-tinged sand curving into shallow turquoise water at Elafonisi on the west coast of Crete"},"/journal/incentive-travel-planning":{"src":"https://s3.amazonaws.com/webflow-prod-assets/6a1f886348e8c1c8bceca358/6a9ecc5b05a7ef58757e4cf4_jkt-group-coastal-villa-long-table.webp","alt":"A group of guests at a long table on a coastal villa terrace at golden hour with luggage arriving"},"/journal/luxury-group-travel-75050":{"src":"https://s3.amazonaws.com/webflow-prod-assets/6a1f886348e8c1c8bceca358/6a977096b880c9fb7f9281a4_group-travel-tuscany-hero-v2.webp","alt":"Multi-generational family and friends sharing lunch at a private Tuscany estate"}};
  function trimPath(value){value=String(value||"");return value.charAt(value.length-1)==="/" ? value.slice(0,-1) : value;}
  function currentPath(){return trimPath(location.pathname);}
  function pathOf(anchor){try{return trimPath(new URL(anchor.getAttribute("href")||"",location.origin).pathname);}catch(error){return "";}}
  function setImage(image,data){
    if(!image||!data)return;
    if(image.getAttribute("src")!==data.src){
      image.setAttribute("src",data.src);
      image.removeAttribute("srcset");
    }
    if(image.getAttribute("alt")!==data.alt)image.setAttribute("alt",data.alt);
    if(image.getAttribute("data-jkt-editorial-cover")!=="photo")image.setAttribute("data-jkt-editorial-cover","photo");
  }
  function apply(){
    document.querySelectorAll('a[href^="/journal/"] img').forEach(function(image){
      var anchor=image.closest("a"),data=anchor&&MAP[pathOf(anchor)];
      if(data)setImage(image,data);
    });
    var heroData=MAP[currentPath()];
    if(heroData)document.querySelectorAll(".jkt2-mast-img").forEach(function(image){setImage(image,heroData);});
  }
  function boot(){
    apply();
    [120,350,750,1400,2400,4000].forEach(function(delay){window.setTimeout(apply,delay);});
    if(window.MutationObserver&&document.body){
      var pending=false,stopped=false;
      var observer=new MutationObserver(function(){
        if(stopped||pending)return;
        pending=true;
        window.setTimeout(function(){pending=false;if(!stopped)apply();},180);
      });
      observer.observe(document.body,{childList:true,subtree:true});
      window.setTimeout(function(){stopped=true;observer.disconnect();},6500);
    }
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();
}catch(e){console.warn("jkt template block failed: jkt-journal-article-cover-repair-2026-09-11",e)}

/* jkt-journal-article-lead-gate-2026-09-11 */
try{
(function(){
  var PAGE="6a2cde5eae15e28840bdbc81";
  var MODAL_ID="jkt-journal-article-modal-2026-09-11";
  var STORAGE_KEY="jkt-destination-article-access-v1";
  var WEBHOOK_URL="https://hook.us2.make.com/x9gjkeiltn4gkhxq3jrdssqaa41l688k";
  if(document.documentElement.getAttribute("data-wf-page")!==PAGE)return;
  function clean(v){return String(v||"").replace(/\s+/g," ").trim();}
  function allowed(){return document.cookie.split(";").some(function(part){return part.trim()===STORAGE_KEY+"=1";});}
  function remember(){document.cookie=STORAGE_KEY+"=1; max-age=31536000; path=/; SameSite=Lax";}
  function makeLabel(text,required,optional){
    var label=document.createElement("label");
    label.textContent=text+" ";
    if(required){var star=document.createElement("span");star.className="jkt-journal-lead-required";star.setAttribute("aria-hidden","true");star.textContent="*";label.appendChild(star);}
    if(optional){var note=document.createElement("span");note.className="jkt-journal-lead-optional";note.textContent="(optional)";label.appendChild(note);}
    return label;
  }
  function infoFrom(anchor){
    var href="";
    try{href=new URL(anchor.getAttribute("href")||"",location.origin).pathname.replace(/\/$/,"");}catch(e){}
    var image=anchor.querySelector("img");
    var titleNode=anchor.querySelector("h1,h2,h3,h4,h5,h6,.jkt-journal-suggestion-title");
    var title=clean(titleNode&&titleNode.textContent)||clean(anchor.getAttribute("aria-label"))||"Journal guide";
    return {href:href,title:title,image:image?(image.currentSrc||image.src):"",alt:image?(image.alt||""): ""};
  }
  function buildModal(){
    var modal=document.getElementById(MODAL_ID);
    if(modal)return modal;
    modal=document.createElement("div");
    modal.id=MODAL_ID;
    modal.setAttribute("role","dialog");
    modal.setAttribute("aria-modal","true");
    modal.setAttribute("aria-labelledby","jkt-journal-modal-title-2026-09-11");
    modal.setAttribute("aria-hidden","true");
    var card=document.createElement("div");
    card.className="jkt-journal-modal-card";
    card.setAttribute("role","document");
    var image=document.createElement("img");
    image.alt="";
    image.loading="eager";
    image.decoding="async";
    var title=document.createElement("h2");
    title.id="jkt-journal-modal-title-2026-09-11";
    title.className="jkt-journal-modal-title";
    var gate=document.createElement("section");
    gate.className="jkt-journal-lead-gate";
    gate.setAttribute("aria-labelledby","jkt-journal-lead-title-2026-09-11");
    var actions=document.createElement("div");
    actions.className="jkt-journal-modal-actions";
    var read=document.createElement("a");
    read.className="jkt-journal-modal-read";
    read.textContent="READ ARTICLE";
    var close=document.createElement("button");
    close.type="button";
    close.className="jkt-journal-modal-close";
    close.textContent="CLOSE";
    actions.appendChild(read);actions.appendChild(close);
    card.appendChild(image);card.appendChild(title);card.appendChild(gate);card.appendChild(actions);
    modal.appendChild(card);document.body.appendChild(modal);
    function closeModal(){
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden","true");
      document.body.style.overflow="";
      if(modal.__jktLastTrigger&&typeof modal.__jktLastTrigger.focus==="function")modal.__jktLastTrigger.focus();
    }
    modal.addEventListener("click",function(e){
      if(e.target===modal||e.target.closest(".jkt-journal-modal-close")){e.preventDefault();closeModal();}
    });
    document.addEventListener("keydown",function(e){
      if(e.key==="Escape"&&modal.classList.contains("is-open")){e.preventDefault();closeModal();}
    });
    close.addEventListener("click",closeModal);
    modal.__jktClose=closeModal;
    modal.__jktSync=function(info){
      title.textContent=info.title;
      read.href=info.href;read.onclick=function(e){e.preventDefault();location.href=info.href};
      read.setAttribute("aria-label","Read "+info.title);
      if(image){image.src=info.image;image.alt=info.alt||info.title;}
      if(allowed()){
        gate.innerHTML="";
        gate.style.display="none";
        read.style.display="block";
        read.removeAttribute("aria-hidden");
        read.tabIndex=0;
        actions.style.display="flex";
        return;
      }
      gate.style.display="block";
      read.style.display="none";
      read.setAttribute("aria-hidden","true");
      read.tabIndex=-1;
      actions.style.display="flex";
      gate.innerHTML="";
      var gateTitle=document.createElement("h3");
      gateTitle.id="jkt-journal-lead-title-2026-09-11";
      gateTitle.className="jkt-journal-lead-title";
      gateTitle.textContent="Before you read";
      var intro=document.createElement("p");
      intro.className="jkt-journal-lead-intro";
      intro.textContent="We’d love to welcome you in. Share your details below and we’ll open the guide, with thoughtful travel notes from Justkeeps Travel to follow.";
      var form=document.createElement("form");
      form.className="jkt-journal-lead-form";
      form.noValidate=true;
      var nameWrap=document.createElement("div");nameWrap.className="jkt-journal-lead-field";
      var nameInput=document.createElement("input");nameInput.type="text";nameInput.name="name";nameInput.autocomplete="name";nameInput.required=true;nameInput.maxLength=120;nameInput.placeholder="Your name";nameInput.id="jkt-journal-name-2026-09-11";
      var nameLabel=makeLabel("Name",true,false);nameLabel.htmlFor=nameInput.id;nameWrap.appendChild(nameLabel);nameWrap.appendChild(nameInput);
      var emailWrap=document.createElement("div");emailWrap.className="jkt-journal-lead-field";
      var emailInput=document.createElement("input");emailInput.type="email";emailInput.name="email";emailInput.autocomplete="email";emailInput.required=true;emailInput.maxLength=254;emailInput.placeholder="you@example.com";emailInput.id="jkt-journal-email-2026-09-11";
      var emailLabel=makeLabel("Email",true,false);emailLabel.htmlFor=emailInput.id;emailWrap.appendChild(emailLabel);emailWrap.appendChild(emailInput);
      var phoneWrap=document.createElement("div");phoneWrap.className="jkt-journal-lead-field";
      var phoneInput=document.createElement("input");phoneInput.type="tel";phoneInput.name="phone";phoneInput.autocomplete="tel";phoneInput.maxLength=40;phoneInput.placeholder="Optional";phoneInput.id="jkt-journal-phone-2026-09-11";
      var phoneLabel=makeLabel("Phone",false,true);phoneLabel.htmlFor=phoneInput.id;phoneWrap.appendChild(phoneLabel);phoneWrap.appendChild(phoneInput);
      var consentLabel=document.createElement("label");consentLabel.className="jkt-journal-lead-consent";
      var consentInput=document.createElement("input");consentInput.type="checkbox";consentInput.name="optIn";consentInput.required=true;consentInput.id="jkt-journal-optin-2026-09-11";
      var consentText=document.createElement("span");consentText.textContent="Yes, send me new Journal articles and occasional travel notes from Justkeeps Travel. ";
      var consentStar=document.createElement("span");consentStar.className="jkt-journal-lead-required";consentStar.setAttribute("aria-hidden","true");consentStar.textContent="*";consentText.appendChild(consentStar);
      consentLabel.appendChild(consentInput);consentLabel.appendChild(consentText);
      var honeypot=document.createElement("input");honeypot.className="jkt-journal-lead-honeypot";honeypot.type="text";honeypot.name="website";honeypot.tabIndex=-1;honeypot.autocomplete="off";honeypot.setAttribute("aria-hidden","true");
      var error=document.createElement("p");error.className="jkt-journal-lead-error";error.setAttribute("role","alert");error.setAttribute("aria-live","assertive");
      var submit=document.createElement("button");submit.type="submit";submit.className="jkt-journal-lead-submit";submit.textContent="SUBMIT TO READ";
      form.appendChild(nameWrap);form.appendChild(emailWrap);form.appendChild(phoneWrap);form.appendChild(consentLabel);form.appendChild(honeypot);form.appendChild(error);form.appendChild(submit);
      gate.appendChild(gateTitle);gate.appendChild(intro);gate.appendChild(form);
      nameInput.focus();
      function send(body){
        return window.fetch(WEBHOOK_URL,{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(body),credentials:"omit"}).then(function(response){
          if(!response.ok)throw new Error("Webhook did not accept the submission");
          return true;
        }).catch(function(){
          if(window.navigator&&typeof window.navigator.sendBeacon==="function"){
            var sent=window.navigator.sendBeacon(WEBHOOK_URL,new Blob([JSON.stringify(body)],{type:"application/json"}));
            if(sent)return true;
          }
          throw new Error("Unable to send the submission");
        });
      }
      form.addEventListener("submit",function(event){
        event.preventDefault();
        error.textContent="";
        if(honeypot.value){error.textContent="Please try again.";return;}
        if(!nameInput.value.trim()){error.textContent="Please enter your name.";nameInput.focus();return;}
        if(!emailInput.checkValidity()){error.textContent="Please enter a valid email address.";emailInput.focus();return;}
        if(!consentInput.checked){error.textContent="Please check the opt-in box to continue.";consentInput.focus();return;}
        submit.disabled=true;submit.textContent="SENDING...";
        var submittedAt=new Date().toISOString();
        var fullName=clean(nameInput.value),email=clean(emailInput.value).toLowerCase(),phone=clean(phoneInput.value);
        var payloadData={"Name":fullName,"Email":email,"Phone":phone,"Newsletter-Opt-In":"true","Group":"Journal Articles","Your-Guide":info.title+" | "+info.href,"Journal Article":info.title,"Article URL":info.href,"Source":"JustKeeps Travel Journal Article Gate"};
        var body={payload:{data:payloadData,submittedAt:submittedAt,id:"jkt-journal-gate-"+Date.now().toString(36),formId:"jkt-journal-article-gate",formElementId:"jkt-journal-article-gate",pageId:PAGE,publishedPath:"/journal",pageUrl:window.location.origin+window.location.pathname,schema:[],localeId:null},source:"JustKeeps Travel Journal Article Gate",submittedAt:submittedAt,articleTitle:info.title,articleUrl:window.location.origin+info.href,name:fullName,email:email,phone:phone,optIn:true};
        send(body).then(function(){
          remember();
          gate.innerHTML="";
          var success=document.createElement("p");success.className="jkt-journal-lead-success";success.setAttribute("role","status");success.textContent="Thank you. Opening your guide.";gate.appendChild(success);
          read.style.display="block";read.removeAttribute("aria-hidden");read.tabIndex=0;submit.disabled=false;
          window.setTimeout(function(){window.location.href=info.href;},180);
        }).catch(function(){
          submit.disabled=false;submit.textContent="SUBMIT TO READ";error.textContent="We couldn’t open this guide just yet. Please try again.";
        });
      });
    };
    modal.__jktOpen=function(info,trigger){
      modal.__jktLastTrigger=trigger;
      modal.__jktSync(info);
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden","false");
      document.body.style.overflow="hidden";
      var close=modal.querySelector(".jkt-journal-modal-close");
      if(allowed()){close.focus();}else{var first=modal.querySelector("input:not(.jkt-journal-lead-honeypot)");if(first)first.focus();else close.focus();}
    };
    return modal;
  }
  function boot(){
    var modal=buildModal();
    if(document.documentElement.getAttribute("data-jkt-journal-lead-wiring")==="1")return;
    document.documentElement.setAttribute("data-jkt-journal-lead-wiring","1");
    document.addEventListener("click",function(e){
      var anchor=e.target.closest&&e.target.closest("a[href^='/journal/']");
      if(!anchor)return;
      if(!anchor.closest("#jkg"))return;
      var info=infoFrom(anchor);
      if(!info.href)return;
      e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();
      modal.__jktOpen(info,anchor);
    },true);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
  window.setTimeout(boot,500);window.setTimeout(boot,1500);
})();
}catch(e){console.warn("jkt template block failed: jkt-journal-article-lead-gate-2026-09-11",e)}

/* jkt-journal-article-back-button-script-2026-09-11 */
try{
(function(){
  function apply(){
    document.querySelectorAll("#jkt2-root a.jkt2-back").forEach(function(link){
      link.setAttribute("href","/journal");
      link.textContent="BACK TO JOURNAL";
      link.setAttribute("aria-label","Back to Journal");
    });
  }
  document.addEventListener("click",function(event){
    var link=event.target.closest&&event.target.closest("#jkt2-root a.jkt2-back");
    if(!link)return;
    event.preventDefault();
    event.stopImmediatePropagation();
    window.location.assign("/journal");
  },true);
  apply();
  [0,250,1000,2500].forEach(function(delay){window.setTimeout(apply,delay);});
})();
}catch(e){console.warn("jkt template block failed: jkt-journal-article-back-button-script-2026-09-11",e)}

/* jkt-journal-article-presentation-fix-script-2026-09-11 */
try{
(function(){
  var PAGE="6a2cde5eae15e28840bdbc81";
  if(document.documentElement.getAttribute("data-wf-page")!==PAGE)return;
  var OPENING_PATHS={
    "/journal/corinthia-rome-2026-opening-guide":true,
    "/journal/amanvari-east-cape-mexico-2026-opening-guide":true,
    "/journal/rosewood-rome-2027-opening-preview":true,
    "/journal/rosewood-the-raleigh-miami-beach-opening-preview":true,
    "/journal/delano-miami-beach-2026-reopening-guide":true,
    "/journal/mandarin-oriental-punta-negra-mallorca-opening-guide":true,
    "/journal/four-seasons-cartagena-opening-guide":true,
    "/journal/danieli-venezia-four-seasons-hotel-opening-guide":true
  };
  function cleanPath(value){
    value=String(value||"");
    return value.length>1&&value.charAt(value.length-1)==="/" ? value.slice(0,-1) : value;
  }
  function fixOpeningLabel(){
    if(!OPENING_PATHS[cleanPath(window.location.pathname)])return;
    var roots=[document.querySelector("#jkt2-root"),document.querySelector(".journal_template_wrapper"),document.body];
    for(var r=0;r<roots.length;r+=1){
      var root=roots[r];
      if(!root)continue;
      var metas=root.querySelectorAll(".journal_box_cate");
      for(var i=0;i<metas.length;i+=1){
        var meta=metas[i],first=meta.querySelector("div");
        var label=first?(first.textContent||"").trim():"";
        if(first&&/PROPERTY REVIEWS/i.test(label)){
          first.textContent="OPENINGS";
          meta.setAttribute("data-jkt-category-fixed","OPENINGS");
          return;
        }
      }
    }
  }
  function removeDestinationCards(){
    var sections=document.querySelectorAll(".relative_wrapper");
    for(var s=0;s<sections.length;s+=1){
      var section=sections[s];
      var items=Array.prototype.slice.call(section.querySelectorAll(".journal_category_item"));
      if(!items.length)continue;
      for(var i=0;i<items.length;i+=1){
        var item=items[i],categoryNode=item.querySelector(".journal_box_cate");
        var category=categoryNode?(categoryNode.textContent||""):"";
        if(/DESTINATION GUIDES/i.test(category))item.remove();
      }
      if(!section.querySelector(".journal_category_item"))section.classList.add("jkt-related-destinations-removed");
    }
  }
  function apply(){fixOpeningLabel();removeDestinationCards();}
  function boot(){
    apply();
    [180,500,1000,1800,3000,4800,6800].forEach(function(delay){window.setTimeout(apply,delay);});
    if(window.MutationObserver&&document.body){
      var pending=false,stopped=false;
      var observer=new MutationObserver(function(){
        if(stopped||pending)return;
        pending=true;
        window.setTimeout(function(){pending=false;if(!stopped)apply();},180);
      });
      observer.observe(document.body,{childList:true,subtree:true});
      window.setTimeout(function(){stopped=true;observer.disconnect();},7000);
    }
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();
}catch(e){console.warn("jkt template block failed: jkt-journal-article-presentation-fix-script-2026-09-11",e)}

/* jkt-vp-intro-singleton-2026-09-16 */
try{
(function(){
  var target="/journal/vp-plaza-espana-design-hotel-review";
  function place(){
    if((location.pathname||"").replace(/\/+$/,"")!==target)return;
    var intro=document.querySelector("#jkt2-body-root .jkt2-intro");
    var source=document.querySelector(".journal_template_wrapper .bio_wrap .w-richtext");
    if(!intro||!source)return;
    var paragraphs=[].slice.call(document.querySelectorAll('[data-jkt-vp-intro="1"]'));
    if(paragraphs.length<2){
      paragraphs=[].slice.call(source.children).filter(function(node){return node.tagName==="P"&&node.textContent.trim();}).slice(0,2);
      if(paragraphs.length<2)return;
      paragraphs.forEach(function(node){node.setAttribute("data-jkt-vp-intro","1");});
    }
    if(intro.children.length!==2||intro.children[0]!==paragraphs[0]||intro.children[1]!==paragraphs[1])intro.replaceChildren(paragraphs[0],paragraphs[1]);
  }
  function start(){[120,350,800,1600,3000,5000].forEach(function(delay){setTimeout(place,delay);});}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});else start();
})();
}catch(e){console.warn("jkt template block failed: jkt-vp-intro-singleton-2026-09-16",e)}
