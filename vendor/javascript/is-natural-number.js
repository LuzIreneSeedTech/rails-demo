var e={};e=function isNaturalNumber(e,r){if(r){if("object"!==typeof r)throw new TypeError(String(r)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in r){if("boolean"!==typeof r.includeZero)throw new TypeError(String(r.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(r.includeZero&&0===e)return true}}return Number.isSafeInteger(e)&&e>=1};var r=e;export default r;
