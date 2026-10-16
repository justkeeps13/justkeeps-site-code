/* emb-dest-tpl-bc9167f5 block 2 */
try{
(function(){
 var fallbacks=['https://cdn.prod.website-files.com/6a1f886348e8c1c8bceca358/6a9f5abe84946e9b266371f5_luxury-travel-footer-banner-coastal-terrace.webp','https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa54b487bb4916701f862c4_6a9ecf26bf3c7f95e3cbbaec_jkt-executive-estate-arrival-helicopter.webp','https://cdn.prod.website-files.com/6a2cde5d1ac36d393470dd24/6aa3a81ae669dd0b891b3ac6_executive-travel-management-business-travel.jpeg'];
 var path=location.pathname.replace(/\/+$/,'')||'/';var hash=0;for(var i=0;i<path.length;i++){hash=((hash<<5)-hash)+path.charCodeAt(i);hash|=0}var fallback=fallbacks[Math.abs(hash)%fallbacks.length];var root=document.querySelector('main')||document.body;var dest=document.querySelector('section.jkt-destination-explore-1');if(!dest)return;
 function run(){
  dest.setAttribute('data-jkt-home-image-bar','1');
  var hero=document.querySelector('.journal_template_banner_image,.jkt2-mast-img,.featured_journeys_banner_wrapper img');var src=hero&&(hero.getAttribute('src')||hero.currentSrc||'');if(hero&&/placeholder|sketch|default|empty/.test(src.toLowerCase())){hero.removeAttribute('srcset');hero.removeAttribute('sizes');hero.src=fallback;hero.alt='Luxury travel inspiration from JustKeeps Travel';hero.loading='eager'}
  var titleEl=root.querySelector('h1')||document.querySelector('h1');var title=titleEl&&titleEl.textContent.trim();if(!title||document.querySelector('[data-jkt-share]'))return;var row=document.createElement('div');row.className='jkt-article-share-row';row.setAttribute('data-jkt-share','1');var btn=document.createElement('button');btn.type='button';btn.className='jkt-article-share';btn.textContent='SHARE ARTICLE ↗';btn.setAttribute('aria-label','Share article');row.appendChild(btn);titleEl.insertAdjacentElement('afterend',row);btn.addEventListener('click',function(){var data={title:title,text:'',url:location.href};var done=function(label){btn.textContent=label;setTimeout(function(){btn.textContent='SHARE ARTICLE ↗'},2200)};if(navigator.share){navigator.share(data).then(function(){done('SHARED ↗')}).catch(function(){});return}if(navigator.clipboard&&isSecureContext){navigator.clipboard.writeText(data.url).then(function(){done('LINK COPIED')}).catch(function(){done('COPY LINK')})}else{done('COPY LINK')}});
 }
 run();[250,800,1800,3500,6000].forEach(function(ms){setTimeout(run,ms)});
})();
}catch(e){console.warn("jkt embed block failed: emb-dest-tpl-bc9167f5 block 2",e)}
