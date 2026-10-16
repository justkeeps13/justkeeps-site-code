/* emb-journal-tpl-85ec2377 block 2 */
try{
(function(){
 var sources={
  "/journal/wish-masters-justin-keeperman-is-miamis-most-connected-travel-insider":{src:"https://s3.amazonaws.com/webflow-prod-assets/6a1f886348e8c1c8bceca358/6a9756f1fd8f44dce5d43a58_wish-masters-miami-magazine-december-2014-original.jpeg",alt:"Wish Masters feature from Miami Magazine, December 2014, profiling Justin Keeperman",width:"1372",height:"1644"},
  "/journal/a-list-bliss-archived-modern-luxury-brides-profile":{src:"https://s3.amazonaws.com/webflow-prod-assets/6a1f886348e8c1c8bceca358/6a9756f225944a1587a8e8d8_a-list-bliss-modern-luxury-brides-original.jpeg",alt:"A-List Bliss profile from Modern Luxury Brides South Florida and The Caribbean featuring Justin Keeperman",width:"900",height:"1171"}
 };
 var spec=sources[location.pathname.replace(/\/$/,"")];
 if(!spec)return;
 document.documentElement.classList.add("jkt-press-archive-article");
 var image=document.querySelector(".journal_template_banner_image");
 if(image){image.removeAttribute("srcset");image.removeAttribute("sizes");image.src=spec.src;image.alt=spec.alt;image.width=spec.width;image.height=spec.height}
 document.querySelectorAll('meta[property="og:image"],meta[name="twitter:image"]').forEach(function(meta){meta.content=spec.src});
 Array.prototype.forEach.call(document.querySelectorAll('script[type="application/ld+json"]'),function(node){
  if(node.textContent.indexOf("#article")===-1)return;
  try{var data=JSON.parse(node.textContent),graph=Array.isArray(data["@graph"])?data["@graph"]:[];
   graph.forEach(function(item){if(!item)return;if(item["@type"]==="BlogPosting")item.image=spec.src;if(item["@type"]==="WebPage")item.primaryImageOfPage=spec.src});
   node.textContent=JSON.stringify(data)
  }catch(error){}
 });
})();
}catch(e){console.warn("jkt embed block failed: emb-journal-tpl-85ec2377 block 2",e)}

