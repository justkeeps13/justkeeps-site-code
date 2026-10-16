/* jkt-destinations-content-image-polish-2026-09-04 */
try{
(function(){function init(){if(document.documentElement.getAttribute('data-wf-page')!=='6a2bd4ee7e0c8c8a15b02699')return;var close=[].slice.call(document.querySelectorAll('h2')).find(function(h){return /Don.t See Your Dream Destination/i.test(h.textContent);});if(close){close.textContent='Have somewhere else in mind?';var box=close.parentElement;var p=box&&box.querySelector('p');var a=box&&box.querySelector('a');if(p)p.textContent='These are a few places we know well. Tell us where you want to go, and we’ll help shape the timing, route and details.';if(a)a.textContent='Plan Your Journey';}document.querySelectorAll('.destinations_wrapper img').forEach(function(img,index){if(index>1&&!img.hasAttribute('loading'))img.loading='lazy';img.decoding='async';});}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();})();
}catch(e){console.warn("jkt page block failed: jkt-destinations-content-image-polish-2026-09-04",e)}

/* jkt-destinations-query-handoff-2026-09-06 */
try{
(function(){
  function applyDestinationQuery(){
    var term=(new URLSearchParams(window.location.search).get("search")||"").trim();
    if(!term)return;
    var input=document.getElementById("jkx-q");
    var directory=document.getElementById("jkx");
    if(!input)return;
    input.value=term;
    input.dispatchEvent(new Event("input",{bubbles:true}));
    window.requestAnimationFrame(function(){
      if(directory)directory.scrollIntoView({block:"start"});
      input.focus({preventScroll:true});
    });
  }
  function start(){
    if(document.getElementById("jkx-q")){applyDestinationQuery();return;}
    var tries=0;
    var timer=setInterval(function(){
      if(document.getElementById("jkx-q")){clearInterval(timer);applyDestinationQuery();}
      else if(++tries>40)clearInterval(timer);
    },150);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});
  else start();
})();
}catch(e){console.warn("jkt page block failed: jkt-destinations-query-handoff-2026-09-06",e)}

