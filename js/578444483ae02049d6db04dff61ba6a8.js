/**handles:smoothscroll,fitvids,et-core-common,smush-lazy-load**/
!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=94)}({94:function(e,t){!function(){var u,e={frameRate:150,animationTime:400,stepSize:80,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},h=e,i=!1,n={x:0,y:0},l=!1,c=document.documentElement,a=[120,120,120],s=37,d=38,f=39,m=40,p=32,w=33,v=34,b=35,y=36;function g(){var e,t,n,o,r,a,o;document.body&&(t=document.body,n=document.documentElement,o=window.innerHeight,r=t.scrollHeight,c=0<=document.compatMode.indexOf("CSS")?n:t,u=t,(e=document.body.classList.contains("et-fb"))&&C("keydown",M),h.keyboardSupport&&!e&&E("keydown",M),l=!0,top!=self?i=!0:o<r&&(t.offsetHeight<=o||n.offsetHeight<=o)&&(a=!1,n.style.height="auto",setTimeout(function(){a||n.scrollHeight==document.height||(a=!0,setTimeout(function(){n.style.height=document.height+"px",a=!1},500))},10),c.offsetHeight<=o&&((o=document.createElement("div")).style.clear="both",t.appendChild(o))),h.fixedBackground||(t.style.backgroundAttachment="scroll",n.style.backgroundAttachment="scroll"))}var h=e,S=[],k=!1,o=+new Date;function x(s,d,f,m){var e,t,t,t,p;m=m||1e3,e=0<(e=d)?1:-1,t=0<(t=f)?1:-1,n.x===e&&n.y===t||(n.x=e,n.y=t,S=[],o=0),1!=h.accelerationMax&&((t=+new Date-o)<h.accelerationDelta&&(1<(t=(1+30/t)/2)&&(t=Math.min(t,h.accelerationMax),d*=t,f*=t)),o=+new Date),S.push({x:d,y:f,lastX:d<0?.99:-.99,lastY:f<0?.99:-.99,start:+new Date}),k||(p=s===document.body,_(function e(t){for(var n=+new Date,o=0,r=0,a=0;a<S.length;a++){var i=S[a],l=n-i.start,u=l>=h.animationTime,c=u?1:l/h.animationTime;h.pulseAlgorithm&&(c=P(c));var l=i.x*c-i.lastX>>0,c=i.y*c-i.lastY>>0;o+=l,r+=c,i.lastX+=l,i.lastY+=c,u&&(S.splice(a,1),a--)}p?window.scrollBy(o,r):(o&&(s.scrollLeft+=o),r&&(s.scrollTop+=r)),(S=!d&&!f?[]:S).length?_(e,s,m/h.frameRate+1):k=!1},s,0),k=!0)}function M(e){var t=e.target,n=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==p;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||n)return!0;if(N(t,"button")&&e.keyCode===p)return!0;var o=0,r=0,a=T(u),i=a.clientHeight;switch(a==document.body&&(i=window.innerHeight),e.keyCode){case d:r=-h.arrowScroll;break;case m:r=h.arrowScroll;break;case p:r=-(e.shiftKey?1:-1)*i*.9;break;case w:r=.9*-i;break;case v:r=.9*i;break;case y:r=-window.pageYOffset;break;case b:var l=a.scrollHeight-a.scrollTop-i,r=0<l?10+l:0;break;case s:o=-h.arrowScroll;break;case f:o=h.arrowScroll;break;default:return!0}x(a,o,r),e.preventDefault()}var r={};setInterval(function(){r={}},1e4);var t,D=(t=0,function(e){return e.uniqueID||(e.uniqueID=t++)});function H(e,t){for(var n=e.length;n--;)r[D(e[n])]=t;return t}function T(e){var t=[],n=c.scrollHeight;do{var o=r[D(e)];if(o)return H(t,o);if(t.push(e),n===e.scrollHeight){if(!i||c.clientHeight+10<n)return H(t,document.body)}else if(e.clientHeight+10<e.scrollHeight){var o=getComputedStyle(e,"").getPropertyValue("overflow-y");if("scroll"===o||"auto"===o)return H(t,e)}}while(e=e.parentNode)}function E(e,t,n){window.addEventListener(e,t,n||!1)}function C(e,t,n){window.removeEventListener(e,t,n||!1)}function N(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function O(e,t){return Math.floor(e/t)==e/t}var _=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,n){window.setTimeout(e,n||1e3/60)};function z(e){var t,t,t=(e*=h.pulseScale)<1?e-(1-Math.exp(-e)):(--e,(t=Math.exp(-1))+(1-Math.exp(-e))*(1-t));return t*h.pulseNormalize}function P(e){return 1<=e?1:e<=0?0:(1==h.pulseNormalize&&(h.pulseNormalize/=z(1)),z(e))}var j=/chrome/i.test(window.navigator.userAgent),A=null;"onwheel"in document.createElement("div")?A="wheel":"onmousewheel"in document.createElement("div")&&(A="mousewheel");var e=0<document.body.className.split(" ").filter(function(e){return"et_smooth_scroll"===e}).length;A&&j&&e&&(window.addEventListener(A,function(e){l||g();var t=e.target,n=T(t),o=0<document.documentElement.className.split(" ").filter(function(e){return"et-fb-preview--tablet"===e||"et-fb-preview--phone"===e||"et-fb-preview--zoom"===e||"et-fb-preview--wireframe"===e}).length;if(!n||e.defaultPrevented||N(u,"embed")||N(t,"embed")&&/\.pdf/i.test(t.src)||o)return!0;var r=e.wheelDeltaX||0,t=e.wheelDeltaY||0,o;if(r||t||(t=e.wheelDelta||0),!h.touchpadSupport&&((o=t)&&(o=Math.abs(o),a.push(o),a.shift(),clearTimeout(void 0),!(O(a[0],120)&&O(a[1],120)&&O(a[2],120)))))return!0;1.2<Math.abs(r)&&(r*=h.stepSize/120),1.2<Math.abs(t)&&(t*=h.stepSize/120),x(n,-r,-t),e.preventDefault()},{passive:!1}),E("mousedown",function(e){u=e.target}),E("load",g)),window.ET_SmoothScroll={toggleKeydown:function(e){(e?E:C)("keydown",M)}}}()}});
!function(a){"use strict";a.fn.fitVids=function(t){var e={customSelector:null,ignore:null},i,r,d;return document.getElementById("fit-vids-style")||(i=document.head||document.getElementsByTagName("head")[0],r=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",(d=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">'+r+"</style>",i.appendChild(d.childNodes[1])),t&&a.extend(e,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];e.customSelector&&t.push(e.customSelector);var o=".fitvidsignore";e.ignore&&(o=o+", "+e.ignore);var t=a(this).find(t.join(",")),t;(t=(t=t.not("object object")).not(o)).each(function(){var t=a(this),e,i,r,d;0<t.parents(o).length||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length||(t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16)),r=("object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height())/(isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10)),t.attr("name")||(d="fitvid"+a.fn.fitVids._count,t.attr("name",d),a.fn.fitVids._count++),t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*r+"%"),t.removeAttr("height").removeAttr("width"))})})},a.fn.fitVids._count=0}(window.jQuery||window.Zepto);
!function(t){t(function(){var e=navigator.userAgent,a,i=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))/i)||[],o="",n="";switch(/trident/i.test(i[0])?o="ie":"Chrome"===i[0]&&null!==(a=e.match(/\b(OPR|Edge)/))&&(o=a[0].replace("OPR","opera")),o=(o=""===o?"standalone"in window.navigator&&!window.navigator.standalone?"uiwebview":i[0]&&""!==i[0]?i[0]:navigator.appName:o).toLowerCase()){case"msie":n="ie";break;case"firefox":n="gecko";break;default:n=o}e.match(/iPhone/)&&(n+=" iphone"),t("body").addClass(n)})}(jQuery);
!function(){var e={7090:function(e){!function(t,n){var a=function(e,t,n){"use strict";var a,i;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},n)t in i||(i[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var r=t.documentElement,o=e.HTMLPictureElement,s="addEventListener",l="getAttribute",c=e[s].bind(e),d=e.setTimeout,u=e.requestAnimationFrame||d,f=e.requestIdleCallback,m=/^picture$/i,v=["load","error","lazyincluded","_lazyloaded"],y={},h=Array.prototype.forEach,z=function(e,t){return y[t]||(y[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),y[t].test(e[l]("class")||"")&&y[t]},p=function(e,t){z(e,t)||e.setAttribute("class",(e[l]("class")||"").trim()+" "+t)},g=function(e,t){var n;(n=z(e,t))&&e.setAttribute("class",(e[l]("class")||"").replace(n," "))},C=function(e,t,n){var a=n?s:"removeEventListener";n&&C(e,t),v.forEach((function(n){e[a](n,t)}))},b=function(e,n,i,r,o){var s=t.createEvent("Event");return i||(i={}),i.instance=a,s.initEvent(n,!r,!o),s.detail=i,e.dispatchEvent(s),s},A=function(t,n){var a;!o&&(a=e.picturefill||i.pf)?(n&&n.src&&!t[l]("srcset")&&t.setAttribute("srcset",n.src),a({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},E=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,n){for(n=n||e.offsetWidth;n<i.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},w=(pe=[],ge=[],Ce=pe,be=function(){var e=Ce;for(Ce=pe.length?ge:pe,he=!0,ze=!1;e.length;)e.shift()();he=!1},Ae=function(e,n){he&&!n?e.apply(this,arguments):(Ce.push(e),ze||(ze=!0,(t.hidden?d:u)(be)))},Ae._lsFlush=be,Ae),M=function(e,t){return t?function(){w(e)}:function(){var t=this,n=arguments;w((function(){e.apply(t,n)}))}},N=function(e){var t,a=0,r=i.throttleDelay,o=i.ricTimeout,s=function(){t=!1,a=n.now(),e()},l=f&&o>49?function(){f(s,{timeout:o}),o!==i.ricTimeout&&(o=i.ricTimeout)}:M((function(){d(s)}),!0);return function(e){var i;(e=!0===e)&&(o=33),t||(t=!0,(i=r-(n.now()-a))<0&&(i=0),e||i<9?l():d(l,i))}},x=function(e){var t,a,i=99,r=function(){t=null,e()},o=function(){var e=n.now()-a;e<i?d(o,i-e):(f||r)(r)};return function(){a=n.now(),t||(t=d(o,i))}},L=(K=/^img$/i,Q=/^iframe$/i,V="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),X=0,Y=0,Z=0,ee=-1,te=function(e){Z--,(!e||Z<0||!e.target)&&(Z=0)},ne=function(e){return null==J&&(J="hidden"==E(t.body,"visibility")),J||!("hidden"==E(e.parentNode,"visibility")&&"hidden"==E(e,"visibility"))},ae=function(e,n){var a,i=e,o=ne(e);for(I-=n,G+=n,j-=n,U+=n;o&&(i=i.offsetParent)&&i!=t.body&&i!=r;)(o=(E(i,"opacity")||1)>0)&&"visible"!=E(i,"overflow")&&(a=i.getBoundingClientRect(),o=U>a.left&&j<a.right&&G>a.top-1&&I<a.bottom+1);return o},ie=function(){var e,n,o,s,c,d,u,f,m,v,y,h,z=a.elements;if((k=i.loadMode)&&Z<8&&(e=z.length)){for(n=0,ee++;n<e;n++)if(z[n]&&!z[n]._lazyRace)if(!V||a.prematureUnveil&&a.prematureUnveil(z[n]))fe(z[n]);else if((f=z[n][l]("data-expand"))&&(d=1*f)||(d=Y),v||(v=!i.expand||i.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:i.expand,a._defEx=v,y=v*i.expFactor,h=i.hFac,J=null,Y<y&&Z<1&&ee>2&&k>2&&!t.hidden?(Y=y,ee=0):Y=k>1&&ee>1&&Z<6?v:X),m!==d&&($=innerWidth+d*h,q=innerHeight+d,u=-1*d,m=d),o=z[n].getBoundingClientRect(),(G=o.bottom)>=u&&(I=o.top)<=q&&(U=o.right)>=u*h&&(j=o.left)<=$&&(G||U||j||I)&&(i.loadHidden||ne(z[n]))&&(P&&Z<3&&!f&&(k<3||ee<4)||ae(z[n],d))){if(fe(z[n]),c=!0,Z>9)break}else!c&&P&&!s&&Z<4&&ee<4&&k>2&&(R[0]||i.preloadAfterLoad)&&(R[0]||!f&&(G||U||j||I||"auto"!=z[n][l](i.sizesAttr)))&&(s=R[0]||z[n]);s&&!c&&fe(s)}},re=N(ie),oe=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(te(e),p(t,i.loadedClass),g(t,i.loadingClass),C(t,le),b(t,"lazyloaded"))},se=M(oe),le=function(e){se({target:e.target})},ce=function(e,t){var n=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},de=function(e){var t,n=e[l](i.srcsetAttr);(t=i.customMedia[e[l]("data-media")||e[l]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},ue=M((function(e,t,n,a,r){var o,s,c,u,f,v;(f=b(e,"lazybeforeunveil",t)).defaultPrevented||(a&&(n?p(e,i.autosizesClass):e.setAttribute("sizes",a)),s=e[l](i.srcsetAttr),o=e[l](i.srcAttr),r&&(u=(c=e.parentNode)&&m.test(c.nodeName||"")),v=t.firesLoad||"src"in e&&(s||o||u),f={target:e},p(e,i.loadingClass),v&&(clearTimeout(D),D=d(te,2500),C(e,le,!0)),u&&h.call(c.getElementsByTagName("source"),de),s?e.setAttribute("srcset",s):o&&!u&&(Q.test(e.nodeName)?ce(e,o):e.src=o),r&&(s||u)&&A(e,{src:o})),e._lazyRace&&delete e._lazyRace,g(e,i.lazyClass),w((function(){var t=e.complete&&e.naturalWidth>1;v&&!t||(t&&p(e,i.fastLoadedClass),oe(f),e._lazyCache=!0,d((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&Z--}),!0)})),fe=function(e){if(!e._lazyRace){var t,n=K.test(e.nodeName),a=n&&(e[l](i.sizesAttr)||e[l]("sizes")),r="auto"==a;(!r&&P||!n||!e[l]("src")&&!e.srcset||e.complete||z(e,i.errorClass)||!z(e,i.lazyClass))&&(t=b(e,"lazyunveilread").detail,r&&W.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,Z++,ue(e,t,r,a,n))}},me=x((function(){i.loadMode=3,re()})),ve=function(){3==i.loadMode&&(i.loadMode=2),me()},ye=function(){P||(n.now()-H<999?d(ye,999):(P=!0,i.loadMode=3,re(),c("scroll",ve,!0)))},{_:function(){H=n.now(),a.elements=t.getElementsByClassName(i.lazyClass),R=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),c("scroll",re,!0),c("resize",re,!0),c("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+i.loadingClass);n.length&&n.forEach&&u((function(){n.forEach((function(e){e.complete&&fe(e)}))}))}})),e.MutationObserver?new MutationObserver(re).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r[s]("DOMNodeInserted",re,!0),r[s]("DOMAttrModified",re,!0),setInterval(re,999)),c("hashchange",re,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[s](e,re,!0)})),/d$|^c/.test(t.readyState)?ye():(c("load",ye),t[s]("DOMContentLoaded",re),d(ye,2e4)),a.elements.length?(ie(),w._lsFlush()):re()},checkElems:re,unveil:fe,_aLSL:ve}),W=(T=M((function(e,t,n,a){var i,r,o;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),m.test(t.nodeName||""))for(r=0,o=(i=t.getElementsByTagName("source")).length;r<o;r++)i[r].setAttribute("sizes",a);n.detail.dataAttr||A(e,n.detail)})),F=function(e,t,n){var a,i=e.parentNode;i&&(n=_(e,i,n),(a=b(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=a.detail.width)&&n!==e._lazysizesWidth&&T(e,i,a,n))},O=x((function(){var e,t=B.length;if(t)for(e=0;e<t;e++)F(B[e])})),{_:function(){B=t.getElementsByClassName(i.autosizesClass),c("resize",O)},checkElems:O,updateElem:F}),S=function(){!S.i&&t.getElementsByClassName&&(S.i=!0,W._(),L._())};var B,T,F,O;var R,P,D,k,H,$,q,I,j,U,G,J,K,Q,V,X,Y,Z,ee,te,ne,ae,ie,re,oe,se,le,ce,de,ue,fe,me,ve,ye;var he,ze,pe,ge,Ce,be,Ae;return d((function(){i.init&&S()})),a={cfg:i,autoSizer:W,loader:L,init:S,uP:A,aC:p,rC:g,hC:z,fire:b,gW:_,rAF:w}}(t,t.document,Date);t.lazySizes=a,e.exports&&(e.exports=a)}("undefined"!=typeof window?window:{})}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";var e=n(7090);n.n(e)().init()}()}();
//# sourceMappingURL=smush-lazy-load.min.js.map