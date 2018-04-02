parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({5:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}();function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function n(t){e(this,n),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),document.body.appendChild(this.canvas),this.width=this.canvas.width=t.naturalWidth,this.height=this.canvas.height=t.naturalHeight,this.context.drawImage(t,0,0,this.width,this.height)}return t(n,[{key:"clear",value:function(){this.context.clearRect(0,0,this.width,this.height)}},{key:"update",value:function(t){this.context.putImageData(t,0,0)}},{key:"getPixelCount",value:function(){return this.width*this.height}},{key:"getImageData",value:function(){return this.context.getImageData(0,0,this.width,this.height)}},{key:"removeCanvas",value:function(){this.canvas.parentNode.removeChild(this.canvas)}}]),n}();exports.default=n;
},{}],9:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function n(t){e(this,n),this.contents=[],this.sorted=!1,this.comparator=t}return t(n,[{key:"sort",value:function(){this.contents.sort(this.comparator),this.sorted=!0}},{key:"push",value:function(t){this.contents.push(t),this.sorted=!1}},{key:"peek",value:function(t){return this.sorted||this.sort(),void 0===t&&(t=this.contents.length-1),this.contents[t]}},{key:"pop",value:function(){return this.sorted||this.sort(),this.contents.pop()}},{key:"size",value:function(){return this.contents.length}},{key:"map",value:function(t){return this.contents.map(t)}},{key:"debug",value:function(){return this.sorted||this.sort(),this.contents}}]),n}();exports.default=n,module.exports=n;
},{}],12:[function(require,module,exports) {
"use strict";function e(e,r){return e<r?-1:e>r?1:0}Object.defineProperty(exports,"__esModule",{value:!0}),exports.naturalOrder=e;
},{}],10:[function(require,module,exports) {
"use strict";var e=function(){function e(e,o){for(var t=0;t<o.length;t++){var n=o[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(o,t,n){return t&&e(o.prototype,t),n&&e(o,n),o}}(),o=require("./PQueue"),t=r(o),n=require("./tool");function r(e){return e&&e.__esModule?e:{default:e}}function u(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}var i=function(){function o(){u(this,o),this.vboxes=new t.default(function(e,o){return(0,n.naturalOrder)(e.vbox.count()*e.vbox.volume(),o.vbox.count()*o.vbox.volume())})}return e(o,[{key:"push",value:function(e){this.vboxes.push({vbox:e,color:e.avg()})}},{key:"palette",value:function(){return this.vboxes.map(function(e){return e.color})}},{key:"size",value:function(){return this.vboxes.size()}},{key:"map",value:function(e){for(var o=0,t=this.size();o<t;o++)if(this.vboxes.peek(o).vbox.contains(e))return this.vboxes.peek(o).color;return this.nearest(e)}},{key:"nearest",value:function(e){for(var o=this.vboxes,t=Math.pow(255,3),n=Math.pow(255,3),r=null,u=0,i=this.size();u<i;u++)(n=Math.sqrt(Math.pow(e[0]-o.peek(u).color[0],2)+Math.pow(e[1]-o.peek(u).color[1],2)+Math.pow(e[2]-o.peek(u).color[2],2)))<t&&(t=n,r=o.peek(u).color);return r}}]),o}();module.exports=i;
},{"./PQueue":9,"./tool":12}],13:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=5,r=8-e;function t(r,t,o){return(r<<2*e)+(t<<e)+o}function o(o){var i=new Array(1<<3*e),s=void 0,n=void 0,u=void 0,d=void 0;return o.forEach(function(e){n=e[0]>>r,u=e[1]>>r,d=e[2]>>r,s=t(n,u,d),i[s]=(i[s]||0)+1}),i}exports.sigbits=e,exports.rshift=r,exports.getHisto=o,exports.getColorIndex=t;
},{}],11:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(t,i){for(var s=0;s<i.length;s++){var r=i[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(i,s,r){return s&&t(i.prototype,s),r&&t(i,r),i}}(),i=require("./Histo");function s(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var r=function(){function r(t,i,h,e,n,o,u){s(this,r),this.r1=t,this.r2=i,this.g1=h,this.g2=e,this.b1=n,this.b2=o,this.histo=u}return t(r,null,[{key:"vboxFromPixels",value:function(t,s){var h=1e6,e=0,n=1e6,o=0,u=1e6,a=0,f=void 0,v=void 0,c=void 0;return t.forEach(function(t){f=t[0]>>i.rshift,v=t[1]>>i.rshift,c=t[2]>>i.rshift,h=f<h?f:h,n=v<n?v:n,u=c<u?c:u,e=f>e?f:e,o=v>o?v:o,a=c>a?c:a}),new r(h,e,n,o,u,a,s)}}]),t(r,[{key:"volume",value:function(t){return this._volume&&!t||(this._volume=(this.r2-this.r1+1)*(this.g2-this.g1+1)*(this.b2-this.b1+1)),this._volume}},{key:"count",value:function(t){var s=0,r=0;if(!this._count_set||t){for(var h=this.r1;h<=this.r2;h++)for(var e=this.g1;e<=this.g2;e++)for(var n=this.b1;n<=this.b2;n++)s=(0,i.getColorIndex)(h,e,n),r+=this.histo[s]||0;this._count=r,this._count_set=!0}return this._count}},{key:"copy",value:function(){return new r(this.r1,this.r2,this.g1,this.g2,this.b1,this.b2,this.histo)}},{key:"avg",value:function(t){if(!this._avg||t){for(var s=1<<8-i.sigbits,r=0,h=0,e=0,n=0,o=0,u=void 0,a=this.r1;a<=this.r2;a++)for(var f=this.g1;f<=this.g2;f++)for(var v=this.b1;v<=this.b2;v++)u=(0,i.getColorIndex)(a,f,v),r+=h=this.histo[u]||0,e+=h*(a+.5)*s,n+=h*(f+.5)*s,o+=h*(v+.5)*s;this._avg=r?[~~(e/r),~~(n/r),~~(o/r)]:[~~(s*(this.r1+this.r2+1)/2),~~(s*(this.g1+this.g2+1)/2),~~(s*(this.b1+this.b2+1)/2)]}return this._avg}},{key:"contains",value:function(t){var s=t[0]>>i.rshift,r=t[1]>>i.rshift,h=t[2]>>i.rshift;return s>=this.r1&&s<=this.r2&&r>=this.g1&&r<=this.g2&&h>=this.b1&&h<=this.b2}}]),r}();exports.default=r;
},{"./Histo":13}],6:[function(require,module,exports) {
"use strict";var r=function(){function r(r,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(e,o,n){return o&&r(e.prototype,o),n&&r(e,n),e}}(),e=require("./PQueue"),o=l(e),n=require("./CMap"),t=l(n),u=require("./VBox"),i=l(u),f=require("./tool"),a=require("./Histo");function l(r){return r&&r.__esModule?r:{default:r}}function c(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var v=function(){function e(){c(this,e)}return r(e,[{key:"medianCutApply",value:function(r,e){var o=e.r2-e.r1+1,n=e.g2-e.g1+1,t=e.b2-e.b1+1,u=Math.max(o,n,t);if(1==e.count())return[e.copy()];var i=0,f=[],l=[],c=void 0,v=void 0,s=void 0,p=void 0;if(u==o)for(c=e.r1;c<=e.r2;c++){for(p=0,v=e.g1;v<=e.g2;v++)for(s=e.b1;s<=e.b2;s++)p+=r[(0,a.getColorIndex)(c,v,s)]||0;i+=p,f[c]=i}else if(u==n)for(c=e.g1;c<=e.g2;c++){for(p=0,v=e.r1;v<=e.r2;v++)for(s=e.b1;s<=e.b2;s++)p+=r[(0,a.getColorIndex)(v,c,s)]||0;i+=p,f[c]=i}else for(c=e.b1;c<=e.b2;c++){for(p=0,v=e.r1;v<=e.r2;v++)for(s=e.g1;s<=e.g2;s++)p+=r[(0,a.getColorIndex)(v,s,c)]||0;i+=p,f[c]=i}function d(r){var o=r+"1",n=r+"2",t=void 0,u=void 0,a=void 0,v=void 0,s=void 0,p=0;for(c=e[o];c<=e[n];c++)if(f[c]>i/2){for(s=(t=c-e[o])<=(u=e[n]-c)?Math.min(e[n]-1,~~(c+u/2)):Math.max(e[o],~~(c-1-t/2));!f[s];)s++;for(p=l[s];!p&&f[s-1];)p=l[--s];return a=e.copy(),v=e.copy(),a[n]=s,v[o]=a[n]+1,[a,v]}}return f.forEach(function(r,e){l[e]=i-r}),d(u==o?"r":u==n?"g":"b")}},{key:"quantize",value:function(r,e){if(!r.length||e<2||e>256)return!1;var n=(0,a.getHisto)(r),u=i.default.vboxFromPixels(r,n),l=new o.default(function(r,e){return(0,f.naturalOrder)(r.count(),e.count())});l.push(u);this.iter(n,l,.75*e);for(var c=new o.default(function(r,e){return(0,f.naturalOrder)(r.count()*r.volume(),e.count()*e.volume())});l.size();)c.push(l.pop());c.push(u),this.iter(n,c,e-c.size());for(var v=new t.default;c.size();)v.push(c.pop());return v}},{key:"iter",value:function(r,e,o){for(var n=1,t=0,u=void 0;t<1e3;)if((u=e.pop()).count()){var i=this.medianCutApply(r,u),f=i[0],a=i[1];if(!f)return;if(e.push(f),a&&(e.push(a),n++),n>=o)return;if(t++>1e3)return}else e.push(u),t++}}]),e}();module.exports=new v;
},{"./PQueue":9,"./CMap":10,"./VBox":11,"./tool":12,"./Histo":13}],3:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),t=require("./CanvasImage"),n=u(t),r=require("./MMCQ"),a=u(r);function u(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function t(){o(this,t)}return e(t,[{key:"getColor",value:function(e,t){return this.getPalette(e,5,t)[0]}},{key:"getPalette",value:function(e,t,r){(void 0===t||t<2||t>256)&&(t=10),(void 0===r||r<1)&&(r=10);for(var u,o,i,l,f=new n.default(e),c=f.getImageData().data,s=f.getPixelCount(),v=[],d=0;d<s;d+=r)o=c[(u=4*d)+0],i=c[u+1],l=c[u+2],c[u+3]>=125&&(o>250&&i>250&&l>250||v.push([o,i,l]));var g=a.default.quantize(v,t),p=g?g.palette():null;return f.removeCanvas(),p}}]),t}();exports.default=i;
},{"./CanvasImage":5,"./MMCQ":6}],1:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./js/ColorThief"),r=t(e);function t(e){return e&&e.__esModule?e:{default:e}}exports.default=r.default;
},{"./js/ColorThief":3}]},{},[1])
//# sourceMappingURL=/index.map