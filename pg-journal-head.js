/* jkt-journal-renderer-preflight-2026-09-27 */
try{
(function(){
  if(location.pathname.replace(/\/$/,'')!=='/journal')return;
  var root=document.documentElement;
  root.classList.add('jkt-journal-renderer-pending');
  window.setTimeout(function(){
    if(!root.classList.contains('jkt-journal-renderer-ready'))root.classList.remove('jkt-journal-renderer-pending');
  },4000);
}());
}catch(e){console.warn("jkt page block failed: jkt-journal-renderer-preflight-2026-09-27",e)}

/* jkt-journal-article-cover-repair-2026-09-11 */
try{
(function(){
  var MAP={"/journal/private-villa-vacation":{"src":"https://s3.amazonaws.com/webflow-prod-assets/6a1f886348e8c1c8bceca358/6a977096b880c9fb7f9281a4_group-travel-tuscany-hero-v2.webp","alt":"Guests sharing lunch at a private Tuscan estate"},"/journal/how-to-plan-a-group-trip":{"src":"https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6a3f663d1d1f9c2bf42019f5_kameron-kincade-Wn5SVurEt0w-unsplash%20(1).jpg","alt":"Multi-generational group smiling from a safari vehicle in a wooded reserve"},"/journal/group-travel-coordinator":{"src":"https://s3.amazonaws.com/webflow-prod-assets/6a1f886348e8c1c8bceca358/6a954bfa91849a27ff61baa6_justkeeps-entertainment-production-studio-final.webp","alt":"Production coordinators with road cases and garment bags beside a discreet vehicle"},"/journal/best-places-to-visit-in-october":{"src":"https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6a9cf87e4a935f84bb1efebb_6a9cf80e7a9470764f030f1c_jkt-dest-crete-hero-v1.jpeg","alt":"Empty pink-tinged sand curving into shallow turquoise water at Elafonisi on the west coast of Crete"},"/journal/incentive-travel-planning":{"src":"https://s3.amazonaws.com/webflow-prod-assets/6a1f886348e8c1c8bceca358/6a9ecc5b05a7ef58757e4cf4_jkt-group-coastal-villa-long-table.webp","alt":"A group of guests at a long table on a coastal villa terrace at golden hour with luggage arriving"},"/journal/luxury-group-travel-75050":{"src":"https://s3.amazonaws.com/webflow-prod-assets/6a1f886348e8c1c8bceca358/6a977096b880c9fb7f9281a4_group-travel-tuscany-hero-v2.webp","alt":"Multi-generational family and friends sharing lunch at a private Tuscany estate"},"/journal/production-and-talent-travel-guide":{"src":"https://s3.amazonaws.com/webflow-prod-assets/6a1f886348e8c1c8bceca358/6a954bfa91849a27ff61baa6_justkeeps-entertainment-production-studio-final.webp","alt":"Production coordinators with road cases and garment bags beside a discreet vehicle"},"/journal/hyatt-marriott-delta-loyalty-updates-september-2026":{"src":"https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa4286d0d204763b780abdd_6a8a575df85543a4bd11cc8c_corporate-executive-private-jet-v1.webp","alt":"Two executives reviewing travel plans inside a private jet cabin"}};
  function trimPath(value){value=String(value||'');return value.charAt(value.length-1)==='/'?value.slice(0,-1):value;}
  function currentPath(){return trimPath(location.pathname);}
  function pathOf(anchor){try{return trimPath(new URL(anchor.getAttribute('href')||'',location.origin).pathname);}catch(e){return'';}}
  function setImage(image,data){
    if(!image||!data)return;
    if(image.getAttribute('src')!==data.src)image.src=data.src;
    image.removeAttribute('srcset');
    image.setAttribute('alt',data.alt);
    image.setAttribute('data-jkt-editorial-cover','photo');
  }
  function apply(){
    document.querySelectorAll('a[href^="/journal/"] img').forEach(function(image){
      var anchor=image.closest('a'),data=anchor&&MAP[pathOf(anchor)];
      if(data)setImage(image,data);
    });
    var heroData=MAP[currentPath()];
    if(heroData)document.querySelectorAll('.jkt2-mast-img').forEach(function(image){setImage(image,heroData)});
  }
  function boot(){
    apply();
    var tries=0;
    (function retry(){apply();tries+=1;if(tries<20)setTimeout(retry,250)})();
    if(document.body&&window.MutationObserver)new MutationObserver(apply).observe(document.body,{childList:true,subtree:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
}catch(e){console.warn("jkt page block failed: jkt-journal-article-cover-repair-2026-09-11",e)}

/* jkt-journal-theme-runtime-2026-09-26 */
try{
/* JKT-THEME-SEARCH-2026-09-26: Journal search runtime with theme keywords. Replaces the footer runtime (jkt-journal-authoritative-runtime-2026-09-10), which now stands down. Vocabulary is duplicated in the Destinations page embed; keep both in sync. */
if(!window.JKTThemes){(function(){var V={sun:'sun,sunny,sunshine,warm,warmth,hot,heat,winter sun,summer sun',beach:'beach,beaches,sandy,seaside,coast,coastal,ocean,shore,swimming',island:'islands,isle,archipelago,atolls',tropical:'tropical,tropics,jungle,rainforest,paradise',caribbean:'caribbean,west indies',mediterranean:'mediterranean,med',ski:'ski,skiing,skier,slopes,piste,snowboarding,powder,apres ski',snow:'snow,snowy,winter,christmas,arctic',aurora:'aurora,northern lights,arctic',mountains:'mountains,peaks',alps:'alps,alpine',safari:'safaris,game drive,big five',wildlife:'wildlife,animals,nature',diving:'diving,dive,scuba,snorkeling,snorkelling,reefs,coral',sailing:'sailing,yachting,yachts,boats,cruises,cruising,catamaran',city:'city,cities,city break,urban',culture:'culture,cultural,history,historic,heritage,museums,art,arts,architecture,temples,ruins,ancient',food:'food,foodie,dining,restaurants,gastronomy,culinary,cuisine,michelin',wine:'wines,wine country,vineyards,winery,wineries',romance:'romance,romantic,honeymoons,couples,anniversary,babymoon',family:'family,families,kids,children,multigenerational',adventure:'adventures,hiking,hike,trekking,outdoors,active,expedition',wellness:'wellness,spa,spas,retreat,onsen,hot springs,thermal,yoga,detox',desert:'deserts,dunes,sahara,oasis',lakes:'lakes,lakeside',golf:'golf,golfing',nightlife:'nightlife,party,clubs,clubbing,bars',shopping:'shopping,boutiques,fashion'},S={},L=[];
'a an and the in of on with for to near by best top luxury trip trips holiday holidays vacation vacations getaway getaways destination destinations place places spot spots travel idea ideas where somewhere'.split(' ').forEach(function(w){S[w]=1});
Object.keys(V).forEach(function(t){V[t].split(',').forEach(function(s){L.push([s,t])})});
function norm(v){return String(v||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim()}
function tags(w){w=norm(w);var e={},p={},x=0;if(w.length<3)return[];L.forEach(function(q){var s=q[0];if(s===w||w===s+'s'){e[q[1]]=1;x=1}else if(w.length>3&&s.indexOf(w)===0)p[q[1]]=1});return Object.keys(x?e:p)}
function clauses(q){var n=norm(q);if(!n)return[];var t=tags(n);if(t.length)return[{w:n,t:t}];var a=n.split(' ').filter(function(w){return w&&!S[w]});if(!a.length)a=[n];return a.map(function(w){return{w:w,t:tags(w)}})}
window.JKTThemes={v:'1.0.0',norm:norm,tags:tags,clauses:clauses,list:function(v){return norm(v).split(' ').filter(Boolean)},has:function(a,t){for(var i=0;i<t.length;i++)if(a.indexOf(t[i])>-1)return true;return false}};})();}
(function(){
  if(location.pathname.replace(/\/$/,'')!=='/journal')return;
  if(window.__jktJournalThemes20260926)return;
  window.__jktJournalThemes20260926=true;
  window.__jktJournalAuthoritative20260910=true; /* stops the older footer copy of this runtime from also running */
  var TH=window.JKTThemes||null;
  function themesOf(a){var t=a.querySelector('template[data-jkt-themes]');if(t)return(t.content?t.content.textContent:t.textContent)||'';return a.getAttribute('data-themes')||''}
  function tclauses(){return TH?TH.clauses(state.query):[]}
  function tmatch(item,cl){if(!TH||!cl.length||!cl.some(function(c){return c.t.length}))return false;for(var i=0;i<cl.length;i++){var c=cl[i];if(!((c.t.length&&TH.has(item.themes||[],c.t))||TH.norm(item.search).indexOf(c.w)>-1))return false}return true}
  var OPENINGS={'/journal/corinthia-rome-2026-opening-guide':true,'/journal/amanvari-east-cape-mexico-2026-opening-guide':true,'/journal/rosewood-rome-2027-opening-preview':true,'/journal/rosewood-the-raleigh-miami-beach-opening-preview':true,'/journal/delano-miami-beach-2026-reopening-guide':true,'/journal/mandarin-oriental-punta-negra-mallorca-opening-guide':true,'/journal/four-seasons-cartagena-opening-guide':true,'/journal/danieli-venezia-four-seasons-hotel-opening-guide':true};
  var CATS=[{key:'all',label:'ALL ARTICLES'},{key:'reviews',label:'REVIEWS'},{key:'openings',label:'OPENINGS'},{key:'destination guides',label:'DESTINATION GUIDES'},{key:'travel insider tips',label:'TRAVEL INSIDER TIPS'},{key:'client journeys',label:'CLIENT JOURNEYS'},{key:'industry insights',label:'INDUSTRY INSIGHTS'},{key:'seasonal guides',label:'SEASONAL ARTICLES'}];
  var root,input,out,count,data=[],menu,suggestions,sourceObserver,enrichStarted=false,suggestionIndex=-1,state={key:'all',query:''},unclassified=[];
  function norm(v){return String(v||'').replace(/\s+/g,' ').trim().toLowerCase()}
  function pathOf(a){try{return new URL(a.getAttribute('href')||'',location.origin).pathname.replace(/\/$/,'')}catch(e){return''}}
  function labelFor(key){var c=CATS.find(function(x){return x.key===key});return c?c.label:'ALL ARTICLES'}
  function categoryKey(v){
    var s=norm(v);
    if(!s)return'';
    if(/opening|reopen|preview|renovat|returning|newly announced|what is taking shape/.test(s))return'openings';
    if(/property reviews|hotel reviews|restaurant reviews|travel experience reviews|^reviews?$/.test(s))return'reviews';
    if(/travel insider tips|travel insider tip|insider tips|travel advice/.test(s))return'travel insider tips';
    if(/client journeys|client journey|case study/.test(s))return'client journeys';
    if(/industry insights|industry insight|industry news/.test(s))return'industry insights';
    if(/seasonal guides|seasonal guide|seasonal/.test(s))return'seasonal guides';
    if(/destination guides|destination guide/.test(s))return'destination guides';
    return'';
  }
  function baseCategory(a){
    var href=pathOf(a);
    var meta=norm((a.querySelector('.journal_box_cate')||{}).textContent||'');
    var title=norm((a.querySelector('h1,h2,h3,h4,h5,h6')||{}).textContent||'');
    var attr=norm((a.getAttribute('data-category')||'')+' '+(a.getAttribute('data-journal-category')||'')+' '+(a.getAttribute('aria-label')||'')+' '+(a.getAttribute('title')||''));
    var hints=meta+' '+attr+' '+title+' '+norm(a.getAttribute('href')||'');
    var explicit=categoryKey(meta+' '+attr);
    if(/opening|reopen|preview|renovat|returning|newly announced|what is taking shape/.test(hints))return'openings';
    if(OPENINGS[href])return'openings';
    if(explicit)return explicit;
    return categoryKey(title+' '+attr);
  }
  function searchText(item){return norm([item.title,item.description,item.metaTitle,item.category,item.href,item.alt,item.dateLabel].join(' '))}
  function collect(){
    var seen={},next=[];
    document.querySelectorAll('.journal_tab_pane a[href^="/journal/"]').forEach(function(a){
      var href=pathOf(a),cat=baseCategory(a),source=a.closest('.journal_category_item')||a.closest('.w-dyn-item')||a.parentElement;
      if(!href||seen[href]||!source)return;
      seen[href]=1;
      var image=a.querySelector('img'),titleNode=a.querySelector('h1,h2,h3,h4,h5,h6'),meta=a.querySelector('.journal_box_cate');
      var title=(titleNode&&titleNode.textContent||a.textContent||'').replace(/\s+/g,' ').trim();
      if(!title)return;
      if(!cat){unclassified.push({href:href,title:title});return;}
      next.push({href:href,category:cat,title:title,alt:(image&&image.getAttribute('alt'))||'',meta:meta?meta.textContent:'',cardImage:(image&&((image.currentSrc||image.getAttribute('src'))||''))||'',source:source.cloneNode(true),description:'',metaTitle:'',dateLabel:'',themes:TH?TH.list(themesOf(a)):[]});
    });
    data=next;data.forEach(function(item){item.search=searchText(item)});if(unclassified.length&&window.console&&console.warn)console.warn('[JustKeeps] Journal records held for category review:',unclassified.map(function(item){return item.href}));return data.length;
  }
  function updateMeta(card,item){
    var meta=card.querySelector('.journal_box_cate');
    if(meta&&(item.category==='reviews'||item.category==='openings')){var first=meta.querySelector('div');if(first)first.textContent=item.category==='openings'?'OPENINGS':'REVIEWS'}
  }
  function countFor(key){return data.filter(function(item){return key==='all'||item.category===key}).length}
  function buildMenu(){
    if(menu)menu.remove();menu=document.createElement('div');menu.className='journal_tab_menu jkt-menu-clone';menu.setAttribute('role','tablist');menu.setAttribute('aria-label','Journal categories');
    CATS.forEach(function(cat,index){
      var b=document.createElement('button');b.type='button';b.className='journal_tab_link';b.id='jkt-journal-tab-'+index;b.setAttribute('role','tab');b.setAttribute('aria-controls','jkg-out');b.setAttribute('data-category-key',cat.key);b.setAttribute('aria-selected',cat.key===state.key?'true':'false');b.setAttribute('tabindex',cat.key===state.key?'0':'-1');b.setAttribute('aria-label',cat.label+' ('+countFor(cat.key)+' guides)');b.textContent=cat.label;
      b.addEventListener('click',function(){state.key=cat.key;render(true)});
      b.addEventListener('keydown',function(e){
        var i=CATS.findIndex(function(x){return x.key===cat.key}),nextIndex;
        if(e.key==='ArrowRight'||e.key==='ArrowDown')nextIndex=(i+1)%CATS.length;else if(e.key==='ArrowLeft'||e.key==='ArrowUp')nextIndex=(i-1+CATS.length)%CATS.length;else if(e.key==='Home')nextIndex=0;else if(e.key==='End')nextIndex=CATS.length-1;else return;
        e.preventDefault();var nextCat=CATS[nextIndex];state.key=nextCat.key;render(false);var nextButton=menu.querySelectorAll('[role="tab"]')[nextIndex];if(nextButton)nextButton.focus();
      });menu.appendChild(b);
    });
    root.insertBefore(menu,root.querySelector('.jkg__ph')||out);
  }
  function suggestionItems(){
    var q=norm(state.query);if(!q)return[];
    var pool=data.filter(function(item){return state.key==='all'||item.category===state.key});
    var cl=tclauses();
    return pool.filter(function(item){return searchText(item).indexOf(q)>-1||tmatch(item,cl)}).sort(function(a,b){
      function rank(item){var title=norm(item.title),words=title.split(' ');if(title===q)return 0;if(title.indexOf(q)===0)return 1;if(words.some(function(word){return word.indexOf(q)===0}))return 2;if(searchText(item).indexOf(q)>-1)return 3;return 4}
      var ra=rank(a),rb=rank(b);return ra-rb||a.title.localeCompare(b.title);
    }).slice(0,8);
  }
  function renderSuggestions(){
    if(!suggestions||!input)return;
    var items=suggestionItems();
    if(suggestionIndex>=items.length)suggestionIndex=-1;
    suggestions.innerHTML='';
    suggestions.hidden=!items.length;
    input.setAttribute('aria-expanded',items.length?'true':'false');
    if(!items.length){input.removeAttribute('aria-activedescendant');return}
    items.forEach(function(item,index){
      var a=document.createElement('a');a.className='jkt-journal-suggestion';a.href=item.href;a.id='jkt-journal-suggestion-'+index;a.setAttribute('role','option');a.setAttribute('aria-selected',index===suggestionIndex?'true':'false');
      var meta=document.createElement('span');meta.className='jkt-journal-suggestion-meta';meta.textContent=labelFor(item.category);
      var title=document.createElement('span');title.className='jkt-journal-suggestion-title';title.textContent=item.title;
      var thumb=document.createElement('span');thumb.className='jkt-journal-suggestion-thumb';thumb.setAttribute('aria-hidden','true');
      var thumbSource=item.source&&item.source.querySelector('img'),thumbSrc=item.cardImage||item.image||(thumbSource&&((thumbSource.currentSrc||thumbSource.getAttribute('src'))||''))||'';
      if(thumbSrc){var thumbImage=document.createElement('img');thumbImage.src=thumbSrc;thumbImage.alt='';thumbImage.loading='lazy';thumbImage.decoding='async';thumb.appendChild(thumbImage)}
      a.append(meta,title,thumb);suggestions.appendChild(a);
    });
    if(suggestionIndex>=0)input.setAttribute('aria-activedescendant','jkt-journal-suggestion-'+suggestionIndex);else input.removeAttribute('aria-activedescendant');
  }
  function ensureSuggestionStyles(){
    if(document.getElementById('jkt-journal-suggestion-thumb-css'))return;
    var st=document.createElement('style');st.id='jkt-journal-suggestion-thumb-css';
    st.textContent='.jkt-journal-suggestion-thumb{width:22px;height:22px;display:flex;align-items:center;justify-content:center;flex:0 0 22px;overflow:hidden;border:1px solid rgba(34,34,34,.18);background:#efeae2;box-sizing:border-box}.jkt-journal-suggestion-thumb img{display:block;width:100%;height:100%;object-fit:cover}.jkt-journal-suggestion-arrow{display:none!important}';
    document.head.appendChild(st);
  }
  function ensureSuggestions(){
    if(!input)return;
    suggestions=document.getElementById('jkt-journal-suggestions');
    if(!suggestions){suggestions=document.createElement('div');suggestions.id='jkt-journal-suggestions';suggestions.setAttribute('role','listbox');suggestions.setAttribute('aria-label','Journal search suggestions');suggestions.hidden=true;var field=input.parentElement;if(field)field.appendChild(suggestions)}
  }
  function hideLegacyAndNative(){
    ['#jkt-journal-results-final','#jkt-journal-results-patch','#jkt-shared-destinations'].forEach(function(sel){document.querySelectorAll(sel).forEach(function(el){if(el!==out)el.remove()})});
    document.querySelectorAll('#jkg .journal_tab_menu:not(.jkt-menu-clone),#jkg .journal_tab').forEach(function(el){el.style.display='none'});document.querySelectorAll('.journal_post_wrap .journal_tab_menu:not(.jkt-menu-clone)').forEach(function(el){el.remove()});
    out.classList.add('jkt-authoritative-out');out.setAttribute('role','region');out.setAttribute('aria-label','Journal results');out.setAttribute('aria-live','polite');
  }
  function render(reveal){
    if(!root||!out)return;
    var q=norm(state.query),pool=data.filter(function(item){return state.key==='all'||item.category===state.key}),cl=tclauses(),matches=q?pool.filter(function(item){return item.search.indexOf(q)>-1}).concat(pool.filter(function(item){return item.search.indexOf(q)<0&&tmatch(item,cl)})):pool;
    count.textContent=matches.length+' '+(matches.length===1?'GUIDE':'GUIDES');count.setAttribute('aria-label',matches.length+' '+(matches.length===1?'journal guide':'journal guides'));
    menu.querySelectorAll('[role="tab"]').forEach(function(b){var key=b.getAttribute('data-category-key')||'all',active=key===state.key;b.setAttribute('aria-selected',active?'true':'false');b.setAttribute('tabindex',active?'0':'-1');b.setAttribute('aria-label',b.textContent+' ('+countFor(key)+' guides)')});
    out.innerHTML='';var head=document.createElement('div');head.className='jkt-journal-heading';var left=document.createElement('div'),k=document.createElement('p'),h=document.createElement('h2');k.className='jkt-journal-kicker';k.textContent='FROM THE JOURNAL';h.className='jkt-journal-title';h.textContent=labelFor(state.key);left.append(k,h);var n=document.createElement('p');n.className='jkt-journal-count';n.textContent=count.textContent;head.append(left,n);out.appendChild(head);
    if(!matches.length){var empty=document.createElement('p');empty.className='jkt-journal-empty';empty.setAttribute('role','status');empty.textContent='No guides found. Try another search.';out.appendChild(empty)}
    else{var grid=document.createElement('div');grid.className='jkt-journal-grid';grid.setAttribute('role','list');grid.setAttribute('aria-label',labelFor(state.key)+' journal guides');matches.forEach(function(item,index){var card=item.source.cloneNode(true);card.classList.add('jkt-authoritative-card');card.style.display='block';card.style.opacity='1';card.style.transform='none';card.querySelectorAll('img').forEach(function(image){image.classList.add('jkt-journal-card-media');function ready(){image.dataset.jktJournalCardMedia='ready'}if(image.complete&&image.naturalWidth>0)ready();else{image.addEventListener('load',ready,{once:true});image.addEventListener('error',function(){image.dataset.jktJournalCardMedia='failed'},{once:true})}if(index<6){image.loading='eager';image.fetchPriority='high'}});updateMeta(card,item);grid.appendChild(card)});out.appendChild(grid)}
    renderSuggestions();
    if(reveal)setTimeout(function(){out.scrollIntoView({behavior:'smooth',block:'start'})},60);
  }
  function enrich(){
    if(enrichStarted)return;enrichStarted=true;var cursor=0;
    function batch(){var group=data.slice(cursor,cursor+6);cursor+=6;if(!group.length){render(false);return}
      Promise.all(group.map(function(item){return fetch(item.href,{credentials:'same-origin'}).then(function(r){return r.ok?r.text():''}).then(function(html){if(!html)return;var doc=new DOMParser().parseFromString(html,'text/html'),desc=doc.querySelector('meta[name="description"]'),og=doc.querySelector('meta[property="og:description"]'),title=doc.querySelector('meta[name="title"]');item.description=(desc&&desc.getAttribute('content'))||(og&&og.getAttribute('content'))||'';item.metaTitle=(title&&title.getAttribute('content'))||((doc.querySelector('h1')||{}).textContent||'');var image=doc.querySelector('meta[property="og:image"]');if(image)item.image=image.getAttribute('content')||'';var time=doc.querySelector('time');if(time&&time.textContent.trim())item.dateLabel=time.textContent.trim();item.search=searchText(item)}).catch(function(){})})).then(function(){render(false);setTimeout(batch,0)},function(){setTimeout(batch,0)});
    }
    batch();
  }
  function watchSource(){
    var source=document.querySelector('#travel');if(!source)return;
    var last=data.map(function(item){return[item.href,item.category,item.title,item.cardImage||''].join('~')}).join('|');
    sourceObserver=new MutationObserver(function(){
      var before=last;collect();
      var after=data.map(function(item){return[item.href,item.category,item.title,item.cardImage||''].join('~')}).join('|');
      if(after===before)return;
      last=after;buildMenu();render(false);if(enrichStarted){enrichStarted=false;enrich();}
    });
    sourceObserver.observe(source,{childList:true,subtree:true});
  }
  function boot(){
    root=document.getElementById('jkg');input=document.getElementById('jkg-q');out=document.getElementById('jkg-out');count=document.getElementById('jkg-ct');
    if(!root||!input||!out||!count){setTimeout(boot,200);return}
    if(!collect()){setTimeout(boot,250);return}
    hideLegacyAndNative();buildMenu();ensureSuggestions();
    input.setAttribute('role','combobox');input.setAttribute('aria-autocomplete','list');input.setAttribute('aria-haspopup','listbox');input.setAttribute('aria-controls','jkt-journal-suggestions');input.setAttribute('aria-expanded','false');
    input.addEventListener('input',function(){suggestionIndex=-1;state.query=input.value||'';render(false)});
    input.addEventListener('keydown',function(e){
      if(e.key==='ArrowDown'||e.key==='ArrowUp'){var items=suggestionItems();if(items.length){e.preventDefault();suggestionIndex=(suggestionIndex+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;renderSuggestions()}return}
      if(e.key==='Escape'){suggestionIndex=-1;if(suggestions){suggestions.hidden=true;input.setAttribute('aria-expanded','false');input.removeAttribute('aria-activedescendant')}return}
      if(e.key==='Enter'){if(suggestions&&!suggestions.hidden&&suggestionIndex>=0){var option=suggestions.querySelectorAll('[role="option"]')[suggestionIndex];if(option){e.preventDefault();option.click();return}}e.preventDefault();render(true)}
    });
    ensureSuggestionStyles();render(false);document.documentElement.classList.add('jkt-journal-renderer-ready');document.documentElement.classList.remove('jkt-journal-renderer-pending');/* 2026-10-16: article details now load only when a visitor starts a search, instead of downloading every article on each visit. */input.addEventListener('focus',enrich,{once:true});input.addEventListener('input',enrich,{once:true});watchSource();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
}catch(e){console.warn("jkt page block failed: jkt-journal-theme-runtime-2026-09-26",e)}
