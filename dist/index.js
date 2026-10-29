"use strict";var c=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var f=c(function(g,v){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-function/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),u=require('@stdlib/symbol-iterator/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function o(r){var e,n,i;if(!m(r))throw new TypeError(x('23P3w',r));return e=!0,n={},a(n,"next",s),a(n,"return",l),u&&q(r[u])&&a(n,u,d),n;function s(){var t;return i?{done:!0}:(t=r.next(),t.done?(i=!0,t):(t.value&&(e=!1),{value:e,done:!1}))}function l(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function d(){return o(r[u]())}}v.exports=o
});var p=f();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
