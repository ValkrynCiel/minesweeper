(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAABxklEQVRoQ+1a7baDIAyb7//Q7mxnH7KLkrRR5Jr9LqFJ2irM6Xbh33Rh7jeTv6r7dt7O/1VgBkTJVM4SX4WzlnIVf2tTk2+4r3JMhaN3fp6/RTBNRZ6qpCU4bJ5Q2bOgwKx4hMh7ns3T5FecUg08BIfq1Z9gBL/btEeSM/mKAsggRMSlnQfn1icMSYLFzFREcy9E2SbIK8DkUaWScRLTsiBHui1vAZNPlKCd3xJv+cq5jPs5IyT0j1/F7V72Jl97eylPh8M43+zzA9yWTP5I2Zt85yF3Luc7lnrxEGGGh6zsTX7fqY6YSpkJXWMhu27cnyHL946hz/PNqb7M2ORfaghfXVUVQTu/tjFVEarsQRxZz5t8RQE7D5bh0WEue1RxSqkOt7Qoj3ccxYcKPmn/hzmEF56oCsIcwgtNvvyPne1PVXzYwPBCO39x54uDnaqOAZxsxT63kIB0aAFJ3hKQ/0geOcAg4iE4a5WuwqfP80jSquRMvqKASty48+zHfcC0foT4I8T3tR8oWC3sIyJrEnR1zYKCRMZwfoMM0pPIXaAKhxqckPMmX1dA5ZgKR+Y82LrjhmUUH5e14BFj8iMr4LIf2b1M7ndHip9AL7NFmQAAAABJRU5ErkJggg=="},20:function(e,n,t){e.exports=t(32)},26:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(10),o=t.n(l),i=(t(26),t(11)),c=t(1),s=t(2),u=t(8),d=t(4),g=t(3),f=t(9),h=t(5),v=t(6);function m(){var e=Object(h.a)(["\n  height: 50px;\n  width: 50px; \n  border: 1px solid white;\n  vertical-align: middle;\n  text-align: center;\n  font-family: 'VT323', monospace;\n  font-size: 30px;\n  user-select: none;\n  position: relative;\n"]);return m=function(){return e},e}var b=v.a.td(m()),p=t(7),C=t.n(p);function A(){var e=Object(h.a)(["\n  background-color: grey;\n  cursor: ","\n  div {\n    height: 100%;\n    width: 100%;\n    box-sizing: border-box;\n    border: 5px outset silver;\n    display: flex;\n    img {\n      margin: auto;\n      height: 80%;\n      width: 80%;\n    }\n  }\n"]);return A=function(){return e},e}var y=Object(v.a)(b)(A(),function(e){return e.onClick?"pointer":"default"}),w=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(d.a)(n).call(this,e))).handleClick=t.handleClick.bind(Object(g.a)(t)),t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"handleClick",value:function(e){e.preventDefault();var n=this.props,t=n.x,a=n.y;(0,n.handleCellChange)(t,a)}},{key:"render",value:function(){var e=this.props,n=e.flag,t=e.disabled;return r.a.createElement(y,{onClick:t?null:this.handleClick},r.a.createElement("div",null,n?r.a.createElement("img",{src:C.a,alt:"flag"}):null))}}]),n}(a.PureComponent),M=t(18),E=t.n(M);function O(){var e=Object(h.a)(["\n  background-color: ",";\n  color: ","\n  img {\n    width: 80%;\n    height: 80%;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n  }\n  div {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 10;\n    font-size: 20px; \n    color: red;\n    text-align: center;\n    display: ",";\n  } \n  div > img {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    height: 40%;\n    width: 40%;\n  }\n"]);return O=function(){return e},e}var k=Object(v.a)(b)(O(),function(e){return"explosion"===e.value?"red":"gainsboro"},function(e){return 1===e.value?"blue":2===e.value?"green":3===e.value?"red":"purple"},function(e){return e.wrongFlag?"block":"none"}),j=function(e){function n(){return Object(c.a)(this,n),Object(u.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(f.a)(n,e),Object(s.a)(n,[{key:"showValue",value:function(e){return e?isFinite(e)?e:r.a.createElement("img",{src:E.a,alt:"mine"}):null}},{key:"render",value:function(){var e=this.props,n=e.value,t=e.wrongFlag;return r.a.createElement(k,{value:n,wrongFlag:t},this.showValue(n),r.a.createElement("div",null,r.a.createElement("img",{src:C.a,alt:"flagged"})))}}]),n}(a.PureComponent),x=function(e){function n(e){var t;return Object(c.a)(this,n),(t=Object(u.a)(this,Object(d.a)(n).call(this,e))).state={board:[],boardView:[],gameEndMessage:"",safeCount:0,flaggedCells:new Set,flagMode:!1,firstMove:!0},t.mines=[],t.handleCellChange=t.handleCellChange.bind(Object(g.a)(t)),t}return Object(f.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.height,t=e.width,a=Array.from(new Array(n),function(){return new Array(t).fill(0)}),r=Array.from(new Array(n),function(){return new Array(t).fill(!1)});this.setState({board:a,boardView:r})}},{key:"componentDidUpdate",value:function(){var e=this,n=this.props,t=n.height,a=n.width,r=n.mineCount,l=this.state,o=l.gameEndMessage;l.safeCount!==t*a-r||o||this.setState(function(n){var t=!0,a=!1,r=void 0;try{for(var l,o=e.mines[Symbol.iterator]();!(t=(l=o.next()).done);t=!0){var c=l.value,s=Object(i.a)(c,2),u=s[0],d=s[1];n.flaggedCells.add("".concat(u,",").concat(d))}}catch(g){a=!0,r=g}finally{try{t||null==o.return||o.return()}finally{if(a)throw r}}return{flaggedCells:n.flaggedCells,gameEndMessage:"YOU WON"}})}},{key:"defineMineLocations",value:function(e,n,t){for(var a=this,r=Object(i.a)(t,2),l=r[0],o=r[1],c=[],s=0;s<e;s++)for(var u=0;u<n;u++)l===s&&o===u||c.push([s,u]);return function(){var e=Math.floor(Math.random()*c.length);if(e===c.length-1){var n=c.pop();return a.mines.push(n),n}var t=c[e];return c[e]=c.pop(),a.mines.push(t),t}}},{key:"placeMines",value:function(e,n){for(var t=0;t<this.props.mineCount;){var a=n(),r=Object(i.a)(a,2),l=r[0],o=r[1];e[l][o]="mine";for(var c=l-1;c<=l+1;c++)for(var s=o-1;s<=o+1;s++)e[c]&&isFinite(e[c][s])&&e[c][s]++;t++}return e}},{key:"revealHiddenCell",value:function(e,n){var t=this;if(this.state.firstMove){var a=this.state.board,r=this.props,l=r.height,o=r.width,i=this.defineMineLocations(l,o,[e,n]),c=this.placeMines(a,i);this.setState({board:c,firstMove:!1})}this.setState(function(a){var r=t.searchArea(e,n,a.board,a.boardView,a.safeCount,a.flaggedCells);return{boardView:r.boardView,safeCount:r.safeCount,flaggedCells:r.flaggedCells}}),"mine"===this.state.board[e][n]&&this.setState({gameEndMessage:"YOU LOST"})}},{key:"searchArea",value:function(e,n,t,a,r,l){return function e(n,o){if(a[n][o]=!0,"mine"===t[n][o])return t[n][o]="explosion",void(a=a.map(function(e){return e.fill(!0)}));if(r++,!(t[n][o]>0))for(var i=n-1;i<=n+1;i++)for(var c=o-1;c<=o+1;c++)t[i]&&isFinite(t[i][c])&&!1===a[i][c]&&(l.delete("".concat(i,",").concat(c)),e(i,c))}(e,n),{boardView:a,safeCount:r,flaggedCells:l}}},{key:"toggleFlagOnHiddenCell",value:function(e,n){var t="".concat(e,",").concat(n);this.state.flaggedCells.has(t)?this.setState(function(e){return e.flaggedCells.delete(t),{flaggedCells:e.flaggedCells}}):this.setState(function(e){return e.flaggedCells.add(t),{flaggedCells:e.flaggedCells}})}},{key:"handleCellChange",value:function(e,n){this.state.flagMode?this.toggleFlagOnHiddenCell(e,n):this.revealHiddenCell(e,n)}},{key:"changeMode",value:function(e){"flag"===e?this.setState({flagMode:!0}):this.setState({flagMode:!1})}},{key:"displayHiddenCell",value:function(e){var n=e.x,t=e.y,a=e.gameEnd,l=e.flag,o=e.flagMode,i=e.handleCellChange;return a||l&&!1===o?r.a.createElement(w,{key:"".concat(n,",").concat(t),x:n,y:t,disabled:!0,flag:l}):r.a.createElement(w,{key:"".concat(n,",").concat(t),x:n,y:t,handleCellChange:i,flag:l})}},{key:"render",value:function(){var e=this,n=this.state,t=n.board,a=n.boardView,l=n.gameEndMessage,o=n.flaggedCells,i=n.flagMode;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,l),r.a.createElement("table",null,r.a.createElement("tbody",null,t.map(function(n,t){return r.a.createElement("tr",{key:t},n.map(function(n,c){return a[t][c]?r.a.createElement(j,{value:n,key:"".concat(t,",").concat(c),wrongFlag:!!(l&&o.has("".concat(t,",").concat(c))&&isFinite(n))}):e.displayHiddenCell({x:t,y:c,gameEnd:l,flag:o.has("".concat(t,",").concat(c)),flagMode:i,handleCellChange:e.handleCellChange})}))}))),r.a.createElement("button",{onClick:function(){return e.changeMode("flag")}},r.a.createElement("img",{src:C.a,alt:"flag mode"})),r.a.createElement("button",{onClick:function(){return e.changeMode("search")}},"Search Mode"))}}]),n}(a.Component);x.defaultProps={height:10,width:10,mineCount:15};var S=x;var V=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA/CAYAAABXXxDfAAABWElEQVRoQ+2aSxKCMBBE4Ryew4X3X7jwHJ5DS61CoIJJdwb5PdeTYfqTHqVsmwN/2gNjbwAvqv8Q66fKFyfeGQDwAeo7xAc89tvCGSCp/P1yzg52ut6yNUaBg+H9GOcg4McKobzh2dojhVcp6fC/2r4WaOo84POs7lP5PO6mGbmjI2Lztgd8hoHDKT8FuM/Tbm0P+MzX+M0oX7jPJVcDvmRd9GrsHzbicwblq1a+BljhWcelP1s7DaPe5BRi7sqcWQEf+RJxSvlwZVRrqPXOwIBPsOwQqYoVWu8MjPIoP2TAcVGojdVmzsDYHttj+/m+fqp3WK3nzouMEXgEHoFH4L0YcMJTjJvYcmdgAo/AI/AIPAIvNovn70baixyz6lh1rDpWHatODM7Fy1l1ogSsOlbdQVad+lcUJ0vE21dfXjok4AWuS0kVWsaXbmLIeNifjoCfi9m1930C2dRmQHCgwkYAAAAASUVORK5CYII="}},[[20,1,2]]]);
//# sourceMappingURL=main.b1ccf688.chunk.js.map