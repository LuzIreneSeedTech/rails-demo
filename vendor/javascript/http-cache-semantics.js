var e={};function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var t=[200,203,204,206,300,301,404,405,410,414,501];var s=[200,203,204,300,301,302,303,307,308,404,405,410,414,501];var r={connection:true,"keep-alive":true,"proxy-authenticate":true,"proxy-authorization":true,te:true,trailer:true,"transfer-encoding":true,upgrade:true};var i={"content-length":true,"content-encoding":true,"transfer-encoding":true,"content-range":true};function parseCacheControl(e){var t={};if(!e)return t;var s=e.trim().split(/\s*,\s*/);for(var r=s,i=Array.isArray(r),a=0,r=i?r:r[Symbol.iterator]();;){var h;if(i){if(a>=r.length)break;h=r[a++]}else{a=r.next();if(a.done)break;h=a.value}var o=h;var c=o.split(/\s*=\s*/,2),n=c[0],d=c[1];t[n]=void 0===d||d.replace(/^"|"$/g,"")}return t}function formatCacheControl(e){var t=[];for(var s in e){var r=e[s];t.push(true===r?s:s+"="+r)}if(t.length)return t.join(", ")}e=function(){function CachePolicy(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=s.shared,i=s.cacheHeuristic,a=s.immutableMinTimeToLive,h=s.ignoreCargoCult,o=s._fromObject;_classCallCheck(this,CachePolicy);if(o)this._fromObject(o);else{if(!t||!t.headers)throw Error("Response headers missing");this._assertRequestHasHeaders(e);this._responseTime=this.now();this._isShared=false!==r;this._cacheHeuristic=void 0!==i?i:.1;this._immutableMinTtl=void 0!==a?a:24*3600*1e3;this._status="status"in t?t.status:200;this._resHeaders=t.headers;this._rescc=parseCacheControl(t.headers["cache-control"]);this._method="method"in e?e.method:"GET";this._url=e.url;this._host=e.headers.host;this._noAuthorization=!e.headers.authorization;this._reqHeaders=t.headers.vary?e.headers:null;this._reqcc=parseCacheControl(e.headers["cache-control"]);if(h&&"pre-check"in this._rescc&&"post-check"in this._rescc){delete this._rescc["pre-check"];delete this._rescc["post-check"];delete this._rescc["no-cache"];delete this._rescc["no-store"];delete this._rescc["must-revalidate"];this._resHeaders=Object.assign({},this._resHeaders,{"cache-control":formatCacheControl(this._rescc)});delete this._resHeaders.expires;delete this._resHeaders.pragma}!t.headers["cache-control"]&&/no-cache/.test(t.headers.pragma)&&(this._rescc["no-cache"]=true)}}CachePolicy.prototype.now=function now(){return Date.now()};CachePolicy.prototype.storable=function storable(){return!!(!this._reqcc["no-store"]&&("GET"===this._method||"HEAD"===this._method||"POST"===this._method&&this._hasExplicitExpiration())&&-1!==s.indexOf(this._status)&&!this._rescc["no-store"]&&(!this._isShared||!this._rescc.private)&&(!this._isShared||this._noAuthorization||this._allowsStoringAuthenticated())&&(this._resHeaders.expires||this._rescc.public||this._rescc["max-age"]||this._rescc["s-maxage"]||-1!==t.indexOf(this._status)))};CachePolicy.prototype._hasExplicitExpiration=function _hasExplicitExpiration(){return this._isShared&&this._rescc["s-maxage"]||this._rescc["max-age"]||this._resHeaders.expires};CachePolicy.prototype._assertRequestHasHeaders=function _assertRequestHasHeaders(e){if(!e||!e.headers)throw Error("Request headers missing")};CachePolicy.prototype.satisfiesWithoutRevalidation=function satisfiesWithoutRevalidation(e){this._assertRequestHasHeaders(e);var t=parseCacheControl(e.headers["cache-control"]);if(t["no-cache"]||/no-cache/.test(e.headers.pragma))return false;if(t["max-age"]&&this.age()>t["max-age"])return false;if(t["min-fresh"]&&this.timeToLive()<1e3*t["min-fresh"])return false;if(this.stale()){var s=t["max-stale"]&&!this._rescc["must-revalidate"]&&(true===t["max-stale"]||t["max-stale"]>this.age()-this.maxAge());if(!s)return false}return this._requestMatches(e,false)};CachePolicy.prototype._requestMatches=function _requestMatches(e,t){return(!this._url||this._url===e.url)&&this._host===e.headers.host&&(!e.method||this._method===e.method||t&&"HEAD"===e.method)&&this._varyMatches(e)};CachePolicy.prototype._allowsStoringAuthenticated=function _allowsStoringAuthenticated(){return this._rescc["must-revalidate"]||this._rescc.public||this._rescc["s-maxage"]};CachePolicy.prototype._varyMatches=function _varyMatches(e){if(!this._resHeaders.vary)return true;if("*"===this._resHeaders.vary)return false;var t=this._resHeaders.vary.trim().toLowerCase().split(/\s*,\s*/);for(var s=t,r=Array.isArray(s),i=0,s=r?s:s[Symbol.iterator]();;){var a;if(r){if(i>=s.length)break;a=s[i++]}else{i=s.next();if(i.done)break;a=i.value}var h=a;if(e.headers[h]!==this._reqHeaders[h])return false}return true};CachePolicy.prototype._copyWithoutHopByHopHeaders=function _copyWithoutHopByHopHeaders(e){var t={};for(var s in e)r[s]||(t[s]=e[s]);if(e.connection){var i=e.connection.trim().split(/\s*,\s*/);for(var a=i,h=Array.isArray(a),o=0,a=h?a:a[Symbol.iterator]();;){var c;if(h){if(o>=a.length)break;c=a[o++]}else{o=a.next();if(o.done)break;c=o.value}var n=c;delete t[n]}}if(t.warning){var d=t.warning.split(/,/).filter((function(e){return!/^\s*1[0-9][0-9]/.test(e)}));d.length?t.warning=d.join(",").trim():delete t.warning}return t};CachePolicy.prototype.responseHeaders=function responseHeaders(){var e=this._copyWithoutHopByHopHeaders(this._resHeaders);var t=this.age();t>3600*24&&!this._hasExplicitExpiration()&&this.maxAge()>3600*24&&(e.warning=(e.warning?`${e.warning}, `:"")+'113 - "rfc7234 5.5.4"');e.age=`${Math.round(t)}`;return e};CachePolicy.prototype.date=function date(){var e=Date.parse(this._resHeaders.date);var t=8*3600*1e3;return Number.isNaN(e)||e<this._responseTime-t||e>this._responseTime+t?this._responseTime:e};CachePolicy.prototype.age=function age(){var age=Math.max(0,(this._responseTime-this.date())/1e3);if(this._resHeaders.age){var e=this._ageValue();e>age&&(age=e)}var t=(this.now()-this._responseTime)/1e3;return age+t};CachePolicy.prototype._ageValue=function _ageValue(){var e=parseInt(this._resHeaders.age);return isFinite(e)?e:0};CachePolicy.prototype.maxAge=function maxAge(){if(!this.storable()||this._rescc["no-cache"])return 0;if(this._isShared&&this._resHeaders["set-cookie"]&&!this._rescc.public&&!this._rescc.immutable)return 0;if("*"===this._resHeaders.vary)return 0;if(this._isShared){if(this._rescc["proxy-revalidate"])return 0;if(this._rescc["s-maxage"])return parseInt(this._rescc["s-maxage"],10)}if(this._rescc["max-age"])return parseInt(this._rescc["max-age"],10);var e=this._rescc.immutable?this._immutableMinTtl:0;var t=this.date();if(this._resHeaders.expires){var s=Date.parse(this._resHeaders.expires);return Number.isNaN(s)||s<t?0:Math.max(e,(s-t)/1e3)}if(this._resHeaders["last-modified"]){var r=Date.parse(this._resHeaders["last-modified"]);if(isFinite(r)&&t>r)return Math.max(e,(t-r)/1e3*this._cacheHeuristic)}return e};CachePolicy.prototype.timeToLive=function timeToLive(){return 1e3*Math.max(0,this.maxAge()-this.age())};CachePolicy.prototype.stale=function stale(){return this.maxAge()<=this.age()};CachePolicy.fromObject=function fromObject(e){return new this(void 0,void 0,{_fromObject:e})};CachePolicy.prototype._fromObject=function _fromObject(e){if(this._responseTime)throw Error("Reinitialized");if(!e||1!==e.v)throw Error("Invalid serialization");this._responseTime=e.t;this._isShared=e.sh;this._cacheHeuristic=e.ch;this._immutableMinTtl=void 0!==e.imm?e.imm:24*3600*1e3;this._status=e.st;this._resHeaders=e.resh;this._rescc=e.rescc;this._method=e.m;this._url=e.u;this._host=e.h;this._noAuthorization=e.a;this._reqHeaders=e.reqh;this._reqcc=e.reqcc};CachePolicy.prototype.toObject=function toObject(){return{v:1,t:this._responseTime,sh:this._isShared,ch:this._cacheHeuristic,imm:this._immutableMinTtl,st:this._status,resh:this._resHeaders,rescc:this._rescc,m:this._method,u:this._url,h:this._host,a:this._noAuthorization,reqh:this._reqHeaders,reqcc:this._reqcc}};CachePolicy.prototype.revalidationHeaders=function revalidationHeaders(e){this._assertRequestHasHeaders(e);var t=this._copyWithoutHopByHopHeaders(e.headers);delete t["if-range"];if(!this._requestMatches(e,true)||!this.storable()){delete t["if-none-match"];delete t["if-modified-since"];return t}this._resHeaders.etag&&(t["if-none-match"]=t["if-none-match"]?`${t["if-none-match"]}, ${this._resHeaders.etag}`:this._resHeaders.etag);var s=t["accept-ranges"]||t["if-match"]||t["if-unmodified-since"]||this._method&&"GET"!=this._method;if(s){delete t["if-modified-since"];if(t["if-none-match"]){var r=t["if-none-match"].split(/,/).filter((function(e){return!/^\s*W\//.test(e)}));r.length?t["if-none-match"]=r.join(",").trim():delete t["if-none-match"]}}else this._resHeaders["last-modified"]&&!t["if-modified-since"]&&(t["if-modified-since"]=this._resHeaders["last-modified"]);return t};CachePolicy.prototype.revalidatedPolicy=function revalidatedPolicy(e,t){this._assertRequestHasHeaders(e);if(!t||!t.headers)throw Error("Response headers missing");var s=false;void 0!==t.status&&304!=t.status?s=false:t.headers.etag&&!/^\s*W\//.test(t.headers.etag)?s=this._resHeaders.etag&&this._resHeaders.etag.replace(/^\s*W\//,"")===t.headers.etag:this._resHeaders.etag&&t.headers.etag?s=this._resHeaders.etag.replace(/^\s*W\//,"")===t.headers.etag.replace(/^\s*W\//,""):this._resHeaders["last-modified"]?s=this._resHeaders["last-modified"]===t.headers["last-modified"]:this._resHeaders.etag||this._resHeaders["last-modified"]||t.headers.etag||t.headers["last-modified"]||(s=true);if(!s)return{policy:new this.constructor(e,t),modified:true};var r={};for(var a in this._resHeaders)r[a]=a in t.headers&&!i[a]?t.headers[a]:this._resHeaders[a];var h=Object.assign({},t,{status:this._status,method:this._method,headers:r});return{policy:new this.constructor(e,h),modified:false}};return CachePolicy}();var a=e;export default a;

