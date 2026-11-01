/* jkt-breadcrumbs-2026-11-01 */
(function () {
  "use strict";

  var NAV_ID = "jkt-breadcrumbs";
  var MAX_LABEL_LENGTH = 180;

  function clean(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function canonicalPath(value) {
    try {
      var url = new URL(String(value || ""), window.location.origin);
      var path = url.pathname.replace(/\/+$/, "") || "/";
      return path.toLowerCase();
    } catch (error) {
      return "";
    }
  }

  function itemUrl(item) {
    if (!item) return "";
    if (typeof item.item === "string") return item.item;
    if (item.item && typeof item.item["@id"] === "string") return item.item["@id"];
    return "";
  }

  function collectBreadcrumbLists(value, lists) {
    if (!value || typeof value !== "object") return;
    if (Array.isArray(value)) {
      value.forEach(function (entry) {
        collectBreadcrumbLists(entry, lists);
      });
      return;
    }

    if (value["@type"] === "BreadcrumbList" && Array.isArray(value.itemListElement)) {
      lists.push(value);
    }

    Object.keys(value).forEach(function (key) {
      if (key !== "itemListElement") collectBreadcrumbLists(value[key], lists);
    });
  }

  function findTrail() {
    var lists = [];

    document.querySelectorAll('script[type="application/ld+json"]').forEach(function (script) {
      try {
        collectBreadcrumbLists(JSON.parse(script.textContent || ""), lists);
      } catch (error) {
        /* Ignore malformed third-party structured data. */
      }
    });

    var currentPath = canonicalPath(window.location.href);

    for (var i = 0; i < lists.length; i += 1) {
      var list = lists[i];
      var trail = list.itemListElement
        .slice()
        .sort(function (a, b) {
          return Number(a.position || 0) - Number(b.position || 0);
        })
        .map(function (item) {
          return {
            name: clean(item && item.name).slice(0, MAX_LABEL_LENGTH),
            url: itemUrl(item)
          };
        })
        .filter(function (item) {
          return item.name && item.url;
        });

      if (trail.length > 1 && canonicalPath(trail[trail.length - 1].url) === currentPath) {
        return trail;
      }
    }

    return null;
  }

  function buildBreadcrumbs(trail) {
    var nav = document.createElement("nav");
    nav.id = NAV_ID;
    nav.className = "jkt-breadcrumbs";
    nav.setAttribute("aria-label", "Breadcrumb");

    var inner = document.createElement("div");
    inner.className = "jkt-breadcrumbs__inner";

    var list = document.createElement("ol");
    list.className = "jkt-breadcrumbs__list";

    trail.forEach(function (item, index) {
      var listItem = document.createElement("li");
      listItem.className = "jkt-breadcrumbs__item";

      if (index > 0) {
        var separator = document.createElement("span");
        separator.className = "jkt-breadcrumbs__separator";
        separator.setAttribute("aria-hidden", "true");
        separator.textContent = "/";
        listItem.appendChild(separator);
      }

      if (index === trail.length - 1) {
        var current = document.createElement("span");
        current.setAttribute("aria-current", "page");
        current.textContent = item.name;
        listItem.appendChild(current);
      } else {
        var link = document.createElement("a");
        link.href = item.url;
        link.textContent = item.name;
        listItem.appendChild(link);
      }

      list.appendChild(listItem);
    });

    inner.appendChild(list);
    nav.appendChild(inner);
    return nav;
  }

  function mount() {
    if (document.getElementById(NAV_ID)) return;

    var main = document.querySelector("main");
    var trail = findTrail();
    if (!main || !trail) return;

    main.insertBefore(buildBreadcrumbs(trail), main.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount, { once: true });
  } else {
    mount();
  }
}());
