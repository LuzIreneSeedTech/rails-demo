import r from"zlib";import e from"decompress-tar";import t from"file-type";import o from"is-stream";import f from"buffer";var i={};var s=f.Buffer;const m=r;const p=e;const n=t;const u=o;i=()=>r=>{if(!s.isBuffer(r)&&!u(r))return Promise.reject(new TypeError(`Expected a Buffer or Stream, got ${typeof r}`));if(s.isBuffer(r)&&(!n(r)||"gz"!==n(r).ext))return Promise.resolve([]);const e=m.createGunzip();const t=p()(e);s.isBuffer(r)?e.end(r):r.pipe(e);return t};var c=i;export default c;
