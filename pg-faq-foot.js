/* pg-faq-foot block 1 */
try{
    var accordion = (function () {
        var $accordion = $(".js-accordion");
        var $accordion_header = $accordion.find(".js-accordion-header");
        var $accordion_item = $(".js-accordion-item"); // default settings
        var settings = {
            // animation speed
            speed: 400, // close all other accordion items if true
            oneOpen: false,
        };
        return {
            // pass configurable object literal
            init: function ($settings) {
                $accordion_header.on("click", function () {
                    accordion.toggle($(this));
                });
                $.extend(settings, $settings); // ensure only one accordion is active if oneOpen is true
                if (settings.oneOpen && $(".js-accordion-item.active").length > 1) {
                    $(".js-accordion-item.active:not(:first)").removeClass("active");
                }
                // reveal the active accordion bodies
                $(".js-accordion-item.active").find("> .js-accordion-body").show();
                $(".js-accordion-item:not(.active)").find("> .js-accordion-body").hide();
            },
            toggle: function ($this) {
                if (
                    settings.oneOpen &&
                    $this[0] !=
                        $this.closest(".js-accordion").find(".js-accordion-item.active > .js-accordion-header")[0]
                ) {
                    $this
                        .closest(".js-accordion")
                        .find(".js-accordion-item")
                        .removeClass("active")
                        .find(".js-accordion-body")
                        .slideUp(settings.speed);
                } // show/hide the clicked accordion item
                $this.closest(".js-accordion-item").toggleClass("active");
                $this.next().stop().slideToggle(settings.speed);
            },
        };
    })();
    $(document).ready(function () {
        var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        accordion.init({ speed: reduceMotion ? 0 : 300, oneOpen: true });
    });
}catch(e){console.warn("jkt page block failed: pg-faq-foot block 1",e)}

