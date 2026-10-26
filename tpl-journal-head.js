/* jkt-dg-canonical-2026-09-07 */
try{
(function(){
 var m=location.pathname.replace(/\/+$/,"").match(/^\/journal\/(.+)-destination-guide$/);
 if(!m)return;
 var slug=m[1],aliases={"martha-s-vineyard":"marthas-vineyard","merida-and-yucatan":"merida-yucatan","troms":"tromso"};
 var target="https://www.justkeepstravel.com/destinations/"+(aliases[slug]||slug);
 function set(){
  if(!document.head)return;
  var links=document.querySelectorAll('link[rel="canonical"]');
  for(var i=links.length-1;i>=0;i--){
   if(links[i].getAttribute("href")===target)return;
   links[i].parentNode.removeChild(links[i]);
  }
  var l=document.createElement("link");
  l.setAttribute("rel","canonical");
  l.setAttribute("href",target);
  document.head.appendChild(l);
 }
 set();
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",set,{once:true});
})();
}catch(e){console.warn("jkt template block failed: jkt-dg-canonical-2026-09-07",e)}

/* tpl-journal-head block 2 (author kept from CMS author-schema-id, 2026-10-26) */
try{
(function () {
  function decodeSchemaText(value) {
    if (typeof value !== "string" || value.indexOf("&") === -1) return value;
    var textarea = document.createElement("textarea");
    textarea.innerHTML = value;
    return textarea.value;
  }

  function normalizeArticleSchema() {
    var authorElement = document.querySelector(".author_name");
    var authorName = authorElement ? authorElement.textContent.trim() : "";

    var schema = Array.prototype.find.call(
      document.querySelectorAll('script[type="application/ld+json"]'),
      function (node) { return node.textContent.indexOf("#article") !== -1; }
    );
    if (!schema) return;

    try {
      var data = JSON.parse(schema.textContent);
      var graph = Array.isArray(data["@graph"]) ? data["@graph"] : [];
      var article = graph.find(function (node) {
        return node && node["@type"] === "BlogPosting";
      });
      if (!article) return;

      ["headline", "name", "description"].forEach(function (key) {
        article[key] = decodeSchemaText(article[key]);
      });

      graph.forEach(function (node) {
        if (!node) return;
        if (node["@type"] === "WebPage") {
          node.name = decodeSchemaText(node.name);
          node.description = decodeSchemaText(node.description);
        }
        if (node["@type"] === "BreadcrumbList" && Array.isArray(node.itemListElement)) {
          node.itemListElement.forEach(function (item) {
            if (item) item.name = decodeSchemaText(item.name);
          });
        }
      });

      var staticId = article.author && typeof article.author["@id"] === "string" ? article.author["@id"] : "";
      if (staticId.indexOf("https://") === 0) {
        if (article.author.name) article.author.name = decodeSchemaText(article.author.name);
        if (/#justin-keeperman$/.test(staticId)) {
          article.author.url = "https://www.justkeepstravel.com/about";
        }
        article.creator = { "@id": staticId };
      } else if (authorName && authorName.toLowerCase() !== "justkeeps travel") {
        var authorId = article.url + "#author";
        if (authorName.toLowerCase() === "justin keeperman") {
          authorId = "https://www.justkeepstravel.com/about#justin-keeperman";
        }
        article.author = {
          "@type": "Person",
          "@id": authorId,
          "name": authorName
        };
        if (authorName.toLowerCase() === "justin keeperman") {
          article.author.url = "https://www.justkeepstravel.com/about";
        }
        article.creator = { "@id": authorId };
      } else if (authorName) {
        article.author = { "@id": "https://www.justkeepstravel.com/#organization" };
      }

      schema.textContent = JSON.stringify(data);
    } catch (error) {
      /* Keep the valid static schema if runtime normalization ever fails. */
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", normalizeArticleSchema, { once: true });
  } else {
    normalizeArticleSchema();
  }
})();
}catch(e){console.warn("jkt template block failed: tpl-journal-head block 2",e)}

/* jkt-journal-schema-date-fallback-2026-08-30 */
try{
(function () {
  var dates = {
    "/journal/corporate-travel-planner": "2026-08-30T06:50:18.512Z",
    "/journal/destination-wedding-travel-agency": "2026-08-29T06:54:30.055Z"
  };
  var value = dates[location.pathname.replace(/\/$/, "")];
  if (!value) return;
  var schema = Array.prototype.find.call(document.querySelectorAll('script[type="application/ld+json"]'), function (node) {
    return node.textContent.indexOf("#article") !== -1;
  });
  if (!schema) return;
  try {
    var data = JSON.parse(schema.textContent);
    var graph = Array.isArray(data["@graph"]) ? data["@graph"] : [];
    var article = graph.find(function (node) { return node && node["@type"] === "BlogPosting"; });
    if (!article) return;
    if (!article.datePublished) article.datePublished = value;
    if (!article.dateModified) article.dateModified = value;
    schema.textContent = JSON.stringify(data);
  } catch (error) {}
})();
}catch(e){console.warn("jkt template block failed: jkt-journal-schema-date-fallback-2026-08-30",e)}

/* jkt-journal-template-visibility-fix-2026-09-11 */
try{
(function(){
  var PAGE="6a2cde5eae15e28840bdbc81";
  if(document.documentElement.getAttribute("data-wf-page")!==PAGE)return;
  function reveal(){
    document.querySelectorAll(".journal_template_wrap").forEach(function(element){
      element.style.setProperty("opacity","1","important");
      element.style.setProperty("visibility","visible","important");
      element.style.setProperty("display","block","important");
    });
  }
  function boot(){
    reveal();
    [250,1000,2500].forEach(function(delay){window.setTimeout(reveal,delay);});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();
}catch(e){console.warn("jkt template block failed: jkt-journal-template-visibility-fix-2026-09-11",e)}

/* jkt-journal-article-metadata-fallback-2026-09-11 */
try{
(function(){
  var fixes={
    "/journal/private-villa-vacation":{
      alt:"Illustrated private villa with a pool, palms, and a sunlit terrace",
      date:"2026-09-10T07:17:24.065Z"
    },
    "/journal/how-to-plan-a-group-trip":{
      alt:"Illustrated luxury group trip with travelers gathering beside a safari vehicle",
      date:"2026-09-09T07:21:31.622Z"
    }
  };
  function apply(){
    var fix=fixes[location.pathname.replace(/\/$/,"")];
    if(!fix)return;
    document.querySelectorAll(".journal_template_banner_image").forEach(function(img){
      if(!img.getAttribute("alt"))img.setAttribute("alt",fix.alt);
    });
    var schema=Array.prototype.find.call(document.querySelectorAll('script[type="application/ld+json"]'),function(node){
      return node.textContent.indexOf("#article")!==-1;
    });
    if(!schema)return;
    try{
      var data=JSON.parse(schema.textContent);
      var graph=Array.isArray(data["@graph"])?data["@graph"]:[];
      var article=graph.find(function(node){return node&&node["@type"]==="BlogPosting";});
      if(!article)return;
      if(!article.datePublished)article.datePublished=fix.date;
      if(!article.dateModified)article.dateModified=fix.date;
      schema.textContent=JSON.stringify(data);
    }catch(error){}
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply,{once:true});else apply();
  for(var i=1;i<12;i++)setTimeout(apply,i*250);
})();
}catch(e){console.warn("jkt template block failed: jkt-journal-article-metadata-fallback-2026-09-11",e)}

/* jkt-journal-category-label-final-2026-09-11 */
try{
(function(){
  var PAGE="6a2cde5eae15e28840bdbc81";
  var OPENINGS={
    "/journal/corinthia-rome-2026-opening-guide":true,
    "/journal/amanvari-east-cape-mexico-2026-opening-guide":true,
    "/journal/rosewood-rome-2027-opening-preview":true,
    "/journal/rosewood-the-raleigh-miami-beach-opening-preview":true,
    "/journal/delano-miami-beach-2026-reopening-guide":true,
    "/journal/mandarin-oriental-punta-negra-mallorca-opening-guide":true,
    "/journal/four-seasons-cartagena-opening-guide":true,
    "/journal/danieli-venezia-four-seasons-hotel-opening-guide":true
  };
  function apply(){
    if(document.documentElement.getAttribute("data-wf-page")!==PAGE)return;
    var opening=!!OPENINGS[location.pathname.replace(/\/$/,"")];
    document.querySelectorAll(".journal_template_wrap .journal_box_cate,.journal_template_wrapper .journal_box_cate").forEach(function(meta){
      var first=meta.querySelector("div");
      if(!first)return;
      var label=(first.textContent||"").replace(/\s+/g," ").trim();
      if(opening&&/PROPERTY REVIEWS|REVIEWS|OPENINGS/i.test(label))first.textContent="OPENINGS";
      else if(!opening&&/PROPERTY REVIEWS/i.test(label))first.textContent="REVIEWS";
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",apply,{once:true});else apply();
  for(var i=1;i<20;i++)setTimeout(apply,i*250);
})();
}catch(e){console.warn("jkt template block failed: jkt-journal-category-label-final-2026-09-11",e)}

/* jkt-journal-empty-spacer-normalizer-2026-09-16 */
try{
(function () {
  function isBlankSpacer(value) {
    return Array.prototype.every.call(value || '', function (character) {
      return [9, 10, 13, 32, 8203, 8204, 8205, 65279].indexOf(character.charCodeAt(0)) !== -1;
    });
  }
  function normalizeJournalSpacing() {
    document.querySelectorAll('.bio_wrap .w-richtext p').forEach(function (p) {
      if (isBlankSpacer(p.textContent)) p.style.display = 'none';
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', normalizeJournalSpacing, { once: true });
  } else {
    normalizeJournalSpacing();
  }
})();
}catch(e){console.warn("jkt template block failed: jkt-journal-empty-spacer-normalizer-2026-09-16",e)}
