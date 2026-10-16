/* jkt-journal-lead-gate-v2-2026-09-28 */
try{
(function(){
  var PAGE="6a2cde5eae15e28840bdbc81",LIST_PAGE="6a2ce6767b5b0788750dfb0f",CUR=document.documentElement.getAttribute("data-wf-page");
  var MODAL_ID="jkt-journal-article-modal-2026-09-11";
  var STORAGE_KEY="jkt-destination-article-access-v1";
  var WEBHOOK_URL="https://hook.us2.make.com/x9gjkeiltn4gkhxq3jrdssqaa41l688k";
  if(CUR!==PAGE&&CUR!==LIST_PAGE)return;
  if(window.__jktJournalGateV2)return;window.__jktJournalGateV2=true;
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
      var skip=document.createElement("button");skip.type="button";skip.className="jkt-journal-lead-skip";skip.textContent="NO THANKS, JUST SHOW ME THE ARTICLE";
      skip.addEventListener("click",function(){remember();window.location.href=info.href;});
      form.appendChild(nameWrap);form.appendChild(emailWrap);form.appendChild(phoneWrap);form.appendChild(consentLabel);form.appendChild(honeypot);form.appendChild(error);form.appendChild(submit);form.appendChild(skip);
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
        var body={payload:{data:payloadData,submittedAt:submittedAt,id:"jkt-journal-gate-"+Date.now().toString(36),formId:"jkt-journal-article-gate",formElementId:"jkt-journal-article-gate",pageId:CUR,publishedPath:"/journal",pageUrl:window.location.origin+window.location.pathname,schema:[],localeId:null},source:"JustKeeps Travel Journal Article Gate",submittedAt:submittedAt,articleTitle:info.title,articleUrl:window.location.origin+info.href,name:fullName,email:email,phone:phone,optIn:true};
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
    if(document.documentElement.getAttribute("data-jkt-journal-lead-wiring-v2")==="1")return;
    document.documentElement.setAttribute("data-jkt-journal-lead-wiring-v2","1");
    document.addEventListener("click",function(e){
      var anchor=e.target.closest&&e.target.closest("a[href^='/journal/']");
      if(!anchor)return;
      if(!anchor.closest("#jkg"))return;
      var info=infoFrom(anchor);
      if(!info.href||info.href==="/journal"||allowed())return;
      e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();
      modal.__jktOpen(info,anchor);
    },true);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
  window.setTimeout(boot,500);window.setTimeout(boot,1500);
})();
}catch(e){console.warn("jkt page block failed: jkt-journal-lead-gate-v2-2026-09-28",e)}
