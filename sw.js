if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(d.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-d236bde4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"523b5dc8742893f4f461eff0a76de260"},{url:"assets/audio-player.5db65ead.js",revision:"2a081972e974e9edca02ecd44c6993ec"},{url:"assets/CorpusEditor.0268b338.css",revision:"6ff17055f4c91eaadf0fadcf97679b25"},{url:"assets/CorpusEditor.e83cb211.js",revision:"32d36a10a8270c83c0b7d58d27b4d622"},{url:"assets/Editor.04a215bc.js",revision:"ad40434377e29ac780e0828f81ce909b"},{url:"assets/editor.05fb7d6b.js",revision:"cb1d7220e0597ce479360650289d2ab0"},{url:"assets/Editor.2df8de9d.js",revision:"f6ba65ed7af8194ca3f268ce88c36b77"},{url:"assets/Editor.41427765.js",revision:"21c7e513daf918fc4cb3b7b70c4a2c08"},{url:"assets/Editor.6c2a920a.css",revision:"3c6dcc71585feac78cfba7b1a6a249f7"},{url:"assets/Editor.754352ad.css",revision:"9e7feeb68395ac3cf58cdc012dbaf996"},{url:"assets/Editor.7e321a3a.css",revision:"501f137beae6977fab819721ee7e9fb2"},{url:"assets/Editor.9a581e22.js",revision:"27f73eb147b5f1ee47bf7ffa953e82f6"},{url:"assets/Editor.9c3fef38.css",revision:"90a56c1d77010f0778cf32e38bddc6d1"},{url:"assets/Editor.b37d8f6a.css",revision:"898f8ef07d0dd963d0b4eeb35e295d69"},{url:"assets/Editor.c1a00539.js",revision:"439d1f07ed6d95fc461f9be608dcf65e"},{url:"assets/EditorCard.102d181c.js",revision:"3bf152f849fa9f403e8d6e301d38bf7a"},{url:"assets/EditorCard.84fe7593.css",revision:"7b78583f3d109295caf2ad62a3dbf410"},{url:"assets/EditorNavigation.056d1128.js",revision:"12d92cc340d4a796b4bdfe4aa3764535"},{url:"assets/EditorNavigation.bc2fd678.css",revision:"8f2de7c6b09bf93be15e6ee2d3337fec"},{url:"assets/file-manager.9a2fdd9a.js",revision:"6c89565010c6b1d1e6d8fbdff2b745de"},{url:"assets/Flag.57192830.css",revision:"3a0ff92c219366076023f0a4bfb57c4d"},{url:"assets/Flag.f8e3f9e0.js",revision:"24006c907b17599f19d8895d8cd0a6da"},{url:"assets/index.09de23dd.css",revision:"82c09f8866a20a1b0d13856e3b12cb49"},{url:"assets/index.0ef8c241.css",revision:"acde313381ac4c4acff580b52a247461"},{url:"assets/index.109c23fb.js",revision:"06ce5d0b6ccb112794855ef279c51126"},{url:"assets/index.19ea6d5c.css",revision:"44ec4d4e173d37d3b5ea3b75fb01b646"},{url:"assets/index.23fef149.js",revision:"c87396a2360eec0f5cfd0a63f61d35cc"},{url:"assets/index.327f15ff.js",revision:"04117b3a90118fc678a5cad53169a892"},{url:"assets/index.32e7c8cd.css",revision:"7775dc99b357021f69ebb9f096a93f00"},{url:"assets/index.4762e9dd.js",revision:"ec8579fe1ee01c7770578fc671fa224d"},{url:"assets/index.64a75c27.js",revision:"7b4c4451433c1a50c87da4ab6b4fc79d"},{url:"assets/index.74e5376b.js",revision:"70552133a86627551119b84695d80fe6"},{url:"assets/index.8cad5e87.js",revision:"e23ab7ef906a3359dea4bdc1f47e1e47"},{url:"assets/index.8f68c5d5.css",revision:"87158b533a523ad5c91717045289ddfc"},{url:"assets/index.bc0f7e7b.css",revision:"4f1b25a1be2aa4beecf953134488f59e"},{url:"assets/index.cbab1530.js",revision:"a692b11716936f5d7a593240af8cdfe3"},{url:"assets/index.e1b1f002.css",revision:"313c10547af6b91896997c63e25399c5"},{url:"assets/Navigation.012f1839.js",revision:"71ebd93b1a33fb556b536b2d8be98ae7"},{url:"assets/Navigation.a06d9b94.css",revision:"d61761f47cda0ed84892f078ef5413bb"},{url:"assets/NotesEditor.73feaf4b.js",revision:"40bcc94606b7e1c06ab019671c1f355b"},{url:"assets/search.f060bdbd.js",revision:"954022bfec87ad5e50da813a38fb4443"},{url:"assets/Seeker.7110ab0c.js",revision:"4f76f76678464d07b32db110486a6105"},{url:"assets/Seeker.e7e6ce0a.css",revision:"5af13ab48a5532a4518eae7dd4c4069e"},{url:"assets/TableEntry.28ab263e.css",revision:"b744fff5b1adc4784e3af8f2f93403b9"},{url:"assets/TableEntry.6c130267.js",revision:"102e7d6b9ec98e28ca80a92b798b9fee"},{url:"assets/types.a423ec07.js",revision:"767a87923daffeeeba3630a8da9c93c5"},{url:"assets/types.c828ff55.css",revision:"3b24057c5779790852b6ad3329f30038"},{url:"assets/vendor.c8bf7c27.js",revision:"4ea33c77f26a6e9d9a025a7e57fee5c6"},{url:"index.html",revision:"f18fa16dd59844ae9dc9f3cc9d5713ba"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
