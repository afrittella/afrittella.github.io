(this.webpackJsonpfruttaefiori=this.webpackJsonpfruttaefiori||[]).push([[0],{17:function(e,t,n){e.exports=n(25)},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),c=n.n(i),o=(n(22),n(1)),l=n(2),u=n(4),s=n(16),f=n(11),d=n(12),m=function(){function e(){Object(f.a)(this,e),this.alphabet=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],this.complexLetters=["H","K","J","W","X","Y"],this.easyMode=!0,this.extractedLetters=[],this.availableLetters=[]}return Object(d.a)(e,[{key:"start",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.easyMode=e,this.extractedLetters=[],this.selectAvailableLetters()}},{key:"extract",value:function(){if(0===this.availableLetters.length)throw new Error("No more letters");var e=Math.floor(Math.random()*this.availableLetters.length),t=this.availableLetters[e];return this.availableLetters=this.availableLetters.filter((function(e){return e!==t})),this.extractedLetters.push(t),t}},{key:"selectAvailableLetters",value:function(){var e=this;this.easyMode?this.availableLetters=this.alphabet.filter((function(t){return!e.complexLetters.includes(t)})):this.availableLetters=Object(s.a)(this.alphabet)}},{key:"available",get:function(){return this.availableLetters}},{key:"extracted",get:function(){return this.extractedLetters}},{key:"easy",get:function(){return this.easyMode}}]),e}();function b(){var e=Object(o.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #333;\n"]);return b=function(){return e},e}function h(){var e=Object(o.a)(["\n    background-color: ",";\n    width: 95%;\n    padding: 20px;\n    font-size: 1.8rem;\n    h4 {\n        margin: 0 0 10px 0;\n        padding: 0;\n        font-size: 2.2rem;\n    }\n    box-shadow: ",";\n"]);return h=function(){return e},e}var v=l.b.div(h(),(function(e){return e.transparent?"transparent":"#EEE"}),(function(e){return e.transparent?"none":"0 0 8px 0 rgba(106, 107, 96, 0.42)"})),p=l.b.div(b()),g=function(e){var t=e.children,n=e.transparent,a=void 0===n||n,i=e.title;return r.a.createElement(v,{transparent:a},i&&r.a.createElement("h4",null,i),r.a.createElement(p,null,t))};function E(){var e=Object(o.a)(["\n    background-color: #aaa;\n"]);return E=function(){return e},e}function x(){var e=Object(o.a)(["\n    background-color: #00679f;\n    padding: 15px;\n    border-radius: 50%;\n    width: 150px;\n    height: 150px;\n    font-size: 2.2rem;\n"]);return x=function(){return e},e}function y(){var e=Object(o.a)(["\n    border-width: 0;\n    text-transform: uppercase;\n    font-family: 'Quando', serif;\n    font-size: 1.8rem;\n    border-radius: 5px;\n    padding: 10px;\n    background-color: #c11212;\n    color: #fff;\n    box-shadow: 0 0 8px 0 rgba(106, 107, 96, 0.42);\n"]);return y=function(){return e},e}var j=l.b.button(y()),k=Object(l.b)(j)(x()),O=Object(l.b)(j)(E()),w=function(e){var t=e.children,n=e.onClick,a=void 0===n?function(){}:n,i=e.type;return function(e,t){return r.a.createElement(e,{onClick:a},t)}(function(e){switch(e){case"success":return k;case"cancel":return O;default:return j}}(void 0===i?"base":i),t)};function L(){var e=Object(o.a)(["\n    justify-content: center;\n    color: #00679f;\n"]);return L=function(){return e},e}function z(){var e=Object(o.a)(["\n    width: 150px;\n    height: 150px;\n    font-size: 8rem;\n    font-weight: bold;\n    border-radius: 50%;\n    padding: 10px;\n"]);return z=function(){return e},e}var N=Object(l.b)(v)(z()),F=Object(l.b)(p)(L()),C=function(e){var t=e.className,n=e.children;return r.a.createElement(N,{className:t},r.a.createElement(F,null,n))};function D(){var e=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    & > div {\n        margin-top: 20px;\n    }\n"]);return D=function(){return e},e}var M=new m,S=Object(l.b)((function(e){var t=e.className,n=r.a.useState("ready"),a=Object(u.a)(n,2),i=a[0],c=a[1],o=r.a.useState(),l=Object(u.a)(o,2),s=l[0],f=l[1],d=r.a.useState([]),m=Object(u.a)(d,2),b=m[0],h=m[1],v=r.a.useState([]),p=Object(u.a)(v,2),E=p[0],x=p[1],y=function(e){M.start(e),c("started"),h(M.available),x(M.extracted),f(void 0)};return r.a.useEffect((function(){s&&(h(M.available),x(M.extracted))}),[s]),r.a.createElement("div",{className:t},"ready"===i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{title:"Seleziona il tipo di alfabeto per iniziare",transparent:!1},r.a.createElement(w,{onClick:function(){return y(!0)}},"Facile")," ",r.a.createElement(w,{onClick:function(){return y(!1)}},"Difficile"))),"started"===i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null,r.a.createElement(C,null,s),r.a.createElement(w,{onClick:function(){try{var e=M.extract();f(e)}catch(t){c("finished")}},type:"success"},"Estrai")),r.a.createElement(g,{transparent:!1,title:"Lettere rimaste"},b.map((function(e){return r.a.createElement(r.a.Fragment,{key:"available_".concat(e)},e," ")}))),r.a.createElement(g,{transparent:!1,title:"Lettere estratte"},E.map((function(e){return r.a.createElement(r.a.Fragment,{key:"available_".concat(e)},e," ")}))),r.a.createElement(g,null,r.a.createElement("p",null,r.a.createElement(w,{onClick:function(){return c("ready")},type:"cancel"},"Ricomincia")))),"finished"===i&&r.a.createElement(g,{title:"Partita finita!",transparent:!1},r.a.createElement(w,{onClick:function(){return c("ready")}},"Ricomincia")))}))(D());function J(){var e=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n"]);return J=function(){return e},e}var W=l.b.div(J()),A=function(e){var t=e.children;return r.a.createElement(W,null,t)};function B(){var e=Object(o.a)(["\n    width: 100%;\n    background: #cccccc;\n    text-align: center;\n    padding: 20px 0;\n\n    h1 {\n        width: 100%;\n        margin: 0;\n        margin-block-start: 0;\n        //text-transform: uppercase;\n        font-family: 'Quando', serif;\n        font-size: 2.8rem;\n        font-weight: bold;\n    }\n"]);return B=function(){return e},e}var Q=Object(l.b)((function(e){var t=e.title,n=e.className;return r.a.createElement("div",{className:n},r.a.createElement("h1",null,t))}))(B());function R(){var e=Object(o.a)(["\n    display: flex;\n    flex-direction: column;\n"]);return R=function(){return e},e}var H=Object(l.b)((function(e){var t=e.className;return r.a.createElement("div",{className:t},r.a.createElement(Q,{title:"Frutta e Fiori"}),r.a.createElement(A,null,r.a.createElement(S,null)))}))(R());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(){var e=Object(o.a)([" \n    :root {\n      --main-font-size: 62.5%;\n      --background-color: #DDDDDD;\n    }\n    \n    html {      \n      font-size: var(--main-font-size);      \n    }\n    \n    body {     \n      background-color: var(--background-color);\n      font-family: 'Judson', serif;           \n    }\n    \n    #root {\n      height: 100vh;\n      width: 100%;\n    }\n    \n    button {\n        &:focus,\n        &:active {       \n            outline: none;\n        }  \n    }\n"]);return I=function(){return e},e}var K=Object(l.a)(I());c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.c7772db3.chunk.js.map