(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3749b692"],{"04d4":function(e,t,n){"use strict";var c=n("7a23");function r(e,t,n,r,a,u){var o=Object(c["B"])("btn");return Object(c["s"])(),Object(c["d"])(o,{class:{"highlight-font-alert":"delete"===e.icon},icon:e.icon,text:e.text,onClick:e.confirm},null,8,["class","icon","text","onClick"])}var a=Object(c["h"])({props:{message:{type:String,default:"Delete?"},icon:{type:String,default:"delete"},text:{type:String,default:""}},emits:["confirm"],setup:function(e,t){var n=t.emit;function c(){window.confirm(e.message)&&n("confirm")}return{confirm:c}}});a.render=r;t["a"]=a},"2ff5":function(e,t,n){},"6f2d":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));n("b0c0");var c=document.createElement("a");function r(e,t){c.href="data:text/plain;charset=utf-8,"+encodeURIComponent(e+"\n"),c.download=t,c.click()}var a=new FileReader,u=document.createElement("input");function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:".json";u.onchange=function(){var t,n=null===(t=u.files)||void 0===t?void 0:t[0];n&&(a.onload=function(t){var c=t.target;return e(null===c||void 0===c?void 0:c.result,n.name)},a.readAsText(n))},u.accept=t,u.click()}u.type="file"},7305:function(e,t,n){"use strict";n("2ff5")},9392:function(e,t,n){"use strict";n.d(t,"j",(function(){return d})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return v})),n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return w})),n.d(t,"b",(function(){return k})),n.d(t,"g",(function(){return C})),n.d(t,"k",(function(){return R})),n.d(t,"c",(function(){return N})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return J}));var c=n("1da1"),r=(n("96cf"),n("a002")),a=n.n(r),u=n("7a23"),o=n("6f2d"),i=n("2cd9"),l=n("3f8f"),s=n("3a0b"),d=a.a.createInstance({name:"editor"}),f=new l["a"](d),b=Object(u["b"])((function(){var e=f.records.value[h.value];return e&&e.changed>e.added})),v=Object(u["y"])();function O(){return j.apply(this,arguments)}function j(){return j=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.getItem("lect");case 2:t=e.sent,t&&(v.value=t),Object(u["K"])((function(){return v.value}),Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.clear();case 2:return e.next=4,d.setItem("lect",Object(u["E"])(v.value));case 4:f.records.value={},v.value?C():J();case 6:case"end":return e.stop()}}),e)}))));case 5:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}var p=Object(u["y"])();function m(){return g.apply(this,arguments)}function g(){return g=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.getItem(h.value);case 2:t=e.sent,t?p.value=t:v.value||w.value.global?C():J(),f.addRecord(h.value),f.records.value[h.value].skip=!0;case 6:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}var h=Object(u["b"])((function(){var e=w.value.filename+".json",t=Object(u["E"])(v.value)||"Custom";return t&&(e=t+"/"+e),e})),w=Object(u["y"])({default:void 0,filename:""});function k(e){return y.apply(this,arguments)}function y(){return y=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(w.value=t,p.value=void 0,n=Object(u["K"])(p,_,{deep:!0}),Object(u["o"])(n),void 0!==v.value){e.next=7;break}return e.next=7,O();case 7:m();case 8:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function C(){return x.apply(this,arguments)}function x(){return x=Object(c["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["b"])(h.value,void 0,!0);case 2:t=e.sent,t?p.value=t:J(),delete f.records.value[h.value];case 5:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function R(){Object(o["b"])((function(e){return p.value=JSON.parse(e)}))}function N(){Object(o["a"])(JSON.stringify(p.value,null,2),h.value)}function S(){Object(i["b"])(JSON.stringify(p.value,null,2),h.value,window.prompt("Enter optional comment",h.value),h.value)}function J(){p.value=JSON.parse(JSON.stringify(w.value.default))}function _(){d.setItem(h.value,Object(u["E"])(p.value)),f.changeRecord(h.value)}},acdc:function(e,t,n){"use strict";n.r(t);n("b0c0");var c=n("7a23"),r=Object(c["O"])("data-v-39f91f4b");Object(c["v"])("data-v-39f91f4b");var a={id:"root",class:"small"},u={class:"section row scroll"},o={class:"row"},i={class:"row"},l={key:0,class:"icon"};Object(c["t"])();var s=r((function(e,t,n,s,d,f){var b=Object(c["B"])("btn"),v=Object(c["B"])("router-link"),O=Object(c["B"])("ConfirmButton"),j=Object(c["B"])("router-view");return Object(c["s"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",a,[Object(c["g"])("div",u,[Object(c["g"])("div",o,[Object(c["g"])(v,{to:"/home"},{default:r((function(){return[Object(c["g"])(b,{icon:"arrow_back"})]})),_:1}),Object(c["N"])(Object(c["g"])("select",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.routeName=t})},[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e.editorRoutes,(function(e){var t=e.title,n=e.name;return Object(c["s"])(),Object(c["d"])("option",{key:n,value:n,textContent:Object(c["D"])(t)},null,8,["value","textContent"])})),128))],512),[[c["H"],e.routeName]])]),Object(c["g"])("div",i,[e.isDirty?(Object(c["s"])(),Object(c["d"])("p",l,"sync_disabled")):Object(c["e"])("",!0),e.config.global?Object(c["e"])("",!0):(Object(c["s"])(),Object(c["d"])(c["a"],{key:1},[Object(c["N"])(Object(c["g"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.lect=t}),onChange:t[3]||(t[3]=function(t){return t.target.value=e.lect})},[Object(c["g"])("option",{value:"",textContent:Object(c["D"])("[Custom]")},null,8,["textContent"]),(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["z"])(e.lects,(function(e){return Object(c["s"])(),Object(c["d"])("option",{key:e,value:e,textContent:Object(c["D"])(e)},null,8,["value","textContent"])})),128))],544),[[c["H"],e.lect]]),e.lect?(Object(c["s"])(),Object(c["d"])(c["a"],{key:0},[e.isDirty?(Object(c["s"])(),Object(c["d"])(b,{key:0,icon:"publish",onClick:e.pushLect},null,8,["onClick"])):Object(c["e"])("",!0),Object(c["g"])(O,{icon:"cloud_download",message:"Local edits will be lost!",onConfirm:e.pullLect},null,8,["onConfirm"])],64)):Object(c["e"])("",!0)],64)),Object(c["g"])(b,{icon:"file_upload",onClick:e.uploadJSON},null,8,["onClick"]),Object(c["g"])(b,{icon:"file_download",onClick:e.downloadJSON},null,8,["onClick"]),Object(c["g"])(O,{message:"Reset file?",onConfirm:e.resetFile},null,8,["onConfirm"])])])]),Object(c["g"])(j)],64)})),d=(n("d81d"),n("04d4")),f=n("6c02"),b=n("3a0b"),v=n("5f86"),O=n("9392"),j=Object(c["h"])({name:"EditorNavigation",components:{ConfirmButton:d["a"]},setup:function(){var e,t=Object(f["c"])(),n=Object(f["d"])();Object(b["b"])("catalogue",[]).then((function(e){return r.value=e.map((function(e){return e.name}))}));var r=Object(c["y"])([]),a=Object(c["b"])({get:function(){return O["f"].value},set:function(e){window.confirm("Changing language will discard all local edits!")&&(O["f"].value=e)}}),u=Object(c["y"])(null!==(e=t.name)&&void 0!==e?e:v["b"][0].name);return Object(c["K"])(u,(function(){return n.push({name:u.value})})),{routeName:u,editorRoutes:v["b"],pullLect:O["g"],pushLect:O["h"],uploadJSON:O["k"],downloadJSON:O["c"],resetFile:O["i"],lect:a,lects:r,config:O["a"],isDirty:O["e"]}}});n("7305");j.render=s,j.__scopeId="data-v-39f91f4b";t["default"]=j}}]);