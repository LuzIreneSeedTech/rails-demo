import e from"buffer";var r={};var a=e.Buffer;function allocUnsafe(e){if("number"!==typeof e)throw new TypeError('"size" argument must be a number');if(e<0)throw new RangeError('"size" argument must not be negative');return a.allocUnsafe?a.allocUnsafe(e):new a(e)}r=allocUnsafe;var n=r;export default n;

