import r from"escape-string-regexp";var e={};var t=r;e=function(r,e){if("string"!==typeof r||"string"!==typeof e)throw new TypeError("Expected a string");return r.replace(new RegExp("(?:"+t(e)+"){2,}","g"),e)};var p=e;export default p;

