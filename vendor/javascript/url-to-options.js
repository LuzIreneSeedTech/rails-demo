var a={};function urlToOptions(a){var r={protocol:a.protocol,hostname:a.hostname,hash:a.hash,search:a.search,pathname:a.pathname,path:`${a.pathname}${a.search}`,href:a.href};""!==a.port&&(r.port=Number(a.port));(a.username||a.password)&&(r.auth=`${a.username}:${a.password}`);return r}a=urlToOptions;var r=a;export default r;

