/* pg-destinations-head block 2 */
try{
(function(){
  "use strict";
  var PAGE="6a2bd4ee7e0c8c8a15b02699",HOOK="https://hook.us2.make.com/x9gjkeiltn4gkhxq3jrdssqaa41l688k";
  if(location.pathname.replace(/\/+$/,"")!=="/destinations"||document.documentElement.getAttribute("data-wf-page")!==PAGE)return;
  function patch(){
    var form=document.querySelector('form[data-name="Destination Guide Gate"],form[name="wf-form-Destination-Guide-Gate"]');
    if(!form||form.__jktDirectMakePatched)return;
    form.__jktDirectMakePatched=true;
    var wrapper=form.closest(".w-form")||form.parentElement,done=wrapper&&wrapper.querySelector(".w-form-done"),fail=wrapper&&wrapper.querySelector(".w-form-fail");
    form.requestSubmit=function(){
      var data={};
      Array.prototype.forEach.call(form.querySelectorAll("input,textarea,select"),function(field){
        if(!field.name||field.type==="submit"||field.type==="button")return;
        data[field.name]=field.type==="checkbox"?(field.checked?"true":"false"):String(field.value||"");
      });
      data.Name=data.name||data.Name||"";data.Email=data.email||data.Email||"";data["Newsletter-Opt-In"]=form.querySelector('input[name="Newsletter-Opt-In"]')?.checked?"true":"false";
      var body={triggerType:"form_submission",payload:{name:"Destination Guide Gate",siteId:"6a1f886348e8c1c8bceca358",data:data,submittedAt:new Date().toISOString(),id:"destination-"+Date.now()+"-"+Math.random().toString(36).slice(2),formId:"wf-form-Destination-Guide-Gate",formElementId:"8ca1edcd-1f4e-2128-2d60-46d50716dd36",pageId:PAGE,publishedPath:"/destinations",pageUrl:location.href,localeId:null}};
      fetch(HOOK,{method:"POST",mode:"cors",credentials:"omit",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)})
        .then(function(response){if(!response.ok)throw new Error("Make webhook returned "+response.status);if(done){done.style.display="block";done.style.visibility="visible";done.setAttribute("aria-hidden","false")} })
        .catch(function(){if(fail){fail.style.display="block";fail.style.visibility="visible";fail.setAttribute("aria-hidden","false")} });
    };
  }
  patch();
  new MutationObserver(patch).observe(document.documentElement,{childList:true,subtree:true});
})();
}catch(e){console.warn("jkt page block failed: pg-destinations-head block 2",e)}
