(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[601],{8086:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/word",function(){return r(83)}])},83:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return m}});var t=r(2322),i=r(2784),o=r(5759);function u(e){var n=e.data||{};return(0,t.jsxs)("div",{style:{padding:"10px 20px"},onClick:function(){"function"===typeof e.playAudio&&e.playAudio(n.pronunciation.audio_am||n.pronunciation.audio_en||n.pronunciation.audio_other)},children:[(0,t.jsxs)("div",{style:{lineHeight:1.5},children:[(0,t.jsx)("b",{children:n.word}),"\t",(0,t.jsx)("span",{style:{marginLeft:"20px",color:"rgba(0,0,0,0.6)",fontSize:"12px"},children:n.pronunciation.symbol_am&&"/".concat(n.pronunciation.symbol_am,"/")})]}),(0,t.jsx)("div",{style:{fontSize:"12px",lineHeight:1.5},children:n.answer.map((function(e,n){return(0,t.jsxs)("dt",{children:[(0,t.jsx)("b",{children:e[0]}),e[1]]},n)}))})]})}var a=r(7951),c=r(8110),s=r(7053),l=r(5632),d=r(169),f=r.n(d);function p(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function h(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return p(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){var n=e.active,r=(0,i.useRef)({mount:!1,lookUp:o.Xy}),d=(0,i.useRef)(),p=(0,i.useRef)(),m=(0,i.useState)([]),y=m[0],v=m[1],_=(0,l.useRouter)();(0,i.useEffect)((function(){return r.current.mount=!0,d.current=new o.Xy,p.current=document.createElement("audio"),function(){r.current.mount=!1}}),[]),(0,i.useEffect)((function(){"/word"===_.route&&d.current&&d.current.getHistory(2e3).then((function(e){r.current.mount&&w(e)}))}),[_.route]);var w=function(e,n){n||(n="recent");v(h(e.sort((function(e,r){var t=((null===e||void 0===e?void 0:e.word)||"#").slice(0,1),i=((null===r||void 0===r?void 0:r.word)||"#").slice(0,1);switch(n){case"a-z":return t.charCodeAt(0)-i.charCodeAt(0);case"z-a":return i.charCodeAt(0)-t.charCodeAt(0);case"recent":return(r.timestamp||0)-(e.timestamp||0);case"earliest":return(e.timestamp||0)-(r.timestamp||0);default:return 0}}))))},x=function(e){p.current&&(p.current.src=e,p.current.play())};return(0,t.jsxs)("div",{className:f()["word-page"],hidden:!1===n,children:[(0,t.jsxs)("h2",{children:[(0,t.jsx)("div",{className:f().title,children:"\u5217\u8868"}),(0,t.jsxs)(a.Z,{onChange:function(e){var n=e.target.value;w(y,n)},defaultValue:"recent",children:[(0,t.jsx)(c.Z,{value:"recent",children:"\u6700\u8fd1"}),(0,t.jsx)(c.Z,{value:"earliest",children:"\u6700\u65e9"}),(0,t.jsx)(c.Z,{value:"a-z",children:"A-Z"}),(0,t.jsx)(c.Z,{value:"z-a",children:"Z-A"})]}),(0,t.jsx)(s.Z,{})]}),(0,t.jsx)("div",{className:f().list,children:y.map((function(e){return(0,t.jsx)(u,{data:e,playAudio:x},e.word)}))})]})}},169:function(e){e.exports={"word-page":"word_word-page__QHK_y",title:"word_title__bhX5B",list:"word_list__C2Fym"}}},function(e){e.O(0,[482,759,774,888,179],(function(){return n=8086,e(e.s=n);var n}));var n=e.O();_N_E=n}]);