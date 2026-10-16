/* jkt-entertainment-faq-accordion-2026-10-06 */
try{
(function(){
function build(){
 document.querySelectorAll('main[data-jkt-entertainment-page="true"] .fishfaq .ent-content-wrap').forEach(function(wrap){
   if(wrap.querySelector('.jkt-faq-accordion')) return;
   var title=wrap.querySelector('h2');
   var children=Array.from(wrap.children);
   var box=document.createElement('div'); box.className='jkt-faq-accordion';
   var changed=false;
   for(var i=0;i<children.length;i++){
     var q=children[i];
     if(q.tagName==='H3' && children[i+1] && children[i+1].tagName==='P'){
       var a=children[i+1];
       var d=document.createElement('details');
       var s=document.createElement('summary');
       q.classList.add('jkt-faq-question');
       a.classList.add('jkt-faq-answer');
       s.appendChild(q);
       d.appendChild(s);
       d.appendChild(a);
       box.appendChild(d);
       i++; changed=true;
     }
   }
   if(changed){
     if(title) title.insertAdjacentElement('afterend',box); else wrap.prepend(box);
   }
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build,{once:true}); else build();
})();
}catch(e){console.warn("jkt page block failed: jkt-entertainment-faq-accordion-2026-10-06",e)}
