import t from"file-type";var r={};const e=t;const a=new Set(["7z","bz2","gz","rar","tar","zip","xz","gz"]);r=t=>{const r=e(t);return a.has(r&&r.ext)?r:null};var n=r;export default n;

