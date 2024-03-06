import e from"stream";import r from"zlib";import o from"mimic-response";var t={};const n=e.PassThrough;const i=r;const p=o;t=e=>{if(-1===["gzip","deflate"].indexOf(e.headers["content-encoding"]))return e;const r=i.createUnzip();const o=new n;p(e,o);r.on("error",e=>{"Z_BUF_ERROR"!==e.code?o.emit("error",e):o.end()});e.pipe(r).pipe(o);return o};var s=t;export default s;

