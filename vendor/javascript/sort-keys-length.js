import t from"sort-keys";var n={};var r=t;n.desc=function(t){return r(t,(function(t,n){return n.length-t.length}))};n.asc=function(t){return r(t,(function(t,n){return t.length-n.length}))};const e=n.desc,o=n.asc;export default n;export{o as asc,e as desc};

