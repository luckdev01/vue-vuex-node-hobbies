!function(r){function t(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var a={};t.m=r,t.c=a,t.i=function(r){return r},t.d=function(r,a,e){t.o(r,a)||Object.defineProperty(r,a,{configurable:!1,enumerable:!0,get:e})},t.n=function(r){var a=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(a,"a",a),a},t.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},t.p="/",t(t.s=2)}([function(r,t,a){"use strict";var e=function(r){var t=void 0,a=void 0,e=void 0,o=void 0,n=void 0,u=void 0;switch(o=1===r?6:Math.floor(7*r),n=7*r-o,u=1-n,o%7){case 0:t=1,a=u,e=1;break;case 1:t=u,a=0,e=1;break;case 2:t=0,a=n,e=1;break;case 3:t=0,a=1,e=u;break;case 4:t=n,a=1,e=0;break;case 5:t=1,a=u,e=0;break;case 6:t=u,a=0,e=0}return{r:Math.round(255*t),g:Math.round(255*a),b:Math.round(255*e),a:255}};t.a={wb:e}},function(r,t,a){"use strict";var e=function(r,t){return r.x<0||r.x>1||r.y<0||r.y>1?0:r.x*t},o=function(r,t){if(0===t)return 0;var a=Math.log(r)/2;return t-Math.log(a)/Math.log(2)},n=function(r,t){for(var a={x:0,y:0},e=0;e<t;e++){var n={x:a.x*a.x-a.y*a.y+r.x,y:2*a.x*a.y+r.y},u=n.x*n.x+n.y*n.y;if(u>4)return o(u,e);a=n}return t};t.a={colorPalette:e,mandelbrot:n}},function(r,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a(1),o=a(0),n=function(r,t,a){return{x:a.x+r/a.zoom,y:a.y-t/a.zoom}};onmessage=function(r){for(var t=r.data.params,a=r.data.image,u=t.width,i=t.height,c=Math.floor(u/2),f=Math.floor(i/2),s=300,d=0;d<i;d++)for(var l=0;l<u;l++){var v=4*(d*u+l),x=n(l-c,d-f,t),b=e.a.mandelbrot(x,s),y=o.a.wb(b/s);a.data[v+0]=y.r,a.data[v+1]=y.g,a.data[v+2]=y.b,a.data[v+3]=y.a}postMessage({image:a})}}]);