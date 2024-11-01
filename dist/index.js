"use strict";var c=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var f=c(function(g,v){
var a=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=require('@stdlib/assert-is-function/dist'),m=require('@stdlib/assert-is-iterator-like/dist'),u=require('@stdlib/symbol-iterator/dist'),x=require('@stdlib/error-tools-fmtprodmsg/dist');function o(r){var e,t,i;if(!m(r))throw new TypeError(x('null3w',r));return e=!0,t={},a(t,"next",s),a(t,"return",l),u&&q(r[u])&&a(t,u,d),t;function s(){var n;return i?{done:!0}:(n=r.next(),n.done?(i=!0,n):(n.value&&(e=!1),{value:e,done:!1}))}function l(n){return i=!0,arguments.length?{value:n,done:!0}:{done:!0}}function d(){return o(r[u]())}}v.exports=o
});var p=f();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
