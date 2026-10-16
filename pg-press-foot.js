/* pg-press-foot block 1 */
try{
(function () {
  function initializePressArchive() {
    var partnerAlts = {
      "dujour": "DuJour logo",
      "eglobal": "eGlobal Travel Media logo",
      "logo-miami-modern": "Miami magazine logo",
      "logo1": "Infinite Legroom logo",
      "logo2": "Daily Candid News logo",
      "logo3": "Red Carpet Roxy logo",
      "logo4": "AXS logo",
      "logo5": "WeWoreWhat logo",
      "logo6": "Haute Living logo",
      "logo7": "Hedonist logo",
      "logo8": "About Travel logo",
      "logo9": "Ocean Drive logo",
      "travel-weekly": "Travel Weekly logo",
      "zink": "Zink logo"
    };

    document.querySelectorAll(".partners_logo").forEach(function (image) {
      var source = (image.currentSrc || image.src || "").toLowerCase();
      Object.keys(partnerAlts).some(function (key) {
        if (source.indexOf(key) === -1) return false;
        image.alt = partnerAlts[key];
        return true;
      });
    });

    var features = [
      {
        label: "Archived Coverage",
        date: "2014",
        title: "Wish Masters",
        summary: "An archived profile of Justin Keeperman, preserved for historical press context.",
        url: "/journal/wish-masters-justin-keeperman-is-miamis-most-connected-travel-insider"
      },
      {
        label: "Archived Coverage",
        date: "2013",
        title: "Miami Precise",
        summary: "An earlier city profile featuring Justin Keeperman’s perspective on South Florida."
      },
      {
        label: "Archived Coverage",
        date: "",
        title: "A-List Bliss",
        summary: "An earlier profile of Justin Keeperman’s approach to milestone travel and concierge service."
      },
      {
        label: "LinkedIn Article",
        date: "August 22, 2026",
        title: "Justkeeps Travel Expands Luxury, Executive and Entertainment Travel Services Across South Florida",
        summary: "Read the independent article on LinkedIn.",
        url: "https://www.linkedin.com/pulse/justkeeps-travel-expands-luxury-executive-services-across-nazir-11abf/",
        external: true
      }
    ];

    document.querySelectorAll("#press-coverage .media-item").forEach(function (item, index) {
      var oldCard = item.querySelector(".jkt-press-card");
      if (oldCard) oldCard.remove();

      if (!features[index]) {
        item.hidden = true;
        item.setAttribute("aria-hidden", "true");
        return;
      }

      item.hidden = false;
      item.removeAttribute("aria-hidden");

      var featureImage = item.querySelector("img.travel_image");
      if (featureImage) {
        featureImage.alt = index === 0
          ? "Justin Keeperman aboard a boat on the South Florida waterfront"
          : "";
      }

      var feature = features[index];
      var article = document.createElement("article");
      article.className = "jkt-press-card" + (index === 0 ? " jkt-press-card--feature" : "");

      var label = document.createElement("div");
      label.className = "jkt-press-card__label";
      label.textContent = feature.label;

      var date = document.createElement("div");
      date.className = "jkt-press-card__date";
      date.textContent = feature.date;

      var title = document.createElement("h2");
      title.className = "jkt-press-card__title";
      if (feature.url) {
        var titleLink = document.createElement("a");
        titleLink.className = "jkt-press-card__link";
        titleLink.href = feature.url;
        if (feature.external) {
          titleLink.target = "_blank";
          titleLink.rel = "noopener noreferrer";
        }
        titleLink.textContent = feature.title;
        title.appendChild(titleLink);
      } else {
        title.textContent = feature.title;
      }

      var summary = document.createElement("p");
      summary.className = "jkt-press-card__summary";
      summary.textContent = feature.summary;

      article.appendChild(label);
      if (feature.date) article.appendChild(date);
      article.appendChild(title);
      article.appendChild(summary);
      item.appendChild(article);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializePressArchive, { once: true });
  } else {
    initializePressArchive();
  }
})();
}catch(e){console.warn("jkt page block failed: pg-press-foot block 1",e)}

/* jkt-press-list-role-fix-2026-09-03 */
try{
(function () {
  function fixPressRoles() {
    document.querySelectorAll('.media-list[role="list"]').forEach(function (list) {
      list.removeAttribute('role');
    });
    document.querySelectorAll('article.jkt-press-native-item[role="listitem"]').forEach(function (item) {
      item.removeAttribute('role');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixPressRoles, { once: true });
  } else {
    fixPressRoles();
  }
})();
}catch(e){console.warn("jkt page block failed: jkt-press-list-role-fix-2026-09-03",e)}
