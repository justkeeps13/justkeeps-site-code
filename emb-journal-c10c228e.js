/* emb-journal-c10c228e block 2 */
try{
(function(){
var MAP={reviews:'reviews',destinations:'destination guides',insights:'industry insights',tips:'travel insider tips',seasonal:'seasonal guides',openings:'openings'};
function tab(key){return [].slice.call(document.querySelectorAll('#jkg .jkt-menu-clone .journal_tab_link')).filter(function(b){return b.getAttribute('data-category-key')===key})[0];}
function go(topic,smooth){var key=MAP[topic];if(!key)return false;var b=tab(key);if(!b)return false;b.click();var t=document.getElementById('jkg');if(t){var y=Math.max(t.getBoundingClientRect().top+window.pageYOffset-120,0);var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(smooth&&!rm){window.scrollTo({top:y,behavior:'smooth'});setTimeout(function(){if(Math.abs(window.pageYOffset-y)>40)window.scrollTo(0,y);},900);}else{window.scrollTo(0,y);}}return true;}
var p=null;try{p=new URLSearchParams(location.search).get('topic');}catch(err){}
if(p&&MAP[p]){var n=0;(function wait(){if(go(p,false))return;if(++n<60)setTimeout(wait,100);})();}
})();
}catch(e){console.warn("jkt embed block failed: emb-journal-c10c228e block 2",e)}
