import r from"buffer";var f={};var e=r.Buffer;f=toBuffer;var o=e.from&&e.from!==Uint8Array.from?e.from:bufferFrom;function bufferFrom(r,f){return new e(r,f)}function toBuffer(r,f){if(e.isBuffer(r))return r;if("string"===typeof r)return o(r,f);if(Array.isArray(r))return o(r);throw new Error("Input should be a buffer or a string")}var t=f;export default t;

