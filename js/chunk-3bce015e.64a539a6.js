(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3bce015e"],{"04d4":function(e,t,n){"use strict";var r=n("7a23");function a(e,t,n,a,c,i){var o=Object(r["A"])("btn");return Object(r["r"])(),Object(r["d"])(o,{class:"highlight-font-alert",icon:e.icon,text:e.text,onClick:e.confirm},null,8,["icon","text","onClick"])}var c=Object(r["h"])({props:{message:{type:String,default:"Delete?"},icon:{type:String,default:"delete"},text:{type:String,default:""}},emits:["confirm"],setup:function(e,t){var n=t.emit;function r(){window.confirm(e.message)&&n("confirm")}return{confirm:r}}});c.render=a;t["a"]=c},"0cb2":function(e,t,n){var r=n("7b0b"),a=Math.floor,c="".replace,i=/\$([$&'`]|\d\d?|<[^>]*>)/g,o=/\$([$&'`]|\d\d?)/g;e.exports=function(e,t,n,u,l,f){var d=n+e.length,s=u.length,p=o;return void 0!==l&&(l=r(l),p=i),c.call(f,p,(function(r,c){var i;switch(c.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(d);case"<":i=l[c.slice(1,-1)];break;default:var o=+c;if(0===o)return r;if(o>s){var f=a(o/10);return 0===f?r:f<=s?void 0===u[f-1]?c.charAt(1):u[f-1]+c.charAt(1):r}i=u[o-1]}return void 0===i?"":i}))}},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"1e73":function(e,t,n){},3835:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return o}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function a(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done);r=!0)if(n.push(i.value),t&&n.length===t)break}catch(u){a=!0,c=u}finally{try{r||null==o["return"]||o["return"]()}finally{if(a)throw c}}return n}}var c=n("06c5");function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){return r(e)||a(e,t)||Object(c["a"])(e,t)||i()}},"3bdb":function(e,t,n){},"3cb6":function(e,t,n){"use strict";n.r(t);n("a434"),n("b0c0");var r=n("7a23"),a=Object(r["O"])("data-v-42e530be");Object(r["u"])("data-v-42e530be");var c={key:0,class:"section col-2 small grid"},i={class:"col-2"},o=Object(r["f"])(" Text that will be displayed to demonstrate the converter. "),u=Object(r["f"])(" The 1st mapping should be the same as the caption. Default conversion is from the 1st into the 2nd mappings in the order. "),l=Object(r["f"])(" During conversion system will consuquently go over these pairs, replacing text from the left with the text from the right or vise versa (right with left) if conversion is reversed.");Object(r["s"])();var f=a((function(e,t,n,f,d,s){var p=Object(r["A"])("EditorCard"),b=Object(r["A"])("ArrayControl"),v=Object(r["A"])("btn");return e.file?(Object(r["r"])(),Object(r["d"])("div",c,[Object(r["g"])("div",i,[Object(r["g"])(p,{icon:"text_snippet",header:"Sample Text"},{caption:a((function(){return[o]})),default:a((function(){return[Object(r["M"])(Object(r["g"])("textarea",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.file.sample=t})},null,512),[[r["H"],e.file.sample]]),Object(r["M"])(Object(r["g"])("textarea",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.converted=t}),readonly:""},null,512),[[r["H"],e.converted]])]})),_:1}),Object(r["g"])(p,{icon:"call_merge",header:"Mappings"},{header:a((function(){return[Object(r["g"])(b,{modelValue:e.file.mappings,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.file.mappings=t}),item:e.mapping,"onUpdate:item":t[4]||(t[4]=function(t){return e.mapping=t}),add:{},shift:"",remove:""},null,8,["modelValue","item"])]})),caption:a((function(){return[u]})),default:a((function(){return[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(e.file.mappings,(function(t,n){return Object(r["M"])((Object(r["r"])(),Object(r["d"])("input",{key:n,"onUpdate:modelValue":function(e){return t.name=e},class:"selectable",type:"text",placeholder:"mapping #"+n,readonly:e.mapping!==t,onClick:function(n){return e.mapping=t}},null,8,["onUpdate:modelValue","placeholder","readonly","onClick"])),[[r["H"],t.name]])})),128))]})),_:1})]),e.mapping?(Object(r["r"])(),Object(r["d"])(p,{key:0,icon:"format_list_numbered",header:"Pairs"},{header:a((function(){return[Object(r["g"])(b,{modelValue:e.mapping.pairs,"onUpdate:modelValue":t[5]||(t[5]=function(t){return e.mapping.pairs=t}),add:[]},null,8,["modelValue"])]})),caption:a((function(){return[l]})),default:a((function(){return[(Object(r["r"])(!0),Object(r["d"])(r["a"],null,Object(r["y"])(e.mapping.pairs,(function(t,n){return Object(r["r"])(),Object(r["d"])("div",{key:n,class:"row"},[Object(r["g"])(v,{icon:"add",onClick:function(t){return e.mapping.pairs.splice(n,0,[])}},null,8,["onClick"]),Object(r["M"])(Object(r["g"])("input",{"onUpdate:modelValue":function(e){return t[0]=e},type:"text",placeholder:"from"},null,8,["onUpdate:modelValue"]),[[r["H"],t[0]]]),Object(r["M"])(Object(r["g"])("input",{"onUpdate:modelValue":function(e){return t[1]=e},type:"text",placeholder:"to"},null,8,["onUpdate:modelValue"]),[[r["H"],t[1]]]),Object(r["g"])(v,{icon:"clear",onClick:function(t){return e.mapping.pairs.splice(n,1)}},null,8,["onClick"])])})),128))]})),_:1})):Object(r["e"])("",!0)])):Object(r["e"])("",!0)})),d=(n("d81d"),n("3835")),s=n("b5cc"),p=n("7694"),b=n("9392"),v=n("fa5c"),g=Object(r["h"])({components:{ArrayControl:s["a"],EditorCard:p["a"]},setup:function(){var e=Object(b["d"])({defaultFile:{default:[0,0],mappings:[]},filename:"converter",storage:"editor.converter"}),t=Object(r["x"])(),n=Object(r["b"])((function(){var t,n,r;return null===(t=e.value)||void 0===t||null===(n=t.mappings)||void 0===n||null===(r=n[0])||void 0===r?void 0:r.pairs})),a=Object(r["b"])((function(){var r,a,c,i=null!==(r=null===(a=e.value)||void 0===a?void 0:a.sample)&&void 0!==r?r:"";if(!n.value)return i;var o=Object(v["a"])(i,n.value);return(null===(c=t.value)||void 0===c?void 0:c.pairs)===n.value?o:Object(v["a"])(o,n.value.map((function(e){var t=Object(d["a"])(e,2),n=t[0],r=t[1];return[r,n]})))}));return{file:e,mapping:t,converted:a}}});n("5d4d");g.render=f,g.__scopeId="data-v-42e530be";t["default"]=g},"498a":function(e,t,n){"use strict";var r=n("23e7"),a=n("58a8").trim,c=n("c8d2");r({target:"String",proto:!0,forced:c("trim")},{trim:function(){return a(this)}})},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),c=n("50c4"),i=n("a691"),o=n("1d80"),u=n("8aa5"),l=n("0cb2"),f=n("14c3"),d=Math.max,s=Math.min,p=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var b=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,g=b?"$":"$0";return[function(n,r){var a=o(this),c=void 0==n?void 0:n[e];return void 0!==c?c.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!b&&v||"string"===typeof r&&-1===r.indexOf(g)){var o=n(t,e,this,r);if(o.done)return o.value}var m=a(e),O=String(this),h="function"===typeof r;h||(r=String(r));var j=m.global;if(j){var y=m.unicode;m.lastIndex=0}var x=[];while(1){var E=f(m,O);if(null===E)break;if(x.push(E),!j)break;var S=String(E[0]);""===S&&(m.lastIndex=u(O,c(m.lastIndex),y))}for(var C="",A=0,I=0;I<x.length;I++){E=x[I];for(var k=String(E[0]),_=d(s(i(E.index),O.length),0),w=[],N=1;N<E.length;N++)w.push(p(E[N]));var R=E.groups;if(h){var U=[k].concat(w,_,O);void 0!==R&&U.push(R);var T=String(r.apply(void 0,U))}else T=l(k,O,_,w,R,r);_>=A&&(C+=O.slice(A,_)+T,A=_+k.length)}return C+O.slice(A)}]}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),a=n("5899"),c="["+a+"]",i=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),u=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(i,"")),2&e&&(n=n.replace(o,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5d4d":function(e,t,n){"use strict";n("3bdb")},7156:function(e,t,n){var r=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var c,i;return a&&"function"==typeof(c=t.constructor)&&c!==n&&r(i=c.prototype)&&i!==n.prototype&&a(e,i),e}},7694:function(e,t,n){"use strict";var r=n("7a23"),a=Object(r["O"])("data-v-03976a61");Object(r["u"])("data-v-03976a61");var c={class:"col"},i={class:"row"},o={class:"icon"},u={class:"flex"},l=Object(r["g"])("hr",null,null,-1),f={key:0,class:"text-caption text-faded"},d={class:"col"};Object(r["s"])();var s=a((function(e,t,n,a,s,p){return Object(r["r"])(),Object(r["d"])("div",c,[Object(r["g"])("div",i,[Object(r["g"])("p",o,Object(r["C"])(e.icon),1),Object(r["g"])("h2",u,Object(r["C"])(e.header),1),Object(r["z"])(e.$slots,"header")]),l,e.caption?(Object(r["r"])(),Object(r["d"])("p",f,[Object(r["z"])(e.$slots,"caption")])):Object(r["e"])("",!0),Object(r["g"])("div",d,[Object(r["z"])(e.$slots,"default")])])})),p=Object(r["h"])({name:"EditorCard",props:{button:{type:String,default:"add"},icon:{type:String,default:""},header:{type:String,default:""}},emits:["action"],setup:function(e,t){var n=t.emit,r=t.slots;return{emit:n,caption:r.caption}}});n("c714");p.render=s,p.__scopeId="data-v-03976a61";t["a"]=p},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),c=RegExp.prototype.exec,i=String.prototype.replace,o=c,u=function(){var e=/a/,t=/b*/g;return c.call(e,"a"),c.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=u||f||l;d&&(o=function(e){var t,n,a,o,d=this,s=l&&d.sticky,p=r.call(d),b=d.source,v=0,g=e;return s&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(b="(?: "+b+")",g=" "+g,v++),n=new RegExp("^(?:"+b+")",p)),f&&(n=new RegExp("^"+b+"$(?!\\s)",p)),u&&(t=d.lastIndex),a=c.call(s?n:d,g),s?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:u&&a&&(d.lastIndex=d.global?a.index+a[0].length:t),f&&a&&a.length>1&&i.call(a[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a}),e.exports=o},9392:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u}));var r=n("7a23"),a={defaultFile:{},storage:"",filename:""},c=Object(r["x"])();function i(){c.value=JSON.parse(JSON.stringify(a.defaultFile))}function o(){localStorage[a.storage]=JSON.stringify(c.value)}function u(e){Object.assign(a,e);try{c.value=JSON.parse(localStorage[a.storage])}catch(t){i()}return Object(r["J"])(c,o,{deep:!0}),c}},"9f7f":function(e,t,n){"use strict";var r=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("23cb"),c=n("a691"),i=n("50c4"),o=n("7b0b"),u=n("65f0"),l=n("8418"),f=n("1dde"),d=n("ae40"),s=f("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,v=Math.min,g=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!s||!p},{splice:function(e,t){var n,r,f,d,s,p,O=o(this),h=i(O.length),j=a(e,h),y=arguments.length;if(0===y?n=r=0:1===y?(n=0,r=h-j):(n=y-2,r=v(b(c(t),0),h-j)),h+n-r>g)throw TypeError(m);for(f=u(O,r),d=0;d<r;d++)s=j+d,s in O&&l(f,d,O[s]);if(f.length=r,n<r){for(d=j;d<h-r;d++)s=d+r,p=d+n,s in O?O[p]=O[s]:delete O[p];for(d=h;d>h-r+n;d--)delete O[d-1]}else if(n>r)for(d=h-r;d>j;d--)s=d+r-1,p=d+n-1,s in O?O[p]=O[s]:delete O[p];for(d=0;d<n;d++)O[d+j]=arguments[d+2];return O.length=h-r+n,f}})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),a=n("da84"),c=n("94ca"),i=n("6eeb"),o=n("5135"),u=n("c6b6"),l=n("7156"),f=n("c04e"),d=n("d039"),s=n("7c73"),p=n("241c").f,b=n("06cf").f,v=n("9bf2").f,g=n("58a8").trim,m="Number",O=a[m],h=O.prototype,j=u(s(h))==m,y=function(e){var t,n,r,a,c,i,o,u,l=f(e,!1);if("string"==typeof l&&l.length>2)if(l=g(l),t=l.charCodeAt(0),43===t||45===t){if(n=l.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(l.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+l}for(c=l.slice(2),i=c.length,o=0;o<i;o++)if(u=c.charCodeAt(o),u<48||u>a)return NaN;return parseInt(c,r)}return+l};if(c(m,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var x,E=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof E&&(j?d((function(){h.valueOf.call(n)})):u(n)!=m)?l(new O(y(t)),n,E):y(t)},S=r?p(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;S.length>C;C++)o(O,x=S[C])&&!o(E,x)&&v(E,x,b(O,x));E.prototype=h,h.constructor=E,i(a,m,E)}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},b5cc:function(e,t,n){"use strict";var r=n("7a23"),a={class:"row"},c={key:1,class:"row-0"};function i(e,t,n,i,o,u){var l=Object(r["A"])("btn"),f=Object(r["A"])("ConfirmButton");return Object(r["r"])(),Object(r["d"])("div",a,[void 0!==e.add?(Object(r["r"])(),Object(r["d"])(l,{key:0,icon:"add",onClick:e.action.add},null,8,["onClick"])):Object(r["e"])("",!0),e.array&&e.item?(Object(r["r"])(),Object(r["d"])(r["a"],{key:1},[e.copy?(Object(r["r"])(),Object(r["d"])(l,{key:0,icon:"queue",onClick:e.action.copy},null,8,["onClick"])):Object(r["e"])("",!0),e.shift?(Object(r["r"])(),Object(r["d"])("div",c,[Object(r["g"])(l,{icon:"keyboard_arrow_up",onClick:t[1]||(t[1]=function(t){return e.action.shift(-1)})}),Object(r["g"])(l,{icon:"keyboard_arrow_down",onClick:t[2]||(t[2]=function(t){return e.action.shift(1)})})])):Object(r["e"])("",!0),e.remove?(Object(r["r"])(),Object(r["d"])(f,{key:2,onConfirm:e.action.remove},null,8,["onConfirm"])):Object(r["e"])("",!0)],64)):Object(r["e"])("",!0)])}n("c975"),n("a434"),n("a9e3"),n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}n("96cf");var u=n("1da1"),l=n("04d4"),f=Object(r["h"])({name:"ArrayControl",components:{ConfirmButton:l["a"]},props:{modelValue:{type:Array,default:function(){}},item:{type:Object,default:void 0},add:{type:[Number,String,Object,Function],default:void 0},copy:Boolean,shift:Boolean,remove:Boolean},emits:["update:modelValue","update:item"],setup:function(e,t){var n=t.emit,a=Object(r["b"])({get:function(){return e.modelValue},set:function(e){return n("update:modelValue",e)}});function c(){n("update:item",a.value?a.value[a.value.length-1]:void 0)}function i(){return l.apply(this,arguments)}function l(){return l=Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.add,void 0!==!n){t.next=3;break}return t.abrupt("return");case 3:if(a.value){t.next=7;break}return a.value=[],t.next=7,Object(r["m"])();case 7:n="function"===typeof n?n():"object"===o(n)?JSON.parse(JSON.stringify(n)):n,a.value.push(n),c();case 10:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function f(){var t=JSON.parse(JSON.stringify(Object(r["D"])(e.item)));a.value.push(t),c()}function d(t){var n=a.value.length,c=e.item,i=a.value.indexOf(Object(r["D"])(c)),o=(i+t+n)%n;a.value.splice(i,1),a.value.splice(o,0,c)}function s(){var t=a.value.indexOf(Object(r["D"])(e.item));a.value.splice(t,1),c()}return Object(r["J"])(a,c,{immediate:!0}),{array:a,action:{add:i,copy:f,shift:d,remove:s}}}});f.render=i;t["a"]=f},c714:function(e,t,n){"use strict";n("1e73")},c8d2:function(e,t,n){var r=n("d039"),a=n("5899"),c="​᠎";e.exports=function(e){return r((function(){return!!a[e]()||c[e]()!=c||a[e].name!==e}))}},c975:function(e,t,n){"use strict";var r=n("23e7"),a=n("4d64").indexOf,c=n("a640"),i=n("ae40"),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0,l=c("indexOf"),f=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!l||!f},{indexOf:function(e){return u?o.apply(this,arguments)||0:a(this,e,arguments.length>1?arguments[1]:void 0)}})},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),c=n("b622"),i=n("9263"),o=n("9112"),u=c("species"),l=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),d=c("replace"),s=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var b=c(e),v=!a((function(){var t={};return t[b]=function(){return 7},7!=""[e](t)})),g=v&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[b]=/./[b]),n.exec=function(){return t=!0,null},n[b](""),!t}));if(!v||!g||"replace"===e&&(!l||!f||s)||"split"===e&&!p){var m=/./[b],O=n(b,""[e],(function(e,t,n,r,a){return t.exec===i?v&&!a?{done:!0,value:m.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:s}),h=O[0],j=O[1];r(String.prototype,e,h),r(RegExp.prototype,b,2==t?function(e,t){return j.call(e,this,t)}:function(e){return j.call(e,this)})}d&&o(RegExp.prototype[b],"sham",!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").map,c=n("1dde"),i=n("ae40"),o=c("map"),u=i("map");r({target:"Array",proto:!0,forced:!o||!u},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},fa5c:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("fb6a"),n("ac1f"),n("5319"),n("498a");var r=n("3835"),a=n("b85c");function c(e){var t="",n=0;return" "===e.charAt(0)&&(t=" ",n=1),t+e.charAt(n).toUpperCase()+e.slice(n+1)}function i(e,t){e=" "+e.replace(/\n/g,"\n ").trim();for(var n="",i=0;i<e.length;){var o,u=!1,l=Object(a["a"])(t);try{for(l.s();!(o=l.n()).done;){var f=Object(r["a"])(o.value,2),d=f[0],s=f[1];if(d&&s){for(var p=d.length,b=e.substring(i,i+p),v=[[d,s],[c(d),c(s)],[d.toUpperCase(),s.toUpperCase()]],g=0,m=v;g<m.length;g++){var O=Object(r["a"])(m[g],2),h=O[0],j=O[1];if(b===h){u=!0,n+=j,i+=p;break}}if(u)break}}}catch(y){l.e(y)}finally{l.f()}u||(n+=e[i],i++)}return n.replace(/\n /g,"\n").trim()}}}]);
//# sourceMappingURL=chunk-3bce015e.64a539a6.js.map