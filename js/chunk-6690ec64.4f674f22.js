(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6690ec64"],{"08f5":function(e,t,n){},"09a7":function(e,t,n){},2199:function(e,t,n){"use strict";n("d73e")},4306:function(e,t,n){"use strict";n("08f5")},"48f2":function(e,t,n){"use strict";n("9570")},"595b":function(e,t,n){"use strict";n("09a7")},9570:function(e,t,n){},ab04:function(e,t,n){"use strict";var c=n("7a23"),r=Object(c["N"])("data-v-143c97ea"),l=r((function(e,t,n,r,l,u){return Object(c["r"])(),Object(c["d"])("button",{class:[{"text-faded":e.faded,highlight:e.selected},"col-0"]},[Object(c["g"])("b",null,Object(c["C"])(e.str),1),Object(c["g"])("span",{class:["text-ipa",{"text-faded":e.str}]},Object(c["C"])(e.ipa),3)],2)})),u=Object(c["h"])({props:{selected:Boolean,faded:Boolean,ipa:{type:String,default:""},str:{type:String,default:""}}});n("595b");u.render=l,u.__scopeId="data-v-143c97ea";t["a"]=u},aeb7:function(e,t,n){"use strict";n.r(t);var c=n("7a23"),r=Object(c["N"])("data-v-13ee2486");Object(c["u"])("data-v-13ee2486");var l={class:"section"},u={class:"col-1 scroll"},a={key:0,class:"col-1"},o={class:"header"},s={class:"text-ipa"},i=Object(c["g"])("span",null," ",-1),b={class:"text-tags"};Object(c["s"])();var d=r((function(e,t,n,r,d,j){var O=Object(c["A"])("ToggleQuery"),f=Object(c["A"])("InputQuery"),p=Object(c["A"])("Table"),v=Object(c["A"])("PhonemeUse");return Object(c["r"])(),Object(c["d"])("div",l,[Object(c["g"])("div",u,[Object(c["g"])(O,{modelValue:e.lectQuery,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.lectQuery=t}),labels:e.lects},null,8,["modelValue","labels"]),Object(c["g"])(f,{modelValue:e.featureQuery,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.featureQuery=t}),placeholder:"Query phonemes, e.g. voiced -velar..."},null,8,["modelValue"]),(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.categories,(function(n){return Object(c["r"])(),Object(c["d"])("div",{key:n,class:"col"},[Object(c["g"])("h2",null,Object(c["C"])(n+"s"),1),Object(c["g"])(p,{modelValue:e.phoneme,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.phoneme=t}),filter:n,"feature-query":e.featureQuery,"lect-query":e.lectQuery,phonemes:e.phonemes},null,8,["modelValue","filter","feature-query","lect-query","phonemes"])])})),128))]),e.phoneme?(Object(c["r"])(),Object(c["d"])("div",a,[Object(c["g"])("div",o,[Object(c["g"])("h1",s,Object(c["C"])(e.phoneme.ipa),1),i,Object(c["g"])("span",b,Object(c["C"])(e.phoneme.tags),1)]),(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.phoneme.lects,(function(e,t){return Object(c["r"])(),Object(c["d"])(v,{key:t,lect:t,use:e},null,8,["lect","use"])})),128))])):Object(c["e"])("",!0)])})),j={key:0,class:"row scroll small"};function O(e,t,n,r,l,u){var a=Object(c["A"])("btn");return e.visible?(Object(c["r"])(),Object(c["d"])("div",j,[Object(c["g"])(a,{class:"round",icon:"clear",onClick:t[1]||(t[1]=function(t){return e.query={}})}),(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.labels,(function(t){return Object(c["r"])(),Object(c["d"])(a,{key:t,text:t,class:["round",e.highlights[t]],onClick:function(n){return e.toggle(t)}},null,8,["text","class","onClick"])})),128))])):Object(c["e"])("",!0)}var f=n("ade3"),p=n("3835"),v=(n("c1f9"),n("d81d"),n("4fad"),Object(c["h"])({props:{modelValue:{type:Object,default:void 0},labels:{type:Array,default:function(){return[]}}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,r=Object(c["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});function l(e){e in r.value?r.value[e]?r.value[e]=!1:delete r.value[e]:r.value[e]=!0}var u=Object(c["b"])((function(){return e.labels.length>1})),a=Object(c["b"])((function(){return Object.fromEntries(Object.entries(r.value).map((function(e){var t=Object(p["a"])(e,2),n=t[0],c=t[1];return[n,c?"highlight-confirm":"highlight-alert"]})))})),o=Object(c["b"])((function(){return 1===e.labels.length?Object(f["a"])({},e.labels[0],!0):{}}));return Object(c["J"])((function(){return e.labels}),(function(){return r.value=o.value}),{immediate:!0}),{query:r,highlights:a,visible:u,toggle:l}}}));v.render=O;var m=v,g=n("80b3"),y=Object(c["N"])("data-v-45776a18"),h=y((function(e,t,n,r,l,u){var a=Object(c["A"])("TableEntry");return Object(c["r"])(),Object(c["d"])("div",{id:"root",class:[{narrow:e.narrow},"row scroll wrap"]},[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.filtered,(function(t,n){return Object(c["r"])(),Object(c["d"])(a,{key:n,faded:!e.fitting[n],ipa:t.ipa,str:e.graphemes[n],selected:e.selected==t,onClick:function(n){return e.selected=t}},null,8,["faded","ipa","str","selected","onClick"])})),128))],2)})),k=(n("4de4"),n("caad"),n("2532"),n("b64b"),n("ab04")),x=n("d53c"),w=Object(c["h"])({components:{TableEntry:k["a"]},props:{modelValue:{type:Object,default:void 0},phonemes:{type:Array,default:function(){return[]}},filter:{type:String,default:""},lectQuery:{type:Object,default:""},featureQuery:{type:Object,default:""}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,r=Object(c["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}}),l=Object(c["b"])((function(){return e.filter?e.phonemes.filter((function(t){var n=t.tags;return null===n||void 0===n?void 0:n.includes(e.filter)})):e.phonemes})),u=Object(c["b"])((function(){return l.value.map((function(t){var n=t.lects,c=t.tags;return Object(x["a"])(Object.keys(n),e.lectQuery)&&Object(x["a"])(c,e.featureQuery)}))})),a=Object(c["b"])((function(){var t=Object.entries(e.lectQuery).filter((function(e){var t=Object(p["a"])(e,2),n=t[1];return n})).map((function(e){var t=Object(p["a"])(e,1),n=t[0];return n}));return 1===t.length?t[0]:""})),o=Object(c["b"])((function(){return a.value?l.value.map((function(e){var t,n,c,r=e.lects;return null===(t=r[a.value])||void 0===t||null===(n=t.samples)||void 0===n||null===(c=n[0])||void 0===c?void 0:c.grapheme})):[]})),s=Object(c["b"])((function(){return l.value.length<=12}));return{narrow:s,graphemes:o,fitting:u,selected:r,filtered:l}}});n("48f2");w.render=h,w.__scopeId="data-v-45776a18";var Q=w,V=Object(c["N"])("data-v-382d8923");Object(c["u"])("data-v-382d8923");var A={class:"col-1 card flag small"},C={class:"title row-0"},T={class:"flex"},S={class:"col"};Object(c["s"])();var _=V((function(e,t,n,r,l,u){var a=Object(c["A"])("Flag"),o=Object(c["A"])("Seeker"),s=Object(c["A"])("btn"),i=Object(c["A"])("Notes");return Object(c["r"])(),Object(c["d"])("div",A,[Object(c["g"])(a,{lect:e.lect,class:"blur"},null,8,["lect"]),Object(c["g"])("div",C,[Object(c["g"])("h2",T,Object(c["C"])(e.lect),1),(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.graphemes,(function(e){return Object(c["r"])(),Object(c["d"])("p",{key:e,class:"text-dot"},Object(c["C"])(e),1)})),128))]),Object(c["g"])("div",S,[(Object(c["r"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(e.fullSamples,(function(t,n){var r;return Object(c["r"])(),Object(c["d"])("div",{key:n,class:"row-1 flex seeker"},[Object(c["g"])(o,{check:e.urls[n]===e.player.key,seek:null===(r=e.player.current)||void 0===r?void 0:r.seek},null,8,["check","seek"]),Object(c["g"])(s,{disabled:!e.urls[n],"is-on":e.urls[n]===e.player.key,icon:"play_arrow",onClick:function(t){return e.player.play(null,[e.urls[n]])}},null,8,["disabled","is-on","onClick"]),Object(c["g"])(i,{class:"word flex",notes:[e.words[n]],onTexts:function(t){return e.setTexts(n,0,t[0])}},null,8,["notes","onTexts"]),Object(c["g"])(i,{class:"text-ipa",notes:[e.ipas[n]],onTexts:function(t){return e.setTexts(n,1,t[0])}},null,8,["notes","onTexts"])])})),128))]),Object(c["g"])(i,{class:"text-caption",notes:e.use.notes},null,8,["notes"])])})),I=(n("6062"),n("d3b7"),n("3ca3"),n("ddb0"),n("d9c7")),N=n("f929"),q=n("9458"),E=n("e7de"),U=Object(c["h"])({components:{Notes:I["a"],Flag:N["a"],Seeker:q["a"]},props:{lect:{type:String,default:""},use:{type:Object,default:function(){return{}}}},setup:function(e){var t=Object(c["b"])((function(){var t,n=new Set(null===(t=e.use.samples)||void 0===t?void 0:t.map((function(e){var t=e.grapheme;return t})));return n.delete(void 0),n})),n=Object(c["b"])((function(){var t,n;return null!==(t=null===(n=e.use.samples)||void 0===n?void 0:n.filter((function(e){var t=e.word,n=e.ipa;return t||n})))&&void 0!==t?t:[]}));function r(e,t){return e.includes("^")?e:e.replaceAll(t,"^".concat(t,"^"))}var l=Object(c["b"])((function(){var e;return null===(e=n.value)||void 0===e?void 0:e.map((function(e){var t=e.word,n=e.grapheme;return r(null!==t&&void 0!==t?t:"",null!==n&&void 0!==n?n:"")}))})),u=Object(c["b"])((function(){var t;return null===(t=n.value)||void 0===t?void 0:t.map((function(t){var n=t.ipa;return r(null!==n&&void 0!==n?n:"",e.use.phoneme)}))})),a=Object(c["x"])([]);function o(e,t,n){a.value[e]||(a.value[e]=[]),a.value[e][t]=n}var s=Object(c["x"])([]);return Object(c["J"])(a,(function(t){return E["a"].canPlay(s,e.lect,t.map((function(e){var t=Object(p["a"])(e,2),n=t[0],c=t[1];return null!==n&&void 0!==n?n:c})).map((function(e){return"phonology/"+(null!==e&&void 0!==e?e:"")})))}),{immediate:!0,deep:!0}),{player:E["a"],urls:s,ipas:u,words:l,fullSamples:n,graphemes:t,setTexts:o}}});n("4306");U.render=_,U.__scopeId="data-v-382d8923";var J=U,P=n("0319"),B=Object(c["h"])({components:{ToggleQuery:m,InputQuery:g["a"],Table:Q,PhonemeUse:J},setup:function(){var e=["vowel","consonant"],t=Object(c["x"])({}),n=Object(c["x"])({});return{phonemes:P["c"],phoneme:P["b"],lects:P["a"],categories:e,lectQuery:t,featureQuery:n}}});n("2199");B.render=d,B.__scopeId="data-v-13ee2486";t["default"]=B},c1f9:function(e,t,n){var c=n("23e7"),r=n("2266"),l=n("8418");c({target:"Object",stat:!0},{fromEntries:function(e){var t={};return r(e,(function(e,n){l(t,e,n)}),{AS_ENTRIES:!0}),t}})},d73e:function(e,t,n){}}]);