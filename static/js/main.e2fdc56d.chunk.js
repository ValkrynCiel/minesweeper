(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAABxklEQVRoQ+1a7baDIAyb7//Q7mxnH7KLkrRR5Jr9LqFJ2irM6Xbh33Rh7jeTv6r7dt7O/1VgBkTJVM4SX4WzlnIVf2tTk2+4r3JMhaN3fp6/RTBNRZ6qpCU4bJ5Q2bOgwKx4hMh7ns3T5FecUg08BIfq1Z9gBL/btEeSM/mKAsggRMSlnQfn1icMSYLFzFREcy9E2SbIK8DkUaWScRLTsiBHui1vAZNPlKCd3xJv+cq5jPs5IyT0j1/F7V72Jl97eylPh8M43+zzA9yWTP5I2Zt85yF3Luc7lnrxEGGGh6zsTX7fqY6YSpkJXWMhu27cnyHL946hz/PNqb7M2ORfaghfXVUVQTu/tjFVEarsQRxZz5t8RQE7D5bh0WEue1RxSqkOt7Qoj3ccxYcKPmn/hzmEF56oCsIcwgtNvvyPne1PVXzYwPBCO39x54uDnaqOAZxsxT63kIB0aAFJ3hKQ/0geOcAg4iE4a5WuwqfP80jSquRMvqKASty48+zHfcC0foT4I8T3tR8oWC3sIyJrEnR1zYKCRMZwfoMM0pPIXaAKhxqckPMmX1dA5ZgKR+Y82LrjhmUUH5e14BFj8iMr4LIf2b1M7ndHip9AL7NFmQAAAABJRU5ErkJggg=="},19:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAA0klEQVQ4T72UMRICMQhFk97z2NjpBTyqF9DOxvPYxyGzMB8CG5OJbrObJTx+IJDTD57cYZYde+gbGSrs9niGzOv5xLaG4UELwsBZAjh2xbFQAe4pSSmpk2x7hYVQC1QB35djOdxfPRHV3kBtVIbZNyS7ikE/hroqUV30TangHDNYQTGaPW5nrdSG0MGe6ENJFUK3AtG/HNkwr/9TSiqX5ZRgUbFmqk+85r6h4pl7KlCrlgs221Ee2HYdx/i698Vh9ZRylXiNMDpPkbF08g92qd7+AW7T2RZz/fiwAAAAAElFTkSuQmCC"},22:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(10),l=n.n(r),o=(n(28),n(4)),c=n(5),u=n(7),h=n(6),s=n(3),d=n(8),g=n(11),f=n(1),m=n(2);function b(){var e=Object(f.a)(["\n  height: 40px;\n  width: 40px; \n  border: 1px solid white;\n  vertical-align: middle;\n  text-align: center;\n  font-family: 'VT323', monospace;\n  font-size: 30px;\n  position: relative;\n"]);return b=function(){return e},e}var v=m.a.td(b()),p=n(9),C=n.n(p);function A(){var e=Object(f.a)(["\n  background-color: grey;\n  cursor: ","\n  div {\n    height: 100%;\n    width: 100%;\n    border: 5px outset silver;\n    display: flex;\n    img {\n      margin: auto;\n      height: 80%;\n      width: 80%;\n    }\n  }\n"]);return A=function(){return e},e}var w=Object(m.a)(v)(A(),function(e){return e.onClick?"pointer":"default"}),y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){e.preventDefault();var t=this.props,n=t.x,a=t.y;(0,t.handleCellChange)(n,a)}},{key:"render",value:function(){var e=this.props,t=e.flag,n=e.disabled;return i.a.createElement(w,{onClick:n?null:this.handleClick},i.a.createElement("div",null,t?i.a.createElement("img",{src:C.a,alt:"flag"}):null))}}]),t}(a.PureComponent),O=n(18),k=n.n(O);function j(){var e=Object(f.a)(["\n  background-color: ",";\n  color: ","\n  img {\n    width: 80%;\n    height: 80%;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n  div {\n    position: absolute;\n    height: 40%;\n    width: 40%;\n    top: 0;\n    left: 0;\n    z-index: 10;\n    display: ",";\n  } \n  div > img {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n  }\n"]);return j=function(){return e},e}var E=Object(m.a)(v)(j(),function(e){return"explosion"===e.value?"red":"gainsboro"},function(e){return 1===e.value?"blue":2===e.value?"green":3===e.value?"red":"purple"},function(e){return e.wrongFlag?"block":"none"}),x=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"showValue",value:function(e){return e?isFinite(e)?e:i.a.createElement("img",{src:k.a,alt:"mine"}):null}},{key:"render",value:function(){var e=this.props,t=e.value,n=e.wrongFlag;return i.a.createElement(E,{value:t,wrongFlag:n},this.showValue(t),i.a.createElement("div",null,i.a.createElement("img",{src:C.a,alt:"flagged"})))}}]),t}(a.PureComponent);function M(){var e=Object(f.a)(["\n  margin: auto;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  p {\n    font-size: 25px;\n    display: inline-block;\n    margin: auto;\n  }\n  img {\n    height: 80%;\n    width: auto;\n    margin-right 10px;\n  }\n"]);return M=function(){return e},e}function S(){var e=Object(f.a)(["\n  height: 40px;\n  width: 200px;\n  margin: auto;\n  box-sizing: content-box;\n  background-color: ",";\n  border: 5px "," grey;\n  display: flex;\n  cursor: pointer;\n"]);return S=function(){return e},e}var F=m.a.div(S(),function(e){return e.active?"lightgreen":"gainsboro"},function(e){return e.active?"inset":"outset"}),V=m.a.div(M()),B=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleClick",value:function(e){this.props.onClick()}},{key:"render",value:function(){var e=this.props,t=e.imgSrc,n=e.alt,a=e.active,r=e.onClick,l=e.children;return i.a.createElement(F,{onClick:r,active:a},i.a.createElement(V,{img:t},t&&i.a.createElement("img",{src:t,alt:n}),i.a.createElement("p",null,l)))}}]),t}(a.PureComponent),R=n(19),P=n.n(R);function T(){var e=Object(f.a)(["\n  margin-bottom: 40px;\n"]);return T=function(){return e},e}function I(){var e=Object(f.a)(["\n  width: 50vw;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  user-select: none;\n"]);return I=function(){return e},e}function N(){var e=Object(f.a)(["\n  height: 100px;\n  width: 500px;\n  display: flex;\n"]);return N=function(){return e},e}function z(){var e=Object(f.a)(["\n  font-size: 60px;\n  margin: auto;\n  color: red;\n"]);return z=function(){return e},e}var H=m.a.h1(z()),Q=m.a.div(N()),J=m.a.div(I()),q=m.a.table(T()),D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={board:[],boardView:[],gameEndMessage:"",safeCount:0,flaggedCells:new Set,flagMode:!1,firstMove:!0},n.mines=[],n.handleCellChange=n.handleCellChange.bind(Object(s.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.height,n=e.width,a=Array.from(new Array(t),function(){return new Array(n).fill(0)}),i=Array.from(new Array(t),function(){return new Array(n).fill(!1)});this.setState({board:a,boardView:i})}},{key:"componentDidUpdate",value:function(){var e=this,t=this.props,n=t.height,a=t.width,i=t.mineCount,r=this.state,l=r.gameEndMessage;r.safeCount!==n*a-i||l||this.setState(function(t){var n=!0,a=!1,i=void 0;try{for(var r,l=e.mines[Symbol.iterator]();!(n=(r=l.next()).done);n=!0){var o=r.value,c=Object(g.a)(o,2),u=c[0],h=c[1];t.flaggedCells.add("".concat(u,",").concat(h))}}catch(s){a=!0,i=s}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return{flaggedCells:t.flaggedCells,gameEndMessage:"YOU WON"}})}},{key:"defineMineLocations",value:function(e,t,n){for(var a=this,i=Object(g.a)(n,2),r=i[0],l=i[1],o=[],c=0;c<e;c++)for(var u=0;u<t;u++)r===c&&l===u||o.push([c,u]);return function(){var e=Math.floor(Math.random()*o.length);if(e===o.length-1){var t=o.pop();return a.mines.push(t),t}var n=o[e];return o[e]=o.pop(),a.mines.push(n),n}}},{key:"placeMines",value:function(e,t){for(var n=0;n<this.props.mineCount;){var a=t(),i=Object(g.a)(a,2),r=i[0],l=i[1];e[r][l]="mine";for(var o=r-1;o<=r+1;o++)for(var c=l-1;c<=l+1;c++)e[o]&&isFinite(e[o][c])&&e[o][c]++;n++}return e}},{key:"revealHiddenCell",value:function(e,t){var n=this;if(this.state.firstMove){var a=this.state.board,i=this.props,r=i.height,l=i.width,o=this.defineMineLocations(r,l,[e,t]),c=this.placeMines(a,o);this.setState({board:c,firstMove:!1})}this.setState(function(a){var i=n.searchArea(e,t,a.board,a.boardView,a.safeCount,a.flaggedCells);return{boardView:i.boardView,safeCount:i.safeCount,flaggedCells:i.flaggedCells}}),"mine"===this.state.board[e][t]&&this.setState({gameEndMessage:"YOU LOST"})}},{key:"searchArea",value:function(e,t,n,a,i,r){return function e(t,l){if(a[t][l]=!0,"mine"===n[t][l])return n[t][l]="explosion",void(a=a.map(function(e){return e.fill(!0)}));if(i++,!(n[t][l]>0))for(var o=t-1;o<=t+1;o++)for(var c=l-1;c<=l+1;c++)n[o]&&isFinite(n[o][c])&&!1===a[o][c]&&(r.delete("".concat(o,",").concat(c)),e(o,c))}(e,t),{boardView:a,safeCount:i,flaggedCells:r}}},{key:"toggleFlagOnHiddenCell",value:function(e,t){var n="".concat(e,",").concat(t);this.state.flaggedCells.has(n)?this.setState(function(e){return e.flaggedCells.delete(n),{flaggedCells:e.flaggedCells}}):this.setState(function(e){return e.flaggedCells.add(n),{flaggedCells:e.flaggedCells}})}},{key:"handleCellChange",value:function(e,t){this.state.flagMode?this.toggleFlagOnHiddenCell(e,t):this.revealHiddenCell(e,t)}},{key:"changeToFlagMode",value:function(e){this.setState({flagMode:e})}},{key:"displayHiddenCell",value:function(e,t){var n=this.state,a=n.gameEndMessage,r=n.flaggedCells,l=n.flagMode,o=r.has("".concat(e,",").concat(t));return a.length||o&&!1===l?i.a.createElement(y,{key:"".concat(e,",").concat(t),x:e,y:t,disabled:!0,flag:o}):i.a.createElement(y,{key:"".concat(e,",").concat(t),x:e,y:t,handleCellChange:this.handleCellChange,flag:o})}},{key:"render",value:function(){var e=this,t=this.state,n=t.board,a=t.boardView,r=t.gameEndMessage,l=t.flaggedCells,o=t.flagMode;return i.a.createElement(J,null,i.a.createElement(Q,null,r?i.a.createElement(H,null,r):i.a.createElement(i.a.Fragment,null,i.a.createElement(B,{onClick:function(){return e.changeToFlagMode(!1)},imgSrc:P.a,alt:"search",active:!o},"Search Mode"),i.a.createElement(B,{onClick:function(){return e.changeToFlagMode(!0)},imgSrc:C.a,alt:"flag",active:o},"Flag Mode"))),i.a.createElement(q,null,i.a.createElement("tbody",null,n.map(function(t,n){return i.a.createElement("tr",{key:n},t.map(function(t,o){return a[n][o]?i.a.createElement(x,{value:t,key:"".concat(n,",").concat(o),wrongFlag:!!(r&&l.has("".concat(n,",").concat(o))&&isFinite(t))}):e.displayHiddenCell(n,o)}))}))))}}]),t}(a.Component),U=n(20),Y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={height:e.height,width:e.width,mineCount:e.mineCount},n.handleSubmit=n.handleSubmit.bind(Object(s.a)(n)),n.handleChange=n.handleChange.bind(Object(s.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.height,a=t.width,i=t.mineCount;this.props.makeNewBoard({height:n,width:a,mineCount:i})}},{key:"handleChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state,t=e.height,n=e.width;return i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("label",{htmlFor:"height"},"Height:"),i.a.createElement("input",{id:"height",name:"height",value:this.state.height,type:"number",min:"5",max:"15",onChange:this.handleChange}),i.a.createElement("label",{htmlFor:"width"},"Width:"),i.a.createElement("input",{id:"width",name:"width",value:this.state.width,type:"number",min:"5",max:"15",onChange:this.handleChange}),i.a.createElement("label",{htmlFor:"mineCount"},"Number of mines:"),i.a.createElement("input",{id:"mineCount",name:"mineCount",value:this.state.mineCount,type:"number",min:"1",max:"".concat(+t*+n-2),onChange:this.handleChange}),i.a.createElement("button",null,"Make a new board!"))}}]),t}(a.Component),W=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={width:10,height:10,mineCount:10,gameId:0},n.makeNewBoard=n.makeNewBoard.bind(Object(s.a)(n)),n}return Object(d.a)(t,e),Object(c.a)(t,[{key:"makeNewBoard",value:function(e){if(e){var t=e.width,n=e.height,a=e.mineCount;this.setState(function(e){return{width:+t,height:+n,mineCount:+a,gameId:e.gameId+1}})}else this.setState(function(e){return{gameId:e.gameId+1}})}},{key:"render",value:function(){var e=this.state,t=e.width,n=e.height,a=e.mineCount,r=e.gameId;return i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{key:r,width:t,height:n,mineCount:a}),i.a.createElement(Y,{key:"form-".concat(r),width:t,height:n,mineCount:a,makeNewBoard:this.makeNewBoard}))}}]),t}(a.Component);var K=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAABWElEQVRoQ+2aSxKCMBBE4Ryew4X3X7jwHJ5DS61CoIJJdwb5PdeTYfqTHqVsmwN/2gNjbwAvqv8Q66fKFyfeGQDwAeo7xAc89tvCGSCp/P1yzg52ut6yNUaBg+H9GOcg4McKobzh2dojhVcp6fC/2r4WaOo84POs7lP5PO6mGbmjI2Lztgd8hoHDKT8FuM/Tbm0P+MzX+M0oX7jPJVcDvmRd9GrsHzbicwblq1a+BljhWcelP1s7DaPe5BRi7sqcWQEf+RJxSvlwZVRrqPXOwIBPsOwQqYoVWu8MjPIoP2TAcVGojdVmzsDYHttj+/m+fqp3WK3nzouMEXgEHoFH4L0YcMJTjJvYcmdgAo/AI/AIPAIvNovn70baixyz6lh1rDpWHatODM7Fy1l1ogSsOlbdQVad+lcUJ0vE21dfXjok4AWuS0kVWsaXbmLIeNifjoCfi9m1930C2dRmQHCgwkYAAAAASUVORK5CYII="}},[[22,1,2]]]);
//# sourceMappingURL=main.e2fdc56d.chunk.js.map