/* emb-journal-tpl-85ec2377 block 4 */
try{
(function(){
 var path=window.location.pathname.replace(/\/+$/,'')||'/';
 var articleRoot=document.querySelector('main')||document.body;
 var root=document.querySelector('.journal_template_wrapper')||articleRoot;
 var isJournal=/^\/journal\/[^/]+/.test(path)||!!document.querySelector('.journal_template_wrapper');
 var isDestination=/^\/destinations\/[^/]+/.test(path)||!!document.querySelector('section.jkt-destination-explore-1');
 if(!isJournal&&!isDestination)return;
 var titleEl=articleRoot&&articleRoot.querySelector('h1');
 var title=titleEl?titleEl.textContent.trim():document.title.replace(/\s+\|.*$/,'').trim();
 var fallbacks=[
  'https://cdn.prod.website-files.com/6a1f886348e8c1c8bceca358/6a9f5abe84946e9b266371f5_luxury-travel-footer-banner-coastal-terrace.webp',
  'https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa54b487bb4916701f862c4_6a9ecf26bf3c7f95e3cbbaec_jkt-executive-estate-arrival-helicopter.webp',
  'https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa3a81ae669dd0b891b3ac6_executive-travel-management-business-travel.jpeg'
 ];
 var hash=0;for(var i=0;i<path.length;i++){hash=((hash<<5)-hash)+path.charCodeAt(i);hash|=0}
 var fallback=fallbacks[Math.abs(hash)%fallbacks.length];
 var hero=document.querySelector('.journal_template_banner_image, .jkt2-mast-img');
 if(hero){var src=hero.getAttribute('src')||'';var low=src.toLowerCase();var placeholder=!src||/placeholder|sketch|default|empty/.test(low)||(hero.complete&&hero.naturalWidth>0&&hero.naturalWidth<120);if(placeholder){hero.removeAttribute('srcset');hero.removeAttribute('sizes');hero.src=fallback;hero.alt='Luxury travel inspiration from JustKeeps Travel';hero.loading='eager';document.querySelectorAll('meta[property="og:image"],meta[name="twitter:image"]').forEach(function(meta){meta.content=fallback})}}
 if(articleRoot&&titleEl&&!articleRoot.querySelector('[data-jkt-share]')){var row=document.createElement('div');row.className='jkt-article-share-row';row.setAttribute('data-jkt-share','1');var btn=document.createElement('button');btn.type='button';btn.className='jkt-article-share';btn.textContent='SHARE ARTICLE ↗';btn.setAttribute('aria-label','Share article');row.appendChild(btn);titleEl.insertAdjacentElement('afterend',row);btn.addEventListener('click',function(){var data={title:title,text:'',url:window.location.href};var done=function(label){btn.textContent=label;window.setTimeout(function(){btn.textContent='SHARE ARTICLE ↗'},2200)};if(navigator.share){navigator.share(data).then(function(){done('SHARED ↗')}).catch(function(){});return}var copy=navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(data.url):Promise.reject();copy.then(function(){done('LINK COPIED')}).catch(function(){var ta=document.createElement('textarea');ta.value=data.url;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done('LINK COPIED')}catch(e){done('COPY LINK')}document.body.removeChild(ta)})})}
 if(isJournal&&root&&!document.querySelector('#jkt-article-cta-bar')){var bar=document.createElement('section');bar.id='jkt-article-cta-bar';bar.setAttribute('aria-label','Continue your journey');var inner=document.createElement('div');inner.className='jkt-article-cta-inner';var label=document.createElement('p');label.className='jkt-article-cta-label';label.textContent='JOURNAL';var heading=document.createElement('h2');heading.className='jkt-article-cta-title';heading.textContent=title;var link=document.createElement('a');link.className='jkt-article-cta-link';link.href='/inquire';link.textContent='BEGIN YOUR JOURNEY ↗';inner.appendChild(label);inner.appendChild(heading);inner.appendChild(link);bar.appendChild(inner);var footer=document.querySelector('#jkt-site-footer')||document.querySelector('.jkt-site-footer');if(footer&&footer.parentNode)footer.parentNode.insertBefore(bar,footer);else root.insertAdjacentElement('afterend',bar)}
 if(isDestination){var dst=document.querySelector('section.jkt-destination-explore-1');if(dst)dst.setAttribute('data-jkt-home-image-bar','1')}
})();
}catch(e){console.warn("jkt embed block failed: emb-journal-tpl-85ec2377 block 4",e)}

