import r from"stream";import e from"mimic-response";var o={};const s=r.PassThrough;const t=e;const cloneResponse=r=>{if(!(r&&r.pipe))throw new TypeError("Parameter `response` must be a response stream.");const e=new s;t(r,e);return r.pipe(e)};o=cloneResponse;var p=o;export default p;

