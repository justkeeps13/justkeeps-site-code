/* pg-services-tpl-head block 4 */
try{
(function(id){var s=document.getElementById(id);if(!s)return;try{var t=document.createElement('textarea'),d=JSON.parse(s.textContent),f=function(o){if(Array.isArray(o))return o.forEach(f);if(o&&typeof o==='object')for(var k in o){if(k==='name'&&typeof o[k]==='string'&&o[k].indexOf('&')>-1){t.innerHTML=o[k];o[k]=t.value}else f(o[k])}};f(d);s.textContent=JSON.stringify(d)}catch(e){}})('jkt-service-breadcrumb-2026-10-08');
}catch(e){console.warn("jkt page block failed: pg-services-tpl-head block 4",e)}