/* emb-journal-tpl-85ec2377 block 5 */
try{
(function(){
 var path=window.location.pathname.replace(/\/+$/,'')||'/';
 var articleRoot=document.querySelector('main')||document.body;
 var isJournal=!!document.querySelector('.journal_template_wrapper')||/^\/journal\/[^/]+/.test(path);
 var isDestination=!!document.querySelector('section.jkt-destination-explore-1')||/^\/destinations\/[^/]+/.test(path);
 if(!isJournal&&!isDestination)return;
 var fallbacks=[
  'https://cdn.prod.website-files.com/6a1f886348e8c1c8bceca358/6a9f5abe84946e9b266371f5_luxury-travel-footer-banner-coastal-terrace.webp',
  'https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa54b487bb4916701f862c4_6a9ecf26bf3c7f95e3cbbaec_jkt-executive-estate-arrival-helicopter.webp',
  'https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa3a81ae669dd0b891b3ac6_executive-travel-management-business-travel.jpeg'
 ];
 var hash=0;for(var i=0;i<path.length;i++){hash=((hash<<5)-hash)+path.charCodeAt(i);hash|=0}
 var fallback=fallbacks[Math.abs(hash)%fallbacks.length];
 function repairHero(){
  var hero=document.querySelector('.journal_template_banner_image, .jkt2-mast-img');
  if(!hero)return;
  var src=hero.getAttribute('src')||hero.currentSrc||'';
  if(/placeholder|sketch|default|empty/.test(src.toLowerCase())){
   hero.removeAttribute('srcset');hero.removeAttribute('sizes');hero.src=fallback;hero.alt='Luxury travel inspiration from JustKeeps Travel';hero.loading='eager';
   document.querySelectorAll('meta[property="og:image"],meta[name="twitter:image"]').forEach(function(meta){meta.content=fallback});
  }
 }
 function repairArticle(){
  var titleEl=articleRoot.querySelector('h1')||document.querySelector('h1');
  var title=titleEl&&titleEl.textContent.trim();
  if(title){
   var barTitle=document.querySelector('#jkt-article-cta-bar .jkt-article-cta-title');
   if(barTitle)barTitle.textContent=title;
   if(!document.querySelector('[data-jkt-share]')){
    var row=document.createElement('div');row.className='jkt-article-share-row';row.setAttribute('data-jkt-share','1');
    var btn=document.createElement('button');btn.type='button';btn.className='jkt-article-share';btn.textContent='SHARE ARTICLE ↗';btn.setAttribute('aria-label','Share article');row.appendChild(btn);
    titleEl.insertAdjacentElement('afterend',row);
    btn.addEventListener('click',function(){var data={title:title,text:'',url:window.location.href};var done=function(label){btn.textContent=label;window.setTimeout(function(){btn.textContent='SHARE ARTICLE ↗'},2200)};if(navigator.share){navigator.share(data).then(function(){done('SHARED ↗')}).catch(function(){});return}var copy=navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(data.url):Promise.reject();copy.then(function(){done('LINK COPIED')}).catch(function(){var ta=document.createElement('textarea');ta.value=data.url;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done('LINK COPIED')}catch(e){done('COPY LINK')}document.body.removeChild(ta)})});
   }
  }
  repairHero();
  if(isDestination){var dst=document.querySelector('section.jkt-destination-explore-1');if(dst)dst.setAttribute('data-jkt-home-image-bar','1')}
 }
 repairArticle();
 [200,800,1800,3500,6000].forEach(function(ms){window.setTimeout(repairArticle,ms)});
 var observer=new MutationObserver(repairHero);observer.observe(document.documentElement,{subtree:true,attributes:true,attributeFilter:['src','srcset','sizes']});
 window.setTimeout(function(){observer.disconnect()},10000);
})();
}catch(e){console.warn("jkt embed block failed: emb-journal-tpl-85ec2377 block 5",e)}

/* emb-journal-tpl-85ec2377 block 7 */
try{
(function(){
 function addSearch(){
  var bar=document.querySelector('#jkt-article-cta-bar');
  if(!bar||bar.querySelector('[data-jkt-destination-search]'))return;
  var inner=bar.querySelector('.jkt-article-cta-inner')||bar;
  var panel=document.createElement('div');panel.className='jkt-destination-search-panel';panel.setAttribute('data-jkt-destination-search','1');
  var heading=document.createElement('p');heading.className='jkt-destination-search-heading';heading.textContent='WHERE WILL YOU GO NEXT?';
  var form=document.createElement('form');form.className='jkt-destination-search-form';
  var input=document.createElement('input');input.className='jkt-destination-search-input';input.type='search';input.placeholder='Search cities, islands, countries, or regions…';input.setAttribute('aria-label','Search destinations');
  var submit=document.createElement('button');submit.className='jkt-destination-search-submit';submit.type='submit';submit.textContent='SEARCH ↗';
  form.appendChild(input);form.appendChild(submit);
  form.addEventListener('submit',function(event){event.preventDefault();var q=input.value.trim();location.href='/destinations'+(q?'?search='+encodeURIComponent(q):'')});
  var link=document.createElement('a');link.className='jkt-destination-search-link';link.href='/destinations';link.textContent='VIEW ALL DESTINATIONS';
  panel.appendChild(heading);panel.appendChild(form);panel.appendChild(link);inner.appendChild(panel)
 }
 addSearch();[300,1000,2500,5000].forEach(function(ms){setTimeout(addSearch,ms)})
})();
}catch(e){console.warn("jkt embed block failed: emb-journal-tpl-85ec2377 block 7",e)}
