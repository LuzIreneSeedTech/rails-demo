var t={};const e=["destroy","setTimeout","socket","headers","trailers","rawHeaders","statusCode","httpVersion","httpVersionMinor","httpVersionMajor","rawTrailers","statusMessage"];t=(t,s)=>{const o=new Set(Object.keys(t).concat(e));for(const e of o)e in s||(s[e]="function"===typeof t[e]?t[e].bind(t):t[e])};var s=t;export default s;

