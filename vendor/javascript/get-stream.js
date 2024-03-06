import e from"pump";import r from"stream";import t from"buffer";var f={};var a=t.Buffer;const{PassThrough:n}=r;f=e=>{e=Object.assign({},e);const{array:r}=e;let{encoding:t}=e;const f="buffer"===t;let o=false;r?o=!(t||f):t=t||"utf8";f&&(t=null);let u=0;const s=[];const c=new n({objectMode:o});t&&c.setEncoding(t);c.on("data",e=>{s.push(e);o?u=s.length:u+=e.length});c.getBufferedValue=()=>r?s:f?a.concat(s,u):s.join("");c.getBufferedLength=()=>u;return c};var o=f;var u={};const s=e;const c=o;class MaxBufferError extends Error{constructor(){super("maxBuffer exceeded");this.name="MaxBufferError"}}function getStream(e,r){if(!e)return Promise.reject(new Error("Expected a stream"));r=Object.assign({maxBuffer:Infinity},r);const{maxBuffer:t}=r;let f;return new Promise((a,n)=>{const rejectPromise=e=>{e&&(e.bufferedData=f.getBufferedValue());n(e)};f=s(e,c(r),e=>{e?rejectPromise(e):a()});f.on("data",()=>{f.getBufferedLength()>t&&rejectPromise(new MaxBufferError)})}).then(()=>f.getBufferedValue())}u=getStream;u.buffer=(e,r)=>getStream(e,Object.assign({},r,{encoding:"buffer"}));u.array=(e,r)=>getStream(e,Object.assign({},r,{array:true}));u.MaxBufferError=MaxBufferError;var g=u;const m=u.buffer,i=u.array;const d=u.MaxBufferError;export default g;export{d as MaxBufferError,i as array,m as buffer};
