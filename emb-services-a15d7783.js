/* emb-services-a15d7783 block 2 */
try{
(function () {
  function start() {
    if (!document.querySelector("#service-overview")) return;

    var profiles = {
      "Luxury Leisure Travel": {
        lead: "Journeys shaped around how you want to travel, with hotels, villas, yachts, guides, dining, transportation and support coordinated as one plan.",
        services: ["Eligible hotel benefits", "Private villas and yachts", "Private guides", "Dining and experiences", "Family and milestone travel", "Support while traveling"],
        journey: { href: "/featured-journeys/amalfi-positano-by-sea", title: "Amalfi & Positano by Sea", subtext: "Naples · Positano · Capri · Ravello" }
      },
      "Executive & Private Office Travel": {
        lead: "One accountable travel contact for principals, families, family offices, chiefs of staff and executive assistants, from daily movement to complex international itineraries.",
        services: ["Daily travel", "Principals and families", "Complex international travel", "Private aviation", "Hotels and ground", "Active trip support"],
        journey: { href: "/services/executive#example-journey", title: "One Trusted Travel Desk", subtext: "For Principals, Families and Their Teams" }
      },
      "Group Travel": {
        lead: "Private group travel managed around the people involved, from destination celebrations and multi-family escapes to room blocks, transportation and traveler communication.",
        services: ["Destination celebrations", "Private group stays", "Room blocks and contracts", "Air and ground", "Guest communication", "Shared experiences"],
        journey: { href: "/services/group#example-journey", title: "A Week in Tuscany", subtext: "Private Estate · Family · Friends" }
      },
      "Entertainment & Production Travel": {
        lead: "Working travel built around the latest schedule, with tour routing, talent and crew logistics, hotels, vehicles and last-minute changes kept connected.",
        services: ["Tour routing", "Artists and executives", "Production travel", "Crew and entourage", "Schedule changes", "Privacy and support"],
        journey: { href: "/services/entertainment#example-journey", title: "Global Tour Routing", subtext: "14 Cities in 6 Weeks" }
      },
      "Travel Concierge": {
        lead: "Year-round help with the requests around travel, from dining, events and gifting to private transportation, wellness and last-minute plans.",
        services: ["Dining and events", "Private cars and aviation", "Yachts and escapes", "Personal gifting", "Wellness", "Year-round contact"],
        journey: { href: "/services/concierge#example-journey", title: "Ongoing Concierge Support", subtext: "Year-Round · Personal · Discreet" }
      }
    };

    document.querySelectorAll("#service-overview .our_services_item").forEach(function (item, index) {
      var content = item.querySelector(".our_services_item_content");
      var heading = content && content.querySelector(":scope > h2");
      var profile = heading && profiles[heading.textContent.trim()];
      if (!content || !profile) return;

      content.setAttribute("data-jkt-index", String(index + 1).padStart(2, "0"));

      var lead = content.querySelector(":scope > .text-size-small");
      if (lead) lead.textContent = profile.lead;

      var rich = content.querySelector(":scope > .rich-text");
      if (rich) {
        rich.innerHTML = '<div class="jkt-gateway-label">Selected services</div><div class="jkt-gateway-grid">' +
          profile.services.map(function (service) { return "<span>" + service + "</span>"; }).join("") +
          "</div>";
      }

      var imageWrap = item.querySelector(".our_services_image_wrap");
      if (imageWrap && profile.journey) {
        var journeyTitle = imageWrap.querySelector(".our_services_detail h3");
        var journeySubtext = imageWrap.querySelector(".our_services_detail .text-size-small");
        if (journeyTitle) journeyTitle.textContent = profile.journey.title;
        if (journeySubtext) journeySubtext.textContent = profile.journey.subtext;

        var nativeLink = imageWrap.querySelector(".jkt-journey-native-link");
        if (!nativeLink) {
          nativeLink = document.createElement("a");
          nativeLink.className = "jkt-journey-native-link";
          nativeLink.addEventListener("click", function (event) { event.stopPropagation(); });
          imageWrap.appendChild(nativeLink);
        }
        nativeLink.href = profile.journey.href;
        nativeLink.setAttribute("aria-label", "Read " + profile.journey.title);
        imageWrap.removeAttribute("role");
        imageWrap.removeAttribute("tabindex");
      }
    });
  }

  var attempts = 0;
  function boot() {
    start();
    if (document.querySelectorAll("#service-overview .jkt-gateway-grid").length < 5 && attempts++ < 30) {
      window.setTimeout(boot, 200);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  boot();
})();
}catch(e){console.warn("jkt embed block failed: emb-services-a15d7783 block 2",e)}

/* emb-services-a15d7783 block 4 */
try{
(function(){function init(){var bar=document.getElementById('jkt-main-destination-bar');if(bar)return;bar=document.createElement('section');bar.id='jkt-main-destination-bar';bar.setAttribute('aria-label','Continue your journey');bar.innerHTML='<div class="jkt-main-destination-inner"><p class="jkt-main-destination-heading">WHERE WILL YOU GO NEXT?</p><form class="jkt-main-destination-form"><input class="jkt-main-destination-input" type="search" placeholder="Search destinations" aria-label="Search destinations"><button class="jkt-main-destination-submit" type="submit">SEARCH ↗</button></form><a class="jkt-main-destination-link" href="/destinations">VIEW ALL DESTINATIONS</a></div>';var footer=document.querySelector('#jkt-site-footer,.jkt-site-footer,footer');if(footer&&footer.parentNode)footer.parentNode.insertBefore(bar,footer);else document.body.appendChild(bar);var form=bar.querySelector('form'),input=bar.querySelector('input');if(form&&input)form.addEventListener('submit',function(event){event.preventDefault();var query=(input.value||'').trim();window.location.href='/destinations'+(query?'?search='+encodeURIComponent(query):'')})}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else setTimeout(init,60)})();
}catch(e){console.warn("jkt embed block failed: emb-services-a15d7783 block 4",e)}

/* emb-services-a15d7783 block 7 */
try{
(function(){function boot(){var bar=document.getElementById("jkt-main-destination-bar");if(!bar||bar.dataset.jktLiveSearch)return false;var form=bar.querySelector(".jkt-main-destination-form"),input=bar.querySelector(".jkt-main-destination-input");if(!form||!input)return false;bar.dataset.jktLiveSearch="true";form.style.position="relative";input.setAttribute("autocomplete","off");var box=document.createElement("div");box.className="jkt-live-search-results";box.hidden=true;form.appendChild(box);var cache=null;function hide(){box.hidden=true}function list(query){if(!query){hide();return}box.hidden=false;box.innerHTML="<p>Finding destinations…</p>";var read=cache?Promise.resolve(cache):fetch("/destinations",{credentials:"same-origin"}).then(function(r){return r.text()}).then(function(html){var doc=new DOMParser().parseFromString(html,"text/html"),seen={};cache=Array.prototype.slice.call(doc.querySelectorAll('a[href^="/destinations/"]')).map(function(a){var href=a.getAttribute("href")||"",slug=href.slice("/destinations/".length).split("/")[0],titleNode=a.querySelector("h1,h2,h3,h4,h5,h6,[class*=title],[class*=name]"),title=String((titleNode||a).textContent||"").trim();if(!slug||seen[href]||!title)return null;seen[href]=true;return{href:href,title:title,search:(title+" "+href).toLowerCase()}}).filter(Boolean);return cache}).catch(function(){return[]});read.then(function(items){if(input.value.trim()!==query)return;var term=query.toLowerCase(),matches=items.filter(function(item){return item.search.indexOf(term)>-1}).slice(0,5);box.innerHTML="";if(!matches.length){box.innerHTML="<p>No destination found. Browse all destinations.</p>";return}matches.forEach(function(item){var link=document.createElement("a");link.href=item.href;link.textContent=item.title;box.appendChild(link)})})}input.addEventListener("input",function(){list(input.value.trim())});input.addEventListener("focus",function(){list(input.value.trim())});input.addEventListener("keydown",function(e){if(e.key==="Escape")hide()});form.addEventListener("submit",function(e){e.preventDefault();e.stopImmediatePropagation();var first=box.querySelector("a");window.location.href=first?first.href:"/destinations"},true);document.addEventListener("click",function(e){if(!bar.contains(e.target))hide()});return true}if(!boot()){var tries=0,timer=setInterval(function(){if(boot()||++tries>30)clearInterval(timer)},100)}})();
}catch(e){console.warn("jkt embed block failed: emb-services-a15d7783 block 7",e)}
