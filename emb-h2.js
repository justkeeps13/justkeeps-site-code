/* jkt-clients-nav-2026-09-14 */
try{
(function(){
  function addClientsMenu(){
    var list=document.querySelector('.navbar .header-nav-menu-list');
    if(!list || list.querySelector('.jkt-clients-nav-item')){return true}
    var items=list.querySelectorAll('.header-nav-list-item');
    var testimonials=null;
    var i;
    for(i=0;i<items.length;i++){
      if(items[i].querySelector('a[href="/testimonials"]')){testimonials=items[i];break}
    }
    if(!testimonials){return false}
    var item=document.createElement('li');
    item.className='header-nav-list-item jkt-clients-nav-item';
    var trigger=document.createElement('button');
    trigger.type='button';
    trigger.className='jkt-clients-nav-trigger';
    trigger.setAttribute('aria-expanded','false');
    trigger.setAttribute('aria-haspopup','true');
    trigger.appendChild(document.createTextNode('CLIENTS'));
    var panel=document.createElement('div');
    panel.className='jkt-clients-nav-panel';
    panel.setAttribute('role','menu');
    function makeLink(href,title,meta){
      var link=document.createElement('a');
      link.className='jkt-clients-nav-link';
      link.href=href;
      link.setAttribute('role','menuitem');
      var titleNode=document.createElement('span');
      titleNode.className='jkt-clients-nav-title';
      titleNode.appendChild(document.createTextNode(title));
      var metaNode=document.createElement('span');
      metaNode.className='jkt-clients-nav-meta';
      metaNode.appendChild(document.createTextNode(meta));
      link.appendChild(titleNode);
      link.appendChild(metaNode);
      return link
    }
    panel.appendChild(makeLink('https://portal.justkeepstravel.com/login.html','Existing Client','Private portal access'));
    panel.appendChild(makeLink('https://portal.justkeepstravel.com/become-a-client.html','Become a Client','Begin a thoughtful conversation'));
    item.appendChild(trigger);
    item.appendChild(panel);
    testimonials.parentNode.insertBefore(item,testimonials.nextSibling);
    function closeMenu(){item.classList.remove('is-open');trigger.setAttribute('aria-expanded','false')}
    trigger.addEventListener('click',function(event){event.preventDefault();var open=item.classList.contains('is-open');if(open){closeMenu()}else{item.classList.add('is-open');trigger.setAttribute('aria-expanded','true')}});
    document.addEventListener('click',function(event){if(!item.contains(event.target)){closeMenu()}});
    document.addEventListener('keydown',function(event){if(event.key==='Escape'){closeMenu()}});
    return true
  }
  if(!addClientsMenu()){setTimeout(addClientsMenu,150);setTimeout(addClientsMenu,500)}
}());
}catch(e){console.warn("jkt embed block failed: jkt-clients-nav-2026-09-14",e)}
