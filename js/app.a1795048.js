(function(e){function n(n){for(var r,c,u=n[0],i=n[1],l=n[2],h=0,f=[];h<u.length;h++)c=u[h],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,c=1;c<t.length;c++){var u=t[c];0!==a[u]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-0e908050":"49c54b3a","chunk-7df2c1f2":"bb07a66d","chunk-c260b332":"241fde3b","chunk-d9968bca":"f8602f7f","chunk-ba5d6cd0":"c94d94cc","chunk-eb9aa85e":"f6ff0feb","chunk-488b07b7":"e2473688","chunk-ea4a1cd4":"df03ee48","chunk-218aaabf":"4626d028","chunk-3bce015e":"64a539a6","chunk-3c8a4836":"54086c0c","chunk-98161746":"cfec2abd","chunk-9c4e4976":"86d96061","chunk-ba777cf8":"4bcb0623"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-7df2c1f2":1,"chunk-c260b332":1,"chunk-d9968bca":1,"chunk-ba5d6cd0":1,"chunk-eb9aa85e":1,"chunk-488b07b7":1,"chunk-ea4a1cd4":1,"chunk-218aaabf":1,"chunk-3bce015e":1,"chunk-3c8a4836":1,"chunk-98161746":1,"chunk-9c4e4976":1,"chunk-ba777cf8":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-0e908050":"31d6cfe0","chunk-7df2c1f2":"f59cdc94","chunk-c260b332":"6082f834","chunk-d9968bca":"b16655f2","chunk-ba5d6cd0":"873a3263","chunk-eb9aa85e":"f35d2eec","chunk-488b07b7":"de0d2fb7","chunk-ea4a1cd4":"f551f717","chunk-218aaabf":"e4f9de7e","chunk-3bce015e":"f3efac4a","chunk-3c8a4836":"8ed552d6","chunk-98161746":"8330fbf3","chunk-9c4e4976":"d430a880","chunk-ba777cf8":"6a118518"}[e]+".css",a=i.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],h=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(h===r||h===a))return n()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],h=l.getAttribute("data-href");if(h===r||h===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var r=n&&n.target&&n.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],d.parentNode.removeChild(d),t(o)},d.href=a;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=o);var l,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=u(e);var f=new Error;l=function(n){h.onerror=h.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,t[1](f)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:h})}),12e4);h.onerror=h.onload=l,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],h=l.push.bind(l);l.push=n,l=l.slice();for(var f=0;f<l.length;f++)n(l[f]);var d=h;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("cd49")},"3a0b":function(e,n,t){"use strict";t.d(n,"d",(function(){return u})),t.d(n,"e",(function(){return l})),t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return b}));t("a4d3"),t("e01a"),t("d3b7");var r,c=t("b85c"),a=(t("96cf"),t("1da1")),o=t("7a23"),u="https://raw.githubusercontent.com/alkaitagi/Avzag/store/",i=Object(o["x"])([]);function l(e){i.value=e,r=Symbol("lects")}function h(e){var n;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n!==r){t.next=2;break}return t.abrupt("return");case 2:return n=r,t.next=5,e();case 5:case"end":return t.stop()}}),t)})))}function f(e){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+n+".json").then((function(e){return e.json()})).catch((function(){}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function b(e){return s.apply(this,arguments)}function s(){return s=Object(a["a"])(regeneratorRuntime.mark((function e(n){var t,r,a,o,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t={},r=Object(c["a"])(i.value),e.prev=2,r.s();case 4:if((a=r.n()).done){e.next=12;break}return o=a.value,e.next=8,f(o+"/"+n);case 8:u=e.sent,u&&(t[o]=u);case 10:e.next=4;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](2),r.e(e.t0);case 17:return e.prev=17,r.f(),e.finish(17);case 20:return e.abrupt("return",t);case 21:case"end":return e.stop()}}),e,null,[[2,14,17,20]])}))),s.apply(this,arguments)}},"7b4a":function(e,n,t){"use strict";t("a5dc")},a5dc:function(e,n,t){},cd49:function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),c=(t("d3b7"),t("6c02")),a=function(){return Promise.all([t.e("chunk-0e908050"),t.e("chunk-7df2c1f2")]).then(t.bind(null,"36e7"))},o=function(){return t.e("chunk-218aaabf").then(t.bind(null,"900c"))},u=function(){return t.e("chunk-98161746").then(t.bind(null,"acdc"))},i=function(){return Promise.all([t.e("chunk-0e908050"),t.e("chunk-d9968bca"),t.e("chunk-ea4a1cd4")]).then(t.bind(null,"aeb7"))},l=function(){return t.e("chunk-9c4e4976").then(t.bind(null,"31a6"))},h=function(){return Promise.all([t.e("chunk-0e908050"),t.e("chunk-c260b332"),t.e("chunk-d9968bca"),t.e("chunk-ba5d6cd0")]).then(t.bind(null,"3c94"))},f=function(){return t.e("chunk-3c8a4836").then(t.bind(null,"4929"))},d=function(){return t.e("chunk-3bce015e").then(t.bind(null,"3cb6"))},b=function(){return Promise.all([t.e("chunk-c260b332"),t.e("chunk-eb9aa85e"),t.e("chunk-ba777cf8")]).then(t.bind(null,"a1df"))},s=function(){return Promise.all([t.e("chunk-0e908050"),t.e("chunk-c260b332"),t.e("chunk-eb9aa85e"),t.e("chunk-488b07b7")]).then(t.bind(null,"e701"))},p=[{path:"/home",name:"Home",component:a},{path:"/",component:o,children:[{path:"/phonology",name:"Phonology",component:i},{path:"/converter",name:"Converter",component:l},{path:"/phrasebook",name:"Phrasebook",component:h}]},{path:"/editor",component:u,children:[{path:"/editor/phonology",name:"PhonologyEditor",component:f},{path:"/editor/converter",name:"ConverterEditor",component:d},{path:"/editor/phrasebook",name:"PhrasebookEditor",component:b},{path:"/editor/phrasebook/corpus",name:"PhrasebookCorpusEditor",component:s}]},{path:"/:pathMatch(.*)",redirect:{name:"Home"}}],m=Object(c["a"])({history:Object(c["b"])(),routes:p});function k(e,n,t,c,a,o){var u=Object(r["A"])("router-view");return Object(r["r"])(),Object(r["d"])(u)}t("b0c0");var g=t("3a0b"),v=Object(r["h"])({setup:function(){var e=Object(c["c"])(),n=Object(c["d"])();if(e.name&&"Home"!==e.name||n.push(localStorage.url&&localStorage.url!==e.path?{path:localStorage.url}:{name:"Home"}),"Home"!==e.name){var t,a=JSON.parse(null!==(t=localStorage.lects)&&void 0!==t?t:"[]");Object(g["e"])(a)}Object(r["K"])((function(){e.name&&(localStorage.url=e.path)}))}});t("7b4a");v.render=k;var O=v,j={key:0,class:"icon"},y={key:1};function w(e,n,t,c,a,o){return Object(r["r"])(),Object(r["d"])("button",{class:{highlight:e.isOn}},[e.icon?(Object(r["r"])(),Object(r["d"])("p",j,Object(r["C"])(e.icon),1)):Object(r["e"])("",!0),e.text?(Object(r["r"])(),Object(r["d"])("p",y,Object(r["C"])(e.text),1)):Object(r["e"])("",!0)],2)}var x=Object(r["h"])({props:{icon:{type:String,default:""},text:{type:String,default:""},isOn:Boolean}});x.render=w;var P=x;function S(e,n,t,c,a,o){var u=Object(r["A"])("btn");return Object(r["r"])(),Object(r["d"])("div",{onClick:n[1]||(n[1]=function(){return e.toggle&&e.toggle.apply(e,arguments)})},[Object(r["z"])(e.$slots,"default",{on:e.modelValue},(function(){return[Object(r["g"])(u,Object(r["l"])(e.attrs,{icon:e.icon,text:e.text,"is-on":e.modelValue}),null,16,["icon","text","is-on"])]}))])}var C=Object(r["h"])({props:{modelValue:Boolean,icon:{type:String,default:""},text:{type:String,default:""}},emits:["update:modelValue"],setup:function(e,n){var t=n.emit,r=n.attrs;function c(){t("update:modelValue",!e.modelValue)}return{toggle:c,attrs:r}}});C.render=S;var E=C,A=Object(r["c"])(O);A.component("Btn",P),A.component("Toggle",E),A.use(m),m.isReady().then((function(){return A.mount("#app")}))}});
//# sourceMappingURL=app.a1795048.js.map