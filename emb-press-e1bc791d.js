/* emb-press-e1bc791d block 2 */
try{
(function(){
 function openPressTranscript(){
  var id=(window.location.hash||"").slice(1);
  if(!id)return;
  var panel=document.getElementById(id);
  if(panel&&panel.tagName==="DETAILS"){
   panel.open=true;
   window.setTimeout(function(){panel.scrollIntoView({behavior:"smooth",block:"start"});},30);
  }
 }
 document.addEventListener("click",function(event){
  var link=event.target.closest('a[href^="#"][href$="-transcript"]');
  if(!link)return;
  var panel=document.querySelector(link.getAttribute("href"));
  if(panel&&panel.tagName==="DETAILS")panel.open=true;
 });
 window.addEventListener("hashchange",openPressTranscript);
 if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",openPressTranscript,{once:true});}else{openPressTranscript();}
})();
}catch(e){console.warn("jkt embed block failed: emb-press-e1bc791d block 2",e)}
