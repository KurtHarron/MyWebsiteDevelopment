(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zo="158",fd=0,Pl=1,pd=2,Tc=1,md=2,Nn=3,si=0,Oe=1,zn=2,ti=0,ur=1,Ll=2,Fl=3,Ul=4,_d=5,Si=100,gd=101,vd=102,Il=103,Nl=104,xd=200,Ed=201,Md=202,Sd=203,xo=204,Eo=205,yd=206,Dd=207,Td=208,Ad=209,bd=210,wd=211,Cd=212,Rd=213,Pd=214,Ld=0,Fd=1,Ud=2,js=3,Id=4,Nd=5,Od=6,Bd=7,Ac=0,zd=1,Gd=2,ei=0,Hd=1,kd=2,Vd=3,Wd=4,Xd=5,bc=300,_r=301,gr=302,Mo=303,So=304,_a=306,yo=1e3,_n=1001,Do=1002,Te=1003,Ol=1004,Ca=1005,an=1006,qd=1007,Kr=1008,ni=1009,Yd=1010,$d=1011,Jo=1012,wc=1013,jn=1014,Kn=1015,Zr=1016,Cc=1017,Rc=1018,Ai=1020,jd=1021,gn=1023,Kd=1024,Zd=1025,bi=1026,vr=1027,Jd=1028,Pc=1029,Qd=1030,Lc=1031,Fc=1033,Ra=33776,Pa=33777,La=33778,Fa=33779,Bl=35840,zl=35841,Gl=35842,Hl=35843,tf=36196,kl=37492,Vl=37496,Wl=37808,Xl=37809,ql=37810,Yl=37811,$l=37812,jl=37813,Kl=37814,Zl=37815,Jl=37816,Ql=37817,tu=37818,eu=37819,nu=37820,iu=37821,Ua=36492,ru=36494,su=36495,ef=36283,au=36284,ou=36285,lu=36286,Uc=3e3,wi=3001,nf=3200,rf=3201,Ic=0,sf=1,ln="",Ee="srgb",Hn="srgb-linear",Qo="display-p3",ga="display-p3-linear",Ks="linear",Kt="srgb",Zs="rec709",Js="p3",Gi=7680,uu=519,af=512,of=513,lf=514,uf=515,cf=516,hf=517,df=518,ff=519,cu=35044,hu="300 es",To=1035,Gn=2e3,Qs=2001;class Ar{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ia=Math.PI/180,Ao=180/Math.PI;function us(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[r&255]+ye[r>>8&255]+ye[r>>16&255]+ye[r>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Ne(r,t,e){return Math.max(t,Math.min(e,r))}function pf(r,t){return(r%t+t)%t}function Na(r,t,e){return(1-e)*r+e*t}function du(r){return(r&r-1)===0&&r!==0}function bo(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ur(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ie(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Ht{constructor(t=0,e=0){Ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,i,s,a,o,l,u){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,u)}set(t,e,n,i,s,a,o,l,u){const c=this.elements;return c[0]=t,c[1]=i,c[2]=o,c[3]=e,c[4]=s,c[5]=l,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],c=n[4],h=n[7],d=n[2],m=n[5],g=n[8],_=i[0],p=i[3],f=i[6],E=i[1],x=i[4],M=i[7],y=i[2],w=i[5],T=i[8];return s[0]=a*_+o*E+l*y,s[3]=a*p+o*x+l*w,s[6]=a*f+o*M+l*T,s[1]=u*_+c*E+h*y,s[4]=u*p+c*x+h*w,s[7]=u*f+c*M+h*T,s[2]=d*_+m*E+g*y,s[5]=d*p+m*x+g*w,s[8]=d*f+m*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8];return e*a*c-e*o*u-n*s*c+n*o*l+i*s*u-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],h=c*a-o*u,d=o*l-c*s,m=u*s-a*l,g=e*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(i*u-c*n)*_,t[2]=(o*n-i*a)*_,t[3]=d*_,t[4]=(c*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=m*_,t[7]=(n*l-u*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+t,-i*u,i*l,-i*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Oa.makeScale(t,e)),this}rotate(t){return this.premultiply(Oa.makeRotation(-t)),this}translate(t,e){return this.premultiply(Oa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new It;function Nc(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Jr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mf(){const r=Jr("canvas");return r.style.display="block",r}const fu={};function Xr(r){r in fu||(fu[r]=!0,console.warn(r))}const pu=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mu=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vs={[Hn]:{transfer:Ks,primaries:Zs,toReference:r=>r,fromReference:r=>r},[Ee]:{transfer:Kt,primaries:Zs,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ga]:{transfer:Ks,primaries:Js,toReference:r=>r.applyMatrix3(mu),fromReference:r=>r.applyMatrix3(pu)},[Qo]:{transfer:Kt,primaries:Js,toReference:r=>r.convertSRGBToLinear().applyMatrix3(mu),fromReference:r=>r.applyMatrix3(pu).convertLinearToSRGB()}},_f=new Set([Hn,ga]),Xt={enabled:!0,_workingColorSpace:Hn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!_f.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=vs[t].toReference,i=vs[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return vs[r].primaries},getTransfer:function(r){return r===ln?Ks:vs[r].transfer}};function cr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ba(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hi;class Oc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=Jr("canvas")),Hi.width=t.width,Hi.height=t.height;const n=Hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=cr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cr(e[n]/255)*255):e[n]=cr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gf=0;class Bc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=us(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(za(i[a].image)):s.push(za(i[a]))}else s=za(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function za(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Oc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vf=0;class Be extends Ar{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=_n,i=_n,s=an,a=Kr,o=gn,l=ni,u=Be.DEFAULT_ANISOTROPY,c=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=us(),this.name="",this.source=new Bc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===wi?Ee:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yo:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case Do:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yo:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case Do:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ee?wi:Uc}set encoding(t){Xr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===wi?Ee:ln}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=bc;Be.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,u=l[0],c=l[4],h=l[8],d=l[1],m=l[5],g=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(u+1)/2,M=(m+1)/2,y=(f+1)/2,w=(c+d)/4,T=(h+_)/4,P=(g+p)/4;return x>M&&x>y?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=T/n):M>y?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=P/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=T/s,i=P/s),this.set(n,i,s,e),this}let E=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(d-c)*(d-c));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-_)/E,this.z=(d-c)/E,this.w=Math.acos((u+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xf extends Ar{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Xr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wi?Ee:ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends xf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class zc extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ef extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Te,this.minFilter=Te,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],u=n[i+1],c=n[i+2],h=n[i+3];const d=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||u!==m||c!==g){let p=1-o;const f=l*d+u*m+c*g+h*_,E=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const y=Math.sqrt(x),w=Math.atan2(y,f*E);p=Math.sin(p*w)/y,o=Math.sin(o*w)/y}const M=o*E;if(l=l*p+d*M,u=u*p+m*M,c=c*p+g*M,h=h*p+_*M,p===1-o){const y=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=y,u*=y,c*=y,h*=y}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],u=n[i+2],c=n[i+3],h=s[a],d=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+c*h+l*m-u*d,t[e+1]=l*g+c*d+u*h-o*m,t[e+2]=u*g+c*m+o*d-l*h,t[e+3]=c*g-o*h-l*d-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(n/2),c=o(i/2),h=o(s/2),d=l(n/2),m=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*c*h+u*m*g,this._y=u*m*h-d*c*g,this._z=u*c*g+d*m*h,this._w=u*c*h-d*m*g;break;case"YXZ":this._x=d*c*h+u*m*g,this._y=u*m*h-d*c*g,this._z=u*c*g-d*m*h,this._w=u*c*h+d*m*g;break;case"ZXY":this._x=d*c*h-u*m*g,this._y=u*m*h+d*c*g,this._z=u*c*g+d*m*h,this._w=u*c*h-d*m*g;break;case"ZYX":this._x=d*c*h-u*m*g,this._y=u*m*h+d*c*g,this._z=u*c*g-d*m*h,this._w=u*c*h+d*m*g;break;case"YZX":this._x=d*c*h+u*m*g,this._y=u*m*h+d*c*g,this._z=u*c*g-d*m*h,this._w=u*c*h-d*m*g;break;case"XZY":this._x=d*c*h-u*m*g,this._y=u*m*h-d*c*g,this._z=u*c*g+d*m*h,this._w=u*c*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],u=e[2],c=e[6],h=e[10],d=n+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(c-l)*m,this._y=(s-u)*m,this._z=(a-i)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(c-l)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(s+u)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-u)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(l+c)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-i)/m,this._x=(s+u)/m,this._y=(l+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,u=e._z,c=e._w;return this._x=n*c+a*o+i*u-s*l,this._y=i*c+a*l+s*o-n*u,this._z=s*c+a*u+n*l-i*o,this._w=a*c-n*o-i*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),h=Math.sin((1-e)*c)/u,d=Math.sin(e*c)/u;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_u.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_u.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*i-o*n),c=2*(o*e-s*i),h=2*(s*n-a*e);return this.x=e+l*u+a*h-o*c,this.y=n+l*c+o*u-s*h,this.z=i+l*h+s*c-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new U,_u=new cs;class hs{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xs.copy(n.boundingBox)),xs.applyMatrix4(t.matrixWorld),this.union(xs)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),Es.subVectors(this.max,Ir),ki.subVectors(t.a,Ir),Vi.subVectors(t.b,Ir),Wi.subVectors(t.c,Ir),Wn.subVectors(Vi,ki),Xn.subVectors(Wi,Vi),fi.subVectors(ki,Wi);let e=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-fi.z,fi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,fi.z,0,-fi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-fi.y,fi.x,0];return!Ha(e,ki,Vi,Wi,Es)||(e=[1,0,0,0,1,0,0,0,1],!Ha(e,ki,Vi,Wi,Es))?!1:(Ms.crossVectors(Wn,Xn),e=[Ms.x,Ms.y,Ms.z],Ha(e,ki,Vi,Wi,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pn=[new U,new U,new U,new U,new U,new U,new U,new U],dn=new U,xs=new hs,ki=new U,Vi=new U,Wi=new U,Wn=new U,Xn=new U,fi=new U,Ir=new U,Es=new U,Ms=new U,pi=new U;function Ha(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){pi.fromArray(r,s);const o=i.x*Math.abs(pi.x)+i.y*Math.abs(pi.y)+i.z*Math.abs(pi.z),l=t.dot(pi),u=e.dot(pi),c=n.dot(pi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Mf=new hs,Nr=new U,ka=new U;class va{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Mf.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Nr.subVectors(t,this.center);const e=Nr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Nr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ka.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Nr.copy(t.center).add(ka)),this.expandByPoint(Nr.copy(t.center).sub(ka))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new U,Va=new U,Ss=new U,qn=new U,Wa=new U,ys=new U,Xa=new U;class tl{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ln.copy(this.origin).addScaledVector(this.direction,e),Ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Va.copy(t).add(e).multiplyScalar(.5),Ss.copy(e).sub(t).normalize(),qn.copy(this.origin).sub(Va);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ss),o=qn.dot(this.direction),l=-qn.dot(Ss),u=qn.lengthSq(),c=Math.abs(1-a*a);let h,d,m,g;if(c>0)if(h=a*l-o,d=a*o-l,g=s*c,h>=0)if(d>=-g)if(d<=g){const _=1/c;h*=_,d*=_,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+u}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+u;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+u):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+u);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Va).addScaledVector(Ss,d),m}intersectSphere(t,e){Ln.subVectors(t.center,this.origin);const n=Ln.dot(this.direction),i=Ln.dot(Ln)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(n=(t.min.x-d.x)*u,i=(t.max.x-d.x)*u):(n=(t.max.x-d.x)*u,i=(t.min.x-d.x)*u),c>=0?(s=(t.min.y-d.y)*c,a=(t.max.y-d.y)*c):(s=(t.max.y-d.y)*c,a=(t.min.y-d.y)*c),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ln)!==null}intersectTriangle(t,e,n,i,s){Wa.subVectors(e,t),ys.subVectors(n,t),Xa.crossVectors(Wa,ys);let a=this.direction.dot(Xa),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,t);const l=o*this.direction.dot(ys.crossVectors(qn,ys));if(l<0)return null;const u=o*this.direction.dot(Wa.cross(qn));if(u<0||l+u>a)return null;const c=-o*qn.dot(Xa);return c<0?null:this.at(c/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,i,s,a,o,l,u,c,h,d,m,g,_,p){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,u,c,h,d,m,g,_,p)}set(t,e,n,i,s,a,o,l,u,c,h,d,m,g,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Xi.setFromMatrixColumn(t,0).length(),s=1/Xi.setFromMatrixColumn(t,1).length(),a=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=a*c,m=a*h,g=o*c,_=o*h;e[0]=l*c,e[4]=-l*h,e[8]=u,e[1]=m+g*u,e[5]=d-_*u,e[9]=-o*l,e[2]=_-d*u,e[6]=g+m*u,e[10]=a*l}else if(t.order==="YXZ"){const d=l*c,m=l*h,g=u*c,_=u*h;e[0]=d+_*o,e[4]=g*o-m,e[8]=a*u,e[1]=a*h,e[5]=a*c,e[9]=-o,e[2]=m*o-g,e[6]=_+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*c,m=l*h,g=u*c,_=u*h;e[0]=d-_*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*c,e[9]=_-d*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*c,m=a*h,g=o*c,_=o*h;e[0]=l*c,e[4]=g*u-m,e[8]=d*u+_,e[1]=l*h,e[5]=_*u+d,e[9]=m*u-g,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,m=a*u,g=o*l,_=o*u;e[0]=l*c,e[4]=_-d*h,e[8]=g*h+m,e[1]=h,e[5]=a*c,e[9]=-o*c,e[2]=-u*c,e[6]=m*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=a*l,m=a*u,g=o*l,_=o*u;e[0]=l*c,e[4]=-h,e[8]=u*c,e[1]=d*h+_,e[5]=a*c,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*c,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sf,t,yf)}lookAt(t,e,n){const i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Yn.crossVectors(n,Ye),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Yn.crossVectors(n,Ye)),Yn.normalize(),Ds.crossVectors(Ye,Yn),i[0]=Yn.x,i[4]=Ds.x,i[8]=Ye.x,i[1]=Yn.y,i[5]=Ds.y,i[9]=Ye.y,i[2]=Yn.z,i[6]=Ds.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],c=n[1],h=n[5],d=n[9],m=n[13],g=n[2],_=n[6],p=n[10],f=n[14],E=n[3],x=n[7],M=n[11],y=n[15],w=i[0],T=i[4],P=i[8],v=i[12],A=i[1],V=i[5],X=i[9],Y=i[13],R=i[2],B=i[6],W=i[10],k=i[14],K=i[3],j=i[7],$=i[11],L=i[15];return s[0]=a*w+o*A+l*R+u*K,s[4]=a*T+o*V+l*B+u*j,s[8]=a*P+o*X+l*W+u*$,s[12]=a*v+o*Y+l*k+u*L,s[1]=c*w+h*A+d*R+m*K,s[5]=c*T+h*V+d*B+m*j,s[9]=c*P+h*X+d*W+m*$,s[13]=c*v+h*Y+d*k+m*L,s[2]=g*w+_*A+p*R+f*K,s[6]=g*T+_*V+p*B+f*j,s[10]=g*P+_*X+p*W+f*$,s[14]=g*v+_*Y+p*k+f*L,s[3]=E*w+x*A+M*R+y*K,s[7]=E*T+x*V+M*B+y*j,s[11]=E*P+x*X+M*W+y*$,s[15]=E*v+x*Y+M*k+y*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],u=t[13],c=t[2],h=t[6],d=t[10],m=t[14],g=t[3],_=t[7],p=t[11],f=t[15];return g*(+s*l*h-i*u*h-s*o*d+n*u*d+i*o*m-n*l*m)+_*(+e*l*m-e*u*d+s*a*d-i*a*m+i*u*c-s*l*c)+p*(+e*u*h-e*o*m-s*a*h+n*a*m+s*o*c-n*u*c)+f*(-i*o*c-e*l*h+e*o*d+i*a*h-n*a*d+n*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],c=t[8],h=t[9],d=t[10],m=t[11],g=t[12],_=t[13],p=t[14],f=t[15],E=h*p*u-_*d*u+_*l*m-o*p*m-h*l*f+o*d*f,x=g*d*u-c*p*u-g*l*m+a*p*m+c*l*f-a*d*f,M=c*_*u-g*h*u+g*o*m-a*_*m-c*o*f+a*h*f,y=g*h*l-c*_*l-g*o*d+a*_*d+c*o*p-a*h*p,w=e*E+n*x+i*M+s*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=E*T,t[1]=(_*d*s-h*p*s-_*i*m+n*p*m+h*i*f-n*d*f)*T,t[2]=(o*p*s-_*l*s+_*i*u-n*p*u-o*i*f+n*l*f)*T,t[3]=(h*l*s-o*d*s-h*i*u+n*d*u+o*i*m-n*l*m)*T,t[4]=x*T,t[5]=(c*p*s-g*d*s+g*i*m-e*p*m-c*i*f+e*d*f)*T,t[6]=(g*l*s-a*p*s-g*i*u+e*p*u+a*i*f-e*l*f)*T,t[7]=(a*d*s-c*l*s+c*i*u-e*d*u-a*i*m+e*l*m)*T,t[8]=M*T,t[9]=(g*h*s-c*_*s-g*n*m+e*_*m+c*n*f-e*h*f)*T,t[10]=(a*_*s-g*o*s+g*n*u-e*_*u-a*n*f+e*o*f)*T,t[11]=(c*o*s-a*h*s-c*n*u+e*h*u+a*n*m-e*o*m)*T,t[12]=y*T,t[13]=(c*_*i-g*h*i+g*n*d-e*_*d-c*n*p+e*h*p)*T,t[14]=(g*o*i-a*_*i-g*n*l+e*_*l+a*n*p-e*o*p)*T,t[15]=(a*h*i-c*o*i+c*n*l-e*h*l-a*n*d+e*o*d)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,u=s*a,c=s*o;return this.set(u*a+n,u*o-i*l,u*l+i*o,0,u*o+i*l,c*o+n,c*l-i*a,0,u*l-i*o,c*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,u=s+s,c=a+a,h=o+o,d=s*u,m=s*c,g=s*h,_=a*c,p=a*h,f=o*h,E=l*u,x=l*c,M=l*h,y=n.x,w=n.y,T=n.z;return i[0]=(1-(_+f))*y,i[1]=(m+M)*y,i[2]=(g-x)*y,i[3]=0,i[4]=(m-M)*w,i[5]=(1-(d+f))*w,i[6]=(p+E)*w,i[7]=0,i[8]=(g+x)*T,i[9]=(p-E)*T,i[10]=(1-(d+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Xi.set(i[0],i[1],i[2]).length();const a=Xi.set(i[4],i[5],i[6]).length(),o=Xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],fn.copy(this);const u=1/s,c=1/a,h=1/o;return fn.elements[0]*=u,fn.elements[1]*=u,fn.elements[2]*=u,fn.elements[4]*=c,fn.elements[5]*=c,fn.elements[6]*=c,fn.elements[8]*=h,fn.elements[9]*=h,fn.elements[10]*=h,e.setFromRotationMatrix(fn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Gn){const l=this.elements,u=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),d=(n+i)/(n-i);let m,g;if(o===Gn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Qs)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Gn){const l=this.elements,u=1/(e-t),c=1/(n-i),h=1/(a-s),d=(e+t)*u,m=(n+i)*c;let g,_;if(o===Gn)g=(a+s)*h,_=-2*h;else if(o===Qs)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xi=new U,fn=new he,Sf=new U(0,0,0),yf=new U(1,1,1),Yn=new U,Ds=new U,Ye=new U,gu=new he,vu=new cs;class xa{constructor(t=0,e=0,n=0,i=xa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],u=i[5],c=i[9],h=i[2],d=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vu.setFromEuler(this),this.setFromQuaternion(vu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xa.DEFAULT_ORDER="XYZ";class el{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Df=0;const xu=new U,qi=new cs,Fn=new he,Ts=new U,Or=new U,Tf=new U,Af=new cs,Eu=new U(1,0,0),Mu=new U(0,1,0),Su=new U(0,0,1),bf={type:"added"},wf={type:"removed"};class Me extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new U,e=new xa,n=new cs,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new It}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new el,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(Eu,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return xu.copy(t).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Eu,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ts.copy(t):Ts.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Or,Ts,this.up):Fn.lookAt(Ts,Or,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),qi.setFromRotationMatrix(Fn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(bf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(wf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,Tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),c=a(t.images),h=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Me.DEFAULT_UP=new U(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new U,Un=new U,qa=new U,In=new U,Yi=new U,$i=new U,yu=new U,Ya=new U,$a=new U,ja=new U;let As=!1;class mn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),pn.subVectors(t,e),i.cross(pn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){pn.subVectors(i,e),Un.subVectors(n,e),qa.subVectors(t,e);const a=pn.dot(pn),o=pn.dot(Un),l=pn.dot(qa),u=Un.dot(Un),c=Un.dot(qa),h=a*u-o*o;if(h===0)return s.set(-2,-1,-1);const d=1/h,m=(u*l-o*c)*d,g=(a*c-o*l)*d;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,In),In.x>=0&&In.y>=0&&In.x+In.y<=1}static getUV(t,e,n,i,s,a,o,l){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,In),l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l}static isFrontFacing(t,e,n,i){return pn.subVectors(n,e),Un.subVectors(t,e),pn.cross(Un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),pn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return mn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return mn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return As===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),As=!0),mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return mn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return mn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return mn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Yi.subVectors(i,n),$i.subVectors(s,n),Ya.subVectors(t,n);const l=Yi.dot(Ya),u=$i.dot(Ya);if(l<=0&&u<=0)return e.copy(n);$a.subVectors(t,i);const c=Yi.dot($a),h=$i.dot($a);if(c>=0&&h<=c)return e.copy(i);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),e.copy(n).addScaledVector(Yi,a);ja.subVectors(t,s);const m=Yi.dot(ja),g=$i.dot(ja);if(g>=0&&m<=g)return e.copy(s);const _=m*u-l*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),e.copy(n).addScaledVector($i,o);const p=c*g-m*h;if(p<=0&&h-c>=0&&m-g>=0)return yu.subVectors(s,i),o=(h-c)/(h-c+(m-g)),e.copy(i).addScaledVector(yu,o);const f=1/(p+_+d);return a=_*f,o=d*f,e.copy(n).addScaledVector(Yi,a).addScaledVector($i,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},bs={h:0,s:0,l:0};function Ka(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Xt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Xt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Xt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Xt.workingColorSpace){if(t=pf(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Ka(a,s,t+1/3),this.g=Ka(a,s,t),this.b=Ka(a,s,t-1/3)}return Xt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ee){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){const n=Gc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}copyLinearToSRGB(t){return this.r=Ba(t.r),this.g=Ba(t.g),this.b=Ba(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return Xt.fromWorkingColorSpace(De.copy(this),t),Math.round(Ne(De.r*255,0,255))*65536+Math.round(Ne(De.g*255,0,255))*256+Math.round(Ne(De.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Xt.workingColorSpace){Xt.fromWorkingColorSpace(De.copy(this),e);const n=De.r,i=De.g,s=De.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=c<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Ee){Xt.fromWorkingColorSpace(De.copy(this),t);const e=De.r,n=De.g,i=De.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(bs);const n=Na($n.h,bs.h,e),i=Na($n.s,bs.s,e),s=Na($n.l,bs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Gt;Gt.NAMES=Gc;let Cf=0;class br extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=us(),this.name="",this.type="Material",this.blending=ur,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xo,this.blendDst=Eo,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xo&&(n.blendSrc=this.blendSrc),this.blendDst!==Eo&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wr extends br{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ac,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new U,ws=new Ht;class Je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cu,this.updateRange={offset:0,count:-1},this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ws.fromBufferAttribute(this,e),ws.applyMatrix3(t),this.setXY(e,ws.x,ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ur(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ur(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ur(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ur(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ur(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cu&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Hc extends Je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class kc extends Je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Tn extends Je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rf=0;const rn=new he,Za=new Me,ji=new U,$e=new hs,Br=new hs,_e=new U;class xn extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Nc(t)?kc:Hc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return Za.lookAt(t),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];$e.setFromBufferAttribute(s),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new va);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(_e.addVectors($e.min,Br.min),$e.expandByPoint(_e),_e.addVectors($e.max,Br.max),$e.expandByPoint(_e)):($e.expandByPoint(Br.min),$e.expandByPoint(Br.max))}$e.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)_e.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(_e));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)_e.fromBufferAttribute(o,u),l&&(ji.fromBufferAttribute(t,u),_e.add(ji)),i=Math.max(i,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Je(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<o;A++)u[A]=new U,c[A]=new U;const h=new U,d=new U,m=new U,g=new Ht,_=new Ht,p=new Ht,f=new U,E=new U;function x(A,V,X){h.fromArray(i,A*3),d.fromArray(i,V*3),m.fromArray(i,X*3),g.fromArray(a,A*2),_.fromArray(a,V*2),p.fromArray(a,X*2),d.sub(h),m.sub(h),_.sub(g),p.sub(g);const Y=1/(_.x*p.y-p.x*_.y);isFinite(Y)&&(f.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(Y),E.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(Y),u[A].add(f),u[V].add(f),u[X].add(f),c[A].add(E),c[V].add(E),c[X].add(E))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let A=0,V=M.length;A<V;++A){const X=M[A],Y=X.start,R=X.count;for(let B=Y,W=Y+R;B<W;B+=3)x(n[B+0],n[B+1],n[B+2])}const y=new U,w=new U,T=new U,P=new U;function v(A){T.fromArray(s,A*3),P.copy(T);const V=u[A];y.copy(V),y.sub(T.multiplyScalar(T.dot(V))).normalize(),w.crossVectors(P,V);const Y=w.dot(c[A])<0?-1:1;l[A*4]=y.x,l[A*4+1]=y.y,l[A*4+2]=y.z,l[A*4+3]=Y}for(let A=0,V=M.length;A<V;++A){const X=M[A],Y=X.start,R=X.count;for(let B=Y,W=Y+R;B<W;B+=3)v(n[B+0]),v(n[B+1]),v(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,u=new U,c=new U,h=new U;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),c.subVectors(a,s),h.subVectors(i,s),c.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,p),o.add(c),l.add(c),u.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,u.x,u.y,u.z)}else for(let d=0,m=e.count;d<m;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),c.subVectors(a,s),h.subVectors(i,s),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(o,l){const u=o.array,c=o.itemSize,h=o.normalized,d=new u.constructor(l.length*c);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*c;for(let f=0;f<c;f++)d[g++]=u[m++]}return new Je(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new xn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],u=t(l,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,h=u.length;c<h;c++){const d=u[c],m=t(d,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const m=u[h];c.push(m.toJSON(t.data))}c.length>0&&(i[l]=c,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(e))}const s=t.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,m=h.length;d<m;d++)c.push(h[d].clone(e));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,c=a.length;u<c;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Du=new he,mi=new tl,Cs=new va,Tu=new U,Ki=new U,Zi=new U,Ji=new U,Ja=new U,Rs=new U,Ps=new Ht,Ls=new Ht,Fs=new Ht,Au=new U,bu=new U,wu=new U,Us=new U,Is=new U;class Jt extends Me{constructor(t=new xn,e=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Rs.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],h=s[l];c!==0&&(Ja.fromBufferAttribute(h,t),a?Rs.addScaledVector(Ja,c):Rs.addScaledVector(Ja.sub(e),c))}e.add(Rs)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(s),mi.copy(t.ray).recast(t.near),!(Cs.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Cs,Tu)===null||mi.origin.distanceToSquared(Tu)>(t.far-t.near)**2))&&(Du.copy(s).invert(),mi.copy(t.ray).applyMatrix4(Du),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,y=x;M<y;M+=3){const w=o.getX(M),T=o.getX(M+1),P=o.getX(M+2);i=Ns(this,f,t,n,u,c,h,w,T,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const E=o.getX(p),x=o.getX(p+1),M=o.getX(p+2);i=Ns(this,a,t,n,u,c,h,E,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],f=a[p.materialIndex],E=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=E,y=x;M<y;M+=3){const w=M,T=M+1,P=M+2;i=Ns(this,f,t,n,u,c,h,w,T,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,f=_;p<f;p+=3){const E=p,x=p+1,M=p+2;i=Ns(this,a,t,n,u,c,h,E,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Pf(r,t,e,n,i,s,a,o){let l;if(t.side===Oe?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===si,o),l===null)return null;Is.copy(o),Is.applyMatrix4(r.matrixWorld);const u=e.ray.origin.distanceTo(Is);return u<e.near||u>e.far?null:{distance:u,point:Is.clone(),object:r}}function Ns(r,t,e,n,i,s,a,o,l,u){r.getVertexPosition(o,Ki),r.getVertexPosition(l,Zi),r.getVertexPosition(u,Ji);const c=Pf(r,t,e,n,Ki,Zi,Ji,Us);if(c){i&&(Ps.fromBufferAttribute(i,o),Ls.fromBufferAttribute(i,l),Fs.fromBufferAttribute(i,u),c.uv=mn.getInterpolation(Us,Ki,Zi,Ji,Ps,Ls,Fs,new Ht)),s&&(Ps.fromBufferAttribute(s,o),Ls.fromBufferAttribute(s,l),Fs.fromBufferAttribute(s,u),c.uv1=mn.getInterpolation(Us,Ki,Zi,Ji,Ps,Ls,Fs,new Ht),c.uv2=c.uv1),a&&(Au.fromBufferAttribute(a,o),bu.fromBufferAttribute(a,l),wu.fromBufferAttribute(a,u),c.normal=mn.getInterpolation(Us,Ki,Zi,Ji,Au,bu,wu,new U),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new U,materialIndex:0};mn.getNormal(Ki,Zi,Ji,h.normal),c.face=h}return c}class Cr extends xn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Tn(u,3)),this.setAttribute("normal",new Tn(c,3)),this.setAttribute("uv",new Tn(h,2));function g(_,p,f,E,x,M,y,w,T,P,v){const A=M/T,V=y/P,X=M/2,Y=y/2,R=w/2,B=T+1,W=P+1;let k=0,K=0;const j=new U;for(let $=0;$<W;$++){const L=$*V-Y;for(let z=0;z<B;z++){const at=z*A-X;j[_]=at*E,j[p]=L*x,j[f]=R,u.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[f]=w>0?1:-1,c.push(j.x,j.y,j.z),h.push(z/T),h.push(1-$/P),k+=1}}for(let $=0;$<P;$++)for(let L=0;L<T;L++){const z=d+L+B*$,at=d+L+B*($+1),st=d+(L+1)+B*($+1),lt=d+(L+1)+B*$;l.push(z,at,lt),l.push(at,st,lt),K+=6}o.addGroup(m,K,v),m+=K,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function xr(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Le(r){const t={};for(let e=0;e<r.length;e++){const n=xr(r[e]);for(const i in n)t[i]=n[i]}return t}function Lf(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Vc(r){return r.getRenderTarget()===null?r.outputColorSpace:Xt.workingColorSpace}const Ff={clone:xr,merge:Le};var Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ai extends br{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xr(t.uniforms),this.uniformsGroups=Lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Gn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class on extends Wc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ao*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ao*2*Math.atan(Math.tan(Ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ia*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/u,i*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qi=-90,tr=1;class Nf extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new on(Qi,tr,t,e);i.layers=this.layers,this.add(i);const s=new on(Qi,tr,t,e);s.layers=this.layers,this.add(s);const a=new on(Qi,tr,t,e);a.layers=this.layers,this.add(a);const o=new on(Qi,tr,t,e);o.layers=this.layers,this.add(o);const l=new on(Qi,tr,t,e);l.layers=this.layers,this.add(l);const u=new on(Qi,tr,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const u of e)this.remove(u);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,c),t.setRenderTarget(h,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xc extends Be{constructor(t,e,n,i,s,a,o,l,u,c){t=t!==void 0?t:[],e=e!==void 0?e:_r,super(t,e,n,i,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Of extends Ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Xr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===wi?Ee:ln),this.texture=new Xc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Cr(5,5,5),s=new ai({name:"CubemapFromEquirect",uniforms:xr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:ti});s.uniforms.tEquirect.value=e;const a=new Jt(i,s),o=e.minFilter;return e.minFilter===Kr&&(e.minFilter=an),new Nf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Qa=new U,Bf=new U,zf=new It;class xi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Qa.subVectors(n,e).cross(Bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zf.getNormalMatrix(t),i=this.coplanarPoint(Qa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new va,Os=new U;class nl{constructor(t=new xi,e=new xi,n=new xi,i=new xi,s=new xi,a=new xi){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],u=i[4],c=i[5],h=i[6],d=i[7],m=i[8],g=i[9],_=i[10],p=i[11],f=i[12],E=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,d-u,p-m,M-f).normalize(),n[1].setComponents(l+s,d+u,p+m,M+f).normalize(),n[2].setComponents(l+a,d+c,p+g,M+E).normalize(),n[3].setComponents(l-a,d-c,p-g,M-E).normalize(),n[4].setComponents(l-o,d-h,p-_,M-x).normalize(),e===Gn)n[5].setComponents(l+o,d+h,p+_,M+x).normalize();else if(e===Qs)n[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(t){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(t.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Os.x=i.normal.x>0?t.max.x:t.min.x,Os.y=i.normal.y>0?t.max.y:t.min.y,Os.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Os)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qc(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Gf(r,t){const e=t.isWebGL2,n=new WeakMap;function i(u,c){const h=u.array,d=u.usage,m=r.createBuffer();r.bindBuffer(c,m),r.bufferData(c,h,d),u.onUploadCallback();let g;if(h instanceof Float32Array)g=r.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(e)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=r.SHORT;else if(h instanceof Uint32Array)g=r.UNSIGNED_INT;else if(h instanceof Int32Array)g=r.INT;else if(h instanceof Int8Array)g=r.BYTE;else if(h instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,h){const d=c.array,m=c.updateRange;r.bindBuffer(h,u),m.count===-1?r.bufferSubData(h,0,d):(e?r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):r.bufferSubData(h,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(r.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=n.get(u);(!d||d.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=n.get(u);h===void 0?n.set(u,i(u,c)):h.version<u.version&&(s(h.buffer,u,c),h.version=u.version)}return{get:a,remove:o,update:l}}class ds extends xn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),u=o+1,c=l+1,h=t/o,d=e/l,m=[],g=[],_=[],p=[];for(let f=0;f<c;f++){const E=f*d-a;for(let x=0;x<u;x++){const M=x*h-s;g.push(M,-E,0),_.push(0,0,1),p.push(x/o),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<o;E++){const x=E+u*f,M=E+u*(f+1),y=E+1+u*(f+1),w=E+1+u*f;m.push(x,M,w),m.push(M,y,w)}this.setIndex(m),this.setAttribute("position",new Tn(g,3)),this.setAttribute("normal",new Tn(_,3)),this.setAttribute("uv",new Tn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.width,t.height,t.widthSegments,t.heightSegments)}}var Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$f=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,lp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cp=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",_p=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Sp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ap=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Up=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Op=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Bp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,qp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,nm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,im=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,om=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_m=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Mm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Am=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wm=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,qm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ym=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jm=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,a_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,u_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,f_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,__=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Rt={alphahash_fragment:Hf,alphahash_pars_fragment:kf,alphamap_fragment:Vf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:Yf,aomap_pars_fragment:$f,begin_vertex:jf,beginnormal_vertex:Kf,bsdfs:Zf,iridescence_fragment:Jf,bumpmap_pars_fragment:Qf,clipping_planes_fragment:tp,clipping_planes_pars_fragment:ep,clipping_planes_pars_vertex:np,clipping_planes_vertex:ip,color_fragment:rp,color_pars_fragment:sp,color_pars_vertex:ap,color_vertex:op,common:lp,cube_uv_reflection_fragment:up,defaultnormal_vertex:cp,displacementmap_pars_vertex:hp,displacementmap_vertex:dp,emissivemap_fragment:fp,emissivemap_pars_fragment:pp,colorspace_fragment:mp,colorspace_pars_fragment:_p,envmap_fragment:gp,envmap_common_pars_fragment:vp,envmap_pars_fragment:xp,envmap_pars_vertex:Ep,envmap_physical_pars_fragment:Lp,envmap_vertex:Mp,fog_vertex:Sp,fog_pars_vertex:yp,fog_fragment:Dp,fog_pars_fragment:Tp,gradientmap_pars_fragment:Ap,lightmap_fragment:bp,lightmap_pars_fragment:wp,lights_lambert_fragment:Cp,lights_lambert_pars_fragment:Rp,lights_pars_begin:Pp,lights_toon_fragment:Fp,lights_toon_pars_fragment:Up,lights_phong_fragment:Ip,lights_phong_pars_fragment:Np,lights_physical_fragment:Op,lights_physical_pars_fragment:Bp,lights_fragment_begin:zp,lights_fragment_maps:Gp,lights_fragment_end:Hp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Vp,logdepthbuf_pars_vertex:Wp,logdepthbuf_vertex:Xp,map_fragment:qp,map_pars_fragment:Yp,map_particle_fragment:$p,map_particle_pars_fragment:jp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:Zp,morphcolor_vertex:Jp,morphnormal_vertex:Qp,morphtarget_pars_vertex:tm,morphtarget_vertex:em,normal_fragment_begin:nm,normal_fragment_maps:im,normal_pars_fragment:rm,normal_pars_vertex:sm,normal_vertex:am,normalmap_pars_fragment:om,clearcoat_normal_fragment_begin:lm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:cm,iridescence_pars_fragment:hm,opaque_fragment:dm,packing:fm,premultiplied_alpha_fragment:pm,project_vertex:mm,dithering_fragment:_m,dithering_pars_fragment:gm,roughnessmap_fragment:vm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:Em,shadowmap_pars_vertex:Mm,shadowmap_vertex:Sm,shadowmask_pars_fragment:ym,skinbase_vertex:Dm,skinning_pars_vertex:Tm,skinning_vertex:Am,skinnormal_vertex:bm,specularmap_fragment:wm,specularmap_pars_fragment:Cm,tonemapping_fragment:Rm,tonemapping_pars_fragment:Pm,transmission_fragment:Lm,transmission_pars_fragment:Fm,uv_pars_fragment:Um,uv_pars_vertex:Im,uv_vertex:Nm,worldpos_vertex:Om,background_vert:Bm,background_frag:zm,backgroundCube_vert:Gm,backgroundCube_frag:Hm,cube_vert:km,cube_frag:Vm,depth_vert:Wm,depth_frag:Xm,distanceRGBA_vert:qm,distanceRGBA_frag:Ym,equirect_vert:$m,equirect_frag:jm,linedashed_vert:Km,linedashed_frag:Zm,meshbasic_vert:Jm,meshbasic_frag:Qm,meshlambert_vert:t_,meshlambert_frag:e_,meshmatcap_vert:n_,meshmatcap_frag:i_,meshnormal_vert:r_,meshnormal_frag:s_,meshphong_vert:a_,meshphong_frag:o_,meshphysical_vert:l_,meshphysical_frag:u_,meshtoon_vert:c_,meshtoon_frag:h_,points_vert:d_,points_frag:f_,shadow_vert:p_,shadow_frag:m_,sprite_vert:__,sprite_frag:g_},rt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Sn={basic:{uniforms:Le([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Le([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Le([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Le([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Le([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Le([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Le([rt.points,rt.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Le([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Le([rt.common,rt.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Le([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Le([rt.sprite,rt.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:Le([rt.common,rt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:Le([rt.lights,rt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};Sn.physical={uniforms:Le([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Bs={r:0,b:0,g:0};function v_(r,t,e,n,i,s,a){const o=new Gt(0);let l=s===!0?0:1,u,c,h=null,d=0,m=null;function g(p,f){let E=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),E=!0);const M=r.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||E)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===_a)?(c===void 0&&(c=new Jt(new Cr(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:xr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Xt.getTransfer(x.colorSpace)!==Kt,(h!==x||d!==x.version||m!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,m=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Jt(new ds(2,2),new ai({name:"BackgroundMaterial",uniforms:xr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Xt.getTransfer(x.colorSpace)!==Kt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||m!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,m=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null))}function _(p,f){p.getRGB(Bs,Vc(r)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(p,f=1){o.set(p),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function x_(r,t,e,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let u=l,c=!1;function h(R,B,W,k,K){let j=!1;if(a){const $=_(k,W,B);u!==$&&(u=$,m(u.object)),j=f(R,k,W,K),j&&E(R,k,W,K)}else{const $=B.wireframe===!0;(u.geometry!==k.id||u.program!==W.id||u.wireframe!==$)&&(u.geometry=k.id,u.program=W.id,u.wireframe=$,j=!0)}K!==null&&e.update(K,r.ELEMENT_ARRAY_BUFFER),(j||c)&&(c=!1,P(R,B,W,k),K!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function m(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function _(R,B,W){const k=W.wireframe===!0;let K=o[R.id];K===void 0&&(K={},o[R.id]=K);let j=K[B.id];j===void 0&&(j={},K[B.id]=j);let $=j[k];return $===void 0&&($=p(d()),j[k]=$),$}function p(R){const B=[],W=[],k=[];for(let K=0;K<i;K++)B[K]=0,W[K]=0,k[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:k,object:R,attributes:{},index:null}}function f(R,B,W,k){const K=u.attributes,j=B.attributes;let $=0;const L=W.getAttributes();for(const z in L)if(L[z].location>=0){const st=K[z];let lt=j[z];if(lt===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(lt=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(lt=R.instanceColor)),st===void 0||st.attribute!==lt||lt&&st.data!==lt.data)return!0;$++}return u.attributesNum!==$||u.index!==k}function E(R,B,W,k){const K={},j=B.attributes;let $=0;const L=W.getAttributes();for(const z in L)if(L[z].location>=0){let st=j[z];st===void 0&&(z==="instanceMatrix"&&R.instanceMatrix&&(st=R.instanceMatrix),z==="instanceColor"&&R.instanceColor&&(st=R.instanceColor));const lt={};lt.attribute=st,st&&st.data&&(lt.data=st.data),K[z]=lt,$++}u.attributes=K,u.attributesNum=$,u.index=k}function x(){const R=u.newAttributes;for(let B=0,W=R.length;B<W;B++)R[B]=0}function M(R){y(R,0)}function y(R,B){const W=u.newAttributes,k=u.enabledAttributes,K=u.attributeDivisors;W[R]=1,k[R]===0&&(r.enableVertexAttribArray(R),k[R]=1),K[R]!==B&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),K[R]=B)}function w(){const R=u.newAttributes,B=u.enabledAttributes;for(let W=0,k=B.length;W<k;W++)B[W]!==R[W]&&(r.disableVertexAttribArray(W),B[W]=0)}function T(R,B,W,k,K,j,$){$===!0?r.vertexAttribIPointer(R,B,W,K,j):r.vertexAttribPointer(R,B,W,k,K,j)}function P(R,B,W,k){if(n.isWebGL2===!1&&(R.isInstancedMesh||k.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();const K=k.attributes,j=W.getAttributes(),$=B.defaultAttributeValues;for(const L in j){const z=j[L];if(z.location>=0){let at=K[L];if(at===void 0&&(L==="instanceMatrix"&&R.instanceMatrix&&(at=R.instanceMatrix),L==="instanceColor"&&R.instanceColor&&(at=R.instanceColor)),at!==void 0){const st=at.normalized,lt=at.itemSize,vt=e.get(at);if(vt===void 0)continue;const Ot=vt.buffer,Dt=vt.type,Ct=vt.bytesPerElement,ee=n.isWebGL2===!0&&(Dt===r.INT||Dt===r.UNSIGNED_INT||at.gpuType===wc);if(at.isInterleavedBufferAttribute){const Lt=at.data,I=Lt.stride,We=at.offset;if(Lt.isInstancedInterleavedBuffer){for(let pt=0;pt<z.locationSize;pt++)y(z.location+pt,Lt.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let pt=0;pt<z.locationSize;pt++)M(z.location+pt);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let pt=0;pt<z.locationSize;pt++)T(z.location+pt,lt/z.locationSize,Dt,st,I*Ct,(We+lt/z.locationSize*pt)*Ct,ee)}else{if(at.isInstancedBufferAttribute){for(let Lt=0;Lt<z.locationSize;Lt++)y(z.location+Lt,at.meshPerAttribute);R.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Lt=0;Lt<z.locationSize;Lt++)M(z.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let Lt=0;Lt<z.locationSize;Lt++)T(z.location+Lt,lt/z.locationSize,Dt,st,lt*Ct,lt/z.locationSize*Lt*Ct,ee)}}else if($!==void 0){const st=$[L];if(st!==void 0)switch(st.length){case 2:r.vertexAttrib2fv(z.location,st);break;case 3:r.vertexAttrib3fv(z.location,st);break;case 4:r.vertexAttrib4fv(z.location,st);break;default:r.vertexAttrib1fv(z.location,st)}}}}w()}function v(){X();for(const R in o){const B=o[R];for(const W in B){const k=B[W];for(const K in k)g(k[K].object),delete k[K];delete B[W]}delete o[R]}}function A(R){if(o[R.id]===void 0)return;const B=o[R.id];for(const W in B){const k=B[W];for(const K in k)g(k[K].object),delete k[K];delete B[W]}delete o[R.id]}function V(R){for(const B in o){const W=o[B];if(W[R.id]===void 0)continue;const k=W[R.id];for(const K in k)g(k[K].object),delete k[K];delete W[R.id]}}function X(){Y(),c=!0,u!==l&&(u=l,m(u.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:X,resetDefaultState:Y,dispose:v,releaseStatesOfGeometry:A,releaseStatesOfProgram:V,initAttributes:x,enableAttribute:M,disableUnusedAttributes:w}}function E_(r,t,e,n){const i=n.isWebGL2;let s;function a(u){s=u}function o(u,c){r.drawArrays(s,u,c),e.update(c,s,1)}function l(u,c,h){if(h===0)return;let d,m;if(i)d=r,m="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,u,c,h),e.update(c,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function M_(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=a||t.has("OES_texture_float"),y=x&&M,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:E,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:w}}function S_(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new xi,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=c(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=r.get(h);if(!i||g===null||g.length===0||s&&!p)s?c(null):u();else{const E=s?0:n,x=E*4;let M=f.clippingState||null;l.value=M,M=c(g,d,x,m);for(let y=0;y!==x;++y)M[y]=e[y];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(h,d,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const f=m+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,M=m;x!==_;++x,M+=4)a.copy(h[x]).applyMatrix4(E,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function y_(r){let t=new WeakMap;function e(a,o){return o===Mo?a.mapping=_r:o===So&&(a.mapping=gr),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Mo||o===So)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Of(l.height/2);return u.fromEquirectangularTexture(r,a),t.set(a,u),a.addEventListener("dispose",i),e(u.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Yc extends Wc{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ir=4,Cu=[.125,.215,.35,.446,.526,.582],yi=20,to=new Yc,Ru=new Gt;let eo=null,no=0,io=0;const Ei=(1+Math.sqrt(5))/2,er=1/Ei,Pu=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Ei,er),new U(0,Ei,-er),new U(er,0,Ei),new U(-er,0,Ei),new U(Ei,er,0),new U(-Ei,er,0)];class Lu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(eo,no,io),t.scissorTest=!1,zs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_r||t.mapping===gr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),eo=this._renderer.getRenderTarget(),no=this._renderer.getActiveCubeFace(),io=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:Zr,format:gn,colorSpace:Hn,depthBuffer:!1},i=Fu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fu(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D_(s)),this._blurMaterial=T_(s,t,e)}return i}_compileMaterial(t){const e=new Jt(this._lodPlanes[0],t);this._renderer.compile(e,to)}_sceneToCubeUV(t,e,n,i){const o=new on(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(Ru),c.toneMapping=ei,c.autoClear=!1;const m=new wr({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new Jt(new Cr,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Ru),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(o.up.set(0,l[f],0),o.lookAt(u[f],0,0)):E===1?(o.up.set(0,0,l[f]),o.lookAt(0,u[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,u[f]));const x=this._cubeSize;zs(i,E*x,f>2?x:0,x,x),c.setRenderTarget(i),_&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=d,c.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_r||t.mapping===gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Jt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;zs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,to)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Pu[(i-1)%Pu.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Jt(this._lodPlanes[i],u),d=u.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yi-1),_=s/g,p=isFinite(s)?1+Math.floor(c*_):yi;p>yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${yi}`);const f=[];let E=0;for(let T=0;T<yi;++T){const P=T/_,v=Math.exp(-P*P/2);f.push(v),T===0?E+=v:T<p&&(E+=2*v)}for(let T=0;T<f.length;T++)f[T]=f[T]/E;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const M=this._sizeLods[i],y=3*M*(i>x-ir?i-x+ir:0),w=4*(this._cubeSize-M);zs(e,y,w,3*M,2*M),l.setRenderTarget(e),l.render(h,to)}}function D_(r){const t=[],e=[],n=[];let i=r;const s=r-ir+1+Cu.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-ir?l=Cu[a-r+ir-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],m=6,g=6,_=3,p=2,f=1,E=new Float32Array(_*g*m),x=new Float32Array(p*g*m),M=new Float32Array(f*g*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,P=w>2?0:-1,v=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];E.set(v,_*g*w),x.set(d,p*g*w);const A=[w,w,w,w,w,w];M.set(A,f*g*w)}const y=new xn;y.setAttribute("position",new Je(E,_)),y.setAttribute("uv",new Je(x,p)),y.setAttribute("faceIndex",new Je(M,f)),t.push(y),i>ir&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Fu(r,t,e){const n=new Ii(r,t,e);return n.texture.mapping=_a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function T_(r,t,e){const n=new Float32Array(yi),i=new U(0,1,0);return new ai({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Uu(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Iu(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A_(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Mo||l===So,c=l===_r||l===gr;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=t.get(o);return e===null&&(e=new Lu(r)),h=u?e.fromEquirectangular(o,h):e.fromCubemap(o,h),t.set(o,h),h.texture}else{if(t.has(o))return t.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||c&&h&&i(h)){e===null&&(e=new Lu(r));const d=u?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function i(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function b_(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function w_(r,t,e,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",a),delete i[d.id];const m=s.get(d);m&&(t.remove(m),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const _=m[g];for(let p=0,f=_.length;p<f;p++)t.update(_[p],r.ARRAY_BUFFER)}}function u(h){const d=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const E=m.array;_=m.version;for(let x=0,M=E.length;x<M;x+=3){const y=E[x+0],w=E[x+1],T=E[x+2];d.push(y,w,w,T,T,y)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,M=E.length/3-1;x<M;x+=3){const y=x+0,w=x+1,T=x+2;d.push(y,w,w,T,T,y)}}else return;const p=new(Nc(d)?kc:Hc)(d,1);p.version=_;const f=s.get(h);f&&t.remove(f),s.set(h,p)}function c(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function C_(r,t,e,n){const i=n.isWebGL2;let s;function a(d){s=d}let o,l;function u(d){o=d.type,l=d.bytesPerElement}function c(d,m){r.drawElements(s,m,o,d*l),e.update(m,s,1)}function h(d,m,g){if(g===0)return;let _,p;if(i)_=r,p="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](s,m,o,d*l,g),e.update(m,s,g)}this.setMode=a,this.setIndex=u,this.render=c,this.renderInstances=h}function R_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function P_(r,t){return r[0]-t[0]}function L_(r,t){return Math.abs(t[1])-Math.abs(r[1])}function F_(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new ve,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,h){const d=u.morphTargetInfluences;if(t.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(c);if(p===void 0||p.count!==_){let B=function(){Y.dispose(),s.delete(c),c.removeEventListener("dispose",B)};var m=B;p!==void 0&&p.texture.dispose();const x=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,w=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let v=0;x===!0&&(v=1),M===!0&&(v=2),y===!0&&(v=3);let A=c.attributes.position.count*v,V=1;A>t.maxTextureSize&&(V=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const X=new Float32Array(A*V*4*_),Y=new zc(X,A,V,_);Y.type=Kn,Y.needsUpdate=!0;const R=v*4;for(let W=0;W<_;W++){const k=w[W],K=T[W],j=P[W],$=A*V*4*W;for(let L=0;L<k.count;L++){const z=L*R;x===!0&&(a.fromBufferAttribute(k,L),X[$+z+0]=a.x,X[$+z+1]=a.y,X[$+z+2]=a.z,X[$+z+3]=0),M===!0&&(a.fromBufferAttribute(K,L),X[$+z+4]=a.x,X[$+z+5]=a.y,X[$+z+6]=a.z,X[$+z+7]=0),y===!0&&(a.fromBufferAttribute(j,L),X[$+z+8]=a.x,X[$+z+9]=a.y,X[$+z+10]=a.z,X[$+z+11]=j.itemSize===4?a.w:1)}}p={count:_,texture:Y,size:new Ht(A,V)},s.set(c,p),c.addEventListener("dispose",B)}let f=0;for(let x=0;x<d.length;x++)f+=d[x];const E=c.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",E),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let _=n[c.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];n[c.id]=_}for(let M=0;M<g;M++){const y=_[M];y[0]=M,y[1]=d[M]}_.sort(L_);for(let M=0;M<8;M++)M<g&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(P_);const p=c.morphAttributes.position,f=c.morphAttributes.normal;let E=0;for(let M=0;M<8;M++){const y=o[M],w=y[0],T=y[1];w!==Number.MAX_SAFE_INTEGER&&T?(p&&c.getAttribute("morphTarget"+M)!==p[w]&&c.setAttribute("morphTarget"+M,p[w]),f&&c.getAttribute("morphNormal"+M)!==f[w]&&c.setAttribute("morphNormal"+M,f[w]),i[M]=T,E+=T):(p&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),f&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),i[M]=0)}const x=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function U_(r,t,e,n){let i=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,h=t.get(l,c);if(i.get(h)!==u&&(t.update(h),i.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==u&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==u&&(d.update(),i.set(d,u))}return h}function a(){i=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}const $c=new Be,jc=new zc,Kc=new Ef,Zc=new Xc,Nu=[],Ou=[],Bu=new Float32Array(16),zu=new Float32Array(9),Gu=new Float32Array(4);function Rr(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Nu[i];if(s===void 0&&(s=new Float32Array(i),Nu[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function de(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function fe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ea(r,t){let e=Ou[t];e===void 0&&(e=new Int32Array(t),Ou[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function I_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function N_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2fv(this.addr,t),fe(e,t)}}function O_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;r.uniform3fv(this.addr,t),fe(e,t)}}function B_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4fv(this.addr,t),fe(e,t)}}function z_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Gu.set(n),r.uniformMatrix2fv(this.addr,!1,Gu),fe(e,n)}}function G_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;zu.set(n),r.uniformMatrix3fv(this.addr,!1,zu),fe(e,n)}}function H_(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;Bu.set(n),r.uniformMatrix4fv(this.addr,!1,Bu),fe(e,n)}}function k_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function V_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2iv(this.addr,t),fe(e,t)}}function W_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;r.uniform3iv(this.addr,t),fe(e,t)}}function X_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4iv(this.addr,t),fe(e,t)}}function q_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Y_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;r.uniform2uiv(this.addr,t),fe(e,t)}}function $_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;r.uniform3uiv(this.addr,t),fe(e,t)}}function j_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;r.uniform4uiv(this.addr,t),fe(e,t)}}function K_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||$c,i)}function Z_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Kc,i)}function J_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Zc,i)}function Q_(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||jc,i)}function tg(r){switch(r){case 5126:return I_;case 35664:return N_;case 35665:return O_;case 35666:return B_;case 35674:return z_;case 35675:return G_;case 35676:return H_;case 5124:case 35670:return k_;case 35667:case 35671:return V_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return Y_;case 36295:return $_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return J_;case 36289:case 36303:case 36311:case 36292:return Q_}}function eg(r,t){r.uniform1fv(this.addr,t)}function ng(r,t){const e=Rr(t,this.size,2);r.uniform2fv(this.addr,e)}function ig(r,t){const e=Rr(t,this.size,3);r.uniform3fv(this.addr,e)}function rg(r,t){const e=Rr(t,this.size,4);r.uniform4fv(this.addr,e)}function sg(r,t){const e=Rr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ag(r,t){const e=Rr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function og(r,t){const e=Rr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function lg(r,t){r.uniform1iv(this.addr,t)}function ug(r,t){r.uniform2iv(this.addr,t)}function cg(r,t){r.uniform3iv(this.addr,t)}function hg(r,t){r.uniform4iv(this.addr,t)}function dg(r,t){r.uniform1uiv(this.addr,t)}function fg(r,t){r.uniform2uiv(this.addr,t)}function pg(r,t){r.uniform3uiv(this.addr,t)}function mg(r,t){r.uniform4uiv(this.addr,t)}function _g(r,t,e){const n=this.cache,i=t.length,s=Ea(e,i);de(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||$c,s[a])}function gg(r,t,e){const n=this.cache,i=t.length,s=Ea(e,i);de(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Kc,s[a])}function vg(r,t,e){const n=this.cache,i=t.length,s=Ea(e,i);de(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Zc,s[a])}function xg(r,t,e){const n=this.cache,i=t.length,s=Ea(e,i);de(n,s)||(r.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||jc,s[a])}function Eg(r){switch(r){case 5126:return eg;case 35664:return ng;case 35665:return ig;case 35666:return rg;case 35674:return sg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return ug;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return xg}}class Mg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=tg(e.type)}}class Sg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Eg(e.type)}}class yg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function Hu(r,t){r.seq.push(t),r.map[t.id]=t}function Dg(r,t,e){const n=r.name,i=n.length;for(ro.lastIndex=0;;){const s=ro.exec(n),a=ro.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===i){Hu(e,u===void 0?new Mg(o,r,t):new Sg(o,r,t));break}else{let h=e.map[o];h===void 0&&(h=new yg(o),Hu(e,h)),e=h}}}class Ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);Dg(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function ku(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const Tg=37297;let Ag=0;function bg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function wg(r){const t=Xt.getPrimaries(Xt.workingColorSpace),e=Xt.getPrimaries(r);let n;switch(t===e?n="":t===Js&&e===Zs?n="LinearDisplayP3ToLinearSRGB":t===Zs&&e===Js&&(n="LinearSRGBToLinearDisplayP3"),r){case Hn:case ga:return[n,"LinearTransferOETF"];case Ee:case Qo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Vu(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+bg(r.getShaderSource(t),a)}else return i}function Cg(r,t){const e=wg(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Rg(r,t){let e;switch(t){case Hd:e="Linear";break;case kd:e="Reinhard";break;case Vd:e="OptimizedCineon";break;case Wd:e="ACESFilmic";break;case Xd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Pg(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gr).join(`
`)}function Lg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Gr(r){return r!==""}function Wu(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function wo(r){return r.replace(Ug,Ng)}const Ig=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ng(r,t){let e=Rt[t];if(e===void 0){const n=Ig.get(t);if(n!==void 0)e=Rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wo(e)}const Og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qu(r){return r.replace(Og,Bg)}function Bg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yu(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function zg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Tc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===md?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case _r:case gr:t="ENVMAP_TYPE_CUBE";break;case _a:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Hg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case gr:t="ENVMAP_MODE_REFRACTION";break}return t}function kg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ac:t="ENVMAP_BLENDING_MULTIPLY";break;case zd:t="ENVMAP_BLENDING_MIX";break;case Gd:t="ENVMAP_BLENDING_ADD";break}return t}function Vg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Wg(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=zg(e),u=Gg(e),c=Hg(e),h=kg(e),d=Vg(e),m=e.isWebGL2?"":Pg(e),g=Lg(s),_=i.createProgram();let p,f,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gr).join(`
`),p.length>0&&(p+=`
`),f=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gr).join(`
`),f.length>0&&(f+=`
`)):(p=[Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),f=[m,Yu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?Rt.tonemapping_pars_fragment:"",e.toneMapping!==ei?Rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Rt.colorspace_pars_fragment,Cg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gr).join(`
`)),a=wo(a),a=Wu(a,e),a=Xu(a,e),o=wo(o),o=Wu(o,e),o=Xu(o,e),a=qu(a),o=qu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=E+p+a,M=E+f+o,y=ku(i,i.VERTEX_SHADER,x),w=ku(i,i.FRAGMENT_SHADER,M);i.attachShader(_,y),i.attachShader(_,w),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function T(V){if(r.debug.checkShaderErrors){const X=i.getProgramInfoLog(_).trim(),Y=i.getShaderInfoLog(y).trim(),R=i.getShaderInfoLog(w).trim();let B=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,w);else{const k=Vu(i,y,"vertex"),K=Vu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+k+`
`+K)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||R==="")&&(W=!1);W&&(V.diagnostics={runnable:B,programLog:X,vertexShader:{log:Y,prefix:p},fragmentShader:{log:R,prefix:f}})}i.deleteShader(y),i.deleteShader(w),P=new Ws(i,_),v=Fg(i,_)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(_,Tg)),A},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ag++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=w,this}let Xg=0;class qg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Yg(t),e.set(t,n)),n}}class Yg{constructor(t){this.id=Xg++,this.code=t,this.usedTimes=0}}function $g(r,t,e,n,i,s,a){const o=new el,l=new qg,u=[],c=i.isWebGL2,h=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return v===0?"uv":`uv${v}`}function p(v,A,V,X,Y){const R=X.fog,B=Y.geometry,W=v.isMeshStandardMaterial?X.environment:null,k=(v.isMeshStandardMaterial?e:t).get(v.envMap||W),K=k&&k.mapping===_a?k.image.height:null,j=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,L=$!==void 0?$.length:0;let z=0;B.morphAttributes.position!==void 0&&(z=1),B.morphAttributes.normal!==void 0&&(z=2),B.morphAttributes.color!==void 0&&(z=3);let at,st,lt,vt;if(j){const oe=Sn[j];at=oe.vertexShader,st=oe.fragmentShader}else at=v.vertexShader,st=v.fragmentShader,l.update(v),lt=l.getVertexShaderID(v),vt=l.getFragmentShaderID(v);const Ot=r.getRenderTarget(),Dt=Y.isInstancedMesh===!0,Ct=!!v.map,ee=!!v.matcap,Lt=!!k,I=!!v.aoMap,We=!!v.lightMap,pt=!!v.bumpMap,Tt=!!v.normalMap,yt=!!v.displacementMap,ne=!!v.emissiveMap,Ft=!!v.metalnessMap,Ut=!!v.roughnessMap,qt=v.anisotropy>0,pe=v.clearcoat>0,Se=v.iridescence>0,b=v.sheen>0,S=v.transmission>0,N=qt&&!!v.anisotropyMap,Q=pe&&!!v.clearcoatMap,Z=pe&&!!v.clearcoatNormalMap,tt=pe&&!!v.clearcoatRoughnessMap,dt=Se&&!!v.iridescenceMap,it=Se&&!!v.iridescenceThicknessMap,ut=b&&!!v.sheenColorMap,xt=b&&!!v.sheenRoughnessMap,kt=!!v.specularMap,J=!!v.specularColorMap,Wt=!!v.specularIntensityMap,At=S&&!!v.transmissionMap,Et=S&&!!v.thicknessMap,mt=!!v.gradientMap,ht=!!v.alphaMap,zt=v.alphaTest>0,C=!!v.alphaHash,ot=!!v.extensions,et=!!B.attributes.uv1,q=!!B.attributes.uv2,nt=!!B.attributes.uv3;let _t=ei;return v.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(_t=r.toneMapping),{isWebGL2:c,shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:at,fragmentShader:st,defines:v.defines,customVertexShaderID:lt,customFragmentShaderID:vt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:Dt,instancingColor:Dt&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ot===null?r.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:Hn,map:Ct,matcap:ee,envMap:Lt,envMapMode:Lt&&k.mapping,envMapCubeUVHeight:K,aoMap:I,lightMap:We,bumpMap:pt,normalMap:Tt,displacementMap:d&&yt,emissiveMap:ne,normalMapObjectSpace:Tt&&v.normalMapType===sf,normalMapTangentSpace:Tt&&v.normalMapType===Ic,metalnessMap:Ft,roughnessMap:Ut,anisotropy:qt,anisotropyMap:N,clearcoat:pe,clearcoatMap:Q,clearcoatNormalMap:Z,clearcoatRoughnessMap:tt,iridescence:Se,iridescenceMap:dt,iridescenceThicknessMap:it,sheen:b,sheenColorMap:ut,sheenRoughnessMap:xt,specularMap:kt,specularColorMap:J,specularIntensityMap:Wt,transmission:S,transmissionMap:At,thicknessMap:Et,gradientMap:mt,opaque:v.transparent===!1&&v.blending===ur,alphaMap:ht,alphaTest:zt,alphaHash:C,combine:v.combine,mapUv:Ct&&_(v.map.channel),aoMapUv:I&&_(v.aoMap.channel),lightMapUv:We&&_(v.lightMap.channel),bumpMapUv:pt&&_(v.bumpMap.channel),normalMapUv:Tt&&_(v.normalMap.channel),displacementMapUv:yt&&_(v.displacementMap.channel),emissiveMapUv:ne&&_(v.emissiveMap.channel),metalnessMapUv:Ft&&_(v.metalnessMap.channel),roughnessMapUv:Ut&&_(v.roughnessMap.channel),anisotropyMapUv:N&&_(v.anisotropyMap.channel),clearcoatMapUv:Q&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Z&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(v.sheenRoughnessMap.channel),specularMapUv:kt&&_(v.specularMap.channel),specularColorMapUv:J&&_(v.specularColorMap.channel),specularIntensityMapUv:Wt&&_(v.specularIntensityMap.channel),transmissionMapUv:At&&_(v.transmissionMap.channel),thicknessMapUv:Et&&_(v.thicknessMap.channel),alphaMapUv:ht&&_(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Tt||qt),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:et,vertexUv2s:q,vertexUv3s:nt,pointsUvs:Y.isPoints===!0&&!!B.attributes.uv&&(Ct||ht),fog:!!R,useFog:v.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:Y.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:_t,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Ct&&v.map.isVideoTexture===!0&&Xt.getTransfer(v.map.colorSpace)===Kt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zn,flipSided:v.side===Oe,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ot&&v.extensions.derivatives===!0,extensionFragDepth:ot&&v.extensions.fragDepth===!0,extensionDrawBuffers:ot&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function f(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const V in v.defines)A.push(V),A.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(E(A,v),x(A,v),A.push(r.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function E(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.anisotropyMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.numLightProbes),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function x(v,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),v.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function M(v){const A=g[v.type];let V;if(A){const X=Sn[A];V=Ff.clone(X.uniforms)}else V=v.uniforms;return V}function y(v,A){let V;for(let X=0,Y=u.length;X<Y;X++){const R=u[X];if(R.cacheKey===A){V=R,++V.usedTimes;break}}return V===void 0&&(V=new Wg(r,A,v,s),u.push(V)),V}function w(v){if(--v.usedTimes===0){const A=u.indexOf(v);u[A]=u[u.length-1],u.pop(),v.destroy()}}function T(v){l.remove(v)}function P(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:M,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:P}}function jg(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Kg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function $u(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ju(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h,d,m,g,_,p){let f=r[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},r[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=p),t++,f}function o(h,d,m,g,_,p){const f=a(h,d,m,g,_,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):e.push(f)}function l(h,d,m,g,_,p){const f=a(h,d,m,g,_,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):e.unshift(f)}function u(h,d){e.length>1&&e.sort(h||Kg),n.length>1&&n.sort(d||$u),i.length>1&&i.sort(d||$u)}function c(){for(let h=t,d=r.length;h<d;h++){const m=r[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:c,sort:u}}function Zg(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new ju,r.set(n,[a])):i>=s.length?(a=new ju,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function Jg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function Qg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let t0=0;function e0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function n0(r,t){const e=new Jg,n=Qg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const s=new U,a=new he,o=new he;function l(c,h){let d=0,m=0,g=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let _=0,p=0,f=0,E=0,x=0,M=0,y=0,w=0,T=0,P=0,v=0;c.sort(e0);const A=h===!0?Math.PI:1;for(let X=0,Y=c.length;X<Y;X++){const R=c[X],B=R.color,W=R.intensity,k=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=B.r*W*A,m+=B.g*W*A,g+=B.b*W*A;else if(R.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(R.sh.coefficients[j],W);v++}else if(R.isDirectionalLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity*A),R.castShadow){const $=R.shadow,L=n.get(R);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,i.directionalShadow[_]=L,i.directionalShadowMap[_]=K,i.directionalShadowMatrix[_]=R.shadow.matrix,M++}i.directional[_]=j,_++}else if(R.isSpotLight){const j=e.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(B).multiplyScalar(W*A),j.distance=k,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,i.spot[f]=j;const $=R.shadow;if(R.map&&(i.spotLightMap[T]=R.map,T++,$.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[f]=$.matrix,R.castShadow){const L=n.get(R);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,i.spotShadow[f]=L,i.spotShadowMap[f]=K,w++}f++}else if(R.isRectAreaLight){const j=e.get(R);j.color.copy(B).multiplyScalar(W),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),i.rectArea[E]=j,E++}else if(R.isPointLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity*A),j.distance=R.distance,j.decay=R.decay,R.castShadow){const $=R.shadow,L=n.get(R);L.shadowBias=$.bias,L.shadowNormalBias=$.normalBias,L.shadowRadius=$.radius,L.shadowMapSize=$.mapSize,L.shadowCameraNear=$.camera.near,L.shadowCameraFar=$.camera.far,i.pointShadow[p]=L,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=R.shadow.matrix,y++}i.point[p]=j,p++}else if(R.isHemisphereLight){const j=e.get(R);j.skyColor.copy(R.color).multiplyScalar(W*A),j.groundColor.copy(R.groundColor).multiplyScalar(W*A),i.hemi[x]=j,x++}}E>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=g;const V=i.hash;(V.directionalLength!==_||V.pointLength!==p||V.spotLength!==f||V.rectAreaLength!==E||V.hemiLength!==x||V.numDirectionalShadows!==M||V.numPointShadows!==y||V.numSpotShadows!==w||V.numSpotMaps!==T||V.numLightProbes!==v)&&(i.directional.length=_,i.spot.length=f,i.rectArea.length=E,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=w+T-P,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=v,V.directionalLength=_,V.pointLength=p,V.spotLength=f,V.rectAreaLength=E,V.hemiLength=x,V.numDirectionalShadows=M,V.numPointShadows=y,V.numSpotShadows=w,V.numSpotMaps=T,V.numLightProbes=v,i.version=t0++)}function u(c,h){let d=0,m=0,g=0,_=0,p=0;const f=h.matrixWorldInverse;for(let E=0,x=c.length;E<x;E++){const M=c[E];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),d++}else if(M.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),g++}else if(M.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(f),m++}else if(M.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(f),p++}}}return{setup:l,setupView:u,state:i}}function Ku(r,t){const e=new n0(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){e.setup(n,h)}function u(h){e.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function i0(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Ku(r,t),e.set(s,[l])):a>=o.length?(l=new Ku(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class r0 extends br{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class s0 extends br{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function l0(r,t,e){let n=new nl;const i=new Ht,s=new Ht,a=new ve,o=new r0({depthPacking:rf}),l=new s0,u={},c=e.maxTextureSize,h={[si]:Oe,[Oe]:si,[zn]:zn},d=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:a0,fragmentShader:o0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new xn;g.setAttribute("position",new Je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Jt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let f=this.type;this.render=function(y,w,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||y.length===0)return;const P=r.getRenderTarget(),v=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),V=r.state;V.setBlending(ti),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const X=f!==Nn&&this.type===Nn,Y=f===Nn&&this.type!==Nn;for(let R=0,B=y.length;R<B;R++){const W=y[R],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const K=k.getFrameExtents();if(i.multiply(K),s.copy(k.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(s.x=Math.floor(c/K.x),i.x=s.x*K.x,k.mapSize.x=s.x),i.y>c&&(s.y=Math.floor(c/K.y),i.y=s.y*K.y,k.mapSize.y=s.y)),k.map===null||X===!0||Y===!0){const $=this.type!==Nn?{minFilter:Te,magFilter:Te}:{};k.map!==null&&k.map.dispose(),k.map=new Ii(i.x,i.y,$),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const j=k.getViewportCount();for(let $=0;$<j;$++){const L=k.getViewport($);a.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),V.viewport(a),k.updateMatrices(W,$),n=k.getFrustum(),M(w,T,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===Nn&&E(k,T),k.needsUpdate=!1}f=this.type,p.needsUpdate=!1,r.setRenderTarget(P,v,A)};function E(y,w){const T=t.update(_);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Ii(i.x,i.y)),d.uniforms.shadow_pass.value=y.map.texture,d.uniforms.resolution.value=y.mapSize,d.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(w,null,T,d,_,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(w,null,T,m,_,null)}function x(y,w,T,P){let v=null;const A=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(A!==void 0)v=A;else if(v=T.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=v.uuid,X=w.uuid;let Y=u[V];Y===void 0&&(Y={},u[V]=Y);let R=Y[X];R===void 0&&(R=v.clone(),Y[X]=R),v=R}if(v.visible=w.visible,v.wireframe=w.wireframe,P===Nn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,T.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const V=r.properties.get(v);V.light=T}return v}function M(y,w,T,P,v){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Nn)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);const X=t.update(y),Y=y.material;if(Array.isArray(Y)){const R=X.groups;for(let B=0,W=R.length;B<W;B++){const k=R[B],K=Y[k.materialIndex];if(K&&K.visible){const j=x(y,K,P,v);r.renderBufferDirect(T,null,X,j,y,k)}}}else if(Y.visible){const R=x(y,Y,P,v);r.renderBufferDirect(T,null,X,R,y,null)}}const V=y.children;for(let X=0,Y=V.length;X<Y;X++)M(V[X],w,T,P,v)}}function u0(r,t,e){const n=e.isWebGL2;function i(){let C=!1;const ot=new ve;let et=null;const q=new ve(0,0,0,0);return{setMask:function(nt){et!==nt&&!C&&(r.colorMask(nt,nt,nt,nt),et=nt)},setLocked:function(nt){C=nt},setClear:function(nt,_t,Vt,oe,nn){nn===!0&&(nt*=oe,_t*=oe,Vt*=oe),ot.set(nt,_t,Vt,oe),q.equals(ot)===!1&&(r.clearColor(nt,_t,Vt,oe),q.copy(ot))},reset:function(){C=!1,et=null,q.set(-1,0,0,0)}}}function s(){let C=!1,ot=null,et=null,q=null;return{setTest:function(nt){nt?Ct(r.DEPTH_TEST):ee(r.DEPTH_TEST)},setMask:function(nt){ot!==nt&&!C&&(r.depthMask(nt),ot=nt)},setFunc:function(nt){if(et!==nt){switch(nt){case Ld:r.depthFunc(r.NEVER);break;case Fd:r.depthFunc(r.ALWAYS);break;case Ud:r.depthFunc(r.LESS);break;case js:r.depthFunc(r.LEQUAL);break;case Id:r.depthFunc(r.EQUAL);break;case Nd:r.depthFunc(r.GEQUAL);break;case Od:r.depthFunc(r.GREATER);break;case Bd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}et=nt}},setLocked:function(nt){C=nt},setClear:function(nt){q!==nt&&(r.clearDepth(nt),q=nt)},reset:function(){C=!1,ot=null,et=null,q=null}}}function a(){let C=!1,ot=null,et=null,q=null,nt=null,_t=null,Vt=null,oe=null,nn=null;return{setTest:function($t){C||($t?Ct(r.STENCIL_TEST):ee(r.STENCIL_TEST))},setMask:function($t){ot!==$t&&!C&&(r.stencilMask($t),ot=$t)},setFunc:function($t,Re,En){(et!==$t||q!==Re||nt!==En)&&(r.stencilFunc($t,Re,En),et=$t,q=Re,nt=En)},setOp:function($t,Re,En){(_t!==$t||Vt!==Re||oe!==En)&&(r.stencilOp($t,Re,En),_t=$t,Vt=Re,oe=En)},setLocked:function($t){C=$t},setClear:function($t){nn!==$t&&(r.clearStencil($t),nn=$t)},reset:function(){C=!1,ot=null,et=null,q=null,nt=null,_t=null,Vt=null,oe=null,nn=null}}}const o=new i,l=new s,u=new a,c=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],p=null,f=!1,E=null,x=null,M=null,y=null,w=null,T=null,P=null,v=new Gt(0,0,0),A=0,V=!1,X=null,Y=null,R=null,B=null,W=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec($)[1]),K=j>=1):$.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=j>=2);let L=null,z={};const at=r.getParameter(r.SCISSOR_BOX),st=r.getParameter(r.VIEWPORT),lt=new ve().fromArray(at),vt=new ve().fromArray(st);function Ot(C,ot,et,q){const nt=new Uint8Array(4),_t=r.createTexture();r.bindTexture(C,_t),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Vt=0;Vt<et;Vt++)n&&(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)?r.texImage3D(ot,0,r.RGBA,1,1,q,0,r.RGBA,r.UNSIGNED_BYTE,nt):r.texImage2D(ot+Vt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,nt);return _t}const Dt={};Dt[r.TEXTURE_2D]=Ot(r.TEXTURE_2D,r.TEXTURE_2D,1),Dt[r.TEXTURE_CUBE_MAP]=Ot(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Dt[r.TEXTURE_2D_ARRAY]=Ot(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Dt[r.TEXTURE_3D]=Ot(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ct(r.DEPTH_TEST),l.setFunc(js),Ft(!1),Ut(Pl),Ct(r.CULL_FACE),yt(ti);function Ct(C){d[C]!==!0&&(r.enable(C),d[C]=!0)}function ee(C){d[C]!==!1&&(r.disable(C),d[C]=!1)}function Lt(C,ot){return m[C]!==ot?(r.bindFramebuffer(C,ot),m[C]=ot,n&&(C===r.DRAW_FRAMEBUFFER&&(m[r.FRAMEBUFFER]=ot),C===r.FRAMEBUFFER&&(m[r.DRAW_FRAMEBUFFER]=ot)),!0):!1}function I(C,ot){let et=_,q=!1;if(C)if(et=g.get(ot),et===void 0&&(et=[],g.set(ot,et)),C.isWebGLMultipleRenderTargets){const nt=C.texture;if(et.length!==nt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,Vt=nt.length;_t<Vt;_t++)et[_t]=r.COLOR_ATTACHMENT0+_t;et.length=nt.length,q=!0}}else et[0]!==r.COLOR_ATTACHMENT0&&(et[0]=r.COLOR_ATTACHMENT0,q=!0);else et[0]!==r.BACK&&(et[0]=r.BACK,q=!0);q&&(e.isWebGL2?r.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function We(C){return p!==C?(r.useProgram(C),p=C,!0):!1}const pt={[Si]:r.FUNC_ADD,[gd]:r.FUNC_SUBTRACT,[vd]:r.FUNC_REVERSE_SUBTRACT};if(n)pt[Il]=r.MIN,pt[Nl]=r.MAX;else{const C=t.get("EXT_blend_minmax");C!==null&&(pt[Il]=C.MIN_EXT,pt[Nl]=C.MAX_EXT)}const Tt={[xd]:r.ZERO,[Ed]:r.ONE,[Md]:r.SRC_COLOR,[xo]:r.SRC_ALPHA,[bd]:r.SRC_ALPHA_SATURATE,[Td]:r.DST_COLOR,[yd]:r.DST_ALPHA,[Sd]:r.ONE_MINUS_SRC_COLOR,[Eo]:r.ONE_MINUS_SRC_ALPHA,[Ad]:r.ONE_MINUS_DST_COLOR,[Dd]:r.ONE_MINUS_DST_ALPHA,[wd]:r.CONSTANT_COLOR,[Cd]:r.ONE_MINUS_CONSTANT_COLOR,[Rd]:r.CONSTANT_ALPHA,[Pd]:r.ONE_MINUS_CONSTANT_ALPHA};function yt(C,ot,et,q,nt,_t,Vt,oe,nn,$t){if(C===ti){f===!0&&(ee(r.BLEND),f=!1);return}if(f===!1&&(Ct(r.BLEND),f=!0),C!==_d){if(C!==E||$t!==V){if((x!==Si||w!==Si)&&(r.blendEquation(r.FUNC_ADD),x=Si,w=Si),$t)switch(C){case ur:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ll:r.blendFunc(r.ONE,r.ONE);break;case Fl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ul:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ur:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ll:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Fl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ul:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}M=null,y=null,T=null,P=null,v.set(0,0,0),A=0,E=C,V=$t}return}nt=nt||ot,_t=_t||et,Vt=Vt||q,(ot!==x||nt!==w)&&(r.blendEquationSeparate(pt[ot],pt[nt]),x=ot,w=nt),(et!==M||q!==y||_t!==T||Vt!==P)&&(r.blendFuncSeparate(Tt[et],Tt[q],Tt[_t],Tt[Vt]),M=et,y=q,T=_t,P=Vt),(oe.equals(v)===!1||nn!==A)&&(r.blendColor(oe.r,oe.g,oe.b,nn),v.copy(oe),A=nn),E=C,V=!1}function ne(C,ot){C.side===zn?ee(r.CULL_FACE):Ct(r.CULL_FACE);let et=C.side===Oe;ot&&(et=!et),Ft(et),C.blending===ur&&C.transparent===!1?yt(ti):yt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),o.setMask(C.colorWrite);const q=C.stencilWrite;u.setTest(q),q&&(u.setMask(C.stencilWriteMask),u.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),u.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),pe(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ct(r.SAMPLE_ALPHA_TO_COVERAGE):ee(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(C){X!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),X=C)}function Ut(C){C!==fd?(Ct(r.CULL_FACE),C!==Y&&(C===Pl?r.cullFace(r.BACK):C===pd?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ee(r.CULL_FACE),Y=C}function qt(C){C!==R&&(K&&r.lineWidth(C),R=C)}function pe(C,ot,et){C?(Ct(r.POLYGON_OFFSET_FILL),(B!==ot||W!==et)&&(r.polygonOffset(ot,et),B=ot,W=et)):ee(r.POLYGON_OFFSET_FILL)}function Se(C){C?Ct(r.SCISSOR_TEST):ee(r.SCISSOR_TEST)}function b(C){C===void 0&&(C=r.TEXTURE0+k-1),L!==C&&(r.activeTexture(C),L=C)}function S(C,ot,et){et===void 0&&(L===null?et=r.TEXTURE0+k-1:et=L);let q=z[et];q===void 0&&(q={type:void 0,texture:void 0},z[et]=q),(q.type!==C||q.texture!==ot)&&(L!==et&&(r.activeTexture(et),L=et),r.bindTexture(C,ot||Dt[C]),q.type=C,q.texture=ot)}function N(){const C=z[L];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Q(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function dt(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function kt(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Wt(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(C){lt.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),lt.copy(C))}function Et(C){vt.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),vt.copy(C))}function mt(C,ot){let et=h.get(ot);et===void 0&&(et=new WeakMap,h.set(ot,et));let q=et.get(C);q===void 0&&(q=r.getUniformBlockIndex(ot,C.name),et.set(C,q))}function ht(C,ot){const q=h.get(ot).get(C);c.get(ot)!==q&&(r.uniformBlockBinding(ot,q,C.__bindingPointIndex),c.set(ot,q))}function zt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},L=null,z={},m={},g=new WeakMap,_=[],p=null,f=!1,E=null,x=null,M=null,y=null,w=null,T=null,P=null,v=new Gt(0,0,0),A=0,V=!1,X=null,Y=null,R=null,B=null,W=null,lt.set(0,0,r.canvas.width,r.canvas.height),vt.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Ct,disable:ee,bindFramebuffer:Lt,drawBuffers:I,useProgram:We,setBlending:yt,setMaterial:ne,setFlipSided:Ft,setCullFace:Ut,setLineWidth:qt,setPolygonOffset:pe,setScissorTest:Se,activeTexture:b,bindTexture:S,unbindTexture:N,compressedTexImage2D:Q,compressedTexImage3D:Z,texImage2D:J,texImage3D:Wt,updateUBOMapping:mt,uniformBlockBinding:ht,texStorage2D:xt,texStorage3D:kt,texSubImage2D:tt,texSubImage3D:dt,compressedTexSubImage2D:it,compressedTexSubImage3D:ut,scissor:At,viewport:Et,reset:zt}}function c0(r,t,e,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,h=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,S){return f?new OffscreenCanvas(b,S):Jr("canvas")}function x(b,S,N,Q){let Z=1;if((b.width>Q||b.height>Q)&&(Z=Q/Math.max(b.width,b.height)),Z<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const tt=S?bo:Math.floor,dt=tt(Z*b.width),it=tt(Z*b.height);_===void 0&&(_=E(dt,it));const ut=N?E(dt,it):_;return ut.width=dt,ut.height=it,ut.getContext("2d").drawImage(b,0,0,dt,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+dt+"x"+it+")."),ut}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function M(b){return du(b.width)&&du(b.height)}function y(b){return o?!1:b.wrapS!==_n||b.wrapT!==_n||b.minFilter!==Te&&b.minFilter!==an}function w(b,S){return b.generateMipmaps&&S&&b.minFilter!==Te&&b.minFilter!==an}function T(b){r.generateMipmap(b)}function P(b,S,N,Q,Z=!1){if(o===!1)return S;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let tt=S;if(S===r.RED&&(N===r.FLOAT&&(tt=r.R32F),N===r.HALF_FLOAT&&(tt=r.R16F),N===r.UNSIGNED_BYTE&&(tt=r.R8)),S===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&(tt=r.R8UI),N===r.UNSIGNED_SHORT&&(tt=r.R16UI),N===r.UNSIGNED_INT&&(tt=r.R32UI),N===r.BYTE&&(tt=r.R8I),N===r.SHORT&&(tt=r.R16I),N===r.INT&&(tt=r.R32I)),S===r.RG&&(N===r.FLOAT&&(tt=r.RG32F),N===r.HALF_FLOAT&&(tt=r.RG16F),N===r.UNSIGNED_BYTE&&(tt=r.RG8)),S===r.RGBA){const dt=Z?Ks:Xt.getTransfer(Q);N===r.FLOAT&&(tt=r.RGBA32F),N===r.HALF_FLOAT&&(tt=r.RGBA16F),N===r.UNSIGNED_BYTE&&(tt=dt===Kt?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&(tt=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&(tt=r.RGB5_A1)}return(tt===r.R16F||tt===r.R32F||tt===r.RG16F||tt===r.RG32F||tt===r.RGBA16F||tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(b,S,N){return w(b,N)===!0||b.isFramebufferTexture&&b.minFilter!==Te&&b.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function A(b){return b===Te||b===Ol||b===Ca?r.NEAREST:r.LINEAR}function V(b){const S=b.target;S.removeEventListener("dispose",V),Y(S),S.isVideoTexture&&g.delete(S)}function X(b){const S=b.target;S.removeEventListener("dispose",X),B(S)}function Y(b){const S=n.get(b);if(S.__webglInit===void 0)return;const N=b.source,Q=p.get(N);if(Q){const Z=Q[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(b),Object.keys(Q).length===0&&p.delete(N)}n.remove(b)}function R(b){const S=n.get(b);r.deleteTexture(S.__webglTexture);const N=b.source,Q=p.get(N);delete Q[S.__cacheKey],a.memory.textures--}function B(b){const S=b.texture,N=n.get(b),Q=n.get(S);if(Q.__webglTexture!==void 0&&(r.deleteTexture(Q.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(N.__webglFramebuffer[Z]))for(let tt=0;tt<N.__webglFramebuffer[Z].length;tt++)r.deleteFramebuffer(N.__webglFramebuffer[Z][tt]);else r.deleteFramebuffer(N.__webglFramebuffer[Z]);N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer[Z])}else{if(Array.isArray(N.__webglFramebuffer))for(let Z=0;Z<N.__webglFramebuffer.length;Z++)r.deleteFramebuffer(N.__webglFramebuffer[Z]);else r.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&r.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Z=0;Z<N.__webglColorRenderbuffer.length;Z++)N.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(N.__webglColorRenderbuffer[Z]);N.__webglDepthRenderbuffer&&r.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Z=0,tt=S.length;Z<tt;Z++){const dt=n.get(S[Z]);dt.__webglTexture&&(r.deleteTexture(dt.__webglTexture),a.memory.textures--),n.remove(S[Z])}n.remove(S),n.remove(b)}let W=0;function k(){W=0}function K(){const b=W;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),W+=1,b}function j(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function $(b,S){const N=n.get(b);if(b.isVideoTexture&&pe(b),b.isRenderTargetTexture===!1&&b.version>0&&N.__version!==b.version){const Q=b.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(N,b,S);return}}e.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+S)}function L(b,S){const N=n.get(b);if(b.version>0&&N.__version!==b.version){Ct(N,b,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+S)}function z(b,S){const N=n.get(b);if(b.version>0&&N.__version!==b.version){Ct(N,b,S);return}e.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+S)}function at(b,S){const N=n.get(b);if(b.version>0&&N.__version!==b.version){ee(N,b,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+S)}const st={[yo]:r.REPEAT,[_n]:r.CLAMP_TO_EDGE,[Do]:r.MIRRORED_REPEAT},lt={[Te]:r.NEAREST,[Ol]:r.NEAREST_MIPMAP_NEAREST,[Ca]:r.NEAREST_MIPMAP_LINEAR,[an]:r.LINEAR,[qd]:r.LINEAR_MIPMAP_NEAREST,[Kr]:r.LINEAR_MIPMAP_LINEAR},vt={[af]:r.NEVER,[ff]:r.ALWAYS,[of]:r.LESS,[uf]:r.LEQUAL,[lf]:r.EQUAL,[df]:r.GEQUAL,[cf]:r.GREATER,[hf]:r.NOTEQUAL};function Ot(b,S,N){if(N?(r.texParameteri(b,r.TEXTURE_WRAP_S,st[S.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,st[S.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,st[S.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,lt[S.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,lt[S.minFilter])):(r.texParameteri(b,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(b,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==_n||S.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,r.TEXTURE_MAG_FILTER,A(S.magFilter)),r.texParameteri(b,r.TEXTURE_MIN_FILTER,A(S.minFilter)),S.minFilter!==Te&&S.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,vt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Q=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Te||S.minFilter!==Ca&&S.minFilter!==Kr||S.type===Kn&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Zr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(b,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function Dt(b,S){let N=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",V));const Q=S.source;let Z=p.get(Q);Z===void 0&&(Z={},p.set(Q,Z));const tt=j(S);if(tt!==b.__cacheKey){Z[tt]===void 0&&(Z[tt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[tt].usedTimes++;const dt=Z[b.__cacheKey];dt!==void 0&&(Z[b.__cacheKey].usedTimes--,dt.usedTimes===0&&R(S)),b.__cacheKey=tt,b.__webglTexture=Z[tt].texture}return N}function Ct(b,S,N){let Q=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=r.TEXTURE_3D);const Z=Dt(b,S),tt=S.source;e.bindTexture(Q,b.__webglTexture,r.TEXTURE0+N);const dt=n.get(tt);if(tt.version!==dt.__version||Z===!0){e.activeTexture(r.TEXTURE0+N);const it=Xt.getPrimaries(Xt.workingColorSpace),ut=S.colorSpace===ln?null:Xt.getPrimaries(S.colorSpace),xt=S.colorSpace===ln||it===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const kt=y(S)&&M(S.image)===!1;let J=x(S.image,kt,!1,c);J=Se(S,J);const Wt=M(J)||o,At=s.convert(S.format,S.colorSpace);let Et=s.convert(S.type),mt=P(S.internalFormat,At,Et,S.colorSpace,S.isVideoTexture);Ot(Q,S,Wt);let ht;const zt=S.mipmaps,C=o&&S.isVideoTexture!==!0,ot=dt.__version===void 0||Z===!0,et=v(S,J,Wt);if(S.isDepthTexture)mt=r.DEPTH_COMPONENT,o?S.type===Kn?mt=r.DEPTH_COMPONENT32F:S.type===jn?mt=r.DEPTH_COMPONENT24:S.type===Ai?mt=r.DEPTH24_STENCIL8:mt=r.DEPTH_COMPONENT16:S.type===Kn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===bi&&mt===r.DEPTH_COMPONENT&&S.type!==Jo&&S.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=jn,Et=s.convert(S.type)),S.format===vr&&mt===r.DEPTH_COMPONENT&&(mt=r.DEPTH_STENCIL,S.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ai,Et=s.convert(S.type))),ot&&(C?e.texStorage2D(r.TEXTURE_2D,1,mt,J.width,J.height):e.texImage2D(r.TEXTURE_2D,0,mt,J.width,J.height,0,At,Et,null));else if(S.isDataTexture)if(zt.length>0&&Wt){C&&ot&&e.texStorage2D(r.TEXTURE_2D,et,mt,zt[0].width,zt[0].height);for(let q=0,nt=zt.length;q<nt;q++)ht=zt[q],C?e.texSubImage2D(r.TEXTURE_2D,q,0,0,ht.width,ht.height,At,Et,ht.data):e.texImage2D(r.TEXTURE_2D,q,mt,ht.width,ht.height,0,At,Et,ht.data);S.generateMipmaps=!1}else C?(ot&&e.texStorage2D(r.TEXTURE_2D,et,mt,J.width,J.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,J.width,J.height,At,Et,J.data)):e.texImage2D(r.TEXTURE_2D,0,mt,J.width,J.height,0,At,Et,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){C&&ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,mt,zt[0].width,zt[0].height,J.depth);for(let q=0,nt=zt.length;q<nt;q++)ht=zt[q],S.format!==gn?At!==null?C?e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ht.width,ht.height,J.depth,At,ht.data,0,0):e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,mt,ht.width,ht.height,J.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,ht.width,ht.height,J.depth,At,Et,ht.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,mt,ht.width,ht.height,J.depth,0,At,Et,ht.data)}else{C&&ot&&e.texStorage2D(r.TEXTURE_2D,et,mt,zt[0].width,zt[0].height);for(let q=0,nt=zt.length;q<nt;q++)ht=zt[q],S.format!==gn?At!==null?C?e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,ht.width,ht.height,At,ht.data):e.compressedTexImage2D(r.TEXTURE_2D,q,mt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?e.texSubImage2D(r.TEXTURE_2D,q,0,0,ht.width,ht.height,At,Et,ht.data):e.texImage2D(r.TEXTURE_2D,q,mt,ht.width,ht.height,0,At,Et,ht.data)}else if(S.isDataArrayTexture)C?(ot&&e.texStorage3D(r.TEXTURE_2D_ARRAY,et,mt,J.width,J.height,J.depth),e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,At,Et,J.data)):e.texImage3D(r.TEXTURE_2D_ARRAY,0,mt,J.width,J.height,J.depth,0,At,Et,J.data);else if(S.isData3DTexture)C?(ot&&e.texStorage3D(r.TEXTURE_3D,et,mt,J.width,J.height,J.depth),e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,At,Et,J.data)):e.texImage3D(r.TEXTURE_3D,0,mt,J.width,J.height,J.depth,0,At,Et,J.data);else if(S.isFramebufferTexture){if(ot)if(C)e.texStorage2D(r.TEXTURE_2D,et,mt,J.width,J.height);else{let q=J.width,nt=J.height;for(let _t=0;_t<et;_t++)e.texImage2D(r.TEXTURE_2D,_t,mt,q,nt,0,At,Et,null),q>>=1,nt>>=1}}else if(zt.length>0&&Wt){C&&ot&&e.texStorage2D(r.TEXTURE_2D,et,mt,zt[0].width,zt[0].height);for(let q=0,nt=zt.length;q<nt;q++)ht=zt[q],C?e.texSubImage2D(r.TEXTURE_2D,q,0,0,At,Et,ht):e.texImage2D(r.TEXTURE_2D,q,mt,At,Et,ht);S.generateMipmaps=!1}else C?(ot&&e.texStorage2D(r.TEXTURE_2D,et,mt,J.width,J.height),e.texSubImage2D(r.TEXTURE_2D,0,0,0,At,Et,J)):e.texImage2D(r.TEXTURE_2D,0,mt,At,Et,J);w(S,Wt)&&T(Q),dt.__version=tt.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function ee(b,S,N){if(S.image.length!==6)return;const Q=Dt(b,S),Z=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+N);const tt=n.get(Z);if(Z.version!==tt.__version||Q===!0){e.activeTexture(r.TEXTURE0+N);const dt=Xt.getPrimaries(Xt.workingColorSpace),it=S.colorSpace===ln?null:Xt.getPrimaries(S.colorSpace),ut=S.colorSpace===ln||dt===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const xt=S.isCompressedTexture||S.image[0].isCompressedTexture,kt=S.image[0]&&S.image[0].isDataTexture,J=[];for(let q=0;q<6;q++)!xt&&!kt?J[q]=x(S.image[q],!1,!0,u):J[q]=kt?S.image[q].image:S.image[q],J[q]=Se(S,J[q]);const Wt=J[0],At=M(Wt)||o,Et=s.convert(S.format,S.colorSpace),mt=s.convert(S.type),ht=P(S.internalFormat,Et,mt,S.colorSpace),zt=o&&S.isVideoTexture!==!0,C=tt.__version===void 0||Q===!0;let ot=v(S,Wt,At);Ot(r.TEXTURE_CUBE_MAP,S,At);let et;if(xt){zt&&C&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ht,Wt.width,Wt.height);for(let q=0;q<6;q++){et=J[q].mipmaps;for(let nt=0;nt<et.length;nt++){const _t=et[nt];S.format!==gn?Et!==null?zt?e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt,0,0,_t.width,_t.height,Et,_t.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt,ht,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt,0,0,_t.width,_t.height,Et,mt,_t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt,ht,_t.width,_t.height,0,Et,mt,_t.data)}}}else{et=S.mipmaps,zt&&C&&(et.length>0&&ot++,e.texStorage2D(r.TEXTURE_CUBE_MAP,ot,ht,J[0].width,J[0].height));for(let q=0;q<6;q++)if(kt){zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,J[q].width,J[q].height,Et,mt,J[q].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ht,J[q].width,J[q].height,0,Et,mt,J[q].data);for(let nt=0;nt<et.length;nt++){const Vt=et[nt].image[q].image;zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt+1,0,0,Vt.width,Vt.height,Et,mt,Vt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt+1,ht,Vt.width,Vt.height,0,Et,mt,Vt.data)}}else{zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Et,mt,J[q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,ht,Et,mt,J[q]);for(let nt=0;nt<et.length;nt++){const _t=et[nt];zt?e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt+1,0,0,Et,mt,_t.image[q]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,nt+1,ht,Et,mt,_t.image[q])}}}w(S,At)&&T(r.TEXTURE_CUBE_MAP),tt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Lt(b,S,N,Q,Z,tt){const dt=s.convert(N.format,N.colorSpace),it=s.convert(N.type),ut=P(N.internalFormat,dt,it,N.colorSpace);if(!n.get(S).__hasExternalTextures){const kt=Math.max(1,S.width>>tt),J=Math.max(1,S.height>>tt);Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?e.texImage3D(Z,tt,ut,kt,J,S.depth,0,dt,it,null):e.texImage2D(Z,tt,ut,kt,J,0,dt,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,b),qt(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Q,Z,n.get(N).__webglTexture,0,Ut(S)):(Z===r.TEXTURE_2D||Z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Q,Z,n.get(N).__webglTexture,tt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function I(b,S,N){if(r.bindRenderbuffer(r.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let Q=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(N||qt(S)){const Z=S.depthTexture;Z&&Z.isDepthTexture&&(Z.type===Kn?Q=r.DEPTH_COMPONENT32F:Z.type===jn&&(Q=r.DEPTH_COMPONENT24));const tt=Ut(S);qt(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,tt,Q,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,tt,Q,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,Q,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const Q=Ut(S);N&&qt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,S.width,S.height):qt(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Q,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,b)}else{const Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0;Z<Q.length;Z++){const tt=Q[Z],dt=s.convert(tt.format,tt.colorSpace),it=s.convert(tt.type),ut=P(tt.internalFormat,dt,it,tt.colorSpace),xt=Ut(S);N&&qt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,ut,S.width,S.height):qt(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,xt,ut,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ut,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function We(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const Q=n.get(S.depthTexture).__webglTexture,Z=Ut(S);if(S.depthTexture.format===bi)qt(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(S.depthTexture.format===vr)qt(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function pt(b){const S=n.get(b),N=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");We(S.__webglFramebuffer,b)}else if(N){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=r.createRenderbuffer(),I(S.__webglDepthbuffer[Q],b,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),I(S.__webglDepthbuffer,b,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(b,S,N){const Q=n.get(b);S!==void 0&&Lt(Q.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&pt(b)}function yt(b){const S=b.texture,N=n.get(b),Q=n.get(S);b.addEventListener("dispose",X),b.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=r.createTexture()),Q.__version=S.version,a.memory.textures++);const Z=b.isWebGLCubeRenderTarget===!0,tt=b.isWebGLMultipleRenderTargets===!0,dt=M(b)||o;if(Z){N.__webglFramebuffer=[];for(let it=0;it<6;it++)if(o&&S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer[it]=[];for(let ut=0;ut<S.mipmaps.length;ut++)N.__webglFramebuffer[it][ut]=r.createFramebuffer()}else N.__webglFramebuffer[it]=r.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){N.__webglFramebuffer=[];for(let it=0;it<S.mipmaps.length;it++)N.__webglFramebuffer[it]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(tt)if(i.drawBuffers){const it=b.texture;for(let ut=0,xt=it.length;ut<xt;ut++){const kt=n.get(it[ut]);kt.__webglTexture===void 0&&(kt.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&qt(b)===!1){const it=tt?S:[S];N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ut=0;ut<it.length;ut++){const xt=it[ut];N.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[ut]);const kt=s.convert(xt.format,xt.colorSpace),J=s.convert(xt.type),Wt=P(xt.internalFormat,kt,J,xt.colorSpace,b.isXRRenderTarget===!0),At=Ut(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,At,Wt,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,N.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),I(N.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture),Ot(r.TEXTURE_CUBE_MAP,S,dt);for(let it=0;it<6;it++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)Lt(N.__webglFramebuffer[it][ut],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,ut);else Lt(N.__webglFramebuffer[it],b,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);w(S,dt)&&T(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){const it=b.texture;for(let ut=0,xt=it.length;ut<xt;ut++){const kt=it[ut],J=n.get(kt);e.bindTexture(r.TEXTURE_2D,J.__webglTexture),Ot(r.TEXTURE_2D,kt,dt),Lt(N.__webglFramebuffer,b,kt,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,0),w(kt,dt)&&T(r.TEXTURE_2D)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?it=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(it,Q.__webglTexture),Ot(it,S,dt),o&&S.mipmaps&&S.mipmaps.length>0)for(let ut=0;ut<S.mipmaps.length;ut++)Lt(N.__webglFramebuffer[ut],b,S,r.COLOR_ATTACHMENT0,it,ut);else Lt(N.__webglFramebuffer,b,S,r.COLOR_ATTACHMENT0,it,0);w(S,dt)&&T(it),e.unbindTexture()}b.depthBuffer&&pt(b)}function ne(b){const S=M(b)||o,N=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0,Z=N.length;Q<Z;Q++){const tt=N[Q];if(w(tt,S)){const dt=b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,it=n.get(tt).__webglTexture;e.bindTexture(dt,it),T(dt),e.unbindTexture()}}}function Ft(b){if(o&&b.samples>0&&qt(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],N=b.width,Q=b.height;let Z=r.COLOR_BUFFER_BIT;const tt=[],dt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=n.get(b),ut=b.isWebGLMultipleRenderTargets===!0;if(ut)for(let xt=0;xt<S.length;xt++)e.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,it.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,it.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,it.__webglFramebuffer);for(let xt=0;xt<S.length;xt++){tt.push(r.COLOR_ATTACHMENT0+xt),b.depthBuffer&&tt.push(dt);const kt=it.__ignoreDepthValues!==void 0?it.__ignoreDepthValues:!1;if(kt===!1&&(b.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),ut&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,it.__webglColorRenderbuffer[xt]),kt===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[dt]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[dt])),ut){const J=n.get(S[xt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,J,0)}r.blitFramebuffer(0,0,N,Q,0,0,N,Q,Z,r.NEAREST),m&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let xt=0;xt<S.length;xt++){e.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.RENDERBUFFER,it.__webglColorRenderbuffer[xt]);const kt=n.get(S[xt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,it.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+xt,r.TEXTURE_2D,kt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,it.__webglMultisampledFramebuffer)}}function Ut(b){return Math.min(h,b.samples)}function qt(b){const S=n.get(b);return o&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(b){const S=a.render.frame;g.get(b)!==S&&(g.set(b,S),b.update())}function Se(b,S){const N=b.colorSpace,Q=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===To||N!==Hn&&N!==ln&&(Xt.getTransfer(N)===Kt?o===!1?t.has("EXT_sRGB")===!0&&Q===gn?(b.format=To,b.minFilter=an,b.generateMipmaps=!1):S=Oc.sRGBToLinear(S):(Q!==gn||Z!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),S}this.allocateTextureUnit=K,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=L,this.setTexture3D=z,this.setTextureCube=at,this.rebindTextures=Tt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Lt,this.useMultisampledRTT=qt}function h0(r,t,e){const n=e.isWebGL2;function i(s,a=ln){let o;const l=Xt.getTransfer(a);if(s===ni)return r.UNSIGNED_BYTE;if(s===Cc)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Rc)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Yd)return r.BYTE;if(s===$d)return r.SHORT;if(s===Jo)return r.UNSIGNED_SHORT;if(s===wc)return r.INT;if(s===jn)return r.UNSIGNED_INT;if(s===Kn)return r.FLOAT;if(s===Zr)return n?r.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===jd)return r.ALPHA;if(s===gn)return r.RGBA;if(s===Kd)return r.LUMINANCE;if(s===Zd)return r.LUMINANCE_ALPHA;if(s===bi)return r.DEPTH_COMPONENT;if(s===vr)return r.DEPTH_STENCIL;if(s===To)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Jd)return r.RED;if(s===Pc)return r.RED_INTEGER;if(s===Qd)return r.RG;if(s===Lc)return r.RG_INTEGER;if(s===Fc)return r.RGBA_INTEGER;if(s===Ra||s===Pa||s===La||s===Fa)if(l===Kt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ra)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Pa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===La)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Fa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ra)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Pa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===La)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Fa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bl||s===zl||s===Gl||s===Hl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Bl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===zl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tf)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===kl||s===Vl)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===kl)return l===Kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Vl)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Wl||s===Xl||s===ql||s===Yl||s===$l||s===jl||s===Kl||s===Zl||s===Jl||s===Ql||s===tu||s===eu||s===nu||s===iu)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Wl)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Xl)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ql)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Yl)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$l)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===jl)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Kl)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Zl)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jl)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ql)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tu)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===eu)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nu)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===iu)return l===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ua||s===ru||s===su)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===Ua)return l===Kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ru)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===su)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ef||s===au||s===ou||s===lu)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ua)return o.COMPRESSED_RED_RGTC1_EXT;if(s===au)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ou)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lu)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ai?n?r.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class d0 extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}let Hr=class extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}};const f0={type:"move"};class so{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),f=this._getHandJoint(u,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),m=.02,g=.005;u.inputState.pinching&&d>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&d<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Hr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class p0 extends Be{constructor(t,e,n,i,s,a,o,l,u,c){if(c=c!==void 0?c:bi,c!==bi&&c!==vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===bi&&(n=jn),n===void 0&&c===vr&&(n=Ai),super(null,i,s,a,o,l,c,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Te,this.minFilter=l!==void 0?l:Te,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class m0 extends Ar{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,h=null,d=null,m=null,g=null;const _=e.getContextAttributes();let p=null,f=null;const E=[],x=[],M=new on;M.layers.enable(1),M.viewport=new ve;const y=new on;y.layers.enable(2),y.viewport=new ve;const w=[M,y],T=new d0;T.layers.enable(1),T.layers.enable(2);let P=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let z=E[L];return z===void 0&&(z=new so,E[L]=z),z.getTargetRaySpace()},this.getControllerGrip=function(L){let z=E[L];return z===void 0&&(z=new so,E[L]=z),z.getGripSpace()},this.getHand=function(L){let z=E[L];return z===void 0&&(z=new so,E[L]=z),z.getHandSpace()};function A(L){const z=x.indexOf(L.inputSource);if(z===-1)return;const at=E[z];at!==void 0&&(at.update(L.inputSource,L.frame,u||a),at.dispatchEvent({type:L.type,data:L.inputSource}))}function V(){i.removeEventListener("select",A),i.removeEventListener("selectstart",A),i.removeEventListener("selectend",A),i.removeEventListener("squeeze",A),i.removeEventListener("squeezestart",A),i.removeEventListener("squeezeend",A),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",X);for(let L=0;L<E.length;L++){const z=x[L];z!==null&&(x[L]=null,E[L].disconnect(z))}P=null,v=null,t.setRenderTarget(p),m=null,d=null,h=null,i=null,f=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){o=L,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(L){u=L},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(L){if(i=L,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",A),i.addEventListener("selectstart",A),i.addEventListener("selectend",A),i.addEventListener("squeeze",A),i.addEventListener("squeezestart",A),i.addEventListener("squeezeend",A),i.addEventListener("end",V),i.addEventListener("inputsourceschange",X),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,e,z),i.updateRenderState({baseLayer:m}),f=new Ii(m.framebufferWidth,m.framebufferHeight,{format:gn,type:ni,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let z=null,at=null,st=null;_.depth&&(st=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,z=_.stencil?vr:bi,at=_.stencil?Ai:jn);const lt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};h=new XRWebGLBinding(i,e),d=h.createProjectionLayer(lt),i.updateRenderState({layers:[d]}),f=new Ii(d.textureWidth,d.textureHeight,{format:gn,type:ni,depthTexture:new p0(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const vt=t.properties.get(f);vt.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await i.requestReferenceSpace(o),$.setContext(i),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function X(L){for(let z=0;z<L.removed.length;z++){const at=L.removed[z],st=x.indexOf(at);st>=0&&(x[st]=null,E[st].disconnect(at))}for(let z=0;z<L.added.length;z++){const at=L.added[z];let st=x.indexOf(at);if(st===-1){for(let vt=0;vt<E.length;vt++)if(vt>=x.length){x.push(at),st=vt;break}else if(x[vt]===null){x[vt]=at,st=vt;break}if(st===-1)break}const lt=E[st];lt&&lt.connect(at)}}const Y=new U,R=new U;function B(L,z,at){Y.setFromMatrixPosition(z.matrixWorld),R.setFromMatrixPosition(at.matrixWorld);const st=Y.distanceTo(R),lt=z.projectionMatrix.elements,vt=at.projectionMatrix.elements,Ot=lt[14]/(lt[10]-1),Dt=lt[14]/(lt[10]+1),Ct=(lt[9]+1)/lt[5],ee=(lt[9]-1)/lt[5],Lt=(lt[8]-1)/lt[0],I=(vt[8]+1)/vt[0],We=Ot*Lt,pt=Ot*I,Tt=st/(-Lt+I),yt=Tt*-Lt;z.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(yt),L.translateZ(Tt),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const ne=Ot+Tt,Ft=Dt+Tt,Ut=We-yt,qt=pt+(st-yt),pe=Ct*Dt/Ft*ne,Se=ee*Dt/Ft*ne;L.projectionMatrix.makePerspective(Ut,qt,pe,Se,ne,Ft),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function W(L,z){z===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(z.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(i===null)return;T.near=y.near=M.near=L.near,T.far=y.far=M.far=L.far,(P!==T.near||v!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,v=T.far);const z=L.parent,at=T.cameras;W(T,z);for(let st=0;st<at.length;st++)W(at[st],z);at.length===2?B(T,M,y):T.projectionMatrix.copy(M.projectionMatrix),k(L,T,z)};function k(L,z,at){at===null?L.matrix.copy(z.matrixWorld):(L.matrix.copy(at.matrixWorld),L.matrix.invert(),L.matrix.multiply(z.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(z.projectionMatrix),L.projectionMatrixInverse.copy(z.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=Ao*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=L)};let K=null;function j(L,z){if(c=z.getViewerPose(u||a),g=z,c!==null){const at=c.views;m!==null&&(t.setRenderTargetFramebuffer(f,m.framebuffer),t.setRenderTarget(f));let st=!1;at.length!==T.cameras.length&&(T.cameras.length=0,st=!0);for(let lt=0;lt<at.length;lt++){const vt=at[lt];let Ot=null;if(m!==null)Ot=m.getViewport(vt);else{const Ct=h.getViewSubImage(d,vt);Ot=Ct.viewport,lt===0&&(t.setRenderTargetTextures(f,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(f))}let Dt=w[lt];Dt===void 0&&(Dt=new on,Dt.layers.enable(lt),Dt.viewport=new ve,w[lt]=Dt),Dt.matrix.fromArray(vt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(vt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),lt===0&&(T.matrix.copy(Dt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),st===!0&&T.cameras.push(Dt)}}for(let at=0;at<E.length;at++){const st=x[at],lt=E[at];st!==null&&lt!==void 0&&lt.update(st,z,u||a)}K&&K(L,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),g=null}const $=new qc;$.setAnimationLoop(j),this.setAnimationLoop=function(L){K=L},this.dispose=function(){}}}function _0(r,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,Vc(r)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,E,x,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),h(p,f)):f.isMeshPhongMaterial?(s(p,f),c(p,f)):f.isMeshStandardMaterial?(s(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,M)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),_(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(a(p,f),f.isLineDashedMaterial&&o(p,f)):f.isPointsMaterial?l(p,f,E,x):f.isSpriteMaterial?u(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Oe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Oe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=t.get(f).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;const x=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*x,e(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function o(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,E,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=x*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const E=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function g0(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,x){const M=x.program;n.uniformBlockBinding(E,M)}function u(E,x){let M=i[E.id];M===void 0&&(g(E),M=c(E),i[E.id]=M,E.addEventListener("dispose",p));const y=x.program;n.updateUBOMapping(E,y);const w=t.render.frame;s[E.id]!==w&&(d(E),s[E.id]=w)}function c(E){const x=h();E.__bindingPointIndex=x;const M=r.createBuffer(),y=E.__size,w=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,y,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function h(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const x=i[E.id],M=E.uniforms,y=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,T=M.length;w<T;w++){const P=M[w];if(m(P,w,y)===!0){const v=P.__offset,A=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let X=0;X<A.length;X++){const Y=A[X],R=_(Y);typeof Y=="number"?(P.__data[0]=Y,r.bufferSubData(r.UNIFORM_BUFFER,v+V,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=Y.elements[0],P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=Y.elements[0],P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=Y.elements[0]):(Y.toArray(P.__data,V),V+=R.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,v,P.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function m(E,x,M){const y=E.value;if(M[x]===void 0){if(typeof y=="number")M[x]=y;else{const w=Array.isArray(y)?y:[y],T=[];for(let P=0;P<w.length;P++)T.push(w[P].clone());M[x]=T}return!0}else if(typeof y=="number"){if(M[x]!==y)return M[x]=y,!0}else{const w=Array.isArray(M[x])?M[x]:[M[x]],T=Array.isArray(y)?y:[y];for(let P=0;P<w.length;P++){const v=w[P];if(v.equals(T[P])===!1)return v.copy(T[P]),!0}}return!1}function g(E){const x=E.uniforms;let M=0;const y=16;let w=0;for(let T=0,P=x.length;T<P;T++){const v=x[T],A={boundary:0,storage:0},V=Array.isArray(v.value)?v.value:[v.value];for(let X=0,Y=V.length;X<Y;X++){const R=V[X],B=_(R);A.boundary+=B.boundary,A.storage+=B.storage}if(v.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=M,T>0){w=M%y;const X=y-w;w!==0&&X-A.boundary<0&&(M+=y-w,v.__offset=M)}M+=A.storage}return w=M%y,w>0&&(M+=y-w),E.__size=M,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function p(E){const x=E.target;x.removeEventListener("dispose",p);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function f(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:u,dispose:f}}class Jc{constructor(t={}){const{canvas:e=mf(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const f=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this._useLegacyLights=!1,this.toneMapping=ei,this.toneMappingExposure=1;const x=this;let M=!1,y=0,w=0,T=null,P=-1,v=null;const A=new ve,V=new ve;let X=null;const Y=new Gt(0);let R=0,B=e.width,W=e.height,k=1,K=null,j=null;const $=new ve(0,0,B,W),L=new ve(0,0,B,W);let z=!1;const at=new nl;let st=!1,lt=!1,vt=null;const Ot=new he,Dt=new Ht,Ct=new U,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return T===null?k:1}let I=n;function We(D,F){for(let O=0;O<D.length;O++){const G=D[O],H=e.getContext(G,F);if(H!==null)return H}return null}try{const D={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zo}`),e.addEventListener("webglcontextlost",zt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",ot,!1),I===null){const F=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&F.shift(),I=We(F,D),I===null)throw We(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let pt,Tt,yt,ne,Ft,Ut,qt,pe,Se,b,S,N,Q,Z,tt,dt,it,ut,xt,kt,J,Wt,At,Et;function mt(){pt=new b_(I),Tt=new M_(I,pt,t),pt.init(Tt),Wt=new h0(I,pt,Tt),yt=new u0(I,pt,Tt),ne=new R_(I),Ft=new jg,Ut=new c0(I,pt,yt,Ft,Tt,Wt,ne),qt=new y_(x),pe=new A_(x),Se=new Gf(I,Tt),At=new x_(I,pt,Se,Tt),b=new w_(I,Se,ne,At),S=new U_(I,b,Se,ne),xt=new F_(I,Tt,Ut),dt=new S_(Ft),N=new $g(x,qt,pe,pt,Tt,At,dt),Q=new _0(x,Ft),Z=new Zg,tt=new i0(pt,Tt),ut=new v_(x,qt,pe,yt,S,d,l),it=new l0(x,S,Tt),Et=new g0(I,ne,Tt,yt),kt=new E_(I,pt,ne,Tt),J=new C_(I,pt,ne,Tt),ne.programs=N.programs,x.capabilities=Tt,x.extensions=pt,x.properties=Ft,x.renderLists=Z,x.shadowMap=it,x.state=yt,x.info=ne}mt();const ht=new m0(x,I);this.xr=ht,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const D=pt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=pt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(D){D!==void 0&&(k=D,this.setSize(B,W,!1))},this.getSize=function(D){return D.set(B,W)},this.setSize=function(D,F,O=!0){if(ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,W=F,e.width=Math.floor(D*k),e.height=Math.floor(F*k),O===!0&&(e.style.width=D+"px",e.style.height=F+"px"),this.setViewport(0,0,D,F)},this.getDrawingBufferSize=function(D){return D.set(B*k,W*k).floor()},this.setDrawingBufferSize=function(D,F,O){B=D,W=F,k=O,e.width=Math.floor(D*O),e.height=Math.floor(F*O),this.setViewport(0,0,D,F)},this.getCurrentViewport=function(D){return D.copy(A)},this.getViewport=function(D){return D.copy($)},this.setViewport=function(D,F,O,G){D.isVector4?$.set(D.x,D.y,D.z,D.w):$.set(D,F,O,G),yt.viewport(A.copy($).multiplyScalar(k).floor())},this.getScissor=function(D){return D.copy(L)},this.setScissor=function(D,F,O,G){D.isVector4?L.set(D.x,D.y,D.z,D.w):L.set(D,F,O,G),yt.scissor(V.copy(L).multiplyScalar(k).floor())},this.getScissorTest=function(){return z},this.setScissorTest=function(D){yt.setScissorTest(z=D)},this.setOpaqueSort=function(D){K=D},this.setTransparentSort=function(D){j=D},this.getClearColor=function(D){return D.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(D=!0,F=!0,O=!0){let G=0;if(D){let H=!1;if(T!==null){const ct=T.texture.format;H=ct===Fc||ct===Lc||ct===Pc}if(H){const ct=T.texture.type,ft=ct===ni||ct===jn||ct===Jo||ct===Ai||ct===Cc||ct===Rc,gt=ut.getClearColor(),Mt=ut.getClearAlpha(),Pt=gt.r,bt=gt.g,wt=gt.b;ft?(m[0]=Pt,m[1]=bt,m[2]=wt,m[3]=Mt,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=Pt,g[1]=bt,g[2]=wt,g[3]=Mt,I.clearBufferiv(I.COLOR,0,g))}else G|=I.COLOR_BUFFER_BIT}F&&(G|=I.DEPTH_BUFFER_BIT),O&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",zt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Z.dispose(),tt.dispose(),Ft.dispose(),qt.dispose(),pe.dispose(),S.dispose(),At.dispose(),Et.dispose(),N.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",nn),ht.removeEventListener("sessionend",$t),vt&&(vt.dispose(),vt=null),Re.stop()};function zt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const D=ne.autoReset,F=it.enabled,O=it.autoUpdate,G=it.needsUpdate,H=it.type;mt(),ne.autoReset=D,it.enabled=F,it.autoUpdate=O,it.needsUpdate=G,it.type=H}function ot(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function et(D){const F=D.target;F.removeEventListener("dispose",et),q(F)}function q(D){nt(D),Ft.remove(D)}function nt(D){const F=Ft.get(D).programs;F!==void 0&&(F.forEach(function(O){N.releaseProgram(O)}),D.isShaderMaterial&&N.releaseShaderCache(D))}this.renderBufferDirect=function(D,F,O,G,H,ct){F===null&&(F=ee);const ft=H.isMesh&&H.matrixWorld.determinant()<0,gt=ud(D,F,O,G,H);yt.setMaterial(G,ft);let Mt=O.index,Pt=1;if(G.wireframe===!0){if(Mt=b.getWireframeAttribute(O),Mt===void 0)return;Pt=2}const bt=O.drawRange,wt=O.attributes.position;let se=bt.start*Pt,Xe=(bt.start+bt.count)*Pt;ct!==null&&(se=Math.max(se,ct.start*Pt),Xe=Math.min(Xe,(ct.start+ct.count)*Pt)),Mt!==null?(se=Math.max(se,0),Xe=Math.min(Xe,Mt.count)):wt!=null&&(se=Math.max(se,0),Xe=Math.min(Xe,wt.count));const me=Xe-se;if(me<0||me===1/0)return;At.setup(H,G,gt,O,Mt);let Rn,ie=kt;if(Mt!==null&&(Rn=Se.get(Mt),ie=J,ie.setIndex(Rn)),H.isMesh)G.wireframe===!0?(yt.setLineWidth(G.wireframeLinewidth*Lt()),ie.setMode(I.LINES)):ie.setMode(I.TRIANGLES);else if(H.isLine){let Nt=G.linewidth;Nt===void 0&&(Nt=1),yt.setLineWidth(Nt*Lt()),H.isLineSegments?ie.setMode(I.LINES):H.isLineLoop?ie.setMode(I.LINE_LOOP):ie.setMode(I.LINE_STRIP)}else H.isPoints?ie.setMode(I.POINTS):H.isSprite&&ie.setMode(I.TRIANGLES);if(H.isInstancedMesh)ie.renderInstances(se,me,H.count);else if(O.isInstancedBufferGeometry){const Nt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ta=Math.min(O.instanceCount,Nt);ie.renderInstances(se,me,Ta)}else ie.render(se,me)};function _t(D,F,O){D.transparent===!0&&D.side===zn&&D.forceSinglePass===!1?(D.side=Oe,D.needsUpdate=!0,gs(D,F,O),D.side=si,D.needsUpdate=!0,gs(D,F,O),D.side=zn):gs(D,F,O)}this.compile=function(D,F,O=null){O===null&&(O=D),p=tt.get(O),p.init(),E.push(p),O.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),D!==O&&D.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights(x._useLegacyLights);const G=new Set;return D.traverse(function(H){const ct=H.material;if(ct)if(Array.isArray(ct))for(let ft=0;ft<ct.length;ft++){const gt=ct[ft];_t(gt,O,H),G.add(gt)}else _t(ct,O,H),G.add(ct)}),E.pop(),p=null,G},this.compileAsync=function(D,F,O=null){const G=this.compile(D,F,O);return new Promise(H=>{function ct(){if(G.forEach(function(ft){Ft.get(ft).currentProgram.isReady()&&G.delete(ft)}),G.size===0){H(D);return}setTimeout(ct,10)}pt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Vt=null;function oe(D){Vt&&Vt(D)}function nn(){Re.stop()}function $t(){Re.start()}const Re=new qc;Re.setAnimationLoop(oe),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(D){Vt=D,ht.setAnimationLoop(D),D===null?Re.stop():Re.start()},ht.addEventListener("sessionstart",nn),ht.addEventListener("sessionend",$t),this.render=function(D,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(F),F=ht.getCamera()),D.isScene===!0&&D.onBeforeRender(x,D,F,T),p=tt.get(D,E.length),p.init(),E.push(p),Ot.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),at.setFromProjectionMatrix(Ot),lt=this.localClippingEnabled,st=dt.init(this.clippingPlanes,lt),_=Z.get(D,f.length),_.init(),f.push(_),En(D,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(K,j),this.info.render.frame++,st===!0&&dt.beginShadows();const O=p.state.shadowsArray;if(it.render(O,D,F),st===!0&&dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ut.render(_,D),p.setupLights(x._useLegacyLights),F.isArrayCamera){const G=F.cameras;for(let H=0,ct=G.length;H<ct;H++){const ft=G[H];Tl(_,D,ft,ft.viewport)}}else Tl(_,D,F);T!==null&&(Ut.updateMultisampleRenderTarget(T),Ut.updateRenderTargetMipmap(T)),D.isScene===!0&&D.onAfterRender(x,D,F),At.resetDefaultState(),P=-1,v=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function En(D,F,O,G){if(D.visible===!1)return;if(D.layers.test(F.layers)){if(D.isGroup)O=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(F);else if(D.isLight)p.pushLight(D),D.castShadow&&p.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||at.intersectsSprite(D)){G&&Ct.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Ot);const ft=S.update(D),gt=D.material;gt.visible&&_.push(D,ft,gt,O,Ct.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||at.intersectsObject(D))){const ft=S.update(D),gt=D.material;if(G&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Ct.copy(D.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ct.copy(ft.boundingSphere.center)),Ct.applyMatrix4(D.matrixWorld).applyMatrix4(Ot)),Array.isArray(gt)){const Mt=ft.groups;for(let Pt=0,bt=Mt.length;Pt<bt;Pt++){const wt=Mt[Pt],se=gt[wt.materialIndex];se&&se.visible&&_.push(D,ft,se,O,Ct.z,wt)}}else gt.visible&&_.push(D,ft,gt,O,Ct.z,null)}}const ct=D.children;for(let ft=0,gt=ct.length;ft<gt;ft++)En(ct[ft],F,O,G)}function Tl(D,F,O,G){const H=D.opaque,ct=D.transmissive,ft=D.transparent;p.setupLightsView(O),st===!0&&dt.setGlobalState(x.clippingPlanes,O),ct.length>0&&ld(H,ct,F,O),G&&yt.viewport(A.copy(G)),H.length>0&&_s(H,F,O),ct.length>0&&_s(ct,F,O),ft.length>0&&_s(ft,F,O),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function ld(D,F,O,G){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const ct=Tt.isWebGL2;vt===null&&(vt=new Ii(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")?Zr:ni,minFilter:Kr,samples:ct?4:0})),x.getDrawingBufferSize(Dt),ct?vt.setSize(Dt.x,Dt.y):vt.setSize(bo(Dt.x),bo(Dt.y));const ft=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(Y),R=x.getClearAlpha(),R<1&&x.setClearColor(16777215,.5),x.clear();const gt=x.toneMapping;x.toneMapping=ei,_s(D,O,G),Ut.updateMultisampleRenderTarget(vt),Ut.updateRenderTargetMipmap(vt);let Mt=!1;for(let Pt=0,bt=F.length;Pt<bt;Pt++){const wt=F[Pt],se=wt.object,Xe=wt.geometry,me=wt.material,Rn=wt.group;if(me.side===zn&&se.layers.test(G.layers)){const ie=me.side;me.side=Oe,me.needsUpdate=!0,Al(se,O,G,Xe,me,Rn),me.side=ie,me.needsUpdate=!0,Mt=!0}}Mt===!0&&(Ut.updateMultisampleRenderTarget(vt),Ut.updateRenderTargetMipmap(vt)),x.setRenderTarget(ft),x.setClearColor(Y,R),x.toneMapping=gt}function _s(D,F,O){const G=F.isScene===!0?F.overrideMaterial:null;for(let H=0,ct=D.length;H<ct;H++){const ft=D[H],gt=ft.object,Mt=ft.geometry,Pt=G===null?ft.material:G,bt=ft.group;gt.layers.test(O.layers)&&Al(gt,F,O,Mt,Pt,bt)}}function Al(D,F,O,G,H,ct){D.onBeforeRender(x,F,O,G,H,ct),D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),H.onBeforeRender(x,F,O,G,D,ct),H.transparent===!0&&H.side===zn&&H.forceSinglePass===!1?(H.side=Oe,H.needsUpdate=!0,x.renderBufferDirect(O,F,G,H,D,ct),H.side=si,H.needsUpdate=!0,x.renderBufferDirect(O,F,G,H,D,ct),H.side=zn):x.renderBufferDirect(O,F,G,H,D,ct),D.onAfterRender(x,F,O,G,H,ct)}function gs(D,F,O){F.isScene!==!0&&(F=ee);const G=Ft.get(D),H=p.state.lights,ct=p.state.shadowsArray,ft=H.state.version,gt=N.getParameters(D,H.state,ct,F,O),Mt=N.getProgramCacheKey(gt);let Pt=G.programs;G.environment=D.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(D.isMeshStandardMaterial?pe:qt).get(D.envMap||G.environment),Pt===void 0&&(D.addEventListener("dispose",et),Pt=new Map,G.programs=Pt);let bt=Pt.get(Mt);if(bt!==void 0){if(G.currentProgram===bt&&G.lightsStateVersion===ft)return wl(D,gt),bt}else gt.uniforms=N.getUniforms(D),D.onBuild(O,gt,x),D.onBeforeCompile(gt,x),bt=N.acquireProgram(gt,Mt),Pt.set(Mt,bt),G.uniforms=gt.uniforms;const wt=G.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(wt.clippingPlanes=dt.uniform),wl(D,gt),G.needsLights=hd(D),G.lightsStateVersion=ft,G.needsLights&&(wt.ambientLightColor.value=H.state.ambient,wt.lightProbe.value=H.state.probe,wt.directionalLights.value=H.state.directional,wt.directionalLightShadows.value=H.state.directionalShadow,wt.spotLights.value=H.state.spot,wt.spotLightShadows.value=H.state.spotShadow,wt.rectAreaLights.value=H.state.rectArea,wt.ltc_1.value=H.state.rectAreaLTC1,wt.ltc_2.value=H.state.rectAreaLTC2,wt.pointLights.value=H.state.point,wt.pointLightShadows.value=H.state.pointShadow,wt.hemisphereLights.value=H.state.hemi,wt.directionalShadowMap.value=H.state.directionalShadowMap,wt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,wt.spotShadowMap.value=H.state.spotShadowMap,wt.spotLightMatrix.value=H.state.spotLightMatrix,wt.spotLightMap.value=H.state.spotLightMap,wt.pointShadowMap.value=H.state.pointShadowMap,wt.pointShadowMatrix.value=H.state.pointShadowMatrix),G.currentProgram=bt,G.uniformsList=null,bt}function bl(D){if(D.uniformsList===null){const F=D.currentProgram.getUniforms();D.uniformsList=Ws.seqWithValue(F.seq,D.uniforms)}return D.uniformsList}function wl(D,F){const O=Ft.get(D);O.outputColorSpace=F.outputColorSpace,O.instancing=F.instancing,O.instancingColor=F.instancingColor,O.skinning=F.skinning,O.morphTargets=F.morphTargets,O.morphNormals=F.morphNormals,O.morphColors=F.morphColors,O.morphTargetsCount=F.morphTargetsCount,O.numClippingPlanes=F.numClippingPlanes,O.numIntersection=F.numClipIntersection,O.vertexAlphas=F.vertexAlphas,O.vertexTangents=F.vertexTangents,O.toneMapping=F.toneMapping}function ud(D,F,O,G,H){F.isScene!==!0&&(F=ee),Ut.resetTextureUnits();const ct=F.fog,ft=G.isMeshStandardMaterial?F.environment:null,gt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Hn,Mt=(G.isMeshStandardMaterial?pe:qt).get(G.envMap||ft),Pt=G.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,bt=!!O.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),wt=!!O.morphAttributes.position,se=!!O.morphAttributes.normal,Xe=!!O.morphAttributes.color;let me=ei;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(me=x.toneMapping);const Rn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ie=Rn!==void 0?Rn.length:0,Nt=Ft.get(G),Ta=p.state.lights;if(st===!0&&(lt===!0||D!==v)){const qe=D===v&&G.id===P;dt.setState(G,D,qe)}let le=!1;G.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ta.state.version||Nt.outputColorSpace!==gt||H.isInstancedMesh&&Nt.instancing===!1||!H.isInstancedMesh&&Nt.instancing===!0||H.isSkinnedMesh&&Nt.skinning===!1||!H.isSkinnedMesh&&Nt.skinning===!0||H.isInstancedMesh&&Nt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Nt.instancingColor===!1&&H.instanceColor!==null||Nt.envMap!==Mt||G.fog===!0&&Nt.fog!==ct||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==dt.numPlanes||Nt.numIntersection!==dt.numIntersection)||Nt.vertexAlphas!==Pt||Nt.vertexTangents!==bt||Nt.morphTargets!==wt||Nt.morphNormals!==se||Nt.morphColors!==Xe||Nt.toneMapping!==me||Tt.isWebGL2===!0&&Nt.morphTargetsCount!==ie)&&(le=!0):(le=!0,Nt.__version=G.version);let hi=Nt.currentProgram;le===!0&&(hi=gs(G,F,H));let Cl=!1,Fr=!1,Aa=!1;const Pe=hi.getUniforms(),di=Nt.uniforms;if(yt.useProgram(hi.program)&&(Cl=!0,Fr=!0,Aa=!0),G.id!==P&&(P=G.id,Fr=!0),Cl||v!==D){Pe.setValue(I,"projectionMatrix",D.projectionMatrix),Pe.setValue(I,"viewMatrix",D.matrixWorldInverse);const qe=Pe.map.cameraPosition;qe!==void 0&&qe.setValue(I,Ct.setFromMatrixPosition(D.matrixWorld)),Tt.logarithmicDepthBuffer&&Pe.setValue(I,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Pe.setValue(I,"isOrthographic",D.isOrthographicCamera===!0),v!==D&&(v=D,Fr=!0,Aa=!0)}if(H.isSkinnedMesh){Pe.setOptional(I,H,"bindMatrix"),Pe.setOptional(I,H,"bindMatrixInverse");const qe=H.skeleton;qe&&(Tt.floatVertexTextures?(qe.boneTexture===null&&qe.computeBoneTexture(),Pe.setValue(I,"boneTexture",qe.boneTexture,Ut),Pe.setValue(I,"boneTextureSize",qe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ba=O.morphAttributes;if((ba.position!==void 0||ba.normal!==void 0||ba.color!==void 0&&Tt.isWebGL2===!0)&&xt.update(H,O,hi),(Fr||Nt.receiveShadow!==H.receiveShadow)&&(Nt.receiveShadow=H.receiveShadow,Pe.setValue(I,"receiveShadow",H.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(di.envMap.value=Mt,di.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),Fr&&(Pe.setValue(I,"toneMappingExposure",x.toneMappingExposure),Nt.needsLights&&cd(di,Aa),ct&&G.fog===!0&&Q.refreshFogUniforms(di,ct),Q.refreshMaterialUniforms(di,G,k,W,vt),Ws.upload(I,bl(Nt),di,Ut)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ws.upload(I,bl(Nt),di,Ut),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Pe.setValue(I,"center",H.center),Pe.setValue(I,"modelViewMatrix",H.modelViewMatrix),Pe.setValue(I,"normalMatrix",H.normalMatrix),Pe.setValue(I,"modelMatrix",H.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const qe=G.uniformsGroups;for(let wa=0,dd=qe.length;wa<dd;wa++)if(Tt.isWebGL2){const Rl=qe[wa];Et.update(Rl,hi),Et.bind(Rl,hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return hi}function cd(D,F){D.ambientLightColor.needsUpdate=F,D.lightProbe.needsUpdate=F,D.directionalLights.needsUpdate=F,D.directionalLightShadows.needsUpdate=F,D.pointLights.needsUpdate=F,D.pointLightShadows.needsUpdate=F,D.spotLights.needsUpdate=F,D.spotLightShadows.needsUpdate=F,D.rectAreaLights.needsUpdate=F,D.hemisphereLights.needsUpdate=F}function hd(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(D,F,O){Ft.get(D.texture).__webglTexture=F,Ft.get(D.depthTexture).__webglTexture=O;const G=Ft.get(D);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=O===void 0,G.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,F){const O=Ft.get(D);O.__webglFramebuffer=F,O.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(D,F=0,O=0){T=D,y=F,w=O;let G=!0,H=null,ct=!1,ft=!1;if(D){const Mt=Ft.get(D);Mt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(I.FRAMEBUFFER,null),G=!1):Mt.__webglFramebuffer===void 0?Ut.setupRenderTarget(D):Mt.__hasExternalTextures&&Ut.rebindTextures(D,Ft.get(D.texture).__webglTexture,Ft.get(D.depthTexture).__webglTexture);const Pt=D.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(ft=!0);const bt=Ft.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(bt[F])?H=bt[F][O]:H=bt[F],ct=!0):Tt.isWebGL2&&D.samples>0&&Ut.useMultisampledRTT(D)===!1?H=Ft.get(D).__webglMultisampledFramebuffer:Array.isArray(bt)?H=bt[O]:H=bt,A.copy(D.viewport),V.copy(D.scissor),X=D.scissorTest}else A.copy($).multiplyScalar(k).floor(),V.copy(L).multiplyScalar(k).floor(),X=z;if(yt.bindFramebuffer(I.FRAMEBUFFER,H)&&Tt.drawBuffers&&G&&yt.drawBuffers(D,H),yt.viewport(A),yt.scissor(V),yt.setScissorTest(X),ct){const Mt=Ft.get(D.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Mt.__webglTexture,O)}else if(ft){const Mt=Ft.get(D.texture),Pt=F||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Mt.__webglTexture,O||0,Pt)}P=-1},this.readRenderTargetPixels=function(D,F,O,G,H,ct,ft){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Ft.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ft!==void 0&&(gt=gt[ft]),gt){yt.bindFramebuffer(I.FRAMEBUFFER,gt);try{const Mt=D.texture,Pt=Mt.format,bt=Mt.type;if(Pt!==gn&&Wt.convert(Pt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const wt=bt===Zr&&(pt.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&pt.has("EXT_color_buffer_float"));if(bt!==ni&&Wt.convert(bt)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(bt===Kn&&(Tt.isWebGL2||pt.has("OES_texture_float")||pt.has("WEBGL_color_buffer_float")))&&!wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=D.width-G&&O>=0&&O<=D.height-H&&I.readPixels(F,O,G,H,Wt.convert(Pt),Wt.convert(bt),ct)}finally{const Mt=T!==null?Ft.get(T).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,Mt)}}},this.copyFramebufferToTexture=function(D,F,O=0){const G=Math.pow(2,-O),H=Math.floor(F.image.width*G),ct=Math.floor(F.image.height*G);Ut.setTexture2D(F,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,D.x,D.y,H,ct),yt.unbindTexture()},this.copyTextureToTexture=function(D,F,O,G=0){const H=F.image.width,ct=F.image.height,ft=Wt.convert(O.format),gt=Wt.convert(O.type);Ut.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment),F.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,G,D.x,D.y,H,ct,ft,gt,F.image.data):F.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,G,D.x,D.y,F.mipmaps[0].width,F.mipmaps[0].height,ft,F.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,G,D.x,D.y,ft,gt,F.image),G===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(D,F,O,G,H=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ct=D.max.x-D.min.x+1,ft=D.max.y-D.min.y+1,gt=D.max.z-D.min.z+1,Mt=Wt.convert(G.format),Pt=Wt.convert(G.type);let bt;if(G.isData3DTexture)Ut.setTexture3D(G,0),bt=I.TEXTURE_3D;else if(G.isDataArrayTexture)Ut.setTexture2DArray(G,0),bt=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);const wt=I.getParameter(I.UNPACK_ROW_LENGTH),se=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Xe=I.getParameter(I.UNPACK_SKIP_PIXELS),me=I.getParameter(I.UNPACK_SKIP_ROWS),Rn=I.getParameter(I.UNPACK_SKIP_IMAGES),ie=O.isCompressedTexture?O.mipmaps[0]:O.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ie.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ie.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,D.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,D.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,D.min.z),O.isDataTexture||O.isData3DTexture?I.texSubImage3D(bt,H,F.x,F.y,F.z,ct,ft,gt,Mt,Pt,ie.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(bt,H,F.x,F.y,F.z,ct,ft,gt,Mt,ie.data)):I.texSubImage3D(bt,H,F.x,F.y,F.z,ct,ft,gt,Mt,Pt,ie),I.pixelStorei(I.UNPACK_ROW_LENGTH,wt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,se),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Xe),I.pixelStorei(I.UNPACK_SKIP_ROWS,me),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Rn),H===0&&G.generateMipmaps&&I.generateMipmap(bt),yt.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Ut.setTextureCube(D,0):D.isData3DTexture?Ut.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ut.setTexture2DArray(D,0):Ut.setTexture2D(D,0),yt.unbindTexture()},this.resetState=function(){y=0,w=0,T=null,yt.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Qo?"display-p3":"srgb",e.unpackColorSpace=Xt.workingColorSpace===ga?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ee?wi:Uc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===wi?Ee:Hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class v0 extends Jc{}v0.prototype.isWebGL1Renderer=!0;class x0 extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Qc extends br{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Zu=new he,Co=new tl,Gs=new va,Hs=new U;class E0 extends Me{constructor(t=new xn,e=new Qc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Gs.copy(n.boundingSphere),Gs.applyMatrix4(i),Gs.radius+=s,t.ray.intersectsSphere(Gs)===!1)return;Zu.copy(i).invert(),Co.copy(t.ray).applyMatrix4(Zu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=d,_=m;g<_;g++){const p=u.getX(g);Hs.fromBufferAttribute(h,p),Ju(Hs,p,l,i,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,_=m;g<_;g++)Hs.fromBufferAttribute(h,g),Ju(Hs,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ju(r,t,e,n,i,s,a){const o=Co.distanceSqToPoint(r);if(o<e){const l=new U;Co.closestPointToPoint(r,l),l.applyMatrix4(n);const u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class rl extends xn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],u=[],c=new U,h=new U,d=new U;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*s,p=m/n*Math.PI*2;h.x=(t+e*Math.cos(p))*Math.cos(_),h.y=(t+e*Math.cos(p))*Math.sin(_),h.z=e*Math.sin(p),o.push(h.x,h.y,h.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),d.subVectors(h,c).normalize(),l.push(d.x,d.y,d.z),u.push(g/i),u.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,E=(i+1)*m+g;a.push(_,p,E),a.push(p,f,E)}this.setIndex(a),this.setAttribute("position",new Tn(o,3)),this.setAttribute("normal",new Tn(l,3)),this.setAttribute("uv",new Tn(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class M0 extends br{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qu={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class S0{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,s===!1&&i.onStart!==void 0&&i.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,i.onProgress!==void 0&&i.onProgress(c,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=u.length;h<d;h+=2){const m=u[h],g=u[h+1];if(m.global&&(m.lastIndex=0),m.test(c))return g}return null}}}const y0=new S0;class sl{constructor(t){this.manager=t!==void 0?t:y0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}sl.DEFAULT_MATERIAL_NAME="__DEFAULT";class D0 extends sl{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Qu.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Jr("img");function l(){c(),Qu.add(t,this),e&&e(this),s.manager.itemEnd(t)}function u(h){c(),i&&i(h),s.manager.itemError(t),s.manager.itemEnd(t)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class T0 extends sl{constructor(t){super(t)}load(t,e,n,i){const s=new Be,a=new D0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class A0 extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ao=new he,tc=new U,ec=new U;class b0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(tc),ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ec),e.updateMatrixWorld(),ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ao),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class w0 extends b0{constructor(){super(new Yc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class C0 extends A0{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new w0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class R0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nc(){return(typeof performance>"u"?Date:performance).now()}class P0{constructor(t,e,n=0,i=1/0){this.ray=new tl(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new el,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return Ro(t,this,n,e),n.sort(ic),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)Ro(t[i],this,n,e);return n.sort(ic),n}}function ic(r,t){return r.distance-t.distance}function Ro(r,t,e,n){if(r.layers.test(t.layers)&&r.raycast(t,e),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Ro(i[s],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class An{constructor(t,e,n,i,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),An.nextNameID=An.nextNameID||0,this.$name.id=`lil-gui-name-${++An.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class L0 extends An{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Po(r){let t,e;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const F0={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Po,toHexString:Po},Qr={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},U0={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,t,e=1){const n=Qr.fromHexString(r);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([r,t,e],n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return Qr.toHexString(i)}},I0={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,e=1){const n=Qr.fromHexString(r);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r,g:t,b:e},n=1){n=255/n;const i=r*n<<16^t*n<<8^e*n<<0;return Qr.toHexString(i)}},N0=[F0,Qr,U0,I0];function O0(r){return N0.find(t=>t.match(r))}class B0 extends An{constructor(t,e,n,i){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=O0(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Po(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class oo extends An{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class z0 extends An{constructor(t,e,n,i,s,a){super(t,e,n,"number"),this._initInput(),this.min(i),this.max(s);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let E=parseFloat(this.$input.value);isNaN(E)||(this._stepExplicit&&(E=this._snap(E)),this.setValue(this._clamp(E)))},n=E=>{const x=parseFloat(this.$input.value);isNaN(x)||(this._snapClampSetValue(x+E),this.$input.value=this.getValue())},i=E=>{E.key==="Enter"&&this.$input.blur(),E.code==="ArrowUp"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E))),E.code==="ArrowDown"&&(E.preventDefault(),n(this._step*this._arrowKeyMultiplier(E)*-1))},s=E=>{this._inputFocused&&(E.preventDefault(),n(this._step*this._normalizeMouseWheel(E)))};let a=!1,o,l,u,c,h;const d=5,m=E=>{o=E.clientX,l=u=E.clientY,a=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",_)},g=E=>{if(a){const x=E.clientX-o,M=E.clientY-l;Math.abs(M)>d?(E.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(x)>d&&_()}if(!a){const x=E.clientY-u;h-=x*this._step*this._arrowKeyMultiplier(E),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)}u=E.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",_)},p=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",m),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(f,E,x,M,y)=>(f-E)/(x-E)*(y-M)+M,e=f=>{const E=this.$slider.getBoundingClientRect();let x=t(f,E.left,E.right,this._min,this._max);this._snapClampSetValue(x)},n=f=>{this._setDraggingStyle(!0),e(f.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",s)},i=f=>{e(f.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",s)};let a=!1,o,l;const u=f=>{f.preventDefault(),this._setDraggingStyle(!0),e(f.touches[0].clientX),a=!1},c=f=>{f.touches.length>1||(this._hasScrollBar?(o=f.touches[0].clientX,l=f.touches[0].clientY,a=!0):u(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(a){const E=f.touches[0].clientX-o,x=f.touches[0].clientY-l;Math.abs(E)>Math.abs(x)?u(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),e(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},m=this._callOnFinishChange.bind(this),g=400;let _;const p=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const x=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+x),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(m,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",c,{passive:!1}),this.$slider.addEventListener("wheel",p,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class G0 extends An{constructor(t,e,n,i){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class H0 extends An{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const k0=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: none;
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
  }
  .lil-gui button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function V0(r){const t=document.createElement("style");t.innerHTML=r;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let rc=!1;class al{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:s="Controls",closeFolders:a=!1,injectStyles:o=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",u=>{(u.code==="Enter"||u.code==="Space")&&(u.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!rc&&o&&(V0(k0),rc=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=a}add(t,e,n,i,s){if(Object(n)===n)return new G0(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new z0(this,t,e,n,i,s);case"boolean":return new L0(this,t,e);case"string":return new H0(this,t,e);case"function":return new oo(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new B0(this,t,e,n)}addFolder(t){const e=new al({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof oo||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof oo)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const W0=al;function On(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function th(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Qe={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Er={duration:.5,overwrite:!1,delay:0},ol,we,Zt,un=1e8,jt=1/un,Lo=Math.PI*2,X0=Lo/4,q0=0,eh=Math.sqrt,Y0=Math.cos,$0=Math.sin,xe=function(t){return typeof t=="string"},re=function(t){return typeof t=="function"},kn=function(t){return typeof t=="number"},ll=function(t){return typeof t>"u"},wn=function(t){return typeof t=="object"},ze=function(t){return t!==!1},ul=function(){return typeof window<"u"},ks=function(t){return re(t)||xe(t)},nh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ce=Array.isArray,Fo=/(?:-?\.?\d|\.)+/gi,ih=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,lo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rh=/[+-]=-?[.\d]+/,sh=/[^,'"\[\]\s]+/gi,j0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Qt,Mn,Uo,cl,tn={},ta={},ah,oh=function(t){return(ta=Ni(t,tn))&&Ve},hl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ts=function(t,e){return!e&&console.warn(t)},lh=function(t,e){return t&&(tn[t]=e)&&ta&&(ta[t]=e)||tn},es=function(){return 0},K0={suppressEvents:!0,isStart:!0,kill:!1},Xs={suppressEvents:!0,kill:!1},Z0={suppressEvents:!0},dl={},ii=[],Io={},uh,je={},uo={},sc=30,qs=[],fl="",pl=function(t){var e=t[0],n,i;if(wn(e)||re(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=qs.length;i--&&!qs[i].targetTest(e););n=qs[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Fh(t[i],n)))||t.splice(i,1);return t},Ci=function(t){return t._gsap||pl(cn(t))[0]._gsap},ch=function(t,e,n){return(n=t[e])&&re(n)?t[e]():ll(n)&&t.getAttribute&&t.getAttribute(e)||n},Ge=function(t,e){return(t=t.split(",")).forEach(e)||t},ae=function(t){return Math.round(t*1e5)/1e5||0},ge=function(t){return Math.round(t*1e7)/1e7||0},hr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},J0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ea=function(){var t=ii.length,e=ii.slice(0),n,i;for(Io={},ii.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hh=function(t,e,n,i){ii.length&&!we&&ea(),t.render(e,n,i||we&&e<0&&(t._initted||t._startAt)),ii.length&&!we&&ea()},dh=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(sh).length<2?e:xe(t)?t.trim():t},fh=function(t){return t},hn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Q0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ni=function(t,e){for(var n in e)t[n]=e[n];return t},ac=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=wn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},na=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},qr=function(t){var e=t.parent||Qt,n=t.keyframes?Q0(Ce(t.keyframes)):hn;if(ze(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},tv=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},ph=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Ma=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},oi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ri=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ev=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},No=function(t,e,n,i){return t._startAt&&(we?t._startAt.revert(Xs):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},nv=function r(t){return!t||t._ts&&r(t.parent)},oc=function(t){return t._repeat?Mr(t._tTime,t=t.duration()+t._rDelay)*t:0},Mr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ia=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Sa=function(t){return t._end=ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||jt)||0))},ya=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Sa(t),n._dirty||Ri(n,t)),t},mh=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ia(t.rawTime(),e),(!e._dur||fs(0,e.totalDuration(),n)-e._tTime>jt)&&e.render(n,!0)),Ri(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-jt}},yn=function(t,e,n,i){return e.parent&&oi(e),e._start=ge((kn(n)?n:n||t!==Qt?sn(t,n,e):t._time)+e._delay),e._end=ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ph(t,e,"_first","_last",t._sort?"_start":0),Oo(e)||(t._recent=e),i||mh(t,e),t._ts<0&&ya(t,t._tTime),t},_h=function(t,e){return(tn.ScrollTrigger||hl("scrollTrigger",e))&&tn.ScrollTrigger.create(e,t)},gh=function(t,e,n,i,s){if(_l(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!we&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&uh!==Ke.frame)return ii.push(t),t._lazy=[s,i],1},iv=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Oo=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},rv=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&iv(t)&&!(!t._initted&&Oo(t))||(t._ts<0||t._dp._ts<0)&&!Oo(t))?0:1,o=t._rDelay,l=0,u,c,h;if(o&&t._repeat&&(l=fs(0,t._tDur,e),c=Mr(l,o),t._yoyo&&c&1&&(a=1-a),c!==Mr(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||we||i||t._zTime===jt||!e&&t._zTime){if(!t._initted&&gh(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?jt:0),n||(n=e&&!h),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,u=t._pt;u;)u.r(a,u.d),u=u._next;e<0&&No(t,e,n,!0),t._onUpdate&&!n&&Ze(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ze(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&oi(t,1),!n&&!we&&(Ze(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},sv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Sr=function(t,e,n,i){var s=t._repeat,a=ge(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:ge(a*(s+1)+t._rDelay*s):a,o>0&&!i&&ya(t,t._tTime=t._tDur*o),t.parent&&Sa(t),n||Ri(t.parent,t),t},lc=function(t){return t instanceof Fe?Ri(t):Sr(t,t._dur)},av={_start:0,endTime:es,totalDuration:es},sn=function r(t,e,n){var i=t.labels,s=t._recent||av,a=t.duration()>=un?s.endTime(!1):t._dur,o,l,u;return xe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),u=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(u?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),u&&n&&(l=l/100*(Ce(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Yr=function(t,e,n){var i=kn(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=ze(l.vars.inherit)&&l.parent;a.immediateRender=ze(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new ce(e[0],a,e[s+1])},ci=function(t,e){return t||t===0?e(t):e},fs=function(t,e,n){return n<t?t:n>e?e:n},be=function(t,e){return!xe(t)||!(e=j0.exec(t))?"":e[1]},ov=function(t,e,n){return ci(n,function(i){return fs(t,e,i)})},Bo=[].slice,vh=function(t,e){return t&&wn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&wn(t[0]))&&!t.nodeType&&t!==Mn},lv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return xe(i)&&!e||vh(i,1)?(s=n).push.apply(s,cn(i)):n.push(i)})||n},cn=function(t,e,n){return Zt&&!e&&Zt.selector?Zt.selector(t):xe(t)&&!n&&(Uo||!yr())?Bo.call((e||cl).querySelectorAll(t),0):Ce(t)?lv(t,n):vh(t)?Bo.call(t,0):t?[t]:[]},zo=function(t){return t=cn(t)[0]||ts("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return cn(e,n.querySelectorAll?n:n===t?ts("Invalid scope")||cl.createElement("div"):t)}},xh=function(t){return t.sort(function(){return .5-Math.random()})},Eh=function(t){if(re(t))return t;var e=wn(t)?t:{each:t},n=Pi(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,u=e.axis,c=i,h=i;return xe(i)?c=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(c=i[0],h=i[1]),function(d,m,g){var _=(g||e).length,p=a[_],f,E,x,M,y,w,T,P,v;if(!p){if(v=e.grid==="auto"?0:(e.grid||[1,un])[1],!v){for(T=-un;T<(T=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(p=a[_]=[],f=l?Math.min(v,_)*c-.5:i%v,E=v===un?0:l?_*h/v-.5:i/v|0,T=0,P=un,w=0;w<_;w++)x=w%v-f,M=E-(w/v|0),p[w]=y=u?Math.abs(u==="y"?M:x):eh(x*x+M*M),y>T&&(T=y),y<P&&(P=y);i==="random"&&xh(p),p.max=T-P,p.min=P,p.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(v>_?_-1:u?u==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=be(e.amount||e.each)||0,n=n&&_<0?Rh(n):n}return _=(p[d]-p.min)/p.max||0,ge(p.b+(n?n(_):_)*p.v)+p.u}},Go=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(kn(n)?0:be(n))}},Mh=function(t,e){var n=Ce(t),i,s;return!n&&wn(t)&&(i=n=t.radius||un,t.values?(t=cn(t.values),(s=!kn(t[0]))&&(i*=i)):t=Go(t.increment)),ci(e,n?re(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),u=un,c=0,h=t.length,d,m;h--;)s?(d=t[h].x-o,m=t[h].y-l,d=d*d+m*m):d=Math.abs(t[h]-o),d<u&&(u=d,c=h);return c=!i||u<=i?t[c]:a,s||c===a||kn(a)?c:c+be(a)}:Go(t))},Sh=function(t,e,n,i){return ci(Ce(t)?!e:n===!0?!!(n=0):!i,function(){return Ce(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},uv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},cv=function(t,e){return function(n){return t(parseFloat(n))+(e||be(n))}},hv=function(t,e,n){return Dh(t,e,0,1,n)},yh=function(t,e,n){return ci(n,function(i){return t[~~e(i)]})},dv=function r(t,e,n){var i=e-t;return Ce(t)?yh(t,r(0,t.length),e):ci(n,function(s){return(i+(s-t)%i)%i+t})},fv=function r(t,e,n){var i=e-t,s=i*2;return Ce(t)?yh(t,r(0,t.length-1),e):ci(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},ns=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?sh:Fo),n+=t.substr(e,i-e)+Sh(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},Dh=function(t,e,n,i,s){var a=e-t,o=i-n;return ci(s,function(l){return n+((l-t)/a*o||0)})},pv=function r(t,e,n,i){var s=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!s){var a=xe(t),o={},l,u,c,h,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ce(t)&&!Ce(e)){for(c=[],h=t.length,d=h-2,u=1;u<h;u++)c.push(r(t[u-1],t[u]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return c[_](g-_)},n=e}else i||(t=Ni(Ce(t)?[]:{},t));if(!c){for(l in e)ml.call(o,t,l,"get",e[l]);s=function(g){return xl(g,o)||(a?t.p:t)}}}return ci(n,s)},uc=function(t,e,n){var i=t.labels,s=un,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Ze=function(t,e,n){var i=t.vars,s=i[e],a=Zt,o=t._ctx,l,u,c;if(s)return l=i[e+"Params"],u=i.callbackScope||t,n&&ii.length&&ea(),o&&(Zt=o),c=l?s.apply(u,l):s.call(u),Zt=a,c},kr=function(t){return oi(t),t.scrollTrigger&&t.scrollTrigger.kill(!!we),t.progress()<1&&Ze(t,"onInterrupt"),t},sr,Th=[],Ah=function(t){if(t)if(t=!t.name&&t.default||t,ul()||t.headless){var e=t.name,n=re(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:es,render:xl,add:ml,kill:Rv,modifier:Cv,rawVars:0},a={targetTest:0,get:0,getSetter:vl,aliases:{},register:0};if(yr(),t!==i){if(je[e])return;hn(i,hn(na(t,s),a)),Ni(i.prototype,Ni(s,na(t,a))),je[i.prop=e]=i,t.targetTest&&(qs.push(i),dl[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}lh(e,i),t.register&&t.register(Ve,i,He)}else Th.push(t)},Yt=255,Vr={aqua:[0,Yt,Yt],lime:[0,Yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Yt],navy:[0,0,128],white:[Yt,Yt,Yt],olive:[128,128,0],yellow:[Yt,Yt,0],orange:[Yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Yt,0,0],pink:[Yt,192,203],cyan:[0,Yt,Yt],transparent:[Yt,Yt,Yt,0]},co=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Yt+.5|0},bh=function(t,e,n){var i=t?kn(t)?[t>>16,t>>8&Yt,t&Yt]:0:Vr.black,s,a,o,l,u,c,h,d,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Vr[t])i=Vr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Yt,i&Yt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Yt,t&Yt]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Fo),!e)l=+i[0]%360/360,u=+i[1]/100,c=+i[2]/100,a=c<=.5?c*(u+1):c+u-c*u,s=c*2-a,i.length>3&&(i[3]*=1),i[0]=co(l+1/3,s,a),i[1]=co(l,s,a),i[2]=co(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(ih),n&&i.length<4&&(i[3]=1),i}else i=t.match(Fo)||Vr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/Yt,a=i[1]/Yt,o=i[2]/Yt,h=Math.max(s,a,o),d=Math.min(s,a,o),c=(h+d)/2,h===d?l=u=0:(m=h-d,u=c>.5?m/(2-h-d):m/(h+d),l=h===s?(a-o)/m+(a<o?6:0):h===a?(o-s)/m+2:(s-a)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(u*100+.5),i[2]=~~(c*100+.5)),n&&i.length<4&&(i[3]=1),i},wh=function(t){var e=[],n=[],i=-1;return t.split(ri).forEach(function(s){var a=s.match(rr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},cc=function(t,e,n){var i="",s=(t+i).match(ri),a=e?"hsla(":"rgba(",o=0,l,u,c,h;if(!s)return t;if(s=s.map(function(d){return(d=bh(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(c=wh(t),l=n.c,l.join(i)!==c.c.join(i)))for(u=t.replace(ri,"1").split(rr),h=u.length-1;o<h;o++)i+=u[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(c.length?c:s.length?s:n).shift());if(!u)for(u=t.split(ri),h=u.length-1;o<h;o++)i+=u[o]+s[o];return i+u[h]},ri=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Vr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),mv=/hsl[a]?\(/,Ch=function(t){var e=t.join(" "),n;if(ri.lastIndex=0,ri.test(e))return n=mv.test(e),t[1]=cc(t[1],n),t[0]=cc(t[0],n,wh(t[1])),!0},is,Ke=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,u,c,h,d,m,g=function _(p){var f=r()-i,E=p===!0,x,M,y,w;if((f>t||f<0)&&(n+=f-e),i+=f,y=i-n,x=y-a,(x>0||E)&&(w=++h.frame,d=y-h.time*1e3,h.time=y=y/1e3,a+=x+(x>=s?4:s-x),M=1),E||(l=u(_)),M)for(m=0;m<o.length;m++)o[m](y,d,w,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){ah&&(!Uo&&ul()&&(Mn=Uo=window,cl=Mn.document||{},tn.gsap=Ve,(Mn.gsapVersions||(Mn.gsapVersions=[])).push(Ve.version),oh(ta||Mn.GreenSockGlobals||!Mn.gsap&&Mn||{}),Th.forEach(Ah)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(p){return setTimeout(p,a-h.time*1e3+1|0)},is=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),is=0,u=es},lagSmoothing:function(p,f){t=p||1/0,e=Math.min(f||33,t)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,f,E){var x=f?function(M,y,w,T){p(M,y,w,T),h.remove(x)}:p;return h.remove(p),o[E?"unshift":"push"](x),yr(),x},remove:function(p,f){~(f=o.indexOf(p))&&o.splice(f,1)&&m>=f&&m--},_listeners:o},h}(),yr=function(){return!is&&Ke.wake()},Bt={},_v=/^[\d.\-M][\d.\-,\s]/,gv=/["']/g,vv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,u;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,u=l.substr(0,o),e[i]=isNaN(u)?u.replace(gv,"").trim():+u,i=l.substr(o+1).trim();return e},xv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Ev=function(t){var e=(t+"").split("("),n=Bt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[vv(e[1])]:xv(t).split(",").map(dh)):Bt._CE&&_v.test(t)?Bt._CE("",t):n},Rh=function(t){return function(e){return 1-t(1-e)}},Ph=function r(t,e){for(var n=t._first,i;n;)n instanceof Fe?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Pi=function(t,e){return t&&(re(t)?t:Bt[t]||Ev(t))||e},Bi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Ge(t,function(o){Bt[o]=tn[o]=s,Bt[a=o.toLowerCase()]=n;for(var l in s)Bt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Bt[o+"."+l]=s[l]}),s},Lh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ho=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Lo*(Math.asin(1/i)||0),o=function(c){return c===1?1:i*Math.pow(2,-10*c)*$0((c-a)*s)+1},l=t==="out"?o:t==="in"?function(u){return 1-o(1-u)}:Lh(o);return s=Lo/s,l.config=function(u,c){return r(t,u,c)},l},fo=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Lh(n);return i.config=function(s){return r(t,s)},i};Ge("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Bi(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;Bi("Elastic",ho("in"),ho("out"),ho());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Bi("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Bi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Bi("Circ",function(r){return-(eh(1-r*r)-1)});Bi("Sine",function(r){return r===1?1:-Y0(r*X0)+1});Bi("Back",fo("in"),fo("out"),fo());Bt.SteppedEase=Bt.steps=tn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-jt;return function(o){return((i*fs(0,a,o)|0)+s)*n}}};Er.ease=Bt["quad.out"];Ge("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return fl+=r+","+r+"Params,"});var Fh=function(t,e){this.id=q0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ch,this.set=e?e.getSetter:vl},rs=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Sr(this,+e.duration,1,1),this.data=e.data,Zt&&(this._ctx=Zt,Zt.data.push(this)),is||Ke.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Sr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(yr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ya(this,n),!s._dp||s.parent||mh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&yn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===jt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hh(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+oc(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+oc(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Mr(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-jt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ia(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-jt?0:this._rts,this.totalTime(fs(-Math.abs(this._delay),this._tDur,s),i!==!1),Sa(this),ev(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(yr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==jt&&(this._tTime-=jt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&yn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ze(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ia(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Z0);var i=we;return we=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),we=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,lc(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,lc(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(sn(this,n),ze(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ze(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-jt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-jt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-jt)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=re(n)?n:fh,o=function(){var u=i.then;i.then=null,re(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),s(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){kr(this)},r}();hn(rs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-jt,_prom:0,_ps:!1,_rts:1});var Fe=function(r){th(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ze(n.sortChildren),Qt&&yn(n.parent||Qt,On(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&_h(On(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Yr(0,arguments,this),this},e.from=function(i,s,a){return Yr(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Yr(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,qr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ce(i,s,sn(this,a),1),this},e.call=function(i,s,a){return yn(this,ce.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,u,c){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=u,a.onCompleteParams=c,a.parent=this,new ce(i,a,sn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,u,c){return a.runBackwards=1,qr(a).immediateRender=ze(a.immediateRender),this.staggerTo(i,s,a,o,l,u,c)},e.staggerFromTo=function(i,s,a,o,l,u,c,h){return o.startAt=a,qr(o).immediateRender=ze(o.immediateRender),this.staggerTo(i,s,o,l,u,c,h)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=i<=0?0:ge(i),h=this._zTime<0!=i<0&&(this._initted||!u),d,m,g,_,p,f,E,x,M,y,w,T;if(this!==Qt&&c>l&&i>=0&&(c=l),c!==this._tTime||a||h){if(o!==this._time&&u&&(c+=this._time-o,i+=this._time-o),d=c,M=this._start,x=this._ts,f=!x,h&&(u||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=u+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(d=ge(c%p),c===l?(_=this._repeat,d=u):(_=~~(c/p),_&&_===c/p&&(d=u,_--),d>u&&(d=u)),y=Mr(this._tTime,p),!o&&this._tTime&&y!==_&&this._tTime-y*p-this._dur<=0&&(y=_),w&&_&1&&(d=u-d,T=1),_!==y&&!this._lock){var P=w&&y&1,v=P===(w&&_&1);if(_<y&&(P=!P),o=P?0:c%u?u:c,this._lock=1,this.render(o||(T?0:ge(_*p)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ze(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,v&&(this._lock=2,o=P?u:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;Ph(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=sv(this,ge(o),ge(d)),E&&(c-=d-(d=E._start))),this._tTime=c,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&d&&!s&&!_&&(Ze(this,"onStart"),this._tTime!==c))return this;if(d>=o&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||d>=m._start)&&m._ts&&E!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(d-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(d-m._start)*m._ts,s,a),d!==this._time||!this._ts&&!f){E=0,g&&(c+=this._zTime=-jt);break}}m=g}else{m=this._last;for(var A=i<0?i:d;m;){if(g=m._prev,(m._act||A<=m._end)&&m._ts&&E!==m){if(m.parent!==this)return this.render(i,s,a);if(m.render(m._ts>0?(A-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(A-m._start)*m._ts,s,a||we&&(m._initted||m._startAt)),d!==this._time||!this._ts&&!f){E=0,g&&(c+=this._zTime=A?-jt:jt);break}}m=g}}if(E&&!s&&(this.pause(),E.render(d>=o?0:-jt)._zTime=d>=o?1:-1,this._ts))return this._start=M,Sa(this),this.render(i,s,a);this._onUpdate&&!s&&Ze(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&oi(this,1),!s&&!(i<0&&!o)&&(c||o||!l)&&(Ze(this,c===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(kn(s)||(s=sn(this,s,i)),!(i instanceof rs)){if(Ce(i))return i.forEach(function(o){return a.add(o,s)}),this;if(xe(i))return this.addLabel(i,s);if(re(i))i=ce.delayedCall(0,i);else return this}return this!==i?yn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-un);for(var l=[],u=this._first;u;)u._start>=o&&(u instanceof ce?s&&l.push(u):(a&&l.push(u),i&&l.push.apply(l,u.getChildren(!0,s,a)))),u=u._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return xe(i)?this.removeLabel(i):re(i)?this.killTweensOf(i):(Ma(this,i),i===this._recent&&(this._recent=this._last),Ri(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ge(Ke.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=sn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=ce.delayedCall(0,s||es,a);return o.data="isPause",this._hasPause=1,yn(this,o,sn(this,i))},e.removePause=function(i){var s=this._first;for(i=sn(this,i);s;)s._start===i&&s.data==="isPause"&&oi(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Zn!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=cn(i),l=this._first,u=kn(s),c;l;)l instanceof ce?J0(l._targets,o)&&(u?(!Zn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(c=l.getTweensOf(o,s)).length&&a.push.apply(a,c),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=sn(a,i),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,d=l.immediateRender,m,g=ce.to(a,hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale())||jt,onStart:function(){if(a.pause(),!m){var p=s.duration||Math.abs((o-(u&&"time"in u?u.time:a._time))/a.timeScale());g._dur!==p&&Sr(g,p,0,1).render(g._time,!0,!0),m=1}c&&c.apply(g,h||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,hn({startAt:{time:sn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),uc(this,sn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),uc(this,sn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+jt)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,u;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(u in l)l[u]>=a&&(l[u]+=i);return Ri(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ri(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=un,u,c,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)u=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,yn(a,o,c-o._delay,1)._lock=0):l=c,c<0&&o._ts&&(s-=c,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=c/a._ts,a._time-=c,a._tTime-=c),a.shiftChildren(-c,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=u;Sr(a,a===Qt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Qt._ts&&(hh(Qt,ia(i,Qt)),uh=Ke.frame),Ke.frame>=sc){sc+=Qe.autoSleep||120;var s=Qt._first;if((!s||!s._ts)&&Qe.autoSleep&&Ke._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ke.sleep()}}},t}(rs);hn(Fe.prototype,{_lock:0,_hasPause:0,_forcing:0});var Mv=function(t,e,n,i,s,a,o){var l=new He(this._pt,t,e,0,1,zh,null,s),u=0,c=0,h,d,m,g,_,p,f,E;for(l.b=n,l.e=i,n+="",i+="",(f=~i.indexOf("random("))&&(i=ns(i)),a&&(E=[n,i],a(E,t,e),n=E[0],i=E[1]),d=n.match(lo)||[];h=lo.exec(i);)g=h[0],_=i.substring(u,h.index),m?m=(m+1)%5:_.substr(-5)==="rgba("&&(m=1),g!==d[c++]&&(p=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:p,c:g.charAt(1)==="="?hr(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},u=lo.lastIndex);return l.c=u<i.length?i.substring(u,i.length):"",l.fp=o,(rh.test(i)||f)&&(l.e=0),this._pt=l,l},ml=function(t,e,n,i,s,a,o,l,u,c){re(i)&&(i=i(s||0,t,a));var h=t[e],d=n!=="get"?n:re(h)?u?t[e.indexOf("set")||!re(t["get"+e.substr(3)])?e:"get"+e.substr(3)](u):t[e]():h,m=re(h)?u?Av:Oh:gl,g;if(xe(i)&&(~i.indexOf("random(")&&(i=ns(i)),i.charAt(1)==="="&&(g=hr(d,i)+(be(d)||0),(g||g===0)&&(i=g))),!c||d!==i||Ho)return!isNaN(d*i)&&i!==""?(g=new He(this._pt,t,e,+d||0,i-(d||0),typeof h=="boolean"?wv:Bh,0,m),u&&(g.fp=u),o&&g.modifier(o,this,t),this._pt=g):(!h&&!(e in t)&&hl(e,i),Mv.call(this,t,e,d,i,m,l||Qe.stringFilter,u))},Sv=function(t,e,n,i,s){if(re(t)&&(t=$r(t,s,e,n,i)),!wn(t)||t.style&&t.nodeType||Ce(t)||nh(t))return xe(t)?$r(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=$r(t[o],s,e,n,i);return a},Uh=function(t,e,n,i,s,a){var o,l,u,c;if(je[t]&&(o=new je[t]).init(s,o.rawVars?e[t]:Sv(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new He(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==sr))for(u=n._ptLookup[n._targets.indexOf(s)],c=o._props.length;c--;)u[o._props[c]]=l;return o},Zn,Ho,_l=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,u=i.onUpdate,c=i.runBackwards,h=i.yoyoEase,d=i.keyframes,m=i.autoRevert,g=t._dur,_=t._startAt,p=t._targets,f=t.parent,E=f&&f.data==="nested"?f.vars.targets:p,x=t._overwrite==="auto"&&!ol,M=t.timeline,y,w,T,P,v,A,V,X,Y,R,B,W,k;if(M&&(!d||!s)&&(s="none"),t._ease=Pi(s,Er.ease),t._yEase=h?Rh(Pi(h===!0?s:h,Er.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!M&&!!i.runBackwards,!M||d&&!i.stagger){if(X=p[0]?Ci(p[0]).harness:0,W=X&&i[X.prop],y=na(i,dl),_&&(_._zTime<0&&_.progress(1),e<0&&c&&o&&!m?_.render(-1,!0):_.revert(c&&g?Xs:K0),_._lazy=0),a){if(oi(t._startAt=ce.set(p,hn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&ze(l),startAt:null,delay:0,onUpdate:u&&function(){return Ze(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we||!o&&!m)&&t._startAt.revert(Xs),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(c&&g&&!_){if(e&&(o=!1),T=hn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&ze(l),immediateRender:o,stagger:0,parent:f},y),W&&(T[X.prop]=W),oi(t._startAt=ce.set(p,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(we?t._startAt.revert(Xs):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,jt,jt);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&ze(l)||l&&!g,w=0;w<p.length;w++){if(v=p[w],V=v._gsap||pl(p)[w]._gsap,t._ptLookup[w]=R={},Io[V.id]&&ii.length&&ea(),B=E===p?w:E.indexOf(v),X&&(Y=new X).init(v,W||y,t,B,E)!==!1&&(t._pt=P=new He(t._pt,v,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(K){R[K]=P}),Y.priority&&(A=1)),!X||W)for(T in y)je[T]&&(Y=Uh(T,y,t,B,v,E))?Y.priority&&(A=1):R[T]=P=ml.call(t,v,T,"get",y[T],B,E,0,i.stringFilter);t._op&&t._op[w]&&t.kill(v,t._op[w]),x&&t._pt&&(Zn=t,Qt.killTweensOf(v,R,t.globalTime(e)),k=!t.parent,Zn=0),t._pt&&l&&(Io[V.id]=1)}A&&Gh(t),t._onInit&&t._onInit(t)}t._onUpdate=u,t._initted=(!t._op||t._pt)&&!k,d&&e<=0&&M.render(un,!0,!0)},yv=function(t,e,n,i,s,a,o,l){var u=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,d,m;if(!u)for(u=t._ptCache[e]=[],d=t._ptLookup,m=t._targets.length;m--;){if(c=d[m][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Ho=1,t.vars[e]="+=0",_l(t,o),Ho=0,l?ts(e+" not eligible for reset"):1;u.push(c)}for(m=u.length;m--;)h=u[m],c=h._pt||h,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,h.e&&(h.e=ae(n)+be(h.e)),h.b&&(h.b=c.s+be(h.b))},Dv=function(t,e){var n=t[0]?Ci(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Ni({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Tv=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Ce(e))o=n[t]||(n[t]=[]),e.forEach(function(l,u){return o.push({t:u/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},$r=function(t,e,n,i,s){return re(t)?t.call(e,n,i,s):xe(t)&&~t.indexOf("random(")?ns(t):t},Ih=fl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Nh={};Ge(Ih+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Nh[r]=1});var ce=function(r){th(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:qr(i))||this;var l=o.vars,u=l.duration,c=l.delay,h=l.immediateRender,d=l.stagger,m=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,f=l.yoyoEase,E=i.parent||Qt,x=(Ce(n)||nh(n)?kn(n[0]):"length"in i)?[n]:cn(n),M,y,w,T,P,v,A,V;if(o._targets=x.length?pl(x):ts("GSAP target "+n+" not found. https://gsap.com",!Qe.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,g||d||ks(u)||ks(c)){if(i=o.vars,M=o.timeline=new Fe({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:x}),M.kill(),M.parent=M._dp=On(o),M._start=0,d||ks(u)||ks(c)){if(T=x.length,A=d&&Eh(d),wn(d))for(P in d)~Ih.indexOf(P)&&(V||(V={}),V[P]=d[P]);for(y=0;y<T;y++)w=na(i,Nh),w.stagger=0,f&&(w.yoyoEase=f),V&&Ni(w,V),v=x[y],w.duration=+$r(u,On(o),y,v,x),w.delay=(+$r(c,On(o),y,v,x)||0)-o._delay,!d&&T===1&&w.delay&&(o._delay=c=w.delay,o._start+=c,w.delay=0),M.to(v,w,A?A(y,v,x):0),M._ease=Bt.none;M.duration()?u=c=0:o.timeline=0}else if(g){qr(hn(M.vars.defaults,{ease:"none"})),M._ease=Pi(g.ease||i.ease||"none");var X=0,Y,R,B;if(Ce(g))g.forEach(function(W){return M.to(x,W,">")}),M.duration();else{w={};for(P in g)P==="ease"||P==="easeEach"||Tv(P,g[P],w,g.easeEach);for(P in w)for(Y=w[P].sort(function(W,k){return W.t-k.t}),X=0,y=0;y<Y.length;y++)R=Y[y],B={ease:R.e,duration:(R.t-(y?Y[y-1].t:0))/100*u},B[P]=R.v,M.to(x,B,X),X+=B.duration;M.duration()<u&&M.to({},{duration:u-M.duration()})}}u||o.duration(u=M.duration())}else o.timeline=0;return m===!0&&!ol&&(Zn=On(o),Qt.killTweensOf(x),Zn=0),yn(E,On(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!u&&!g&&o._start===ge(E._time)&&ze(h)&&nv(On(o))&&E.data!=="nested")&&(o._tTime=-jt,o.render(Math.max(0,-c)||0)),p&&_h(On(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,u=this._dur,c=i<0,h=i>l-jt&&!c?l:i<jt?0:i,d,m,g,_,p,f,E,x,M;if(!u)rv(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(d=h,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+i,s,a);if(d=ge(h%_),h===l?(g=this._repeat,d=u):(g=~~(h/_),g&&g===ge(h/_)&&(d=u,g--),d>u&&(d=u)),f=this._yoyo&&g&1,f&&(M=this._yEase,d=u-d),p=Mr(this._tTime,_),d===o&&!a&&this._initted&&g===p)return this._tTime=h,this;g!==p&&(x&&this._yEase&&Ph(x,f),this.vars.repeatRefresh&&!f&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(ge(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(gh(this,c?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(u!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(M||this._ease)(d/u),this._from&&(this.ratio=E=1-E),d&&!o&&!s&&!g&&(Ze(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(E,m.d),m=m._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(c&&No(this,i,s,a),Ze(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Ze(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&No(this,i,!0,!0),(i||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&oi(this,1),!s&&!(c&&!o)&&(h||o||f)&&(Ze(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){is||Ke.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||_l(this,u),c=this._ease(u/this._dur),yv(this,i,s,a,o,c,u,l)?this.resetTo(i,s,a,o,1):(ya(this,0),this.parent||ph(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?kr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Zn&&Zn.vars.overwrite!==!0)._first||kr(this),this.parent&&a!==this.timeline.totalDuration()&&Sr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?cn(i):o,u=this._ptLookup,c=this._pt,h,d,m,g,_,p,f;if((!s||s==="all")&&tv(o,l))return s==="all"&&(this._pt=0),kr(this);for(h=this._op=this._op||[],s!=="all"&&(xe(s)&&(_={},Ge(s,function(E){return _[E]=1}),s=_),s=Dv(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){d=u[f],s==="all"?(h[f]=s,g=d,m={}):(m=h[f]=h[f]||{},g=s);for(_ in g)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Ma(this,p,"_pt"),delete d[_]),m!=="all"&&(m[_]=1)}return this._initted&&!this._pt&&c&&kr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Yr(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Yr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Qt.killTweensOf(i,s,a)},t}(rs);hn(ce.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ge("staggerTo,staggerFrom,staggerFromTo",function(r){ce[r]=function(){var t=new Fe,e=Bo.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var gl=function(t,e,n){return t[e]=n},Oh=function(t,e,n){return t[e](n)},Av=function(t,e,n,i){return t[e](i.fp,n)},bv=function(t,e,n){return t.setAttribute(e,n)},vl=function(t,e){return re(t[e])?Oh:ll(t[e])&&t.setAttribute?bv:gl},Bh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},wv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},zh=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},xl=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Cv=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},Rv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Ma(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Pv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Gh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},He=function(){function r(e,n,i,s,a,o,l,u,c){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Bh,this.d=l||this,this.set=u||gl,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Pv,this.m=n,this.mt=s,this.tween=i},r}();Ge(fl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return dl[r]=1});tn.TweenMax=tn.TweenLite=ce;tn.TimelineLite=tn.TimelineMax=Fe;Qt=new Fe({sortChildren:!1,defaults:Er,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Qe.stringFilter=Ch;var Li=[],Ys={},Lv=[],hc=0,Fv=0,po=function(t){return(Ys[t]||Lv).map(function(e){return e()})},ko=function(){var t=Date.now(),e=[];t-hc>2&&(po("matchMediaInit"),Li.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,u;for(o in i)a=Mn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,u=1);u&&(n.revert(),l&&e.push(n))}),po("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),hc=t,po("matchMedia"))},Hh=function(){function r(e,n){this.selector=n&&zo(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Fv++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){re(n)&&(s=i,i=n,n=re);var a=this,o=function(){var u=Zt,c=a.selector,h;return u&&u!==a&&u.data.push(a),s&&(a.selector=zo(s)),Zt=a,h=i.apply(a,arguments),re(h)&&a._r.push(h),Zt=u,a.selector=c,a.isReverted=!1,h};return a.last=o,n===re?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Zt;Zt=null,n(this),Zt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof ce&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(n)}),l=s.data.length;l--;)u=s.data[l],u instanceof Fe?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof ce)&&u.revert&&u.revert(n);s._r.forEach(function(c){return c(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Li.length;a--;)Li[a].id===this.id&&Li.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),Uv=function(){function r(e){this.contexts=[],this.scope=e,Zt&&Zt.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){wn(n)||(n={matches:n});var a=new Hh(0,s||this.scope),o=a.conditions={},l,u,c;Zt&&!a.selector&&(a.selector=Zt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(u in n)u==="all"?c=1:(l=Mn.matchMedia(n[u]),l&&(Li.indexOf(a)<0&&Li.push(a),(o[u]=l.matches)&&(c=1),l.addListener?l.addListener(ko):l.addEventListener("change",ko)));return c&&i(a,function(h){return a.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ra={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Ah(i)})},timeline:function(t){return new Fe(t)},getTweensOf:function(t,e){return Qt.getTweensOf(t,e)},getProperty:function(t,e,n,i){xe(t)&&(t=cn(t)[0]);var s=Ci(t||{}).get,a=n?fh:dh;return n==="native"&&(n=""),t&&(e?a((je[e]&&je[e].get||s)(t,e,n,i)):function(o,l,u){return a((je[o]&&je[o].get||s)(t,o,l,u))})},quickSetter:function(t,e,n){if(t=cn(t),t.length>1){var i=t.map(function(c){return Ve.quickSetter(c,e,n)}),s=i.length;return function(c){for(var h=s;h--;)i[h](c)}}t=t[0]||{};var a=je[e],o=Ci(t),l=o.harness&&(o.harness.aliases||{})[e]||e,u=a?function(c){var h=new a;sr._pt=0,h.init(t,n?c+n:c,sr,0,[t]),h.render(1,h),sr._pt&&xl(1,sr)}:o.set(t,l);return a?u:function(c){return u(t,l,n?c+n:c,o,1)}},quickTo:function(t,e,n){var i,s=Ve.to(t,Ni((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,u,c){return s.resetTo(e,l,u,c)};return a.tween=s,a},isTweening:function(t){return Qt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Pi(t.ease,Er.ease)),ac(Er,t||{})},config:function(t){return ac(Qe,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!je[o]&&!tn[o]&&ts(e+" effect requires "+o+" plugin.")}),uo[e]=function(o,l,u){return n(cn(o),hn(l||{},s),u)},a&&(Fe.prototype[e]=function(o,l,u){return this.add(uo[e](o,wn(l)?l:(u=l)&&{},this),u)})},registerEase:function(t,e){Bt[t]=Pi(e)},parseEase:function(t,e){return arguments.length?Pi(t,e):Bt},getById:function(t){return Qt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Fe(t),i,s;for(n.smoothChildTiming=ze(t.smoothChildTiming),Qt.remove(n),n._dp=0,n._time=n._tTime=Qt._time,i=Qt._first;i;)s=i._next,(e||!(!i._dur&&i instanceof ce&&i.vars.onComplete===i._targets[0]))&&yn(n,i,i._start-i._delay),i=s;return yn(Qt,n,0),n},context:function(t,e){return t?new Hh(t,e):Zt},matchMedia:function(t){return new Uv(t)},matchMediaRefresh:function(){return Li.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ko()},addEventListener:function(t,e){var n=Ys[t]||(Ys[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ys[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:dv,wrapYoyo:fv,distribute:Eh,random:Sh,snap:Mh,normalize:hv,getUnit:be,clamp:ov,splitColor:bh,toArray:cn,selector:zo,mapRange:Dh,pipe:uv,unitize:cv,interpolate:pv,shuffle:xh},install:oh,effects:uo,ticker:Ke,updateRoot:Fe.updateRoot,plugins:je,globalTimeline:Qt,core:{PropTween:He,globals:lh,Tween:ce,Timeline:Fe,Animation:rs,getCache:Ci,_removeLinkedListItem:Ma,reverting:function(){return we},context:function(t){return t&&Zt&&(Zt.data.push(t),t._ctx=Zt),Zt},suppressOverwrites:function(t){return ol=t}}};Ge("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ra[r]=ce[r]});Ke.add(Fe.updateRoot);sr=ra.to({},{duration:0});var Iv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Nv=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Iv(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},mo=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,u;if(xe(s)&&(l={},Ge(s,function(c){return l[c]=1}),s=l),e){l={};for(u in s)l[u]=e(s[u]);s=l}Nv(o,s)}}}},Ve=ra.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)we?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},mo("roundProps",Go),mo("modifiers"),mo("snap",Mh))||ra;ce.version=Fe.version=Ve.version="3.12.5";ah=1;ul()&&yr();Bt.Power0;Bt.Power1;Bt.Power2;Bt.Power3;Bt.Power4;Bt.Linear;Bt.Quad;Bt.Cubic;Bt.Quart;Bt.Quint;Bt.Strong;Bt.Elastic;Bt.Back;Bt.SteppedEase;Bt.Bounce;Bt.Sine;Bt.Expo;Bt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dc,Jn,dr,El,Di,fc,Ml,Ov=function(){return typeof window<"u"},Vn={},Mi=180/Math.PI,fr=Math.PI/180,nr=Math.atan2,pc=1e8,Sl=/([A-Z])/g,Bv=/(left|right|width|margin|padding|x)/i,zv=/[\s,\(]\S/,Dn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vo=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Gv=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Hv=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},kv=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},kh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Vh=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Vv=function(t,e,n){return t.style[e]=n},Wv=function(t,e,n){return t.style.setProperty(e,n)},Xv=function(t,e,n){return t._gsap[e]=n},qv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Yv=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},$v=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},te="transform",ke=te+"Origin",jv=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in Vn&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Dn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Bn(i,o)}):this.tfm[t]=a.x?a[t]:Bn(i,t),t===ke&&(this.tfm.zOrigin=a.zOrigin);else return Dn.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(te)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ke,e,"")),t=te}(s||e)&&this.props.push(t,e,s[t])},Wh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Kv=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Sl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ml(),(!s||!s.isStart)&&!n[te]&&(Wh(n),i.zOrigin&&n[ke]&&(n[ke]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Xh=function(t,e){var n={target:t,props:[],revert:Kv,save:jv};return t._gsap||Ve.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},qh,Wo=function(t,e){var n=Jn.createElementNS?Jn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Jn.createElement(t);return n&&n.style?n:Jn.createElement(t)},bn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Sl,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Dr(e)||e,1)||""},mc="O,Moz,ms,Ms,Webkit".split(","),Dr=function(t,e,n){var i=e||Di,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(mc[a]+t in s););return a<0?null:(a===3?"ms":a>=0?mc[a]:"")+t},Xo=function(){Ov()&&window.document&&(dc=window,Jn=dc.document,dr=Jn.documentElement,Di=Wo("div")||{style:{}},Wo("div"),te=Dr(te),ke=te+"Origin",Di.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",qh=!!Dr("perspective"),Ml=Ve.core.reverting,El=1)},_o=function r(t){var e=Wo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(dr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),dr.removeChild(e),this.style.cssText=s,a},_c=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Yh=function(t){var e;try{e=t.getBBox()}catch{e=_o.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===_o||(e=_o.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+_c(t,["x","cx","x1"])||0,y:+_c(t,["y","cy","y1"])||0,width:0,height:0}:e},$h=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Yh(t))},Oi=function(t,e){if(e){var n=t.style,i;e in Vn&&e!==ke&&(e=te),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Sl,"-$1").toLowerCase())):n.removeAttribute(e)}},Qn=function(t,e,n,i,s,a){var o=new He(t._pt,e,n,0,1,a?Vh:kh);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},gc={deg:1,rad:1,turn:1},Zv={grid:1,flex:1},li=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Di.style,l=Bv.test(e),u=t.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",m=i==="%",g,_,p,f;if(i===a||!s||gc[i]||gc[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),f=t.getCTM&&$h(t),(m||a==="%")&&(Vn[e]||~e.indexOf("adius")))return g=f?t.getBBox()[l?"width":"height"]:t[c],ae(m?s/g*h:s/100*g);if(o[l?"width":"height"]=h+(d?a:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!u?t:t.parentNode,f&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Jn||!_.appendChild)&&(_=Jn.body),p=_._gsap,p&&m&&p.width&&l&&p.time===Ke.time&&!p.uncache)return ae(s/p.width*h);if(m&&(e==="height"||e==="width")){var E=t.style[e];t.style[e]=h+i,g=t[c],E?t.style[e]=E:Oi(t,e)}else(m||a==="%")&&!Zv[bn(_,"display")]&&(o.position=bn(t,"position")),_===t&&(o.position="static"),_.appendChild(Di),g=Di[c],_.removeChild(Di),o.position="absolute";return l&&m&&(p=Ci(_),p.time=Ke.time,p.width=_[c]),ae(d?g*s/h:g&&s?h/g*s:0)},Bn=function(t,e,n,i){var s;return El||Xo(),e in Dn&&e!=="transform"&&(e=Dn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Vn[e]&&e!=="transform"?(s=as(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:aa(bn(t,ke))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=sa[e]&&sa[e](t,e,n)||bn(t,e)||ch(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?li(t,e,s,n)+n:s},Jv=function(t,e,n,i){if(!n||n==="none"){var s=Dr(e,t,1),a=s&&bn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=bn(t,"borderTopColor"))}var o=new He(this._pt,t.style,e,0,1,zh),l=0,u=0,c,h,d,m,g,_,p,f,E,x,M,y;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=t.style[e],t.style[e]=i,i=bn(t,e)||i,_?t.style[e]=_:Oi(t,e)),c=[n,i],Ch(c),n=c[0],i=c[1],d=n.match(rr)||[],y=i.match(rr)||[],y.length){for(;h=rr.exec(i);)p=h[0],E=i.substring(l,h.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),p!==(_=d[u++]||"")&&(m=parseFloat(_)||0,M=_.substr((m+"").length),p.charAt(1)==="="&&(p=hr(m,p)+M),f=parseFloat(p),x=p.substr((f+"").length),l=rr.lastIndex-x.length,x||(x=x||Qe.units[e]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(m=li(t,e,_,x)||0),o._pt={_next:o._pt,p:E||u===1?E:",",s:m,c:f-m,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Vh:kh;return rh.test(i)&&(o.e=0),this._pt=o,o},vc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Qv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=vc[n]||n,e[1]=vc[i]||i,e.join(" ")},tx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,u;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)o=s[u],Vn[o]&&(l=1,o=o==="transformOrigin"?ke:te),Oi(n,o);l&&(Oi(n,te),a&&(a.svg&&n.removeAttribute("transform"),as(n,1),a.uncache=1,Wh(i)))}},sa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new He(t._pt,e,n,0,0,tx);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},ss=[1,0,0,1,0,0],jh={},Kh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},xc=function(t){var e=bn(t,te);return Kh(e)?ss:e.substr(7).match(ih).map(ae)},yl=function(t,e){var n=t._gsap||Ci(t),i=t.style,s=xc(t),a,o,l,u;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ss:s):(s===ss&&!t.offsetParent&&t!==dr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(u=1,o=t.nextElementSibling,dr.appendChild(t)),s=xc(t),l?i.display=l:Oi(t,"display"),u&&(o?a.insertBefore(t,o):a?a.appendChild(t):dr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},qo=function(t,e,n,i,s,a){var o=t._gsap,l=s||yl(t,!0),u=o.xOrigin||0,c=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,m=l[0],g=l[1],_=l[2],p=l[3],f=l[4],E=l[5],x=e.split(" "),M=parseFloat(x[0])||0,y=parseFloat(x[1])||0,w,T,P,v;n?l!==ss&&(T=m*p-g*_)&&(P=M*(p/T)+y*(-_/T)+(_*E-p*f)/T,v=M*(-g/T)+y*(m/T)-(m*E-g*f)/T,M=P,y=v):(w=Yh(t),M=w.x+(~x[0].indexOf("%")?M/100*w.width:M),y=w.y+(~(x[1]||x[0]).indexOf("%")?y/100*w.height:y)),i||i!==!1&&o.smooth?(f=M-u,E=y-c,o.xOffset=h+(f*m+E*_)-f,o.yOffset=d+(f*g+E*p)-E):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=y,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[ke]="0px 0px",a&&(Qn(a,o,"xOrigin",u,M),Qn(a,o,"yOrigin",c,y),Qn(a,o,"xOffset",h,o.xOffset),Qn(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+y)},as=function(t,e){var n=t._gsap||new Fh(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),u=bn(t,ke)||"0",c,h,d,m,g,_,p,f,E,x,M,y,w,T,P,v,A,V,X,Y,R,B,W,k,K,j,$,L,z,at,st,lt;return c=h=d=_=p=f=E=x=M=0,m=g=1,n.svg=!!(t.getCTM&&$h(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[te]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[te]!=="none"?l[te]:"")),i.scale=i.rotate=i.translate="none"),T=yl(t,n.svg),n.svg&&(n.uncache?(K=t.getBBox(),u=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),qo(t,k||u,!!k||n.originIsAbsolute,n.smooth!==!1,T)),y=n.xOrigin||0,w=n.yOrigin||0,T!==ss&&(V=T[0],X=T[1],Y=T[2],R=T[3],c=B=T[4],h=W=T[5],T.length===6?(m=Math.sqrt(V*V+X*X),g=Math.sqrt(R*R+Y*Y),_=V||X?nr(X,V)*Mi:0,E=Y||R?nr(Y,R)*Mi+_:0,E&&(g*=Math.abs(Math.cos(E*fr))),n.svg&&(c-=y-(y*V+w*Y),h-=w-(y*X+w*R))):(lt=T[6],at=T[7],$=T[8],L=T[9],z=T[10],st=T[11],c=T[12],h=T[13],d=T[14],P=nr(lt,z),p=P*Mi,P&&(v=Math.cos(-P),A=Math.sin(-P),k=B*v+$*A,K=W*v+L*A,j=lt*v+z*A,$=B*-A+$*v,L=W*-A+L*v,z=lt*-A+z*v,st=at*-A+st*v,B=k,W=K,lt=j),P=nr(-Y,z),f=P*Mi,P&&(v=Math.cos(-P),A=Math.sin(-P),k=V*v-$*A,K=X*v-L*A,j=Y*v-z*A,st=R*A+st*v,V=k,X=K,Y=j),P=nr(X,V),_=P*Mi,P&&(v=Math.cos(P),A=Math.sin(P),k=V*v+X*A,K=B*v+W*A,X=X*v-V*A,W=W*v-B*A,V=k,B=K),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,f=180-f),m=ae(Math.sqrt(V*V+X*X+Y*Y)),g=ae(Math.sqrt(W*W+lt*lt)),P=nr(B,W),E=Math.abs(P)>2e-4?P*Mi:0,M=st?1/(st<0?-st:st):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Kh(bn(t,te)),k&&t.setAttribute("transform",k))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(m*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),e=e||n.uncache,n.x=c-((n.xPercent=c&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=ae(m),n.scaleY=ae(g),n.rotation=ae(_)+o,n.rotationX=ae(p)+o,n.rotationY=ae(f)+o,n.skewX=E+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(u.split(" ")[2])||!e&&n.zOrigin||0)&&(i[ke]=aa(u)),n.xOffset=n.yOffset=0,n.force3D=Qe.force3D,n.renderTransform=n.svg?nx:qh?Zh:ex,n.uncache=0,n},aa=function(t){return(t=t.split(" "))[0]+" "+t[1]},go=function(t,e,n){var i=be(e);return ae(parseFloat(e)+parseFloat(li(t,"x",n+"px",i)))+i},ex=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Zh(t,e)},gi="0deg",zr="0px",vi=") ",Zh=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,u=n.rotation,c=n.rotationY,h=n.rotationX,d=n.skewX,m=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,f=n.force3D,E=n.target,x=n.zOrigin,M="",y=f==="auto"&&t&&t!==1||f===!0;if(x&&(h!==gi||c!==gi)){var w=parseFloat(c)*fr,T=Math.sin(w),P=Math.cos(w),v;w=parseFloat(h)*fr,v=Math.cos(w),a=go(E,a,T*v*-x),o=go(E,o,-Math.sin(w)*-x),l=go(E,l,P*v*-x+x)}p!==zr&&(M+="perspective("+p+vi),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(y||a!==zr||o!==zr||l!==zr)&&(M+=l!==zr||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+vi),u!==gi&&(M+="rotate("+u+vi),c!==gi&&(M+="rotateY("+c+vi),h!==gi&&(M+="rotateX("+h+vi),(d!==gi||m!==gi)&&(M+="skew("+d+", "+m+vi),(g!==1||_!==1)&&(M+="scale("+g+", "+_+vi),E.style[te]=M||"translate(0, 0)"},nx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,u=n.skewX,c=n.skewY,h=n.scaleX,d=n.scaleY,m=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,f=n.yOffset,E=n.forceCSS,x=parseFloat(a),M=parseFloat(o),y,w,T,P,v;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=fr,u*=fr,y=Math.cos(l)*h,w=Math.sin(l)*h,T=Math.sin(l-u)*-d,P=Math.cos(l-u)*d,u&&(c*=fr,v=Math.tan(u-c),v=Math.sqrt(1+v*v),T*=v,P*=v,c&&(v=Math.tan(c),v=Math.sqrt(1+v*v),y*=v,w*=v)),y=ae(y),w=ae(w),T=ae(T),P=ae(P)):(y=h,P=d,w=T=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=li(m,"x",a,"px"),M=li(m,"y",o,"px")),(g||_||p||f)&&(x=ae(x+g-(g*y+_*T)+p),M=ae(M+_-(g*w+_*P)+f)),(i||s)&&(v=m.getBBox(),x=ae(x+i/100*v.width),M=ae(M+s/100*v.height)),v="matrix("+y+","+w+","+T+","+P+","+x+","+M+")",m.setAttribute("transform",v),E&&(m.style[te]=v)},ix=function(t,e,n,i,s){var a=360,o=xe(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Mi:1),u=l-i,c=i+u+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(u%=a,u!==u%(a/2)&&(u+=u<0?a:-a)),h==="cw"&&u<0?u=(u+a*pc)%a-~~(u/a)*a:h==="ccw"&&u>0&&(u=(u-a*pc)%a-~~(u/a)*a)),t._pt=d=new He(t._pt,e,n,i,u,Gv),d.e=c,d.u="deg",t._props.push(n),d},Ec=function(t,e){for(var n in e)t[n]=e[n];return t},rx=function(t,e,n){var i=Ec({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,u,c,h,d,m,g;i.svg?(u=n.getAttribute("transform"),n.setAttribute("transform",""),a[te]=e,o=as(n,1),Oi(n,te),n.setAttribute("transform",u)):(u=getComputedStyle(n)[te],a[te]=e,o=as(n,1),a[te]=u);for(l in Vn)u=i[l],c=o[l],u!==c&&s.indexOf(l)<0&&(m=be(u),g=be(c),h=m!==g?li(n,l,u,g):parseFloat(u),d=parseFloat(c),t._pt=new He(t._pt,o,l,h,d-h,Vo),t._pt.u=g||0,t._props.push(l));Ec(o,i)};Ge("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});sa[t>1?"border"+r:r]=function(o,l,u,c,h){var d,m;if(arguments.length<4)return d=a.map(function(g){return Bn(o,g,u)}),m=d.join(" "),m.split(d[0]).length===5?d[0]:m;d=(c+"").split(" "),m={},a.forEach(function(g,_){return m[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,m,h)}});var Jh={name:"css",register:Xo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,u,c,h,d,m,g,_,p,f,E,x,M,y,w,T,P;El||Xo(),this.styles=this.styles||Xh(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(c=e[_],!(je[_]&&Uh(_,e,n,i,t,s)))){if(m=typeof c,g=sa[_],m==="function"&&(c=c.call(n,i,t,s),m=typeof c),m==="string"&&~c.indexOf("random(")&&(c=ns(c)),g)g(this,t,_,c,n)&&(T=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(t).getPropertyValue(_)+"").trim(),c+="",ri.lastIndex=0,ri.test(u)||(p=be(u),f=be(c)),f?p!==f&&(u=li(t,_,u,f)+f):p&&(c+=p),this.add(o,"setProperty",u,c,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(m!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],xe(u)&&~u.indexOf("random(")&&(u=ns(u)),be(u+"")||u==="auto"||(u+=Qe.units[_]||be(Bn(t,_))||""),(u+"").charAt(1)==="="&&(u=Bn(t,_))):u=Bn(t,_),d=parseFloat(u),E=m==="string"&&c.charAt(1)==="="&&c.substr(0,2),E&&(c=c.substr(2)),h=parseFloat(c),_ in Dn&&(_==="autoAlpha"&&(d===1&&Bn(t,"visibility")==="hidden"&&h&&(d=0),P.push("visibility",0,o.visibility),Qn(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Dn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Vn,x){if(this.styles.save(_),M||(y=t._gsap,y.renderTransform&&!e.parseTransform||as(t,e.parseTransform),w=e.smoothOrigin!==!1&&y.smooth,M=this._pt=new He(this._pt,o,te,0,1,y.renderTransform,y,0,-1),M.dep=1),_==="scale")this._pt=new He(this._pt,y,"scaleY",y.scaleY,(E?hr(y.scaleY,E+h):h)-y.scaleY||0,Vo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(ke,0,o[ke]),c=Qv(c),y.svg?qo(t,c,0,w,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==y.zOrigin&&Qn(this,y,"zOrigin",y.zOrigin,f),Qn(this,o,_,aa(u),aa(c)));continue}else if(_==="svgOrigin"){qo(t,c,1,w,0,this);continue}else if(_ in jh){ix(this,y,_,d,E?hr(d,E+c):c);continue}else if(_==="smoothOrigin"){Qn(this,y,"smooth",y.smooth,c);continue}else if(_==="force3D"){y[_]=c;continue}else if(_==="transform"){rx(this,c,t);continue}}else _ in o||(_=Dr(_)||_);if(x||(h||h===0)&&(d||d===0)&&!zv.test(c)&&_ in o)p=(u+"").substr((d+"").length),h||(h=0),f=be(c)||(_ in Qe.units?Qe.units[_]:p),p!==f&&(d=li(t,_,u,f)),this._pt=new He(this._pt,x?y:o,_,d,(E?hr(d,E+h):h)-d,!x&&(f==="px"||_==="zIndex")&&e.autoRound!==!1?kv:Vo),this._pt.u=f||0,p!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=Hv);else if(_ in o)Jv.call(this,t,_,u,E?E+c:c);else if(_ in t)this.add(t,_,u||t[_],E?E+c:c,i,s);else if(_!=="parseTransform"){hl(_,c);continue}x||(_ in o?P.push(_,0,o[_]):P.push(_,1,u||t[_])),a.push(_)}}T&&Gh(this)},render:function(t,e){if(e.tween._time||!Ml())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Bn,aliases:Dn,getSetter:function(t,e,n){var i=Dn[e];return i&&i.indexOf(",")<0&&(e=i),e in Vn&&e!==ke&&(t._gsap.x||Bn(t,"x"))?n&&fc===n?e==="scale"?qv:Xv:(fc=n||{})&&(e==="scale"?Yv:$v):t.style&&!ll(t.style[e])?Vv:~e.indexOf("-")?Wv:vl(t,e)},core:{_removeProperty:Oi,_getMatrix:yl}};Ve.utils.checkPrefix=Dr;Ve.core.getStyleSaver=Xh;(function(r,t,e,n){var i=Ge(r+","+t+","+e,function(s){Vn[s]=1});Ge(t,function(s){Qe.units[s]="deg",jh[s]=1}),Dn[i[13]]=r+","+t,Ge(n,function(s){var a=s.split(":");Dn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ge("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Qe.units[r]="px"});Ve.registerPlugin(Jh);var St=Ve.registerPlugin(Jh)||Ve;St.core.Tween;/*!
 * strings: 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sx=/(?:^\s+|\s+$)/g,ax=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function Qh(r){var t=r.nodeType,e="";if(t===1||t===9||t===11){if(typeof r.textContent=="string")return r.textContent;for(r=r.firstChild;r;r=r.nextSibling)e+=Qh(r)}else if(t===3||t===4)return r.nodeValue;return e}function Yo(r,t,e,n){for(var i=r.firstChild,s=[],a;i;)i.nodeType===3?(a=(i.nodeValue+"").replace(/^\n+/g,""),n||(a=a.replace(/\s+/g," ")),s.push.apply(s,td(a,t,e,n))):(i.nodeName+"").toLowerCase()==="br"?s[s.length-1]+="<br>":s.push(i.outerHTML),i=i.nextSibling;for(a=s.length;a--;)s[a]==="&"&&s.splice(a,1,"&amp;");return s}function td(r,t,e,n){if(r+="",e&&(r=r.trim?r.trim():r.replace(sx,"")),t&&t!=="")return r.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(t);for(var i=[],s=r.length,a=0,o,l;a<s;a++)l=r.charAt(a),(l.charCodeAt(0)>=55296&&l.charCodeAt(0)<=56319||r.charCodeAt(a+1)>=65024&&r.charCodeAt(a+1)<=65039)&&(o=((r.substr(a,12).split(ax)||[])[1]||"").length||2,l=r.substr(a,o),i.emoji=1,a+=o-1),i.push(l===">"?"&gt;":l==="<"?"&lt;":n&&l===" "&&(r.charAt(a-1)===" "||r.charAt(a+1)===" ")?"&nbsp;":l);return i}/*!
 * TextPlugin 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Wr,Vs,ox=function(){return Wr||typeof window<"u"&&(Wr=window.gsap)&&Wr.registerPlugin&&Wr},ps={version:"3.12.5",name:"text",init:function(t,e,n){typeof e!="object"&&(e={value:e});var i=t.nodeName.toUpperCase(),s=this,a=e,o=a.newClass,l=a.oldClass,u=a.preserveSpaces,c=a.rtl,h=s.delimiter=e.delimiter||"",d=s.fillChar=e.fillChar||(e.padSpace?"&nbsp;":""),m,g,_,p,f,E,x,M;if(s.svg=t.getBBox&&(i==="TEXT"||i==="TSPAN"),!("innerHTML"in t)&&!s.svg)return!1;if(s.target=t,!("value"in e)){s.text=s.original=[""];return}for(_=Yo(t,h,!1,u),Vs||(Vs=document.createElement("div")),Vs.innerHTML=e.value,g=Yo(Vs,h,!1,u),s.from=n._from,(s.from||c)&&!(c&&s.from)&&(i=_,_=g,g=i),s.hasClass=!!(o||l),s.newClass=c?l:o,s.oldClass=c?o:l,i=_.length-g.length,m=i<0?_:g,i<0&&(i=-i);--i>-1;)m.push(d);if(e.type==="diff"){for(p=0,f=[],E=[],x="",i=0;i<g.length;i++)M=g[i],M===_[i]?x+=M:(f[p]=x+M,E[p++]=x+_[i],x="");g=f,_=E,x&&(g.push(x),_.push(x))}e.speed&&n.duration(Math.min(.05/e.speed*m.length,e.maxDuration||9999)),s.rtl=c,s.original=_,s.text=g,s._props.push("text")},render:function(t,e){t>1?t=1:t<0&&(t=0),e.from&&(t=1-t);var n=e.text,i=e.hasClass,s=e.newClass,a=e.oldClass,o=e.delimiter,l=e.target,u=e.fillChar,c=e.original,h=e.rtl,d=n.length,m=(h?1-t:t)*d+.5|0,g,_,p;i&&t?(g=s&&m,_=a&&m!==d,p=(g?"<span class='"+s+"'>":"")+n.slice(0,m).join(o)+(g?"</span>":"")+(_?"<span class='"+a+"'>":"")+o+c.slice(m).join(o)+(_?"</span>":"")):p=n.slice(0,m).join(o)+o+c.slice(m).join(o),e.svg?l.textContent=p:l.innerHTML=u==="&nbsp;"&&~p.indexOf("  ")?p.split("  ").join("&nbsp;&nbsp;"):p}};ps.splitInnerHTML=Yo;ps.emojiSafeSplit=td;ps.getText=Qh;ox()&&Wr.registerPlugin(ps);var lx=function(){return performance.now()},ux=function(){function r(){this._tweens={},this._tweensAddedDuringUpdate={}}return r.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map(function(e){return t._tweens[e]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},r.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},r.prototype.update=function(t,e){t===void 0&&(t=lx()),e===void 0&&(e=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var s=this._tweens[n[i]],a=!e;s&&s.update(t,a)===!1&&!e&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},r}(),cx=new ux,Cn=cx;Cn.getAll.bind(Cn);Cn.removeAll.bind(Cn);Cn.add.bind(Cn);Cn.remove.bind(Cn);Cn.update.bind(Cn);var hx=`uniform float uTime;
uniform float uBigWavesElevation;
uniform vec2 uBigWavesFrequency;
uniform float uBigWavesSpeed;

uniform float uSmallWavesElevation;
uniform float uSmallWavesFrequency;
uniform float uSmallWavesSpeed;
uniform float uSmallIterations;

varying float vElevation;

vec4 permute(vec4 x)
{
    return mod(((x*34.0)+1.0)*x, 289.0);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float cnoise(vec3 P)
{
    vec3 Pi0 = floor(P); 
    vec3 Pi1 = Pi0 + vec3(1.0); 
    Pi0 = mod(Pi0, 289.0);
    Pi1 = mod(Pi1, 289.0);
    vec3 Pf0 = fract(P); 
    vec3 Pf1 = Pf0 - vec3(1.0); 
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;

    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);

    vec4 gx0 = ixy0 / 7.0;
    vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);

    vec4 gx1 = ixy1 / 7.0;
    vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);

    vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
    vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
    vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
    vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
    vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
    vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
    vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
    vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;

    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);

    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
    return 2.2 * n_xyz;
}

void main()
{
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    
    float elevation = sin(modelPosition.y * uBigWavesFrequency.y + uTime * uBigWavesSpeed) *
                      sin(modelPosition.z * uBigWavesFrequency.x + uTime * uBigWavesSpeed) *
                      uBigWavesElevation;

    for(float i = 1.0; i <= uSmallIterations; i++)
    {
        elevation -= abs(cnoise(vec3(modelPosition.xy * uSmallWavesFrequency * i, uTime * uSmallWavesSpeed)) * uSmallWavesElevation / i);
    }
    
    modelPosition.y += elevation;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    vElevation = elevation;
}`,dx=`uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;
uniform float uColorOffset;
uniform float uColorMultiplier;

varying float vElevation;

void main()
{
    float mixStrength = (vElevation + uColorOffset) * uColorMultiplier;
    vec3 color = mix(uDepthColor, uSurfaceColor, mixStrength);
    
    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
}`;St.registerPlugin(ps);let Mc=document.getElementsByClassName("opTextUX")[0],$o=document.getElementsByClassName("opTextKH")[0];$o.setAttribute("style","white-space: pre;");let Sc=document.getElementsByClassName("opTextW")[0];const en=new W0({width:340}),ui={},Fi={materialColor:"#002724"};en.addColor(Fi,"materialColor").onChange(()=>{material.color.set(Fi.materialColor),sd.color.set(Fi.materialColor)});const fx=document.querySelector("canvas.webgl"),Da=new x0,ed=new ds(1.25,3,512,512);ui.depthColor="#e7d8bb";ui.surfaceColor="#ba592d";en.addColor(ui,"depthColor").onChange(()=>{Ue.uniforms.uDepthColor.value.set(ui.depthColor)});en.addColor(ui,"surfaceColor").onChange(()=>{Ue.uniforms.uSurfaceColor.value.set(ui.surfaceColor)});const Ue=new ai({vertexShader:hx,fragmentShader:dx,uniforms:{uTime:{value:0},uBigWavesElevation:{value:.2},uBigWavesFrequency:{value:new Ht(4,1.5)},uBigWavesSpeed:{value:.75},uSmallWavesElevation:{value:.15},uSmallWavesFrequency:{value:3},uSmallWavesSpeed:{value:.2},uSmallIterations:{value:4},uDepthColor:{value:new Gt(ui.depthColor)},uSurfaceColor:{value:new Gt(ui.surfaceColor)},uColorOffset:{value:.08},uColorMultiplier:{value:5}}});en.add(Ue.uniforms.uBigWavesElevation,"value").min(0).max(1).step(.001).name("uBigWavesElevation");en.add(Ue.uniforms.uBigWavesFrequency.value,"x").min(0).max(10).step(.001).name("uBigWavesFrequencyX");en.add(Ue.uniforms.uBigWavesFrequency.value,"y").min(0).max(10).step(.001).name("uBigWavesFrequencyY");en.add(Ue.uniforms.uBigWavesSpeed,"value").min(0).max(4).step(.001).name("uBigWavesSpeed");en.add(Ue.uniforms.uSmallWavesElevation,"value").min(0).max(1).step(.001).name("uSmallWavesElevation");en.add(Ue.uniforms.uSmallWavesFrequency,"value").min(0).max(30).step(.001).name("uSmallWavesFrequency");en.add(Ue.uniforms.uSmallWavesSpeed,"value").min(0).max(4).step(.001).name("uSmallWavesSpeed");en.add(Ue.uniforms.uSmallIterations,"value").min(0).max(5).step(1).name("uSmallIterations");en.add(Ue.uniforms.uColorOffset,"value").min(0).max(1).step(.001).name("uColorOffset");en.add(Ue.uniforms.uColorMultiplier,"value").min(0).max(10).step(.001).name("uColorMultiplier");const os=new Jt(ed,Ue);os.rotation.x=Math.PI*2;os.position.set(2.45,-.4,.1);const oa=new Jt(ed,Ue);oa.position.set(2.45,3.48,.1);function Pr(r,t,e,n){const i=r/2-e,s=t/2-e,a=r/2,o=t/2,l=e/r,u=(r-e)/r,c=e/t,h=(t-e)/t;let d=[-i,-o,0,i,-o,0,i,o,0,-i,-o,0,i,o,0,-i,o,0,-a,-s,0,-i,-s,0,-i,s,0,-a,-s,0,-i,s,0,-a,s,0,i,-s,0,a,-s,0,a,s,0,i,-s,0,a,s,0,i,s,0],m=[l,0,u,0,u,1,l,0,u,1,l,1,0,c,l,c,l,h,0,c,l,h,0,h,u,c,1,c,1,h,u,c,1,h,u,h],g=0,_,p,f,E,x,M,y,w,T;for(let v=0;v<n*4;v++)_=Math.PI*2*(v+1)/(4*n),M=Math.cos(g),y=Math.sin(g),w=Math.cos(_),T=Math.sin(_),p=v<n||v>=3*n?i:-i,f=v<2*n?s:-s,d.push(p,f,0,p+e*M,f+e*y,0,p+e*w,f+e*T,0),E=v<n||v>=3*n?u:l,x=v<2*n?h:c,m.push(E,x,E+l*M,x+c*y,E+l*w,x+c*T),g=_;const P=new xn;return P.setAttribute("position",new Je(new Float32Array(d),3)),P.setAttribute("uv",new Je(new Float32Array(m),2)),P}const px=new T0,nd=px.load("textures/gradients/3.jpg");nd.magFilter=Te;const zi=new M0({color:Fi.materialColor,gradientMap:nd});new wr({color:Fi.materialColor,transparent:!0,opacity:.5});const ms=new wr({color:Fi.materialColor}),Lr=new Cr(1,.25,.25,1),vn=4,Ti=new Jt(new rl(.8,.4,16,60),zi),ar=new Jt(new Pr(6.5,.75,.05,4),ms),la=new Jt(new Pr(1,.75,.05,4),ms),ua=new Jt(new Pr(1.5,.5,.05,4),ms),jr=new Jt(new Pr(1,3.75,.05,4),ms),ca=new Jt(new Pr(1.5,2,.05,4),ms),pr=new Jt(new Pr(.1,.75,.05,4),new wr({color:"#002724"})),mr=new Jt(new ds(.25,.25,1,1),new wr({color:"#002724"})),ha=new Jt(Lr,zi),da=new Jt(Lr,zi),fa=new Jt(Lr,zi),pa=new Jt(Lr,zi),ma=new Jt(Lr,zi);new Jt(Lr,zi);Ti.position.set(-1,-vn*0,-2.5);ua.position.set(2.5,-(vn*0)+1.85,0);jr.position.set(2.25,-(vn*0)-1.325,0);ca.position.set(2.5,-(vn*0)+.35,0);ar.position.set(-2,-(vn*0)-.75,0);la.position.set(2,-(vn*0)-.75,0);pr.position.set(1.37,-(vn*0)-.75,0);mr.position.set(-3.65,-(vn*0)+3);ha.position.set(-5.8,1.2,.5);da.position.set(-5.8,.6,.5);fa.position.set(-5.8,0,.5);pa.position.set(-5.8,-.6,.5);ma.position.set(-5.8,-1.2,.5);Da.add(Ti,jr,ca,ar,la,ua,pr,mr,ha,da,fa,pa,ma,os,oa);const Dl=[Ti],id=200,$s=new Float32Array(id*3);for(let r=0;r<id;r++)$s[r*3+0]=(Math.random()-.5)*10,$s[r*3+1]=vn*.5-Math.random()*vn*Dl.length,$s[r*3+2]=(Math.random()-.5)*10;const rd=new xn;rd.setAttribute("position",new Je($s,3));const sd=new Qc({color:Fi.materialColor,sizeAttenuation:!0,size:.03});new E0(rd,sd);const ad=new C0("#ffffff",3);ad.position.set(1,1,0);Da.add(ad);const yc=new P0,Ae={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Ae.width=window.innerWidth,Ae.height=window.innerHeight,Ui.aspect=Ae.width/Ae.height,Ui.updateProjectionMatrix(),ls.setSize(Ae.width,Ae.height),ls.setPixelRatio(Math.min(window.devicePixelRatio,2))});const jo=new Ht;window.addEventListener("mousemove",r=>{jo.x=r.clientX/Ae.width*2-1,jo.y=-(r.clientY/Ae.height)*2+1});St.utils.toArray(".nameSection");window.addEventListener("click",()=>{if(lr)switch(lr.object){case pr:console.log("clicked test button"),St.to(Ti.scale,{x:1.7,y:1.7,z:1.5}),St.to(Ti.position,{x:0,y:0}),St.to(jr.position,{x:2.25,y:4}),St.to(ca.position,{x:5,y:.35}),St.to(ar.scale,{x:.25,y:10}),St.to(ar.position,{x:-3.6,y:-.75}),St.to(la.position,{x:2,y:-2.75}),St.to(ua.position,{y:3}),St.to(pr.position,{y:-3}),St.to(mr.position,{x:-3.65,y:1.75}),St.to(os.position,{x:2.45,y:-3.5}),St.to(oa.position,{x:2.45,y:3.6}),St.to(ha.position,{x:-2.8,y:1.2}),St.to(da.position,{x:-2.8,y:.6}),St.to(fa.position,{x:-2.8,y:0}),St.to(pa.position,{x:-2.8,y:-.6}),St.to(ma.position,{x:-2.8,y:-1.2}),St.to(Mc,{text:{value:"",delimiter:""}}),St.to($o,{text:{value:"",delimiter:""}}),St.to(Sc,{text:{value:"",delimiter:""}});break;case mr:console.log("clicked test button 2"),St.to(Ti.scale,{x:1,y:1,z:1}),St.to(Ti.position,{x:-1,y:0,z:-2.5}),St.to(jr.scale,{x:1,y:1,r:0,s:0}),St.to(jr.position,{x:2.25,y:-1.325}),St.to(ca.position,{x:2.5,y:.35}),St.to(ar.scale,{x:1,y:1}),St.to(ar.position,{x:-2,y:-.75}),St.to(la.position,{x:2,y:-.75}),St.to(ua.position,{y:1.85}),St.to(pr.position,{y:-.75}),St.to(mr.position,{x:-3.65,y:2.5}),St.to(os.position,{x:2.45,y:-.4}),St.to(oa.position,{x:2.45,y:3.48}),St.to(ha.position,{x:-5.8,y:1.2}),St.to(da.position,{x:-5.8,y:.6}),St.to(fa.position,{x:-5.8,y:0}),St.to(pa.position,{x:-5.8,y:-.6}),St.to(ma.position,{x:-5.8,y:-1.2}),St.to(Mc,{text:{value:"UX Designer",delimiter:""}}),St.to($o,{text:{value:"Kurt <br>Harron",delimiter:""}}),St.to(Sc,{text:{value:"Welcome Back",delimiter:""}});break}});const or=new Hr;Da.add(or);const Ui=new on(35,Ae.width/Ae.height,.1,100);Ui.position.z=6;or.add(Ui);const ls=new Jc({canvas:fx,alpha:!0});ls.setSize(Ae.width,Ae.height);ls.setPixelRatio(Math.min(window.devicePixelRatio,2));let Ko=window.scrollY,vo=0;window.addEventListener("scroll",()=>{Ko=window.scrollY;const r=Math.round(Ko/Ae.height);r!=vo&&(vo=r,St.to(Dl[vo].rotation,{duration:1.5,ease:"power2.inOut",x:"+=6",y:"+=3",z:"+=5"}))});const Tr={};Tr.x=0;Tr.y=0;window.addEventListener("mousemove",r=>{Tr.x=r.clientX/Ae.width-.5,Tr.y=r.clientY/Ae.height-.5});const mx=new R0;let Dc=0,lr=null;const od=()=>{const r=mx.getElapsedTime(),t=r-Dc;Dc=r,Ui.position.y=-Ko/Ae.height*vn;const e=Tr.x*.05,n=-Tr.y*.05;or.position.x+=(e-or.position.x)*2*t,or.position.y+=(n-or.position.y)*2*t,yc.setFromCamera(jo,Ui);const i=[pr,mr],s=yc.intersectObjects(i);for(const a of i)a.material.color.set("#EAF6FF");for(const a of s)a.object.material.color.set("#0000ff");s.length?(lr===null&&console.log("mouse enter"),lr=s[0]):(lr&&console.log("mouse leave"),lr=null);for(const a of Dl)a.rotation.x+=t*.1,a.rotation.y+=t*.12;Ue.uniforms.uTime.value=r,ls.render(Da,Ui),window.requestAnimationFrame(od)};od();
//# sourceMappingURL=index-b63ce630.js.map
