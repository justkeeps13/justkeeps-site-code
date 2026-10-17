/* emb-services-tpl-e9ff1b5f block 12 */
try{
(function(){
  var copy={
    leisure:{title:"Start with where you want to be",body:"Rough dates and a place is enough. We will come back with a shape for the trip and an honest view of what it costs."},
    corporate:{title:"One accountable family office travel desk",body:"Start with one journey or one request. We’ll learn how your household and office work, put the right preferences on file and show you how a discreet family office travel desk can take the moving parts off your team."},
    group:{title:"Start with the week and the list",body:"Rough dates, roughly how many people and what the week is for. We will come back with a shape for it and an honest view of what it costs."},
    entertainment:{title:"Send us the routing",body:"Dates, cities and headcount. We will tell you what is tight, what is expensive and what will not work as drawn."},
    concierge:{title:"Ask us for something",body:"Start with one request. It is the fastest way to find out whether this is worth having on hand."}
  };
  function pageKey(){
    var marker=document.querySelector('.jkt-crumb-name')||document.querySelector('.jkt-mast-h1');
    var label=marker&&marker.textContent?marker.textContent.trim().toLowerCase():'';
    if(label.indexOf('luxury leisure')>-1)return 'leisure';
    if(label.indexOf('family office')>-1||label.indexOf('executive')>-1)return 'corporate';
    if(label.indexOf('group')>-1)return 'group';
    if(label.indexOf('entertainment')>-1||label.indexOf('production')>-1)return 'entertainment';
    if(label.indexOf('concierge')>-1)return 'concierge';
    return '';
  }
  function render(){
    var bar=document.getElementById('jkt-service-destination-bar');
    if(true)return;
    var item=copy[pageKey()];
    if(!item)return;
    var section=document.createElement('div');
    section.className='jkt-closing';
    section.id='jkt-service-closing-bar';
    section.innerHTML='<div class="jkt-cl-inner"><div><p class="jkt-kicker">The next step</p><h3 class="jkt-cl-h3">'+item.title+'</h3></div><p class="jkt-cl-body">'+item.body+'</p><a href="/contact" class="jkt-btn">Let&#39;s talk</a></div>';
    bar.replaceWith(section);
  }
  function start(){
    render();
    if(!document.body)return;
    var observer=new MutationObserver(render);
    observer.observe(document.body,{childList:true,subtree:true});
    setTimeout(render,50);
    setTimeout(render,500);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
}catch(e){console.warn("jkt embed block failed: emb-services-tpl-e9ff1b5f block 12",e)}

/* jkt-service-faq-structure-2026-09-13 */
try{
(()=>{
  const enhance=()=>document.querySelectorAll('.jkt-faq .w-richtext').forEach(rt=>{
    if(rt.dataset.jktFaqStructured||rt.querySelector('details.jkt-faq-item')){rt.dataset.jktFaqStructured='1';return}
    const nodes=[...rt.children],frag=document.createDocumentFragment();let i=0,found=false;
    while(i<nodes.length){const n=nodes[i];if(n.tagName==='H3'){
      found=true;const item=document.createElement('details'),summary=document.createElement('summary'),question=document.createElement('span'),mark=document.createElement('span'),answer=document.createElement('div');
      item.className='jkt-faq-item';if(!frag.childNodes.length)item.open=true;question.className='jkt-faq-q';question.textContent=n.textContent.trim();mark.className='jkt-faq-mark';mark.setAttribute('aria-hidden','true');answer.className='jkt-faq-a';summary.append(question,mark);i+=1;
      while(i<nodes.length&&nodes[i].tagName!=='H3')answer.append(nodes[i++]);
      item.append(summary);if(answer.childNodes.length)item.append(answer);frag.append(item);
    }else{frag.append(n);i+=1}}
    if(found)rt.replaceChildren(frag);rt.dataset.jktFaqStructured='1';
  });
  const start=()=>{enhance();setTimeout(enhance,400);setTimeout(enhance,1400)};
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',start):start();
  new MutationObserver(enhance).observe(document.body,{childList:true,subtree:true});
})();
}catch(e){console.warn("jkt embed block failed: jkt-service-faq-structure-2026-09-13",e)}

/* jkt-service-headline-integrity-2026-09-13 */
try{
(()=>{
  const titles={
    '/services/leisure':'One plan, start to finish',
    '/services/executive':'One trusted family office travel desk',
    '/services/group':'Everyone here, one plan',
    '/services/entertainment':'Movement, on the clock',
    '/services/concierge':'The details that travel with you'
  };
  const path=()=>{let p=location.pathname||'/';return p.length>1?p.replace(/\/+$/,''):p};
  const fix=()=>{const title=titles[path()];if(!title)return;document.querySelectorAll('main h1,h1').forEach(h=>{if(!h.classList.contains('jkm')&&!h.classList.contains('jksvc-mast')&&h.getClientRects().length&&(h.textContent||'').replace(/\s+/g,' ').trim()!==title)h.textContent=title})};
  const start=()=>{
    fix();
    let queued=false;new MutationObserver(()=>{if(!queued){queued=true;requestAnimationFrame(()=>{queued=false;fix()})}}).observe(document.documentElement,{childList:true,subtree:true});
    let count=0,timer=setInterval(()=>{fix();if(++count>40)clearInterval(timer)},250);
  };
  document.readyState==='loading'?document.addEventListener('DOMContentLoaded',start,{once:true}):start();
})();
}catch(e){console.warn("jkt embed block failed: jkt-service-headline-integrity-2026-09-13",e)}

/* jkt-service-heading-preview-repair-2026-09-13 */
try{
(()=>{
  const titles={
    '/services/leisure':'One plan, start to finish',
    '/services/executive':'One trusted family office travel desk',
    '/services/group':'Everyone here, one plan',
    '/services/entertainment':'Movement, on the clock',
    '/services/concierge':'The details that travel with you'
  };
  const pageSignals=[
    [/ENTERTAINMENT & PRODUCTION TRAVEL/i,'Movement, on the clock'],
    [/LUXURY LEISURE TRAVEL/i,'One plan, start to finish'],
    [/FAMILY OFFICE TRAVEL|PRIVATE OFFICE TRAVEL/i,'One trusted family office travel desk'],
    [/GROUP TRAVEL/i,'Everyone here, one plan'],
    [/TRAVEL CONCIERGE|CONCIERGE TRAVEL/i,'The details that travel with you']
  ];
  const titleForPage=()=>{
    const path=(location.pathname||'/').replace(/\/+$/,'')||'/';
    // City concierge pages use their own CMS heading.
    if(/^\/services\/[a-z0-9-]+-concierge$/.test(path)) return null;
    if(titles[path]) return titles[path];
    const copy=(document.querySelector('main')?.innerText||document.body?.innerText||'').slice(0,900).replace(/One plan, start to finish|One trusted family office travel desk|Everyone here, one plan|Movement, on the clock|The details that travel with you/g,'')
    const match=pageSignals.find(([signal])=>signal.test(copy));
    return match&&match[1];
  };
  const fix=()=>{
    const title=titleForPage();
    if(!title) return;
    document.querySelectorAll('h1').forEach(h=>{
      if(!h.classList.contains('jkm')&&!h.classList.contains('jksvc-mast')&&h.getClientRects().length && h.textContent.replace(/\s+/g,' ').trim()!==title) h.textContent=title;
    });
  };
  const start=()=>{
    fix();
    let queued=false;
    new MutationObserver(()=>{
      if(!queued){ queued=true; requestAnimationFrame(()=>{queued=false;fix()}); }
    }).observe(document.body,{childList:true,subtree:true,characterData:true});
    [300,900,1800,3600].forEach(wait=>setTimeout(fix,wait));
  };
  document.readyState==='loading' ? document.addEventListener('DOMContentLoaded',start,{once:true}) : start();
})();
}catch(e){console.warn("jkt embed block failed: jkt-service-heading-preview-repair-2026-09-13",e)}

/* jkt-service-destination-search-2026-09-13 */
try{
(function(){
  function bindSearch(){
    document.querySelectorAll('#jkt-service-destination-bar').forEach(function(bar){
      if(bar.dataset.jktSearchBound==='true')return;
      var input=bar.querySelector('#jkt-service-destination-input,input[type="search"],input');
      var button=bar.querySelector('button');
      if(!input||!button)return;
      function search(){
        var query=(input.value||'').trim();
        window.location.assign('/destinations'+(query?'?search='+encodeURIComponent(query):''));
      }
      button.addEventListener('click',function(event){event.preventDefault();search();});
      input.addEventListener('keydown',function(event){
        if(event.key==='Enter'){event.preventDefault();search();}
      });
      bar.dataset.jktSearchBound='true';
    });
  }
  function start(){
    bindSearch();
    new MutationObserver(bindSearch).observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
}catch(e){console.warn("jkt embed block failed: jkt-service-destination-search-2026-09-13",e)}

/* jkt-service-masthead-reveal-2026-09-27 */
try{
(function(){
  var DATA='jktServiceMastheadMotion';
  function mountLegacyDecoy(){
    if(!document.body||document.getElementById('jkt-service-masthead-motion-decoy'))return;
    var decoy=document.createElement('div');
    decoy.id='jkt-service-masthead-motion-decoy';
    decoy.className='jkt2-h1 jksvc-motion-decoy';
    decoy.setAttribute('aria-hidden','true');
    document.body.insertBefore(decoy,document.body.firstChild);
  }
  function restore(h,original,label){
    h.innerHTML=original;
    h.classList.remove('jksvc-mast','jksvc-mast-on');
    if(label===null)h.removeAttribute('aria-label');else h.setAttribute('aria-label',label);
  }
  function reveal(){
    if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches)return;
    var h=document.querySelector('main .jkt-mast-h1,.jkt-mast-h1');
    if(!h||h.dataset[DATA]==='done'||h.classList.contains('jkm')||!h.getClientRects().length)return;
    var text=(h.textContent||'').replace(/\s+/g,' ').trim();
    if(!text)return;
    h.dataset[DATA]='done';
    var original=h.innerHTML,label=h.getAttribute('aria-label'),words=text.split(' '),probes=[],lines=[],line=[],lastTop=null;
    h.classList.add('jksvc-mast');
    h.setAttribute('aria-label',text);
    h.textContent='';
    words.forEach(function(word,index){
      var probe=document.createElement('i');
      probe.setAttribute('aria-hidden','true');
      probe.style.fontStyle='inherit';
      probe.textContent=word;
      h.appendChild(probe);
      probes.push(probe);
      if(index<words.length-1)h.appendChild(document.createTextNode(' '));
    });
    probes.forEach(function(probe){
      var top=probe.offsetTop;
      if(lastTop!==null&&Math.abs(top-lastTop)>2){lines.push(line.join(' '));line.length=0}
      line.push(probe.textContent);
      lastTop=top;
    });
    if(line.length)lines.push(line.join(' '));
    if(!lines.length){restore(h,original,label);return}
    h.textContent='';
    lines.forEach(function(copy,index){
      var wrap=document.createElement('span'),inner=document.createElement('span');
      wrap.className='jksvc-line';
      wrap.style.setProperty('--jksvc-delay',(95*index)+'ms');
      wrap.setAttribute('aria-hidden','true');
      inner.textContent=copy;
      wrap.appendChild(inner);
      h.appendChild(wrap);
    });
    void h.offsetWidth;
    requestAnimationFrame(function(){requestAnimationFrame(function(){h.classList.add('jksvc-mast-on')})});
    setTimeout(function(){if(h.isConnected)restore(h,original,label)},1200+95*lines.length);
  }
  mountLegacyDecoy();
  function start(){
    var h=document.querySelector('main .jkt-mast-h1,.jkt-mast-h1');
    if(!h)return;
    if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches){
      h.dataset[DATA]='done';
      return;
    }
    var fired=false;
    function run(){
      if(fired)return;
      fired=true;
      requestAnimationFrame(function(){requestAnimationFrame(reveal)});
    }
    /* Wait until most of the heading is visible, so the mobile reveal
       does not finish behind the tall mast photograph. */
    if('IntersectionObserver' in window){
      var observer=new IntersectionObserver(function(entries){
        if(entries.some(function(entry){return entry.isIntersecting&&entry.intersectionRatio>=.75})){
          observer.disconnect();
          run();
        }
      },{threshold:[0,.75,1]});
      observer.observe(h);
      return;
    }
    function check(){
      var rect=h.getBoundingClientRect();
      var visible=Math.min(rect.bottom,window.innerHeight)-Math.max(rect.top,0);
      if(rect.height&&visible/rect.height>=.75){
        window.removeEventListener('scroll',check);
        window.removeEventListener('resize',check);
        run();
      }
    }
    window.addEventListener('scroll',check,{passive:true});
    window.addEventListener('resize',check);
    check();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
}catch(e){console.warn("jkt embed block failed: jkt-service-masthead-reveal-2026-09-27",e)}
