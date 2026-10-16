/* jkt-legacy-destination-404-redirects-2026-09-11 */
try{
(function(){
  var path=(location.pathname||'/').replace(/\/+$/,'')||'/';
  var redirects={
    '/partner-programs':'/partners',
    '/destinations/ubud':'/destinations/bali',
    '/destinations/nara':'/destinations/kyoto',
    '/destinations/kigali':'/destinations/rwanda'
  };
  if(redirects[path]) location.replace(redirects[path]);
})();
}catch(e){console.warn("jkt page block failed: jkt-legacy-destination-404-redirects-2026-09-11",e)}
