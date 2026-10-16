/* emb-dest-tpl-0642aa5f block 3 */
try{
(function(){var p=location.pathname.replace(/\/+$/,'')||'/';if(!(p.indexOf('/destinations/')===0))return;
function reveal(){var h=document.querySelector('main h1');if(!h||h.dataset.jktHeadlineMotion==='1')return;var text=(h.textContent||'').replace(/[‌‍]/g,'').replace(/\s+/g,' ').trim();if(!text)return;var frag=document.createDocumentFragment();text.split(' ').forEach(function(word,i,all){var s=document.createElement('span');s.className='jkt-headline-word';s.textContent=word;s.style.setProperty('--jkt-headline-delay',Math.min(i*38,380)+'ms');frag.appendChild(s);if(i<all.length-1)frag.appendChild(document.createTextNode(' '))});h.replaceChildren(frag);h.dataset.jktHeadlineMotion='1';requestAnimationFrame(function(){requestAnimationFrame(function(){h.classList.add('jkt-headline-in')})})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',reveal,{once:true});else reveal();
})();
}catch(e){console.warn("jkt embed block failed: emb-dest-tpl-0642aa5f block 3",e)}
