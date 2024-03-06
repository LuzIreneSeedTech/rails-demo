import r from"escape-string-regexp";var e={};var t=r;e=function(r,e){if("string"!==typeof r||"string"!==typeof e)throw new TypeError;e=t(e);return r.replace(new RegExp("^"+e+"|"+e+"$","g"),"")};var p=e;export default p;