/* jkt-faq-grouping-accessibility-2026-09-04 */
try{
(function(){function init(){if(document.documentElement.getAttribute('data-wf-page')!=='6a2fd904d430be142f83e986')return;var hero=document.querySelector('.destinations_banner_wrap');if(hero){var eyebrow=hero.querySelector('.tagline'),h1=hero.querySelector('h1'),p=hero.querySelector('p');if(eyebrow)eyebrow.textContent='Frequently asked';if(h1)h1.textContent='Questions, answered.';if(p)p.textContent='A few things clients often ask before we begin.';}var accordion=document.querySelector('.accordion.js-accordion');if(accordion&&!accordion.dataset.jktGrouped){accordion.dataset.jktGrouped='true';var items=[].slice.call(accordion.querySelectorAll('.accordion__item'));var defs=[{title:'Getting started',id:'faq-getting-started',test:/different|types of travelers|after I submit|what is a luxury travel advisor|instead of booking online/i},{title:'Fees & booking',id:'faq-fees-booking',test:/planning fee|advisor cost|hotel through|full-service|better hotel rates|airline tickets/i},{title:'Travel support',id:'faq-travel-support',test:/while I am traveling|delayed or canceled/i},{title:'Services',id:'faq-services',test:/corporate off-sites|corporate retreat|destination weddings|concierge|group travel|types of trips|business and executive/i},{title:'Destinations & timing',id:'faq-destinations',test:/destinations do you|far in advance/i}];var frag=document.createDocumentFragment();defs.forEach(function(def){var sec=document.createElement('section');sec.className='jkt-faq-group';sec.id=def.id;var title=document.createElement('h2');title.className='jkt-faq-group-title';title.textContent=def.title;sec.appendChild(title);items.filter(function(item){var q=item.querySelector('.question-text');return q&&def.test.test(q.textContent);}).forEach(function(item){sec.appendChild(item);});frag.appendChild(sec);});var assigned=[].slice.call(frag.querySelectorAll('.accordion__item'));items.filter(function(item){return assigned.indexOf(item)===-1;}).forEach(function(item){frag.lastElementChild.appendChild(item);});accordion.appendChild(frag);var nav=document.createElement('nav');nav.className='jkt-faq-index';nav.setAttribute('aria-label','FAQ sections');nav.innerHTML='<p class="jkt-faq-index__label">Browse questions</p><ul>'+defs.map(function(d){return '<li><a href="#'+d.id+'">'+d.title+'</a></li>';}).join('')+'</ul>';accordion.parentNode.insertBefore(nav,accordion);}
var items2=[].slice.call(document.querySelectorAll('.accordion__item'));items2.forEach(function(item,i){var head=item.querySelector('.accordion-header'),q=item.querySelector('.question-text'),body=item.querySelector('.accordion-body');if(q&&q.tagName!=='H3'){var h3=document.createElement('h3');[].slice.call(q.attributes).forEach(function(a){h3.setAttribute(a.name,a.value);});h3.innerHTML=q.innerHTML;q.replaceWith(h3);q=h3;}var answerCopy=body&&body.querySelector('.accordion-body__contents');if(q&&q.textContent.trim()==='What benefits can I receive when booking a hotel through Justkeeps?')q.textContent='What benefits can I receive when booking a hotel through Justkeeps Travel?';if(answerCopy&&answerCopy.textContent.trim()==='Yes. Our service continues after departure. We remain available to assist with changes, disruptions and other needs throughout the journey. 24/7 emergency assistance is available to clients actively traveling on trips arranged by Justkeeps.')answerCopy.textContent='Yes. Our service continues after departure. We remain available to assist with changes, disruptions and other needs throughout the journey. 24/7 emergency assistance is available to clients actively traveling on trips arranged by Justkeeps Travel.';if(head&&body){var id='faq-answer-'+(i+1),headId='faq-question-'+(i+1);body.id=id;head.id=headId;head.setAttribute('role','button');head.setAttribute('tabindex','0');head.setAttribute('aria-controls',id);body.setAttribute('aria-labelledby',headId);var sync=function(){var open=item.classList.contains('active');head.setAttribute('aria-expanded',open?'true':'false');body.setAttribute('aria-hidden',open?'false':'true');};sync();new MutationObserver(sync).observe(item,{attributes:true,attributeFilter:['class']});if(!head.dataset.jktKeyboard){head.dataset.jktKeyboard='true';head.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();head.click();}});}}});var faqNav=document.querySelector('.jkt-faq-index');if(faqNav&&!faqNav.dataset.jktAnchorRepair){faqNav.dataset.jktAnchorRepair='true';faqNav.addEventListener('click',function(e){var link=e.target.closest&&e.target.closest('a[href^="#faq-"]');if(!link||!faqNav.contains(link))return;var target=document.querySelector(link.getAttribute('href'));if(!target)return;e.preventDefault();e.stopImmediatePropagation();var navbar=document.querySelector('.navbar'),offset=Math.max(110,navbar?navbar.getBoundingClientRect().height+24:110),top=Math.max(0,target.getBoundingClientRect().top+window.scrollY-offset),reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;try{history.pushState(null,'',link.getAttribute('href'));}catch(err){}window.scrollTo({top:top,behavior:reduce?'auto':'smooth'});var title=target.querySelector('.jkt-faq-group-title');if(title){title.setAttribute('tabindex','-1');window.setTimeout(function(){try{title.focus({preventScroll:true});}catch(err){title.focus();}},reduce?0:380);}},true);}var cta=document.querySelector('.faq_cta_wrap');if(cta){var copy=cta.querySelector('.text-size-small'),group=cta.querySelector('.button-group'),a=group&&group.querySelector('a');if(copy)copy.textContent='Still have a question?';if(a){a.textContent='Plan Your Journey';a.href='/inquire';}if(group&&!group.querySelector('.jkt-faq-contact')){var contact=document.createElement('a');contact.className='jkt-faq-contact';contact.href='/contact';contact.textContent='Contact us';group.appendChild(contact);}}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();})();
}catch(e){console.warn("jkt page block failed: jkt-faq-grouping-accessibility-2026-09-04",e)}
