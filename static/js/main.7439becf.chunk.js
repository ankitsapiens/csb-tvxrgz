(this["webpackJsonpclaims-pro"]=this["webpackJsonpclaims-pro"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(3),o=n(4),a=n(7),i=n(6),c=n(0),s=n(5),u=function(e,t){!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!==typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(n,r){!function(e,t,n,r){var o,a,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";function c(){try{var n="string"===typeof this.response?JSON.parse(this.response):this.response;if(!n.data)throw new Error;var r=n.data,i=r.cdn,c=r.api;o=i,a=c;var s=t.createElement("script");s.async=!0,s.src="".concat(o,"/loader.journey.js"),s.type="text/javascript",t.getElementsByTagName("head")[0].appendChild(s)}catch(e){throw new Error("Journey: failed to retrieve metadata")}}var s=new XMLHttpRequest;s.addEventListener("load",c),s.open("GET","".concat(r,"/").concat(i,"/metadata"),!0),s.responseType="json",s.send();var u={};e[n]={init:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};u.initOptions=t,u.initFormId=e}},e.__journeyLoaderReady___=function(t,r){r(o,a,i,u),e[n]=t}}(window,document,"Journey","".concat(t),e)}])},d=n(1),f=function(e){var t=e.journeyId,n=e.sessionId,r=e.companyId,o=e.sessionReady,a=e.journeyData,i=e.host,s=Object(c.useRef)(null);return Object(c.useEffect)((function(){o&&(u(r,i),window.Journey.init(t,{session:n,containerRef:s.current,data:null===a||void 0===a?void 0:a.formDefault}))}),[s,o]),Object(d.jsx)("div",{ref:s,"data-testid":"form-container"})};f.defaultProps={journeyId:""};var p=f,l=(n(16),function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={name:"React"},o}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(p,{sessionId:"",sessionReady:!0,journeyId:"b609f7ac-a6b4-4720-9b33-ef987b23af4f",companyId:"44937201-8c0a-4ce3-9843-66531f9d7698",host:"https://test.delta-forms-widget.sapienspaas.com"})}}]),n}(c.Component));Object(s.render)(Object(d.jsx)(l,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.7439becf.chunk.js.map