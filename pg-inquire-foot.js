/* jkt-inquire-option-1-consolidated-script-2026-09-04 */
try{
(function(){
  var pageId="6a82f40c1e7e7decef2e2138";
  var requiredIds=["Name","email","Travel-Type","datepicker","Destination-s-of-Interest","Tell-Us-About-Your-Trip"];
  var optionalIds=["Phone","NUMBER-OF-TRAVELERS","Budget-Range"];
  var labels={
    "Name":"Name",
    "email":"Email",
    "Phone":"Telephone (optional)",
    "Travel-Type":"Travel style",
    "datepicker":"Trip timing",
    "NUMBER-OF-TRAVELERS":"Travelers (optional)",
    "Budget-Range":"Trip budget (optional)",
    "Destination-s-of-Interest":"Destinations",
    "Tell-Us-About-Your-Trip":"A few details"
  };
  function field(id){return document.getElementById(id)}
  function fieldLabel(id){
    var target=field(id);
    if(!target)return null;
    if(target.labels&&target.labels.length)return target.labels[0];
    var explicit=document.querySelector('label[for="'+id+'"]')||(id==="Name"?document.querySelector('label[for="First-Name"]'):null);
    if(explicit)return explicit;
    var item=target.closest(".contact_form_item");
    return item?item.querySelector(".contact_form_label"):null;
  }
  function configureField(id,isRequired){
    var control=field(id);
    if(!control)return;
    control.required=isRequired;
    if(isRequired)control.setAttribute("aria-required","true");
    else control.removeAttribute("aria-required");
    var label=fieldLabel(id);
    if(!label)return;
    label.setAttribute("for",id);
    label.textContent=labels[id]||label.textContent.replace(/\s*\*\s*$/,"").trim();
    if(isRequired){
      var star=document.createElement("span");
      star.className="jkt-required-star";
      star.setAttribute("aria-hidden","true");
      star.textContent="*";
      label.appendChild(star);
    }
  }
  function preselectTravelStyle(){
    var select=field("Travel-Type");
    if(!select)return;
    var requested=(new URLSearchParams(window.location.search).get("travel-type")||"").toLowerCase();
    var map={leisure:"Leisure",executive:"Corporate",corporate:"Corporate",group:"Group Travel",entertainment:"Entertainment",concierge:"Concierge"};
    var label=map[requested];
    if(!label)return;
    var option=Array.prototype.find.call(select.options,function(item){return item.value===label||item.textContent.trim()===label});
    if(option){select.value=option.value;select.dispatchEvent(new Event("change",{bubbles:true}))}
  }
  function resetSubmit(form,submit){
    delete form.dataset.jktSubmitting;
    form.setAttribute("aria-busy","false");
    submit.disabled=false;
    submit.removeAttribute("aria-disabled");
    submit.value="Send Inquiry";
  }
  function init(){
    if(document.documentElement.getAttribute("data-wf-page")!==pageId)return;
    var main=document.querySelector("main");
    var hero=main&&main.querySelector(":scope > .destinations_banner_wrapper");
    var panel=document.getElementById("travel");
    var form=document.getElementById("inquiry_form");
    var formBlock=document.getElementById("inquiry_form_block");
    if(!main||!hero||!panel||!form||!formBlock)return;

    var shell=main.querySelector(":scope > .jkt-inquire-editorial");
    if(!shell){
      shell=document.createElement("div");
      shell.className="jkt-inquire-editorial";
      main.insertBefore(shell,hero);
      shell.appendChild(hero);
      shell.appendChild(panel);
    }
    hero.classList.add("jkt-inquire-editorial-media");
    panel.classList.add("jkt-inquire-editorial-panel");

    var intro=hero.querySelector(".section_header.destinations_banner_wrap");
    var grid=panel.querySelector(".contact_wrap_grid");
    if(intro&&grid){
      intro.classList.add("jkt-inquire-editorial-intro");
      if(intro.parentElement!==grid)grid.insertBefore(intro,grid.firstChild);
      var eyebrow=intro.querySelector(".tagline");
      var title=intro.querySelector("h1");
      var copy=intro.querySelector("p");
      if(eyebrow)eyebrow.textContent="Private travel inquiry";
      if(title)title.textContent="Let’s begin.";
      if(copy)copy.textContent="Share the essentials. We’ll take it from there.";
    }

    requiredIds.forEach(function(id){configureField(id,true)});
    optionalIds.forEach(function(id){configureField(id,false)});

    var timing=field("datepicker");
    if(timing){
      timing.type="text";
      timing.readOnly=false;
      timing.removeAttribute("readonly");
      timing.autocomplete="off";
      timing.placeholder="Exact, approximate, or flexible";
    }
    var destinations=field("Destination-s-of-Interest");
    if(destinations)destinations.placeholder="Where would you like to go?";
    var details=field("Tell-Us-About-Your-Trip");
    if(details)details.placeholder="Preferences, special moments, or anything we should know…";
    var travelers=field("NUMBER-OF-TRAVELERS");
    if(travelers)travelers.setAttribute("inputmode","numeric");
    preselectTravelStyle();

    var submit=form.querySelector('input[type="submit"]');
    if(submit){
      submit.value="Send Inquiry";
      submit.setAttribute("value","Send Inquiry");
      var submitRow=submit.parentElement;
      if(submitRow){
        submitRow.classList.add("jkt-inquire-submit-row");
        var note=submitRow.querySelector(".form-next-step-note");
        if(note){note.textContent="Replies within 24 hours.";note.setAttribute("aria-label","Replies within 24 hours");}
      }
      form.setAttribute("aria-busy","false");
      form.addEventListener("submit",function(event){
        if(form.dataset.jktSubmitting==="true"){
          event.preventDefault();
          event.stopImmediatePropagation();
          return;
        }
        if(!form.checkValidity())return;
        form.dataset.jktSubmitting="true";
        form.setAttribute("aria-busy","true");
        submit.setAttribute("aria-disabled","true");
        submit.value="Sending…";
        window.requestAnimationFrame(function(){submit.disabled=true});
      },true);
      form.addEventListener("invalid",function(event){
        if(event.target&&event.target.classList){
          event.target.classList.add("jkt-field-invalid");
          event.target.setAttribute("aria-invalid","true");
        }
      },true);
      form.addEventListener("input",function(event){
        if(event.target&&event.target.classList&&event.target.checkValidity()){
          event.target.classList.remove("jkt-field-invalid");
          event.target.removeAttribute("aria-invalid");
        }
      });
    }

    var info=panel.querySelector(".contact_info_wrap");
    if(info){
      info.className="contact_info_wrap jkt-inquire-actions-only";
      info.setAttribute("aria-label","Personal contact options");
      info.innerHTML='<div class="jkt-inquire-actions"><a href="/book">Arrange a call</a><a href="https://wa.me/13057974900" target="_blank" rel="noopener">WhatsApp</a><a href="mailto:hello@justkeepstravel.com?subject=New%20Travel%20Inquiry">Email</a></div>';
    }

    var success=formBlock.querySelector(".success_message");
    var failure=formBlock.querySelector(".error_message");
    if(success){
      success.setAttribute("role","status");
      success.setAttribute("aria-live","polite");
      success.setAttribute("tabindex","-1");
      success.innerHTML='<h2>Thank you.</h2><p>Your inquiry is with us. Justin will be in touch personally.</p><a class="jkt-success-book" href="/book">Choose a call time</a>';
    }
    if(failure){
      failure.setAttribute("role","alert");
      failure.setAttribute("aria-live","assertive");
      failure.setAttribute("tabindex","-1");
      failure.innerHTML='<p>We couldn’t send your inquiry. Please try again, or email <a href="mailto:hello@justkeepstravel.com">hello@justkeepstravel.com</a>.</p>';
    }
    function enforceAnnouncementSemantics(){
      if(success){
        if(success.getAttribute("role")!=="status")success.setAttribute("role","status");
        if(success.getAttribute("aria-live")!=="polite")success.setAttribute("aria-live","polite");
        if(success.getAttribute("tabindex")!=="-1")success.setAttribute("tabindex","-1");
      }
      if(failure){
        if(failure.getAttribute("role")!=="alert")failure.setAttribute("role","alert");
        if(failure.getAttribute("aria-live")!=="assertive")failure.setAttribute("aria-live","assertive");
        if(failure.getAttribute("tabindex")!=="-1")failure.setAttribute("tabindex","-1");
      }
    }
    enforceAnnouncementSemantics();
    var announcementObserver=new MutationObserver(enforceAnnouncementSemantics);
    if(success)announcementObserver.observe(success,{attributes:true,attributeFilter:["role","aria-live","tabindex"]});
    if(failure)announcementObserver.observe(failure,{attributes:true,attributeFilter:["role","aria-live","tabindex"]});

    if(submit&&success&&failure){
      var statusObserver=new MutationObserver(function(){
        var successVisible=window.getComputedStyle(success).display!=="none";
        var failureVisible=window.getComputedStyle(failure).display!=="none";
        if(successVisible){
          form.setAttribute("aria-busy","false");
          submit.value="Sent";
          submit.setAttribute("aria-disabled","true");
          success.focus({preventScroll:true});
          success.scrollIntoView({block:"nearest"});
        }else if(failureVisible){
          resetSubmit(form,submit);
          failure.focus({preventScroll:true});
          failure.scrollIntoView({block:"nearest"});
        }
      });
      statusObserver.observe(success,{attributes:true,attributeFilter:["style","class"]});
      statusObserver.observe(failure,{attributes:true,attributeFilter:["style","class"]});
    }
    document.documentElement.classList.add("jkt-inquire-ready");
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init,{once:true});else init();
})();
}catch(e){console.warn("jkt page block failed: jkt-inquire-option-1-consolidated-script-2026-09-04",e)}
