import e from"buffer";var t="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var r={};var i=e.Buffer;var n=[0,1,3,7,15,31,63,127,255];var BitReader=function(e){(this||t).stream=e;(this||t).bitOffset=0;(this||t).curByte=0;(this||t).hasByte=false};BitReader.prototype._ensureByte=function(){if(!(this||t).hasByte){(this||t).curByte=(this||t).stream.readByte();(this||t).hasByte=true}};BitReader.prototype.read=function(e){var r=0;while(e>0){this._ensureByte();var i=8-(this||t).bitOffset;if(e>=i){r<<=i;r|=n[i]&(this||t).curByte;(this||t).hasByte=false;(this||t).bitOffset=0;e-=i}else{r<<=e;var a=i-e;r|=((this||t).curByte&n[e]<<a)>>a;(this||t).bitOffset+=e;e=0}}return r};BitReader.prototype.seek=function(e){var r=e%8;var i=(e-r)/8;(this||t).bitOffset=r;(this||t).stream.seek(i);(this||t).hasByte=false};BitReader.prototype.pi=function(){var e=new i(6),t;for(t=0;t<e.length;t++)e[t]=this.read(8);return e.toString("hex")};r=BitReader;var a=r;var o="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var s={};var Stream=function(){};Stream.prototype.readByte=function(){throw new Error("abstract method readByte() not implemented")};Stream.prototype.read=function(e,t,r){var i=0;while(i<r){var n=this.readByte();if(n<0)return 0===i?-1:i;e[t++]=n;i++}return i};Stream.prototype.seek=function(e){throw new Error("abstract method seek() not implemented")};Stream.prototype.writeByte=function(e){throw new Error("abstract method readByte() not implemented")};Stream.prototype.write=function(e,t,r){var i;for(i=0;i<r;i++)this.writeByte(e[t++]);return r};Stream.prototype.flush=function(){};s=Stream;var f=s;var u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var h={};h=function(){var e=new Uint32Array([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188]);var CRC32=function(){var t=4294967295;(this||u).getCRC=function(){return~t>>>0};
/**
     * Update the CRC with a single byte
     * @param value The value to update the CRC with
     */(this||u).updateCRC=function(r){t=t<<8^e[255&(t>>>24^r)]};
/**
     * Update the CRC with a sequence of identical bytes
     * @param value The value to update the CRC with
     * @param count The number of bytes
     */(this||u).updateCRCRun=function(r,i){while(i-- >0)t=t<<8^e[255&(t>>>24^r)]}};return CRC32}();var d=h;var p={name:"seek-bzip",version:"1.0.6",contributors:["C. Scott Ananian (http://cscott.net)","Eli Skeggs","Kevin Kwok","Rob Landley (http://landley.net)"],description:"a pure-JavaScript Node.JS module for random-access decoding bzip2 data",main:"./lib/index.js",repository:{type:"git",url:"https://github.com/cscott/seek-bzip.git"},license:"MIT",bin:{"seek-bunzip":"./bin/seek-bunzip","seek-table":"./bin/seek-bzip-table"},directories:{test:"test"},dependencies:{commander:"^2.8.1"},devDependencies:{fibers:"~1.0.6",mocha:"~2.2.5"},scripts:{test:"mocha"}};var l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var v={};var b=e.Buffer;var c=a;var _=f;var R=d;var w=p;var C=20;var y=258;var m=0;var T=1;var g=2;var B=6;var O=50;var A="314159265359";var E="177245385090";var mtf=function(e,t){var r=e[t],i;for(i=t;i>0;i--)e[i]=e[i-1];e[0]=r;return r};var k={OK:0,LAST_BLOCK:-1,NOT_BZIP_DATA:-2,UNEXPECTED_INPUT_EOF:-3,UNEXPECTED_OUTPUT_EOF:-4,DATA_ERROR:-5,OUT_OF_MEMORY:-6,OBSOLETE_INPUT:-7,END_OF_BLOCK:-8};var D={};D[k.LAST_BLOCK]="Bad file checksum";D[k.NOT_BZIP_DATA]="Not bzip data";D[k.UNEXPECTED_INPUT_EOF]="Unexpected input EOF";D[k.UNEXPECTED_OUTPUT_EOF]="Unexpected output EOF";D[k.DATA_ERROR]="Data error";D[k.OUT_OF_MEMORY]="Out of memory";D[k.OBSOLETE_INPUT]="Obsolete (pre 0.9.5) bzip format not supported.";var _throw=function(e,t){var r=D[e]||"unknown error";t&&(r+=": "+t);var i=new TypeError(r);i.errorCode=e;throw i};var Bunzip=function(e,t){(this||l).writePos=(this||l).writeCurrent=(this||l).writeCount=0;this._start_bunzip(e,t)};Bunzip.prototype._init_block=function(){var e=this._get_next_block();if(!e){(this||l).writeCount=-1;return false}(this||l).blockCRC=new R;return true};Bunzip.prototype._start_bunzip=function(e,t){var r=new b(4);4===e.read(r,0,4)&&"BZh"===String.fromCharCode(r[0],r[1],r[2])||_throw(k.NOT_BZIP_DATA,"bad magic");var i=r[3]-48;(i<1||i>9)&&_throw(k.NOT_BZIP_DATA,"level out of range");(this||l).reader=new c(e);(this||l).dbufSize=1e5*i;(this||l).nextoutput=0;(this||l).outputStream=t;(this||l).streamCRC=0};Bunzip.prototype._get_next_block=function(){var e,t,r;var i=(this||l).reader;var n=i.pi();if(n===E)return false;n!==A&&_throw(k.NOT_BZIP_DATA);(this||l).targetBlockCRC=i.read(32)>>>0;(this||l).streamCRC=((this||l).targetBlockCRC^((this||l).streamCRC<<1|(this||l).streamCRC>>>31))>>>0;i.read(1)&&_throw(k.OBSOLETE_INPUT);var a=i.read(24);a>(this||l).dbufSize&&_throw(k.DATA_ERROR,"initial position out of bounds");var o=i.read(16);var s=new b(256),f=0;for(e=0;e<16;e++)if(o&1<<15-e){var u=16*e;r=i.read(16);for(t=0;t<16;t++)r&1<<15-t&&(s[f++]=u+t)}var h=i.read(3);(h<g||h>B)&&_throw(k.DATA_ERROR);var d=i.read(15);0===d&&_throw(k.DATA_ERROR);var p=new b(256);for(e=0;e<h;e++)p[e]=e;var v=new b(d);for(e=0;e<d;e++){for(t=0;i.read(1);t++)t>=h&&_throw(k.DATA_ERROR);v[e]=mtf(p,t)}var c=f+2;var _=[],R;for(t=0;t<h;t++){var w=new b(c),D=new Uint16Array(C+1);o=i.read(5);for(e=0;e<c;e++){for(;;){(o<1||o>C)&&_throw(k.DATA_ERROR);if(!i.read(1))break;i.read(1)?o--:o++}w[e]=o}var z,S;z=S=w[0];for(e=1;e<c;e++)w[e]>S?S=w[e]:w[e]<z&&(z=w[e]);R={};_.push(R);R.permute=new Uint16Array(y);R.limit=new Uint32Array(C+2);R.base=new Uint32Array(C+1);R.minLen=z;R.maxLen=S;var U=0;for(e=z;e<=S;e++){D[e]=R.limit[e]=0;for(o=0;o<c;o++)w[o]===e&&(R.permute[U++]=o)}for(e=0;e<c;e++)D[w[e]]++;U=o=0;for(e=z;e<S;e++){U+=D[e];R.limit[e]=U-1;U<<=1;o+=D[e];R.base[e+1]=U-o}R.limit[S+1]=Number.MAX_VALUE;R.limit[S]=U+D[S]-1;R.base[z]=0}var P=new Uint32Array(256);for(e=0;e<256;e++)p[e]=e;var N=0,x=0,L=0,I;var F=(this||l).dbuf=new Uint32Array((this||l).dbufSize);c=0;for(;;){if(!c--){c=O-1;L>=d&&_throw(k.DATA_ERROR);R=_[v[L++]]}e=R.minLen;t=i.read(e);for(;;e++){e>R.maxLen&&_throw(k.DATA_ERROR);if(t<=R.limit[e])break;t=t<<1|i.read(1)}t-=R.base[e];(t<0||t>=y)&&_throw(k.DATA_ERROR);var K=R.permute[t];if(K!==m&&K!==T){if(N){N=0;x+o>(this||l).dbufSize&&_throw(k.DATA_ERROR);I=s[p[0]];P[I]+=o;while(o--)F[x++]=I}if(K>f)break;x>=(this||l).dbufSize&&_throw(k.DATA_ERROR);e=K-1;I=mtf(p,e);I=s[I];P[I]++;F[x++]=I}else{if(!N){N=1;o=0}o+=K===m?N:2*N;N<<=1}}(a<0||a>=x)&&_throw(k.DATA_ERROR);t=0;for(e=0;e<256;e++){r=t+P[e];P[e]=t;t=r}for(e=0;e<x;e++){I=255&F[e];F[P[I]]|=e<<8;P[I]++}var M=0,Z=0,X=0;if(x){M=F[a];Z=255&M;M>>=8;X=-1}(this||l).writePos=M;(this||l).writeCurrent=Z;(this||l).writeCount=x;(this||l).writeRun=X;return true};Bunzip.prototype._read_bunzip=function(e,t){var r,i,n;if((this||l).writeCount<0)return 0;var a=0;var o=(this||l).dbuf,s=(this||l).writePos,f=(this||l).writeCurrent;var u=(this||l).writeCount,h=(this||l).outputsize;var d=(this||l).writeRun;while(u){u--;i=f;s=o[s];f=255&s;s>>=8;if(3===d++){r=f;n=i;f=-1}else{r=1;n=f}(this||l).blockCRC.updateCRCRun(n,r);while(r--){(this||l).outputStream.writeByte(n);(this||l).nextoutput++}f!=i&&(d=0)}(this||l).writeCount=u;(this||l).blockCRC.getCRC()!==(this||l).targetBlockCRC&&_throw(k.DATA_ERROR,"Bad block CRC "+"(got "+(this||l).blockCRC.getCRC().toString(16)+" expected "+(this||l).targetBlockCRC.toString(16)+")");return(this||l).nextoutput};var coerceInputStream=function(e){if("readByte"in e)return e;var t=new _;t.pos=0;t.readByte=function(){return e[(this||l).pos++]};t.seek=function(e){(this||l).pos=e};t.eof=function(){return(this||l).pos>=e.length};return t};var coerceOutputStream=function(e){var t=new _;var r=true;if(e)if("number"===typeof e){t.buffer=new b(e);r=false}else{if("writeByte"in e)return e;t.buffer=e;r=false}else t.buffer=new b(16384);t.pos=0;t.writeByte=function(e){if(r&&(this||l).pos>=(this||l).buffer.length){var t=new b(2*(this||l).buffer.length);(this||l).buffer.copy(t);(this||l).buffer=t}(this||l).buffer[(this||l).pos++]=e};t.getBuffer=function(){if((this||l).pos!==(this||l).buffer.length){if(!r)throw new TypeError("outputsize does not match decoded input");var e=new b((this||l).pos);(this||l).buffer.copy(e,0,0,(this||l).pos);(this||l).buffer=e}return(this||l).buffer};t._coerced=true;return t};Bunzip.Err=k;Bunzip.decode=function(e,t,r){var i=coerceInputStream(e);var n=coerceOutputStream(t);var a=new Bunzip(i,n);while(true){if("eof"in i&&i.eof())break;if(a._init_block())a._read_bunzip();else{var o=a.reader.read(32)>>>0;o!==a.streamCRC&&_throw(k.DATA_ERROR,"Bad stream CRC "+"(got "+a.streamCRC.toString(16)+" expected "+o.toString(16)+")");if(!r||!("eof"in i)||i.eof())break;a._start_bunzip(i,n)}}if("getBuffer"in n)return n.getBuffer()};Bunzip.decodeBlock=function(e,t,r){var i=coerceInputStream(e);var n=coerceOutputStream(r);var a=new Bunzip(i,n);a.reader.seek(t);var o=a._get_next_block();if(o){a.blockCRC=new R;a.writeCopies=0;a._read_bunzip()}if("getBuffer"in n)return n.getBuffer()};Bunzip.table=function(e,t,r){var i=new _;i.delegate=coerceInputStream(e);i.pos=0;i.readByte=function(){(this||l).pos++;return(this||l).delegate.readByte()};i.delegate.eof&&(i.eof=i.delegate.eof.bind(i.delegate));var n=new _;n.pos=0;n.writeByte=function(){(this||l).pos++};var a=new Bunzip(i,n);var o=a.dbufSize;while(true){if("eof"in i&&i.eof())break;var s=8*i.pos+a.reader.bitOffset;a.reader.hasByte&&(s-=8);if(a._init_block()){var f=n.pos;a._read_bunzip();t(s,n.pos-f)}else{var u=a.reader.read(32);if(!r||!("eof"in i)||i.eof())break;a._start_bunzip(i,n);console.assert(a.dbufSize===o,"shouldn't change block size within multistream file")}}};Bunzip.Stream=_;Bunzip.version=w.version;Bunzip.license=w.license;v=Bunzip;var z=v;export default z;
