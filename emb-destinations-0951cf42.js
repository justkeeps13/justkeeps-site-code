/* emb-destinations-0951cf42 block 3 */
try{
(function(){
/* JKT-THEME-SEARCH-2026-09-26 START: theme keyword search. Vocabulary is duplicated in the Journal page embed; keep both in sync. */
if(!window.JKTThemes){(function(){var V={sun:'sun,sunny,sunshine,warm,warmth,hot,heat,winter sun,summer sun',beach:'beach,beaches,sandy,seaside,coast,coastal,ocean,shore,swimming',island:'islands,isle,archipelago,atolls',tropical:'tropical,tropics,jungle,rainforest,paradise',caribbean:'caribbean,west indies',mediterranean:'mediterranean,med',ski:'ski,skiing,skier,slopes,piste,snowboarding,powder,apres ski',snow:'snow,snowy,winter,christmas,arctic',aurora:'aurora,northern lights,arctic',mountains:'mountains,peaks',alps:'alps,alpine',safari:'safaris,game drive,big five',wildlife:'wildlife,animals,nature',diving:'diving,dive,scuba,snorkeling,snorkelling,reefs,coral',sailing:'sailing,yachting,yachts,boats,cruises,cruising,catamaran',city:'city,cities,city break,urban',culture:'culture,cultural,history,historic,heritage,museums,art,arts,architecture,temples,ruins,ancient',food:'food,foodie,dining,restaurants,gastronomy,culinary,cuisine,michelin',wine:'wines,wine country,vineyards,winery,wineries',romance:'romance,romantic,honeymoons,couples,anniversary,babymoon',family:'family,families,kids,children,multigenerational',adventure:'adventures,hiking,hike,trekking,outdoors,active,expedition',wellness:'wellness,spa,spas,retreat,onsen,hot springs,thermal,yoga,detox',desert:'deserts,dunes,sahara,oasis',lakes:'lakes,lakeside',golf:'golf,golfing',nightlife:'nightlife,party,clubs,clubbing,bars',shopping:'shopping,boutiques,fashion'},S={},L=[];
'a an and the in of on with for to near by best top luxury trip trips holiday holidays vacation vacations getaway getaways destination destinations place places spot spots travel idea ideas where somewhere'.split(' ').forEach(function(w){S[w]=1});
Object.keys(V).forEach(function(t){V[t].split(',').forEach(function(s){L.push([s,t])})});
function norm(v){return String(v||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/&/g,' and ').replace(/[^a-z0-9]+/g,' ').trim()}
function tags(w){w=norm(w);var e={},p={},x=0;if(w.length<3)return[];L.forEach(function(q){var s=q[0];if(s===w||w===s+'s'){e[q[1]]=1;x=1}else if(w.length>3&&s.indexOf(w)===0)p[q[1]]=1});return Object.keys(x?e:p)}
function clauses(q){var n=norm(q);if(!n)return[];var t=tags(n);if(t.length)return[{w:n,t:t}];var a=n.split(' ').filter(function(w){return w&&!S[w]});if(!a.length)a=[n];return a.map(function(w){return{w:w,t:tags(w)}})}
window.JKTThemes={v:'1.0.0',norm:norm,tags:tags,clauses:clauses,list:function(v){return norm(v).split(' ').filter(Boolean)},has:function(a,t){for(var i=0;i<t.length;i++)if(a.indexOf(t[i])>-1)return true;return false}};})();}
var TH=window.JKTThemes;
var AC_BOX=(function(){ var f=document.querySelector('#jkx .jkx__find'); if(!f) return null; var b=document.getElementById('jkt-dest-autocomplete'); if(b) return b; b=document.createElement('div'); b.id='jkt-dest-autocomplete'; b.className='jkt-dest-autocomplete'; b.setAttribute('role','listbox'); b.setAttribute('aria-label','Destination suggestions'); f.appendChild(b); return b; })();
function regionStarts(v,n){ var r=TH.norm(v); return r===n||r.indexOf(n+' ')===0; }
function nameWord(x,n){ if(n.length<3) return false; var w=TH.norm(x.name).split(' '); for(var i=1;i<w.length;i++){ if(w[i].indexOf(n)===0) return true; } return false; }
function wordMatch(x,w){ return TH.norm(x.name).indexOf(w)===0||nameWord(x,w)||TH.norm(x.country).indexOf(w)>=0||regionStarts(x.region,w); }
function clauseMatch(x,cl){ if(!cl||!cl.length) return false; for(var i=0;i<cl.length;i++){ var c=cl[i]; if(!((c.t.length&&TH.has(x.themes||[],c.t))||wordMatch(x,c.w))) return false; } return true; }
function themesOf(a){ if(!a) return ''; var t=a.querySelector('template[data-jkt-themes]'); if(t) return (t.content?t.content.textContent:t.textContent)||''; return a.getAttribute('data-themes')||''; }
var FC=null;
function cfull(h){ if(!FC){ FC={}; var maps=[]; [].slice.call(document.scripts).forEach(function(s){ var t=s.textContent||''; if(t.indexOf('COUNTRY_BY_SLUG=')<0) return; var m=t.match(/var COUNTRY_BY_SLUG\s*=\s*(\{[\s\S]*?\});/); if(!m) return; try{ maps.push(JSON.parse(m[1])); }catch(e){} }); maps.sort(function(a,b){ return Object.keys(a).length-Object.keys(b).length; }).forEach(function(o){ for(var k in o){ if(o[k]) FC[k]=o[k]; } }); } var s=String(h||'').split('/').filter(Boolean).pop()||''; return FC[s]||countryFor(h); }
/* JKT-THEME-SEARCH-2026-09-26 END */
var LABEL='destinations', MINCOL=232, GAP=24, ROWS=2;
var ORDER=['Europe & Mediterranean','Asia & Pacific','The Americas','Africa & Middle East','Indian Ocean & Islands'];
var COUNTRY_BY_SLUG={"brussels":"Belgium","bruges":"Belgium","antwerp":"Belgium","luxembourg-city":"Luxembourg","monaco":"Monaco","munich":"Germany","hamburg":"Germany","frankfurt":"Germany","salzburg":"Austria","innsbruck":"Austria","kitzbuhel":"Austria","hallstatt":"Austria","budapest":"Hungary","krakow":"Poland","warsaw":"Poland","ljubljana":"Slovenia","lake-bled":"Slovenia","kotor":"Montenegro","montenegro":"Montenegro","belgrade":"Serbia","sarajevo":"Bosnia and Herzegovina","bucharest":"Romania","transylvania":"Romania","sofia":"Bulgaria","tallinn":"Estonia","riga":"Latvia","vilnius":"Lithuania","bergen":"Norway","norwegian-fjords":"Norway","lofoten-islands":"Norway","troms":"Norway","finnish-lapland":"Finland","rovaniemi":"Finland","faroe-islands":"Faroe Islands","iceland-south-coast":"Iceland","lake-geneva":"Switzerland","gstaad":"Switzerland","zermatt":"Switzerland","verbier":"Switzerland","andermatt":"Switzerland","courchevel":"France","chamonix":"France","megeve":"France","lucerne":"Switzerland","milan":"Italy","los-angeles":"United States","san-francisco":"United States","sonoma-county":"United States","jackson-hole":"United States","yellowstone":"United States","big-sky":"United States","park-city":"United States","vail":"United States","telluride":"United States","santa-fe":"United States","sedona":"United States","scottsdale":"United States","key-west":"United States","nantucket":"United States","martha-s-vineyard":"United States","the-hamptons":"United States","toronto":"Canada","vancouver":"Canada","tofino":"Canada","oaxaca":"Mexico","merida-and-yucatan":"Mexico","riviera-nayarit":"Mexico","panama-city":"Panama","lake-atitlan":"Guatemala","galapagos-islands":"Ecuador","tokyo":"Japan","kanazawa":"Japan","hakone":"Japan","naoshima":"Japan","hiroshima":"Japan","nikko":"Japan","nagano":"Japan","niseko":"Japan","jeju-island":"South Korea","hong-kong":"Hong Kong","guilin":"China","hangzhou":"China","lijiang":"China","yunnan":"China","sanya":"China","kathmandu":"Nepal","nepal-himalayas":"Nepal","pokhara":"Nepal","kerala":"India","goa":"India","jaipur":"India","jodhpur":"India","palawan":"Philippines","raja-ampat":"Indonesia","komodo-islands":"Indonesia","lombok":"Indonesia","da-nang":"Vietnam","nha-trang":"Vietnam","phu-quoc":"Vietnam","ha-long-bay":"Vietnam","alexandria":"Egypt","aswan":"Egypt","siwa-oasis":"Egypt","sharm-el-sheikh":"Egypt","amboseli":"Kenya","laikipia":"Kenya","etosha":"Namibia","sossusvlei":"Namibia","skeleton-coast":"Namibia","bahrain":"Bahrain","alula":"Saudi Arabia","dead-sea":"Jordan","aqaba":"Jordan","beirut":"Lebanon","algiers":"Algeria","reunion":"Réunion","nosy-be":"Madagascar","comoros":"Comoros","rodrigues":"Mauritius","diani-beach":"Kenya","lamu":"Kenya","bazaruto-archipelago":"Mozambique","benguerra-island":"Mozambique","cape-verde":"Cape Verde","galle":"Sri Lanka","yala":"Sri Lanka","andaman-islands":"India","rajasthan":"India","udaipur":"India","bengaluru":"India","new-delhi":"India","mumbai":"India","bhutan":"Bhutan"};
function countryFor(h){var s=String(h||'').split('/').filter(Boolean).pop()||'';return COUNTRY_BY_SLUG[s]||'';}
var PLATES={
 'Europe & Mediterranean':['https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6a9c0ce32ce0ff1e946fc871_6a9c0a8473a9bc4278bdf4a2_jkt-dest-amalfi-coast-hero-v1.jpeg','Boat approaching the terraced villages of the Amalfi Coast'],
 'Asia & Pacific':['https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6a9c3aaf3b7ec9a676cf72ad_6a9c38e0639b4337254a435f_kyoto-hero-v1.jpeg','Quiet Higashiyama lane and Yasaka Pagoda in Kyoto at first light'],
 'The Americas':['https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6a9c3aaf3b7ec9a676cf7292_6a9c38e0398e2c1f31900a21_patagonia-hero-v1.jpeg','Torres del Paine peaks above a glacial lake in Patagonia at sunrise'],
 'Africa & Middle East':['https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6a9ccc483666c64ed29df2f5_6a9ccb7aefc96b89bc8087bd_masai-mara.jpeg','A lone acacia over open grassland at sunrise in the Masai Mara'],
 'Indian Ocean & Islands':['https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6a9c1a22001a473be657c953_6a9c163494d607987bebcb5a_maldives-hero-v1.jpeg','Overwater villa terrace above a turquoise Maldives lagoon']
};
function fade(im){ if(im.complete && im.naturalWidth>0) im.classList.add('on'); else im.addEventListener('load',function(){im.classList.add('on')},{once:true}); }
function spread(arr,n){ if(n>=arr.length) return arr.slice(); var out=[],step=arr.length/n; for(var i=0;i<n;i++) out.push(arr[Math.floor(i*step)]); return out; }
function boot(){
  var root=document.getElementById('jkx'); if(!root||root.dataset.on) return;
  var secs=[].slice.call(document.querySelectorAll('.destinations_wrapper')).filter(function(s){return s.querySelector('.destinations_curated')});
  if(!secs.length) return; root.dataset.on='1';
  var regions=[];
  secs.forEach(function(sec){
    var h=sec.querySelector('.destinations_wrapp_title h2, h2');
    var name=h?h.textContent.trim():'Destinations';
    var items=[].slice.call(sec.querySelectorAll('.destinations_curated')).map(function(el){
      var img=el.querySelector('img'), a=el.querySelector('a');
      var src=img?(img.getAttribute('src')||''):'';
      var t=el.querySelector('h3'), d=el.querySelector('.destinations_curated_content div');
      return {name:t?t.textContent.trim():'', desc:d?d.textContent.trim():'', src:src, alt:img?(img.getAttribute('alt')||''):'', href:a?(a.getAttribute('href')||'#'):'#', region:name, country:cfull(a?(a.getAttribute('href')||''):''), themes:TH.list(themesOf(a))};
    }).filter(function(x){return x.src && x.name});
    sec.classList.add('jkx-off');
    /* JKT-FIX:DESTINATIONS-EUROPE-100-CAP-2026-09-10 */
    if(name==='Europe & Mediterranean'){
      var missingEurope=[
        {name:'Milan',desc:'Milan, Italy. Design, art, food, and neighbourhoods that make the city more interesting than its famous shopping streets.',src:'https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa2e877bf614d31c1d643ea_6aa2e6e033f7907910f73e99_milan-hero-v1.jpeg',alt:'Milan Brera street at blue hour with warm shop windows and the Duomo beyond',href:'/destinations/milan',region:name,country:'Italy',themes:['city','shopping','food','culture']},
        {name:'Lucerne',desc:'Lucerne, Switzerland. Lake, old town, mountain railways, and a compact city that makes central Switzerland easy to enter.',src:'https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa2e876bf614d31c1d643ca_6aa2e6e0e7d0e992a343e438_lucerne-hero-v1.jpeg',alt:'Lucerne waterfront with Chapel Bridge, old town, and mountains reflected in the lake',href:'/destinations/lucerne',region:name,country:'Switzerland',themes:['lakes','mountains','alps','city']},
        {name:'Megève',desc:'Megève, France. A handsome French Alpine village where skiing, food, spa time, and simple walks all belong to the same day.',src:'https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa2e877bf614d31c1d643ee_6aa2e6e08b6547603f718fdc_megeve-hero-v1.jpeg',alt:'Snowy Megève village square with stone buildings, a church, and the Alps beyond',href:'/destinations/megeve',region:name,country:'France',themes:['ski','snow','mountains','alps','wellness']},
        {name:'Chamonix',desc:'Chamonix, France. Mont Blanc scale, a real valley town, and flexible mountain days with food and culture between them.',src:'https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa2e877bf614d31c1d643d2_6aa2e877bf614d31c1d643d2_6aa2e6e0063f66fb21233b7f_chamonix-hero-v1.jpeg',alt:'Chamonix valley and chalet roofs beneath the Mont Blanc massif at dawn',href:'/destinations/chamonix',region:name,country:'France',themes:['ski','snow','mountains','alps','adventure']}
      ];
      missingEurope.forEach(function(m){if(!items.some(function(x){return x.href===m.href}))items.push(m)});
    }
    if(items.length) regions.push({name:name,items:items});
  });
  if(!regions.length) return;
  regions.sort(function(a,b){ var ia=ORDER.indexOf(a.name),ib=ORDER.indexOf(b.name); if(ia<0)ia=99; if(ib<0)ib=99; return ia-ib; });
  var q=document.getElementById('jkx-q'), clr=document.getElementById('jkx-clr'), ct=document.getElementById('jkx-ct'), chips=document.getElementById('jkx-chips'), out=document.getElementById('jkx-out'), empty=document.getElementById('jkx-empty'), term=document.getElementById('jkx-term'), rst=document.getElementById('jkx-rst');
  ct.setAttribute('role','status');ct.setAttribute('aria-live','polite');ct.setAttribute('aria-atomic','true');
  var MAX_QUERY=80, active='ALL', open={}, plateEls={}, wasSearching=false;
  var ov=document.createElement('div'); ov.className='jkxq'; ov.innerHTML='<div class="jkxq__p" role="dialog" aria-modal="true"></div>';
  document.body.appendChild(ov);
  ov.addEventListener('click',function(e){ if(e.target===ov) ov.classList.remove('on'); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') ov.classList.remove('on'); });
  function cols(){ var w=root.clientWidth||1100; var m=(window.innerWidth<620)?152:MINCOL, g=(window.innerWidth<760)?14:GAP; return Math.max(1,Math.min(5,Math.floor((w+g)/(m+g)))); }
  function scrollToResults(){
    var sec=out.querySelector('.jkx__reg');
    if(!sec) return;
    var headerEl=document.querySelector('.header_component, .header, [class*="nav"][class*="fixed"], nav.w-nav');
    var offset=(headerEl && headerEl.getBoundingClientRect().height) ? headerEl.getBoundingClientRect().height+24 : 100;
    var top=sec.getBoundingClientRect().top+window.pageYOffset-offset;
    window.scrollTo({top: Math.max(top,0), behavior:window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
  }
  function quick(x){
    var p=ov.firstChild;
    p.innerHTML='<button type="button" class="jkxq__close" aria-label="Close">&times;</button><div class="jkxq__img"></div><div class="jkxq__scrim"></div><div class="jkxq__b"><div class="jkxq__k"></div><h3></h3><p></p><div class="jkxq__act"><a class="jkxq__go"><span></span></a><button class="jkxq__x" type="button">Close</button></div></div>';
    var im=document.createElement('img'); im.src=x.src; im.alt=x.alt||x.name;
    p.querySelector('.jkxq__img').appendChild(im);
    p.querySelector('.jkxq__k').textContent=x.region;
    p.querySelector('h3').textContent=x.name;
    p.querySelector('p').textContent=x.desc;
    var go=p.querySelector('.jkxq__go'); go.href=x.href; go.querySelector('span').textContent='View '+x.name;
    p.querySelector('.jkxq__x').onclick=function(){ov.classList.remove('on')};
    p.querySelector('.jkxq__close').onclick=function(){ov.classList.remove('on')};
    ov.classList.add('on');
  }
  function mkplate(r){
    var p=PLATES[r.name];
    var b=document.createElement('button'); b.type='button'; b.setAttribute('aria-pressed','false');
    if(p){
      b.className='jkx__pl';
      var im=document.createElement('img'); im.src=p[0]; im.alt=p[1]; im.decoding='async'; b.appendChild(im); fade(im);
      var l=document.createElement('span'); l.className='jkx__pll';
      l.innerHTML='<span class="jkx__plt"></span><span class="jkx__plc"></span>';
      l.querySelector('.jkx__plt').textContent=r.name;
      l.querySelector('.jkx__plc').textContent=r.items.length+' '+LABEL;
      b.appendChild(l);
    } else { b.className='jkx__chip'; var s=document.createElement('span'); s.textContent=r.name; b.appendChild(s); }
    b.onclick=function(){ active=(active===r.name)?'ALL':r.name; open={}; render(); };
    chips.appendChild(b); plateEls[r.name]=b;
  }
  regions.forEach(mkplate);
  rst.onclick=function(){ active='ALL'; open={}; render(); };
  function sync(){
    regions.forEach(function(r){ var b=plateEls[r.name]; if(b) b.setAttribute('aria-pressed', active===r.name?'true':'false'); });
    rst.style.display = active==='ALL' ? 'none' : 'block';
  }
  function card(x,showTag){
    var b=document.createElement('button'); b.type='button'; b.className='jkx__card';
    b.innerHTML='<div class="jkx__tile"></div>'+(showTag?'<span class="jkx__ctag"></span>':'')+'<h3></h3><p></p>';
    var im=document.createElement('img'); im.src=x.src; im.alt=x.alt||x.name; im.decoding='async';
    b.querySelector('.jkx__tile').appendChild(im); fade(im);
    if(showTag) b.querySelector('.jkx__ctag').textContent=x.region;
    b.querySelector('h3').textContent=x.name;
    b.querySelector('p').textContent=x.desc;
    b.onclick=function(){ quick(x); };
    return b;
  }
  function render(){
    if(q.value.length>MAX_QUERY) q.value=q.value.slice(0,MAX_QUERY);
    var s=q.value.trim().toLowerCase(), searching=s.length>0, CL=searching?TH.clauses(q.value):[];
    var c=cols(), FEAT=c*ROWS;
    clr.style.display=searching?'block':'none';
    root.classList.toggle('jkx--searching',searching);
    sync();
    out.innerHTML=''; var shown=0, pool=0;
    regions.forEach(function(r){
      if(active!=='ALL'&&active!==r.name) return;
      var items=r.items; pool+=items.length;
      if(searching) items=items.filter(function(x){ return (x.name+' '+x.desc+' '+x.region+' '+x.href+' '+x.country).toLowerCase().indexOf(s)>-1 || clauseMatch(x,CL); });
      if(!items.length) return;
      var full=searching||open[r.name]||active===r.name;
      var cap=Math.min(FEAT,items.length);
      if(!full && cap%c!==0 && items.length>c){ var fl=Math.floor(cap/c)*c; if(fl>0) cap=fl; }
      var list=full?items:spread(items,cap);
      var sec=document.createElement('section'); sec.className='jkx__reg';
      sec.innerHTML='<div class="jkx__rh"><h2></h2><span class="jkx__rn"></span></div><div class="jkx__grid"></div>';
      sec.querySelector('h2').textContent=r.name;
      sec.querySelector('.jkx__rn').textContent=items.length+' '+LABEL;
      var g=sec.querySelector('.jkx__grid'); g.style.setProperty('--jkx-cols',c);
      list.forEach(function(x){ g.appendChild(card(x,searching)); shown++; });
      if(items.length>list.length && !searching && active==='ALL'){
        var m=document.createElement('div'); m.className='jkx__more';
        var btn=document.createElement('button'); btn.type='button';
        btn.textContent=open[r.name]?'Show fewer':'View all '+items.length+' in '+r.name;
        btn.onclick=function(){ open[r.name]=!open[r.name]; render(); };
        m.appendChild(btn); sec.appendChild(m);
      } else if(open[r.name] && !searching && active==='ALL'){
        var m2=document.createElement('div'); m2.className='jkx__more';
        var b2=document.createElement('button'); b2.type='button'; b2.textContent='Show fewer';
        b2.onclick=function(){ open[r.name]=false; render(); };
        m2.appendChild(b2); sec.appendChild(m2);
      }
      out.appendChild(sec);
    });
    empty.style.display='none';
    if(!shown){ var label=q.value.trim(); term.textContent='"'+(label.length>60?label.slice(0,60)+'…':label)+'"'; }
    ct.textContent=shown?(shown+' of '+pool+' '+LABEL):'';
    if(!shown){var msg=document.createElement('p');msg.className='jkx__empty-live';msg.setAttribute('role','status');msg.textContent=s?'No matching destinations found. Try another search.':'No destinations are currently available.';out.appendChild(msg);}
    /* Search results update in place; filter changes do not move the page. */
    wasSearching=searching;
  }
  var t; q.addEventListener('input',function(){ clearTimeout(t); t=setTimeout(render,90); });
  q.addEventListener('keydown',function(e){ if(e.key==='Enter'){ e.preventDefault(); render(); } });
  clr.onclick=function(){ q.value=''; render(); q.focus(); };
  var f=q.closest('form'); if(f) f.addEventListener('submit',function(e){ e.preventDefault(); });
  var rt, lastC=0;
  window.addEventListener('resize',function(){ clearTimeout(rt); rt=setTimeout(function(){ var c=cols(); if(c!==lastC){ lastC=c; render(); } },160); },{passive:true});
  lastC=cols();
  render();
  /* JKT-THEME-SEARCH-2026-09-26: dropdown (ported from footer autocomplete 2026-09-10) with theme keywords */
  (function(){
    var box=AC_BOX, input=q, find=root.querySelector('.jkx__find');
    if(!box||!find||box.dataset.on) return; box.dataset.on='1';
    var data=[]; regions.forEach(function(r){ r.items.forEach(function(x){ data.push(x); }); });
    input.setAttribute('role','combobox'); input.setAttribute('aria-autocomplete','list'); input.setAttribute('aria-controls',box.id); input.setAttribute('aria-expanded','false');
    var activeIndex=-1, activeMatches=[];
    function countText(n){ return n+' of '+data.length+' destinations'; }
    function syncInline(){ if(!root.classList.contains('jkt-dest-autocomplete-active')) return; var label=countText(activeMatches.length); if(ct&&ct.textContent!==label) ct.textContent=label; }
    var observer=new MutationObserver(syncInline);
    observer.observe(ct,{childList:true,characterData:true,subtree:true});
    observer.observe(out,{childList:true,subtree:true});
    function close(){ box.classList.remove('is-open'); input.setAttribute('aria-expanded','false'); root.classList.remove('jkt-dest-autocomplete-active'); activeIndex=-1; activeMatches=[]; }
    function select(href){ if(href) window.location.href=href; }
    function rank(x,n){
      var a=TH.norm(x.name), c=TH.norm(x.country);
      if(a===n) return 0; if(a.indexOf(n)===0) return 1; if(c===n) return 2; if(c.indexOf(n)>=0) return 3; if(regionStarts(x.region,n)) return 4; if(nameWord(x,n)) return 5; return 6;
    }
    function matches(term){
      var n=TH.norm(term); if(!n) return [];
      var cl=TH.clauses(term);
      return data.filter(function(x){ return TH.norm(x.name).indexOf(n)===0||TH.norm(x.country).indexOf(n)>=0||regionStarts(x.region,n)||nameWord(x,n)||clauseMatch(x,cl); }).sort(function(a,b){
        var d=rank(a,n)-rank(b,n); if(d) return d; return a.name.localeCompare(b.name,undefined,{sensitivity:'base'});
      });
    }
    function setActive(index){
      var rows=[].slice.call(box.querySelectorAll('.jkt-dest-autocomplete-row'));
      activeIndex=index;
      rows.forEach(function(row,i){ row.classList.toggle('is-active',i===activeIndex); row.setAttribute('aria-selected',i===activeIndex?'true':'false'); });
      if(rows[activeIndex]) rows[activeIndex].scrollIntoView({block:'nearest'});
    }
    function renderBox(){
      var term=(input.value||'').trim();
      if(!term){ close(); return; }
      activeMatches=matches(term);
      root.classList.add('jkt-dest-autocomplete-active');
      box.innerHTML='';
      var head=document.createElement('div'); head.className='jkt-dest-autocomplete-head';
      var left=document.createElement('span'); left.textContent='Destinations';
      var right=document.createElement('span'); right.textContent=activeMatches.length+' matches';
      head.appendChild(left); head.appendChild(right); box.appendChild(head);
      if(!activeMatches.length){
        var empty=document.createElement('div'); empty.className='jkt-dest-autocomplete-empty'; empty.setAttribute('role','status');
        empty.textContent='No matching destinations found. Try another search.'; box.appendChild(empty);
      } else {
        activeMatches.forEach(function(x,i){
          var row=document.createElement('button');
          row.type='button'; row.className='jkt-dest-autocomplete-row'; row.setAttribute('role','option'); row.setAttribute('aria-selected','false'); row.setAttribute('data-dest-href',x.href); row.id='jkt-dest-suggestion-'+i;
          var thumb;
          if(x.src){ thumb=document.createElement('img'); thumb.src=x.src; thumb.alt=x.alt||x.name; thumb.loading='lazy'; thumb.decoding='async'; thumb.className='jkt-dest-autocomplete-thumb'; }
          else { thumb=document.createElement('span'); thumb.className='jkt-dest-autocomplete-thumb is-placeholder'; thumb.setAttribute('aria-hidden','true'); }
          var meta=document.createElement('span'); meta.className='jkt-dest-autocomplete-meta';
          var cty=document.createElement('span'); cty.className='jkt-dest-autocomplete-country'; cty.textContent=x.country||x.region;
          var nm=document.createElement('span'); nm.className='jkt-dest-autocomplete-name'; nm.textContent=x.name;
          meta.appendChild(cty); meta.appendChild(nm); row.appendChild(thumb); row.appendChild(meta);
          row.addEventListener('mouseenter',function(){ setActive(i); });
          row.addEventListener('click',function(){ select(x.href); });
          box.appendChild(row);
        });
        setActive(-1);
      }
      box.classList.add('is-open'); input.setAttribute('aria-expanded','true');
      syncInline();
    }
    input.addEventListener('input',function(){ window.requestAnimationFrame(renderBox); });
    input.addEventListener('keydown',function(e){
      var rows=[].slice.call(box.querySelectorAll('.jkt-dest-autocomplete-row'));
      if(e.key==='ArrowDown'&&rows.length){ e.preventDefault(); setActive(Math.min(activeIndex+1,rows.length-1)); }
      else if(e.key==='ArrowUp'&&rows.length){ e.preventDefault(); setActive(Math.max(activeIndex-1,0)); }
      else if(e.key==='Escape'&&box.classList.contains('is-open')){ e.preventDefault(); close(); }
      else if(e.key==='Enter'&&activeIndex>=0&&activeMatches[activeIndex]){ e.preventDefault(); select(activeMatches[activeIndex].href); }
      else if(e.key==='Enter'&&activeMatches.length===1){ e.preventDefault(); select(activeMatches[0].href); }
    });
    document.addEventListener('click',function(e){ if(!find.contains(e.target)) close(); },true);
    window.JKTDestSearch={matches:matches,count:function(){return data.length;}};
    renderBox();
  })();
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot); else boot();
setTimeout(boot,600); setTimeout(boot,1800);
})();
}catch(e){console.warn("jkt embed block failed: emb-destinations-0951cf42 block 3",e)}

/* emb-destinations-0951cf42 block 5 */
try{
(function(){var p=location.pathname.replace(/\/+$/,'')||'/';if(!(p==='/destinations'))return;
function reveal(){var h=document.querySelector('main h1');if(!h||h.dataset.jktHeadlineMotion==='1')return;var text=(h.textContent||'').replace(/[‌‍]/g,'').replace(/\s+/g,' ').trim();if(!text)return;var frag=document.createDocumentFragment();text.split(' ').forEach(function(word,i,all){var s=document.createElement('span');s.className='jkt-headline-word';s.textContent=word;s.style.setProperty('--jkt-headline-delay',Math.min(i*38,380)+'ms');frag.appendChild(s);if(i<all.length-1)frag.appendChild(document.createTextNode(' '))});h.replaceChildren(frag);h.dataset.jktHeadlineMotion='1';requestAnimationFrame(function(){requestAnimationFrame(function(){h.classList.add('jkt-headline-in')})})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',reveal,{once:true});else reveal();
})();
}catch(e){console.warn("jkt embed block failed: emb-destinations-0951cf42 block 5",e)}
