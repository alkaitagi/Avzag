(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f0814ba"],{"07ac":function(e,t,n){var r=n("23e7"),c=n("6f53").values;r({target:"Object",stat:!0},{values:function(e){return c(e)}})},"09a7":function(e,t,n){},"294e":function(e,t,n){},"393a":function(e,t,n){},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),c=n("5899"),a="["+c+"]",u=RegExp("^"+a+a+"*"),l=RegExp(a+a+"*$"),o=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(u,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:o(1),end:o(2),trim:o(3)}},"595b":function(e,t,n){"use strict";n("09a7")},"687b":function(e,t,n){"use strict";n("df52")},"80b3":function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["N"])("data-v-3ae1a95e"),a=c((function(e,t,n,c,a,u){return Object(r["M"])((Object(r["r"])(),Object(r["d"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.input=t}),placeholder:e.placeholder,type:"text"},null,8,["placeholder"])),[[r["H"],e.input]])})),u=(n("4de4"),n("13d5"),n("ac1f"),n("1276"),Object(r["h"])({props:{modelValue:{type:Object,default:void 0},placeholder:{type:String,default:""}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,c=Object(r["x"])(""),a=Object(r["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});return Object(r["K"])((function(){return a.value=c.value.toLowerCase().split(" ").filter((function(e){return e})).reduce((function(e,t){return"-"===t[0]?e[t.substr(1)]=!1:e[t]=!0,e}),{})})),{input:c}}}));n("d9c9");u.render=a,u.__scopeId="data-v-3ae1a95e";t["a"]=u},a134:function(e,t,n){"use strict";n("294e")},a9e3:function(e,t,n){"use strict";var r=n("83ab"),c=n("da84"),a=n("94ca"),u=n("6eeb"),l=n("5135"),o=n("c6b6"),i=n("7156"),s=n("c04e"),b=n("d039"),d=n("7c73"),f=n("241c").f,p=n("06cf").f,O=n("9bf2").f,j=n("58a8").trim,v="Number",g=c[v],m=g.prototype,h=o(d(m))==v,y=function(e){var t,n,r,c,a,u,l,o,i=s(e,!1);if("string"==typeof i&&i.length>2)if(i=j(i),t=i.charCodeAt(0),43===t||45===t){if(n=i.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(i.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+i}for(a=i.slice(2),u=a.length,l=0;l<u;l++)if(o=a.charCodeAt(l),o<48||o>c)return NaN;return parseInt(a,r)}return+i};if(a(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var k,w=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof w&&(h?b((function(){m.valueOf.call(n)})):o(n)!=v)?i(new g(y(t)),n,w):y(t)},x=r?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;x.length>A;A++)l(g,k=x[A])&&!l(w,k)&&O(w,k,p(g,k));w.prototype=m,m.constructor=w,u(c,v,w)}},ab04:function(e,t,n){"use strict";var r=n("7a23"),c=Object(r["N"])("data-v-143c97ea"),a=c((function(e,t,n,c,a,u){return Object(r["r"])(),Object(r["d"])("button",{class:[{"text-faded":e.faded,highlight:e.selected},"col-0"]},[Object(r["g"])("b",null,Object(r["C"])(e.str),1),Object(r["g"])("span",{class:["text-ipa",{"text-faded":e.str}]},Object(r["C"])(e.ipa),3)],2)})),u=Object(r["h"])({props:{selected:Boolean,faded:Boolean,ipa:{type:String,default:""},str:{type:String,default:""}}});n("595b");u.render=a,u.__scopeId="data-v-143c97ea";t["a"]=u},aeb7:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=Object(r["N"])("data-v-9a8987cc");Object(r["u"])("data-v-9a8987cc");var a={key:0,class:"section"},u={class:"col-1 scroll"},l={key:0,class:"col-1"},o={class:"card header"},i={class:"text-ipa"},s=Object(r["g"])("span",null," ",-1),b={class:"text-caption text-faded"};Object(r["s"])();var d=c((function(e,t,n,c,d,f){var p=Object(r["A"])("ToggleQuery"),O=Object(r["A"])("InputQuery"),j=Object(r["A"])("Table"),v=Object(r["A"])("PhonemeUse");return e.phonemes?(Object(r["r"])(),Object(r["d"])("div",a,[Object(r["g"])("div",u,[Object(r["g"])(p,{modelValue:e.lectQuery,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.lectQuery=t}),labels:e.lects},null,8,["modelValue","labels"]),Object(r["g"])(O,{modelValue:e.featureQuery,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.featureQuery=t}),placeholder:"Query phonemes, e.g. voiced -velar..."},null,8,["modelValue"]),(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(e.categories,(function(n){return Object(r["r"])(),Object(r["d"])("div",{key:n,class:"col"},[Object(r["g"])("h2",null,Object(r["C"])(n+"s"),1),Object(r["g"])(j,{modelValue:e.phoneme,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.phoneme=t}),filter:n,"feature-query":e.featureQuery,"lect-query":e.lectQuery,phonemes:e.phonemes},null,8,["modelValue","filter","feature-query","lect-query","phonemes"])])})),128))]),e.phoneme?(Object(r["r"])(),Object(r["d"])("div",l,[Object(r["g"])("div",o,[Object(r["g"])("h1",i,Object(r["C"])(e.phoneme.ipa),1),s,Object(r["g"])("span",b,Object(r["C"])(e.phoneme.tags),1)]),(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(e.phoneme.lects,(function(e,t){return Object(r["r"])(),Object(r["d"])(v,{key:t,lect:t,use:e},null,8,["lect","use"])})),128))])):Object(r["e"])("",!0)])):Object(r["e"])("",!0)})),f={key:0,class:"row scroll small"};function p(e,t,n,c,a,u){var l=Object(r["A"])("btn");return e.visible?(Object(r["r"])(),Object(r["d"])("div",f,[Object(r["g"])(l,{class:"round",icon:"clear",onClick:t[1]||(t[1]=function(t){return e.query={}})}),(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(e.labels,(function(t){return Object(r["r"])(),Object(r["d"])(l,{key:t,text:t,class:["round",e.highlights[t]],onClick:function(n){return e.toggle(t)}},null,8,["text","class","onClick"])})),128))])):Object(r["e"])("",!0)}n("d81d"),n("4fad"),n("c1f9");var O=n("ade3"),j=n("3835"),v=Object(r["h"])({props:{modelValue:{type:Object,default:void 0},labels:{type:Array,default:function(){return[]}}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,c=Object(r["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});function a(e){e in c.value?c.value[e]?c.value[e]=!1:delete c.value[e]:c.value[e]=!0}var u=Object(r["b"])((function(){return e.labels.length>1})),l=Object(r["b"])((function(){return Object.fromEntries(Object.entries(c.value).map((function(e){var t=Object(j["a"])(e,2),n=t[0],r=t[1];return[n,r?"highlight-confirm":"highlight-alert"]})))})),o=Object(r["b"])((function(){return 1===e.labels.length?Object(O["a"])({},e.labels[0],!0):{}}));return Object(r["J"])((function(){return e.labels}),(function(){return c.value=o.value}),{immediate:!0}),{query:c,highlights:l,visible:u,toggle:a}}});v.render=p;var g=v,m=n("80b3"),h=Object(r["N"])("data-v-449b557c"),y=h((function(e,t,n,c,a,u){var l=Object(r["A"])("TableEntry");return Object(r["r"])(),Object(r["d"])("div",{id:"root",class:[{narrow:e.narrow},"row scroll wrap"]},[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(e.filtered,(function(t,n){return Object(r["r"])(),Object(r["d"])(l,{key:n,faded:!e.fitting[n],ipa:t.ipa,str:e.graphemes[n],selected:e.selected==t,onClick:function(n){return e.selected=t}},null,8,["faded","ipa","str","selected","onClick"])})),128))],2)})),k=(n("4de4"),n("caad"),n("b64b"),n("2532"),n("ab04")),w=n("d53c"),x=Object(r["h"])({components:{TableEntry:k["a"]},props:{modelValue:{type:Object,default:void 0},phonemes:{type:Array,default:function(){return[]}},filter:{type:String,default:""},lectQuery:{type:Object,default:""},featureQuery:{type:Object,default:""}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,c=Object(r["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}}),a=Object(r["b"])((function(){return e.filter?e.phonemes.filter((function(t){var n=t.tags;return null===n||void 0===n?void 0:n.includes(e.filter)})):e.phonemes})),u=Object(r["b"])((function(){return a.value.map((function(t){var n=t.lects,r=t.tags;return Object(w["a"])(Object.keys(n),e.lectQuery)&&Object(w["a"])(r,e.featureQuery)}))})),l=Object(r["b"])((function(){for(var t="",n=0,r=Object.entries(e.lectQuery);n<r.length;n++){var c=Object(j["a"])(r[n],2),a=c[0],u=c[1];if(u){if(t)break;t=a}}return t})),o=Object(r["b"])((function(){return l.value?a.value.map((function(e){var t,n,r,c=e.lects;return null===(t=c[l.value])||void 0===t||null===(n=t.samples)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.grapheme})):[]})),i=Object(r["b"])((function(){return a.value.length<=12}));return{narrow:i,graphemes:o,fitting:u,selected:c,filtered:a}}});n("a134");x.render=y,x.__scopeId="data-v-449b557c";var A=x,I=Object(r["N"])("data-v-3179f7ee");Object(r["u"])("data-v-3179f7ee");var N={class:"col-1 card flag small"},V={class:"title row-0"},E={class:"flex"},_={class:"col"};Object(r["s"])();var C=I((function(e,t,n,c,a,u){var l=Object(r["A"])("Flag"),o=Object(r["A"])("Seeker"),i=Object(r["A"])("btn"),s=Object(r["A"])("Notes");return Object(r["r"])(),Object(r["d"])("div",N,[Object(r["g"])(l,{lect:e.lect,class:"blur"},null,8,["lect"]),Object(r["g"])("div",V,[Object(r["g"])("h2",E,Object(r["C"])(e.lect),1),(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(e.graphemes,(function(e){return Object(r["r"])(),Object(r["d"])("p",{key:e,class:"text-dot"},Object(r["C"])(e),1)})),128))]),Object(r["g"])("div",_,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(e.fullSamples,(function(t,n){return Object(r["r"])(),Object(r["d"])("div",{key:n,class:"row-1 flex seeker"},[Object(r["g"])(o,{check:e.urls[n]===e.player.key,seek:e.player.seek},null,8,["check","seek"]),Object(r["g"])(i,{disabled:!e.urls[n],icon:"play_arrow",onClick:function(t){return e.player.play(null,[e.urls[n]])}},null,8,["disabled","onClick"]),Object(r["g"])(s,{class:"word",notes:[e.words[n]]},null,8,["notes"]),Object(r["g"])(s,{class:"text-ipa",row:"",notes:[e.ipas[n]]},null,8,["notes"])])})),128))]),Object(r["g"])(s,{class:"text-caption",notes:e.use.notes},null,8,["notes"])])})),S=(n("a15b"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("d9c7")),Q=n("f929"),T=n("9458"),F=n("e7de"),U=Object(r["h"])({components:{Notes:S["a"],Flag:Q["a"],Seeker:T["a"]},props:{lect:{type:String,default:""},use:{type:Object,default:function(){return{}}}},setup:function(e){var t=Object(r["b"])((function(){var t,n=new Set(null===(t=e.use.samples)||void 0===t?void 0:t.map((function(e){var t=e.grapheme;return t})));return n.delete(void 0),n})),n=Object(r["b"])((function(){var t,n;return null!==(t=null===(n=e.use.samples)||void 0===n?void 0:n.filter((function(e){var t=e.word,n=e.ipa;return t||n})))&&void 0!==t?t:[]}));function c(e,t){return e.includes("*")?e:e.replaceAll(t,"*".concat(t,"*"))}var a=Object(r["b"])((function(){var e;return null===(e=n.value)||void 0===e?void 0:e.map((function(e){var t=e.word,n=e.grapheme;return c(null!==t&&void 0!==t?t:"",null!==n&&void 0!==n?n:"")}))})),u=Object(r["b"])((function(){var t;return null===(t=n.value)||void 0===t?void 0:t.map((function(t){var n=t.ipa;return c(null!==n&&void 0!==n?n:"",e.use.phoneme)}))})),l=Object(r["x"])([]);function o(e){navigator.clipboard.writeText([a,u].map((function(t){var n=t.value;return n[e]})).map((function(e){return e.replaceAll("*","")})).filter((function(e){return e})).join(" "))}return Object(r["J"])(n,(function(t){return F["a"].canPlay(l,e.lect,t.map((function(e){var t,n=e.word,r=e.ipa;return null!==(t=null===n||void 0===n?void 0:n.replaceAll("*",""))&&void 0!==t?t:r})).map((function(e){return"phonology/"+(null!==e&&void 0!==e?e:"")})))}),{immediate:!0}),{player:F["a"],urls:l,ipas:u,words:a,fullSamples:n,graphemes:t,copy:o}}});n("e695");U.render=C,U.__scopeId="data-v-3179f7ee";var R,q=U,M=(n("4160"),n("07ac"),n("159b"),n("96cf"),n("1da1")),P=n("b85c"),B=n("3a0b"),J=Object(r["x"])([]),L=Object(r["B"])(),G=Object(r["B"])();function X(e){var t,n="",r=Object(P["a"])(R.primary);try{for(r.s();!(t=r.n()).done;){var c=t.value,a=c.ipa,u=c.tags;if(e.includes(a)){n+=u;break}}}catch(d){r.e(d)}finally{r.f()}var l,o=Object(P["a"])(R.secondary);try{for(o.s();!(l=o.n()).done;){var i=l.value,s=i.ipa,b=i.tags;e.includes(s)&&(n+=" "+b)}}catch(d){o.e(d)}finally{o.f()}return n}function Y(e){var t={},n=function(n){var r=e[n];if(!r)return"continue";r.forEach((function(e){var r=e.phoneme;r in t||(t[r]={ipa:r,tags:X(r),lects:{}}),t[r].lects[n]=e}))};for(var r in e)n(r);L.value=Object.values(t),L.value.sort((function(e,t){var n=e.ipa,r=t.ipa;return n>r?1:r>n?-1:0})),G.value=L.value[0]}var H=Object(B["a"])(Object(M["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(B["b"])("ipa");case 2:return R=e.sent,e.next=5,Object(B["c"])("phonology");case 5:t=e.sent,J.value=Object.keys(t),Y(t);case 8:case"end":return e.stop()}}),e)})))),K=Object(r["h"])({components:{ToggleQuery:g,InputQuery:m["a"],Table:A,PhonemeUse:q},setup:function(){H();var e=["vowel","consonant"],t=Object(r["x"])({}),n=Object(r["x"])({});return{phonemes:L,phoneme:G,lects:J,categories:e,lectQuery:t,featureQuery:n}}});n("687b");K.render=d,K.__scopeId="data-v-9a8987cc";t["default"]=K},b64b:function(e,t,n){var r=n("23e7"),c=n("7b0b"),a=n("df75"),u=n("d039"),l=u((function(){a(1)}));r({target:"Object",stat:!0,forced:l},{keys:function(e){return a(c(e))}})},c1f9:function(e,t,n){var r=n("23e7"),c=n("2266"),a=n("8418");r({target:"Object",stat:!0},{fromEntries:function(e){var t={};return c(e,(function(e,n){a(t,e,n)}),{AS_ENTRIES:!0}),t}})},c836:function(e,t,n){},d53c:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("caad"),n("4fad"),n("2532");var r=n("3835");function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t)return!0;var c=Object.entries(t);if(n&&!c.length)return!1;for(var a=0,u=c;a<u.length;a++){var l=Object(r["a"])(u[a],2),o=l[0],i=l[1];if(i!==e.includes(o))return!1}return!0}},d9c9:function(e,t,n){"use strict";n("c836")},df52:function(e,t,n){},e695:function(e,t,n){"use strict";n("393a")}}]);