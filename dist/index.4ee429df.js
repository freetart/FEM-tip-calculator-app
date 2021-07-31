// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1XQsC":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "e0dcefe8574811b2e7c6ae8a4ee429df"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"SXDIM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// aos.js
var _aos = require("aos");
var _aosDefault = parcelHelpers.interopDefault(_aos);
"use scrict";
_aosDefault.default.init({
    offset: 100,
    duration: 1000,
    once: true
});
// dom elements
const bill = document.getElementById("bill");
const tipBtns = document.querySelectorAll(".option--btn");
const tipCustom = document.getElementById("custom");
const people = document.getElementById("people");
const errorMsg = document.querySelector(".form-control__error");
const results = document.querySelectorAll(".amount");
const resetBtn = document.querySelector("#reset");
// initial values
let billValue = 0;
let tipValue = 0.15;
let peopleValue = 1;
// validation
const validateFloat = (s)=>{
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
};
const validateInt = (s)=>{
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
};
// functionality
const setBillValue = ()=>{
    if (bill.value.includes(",")) bill.value = bill.value.replace(",", ".");
    if (!validateFloat(bill.value)) bill.value = bill.value.substring(0, bill.value.length - 1);
    billValue = parseFloat(bill.value);
    calculateTip();
};
const handleClick = (event)=>{
    tipBtns.forEach((btn)=>{
        if (event.target.innerHTML == btn.innerHTML) tipValue = parseFloat(btn.innerHTML) / 100;
    });
    //clear custom tip
    tipCustom.value = "";
    calculateTip();
};
const setTipCustomValue = ()=>{
    if (!validateInt(tipCustom.value)) tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length - 1);
    tipValue = parseFloat(tipCustom.value / 100);
    if (tipCustom.value !== "") calculateTip();
};
const setPeopleValue = ()=>{
    if (!validateInt(people.value)) people.value = people.value.substring(0, people.value.length - 1);
    peopleValue = parseFloat(people.value);
    if (peopleValue <= 0) {
        errorMsg.classList.add("show-error-msg");
        setTimeout(function() {
            errorMsg.classList.remove("show-error-msg");
        }, 3000);
    }
    calculateTip();
};
const calculateTip = ()=>{
    if (peopleValue >= 1) {
        let tipAmount = billValue * tipValue / peopleValue;
        let total = billValue * (tipValue + 1) / peopleValue;
        results[0].innerHTML = `$${tipAmount.toFixed(2)}`;
        results[1].innerHTML = `$${total.toFixed(2)}`;
    }
    if (bill.value === "") {
        results[0].innerHTML = `$0.00`;
        results[1].innerHTML = `$0.00`;
    }
};
const reset = ()=>{
    bill.value = "0.0";
    setBillValue();
    tipBtns[2].click();
    people.value = "1";
    setPeopleValue();
};
// event listeners
bill.addEventListener("input", setBillValue);
tipBtns.forEach((btn)=>{
    btn.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input", setTipCustomValue);
people.addEventListener("input", setPeopleValue);
resetBtn.addEventListener("click", reset);

},{"aos":"7rvwx","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"7rvwx":[function(require,module,exports) {
(function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t();
})(this, function() {
    return (function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {
                },
                id: o,
                loaded: false
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = true, i.exports;
        }
        var n = {
        };
        return t.m = e, t.c = n, t.p = "dist/", t(0);
    })([
        function(e, t, n) {
            "use strict";
            function o(e1) {
                return e1 && e1.__esModule ? e1 : {
                    default: e1
                };
            }
            var i = Object.assign || function(e1) {
                for(var t1 = 1; t1 < arguments.length; t1++){
                    var n1 = arguments[t1];
                    for(var o1 in n1)Object.prototype.hasOwnProperty.call(n1, o1) && (e1[o1] = n1[o1]);
                }
                return e1;
            }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = false, x = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: false,
                once: false,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: false
            }, j = function() {
                var e1 = arguments.length > 0 && (void 0) !== arguments[0] && arguments[0];
                if (e1 && (k = true), k) return w = y.default(w, x), b.default(w, x.once), w;
            }, O = function() {
                w = h.default(), j();
            }, M = function() {
                w.forEach(function(e1, t1) {
                    e1.node.removeAttribute("data-aos"), e1.node.removeAttribute("data-aos-easing"), e1.node.removeAttribute("data-aos-duration"), e1.node.removeAttribute("data-aos-delay");
                });
            }, S = function(e1) {
                return e1 === true || "mobile" === e1 && p.default.mobile() || "phone" === e1 && p.default.phone() || "tablet" === e1 && p.default.tablet() || "function" == typeof e1 && e1() === true;
            }, _ = function(e1) {
                x = i(x, e1), w = h.default();
                var t1 = document.all && !window.atob;
                return S(x.disable) || t1 ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = true), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && [
                    "complete",
                    "interactive"
                ].indexOf(document.readyState) > -1 ? j(true) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
                    j(true);
                }) : document.addEventListener(x.startEvent, function() {
                    j(true);
                }), window.addEventListener("resize", s.default(j, x.debounceDelay, true)), window.addEventListener("orientationchange", s.default(j, x.debounceDelay, true)), window.addEventListener("scroll", u.default(function() {
                    b.default(w, x.once);
                }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
            };
            e.exports = {
                init: _,
                refresh: j,
                refreshHard: O
            };
        },
        function(e, t) {
        },
        ,
        ,
        ,
        ,
        function(e, t) {
            (function(t1) {
                function n2(e1, t2, n3) {
                    function o2(t3) {
                        var n4 = b, o3 = v;
                        return b = v = void 0, k = t3, g = e1.apply(o3, n4);
                    }
                    function r(e2) {
                        return k = e2, h = setTimeout(f, t2), M ? o2(e2) : g;
                    }
                    function a(e2) {
                        var n4 = e2 - w, o3 = e2 - k, i = t2 - n4;
                        return S ? j(i, y - o3) : i;
                    }
                    function c(e2) {
                        var n4 = e2 - w, o3 = e2 - k;
                        return (void 0) === w || n4 >= t2 || n4 < 0 || S && o3 >= y;
                    }
                    function f() {
                        var e2 = O();
                        return c(e2) ? d(e2) : void (h = setTimeout(f, a(e2)));
                    }
                    function d(e2) {
                        return h = void 0, _ && b ? o2(e2) : (b = v = void 0, g);
                    }
                    function l() {
                        (void 0) !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
                    }
                    function p() {
                        return (void 0) === h ? g : d(O());
                    }
                    function m() {
                        var e2 = O(), n4 = c(e2);
                        if (b = arguments, v = this, w = e2, n4) {
                            if ((void 0) === h) return r(w);
                            if (S) return h = setTimeout(f, t2), o2(w);
                        }
                        return (void 0) === h && (h = setTimeout(f, t2)), g;
                    }
                    var b, v, y, g, h, w, k = 0, M = false, S = false, _ = true;
                    if ("function" != typeof e1) throw new TypeError(s);
                    return t2 = u(t2) || 0, i(n3) && (M = !!n3.leading, S = "maxWait" in n3, y = S ? x(u(n3.maxWait) || 0, t2) : y, _ = "trailing" in n3 ? !!n3.trailing : _), m.cancel = l, m.flush = p, m;
                }
                function o2(e1, t2, o3) {
                    var r = true, a = true;
                    if ("function" != typeof e1) throw new TypeError(s);
                    return i(o3) && (r = "leading" in o3 ? !!o3.leading : r, a = "trailing" in o3 ? !!o3.trailing : a), n2(e1, t2, {
                        leading: r,
                        maxWait: t2,
                        trailing: a
                    });
                }
                function i(e1) {
                    var t2 = "undefined" == typeof e1 ? "undefined" : c(e1);
                    return !!e1 && ("object" == t2 || "function" == t2);
                }
                function r(e1) {
                    return !!e1 && "object" == ("undefined" == typeof e1 ? "undefined" : c(e1));
                }
                function a(e1) {
                    return "symbol" == ("undefined" == typeof e1 ? "undefined" : c(e1)) || r(e1) && k.call(e1) == d;
                }
                function u(e1) {
                    if ("number" == typeof e1) return e1;
                    if (a(e1)) return f;
                    if (i(e1)) {
                        var t2 = "function" == typeof e1.valueOf ? e1.valueOf() : e1;
                        e1 = i(t2) ? t2 + "" : t2;
                    }
                    if ("string" != typeof e1) return 0 === e1 ? e1 : +e1;
                    e1 = e1.replace(l, "");
                    var n3 = m.test(e1);
                    return n3 || b.test(e1) ? v(e1.slice(2), n3 ? 2 : 8) : p.test(e1) ? f : +e1;
                }
                var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e1) {
                    return typeof e1;
                } : function(e1) {
                    return e1 && "function" == typeof Symbol && e1.constructor === Symbol && e1 !== Symbol.prototype ? "symbol" : typeof e1;
                }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t1 ? "undefined" : c(t1)) && t1 && t1.Object === Object && t1, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
                    return h.Date.now();
                };
                e.exports = o2;
            }).call(t, function() {
                return this;
            }());
        },
        function(e, t1) {
            (function(t3) {
                function n2(e1, t4, n3) {
                    function i(t5) {
                        var n4 = b, o2 = v;
                        return b = v = void 0, O = t5, g = e1.apply(o2, n4);
                    }
                    function r(e2) {
                        return O = e2, h = setTimeout(f, t4), M ? i(e2) : g;
                    }
                    function u(e2) {
                        var n4 = e2 - w, o2 = e2 - O, i1 = t4 - n4;
                        return S ? x(i1, y - o2) : i1;
                    }
                    function s(e2) {
                        var n4 = e2 - w, o2 = e2 - O;
                        return (void 0) === w || n4 >= t4 || n4 < 0 || S && o2 >= y;
                    }
                    function f() {
                        var e2 = j();
                        return s(e2) ? d(e2) : void (h = setTimeout(f, u(e2)));
                    }
                    function d(e2) {
                        return h = void 0, _ && b ? i(e2) : (b = v = void 0, g);
                    }
                    function l() {
                        (void 0) !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
                    }
                    function p() {
                        return (void 0) === h ? g : d(j());
                    }
                    function m() {
                        var e2 = j(), n4 = s(e2);
                        if (b = arguments, v = this, w = e2, n4) {
                            if ((void 0) === h) return r(w);
                            if (S) return h = setTimeout(f, t4), i(w);
                        }
                        return (void 0) === h && (h = setTimeout(f, t4)), g;
                    }
                    var b, v, y, g, h, w, O = 0, M = false, S = false, _ = true;
                    if ("function" != typeof e1) throw new TypeError(c);
                    return t4 = a(t4) || 0, o2(n3) && (M = !!n3.leading, S = "maxWait" in n3, y = S ? k(a(n3.maxWait) || 0, t4) : y, _ = "trailing" in n3 ? !!n3.trailing : _), m.cancel = l, m.flush = p, m;
                }
                function o2(e1) {
                    var t4 = "undefined" == typeof e1 ? "undefined" : u(e1);
                    return !!e1 && ("object" == t4 || "function" == t4);
                }
                function i(e1) {
                    return !!e1 && "object" == ("undefined" == typeof e1 ? "undefined" : u(e1));
                }
                function r(e1) {
                    return "symbol" == ("undefined" == typeof e1 ? "undefined" : u(e1)) || i(e1) && w.call(e1) == f;
                }
                function a(e1) {
                    if ("number" == typeof e1) return e1;
                    if (r(e1)) return s;
                    if (o2(e1)) {
                        var t4 = "function" == typeof e1.valueOf ? e1.valueOf() : e1;
                        e1 = o2(t4) ? t4 + "" : t4;
                    }
                    if ("string" != typeof e1) return 0 === e1 ? e1 : +e1;
                    e1 = e1.replace(d, "");
                    var n3 = p.test(e1);
                    return n3 || m.test(e1) ? b(e1.slice(2), n3 ? 2 : 8) : l.test(e1) ? s : +e1;
                }
                var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e1) {
                    return typeof e1;
                } : function(e1) {
                    return e1 && "function" == typeof Symbol && e1.constructor === Symbol && e1 !== Symbol.prototype ? "symbol" : typeof e1;
                }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t3 ? "undefined" : u(t3)) && t3 && t3.Object === Object && t3, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
                    return g.Date.now();
                };
                e.exports = n2;
            }).call(t1, function() {
                return this;
            }());
        },
        function(e, t1) {
            "use strict";
            function n2(e1) {
                var t3 = void 0, o2 = void 0, i = void 0;
                for(t3 = 0; t3 < e1.length; t3 += 1){
                    if (o2 = e1[t3], o2.dataset && o2.dataset.aos) return true;
                    if (i = o2.children && n2(o2.children)) return true;
                }
                return false;
            }
            function o2() {
                return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            }
            function i() {
                return !!o2();
            }
            function r(e1, t3) {
                var n3 = window.document, i1 = o2(), r1 = new i1(a);
                u = t3, r1.observe(n3.documentElement, {
                    childList: true,
                    subtree: true,
                    removedNodes: true
                });
            }
            function a(e1) {
                e1 && e1.forEach(function(e2) {
                    var t3 = Array.prototype.slice.call(e2.addedNodes), o3 = Array.prototype.slice.call(e2.removedNodes), i1 = t3.concat(o3);
                    if (n2(i1)) return u();
                });
            }
            Object.defineProperty(t1, "__esModule", {
                value: true
            });
            var u = function() {
            };
            t1.default = {
                isSupported: i,
                ready: r
            };
        },
        function(e, t1) {
            "use strict";
            function n2(e1, t3) {
                if (!(e1 instanceof t3)) throw new TypeError("Cannot call a class as a function");
            }
            function o2() {
                return navigator.userAgent || navigator.vendor || window.opera || "";
            }
            Object.defineProperty(t1, "__esModule", {
                value: true
            });
            var i = function() {
                function e1(e2, t3) {
                    for(var n3 = 0; n3 < t3.length; n3++){
                        var o3 = t3[n3];
                        o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(e2, o3.key, o3);
                    }
                }
                return function(t3, n3, o4) {
                    return n3 && e1(t3.prototype, n3), o4 && e1(t3, o4), t3;
                };
            }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
                function e1() {
                    n2(this, e1);
                }
                return i(e1, [
                    {
                        key: "phone",
                        value: function() {
                            var e2 = o2();
                            return !(!r.test(e2) && !a.test(e2.substr(0, 4)));
                        }
                    },
                    {
                        key: "mobile",
                        value: function() {
                            var e2 = o2();
                            return !(!u.test(e2) && !c.test(e2.substr(0, 4)));
                        }
                    },
                    {
                        key: "tablet",
                        value: function() {
                            return this.mobile() && !this.phone();
                        }
                    }
                ]), e1;
            }();
            t1.default = new s;
        },
        function(e, t1) {
            "use strict";
            Object.defineProperty(t1, "__esModule", {
                value: true
            });
            var n2 = function(e1, t3, n3) {
                var o2 = e1.node.getAttribute("data-aos-once");
                t3 > e1.position ? e1.node.classList.add("aos-animate") : "undefined" != typeof o2 && ("false" === o2 || !n3 && "true" !== o2) && e1.node.classList.remove("aos-animate");
            }, o2 = function(e1, t3) {
                var o4 = window.pageYOffset, i = window.innerHeight;
                e1.forEach(function(e2, r) {
                    n2(e2, i + o4, t3);
                });
            };
            t1.default = o2;
        },
        function(e, t1, n2) {
            "use strict";
            function o2(e1) {
                return e1 && e1.__esModule ? e1 : {
                    default: e1
                };
            }
            Object.defineProperty(t1, "__esModule", {
                value: true
            });
            var i = n2(12), r = o2(i), a = function(e1, t3) {
                return e1.forEach(function(e2, n3) {
                    e2.node.classList.add("aos-init"), e2.position = r.default(e2.node, t3.offset);
                }), e1;
            };
            t1.default = a;
        },
        function(e, t1, n2) {
            "use strict";
            function o2(e1) {
                return e1 && e1.__esModule ? e1 : {
                    default: e1
                };
            }
            Object.defineProperty(t1, "__esModule", {
                value: true
            });
            var i = n2(13), r = o2(i), a = function(e1, t3) {
                var n3 = 0, o4 = 0, i1 = window.innerHeight, a1 = {
                    offset: e1.getAttribute("data-aos-offset"),
                    anchor: e1.getAttribute("data-aos-anchor"),
                    anchorPlacement: e1.getAttribute("data-aos-anchor-placement")
                };
                switch(a1.offset && !isNaN(a1.offset) && (o4 = parseInt(a1.offset)), a1.anchor && document.querySelectorAll(a1.anchor) && (e1 = document.querySelectorAll(a1.anchor)[0]), n3 = r.default(e1).top, a1.anchorPlacement){
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n3 += e1.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n3 += e1.offsetHeight;
                        break;
                    case "top-center":
                        n3 += i1 / 2;
                        break;
                    case "bottom-center":
                        n3 += i1 / 2 + e1.offsetHeight;
                        break;
                    case "center-center":
                        n3 += i1 / 2 + e1.offsetHeight / 2;
                        break;
                    case "top-top":
                        n3 += i1;
                        break;
                    case "bottom-top":
                        n3 += e1.offsetHeight + i1;
                        break;
                    case "center-top":
                        n3 += e1.offsetHeight / 2 + i1;
                }
                return a1.anchorPlacement || a1.offset || isNaN(t3) || (o4 = t3), n3 + o4;
            };
            t1.default = a;
        },
        function(e, t1) {
            "use strict";
            Object.defineProperty(t1, "__esModule", {
                value: true
            });
            var n2 = function(e1) {
                for(var t3 = 0, n3 = 0; e1 && !isNaN(e1.offsetLeft) && !isNaN(e1.offsetTop);)t3 += e1.offsetLeft - ("BODY" != e1.tagName ? e1.scrollLeft : 0), n3 += e1.offsetTop - ("BODY" != e1.tagName ? e1.scrollTop : 0), e1 = e1.offsetParent;
                return {
                    top: n3,
                    left: t3
                };
            };
            t1.default = n2;
        },
        function(e, t1) {
            "use strict";
            Object.defineProperty(t1, "__esModule", {
                value: true
            });
            var n2 = function(e1) {
                return e1 = e1 || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e1, function(e2) {
                    return {
                        node: e2
                    };
                });
            };
            t1.default = n2;
        }
    ]);
});

},{}],"367CR":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["1XQsC","SXDIM"], "SXDIM", "parcelRequirea361")

//# sourceMappingURL=index.4ee429df.js.map