/* jkt-destinations-results-a11y-script-2026-09-10 */
try{
(function(){
  function sync(root,out,q){
    var term=(q.value||'').trim(),hasResults=!!out.querySelector('.jkx__reg'),message=out.querySelector('.jkt-audit-empty,.jkx__empty-live');
    if(!term||hasResults){if(message)message.remove();return;}
    if(!message){message=document.createElement('p');message.className='jkt-audit-empty';message.setAttribute('role','status');message.textContent='No matching destinations found. Try another search.';out.appendChild(message);}
  }
  function boot(){
    var root=document.getElementById('jkx'),out=document.getElementById('jkx-out'),q=document.getElementById('jkx-q'),ct=document.getElementById('jkx-ct');
    if(!root||!out||!q||!ct){window.setTimeout(boot,150);return;}
    ct.setAttribute('role','status');ct.setAttribute('aria-live','polite');ct.setAttribute('aria-atomic','true');
    if(root.getAttribute('data-jkt-results-a11y')==='1')return;
    root.setAttribute('data-jkt-results-a11y','1');
    var observer=new MutationObserver(function(){sync(root,out,q);});
    observer.observe(out,{childList:true,subtree:true});
    q.addEventListener('input',function(){window.requestAnimationFrame(function(){sync(root,out,q);});});
    sync(root,out,q);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
}catch(e){console.warn("jkt page block failed: jkt-destinations-results-a11y-script-2026-09-10",e)}

/* jkt-destinations-search-autocomplete-2026-09-10 */
try{
(function(){
  var PAGE="6a2bd4ee7e0c8c8a15b02699";
  var EXTRA=[
    {name:"Milan",href:"/destinations/milan",region:"Europe & Mediterranean",country:"Italy",desc:"Milan, Italy. Design, art, food, and neighbourhoods that make the city more interesting than its famous shopping streets.",src:"https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa2e877bf614d31c1d643ea_6aa2e6e033f7907910f73e99_milan-hero-v1.jpeg",alt:"Milan Brera street at blue hour with warm shop windows and the Duomo beyond"},
    {name:"Lucerne",href:"/destinations/lucerne",region:"Europe & Mediterranean",country:"Switzerland",desc:"Lucerne, Switzerland. Lake, old town, mountain railways, and a compact city that makes central Switzerland easy to enter.",src:"https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa2e876bf614d31c1d643ca_6aa2e6e0e7d0e992a343e438_lucerne-hero-v1.jpeg",alt:"Lucerne waterfront with Chapel Bridge, old town, and mountains reflected in the lake"},
    {name:"Megève",href:"/destinations/megeve",region:"Europe & Mediterranean",country:"France",desc:"Megève, France. A handsome French Alpine village where skiing, food, spa time, and simple walks all belong to the same day.",src:"https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa2e877bf614d31c1d643ee_6aa2e6e08b6547603f718fdc_megeve-hero-v1.jpeg",alt:"Snowy Megève village square with stone buildings, a church, and the Alps beyond"},
    {name:"Chamonix",href:"/destinations/chamonix",region:"Europe & Mediterranean",country:"France",desc:"Chamonix, France. Mont Blanc scale, a real valley town, and flexible mountain days with food and culture between them.",src:"https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa2e877bf614d31c1d643d2_6aa2e877bf614d31c1d643d2_6aa2e6e0063f66fb21233b7f_chamonix-hero-v1.jpeg",alt:"Chamonix valley and chalet roofs beneath the Mont Blanc massif at dawn"}
  ];
  function norm(v){
    return String(v||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g," ").trim();
  }
  function countryMap(){
    var script=[].slice.call(document.scripts).find(function(s){return (s.textContent||"").indexOf("COUNTRY_BY_SLUG=")>-1;});
    if(!script)return {};
    var match=(script.textContent||"").match(/var COUNTRY_BY_SLUG\s*=\s*(\{[\s\S]*?\});/);
    if(!match)return {};
    try{return JSON.parse(match[1]);}catch(e){return {};}
  }
  function boot(){
    if(document.documentElement.getAttribute("data-wf-page")!==PAGE)return;
    if(document.getElementById("jkt-dest-autocomplete"))return;
    var root=document.getElementById("jkx");
    var input=root&&root.querySelector(".jkx__in");
    var find=root&&root.querySelector(".jkx__find");
    if(!root||!input||!find){window.setTimeout(boot,180);return;}
    var countries=countryMap(), data=[], seen={}, FALLBACK_COUNTRIES={"bahamas":"Bahamas","bali":"Indonesia","banff-lake-louise":"Canada","bangkok":"Thailand","barbados":"Barbados","barcelona":"Spain","beijing":"China","belgrade":"Serbia","belize":"Belize","bergen":"Norway","bilbao":"Spain","bordeaux":"France","boston":"United States","bora-bora":"French Polynesia","brussels":"Belgium","bruges":"Belgium","budapest":"Hungary","buenos-aires":"Argentina","busan":"South Korea"};
    function countryFor(href){
      var slug=String(href||"").split("/").filter(Boolean).pop()||"";
      return countries[slug]||FALLBACK_COUNTRIES[slug]||"";
    }
    [].slice.call(document.querySelectorAll(".destinations_wrapper .destinations_curated_item")).forEach(function(el){
      var name=(el.querySelector("h3")||{}).textContent;
      var href=el.getAttribute("href")||"";
      var wrapper=el.closest(".destinations_wrapper");
      var heading=wrapper&&wrapper.querySelector(".destinations_wrapp_title h2,h2");
      var img=el.querySelector("img");
      var item={name:String(name||"").replace(/\s+/g," ").trim(),href:href,region:String(heading?heading.textContent:"").replace(/\s+/g," ").trim(),country:countryFor(href),desc:String((el.querySelector(".destinations_curated_content div")||{}).textContent||"").replace(/\s+/g," ").trim(),src:img?img.getAttribute("src")||"":"",alt:img?img.getAttribute("alt")||"":""};
      if(item.name&&item.href&&!seen[item.href]){seen[item.href]=1;data.push(item);}
    });
    EXTRA.forEach(function(item){if(!seen[item.href]){seen[item.href]=1;data.push(item);}});
    if(data.length<325){window.setTimeout(boot,300);return;}
    var box=document.createElement("div");
    box.id="jkt-dest-autocomplete";
    box.className="jkt-dest-autocomplete";
    box.setAttribute("role","listbox");
    box.setAttribute("aria-label","Destination suggestions");
    find.appendChild(box);
    input.setAttribute("role","combobox");
    input.setAttribute("aria-autocomplete","list");
    input.setAttribute("aria-controls",box.id);
    input.setAttribute("aria-expanded","false");
    var activeIndex=-1, activeMatches=[];
    var out=document.getElementById("jkx-out"), ct=document.getElementById("jkx-ct");
    function countText(n){return n+" of "+data.length+" destinations";}
    function syncInline(){
      if(!root.classList.contains("jkt-dest-autocomplete-active"))return;
      var label=countText(activeMatches.length);
      if(ct&&ct.textContent!==label)ct.textContent=label;
    }
    var observer=new MutationObserver(syncInline);
    if(ct)observer.observe(ct,{childList:true,characterData:true,subtree:true});
    if(out)observer.observe(out,{childList:true,subtree:true});
    function close(){
      box.classList.remove("is-open");
      input.setAttribute("aria-expanded","false");
      root.classList.remove("jkt-dest-autocomplete-active");
      activeIndex=-1; activeMatches=[];
    }
    function select(href){if(href)window.location.href=href;}
    function regionStartsWith(value,q){var n=norm(value);return n===q||n.indexOf(q+" ")===0;}
    function rank(item,q){
      var n=norm(item.name),c=norm(item.country),r=norm(item.region);
      if(n===q)return 0;
      if(n.indexOf(q)===0)return 1;
      if(c===q)return 2;
      if(c.indexOf(q)>=0)return 3;
      if(regionStartsWith(r,q))return 4;
      return 5;
    }
    function matches(term){
      var q=norm(term);
      if(!q)return [];
      return data.filter(function(item){return norm(item.name).indexOf(q)===0||norm(item.country).indexOf(q)>=0||regionStartsWith(item.region,q);}).sort(function(a,b){
        var byRank=rank(a,q)-rank(b,q);
        if(byRank)return byRank;
        return a.name.localeCompare(b.name,undefined,{sensitivity:"base"});
      });
    }
    function setActive(index){
      var rows=[].slice.call(box.querySelectorAll(".jkt-dest-autocomplete-row"));
      activeIndex=index;
      rows.forEach(function(row,i){row.classList.toggle("is-active",i===activeIndex);row.setAttribute("aria-selected",i===activeIndex?"true":"false");});
      if(rows[activeIndex])rows[activeIndex].scrollIntoView({block:"nearest"});
    }
    function render(){
      var term=(input.value||"").trim();
      if(!term){close();return;}
      activeMatches=matches(term);
      root.classList.add("jkt-dest-autocomplete-active");
      box.innerHTML="";
      var head=document.createElement("div");
      head.className="jkt-dest-autocomplete-head";
      var left=document.createElement("span");
      left.textContent="Destinations";
      var right=document.createElement("span");
      right.textContent=activeMatches.length+" matches";
      head.appendChild(left);head.appendChild(right);box.appendChild(head);
      if(!activeMatches.length){
        var empty=document.createElement("div");
        empty.className="jkt-dest-autocomplete-empty";
        empty.setAttribute("role","status");
        empty.textContent="No matching destinations found. Try another search.";
        box.appendChild(empty);
      }else{
        activeMatches.forEach(function(item,i){
          var row=document.createElement("button");
          row.type="button";row.className="jkt-dest-autocomplete-row";row.setAttribute("role","option");row.setAttribute("aria-selected","false");row.setAttribute("data-dest-href",item.href);row.id="jkt-dest-suggestion-"+i;
          var thumb;
          if(item.src){thumb=document.createElement("img");thumb.src=item.src;thumb.alt=item.alt||item.name;thumb.loading="lazy";thumb.decoding="async";}
          else{thumb=document.createElement("span");thumb.className="jkt-dest-autocomplete-thumb is-placeholder";thumb.setAttribute("aria-hidden","true");}
          if(item.src)thumb.className="jkt-dest-autocomplete-thumb";
          var meta=document.createElement("span");meta.className="jkt-dest-autocomplete-meta";
          var country=document.createElement("span");country.className="jkt-dest-autocomplete-country";country.textContent=item.country||item.region;
          var name=document.createElement("span");name.className="jkt-dest-autocomplete-name";name.textContent=item.name;
          meta.appendChild(country);meta.appendChild(name);row.appendChild(thumb);row.appendChild(meta);
          row.addEventListener("mouseenter",function(){setActive(i);});
          row.addEventListener("click",function(){select(item.href);});
          box.appendChild(row);
        });
        setActive(-1);
      }
      box.classList.add("is-open");
      input.setAttribute("aria-expanded","true");
      syncInline();
    }
    input.addEventListener("input",function(){window.requestAnimationFrame(render);});
    input.addEventListener("keydown",function(e){
      var rows=[].slice.call(box.querySelectorAll(".jkt-dest-autocomplete-row"));
      if(e.key==="ArrowDown"&&rows.length){e.preventDefault();setActive(Math.min(activeIndex+1,rows.length-1));}
      else if(e.key==="ArrowUp"&&rows.length){e.preventDefault();setActive(Math.max(activeIndex-1,0));}
      else if(e.key==="Escape"&&box.classList.contains("is-open")){e.preventDefault();close();}
      else if(e.key==="Enter"&&activeIndex>=0&&activeMatches[activeIndex]){e.preventDefault();select(activeMatches[activeIndex].href);}
      else if(e.key==="Enter"&&activeMatches.length===1){e.preventDefault();select(activeMatches[0].href);}
    });
    document.addEventListener("click",function(e){if(!find.contains(e.target))close();},true);
    render();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
  window.setTimeout(boot,500);window.setTimeout(boot,1500);
})();
}catch(e){console.warn("jkt page block failed: jkt-destinations-search-autocomplete-2026-09-10",e)}
