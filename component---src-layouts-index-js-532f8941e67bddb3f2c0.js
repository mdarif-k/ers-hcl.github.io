webpackJsonp([0x67ef26645b2a,60335399758886],{216:function(e,t){e.exports={data:{site:{siteMetadata:{title:"ERS Technology Office"}}},layoutContext:{}}},425:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),s=(o(i),n(428)),l=o(s),u=n(216),c=o(u);t.default=function(e){return r.createElement(l.default,a({},e,c.default))},e.exports=t.default}).call(t,n(68))},161:function(e,t,n){e.exports={default:n(172),__esModule:!0}},163:function(e,t,n){e.exports={default:n(174),__esModule:!0}},167:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(161),a=r(o);t.default=a.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},168:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},172:function(e,t,n){n(197),e.exports=n(14).Object.assign},174:function(e,t,n){n(199),e.exports=n(14).Object.keys},187:function(e,t,n){"use strict";var r=n(31),o=n(59),a=n(38),i=n(64),s=n(104),l=Object.assign;e.exports=!l||n(22)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=r})?function(e,t){for(var n=i(e),l=arguments.length,u=1,c=o.f,p=a.f;l>u;)for(var f,d=s(arguments[u++]),h=c?r(d).concat(c(d)):r(d),m=h.length,g=0;m>g;)p.call(d,f=h[g++])&&(n[f]=d[f]);return n}:l},191:function(e,t,n){var r=n(21),o=n(14),a=n(22);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],i={};i[e]=t(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}},197:function(e,t,n){var r=n(21);r(r.S+r.F,"Object",{assign:n(187)})},199:function(e,t,n){var r=n(64),o=n(31);n(191)("keys",function(){return function(e){return o(r(e))}})},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return a(T+e)}function a(e){return e.replace(/^\/\//g,"/")}function i(e,t){var n=(0,x.createLocation)(e,null,null,t.location);return n.pathname=o(n.pathname),n}t.__esModule=!0,t.navigateTo=void 0;var s=n(167),l=r(s),u=n(163),c=r(u),p=n(168),f=r(p),d=n(88),h=r(d),m=n(98),g=r(m),y=n(97),v=r(y);t.withPrefix=o;var b=n(2),C=r(b),k=n(94),w=n(3),O=r(w),x=n(90),T="/";T="";var P={activeClassName:O.default.string,activeStyle:O.default.object,exact:O.default.bool,strict:O.default.bool,isActive:O.default.func,location:O.default.object},S=function(e,t){var n=new window.IntersectionObserver(function(r){r.forEach(function(r){e===r.target&&(r.isIntersecting||r.intersectionRatio>0)&&(n.unobserve(e),n.disconnect(),t())})});n.observe(e)},j=function(e){function t(n,r){(0,h.default)(this,t);var o=(0,g.default)(this,e.call(this)),a=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0);var s=r.router.history,l=i(n.to,s);return o.state={path:(0,x.createPath)(l),to:l,IOSupported:a},o.handleRef=o.handleRef.bind(o),o}return(0,v.default)(t,e),t.prototype.componentWillReceiveProps=function(e){if(this.props.to!==e.to){var t=i(e.to,history);this.setState({path:(0,x.createPath)(t),to:t}),this.state.IOSupported||___loader.enqueue(this.state.path)}},t.prototype.componentDidMount=function(){this.state.IOSupported||___loader.enqueue(this.state.path)},t.prototype.handleRef=function(e){var t=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&S(e,function(){___loader.enqueue(t.state.path)})},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,r=(0,f.default)(t,["onClick"]),o=void 0;return o=(0,c.default)(P).some(function(t){return e.props[t]})?k.NavLink:k.Link,C.default.createElement(o,(0,l.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var r=e.state.path;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var o=e.state.path.split("#").slice(1).join("#"),a=document.getElementById(o);return null!==a?(a.scrollIntoView(),!0):(window.scrollTo(0,0),!0)}t.preventDefault(),window.___navigateTo(e.state.to)}return!0}},r,{to:this.state.to,innerRef:this.handleRef}))},t}(C.default.Component);j.propTypes=(0,l.default)({},P,{innerRef:O.default.func,onClick:O.default.func,to:O.default.oneOfType([O.default.string,O.default.object]).isRequired}),j.contextTypes={router:O.default.object},t.default=j;t.navigateTo=function(e){window.___navigateTo(e)}},213:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.noWarn,r=void 0!==n&&n,o=t.createElement,a=void 0===o||o,i=function(t){function n(){var e,t,o,a;U(this,n);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return t=o=K(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),o.warned=r,o.state={theme:{}},o.setTheme=function(e){return o.setState({theme:e})},a=t,K(o,a)}return H(n,t),G(n,[{key:"componentWillMount",value:function(){!this.context[N];var e=this.props.theme;this.context[N]?this.setTheme(e?e:this.context[N].getState()):this.setTheme(e||{})}},{key:"componentWillReceiveProps",value:function(e){this.props.theme!==e.theme&&this.setTheme(e.theme)}},{key:"componentDidMount",value:function(){this.context[N]&&!this.props.theme&&(this.subscriptionId=this.context[N].subscribe(this.setTheme))}},{key:"componentWillUnmount",value:function(){this.subscriptionId&&this.context[N].unsubscribe(this.subscriptionId)}},{key:"render",value:function(){return a?_.createElement(e,B({},this.props,this.state)):e.call(this,B({},this.props,this.state),this.context)}}]),n}(_.Component);i.propTypes={theme:q.object};var s=W({},N,q.object),l=null;return Object.defineProperty(i,"contextTypes",{enumerable:!0,configurable:!0,set:function(e){l=e},get:function(){return l?B({},s,l):s}}),i}function a(e){var t=J.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}function i(e){return Z(e)===!0&&"[object Object]"===Object.prototype.toString.call(e)}function s(e){function t(){return s}function n(e){s=e;for(var t=Object.keys(a),n=0,r=t.length;n<r;n++)a[t[n]]&&a[t[n]](e)}function r(e){if("function"!=typeof e)throw new Error("listener must be a function.");var t=i;return a[t]=e,i+=1,t}function o(e){a[e]=void 0}var a={},i=1,s=e;return{getState:t,setState:n,subscribe:r,unsubscribe:o}}function l(e){var t=[],n=[];return e.toString().split(" ").forEach(function(e){if(0===e.indexOf("css-")){var r=u(e);n.push(r)}else t.push(e)}),{glamorlessClassName:t,glamorStyles:n}}function u(e){return W({},"data-"+e,"")}function c(e){var t=e.styles,n=e.props,r=e.cssOverrides,o=e.cssProp,a=e.context,i=e.displayName,s=p([].concat(X(t),[n.className,r,o]),n,a),l=s.mappedArgs,u=s.nonGlamorClassNames,c=!1,f=c?{label:i}:null,d=D.css.apply(void 0,[f].concat(X(l))).toString(),h=u.join(" ").trim();return(d+" "+h).trim()}function p(e,t,n){for(var r=void 0,o=[],a=[],i=0;i<e.length;i++)if(r=e[i],"function"==typeof r){var s=r(t,n);if("string"==typeof s){var u=l(s),c=u.glamorStyles,f=u.glamorlessClassName;o.push.apply(o,X(c)),a.push.apply(a,X(f))}else o.push(s)}else if("string"==typeof r){var d=l(r),h=d.glamorStyles,m=d.glamorlessClassName;o.push.apply(o,X(h)),a.push.apply(a,X(m))}else if(Array.isArray(r)){var g=p(r,t,n);o.push.apply(o,X(g.mappedArgs)),a.push.apply(a,X(g.nonGlamorClassNames))}else o.push(r);return{mappedArgs:o,nonGlamorClassNames:a}}function f(e){function t(r){function a(e){return t(r,B({},s,e))}function i(){function i(e,t,n){if(!p)return!0;var r=!0;return n&&(p(n.props,e,n.context,t)||(r=!1)),r}for(var s=arguments.length,f=Array(s),m=0;m<s;m++)f[m]=arguments[m];var v=o(function(t,n){t=d(v.propsToApply,{},t,n);var r=i(t,n,this.previous);p&&(this.previous={props:t,context:n});var o=e(t,v),a=o.toForward,s=o.cssOverrides,l=o.cssProp;return this.className=r?c({styles:v.styles,props:t,cssOverrides:s,cssProp:l,context:n,displayName:v.displayName}):this.className,_.createElement(v.comp,B({ref:"innerRef"in a?void 0:t.innerRef},a,{className:this.className}))},{noWarn:!0,createElement:!1});return v.propTypes={className:q.oneOfType([q.string,q.object]),cssOverrides:q.object,innerRef:q.func,glam:q.object},Object.assign(v,n({comp:r,styles:f,rootEl:l,filterProps:h,forwardProps:y,displayName:u,propsToApply:C}),{isGlamorousComponent:!0,propsAreCssOverrides:b,withComponent:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=v.forwardProps,o=v.filterProps,a=V(v,["forwardProps","filterProps"]);return t(B({},a,{comp:e,rootEl:g(e)}),B({forwardProps:r,filterProps:o},n))()},withProps:function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t(v,{withProps:n})()},withConfig:a}),v}var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=s.rootEl,u=s.displayName,p=s.shouldClassNameUpdate,f=s.filterProps,h=void 0===f?[]:f,m=s.forwardProps,y=void 0===m?[]:m,v=s.propsAreCssOverrides,b=void 0===v?r.propsAreCssOverrides:v,C=s.withProps;return Object.assign(i,{withConfig:a}),i}function n(e){var t=e.comp,n=e.styles,r=e.rootEl,o=e.filterProps,a=e.forwardProps,i=e.displayName,s=e.propsToApply,l=t.comp?t.comp:t,u=t.propsToApply?[].concat(X(t.propsToApply),X(h(s))):h(s);return{styles:m(t.styles,n),comp:l,rootEl:r||g(t),forwardProps:m(t.forwardProps,a),filterProps:m(t.filterProps,o),displayName:i||"glamorous("+y(t)+")",propsToApply:u}}return t}function d(e,t,n,r){return e.forEach(function(e){return"function"==typeof e?Object.assign(t,e(Object.assign({},t,n),r)):Array.isArray(e)?Object.assign(t,d(e,t,n,r)):Object.assign(t,e)}),Object.assign(t,n)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)?e:[e]}function m(e,t){return e?e.concat(t):t}function g(e){return e.rootEl?e.rootEl:e.comp||e}function y(e){return"string"==typeof e?e:e.displayName||e.name||"unknown"}function v(e,t){var n=t&&t.cache?t.cache:ee,r=t&&t.serializer?t.serializer:P,o=t&&t.strategy?t.strategy:O;return o(e,{cache:n,serializer:r})}function b(e){return null==e||"function"!=typeof e&&"object"!=typeof e}function C(e,t,n,r){var o=b(r)?r:n(r);if(!t.has(o)){var a=e.call(this,r);return t.set(o,a),a}return t.get(o)}function k(e,t,n){var r=Array.prototype.slice.call(arguments,3),o=n(r);if(!t.has(o)){var a=e.apply(this,r);return t.set(o,a),a}return t.get(o)}function w(e,t,n,r,o){return n.bind(t,e,r,o)}function O(e,t){var n=1===e.length?C:k;return w(e,this,n,t.cache.create(),t.serializer)}function x(e,t){var n=k;return w(e,this,n,t.cache.create(),t.serializer)}function T(e,t){var n=C;return w(e,this,n,t.cache.create(),t.serializer)}function P(){return JSON.stringify(arguments)}function S(){this.cache=Object.create(null)}function j(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function E(e,t){return t={exports:{}},e(t,t.exports),t.exports}function M(e,t){var n=t.propsAreCssOverrides,r=t.rootEl,o=t.filterProps,a=t.forwardProps,i=e.css,s=e.innerRef,l=(e.theme,e.className,e.glam,V(e,["css","innerRef","theme","className","glam"]));void 0!==s&&a.indexOf("innerRef")!==-1&&(l.innerRef=s);var u={toForward:{},cssProp:i,cssOverrides:{}};return n||"string"==typeof r||0!==o.length?Object.keys(l).reduce(function(e,t){return o.indexOf(t)!==-1?e:(a.indexOf(t)!==-1||jt(r,t)?e.toForward[t]=l[t]:n&&(e.cssOverrides[t]=l[t]),e)},u):(u.toForward=l,u)}function A(e){return e.slice(0,1).toUpperCase()+e.slice(1)}var _=r(n(2)),D=n(113),F=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"],R=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hatch","hatchpath","hkern","iframe","image","line","linearGradient","listener","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","solidcolor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"],L=F.concat(R).filter(function(e,t,n){return n.indexOf(e)===t}),N="__glamorous__",I=!1,q=void 0;if(I){if(_.PropTypes||(q=function(){return q},["array","bool","func","number","object","string","symbol","any","arrayOf","element","instanceOf","node","objectOf","oneOf","oneOfType","shape","exact"].forEach(function(e){q[e]=q})),!_.Children){var z={map:function(e,t,n){return null==e?null:(e=z.toArray(e),n&&n!==e&&(t=t.bind(n)),e.map(t))},forEach:function(e,t,n){return null==e?null:(e=z.toArray(e),n&&n!==e&&(t=t.bind(n)),void e.forEach(t))},count:function(e){return e&&e.length||0},only:function(e){if(e=z.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return null==e?[]:[].concat(e)}};_.Children=z}}else if(parseFloat(_.version.slice(0,4))>=15.5)try{q=n(3)}catch(e){}q=q||_.PropTypes;var U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},G=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},V=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},Y=a,J=Object.prototype.toString,Z=function(e){return null!=e&&"object"==typeof e&&Array.isArray(e)===!1},$=function(e){var t,n;return i(e)!==!1&&(t=e.constructor,"function"==typeof t&&(n=t.prototype,i(n)!==!1&&n.hasOwnProperty("isPrototypeOf")!==!1))},Q=function(e){function t(){var e,n,r,o;U(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=r=K(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.setOuterTheme=function(e){r.outerTheme=e,void 0!==r.broadcast&&r.publishTheme()},o=n,K(r,o)}return H(t,e),G(t,[{key:"getTheme",value:function(e){var t=e||this.props.theme;if(Y(t)){var n=t(this.outerTheme);if(!$(n))throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");return n}return B({},this.outerTheme,t)}},{key:"getChildContext",value:function(){return W({},N,this.broadcast)}},{key:"publishTheme",value:function(e){this.broadcast.setState(this.getTheme(e))}},{key:"componentDidMount",value:function(){this.context[N]&&(this.subscriptionId=this.context[N].subscribe(this.setOuterTheme))}},{key:"componentWillMount",value:function(){this.context[N]&&this.setOuterTheme(this.context[N].getState()),this.broadcast=s(this.getTheme(this.props.theme))}},{key:"componentWillReceiveProps",value:function(e){this.props.theme!==e.theme&&this.publishTheme(e.theme)}},{key:"componentWillUnmount",value:function(){this.subscriptionId&&this.context[N].unsubscribe(this.subscriptionId)}},{key:"render",value:function(){return this.props.children?_.Children.only(this.props.children):null}}]),t}(_.Component);Q.childContextTypes=W({},N,q.object.isRequired),Q.contextTypes=W({},N,q.object),Q.propTypes={theme:q.oneOfType([q.object,q.func]).isRequired,children:q.node},S.prototype.has=function(e){return e in this.cache},S.prototype.get=function(e){return this.cache[e]},S.prototype.set=function(e,t){this.cache[e]=t};var ee={create:function(){return new S}},te=v,ne={variadic:x,monadic:T};te.strategies=ne;var re=["coords","download","href","name","rel","shape","target","type"],oe=["title"],ae=["alt","height","name","width"],ie=["alt","coords","download","href","rel","shape","target","type"],se=["controls","loop","muted","preload","src"],le=["href","target"],ue=["size"],ce=["dir"],pe=["cite"],fe=["disabled","form","name","type","value"],de=["height","width"],he=["span","width"],me=["span","width"],ge=["value"],ye=["cite"],ve=["open"],be=["title"],Ce=["open"],ke=["height","src","type","width"],we=["disabled","form","name"],Oe=["size"],xe=["accept","action","method","name","target"],Te=["name","scrolling","src"],Pe=["cols","rows"],Se=["profile"],je=["size","width"],Ee=["manifest"],Me=["height","name","sandbox","scrolling","src","width"],Ae=["alt","height","name","sizes","src","width"],_e=["accept","alt","autoCapitalize","autoCorrect","autoSave","checked","defaultChecked","defaultValue","disabled","form","height","list","max","min","multiple","name","onChange","pattern","placeholder","required","results","size","src","step","title","type","value","width"],De=["cite"],Fe=["challenge","disabled","form","name"],Re=["form"],Le=["type","value"],Ne=["color","href","integrity","media","nonce","rel","scope","sizes","target","title","type"],Ie=["name"],qe=["content","name"],ze=["high","low","max","min","optimum","value"],Ue=["data","form","height","name","type","width"],Ge=["reversed","start","type"],We=["disabled","label"],Be=["disabled","label","selected","value"],He=["form","name"],Ve=["name","type","value"],Ke=["width"],Xe=["max","value"],Ye=["cite"],Je=["async","defer","integrity","nonce","src","type"],Ze=["defaultValue","disabled","form","multiple","name","onChange","required","size","value"],$e=["name"],Qe=["media","sizes","src","type"],et=["media","nonce","title","type"],tt=["summary","width"],nt=["headers","height","scope","width"],rt=["autoCapitalize","autoCorrect","cols","defaultValue","disabled","form","name","onChange","placeholder","required","rows","value","wrap"],ot=["headers","height","scope","width"],at=["default","kind","label","src"],it=["type"],st=["controls","height","loop","muted","poster","preload","src","width"],lt=["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","color","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","height","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","width","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlSpace","xmlns","xmlnsXlink","y","y1","y2","yChannelSelector","z","zoomAndPan"],ut={html:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],svg:["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]},ct={a:re,abbr:oe,applet:ae,area:ie,audio:se,base:le,basefont:ue,bdo:ce,blockquote:pe,button:fe,canvas:de,col:he,colgroup:me,data:ge,del:ye,details:ve,dfn:be,dialog:Ce,embed:ke,fieldset:we,font:Oe,form:xe,frame:Te,frameset:Pe,head:Se,hr:je,html:Ee,iframe:Me,img:Ae,input:_e,ins:De,keygen:Fe,label:Re,li:Le,link:Ne,map:Ie,meta:qe,meter:ze,object:Ue,ol:Ge,optgroup:We,option:Be,output:He,param:Ve,pre:Ke,progress:Xe,q:Ye,script:Je,select:Ze,slot:$e,source:Qe,style:et,table:tt,td:nt,textarea:rt,th:ot,track:at,ul:it,video:st,svg:lt,elements:ut,"*":["about","acceptCharset","accessKey","allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","charSet","classID","className","colSpan","contentEditable","contextMenu","crossOrigin","dangerouslySetInnerHTML","datatype","dateTime","dir","draggable","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hidden","hrefLang","htmlFor","httpEquiv","icon","id","inlist","inputMode","is","itemID","itemProp","itemRef","itemScope","itemType","keyParams","keyType","lang","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","prefix","property","radioGroup","readOnly","resource","role","rowSpan","scoped","seamless","security","spellCheck","srcDoc","srcLang","srcSet","style","suppressContentEditableWarning","tabIndex","title","typeof","unselectable","useMap","vocab","wmode"]},pt=Object.freeze({a:re,abbr:oe,applet:ae,area:ie,audio:se,base:le,basefont:ue,bdo:ce,blockquote:pe,button:fe,canvas:de,col:he,colgroup:me,data:ge,del:ye,details:ve,dfn:be,dialog:Ce,embed:ke,fieldset:we,font:Oe,form:xe,frame:Te,frameset:Pe,head:Se,hr:je,html:Ee,iframe:Me,img:Ae,input:_e,ins:De,keygen:Fe,label:Re,li:Le,link:Ne,map:Ie,meta:qe,meter:ze,object:Ue,ol:Ge,optgroup:We,option:Be,output:He,param:Ve,pre:Ke,progress:Xe,q:Ye,script:Je,select:Ze,slot:$e,source:Qe,style:et,table:tt,td:nt,textarea:rt,th:ot,track:at,ul:it,video:st,svg:lt,elements:ut,default:ct}),ft=pt&&ct||pt,dt=E(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=ft,e.exports=ft}),ht=j(dt),mt=["children","dangerouslySetInnerHTML","key","ref","autoFocus","defaultValue","valueLink","defaultChecked","checkedLink","innerHTML","suppressContentEditableWarning","onFocusIn","onFocusOut","className","onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onCopyCapture","onCutCapture","onPasteCapture","onCompositionEndCapture","onCompositionStartCapture","onCompositionUpdateCapture","onKeyDownCapture","onKeyPressCapture","onKeyUpCapture","onFocusCapture","onBlurCapture","onChangeCapture","onInputCapture","onSubmitCapture","onClickCapture","onContextMenuCapture","onDoubleClickCapture","onDragCapture","onDragEndCapture","onDragEnterCapture","onDragExitCapture","onDragLeaveCapture","onDragOverCapture","onDragStartCapture","onDropCapture","onMouseDownCapture","onMouseEnterCapture","onMouseLeaveCapture","onMouseMoveCapture","onMouseOutCapture","onMouseOverCapture","onMouseUpCapture","onSelectCapture","onTouchCancelCapture","onTouchEndCapture","onTouchMoveCapture","onTouchStartCapture","onScrollCapture","onWheelCapture","onAbortCapture","onCanPlayCapture","onCanPlayThroughCapture","onDurationChangeCapture","onEmptiedCapture","onEncryptedCapture","onEndedCapture","onErrorCapture","onLoadedDataCapture","onLoadedMetadataCapture","onLoadStartCapture","onPauseCapture","onPlayCapture","onPlayingCapture","onProgressCapture","onRateChangeCapture","onSeekedCapture","onSeekingCapture","onStalledCapture","onSuspendCapture","onTimeUpdateCapture","onVolumeChangeCapture","onWaitingCapture","onLoadCapture","onAnimationStartCapture","onAnimationEndCapture","onAnimationIterationCapture","onTransitionEndCapture"];I&&mt.push("autocomplete","autofocus","class","for","onDblClick","onSearch","slot","srcset");var gt=ht["*"],yt=ht.elements.svg,vt=ht.elements.html,bt=["color","height","width"],Ct=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",kt=Ct+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",wt=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+kt+"]*$")),Ot=function(e){return"svg"===e||vt.indexOf(e)===-1&&yt.indexOf(e)!==-1},xt=function(e,t){var n=void 0;return n=Ot(t)?ht.svg:ht[t]||[],gt.indexOf(e)!==-1||n.indexOf(e)!==-1},Tt=function(e){return bt.indexOf(e)!==-1},Pt=function(e){return mt.indexOf(e)!==-1},St=function(e,t){return"string"!=typeof e||(xt(t,e)||Pt(t)||wt(t.toLowerCase()))&&(!Tt(t)||Ot(e))},jt=te(St),Et=f(M);Object.assign(Et,L.reduce(function(e,t){return e[t]=Et(t),e},{})),Object.assign(Et,L.reduce(function(e,t){var n=A(t);return e[n]=Et[t](),e[n].displayName="glamorous."+n,e[n].propsAreCssOverrides=!0,e},{})),Et.default=Et;var Mt=Object.freeze({default:Et,ThemeProvider:Q,withTheme:o}),At=Et;Object.assign(At,Object.keys(Mt).reduce(function(e,t){return"default"!==t&&(e[t]=Mt[t]),e},{})),e.exports=At},428:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var o=n(2),a=(r(o),n(213)),i=r(a),s=n(113),l=n(212),u=r(l),c=n(148),p=(0,s.css)({float:"right"});t.default=function(t){var n=t.children,r=t.data;return e.createElement(i.default.Div,{margin:"0 auto",maxWidth:700,padding:(0,c.rhythm)(2),paddingTop:(0,c.rhythm)(1.5)},e.createElement(u.default,{to:"/"},e.createElement(i.default.H3,{marginBottom:(0,c.rhythm)(2),display:"inline-block",fontStyle:"normal"},r.site.siteMetadata.title)),e.createElement(u.default,{className:p,to:"/about/"},"About"),n())};t.query="** extracted graphql fragment **"}).call(t,n(68))}});
//# sourceMappingURL=component---src-layouts-index-js-532f8941e67bddb3f2c0.js.map