(this.webpackJsonpsolitude=this.webpackJsonpsolitude||[]).push([[0],{176:function(e,t,n){e.exports=n(524)},185:function(e,t,n){},200:function(e,t,n){},521:function(e,t,n){},522:function(e,t,n){},523:function(e,t,n){},524:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(6),c=n.n(o),i=n(52),l=n(9),u=function(e){return{type:"UPDATE_MARKDOWN_VALUE",text:e}},s=function(e){return{type:"UPDATE_PANE_SIZE",size:e}},d=n(74),h=n(146),f=(n(185),function(e){var t=e.onViewModeChange;return r.a.createElement("div",{className:"appbar"},r.a.createElement("div",{className:"logo"},r.a.createElement("span",null,"Solitude")),r.a.createElement("div",{className:"modebar"},r.a.createElement(d.b,{width:"22",height:"22",onClick:function(){return t("100%")}}),r.a.createElement(d.a,{width:"22",height:"22",onClick:function(){return t("50%")}}),r.a.createElement(h.a,{width:"22",height:"22",onClick:function(){return t("0%")}})))}),m=Object(l.b)(null,(function(e){return{onViewModeChange:function(t){return e(s(t))}}}))(f),p=n(147),E=n(148),b=(n(187),n(188),n(112),n(189),n(190),n(191),n(192),n(193),n(194),n(114),n(197),n(199),n(200),function(e){var t=e.onValueChange,n=e.onSelectedEditorChange,a=e.markdownValue;return r.a.createElement(E.Controlled,{options:{mode:"gfm",lineNumbers:!0,spellcheck:!0,theme:"neo"},value:a,onBeforeChange:function(e,n,a){t(a)},onSelection:function(e,t){n(e)},height:"100%"})}),g=Object(l.b)((function(e){return{markdownValue:e.markdownValue}}),(function(e){return{onValueChange:function(t){return e(u(t))},onSelectedEditorChange:function(t){return e({type:"UPDATE_EDITOR_STATE",editorState:t})}}}))(b),v=n(149),w=n.n(v),O=n(150),k=n(151),C=n(171),S=n(152),y=n(173),_=n(533),T=n(530),j=function(e){function t(){return Object(O.a)(this,t),Object(C.a)(this,Object(S.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(k.a)(t,[{key:"render",value:function(){var e=this.props,t=e.language,n=e.value;return r.a.createElement(_.a,{language:t,style:T.a},n)}}]),t}(a.PureComponent);j.defaultProps={language:null};var D=j,P=Object(l.b)((function(e){return{markdownValue:e.markdownValue}}))((function(e){var t=e.markdownValue;return r.a.createElement(w.a,{className:"react-markdown",source:t,escapeHtml:!1,renderers:{code:D}})})),N=function(e){var t=e.paneSize,n=e.onPaneSizeChange;return r.a.createElement(p.a,{split:"vertical",defaultSize:t,size:t,onDragFinished:function(e){return n(e)}},r.a.createElement("div",{className:"editor-pane"},"0%"!==t&&r.a.createElement(g,null)),r.a.createElement("div",{className:"result-pane"},r.a.createElement(P,null)))},A=Object(l.b)((function(e){return{paneSize:e.splitPane.size}}),(function(e){return{onPaneSizeChange:function(t){return e(s(t))}}}))(N),I=n(25),U=n(169),L=n(170),M=n(75),x=n(57),z=n(50),V=n(531);function R(){var e=Object(M.a)(["\n  {\n    viewer {\n      login\n      avatarUrl\n    }\n  }\n"]);return R=function(){return e},e}var B=Object(z.b)(R()),H=function(){var e=Object(x.b)(B),t=(e.loading,e.error,e.data);return r.a.createElement(V.a,{src:t&&t.viewer.avatarUrl,size:"small"})},F=n(78),W=n(111),$=n(53),q=n.n($),G=n(61),K=function(e){return new Promise((function(t,n){var a=new FileReader;a.onload=function(e){t(e.target.result)},a.onerror=function(e){return n(e)},a.readAsText(e)}))},X=function(e){var t=e.type,n=void 0===t?"":t,a=e.editorState;if(Object(G.isEmpty)(a))return null;var r=a.getSelection(),o=a.getCursor();switch(n){case"header":a.setCursor(o.line,0);var c=a.getCursor().line,i=a.getCursor().ch,l=a.findWordAt({line:c,ch:i}).anchor.ch,u=a.findWordAt({line:c,ch:i}).head.ch;if(a.setSelection({line:c,ch:l},{line:c,ch:u}),r=a.getSelection(),/^#{1,5}$/.test(r))a.replaceSelection(r+"#");else{if(/^#{6,}$/.test(r))break;a.replaceSelection("# "+r)}a.focus();break;case"bold":a.replaceSelection("**"+(r||" ")+"**"),a.focus();break;case"italic":a.replaceSelection("*"+(r||" ")+"*"),a.focus();break;case"strikethrough":a.replaceSelection("~~"+(r||" ")+"~~"),a.focus();break;case"hr":a.setCursor(o.line+1,0),a.replaceSelection("\n\n---\n"),a.focus();break;case(n.match(/h[1-6]{1}/)||{}).input:a.setCursor(o.line,0),a.replaceSelection("#".repeat(Number(n[1]))+" "),a.focus();break;case"table":a.setCursor(o.line,0),a.replaceSelection("\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n"),a.focus();break;case"code":a.replaceSelection("\n```language\n".concat(r,"\n```\n")),a.focus();break;default:a.replaceSelection(r)}},J=n(532),Z=function(e){var t=e.modalTitle,n=void 0===t?"Custom modal":t,a=e.isModalOpen,o=e.modalBody,c=e.onModalClose;return r.a.createElement(J.a,{title:n,visible:a,onOk:function(){return c()},onCancel:function(){return c()}},o)},Y=function(e){var t=e.editorState,n=e.token,a=e.handleNewFileUpload,o=e.handleModalOpen;return r.a.createElement("div",{className:"toolbar"},r.a.createElement("ul",null,r.a.createElement("li",{onClick:function(){return X({type:"header",editorState:t})}},r.a.createElement(I.d,{width:"22",height:"22"})),r.a.createElement("li",{onClick:function(){return X({type:"bold",editorState:t})}},r.a.createElement(I.a,{width:"22",height:"22"})),r.a.createElement("li",{onClick:function(){return X({type:"italic",editorState:t})}},r.a.createElement(I.e,{width:"22",height:"22"})),r.a.createElement("li",{onClick:function(){return X({type:"strikethrough",editorState:t})}},r.a.createElement(I.h,{width:"22",height:"22"})),r.a.createElement("li",{onClick:function(){return X({type:"hr",editorState:t})}},r.a.createElement(I.f,{width:"22",height:"22"})),r.a.createElement("li",{onClick:function(){return X({type:"table",editorState:t})}},r.a.createElement(I.i,{width:"22",height:"22"})),r.a.createElement("li",{onClick:function(){return X({type:"code",editorState:t})}},r.a.createElement(I.b,{width:"22",height:"22"}))),r.a.createElement("ul",null,n?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(H,null)),r.a.createElement("li",{onClick:function(){return o({modalType:"GIT_MODAL"})}},r.a.createElement(L.a,{width:"22",height:"20"}))):r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/login/oauth/authorize?client_id=".concat(F.GITHUB_APP_CLIENT_ID,"&scope=repo")},r.a.createElement(U.a,{width:"22",height:"20"}))),r.a.createElement("li",{onClick:function(e){return function(e){var t,n,a;return q.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:t=e.event,n=e.handleNewFileUpload,(a=document.createElement("input")).type="file",a.onchange=function(e){var t,a;return q.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.target.files[0],r.prev=1,r.next=4,q.a.awrap(K(t));case 4:a=r.sent,n(a),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),console.error(r.t0);case 11:case"end":return r.stop()}}),null,null,[[1,8]])},t.preventDefault(),a.click();case 6:case"end":return r.stop()}}))}({event:e,handleNewFileUpload:a})}},r.a.createElement(I.c,{width:"22",height:"22"})),r.a.createElement("li",{onClick:function(){return function(e){var t=e.editorState,n=e.fileName,a=document.createElement("a"),r="";Object(G.isEmpty)(t)||(r=t.getValue());var o=new Blob([r],{type:"text/plain"});a.href=URL.createObjectURL(o),a.download=n,document.body.appendChild(a),a.click()}({fileName:"solitude.md",editorState:t})}},r.a.createElement(I.g,{width:"22",height:"22"}))))},Q=Object(l.b)((function(e){return{editorState:e.editor,token:e.auth.token}}),(function(e){return{handleNewFileUpload:function(t){return e(u(t))},handleModalOpen:function(t){return e({type:"SHOW_MODAL",modalType:(n=t).modalType,modalProps:n.modalProps});var n}}}))(Y),ee=function(e){var t=e.onClick,n=e.style,a=e.label;return r.a.createElement("button",{onClick:function(e){return t(e)},style:n},a)};function te(){var e=Object(M.a)(["\n  query Comments($cursor: String) {\n    viewer {\n      login\n      repositories(first: 10, after: $cursor) {\n        totalCount\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n        nodes {\n          id\n          name\n          owner {\n            login\n          }\n        }\n      }\n    }\n  }\n"]);return te=function(){return e},e}var ne=Object(z.b)(te()),ae=function(){var e=Object(a.useState)(),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!0),l=Object(i.a)(c,2),u=l[0],s=l[1],d=Object(a.useState)(),h=Object(i.a)(d,2),f=h[0],m=h[1],p=Object(x.a)();return Object(a.useEffect)((function(){!function(e){var t,n,a,r,o,c,i,l,u;q.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:t=e.client,n=e.setLoading,a=e.setData,r=e.query,o=!0,c=null,i=null;case 4:if(!o){s.next=14;break}return s.next=7,q.a.awrap(t.query({query:r,variables:{cursor:c},fetchPolicy:"no-cache"}));case 7:l=s.sent,u=l.data,Object(G.isEmpty)(i)?i=u:(i.viewer.repositories.pageInfo=u.viewer.repositories.pageInfo,i.viewer.repositories.nodes=[].concat(Object(W.a)(i.viewer.repositories.nodes),Object(W.a)(u.viewer.repositories.nodes))),o=u.viewer.repositories.pageInfo.hasNextPage,c=u.viewer.repositories.pageInfo.endCursor,s.next=4;break;case 14:n(!1),a(i);case 16:case"end":return s.stop()}}))}({client:p,setData:o,setLoading:s,query:ne})}),[]),Object(a.useEffect)((function(){n&&(m(function(e){return e.viewer.repositories.nodes.find((function(e){return"solitude"===e.name}))}(n)),console.log(null))}),[n]),r.a.createElement("div",null,!u&&n&&f?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,f.name)):r.a.createElement("span",null,"Loading..."))},re={GIT_MODAL:Object(l.b)((function(e){return{token:e.auth.token}}),(function(e){return{hideModal:function(){return e({type:"HIDE_MODAL"})}}}))((function(e){var t=e.isOpen,n=(e.modalProps,e.hideModal),a=e.token;return r.a.createElement(Z,{isModalOpen:t,modalTitle:"Your notes",modalBody:a?r.a.createElement("div",null,r.a.createElement(ae,null)):r.a.createElement(ee,{label:"Connect to GitHub",onClick:function(e){return function(e){e.preventDefault();var t="https://github.com/login/oauth/authorize?client_id=".concat(F.GITHUB_APP_CLIENT_ID,"&scope=repo");window.location.href=t}(e)}}),onModalClose:n})}))},oe=Object(l.b)((function(e){return{modal:e.modal}}))((function(e){var t=e.modal;if(console.log(t.modalType),!t.modalType)return null;var n=re[t.modalType];return r.a.createElement(n,t)})),ce=n(13),ie=function(e){return new z.a({uri:"https://api.github.com/graphql",request:function(t){t.setContext({headers:{authorization:e?"Bearer ".concat(e):""}})}})};n(520),n(521),n(522),n(523);var le=Object(l.b)(null,(function(e){return{onTokenChange:function(t){return e(function(e){return{type:"UPDATE_TOKEN",token:e}}(t))}}}))((function(e){var t=e.onTokenChange,n=Object(a.useState)(""),o=Object(i.a)(n,2),c=o[0],l=o[1];Object(a.useEffect)((function(){var e=window.location.href.match(/\?code=(.*)/)&&window.location.href.match(/\?code=(.*)/)[1];e&&fetch("https://prose-gatekeeper.glitch.me/authenticate/".concat(e)).then((function(e){return e.json()})).then((function(e){var n=e.error,a=e.token;if(n)throw Error(n);console.log(a),l(a),t(a)})).catch((function(e){console.log(e)}))}),[]);var u=ie(c);return r.a.createElement("div",null,r.a.createElement(ce.a,{client:u},r.a.createElement(m,null),r.a.createElement(Q,null),r.a.createElement(A,null),r.a.createElement(oe,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=n(48),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_EDITOR_STATE":return t.editorState||e;default:return e}},de=n(38),he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{size:"50%"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PANE_SIZE":return Object(de.a)({},e,{size:t.size});default:return e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_MARKDOWN_VALUE":return t.text;default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{token:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_TOKEN":return Object(de.a)({},e,{token:t.token});default:return e}},pe={},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MODAL":return Object(de.a)({},e,{isOpen:!0,modalType:t.modalType,modalProps:t.modalProps});case"HIDE_MODAL":return Object(de.a)({},pe,{isOpen:!1});default:return e}},be=Object(ue.b)({markdownValue:fe,editor:se,splitPane:he,modal:Ee,auth:me}),ge=Object(ue.c)(be,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(r.a.createElement(l.a,{store:ge},r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},78:function(e){e.exports=JSON.parse('{"GITHUB_APP_CLIENT_ID":"b4b9cca2169de74f183e","GITHUB_APP_REDIRECT_URI":"http://localhost:3000/"}')}},[[176,1,2]]]);
//# sourceMappingURL=main.a4e082a7.chunk.js.map