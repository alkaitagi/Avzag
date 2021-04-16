(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-501397a1"],{"04d4":function(e,t,n){"use strict";var r=n("7a23");function o(e,t,n,o,c,a){var i=Object(r["A"])("btn");return Object(r["r"])(),Object(r["d"])(i,{class:"highlight-font-alert",icon:e.icon,text:e.text,onClick:e.confirm},null,8,["icon","text","onClick"])}var c=Object(r["h"])({props:{message:{type:String,default:"Delete?"},icon:{type:String,default:"delete"},text:{type:String,default:""}},emits:["confirm"],setup:function(e,t){var n=t.emit;function r(){window.confirm(e.message)&&n("confirm")}return{confirm:r}}});c.render=o;t["a"]=c},"09a7":function(e,t,n){},"0e32":function(e,t,n){"use strict";n("a434");var r=n("7a23");function o(e,t,n,o,c,a){var i=Object(r["A"])("ArrayControl"),u=Object(r["A"])("btn"),l=Object(r["A"])("EditorCard");return Object(r["r"])(),Object(r["d"])(l,{icon:"sticky_note_2",header:"Notes"},{header:Object(r["L"])((function(){return[Object(r["g"])(i,{modelValue:e.notes,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.notes=t}),add:""},null,8,["modelValue"])]})),default:Object(r["L"])((function(){return[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(e.notes,(function(t,n){return Object(r["r"])(),Object(r["d"])("div",{key:n,class:"row"},[Object(r["M"])(Object(r["g"])("input",{"onUpdate:modelValue":function(t){return e.notes[n]=t},type:"text",placeholder:"note #"+n},null,8,["onUpdate:modelValue","placeholder"]),[[r["H"],e.notes[n]]]),Object(r["g"])(u,{icon:"clear",onClick:function(t){return e.notes.splice(n,1)}},null,8,["onClick"])])})),128))]})),_:1})}var c=n("7694"),a=n("b5cc"),i=Object(r["h"])({name:"NotesEditor",components:{ArrayControl:a["a"],EditorCard:c["a"]},props:{modelValue:{type:Array,default:void 0}},emits:["update:modelValue"],setup:function(e,t){var n=t.emit,o=Object(r["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});return{notes:o}}});i.render=o;t["a"]=i},4929:function(e,t,n){"use strict";n.r(t);n("a434");var r=n("7a23"),o=Object(r["N"])("data-v-04827bdf");Object(r["u"])("data-v-04827bdf");var c={class:"section col-2 small grid"},a={class:"row wrap"},i={key:0,class:"col-2 small"},u=Object(r["f"])(" You can add notes to clarify certain use cases or to give some additional info. ");Object(r["s"])();var l=o((function(e,t,n,l,d,s){var f=Object(r["A"])("ArrayControl"),b=Object(r["A"])("TableEntry"),p=Object(r["A"])("EditorCard"),O=Object(r["A"])("NotesEditor"),m=Object(r["A"])("btn");return Object(r["r"])(),Object(r["d"])("div",c,[Object(r["g"])(p,{icon:"view_comfy",header:"Phonemes"},{header:o((function(){return[Object(r["g"])(f,{modelValue:e.file,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.file=t}),item:e.phoneme,"onUpdate:item":t[2]||(t[2]=function(t){return e.phoneme=t}),add:{},remove:""},null,8,["modelValue","item"])]})),default:o((function(){return[Object(r["g"])("div",a,[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(e.file,(function(t,n){return Object(r["r"])(),Object(r["d"])(b,{key:n,selected:e.phoneme===t,ipa:t.phoneme,str:e.graphemes[n],onClick:function(n){return e.phoneme=t}},null,8,["selected","ipa","str","onClick"])})),128))])]})),_:1}),e.phoneme?(Object(r["r"])(),Object(r["d"])("div",i,[Object(r["g"])(p,{icon:"hearing",header:"Phoneme"},{default:o((function(){return[Object(r["M"])(Object(r["g"])("input",{"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.phoneme.phoneme=t}),type:"text",class:"text-ipa",placeholder:"phoneme"},null,512),[[r["H"],e.phoneme.phoneme]])]})),_:1}),Object(r["g"])(O,{modelValue:e.phoneme.notes,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.phoneme.notes=t})},{default:o((function(){return[u]})),_:1},8,["modelValue"]),Object(r["g"])(p,{header:"Samples",icon:"playlist_play"},{header:o((function(){return[Object(r["g"])(f,{modelValue:e.phoneme.samples,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.phoneme.samples=t}),add:{}},null,8,["modelValue"])]})),default:o((function(){return[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(e.phoneme.samples,(function(t,n){return Object(r["r"])(),Object(r["d"])("div",{key:n,class:"row sample"},[Object(r["M"])(Object(r["g"])("input",{"onUpdate:modelValue":function(e){return t.grapheme=e},type:"text",placeholder:"grapheme"},null,8,["onUpdate:modelValue"]),[[r["H"],t.grapheme]]),Object(r["M"])(Object(r["g"])("input",{"onUpdate:modelValue":function(e){return t.word=e},class:"flex",type:"text",placeholder:"word"},null,8,["onUpdate:modelValue"]),[[r["H"],t.word]]),Object(r["M"])(Object(r["g"])("input",{"onUpdate:modelValue":function(e){return t.ipa=e},class:"flex text-ipa",type:"text",placeholder:"ipa"},null,8,["onUpdate:modelValue"]),[[r["H"],t.ipa]]),Object(r["g"])(m,{icon:"clear",onClick:function(t){return e.phoneme.samples.splice(n,1)}},null,8,["onClick"])])})),128))]})),_:1})])):Object(r["e"])("",!0)])})),d=(n("d81d"),n("b5cc")),s=n("7694"),f=n("ab04"),b=n("0e32"),p=n("9392"),O=Object(r["h"])({components:{ArrayControl:d["a"],EditorCard:s["a"],TableEntry:f["a"],NotesEditor:b["a"]},setup:function(){var e=Object(r["x"])(),t=Object(p["d"])({defaultFile:[],filename:"phonology",storage:"editor.phonology"}),n=Object(r["b"])((function(){return t.value.map((function(e){var t,n=e.samples;return null===n||void 0===n||null===(t=n[0])||void 0===t?void 0:t.grapheme}))}));return{file:t,phoneme:e,graphemes:n}}});n("cd00");O.render=l,O.__scopeId="data-v-04827bdf";t["default"]=O},"595b":function(e,t,n){"use strict";n("09a7")},7156:function(e,t,n){var r=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var c,a;return o&&"function"==typeof(c=t.constructor)&&c!==n&&r(a=c.prototype)&&a!==n.prototype&&o(e,a),e}},7694:function(e,t,n){"use strict";var r=n("7a23"),o=Object(r["N"])("data-v-800c2256");Object(r["u"])("data-v-800c2256");var c={class:"col"},a={class:"row header wrap"},i={class:"icon"},u={class:"flex"},l=Object(r["g"])("hr",null,null,-1),d={class:"col"};Object(r["s"])();var s=o((function(e,t,n,o,s,f){return Object(r["r"])(),Object(r["d"])("div",c,[Object(r["g"])("div",a,[Object(r["g"])("p",i,Object(r["C"])(e.icon),1),Object(r["g"])("h2",u,Object(r["C"])(e.header),1),Object(r["z"])(e.$slots,"header",{},void 0,!0)]),l,Object(r["g"])("div",d,[Object(r["z"])(e.$slots,"default",{},void 0,!0)])])})),f=Object(r["h"])({name:"EditorCard",props:{button:{type:String,default:"add"},icon:{type:String,default:""},header:{type:String,default:""}}});n("fae1");f.render=s,f.__scopeId="data-v-800c2256";t["a"]=f},"78f7":function(e,t,n){},9392:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return u}));var r=n("7a23"),o={defaultFile:{},storage:"",filename:""},c=Object(r["x"])();function a(){c.value=JSON.parse(JSON.stringify(o.defaultFile))}function i(){localStorage[o.storage]=JSON.stringify(c.value)}function u(e){Object.assign(o,e);try{c.value=JSON.parse(localStorage[o.storage])}catch(t){a()}return Object(r["J"])(c,i,{deep:!0}),c}},a434:function(e,t,n){"use strict";var r=n("23e7"),o=n("23cb"),c=n("a691"),a=n("50c4"),i=n("7b0b"),u=n("65f0"),l=n("8418"),d=n("1dde"),s=d("splice"),f=Math.max,b=Math.min,p=9007199254740991,O="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!s},{splice:function(e,t){var n,r,d,s,m,j,h=i(this),v=a(h.length),g=o(e,v),y=arguments.length;if(0===y?n=r=0:1===y?(n=0,r=v-g):(n=y-2,r=b(f(c(t),0),v-g)),v+n-r>p)throw TypeError(O);for(d=u(h,r),s=0;s<r;s++)m=g+s,m in h&&l(d,s,h[m]);if(d.length=r,n<r){for(s=g;s<v-r;s++)m=s+r,j=s+n,m in h?h[j]=h[m]:delete h[j];for(s=v;s>v-r+n;s--)delete h[s-1]}else if(n>r)for(s=v-r;s>g;s--)m=s+r-1,j=s+n-1,m in h?h[j]=h[m]:delete h[j];for(s=0;s<n;s++)h[s+g]=arguments[s+2];return h.length=v-r+n,d}})},a9e3:function(e,t,n){"use strict";var r=n("83ab"),o=n("da84"),c=n("94ca"),a=n("6eeb"),i=n("5135"),u=n("c6b6"),l=n("7156"),d=n("c04e"),s=n("d039"),f=n("7c73"),b=n("241c").f,p=n("06cf").f,O=n("9bf2").f,m=n("58a8").trim,j="Number",h=o[j],v=h.prototype,g=u(f(v))==j,y=function(e){var t,n,r,o,c,a,i,u,l=d(e,!1);if("string"==typeof l&&l.length>2)if(l=m(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+l}for(c=l.slice(2),a=c.length,i=0;i<a;i++)if(u=c.charCodeAt(i),u<48||u>o)return NaN;return parseInt(c,r)}return+l};if(c(j,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var k,C=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof C&&(g?s((function(){v.valueOf.call(n)})):u(n)!=j)?l(new h(y(t)),n,C):y(t)},N=r?b(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),V=0;N.length>V;V++)i(h,k=N[V])&&!i(C,k)&&O(C,k,p(h,k));C.prototype=v,v.constructor=C,a(o,j,C)}},ab04:function(e,t,n){"use strict";var r=n("7a23"),o=Object(r["N"])("data-v-143c97ea"),c=o((function(e,t,n,o,c,a){return Object(r["r"])(),Object(r["d"])("button",{class:[{"text-faded":e.faded,highlight:e.selected},"col-0"]},[Object(r["g"])("b",null,Object(r["C"])(e.str),1),Object(r["g"])("span",{class:["text-ipa",{"text-faded":e.str}]},Object(r["C"])(e.ipa),3)],2)})),a=Object(r["h"])({props:{selected:Boolean,faded:Boolean,ipa:{type:String,default:""},str:{type:String,default:""}}});n("595b");a.render=c,a.__scopeId="data-v-143c97ea";t["a"]=a},b5cc:function(e,t,n){"use strict";var r=n("7a23"),o={class:"row"};function c(e,t,n,c,a,i){var u=Object(r["A"])("btn"),l=Object(r["A"])("ConfirmButton");return Object(r["r"])(),Object(r["d"])("div",o,[void 0!==e.add?(Object(r["r"])(),Object(r["d"])(u,{key:0,icon:"add",onClick:e.action.add},null,8,["onClick"])):Object(r["e"])("",!0),e.array&&e.item?(Object(r["r"])(),Object(r["d"])(r["a"],{key:1},[e.copy?(Object(r["r"])(),Object(r["d"])(u,{key:0,icon:"queue",onClick:e.action.copy},null,8,["onClick"])):Object(r["e"])("",!0),e.shift?(Object(r["r"])(),Object(r["d"])(u,{key:1,icon:"keyboard_arrow_right",onClick:t[1]||(t[1]=function(t){return e.action.shift(1)})})):e.shiftTwo?(Object(r["r"])(),Object(r["d"])(r["a"],{key:2},[Object(r["g"])(u,{icon:"keyboard_arrow_up",onClick:t[2]||(t[2]=function(t){return e.action.shift(-1)})}),Object(r["g"])(u,{icon:"keyboard_arrow_down",onClick:t[3]||(t[3]=function(t){return e.action.shift(1)})})],64)):Object(r["e"])("",!0),e.remove?(Object(r["r"])(),Object(r["d"])(l,{key:3,onConfirm:e.action.remove},null,8,["onConfirm"])):Object(r["e"])("",!0)],64)):Object(r["e"])("",!0)])}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var i=n("1da1"),u=(n("96cf"),n("a9e3"),n("a434"),n("04d4")),l=Object(r["h"])({name:"ArrayControl",components:{ConfirmButton:u["a"]},props:{modelValue:{type:Array,default:function(){}},item:{type:Object,default:void 0},add:{type:[Number,String,Object,Function],default:void 0},copy:Boolean,shift:Boolean,shiftTwo:Boolean,remove:Boolean},emits:["update:modelValue","update:item"],setup:function(e,t){var n=t.emit,o=Object(r["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});function c(){n("update:item",o.value?o.value[o.value.length-1]:void 0)}function u(){return l.apply(this,arguments)}function l(){return l=Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.add,void 0!==!n){t.next=3;break}return t.abrupt("return");case 3:if(o.value){t.next=7;break}return o.value=[],t.next=7,Object(r["m"])();case 7:n="function"===typeof n?n():"object"===a(n)?JSON.parse(JSON.stringify(n)):n,o.value.push(n),c();case 10:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function d(){var t=JSON.parse(JSON.stringify(Object(r["D"])(e.item)));o.value.push(t),c()}function s(t){var n=o.value.length,c=e.item,a=o.value.indexOf(Object(r["D"])(c)),i=(a+t+n)%n;o.value.splice(a,1),o.value.splice(i,0,c)}function f(){var t=o.value.indexOf(Object(r["D"])(e.item));o.value.splice(t,1),c()}return Object(r["J"])(o,c,{immediate:!0}),{array:o,action:{add:u,copy:d,shift:s,remove:f}}}});l.render=c;t["a"]=l},c545:function(e,t,n){},cd00:function(e,t,n){"use strict";n("c545")},fae1:function(e,t,n){"use strict";n("78f7")}}]);