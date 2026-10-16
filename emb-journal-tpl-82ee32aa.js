/* emb-journal-tpl-82ee32aa block 2 */
try{
(function () {
  function slugify(value) {
    return String(value || "")
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[’']/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function restoreArticleTargets() {
    var article = document.querySelector(".journal_template_wrapper .bio_wrap .w-richtext");
    if (!article) return;

    var headings = Array.prototype.slice.call(article.querySelectorAll("h2, h3, h4"));
    var aliases = {
      "design-the-day-around-anchors": "balancing-privacy-and-togetherness-in-group-settings"
    };

    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(function (link) {
      var targetId = link.hash.slice(1);
      if (!targetId || document.getElementById(targetId)) return;

      var wantedSlug = aliases[targetId] || targetId;
      var heading = headings.find(function (item) {
        return slugify(item.textContent) === wantedSlug;
      });
      if (heading && !heading.id) heading.id = targetId;
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", restoreArticleTargets, { once: true });
  } else {
    restoreArticleTargets();
  }
})();
}catch(e){console.warn("jkt embed block failed: emb-journal-tpl-82ee32aa block 2",e)}

/* emb-journal-tpl-82ee32aa block 4 */
try{
(function(){var p=location.pathname.replace(/\/+$/,'')||'/';if(!(p.indexOf('/journal/')===0))return;
function reveal(){var h=document.querySelector('main h1');if(!h||h.dataset.jktHeadlineMotion==='1')return;var text=(h.textContent||'').replace(/[‌‍]/g,'').replace(/\s+/g,' ').trim();if(!text)return;var frag=document.createDocumentFragment();text.split(' ').forEach(function(word,i,all){var s=document.createElement('span');s.className='jkt-headline-word';s.textContent=word;s.style.setProperty('--jkt-headline-delay',Math.min(i*38,380)+'ms');frag.appendChild(s);if(i<all.length-1)frag.appendChild(document.createTextNode(' '))});h.replaceChildren(frag);h.dataset.jktHeadlineMotion='1';requestAnimationFrame(function(){requestAnimationFrame(function(){h.classList.add('jkt-headline-in')})})}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',reveal,{once:true});else reveal();
})();
}catch(e){console.warn("jkt embed block failed: emb-journal-tpl-82ee32aa block 4",e)}
