!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("tiny-emitter"),require("virtual-scroll")):"function"==typeof define&&define.amd?define(["tiny-emitter","virtual-scroll"],e):(t||self).lenis=e(t.tinyEmitter,t.virtualScroll)}(this,function(t,e){function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=/*#__PURE__*/o(t),i=/*#__PURE__*/o(e);function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}/*#__PURE__*/
return function(t){var e,o;function r(e){var o,r,l,n,s=void 0===e?{}:e,c=s.lerp,u=void 0===c?.1:c,d=s.smooth,a=void 0===d||d;(n=t.call(this)||this).onResize=function(t){var e=t[0];e&&(n.maxScroll=e.contentRect.height-n.windowHeight)},n.onWindowResize=function(){n.windowHeight=window.innerHeight,n.windowWidth=window.innerWidth},n.onVirtualScroll=function(t){var e,o,r=t.deltaY,i=t.originalEvent;i.path.filter(function(t){return t.tagName}).filter(function(t){return["auto","scroll"].includes(getComputedStyle(t).overflowY)}).find(function(t){return t.scrollHeight>t.clientHeight})||(n.stopped?i.preventDefault():(n.smooth&&!i.ctrlKey&&i.preventDefault(),n.targetScroll-=r,n.targetScroll=(o=n.maxScroll,(e=n.targetScroll)<0?0:e>o?o:e)))},n.onScroll=function(t){n.scrolling&&n.smooth||(n.targetScroll=n.scroll=window.scrollY,n.emit("scroll",{scroll:n.scroll}))},n.lerp=u,n.smooth=a,window.addEventListener("scroll",n.onScroll,!1),window.addEventListener("resize",n.onWindowResize,!1);var f=(null==(o=navigator)||null==(r=o.userAgentData)?void 0:r.platform)||(null==(l=navigator)?void 0:l.platform)||"unknown";return n.virtualScroll=new i.default({firefoxMultiplier:50,mouseMultiplier:f.indexOf("Win")>-1?1:.4,useKeyboard:!1,useTouch:!1,passive:!1}),n.virtualScroll.on(n.onVirtualScroll),n.onWindowResize(),n.maxScroll=document.body.offsetHeight-n.windowHeight,n.resizeObserver=new ResizeObserver(n.onResize),n.resizeObserver.observe(document.body),n.targetScroll=n.scroll=window.scrollY,n}o=t,(e=r).prototype=Object.create(o.prototype),e.prototype.constructor=e,l(e,o);var n=r.prototype;return n.start=function(){this.stopped=!1},n.stop=function(){this.stopped=!0},n.destroy=function(){window.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),this.virtualScroll.destroy(),this.resizeObserver.disconnect()},n.raf=function(){var t;this.smooth&&!this.stopped&&(this.scroll=(1-(t=this.lerp))*this.scroll+t*this.targetScroll,Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.scroll=this.targetScroll),this.scrolling&&(window.scrollTo(0,this.scroll),this.emit("scroll",{scroll:this.scroll})),this.scrolling=this.scroll!==this.targetScroll)},n.scrollTo=function(t,e){var o,r=(void 0===e?{}:e).offset,i=void 0===r?0:r;if("number"==typeof t)o=t;else if("#top"===t)o=0;else if("#bottom"===t)o=this.maxScroll;else{var l;if("string"==typeof t)l=document.querySelector(t);else{if(null==t||!t.nodeType)return;l=t}if(!t)return;o=l.getBoundingClientRect().top+this.scroll}this.targetScroll=o+=i,this.scrolling=!0,this.smooth||(this.scroll=o)},r}(r.default)});
//# sourceMappingURL=lenis.umd.js.map