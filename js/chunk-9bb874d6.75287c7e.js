(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9bb874d6"],{"0c7a":function(t,e,n){"use strict";n("83e7")},"0e32":function(t,e,n){"use strict";n("a434");var r=n("7a23");function o(t,e,n,o,c,a){var i=Object(r["B"])("ArrayControl"),u=Object(r["B"])("btn"),l=Object(r["B"])("EditorCard");return Object(r["s"])(),Object(r["d"])(l,{icon:"sticky_note_2",header:"Notes"},{header:Object(r["M"])((function(){return[Object(r["h"])(i,{modelValue:t.notes,"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.notes=e}),add:""},null,8,["modelValue"])]})),caption:Object(r["M"])((function(){return[Object(r["A"])(t.$slots,"default")]})),default:Object(r["M"])((function(){return[(Object(r["s"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(t.notes,(function(e,n){return Object(r["s"])(),Object(r["d"])("div",{key:n,class:"row"},[Object(r["N"])(Object(r["h"])("input",{"onUpdate:modelValue":function(e){return t.notes[n]=e},type:"text"},null,8,["onUpdate:modelValue"]),[[r["I"],t.notes[n]]]),Object(r["h"])(u,{icon:"clear",onClick:function(e){return t.notes.splice(n,1)}},null,8,["onClick"])])})),128))]})),_:1})}var c=n("7694"),a=n("b5cc"),i=Object(r["i"])({name:"NotesEditor",components:{ArrayControl:a["a"],EditorCard:c["a"]},props:{modelValue:{type:Array,default:void 0}},emits:["update:modelValue"],setup:function(t,e){var n=e.emit,o=Object(r["b"])({get:function(){return t.modelValue},set:function(t){return n("update:modelValue",t)}});return{notes:o}}});i.render=o;e["a"]=i},"13d5":function(t,e,n){"use strict";var r=n("23e7"),o=n("d58f").left,c=n("a640"),a=n("ae40"),i=n("2d00"),u=n("605d"),l=c("reduce"),s=a("reduce",{1:0}),d=!u&&i>79&&i<83;r({target:"Array",proto:!0,forced:!l||!s||d},{reduce:function(t){return o(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,e,n){var r=n("da84"),o=n("fdbc"),c=n("17c2"),a=n("9112");for(var i in o){var u=r[i],l=u&&u.prototype;if(l&&l.forEach!==c)try{a(l,"forEach",c)}catch(s){l.forEach=c}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,o=n("a640"),c=n("ae40"),a=o("forEach"),i=c("forEach");t.exports=a&&i?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1e4b":function(t,e,n){},2532:function(t,e,n){"use strict";var r=n("23e7"),o=n("5a34"),c=n("1d80"),a=n("ab13");r({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(c(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},3835:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function o(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,c=u}finally{try{r||null==i["return"]||i["return"]()}finally{if(o)throw c}}return n}}var c=n("06c5");function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){return r(t)||o(t,e)||Object(c["a"])(t,e)||a()}},4160:function(t,e,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"44e7":function(t,e,n){var r=n("861d"),o=n("c6b6"),c=n("b622"),a=c("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==o(t))}},"4de4":function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").filter,c=n("1dde"),a=n("ae40"),i=c("filter"),u=a("filter");r({target:"Array",proto:!0,forced:!i||!u},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"4fad":function(t,e,n){var r=n("23e7"),o=n("6f53").entries;r({target:"Object",stat:!0},{entries:function(t){return o(t)}})},"5a34":function(t,e,n){var r=n("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},6062:function(t,e,n){"use strict";var r=n("6d61"),o=n("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},6566:function(t,e,n){"use strict";var r=n("9bf2").f,o=n("7c73"),c=n("e2cc"),a=n("0366"),i=n("19aa"),u=n("2266"),l=n("7dd0"),s=n("2626"),d=n("83ab"),f=n("f183").fastKey,b=n("69f3"),v=b.set,p=b.getterFor;t.exports={getConstructor:function(t,e,n,l){var s=t((function(t,r){i(t,s,e),v(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&u(r,t[l],{that:t,AS_ENTRIES:n})})),b=p(e),O=function(t,e,n){var r,o,c=b(t),a=h(t,e);return a?a.value=n:(c.last=a={index:o=f(e,!0),key:e,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=a),r&&(r.next=a),d?c.size++:t.size++,"F"!==o&&(c.index[o]=a)),t},h=function(t,e){var n,r=b(t),o=f(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return c(s.prototype,{clear:function(){var t=this,e=b(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=b(e),r=h(e,t);if(r){var o=r.next,c=r.previous;delete n.index[r.index],r.removed=!0,c&&(c.next=o),o&&(o.previous=c),n.first==r&&(n.first=o),n.last==r&&(n.last=c),d?n.size--:e.size--}return!!r},forEach:function(t){var e,n=b(this),r=a(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!h(this,t)}}),c(s.prototype,n?{get:function(t){var e=h(this,t);return e&&e.value},set:function(t,e){return O(this,0===t?0:t,e)}}:{add:function(t){return O(this,t=0===t?0:t,t)}}),d&&r(s.prototype,"size",{get:function(){return b(this).size}}),s},setStrong:function(t,e,n){var r=e+" Iterator",o=p(e),c=p(r);l(t,e,(function(t,e){v(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){var t=c(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),s(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),o=n("da84"),c=n("94ca"),a=n("6eeb"),i=n("f183"),u=n("2266"),l=n("19aa"),s=n("861d"),d=n("d039"),f=n("1c7e"),b=n("d44e"),v=n("7156");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),O=-1!==t.indexOf("Weak"),h=p?"set":"add",j=o[t],y=j&&j.prototype,m=j,x={},k=function(t){var e=y[t];a(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(O&&!s(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return O&&!s(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(O&&!s(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(c(t,"function"!=typeof j||!(O||y.forEach&&!d((function(){(new j).entries().next()})))))m=n.getConstructor(e,t,p,h),i.REQUIRED=!0;else if(c(t,!0)){var g=new m,E=g[h](O?{}:-0,1)!=g,w=d((function(){g.has(1)})),V=f((function(t){new j(t)})),C=!O&&d((function(){var t=new j,e=5;while(e--)t[h](e,e);return!t.has(-0)}));V||(m=e((function(e,n){l(e,m,t);var r=v(new j,e,m);return void 0!=n&&u(n,r[h],{that:r,AS_ENTRIES:p}),r})),m.prototype=y,y.constructor=m),(w||C)&&(k("delete"),k("has"),p&&k("get")),(C||E)&&k(h),O&&y.clear&&delete y.clear}return x[t]=m,r({global:!0,forced:m!=j},x),b(m,t),O||n.setStrong(m,t,p),m}},"6f53":function(t,e,n){var r=n("83ab"),o=n("df75"),c=n("fc6a"),a=n("d1e7").f,i=function(t){return function(e){var n,i=c(e),u=o(i),l=u.length,s=0,d=[];while(l>s)n=u[s++],r&&!a.call(i,n)||d.push(t?[n,i[n]]:i[n]);return d}};t.exports={entries:i(!0),values:i(!1)}},7156:function(t,e,n){var r=n("861d"),o=n("d2bb");t.exports=function(t,e,n){var c,a;return o&&"function"==typeof(c=e.constructor)&&c!==n&&r(a=c.prototype)&&a!==n.prototype&&o(t,a),t}},7883:function(t,e,n){"use strict";n("edf2")},"83e7":function(t,e,n){},a15b:function(t,e,n){"use strict";var r=n("23e7"),o=n("44ad"),c=n("fc6a"),a=n("a640"),i=[].join,u=o!=Object,l=a("join",",");r({target:"Array",proto:!0,forced:u||!l},{join:function(t){return i.call(c(this),void 0===t?",":t)}})},a1df:function(t,e,n){"use strict";n.r(e);n("b0c0");var r=n("7a23"),o=Object(r["P"])("data-v-33f17f60");Object(r["v"])("data-v-33f17f60");var c={key:0,class:"section col-2 small grid"},a={class:"col-2"},i={class:"col"},u={class:"col"},l={class:"row"},s=Object(r["h"])("p",{class:"icon"},"topic",-1),d={class:"col flex"},f={key:0,class:"row"},b=Object(r["h"])("p",{class:"icon"},"short_text",-1),v=Object(r["h"])("hr",null,null,-1),p=Object(r["h"])("p",{class:"text-faded text-caption"}," The source corpus is loading from what is saved on Phrasebook Corpus editor page. ",-1),O=Object(r["g"])(" You can add notes, for example, to explain certain grammatical rules. ");Object(r["t"])();var h=o((function(t,e,n,h,j,y){var m,x=Object(r["B"])("btn"),k=Object(r["B"])("VContext"),g=Object(r["B"])("Block"),E=Object(r["B"])("BlocksOrderEditor"),w=Object(r["B"])("NotesEditor"),V=Object(r["B"])("ContextTranslationEditor"),C=Object(r["B"])("BlockEditor");return t.file&&t.corpus?(Object(r["s"])(),Object(r["d"])("div",c,[Object(r["h"])("div",a,[Object(r["h"])("div",i,[Object(r["h"])("div",u,[Object(r["h"])("div",l,[s,Object(r["h"])("h2",d,[Object(r["N"])(Object(r["h"])("select",{"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.section=e})},[(Object(r["s"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(t.corpus,(function(t){return Object(r["s"])(),Object(r["d"])("option",{key:t.name,value:t},Object(r["D"])(t.name),9,["value"])})),128))],512),[[r["H"],t.section]])])]),t.section?(Object(r["s"])(),Object(r["d"])("div",f,[b,Object(r["N"])(Object(r["h"])("select",{"onUpdate:modelValue":e[2]||(e[2]=function(e){return t.phrase=e})},[(Object(r["s"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(t.section.phrases,(function(t){return Object(r["s"])(),Object(r["d"])("option",{key:t.id,value:t},Object(r["D"])(t.name),9,["value"])})),128))],512),[[r["H"],t.phrase]]),Object(r["h"])(x,{icon:"fingerprint",onClick:t.copyId},null,8,["onClick"])])):Object(r["e"])("",!0)]),v,p,Object(r["h"])(k),t.phrase?(Object(r["s"])(),Object(r["d"])("div",{key:t.phrase.id,class:"row wrap flex"},[(Object(r["s"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(t.phrase.blocks,(function(t,e){return Object(r["s"])(),Object(r["d"])(g,{key:e,block:t},null,8,["block"])})),128))])):Object(r["e"])("",!0)]),t.translation?(Object(r["s"])(),Object(r["d"])(r["a"],{key:0},[Object(r["h"])(E,{key:null===(m=t.phrase)||void 0===m?void 0:m.id,modelValue:t.block,"onUpdate:modelValue":e[3]||(e[3]=function(e){return t.block=e}),phrase:t.translation,"onUpdate:phrase":e[4]||(e[4]=function(e){return t.translation=e})},null,8,["modelValue","phrase"]),Object(r["h"])(w,{modelValue:t.translation.notes,"onUpdate:modelValue":e[5]||(e[5]=function(e){return t.translation.notes=e})},{default:o((function(){return[O]})),_:1},8,["modelValue"]),Object(r["h"])(V,{modelValue:t.translation.context,"onUpdate:modelValue":e[6]||(e[6]=function(e){return t.translation.context=e})},null,8,["modelValue"])],64)):Object(r["e"])("",!0)]),t.block?(Object(r["s"])(),Object(r["d"])(C,{key:0,modelValue:t.block,"onUpdate:modelValue":e[7]||(e[7]=function(e){return t.block=e})},null,8,["modelValue"])):Object(r["e"])("",!0)])):Object(r["e"])("",!0)})),j=n("3835"),y=n("0e32"),m=n("5794"),x=n("72e9"),k=n("428a"),g=n("9362"),E=Object(r["P"])("data-v-02de8f76");Object(r["v"])("data-v-02de8f76");var w=Object(r["g"])(" Translate the context tags to show localized hints when needed. "),V={class:"text-caption"},C={class:"row wrap"};Object(r["t"])();var S=E((function(t,e,n,o,c,a){var i=Object(r["B"])("ConfirmButton"),u=Object(r["B"])("btn"),l=Object(r["B"])("EditorCard");return Object(r["s"])(),Object(r["d"])(l,{icon:"list_alt",header:"context translation"},{header:E((function(){return[t.translation?(Object(r["s"])(),Object(r["d"])(i,{key:0,onConfirm:e[1]||(e[1]=function(e){return t.translation=void 0})})):(Object(r["s"])(),Object(r["d"])(u,{key:1,icon:"add",onClick:t.create},null,8,["onClick"]))]})),caption:E((function(){return[w]})),default:E((function(){return[t.translation?(Object(r["s"])(!0),Object(r["d"])(r["a"],{key:0},Object(r["z"])(t.context,(function(e,n){var o=e.entity,c=e.tags;return Object(r["s"])(),Object(r["d"])("div",{key:o,class:["col","colored-dot-"+n]},[Object(r["h"])("h2",V,Object(r["D"])(o),1),Object(r["h"])("div",C,[(Object(r["s"])(!0),Object(r["d"])(r["a"],null,Object(r["z"])(c,(function(e){return Object(r["N"])((Object(r["s"])(),Object(r["d"])("input",{key:e,"onUpdate:modelValue":function(n){return t.translation[o][e]=n},size:t.getSize(o,e),placeholder:e,type:"text"},null,8,["onUpdate:modelValue","size","placeholder"])),[[r["I"],t.translation[o][e]]])})),128))])],2)})),128)):Object(r["e"])("",!0)]})),_:1})})),z=(n("13d5"),n("04d4")),B=n("7694"),I=Object(r["i"])({name:"TranslationEditor",components:{ConfirmButton:z["a"],EditorCard:B["a"]},props:{modelValue:{type:Object,default:void 0}},emits:["update:modelValue"],setup:function(t,e){var n=e.emit,o=Object(r["b"])({get:function(){return t.modelValue},set:function(t){return n("update:modelValue",t)}}),c=Object(r["l"])("contextSource",{});function a(){null!==c&&void 0!==c&&c.value&&(o.value=c.value.reduce((function(t,e){var n=e.entity;return t[n]={},t}),{}))}function i(t,e){var n,r;if(o.value){var c=null!==(n=null===(r=o.value[t][e])||void 0===r?void 0:r.length)&&void 0!==n?n:0;return c>0?c:e.length}}return{translation:o,context:c,create:a,getSize:i}}});n("7883");I.render=S,I.__scopeId="data-v-02de8f76";var A=I,U=n("3a0b"),_=n("9392"),T=n("7ec3"),D=Object(r["i"])({components:{VContext:m["a"],Block:x["a"],NotesEditor:y["a"],BlocksOrderEditor:k["a"],BlockEditor:g["a"],ContextTranslationEditor:A},setup:function(){var t=Object(r["y"])([]);try{t.value=JSON.parse(localStorage["editor.phrasebookCorpus"])}catch(s){Object(U["b"])("phrasebook").then((function(e){return t.value=e}))}var e=Object(r["y"])(void 0),n=Object(r["y"])(void 0),o=Object(r["y"])({}),c=Object(r["y"])(void 0),a=Object(_["d"])({defaultFile:{},filename:"phrasebook",storage:"editor.phrasebook"}),i=Object(r["b"])((function(){var t;return null===(t=n.value)||void 0===t?void 0:t.context})),u=Object(r["y"])({});function l(){n.value&&navigator.clipboard.writeText(n.value.id)}return Object(r["u"])("contextSource",i),Object(r["u"])("context",u),Object(r["K"])(i,(function(t){return Object(T["c"])(u,t)}),{immediate:!0}),Object(r["K"])(t,(function(t){return e.value=t[t.length-1]}),{immediate:!0}),Object(r["K"])(e,(function(t){null!==t&&void 0!==t&&t.phrases&&(n.value=t.phrases[t.phrases.length-1])}),{immediate:!0}),Object(r["K"])([n,a],(function(t){var e=Object(j["a"])(t,1),n=e[0];n&&(a.value[n.id]||(a.value[n.id]={blocks:[]}),o.value=a.value[n.id])}),{immediate:!0}),Object(r["K"])(o,(function(t){var e;return c.value=null===t||void 0===t||null===(e=t.blocks)||void 0===e?void 0:e[t.blocks.length-1]}),{immediate:!0}),{file:a,corpus:t,section:e,phrase:n,translation:o,block:c,copyId:l}}});n("d30c"),n("0c7a");D.render=h,D.__scopeId="data-v-33f17f60";e["default"]=D},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},ab13:function(t,e,n){var r=n("b622"),o=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,"/./"[t](e)}catch(r){}}return!1}},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},caad:function(t,e,n){"use strict";var r=n("23e7"),o=n("4d64").includes,c=n("44d2"),a=n("ae40"),i=a("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!i},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c("includes")},d30c:function(t,e,n){"use strict";n("1e4b")},d58f:function(t,e,n){var r=n("1c0b"),o=n("7b0b"),c=n("44ad"),a=n("50c4"),i=function(t){return function(e,n,i,u){r(n);var l=o(e),s=c(l),d=a(l.length),f=t?d-1:0,b=t?-1:1;if(i<2)while(1){if(f in s){u=s[f],f+=b;break}if(f+=b,t?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=b)f in s&&(u=n(u,s[f],f,l));return u}};t.exports={left:i(!1),right:i(!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,c=n("1dde"),a=n("ae40"),i=c("map"),u=a("map");r({target:"Array",proto:!0,forced:!i||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},edf2:function(t,e,n){},f183:function(t,e,n){var r=n("d012"),o=n("861d"),c=n("5135"),a=n("9bf2").f,i=n("90e3"),u=n("bb2f"),l=i("meta"),s=0,d=Object.isExtensible||function(){return!0},f=function(t){a(t,l,{value:{objectID:"O"+ ++s,weakData:{}}})},b=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!c(t,l)){if(!d(t))return"F";if(!e)return"E";f(t)}return t[l].objectID},v=function(t,e){if(!c(t,l)){if(!d(t))return!0;if(!e)return!1;f(t)}return t[l].weakData},p=function(t){return u&&O.REQUIRED&&d(t)&&!c(t,l)&&f(t),t},O=t.exports={REQUIRED:!1,fastKey:b,getWeakData:v,onFreeze:p};r[l]=!0}}]);
//# sourceMappingURL=chunk-9bb874d6.75287c7e.js.map