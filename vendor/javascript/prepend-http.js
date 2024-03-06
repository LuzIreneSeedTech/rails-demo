var t={};t=(t,e)=>{if("string"!==typeof t)throw new TypeError(`Expected \`url\` to be of type \`string\`, got \`${typeof t}\``);t=t.trim();e=Object.assign({https:false},e);return/^\.*\/|^(?!localhost)\w+:/.test(t)?t:t.replace(/^(?!(?:\w+:)?\/\/)/,e.https?"https://":"http://")};var e=t;export default e;

