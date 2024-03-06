import t from"url";import r from"prepend-http";var e={};const o=t;const p=r;e=(t,r)=>{if("string"!==typeof t)throw new TypeError(`Expected \`url\` to be of type \`string\`, got \`${typeof t}\` instead.`);const e=p(t,Object.assign({https:true},r));return o.parse(e)};var n=e;export default n;

