/* emb-home-870ba252 block 2 */
try{
(function(){
  var choices={
    "Maldives-Resort-Guide-2026":{href:"/journal/ultimate-luxury-maldives-travel-guide",label:"Open the Maldives Resort Guide"},
    "Japan-Best-Time-to-Travel":{href:"/journal/first-time-japan-cherry-blossom-guide",label:"Open the Japan Travel Guide"},
    "Ultimate-Safari-Planning-Guide":{href:"/journal/east-africa-safari-guide",label:"Open the East Africa Safari Guide"},
    "Luxury-Travel-Planning-Checklist":{href:"https://s3.amazonaws.com/webflow-prod-assets/6a1f886348e8c1c8bceca358/6a8d8b5babd075f929ae3261_Justkeeps-Travel-Luxury-Travel-Planning-Checklist.pdf",label:"Open the Luxury Travel Planning Checklist"}
  };
  var form=document.querySelector('form[data-name="Your Guide"],form[name="Your Guide"],#wf-form-Your-Guide');
  var link=document.getElementById("jkt-guide-access-link");
  if(!link)return;
  function selectedId(){
    var checked=form&&form.querySelector('input[type="radio"]:checked');
    return checked&&checked.id||sessionStorage.getItem("jktGuideChoice")||"Luxury-Travel-Planning-Checklist";
  }
  function render(){
    var id=selectedId(),choice=choices[id]||choices["Luxury-Travel-Planning-Checklist"];
    link.href=choice.href;link.textContent=choice.label;
  }
  function remember(){var id=selectedId();if(choices[id])sessionStorage.setItem("jktGuideChoice",id);render()}
  if(form){form.addEventListener("change",remember);form.addEventListener("submit",remember)}
  render();
})();
}catch(e){console.warn("jkt embed block failed: emb-home-870ba252 block 2",e)}
