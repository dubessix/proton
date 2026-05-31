import { $ as RiGamepadLine, B as RiCodeLine, Ct as RiSettings4Line, F as RiBrainLine, H as RiDeleteBinLine, I as RiCheckLine, J as RiFileCopyLine, K as RiEditBoxLine, L as RiChromeLine, Lt as __toESM, M as RiArrowDropDownLine, Mt as RiVolumeUpLine, Nt as require_react_dom, O as require_jsx_runtime, Ot as RiTerminalBoxLine, Pt as require_react, R as RiCloseLine, St as RiServerLine, Tt as RiSpotifyLine, U as RiDiscordLine, Z as RiFlashlightLine, _ as closeApp, a as clsx, at as RiLayoutColumnLine, b as getMacroSequence, c as readEmails, d as clickOnCoordinate, et as RiGlobalLine, f as scrollScreen, ft as RiMore2Fill, g as sendWhatsAppMessage, h as scheduleWhatsAppMessage, i as color, it as RiLayoutColumnFill, j as RiAddLine, l as sendEmail, lt as RiMailLine, m as takeScreenshot, mt as RiPlayFill, n as number_default, o as require_with_selector, p as setVolume, pt as RiPhoneLine, r as rgb_default, rt as RiKeyboardLine, s as draftEmail, t as string_default, u as runTerminal, v as openApp, w as createLucideIcon, x as getAllApps, xt as RiSearchLine, y as performWebSearch, yt as RiSave3Line } from "./index-knnN0Im8.js";
/**
* @license lucide-react v1.16.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ListStart = createLucideIcon("list-start", [
	["path", {
		d: "M3 5h6",
		key: "1ltk0q"
	}],
	["path", {
		d: "M3 12h13",
		key: "ppymz1"
	}],
	["path", {
		d: "M3 19h13",
		key: "bpdczq"
	}],
	["path", {
		d: "m16 8-3-3 3-3",
		key: "1pjpp6"
	}],
	["path", {
		d: "M21 19V7a2 2 0 0 0-2-2h-6",
		key: "4zzq67"
	}]
]);
//#endregion
//#region node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity$2 = {
	translateX: 0,
	translateY: 0,
	rotate: 0,
	skewX: 0,
	scaleX: 1,
	scaleY: 1
};
function decompose_default(a, b, c, d, e, f) {
	var scaleX, scaleY, skewX;
	if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
	if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
	if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
	if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
	return {
		translateX: e,
		translateY: f,
		rotate: Math.atan2(b, a) * degrees,
		skewX: Math.atan(skewX) * degrees,
		scaleX,
		scaleY
	};
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/parse.js
var svgNode;
function parseCss(value) {
	const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
	return m.isIdentity ? identity$2 : decompose_default(m.a, m.b, m.c, m.d, m.e, m.f);
}
function parseSvg(value) {
	if (value == null) return identity$2;
	if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
	svgNode.setAttribute("transform", value);
	if (!(value = svgNode.transform.baseVal.consolidate())) return identity$2;
	value = value.matrix;
	return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}
//#endregion
//#region node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
	function pop(s) {
		return s.length ? s.pop() + " " : "";
	}
	function translate(xa, ya, xb, yb, s, q) {
		if (xa !== xb || ya !== yb) {
			var i = s.push("translate(", null, pxComma, null, pxParen);
			q.push({
				i: i - 4,
				x: number_default(xa, xb)
			}, {
				i: i - 2,
				x: number_default(ya, yb)
			});
		} else if (xb || yb) s.push("translate(" + xb + pxComma + yb + pxParen);
	}
	function rotate(a, b, s, q) {
		if (a !== b) {
			if (a - b > 180) b += 360;
			else if (b - a > 180) a += 360;
			q.push({
				i: s.push(pop(s) + "rotate(", null, degParen) - 2,
				x: number_default(a, b)
			});
		} else if (b) s.push(pop(s) + "rotate(" + b + degParen);
	}
	function skewX(a, b, s, q) {
		if (a !== b) q.push({
			i: s.push(pop(s) + "skewX(", null, degParen) - 2,
			x: number_default(a, b)
		});
		else if (b) s.push(pop(s) + "skewX(" + b + degParen);
	}
	function scale(xa, ya, xb, yb, s, q) {
		if (xa !== xb || ya !== yb) {
			var i = s.push(pop(s) + "scale(", null, ",", null, ")");
			q.push({
				i: i - 4,
				x: number_default(xa, xb)
			}, {
				i: i - 2,
				x: number_default(ya, yb)
			});
		} else if (xb !== 1 || yb !== 1) s.push(pop(s) + "scale(" + xb + "," + yb + ")");
	}
	return function(a, b) {
		var s = [], q = [];
		a = parse(a), b = parse(b);
		translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
		rotate(a.rotate, b.rotate, s, q);
		skewX(a.skewX, b.skewX, s, q);
		scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
		a = b = null;
		return function(t) {
			var i = -1, n = q.length, o;
			while (++i < n) s[(o = q[i]).i] = o.x(t);
			return s.join("");
		};
	};
}
var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
//#endregion
//#region node_modules/d3-interpolate/src/zoom.js
var epsilon2 = 1e-12;
function cosh(x) {
	return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
	return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
	return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
var zoom_default$1 = (function zoomRho(rho, rho2, rho4) {
	function zoom(p0, p1) {
		var ux0 = p0[0], uy0 = p0[1], w0 = p0[2], ux1 = p1[0], uy1 = p1[1], w1 = p1[2], dx = ux1 - ux0, dy = uy1 - uy0, d2 = dx * dx + dy * dy, i, S;
		if (d2 < epsilon2) {
			S = Math.log(w1 / w0) / rho;
			i = function(t) {
				return [
					ux0 + t * dx,
					uy0 + t * dy,
					w0 * Math.exp(rho * t * S)
				];
			};
		} else {
			var d1 = Math.sqrt(d2), b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1), b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1), r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0);
			S = (Math.log(Math.sqrt(b1 * b1 + 1) - b1) - r0) / rho;
			i = function(t) {
				var s = t * S, coshr0 = cosh(r0), u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
				return [
					ux0 + u * dx,
					uy0 + u * dy,
					w0 * coshr0 / cosh(rho * s + r0)
				];
			};
		}
		i.duration = S * 1e3 * rho / Math.SQRT2;
		return i;
	}
	zoom.rho = function(_) {
		var _1 = Math.max(.001, +_), _2 = _1 * _1;
		return zoomRho(_1, _2, _2 * _2);
	};
	return zoom;
})(Math.SQRT2, 2, 4);
//#endregion
//#region node_modules/classcat/index.js
function cc(names) {
	if (typeof names === "string" || typeof names === "number") return "" + names;
	let out = "";
	if (Array.isArray(names)) {
		for (let i = 0, tmp; i < names.length; i++) if ((tmp = cc(names[i])) !== "") out += (out && " ") + tmp;
	} else for (let k in names) if (names[k]) out += (out && " ") + k;
	return out;
}
//#endregion
//#region node_modules/@reactflow/core/node_modules/zustand/esm/vanilla.mjs
var createStoreImpl = (createState) => {
	let state;
	const listeners = /* @__PURE__ */ new Set();
	const setState = (partial, replace) => {
		const nextState = typeof partial === "function" ? partial(state) : partial;
		if (!Object.is(nextState, state)) {
			const previousState = state;
			state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
			listeners.forEach((listener) => listener(state, previousState));
		}
	};
	const getState = () => state;
	const getInitialState = () => initialState;
	const subscribe = (listener) => {
		listeners.add(listener);
		return () => listeners.delete(listener);
	};
	const destroy = () => {
		listeners.clear();
	};
	const api = {
		setState,
		getState,
		getInitialState,
		subscribe,
		destroy
	};
	const initialState = state = createState(setState, getState, api);
	return api;
};
var createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
//#endregion
//#region node_modules/@reactflow/core/node_modules/zustand/esm/traditional.mjs
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_with_selector = /* @__PURE__ */ __toESM(require_with_selector(), 1);
var { useDebugValue } = import_react.default;
var { useSyncExternalStoreWithSelector } = import_with_selector.default;
var identity$1 = (arg) => arg;
function useStoreWithEqualityFn(api, selector = identity$1, equalityFn) {
	const slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getServerState || api.getInitialState, selector, equalityFn);
	useDebugValue(slice);
	return slice;
}
var createWithEqualityFnImpl = (createState, defaultEqualityFn) => {
	const api = createStore(createState);
	const useBoundStoreWithEqualityFn = (selector, equalityFn = defaultEqualityFn) => useStoreWithEqualityFn(api, selector, equalityFn);
	Object.assign(useBoundStoreWithEqualityFn, api);
	return useBoundStoreWithEqualityFn;
};
var createWithEqualityFn = (createState, defaultEqualityFn) => createState ? createWithEqualityFnImpl(createState, defaultEqualityFn) : createWithEqualityFnImpl;
//#endregion
//#region node_modules/@reactflow/core/node_modules/zustand/esm/shallow.mjs
function shallow$1$2(objA, objB) {
	if (Object.is(objA, objB)) return true;
	if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
	if (objA instanceof Map && objB instanceof Map) {
		if (objA.size !== objB.size) return false;
		for (const [key, value] of objA) if (!Object.is(value, objB.get(key))) return false;
		return true;
	}
	if (objA instanceof Set && objB instanceof Set) {
		if (objA.size !== objB.size) return false;
		for (const value of objA) if (!objB.has(value)) return false;
		return true;
	}
	const keysA = Object.keys(objA);
	if (keysA.length !== Object.keys(objB).length) return false;
	for (const keyA of keysA) if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) return false;
	return true;
}
//#endregion
//#region node_modules/d3-dispatch/src/dispatch.js
var noop$1 = { value: () => {} };
function dispatch() {
	for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
		if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
		_[t] = [];
	}
	return new Dispatch(_);
}
function Dispatch(_) {
	this._ = _;
}
function parseTypenames$1(typenames, types) {
	return typenames.trim().split(/^|\s+/).map(function(t) {
		var name = "", i = t.indexOf(".");
		if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
		if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
		return {
			type: t,
			name
		};
	});
}
Dispatch.prototype = dispatch.prototype = {
	constructor: Dispatch,
	on: function(typename, callback) {
		var _ = this._, T = parseTypenames$1(typename + "", _), t, i = -1, n = T.length;
		if (arguments.length < 2) {
			while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
			return;
		}
		if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
		while (++i < n) if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
		else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
		return this;
	},
	copy: function() {
		var copy = {}, _ = this._;
		for (var t in _) copy[t] = _[t].slice();
		return new Dispatch(copy);
	},
	call: function(type, that) {
		if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
		if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
		for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	},
	apply: function(type, that, args) {
		if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
		for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
	}
};
function get$1(type, name) {
	for (var i = 0, n = type.length, c; i < n; ++i) if ((c = type[i]).name === name) return c.value;
}
function set$1(type, name, callback) {
	for (var i = 0, n = type.length; i < n; ++i) if (type[i].name === name) {
		type[i] = noop$1, type = type.slice(0, i).concat(type.slice(i + 1));
		break;
	}
	if (callback != null) type.push({
		name,
		value: callback
	});
	return type;
}
var namespaces_default = {
	svg: "http://www.w3.org/2000/svg",
	xhtml: "http://www.w3.org/1999/xhtml",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region node_modules/d3-selection/src/namespace.js
function namespace_default(name) {
	var prefix = name += "", i = prefix.indexOf(":");
	if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
	return namespaces_default.hasOwnProperty(prefix) ? {
		space: namespaces_default[prefix],
		local: name
	} : name;
}
//#endregion
//#region node_modules/d3-selection/src/creator.js
function creatorInherit(name) {
	return function() {
		var document = this.ownerDocument, uri = this.namespaceURI;
		return uri === "http://www.w3.org/1999/xhtml" && document.documentElement.namespaceURI === "http://www.w3.org/1999/xhtml" ? document.createElement(name) : document.createElementNS(uri, name);
	};
}
function creatorFixed(fullname) {
	return function() {
		return this.ownerDocument.createElementNS(fullname.space, fullname.local);
	};
}
function creator_default(name) {
	var fullname = namespace_default(name);
	return (fullname.local ? creatorFixed : creatorInherit)(fullname);
}
//#endregion
//#region node_modules/d3-selection/src/selector.js
function none() {}
function selector_default(selector) {
	return selector == null ? none : function() {
		return this.querySelector(selector);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/select.js
function select_default$2(select) {
	if (typeof select !== "function") select = selector_default(select);
	for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
		if ("__data__" in node) subnode.__data__ = node.__data__;
		subgroup[i] = subnode;
	}
	return new Selection$1(subgroups, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/array.js
function array(x) {
	return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
}
//#endregion
//#region node_modules/d3-selection/src/selectorAll.js
function empty() {
	return [];
}
function selectorAll_default(selector) {
	return selector == null ? empty : function() {
		return this.querySelectorAll(selector);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectAll.js
function arrayAll(select) {
	return function() {
		return array(select.apply(this, arguments));
	};
}
function selectAll_default$1(select) {
	if (typeof select === "function") select = arrayAll(select);
	else select = selectorAll_default(select);
	for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) if (node = group[i]) {
		subgroups.push(select.call(node, node.__data__, i, group));
		parents.push(node);
	}
	return new Selection$1(subgroups, parents);
}
//#endregion
//#region node_modules/d3-selection/src/matcher.js
function matcher_default(selector) {
	return function() {
		return this.matches(selector);
	};
}
function childMatcher(selector) {
	return function(node) {
		return node.matches(selector);
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChild.js
var find = Array.prototype.find;
function childFind(match) {
	return function() {
		return find.call(this.children, match);
	};
}
function childFirst() {
	return this.firstElementChild;
}
function selectChild_default(match) {
	return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/selectChildren.js
var filter = Array.prototype.filter;
function children() {
	return Array.from(this.children);
}
function childrenFilter(match) {
	return function() {
		return filter.call(this.children, match);
	};
}
function selectChildren_default(match) {
	return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
}
//#endregion
//#region node_modules/d3-selection/src/selection/filter.js
function filter_default$1(match) {
	if (typeof match !== "function") match = matcher_default(match);
	for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
	return new Selection$1(subgroups, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/sparse.js
function sparse_default(update) {
	return new Array(update.length);
}
//#endregion
//#region node_modules/d3-selection/src/selection/enter.js
function enter_default() {
	return new Selection$1(this._enter || this._groups.map(sparse_default), this._parents);
}
function EnterNode(parent, datum) {
	this.ownerDocument = parent.ownerDocument;
	this.namespaceURI = parent.namespaceURI;
	this._next = null;
	this._parent = parent;
	this.__data__ = datum;
}
EnterNode.prototype = {
	constructor: EnterNode,
	appendChild: function(child) {
		return this._parent.insertBefore(child, this._next);
	},
	insertBefore: function(child, next) {
		return this._parent.insertBefore(child, next);
	},
	querySelector: function(selector) {
		return this._parent.querySelector(selector);
	},
	querySelectorAll: function(selector) {
		return this._parent.querySelectorAll(selector);
	}
};
//#endregion
//#region node_modules/d3-selection/src/constant.js
function constant_default$2(x) {
	return function() {
		return x;
	};
}
//#endregion
//#region node_modules/d3-selection/src/selection/data.js
function bindIndex(parent, group, enter, update, exit, data) {
	var i = 0, node, groupLength = group.length, dataLength = data.length;
	for (; i < dataLength; ++i) if (node = group[i]) {
		node.__data__ = data[i];
		update[i] = node;
	} else enter[i] = new EnterNode(parent, data[i]);
	for (; i < groupLength; ++i) if (node = group[i]) exit[i] = node;
}
function bindKey(parent, group, enter, update, exit, data, key) {
	var i, node, nodeByKeyValue = /* @__PURE__ */ new Map(), groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
	for (i = 0; i < groupLength; ++i) if (node = group[i]) {
		keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
		if (nodeByKeyValue.has(keyValue)) exit[i] = node;
		else nodeByKeyValue.set(keyValue, node);
	}
	for (i = 0; i < dataLength; ++i) {
		keyValue = key.call(parent, data[i], i, data) + "";
		if (node = nodeByKeyValue.get(keyValue)) {
			update[i] = node;
			node.__data__ = data[i];
			nodeByKeyValue.delete(keyValue);
		} else enter[i] = new EnterNode(parent, data[i]);
	}
	for (i = 0; i < groupLength; ++i) if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) exit[i] = node;
}
function datum(node) {
	return node.__data__;
}
function data_default(value, key) {
	if (!arguments.length) return Array.from(this, datum);
	var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
	if (typeof value !== "function") value = constant_default$2(value);
	for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
		var parent = parents[j], group = groups[j], groupLength = group.length, data = arraylike(value.call(parent, parent && parent.__data__, j, parents)), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength);
		bind(parent, group, enterGroup, updateGroup, exit[j] = new Array(groupLength), data, key);
		for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) if (previous = enterGroup[i0]) {
			if (i0 >= i1) i1 = i0 + 1;
			while (!(next = updateGroup[i1]) && ++i1 < dataLength);
			previous._next = next || null;
		}
	}
	update = new Selection$1(update, parents);
	update._enter = enter;
	update._exit = exit;
	return update;
}
function arraylike(data) {
	return typeof data === "object" && "length" in data ? data : Array.from(data);
}
//#endregion
//#region node_modules/d3-selection/src/selection/exit.js
function exit_default() {
	return new Selection$1(this._exit || this._groups.map(sparse_default), this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/join.js
function join_default(onenter, onupdate, onexit) {
	var enter = this.enter(), update = this, exit = this.exit();
	if (typeof onenter === "function") {
		enter = onenter(enter);
		if (enter) enter = enter.selection();
	} else enter = enter.append(onenter + "");
	if (onupdate != null) {
		update = onupdate(update);
		if (update) update = update.selection();
	}
	if (onexit == null) exit.remove();
	else onexit(exit);
	return enter && update ? enter.merge(update).order() : update;
}
//#endregion
//#region node_modules/d3-selection/src/selection/merge.js
function merge_default$1(context) {
	var selection = context.selection ? context.selection() : context;
	for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) if (node = group0[i] || group1[i]) merge[i] = node;
	for (; j < m0; ++j) merges[j] = groups0[j];
	return new Selection$1(merges, this._parents);
}
//#endregion
//#region node_modules/d3-selection/src/selection/order.js
function order_default() {
	for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) if (node = group[i]) {
		if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
		next = node;
	}
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/sort.js
function sort_default(compare) {
	if (!compare) compare = ascending;
	function compareNode(a, b) {
		return a && b ? compare(a.__data__, b.__data__) : !a - !b;
	}
	for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
		for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) if (node = group[i]) sortgroup[i] = node;
		sortgroup.sort(compareNode);
	}
	return new Selection$1(sortgroups, this._parents).order();
}
function ascending(a, b) {
	return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
//#endregion
//#region node_modules/d3-selection/src/selection/call.js
function call_default() {
	var callback = arguments[0];
	arguments[0] = this;
	callback.apply(null, arguments);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/nodes.js
function nodes_default() {
	return Array.from(this);
}
//#endregion
//#region node_modules/d3-selection/src/selection/node.js
function node_default() {
	for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
		var node = group[i];
		if (node) return node;
	}
	return null;
}
//#endregion
//#region node_modules/d3-selection/src/selection/size.js
function size_default() {
	let size = 0;
	for (const node of this) ++size;
	return size;
}
//#endregion
//#region node_modules/d3-selection/src/selection/empty.js
function empty_default() {
	return !this.node();
}
//#endregion
//#region node_modules/d3-selection/src/selection/each.js
function each_default(callback) {
	for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) if (node = group[i]) callback.call(node, node.__data__, i, group);
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/attr.js
function attrRemove$1(name) {
	return function() {
		this.removeAttribute(name);
	};
}
function attrRemoveNS$1(fullname) {
	return function() {
		this.removeAttributeNS(fullname.space, fullname.local);
	};
}
function attrConstant$1(name, value) {
	return function() {
		this.setAttribute(name, value);
	};
}
function attrConstantNS$1(fullname, value) {
	return function() {
		this.setAttributeNS(fullname.space, fullname.local, value);
	};
}
function attrFunction$1(name, value) {
	return function() {
		var v = value.apply(this, arguments);
		if (v == null) this.removeAttribute(name);
		else this.setAttribute(name, v);
	};
}
function attrFunctionNS$1(fullname, value) {
	return function() {
		var v = value.apply(this, arguments);
		if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
		else this.setAttributeNS(fullname.space, fullname.local, v);
	};
}
function attr_default$1(name, value) {
	var fullname = namespace_default(name);
	if (arguments.length < 2) {
		var node = this.node();
		return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
	}
	return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
}
//#endregion
//#region node_modules/d3-selection/src/window.js
function window_default(node) {
	return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
}
//#endregion
//#region node_modules/d3-selection/src/selection/style.js
function styleRemove$1(name) {
	return function() {
		this.style.removeProperty(name);
	};
}
function styleConstant$1(name, value, priority) {
	return function() {
		this.style.setProperty(name, value, priority);
	};
}
function styleFunction$1(name, value, priority) {
	return function() {
		var v = value.apply(this, arguments);
		if (v == null) this.style.removeProperty(name);
		else this.style.setProperty(name, v, priority);
	};
}
function style_default$1(name, value, priority) {
	return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
}
function styleValue(node, name) {
	return node.style.getPropertyValue(name) || window_default(node).getComputedStyle(node, null).getPropertyValue(name);
}
//#endregion
//#region node_modules/d3-selection/src/selection/property.js
function propertyRemove(name) {
	return function() {
		delete this[name];
	};
}
function propertyConstant(name, value) {
	return function() {
		this[name] = value;
	};
}
function propertyFunction(name, value) {
	return function() {
		var v = value.apply(this, arguments);
		if (v == null) delete this[name];
		else this[name] = v;
	};
}
function property_default(name, value) {
	return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
}
//#endregion
//#region node_modules/d3-selection/src/selection/classed.js
function classArray(string) {
	return string.trim().split(/^|\s+/);
}
function classList(node) {
	return node.classList || new ClassList(node);
}
function ClassList(node) {
	this._node = node;
	this._names = classArray(node.getAttribute("class") || "");
}
ClassList.prototype = {
	add: function(name) {
		if (this._names.indexOf(name) < 0) {
			this._names.push(name);
			this._node.setAttribute("class", this._names.join(" "));
		}
	},
	remove: function(name) {
		var i = this._names.indexOf(name);
		if (i >= 0) {
			this._names.splice(i, 1);
			this._node.setAttribute("class", this._names.join(" "));
		}
	},
	contains: function(name) {
		return this._names.indexOf(name) >= 0;
	}
};
function classedAdd(node, names) {
	var list = classList(node), i = -1, n = names.length;
	while (++i < n) list.add(names[i]);
}
function classedRemove(node, names) {
	var list = classList(node), i = -1, n = names.length;
	while (++i < n) list.remove(names[i]);
}
function classedTrue(names) {
	return function() {
		classedAdd(this, names);
	};
}
function classedFalse(names) {
	return function() {
		classedRemove(this, names);
	};
}
function classedFunction(names, value) {
	return function() {
		(value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
	};
}
function classed_default(name, value) {
	var names = classArray(name + "");
	if (arguments.length < 2) {
		var list = classList(this.node()), i = -1, n = names.length;
		while (++i < n) if (!list.contains(names[i])) return false;
		return true;
	}
	return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
}
//#endregion
//#region node_modules/d3-selection/src/selection/text.js
function textRemove() {
	this.textContent = "";
}
function textConstant$1(value) {
	return function() {
		this.textContent = value;
	};
}
function textFunction$1(value) {
	return function() {
		var v = value.apply(this, arguments);
		this.textContent = v == null ? "" : v;
	};
}
function text_default$1(value) {
	return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
}
//#endregion
//#region node_modules/d3-selection/src/selection/html.js
function htmlRemove() {
	this.innerHTML = "";
}
function htmlConstant(value) {
	return function() {
		this.innerHTML = value;
	};
}
function htmlFunction(value) {
	return function() {
		var v = value.apply(this, arguments);
		this.innerHTML = v == null ? "" : v;
	};
}
function html_default(value) {
	return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
}
//#endregion
//#region node_modules/d3-selection/src/selection/raise.js
function raise() {
	if (this.nextSibling) this.parentNode.appendChild(this);
}
function raise_default() {
	return this.each(raise);
}
//#endregion
//#region node_modules/d3-selection/src/selection/lower.js
function lower() {
	if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function lower_default() {
	return this.each(lower);
}
//#endregion
//#region node_modules/d3-selection/src/selection/append.js
function append_default(name) {
	var create = typeof name === "function" ? name : creator_default(name);
	return this.select(function() {
		return this.appendChild(create.apply(this, arguments));
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/insert.js
function constantNull() {
	return null;
}
function insert_default(name, before) {
	var create = typeof name === "function" ? name : creator_default(name), select = before == null ? constantNull : typeof before === "function" ? before : selector_default(before);
	return this.select(function() {
		return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
	});
}
//#endregion
//#region node_modules/d3-selection/src/selection/remove.js
function remove() {
	var parent = this.parentNode;
	if (parent) parent.removeChild(this);
}
function remove_default$1() {
	return this.each(remove);
}
//#endregion
//#region node_modules/d3-selection/src/selection/clone.js
function selection_cloneShallow() {
	var clone = this.cloneNode(false), parent = this.parentNode;
	return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function selection_cloneDeep() {
	var clone = this.cloneNode(true), parent = this.parentNode;
	return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
}
function clone_default(deep) {
	return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
}
//#endregion
//#region node_modules/d3-selection/src/selection/datum.js
function datum_default(value) {
	return arguments.length ? this.property("__data__", value) : this.node().__data__;
}
//#endregion
//#region node_modules/d3-selection/src/selection/on.js
function contextListener(listener) {
	return function(event) {
		listener.call(this, event, this.__data__);
	};
}
function parseTypenames(typenames) {
	return typenames.trim().split(/^|\s+/).map(function(t) {
		var name = "", i = t.indexOf(".");
		if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
		return {
			type: t,
			name
		};
	});
}
function onRemove(typename) {
	return function() {
		var on = this.__on;
		if (!on) return;
		for (var j = 0, i = -1, m = on.length, o; j < m; ++j) if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) this.removeEventListener(o.type, o.listener, o.options);
		else on[++i] = o;
		if (++i) on.length = i;
		else delete this.__on;
	};
}
function onAdd(typename, value, options) {
	return function() {
		var on = this.__on, o, listener = contextListener(value);
		if (on) {
			for (var j = 0, m = on.length; j < m; ++j) if ((o = on[j]).type === typename.type && o.name === typename.name) {
				this.removeEventListener(o.type, o.listener, o.options);
				this.addEventListener(o.type, o.listener = listener, o.options = options);
				o.value = value;
				return;
			}
		}
		this.addEventListener(typename.type, listener, options);
		o = {
			type: typename.type,
			name: typename.name,
			value,
			listener,
			options
		};
		if (!on) this.__on = [o];
		else on.push(o);
	};
}
function on_default$1(typename, value, options) {
	var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;
	if (arguments.length < 2) {
		var on = this.node().__on;
		if (on) {
			for (var j = 0, m = on.length, o; j < m; ++j) for (i = 0, o = on[j]; i < n; ++i) if ((t = typenames[i]).type === o.type && t.name === o.name) return o.value;
		}
		return;
	}
	on = value ? onAdd : onRemove;
	for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
	return this;
}
//#endregion
//#region node_modules/d3-selection/src/selection/dispatch.js
function dispatchEvent(node, type, params) {
	var window = window_default(node), event = window.CustomEvent;
	if (typeof event === "function") event = new event(type, params);
	else {
		event = window.document.createEvent("Event");
		if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
		else event.initEvent(type, false, false);
	}
	node.dispatchEvent(event);
}
function dispatchConstant(type, params) {
	return function() {
		return dispatchEvent(this, type, params);
	};
}
function dispatchFunction(type, params) {
	return function() {
		return dispatchEvent(this, type, params.apply(this, arguments));
	};
}
function dispatch_default(type, params) {
	return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
}
//#endregion
//#region node_modules/d3-selection/src/selection/iterator.js
function* iterator_default() {
	for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) if (node = group[i]) yield node;
}
//#endregion
//#region node_modules/d3-selection/src/selection/index.js
var root = [null];
function Selection$1(groups, parents) {
	this._groups = groups;
	this._parents = parents;
}
function selection() {
	return new Selection$1([[document.documentElement]], root);
}
function selection_selection() {
	return this;
}
Selection$1.prototype = selection.prototype = {
	constructor: Selection$1,
	select: select_default$2,
	selectAll: selectAll_default$1,
	selectChild: selectChild_default,
	selectChildren: selectChildren_default,
	filter: filter_default$1,
	data: data_default,
	enter: enter_default,
	exit: exit_default,
	join: join_default,
	merge: merge_default$1,
	selection: selection_selection,
	order: order_default,
	sort: sort_default,
	call: call_default,
	nodes: nodes_default,
	node: node_default,
	size: size_default,
	empty: empty_default,
	each: each_default,
	attr: attr_default$1,
	style: style_default$1,
	property: property_default,
	classed: classed_default,
	text: text_default$1,
	html: html_default,
	raise: raise_default,
	lower: lower_default,
	append: append_default,
	insert: insert_default,
	remove: remove_default$1,
	clone: clone_default,
	datum: datum_default,
	on: on_default$1,
	dispatch: dispatch_default,
	[Symbol.iterator]: iterator_default
};
//#endregion
//#region node_modules/d3-selection/src/select.js
function select_default$1(selector) {
	return typeof selector === "string" ? new Selection$1([[document.querySelector(selector)]], [document.documentElement]) : new Selection$1([[selector]], root);
}
//#endregion
//#region node_modules/d3-selection/src/sourceEvent.js
function sourceEvent_default(event) {
	let sourceEvent;
	while (sourceEvent = event.sourceEvent) event = sourceEvent;
	return event;
}
//#endregion
//#region node_modules/d3-selection/src/pointer.js
function pointer_default(event, node) {
	event = sourceEvent_default(event);
	if (node === void 0) node = event.currentTarget;
	if (node) {
		var svg = node.ownerSVGElement || node;
		if (svg.createSVGPoint) {
			var point = svg.createSVGPoint();
			point.x = event.clientX, point.y = event.clientY;
			point = point.matrixTransform(node.getScreenCTM().inverse());
			return [point.x, point.y];
		}
		if (node.getBoundingClientRect) {
			var rect = node.getBoundingClientRect();
			return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
		}
	}
	return [event.pageX, event.pageY];
}
//#endregion
//#region node_modules/d3-drag/src/noevent.js
var nonpassive = { passive: false };
var nonpassivecapture = {
	capture: true,
	passive: false
};
function nopropagation$1(event) {
	event.stopImmediatePropagation();
}
function noevent_default$1(event) {
	event.preventDefault();
	event.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-drag/src/nodrag.js
function nodrag_default(view) {
	var root = view.document.documentElement, selection = select_default$1(view).on("dragstart.drag", noevent_default$1, nonpassivecapture);
	if ("onselectstart" in root) selection.on("selectstart.drag", noevent_default$1, nonpassivecapture);
	else {
		root.__noselect = root.style.MozUserSelect;
		root.style.MozUserSelect = "none";
	}
}
function yesdrag(view, noclick) {
	var root = view.document.documentElement, selection = select_default$1(view).on("dragstart.drag", null);
	if (noclick) {
		selection.on("click.drag", noevent_default$1, nonpassivecapture);
		setTimeout(function() {
			selection.on("click.drag", null);
		}, 0);
	}
	if ("onselectstart" in root) selection.on("selectstart.drag", null);
	else {
		root.style.MozUserSelect = root.__noselect;
		delete root.__noselect;
	}
}
//#endregion
//#region node_modules/d3-drag/src/constant.js
var constant_default$1 = (x) => () => x;
//#endregion
//#region node_modules/d3-drag/src/event.js
function DragEvent(type, { sourceEvent, subject, target, identifier, active, x, y, dx, dy, dispatch }) {
	Object.defineProperties(this, {
		type: {
			value: type,
			enumerable: true,
			configurable: true
		},
		sourceEvent: {
			value: sourceEvent,
			enumerable: true,
			configurable: true
		},
		subject: {
			value: subject,
			enumerable: true,
			configurable: true
		},
		target: {
			value: target,
			enumerable: true,
			configurable: true
		},
		identifier: {
			value: identifier,
			enumerable: true,
			configurable: true
		},
		active: {
			value: active,
			enumerable: true,
			configurable: true
		},
		x: {
			value: x,
			enumerable: true,
			configurable: true
		},
		y: {
			value: y,
			enumerable: true,
			configurable: true
		},
		dx: {
			value: dx,
			enumerable: true,
			configurable: true
		},
		dy: {
			value: dy,
			enumerable: true,
			configurable: true
		},
		_: { value: dispatch }
	});
}
DragEvent.prototype.on = function() {
	var value = this._.on.apply(this._, arguments);
	return value === this._ ? this : value;
};
//#endregion
//#region node_modules/d3-drag/src/drag.js
function defaultFilter$1(event) {
	return !event.ctrlKey && !event.button;
}
function defaultContainer() {
	return this.parentNode;
}
function defaultSubject(event, d) {
	return d == null ? {
		x: event.x,
		y: event.y
	} : d;
}
function defaultTouchable$1() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function drag_default() {
	var filter = defaultFilter$1, container = defaultContainer, subject = defaultSubject, touchable = defaultTouchable$1, gestures = {}, listeners = dispatch("start", "drag", "end"), active = 0, mousedownx, mousedowny, mousemoving, touchending, clickDistance2 = 0;
	function drag(selection) {
		selection.on("mousedown.drag", mousedowned).filter(touchable).on("touchstart.drag", touchstarted).on("touchmove.drag", touchmoved, nonpassive).on("touchend.drag touchcancel.drag", touchended).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	function mousedowned(event, d) {
		if (touchending || !filter.call(this, event, d)) return;
		var gesture = beforestart(this, container.call(this, event, d), event, d, "mouse");
		if (!gesture) return;
		select_default$1(event.view).on("mousemove.drag", mousemoved, nonpassivecapture).on("mouseup.drag", mouseupped, nonpassivecapture);
		nodrag_default(event.view);
		nopropagation$1(event);
		mousemoving = false;
		mousedownx = event.clientX;
		mousedowny = event.clientY;
		gesture("start", event);
	}
	function mousemoved(event) {
		noevent_default$1(event);
		if (!mousemoving) {
			var dx = event.clientX - mousedownx, dy = event.clientY - mousedowny;
			mousemoving = dx * dx + dy * dy > clickDistance2;
		}
		gestures.mouse("drag", event);
	}
	function mouseupped(event) {
		select_default$1(event.view).on("mousemove.drag mouseup.drag", null);
		yesdrag(event.view, mousemoving);
		noevent_default$1(event);
		gestures.mouse("end", event);
	}
	function touchstarted(event, d) {
		if (!filter.call(this, event, d)) return;
		var touches = event.changedTouches, c = container.call(this, event, d), n = touches.length, i, gesture;
		for (i = 0; i < n; ++i) if (gesture = beforestart(this, c, event, d, touches[i].identifier, touches[i])) {
			nopropagation$1(event);
			gesture("start", event, touches[i]);
		}
	}
	function touchmoved(event) {
		var touches = event.changedTouches, n = touches.length, i, gesture;
		for (i = 0; i < n; ++i) if (gesture = gestures[touches[i].identifier]) {
			noevent_default$1(event);
			gesture("drag", event, touches[i]);
		}
	}
	function touchended(event) {
		var touches = event.changedTouches, n = touches.length, i, gesture;
		if (touchending) clearTimeout(touchending);
		touchending = setTimeout(function() {
			touchending = null;
		}, 500);
		for (i = 0; i < n; ++i) if (gesture = gestures[touches[i].identifier]) {
			nopropagation$1(event);
			gesture("end", event, touches[i]);
		}
	}
	function beforestart(that, container, event, d, identifier, touch) {
		var dispatch = listeners.copy(), p = pointer_default(touch || event, container), dx, dy, s;
		if ((s = subject.call(that, new DragEvent("beforestart", {
			sourceEvent: event,
			target: drag,
			identifier,
			active,
			x: p[0],
			y: p[1],
			dx: 0,
			dy: 0,
			dispatch
		}), d)) == null) return;
		dx = s.x - p[0] || 0;
		dy = s.y - p[1] || 0;
		return function gesture(type, event, touch) {
			var p0 = p, n;
			switch (type) {
				case "start":
					gestures[identifier] = gesture, n = active++;
					break;
				case "end": delete gestures[identifier], --active;
				case "drag":
					p = pointer_default(touch || event, container), n = active;
					break;
			}
			dispatch.call(type, that, new DragEvent(type, {
				sourceEvent: event,
				subject: s,
				target: drag,
				identifier,
				active: n,
				x: p[0] + dx,
				y: p[1] + dy,
				dx: p[0] - p0[0],
				dy: p[1] - p0[1],
				dispatch
			}), d);
		};
	}
	drag.filter = function(_) {
		return arguments.length ? (filter = typeof _ === "function" ? _ : constant_default$1(!!_), drag) : filter;
	};
	drag.container = function(_) {
		return arguments.length ? (container = typeof _ === "function" ? _ : constant_default$1(_), drag) : container;
	};
	drag.subject = function(_) {
		return arguments.length ? (subject = typeof _ === "function" ? _ : constant_default$1(_), drag) : subject;
	};
	drag.touchable = function(_) {
		return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default$1(!!_), drag) : touchable;
	};
	drag.on = function() {
		var value = listeners.on.apply(listeners, arguments);
		return value === listeners ? drag : value;
	};
	drag.clickDistance = function(_) {
		return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
	};
	return drag;
}
//#endregion
//#region node_modules/d3-timer/src/timer.js
var frame = 0, timeout = 0, interval = 0, pokeDelay = 1e3, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = typeof performance === "object" && performance.now ? performance : Date, setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
	setTimeout(f, 17);
};
function now() {
	return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}
function clearNow() {
	clockNow = 0;
}
function Timer() {
	this._call = this._time = this._next = null;
}
Timer.prototype = timer.prototype = {
	constructor: Timer,
	restart: function(callback, delay, time) {
		if (typeof callback !== "function") throw new TypeError("callback is not a function");
		time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
		if (!this._next && taskTail !== this) {
			if (taskTail) taskTail._next = this;
			else taskHead = this;
			taskTail = this;
		}
		this._call = callback;
		this._time = time;
		sleep();
	},
	stop: function() {
		if (this._call) {
			this._call = null;
			this._time = Infinity;
			sleep();
		}
	}
};
function timer(callback, delay, time) {
	var t = new Timer();
	t.restart(callback, delay, time);
	return t;
}
function timerFlush() {
	now();
	++frame;
	var t = taskHead, e;
	while (t) {
		if ((e = clockNow - t._time) >= 0) t._call.call(void 0, e);
		t = t._next;
	}
	--frame;
}
function wake() {
	clockNow = (clockLast = clock.now()) + clockSkew;
	frame = timeout = 0;
	try {
		timerFlush();
	} finally {
		frame = 0;
		nap();
		clockNow = 0;
	}
}
function poke() {
	var now = clock.now(), delay = now - clockLast;
	if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}
function nap() {
	var t0, t1 = taskHead, t2, time = Infinity;
	while (t1) if (t1._call) {
		if (time > t1._time) time = t1._time;
		t0 = t1, t1 = t1._next;
	} else {
		t2 = t1._next, t1._next = null;
		t1 = t0 ? t0._next = t2 : taskHead = t2;
	}
	taskTail = t0;
	sleep(time);
}
function sleep(time) {
	if (frame) return;
	if (timeout) timeout = clearTimeout(timeout);
	if (time - clockNow > 24) {
		if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
		if (interval) interval = clearInterval(interval);
	} else {
		if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
		frame = 1, setFrame(wake);
	}
}
//#endregion
//#region node_modules/d3-timer/src/timeout.js
function timeout_default(callback, delay, time) {
	var t = new Timer();
	delay = delay == null ? 0 : +delay;
	t.restart((elapsed) => {
		t.stop();
		callback(elapsed + delay);
	}, delay, time);
	return t;
}
//#endregion
//#region node_modules/d3-transition/src/transition/schedule.js
var emptyOn = dispatch("start", "end", "cancel", "interrupt");
var emptyTween = [];
function schedule_default(node, name, id, index, group, timing) {
	var schedules = node.__transition;
	if (!schedules) node.__transition = {};
	else if (id in schedules) return;
	create(node, id, {
		name,
		index,
		group,
		on: emptyOn,
		tween: emptyTween,
		time: timing.time,
		delay: timing.delay,
		duration: timing.duration,
		ease: timing.ease,
		timer: null,
		state: 0
	});
}
function init(node, id) {
	var schedule = get(node, id);
	if (schedule.state > 0) throw new Error("too late; already scheduled");
	return schedule;
}
function set(node, id) {
	var schedule = get(node, id);
	if (schedule.state > 3) throw new Error("too late; already running");
	return schedule;
}
function get(node, id) {
	var schedule = node.__transition;
	if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
	return schedule;
}
function create(node, id, self) {
	var schedules = node.__transition, tween;
	schedules[id] = self;
	self.timer = timer(schedule, 0, self.time);
	function schedule(elapsed) {
		self.state = 1;
		self.timer.restart(start, self.delay, self.time);
		if (self.delay <= elapsed) start(elapsed - self.delay);
	}
	function start(elapsed) {
		var i, j, n, o;
		if (self.state !== 1) return stop();
		for (i in schedules) {
			o = schedules[i];
			if (o.name !== self.name) continue;
			if (o.state === 3) return timeout_default(start);
			if (o.state === 4) {
				o.state = 6;
				o.timer.stop();
				o.on.call("interrupt", node, node.__data__, o.index, o.group);
				delete schedules[i];
			} else if (+i < id) {
				o.state = 6;
				o.timer.stop();
				o.on.call("cancel", node, node.__data__, o.index, o.group);
				delete schedules[i];
			}
		}
		timeout_default(function() {
			if (self.state === 3) {
				self.state = 4;
				self.timer.restart(tick, self.delay, self.time);
				tick(elapsed);
			}
		});
		self.state = 2;
		self.on.call("start", node, node.__data__, self.index, self.group);
		if (self.state !== 2) return;
		self.state = 3;
		tween = new Array(n = self.tween.length);
		for (i = 0, j = -1; i < n; ++i) if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) tween[++j] = o;
		tween.length = j + 1;
	}
	function tick(elapsed) {
		var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = 5, 1), i = -1, n = tween.length;
		while (++i < n) tween[i].call(node, t);
		if (self.state === 5) {
			self.on.call("end", node, node.__data__, self.index, self.group);
			stop();
		}
	}
	function stop() {
		self.state = 6;
		self.timer.stop();
		delete schedules[id];
		for (var i in schedules) return;
		delete node.__transition;
	}
}
//#endregion
//#region node_modules/d3-transition/src/interrupt.js
function interrupt_default$1(node, name) {
	var schedules = node.__transition, schedule, active, empty = true, i;
	if (!schedules) return;
	name = name == null ? null : name + "";
	for (i in schedules) {
		if ((schedule = schedules[i]).name !== name) {
			empty = false;
			continue;
		}
		active = schedule.state > 2 && schedule.state < 5;
		schedule.state = 6;
		schedule.timer.stop();
		schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
		delete schedules[i];
	}
	if (empty) delete node.__transition;
}
//#endregion
//#region node_modules/d3-transition/src/selection/interrupt.js
function interrupt_default(name) {
	return this.each(function() {
		interrupt_default$1(this, name);
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/tween.js
function tweenRemove(id, name) {
	var tween0, tween1;
	return function() {
		var schedule = set(this, id), tween = schedule.tween;
		if (tween !== tween0) {
			tween1 = tween0 = tween;
			for (var i = 0, n = tween1.length; i < n; ++i) if (tween1[i].name === name) {
				tween1 = tween1.slice();
				tween1.splice(i, 1);
				break;
			}
		}
		schedule.tween = tween1;
	};
}
function tweenFunction(id, name, value) {
	var tween0, tween1;
	if (typeof value !== "function") throw new Error();
	return function() {
		var schedule = set(this, id), tween = schedule.tween;
		if (tween !== tween0) {
			tween1 = (tween0 = tween).slice();
			for (var t = {
				name,
				value
			}, i = 0, n = tween1.length; i < n; ++i) if (tween1[i].name === name) {
				tween1[i] = t;
				break;
			}
			if (i === n) tween1.push(t);
		}
		schedule.tween = tween1;
	};
}
function tween_default(name, value) {
	var id = this._id;
	name += "";
	if (arguments.length < 2) {
		var tween = get(this.node(), id).tween;
		for (var i = 0, n = tween.length, t; i < n; ++i) if ((t = tween[i]).name === name) return t.value;
		return null;
	}
	return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
}
function tweenValue(transition, name, value) {
	var id = transition._id;
	transition.each(function() {
		var schedule = set(this, id);
		(schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
	});
	return function(node) {
		return get(node, id).value[name];
	};
}
//#endregion
//#region node_modules/d3-transition/src/transition/interpolate.js
function interpolate_default(a, b) {
	var c;
	return (typeof b === "number" ? number_default : b instanceof color ? rgb_default : (c = color(b)) ? (b = c, rgb_default) : string_default)(a, b);
}
//#endregion
//#region node_modules/d3-transition/src/transition/attr.js
function attrRemove(name) {
	return function() {
		this.removeAttribute(name);
	};
}
function attrRemoveNS(fullname) {
	return function() {
		this.removeAttributeNS(fullname.space, fullname.local);
	};
}
function attrConstant(name, interpolate, value1) {
	var string00, string1 = value1 + "", interpolate0;
	return function() {
		var string0 = this.getAttribute(name);
		return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	};
}
function attrConstantNS(fullname, interpolate, value1) {
	var string00, string1 = value1 + "", interpolate0;
	return function() {
		var string0 = this.getAttributeNS(fullname.space, fullname.local);
		return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	};
}
function attrFunction(name, interpolate, value) {
	var string00, string10, interpolate0;
	return function() {
		var string0, value1 = value(this), string1;
		if (value1 == null) return void this.removeAttribute(name);
		string0 = this.getAttribute(name);
		string1 = value1 + "";
		return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	};
}
function attrFunctionNS(fullname, interpolate, value) {
	var string00, string10, interpolate0;
	return function() {
		var string0, value1 = value(this), string1;
		if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
		string0 = this.getAttributeNS(fullname.space, fullname.local);
		string1 = value1 + "";
		return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	};
}
function attr_default(name, value) {
	var fullname = namespace_default(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate_default;
	return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
}
//#endregion
//#region node_modules/d3-transition/src/transition/attrTween.js
function attrInterpolate(name, i) {
	return function(t) {
		this.setAttribute(name, i.call(this, t));
	};
}
function attrInterpolateNS(fullname, i) {
	return function(t) {
		this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
	};
}
function attrTweenNS(fullname, value) {
	var t0, i0;
	function tween() {
		var i = value.apply(this, arguments);
		if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
		return t0;
	}
	tween._value = value;
	return tween;
}
function attrTween(name, value) {
	var t0, i0;
	function tween() {
		var i = value.apply(this, arguments);
		if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
		return t0;
	}
	tween._value = value;
	return tween;
}
function attrTween_default(name, value) {
	var key = "attr." + name;
	if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	if (value == null) return this.tween(key, null);
	if (typeof value !== "function") throw new Error();
	var fullname = namespace_default(name);
	return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
}
//#endregion
//#region node_modules/d3-transition/src/transition/delay.js
function delayFunction(id, value) {
	return function() {
		init(this, id).delay = +value.apply(this, arguments);
	};
}
function delayConstant(id, value) {
	return value = +value, function() {
		init(this, id).delay = value;
	};
}
function delay_default(value) {
	var id = this._id;
	return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get(this.node(), id).delay;
}
//#endregion
//#region node_modules/d3-transition/src/transition/duration.js
function durationFunction(id, value) {
	return function() {
		set(this, id).duration = +value.apply(this, arguments);
	};
}
function durationConstant(id, value) {
	return value = +value, function() {
		set(this, id).duration = value;
	};
}
function duration_default(value) {
	var id = this._id;
	return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get(this.node(), id).duration;
}
//#endregion
//#region node_modules/d3-transition/src/transition/ease.js
function easeConstant(id, value) {
	if (typeof value !== "function") throw new Error();
	return function() {
		set(this, id).ease = value;
	};
}
function ease_default(value) {
	var id = this._id;
	return arguments.length ? this.each(easeConstant(id, value)) : get(this.node(), id).ease;
}
//#endregion
//#region node_modules/d3-transition/src/transition/easeVarying.js
function easeVarying(id, value) {
	return function() {
		var v = value.apply(this, arguments);
		if (typeof v !== "function") throw new Error();
		set(this, id).ease = v;
	};
}
function easeVarying_default(value) {
	if (typeof value !== "function") throw new Error();
	return this.each(easeVarying(this._id, value));
}
//#endregion
//#region node_modules/d3-transition/src/transition/filter.js
function filter_default(match) {
	if (typeof match !== "function") match = matcher_default(match);
	for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) if ((node = group[i]) && match.call(node, node.__data__, i, group)) subgroup.push(node);
	return new Transition(subgroups, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/merge.js
function merge_default(transition) {
	if (transition._id !== this._id) throw new Error();
	for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) if (node = group0[i] || group1[i]) merge[i] = node;
	for (; j < m0; ++j) merges[j] = groups0[j];
	return new Transition(merges, this._parents, this._name, this._id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/on.js
function start(name) {
	return (name + "").trim().split(/^|\s+/).every(function(t) {
		var i = t.indexOf(".");
		if (i >= 0) t = t.slice(0, i);
		return !t || t === "start";
	});
}
function onFunction(id, name, listener) {
	var on0, on1, sit = start(name) ? init : set;
	return function() {
		var schedule = sit(this, id), on = schedule.on;
		if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
		schedule.on = on1;
	};
}
function on_default(name, listener) {
	var id = this._id;
	return arguments.length < 2 ? get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
}
//#endregion
//#region node_modules/d3-transition/src/transition/remove.js
function removeFunction(id) {
	return function() {
		var parent = this.parentNode;
		for (var i in this.__transition) if (+i !== id) return;
		if (parent) parent.removeChild(this);
	};
}
function remove_default() {
	return this.on("end.remove", removeFunction(this._id));
}
//#endregion
//#region node_modules/d3-transition/src/transition/select.js
function select_default(select) {
	var name = this._name, id = this._id;
	if (typeof select !== "function") select = selector_default(select);
	for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
		if ("__data__" in node) subnode.__data__ = node.__data__;
		subgroup[i] = subnode;
		schedule_default(subgroup[i], name, id, i, subgroup, get(node, id));
	}
	return new Transition(subgroups, this._parents, name, id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selectAll.js
function selectAll_default(select) {
	var name = this._name, id = this._id;
	if (typeof select !== "function") select = selectorAll_default(select);
	for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) if (node = group[i]) {
		for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) if (child = children[k]) schedule_default(child, name, id, k, children, inherit);
		subgroups.push(children);
		parents.push(node);
	}
	return new Transition(subgroups, parents, name, id);
}
//#endregion
//#region node_modules/d3-transition/src/transition/selection.js
var Selection = selection.prototype.constructor;
function selection_default() {
	return new Selection(this._groups, this._parents);
}
//#endregion
//#region node_modules/d3-transition/src/transition/style.js
function styleNull(name, interpolate) {
	var string00, string10, interpolate0;
	return function() {
		var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), styleValue(this, name));
		return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
	};
}
function styleRemove(name) {
	return function() {
		this.style.removeProperty(name);
	};
}
function styleConstant(name, interpolate, value1) {
	var string00, string1 = value1 + "", interpolate0;
	return function() {
		var string0 = styleValue(this, name);
		return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
	};
}
function styleFunction(name, interpolate, value) {
	var string00, string10, interpolate0;
	return function() {
		var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + "";
		if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
		return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
	};
}
function styleMaybeRemove(id, name) {
	var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
	return function() {
		var schedule = set(this, id), on = schedule.on, listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : void 0;
		if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
		schedule.on = on1;
	};
}
function style_default(name, value, priority) {
	var i = (name += "") === "transform" ? interpolateTransformCss : interpolate_default;
	return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
}
//#endregion
//#region node_modules/d3-transition/src/transition/styleTween.js
function styleInterpolate(name, i, priority) {
	return function(t) {
		this.style.setProperty(name, i.call(this, t), priority);
	};
}
function styleTween(name, value, priority) {
	var t, i0;
	function tween() {
		var i = value.apply(this, arguments);
		if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
		return t;
	}
	tween._value = value;
	return tween;
}
function styleTween_default(name, value, priority) {
	var key = "style." + (name += "");
	if (arguments.length < 2) return (key = this.tween(key)) && key._value;
	if (value == null) return this.tween(key, null);
	if (typeof value !== "function") throw new Error();
	return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
}
//#endregion
//#region node_modules/d3-transition/src/transition/text.js
function textConstant(value) {
	return function() {
		this.textContent = value;
	};
}
function textFunction(value) {
	return function() {
		var value1 = value(this);
		this.textContent = value1 == null ? "" : value1;
	};
}
function text_default(value) {
	return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
}
//#endregion
//#region node_modules/d3-transition/src/transition/textTween.js
function textInterpolate(i) {
	return function(t) {
		this.textContent = i.call(this, t);
	};
}
function textTween(value) {
	var t0, i0;
	function tween() {
		var i = value.apply(this, arguments);
		if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
		return t0;
	}
	tween._value = value;
	return tween;
}
function textTween_default(value) {
	var key = "text";
	if (arguments.length < 1) return (key = this.tween(key)) && key._value;
	if (value == null) return this.tween(key, null);
	if (typeof value !== "function") throw new Error();
	return this.tween(key, textTween(value));
}
//#endregion
//#region node_modules/d3-transition/src/transition/transition.js
function transition_default$1() {
	var name = this._name, id0 = this._id, id1 = newId();
	for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) if (node = group[i]) {
		var inherit = get(node, id0);
		schedule_default(node, name, id1, i, group, {
			time: inherit.time + inherit.delay + inherit.duration,
			delay: 0,
			duration: inherit.duration,
			ease: inherit.ease
		});
	}
	return new Transition(groups, this._parents, name, id1);
}
//#endregion
//#region node_modules/d3-transition/src/transition/end.js
function end_default() {
	var on0, on1, that = this, id = that._id, size = that.size();
	return new Promise(function(resolve, reject) {
		var cancel = { value: reject }, end = { value: function() {
			if (--size === 0) resolve();
		} };
		that.each(function() {
			var schedule = set(this, id), on = schedule.on;
			if (on !== on0) {
				on1 = (on0 = on).copy();
				on1._.cancel.push(cancel);
				on1._.interrupt.push(cancel);
				on1._.end.push(end);
			}
			schedule.on = on1;
		});
		if (size === 0) resolve();
	});
}
//#endregion
//#region node_modules/d3-transition/src/transition/index.js
var id = 0;
function Transition(groups, parents, name, id) {
	this._groups = groups;
	this._parents = parents;
	this._name = name;
	this._id = id;
}
function transition(name) {
	return selection().transition(name);
}
function newId() {
	return ++id;
}
var selection_prototype = selection.prototype;
Transition.prototype = transition.prototype = {
	constructor: Transition,
	select: select_default,
	selectAll: selectAll_default,
	selectChild: selection_prototype.selectChild,
	selectChildren: selection_prototype.selectChildren,
	filter: filter_default,
	merge: merge_default,
	selection: selection_default,
	transition: transition_default$1,
	call: selection_prototype.call,
	nodes: selection_prototype.nodes,
	node: selection_prototype.node,
	size: selection_prototype.size,
	empty: selection_prototype.empty,
	each: selection_prototype.each,
	on: on_default,
	attr: attr_default,
	attrTween: attrTween_default,
	style: style_default,
	styleTween: styleTween_default,
	text: text_default,
	textTween: textTween_default,
	remove: remove_default,
	tween: tween_default,
	delay: delay_default,
	duration: duration_default,
	ease: ease_default,
	easeVarying: easeVarying_default,
	end: end_default,
	[Symbol.iterator]: selection_prototype[Symbol.iterator]
};
//#endregion
//#region node_modules/d3-ease/src/cubic.js
function cubicInOut(t) {
	return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
//#endregion
//#region node_modules/d3-transition/src/selection/transition.js
var defaultTiming = {
	time: null,
	delay: 0,
	duration: 250,
	ease: cubicInOut
};
function inherit(node, id) {
	var timing;
	while (!(timing = node.__transition) || !(timing = timing[id])) if (!(node = node.parentNode)) throw new Error(`transition ${id} not found`);
	return timing;
}
function transition_default(name) {
	var id, timing;
	if (name instanceof Transition) id = name._id, name = name._name;
	else id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
	for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) if (node = group[i]) schedule_default(node, name, id, i, group, timing || inherit(node, id));
	return new Transition(groups, this._parents, name, id);
}
//#endregion
//#region node_modules/d3-transition/src/selection/index.js
selection.prototype.interrupt = interrupt_default;
selection.prototype.transition = transition_default;
//#endregion
//#region node_modules/d3-zoom/src/constant.js
var constant_default = (x) => () => x;
//#endregion
//#region node_modules/d3-zoom/src/event.js
function ZoomEvent(type, { sourceEvent, target, transform, dispatch }) {
	Object.defineProperties(this, {
		type: {
			value: type,
			enumerable: true,
			configurable: true
		},
		sourceEvent: {
			value: sourceEvent,
			enumerable: true,
			configurable: true
		},
		target: {
			value: target,
			enumerable: true,
			configurable: true
		},
		transform: {
			value: transform,
			enumerable: true,
			configurable: true
		},
		_: { value: dispatch }
	});
}
//#endregion
//#region node_modules/d3-zoom/src/transform.js
function Transform(k, x, y) {
	this.k = k;
	this.x = x;
	this.y = y;
}
Transform.prototype = {
	constructor: Transform,
	scale: function(k) {
		return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
	},
	translate: function(x, y) {
		return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
	},
	apply: function(point) {
		return [point[0] * this.k + this.x, point[1] * this.k + this.y];
	},
	applyX: function(x) {
		return x * this.k + this.x;
	},
	applyY: function(y) {
		return y * this.k + this.y;
	},
	invert: function(location) {
		return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
	},
	invertX: function(x) {
		return (x - this.x) / this.k;
	},
	invertY: function(y) {
		return (y - this.y) / this.k;
	},
	rescaleX: function(x) {
		return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
	},
	rescaleY: function(y) {
		return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
	},
	toString: function() {
		return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
	}
};
var identity = new Transform(1, 0, 0);
transform.prototype = Transform.prototype;
function transform(node) {
	while (!node.__zoom) if (!(node = node.parentNode)) return identity;
	return node.__zoom;
}
//#endregion
//#region node_modules/d3-zoom/src/noevent.js
function nopropagation(event) {
	event.stopImmediatePropagation();
}
function noevent_default(event) {
	event.preventDefault();
	event.stopImmediatePropagation();
}
//#endregion
//#region node_modules/d3-zoom/src/zoom.js
function defaultFilter(event) {
	return (!event.ctrlKey || event.type === "wheel") && !event.button;
}
function defaultExtent() {
	var e = this;
	if (e instanceof SVGElement) {
		e = e.ownerSVGElement || e;
		if (e.hasAttribute("viewBox")) {
			e = e.viewBox.baseVal;
			return [[e.x, e.y], [e.x + e.width, e.y + e.height]];
		}
		return [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]];
	}
	return [[0, 0], [e.clientWidth, e.clientHeight]];
}
function defaultTransform() {
	return this.__zoom || identity;
}
function defaultWheelDelta(event) {
	return -event.deltaY * (event.deltaMode === 1 ? .05 : event.deltaMode ? 1 : .002) * (event.ctrlKey ? 10 : 1);
}
function defaultTouchable() {
	return navigator.maxTouchPoints || "ontouchstart" in this;
}
function defaultConstrain(transform, extent, translateExtent) {
	var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0], dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0], dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1], dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
	return transform.translate(dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1), dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1));
}
function zoom_default() {
	var filter = defaultFilter, extent = defaultExtent, constrain = defaultConstrain, wheelDelta = defaultWheelDelta, touchable = defaultTouchable, scaleExtent = [0, Infinity], translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]], duration = 250, interpolate = zoom_default$1, listeners = dispatch("start", "zoom", "end"), touchstarting, touchfirst, touchending, touchDelay = 500, wheelDelay = 150, clickDistance2 = 0, tapDistance = 10;
	function zoom(selection) {
		selection.property("__zoom", defaultTransform).on("wheel.zoom", wheeled, { passive: false }).on("mousedown.zoom", mousedowned).on("dblclick.zoom", dblclicked).filter(touchable).on("touchstart.zoom", touchstarted).on("touchmove.zoom", touchmoved).on("touchend.zoom touchcancel.zoom", touchended).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
	}
	zoom.transform = function(collection, transform, point, event) {
		var selection = collection.selection ? collection.selection() : collection;
		selection.property("__zoom", defaultTransform);
		if (collection !== selection) schedule(collection, transform, point, event);
		else selection.interrupt().each(function() {
			gesture(this, arguments).event(event).start().zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform).end();
		});
	};
	zoom.scaleBy = function(selection, k, p, event) {
		zoom.scaleTo(selection, function() {
			return this.__zoom.k * (typeof k === "function" ? k.apply(this, arguments) : k);
		}, p, event);
	};
	zoom.scaleTo = function(selection, k, p, event) {
		zoom.transform(selection, function() {
			var e = extent.apply(this, arguments), t0 = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p, p1 = t0.invert(p0), k1 = typeof k === "function" ? k.apply(this, arguments) : k;
			return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
		}, p, event);
	};
	zoom.translateBy = function(selection, x, y, event) {
		zoom.transform(selection, function() {
			return constrain(this.__zoom.translate(typeof x === "function" ? x.apply(this, arguments) : x, typeof y === "function" ? y.apply(this, arguments) : y), extent.apply(this, arguments), translateExtent);
		}, null, event);
	};
	zoom.translateTo = function(selection, x, y, p, event) {
		zoom.transform(selection, function() {
			var e = extent.apply(this, arguments), t = this.__zoom, p0 = p == null ? centroid(e) : typeof p === "function" ? p.apply(this, arguments) : p;
			return constrain(identity.translate(p0[0], p0[1]).scale(t.k).translate(typeof x === "function" ? -x.apply(this, arguments) : -x, typeof y === "function" ? -y.apply(this, arguments) : -y), e, translateExtent);
		}, p, event);
	};
	function scale(transform, k) {
		k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
		return k === transform.k ? transform : new Transform(k, transform.x, transform.y);
	}
	function translate(transform, p0, p1) {
		var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
		return x === transform.x && y === transform.y ? transform : new Transform(transform.k, x, y);
	}
	function centroid(extent) {
		return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
	}
	function schedule(transition, transform, point, event) {
		transition.on("start.zoom", function() {
			gesture(this, arguments).event(event).start();
		}).on("interrupt.zoom end.zoom", function() {
			gesture(this, arguments).event(event).end();
		}).tween("zoom", function() {
			var that = this, args = arguments, g = gesture(that, args).event(event), e = extent.apply(that, args), p = point == null ? centroid(e) : typeof point === "function" ? point.apply(that, args) : point, w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]), a = that.__zoom, b = typeof transform === "function" ? transform.apply(that, args) : transform, i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
			return function(t) {
				if (t === 1) t = b;
				else {
					var l = i(t), k = w / l[2];
					t = new Transform(k, p[0] - l[0] * k, p[1] - l[1] * k);
				}
				g.zoom(null, t);
			};
		});
	}
	function gesture(that, args, clean) {
		return !clean && that.__zooming || new Gesture(that, args);
	}
	function Gesture(that, args) {
		this.that = that;
		this.args = args;
		this.active = 0;
		this.sourceEvent = null;
		this.extent = extent.apply(that, args);
		this.taps = 0;
	}
	Gesture.prototype = {
		event: function(event) {
			if (event) this.sourceEvent = event;
			return this;
		},
		start: function() {
			if (++this.active === 1) {
				this.that.__zooming = this;
				this.emit("start");
			}
			return this;
		},
		zoom: function(key, transform) {
			if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
			if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
			if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
			this.that.__zoom = transform;
			this.emit("zoom");
			return this;
		},
		end: function() {
			if (--this.active === 0) {
				delete this.that.__zooming;
				this.emit("end");
			}
			return this;
		},
		emit: function(type) {
			var d = select_default$1(this.that).datum();
			listeners.call(type, this.that, new ZoomEvent(type, {
				sourceEvent: this.sourceEvent,
				target: zoom,
				type,
				transform: this.that.__zoom,
				dispatch: listeners
			}), d);
		}
	};
	function wheeled(event, ...args) {
		if (!filter.apply(this, arguments)) return;
		var g = gesture(this, args).event(event), t = this.__zoom, k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))), p = pointer_default(event);
		if (g.wheel) {
			if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) g.mouse[1] = t.invert(g.mouse[0] = p);
			clearTimeout(g.wheel);
		} else if (t.k === k) return;
		else {
			g.mouse = [p, t.invert(p)];
			interrupt_default$1(this);
			g.start();
		}
		noevent_default(event);
		g.wheel = setTimeout(wheelidled, wheelDelay);
		g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));
		function wheelidled() {
			g.wheel = null;
			g.end();
		}
	}
	function mousedowned(event, ...args) {
		if (touchending || !filter.apply(this, arguments)) return;
		var currentTarget = event.currentTarget, g = gesture(this, args, true).event(event), v = select_default$1(event.view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true), p = pointer_default(event, currentTarget), x0 = event.clientX, y0 = event.clientY;
		nodrag_default(event.view);
		nopropagation(event);
		g.mouse = [p, this.__zoom.invert(p)];
		interrupt_default$1(this);
		g.start();
		function mousemoved(event) {
			noevent_default(event);
			if (!g.moved) {
				var dx = event.clientX - x0, dy = event.clientY - y0;
				g.moved = dx * dx + dy * dy > clickDistance2;
			}
			g.event(event).zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = pointer_default(event, currentTarget), g.mouse[1]), g.extent, translateExtent));
		}
		function mouseupped(event) {
			v.on("mousemove.zoom mouseup.zoom", null);
			yesdrag(event.view, g.moved);
			noevent_default(event);
			g.event(event).end();
		}
	}
	function dblclicked(event, ...args) {
		if (!filter.apply(this, arguments)) return;
		var t0 = this.__zoom, p0 = pointer_default(event.changedTouches ? event.changedTouches[0] : event, this), p1 = t0.invert(p0), k1 = t0.k * (event.shiftKey ? .5 : 2), t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, args), translateExtent);
		noevent_default(event);
		if (duration > 0) select_default$1(this).transition().duration(duration).call(schedule, t1, p0, event);
		else select_default$1(this).call(zoom.transform, t1, p0, event);
	}
	function touchstarted(event, ...args) {
		if (!filter.apply(this, arguments)) return;
		var touches = event.touches, n = touches.length, g = gesture(this, args, event.changedTouches.length === n).event(event), started, i, t, p;
		nopropagation(event);
		for (i = 0; i < n; ++i) {
			t = touches[i], p = pointer_default(t, this);
			p = [
				p,
				this.__zoom.invert(p),
				t.identifier
			];
			if (!g.touch0) g.touch0 = p, started = true, g.taps = 1 + !!touchstarting;
			else if (!g.touch1 && g.touch0[2] !== p[2]) g.touch1 = p, g.taps = 0;
		}
		if (touchstarting) touchstarting = clearTimeout(touchstarting);
		if (started) {
			if (g.taps < 2) touchfirst = p[0], touchstarting = setTimeout(function() {
				touchstarting = null;
			}, touchDelay);
			interrupt_default$1(this);
			g.start();
		}
	}
	function touchmoved(event, ...args) {
		if (!this.__zooming) return;
		var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t, p, l;
		noevent_default(event);
		for (i = 0; i < n; ++i) {
			t = touches[i], p = pointer_default(t, this);
			if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
			else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
		}
		t = g.that.__zoom;
		if (g.touch1) {
			var p0 = g.touch0[0], l0 = g.touch0[1], p1 = g.touch1[0], l1 = g.touch1[1], dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp, dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
			t = scale(t, Math.sqrt(dp / dl));
			p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
			l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
		} else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
		else return;
		g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
	}
	function touchended(event, ...args) {
		if (!this.__zooming) return;
		var g = gesture(this, args).event(event), touches = event.changedTouches, n = touches.length, i, t;
		nopropagation(event);
		if (touchending) clearTimeout(touchending);
		touchending = setTimeout(function() {
			touchending = null;
		}, touchDelay);
		for (i = 0; i < n; ++i) {
			t = touches[i];
			if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
			else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
		}
		if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
		if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
		else {
			g.end();
			if (g.taps === 2) {
				t = pointer_default(t, this);
				if (Math.hypot(touchfirst[0] - t[0], touchfirst[1] - t[1]) < tapDistance) {
					var p = select_default$1(this).on("dblclick.zoom");
					if (p) p.apply(this, arguments);
				}
			}
		}
	}
	zoom.wheelDelta = function(_) {
		return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : constant_default(+_), zoom) : wheelDelta;
	};
	zoom.filter = function(_) {
		return arguments.length ? (filter = typeof _ === "function" ? _ : constant_default(!!_), zoom) : filter;
	};
	zoom.touchable = function(_) {
		return arguments.length ? (touchable = typeof _ === "function" ? _ : constant_default(!!_), zoom) : touchable;
	};
	zoom.extent = function(_) {
		return arguments.length ? (extent = typeof _ === "function" ? _ : constant_default([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
	};
	zoom.scaleExtent = function(_) {
		return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
	};
	zoom.translateExtent = function(_) {
		return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
	};
	zoom.constrain = function(_) {
		return arguments.length ? (constrain = _, zoom) : constrain;
	};
	zoom.duration = function(_) {
		return arguments.length ? (duration = +_, zoom) : duration;
	};
	zoom.interpolate = function(_) {
		return arguments.length ? (interpolate = _, zoom) : interpolate;
	};
	zoom.on = function() {
		var value = listeners.on.apply(listeners, arguments);
		return value === listeners ? zoom : value;
	};
	zoom.clickDistance = function(_) {
		return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
	};
	zoom.tapDistance = function(_) {
		return arguments.length ? (tapDistance = +_, zoom) : tapDistance;
	};
	return zoom;
}
//#endregion
//#region node_modules/@reactflow/core/dist/esm/index.mjs
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var StoreContext = (0, import_react.createContext)(null);
var Provider$1 = StoreContext.Provider;
var errorMessages = {
	error001: () => "[React Flow]: Seems like you have not used zustand provider as an ancestor. Help: https://reactflow.dev/error#001",
	error002: () => "It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",
	error003: (nodeType) => `Node type "${nodeType}" not found. Using fallback type "default".`,
	error004: () => "The React Flow parent container needs a width and a height to render the graph.",
	error005: () => "Only child nodes can use a parent extent.",
	error006: () => "Can't create edge. An edge needs a source and a target.",
	error007: (id) => `The old edge with id=${id} does not exist.`,
	error009: (type) => `Marker type "${type}" doesn't exist.`,
	error008: (sourceHandle, edge) => `Couldn't create edge for ${!sourceHandle ? "source" : "target"} handle id: "${!sourceHandle ? edge.sourceHandle : edge.targetHandle}", edge id: ${edge.id}.`,
	error010: () => "Handle: No node id found. Make sure to only use a Handle inside a custom Node.",
	error011: (edgeType) => `Edge type "${edgeType}" not found. Using fallback type "default".`,
	error012: (id) => `Node with id "${id}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`
};
var zustandErrorMessage = errorMessages["error001"]();
function useStore(selector, equalityFn) {
	const store = (0, import_react.useContext)(StoreContext);
	if (store === null) throw new Error(zustandErrorMessage);
	return useStoreWithEqualityFn(store, selector, equalityFn);
}
var useStoreApi = () => {
	const store = (0, import_react.useContext)(StoreContext);
	if (store === null) throw new Error(zustandErrorMessage);
	return (0, import_react.useMemo)(() => ({
		getState: store.getState,
		setState: store.setState,
		subscribe: store.subscribe,
		destroy: store.destroy
	}), [store]);
};
var selector$g = (s) => s.userSelectionActive ? "none" : "all";
function Panel({ position, children, className, style, ...rest }) {
	const pointerEvents = useStore(selector$g);
	const positionClasses = `${position}`.split("-");
	return import_react.createElement("div", {
		className: cc([
			"react-flow__panel",
			className,
			...positionClasses
		]),
		style: {
			...style,
			pointerEvents
		},
		...rest
	}, children);
}
function Attribution({ proOptions, position = "bottom-right" }) {
	if (proOptions?.hideAttribution) return null;
	return import_react.createElement(Panel, {
		position,
		className: "react-flow__attribution",
		"data-message": "Please only hide this attribution when you are subscribed to React Flow Pro: https://reactflow.dev/pro"
	}, import_react.createElement("a", {
		href: "https://reactflow.dev",
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "React Flow attribution"
	}, "React Flow"));
}
var EdgeText = ({ x, y, label, labelStyle = {}, labelShowBg = true, labelBgStyle = {}, labelBgPadding = [2, 4], labelBgBorderRadius = 2, children, className, ...rest }) => {
	const edgeRef = (0, import_react.useRef)(null);
	const [edgeTextBbox, setEdgeTextBbox] = (0, import_react.useState)({
		x: 0,
		y: 0,
		width: 0,
		height: 0
	});
	const edgeTextClasses = cc(["react-flow__edge-textwrapper", className]);
	(0, import_react.useEffect)(() => {
		if (edgeRef.current) {
			const textBbox = edgeRef.current.getBBox();
			setEdgeTextBbox({
				x: textBbox.x,
				y: textBbox.y,
				width: textBbox.width,
				height: textBbox.height
			});
		}
	}, [label]);
	if (typeof label === "undefined" || !label) return null;
	return import_react.createElement("g", {
		transform: `translate(${x - edgeTextBbox.width / 2} ${y - edgeTextBbox.height / 2})`,
		className: edgeTextClasses,
		visibility: edgeTextBbox.width ? "visible" : "hidden",
		...rest
	}, labelShowBg && import_react.createElement("rect", {
		width: edgeTextBbox.width + 2 * labelBgPadding[0],
		x: -labelBgPadding[0],
		y: -labelBgPadding[1],
		height: edgeTextBbox.height + 2 * labelBgPadding[1],
		className: "react-flow__edge-textbg",
		style: labelBgStyle,
		rx: labelBgBorderRadius,
		ry: labelBgBorderRadius
	}), import_react.createElement("text", {
		className: "react-flow__edge-text",
		y: edgeTextBbox.height / 2,
		dy: "0.3em",
		ref: edgeRef,
		style: labelStyle
	}, label), children);
};
var EdgeText$1 = (0, import_react.memo)(EdgeText);
var getDimensions$1 = (node) => ({
	width: node.offsetWidth,
	height: node.offsetHeight
});
var clamp$1 = (val, min = 0, max = 1) => Math.min(Math.max(val, min), max);
var clampPosition = (position = {
	x: 0,
	y: 0
}, extent) => ({
	x: clamp$1(position.x, extent[0][0], extent[1][0]),
	y: clamp$1(position.y, extent[0][1], extent[1][1])
});
var calcAutoPanVelocity = (value, min, max) => {
	if (value < min) return clamp$1(Math.abs(value - min), 1, 50) / 50;
	else if (value > max) return -clamp$1(Math.abs(value - max), 1, 50) / 50;
	return 0;
};
var calcAutoPan = (pos, bounds) => {
	return [calcAutoPanVelocity(pos.x, 35, bounds.width - 35) * 20, calcAutoPanVelocity(pos.y, 35, bounds.height - 35) * 20];
};
var getHostForElement = (element) => element.getRootNode?.() || window?.document;
var getBoundsOfBoxes = (box1, box2) => ({
	x: Math.min(box1.x, box2.x),
	y: Math.min(box1.y, box2.y),
	x2: Math.max(box1.x2, box2.x2),
	y2: Math.max(box1.y2, box2.y2)
});
var rectToBox = ({ x, y, width, height }) => ({
	x,
	y,
	x2: x + width,
	y2: y + height
});
var boxToRect = ({ x, y, x2, y2 }) => ({
	x,
	y,
	width: x2 - x,
	height: y2 - y
});
var nodeToRect = (node) => ({
	...node.positionAbsolute || {
		x: 0,
		y: 0
	},
	width: node.width || 0,
	height: node.height || 0
});
var getOverlappingArea = (rectA, rectB) => {
	const xOverlap = Math.max(0, Math.min(rectA.x + rectA.width, rectB.x + rectB.width) - Math.max(rectA.x, rectB.x));
	const yOverlap = Math.max(0, Math.min(rectA.y + rectA.height, rectB.y + rectB.height) - Math.max(rectA.y, rectB.y));
	return Math.ceil(xOverlap * yOverlap);
};
var isRectObject = (obj) => isNumeric(obj.width) && isNumeric(obj.height) && isNumeric(obj.x) && isNumeric(obj.y);
var isNumeric = (n) => !isNaN(n) && isFinite(n);
var internalsSymbol = Symbol.for("internals");
var elementSelectionKeys = [
	"Enter",
	" ",
	"Escape"
];
var devWarn = (id, message) => {};
var isReactKeyboardEvent = (event) => "nativeEvent" in event;
function isInputDOMNode(event) {
	const target = (isReactKeyboardEvent(event) ? event.nativeEvent : event).composedPath?.()?.[0] || event.target;
	return [
		"INPUT",
		"SELECT",
		"TEXTAREA"
	].includes(target?.nodeName) || target?.hasAttribute("contenteditable") || !!target?.closest(".nokey");
}
var isMouseEvent = (event) => "clientX" in event;
var getEventPosition = (event, bounds) => {
	const isMouseTriggered = isMouseEvent(event);
	const evtX = isMouseTriggered ? event.clientX : event.touches?.[0].clientX;
	const evtY = isMouseTriggered ? event.clientY : event.touches?.[0].clientY;
	return {
		x: evtX - (bounds?.left ?? 0),
		y: evtY - (bounds?.top ?? 0)
	};
};
var isMacOs = () => typeof navigator !== "undefined" && navigator?.userAgent?.indexOf("Mac") >= 0;
var BaseEdge = ({ id, path, labelX, labelY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, markerEnd, markerStart, interactionWidth = 20 }) => {
	return import_react.createElement(import_react.Fragment, null, import_react.createElement("path", {
		id,
		style,
		d: path,
		fill: "none",
		className: "react-flow__edge-path",
		markerEnd,
		markerStart
	}), interactionWidth && import_react.createElement("path", {
		d: path,
		fill: "none",
		strokeOpacity: 0,
		strokeWidth: interactionWidth,
		className: "react-flow__edge-interaction"
	}), label && isNumeric(labelX) && isNumeric(labelY) ? import_react.createElement(EdgeText$1, {
		x: labelX,
		y: labelY,
		label,
		labelStyle,
		labelShowBg,
		labelBgStyle,
		labelBgPadding,
		labelBgBorderRadius
	}) : null);
};
BaseEdge.displayName = "BaseEdge";
function getMouseHandler$1(id, getState, handler) {
	return handler === void 0 ? handler : (event) => {
		const edge = getState().edges.find((e) => e.id === id);
		if (edge) handler(event, { ...edge });
	};
}
function getEdgeCenter({ sourceX, sourceY, targetX, targetY }) {
	const xOffset = Math.abs(targetX - sourceX) / 2;
	const centerX = targetX < sourceX ? targetX + xOffset : targetX - xOffset;
	const yOffset = Math.abs(targetY - sourceY) / 2;
	return [
		centerX,
		targetY < sourceY ? targetY + yOffset : targetY - yOffset,
		xOffset,
		yOffset
	];
}
function getBezierEdgeCenter({ sourceX, sourceY, targetX, targetY, sourceControlX, sourceControlY, targetControlX, targetControlY }) {
	const centerX = sourceX * .125 + sourceControlX * .375 + targetControlX * .375 + targetX * .125;
	const centerY = sourceY * .125 + sourceControlY * .375 + targetControlY * .375 + targetY * .125;
	return [
		centerX,
		centerY,
		Math.abs(centerX - sourceX),
		Math.abs(centerY - sourceY)
	];
}
var ConnectionMode;
(function(ConnectionMode) {
	ConnectionMode["Strict"] = "strict";
	ConnectionMode["Loose"] = "loose";
})(ConnectionMode || (ConnectionMode = {}));
var PanOnScrollMode;
(function(PanOnScrollMode) {
	PanOnScrollMode["Free"] = "free";
	PanOnScrollMode["Vertical"] = "vertical";
	PanOnScrollMode["Horizontal"] = "horizontal";
})(PanOnScrollMode || (PanOnScrollMode = {}));
var SelectionMode;
(function(SelectionMode) {
	SelectionMode["Partial"] = "partial";
	SelectionMode["Full"] = "full";
})(SelectionMode || (SelectionMode = {}));
var ConnectionLineType;
(function(ConnectionLineType) {
	ConnectionLineType["Bezier"] = "default";
	ConnectionLineType["Straight"] = "straight";
	ConnectionLineType["Step"] = "step";
	ConnectionLineType["SmoothStep"] = "smoothstep";
	ConnectionLineType["SimpleBezier"] = "simplebezier";
})(ConnectionLineType || (ConnectionLineType = {}));
var MarkerType;
(function(MarkerType) {
	MarkerType["Arrow"] = "arrow";
	MarkerType["ArrowClosed"] = "arrowclosed";
})(MarkerType || (MarkerType = {}));
var Position;
(function(Position) {
	Position["Left"] = "left";
	Position["Top"] = "top";
	Position["Right"] = "right";
	Position["Bottom"] = "bottom";
})(Position || (Position = {}));
function getControl({ pos, x1, y1, x2, y2 }) {
	if (pos === Position.Left || pos === Position.Right) return [.5 * (x1 + x2), y1];
	return [x1, .5 * (y1 + y2)];
}
function getSimpleBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top }) {
	const [sourceControlX, sourceControlY] = getControl({
		pos: sourcePosition,
		x1: sourceX,
		y1: sourceY,
		x2: targetX,
		y2: targetY
	});
	const [targetControlX, targetControlY] = getControl({
		pos: targetPosition,
		x1: targetX,
		y1: targetY,
		x2: sourceX,
		y2: sourceY
	});
	const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
		sourceX,
		sourceY,
		targetX,
		targetY,
		sourceControlX,
		sourceControlY,
		targetControlX,
		targetControlY
	});
	return [
		`M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
		labelX,
		labelY,
		offsetX,
		offsetY
	];
}
var SimpleBezierEdge = (0, import_react.memo)(({ sourceX, sourceY, targetX, targetY, sourcePosition = Position.Bottom, targetPosition = Position.Top, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, markerEnd, markerStart, interactionWidth }) => {
	const [path, labelX, labelY] = getSimpleBezierPath({
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition
	});
	return import_react.createElement(BaseEdge, {
		path,
		labelX,
		labelY,
		label,
		labelStyle,
		labelShowBg,
		labelBgStyle,
		labelBgPadding,
		labelBgBorderRadius,
		style,
		markerEnd,
		markerStart,
		interactionWidth
	});
});
SimpleBezierEdge.displayName = "SimpleBezierEdge";
var handleDirections = {
	[Position.Left]: {
		x: -1,
		y: 0
	},
	[Position.Right]: {
		x: 1,
		y: 0
	},
	[Position.Top]: {
		x: 0,
		y: -1
	},
	[Position.Bottom]: {
		x: 0,
		y: 1
	}
};
var getDirection = ({ source, sourcePosition = Position.Bottom, target }) => {
	if (sourcePosition === Position.Left || sourcePosition === Position.Right) return source.x < target.x ? {
		x: 1,
		y: 0
	} : {
		x: -1,
		y: 0
	};
	return source.y < target.y ? {
		x: 0,
		y: 1
	} : {
		x: 0,
		y: -1
	};
};
var distance = (a, b) => Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
function getPoints({ source, sourcePosition = Position.Bottom, target, targetPosition = Position.Top, center, offset }) {
	const sourceDir = handleDirections[sourcePosition];
	const targetDir = handleDirections[targetPosition];
	const sourceGapped = {
		x: source.x + sourceDir.x * offset,
		y: source.y + sourceDir.y * offset
	};
	const targetGapped = {
		x: target.x + targetDir.x * offset,
		y: target.y + targetDir.y * offset
	};
	const dir = getDirection({
		source: sourceGapped,
		sourcePosition,
		target: targetGapped
	});
	const dirAccessor = dir.x !== 0 ? "x" : "y";
	const currDir = dir[dirAccessor];
	let points = [];
	let centerX, centerY;
	const sourceGapOffset = {
		x: 0,
		y: 0
	};
	const targetGapOffset = {
		x: 0,
		y: 0
	};
	const [defaultCenterX, defaultCenterY, defaultOffsetX, defaultOffsetY] = getEdgeCenter({
		sourceX: source.x,
		sourceY: source.y,
		targetX: target.x,
		targetY: target.y
	});
	if (sourceDir[dirAccessor] * targetDir[dirAccessor] === -1) {
		centerX = center.x ?? defaultCenterX;
		centerY = center.y ?? defaultCenterY;
		const verticalSplit = [{
			x: centerX,
			y: sourceGapped.y
		}, {
			x: centerX,
			y: targetGapped.y
		}];
		const horizontalSplit = [{
			x: sourceGapped.x,
			y: centerY
		}, {
			x: targetGapped.x,
			y: centerY
		}];
		if (sourceDir[dirAccessor] === currDir) points = dirAccessor === "x" ? verticalSplit : horizontalSplit;
		else points = dirAccessor === "x" ? horizontalSplit : verticalSplit;
	} else {
		const sourceTarget = [{
			x: sourceGapped.x,
			y: targetGapped.y
		}];
		const targetSource = [{
			x: targetGapped.x,
			y: sourceGapped.y
		}];
		if (dirAccessor === "x") points = sourceDir.x === currDir ? targetSource : sourceTarget;
		else points = sourceDir.y === currDir ? sourceTarget : targetSource;
		if (sourcePosition === targetPosition) {
			const diff = Math.abs(source[dirAccessor] - target[dirAccessor]);
			if (diff <= offset) {
				const gapOffset = Math.min(offset - 1, offset - diff);
				if (sourceDir[dirAccessor] === currDir) sourceGapOffset[dirAccessor] = (sourceGapped[dirAccessor] > source[dirAccessor] ? -1 : 1) * gapOffset;
				else targetGapOffset[dirAccessor] = (targetGapped[dirAccessor] > target[dirAccessor] ? -1 : 1) * gapOffset;
			}
		}
		if (sourcePosition !== targetPosition) {
			const dirAccessorOpposite = dirAccessor === "x" ? "y" : "x";
			const isSameDir = sourceDir[dirAccessor] === targetDir[dirAccessorOpposite];
			const sourceGtTargetOppo = sourceGapped[dirAccessorOpposite] > targetGapped[dirAccessorOpposite];
			const sourceLtTargetOppo = sourceGapped[dirAccessorOpposite] < targetGapped[dirAccessorOpposite];
			if (sourceDir[dirAccessor] === 1 && (!isSameDir && sourceGtTargetOppo || isSameDir && sourceLtTargetOppo) || sourceDir[dirAccessor] !== 1 && (!isSameDir && sourceLtTargetOppo || isSameDir && sourceGtTargetOppo)) points = dirAccessor === "x" ? sourceTarget : targetSource;
		}
		const sourceGapPoint = {
			x: sourceGapped.x + sourceGapOffset.x,
			y: sourceGapped.y + sourceGapOffset.y
		};
		const targetGapPoint = {
			x: targetGapped.x + targetGapOffset.x,
			y: targetGapped.y + targetGapOffset.y
		};
		if (Math.max(Math.abs(sourceGapPoint.x - points[0].x), Math.abs(targetGapPoint.x - points[0].x)) >= Math.max(Math.abs(sourceGapPoint.y - points[0].y), Math.abs(targetGapPoint.y - points[0].y))) {
			centerX = (sourceGapPoint.x + targetGapPoint.x) / 2;
			centerY = points[0].y;
		} else {
			centerX = points[0].x;
			centerY = (sourceGapPoint.y + targetGapPoint.y) / 2;
		}
	}
	return [
		[
			source,
			{
				x: sourceGapped.x + sourceGapOffset.x,
				y: sourceGapped.y + sourceGapOffset.y
			},
			...points,
			{
				x: targetGapped.x + targetGapOffset.x,
				y: targetGapped.y + targetGapOffset.y
			},
			target
		],
		centerX,
		centerY,
		defaultOffsetX,
		defaultOffsetY
	];
}
function getBend(a, b, c, size) {
	const bendSize = Math.min(distance(a, b) / 2, distance(b, c) / 2, size);
	const { x, y } = b;
	if (a.x === x && x === c.x || a.y === y && y === c.y) return `L${x} ${y}`;
	if (a.y === y) {
		const xDir = a.x < c.x ? -1 : 1;
		const yDir = a.y < c.y ? 1 : -1;
		return `L ${x + bendSize * xDir},${y}Q ${x},${y} ${x},${y + bendSize * yDir}`;
	}
	const xDir = a.x < c.x ? 1 : -1;
	return `L ${x},${y + bendSize * (a.y < c.y ? -1 : 1)}Q ${x},${y} ${x + bendSize * xDir},${y}`;
}
function getSmoothStepPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, borderRadius = 5, centerX, centerY, offset = 20 }) {
	const [points, labelX, labelY, offsetX, offsetY] = getPoints({
		source: {
			x: sourceX,
			y: sourceY
		},
		sourcePosition,
		target: {
			x: targetX,
			y: targetY
		},
		targetPosition,
		center: {
			x: centerX,
			y: centerY
		},
		offset
	});
	return [
		points.reduce((res, p, i) => {
			let segment = "";
			if (i > 0 && i < points.length - 1) segment = getBend(points[i - 1], p, points[i + 1], borderRadius);
			else segment = `${i === 0 ? "M" : "L"}${p.x} ${p.y}`;
			res += segment;
			return res;
		}, ""),
		labelX,
		labelY,
		offsetX,
		offsetY
	];
}
var SmoothStepEdge = (0, import_react.memo)(({ sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, sourcePosition = Position.Bottom, targetPosition = Position.Top, markerEnd, markerStart, pathOptions, interactionWidth }) => {
	const [path, labelX, labelY] = getSmoothStepPath({
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition,
		borderRadius: pathOptions?.borderRadius,
		offset: pathOptions?.offset
	});
	return import_react.createElement(BaseEdge, {
		path,
		labelX,
		labelY,
		label,
		labelStyle,
		labelShowBg,
		labelBgStyle,
		labelBgPadding,
		labelBgBorderRadius,
		style,
		markerEnd,
		markerStart,
		interactionWidth
	});
});
SmoothStepEdge.displayName = "SmoothStepEdge";
var StepEdge = (0, import_react.memo)((props) => import_react.createElement(SmoothStepEdge, {
	...props,
	pathOptions: (0, import_react.useMemo)(() => ({
		borderRadius: 0,
		offset: props.pathOptions?.offset
	}), [props.pathOptions?.offset])
}));
StepEdge.displayName = "StepEdge";
function getStraightPath({ sourceX, sourceY, targetX, targetY }) {
	const [labelX, labelY, offsetX, offsetY] = getEdgeCenter({
		sourceX,
		sourceY,
		targetX,
		targetY
	});
	return [
		`M ${sourceX},${sourceY}L ${targetX},${targetY}`,
		labelX,
		labelY,
		offsetX,
		offsetY
	];
}
var StraightEdge = (0, import_react.memo)(({ sourceX, sourceY, targetX, targetY, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, markerEnd, markerStart, interactionWidth }) => {
	const [path, labelX, labelY] = getStraightPath({
		sourceX,
		sourceY,
		targetX,
		targetY
	});
	return import_react.createElement(BaseEdge, {
		path,
		labelX,
		labelY,
		label,
		labelStyle,
		labelShowBg,
		labelBgStyle,
		labelBgPadding,
		labelBgBorderRadius,
		style,
		markerEnd,
		markerStart,
		interactionWidth
	});
});
StraightEdge.displayName = "StraightEdge";
function calculateControlOffset(distance, curvature) {
	if (distance >= 0) return .5 * distance;
	return curvature * 25 * Math.sqrt(-distance);
}
function getControlWithCurvature({ pos, x1, y1, x2, y2, c }) {
	switch (pos) {
		case Position.Left: return [x1 - calculateControlOffset(x1 - x2, c), y1];
		case Position.Right: return [x1 + calculateControlOffset(x2 - x1, c), y1];
		case Position.Top: return [x1, y1 - calculateControlOffset(y1 - y2, c)];
		case Position.Bottom: return [x1, y1 + calculateControlOffset(y2 - y1, c)];
	}
}
function getBezierPath({ sourceX, sourceY, sourcePosition = Position.Bottom, targetX, targetY, targetPosition = Position.Top, curvature = .25 }) {
	const [sourceControlX, sourceControlY] = getControlWithCurvature({
		pos: sourcePosition,
		x1: sourceX,
		y1: sourceY,
		x2: targetX,
		y2: targetY,
		c: curvature
	});
	const [targetControlX, targetControlY] = getControlWithCurvature({
		pos: targetPosition,
		x1: targetX,
		y1: targetY,
		x2: sourceX,
		y2: sourceY,
		c: curvature
	});
	const [labelX, labelY, offsetX, offsetY] = getBezierEdgeCenter({
		sourceX,
		sourceY,
		targetX,
		targetY,
		sourceControlX,
		sourceControlY,
		targetControlX,
		targetControlY
	});
	return [
		`M${sourceX},${sourceY} C${sourceControlX},${sourceControlY} ${targetControlX},${targetControlY} ${targetX},${targetY}`,
		labelX,
		labelY,
		offsetX,
		offsetY
	];
}
var BezierEdge = (0, import_react.memo)(({ sourceX, sourceY, targetX, targetY, sourcePosition = Position.Bottom, targetPosition = Position.Top, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, markerEnd, markerStart, pathOptions, interactionWidth }) => {
	const [path, labelX, labelY] = getBezierPath({
		sourceX,
		sourceY,
		sourcePosition,
		targetX,
		targetY,
		targetPosition,
		curvature: pathOptions?.curvature
	});
	return import_react.createElement(BaseEdge, {
		path,
		labelX,
		labelY,
		label,
		labelStyle,
		labelShowBg,
		labelBgStyle,
		labelBgPadding,
		labelBgBorderRadius,
		style,
		markerEnd,
		markerStart,
		interactionWidth
	});
});
BezierEdge.displayName = "BezierEdge";
var NodeIdContext = (0, import_react.createContext)(null);
var Provider = NodeIdContext.Provider;
NodeIdContext.Consumer;
var useNodeId = () => {
	return (0, import_react.useContext)(NodeIdContext);
};
var isEdge = (element) => "id" in element && "source" in element && "target" in element;
var getEdgeId = ({ source, sourceHandle, target, targetHandle }) => `reactflow__edge-${source}${sourceHandle || ""}-${target}${targetHandle || ""}`;
var getMarkerId = (marker, rfId) => {
	if (typeof marker === "undefined") return "";
	if (typeof marker === "string") return marker;
	return `${rfId ? `${rfId}__` : ""}${Object.keys(marker).sort().map((key) => `${key}=${marker[key]}`).join("&")}`;
};
var connectionExists = (edge, edges) => {
	return edges.some((el) => el.source === edge.source && el.target === edge.target && (el.sourceHandle === edge.sourceHandle || !el.sourceHandle && !edge.sourceHandle) && (el.targetHandle === edge.targetHandle || !el.targetHandle && !edge.targetHandle));
};
var addEdge = (edgeParams, edges) => {
	if (!edgeParams.source || !edgeParams.target) {
		errorMessages["error006"]();
		return edges;
	}
	let edge;
	if (isEdge(edgeParams)) edge = { ...edgeParams };
	else edge = {
		...edgeParams,
		id: getEdgeId(edgeParams)
	};
	if (connectionExists(edge, edges)) return edges;
	return edges.concat(edge);
};
var pointToRendererPoint = ({ x, y }, [tx, ty, tScale], snapToGrid, [snapX, snapY]) => {
	const position = {
		x: (x - tx) / tScale,
		y: (y - ty) / tScale
	};
	if (snapToGrid) return {
		x: snapX * Math.round(position.x / snapX),
		y: snapY * Math.round(position.y / snapY)
	};
	return position;
};
var rendererPointToPoint = ({ x, y }, [tx, ty, tScale]) => {
	return {
		x: x * tScale + tx,
		y: y * tScale + ty
	};
};
var getNodePositionWithOrigin = (node, nodeOrigin = [0, 0]) => {
	if (!node) return {
		x: 0,
		y: 0,
		positionAbsolute: {
			x: 0,
			y: 0
		}
	};
	const offsetX = (node.width ?? 0) * nodeOrigin[0];
	const offsetY = (node.height ?? 0) * nodeOrigin[1];
	const position = {
		x: node.position.x - offsetX,
		y: node.position.y - offsetY
	};
	return {
		...position,
		positionAbsolute: node.positionAbsolute ? {
			x: node.positionAbsolute.x - offsetX,
			y: node.positionAbsolute.y - offsetY
		} : position
	};
};
var getNodesBounds = (nodes, nodeOrigin = [0, 0]) => {
	if (nodes.length === 0) return {
		x: 0,
		y: 0,
		width: 0,
		height: 0
	};
	return boxToRect(nodes.reduce((currBox, node) => {
		const { x, y } = getNodePositionWithOrigin(node, nodeOrigin).positionAbsolute;
		return getBoundsOfBoxes(currBox, rectToBox({
			x,
			y,
			width: node.width || 0,
			height: node.height || 0
		}));
	}, {
		x: Infinity,
		y: Infinity,
		x2: -Infinity,
		y2: -Infinity
	}));
};
var getNodesInside = (nodeInternals, rect, [tx, ty, tScale] = [
	0,
	0,
	1
], partially = false, excludeNonSelectableNodes = false, nodeOrigin = [0, 0]) => {
	const paneRect = {
		x: (rect.x - tx) / tScale,
		y: (rect.y - ty) / tScale,
		width: rect.width / tScale,
		height: rect.height / tScale
	};
	const visibleNodes = [];
	nodeInternals.forEach((node) => {
		const { width, height, selectable = true, hidden = false } = node;
		if (excludeNonSelectableNodes && !selectable || hidden) return false;
		const { positionAbsolute } = getNodePositionWithOrigin(node, nodeOrigin);
		const overlappingArea = getOverlappingArea(paneRect, {
			x: positionAbsolute.x,
			y: positionAbsolute.y,
			width: width || 0,
			height: height || 0
		});
		const notInitialized = typeof width === "undefined" || typeof height === "undefined" || width === null || height === null;
		const partiallyVisible = partially && overlappingArea > 0;
		const area = (width || 0) * (height || 0);
		if (notInitialized || partiallyVisible || overlappingArea >= area || node.dragging) visibleNodes.push(node);
	});
	return visibleNodes;
};
var getConnectedEdges = (nodes, edges) => {
	const nodeIds = nodes.map((node) => node.id);
	return edges.filter((edge) => nodeIds.includes(edge.source) || nodeIds.includes(edge.target));
};
var getViewportForBounds = (bounds, width, height, minZoom, maxZoom, padding = .1) => {
	const xZoom = width / (bounds.width * (1 + padding));
	const yZoom = height / (bounds.height * (1 + padding));
	const clampedZoom = clamp$1(Math.min(xZoom, yZoom), minZoom, maxZoom);
	const boundsCenterX = bounds.x + bounds.width / 2;
	const boundsCenterY = bounds.y + bounds.height / 2;
	return {
		x: width / 2 - boundsCenterX * clampedZoom,
		y: height / 2 - boundsCenterY * clampedZoom,
		zoom: clampedZoom
	};
};
var getD3Transition = (selection, duration = 0) => {
	return selection.transition().duration(duration);
};
function getHandles(node, handleBounds, type, currentHandle) {
	return (handleBounds[type] || []).reduce((res, h) => {
		if (`${node.id}-${h.id}-${type}` !== currentHandle) res.push({
			id: h.id || null,
			type,
			nodeId: node.id,
			x: (node.positionAbsolute?.x ?? 0) + h.x + h.width / 2,
			y: (node.positionAbsolute?.y ?? 0) + h.y + h.height / 2
		});
		return res;
	}, []);
}
function getClosestHandle(event, doc, pos, connectionRadius, handles, validator) {
	const { x, y } = getEventPosition(event);
	const handleBelow = doc.elementsFromPoint(x, y).find((el) => el.classList.contains("react-flow__handle"));
	if (handleBelow) {
		const handleNodeId = handleBelow.getAttribute("data-nodeid");
		if (handleNodeId) {
			const handleType = getHandleType(void 0, handleBelow);
			const handleId = handleBelow.getAttribute("data-handleid");
			const validHandleResult = validator({
				nodeId: handleNodeId,
				id: handleId,
				type: handleType
			});
			if (validHandleResult) {
				const handle = handles.find((h) => h.nodeId === handleNodeId && h.type === handleType && h.id === handleId);
				return {
					handle: {
						id: handleId,
						type: handleType,
						nodeId: handleNodeId,
						x: handle?.x || pos.x,
						y: handle?.y || pos.y
					},
					validHandleResult
				};
			}
		}
	}
	let closestHandles = [];
	let minDistance = Infinity;
	handles.forEach((handle) => {
		const distance = Math.sqrt((handle.x - pos.x) ** 2 + (handle.y - pos.y) ** 2);
		if (distance <= connectionRadius) {
			const validHandleResult = validator(handle);
			if (distance <= minDistance) {
				if (distance < minDistance) closestHandles = [{
					handle,
					validHandleResult
				}];
				else if (distance === minDistance) closestHandles.push({
					handle,
					validHandleResult
				});
				minDistance = distance;
			}
		}
	});
	if (!closestHandles.length) return {
		handle: null,
		validHandleResult: defaultResult()
	};
	if (closestHandles.length === 1) return closestHandles[0];
	const hasValidHandle = closestHandles.some(({ validHandleResult }) => validHandleResult.isValid);
	const hasTargetHandle = closestHandles.some(({ handle }) => handle.type === "target");
	return closestHandles.find(({ handle, validHandleResult }) => hasTargetHandle ? handle.type === "target" : hasValidHandle ? validHandleResult.isValid : true) || closestHandles[0];
}
var nullConnection = {
	source: null,
	target: null,
	sourceHandle: null,
	targetHandle: null
};
var defaultResult = () => ({
	handleDomNode: null,
	isValid: false,
	connection: nullConnection,
	endHandle: null
});
function isValidHandle(handle, connectionMode, fromNodeId, fromHandleId, fromType, isValidConnection, doc) {
	const isTarget = fromType === "target";
	const handleToCheck = doc.querySelector(`.react-flow__handle[data-id="${handle?.nodeId}-${handle?.id}-${handle?.type}"]`);
	const result = {
		...defaultResult(),
		handleDomNode: handleToCheck
	};
	if (handleToCheck) {
		const handleType = getHandleType(void 0, handleToCheck);
		const handleNodeId = handleToCheck.getAttribute("data-nodeid");
		const handleId = handleToCheck.getAttribute("data-handleid");
		const connectable = handleToCheck.classList.contains("connectable");
		const connectableEnd = handleToCheck.classList.contains("connectableend");
		const connection = {
			source: isTarget ? handleNodeId : fromNodeId,
			sourceHandle: isTarget ? handleId : fromHandleId,
			target: isTarget ? fromNodeId : handleNodeId,
			targetHandle: isTarget ? fromHandleId : handleId
		};
		result.connection = connection;
		if (connectable && connectableEnd && (connectionMode === ConnectionMode.Strict ? isTarget && handleType === "source" || !isTarget && handleType === "target" : handleNodeId !== fromNodeId || handleId !== fromHandleId)) {
			result.endHandle = {
				nodeId: handleNodeId,
				handleId,
				type: handleType
			};
			result.isValid = isValidConnection(connection);
		}
	}
	return result;
}
function getHandleLookup({ nodes, nodeId, handleId, handleType }) {
	return nodes.reduce((res, node) => {
		if (node[internalsSymbol]) {
			const { handleBounds } = node[internalsSymbol];
			let sourceHandles = [];
			let targetHandles = [];
			if (handleBounds) {
				sourceHandles = getHandles(node, handleBounds, "source", `${nodeId}-${handleId}-${handleType}`);
				targetHandles = getHandles(node, handleBounds, "target", `${nodeId}-${handleId}-${handleType}`);
			}
			res.push(...sourceHandles, ...targetHandles);
		}
		return res;
	}, []);
}
function getHandleType(edgeUpdaterType, handleDomNode) {
	if (edgeUpdaterType) return edgeUpdaterType;
	else if (handleDomNode?.classList.contains("target")) return "target";
	else if (handleDomNode?.classList.contains("source")) return "source";
	return null;
}
function resetRecentHandle(handleDomNode) {
	handleDomNode?.classList.remove("valid", "connecting", "react-flow__handle-valid", "react-flow__handle-connecting");
}
function getConnectionStatus(isInsideConnectionRadius, isHandleValid) {
	let connectionStatus = null;
	if (isHandleValid) connectionStatus = "valid";
	else if (isInsideConnectionRadius && !isHandleValid) connectionStatus = "invalid";
	return connectionStatus;
}
function handlePointerDown({ event, handleId, nodeId, onConnect, isTarget, getState, setState, isValidConnection, edgeUpdaterType, onReconnectEnd }) {
	const doc = getHostForElement(event.target);
	const { connectionMode, domNode, autoPanOnConnect, connectionRadius, onConnectStart, panBy, getNodes, cancelConnection } = getState();
	let autoPanId = 0;
	let closestHandle;
	const { x, y } = getEventPosition(event);
	const clickedHandle = doc?.elementFromPoint(x, y);
	const handleType = getHandleType(edgeUpdaterType, clickedHandle);
	const containerBounds = domNode?.getBoundingClientRect();
	if (!containerBounds || !handleType) return;
	let prevActiveHandle;
	let connectionPosition = getEventPosition(event, containerBounds);
	let autoPanStarted = false;
	let connection = null;
	let isValid = false;
	let handleDomNode = null;
	const handleLookup = getHandleLookup({
		nodes: getNodes(),
		nodeId,
		handleId,
		handleType
	});
	const autoPan = () => {
		if (!autoPanOnConnect) return;
		const [xMovement, yMovement] = calcAutoPan(connectionPosition, containerBounds);
		panBy({
			x: xMovement,
			y: yMovement
		});
		autoPanId = requestAnimationFrame(autoPan);
	};
	setState({
		connectionPosition,
		connectionStatus: null,
		connectionNodeId: nodeId,
		connectionHandleId: handleId,
		connectionHandleType: handleType,
		connectionStartHandle: {
			nodeId,
			handleId,
			type: handleType
		},
		connectionEndHandle: null
	});
	onConnectStart?.(event, {
		nodeId,
		handleId,
		handleType
	});
	function onPointerMove(event) {
		const { transform } = getState();
		connectionPosition = getEventPosition(event, containerBounds);
		const { handle, validHandleResult } = getClosestHandle(event, doc, pointToRendererPoint(connectionPosition, transform, false, [1, 1]), connectionRadius, handleLookup, (handle) => isValidHandle(handle, connectionMode, nodeId, handleId, isTarget ? "target" : "source", isValidConnection, doc));
		closestHandle = handle;
		if (!autoPanStarted) {
			autoPan();
			autoPanStarted = true;
		}
		handleDomNode = validHandleResult.handleDomNode;
		connection = validHandleResult.connection;
		isValid = validHandleResult.isValid;
		setState({
			connectionPosition: closestHandle && isValid ? rendererPointToPoint({
				x: closestHandle.x,
				y: closestHandle.y
			}, transform) : connectionPosition,
			connectionStatus: getConnectionStatus(!!closestHandle, isValid),
			connectionEndHandle: validHandleResult.endHandle
		});
		if (!closestHandle && !isValid && !handleDomNode) return resetRecentHandle(prevActiveHandle);
		if (connection.source !== connection.target && handleDomNode) {
			resetRecentHandle(prevActiveHandle);
			prevActiveHandle = handleDomNode;
			handleDomNode.classList.add("connecting", "react-flow__handle-connecting");
			handleDomNode.classList.toggle("valid", isValid);
			handleDomNode.classList.toggle("react-flow__handle-valid", isValid);
		}
	}
	function onPointerUp(event) {
		if ((closestHandle || handleDomNode) && connection && isValid) onConnect?.(connection);
		getState().onConnectEnd?.(event);
		if (edgeUpdaterType) onReconnectEnd?.(event);
		resetRecentHandle(prevActiveHandle);
		cancelConnection();
		cancelAnimationFrame(autoPanId);
		autoPanStarted = false;
		isValid = false;
		connection = null;
		handleDomNode = null;
		doc.removeEventListener("mousemove", onPointerMove);
		doc.removeEventListener("mouseup", onPointerUp);
		doc.removeEventListener("touchmove", onPointerMove);
		doc.removeEventListener("touchend", onPointerUp);
	}
	doc.addEventListener("mousemove", onPointerMove);
	doc.addEventListener("mouseup", onPointerUp);
	doc.addEventListener("touchmove", onPointerMove);
	doc.addEventListener("touchend", onPointerUp);
}
var alwaysValid = () => true;
var selector$f = (s) => ({
	connectionStartHandle: s.connectionStartHandle,
	connectOnClick: s.connectOnClick,
	noPanClassName: s.noPanClassName
});
var connectingSelector = (nodeId, handleId, type) => (state) => {
	const { connectionStartHandle: startHandle, connectionEndHandle: endHandle, connectionClickStartHandle: clickHandle } = state;
	return {
		connecting: startHandle?.nodeId === nodeId && startHandle?.handleId === handleId && startHandle?.type === type || endHandle?.nodeId === nodeId && endHandle?.handleId === handleId && endHandle?.type === type,
		clickConnecting: clickHandle?.nodeId === nodeId && clickHandle?.handleId === handleId && clickHandle?.type === type
	};
};
var Handle = (0, import_react.forwardRef)(({ type = "source", position = Position.Top, isValidConnection, isConnectable = true, isConnectableStart = true, isConnectableEnd = true, id, onConnect, children, className, onMouseDown, onTouchStart, ...rest }, ref) => {
	const handleId = id || null;
	const isTarget = type === "target";
	const store = useStoreApi();
	const nodeId = useNodeId();
	const { connectOnClick, noPanClassName } = useStore(selector$f, shallow$1$2);
	const { connecting, clickConnecting } = useStore(connectingSelector(nodeId, handleId, type), shallow$1$2);
	if (!nodeId) store.getState().onError?.("010", errorMessages["error010"]());
	const onConnectExtended = (params) => {
		const { defaultEdgeOptions, onConnect: onConnectAction, hasDefaultEdges } = store.getState();
		const edgeParams = {
			...defaultEdgeOptions,
			...params
		};
		if (hasDefaultEdges) {
			const { edges, setEdges } = store.getState();
			setEdges(addEdge(edgeParams, edges));
		}
		onConnectAction?.(edgeParams);
		onConnect?.(edgeParams);
	};
	const onPointerDown = (event) => {
		if (!nodeId) return;
		const isMouseTriggered = isMouseEvent(event);
		if (isConnectableStart && (isMouseTriggered && event.button === 0 || !isMouseTriggered)) handlePointerDown({
			event,
			handleId,
			nodeId,
			onConnect: onConnectExtended,
			isTarget,
			getState: store.getState,
			setState: store.setState,
			isValidConnection: isValidConnection || store.getState().isValidConnection || alwaysValid
		});
		if (isMouseTriggered) onMouseDown?.(event);
		else onTouchStart?.(event);
	};
	const onClick = (event) => {
		const { onClickConnectStart, onClickConnectEnd, connectionClickStartHandle, connectionMode, isValidConnection: isValidConnectionStore } = store.getState();
		if (!nodeId || !connectionClickStartHandle && !isConnectableStart) return;
		if (!connectionClickStartHandle) {
			onClickConnectStart?.(event, {
				nodeId,
				handleId,
				handleType: type
			});
			store.setState({ connectionClickStartHandle: {
				nodeId,
				type,
				handleId
			} });
			return;
		}
		const doc = getHostForElement(event.target);
		const isValidConnectionHandler = isValidConnection || isValidConnectionStore || alwaysValid;
		const { connection, isValid } = isValidHandle({
			nodeId,
			id: handleId,
			type
		}, connectionMode, connectionClickStartHandle.nodeId, connectionClickStartHandle.handleId || null, connectionClickStartHandle.type, isValidConnectionHandler, doc);
		if (isValid) onConnectExtended(connection);
		onClickConnectEnd?.(event);
		store.setState({ connectionClickStartHandle: null });
	};
	return import_react.createElement("div", {
		"data-handleid": handleId,
		"data-nodeid": nodeId,
		"data-handlepos": position,
		"data-id": `${nodeId}-${handleId}-${type}`,
		className: cc([
			"react-flow__handle",
			`react-flow__handle-${position}`,
			"nodrag",
			noPanClassName,
			className,
			{
				source: !isTarget,
				target: isTarget,
				connectable: isConnectable,
				connectablestart: isConnectableStart,
				connectableend: isConnectableEnd,
				connecting: clickConnecting,
				connectionindicator: isConnectable && (isConnectableStart && !connecting || isConnectableEnd && connecting)
			}
		]),
		onMouseDown: onPointerDown,
		onTouchStart: onPointerDown,
		onClick: connectOnClick ? onClick : void 0,
		ref,
		...rest
	}, children);
});
Handle.displayName = "Handle";
var Handle$1 = (0, import_react.memo)(Handle);
var DefaultNode = ({ data, isConnectable, targetPosition = Position.Top, sourcePosition = Position.Bottom }) => {
	return import_react.createElement(import_react.Fragment, null, import_react.createElement(Handle$1, {
		type: "target",
		position: targetPosition,
		isConnectable
	}), data?.label, import_react.createElement(Handle$1, {
		type: "source",
		position: sourcePosition,
		isConnectable
	}));
};
DefaultNode.displayName = "DefaultNode";
var DefaultNode$1 = (0, import_react.memo)(DefaultNode);
var InputNode = ({ data, isConnectable, sourcePosition = Position.Bottom }) => import_react.createElement(import_react.Fragment, null, data?.label, import_react.createElement(Handle$1, {
	type: "source",
	position: sourcePosition,
	isConnectable
}));
InputNode.displayName = "InputNode";
var InputNode$1 = (0, import_react.memo)(InputNode);
var OutputNode = ({ data, isConnectable, targetPosition = Position.Top }) => import_react.createElement(import_react.Fragment, null, import_react.createElement(Handle$1, {
	type: "target",
	position: targetPosition,
	isConnectable
}), data?.label);
OutputNode.displayName = "OutputNode";
var OutputNode$1 = (0, import_react.memo)(OutputNode);
var GroupNode = () => null;
GroupNode.displayName = "GroupNode";
var selector$e = (s) => ({
	selectedNodes: s.getNodes().filter((n) => n.selected),
	selectedEdges: s.edges.filter((e) => e.selected).map((e) => ({ ...e }))
});
var selectId = (obj) => obj.id;
function areEqual(a, b) {
	return shallow$1$2(a.selectedNodes.map(selectId), b.selectedNodes.map(selectId)) && shallow$1$2(a.selectedEdges.map(selectId), b.selectedEdges.map(selectId));
}
var SelectionListener = (0, import_react.memo)(({ onSelectionChange }) => {
	const store = useStoreApi();
	const { selectedNodes, selectedEdges } = useStore(selector$e, areEqual);
	(0, import_react.useEffect)(() => {
		const params = {
			nodes: selectedNodes,
			edges: selectedEdges
		};
		onSelectionChange?.(params);
		store.getState().onSelectionChange.forEach((fn) => fn(params));
	}, [
		selectedNodes,
		selectedEdges,
		onSelectionChange
	]);
	return null;
});
SelectionListener.displayName = "SelectionListener";
var changeSelector = (s) => !!s.onSelectionChange;
function Wrapper$1({ onSelectionChange }) {
	const storeHasSelectionChange = useStore(changeSelector);
	if (onSelectionChange || storeHasSelectionChange) return import_react.createElement(SelectionListener, { onSelectionChange });
	return null;
}
var selector$d = (s) => ({
	setNodes: s.setNodes,
	setEdges: s.setEdges,
	setDefaultNodesAndEdges: s.setDefaultNodesAndEdges,
	setMinZoom: s.setMinZoom,
	setMaxZoom: s.setMaxZoom,
	setTranslateExtent: s.setTranslateExtent,
	setNodeExtent: s.setNodeExtent,
	reset: s.reset
});
function useStoreUpdater(value, setStoreState) {
	(0, import_react.useEffect)(() => {
		if (typeof value !== "undefined") setStoreState(value);
	}, [value]);
}
function useDirectStoreUpdater(key, value, setState) {
	(0, import_react.useEffect)(() => {
		if (typeof value !== "undefined") setState({ [key]: value });
	}, [value]);
}
var StoreUpdater = ({ nodes, edges, defaultNodes, defaultEdges, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, nodesDraggable, nodesConnectable, nodesFocusable, edgesFocusable, edgesUpdatable, elevateNodesOnSelect, minZoom, maxZoom, nodeExtent, onNodesChange, onEdgesChange, elementsSelectable, connectionMode, snapGrid, snapToGrid, translateExtent, connectOnClick, defaultEdgeOptions, fitView, fitViewOptions, onNodesDelete, onEdgesDelete, onNodeDrag, onNodeDragStart, onNodeDragStop, onSelectionDrag, onSelectionDragStart, onSelectionDragStop, noPanClassName, nodeOrigin, rfId, autoPanOnConnect, autoPanOnNodeDrag, onError, connectionRadius, isValidConnection, nodeDragThreshold }) => {
	const { setNodes, setEdges, setDefaultNodesAndEdges, setMinZoom, setMaxZoom, setTranslateExtent, setNodeExtent, reset } = useStore(selector$d, shallow$1$2);
	const store = useStoreApi();
	(0, import_react.useEffect)(() => {
		const edgesWithDefaults = defaultEdges?.map((e) => ({
			...e,
			...defaultEdgeOptions
		}));
		setDefaultNodesAndEdges(defaultNodes, edgesWithDefaults);
		return () => {
			reset();
		};
	}, []);
	useDirectStoreUpdater("defaultEdgeOptions", defaultEdgeOptions, store.setState);
	useDirectStoreUpdater("connectionMode", connectionMode, store.setState);
	useDirectStoreUpdater("onConnect", onConnect, store.setState);
	useDirectStoreUpdater("onConnectStart", onConnectStart, store.setState);
	useDirectStoreUpdater("onConnectEnd", onConnectEnd, store.setState);
	useDirectStoreUpdater("onClickConnectStart", onClickConnectStart, store.setState);
	useDirectStoreUpdater("onClickConnectEnd", onClickConnectEnd, store.setState);
	useDirectStoreUpdater("nodesDraggable", nodesDraggable, store.setState);
	useDirectStoreUpdater("nodesConnectable", nodesConnectable, store.setState);
	useDirectStoreUpdater("nodesFocusable", nodesFocusable, store.setState);
	useDirectStoreUpdater("edgesFocusable", edgesFocusable, store.setState);
	useDirectStoreUpdater("edgesUpdatable", edgesUpdatable, store.setState);
	useDirectStoreUpdater("elementsSelectable", elementsSelectable, store.setState);
	useDirectStoreUpdater("elevateNodesOnSelect", elevateNodesOnSelect, store.setState);
	useDirectStoreUpdater("snapToGrid", snapToGrid, store.setState);
	useDirectStoreUpdater("snapGrid", snapGrid, store.setState);
	useDirectStoreUpdater("onNodesChange", onNodesChange, store.setState);
	useDirectStoreUpdater("onEdgesChange", onEdgesChange, store.setState);
	useDirectStoreUpdater("connectOnClick", connectOnClick, store.setState);
	useDirectStoreUpdater("fitViewOnInit", fitView, store.setState);
	useDirectStoreUpdater("fitViewOnInitOptions", fitViewOptions, store.setState);
	useDirectStoreUpdater("onNodesDelete", onNodesDelete, store.setState);
	useDirectStoreUpdater("onEdgesDelete", onEdgesDelete, store.setState);
	useDirectStoreUpdater("onNodeDrag", onNodeDrag, store.setState);
	useDirectStoreUpdater("onNodeDragStart", onNodeDragStart, store.setState);
	useDirectStoreUpdater("onNodeDragStop", onNodeDragStop, store.setState);
	useDirectStoreUpdater("onSelectionDrag", onSelectionDrag, store.setState);
	useDirectStoreUpdater("onSelectionDragStart", onSelectionDragStart, store.setState);
	useDirectStoreUpdater("onSelectionDragStop", onSelectionDragStop, store.setState);
	useDirectStoreUpdater("noPanClassName", noPanClassName, store.setState);
	useDirectStoreUpdater("nodeOrigin", nodeOrigin, store.setState);
	useDirectStoreUpdater("rfId", rfId, store.setState);
	useDirectStoreUpdater("autoPanOnConnect", autoPanOnConnect, store.setState);
	useDirectStoreUpdater("autoPanOnNodeDrag", autoPanOnNodeDrag, store.setState);
	useDirectStoreUpdater("onError", onError, store.setState);
	useDirectStoreUpdater("connectionRadius", connectionRadius, store.setState);
	useDirectStoreUpdater("isValidConnection", isValidConnection, store.setState);
	useDirectStoreUpdater("nodeDragThreshold", nodeDragThreshold, store.setState);
	useStoreUpdater(nodes, setNodes);
	useStoreUpdater(edges, setEdges);
	useStoreUpdater(minZoom, setMinZoom);
	useStoreUpdater(maxZoom, setMaxZoom);
	useStoreUpdater(translateExtent, setTranslateExtent);
	useStoreUpdater(nodeExtent, setNodeExtent);
	return null;
};
var style = { display: "none" };
var ariaLiveStyle = {
	position: "absolute",
	width: 1,
	height: 1,
	margin: -1,
	border: 0,
	padding: 0,
	overflow: "hidden",
	clip: "rect(0px, 0px, 0px, 0px)",
	clipPath: "inset(100%)"
};
var ARIA_NODE_DESC_KEY = "react-flow__node-desc";
var ARIA_EDGE_DESC_KEY = "react-flow__edge-desc";
var ARIA_LIVE_MESSAGE = "react-flow__aria-live";
var selector$c = (s) => s.ariaLiveMessage;
function AriaLiveMessage({ rfId }) {
	const ariaLiveMessage = useStore(selector$c);
	return import_react.createElement("div", {
		id: `${ARIA_LIVE_MESSAGE}-${rfId}`,
		"aria-live": "assertive",
		"aria-atomic": "true",
		style: ariaLiveStyle
	}, ariaLiveMessage);
}
function A11yDescriptions({ rfId, disableKeyboardA11y }) {
	return import_react.createElement(import_react.Fragment, null, import_react.createElement("div", {
		id: `${ARIA_NODE_DESC_KEY}-${rfId}`,
		style
	}, "Press enter or space to select a node.", !disableKeyboardA11y && "You can then use the arrow keys to move the node around.", " Press delete to remove it and escape to cancel.", " "), import_react.createElement("div", {
		id: `${ARIA_EDGE_DESC_KEY}-${rfId}`,
		style
	}, "Press enter or space to select an edge. You can then press delete to remove it or escape to cancel."), !disableKeyboardA11y && import_react.createElement(AriaLiveMessage, { rfId }));
}
var useKeyPress = (keyCode = null, options = { actInsideInputWithModifier: true }) => {
	const [keyPressed, setKeyPressed] = (0, import_react.useState)(false);
	const modifierPressed = (0, import_react.useRef)(false);
	const pressedKeys = (0, import_react.useRef)(/* @__PURE__ */ new Set([]));
	const [keyCodes, keysToWatch] = (0, import_react.useMemo)(() => {
		if (keyCode !== null) {
			const keys = (Array.isArray(keyCode) ? keyCode : [keyCode]).filter((kc) => typeof kc === "string").map((kc) => kc.split("+"));
			return [keys, keys.reduce((res, item) => res.concat(...item), [])];
		}
		return [[], []];
	}, [keyCode]);
	(0, import_react.useEffect)(() => {
		const doc = typeof document !== "undefined" ? document : null;
		const target = options?.target || doc;
		if (keyCode !== null) {
			const downHandler = (event) => {
				modifierPressed.current = event.ctrlKey || event.metaKey || event.shiftKey;
				if ((!modifierPressed.current || modifierPressed.current && !options.actInsideInputWithModifier) && isInputDOMNode(event)) return false;
				const keyOrCode = useKeyOrCode(event.code, keysToWatch);
				pressedKeys.current.add(event[keyOrCode]);
				if (isMatchingKey(keyCodes, pressedKeys.current, false)) {
					event.preventDefault();
					setKeyPressed(true);
				}
			};
			const upHandler = (event) => {
				if ((!modifierPressed.current || modifierPressed.current && !options.actInsideInputWithModifier) && isInputDOMNode(event)) return false;
				const keyOrCode = useKeyOrCode(event.code, keysToWatch);
				if (isMatchingKey(keyCodes, pressedKeys.current, true)) {
					setKeyPressed(false);
					pressedKeys.current.clear();
				} else pressedKeys.current.delete(event[keyOrCode]);
				if (event.key === "Meta") pressedKeys.current.clear();
				modifierPressed.current = false;
			};
			const resetHandler = () => {
				pressedKeys.current.clear();
				setKeyPressed(false);
			};
			target?.addEventListener("keydown", downHandler);
			target?.addEventListener("keyup", upHandler);
			window.addEventListener("blur", resetHandler);
			return () => {
				target?.removeEventListener("keydown", downHandler);
				target?.removeEventListener("keyup", upHandler);
				window.removeEventListener("blur", resetHandler);
			};
		}
	}, [keyCode, setKeyPressed]);
	return keyPressed;
};
function isMatchingKey(keyCodes, pressedKeys, isUp) {
	return keyCodes.filter((keys) => isUp || keys.length === pressedKeys.size).some((keys) => keys.every((k) => pressedKeys.has(k)));
}
function useKeyOrCode(eventCode, keysToWatch) {
	return keysToWatch.includes(eventCode) ? "code" : "key";
}
function calculateXYZPosition(node, nodeInternals, result, nodeOrigin) {
	const parentId = node.parentNode || node.parentId;
	if (!parentId) return result;
	const parentNode = nodeInternals.get(parentId);
	const parentNodePosition = getNodePositionWithOrigin(parentNode, nodeOrigin);
	return calculateXYZPosition(parentNode, nodeInternals, {
		x: (result.x ?? 0) + parentNodePosition.x,
		y: (result.y ?? 0) + parentNodePosition.y,
		z: (parentNode[internalsSymbol]?.z ?? 0) > (result.z ?? 0) ? parentNode[internalsSymbol]?.z ?? 0 : result.z ?? 0
	}, nodeOrigin);
}
function updateAbsoluteNodePositions(nodeInternals, nodeOrigin, parentNodes) {
	nodeInternals.forEach((node) => {
		const parentId = node.parentNode || node.parentId;
		if (parentId && !nodeInternals.has(parentId)) throw new Error(`Parent node ${parentId} not found`);
		if (parentId || parentNodes?.[node.id]) {
			const { x, y, z } = calculateXYZPosition(node, nodeInternals, {
				...node.position,
				z: node[internalsSymbol]?.z ?? 0
			}, nodeOrigin);
			node.positionAbsolute = {
				x,
				y
			};
			node[internalsSymbol].z = z;
			if (parentNodes?.[node.id]) node[internalsSymbol].isParent = true;
		}
	});
}
function createNodeInternals(nodes, nodeInternals, nodeOrigin, elevateNodesOnSelect) {
	const nextNodeInternals = /* @__PURE__ */ new Map();
	const parentNodes = {};
	const selectedNodeZ = elevateNodesOnSelect ? 1e3 : 0;
	nodes.forEach((node) => {
		const z = (isNumeric(node.zIndex) ? node.zIndex : 0) + (node.selected ? selectedNodeZ : 0);
		const currInternals = nodeInternals.get(node.id);
		const internals = {
			...node,
			positionAbsolute: {
				x: node.position.x,
				y: node.position.y
			}
		};
		const parentId = node.parentNode || node.parentId;
		if (parentId) parentNodes[parentId] = true;
		const resetHandleBounds = currInternals?.type && currInternals?.type !== node.type;
		Object.defineProperty(internals, internalsSymbol, {
			enumerable: false,
			value: {
				handleBounds: resetHandleBounds ? void 0 : currInternals?.[internalsSymbol]?.handleBounds,
				z
			}
		});
		nextNodeInternals.set(node.id, internals);
	});
	updateAbsoluteNodePositions(nextNodeInternals, nodeOrigin, parentNodes);
	return nextNodeInternals;
}
function fitView(get, options = {}) {
	const { getNodes, width, height, minZoom, maxZoom, d3Zoom, d3Selection, fitViewOnInitDone, fitViewOnInit, nodeOrigin } = get();
	const isInitialFitView = options.initial && !fitViewOnInitDone && fitViewOnInit;
	if (d3Zoom && d3Selection && (isInitialFitView || !options.initial)) {
		const nodes = getNodes().filter((n) => {
			const isVisible = options.includeHiddenNodes ? n.width && n.height : !n.hidden;
			if (options.nodes?.length) return isVisible && options.nodes.some((optionNode) => optionNode.id === n.id);
			return isVisible;
		});
		const nodesInitialized = nodes.every((n) => n.width && n.height);
		if (nodes.length > 0 && nodesInitialized) {
			const { x, y, zoom } = getViewportForBounds(getNodesBounds(nodes, nodeOrigin), width, height, options.minZoom ?? minZoom, options.maxZoom ?? maxZoom, options.padding ?? .1);
			const nextTransform = identity.translate(x, y).scale(zoom);
			if (typeof options.duration === "number" && options.duration > 0) d3Zoom.transform(getD3Transition(d3Selection, options.duration), nextTransform);
			else d3Zoom.transform(d3Selection, nextTransform);
			return true;
		}
	}
	return false;
}
function handleControlledNodeSelectionChange(nodeChanges, nodeInternals) {
	nodeChanges.forEach((change) => {
		const node = nodeInternals.get(change.id);
		if (node) nodeInternals.set(node.id, {
			...node,
			[internalsSymbol]: node[internalsSymbol],
			selected: change.selected
		});
	});
	return new Map(nodeInternals);
}
function handleControlledEdgeSelectionChange(edgeChanges, edges) {
	return edges.map((e) => {
		const change = edgeChanges.find((change) => change.id === e.id);
		if (change) e.selected = change.selected;
		return e;
	});
}
function updateNodesAndEdgesSelections({ changedNodes, changedEdges, get, set }) {
	const { nodeInternals, edges, onNodesChange, onEdgesChange, hasDefaultNodes, hasDefaultEdges } = get();
	if (changedNodes?.length) {
		if (hasDefaultNodes) set({ nodeInternals: handleControlledNodeSelectionChange(changedNodes, nodeInternals) });
		onNodesChange?.(changedNodes);
	}
	if (changedEdges?.length) {
		if (hasDefaultEdges) set({ edges: handleControlledEdgeSelectionChange(changedEdges, edges) });
		onEdgesChange?.(changedEdges);
	}
}
var noop = () => {};
var initialViewportHelper = {
	zoomIn: noop,
	zoomOut: noop,
	zoomTo: noop,
	getZoom: () => 1,
	setViewport: noop,
	getViewport: () => ({
		x: 0,
		y: 0,
		zoom: 1
	}),
	fitView: () => false,
	setCenter: noop,
	fitBounds: noop,
	project: (position) => position,
	screenToFlowPosition: (position) => position,
	flowToScreenPosition: (position) => position,
	viewportInitialized: false
};
var selector$b = (s) => ({
	d3Zoom: s.d3Zoom,
	d3Selection: s.d3Selection
});
var useViewportHelper = () => {
	const store = useStoreApi();
	const { d3Zoom, d3Selection } = useStore(selector$b, shallow$1$2);
	return (0, import_react.useMemo)(() => {
		if (d3Selection && d3Zoom) return {
			zoomIn: (options) => d3Zoom.scaleBy(getD3Transition(d3Selection, options?.duration), 1.2),
			zoomOut: (options) => d3Zoom.scaleBy(getD3Transition(d3Selection, options?.duration), 1 / 1.2),
			zoomTo: (zoomLevel, options) => d3Zoom.scaleTo(getD3Transition(d3Selection, options?.duration), zoomLevel),
			getZoom: () => store.getState().transform[2],
			setViewport: (transform, options) => {
				const [x, y, zoom] = store.getState().transform;
				const nextTransform = identity.translate(transform.x ?? x, transform.y ?? y).scale(transform.zoom ?? zoom);
				d3Zoom.transform(getD3Transition(d3Selection, options?.duration), nextTransform);
			},
			getViewport: () => {
				const [x, y, zoom] = store.getState().transform;
				return {
					x,
					y,
					zoom
				};
			},
			fitView: (options) => fitView(store.getState, options),
			setCenter: (x, y, options) => {
				const { width, height, maxZoom } = store.getState();
				const nextZoom = typeof options?.zoom !== "undefined" ? options.zoom : maxZoom;
				const centerX = width / 2 - x * nextZoom;
				const centerY = height / 2 - y * nextZoom;
				const transform = identity.translate(centerX, centerY).scale(nextZoom);
				d3Zoom.transform(getD3Transition(d3Selection, options?.duration), transform);
			},
			fitBounds: (bounds, options) => {
				const { width, height, minZoom, maxZoom } = store.getState();
				const { x, y, zoom } = getViewportForBounds(bounds, width, height, minZoom, maxZoom, options?.padding ?? .1);
				const transform = identity.translate(x, y).scale(zoom);
				d3Zoom.transform(getD3Transition(d3Selection, options?.duration), transform);
			},
			project: (position) => {
				const { transform, snapToGrid, snapGrid } = store.getState();
				console.warn("[DEPRECATED] `project` is deprecated. Instead use `screenToFlowPosition`. There is no need to subtract the react flow bounds anymore! https://reactflow.dev/api-reference/types/react-flow-instance#screen-to-flow-position");
				return pointToRendererPoint(position, transform, snapToGrid, snapGrid);
			},
			screenToFlowPosition: (position) => {
				const { transform, snapToGrid, snapGrid, domNode } = store.getState();
				if (!domNode) return position;
				const { x: domX, y: domY } = domNode.getBoundingClientRect();
				return pointToRendererPoint({
					x: position.x - domX,
					y: position.y - domY
				}, transform, snapToGrid, snapGrid);
			},
			flowToScreenPosition: (position) => {
				const { transform, domNode } = store.getState();
				if (!domNode) return position;
				const { x: domX, y: domY } = domNode.getBoundingClientRect();
				const rendererPosition = rendererPointToPoint(position, transform);
				return {
					x: rendererPosition.x + domX,
					y: rendererPosition.y + domY
				};
			},
			viewportInitialized: true
		};
		return initialViewportHelper;
	}, [d3Zoom, d3Selection]);
};
function useReactFlow() {
	const viewportHelper = useViewportHelper();
	const store = useStoreApi();
	const getNodes = (0, import_react.useCallback)(() => {
		return store.getState().getNodes().map((n) => ({ ...n }));
	}, []);
	const getNode = (0, import_react.useCallback)((id) => {
		return store.getState().nodeInternals.get(id);
	}, []);
	const getEdges = (0, import_react.useCallback)(() => {
		const { edges = [] } = store.getState();
		return edges.map((e) => ({ ...e }));
	}, []);
	const getEdge = (0, import_react.useCallback)((id) => {
		const { edges = [] } = store.getState();
		return edges.find((e) => e.id === id);
	}, []);
	const setNodes = (0, import_react.useCallback)((payload) => {
		const { getNodes, setNodes, hasDefaultNodes, onNodesChange } = store.getState();
		const nodes = getNodes();
		const nextNodes = typeof payload === "function" ? payload(nodes) : payload;
		if (hasDefaultNodes) setNodes(nextNodes);
		else if (onNodesChange) onNodesChange(nextNodes.length === 0 ? nodes.map((node) => ({
			type: "remove",
			id: node.id
		})) : nextNodes.map((node) => ({
			item: node,
			type: "reset"
		})));
	}, []);
	const setEdges = (0, import_react.useCallback)((payload) => {
		const { edges = [], setEdges, hasDefaultEdges, onEdgesChange } = store.getState();
		const nextEdges = typeof payload === "function" ? payload(edges) : payload;
		if (hasDefaultEdges) setEdges(nextEdges);
		else if (onEdgesChange) onEdgesChange(nextEdges.length === 0 ? edges.map((edge) => ({
			type: "remove",
			id: edge.id
		})) : nextEdges.map((edge) => ({
			item: edge,
			type: "reset"
		})));
	}, []);
	const addNodes = (0, import_react.useCallback)((payload) => {
		const nodes = Array.isArray(payload) ? payload : [payload];
		const { getNodes, setNodes, hasDefaultNodes, onNodesChange } = store.getState();
		if (hasDefaultNodes) setNodes([...getNodes(), ...nodes]);
		else if (onNodesChange) onNodesChange(nodes.map((node) => ({
			item: node,
			type: "add"
		})));
	}, []);
	const addEdges = (0, import_react.useCallback)((payload) => {
		const nextEdges = Array.isArray(payload) ? payload : [payload];
		const { edges = [], setEdges, hasDefaultEdges, onEdgesChange } = store.getState();
		if (hasDefaultEdges) setEdges([...edges, ...nextEdges]);
		else if (onEdgesChange) onEdgesChange(nextEdges.map((edge) => ({
			item: edge,
			type: "add"
		})));
	}, []);
	const toObject = (0, import_react.useCallback)(() => {
		const { getNodes, edges = [], transform } = store.getState();
		const [x, y, zoom] = transform;
		return {
			nodes: getNodes().map((n) => ({ ...n })),
			edges: edges.map((e) => ({ ...e })),
			viewport: {
				x,
				y,
				zoom
			}
		};
	}, []);
	const deleteElements = (0, import_react.useCallback)(({ nodes: nodesDeleted, edges: edgesDeleted }) => {
		const { nodeInternals, getNodes, edges, hasDefaultNodes, hasDefaultEdges, onNodesDelete, onEdgesDelete, onNodesChange, onEdgesChange } = store.getState();
		const nodeIds = (nodesDeleted || []).map((node) => node.id);
		const edgeIds = (edgesDeleted || []).map((edge) => edge.id);
		const nodesToRemove = getNodes().reduce((res, node) => {
			const parentId = node.parentNode || node.parentId;
			const parentHit = !nodeIds.includes(node.id) && parentId && res.find((n) => n.id === parentId);
			if ((typeof node.deletable === "boolean" ? node.deletable : true) && (nodeIds.includes(node.id) || parentHit)) res.push(node);
			return res;
		}, []);
		const deletableEdges = edges.filter((e) => typeof e.deletable === "boolean" ? e.deletable : true);
		const initialHitEdges = deletableEdges.filter((e) => edgeIds.includes(e.id));
		if (nodesToRemove || initialHitEdges) {
			const connectedEdges = getConnectedEdges(nodesToRemove, deletableEdges);
			const edgesToRemove = [...initialHitEdges, ...connectedEdges];
			const edgeIdsToRemove = edgesToRemove.reduce((res, edge) => {
				if (!res.includes(edge.id)) res.push(edge.id);
				return res;
			}, []);
			if (hasDefaultEdges || hasDefaultNodes) {
				if (hasDefaultEdges) store.setState({ edges: edges.filter((e) => !edgeIdsToRemove.includes(e.id)) });
				if (hasDefaultNodes) {
					nodesToRemove.forEach((node) => {
						nodeInternals.delete(node.id);
					});
					store.setState({ nodeInternals: new Map(nodeInternals) });
				}
			}
			if (edgeIdsToRemove.length > 0) {
				onEdgesDelete?.(edgesToRemove);
				if (onEdgesChange) onEdgesChange(edgeIdsToRemove.map((id) => ({
					id,
					type: "remove"
				})));
			}
			if (nodesToRemove.length > 0) {
				onNodesDelete?.(nodesToRemove);
				if (onNodesChange) onNodesChange(nodesToRemove.map((n) => ({
					id: n.id,
					type: "remove"
				})));
			}
		}
	}, []);
	const getNodeRect = (0, import_react.useCallback)((nodeOrRect) => {
		const isRect = isRectObject(nodeOrRect);
		const node = isRect ? null : store.getState().nodeInternals.get(nodeOrRect.id);
		if (!isRect && !node) return [
			null,
			null,
			isRect
		];
		return [
			isRect ? nodeOrRect : nodeToRect(node),
			node,
			isRect
		];
	}, []);
	const getIntersectingNodes = (0, import_react.useCallback)((nodeOrRect, partially = true, nodes) => {
		const [nodeRect, node, isRect] = getNodeRect(nodeOrRect);
		if (!nodeRect) return [];
		return (nodes || store.getState().getNodes()).filter((n) => {
			if (!isRect && (n.id === node.id || !n.positionAbsolute)) return false;
			const overlappingArea = getOverlappingArea(nodeToRect(n), nodeRect);
			return partially && overlappingArea > 0 || overlappingArea >= nodeRect.width * nodeRect.height;
		});
	}, []);
	const isNodeIntersecting = (0, import_react.useCallback)((nodeOrRect, area, partially = true) => {
		const [nodeRect] = getNodeRect(nodeOrRect);
		if (!nodeRect) return false;
		const overlappingArea = getOverlappingArea(nodeRect, area);
		return partially && overlappingArea > 0 || overlappingArea >= nodeRect.width * nodeRect.height;
	}, []);
	return (0, import_react.useMemo)(() => {
		return {
			...viewportHelper,
			getNodes,
			getNode,
			getEdges,
			getEdge,
			setNodes,
			setEdges,
			addNodes,
			addEdges,
			toObject,
			deleteElements,
			getIntersectingNodes,
			isNodeIntersecting
		};
	}, [
		viewportHelper,
		getNodes,
		getNode,
		getEdges,
		getEdge,
		setNodes,
		setEdges,
		addNodes,
		addEdges,
		toObject,
		deleteElements,
		getIntersectingNodes,
		isNodeIntersecting
	]);
}
var deleteKeyOptions = { actInsideInputWithModifier: false };
var useGlobalKeyHandler = ({ deleteKeyCode, multiSelectionKeyCode }) => {
	const store = useStoreApi();
	const { deleteElements } = useReactFlow();
	const deleteKeyPressed = useKeyPress(deleteKeyCode, deleteKeyOptions);
	const multiSelectionKeyPressed = useKeyPress(multiSelectionKeyCode);
	(0, import_react.useEffect)(() => {
		if (deleteKeyPressed) {
			const { edges, getNodes } = store.getState();
			deleteElements({
				nodes: getNodes().filter((node) => node.selected),
				edges: edges.filter((edge) => edge.selected)
			});
			store.setState({ nodesSelectionActive: false });
		}
	}, [deleteKeyPressed]);
	(0, import_react.useEffect)(() => {
		store.setState({ multiSelectionActive: multiSelectionKeyPressed });
	}, [multiSelectionKeyPressed]);
};
function useResizeHandler(rendererNode) {
	const store = useStoreApi();
	(0, import_react.useEffect)(() => {
		let resizeObserver;
		const updateDimensions = () => {
			if (!rendererNode.current) return;
			const size = getDimensions$1(rendererNode.current);
			if (size.height === 0 || size.width === 0) store.getState().onError?.("004", errorMessages["error004"]());
			store.setState({
				width: size.width || 500,
				height: size.height || 500
			});
		};
		updateDimensions();
		window.addEventListener("resize", updateDimensions);
		if (rendererNode.current) {
			resizeObserver = new ResizeObserver(() => updateDimensions());
			resizeObserver.observe(rendererNode.current);
		}
		return () => {
			window.removeEventListener("resize", updateDimensions);
			if (resizeObserver && rendererNode.current) resizeObserver.unobserve(rendererNode.current);
		};
	}, []);
}
var containerStyle = {
	position: "absolute",
	width: "100%",
	height: "100%",
	top: 0,
	left: 0
};
var viewChanged = (prevViewport, eventTransform) => prevViewport.x !== eventTransform.x || prevViewport.y !== eventTransform.y || prevViewport.zoom !== eventTransform.k;
var eventToFlowTransform = (eventTransform) => ({
	x: eventTransform.x,
	y: eventTransform.y,
	zoom: eventTransform.k
});
var isWrappedWithClass = (event, className) => event.target.closest(`.${className}`);
var isRightClickPan = (panOnDrag, usedButton) => usedButton === 2 && Array.isArray(panOnDrag) && panOnDrag.includes(2);
var wheelDelta = (event) => {
	const factor = event.ctrlKey && isMacOs() ? 10 : 1;
	return -event.deltaY * (event.deltaMode === 1 ? .05 : event.deltaMode ? 1 : .002) * factor;
};
var selector$a = (s) => ({
	d3Zoom: s.d3Zoom,
	d3Selection: s.d3Selection,
	d3ZoomHandler: s.d3ZoomHandler,
	userSelectionActive: s.userSelectionActive
});
var ZoomPane = ({ onMove, onMoveStart, onMoveEnd, onPaneContextMenu, zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = .5, panOnScrollMode = PanOnScrollMode.Free, zoomOnDoubleClick = true, elementsSelectable, panOnDrag = true, defaultViewport, translateExtent, minZoom, maxZoom, zoomActivationKeyCode, preventScrolling = true, children, noWheelClassName, noPanClassName }) => {
	const timerId = (0, import_react.useRef)();
	const store = useStoreApi();
	const isZoomingOrPanning = (0, import_react.useRef)(false);
	const zoomedWithRightMouseButton = (0, import_react.useRef)(false);
	const zoomPane = (0, import_react.useRef)(null);
	const prevTransform = (0, import_react.useRef)({
		x: 0,
		y: 0,
		zoom: 0
	});
	const { d3Zoom, d3Selection, d3ZoomHandler, userSelectionActive } = useStore(selector$a, shallow$1$2);
	const zoomActivationKeyPressed = useKeyPress(zoomActivationKeyCode);
	const mouseButton = (0, import_react.useRef)(0);
	const isPanScrolling = (0, import_react.useRef)(false);
	const panScrollTimeout = (0, import_react.useRef)();
	useResizeHandler(zoomPane);
	(0, import_react.useEffect)(() => {
		if (zoomPane.current) {
			const bbox = zoomPane.current.getBoundingClientRect();
			const d3ZoomInstance = zoom_default().scaleExtent([minZoom, maxZoom]).translateExtent(translateExtent);
			const selection = select_default$1(zoomPane.current).call(d3ZoomInstance);
			const updatedTransform = identity.translate(defaultViewport.x, defaultViewport.y).scale(clamp$1(defaultViewport.zoom, minZoom, maxZoom));
			const extent = [[0, 0], [bbox.width, bbox.height]];
			const constrainedTransform = d3ZoomInstance.constrain()(updatedTransform, extent, translateExtent);
			d3ZoomInstance.transform(selection, constrainedTransform);
			d3ZoomInstance.wheelDelta(wheelDelta);
			store.setState({
				d3Zoom: d3ZoomInstance,
				d3Selection: selection,
				d3ZoomHandler: selection.on("wheel.zoom"),
				transform: [
					constrainedTransform.x,
					constrainedTransform.y,
					constrainedTransform.k
				],
				domNode: zoomPane.current.closest(".react-flow")
			});
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (d3Selection && d3Zoom) {
			if (panOnScroll && !zoomActivationKeyPressed && !userSelectionActive) d3Selection.on("wheel.zoom", (event) => {
				if (isWrappedWithClass(event, noWheelClassName)) return false;
				event.preventDefault();
				event.stopImmediatePropagation();
				const currentZoom = d3Selection.property("__zoom").k || 1;
				if (event.ctrlKey && zoomOnPinch) {
					const point = pointer_default(event);
					const pinchDelta = wheelDelta(event);
					const zoom = currentZoom * Math.pow(2, pinchDelta);
					d3Zoom.scaleTo(d3Selection, zoom, point, event);
					return;
				}
				const deltaNormalize = event.deltaMode === 1 ? 20 : 1;
				let deltaX = panOnScrollMode === PanOnScrollMode.Vertical ? 0 : event.deltaX * deltaNormalize;
				let deltaY = panOnScrollMode === PanOnScrollMode.Horizontal ? 0 : event.deltaY * deltaNormalize;
				if (!isMacOs() && event.shiftKey && panOnScrollMode !== PanOnScrollMode.Vertical) {
					deltaX = event.deltaY * deltaNormalize;
					deltaY = 0;
				}
				d3Zoom.translateBy(d3Selection, -(deltaX / currentZoom) * panOnScrollSpeed, -(deltaY / currentZoom) * panOnScrollSpeed, { internal: true });
				const nextViewport = eventToFlowTransform(d3Selection.property("__zoom"));
				const { onViewportChangeStart, onViewportChange, onViewportChangeEnd } = store.getState();
				clearTimeout(panScrollTimeout.current);
				if (!isPanScrolling.current) {
					isPanScrolling.current = true;
					onMoveStart?.(event, nextViewport);
					onViewportChangeStart?.(nextViewport);
				}
				if (isPanScrolling.current) {
					onMove?.(event, nextViewport);
					onViewportChange?.(nextViewport);
					panScrollTimeout.current = setTimeout(() => {
						onMoveEnd?.(event, nextViewport);
						onViewportChangeEnd?.(nextViewport);
						isPanScrolling.current = false;
					}, 150);
				}
			}, { passive: false });
			else if (typeof d3ZoomHandler !== "undefined") d3Selection.on("wheel.zoom", function(event, d) {
				if (!preventScrolling && event.type === "wheel" && !event.ctrlKey || isWrappedWithClass(event, noWheelClassName)) return null;
				event.preventDefault();
				d3ZoomHandler.call(this, event, d);
			}, { passive: false });
		}
	}, [
		userSelectionActive,
		panOnScroll,
		panOnScrollMode,
		d3Selection,
		d3Zoom,
		d3ZoomHandler,
		zoomActivationKeyPressed,
		zoomOnPinch,
		preventScrolling,
		noWheelClassName,
		onMoveStart,
		onMove,
		onMoveEnd
	]);
	(0, import_react.useEffect)(() => {
		if (d3Zoom) d3Zoom.on("start", (event) => {
			if (!event.sourceEvent || event.sourceEvent.internal) return null;
			mouseButton.current = event.sourceEvent?.button;
			const { onViewportChangeStart } = store.getState();
			const flowTransform = eventToFlowTransform(event.transform);
			isZoomingOrPanning.current = true;
			prevTransform.current = flowTransform;
			if (event.sourceEvent?.type === "mousedown") store.setState({ paneDragging: true });
			onViewportChangeStart?.(flowTransform);
			onMoveStart?.(event.sourceEvent, flowTransform);
		});
	}, [d3Zoom, onMoveStart]);
	(0, import_react.useEffect)(() => {
		if (d3Zoom) {
			if (userSelectionActive && !isZoomingOrPanning.current) d3Zoom.on("zoom", null);
			else if (!userSelectionActive) d3Zoom.on("zoom", (event) => {
				const { onViewportChange } = store.getState();
				store.setState({ transform: [
					event.transform.x,
					event.transform.y,
					event.transform.k
				] });
				zoomedWithRightMouseButton.current = !!(onPaneContextMenu && isRightClickPan(panOnDrag, mouseButton.current ?? 0));
				if ((onMove || onViewportChange) && !event.sourceEvent?.internal) {
					const flowTransform = eventToFlowTransform(event.transform);
					onViewportChange?.(flowTransform);
					onMove?.(event.sourceEvent, flowTransform);
				}
			});
		}
	}, [
		userSelectionActive,
		d3Zoom,
		onMove,
		panOnDrag,
		onPaneContextMenu
	]);
	(0, import_react.useEffect)(() => {
		if (d3Zoom) d3Zoom.on("end", (event) => {
			if (!event.sourceEvent || event.sourceEvent.internal) return null;
			const { onViewportChangeEnd } = store.getState();
			isZoomingOrPanning.current = false;
			store.setState({ paneDragging: false });
			if (onPaneContextMenu && isRightClickPan(panOnDrag, mouseButton.current ?? 0) && !zoomedWithRightMouseButton.current) onPaneContextMenu(event.sourceEvent);
			zoomedWithRightMouseButton.current = false;
			if ((onMoveEnd || onViewportChangeEnd) && viewChanged(prevTransform.current, event.transform)) {
				const flowTransform = eventToFlowTransform(event.transform);
				prevTransform.current = flowTransform;
				clearTimeout(timerId.current);
				timerId.current = setTimeout(() => {
					onViewportChangeEnd?.(flowTransform);
					onMoveEnd?.(event.sourceEvent, flowTransform);
				}, panOnScroll ? 150 : 0);
			}
		});
	}, [
		d3Zoom,
		panOnScroll,
		panOnDrag,
		onMoveEnd,
		onPaneContextMenu
	]);
	(0, import_react.useEffect)(() => {
		if (d3Zoom) d3Zoom.filter((event) => {
			const zoomScroll = zoomActivationKeyPressed || zoomOnScroll;
			const pinchZoom = zoomOnPinch && event.ctrlKey;
			if ((panOnDrag === true || Array.isArray(panOnDrag) && panOnDrag.includes(1)) && event.button === 1 && event.type === "mousedown" && (isWrappedWithClass(event, "react-flow__node") || isWrappedWithClass(event, "react-flow__edge"))) return true;
			if (!panOnDrag && !zoomScroll && !panOnScroll && !zoomOnDoubleClick && !zoomOnPinch) return false;
			if (userSelectionActive) return false;
			if (!zoomOnDoubleClick && event.type === "dblclick") return false;
			if (isWrappedWithClass(event, noWheelClassName) && event.type === "wheel") return false;
			if (isWrappedWithClass(event, noPanClassName) && (event.type !== "wheel" || panOnScroll && event.type === "wheel" && !zoomActivationKeyPressed)) return false;
			if (!zoomOnPinch && event.ctrlKey && event.type === "wheel") return false;
			if (!zoomScroll && !panOnScroll && !pinchZoom && event.type === "wheel") return false;
			if (!panOnDrag && (event.type === "mousedown" || event.type === "touchstart")) return false;
			if (Array.isArray(panOnDrag) && !panOnDrag.includes(event.button) && event.type === "mousedown") return false;
			const buttonAllowed = Array.isArray(panOnDrag) && panOnDrag.includes(event.button) || !event.button || event.button <= 1;
			return (!event.ctrlKey || event.type === "wheel") && buttonAllowed;
		});
	}, [
		userSelectionActive,
		d3Zoom,
		zoomOnScroll,
		zoomOnPinch,
		panOnScroll,
		zoomOnDoubleClick,
		panOnDrag,
		elementsSelectable,
		zoomActivationKeyPressed
	]);
	return import_react.createElement("div", {
		className: "react-flow__renderer",
		ref: zoomPane,
		style: containerStyle
	}, children);
};
var selector$9 = (s) => ({
	userSelectionActive: s.userSelectionActive,
	userSelectionRect: s.userSelectionRect
});
function UserSelection() {
	const { userSelectionActive, userSelectionRect } = useStore(selector$9, shallow$1$2);
	if (!(userSelectionActive && userSelectionRect)) return null;
	return import_react.createElement("div", {
		className: "react-flow__selection react-flow__container",
		style: {
			width: userSelectionRect.width,
			height: userSelectionRect.height,
			transform: `translate(${userSelectionRect.x}px, ${userSelectionRect.y}px)`
		}
	});
}
function handleParentExpand(res, updateItem) {
	const parentId = updateItem.parentNode || updateItem.parentId;
	const parent = res.find((e) => e.id === parentId);
	if (parent) {
		const extendWidth = updateItem.position.x + updateItem.width - parent.width;
		const extendHeight = updateItem.position.y + updateItem.height - parent.height;
		if (extendWidth > 0 || extendHeight > 0 || updateItem.position.x < 0 || updateItem.position.y < 0) {
			parent.style = { ...parent.style };
			parent.style.width = parent.style.width ?? parent.width;
			parent.style.height = parent.style.height ?? parent.height;
			if (extendWidth > 0) parent.style.width += extendWidth;
			if (extendHeight > 0) parent.style.height += extendHeight;
			if (updateItem.position.x < 0) {
				const xDiff = Math.abs(updateItem.position.x);
				parent.position.x = parent.position.x - xDiff;
				parent.style.width += xDiff;
				updateItem.position.x = 0;
			}
			if (updateItem.position.y < 0) {
				const yDiff = Math.abs(updateItem.position.y);
				parent.position.y = parent.position.y - yDiff;
				parent.style.height += yDiff;
				updateItem.position.y = 0;
			}
			parent.width = parent.style.width;
			parent.height = parent.style.height;
		}
	}
}
function applyChanges(changes, elements) {
	if (changes.some((c) => c.type === "reset")) return changes.filter((c) => c.type === "reset").map((c) => c.item);
	const initElements = changes.filter((c) => c.type === "add").map((c) => c.item);
	return elements.reduce((res, item) => {
		const currentChanges = changes.filter((c) => c.id === item.id);
		if (currentChanges.length === 0) {
			res.push(item);
			return res;
		}
		const updateItem = { ...item };
		for (const currentChange of currentChanges) if (currentChange) switch (currentChange.type) {
			case "select":
				updateItem.selected = currentChange.selected;
				break;
			case "position":
				if (typeof currentChange.position !== "undefined") updateItem.position = currentChange.position;
				if (typeof currentChange.positionAbsolute !== "undefined") updateItem.positionAbsolute = currentChange.positionAbsolute;
				if (typeof currentChange.dragging !== "undefined") updateItem.dragging = currentChange.dragging;
				if (updateItem.expandParent) handleParentExpand(res, updateItem);
				break;
			case "dimensions":
				if (typeof currentChange.dimensions !== "undefined") {
					updateItem.width = currentChange.dimensions.width;
					updateItem.height = currentChange.dimensions.height;
				}
				if (typeof currentChange.updateStyle !== "undefined") updateItem.style = {
					...updateItem.style || {},
					...currentChange.dimensions
				};
				if (typeof currentChange.resizing === "boolean") updateItem.resizing = currentChange.resizing;
				if (updateItem.expandParent) handleParentExpand(res, updateItem);
				break;
			case "remove": return res;
		}
		res.push(updateItem);
		return res;
	}, initElements);
}
function applyNodeChanges(changes, nodes) {
	return applyChanges(changes, nodes);
}
function applyEdgeChanges(changes, edges) {
	return applyChanges(changes, edges);
}
var createSelectionChange = (id, selected) => ({
	id,
	type: "select",
	selected
});
function getSelectionChanges(items, selectedIds) {
	return items.reduce((res, item) => {
		const willBeSelected = selectedIds.includes(item.id);
		if (!item.selected && willBeSelected) {
			item.selected = true;
			res.push(createSelectionChange(item.id, true));
		} else if (item.selected && !willBeSelected) {
			item.selected = false;
			res.push(createSelectionChange(item.id, false));
		}
		return res;
	}, []);
}
/**
* The user selection rectangle gets displayed when a user drags the mouse while pressing shift
*/
var wrapHandler = (handler, containerRef) => {
	return (event) => {
		if (event.target !== containerRef.current) return;
		handler?.(event);
	};
};
var selector$8 = (s) => ({
	userSelectionActive: s.userSelectionActive,
	elementsSelectable: s.elementsSelectable,
	dragging: s.paneDragging
});
var Pane = (0, import_react.memo)(({ isSelecting, selectionMode = SelectionMode.Full, panOnDrag, onSelectionStart, onSelectionEnd, onPaneClick, onPaneContextMenu, onPaneScroll, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, children }) => {
	const container = (0, import_react.useRef)(null);
	const store = useStoreApi();
	const prevSelectedNodesCount = (0, import_react.useRef)(0);
	const prevSelectedEdgesCount = (0, import_react.useRef)(0);
	const containerBounds = (0, import_react.useRef)();
	const { userSelectionActive, elementsSelectable, dragging } = useStore(selector$8, shallow$1$2);
	const resetUserSelection = () => {
		store.setState({
			userSelectionActive: false,
			userSelectionRect: null
		});
		prevSelectedNodesCount.current = 0;
		prevSelectedEdgesCount.current = 0;
	};
	const onClick = (event) => {
		onPaneClick?.(event);
		store.getState().resetSelectedElements();
		store.setState({ nodesSelectionActive: false });
	};
	const onContextMenu = (event) => {
		if (Array.isArray(panOnDrag) && panOnDrag?.includes(2)) {
			event.preventDefault();
			return;
		}
		onPaneContextMenu?.(event);
	};
	const onWheel = onPaneScroll ? (event) => onPaneScroll(event) : void 0;
	const onMouseDown = (event) => {
		const { resetSelectedElements, domNode } = store.getState();
		containerBounds.current = domNode?.getBoundingClientRect();
		if (!elementsSelectable || !isSelecting || event.button !== 0 || event.target !== container.current || !containerBounds.current) return;
		const { x, y } = getEventPosition(event, containerBounds.current);
		resetSelectedElements();
		store.setState({ userSelectionRect: {
			width: 0,
			height: 0,
			startX: x,
			startY: y,
			x,
			y
		} });
		onSelectionStart?.(event);
	};
	const onMouseMove = (event) => {
		const { userSelectionRect, nodeInternals, edges, transform, onNodesChange, onEdgesChange, nodeOrigin, getNodes } = store.getState();
		if (!isSelecting || !containerBounds.current || !userSelectionRect) return;
		store.setState({
			userSelectionActive: true,
			nodesSelectionActive: false
		});
		const mousePos = getEventPosition(event, containerBounds.current);
		const startX = userSelectionRect.startX ?? 0;
		const startY = userSelectionRect.startY ?? 0;
		const nextUserSelectRect = {
			...userSelectionRect,
			x: mousePos.x < startX ? mousePos.x : startX,
			y: mousePos.y < startY ? mousePos.y : startY,
			width: Math.abs(mousePos.x - startX),
			height: Math.abs(mousePos.y - startY)
		};
		const nodes = getNodes();
		const selectedNodes = getNodesInside(nodeInternals, nextUserSelectRect, transform, selectionMode === SelectionMode.Partial, true, nodeOrigin);
		const selectedEdgeIds = getConnectedEdges(selectedNodes, edges).map((e) => e.id);
		const selectedNodeIds = selectedNodes.map((n) => n.id);
		if (prevSelectedNodesCount.current !== selectedNodeIds.length) {
			prevSelectedNodesCount.current = selectedNodeIds.length;
			const changes = getSelectionChanges(nodes, selectedNodeIds);
			if (changes.length) onNodesChange?.(changes);
		}
		if (prevSelectedEdgesCount.current !== selectedEdgeIds.length) {
			prevSelectedEdgesCount.current = selectedEdgeIds.length;
			const changes = getSelectionChanges(edges, selectedEdgeIds);
			if (changes.length) onEdgesChange?.(changes);
		}
		store.setState({ userSelectionRect: nextUserSelectRect });
	};
	const onMouseUp = (event) => {
		if (event.button !== 0) return;
		const { userSelectionRect } = store.getState();
		if (!userSelectionActive && userSelectionRect && event.target === container.current) onClick?.(event);
		store.setState({ nodesSelectionActive: prevSelectedNodesCount.current > 0 });
		resetUserSelection();
		onSelectionEnd?.(event);
	};
	const onMouseLeave = (event) => {
		if (userSelectionActive) {
			store.setState({ nodesSelectionActive: prevSelectedNodesCount.current > 0 });
			onSelectionEnd?.(event);
		}
		resetUserSelection();
	};
	const hasActiveSelection = elementsSelectable && (isSelecting || userSelectionActive);
	return import_react.createElement("div", {
		className: cc(["react-flow__pane", {
			dragging,
			selection: isSelecting
		}]),
		onClick: hasActiveSelection ? void 0 : wrapHandler(onClick, container),
		onContextMenu: wrapHandler(onContextMenu, container),
		onWheel: wrapHandler(onWheel, container),
		onMouseEnter: hasActiveSelection ? void 0 : onPaneMouseEnter,
		onMouseDown: hasActiveSelection ? onMouseDown : void 0,
		onMouseMove: hasActiveSelection ? onMouseMove : onPaneMouseMove,
		onMouseUp: hasActiveSelection ? onMouseUp : void 0,
		onMouseLeave: hasActiveSelection ? onMouseLeave : onPaneMouseLeave,
		ref: container,
		style: containerStyle
	}, children, import_react.createElement(UserSelection, null));
});
Pane.displayName = "Pane";
function isParentSelected(node, nodeInternals) {
	const parentId = node.parentNode || node.parentId;
	if (!parentId) return false;
	const parentNode = nodeInternals.get(parentId);
	if (!parentNode) return false;
	if (parentNode.selected) return true;
	return isParentSelected(parentNode, nodeInternals);
}
function hasSelector(target, selector, nodeRef) {
	let current = target;
	do {
		if (current?.matches(selector)) return true;
		if (current === nodeRef.current) return false;
		current = current.parentElement;
	} while (current);
	return false;
}
function getDragItems(nodeInternals, nodesDraggable, mousePos, nodeId) {
	return Array.from(nodeInternals.values()).filter((n) => (n.selected || n.id === nodeId) && (!n.parentNode || n.parentId || !isParentSelected(n, nodeInternals)) && (n.draggable || nodesDraggable && typeof n.draggable === "undefined")).map((n) => ({
		id: n.id,
		position: n.position || {
			x: 0,
			y: 0
		},
		positionAbsolute: n.positionAbsolute || {
			x: 0,
			y: 0
		},
		distance: {
			x: mousePos.x - (n.positionAbsolute?.x ?? 0),
			y: mousePos.y - (n.positionAbsolute?.y ?? 0)
		},
		delta: {
			x: 0,
			y: 0
		},
		extent: n.extent,
		parentNode: n.parentNode || n.parentId,
		parentId: n.parentNode || n.parentId,
		width: n.width,
		height: n.height,
		expandParent: n.expandParent
	}));
}
function clampNodeExtent(node, extent) {
	if (!extent || extent === "parent") return extent;
	return [extent[0], [extent[1][0] - (node.width || 0), extent[1][1] - (node.height || 0)]];
}
function calcNextPosition(node, nextPosition, nodeInternals, nodeExtent, nodeOrigin = [0, 0], onError) {
	const clampedNodeExtent = clampNodeExtent(node, node.extent || nodeExtent);
	let currentExtent = clampedNodeExtent;
	const parentId = node.parentNode || node.parentId;
	if (node.extent === "parent" && !node.expandParent) if (parentId && node.width && node.height) {
		const parent = nodeInternals.get(parentId);
		const { x: parentX, y: parentY } = getNodePositionWithOrigin(parent, nodeOrigin).positionAbsolute;
		currentExtent = parent && isNumeric(parentX) && isNumeric(parentY) && isNumeric(parent.width) && isNumeric(parent.height) ? [[parentX + node.width * nodeOrigin[0], parentY + node.height * nodeOrigin[1]], [parentX + parent.width - node.width + node.width * nodeOrigin[0], parentY + parent.height - node.height + node.height * nodeOrigin[1]]] : currentExtent;
	} else {
		onError?.("005", errorMessages["error005"]());
		currentExtent = clampedNodeExtent;
	}
	else if (node.extent && parentId && node.extent !== "parent") {
		const { x: parentX, y: parentY } = getNodePositionWithOrigin(nodeInternals.get(parentId), nodeOrigin).positionAbsolute;
		currentExtent = [[node.extent[0][0] + parentX, node.extent[0][1] + parentY], [node.extent[1][0] + parentX, node.extent[1][1] + parentY]];
	}
	let parentPosition = {
		x: 0,
		y: 0
	};
	if (parentId) parentPosition = getNodePositionWithOrigin(nodeInternals.get(parentId), nodeOrigin).positionAbsolute;
	const positionAbsolute = currentExtent && currentExtent !== "parent" ? clampPosition(nextPosition, currentExtent) : nextPosition;
	return {
		position: {
			x: positionAbsolute.x - parentPosition.x,
			y: positionAbsolute.y - parentPosition.y
		},
		positionAbsolute
	};
}
function getEventHandlerParams({ nodeId, dragItems, nodeInternals }) {
	const extentedDragItems = dragItems.map((n) => {
		return {
			...nodeInternals.get(n.id),
			position: n.position,
			positionAbsolute: n.positionAbsolute
		};
	});
	return [nodeId ? extentedDragItems.find((n) => n.id === nodeId) : extentedDragItems[0], extentedDragItems];
}
var getHandleBounds = (selector, nodeElement, zoom, nodeOrigin) => {
	const handles = nodeElement.querySelectorAll(selector);
	if (!handles || !handles.length) return null;
	const handlesArray = Array.from(handles);
	const nodeBounds = nodeElement.getBoundingClientRect();
	const nodeOffset = {
		x: nodeBounds.width * nodeOrigin[0],
		y: nodeBounds.height * nodeOrigin[1]
	};
	return handlesArray.map((handle) => {
		const handleBounds = handle.getBoundingClientRect();
		return {
			id: handle.getAttribute("data-handleid"),
			position: handle.getAttribute("data-handlepos"),
			x: (handleBounds.left - nodeBounds.left - nodeOffset.x) / zoom,
			y: (handleBounds.top - nodeBounds.top - nodeOffset.y) / zoom,
			...getDimensions$1(handle)
		};
	});
};
function getMouseHandler(id, getState, handler) {
	return handler === void 0 ? handler : (event) => {
		const node = getState().nodeInternals.get(id);
		if (node) handler(event, { ...node });
	};
}
function handleNodeClick({ id, store, unselect = false, nodeRef }) {
	const { addSelectedNodes, unselectNodesAndEdges, multiSelectionActive, nodeInternals, onError } = store.getState();
	const node = nodeInternals.get(id);
	if (!node) {
		onError?.("012", errorMessages["error012"](id));
		return;
	}
	store.setState({ nodesSelectionActive: false });
	if (!node.selected) addSelectedNodes([id]);
	else if (unselect || node.selected && multiSelectionActive) {
		unselectNodesAndEdges({
			nodes: [node],
			edges: []
		});
		requestAnimationFrame(() => nodeRef?.current?.blur());
	}
}
function useGetPointerPosition() {
	const store = useStoreApi();
	return (0, import_react.useCallback)(({ sourceEvent }) => {
		const { transform, snapGrid, snapToGrid } = store.getState();
		const x = sourceEvent.touches ? sourceEvent.touches[0].clientX : sourceEvent.clientX;
		const y = sourceEvent.touches ? sourceEvent.touches[0].clientY : sourceEvent.clientY;
		const pointerPos = {
			x: (x - transform[0]) / transform[2],
			y: (y - transform[1]) / transform[2]
		};
		return {
			xSnapped: snapToGrid ? snapGrid[0] * Math.round(pointerPos.x / snapGrid[0]) : pointerPos.x,
			ySnapped: snapToGrid ? snapGrid[1] * Math.round(pointerPos.y / snapGrid[1]) : pointerPos.y,
			...pointerPos
		};
	}, []);
}
function wrapSelectionDragFunc(selectionFunc) {
	return (event, _, nodes) => selectionFunc?.(event, nodes);
}
function useDrag({ nodeRef, disabled = false, noDragClassName, handleSelector, nodeId, isSelectable, selectNodesOnDrag }) {
	const store = useStoreApi();
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const dragItems = (0, import_react.useRef)([]);
	const lastPos = (0, import_react.useRef)({
		x: null,
		y: null
	});
	const autoPanId = (0, import_react.useRef)(0);
	const containerBounds = (0, import_react.useRef)(null);
	const mousePosition = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const dragEvent = (0, import_react.useRef)(null);
	const autoPanStarted = (0, import_react.useRef)(false);
	const dragStarted = (0, import_react.useRef)(false);
	const abortDrag = (0, import_react.useRef)(false);
	const getPointerPosition = useGetPointerPosition();
	(0, import_react.useEffect)(() => {
		if (nodeRef?.current) {
			const selection = select_default$1(nodeRef.current);
			const updateNodes = ({ x, y }) => {
				const { nodeInternals, onNodeDrag, onSelectionDrag, updateNodePositions, nodeExtent, snapGrid, snapToGrid, nodeOrigin, onError } = store.getState();
				lastPos.current = {
					x,
					y
				};
				let hasChange = false;
				let nodesBox = {
					x: 0,
					y: 0,
					x2: 0,
					y2: 0
				};
				if (dragItems.current.length > 1 && nodeExtent) nodesBox = rectToBox(getNodesBounds(dragItems.current, nodeOrigin));
				dragItems.current = dragItems.current.map((n) => {
					const nextPosition = {
						x: x - n.distance.x,
						y: y - n.distance.y
					};
					if (snapToGrid) {
						nextPosition.x = snapGrid[0] * Math.round(nextPosition.x / snapGrid[0]);
						nextPosition.y = snapGrid[1] * Math.round(nextPosition.y / snapGrid[1]);
					}
					const adjustedNodeExtent = [[nodeExtent[0][0], nodeExtent[0][1]], [nodeExtent[1][0], nodeExtent[1][1]]];
					if (dragItems.current.length > 1 && nodeExtent && !n.extent) {
						adjustedNodeExtent[0][0] = n.positionAbsolute.x - nodesBox.x + nodeExtent[0][0];
						adjustedNodeExtent[1][0] = n.positionAbsolute.x + (n.width ?? 0) - nodesBox.x2 + nodeExtent[1][0];
						adjustedNodeExtent[0][1] = n.positionAbsolute.y - nodesBox.y + nodeExtent[0][1];
						adjustedNodeExtent[1][1] = n.positionAbsolute.y + (n.height ?? 0) - nodesBox.y2 + nodeExtent[1][1];
					}
					const updatedPos = calcNextPosition(n, nextPosition, nodeInternals, adjustedNodeExtent, nodeOrigin, onError);
					hasChange = hasChange || n.position.x !== updatedPos.position.x || n.position.y !== updatedPos.position.y;
					n.position = updatedPos.position;
					n.positionAbsolute = updatedPos.positionAbsolute;
					return n;
				});
				if (!hasChange) return;
				updateNodePositions(dragItems.current, true, true);
				setDragging(true);
				const onDrag = nodeId ? onNodeDrag : wrapSelectionDragFunc(onSelectionDrag);
				if (onDrag && dragEvent.current) {
					const [currentNode, nodes] = getEventHandlerParams({
						nodeId,
						dragItems: dragItems.current,
						nodeInternals
					});
					onDrag(dragEvent.current, currentNode, nodes);
				}
			};
			const autoPan = () => {
				if (!containerBounds.current) return;
				const [xMovement, yMovement] = calcAutoPan(mousePosition.current, containerBounds.current);
				if (xMovement !== 0 || yMovement !== 0) {
					const { transform, panBy } = store.getState();
					lastPos.current.x = (lastPos.current.x ?? 0) - xMovement / transform[2];
					lastPos.current.y = (lastPos.current.y ?? 0) - yMovement / transform[2];
					if (panBy({
						x: xMovement,
						y: yMovement
					})) updateNodes(lastPos.current);
				}
				autoPanId.current = requestAnimationFrame(autoPan);
			};
			const startDrag = (event) => {
				const { nodeInternals, multiSelectionActive, nodesDraggable, unselectNodesAndEdges, onNodeDragStart, onSelectionDragStart } = store.getState();
				dragStarted.current = true;
				const onStart = nodeId ? onNodeDragStart : wrapSelectionDragFunc(onSelectionDragStart);
				if ((!selectNodesOnDrag || !isSelectable) && !multiSelectionActive && nodeId) {
					if (!nodeInternals.get(nodeId)?.selected) unselectNodesAndEdges();
				}
				if (nodeId && isSelectable && selectNodesOnDrag) handleNodeClick({
					id: nodeId,
					store,
					nodeRef
				});
				const pointerPos = getPointerPosition(event);
				lastPos.current = pointerPos;
				dragItems.current = getDragItems(nodeInternals, nodesDraggable, pointerPos, nodeId);
				if (onStart && dragItems.current) {
					const [currentNode, nodes] = getEventHandlerParams({
						nodeId,
						dragItems: dragItems.current,
						nodeInternals
					});
					onStart(event.sourceEvent, currentNode, nodes);
				}
			};
			if (disabled) selection.on(".drag", null);
			else {
				const dragHandler = drag_default().on("start", (event) => {
					const { domNode, nodeDragThreshold } = store.getState();
					if (nodeDragThreshold === 0) startDrag(event);
					abortDrag.current = false;
					lastPos.current = getPointerPosition(event);
					containerBounds.current = domNode?.getBoundingClientRect() || null;
					mousePosition.current = getEventPosition(event.sourceEvent, containerBounds.current);
				}).on("drag", (event) => {
					const pointerPos = getPointerPosition(event);
					const { autoPanOnNodeDrag, nodeDragThreshold } = store.getState();
					if (event.sourceEvent.type === "touchmove" && event.sourceEvent.touches.length > 1) abortDrag.current = true;
					if (abortDrag.current) return;
					if (!autoPanStarted.current && dragStarted.current && autoPanOnNodeDrag) {
						autoPanStarted.current = true;
						autoPan();
					}
					if (!dragStarted.current) {
						const x = pointerPos.xSnapped - (lastPos?.current?.x ?? 0);
						const y = pointerPos.ySnapped - (lastPos?.current?.y ?? 0);
						if (Math.sqrt(x * x + y * y) > nodeDragThreshold) startDrag(event);
					}
					if ((lastPos.current.x !== pointerPos.xSnapped || lastPos.current.y !== pointerPos.ySnapped) && dragItems.current && dragStarted.current) {
						dragEvent.current = event.sourceEvent;
						mousePosition.current = getEventPosition(event.sourceEvent, containerBounds.current);
						updateNodes(pointerPos);
					}
				}).on("end", (event) => {
					if (!dragStarted.current || abortDrag.current) return;
					setDragging(false);
					autoPanStarted.current = false;
					dragStarted.current = false;
					cancelAnimationFrame(autoPanId.current);
					if (dragItems.current) {
						const { updateNodePositions, nodeInternals, onNodeDragStop, onSelectionDragStop } = store.getState();
						const onStop = nodeId ? onNodeDragStop : wrapSelectionDragFunc(onSelectionDragStop);
						updateNodePositions(dragItems.current, false, false);
						if (onStop) {
							const [currentNode, nodes] = getEventHandlerParams({
								nodeId,
								dragItems: dragItems.current,
								nodeInternals
							});
							onStop(event.sourceEvent, currentNode, nodes);
						}
					}
				}).filter((event) => {
					const target = event.target;
					return !event.button && (!noDragClassName || !hasSelector(target, `.${noDragClassName}`, nodeRef)) && (!handleSelector || hasSelector(target, handleSelector, nodeRef));
				});
				selection.call(dragHandler);
				return () => {
					selection.on(".drag", null);
				};
			}
		}
	}, [
		nodeRef,
		disabled,
		noDragClassName,
		handleSelector,
		isSelectable,
		store,
		nodeId,
		selectNodesOnDrag,
		getPointerPosition
	]);
	return dragging;
}
function useUpdateNodePositions() {
	const store = useStoreApi();
	return (0, import_react.useCallback)((params) => {
		const { nodeInternals, nodeExtent, updateNodePositions, getNodes, snapToGrid, snapGrid, onError, nodesDraggable } = store.getState();
		const selectedNodes = getNodes().filter((n) => n.selected && (n.draggable || nodesDraggable && typeof n.draggable === "undefined"));
		const xVelo = snapToGrid ? snapGrid[0] : 5;
		const yVelo = snapToGrid ? snapGrid[1] : 5;
		const factor = params.isShiftPressed ? 4 : 1;
		const positionDiffX = params.x * xVelo * factor;
		const positionDiffY = params.y * yVelo * factor;
		updateNodePositions(selectedNodes.map((n) => {
			if (n.positionAbsolute) {
				const nextPosition = {
					x: n.positionAbsolute.x + positionDiffX,
					y: n.positionAbsolute.y + positionDiffY
				};
				if (snapToGrid) {
					nextPosition.x = snapGrid[0] * Math.round(nextPosition.x / snapGrid[0]);
					nextPosition.y = snapGrid[1] * Math.round(nextPosition.y / snapGrid[1]);
				}
				const { positionAbsolute, position } = calcNextPosition(n, nextPosition, nodeInternals, nodeExtent, void 0, onError);
				n.position = position;
				n.positionAbsolute = positionAbsolute;
			}
			return n;
		}), true, false);
	}, []);
}
var arrowKeyDiffs = {
	ArrowUp: {
		x: 0,
		y: -1
	},
	ArrowDown: {
		x: 0,
		y: 1
	},
	ArrowLeft: {
		x: -1,
		y: 0
	},
	ArrowRight: {
		x: 1,
		y: 0
	}
};
var wrapNode = (NodeComponent) => {
	const NodeWrapper = ({ id, type, data, xPos, yPos, xPosOrigin, yPosOrigin, selected, onClick, onMouseEnter, onMouseMove, onMouseLeave, onContextMenu, onDoubleClick, style, className, isDraggable, isSelectable, isConnectable, isFocusable, selectNodesOnDrag, sourcePosition, targetPosition, hidden, resizeObserver, dragHandle, zIndex, isParent, noDragClassName, noPanClassName, initialized, disableKeyboardA11y, ariaLabel, rfId, hasHandleBounds }) => {
		const store = useStoreApi();
		const nodeRef = (0, import_react.useRef)(null);
		const prevNodeRef = (0, import_react.useRef)(null);
		const prevSourcePosition = (0, import_react.useRef)(sourcePosition);
		const prevTargetPosition = (0, import_react.useRef)(targetPosition);
		const prevType = (0, import_react.useRef)(type);
		const hasPointerEvents = isSelectable || isDraggable || onClick || onMouseEnter || onMouseMove || onMouseLeave;
		const updatePositions = useUpdateNodePositions();
		const onMouseEnterHandler = getMouseHandler(id, store.getState, onMouseEnter);
		const onMouseMoveHandler = getMouseHandler(id, store.getState, onMouseMove);
		const onMouseLeaveHandler = getMouseHandler(id, store.getState, onMouseLeave);
		const onContextMenuHandler = getMouseHandler(id, store.getState, onContextMenu);
		const onDoubleClickHandler = getMouseHandler(id, store.getState, onDoubleClick);
		const onSelectNodeHandler = (event) => {
			const { nodeDragThreshold } = store.getState();
			if (isSelectable && (!selectNodesOnDrag || !isDraggable || nodeDragThreshold > 0)) handleNodeClick({
				id,
				store,
				nodeRef
			});
			if (onClick) {
				const node = store.getState().nodeInternals.get(id);
				if (node) onClick(event, { ...node });
			}
		};
		const onKeyDown = (event) => {
			if (isInputDOMNode(event)) return;
			if (disableKeyboardA11y) return;
			if (elementSelectionKeys.includes(event.key) && isSelectable) handleNodeClick({
				id,
				store,
				unselect: event.key === "Escape",
				nodeRef
			});
			else if (isDraggable && selected && Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) {
				store.setState({ ariaLiveMessage: `Moved selected node ${event.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~xPos}, y: ${~~yPos}` });
				updatePositions({
					x: arrowKeyDiffs[event.key].x,
					y: arrowKeyDiffs[event.key].y,
					isShiftPressed: event.shiftKey
				});
			}
		};
		(0, import_react.useEffect)(() => {
			return () => {
				if (prevNodeRef.current) {
					resizeObserver?.unobserve(prevNodeRef.current);
					prevNodeRef.current = null;
				}
			};
		}, []);
		(0, import_react.useEffect)(() => {
			if (nodeRef.current && !hidden) {
				const currNode = nodeRef.current;
				if (!initialized || !hasHandleBounds || prevNodeRef.current !== currNode) {
					if (prevNodeRef.current) resizeObserver?.unobserve(prevNodeRef.current);
					resizeObserver?.observe(currNode);
					prevNodeRef.current = currNode;
				}
			}
		}, [
			hidden,
			initialized,
			hasHandleBounds
		]);
		(0, import_react.useEffect)(() => {
			const typeChanged = prevType.current !== type;
			const sourcePosChanged = prevSourcePosition.current !== sourcePosition;
			const targetPosChanged = prevTargetPosition.current !== targetPosition;
			if (nodeRef.current && (typeChanged || sourcePosChanged || targetPosChanged)) {
				if (typeChanged) prevType.current = type;
				if (sourcePosChanged) prevSourcePosition.current = sourcePosition;
				if (targetPosChanged) prevTargetPosition.current = targetPosition;
				store.getState().updateNodeDimensions([{
					id,
					nodeElement: nodeRef.current,
					forceUpdate: true
				}]);
			}
		}, [
			id,
			type,
			sourcePosition,
			targetPosition
		]);
		const dragging = useDrag({
			nodeRef,
			disabled: hidden || !isDraggable,
			noDragClassName,
			handleSelector: dragHandle,
			nodeId: id,
			isSelectable,
			selectNodesOnDrag
		});
		if (hidden) return null;
		return import_react.createElement("div", {
			className: cc([
				"react-flow__node",
				`react-flow__node-${type}`,
				{ [noPanClassName]: isDraggable },
				className,
				{
					selected,
					selectable: isSelectable,
					parent: isParent,
					dragging
				}
			]),
			ref: nodeRef,
			style: {
				zIndex,
				transform: `translate(${xPosOrigin}px,${yPosOrigin}px)`,
				pointerEvents: hasPointerEvents ? "all" : "none",
				visibility: initialized ? "visible" : "hidden",
				...style
			},
			"data-id": id,
			"data-testid": `rf__node-${id}`,
			onMouseEnter: onMouseEnterHandler,
			onMouseMove: onMouseMoveHandler,
			onMouseLeave: onMouseLeaveHandler,
			onContextMenu: onContextMenuHandler,
			onClick: onSelectNodeHandler,
			onDoubleClick: onDoubleClickHandler,
			onKeyDown: isFocusable ? onKeyDown : void 0,
			tabIndex: isFocusable ? 0 : void 0,
			role: isFocusable ? "button" : void 0,
			"aria-describedby": disableKeyboardA11y ? void 0 : `${ARIA_NODE_DESC_KEY}-${rfId}`,
			"aria-label": ariaLabel
		}, import_react.createElement(Provider, { value: id }, import_react.createElement(NodeComponent, {
			id,
			data,
			type,
			xPos,
			yPos,
			selected,
			isConnectable,
			sourcePosition,
			targetPosition,
			dragging,
			dragHandle,
			zIndex
		})));
	};
	NodeWrapper.displayName = "NodeWrapper";
	return (0, import_react.memo)(NodeWrapper);
};
/**
* The nodes selection rectangle gets displayed when a user
* made a selection with on or several nodes
*/
var selector$7 = (s) => {
	return {
		...getNodesBounds(s.getNodes().filter((n) => n.selected), s.nodeOrigin),
		transformString: `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]})`,
		userSelectionActive: s.userSelectionActive
	};
};
function NodesSelection({ onSelectionContextMenu, noPanClassName, disableKeyboardA11y }) {
	const store = useStoreApi();
	const { width, height, x: left, y: top, transformString, userSelectionActive } = useStore(selector$7, shallow$1$2);
	const updatePositions = useUpdateNodePositions();
	const nodeRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!disableKeyboardA11y) nodeRef.current?.focus({ preventScroll: true });
	}, [disableKeyboardA11y]);
	useDrag({ nodeRef });
	if (userSelectionActive || !width || !height) return null;
	const onContextMenu = onSelectionContextMenu ? (event) => {
		onSelectionContextMenu(event, store.getState().getNodes().filter((n) => n.selected));
	} : void 0;
	const onKeyDown = (event) => {
		if (Object.prototype.hasOwnProperty.call(arrowKeyDiffs, event.key)) updatePositions({
			x: arrowKeyDiffs[event.key].x,
			y: arrowKeyDiffs[event.key].y,
			isShiftPressed: event.shiftKey
		});
	};
	return import_react.createElement("div", {
		className: cc([
			"react-flow__nodesselection",
			"react-flow__container",
			noPanClassName
		]),
		style: { transform: transformString }
	}, import_react.createElement("div", {
		ref: nodeRef,
		className: "react-flow__nodesselection-rect",
		onContextMenu,
		tabIndex: disableKeyboardA11y ? void 0 : -1,
		onKeyDown: disableKeyboardA11y ? void 0 : onKeyDown,
		style: {
			width,
			height,
			top,
			left
		}
	}));
}
var NodesSelection$1 = (0, import_react.memo)(NodesSelection);
var selector$6 = (s) => s.nodesSelectionActive;
var FlowRenderer = ({ children, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneContextMenu, onPaneScroll, deleteKeyCode, onMove, onMoveStart, onMoveEnd, selectionKeyCode, selectionOnDrag, selectionMode, onSelectionStart, onSelectionEnd, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, elementsSelectable, zoomOnScroll, zoomOnPinch, panOnScroll: _panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag: _panOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, preventScrolling, onSelectionContextMenu, noWheelClassName, noPanClassName, disableKeyboardA11y }) => {
	const nodesSelectionActive = useStore(selector$6);
	const selectionKeyPressed = useKeyPress(selectionKeyCode);
	const panActivationKeyPressed = useKeyPress(panActivationKeyCode);
	const panOnDrag = panActivationKeyPressed || _panOnDrag;
	const panOnScroll = panActivationKeyPressed || _panOnScroll;
	const isSelecting = selectionKeyPressed || selectionOnDrag && panOnDrag !== true;
	useGlobalKeyHandler({
		deleteKeyCode,
		multiSelectionKeyCode
	});
	return import_react.createElement(ZoomPane, {
		onMove,
		onMoveStart,
		onMoveEnd,
		onPaneContextMenu,
		elementsSelectable,
		zoomOnScroll,
		zoomOnPinch,
		panOnScroll,
		panOnScrollSpeed,
		panOnScrollMode,
		zoomOnDoubleClick,
		panOnDrag: !selectionKeyPressed && panOnDrag,
		defaultViewport,
		translateExtent,
		minZoom,
		maxZoom,
		zoomActivationKeyCode,
		preventScrolling,
		noWheelClassName,
		noPanClassName
	}, import_react.createElement(Pane, {
		onSelectionStart,
		onSelectionEnd,
		onPaneClick,
		onPaneMouseEnter,
		onPaneMouseMove,
		onPaneMouseLeave,
		onPaneContextMenu,
		onPaneScroll,
		panOnDrag,
		isSelecting: !!isSelecting,
		selectionMode
	}, children, nodesSelectionActive && import_react.createElement(NodesSelection$1, {
		onSelectionContextMenu,
		noPanClassName,
		disableKeyboardA11y
	})));
};
FlowRenderer.displayName = "FlowRenderer";
var FlowRenderer$1 = (0, import_react.memo)(FlowRenderer);
function useVisibleNodes(onlyRenderVisible) {
	return useStore((0, import_react.useCallback)((s) => onlyRenderVisible ? getNodesInside(s.nodeInternals, {
		x: 0,
		y: 0,
		width: s.width,
		height: s.height
	}, s.transform, true) : s.getNodes(), [onlyRenderVisible]));
}
function createNodeTypes(nodeTypes) {
	const standardTypes = {
		input: wrapNode(nodeTypes.input || InputNode$1),
		default: wrapNode(nodeTypes.default || DefaultNode$1),
		output: wrapNode(nodeTypes.output || OutputNode$1),
		group: wrapNode(nodeTypes.group || GroupNode)
	};
	const specialTypes = Object.keys(nodeTypes).filter((k) => ![
		"input",
		"default",
		"output",
		"group"
	].includes(k)).reduce((res, key) => {
		res[key] = wrapNode(nodeTypes[key] || DefaultNode$1);
		return res;
	}, {});
	return {
		...standardTypes,
		...specialTypes
	};
}
var getPositionWithOrigin = ({ x, y, width, height, origin }) => {
	if (!width || !height) return {
		x,
		y
	};
	if (origin[0] < 0 || origin[1] < 0 || origin[0] > 1 || origin[1] > 1) return {
		x,
		y
	};
	return {
		x: x - width * origin[0],
		y: y - height * origin[1]
	};
};
var selector$5 = (s) => ({
	nodesDraggable: s.nodesDraggable,
	nodesConnectable: s.nodesConnectable,
	nodesFocusable: s.nodesFocusable,
	elementsSelectable: s.elementsSelectable,
	updateNodeDimensions: s.updateNodeDimensions,
	onError: s.onError
});
var NodeRenderer = (props) => {
	const { nodesDraggable, nodesConnectable, nodesFocusable, elementsSelectable, updateNodeDimensions, onError } = useStore(selector$5, shallow$1$2);
	const nodes = useVisibleNodes(props.onlyRenderVisibleElements);
	const resizeObserverRef = (0, import_react.useRef)();
	const resizeObserver = (0, import_react.useMemo)(() => {
		if (typeof ResizeObserver === "undefined") return null;
		const observer = new ResizeObserver((entries) => {
			updateNodeDimensions(entries.map((entry) => ({
				id: entry.target.getAttribute("data-id"),
				nodeElement: entry.target,
				forceUpdate: true
			})));
		});
		resizeObserverRef.current = observer;
		return observer;
	}, []);
	(0, import_react.useEffect)(() => {
		return () => {
			resizeObserverRef?.current?.disconnect();
		};
	}, []);
	return import_react.createElement("div", {
		className: "react-flow__nodes",
		style: containerStyle
	}, nodes.map((node) => {
		let nodeType = node.type || "default";
		if (!props.nodeTypes[nodeType]) {
			onError?.("003", errorMessages["error003"](nodeType));
			nodeType = "default";
		}
		const NodeComponent = props.nodeTypes[nodeType] || props.nodeTypes.default;
		const isDraggable = !!(node.draggable || nodesDraggable && typeof node.draggable === "undefined");
		const isSelectable = !!(node.selectable || elementsSelectable && typeof node.selectable === "undefined");
		const isConnectable = !!(node.connectable || nodesConnectable && typeof node.connectable === "undefined");
		const isFocusable = !!(node.focusable || nodesFocusable && typeof node.focusable === "undefined");
		const clampedPosition = props.nodeExtent ? clampPosition(node.positionAbsolute, props.nodeExtent) : node.positionAbsolute;
		const posX = clampedPosition?.x ?? 0;
		const posY = clampedPosition?.y ?? 0;
		const posOrigin = getPositionWithOrigin({
			x: posX,
			y: posY,
			width: node.width ?? 0,
			height: node.height ?? 0,
			origin: props.nodeOrigin
		});
		return import_react.createElement(NodeComponent, {
			key: node.id,
			id: node.id,
			className: node.className,
			style: node.style,
			type: nodeType,
			data: node.data,
			sourcePosition: node.sourcePosition || Position.Bottom,
			targetPosition: node.targetPosition || Position.Top,
			hidden: node.hidden,
			xPos: posX,
			yPos: posY,
			xPosOrigin: posOrigin.x,
			yPosOrigin: posOrigin.y,
			selectNodesOnDrag: props.selectNodesOnDrag,
			onClick: props.onNodeClick,
			onMouseEnter: props.onNodeMouseEnter,
			onMouseMove: props.onNodeMouseMove,
			onMouseLeave: props.onNodeMouseLeave,
			onContextMenu: props.onNodeContextMenu,
			onDoubleClick: props.onNodeDoubleClick,
			selected: !!node.selected,
			isDraggable,
			isSelectable,
			isConnectable,
			isFocusable,
			resizeObserver,
			dragHandle: node.dragHandle,
			zIndex: node[internalsSymbol]?.z ?? 0,
			isParent: !!node[internalsSymbol]?.isParent,
			noDragClassName: props.noDragClassName,
			noPanClassName: props.noPanClassName,
			initialized: !!node.width && !!node.height,
			rfId: props.rfId,
			disableKeyboardA11y: props.disableKeyboardA11y,
			ariaLabel: node.ariaLabel,
			hasHandleBounds: !!node[internalsSymbol]?.handleBounds
		});
	}));
};
NodeRenderer.displayName = "NodeRenderer";
var NodeRenderer$1 = (0, import_react.memo)(NodeRenderer);
var shiftX = (x, shift, position) => {
	if (position === Position.Left) return x - shift;
	if (position === Position.Right) return x + shift;
	return x;
};
var shiftY = (y, shift, position) => {
	if (position === Position.Top) return y - shift;
	if (position === Position.Bottom) return y + shift;
	return y;
};
var EdgeUpdaterClassName = "react-flow__edgeupdater";
var EdgeAnchor = ({ position, centerX, centerY, radius = 10, onMouseDown, onMouseEnter, onMouseOut, type }) => import_react.createElement("circle", {
	onMouseDown,
	onMouseEnter,
	onMouseOut,
	className: cc([EdgeUpdaterClassName, `${EdgeUpdaterClassName}-${type}`]),
	cx: shiftX(centerX, radius, position),
	cy: shiftY(centerY, radius, position),
	r: radius,
	stroke: "transparent",
	fill: "transparent"
});
var alwaysValidConnection = () => true;
var wrapEdge = (EdgeComponent) => {
	const EdgeWrapper = ({ id, className, type, data, onClick, onEdgeDoubleClick, selected, animated, label, labelStyle, labelShowBg, labelBgStyle, labelBgPadding, labelBgBorderRadius, style, source, target, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, elementsSelectable, hidden, sourceHandleId, targetHandleId, onContextMenu, onMouseEnter, onMouseMove, onMouseLeave, reconnectRadius, onReconnect, onReconnectStart, onReconnectEnd, markerEnd, markerStart, rfId, ariaLabel, isFocusable, isReconnectable, pathOptions, interactionWidth, disableKeyboardA11y }) => {
		const edgeRef = (0, import_react.useRef)(null);
		const [updateHover, setUpdateHover] = (0, import_react.useState)(false);
		const [updating, setUpdating] = (0, import_react.useState)(false);
		const store = useStoreApi();
		const markerStartUrl = (0, import_react.useMemo)(() => `url('#${getMarkerId(markerStart, rfId)}')`, [markerStart, rfId]);
		const markerEndUrl = (0, import_react.useMemo)(() => `url('#${getMarkerId(markerEnd, rfId)}')`, [markerEnd, rfId]);
		if (hidden) return null;
		const onEdgeClick = (event) => {
			const { edges, addSelectedEdges, unselectNodesAndEdges, multiSelectionActive } = store.getState();
			const edge = edges.find((e) => e.id === id);
			if (!edge) return;
			if (elementsSelectable) {
				store.setState({ nodesSelectionActive: false });
				if (edge.selected && multiSelectionActive) {
					unselectNodesAndEdges({
						nodes: [],
						edges: [edge]
					});
					edgeRef.current?.blur();
				} else addSelectedEdges([id]);
			}
			if (onClick) onClick(event, edge);
		};
		const onEdgeDoubleClickHandler = getMouseHandler$1(id, store.getState, onEdgeDoubleClick);
		const onEdgeContextMenu = getMouseHandler$1(id, store.getState, onContextMenu);
		const onEdgeMouseEnter = getMouseHandler$1(id, store.getState, onMouseEnter);
		const onEdgeMouseMove = getMouseHandler$1(id, store.getState, onMouseMove);
		const onEdgeMouseLeave = getMouseHandler$1(id, store.getState, onMouseLeave);
		const handleEdgeUpdater = (event, isSourceHandle) => {
			if (event.button !== 0) return;
			const { edges, isValidConnection: isValidConnectionStore } = store.getState();
			const nodeId = isSourceHandle ? target : source;
			const handleId = (isSourceHandle ? targetHandleId : sourceHandleId) || null;
			const handleType = isSourceHandle ? "target" : "source";
			const isValidConnection = isValidConnectionStore || alwaysValidConnection;
			const isTarget = isSourceHandle;
			const edge = edges.find((e) => e.id === id);
			setUpdating(true);
			onReconnectStart?.(event, edge, handleType);
			const _onReconnectEnd = (evt) => {
				setUpdating(false);
				onReconnectEnd?.(evt, edge, handleType);
			};
			const onConnectEdge = (connection) => onReconnect?.(edge, connection);
			handlePointerDown({
				event,
				handleId,
				nodeId,
				onConnect: onConnectEdge,
				isTarget,
				getState: store.getState,
				setState: store.setState,
				isValidConnection,
				edgeUpdaterType: handleType,
				onReconnectEnd: _onReconnectEnd
			});
		};
		const onEdgeUpdaterSourceMouseDown = (event) => handleEdgeUpdater(event, true);
		const onEdgeUpdaterTargetMouseDown = (event) => handleEdgeUpdater(event, false);
		const onEdgeUpdaterMouseEnter = () => setUpdateHover(true);
		const onEdgeUpdaterMouseOut = () => setUpdateHover(false);
		const inactive = !elementsSelectable && !onClick;
		const onKeyDown = (event) => {
			if (!disableKeyboardA11y && elementSelectionKeys.includes(event.key) && elementsSelectable) {
				const { unselectNodesAndEdges, addSelectedEdges, edges } = store.getState();
				if (event.key === "Escape") {
					edgeRef.current?.blur();
					unselectNodesAndEdges({ edges: [edges.find((e) => e.id === id)] });
				} else addSelectedEdges([id]);
			}
		};
		return import_react.createElement("g", {
			className: cc([
				"react-flow__edge",
				`react-flow__edge-${type}`,
				className,
				{
					selected,
					animated,
					inactive,
					updating: updateHover
				}
			]),
			onClick: onEdgeClick,
			onDoubleClick: onEdgeDoubleClickHandler,
			onContextMenu: onEdgeContextMenu,
			onMouseEnter: onEdgeMouseEnter,
			onMouseMove: onEdgeMouseMove,
			onMouseLeave: onEdgeMouseLeave,
			onKeyDown: isFocusable ? onKeyDown : void 0,
			tabIndex: isFocusable ? 0 : void 0,
			role: isFocusable ? "button" : "img",
			"data-testid": `rf__edge-${id}`,
			"aria-label": ariaLabel === null ? void 0 : ariaLabel ? ariaLabel : `Edge from ${source} to ${target}`,
			"aria-describedby": isFocusable ? `${ARIA_EDGE_DESC_KEY}-${rfId}` : void 0,
			ref: edgeRef
		}, !updating && import_react.createElement(EdgeComponent, {
			id,
			source,
			target,
			selected,
			animated,
			label,
			labelStyle,
			labelShowBg,
			labelBgStyle,
			labelBgPadding,
			labelBgBorderRadius,
			data,
			style,
			sourceX,
			sourceY,
			targetX,
			targetY,
			sourcePosition,
			targetPosition,
			sourceHandleId,
			targetHandleId,
			markerStart: markerStartUrl,
			markerEnd: markerEndUrl,
			pathOptions,
			interactionWidth
		}), isReconnectable && import_react.createElement(import_react.Fragment, null, (isReconnectable === "source" || isReconnectable === true) && import_react.createElement(EdgeAnchor, {
			position: sourcePosition,
			centerX: sourceX,
			centerY: sourceY,
			radius: reconnectRadius,
			onMouseDown: onEdgeUpdaterSourceMouseDown,
			onMouseEnter: onEdgeUpdaterMouseEnter,
			onMouseOut: onEdgeUpdaterMouseOut,
			type: "source"
		}), (isReconnectable === "target" || isReconnectable === true) && import_react.createElement(EdgeAnchor, {
			position: targetPosition,
			centerX: targetX,
			centerY: targetY,
			radius: reconnectRadius,
			onMouseDown: onEdgeUpdaterTargetMouseDown,
			onMouseEnter: onEdgeUpdaterMouseEnter,
			onMouseOut: onEdgeUpdaterMouseOut,
			type: "target"
		})));
	};
	EdgeWrapper.displayName = "EdgeWrapper";
	return (0, import_react.memo)(EdgeWrapper);
};
function createEdgeTypes(edgeTypes) {
	const standardTypes = {
		default: wrapEdge(edgeTypes.default || BezierEdge),
		straight: wrapEdge(edgeTypes.bezier || StraightEdge),
		step: wrapEdge(edgeTypes.step || StepEdge),
		smoothstep: wrapEdge(edgeTypes.step || SmoothStepEdge),
		simplebezier: wrapEdge(edgeTypes.simplebezier || SimpleBezierEdge)
	};
	const specialTypes = Object.keys(edgeTypes).filter((k) => !["default", "bezier"].includes(k)).reduce((res, key) => {
		res[key] = wrapEdge(edgeTypes[key] || BezierEdge);
		return res;
	}, {});
	return {
		...standardTypes,
		...specialTypes
	};
}
function getHandlePosition(position, nodeRect, handle = null) {
	const x = (handle?.x || 0) + nodeRect.x;
	const y = (handle?.y || 0) + nodeRect.y;
	const width = handle?.width || nodeRect.width;
	const height = handle?.height || nodeRect.height;
	switch (position) {
		case Position.Top: return {
			x: x + width / 2,
			y
		};
		case Position.Right: return {
			x: x + width,
			y: y + height / 2
		};
		case Position.Bottom: return {
			x: x + width / 2,
			y: y + height
		};
		case Position.Left: return {
			x,
			y: y + height / 2
		};
	}
}
function getHandle(bounds, handleId) {
	if (!bounds) return null;
	if (bounds.length === 1 || !handleId) return bounds[0];
	else if (handleId) return bounds.find((d) => d.id === handleId) || null;
	return null;
}
var getEdgePositions = (sourceNodeRect, sourceHandle, sourcePosition, targetNodeRect, targetHandle, targetPosition) => {
	const sourceHandlePos = getHandlePosition(sourcePosition, sourceNodeRect, sourceHandle);
	const targetHandlePos = getHandlePosition(targetPosition, targetNodeRect, targetHandle);
	return {
		sourceX: sourceHandlePos.x,
		sourceY: sourceHandlePos.y,
		targetX: targetHandlePos.x,
		targetY: targetHandlePos.y
	};
};
function isEdgeVisible({ sourcePos, targetPos, sourceWidth, sourceHeight, targetWidth, targetHeight, width, height, transform }) {
	const edgeBox = {
		x: Math.min(sourcePos.x, targetPos.x),
		y: Math.min(sourcePos.y, targetPos.y),
		x2: Math.max(sourcePos.x + sourceWidth, targetPos.x + targetWidth),
		y2: Math.max(sourcePos.y + sourceHeight, targetPos.y + targetHeight)
	};
	if (edgeBox.x === edgeBox.x2) edgeBox.x2 += 1;
	if (edgeBox.y === edgeBox.y2) edgeBox.y2 += 1;
	const viewBox = rectToBox({
		x: (0 - transform[0]) / transform[2],
		y: (0 - transform[1]) / transform[2],
		width: width / transform[2],
		height: height / transform[2]
	});
	const xOverlap = Math.max(0, Math.min(viewBox.x2, edgeBox.x2) - Math.max(viewBox.x, edgeBox.x));
	const yOverlap = Math.max(0, Math.min(viewBox.y2, edgeBox.y2) - Math.max(viewBox.y, edgeBox.y));
	return Math.ceil(xOverlap * yOverlap) > 0;
}
function getNodeData(node) {
	const handleBounds = node?.[internalsSymbol]?.handleBounds || null;
	const isValid = handleBounds && node?.width && node?.height && typeof node?.positionAbsolute?.x !== "undefined" && typeof node?.positionAbsolute?.y !== "undefined";
	return [
		{
			x: node?.positionAbsolute?.x || 0,
			y: node?.positionAbsolute?.y || 0,
			width: node?.width || 0,
			height: node?.height || 0
		},
		handleBounds,
		!!isValid
	];
}
var defaultEdgeTree = [{
	level: 0,
	isMaxLevel: true,
	edges: []
}];
function groupEdgesByZLevel(edges, nodeInternals, elevateEdgesOnSelect = false) {
	let maxLevel = -1;
	const levelLookup = edges.reduce((tree, edge) => {
		const hasZIndex = isNumeric(edge.zIndex);
		let z = hasZIndex ? edge.zIndex : 0;
		if (elevateEdgesOnSelect) {
			const targetNode = nodeInternals.get(edge.target);
			const sourceNode = nodeInternals.get(edge.source);
			const edgeOrConnectedNodeSelected = edge.selected || targetNode?.selected || sourceNode?.selected;
			const selectedZIndex = Math.max(sourceNode?.[internalsSymbol]?.z || 0, targetNode?.[internalsSymbol]?.z || 0, 1e3);
			z = (hasZIndex ? edge.zIndex : 0) + (edgeOrConnectedNodeSelected ? selectedZIndex : 0);
		}
		if (tree[z]) tree[z].push(edge);
		else tree[z] = [edge];
		maxLevel = z > maxLevel ? z : maxLevel;
		return tree;
	}, {});
	const edgeTree = Object.entries(levelLookup).map(([key, edges]) => {
		const level = +key;
		return {
			edges,
			level,
			isMaxLevel: level === maxLevel
		};
	});
	if (edgeTree.length === 0) return defaultEdgeTree;
	return edgeTree;
}
function useVisibleEdges(onlyRenderVisible, nodeInternals, elevateEdgesOnSelect) {
	return groupEdgesByZLevel(useStore((0, import_react.useCallback)((s) => {
		if (!onlyRenderVisible) return s.edges;
		return s.edges.filter((e) => {
			const sourceNode = nodeInternals.get(e.source);
			const targetNode = nodeInternals.get(e.target);
			return sourceNode?.width && sourceNode?.height && targetNode?.width && targetNode?.height && isEdgeVisible({
				sourcePos: sourceNode.positionAbsolute || {
					x: 0,
					y: 0
				},
				targetPos: targetNode.positionAbsolute || {
					x: 0,
					y: 0
				},
				sourceWidth: sourceNode.width,
				sourceHeight: sourceNode.height,
				targetWidth: targetNode.width,
				targetHeight: targetNode.height,
				width: s.width,
				height: s.height,
				transform: s.transform
			});
		});
	}, [onlyRenderVisible, nodeInternals])), nodeInternals, elevateEdgesOnSelect);
}
var ArrowSymbol = ({ color = "none", strokeWidth = 1 }) => {
	return import_react.createElement("polyline", {
		style: {
			stroke: color,
			strokeWidth
		},
		strokeLinecap: "round",
		strokeLinejoin: "round",
		fill: "none",
		points: "-5,-4 0,0 -5,4"
	});
};
var ArrowClosedSymbol = ({ color = "none", strokeWidth = 1 }) => {
	return import_react.createElement("polyline", {
		style: {
			stroke: color,
			fill: color,
			strokeWidth
		},
		strokeLinecap: "round",
		strokeLinejoin: "round",
		points: "-5,-4 0,0 -5,4 -5,-4"
	});
};
var MarkerSymbols = {
	[MarkerType.Arrow]: ArrowSymbol,
	[MarkerType.ArrowClosed]: ArrowClosedSymbol
};
function useMarkerSymbol(type) {
	const store = useStoreApi();
	return (0, import_react.useMemo)(() => {
		if (!Object.prototype.hasOwnProperty.call(MarkerSymbols, type)) {
			store.getState().onError?.("009", errorMessages["error009"](type));
			return null;
		}
		return MarkerSymbols[type];
	}, [type]);
}
var Marker = ({ id, type, color, width = 12.5, height = 12.5, markerUnits = "strokeWidth", strokeWidth, orient = "auto-start-reverse" }) => {
	const Symbol = useMarkerSymbol(type);
	if (!Symbol) return null;
	return import_react.createElement("marker", {
		className: "react-flow__arrowhead",
		id,
		markerWidth: `${width}`,
		markerHeight: `${height}`,
		viewBox: "-10 -10 20 20",
		markerUnits,
		orient,
		refX: "0",
		refY: "0"
	}, import_react.createElement(Symbol, {
		color,
		strokeWidth
	}));
};
var markerSelector = ({ defaultColor, rfId }) => (s) => {
	const ids = [];
	return s.edges.reduce((markers, edge) => {
		[edge.markerStart, edge.markerEnd].forEach((marker) => {
			if (marker && typeof marker === "object") {
				const markerId = getMarkerId(marker, rfId);
				if (!ids.includes(markerId)) {
					markers.push({
						id: markerId,
						color: marker.color || defaultColor,
						...marker
					});
					ids.push(markerId);
				}
			}
		});
		return markers;
	}, []).sort((a, b) => a.id.localeCompare(b.id));
};
var MarkerDefinitions = ({ defaultColor, rfId }) => {
	const markers = useStore((0, import_react.useCallback)(markerSelector({
		defaultColor,
		rfId
	}), [defaultColor, rfId]), (a, b) => !(a.length !== b.length || a.some((m, i) => m.id !== b[i].id)));
	return import_react.createElement("defs", null, markers.map((marker) => import_react.createElement(Marker, {
		id: marker.id,
		key: marker.id,
		type: marker.type,
		color: marker.color,
		width: marker.width,
		height: marker.height,
		markerUnits: marker.markerUnits,
		strokeWidth: marker.strokeWidth,
		orient: marker.orient
	})));
};
MarkerDefinitions.displayName = "MarkerDefinitions";
var MarkerDefinitions$1 = (0, import_react.memo)(MarkerDefinitions);
var selector$4 = (s) => ({
	nodesConnectable: s.nodesConnectable,
	edgesFocusable: s.edgesFocusable,
	edgesUpdatable: s.edgesUpdatable,
	elementsSelectable: s.elementsSelectable,
	width: s.width,
	height: s.height,
	connectionMode: s.connectionMode,
	nodeInternals: s.nodeInternals,
	onError: s.onError
});
var EdgeRenderer = ({ defaultMarkerColor, onlyRenderVisibleElements, elevateEdgesOnSelect, rfId, edgeTypes, noPanClassName, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onEdgeClick, onEdgeDoubleClick, onReconnect, onReconnectStart, onReconnectEnd, reconnectRadius, children, disableKeyboardA11y }) => {
	const { edgesFocusable, edgesUpdatable, elementsSelectable, width, height, connectionMode, nodeInternals, onError } = useStore(selector$4, shallow$1$2);
	const edgeTree = useVisibleEdges(onlyRenderVisibleElements, nodeInternals, elevateEdgesOnSelect);
	if (!width) return null;
	return import_react.createElement(import_react.Fragment, null, edgeTree.map(({ level, edges, isMaxLevel }) => import_react.createElement("svg", {
		key: level,
		style: { zIndex: level },
		width,
		height,
		className: "react-flow__edges react-flow__container"
	}, isMaxLevel && import_react.createElement(MarkerDefinitions$1, {
		defaultColor: defaultMarkerColor,
		rfId
	}), import_react.createElement("g", null, edges.map((edge) => {
		const [sourceNodeRect, sourceHandleBounds, sourceIsValid] = getNodeData(nodeInternals.get(edge.source));
		const [targetNodeRect, targetHandleBounds, targetIsValid] = getNodeData(nodeInternals.get(edge.target));
		if (!sourceIsValid || !targetIsValid) return null;
		let edgeType = edge.type || "default";
		if (!edgeTypes[edgeType]) {
			onError?.("011", errorMessages["error011"](edgeType));
			edgeType = "default";
		}
		const EdgeComponent = edgeTypes[edgeType] || edgeTypes.default;
		const targetNodeHandles = connectionMode === ConnectionMode.Strict ? targetHandleBounds.target : (targetHandleBounds.target ?? []).concat(targetHandleBounds.source ?? []);
		const sourceHandle = getHandle(sourceHandleBounds.source, edge.sourceHandle);
		const targetHandle = getHandle(targetNodeHandles, edge.targetHandle);
		const sourcePosition = sourceHandle?.position || Position.Bottom;
		const targetPosition = targetHandle?.position || Position.Top;
		const isFocusable = !!(edge.focusable || edgesFocusable && typeof edge.focusable === "undefined");
		const edgeReconnectable = edge.reconnectable || edge.updatable;
		const isReconnectable = typeof onReconnect !== "undefined" && (edgeReconnectable || edgesUpdatable && typeof edgeReconnectable === "undefined");
		if (!sourceHandle || !targetHandle) {
			onError?.("008", errorMessages["error008"](sourceHandle, edge));
			return null;
		}
		const { sourceX, sourceY, targetX, targetY } = getEdgePositions(sourceNodeRect, sourceHandle, sourcePosition, targetNodeRect, targetHandle, targetPosition);
		return import_react.createElement(EdgeComponent, {
			key: edge.id,
			id: edge.id,
			className: cc([edge.className, noPanClassName]),
			type: edgeType,
			data: edge.data,
			selected: !!edge.selected,
			animated: !!edge.animated,
			hidden: !!edge.hidden,
			label: edge.label,
			labelStyle: edge.labelStyle,
			labelShowBg: edge.labelShowBg,
			labelBgStyle: edge.labelBgStyle,
			labelBgPadding: edge.labelBgPadding,
			labelBgBorderRadius: edge.labelBgBorderRadius,
			style: edge.style,
			source: edge.source,
			target: edge.target,
			sourceHandleId: edge.sourceHandle,
			targetHandleId: edge.targetHandle,
			markerEnd: edge.markerEnd,
			markerStart: edge.markerStart,
			sourceX,
			sourceY,
			targetX,
			targetY,
			sourcePosition,
			targetPosition,
			elementsSelectable,
			onContextMenu: onEdgeContextMenu,
			onMouseEnter: onEdgeMouseEnter,
			onMouseMove: onEdgeMouseMove,
			onMouseLeave: onEdgeMouseLeave,
			onClick: onEdgeClick,
			onEdgeDoubleClick,
			onReconnect,
			onReconnectStart,
			onReconnectEnd,
			reconnectRadius,
			rfId,
			ariaLabel: edge.ariaLabel,
			isFocusable,
			isReconnectable,
			pathOptions: "pathOptions" in edge ? edge.pathOptions : void 0,
			interactionWidth: edge.interactionWidth,
			disableKeyboardA11y
		});
	})))), children);
};
EdgeRenderer.displayName = "EdgeRenderer";
var EdgeRenderer$1 = (0, import_react.memo)(EdgeRenderer);
var selector$3 = (s) => `translate(${s.transform[0]}px,${s.transform[1]}px) scale(${s.transform[2]})`;
function Viewport({ children }) {
	const transform = useStore(selector$3);
	return import_react.createElement("div", {
		className: "react-flow__viewport react-flow__container",
		style: { transform }
	}, children);
}
function useOnInitHandler(onInit) {
	const rfInstance = useReactFlow();
	const isInitialized = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (!isInitialized.current && rfInstance.viewportInitialized && onInit) {
			setTimeout(() => onInit(rfInstance), 1);
			isInitialized.current = true;
		}
	}, [onInit, rfInstance.viewportInitialized]);
}
var oppositePosition = {
	[Position.Left]: Position.Right,
	[Position.Right]: Position.Left,
	[Position.Top]: Position.Bottom,
	[Position.Bottom]: Position.Top
};
var ConnectionLine = ({ nodeId, handleType, style, type = ConnectionLineType.Bezier, CustomComponent, connectionStatus }) => {
	const { fromNode, handleId, toX, toY, connectionMode } = useStore((0, import_react.useCallback)((s) => ({
		fromNode: s.nodeInternals.get(nodeId),
		handleId: s.connectionHandleId,
		toX: (s.connectionPosition.x - s.transform[0]) / s.transform[2],
		toY: (s.connectionPosition.y - s.transform[1]) / s.transform[2],
		connectionMode: s.connectionMode
	}), [nodeId]), shallow$1$2);
	const fromHandleBounds = fromNode?.[internalsSymbol]?.handleBounds;
	let handleBounds = fromHandleBounds?.[handleType];
	if (connectionMode === ConnectionMode.Loose) handleBounds = handleBounds ? handleBounds : fromHandleBounds?.[handleType === "source" ? "target" : "source"];
	if (!fromNode || !handleBounds) return null;
	const fromHandle = handleId ? handleBounds.find((d) => d.id === handleId) : handleBounds[0];
	const fromHandleX = fromHandle ? fromHandle.x + fromHandle.width / 2 : (fromNode.width ?? 0) / 2;
	const fromHandleY = fromHandle ? fromHandle.y + fromHandle.height / 2 : fromNode.height ?? 0;
	const fromX = (fromNode.positionAbsolute?.x ?? 0) + fromHandleX;
	const fromY = (fromNode.positionAbsolute?.y ?? 0) + fromHandleY;
	const fromPosition = fromHandle?.position;
	const toPosition = fromPosition ? oppositePosition[fromPosition] : null;
	if (!fromPosition || !toPosition) return null;
	if (CustomComponent) return import_react.createElement(CustomComponent, {
		connectionLineType: type,
		connectionLineStyle: style,
		fromNode,
		fromHandle,
		fromX,
		fromY,
		toX,
		toY,
		fromPosition,
		toPosition,
		connectionStatus
	});
	let dAttr = "";
	const pathParams = {
		sourceX: fromX,
		sourceY: fromY,
		sourcePosition: fromPosition,
		targetX: toX,
		targetY: toY,
		targetPosition: toPosition
	};
	if (type === ConnectionLineType.Bezier) [dAttr] = getBezierPath(pathParams);
	else if (type === ConnectionLineType.Step) [dAttr] = getSmoothStepPath({
		...pathParams,
		borderRadius: 0
	});
	else if (type === ConnectionLineType.SmoothStep) [dAttr] = getSmoothStepPath(pathParams);
	else if (type === ConnectionLineType.SimpleBezier) [dAttr] = getSimpleBezierPath(pathParams);
	else dAttr = `M${fromX},${fromY} ${toX},${toY}`;
	return import_react.createElement("path", {
		d: dAttr,
		fill: "none",
		className: "react-flow__connection-path",
		style
	});
};
ConnectionLine.displayName = "ConnectionLine";
var selector$2 = (s) => ({
	nodeId: s.connectionNodeId,
	handleType: s.connectionHandleType,
	nodesConnectable: s.nodesConnectable,
	connectionStatus: s.connectionStatus,
	width: s.width,
	height: s.height
});
function ConnectionLineWrapper({ containerStyle, style, type, component }) {
	const { nodeId, handleType, nodesConnectable, width, height, connectionStatus } = useStore(selector$2, shallow$1$2);
	if (!!!(nodeId && handleType && width && nodesConnectable)) return null;
	return import_react.createElement("svg", {
		style: containerStyle,
		width,
		height,
		className: "react-flow__edges react-flow__connectionline react-flow__container"
	}, import_react.createElement("g", { className: cc(["react-flow__connection", connectionStatus]) }, import_react.createElement(ConnectionLine, {
		nodeId,
		handleType,
		style,
		type,
		CustomComponent: component,
		connectionStatus
	})));
}
function useNodeOrEdgeTypes(nodeOrEdgeTypes, createTypes) {
	(0, import_react.useRef)(null);
	useStoreApi();
	return (0, import_react.useMemo)(() => {
		return createTypes(nodeOrEdgeTypes);
	}, [nodeOrEdgeTypes]);
}
var GraphView = ({ nodeTypes, edgeTypes, onMove, onMoveStart, onMoveEnd, onInit, onNodeClick, onEdgeClick, onNodeDoubleClick, onEdgeDoubleClick, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onSelectionContextMenu, onSelectionStart, onSelectionEnd, connectionLineType, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, selectionKeyCode, selectionOnDrag, selectionMode, multiSelectionKeyCode, panActivationKeyCode, zoomActivationKeyCode, deleteKeyCode, onlyRenderVisibleElements, elementsSelectable, selectNodesOnDrag, defaultViewport, translateExtent, minZoom, maxZoom, preventScrolling, defaultMarkerColor, zoomOnScroll, zoomOnPinch, panOnScroll, panOnScrollSpeed, panOnScrollMode, zoomOnDoubleClick, panOnDrag, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, onEdgeContextMenu, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onReconnect, onReconnectStart, onReconnectEnd, reconnectRadius, noDragClassName, noWheelClassName, noPanClassName, elevateEdgesOnSelect, disableKeyboardA11y, nodeOrigin, nodeExtent, rfId }) => {
	const nodeTypesWrapped = useNodeOrEdgeTypes(nodeTypes, createNodeTypes);
	const edgeTypesWrapped = useNodeOrEdgeTypes(edgeTypes, createEdgeTypes);
	useOnInitHandler(onInit);
	return import_react.createElement(FlowRenderer$1, {
		onPaneClick,
		onPaneMouseEnter,
		onPaneMouseMove,
		onPaneMouseLeave,
		onPaneContextMenu,
		onPaneScroll,
		deleteKeyCode,
		selectionKeyCode,
		selectionOnDrag,
		selectionMode,
		onSelectionStart,
		onSelectionEnd,
		multiSelectionKeyCode,
		panActivationKeyCode,
		zoomActivationKeyCode,
		elementsSelectable,
		onMove,
		onMoveStart,
		onMoveEnd,
		zoomOnScroll,
		zoomOnPinch,
		zoomOnDoubleClick,
		panOnScroll,
		panOnScrollSpeed,
		panOnScrollMode,
		panOnDrag,
		defaultViewport,
		translateExtent,
		minZoom,
		maxZoom,
		onSelectionContextMenu,
		preventScrolling,
		noDragClassName,
		noWheelClassName,
		noPanClassName,
		disableKeyboardA11y
	}, import_react.createElement(Viewport, null, import_react.createElement(EdgeRenderer$1, {
		edgeTypes: edgeTypesWrapped,
		onEdgeClick,
		onEdgeDoubleClick,
		onlyRenderVisibleElements,
		onEdgeContextMenu,
		onEdgeMouseEnter,
		onEdgeMouseMove,
		onEdgeMouseLeave,
		onReconnect,
		onReconnectStart,
		onReconnectEnd,
		reconnectRadius,
		defaultMarkerColor,
		noPanClassName,
		elevateEdgesOnSelect: !!elevateEdgesOnSelect,
		disableKeyboardA11y,
		rfId
	}, import_react.createElement(ConnectionLineWrapper, {
		style: connectionLineStyle,
		type: connectionLineType,
		component: connectionLineComponent,
		containerStyle: connectionLineContainerStyle
	})), import_react.createElement("div", { className: "react-flow__edgelabel-renderer" }), import_react.createElement(NodeRenderer$1, {
		nodeTypes: nodeTypesWrapped,
		onNodeClick,
		onNodeDoubleClick,
		onNodeMouseEnter,
		onNodeMouseMove,
		onNodeMouseLeave,
		onNodeContextMenu,
		selectNodesOnDrag,
		onlyRenderVisibleElements,
		noPanClassName,
		noDragClassName,
		disableKeyboardA11y,
		nodeOrigin,
		nodeExtent,
		rfId
	})));
};
GraphView.displayName = "GraphView";
var GraphView$1 = (0, import_react.memo)(GraphView);
var infiniteExtent = [[Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY], [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]];
var initialState = {
	rfId: "1",
	width: 0,
	height: 0,
	transform: [
		0,
		0,
		1
	],
	nodeInternals: /* @__PURE__ */ new Map(),
	edges: [],
	onNodesChange: null,
	onEdgesChange: null,
	hasDefaultNodes: false,
	hasDefaultEdges: false,
	d3Zoom: null,
	d3Selection: null,
	d3ZoomHandler: void 0,
	minZoom: .5,
	maxZoom: 2,
	translateExtent: infiniteExtent,
	nodeExtent: infiniteExtent,
	nodesSelectionActive: false,
	userSelectionActive: false,
	userSelectionRect: null,
	connectionNodeId: null,
	connectionHandleId: null,
	connectionHandleType: "source",
	connectionPosition: {
		x: 0,
		y: 0
	},
	connectionStatus: null,
	connectionMode: ConnectionMode.Strict,
	domNode: null,
	paneDragging: false,
	noPanClassName: "nopan",
	nodeOrigin: [0, 0],
	nodeDragThreshold: 0,
	snapGrid: [15, 15],
	snapToGrid: false,
	nodesDraggable: true,
	nodesConnectable: true,
	nodesFocusable: true,
	edgesFocusable: true,
	edgesUpdatable: true,
	elementsSelectable: true,
	elevateNodesOnSelect: true,
	fitViewOnInit: false,
	fitViewOnInitDone: false,
	fitViewOnInitOptions: void 0,
	onSelectionChange: [],
	multiSelectionActive: false,
	connectionStartHandle: null,
	connectionEndHandle: null,
	connectionClickStartHandle: null,
	connectOnClick: true,
	ariaLiveMessage: "",
	autoPanOnConnect: true,
	autoPanOnNodeDrag: true,
	connectionRadius: 20,
	onError: devWarn,
	isValidConnection: void 0
};
var createRFStore = () => createWithEqualityFn((set, get) => ({
	...initialState,
	setNodes: (nodes) => {
		const { nodeInternals, nodeOrigin, elevateNodesOnSelect } = get();
		set({ nodeInternals: createNodeInternals(nodes, nodeInternals, nodeOrigin, elevateNodesOnSelect) });
	},
	getNodes: () => {
		return Array.from(get().nodeInternals.values());
	},
	setEdges: (edges) => {
		const { defaultEdgeOptions = {} } = get();
		set({ edges: edges.map((e) => ({
			...defaultEdgeOptions,
			...e
		})) });
	},
	setDefaultNodesAndEdges: (nodes, edges) => {
		const hasDefaultNodes = typeof nodes !== "undefined";
		const hasDefaultEdges = typeof edges !== "undefined";
		set({
			nodeInternals: hasDefaultNodes ? createNodeInternals(nodes, /* @__PURE__ */ new Map(), get().nodeOrigin, get().elevateNodesOnSelect) : /* @__PURE__ */ new Map(),
			edges: hasDefaultEdges ? edges : [],
			hasDefaultNodes,
			hasDefaultEdges
		});
	},
	updateNodeDimensions: (updates) => {
		const { onNodesChange, nodeInternals, fitViewOnInit, fitViewOnInitDone, fitViewOnInitOptions, domNode, nodeOrigin } = get();
		const viewportNode = domNode?.querySelector(".react-flow__viewport");
		if (!viewportNode) return;
		const style = window.getComputedStyle(viewportNode);
		const { m22: zoom } = new window.DOMMatrixReadOnly(style.transform);
		const changes = updates.reduce((res, update) => {
			const node = nodeInternals.get(update.id);
			if (node?.hidden) nodeInternals.set(node.id, {
				...node,
				[internalsSymbol]: {
					...node[internalsSymbol],
					handleBounds: void 0
				}
			});
			else if (node) {
				const dimensions = getDimensions$1(update.nodeElement);
				if (!!(dimensions.width && dimensions.height && (node.width !== dimensions.width || node.height !== dimensions.height || update.forceUpdate))) {
					nodeInternals.set(node.id, {
						...node,
						[internalsSymbol]: {
							...node[internalsSymbol],
							handleBounds: {
								source: getHandleBounds(".source", update.nodeElement, zoom, nodeOrigin),
								target: getHandleBounds(".target", update.nodeElement, zoom, nodeOrigin)
							}
						},
						...dimensions
					});
					res.push({
						id: node.id,
						type: "dimensions",
						dimensions
					});
				}
			}
			return res;
		}, []);
		updateAbsoluteNodePositions(nodeInternals, nodeOrigin);
		const nextFitViewOnInitDone = fitViewOnInitDone || fitViewOnInit && !fitViewOnInitDone && fitView(get, {
			initial: true,
			...fitViewOnInitOptions
		});
		set({
			nodeInternals: new Map(nodeInternals),
			fitViewOnInitDone: nextFitViewOnInitDone
		});
		if (changes?.length > 0) onNodesChange?.(changes);
	},
	updateNodePositions: (nodeDragItems, positionChanged = true, dragging = false) => {
		const { triggerNodeChanges } = get();
		triggerNodeChanges(nodeDragItems.map((node) => {
			const change = {
				id: node.id,
				type: "position",
				dragging
			};
			if (positionChanged) {
				change.positionAbsolute = node.positionAbsolute;
				change.position = node.position;
			}
			return change;
		}));
	},
	triggerNodeChanges: (changes) => {
		const { onNodesChange, nodeInternals, hasDefaultNodes, nodeOrigin, getNodes, elevateNodesOnSelect } = get();
		if (changes?.length) {
			if (hasDefaultNodes) set({ nodeInternals: createNodeInternals(applyNodeChanges(changes, getNodes()), nodeInternals, nodeOrigin, elevateNodesOnSelect) });
			onNodesChange?.(changes);
		}
	},
	addSelectedNodes: (selectedNodeIds) => {
		const { multiSelectionActive, edges, getNodes } = get();
		let changedNodes;
		let changedEdges = null;
		if (multiSelectionActive) changedNodes = selectedNodeIds.map((nodeId) => createSelectionChange(nodeId, true));
		else {
			changedNodes = getSelectionChanges(getNodes(), selectedNodeIds);
			changedEdges = getSelectionChanges(edges, []);
		}
		updateNodesAndEdgesSelections({
			changedNodes,
			changedEdges,
			get,
			set
		});
	},
	addSelectedEdges: (selectedEdgeIds) => {
		const { multiSelectionActive, edges, getNodes } = get();
		let changedEdges;
		let changedNodes = null;
		if (multiSelectionActive) changedEdges = selectedEdgeIds.map((edgeId) => createSelectionChange(edgeId, true));
		else {
			changedEdges = getSelectionChanges(edges, selectedEdgeIds);
			changedNodes = getSelectionChanges(getNodes(), []);
		}
		updateNodesAndEdgesSelections({
			changedNodes,
			changedEdges,
			get,
			set
		});
	},
	unselectNodesAndEdges: ({ nodes, edges } = {}) => {
		const { edges: storeEdges, getNodes } = get();
		const nodesToUnselect = nodes ? nodes : getNodes();
		const edgesToUnselect = edges ? edges : storeEdges;
		updateNodesAndEdgesSelections({
			changedNodes: nodesToUnselect.map((n) => {
				n.selected = false;
				return createSelectionChange(n.id, false);
			}),
			changedEdges: edgesToUnselect.map((edge) => createSelectionChange(edge.id, false)),
			get,
			set
		});
	},
	setMinZoom: (minZoom) => {
		const { d3Zoom, maxZoom } = get();
		d3Zoom?.scaleExtent([minZoom, maxZoom]);
		set({ minZoom });
	},
	setMaxZoom: (maxZoom) => {
		const { d3Zoom, minZoom } = get();
		d3Zoom?.scaleExtent([minZoom, maxZoom]);
		set({ maxZoom });
	},
	setTranslateExtent: (translateExtent) => {
		get().d3Zoom?.translateExtent(translateExtent);
		set({ translateExtent });
	},
	resetSelectedElements: () => {
		const { edges, getNodes } = get();
		updateNodesAndEdgesSelections({
			changedNodes: getNodes().filter((e) => e.selected).map((n) => createSelectionChange(n.id, false)),
			changedEdges: edges.filter((e) => e.selected).map((e) => createSelectionChange(e.id, false)),
			get,
			set
		});
	},
	setNodeExtent: (nodeExtent) => {
		const { nodeInternals } = get();
		nodeInternals.forEach((node) => {
			node.positionAbsolute = clampPosition(node.position, nodeExtent);
		});
		set({
			nodeExtent,
			nodeInternals: new Map(nodeInternals)
		});
	},
	panBy: (delta) => {
		const { transform, width, height, d3Zoom, d3Selection, translateExtent } = get();
		if (!d3Zoom || !d3Selection || !delta.x && !delta.y) return false;
		const nextTransform = identity.translate(transform[0] + delta.x, transform[1] + delta.y).scale(transform[2]);
		const extent = [[0, 0], [width, height]];
		const constrainedTransform = d3Zoom?.constrain()(nextTransform, extent, translateExtent);
		d3Zoom.transform(d3Selection, constrainedTransform);
		return transform[0] !== constrainedTransform.x || transform[1] !== constrainedTransform.y || transform[2] !== constrainedTransform.k;
	},
	cancelConnection: () => set({
		connectionNodeId: initialState.connectionNodeId,
		connectionHandleId: initialState.connectionHandleId,
		connectionHandleType: initialState.connectionHandleType,
		connectionStatus: initialState.connectionStatus,
		connectionStartHandle: initialState.connectionStartHandle,
		connectionEndHandle: initialState.connectionEndHandle
	}),
	reset: () => set({ ...initialState })
}), Object.is);
var ReactFlowProvider = ({ children }) => {
	const storeRef = (0, import_react.useRef)(null);
	if (!storeRef.current) storeRef.current = createRFStore();
	return import_react.createElement(Provider$1, { value: storeRef.current }, children);
};
ReactFlowProvider.displayName = "ReactFlowProvider";
var Wrapper = ({ children }) => {
	if ((0, import_react.useContext)(StoreContext)) return import_react.createElement(import_react.Fragment, null, children);
	return import_react.createElement(ReactFlowProvider, null, children);
};
Wrapper.displayName = "ReactFlowWrapper";
var defaultNodeTypes = {
	input: InputNode$1,
	default: DefaultNode$1,
	output: OutputNode$1,
	group: GroupNode
};
var defaultEdgeTypes = {
	default: BezierEdge,
	straight: StraightEdge,
	step: StepEdge,
	smoothstep: SmoothStepEdge,
	simplebezier: SimpleBezierEdge
};
var initNodeOrigin = [0, 0];
var initSnapGrid = [15, 15];
var initDefaultViewport = {
	x: 0,
	y: 0,
	zoom: 1
};
var wrapperStyle = {
	width: "100%",
	height: "100%",
	overflow: "hidden",
	position: "relative",
	zIndex: 0
};
var ReactFlow = (0, import_react.forwardRef)(({ nodes, edges, defaultNodes, defaultEdges, className, nodeTypes = defaultNodeTypes, edgeTypes = defaultEdgeTypes, onNodeClick, onEdgeClick, onInit, onMove, onMoveStart, onMoveEnd, onConnect, onConnectStart, onConnectEnd, onClickConnectStart, onClickConnectEnd, onNodeMouseEnter, onNodeMouseMove, onNodeMouseLeave, onNodeContextMenu, onNodeDoubleClick, onNodeDragStart, onNodeDrag, onNodeDragStop, onNodesDelete, onEdgesDelete, onSelectionChange, onSelectionDragStart, onSelectionDrag, onSelectionDragStop, onSelectionContextMenu, onSelectionStart, onSelectionEnd, connectionMode = ConnectionMode.Strict, connectionLineType = ConnectionLineType.Bezier, connectionLineStyle, connectionLineComponent, connectionLineContainerStyle, deleteKeyCode = "Backspace", selectionKeyCode = "Shift", selectionOnDrag = false, selectionMode = SelectionMode.Full, panActivationKeyCode = "Space", multiSelectionKeyCode = isMacOs() ? "Meta" : "Control", zoomActivationKeyCode = isMacOs() ? "Meta" : "Control", snapToGrid = false, snapGrid = initSnapGrid, onlyRenderVisibleElements = false, selectNodesOnDrag = true, nodesDraggable, nodesConnectable, nodesFocusable, nodeOrigin = initNodeOrigin, edgesFocusable, edgesUpdatable, elementsSelectable, defaultViewport = initDefaultViewport, minZoom = .5, maxZoom = 2, translateExtent = infiniteExtent, preventScrolling = true, nodeExtent, defaultMarkerColor = "#b1b1b7", zoomOnScroll = true, zoomOnPinch = true, panOnScroll = false, panOnScrollSpeed = .5, panOnScrollMode = PanOnScrollMode.Free, zoomOnDoubleClick = true, panOnDrag = true, onPaneClick, onPaneMouseEnter, onPaneMouseMove, onPaneMouseLeave, onPaneScroll, onPaneContextMenu, children, onEdgeContextMenu, onEdgeDoubleClick, onEdgeMouseEnter, onEdgeMouseMove, onEdgeMouseLeave, onEdgeUpdate, onEdgeUpdateStart, onEdgeUpdateEnd, onReconnect, onReconnectStart, onReconnectEnd, reconnectRadius = 10, edgeUpdaterRadius = 10, onNodesChange, onEdgesChange, noDragClassName = "nodrag", noWheelClassName = "nowheel", noPanClassName = "nopan", fitView = false, fitViewOptions, connectOnClick = true, attributionPosition, proOptions, defaultEdgeOptions, elevateNodesOnSelect = true, elevateEdgesOnSelect = false, disableKeyboardA11y = false, autoPanOnConnect = true, autoPanOnNodeDrag = true, connectionRadius = 20, isValidConnection, onError, style, id, nodeDragThreshold, ...rest }, ref) => {
	const rfId = id || "1";
	return import_react.createElement("div", {
		...rest,
		style: {
			...style,
			...wrapperStyle
		},
		ref,
		className: cc(["react-flow", className]),
		"data-testid": "rf__wrapper",
		id
	}, import_react.createElement(Wrapper, null, import_react.createElement(GraphView$1, {
		onInit,
		onMove,
		onMoveStart,
		onMoveEnd,
		onNodeClick,
		onEdgeClick,
		onNodeMouseEnter,
		onNodeMouseMove,
		onNodeMouseLeave,
		onNodeContextMenu,
		onNodeDoubleClick,
		nodeTypes,
		edgeTypes,
		connectionLineType,
		connectionLineStyle,
		connectionLineComponent,
		connectionLineContainerStyle,
		selectionKeyCode,
		selectionOnDrag,
		selectionMode,
		deleteKeyCode,
		multiSelectionKeyCode,
		panActivationKeyCode,
		zoomActivationKeyCode,
		onlyRenderVisibleElements,
		selectNodesOnDrag,
		defaultViewport,
		translateExtent,
		minZoom,
		maxZoom,
		preventScrolling,
		zoomOnScroll,
		zoomOnPinch,
		zoomOnDoubleClick,
		panOnScroll,
		panOnScrollSpeed,
		panOnScrollMode,
		panOnDrag,
		onPaneClick,
		onPaneMouseEnter,
		onPaneMouseMove,
		onPaneMouseLeave,
		onPaneScroll,
		onPaneContextMenu,
		onSelectionContextMenu,
		onSelectionStart,
		onSelectionEnd,
		onEdgeContextMenu,
		onEdgeDoubleClick,
		onEdgeMouseEnter,
		onEdgeMouseMove,
		onEdgeMouseLeave,
		onReconnect: onReconnect ?? onEdgeUpdate,
		onReconnectStart: onReconnectStart ?? onEdgeUpdateStart,
		onReconnectEnd: onReconnectEnd ?? onEdgeUpdateEnd,
		reconnectRadius: reconnectRadius ?? edgeUpdaterRadius,
		defaultMarkerColor,
		noDragClassName,
		noWheelClassName,
		noPanClassName,
		elevateEdgesOnSelect,
		rfId,
		disableKeyboardA11y,
		nodeOrigin,
		nodeExtent
	}), import_react.createElement(StoreUpdater, {
		nodes,
		edges,
		defaultNodes,
		defaultEdges,
		onConnect,
		onConnectStart,
		onConnectEnd,
		onClickConnectStart,
		onClickConnectEnd,
		nodesDraggable,
		nodesConnectable,
		nodesFocusable,
		edgesFocusable,
		edgesUpdatable,
		elementsSelectable,
		elevateNodesOnSelect,
		minZoom,
		maxZoom,
		nodeExtent,
		onNodesChange,
		onEdgesChange,
		snapToGrid,
		snapGrid,
		connectionMode,
		translateExtent,
		connectOnClick,
		defaultEdgeOptions,
		fitView,
		fitViewOptions,
		onNodesDelete,
		onEdgesDelete,
		onNodeDragStart,
		onNodeDrag,
		onNodeDragStop,
		onSelectionDrag,
		onSelectionDragStart,
		onSelectionDragStop,
		noPanClassName,
		nodeOrigin,
		rfId,
		autoPanOnConnect,
		autoPanOnNodeDrag,
		onError,
		connectionRadius,
		isValidConnection,
		nodeDragThreshold
	}), import_react.createElement(Wrapper$1, { onSelectionChange }), children, import_react.createElement(Attribution, {
		proOptions,
		position: attributionPosition
	}), import_react.createElement(A11yDescriptions, {
		rfId,
		disableKeyboardA11y
	})));
});
ReactFlow.displayName = "ReactFlow";
//#endregion
//#region node_modules/@reactflow/controls/node_modules/zustand/esm/shallow.mjs
function shallow$1$1(objA, objB) {
	if (Object.is(objA, objB)) return true;
	if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
	if (objA instanceof Map && objB instanceof Map) {
		if (objA.size !== objB.size) return false;
		for (const [key, value] of objA) if (!Object.is(value, objB.get(key))) return false;
		return true;
	}
	if (objA instanceof Set && objB instanceof Set) {
		if (objA.size !== objB.size) return false;
		for (const value of objA) if (!objB.has(value)) return false;
		return true;
	}
	const keysA = Object.keys(objA);
	if (keysA.length !== Object.keys(objB).length) return false;
	for (const keyA of keysA) if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) return false;
	return true;
}
//#endregion
//#region node_modules/@reactflow/controls/dist/esm/index.mjs
function PlusIcon() {
	return import_react.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 32"
	}, import_react.createElement("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }));
}
function MinusIcon() {
	return import_react.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 5"
	}, import_react.createElement("path", { d: "M0 0h32v4.2H0z" }));
}
function FitViewIcon() {
	return import_react.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 32 30"
	}, import_react.createElement("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }));
}
function LockIcon() {
	return import_react.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 25 32"
	}, import_react.createElement("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }));
}
function UnlockIcon() {
	return import_react.createElement("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 25 32"
	}, import_react.createElement("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z" }));
}
var ControlButton = ({ children, className, ...rest }) => import_react.createElement("button", {
	type: "button",
	className: cc(["react-flow__controls-button", className]),
	...rest
}, children);
ControlButton.displayName = "ControlButton";
var selector$1 = (s) => ({
	isInteractive: s.nodesDraggable || s.nodesConnectable || s.elementsSelectable,
	minZoomReached: s.transform[2] <= s.minZoom,
	maxZoomReached: s.transform[2] >= s.maxZoom
});
var Controls = ({ style, showZoom = true, showFitView = true, showInteractive = true, fitViewOptions, onZoomIn, onZoomOut, onFitView, onInteractiveChange, className, children, position = "bottom-left" }) => {
	const store = useStoreApi();
	const [isVisible, setIsVisible] = (0, import_react.useState)(false);
	const { isInteractive, minZoomReached, maxZoomReached } = useStore(selector$1, shallow$1$1);
	const { zoomIn, zoomOut, fitView } = useReactFlow();
	(0, import_react.useEffect)(() => {
		setIsVisible(true);
	}, []);
	if (!isVisible) return null;
	const onZoomInHandler = () => {
		zoomIn();
		onZoomIn?.();
	};
	const onZoomOutHandler = () => {
		zoomOut();
		onZoomOut?.();
	};
	const onFitViewHandler = () => {
		fitView(fitViewOptions);
		onFitView?.();
	};
	const onToggleInteractivity = () => {
		store.setState({
			nodesDraggable: !isInteractive,
			nodesConnectable: !isInteractive,
			elementsSelectable: !isInteractive
		});
		onInteractiveChange?.(!isInteractive);
	};
	return import_react.createElement(Panel, {
		className: cc(["react-flow__controls", className]),
		position,
		style,
		"data-testid": "rf__controls"
	}, showZoom && import_react.createElement(import_react.Fragment, null, import_react.createElement(ControlButton, {
		onClick: onZoomInHandler,
		className: "react-flow__controls-zoomin",
		title: "zoom in",
		"aria-label": "zoom in",
		disabled: maxZoomReached
	}, import_react.createElement(PlusIcon, null)), import_react.createElement(ControlButton, {
		onClick: onZoomOutHandler,
		className: "react-flow__controls-zoomout",
		title: "zoom out",
		"aria-label": "zoom out",
		disabled: minZoomReached
	}, import_react.createElement(MinusIcon, null))), showFitView && import_react.createElement(ControlButton, {
		className: "react-flow__controls-fitview",
		onClick: onFitViewHandler,
		title: "fit view",
		"aria-label": "fit view"
	}, import_react.createElement(FitViewIcon, null)), showInteractive && import_react.createElement(ControlButton, {
		className: "react-flow__controls-interactive",
		onClick: onToggleInteractivity,
		title: "toggle interactivity",
		"aria-label": "toggle interactivity"
	}, isInteractive ? import_react.createElement(UnlockIcon, null) : import_react.createElement(LockIcon, null)), children);
};
Controls.displayName = "Controls";
var Controls$1 = (0, import_react.memo)(Controls);
//#endregion
//#region node_modules/@reactflow/background/node_modules/zustand/esm/shallow.mjs
function shallow$1(objA, objB) {
	if (Object.is(objA, objB)) return true;
	if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) return false;
	if (objA instanceof Map && objB instanceof Map) {
		if (objA.size !== objB.size) return false;
		for (const [key, value] of objA) if (!Object.is(value, objB.get(key))) return false;
		return true;
	}
	if (objA instanceof Set && objB instanceof Set) {
		if (objA.size !== objB.size) return false;
		for (const value of objA) if (!objB.has(value)) return false;
		return true;
	}
	const keysA = Object.keys(objA);
	if (keysA.length !== Object.keys(objB).length) return false;
	for (const keyA of keysA) if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) return false;
	return true;
}
//#endregion
//#region node_modules/@reactflow/background/dist/esm/index.mjs
var BackgroundVariant;
(function(BackgroundVariant) {
	BackgroundVariant["Lines"] = "lines";
	BackgroundVariant["Dots"] = "dots";
	BackgroundVariant["Cross"] = "cross";
})(BackgroundVariant || (BackgroundVariant = {}));
function LinePattern({ color, dimensions, lineWidth }) {
	return import_react.createElement("path", {
		stroke: color,
		strokeWidth: lineWidth,
		d: `M${dimensions[0] / 2} 0 V${dimensions[1]} M0 ${dimensions[1] / 2} H${dimensions[0]}`
	});
}
function DotPattern({ color, radius }) {
	return import_react.createElement("circle", {
		cx: radius,
		cy: radius,
		r: radius,
		fill: color
	});
}
var defaultColor = {
	[BackgroundVariant.Dots]: "#91919a",
	[BackgroundVariant.Lines]: "#eee",
	[BackgroundVariant.Cross]: "#e2e2e2"
};
var defaultSize = {
	[BackgroundVariant.Dots]: 1,
	[BackgroundVariant.Lines]: 1,
	[BackgroundVariant.Cross]: 6
};
var selector = (s) => ({
	transform: s.transform,
	patternId: `pattern-${s.rfId}`
});
function Background({ id, variant = BackgroundVariant.Dots, gap = 20, size, lineWidth = 1, offset = 2, color, style, className }) {
	const ref = (0, import_react.useRef)(null);
	const { transform, patternId } = useStore(selector, shallow$1);
	const patternColor = color || defaultColor[variant];
	const patternSize = size || defaultSize[variant];
	const isDots = variant === BackgroundVariant.Dots;
	const isCross = variant === BackgroundVariant.Cross;
	const gapXY = Array.isArray(gap) ? gap : [gap, gap];
	const scaledGap = [gapXY[0] * transform[2] || 1, gapXY[1] * transform[2] || 1];
	const scaledSize = patternSize * transform[2];
	const patternDimensions = isCross ? [scaledSize, scaledSize] : scaledGap;
	const patternOffset = isDots ? [scaledSize / offset, scaledSize / offset] : [patternDimensions[0] / offset, patternDimensions[1] / offset];
	return import_react.createElement("svg", {
		className: cc(["react-flow__background", className]),
		style: {
			...style,
			position: "absolute",
			width: "100%",
			height: "100%",
			top: 0,
			left: 0
		},
		ref,
		"data-testid": "rf__background"
	}, import_react.createElement("pattern", {
		id: patternId + id,
		x: transform[0] % scaledGap[0],
		y: transform[1] % scaledGap[1],
		width: scaledGap[0],
		height: scaledGap[1],
		patternUnits: "userSpaceOnUse",
		patternTransform: `translate(-${patternOffset[0]},-${patternOffset[1]})`
	}, isDots ? import_react.createElement(DotPattern, {
		color: patternColor,
		radius: scaledSize / offset
	}) : import_react.createElement(LinePattern, {
		dimensions: patternDimensions,
		color: patternColor,
		lineWidth
	})), import_react.createElement("rect", {
		x: "0",
		y: "0",
		width: "100%",
		height: "100%",
		fill: `url(#${patternId + id})`
	}));
}
Background.displayName = "Background";
var Background$1 = (0, import_react.memo)(Background);
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
	x: v,
	y: v
});
var oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function clamp(start, value, end) {
	return max(start, min(value, end));
}
function evaluate(value, param) {
	return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
	return placement.split("-")[0];
}
function getAlignment(placement) {
	return placement.split("-")[1];
}
function getOppositeAxis(axis) {
	return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
	return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
	const firstChar = placement[0];
	return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
	return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
	if (rtl === void 0) rtl = false;
	const alignment = getAlignment(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const length = getAxisLength(alignmentAxis);
	let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
	if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
	return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
	const oppositePlacement = getOppositePlacement(placement);
	return [
		getOppositeAlignmentPlacement(placement),
		oppositePlacement,
		getOppositeAlignmentPlacement(oppositePlacement)
	];
}
function getOppositeAlignmentPlacement(placement) {
	return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
	switch (side) {
		case "top":
		case "bottom":
			if (rtl) return isStart ? rlPlacement : lrPlacement;
			return isStart ? lrPlacement : rlPlacement;
		case "left":
		case "right": return isStart ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
	const alignment = getAlignment(placement);
	let list = getSideList(getSide(placement), direction === "start", rtl);
	if (alignment) {
		list = list.map((side) => side + "-" + alignment);
		if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
	}
	return list;
}
function getOppositePlacement(placement) {
	const side = getSide(placement);
	return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
	return {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		...padding
	};
}
function getPaddingObject(padding) {
	return typeof padding !== "number" ? expandPaddingObject(padding) : {
		top: padding,
		right: padding,
		bottom: padding,
		left: padding
	};
}
function rectToClientRect(rect) {
	const { x, y, width, height } = rect;
	return {
		width,
		height,
		top: y,
		left: x,
		right: x + width,
		bottom: y + height,
		x,
		y
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
	let { reference, floating } = _ref;
	const sideAxis = getSideAxis(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const alignLength = getAxisLength(alignmentAxis);
	const side = getSide(placement);
	const isVertical = sideAxis === "y";
	const commonX = reference.x + reference.width / 2 - floating.width / 2;
	const commonY = reference.y + reference.height / 2 - floating.height / 2;
	const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
	let coords;
	switch (side) {
		case "top":
			coords = {
				x: commonX,
				y: reference.y - floating.height
			};
			break;
		case "bottom":
			coords = {
				x: commonX,
				y: reference.y + reference.height
			};
			break;
		case "right":
			coords = {
				x: reference.x + reference.width,
				y: commonY
			};
			break;
		case "left":
			coords = {
				x: reference.x - floating.width,
				y: commonY
			};
			break;
		default: coords = {
			x: reference.x,
			y: reference.y
		};
	}
	switch (getAlignment(placement)) {
		case "start":
			coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
			break;
		case "end":
			coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
			break;
	}
	return coords;
}
/**
* Resolves with an object of overflow side offsets that determine how much the
* element is overflowing a given clipping boundary on each side.
* - positive = overflowing the boundary by that number of pixels
* - negative = how many pixels left before it will overflow
* - 0 = lies flush with the boundary
* @see https://floating-ui.com/docs/detectOverflow
*/
async function detectOverflow(state, options) {
	var _await$platform$isEle;
	if (options === void 0) options = {};
	const { x, y, platform, rects, elements, strategy } = state;
	const { boundary = "clippingAncestors", rootBoundary = "viewport", elementContext = "floating", altBoundary = false, padding = 0 } = evaluate(options, state);
	const paddingObject = getPaddingObject(padding);
	const element = elements[altBoundary ? elementContext === "floating" ? "reference" : "floating" : elementContext];
	const clippingClientRect = rectToClientRect(await platform.getClippingRect({
		element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
		boundary,
		rootBoundary,
		strategy
	}));
	const rect = elementContext === "floating" ? {
		x,
		y,
		width: rects.floating.width,
		height: rects.floating.height
	} : rects.reference;
	const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
	const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
		x: 1,
		y: 1
	} : {
		x: 1,
		y: 1
	};
	const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements,
		rect,
		offsetParent,
		strategy
	}) : rect);
	return {
		top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
		bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
		left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
		right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
	};
}
var MAX_RESET_COUNT = 50;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*
* This export does not have any `platform` interface logic. You will need to
* write one for the platform you are using Floating UI with.
*/
var computePosition$1 = async (reference, floating, config) => {
	const { placement = "bottom", strategy = "absolute", middleware = [], platform } = config;
	const platformWithDetectOverflow = platform.detectOverflow ? platform : {
		...platform,
		detectOverflow
	};
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
	let rects = await platform.getElementRects({
		reference,
		floating,
		strategy
	});
	let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
	let statefulPlacement = placement;
	let resetCount = 0;
	const middlewareData = {};
	for (let i = 0; i < middleware.length; i++) {
		const currentMiddleware = middleware[i];
		if (!currentMiddleware) continue;
		const { name, fn } = currentMiddleware;
		const { x: nextX, y: nextY, data, reset } = await fn({
			x,
			y,
			initialPlacement: placement,
			placement: statefulPlacement,
			strategy,
			middlewareData,
			rects,
			platform: platformWithDetectOverflow,
			elements: {
				reference,
				floating
			}
		});
		x = nextX != null ? nextX : x;
		y = nextY != null ? nextY : y;
		middlewareData[name] = {
			...middlewareData[name],
			...data
		};
		if (reset && resetCount < MAX_RESET_COUNT) {
			resetCount++;
			if (typeof reset === "object") {
				if (reset.placement) statefulPlacement = reset.placement;
				if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
					reference,
					floating,
					strategy
				}) : reset.rects;
				({x, y} = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
			}
			i = -1;
		}
	}
	return {
		x,
		y,
		placement: statefulPlacement,
		strategy,
		middlewareData
	};
};
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow$1 = (options) => ({
	name: "arrow",
	options,
	async fn(state) {
		const { x, y, placement, rects, platform, elements, middlewareData } = state;
		const { element, padding = 0 } = evaluate(options, state) || {};
		if (element == null) return {};
		const paddingObject = getPaddingObject(padding);
		const coords = {
			x,
			y
		};
		const axis = getAlignmentAxis(placement);
		const length = getAxisLength(axis);
		const arrowDimensions = await platform.getDimensions(element);
		const isYAxis = axis === "y";
		const minProp = isYAxis ? "top" : "left";
		const maxProp = isYAxis ? "bottom" : "right";
		const clientProp = isYAxis ? "clientHeight" : "clientWidth";
		const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
		const startDiff = coords[axis] - rects.reference[axis];
		const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
		let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
		if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) clientSize = elements.floating[clientProp] || rects.floating[length];
		const centerToReference = endDiff / 2 - startDiff / 2;
		const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
		const minPadding = min(paddingObject[minProp], largestPossiblePadding);
		const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
		const min$1 = minPadding;
		const max = clientSize - arrowDimensions[length] - maxPadding;
		const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
		const offset = clamp(min$1, center, max);
		const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
		const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
		return {
			[axis]: coords[axis] + alignmentOffset,
			data: {
				[axis]: offset,
				centerOffset: center - offset - alignmentOffset,
				...shouldAddOffset && { alignmentOffset }
			},
			reset: shouldAddOffset
		};
	}
});
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "flip",
		options,
		async fn(state) {
			var _middlewareData$arrow, _middlewareData$flip;
			const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = "bestFit", fallbackAxisSideDirection = "none", flipAlignment = true, ...detectOverflowOptions } = evaluate(options, state);
			if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			const side = getSide(placement);
			const initialSideAxis = getSideAxis(initialPlacement);
			const isBasePlacement = getSide(initialPlacement) === initialPlacement;
			const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
			const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
			const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
			if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
			const placements = [initialPlacement, ...fallbackPlacements];
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const overflows = [];
			let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
			if (checkMainAxis) overflows.push(overflow[side]);
			if (checkCrossAxis) {
				const sides = getAlignmentSides(placement, rects, rtl);
				overflows.push(overflow[sides[0]], overflow[sides[1]]);
			}
			overflowsData = [...overflowsData, {
				placement,
				overflows
			}];
			if (!overflows.every((side) => side <= 0)) {
				var _middlewareData$flip2, _overflowsData$filter;
				const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
				const nextPlacement = placements[nextIndex];
				if (nextPlacement) {
					if (!(checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false) || overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) return {
						data: {
							index: nextIndex,
							overflows: overflowsData
						},
						reset: { placement: nextPlacement }
					};
				}
				let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
				if (!resetPlacement) switch (fallbackStrategy) {
					case "bestFit": {
						var _overflowsData$filter2;
						const placement = (_overflowsData$filter2 = overflowsData.filter((d) => {
							if (hasFallbackAxisSideDirection) {
								const currentSideAxis = getSideAxis(d.placement);
								return currentSideAxis === initialSideAxis || currentSideAxis === "y";
							}
							return true;
						}).map((d) => [d.placement, d.overflows.filter((overflow) => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
						if (placement) resetPlacement = placement;
						break;
					}
					case "initialPlacement":
						resetPlacement = initialPlacement;
						break;
				}
				if (placement !== resetPlacement) return { reset: { placement: resetPlacement } };
			}
			return {};
		}
	};
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
	const { placement, platform, elements } = state;
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
	const side = getSide(placement);
	const alignment = getAlignment(placement);
	const isVertical = getSideAxis(placement) === "y";
	const mainAxisMulti = originSides.has(side) ? -1 : 1;
	const crossAxisMulti = rtl && isVertical ? -1 : 1;
	const rawValue = evaluate(options, state);
	let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === "number" ? {
		mainAxis: rawValue,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: rawValue.mainAxis || 0,
		crossAxis: rawValue.crossAxis || 0,
		alignmentAxis: rawValue.alignmentAxis
	};
	if (alignment && typeof alignmentAxis === "number") crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
	return isVertical ? {
		x: crossAxis * crossAxisMulti,
		y: mainAxis * mainAxisMulti
	} : {
		x: mainAxis * mainAxisMulti,
		y: crossAxis * crossAxisMulti
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset$1 = function(options) {
	if (options === void 0) options = 0;
	return {
		name: "offset",
		options,
		async fn(state) {
			var _middlewareData$offse, _middlewareData$arrow;
			const { x, y, placement, middlewareData } = state;
			const diffCoords = await convertValueToCoords(state, options);
			if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			return {
				x: x + diffCoords.x,
				y: y + diffCoords.y,
				data: {
					...diffCoords,
					placement
				}
			};
		}
	};
};
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift$1 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "shift",
		options,
		async fn(state) {
			const { x, y, placement, platform } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = { fn: (_ref) => {
				let { x, y } = _ref;
				return {
					x,
					y
				};
			} }, ...detectOverflowOptions } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const crossAxis = getSideAxis(getSide(placement));
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			if (checkMainAxis) {
				const minSide = mainAxis === "y" ? "top" : "left";
				const maxSide = mainAxis === "y" ? "bottom" : "right";
				const min = mainAxisCoord + overflow[minSide];
				const max = mainAxisCoord - overflow[maxSide];
				mainAxisCoord = clamp(min, mainAxisCoord, max);
			}
			if (checkCrossAxis) {
				const minSide = crossAxis === "y" ? "top" : "left";
				const maxSide = crossAxis === "y" ? "bottom" : "right";
				const min = crossAxisCoord + overflow[minSide];
				const max = crossAxisCoord - overflow[maxSide];
				crossAxisCoord = clamp(min, crossAxisCoord, max);
			}
			const limitedCoords = limiter.fn({
				...state,
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			});
			return {
				...limitedCoords,
				data: {
					x: limitedCoords.x - x,
					y: limitedCoords.y - y,
					enabled: {
						[mainAxis]: checkMainAxis,
						[crossAxis]: checkCrossAxis
					}
				}
			};
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
	return typeof window !== "undefined";
}
function getNodeName(node) {
	if (isNode(node)) return (node.nodeName || "").toLowerCase();
	return "#document";
}
function getWindow(node) {
	var _node$ownerDocument;
	return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
	var _ref;
	return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
	if (!hasWindow()) return false;
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	if (!hasWindow()) return false;
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
	if (!hasWindow()) return false;
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
	return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
	return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
	try {
		if (element.matches(":popover-open")) return true;
	} catch (_e) {}
	try {
		return element.matches(":modal");
	} catch (_e) {
		return false;
	}
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
	const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
	return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
	let currentNode = getParentNode(element);
	while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
		if (isContainingBlock(currentNode)) return currentNode;
		else if (isTopLayer(currentNode)) return null;
		currentNode = getParentNode(currentNode);
	}
	return null;
}
function isWebKit() {
	if (isWebKitValue == null) isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
	return isWebKitValue;
}
function isLastTraversableNode(node) {
	return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
	if (isElement(element)) return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
	return {
		scrollLeft: element.scrollX,
		scrollTop: element.scrollY
	};
}
function getParentNode(node) {
	if (getNodeName(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
	const parentNode = getParentNode(node);
	if (isLastTraversableNode(parentNode)) return node.ownerDocument ? node.ownerDocument.body : node.body;
	if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
	var _node$ownerDocument2;
	if (list === void 0) list = [];
	if (traverseIframes === void 0) traverseIframes = true;
	const scrollableAncestor = getNearestOverflowAncestor(node);
	const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
	const win = getWindow(scrollableAncestor);
	if (isBody) {
		const frameElement = getFrameElement(win);
		return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
	} else return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
	return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
	const css = getComputedStyle$1(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		$: shouldFallback
	};
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
	const domElement = unwrapElement(element);
	if (!isHTMLElement(domElement)) return createCoords(1);
	const rect = domElement.getBoundingClientRect();
	const { width, height, $ } = getCssDimensions(domElement);
	let x = ($ ? round(rect.width) : rect.width) / width;
	let y = ($ ? round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
	const win = getWindow(element);
	if (!isWebKit() || !win.visualViewport) return noOffsets;
	return {
		x: win.visualViewport.offsetLeft,
		y: win.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	if (isFixed === void 0) isFixed = false;
	if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) return false;
	return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = element.getBoundingClientRect();
	const domElement = unwrapElement(element);
	let scale = createCoords(1);
	if (includeScale) if (offsetParent) {
		if (isElement(offsetParent)) scale = getScale(offsetParent);
	} else scale = getScale(element);
	const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
	let x = (clientRect.left + visualOffsets.x) / scale.x;
	let y = (clientRect.top + visualOffsets.y) / scale.y;
	let width = clientRect.width / scale.x;
	let height = clientRect.height / scale.y;
	if (domElement) {
		const win = getWindow(domElement);
		const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentWin = win;
		let currentIFrame = getFrameElement(currentWin);
		while (currentIFrame && offsetParent && offsetWin !== currentWin) {
			const iframeScale = getScale(currentIFrame);
			const iframeRect = currentIFrame.getBoundingClientRect();
			const css = getComputedStyle$1(currentIFrame);
			const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += left;
			y += top;
			currentWin = getWindow(currentIFrame);
			currentIFrame = getFrameElement(currentWin);
		}
	}
	return rectToClientRect({
		width,
		height,
		x,
		y
	});
}
function getWindowScrollBarX(element, rect) {
	const leftScroll = getNodeScroll(element).scrollLeft;
	if (!rect) return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
	return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
	const htmlRect = documentElement.getBoundingClientRect();
	return {
		x: htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect),
		y: htmlRect.top + scroll.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
	let { elements, rect, offsetParent, strategy } = _ref;
	const isFixed = strategy === "fixed";
	const documentElement = getDocumentElement(offsetParent);
	const topLayer = elements ? isTopLayer(elements.floating) : false;
	if (offsetParent === documentElement || topLayer && isFixed) return rect;
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	let scale = createCoords(1);
	const offsets = createCoords(0);
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent);
			scale = getScale(offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		width: rect.width * scale.x,
		height: rect.height * scale.y,
		x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
		y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
	};
}
function getClientRects(element) {
	return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
	const html = getDocumentElement(element);
	const scroll = getNodeScroll(element);
	const body = element.ownerDocument.body;
	const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
	const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
	let x = -scroll.scrollLeft + getWindowScrollBarX(element);
	const y = -scroll.scrollTop;
	if (getComputedStyle$1(body).direction === "rtl") x += max(html.clientWidth, body.clientWidth) - width;
	return {
		width,
		height,
		x,
		y
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
	const win = getWindow(element);
	const html = getDocumentElement(element);
	const visualViewport = win.visualViewport;
	let width = html.clientWidth;
	let height = html.clientHeight;
	let x = 0;
	let y = 0;
	if (visualViewport) {
		width = visualViewport.width;
		height = visualViewport.height;
		const visualViewportBased = isWebKit();
		if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
			x = visualViewport.offsetLeft;
			y = visualViewport.offsetTop;
		}
	}
	const windowScrollbarX = getWindowScrollBarX(html);
	if (windowScrollbarX <= 0) {
		const doc = html.ownerDocument;
		const body = doc.body;
		const bodyStyles = getComputedStyle(body);
		const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
		const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
		if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) width -= clippingStableScrollbarWidth;
	} else if (windowScrollbarX <= SCROLLBAR_MAX) width += windowScrollbarX;
	return {
		width,
		height,
		x,
		y
	};
}
function getInnerBoundingClientRect(element, strategy) {
	const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
	const top = clientRect.top + element.clientTop;
	const left = clientRect.left + element.clientLeft;
	const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
	return {
		width: element.clientWidth * scale.x,
		height: element.clientHeight * scale.y,
		x: left * scale.x,
		y: top * scale.y
	};
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
	let rect;
	if (clippingAncestor === "viewport") rect = getViewportRect(element, strategy);
	else if (clippingAncestor === "document") rect = getDocumentRect(getDocumentElement(element));
	else if (isElement(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
	else {
		const visualOffsets = getVisualOffsets(element);
		rect = {
			x: clippingAncestor.x - visualOffsets.x,
			y: clippingAncestor.y - visualOffsets.y,
			width: clippingAncestor.width,
			height: clippingAncestor.height
		};
	}
	return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
	const parentNode = getParentNode(element);
	if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) return false;
	return getComputedStyle$1(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
	const cachedResult = cache.get(element);
	if (cachedResult) return cachedResult;
	let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
	let currentContainingBlockComputedStyle = null;
	const elementIsFixed = getComputedStyle$1(element).position === "fixed";
	let currentNode = elementIsFixed ? getParentNode(element) : element;
	while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
		const computedStyle = getComputedStyle$1(currentNode);
		const currentNodeIsContaining = isContainingBlock(currentNode);
		if (!currentNodeIsContaining && computedStyle.position === "fixed") currentContainingBlockComputedStyle = null;
		if (elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === "absolute" || currentContainingBlockComputedStyle.position === "fixed") || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode)) result = result.filter((ancestor) => ancestor !== currentNode);
		else currentContainingBlockComputedStyle = computedStyle;
		currentNode = getParentNode(currentNode);
	}
	cache.set(element, result);
	return result;
}
function getClippingRect(_ref) {
	let { element, boundary, rootBoundary, strategy } = _ref;
	const clippingAncestors = [...boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary];
	const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
	let top = firstRect.top;
	let right = firstRect.right;
	let bottom = firstRect.bottom;
	let left = firstRect.left;
	for (let i = 1; i < clippingAncestors.length; i++) {
		const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
		top = max(rect.top, top);
		right = min(rect.right, right);
		bottom = min(rect.bottom, bottom);
		left = max(rect.left, left);
	}
	return {
		width: right - left,
		height: bottom - top,
		x: left,
		y: top
	};
}
function getDimensions(element) {
	const { width, height } = getCssDimensions(element);
	return {
		width,
		height
	};
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	const documentElement = getDocumentElement(offsetParent);
	const isFixed = strategy === "fixed";
	const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const offsets = createCoords(0);
	function setLeftRTLScrollbarOffset() {
		offsets.x = getWindowScrollBarX(documentElement);
	}
	if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		} else if (documentElement) setLeftRTLScrollbarOffset();
	}
	if (isFixed && !isOffsetParentAnElement && documentElement) setLeftRTLScrollbarOffset();
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		x: rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x,
		y: rect.top + scroll.scrollTop - offsets.y - htmlOffset.y,
		width: rect.width,
		height: rect.height
	};
}
function isStaticPositioned(element) {
	return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
	if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") return null;
	if (polyfill) return polyfill(element);
	let rawOffsetParent = element.offsetParent;
	if (getDocumentElement(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
	return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
	const win = getWindow(element);
	if (isTopLayer(element)) return win;
	if (!isHTMLElement(element)) {
		let svgOffsetParent = getParentNode(element);
		while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
			if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
			svgOffsetParent = getParentNode(svgOffsetParent);
		}
		return win;
	}
	let offsetParent = getTrueOffsetParent(element, polyfill);
	while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) offsetParent = getTrueOffsetParent(offsetParent, polyfill);
	if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) return win;
	return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
	const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
	const getDimensionsFn = this.getDimensions;
	const floatingDimensions = await getDimensionsFn(data.floating);
	return {
		reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
		floating: {
			x: 0,
			y: 0,
			width: floatingDimensions.width,
			height: floatingDimensions.height
		}
	};
};
function isRTL(element) {
	return getComputedStyle$1(element).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove) {
	let io = null;
	let timeoutId;
	const root = getDocumentElement(element);
	function cleanup() {
		var _io;
		clearTimeout(timeoutId);
		(_io = io) == null || _io.disconnect();
		io = null;
	}
	function refresh(skip, threshold) {
		if (skip === void 0) skip = false;
		if (threshold === void 0) threshold = 1;
		cleanup();
		const elementRectForRootMargin = element.getBoundingClientRect();
		const { left, top, width, height } = elementRectForRootMargin;
		if (!skip) onMove();
		if (!width || !height) return;
		const insetTop = floor(top);
		const insetRight = floor(root.clientWidth - (left + width));
		const insetBottom = floor(root.clientHeight - (top + height));
		const insetLeft = floor(left);
		const options = {
			rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
			threshold: max(0, min(1, threshold)) || 1
		};
		let isFirstUpdate = true;
		function handleObserve(entries) {
			const ratio = entries[0].intersectionRatio;
			if (ratio !== threshold) {
				if (!isFirstUpdate) return refresh();
				if (!ratio) timeoutId = setTimeout(() => {
					refresh(false, 1e-7);
				}, 1e3);
				else refresh(false, ratio);
			}
			if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) refresh();
			isFirstUpdate = false;
		}
		try {
			io = new IntersectionObserver(handleObserve, {
				...options,
				root: root.ownerDocument
			});
		} catch (_e) {
			io = new IntersectionObserver(handleObserve, options);
		}
		io.observe(element);
	}
	refresh(true);
	return cleanup;
}
/**
* Automatically updates the position of the floating element when necessary.
* Should only be called when the floating element is mounted on the DOM or
* visible on the screen.
* @returns cleanup function that should be invoked when the floating element is
* removed from the DOM or hidden from the screen.
* @see https://floating-ui.com/docs/autoUpdate
*/
function autoUpdate(reference, floating, update, options) {
	if (options === void 0) options = {};
	const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
	const referenceEl = unwrapElement(reference);
	const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
	ancestors.forEach((ancestor) => {
		ancestorScroll && ancestor.addEventListener("scroll", update, { passive: true });
		ancestorResize && ancestor.addEventListener("resize", update);
	});
	const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
	let reobserveFrame = -1;
	let resizeObserver = null;
	if (elementResize) {
		resizeObserver = new ResizeObserver((_ref) => {
			let [firstEntry] = _ref;
			if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
				resizeObserver.unobserve(floating);
				cancelAnimationFrame(reobserveFrame);
				reobserveFrame = requestAnimationFrame(() => {
					var _resizeObserver;
					(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
				});
			}
			update();
		});
		if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
		if (floating) resizeObserver.observe(floating);
	}
	let frameId;
	let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	if (animationFrame) frameLoop();
	function frameLoop() {
		const nextRefRect = getBoundingClientRect(reference);
		if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
		prevRefRect = nextRefRect;
		frameId = requestAnimationFrame(frameLoop);
	}
	update();
	return () => {
		var _resizeObserver2;
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.removeEventListener("scroll", update);
			ancestorResize && ancestor.removeEventListener("resize", update);
		});
		cleanupIo?.();
		(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
		resizeObserver = null;
		if (animationFrame) cancelAnimationFrame(frameId);
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset = offset$1;
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift = shift$1;
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip = flip$1;
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow = arrow$1;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*/
var computePosition = (reference, floating, options) => {
	const cache = /* @__PURE__ */ new Map();
	const mergedOptions = {
		platform,
		...options
	};
	const platformWithCache = {
		...mergedOptions.platform,
		_c: cache
	};
	return computePosition$1(reference, floating, {
		...mergedOptions,
		platform: platformWithCache
	});
};
//#endregion
//#region node_modules/react-tooltip/dist/react-tooltip.min.mjs
/*
* React Tooltip
* {@link https://github.com/ReactTooltip/react-tooltip}
* @copyright ReactTooltip Team
* @license MIT
*/
var y = {
	core: !1,
	base: !1
};
function w({ css: e, id: t = "react-tooltip-base-styles", type: o = "base", ref: r, state: n = {} }) {
	if (!e || "undefined" == typeof document || (void 0 !== n[o] ? n[o] : y[o])) return;
	if ("core" === o && "undefined" != typeof process && {}.REACT_TOOLTIP_DISABLE_CORE_STYLES) return;
	if ("base" === o && "undefined" != typeof process && {}.REACT_TOOLTIP_DISABLE_BASE_STYLES) return;
	"core" === o && (t = "react-tooltip-core-styles"), r || (r = {});
	const { insertAt: l } = r;
	if (document.getElementById(t)) return;
	const c = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style");
	i.id = t, i.type = "text/css", "top" === l && c.firstChild ? c.insertBefore(i, c.firstChild) : c.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e)), void 0 !== n[o] ? n[o] = !0 : y[o] = !0;
}
var b = flip({ fallbackAxisSideDirection: "start" }), S = shift({ padding: 5 }), g = async ({ elementReference: e = null, tooltipReference: t = null, tooltipArrowReference: o = null, place: r = "top", offset: n = 10, strategy: l = "absolute", middlewares: c = [
	offset(Number(n)),
	b,
	S
], border: i, arrowSize: s = 8 }) => {
	if (!e) return {
		tooltipStyles: {},
		tooltipArrowStyles: {},
		place: r
	};
	if (null === t) return {
		tooltipStyles: {},
		tooltipArrowStyles: {},
		place: r
	};
	const u = [...c];
	return o ? (u.push(arrow({
		element: o,
		padding: 5
	})), computePosition(e, t, {
		placement: r,
		strategy: l,
		middleware: u
	}).then(({ x: e, y: t, placement: o, middlewareData: r }) => {
		var n, l;
		const c = {
			left: `${e}px`,
			top: `${t}px`,
			border: i
		}, { x: u, y: a } = null !== (n = r.arrow) && void 0 !== n ? n : {
			x: 0,
			y: 0
		}, d = null !== (l = {
			top: "bottom",
			right: "left",
			bottom: "top",
			left: "right"
		}[o.split("-")[0]]) && void 0 !== l ? l : "bottom", p = i && {
			borderBottom: i,
			borderRight: i
		};
		let v = 0;
		if (i) {
			const e = `${i}`.match(/(\d+)px/);
			v = (null == e ? void 0 : e[1]) ? Number(e[1]) : 1;
		}
		return {
			tooltipStyles: c,
			tooltipArrowStyles: {
				left: null != u ? `${u}px` : "",
				top: null != a ? `${a}px` : "",
				right: "",
				bottom: "",
				...p,
				[d]: `-${s / 2 + v - 1}px`
			},
			place: o
		};
	})) : computePosition(e, t, {
		placement: "bottom",
		strategy: l,
		middleware: u
	}).then(({ x: e, y: t, placement: o }) => ({
		tooltipStyles: {
			left: `${e}px`,
			top: `${t}px`
		},
		tooltipArrowStyles: {},
		place: o
	}));
}, A = (e, t, o) => {
	let r = null, n = e;
	const l = function(...e) {
		const o = () => {
			r = null;
		};
		r || (n.apply(this, e), r = setTimeout(o, t));
	};
	return l.cancel = () => {
		r && (clearTimeout(r), r = null);
	}, l.setCallback = (e) => {
		n = e;
	}, l;
}, E = (e) => {
	if (!(e instanceof HTMLElement || e instanceof SVGElement)) return !1;
	const t = getComputedStyle(e);
	return [
		"overflow",
		"overflow-x",
		"overflow-y"
	].some((e) => {
		const o = t.getPropertyValue(e);
		return "auto" === o || "scroll" === o;
	});
}, _ = (e) => {
	if (!e) return null;
	let t = e.parentElement;
	for (; t;) {
		if (E(t)) return t;
		t = t.parentElement;
	}
	return document.scrollingElement || document.documentElement;
}, T = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? import_react.useLayoutEffect : import_react.useEffect, k = (e) => {
	e.current && (clearTimeout(e.current), e.current = null);
};
var O = {
	tooltip: "core-styles-module_tooltip__3vRRp",
	fixed: "core-styles-module_fixed__pcSol",
	arrow: "core-styles-module_arrow__cvMwQ",
	content: "core-styles-module_content__BRKdB",
	noArrow: "core-styles-module_noArrow__xock6",
	clickable: "core-styles-module_clickable__ZuTTB",
	show: "core-styles-module_show__Nt9eE",
	closing: "core-styles-module_closing__sGnxF"
}, C = {
	tooltip: "styles-module_tooltip__mnnfp",
	content: "styles-module_content__ydYdI",
	arrow: "styles-module_arrow__K0L3T",
	dark: "styles-module_dark__xNqje",
	light: "styles-module_light__Z6W-X",
	success: "styles-module_success__A2AKt",
	warning: "styles-module_warning__SCK0X",
	error: "styles-module_error__JvumD",
	info: "styles-module_info__BWdHW"
};
var R = /* @__PURE__ */ new Map();
var x = null;
function L(e) {
	const t = e.match(/^\[data-tooltip-id=(['"])((?:\\.|(?!\1).)*)\1\]$/);
	return t ? t[2].replace(/\\(['"])/g, "$1") : null;
}
function N(e) {
	try {
		return {
			anchors: Array.from(document.querySelectorAll(e)),
			error: null
		};
	} catch (e) {
		return {
			anchors: [],
			error: e instanceof Error ? e : new Error(String(e))
		};
	}
}
function B(e, t) {
	var o, r, n, l;
	const c = N(e), i = null !== (r = null === (o = c.error) || void 0 === o ? void 0 : o.message) && void 0 !== r ? r : null, s = null !== (l = null === (n = t.error) || void 0 === n ? void 0 : n.message) && void 0 !== l ? l : null;
	if (u = t.anchors, a = c.anchors, u.length === a.length && u.every((e, t) => e === a[t]) && i === s) return;
	var u, a;
	const d = {
		...t,
		anchors: c.anchors,
		error: c.error
	};
	R.set(e, d), function(e) {
		e.subscribers.forEach((t) => t(e.anchors, e.error));
	}(d);
}
var z = !1, $ = null, I = !1;
function j(e) {
	if (e ? ($ || ($ = /* @__PURE__ */ new Set()), e.forEach((e) => $.add(e))) : I = !0, z) return;
	z = !0;
	const t = () => {
		z = !1;
		const e = I, t = $;
		var o;
		I = !1, $ = null, e ? R.forEach((e, t) => {
			B(t, e);
		}) : t && t.size > 0 && (o = t, R.forEach((e, t) => {
			(null === e.tooltipId || o.has(e.tooltipId)) && B(t, e);
		}));
	};
	"function" == typeof requestAnimationFrame ? requestAnimationFrame(t) : Promise.resolve().then(t);
}
function D() {
	x || "undefined" == typeof MutationObserver || (x = new MutationObserver((e) => {
		j(function(e) {
			var t;
			if (R.size <= 4) return null;
			const o = /* @__PURE__ */ new Set();
			for (const r of e) {
				if ("attributes" === r.type) {
					const e = r.target, n = null === (t = e.getAttribute) || void 0 === t ? void 0 : t.call(e, "data-tooltip-id");
					n && o.add(n), r.oldValue && o.add(r.oldValue);
					continue;
				}
				if ("childList" === r.type) {
					const e = (e) => {
						var t, r;
						for (let n = 0; n < e.length; n++) {
							const l = e[n];
							if (l.nodeType !== Node.ELEMENT_NODE) continue;
							const c = l, i = null === (t = c.getAttribute) || void 0 === t ? void 0 : t.call(c, "data-tooltip-id");
							i && o.add(i);
							const s = null === (r = c.querySelectorAll) || void 0 === r ? void 0 : r.call(c, "[data-tooltip-id]");
							if (s) {
								if (s.length > 50) return !0;
								for (let e = 0; e < s.length; e++) {
									const t = s[e].getAttribute("data-tooltip-id");
									t && o.add(t);
								}
							}
						}
						return !1;
					};
					if (e(r.addedNodes) || e(r.removedNodes)) return null;
					continue;
				}
			}
			return o;
		}(e));
	}), x.observe(document.body, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: ["data-tooltip-id"],
		attributeOldValue: !0
	}));
}
function H(e, t) {
	let o = R.get(e);
	if (!o) {
		const t = N(e);
		o = {
			anchors: t.anchors,
			error: t.error,
			subscribers: /* @__PURE__ */ new Set(),
			tooltipId: L(e)
		}, R.set(e, o);
	}
	return o.subscribers.add(t), D(), t([...o.anchors], o.error), () => {
		const o = R.get(e);
		o && (o.subscribers.delete(t), 0 === o.subscribers.size && R.delete(e), 0 === R.size && x && (x.disconnect(), x = null));
	};
}
var M = /* @__PURE__ */ new Map();
function P(e, t) {
	return `${e}:${t ? "capture" : "bubble"}`;
}
function W(e, t, o = {}) {
	const r = Boolean(o.capture), n = P(e, r), l = function(e, t) {
		const o = P(e, t);
		let r = M.get(o);
		if (!r) {
			const n = /* @__PURE__ */ new Set(), l = (e) => {
				n.forEach((t) => {
					t(e);
				});
			};
			r = {
				handlers: n,
				dispatch: l,
				eventType: e,
				capture: t
			}, M.set(o, r), document.addEventListener(e, l, { capture: t });
		}
		return r;
	}(e, r);
	return l.handlers.add(t), () => {
		l.handlers.delete(t), 0 === l.handlers.size && (M.delete(n), document.removeEventListener(e, l.dispatch, { capture: r }));
	};
}
var q = null;
var F = (0, import_react.memo)(({ forwardRef: t, id: c, className: d, classNameArrow: p, variant: v = "dark", portalRoot: m, anchorSelect: f, place: y = "top", offset: w = 10, openOnClick: b = !1, positionStrategy: S = "absolute", middlewares: E, wrapper: R, delayShow: x = 0, delayHide: L = 0, autoClose: N, float: B = !1, hidden: z = !1, noArrow: $ = !1, clickable: I = !1, openEvents: j, closeEvents: D, globalCloseEvents: M, imperativeModeOnly: P, style: F, position: V, afterShow: K, afterHide: Y, disableTooltip: X, content: G, contentWrapperRef: Z, isOpen: J, defaultIsOpen: Q = !1, setIsOpen: U, previousActiveAnchor: ee, activeAnchor: te, setActiveAnchor: oe, border: re, opacity: ne, arrowColor: le, arrowSize: ce = 8, role: ie = "tooltip" }) => {
	var se;
	const ue = (0, import_react.useRef)(null), ae = (0, import_react.useRef)(null), de = (0, import_react.useRef)(null), pe = (0, import_react.useRef)(null), ve = (0, import_react.useRef)(null), me = (0, import_react.useRef)(null), [fe, he] = (0, import_react.useState)({
		tooltipStyles: {},
		tooltipArrowStyles: {},
		place: y
	}), [ye, we] = (0, import_react.useState)(!1), [be, Se] = (0, import_react.useState)(!1), [ge, Ae] = (0, import_react.useState)(null), Ee = (0, import_react.useRef)(!1), _e = (0, import_react.useRef)(null), Te = (0, import_react.useRef)(!1), ke = (0, import_react.useRef)(!1), Oe = (0, import_react.useRef)({ getBoundingClientRect: () => ({
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}) });
	T(() => (ke.current = !0, () => {
		ke.current = !1;
	}), []);
	const Ce = (0, import_react.useCallback)((e) => {
		ke.current && (e && Se(!0), setTimeout(() => {
			ke.current && (U?.(e), void 0 === J && we(e));
		}, 10));
	}, [J, U]);
	(0, import_react.useEffect)(() => {
		if (c) {
			if (ye) {
				t(ee);
				const o = e(te), r = [...new Set([...o, c])].filter(Boolean).join(" ");
				te?.setAttribute("aria-describedby", r);
			} else t(te);
			return () => {
				t(te), t(ee);
			};
		}
		function e(e) {
			var t;
			return (null === (t = null == e ? void 0 : e.getAttribute("aria-describedby")) || void 0 === t ? void 0 : t.split(" ")) || [];
		}
		function t(t) {
			const o = e(t).filter((e) => e !== c);
			o.length ? t?.setAttribute("aria-describedby", o.join(" ")) : t?.removeAttribute("aria-describedby");
		}
	}, [
		te,
		ye,
		c,
		ee
	]), (0, import_react.useEffect)(() => {
		if (void 0 === J) return () => null;
		J && Se(!0);
		const e = setTimeout(() => {
			we(J);
		}, 10);
		return () => {
			clearTimeout(e);
		};
	}, [J]), (0, import_react.useEffect)(() => {
		if (ye !== Ee.current) if (k(me), Ee.current = ye, ye) K?.();
		else {
			if (null === q) q = ((e) => {
				const t = e.match(/^([\d.]+)(m?s)$/);
				if (!t) return 0;
				const [, o, r] = t;
				return Number(o) * ("ms" === r ? 1 : 1e3);
			})(getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay"));
			me.current = setTimeout(() => {
				Se(!1), Ae(null), Y?.();
			}, q + 25);
		}
	}, [
		Y,
		K,
		ye
	]), (0, import_react.useEffect)(() => (k(ve), !ye || !N || N <= 0 || (ve.current = setTimeout(() => {
		Ce(!1);
	}, N)), () => {
		k(ve);
	}), [
		te,
		N,
		Ce,
		ye
	]);
	const Re = (0, import_react.useCallback)((e) => {
		ke.current && he((t) => t.place === e.place && t.tooltipStyles.left === e.tooltipStyles.left && t.tooltipStyles.top === e.tooltipStyles.top && t.tooltipStyles.border === e.tooltipStyles.border && t.tooltipArrowStyles.left === e.tooltipArrowStyles.left && t.tooltipArrowStyles.top === e.tooltipArrowStyles.top && t.tooltipArrowStyles.right === e.tooltipArrowStyles.right && t.tooltipArrowStyles.bottom === e.tooltipArrowStyles.bottom && t.tooltipArrowStyles.borderBottom === e.tooltipArrowStyles.borderBottom && t.tooltipArrowStyles.borderRight === e.tooltipArrowStyles.borderRight ? t : e);
	}, []), xe = (0, import_react.useRef)(be);
	xe.current = be;
	const Le = (0, import_react.useCallback)((e = x) => {
		de.current && clearTimeout(de.current), xe.current ? Ce(!0) : de.current = setTimeout(() => {
			Ce(!0);
		}, e);
	}, [x, Ce]), Ne = (0, import_react.useCallback)((e = L) => {
		pe.current && clearTimeout(pe.current), pe.current = setTimeout(() => {
			Te.current || Ce(!1);
		}, e);
	}, [L, Ce]), Be = (0, import_react.useCallback)(({ x: e, y: t }) => {
		var o;
		Oe.current.getBoundingClientRect = () => ({
			x: e,
			y: t,
			width: 0,
			height: 0,
			top: t,
			left: e,
			right: e,
			bottom: t
		}), g({
			place: null !== (o = null == ge ? void 0 : ge.place) && void 0 !== o ? o : y,
			offset: w,
			elementReference: Oe.current,
			tooltipReference: ue.current,
			tooltipArrowReference: ae.current,
			strategy: S,
			middlewares: E,
			border: re,
			arrowSize: ce
		}).then((e) => {
			Re(e);
		});
	}, [
		null == ge ? void 0 : ge.place,
		y,
		w,
		S,
		E,
		re,
		ce,
		Re
	]), ze = (0, import_react.useCallback)(() => {
		var e, t;
		const o = null !== (e = null == ge ? void 0 : ge.position) && void 0 !== e ? e : V;
		o ? Be(o) : B ? _e.current && Be(_e.current) : null != te && te.isConnected && g({
			place: null !== (t = null == ge ? void 0 : ge.place) && void 0 !== t ? t : y,
			offset: w,
			elementReference: te,
			tooltipReference: ue.current,
			tooltipArrowReference: ae.current,
			strategy: S,
			middlewares: E,
			border: re,
			arrowSize: ce
		}).then((e) => {
			ke.current && Re(e);
		});
	}, [
		null == ge ? void 0 : ge.position,
		null == ge ? void 0 : ge.place,
		V,
		B,
		te,
		y,
		w,
		S,
		E,
		re,
		Be,
		Re,
		ce
	]), $e = (0, import_react.useCallback)(() => {
		Se(!1), Ce(!1), oe(null), k(de), k(pe), k(ve);
	}, [Ce, oe]), Ie = be || Q || Boolean(J) || Boolean(te) || Boolean(null == ge ? void 0 : ge.anchorSelect), { anchorElements: je, selector: De } = (({ id: e, anchorSelect: t, imperativeAnchorSelect: c, activeAnchor: i, disableTooltip: s, onActiveAnchorRemoved: u, trackAnchors: a }) => {
		const [d, p] = (0, import_react.useState)([]), [v, m] = (0, import_react.useState)(null), f = (0, import_react.useRef)(null), h = (0, import_react.useMemo)(() => (({ id: e, anchorSelect: t, imperativeAnchorSelect: o }) => {
			var r;
			let n = null !== (r = null != o ? o : t) && void 0 !== r ? r : "";
			return !n && e && (n = `[data-tooltip-id='${e.replace(/'/g, "\\'")}']`), n;
		})({
			id: e,
			anchorSelect: t,
			imperativeAnchorSelect: c
		}), [
			e,
			t,
			c
		]), y = (0, import_react.useMemo)(() => d.filter((e) => !(null == s ? void 0 : s(e))), [d, s]), w = (0, import_react.useMemo)(() => {
			if (!i || !h) return !1;
			try {
				return i.matches(h);
			} catch (e) {
				return !1;
			}
		}, [
			i,
			h,
			y
		]);
		return (0, import_react.useEffect)(() => h && a ? H(h, (e, t) => {
			p(e), m(t);
		}) : (p([]), void m(null)), [h, a]), (0, import_react.useEffect)(() => {
			v && f.current !== h && (f.current = h);
		}, [h, v]), (0, import_react.useEffect)(() => {
			i && (i.isConnected && (y.includes(i) || w) || u());
		}, [
			i,
			y,
			w,
			u
		]), {
			anchorElements: y,
			selector: h
		};
	})({
		id: c,
		anchorSelect: f,
		imperativeAnchorSelect: null == ge ? void 0 : ge.anchorSelect,
		activeAnchor: te,
		disableTooltip: X,
		onActiveAnchorRemoved: $e,
		trackAnchors: Ie
	});
	(({ activeAnchor: e, anchorElements: t, anchorSelector: r, clickable: c, closeEvents: i, delayHide: s, delayShow: u, disableTooltip: a, float: d, globalCloseEvents: p, handleHideTooltipDelayed: v, handleShow: m, handleShowTooltipDelayed: f, handleTooltipPosition: y, hoveringTooltip: w, imperativeModeOnly: b, lastFloatPosition: S, openEvents: g, openOnClick: E, rendered: T, setActiveAnchor: O, show: C, tooltipHideDelayTimerRef: R, tooltipRef: x, tooltipShowDelayTimerRef: L, updateTooltipPosition: N }) => {
		const B = (0, import_react.useRef)(A((e) => {}, 50)), z = (0, import_react.useRef)(A(() => {}, 50)), $ = (0, import_react.useRef)(null), I = (0, import_react.useRef)(null), j = (0, import_react.useRef)(null), D = (0, import_react.useRef)(null);
		e !== j.current && (j.current = e, $.current = _(e));
		const H = x.current;
		H !== D.current && (D.current = H, I.current = _(H));
		const M = E || (null == g ? void 0 : g.click) || (null == g ? void 0 : g.dblclick) || (null == g ? void 0 : g.mousedown), P = (0, import_react.useMemo)(() => {
			const e = g ? { ...g } : {
				mouseenter: !0,
				focus: !0,
				click: !1,
				dblclick: !1,
				mousedown: !1
			};
			return !g && E && Object.assign(e, {
				mouseenter: !1,
				focus: !1,
				click: !0
			}), b && Object.assign(e, {
				mouseenter: !1,
				focus: !1,
				click: !1,
				dblclick: !1,
				mousedown: !1
			}), e;
		}, [
			g,
			E,
			b
		]), q = (0, import_react.useMemo)(() => {
			const e = i ? { ...i } : {
				mouseleave: !0,
				blur: !0,
				click: !1,
				dblclick: !1,
				mouseup: !1
			};
			return !i && E && Object.assign(e, {
				mouseleave: !1,
				blur: !1
			}), b && Object.assign(e, {
				mouseleave: !1,
				blur: !1,
				click: !1,
				dblclick: !1,
				mouseup: !1
			}), e;
		}, [
			i,
			E,
			b
		]), F = (0, import_react.useMemo)(() => {
			const e = p ? { ...p } : {
				escape: !1,
				scroll: !1,
				resize: !1,
				clickOutsideAnchor: M || !1
			};
			return b && Object.assign(e, {
				escape: !1,
				scroll: !1,
				resize: !1,
				clickOutsideAnchor: !1
			}), e;
		}, [
			p,
			M,
			b
		]), V = (0, import_react.useRef)(e);
		V.current = e;
		const K = (0, import_react.useRef)(C);
		K.current = C;
		const Y = (0, import_react.useRef)(t);
		Y.current = t;
		const X = (0, import_react.useRef)(m);
		X.current = m;
		const G = (0, import_react.useRef)(y);
		G.current = y;
		const Z = (0, import_react.useRef)(N);
		Z.current = N;
		const J = (0, import_react.useRef)(() => null), Q = (0, import_react.useRef)(() => {}), U = (0, import_react.useRef)(() => {}), ee = r ? function(e) {
			const t = e.match(/^\[data-tooltip-id=(['"])((?:\\.|(?!\1).)*)\1\]$/);
			return t ? t[2].replace(/\\(['"])/g, "$1") : null;
		}(r) : null;
		J.current = (e) => {
			var t, o;
			const n = e;
			if (!(null == n ? void 0 : n.isConnected)) return null;
			if (ee) {
				const e = function(e, t) {
					let o = e;
					for (; o;) {
						if (o.dataset.tooltipId === t) return o;
						o = o.parentElement;
					}
					return null;
				}(n, ee);
				if (e && !(null == a ? void 0 : a(e))) return e;
			} else if (r) try {
				const e = null !== (t = n.matches(r) ? n : n.closest(r)) && void 0 !== t ? t : null;
				if (e && !(null == a ? void 0 : a(e))) return e;
			} catch (e) {
				return null;
			}
			return null !== (o = Y.current.find((e) => e === n || e.contains(n))) && void 0 !== o ? o : null;
		}, Q.current = (e) => {
			e && (e.isConnected ? null != a && a(e) || (u && V.current && e !== V.current ? (L.current && clearTimeout(L.current), L.current = setTimeout(() => {
				O(e), m(!0);
			}, u)) : (O(e), u ? f() : m(!0)), R.current && clearTimeout(R.current)) : O(null));
		}, U.current = () => {
			c ? v(s || 100) : s ? v() : m(!1), L.current && clearTimeout(L.current);
		};
		const te = B.current, oe = z.current;
		te.setCallback((e) => Q.current(e)), oe.setCallback(() => U.current()), (0, import_react.useEffect)(() => {
			const e = [], t = (t, o, r) => {
				e.push(W(t, o, r));
			}, o = (e) => {
				var t;
				return Boolean((null == e ? void 0 : e.target) && (null === (t = V.current) || void 0 === t ? void 0 : t.contains(e.target)));
			}, r = (e) => {
				oe.cancel(), te(e);
			}, n = () => {
				te.cancel(), oe();
			}, l = () => {
				t("mouseover", (e) => {
					const t = J.current(e.target);
					t && J.current(e.relatedTarget) !== t && r(t);
				});
			}, i = () => {
				t("mouseout", (e) => {
					const t = J.current(e.target);
					if (!t && !o(e)) return;
					const r = e.relatedTarget, l = t || V.current;
					null != l && l.contains(r) || n();
				});
			};
			P.mouseenter && l(), q.mouseleave && i(), P.mouseover && l(), q.mouseout && i(), P.focus && t("focusin", (e) => {
				r(J.current(e.target));
			}), q.blur && t("focusout", (e) => {
				const t = J.current(e.target);
				if (!t && !o(e)) return;
				const r = e.relatedTarget, l = t || V.current;
				null != l && l.contains(r) || n();
			});
			const s = [
				"mouseover",
				"mouseout",
				"mouseenter",
				"mouseleave",
				"focus",
				"blur"
			], u = [
				"click",
				"dblclick",
				"mousedown",
				"mouseup"
			], a = (e) => {
				var t;
				const o = J.current(null !== (t = null == e ? void 0 : e.target) && void 0 !== t ? t : null);
				o && (K.current && V.current === o || Q.current(o));
			}, p = (e) => {
				K.current && o(e) && U.current();
			};
			Object.entries(P).forEach(([e, o]) => {
				o && !s.includes(e) && u.includes(e) && t(e, a, { capture: !0 });
			}), Object.entries(q).forEach(([e, o]) => {
				o && !s.includes(e) && u.includes(e) && t(e, p, { capture: !0 });
			}), d && t("pointermove", (e) => {
				const t = V.current;
				if (!t) return;
				if (J.current(e.target) !== t) return;
				const o = e, r = {
					x: o.clientX,
					y: o.clientY
				};
				G.current(r), S.current = r;
			});
			const v = x.current, m = () => {
				w.current = !0;
			}, f = () => {
				w.current = !1, U.current();
			}, h = c && (q.mouseout || q.mouseleave);
			return h && (v?.addEventListener("mouseover", m), v?.addEventListener("mouseout", f)), () => {
				e.forEach((e) => e()), h && (v?.removeEventListener("mouseover", m), v?.removeEventListener("mouseout", f)), te.cancel(), oe.cancel();
			};
		}, [
			P,
			q,
			d,
			c,
			T
		]), (0, import_react.useEffect)(() => {
			const t = () => {
				X.current(!1);
			}, o = I.current, r = $.current;
			F.scroll && (window.addEventListener("scroll", t), r?.addEventListener("scroll", t), o?.addEventListener("scroll", t));
			let n = null;
			F.resize ? window.addEventListener("resize", t) : e && x.current && (n = autoUpdate(e, x.current, () => Z.current(), {
				ancestorResize: !0,
				elementResize: !0,
				layoutShift: !0
			}));
			const l = (e) => {
				"Escape" === e.key && X.current(!1);
			};
			F.escape && window.addEventListener("keydown", l);
			const c = (e) => {
				var t, o;
				if (!K.current) return;
				const r = e.target;
				null != r && r.isConnected && (!(null === (t = x.current) || void 0 === t) && t.contains(r) || !(null === (o = V.current) || void 0 === o) && o.contains(r) || Y.current.some((e) => null == e ? void 0 : e.contains(r)) || (X.current(!1), k(L)));
			};
			return F.clickOutsideAnchor && window.addEventListener("click", c), () => {
				F.scroll && (window.removeEventListener("scroll", t), r?.removeEventListener("scroll", t), o?.removeEventListener("scroll", t)), F.resize && window.removeEventListener("resize", t), n && n(), F.escape && window.removeEventListener("keydown", l), F.clickOutsideAnchor && window.removeEventListener("click", c);
			};
		}, [F, e]);
	})({
		activeAnchor: te,
		anchorElements: je,
		anchorSelector: De,
		clickable: I,
		closeEvents: D,
		delayHide: L,
		delayShow: x,
		disableTooltip: X,
		float: B,
		globalCloseEvents: M,
		handleHideTooltipDelayed: Ne,
		handleShow: Ce,
		handleShowTooltipDelayed: Le,
		handleTooltipPosition: Be,
		hoveringTooltip: Te,
		imperativeModeOnly: P,
		lastFloatPosition: _e,
		openEvents: j,
		openOnClick: b,
		rendered: be,
		setActiveAnchor: oe,
		show: ye,
		tooltipHideDelayTimerRef: pe,
		tooltipRef: ue,
		tooltipShowDelayTimerRef: de,
		updateTooltipPosition: ze
	});
	const He = (0, import_react.useRef)(ze);
	He.current = ze, (0, import_react.useEffect)(() => {
		be && ze();
	}, [be, ze]), (0, import_react.useEffect)(() => {
		if (!be || !(null == Z ? void 0 : Z.current)) return () => null;
		let e = null;
		const t = new ResizeObserver(() => {
			e && clearTimeout(e), e = setTimeout(() => {
				ke.current && He.current(), e = null;
			}, 0);
		});
		return t.observe(Z.current), () => {
			t.disconnect(), e && clearTimeout(e);
		};
	}, [
		G,
		Z,
		be
	]), (0, import_react.useEffect)(() => {
		var e;
		if (!(Q || Boolean(J))) return;
		const t = (() => {
			if (!te || !(null == ge ? void 0 : ge.anchorSelect)) return !1;
			try {
				return te.matches(ge.anchorSelect);
			} catch (e) {
				return !1;
			}
		})();
		if (!te || !je.includes(te)) {
			if (t) return;
			oe(null !== (e = je[0]) && void 0 !== e ? e : null);
		}
	}, [
		te,
		je,
		Q,
		null == ge ? void 0 : ge.anchorSelect,
		J,
		be,
		oe
	]), (0, import_react.useEffect)(() => (Q && Ce(!0), () => {
		k(de), k(pe), k(ve), k(me);
	}), [Q, Ce]), (0, import_react.useEffect)(() => {
		de.current && (k(de), Le(x));
	}, [x, Le]);
	const Me = null !== (se = null == ge ? void 0 : ge.content) && void 0 !== se ? se : G, Pe = null != Me, We = ye && void 0 !== fe.tooltipStyles.left, qe = (0, import_react.useMemo)(() => ({
		...F,
		...fe.tooltipStyles,
		opacity: void 0 !== ne && We ? ne : void 0
	}), [
		F,
		fe.tooltipStyles,
		ne,
		We
	]), Fe = (0, import_react.useMemo)(() => le ? `linear-gradient(to right bottom, transparent 50%, ${le} 50%)` : void 0, [le]), Ve = (0, import_react.useMemo)(() => ({
		...fe.tooltipArrowStyles,
		background: Fe,
		"--rt-arrow-size": `${ce}px`
	}), [
		fe.tooltipArrowStyles,
		Fe,
		ce
	]);
	(0, import_react.useImperativeHandle)(t, () => ({
		open: (e) => {
			let t = null;
			if (null == e ? void 0 : e.anchorSelect) {
				try {
					t = document.querySelector(e.anchorSelect);
				} catch (e) {
					return;
				}
				if (!t) return;
			}
			t && oe(t), Ae(null != e ? e : null), (null == e ? void 0 : e.delay) ? Le(e.delay) : Ce(!0);
		},
		close: (e) => {
			(null == e ? void 0 : e.delay) ? Ne(e.delay) : Ce(!1);
		},
		activeAnchor: te,
		place: fe.place,
		isOpen: Boolean(be && !z && Pe && We)
	})), (0, import_react.useEffect)(() => () => {
		k(de), k(pe), k(ve), k(me);
	}, []);
	const Ke = be && !z && Pe ? import_react.createElement(R, {
		id: c,
		role: ie,
		className: clsx("react-tooltip", O.tooltip, C.tooltip, C[v], d, `react-tooltip__place-${fe.place}`, O[We ? "show" : "closing"], We ? "react-tooltip__show" : "react-tooltip__closing", "fixed" === S && O.fixed, I && O.clickable),
		onTransitionEnd: (e) => {
			k(me), ye || "opacity" !== e.propertyName || (Se(!1), Ae(null), Y?.());
		},
		style: qe,
		ref: ue
	}, import_react.createElement(R, { className: clsx("react-tooltip-content-wrapper", O.content, C.content) }, Me), import_react.createElement(R, {
		className: clsx("react-tooltip-arrow", O.arrow, C.arrow, p, $ && O.noArrow),
		style: Ve,
		ref: ae
	})) : null;
	return Ke ? m ? (0, import_react_dom.createPortal)(Ke, m) : Ke : null;
});
var V = /* @__PURE__ */ new Map();
var K = null;
var Y = {
	attributes: !0,
	childList: !1,
	subtree: !1
};
function X(e, t) {
	const o = (K || (K = new MutationObserver((e) => {
		var t;
		for (const o of e) {
			if ("attributes" !== o.type || !(null === (t = o.attributeName) || void 0 === t ? void 0 : t.startsWith("data-tooltip-"))) continue;
			const e = o.target, r = V.get(e);
			r && r.forEach((t) => t(e));
		}
	})), K);
	let r = V.get(e);
	return r || (r = /* @__PURE__ */ new Set(), V.set(e, r), o.observe(e, Y)), r.add(t), () => {
		const r = V.get(e);
		r && (r.delete(t), 0 === r.size && (V.delete(e), 0 === V.size ? o.disconnect() : (o.disconnect(), V.forEach((e, t) => {
			o.observe(t, Y);
		}))));
	};
}
var Z = (0, import_react.memo)(import_react.forwardRef(({ id: t, anchorSelect: l, content: c, render: s, className: a, classNameArrow: d, variant: p = "dark", portalRoot: v, place: m = "top", offset: f = 10, wrapper: h = "div", children: y = null, openOnClick: w = !1, positionStrategy: b = "absolute", middlewares: S, delayShow: g = 0, delayHide: A = 0, autoClose: E, float: _ = !1, hidden: T = !1, noArrow: k = !1, clickable: O = !1, openEvents: C, closeEvents: R, globalCloseEvents: x, imperativeModeOnly: L = !1, style: N, position: B, isOpen: z, defaultIsOpen: $ = !1, disableStyleInjection: I = !1, border: j, opacity: D, arrowColor: H, arrowSize: M, setIsOpen: P, afterShow: W, afterHide: q, disableTooltip: V, role: K = "tooltip" }, Y) => {
	var G, Z, J, Q, U, ee, te, oe;
	const [re, ne] = (0, import_react.useState)(null), [le, ce] = (0, import_react.useState)({}), ie = (0, import_react.useRef)(null), se = (0, import_react.useRef)(I), ue = (0, import_react.useCallback)((e) => {
		ne((t) => (null != e && e.isSameNode(t) || (ie.current = t), e));
	}, []), ae = (e) => {
		return null == e ? void 0 : e.getAttributeNames().reduce((t, o) => {
			var r;
			if (o.startsWith("data-tooltip-")) t[o.replace(/^data-tooltip-/, "")] = null !== (r = null == e ? void 0 : e.getAttribute(o)) && void 0 !== r ? r : null;
			return t;
		}, {});
	};
	(0, import_react.useEffect)(() => {
		se.current;
	}, [I]), (0, import_react.useEffect)(() => {
		"undefined" != typeof window && window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles", { detail: {
			disableCore: "core" === I,
			disableBase: I
		} }));
	}, []), (0, import_react.useEffect)(() => {
		if (!re) return ce({}), () => {};
		const e = (e) => {
			const t = ae(e);
			ce((e) => {
				const o = Object.keys(t), r = Object.keys(e);
				return o.length === r.length && o.every((o) => t[o] === e[o]) ? e : t;
			});
		};
		e(re);
		return X(re, e);
	}, [re, l]), (0, import_react.useEffect)(() => {}, [
		j,
		D,
		null == N ? void 0 : N.border,
		null == N ? void 0 : N.opacity
	]);
	const de = re ? ae(re) : le, pe = null !== (G = de.content) && void 0 !== G ? G : c, ve = null !== (Z = de.place) && void 0 !== Z ? Z : m, me = null !== (J = de.variant) && void 0 !== J ? J : p, fe = null == de.offset ? f : Number(de.offset), he = null !== (Q = de.wrapper) && void 0 !== Q ? Q : h, ye = null !== (U = de["position-strategy"]) && void 0 !== U ? U : b, we = null == de["delay-show"] ? g : Number(de["delay-show"]), be = null == de["delay-hide"] ? A : Number(de["delay-hide"]), Se = null == de["auto-close"] ? E : Number(de["auto-close"]), ge = null == de.float ? _ : "true" === de.float, Ae = null == de.hidden ? T : "true" === de.hidden, Ee = null !== (ee = de["class-name"]) && void 0 !== ee ? ee : null;
	let _e = y;
	const Te = (0, import_react.useRef)(null);
	if (s) {
		const t = s({
			content: null !== (oe = null !== (te = de.content) && void 0 !== te ? te : pe) && void 0 !== oe ? oe : null,
			activeAnchor: re
		});
		_e = t ? import_react.createElement("div", {
			ref: Te,
			className: "react-tooltip-content-wrapper"
		}, t) : null;
	} else null != pe && (_e = pe);
	const ke = {
		forwardRef: Y,
		id: t,
		anchorSelect: l,
		className: clsx(a, Ee),
		classNameArrow: d,
		content: _e,
		contentWrapperRef: Te,
		portalRoot: v,
		place: ve,
		variant: me,
		offset: fe,
		wrapper: he,
		openOnClick: w,
		positionStrategy: ye,
		middlewares: S,
		delayShow: we,
		delayHide: be,
		autoClose: Se,
		float: ge,
		hidden: Ae,
		noArrow: k,
		clickable: O,
		openEvents: C,
		closeEvents: R,
		globalCloseEvents: x,
		imperativeModeOnly: L,
		style: N,
		position: B,
		isOpen: z,
		defaultIsOpen: $,
		border: j,
		opacity: D,
		arrowColor: H,
		arrowSize: M,
		setIsOpen: P,
		afterShow: W,
		afterHide: q,
		disableTooltip: V,
		activeAnchor: re,
		previousActiveAnchor: ie.current,
		setActiveAnchor: ue,
		role: K
	};
	return import_react.createElement(F, { ...ke });
}));
"undefined" != typeof window && window.addEventListener("react-tooltip-inject-styles", (e) => {
	e.detail.disableCore || w({
		css: `:root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s;--rt-arrow-size:8px}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit;z-index:-1;-webkit-backface-visibility:hidden;backface-visibility:hidden}.core-styles-module_content__BRKdB{position:relative;z-index:1}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out;will-change:opacity}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in;will-change:opacity}`,
		type: "core"
	}), e.detail.disableBase || w({
		css: `
.styles-module_tooltip__mnnfp{border-radius:3px;font-size:90%;width:max-content}.styles-module_content__ydYdI{background:inherit;border-radius:inherit;padding:8px 16px}.styles-module_arrow__K0L3T{width:var(--rt-arrow-size);height:var(--rt-arrow-size)}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}`,
		type: "base"
	});
});
//#endregion
//#region src/renderer/src/components/ToolNode.tsx
var import_jsx_runtime = require_jsx_runtime();
var getIcon = (name, size = 16) => {
	if (name.includes("mobile") || name.includes("whatsapp")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiPhoneLine, {
		size,
		className: "text-blue-400"
	});
	if (name.includes("terminal") || name.includes("code") || name.includes("app")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiTerminalBoxLine, {
		size,
		className: "text-emerald-400"
	});
	if (name.includes("web") || name.includes("search") || name.includes("research")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiGlobalLine, {
		size,
		className: "text-cyan-400"
	});
	if (name.includes("type") || name.includes("shortcut") || name.includes("sequence")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiKeyboardLine, {
		size,
		className: "text-yellow-400"
	});
	if (name.includes("volume")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiVolumeUpLine, {
		size,
		className: "text-pink-400"
	});
	if (name.includes("email")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiMailLine, {
		size,
		className: "text-orange-400"
	});
	if (name.includes("wormhole")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiServerLine, {
		size,
		className: "text-purple-400"
	});
	if (name === "WAIT") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiFlashlightLine, {
		size,
		className: "text-purple-400"
	});
	if (name === "TRIGGER") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListStart, {
		size,
		className: "text-red-400"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiSettings4Line, {
		size,
		className: "text-zinc-400"
	});
};
function ToolNode({ data, id }) {
	const { tool, comment, openParameterEditor } = data;
	const { setNodes, setEdges } = useReactFlow();
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const deleteNode = () => {
		setNodes((nodes) => nodes.filter((n) => n.id !== id));
		setEdges((edges) => edges.filter((e) => e.source !== id && e.target !== id));
	};
	const isTrigger = tool.name === "TRIGGER";
	const isWait = tool.name === "WAIT";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-[#18181b] border border-[#27272a] rounded-lg shadow-xl min-w-50 max-w-62.5 font-sans text-zinc-100 group transition-all hover:border-emerald-500/50 relative",
		onMouseEnter: () => setIsHovered(true),
		onMouseLeave: () => setIsHovered(false),
		children: [
			!isTrigger && !isWait && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
				type: "target",
				position: Position.Left,
				id: "target-left",
				className: "w-2.5 h-4 bg-zinc-400 rounded-sm border-none -ml-1"
			}),
			isWait && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
				type: "target",
				position: Position.Left,
				id: "target-left",
				className: "w-2.5 h-4 bg-zinc-400 rounded-sm border-none -ml-1"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
				type: "target",
				position: Position.Top,
				id: "target-top",
				className: "w-4 h-2.5 bg-zinc-400 rounded-sm border-none -mt-1"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between p-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "p-1.5 bg-[#09090b] rounded shadow-inner border border-white/5",
						children: getIcon(tool.name, 18)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-[11px] tracking-widest uppercase text-zinc-200 leading-none",
							children: tool.name.replace(/_/g, " ")
						}), comment && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[9px] text-zinc-500 italic mt-1 truncate max-w-30",
							children: comment
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `flex flex-col gap-1 transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => openParameterEditor(id),
						className: "text-zinc-500 hover:text-emerald-400 bg-black/40 p-1 rounded cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiEditBoxLine, { size: 12 })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: deleteNode,
						className: "text-zinc-500 hover:text-red-400 bg-black/40 p-1 rounded cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiDeleteBinLine, { size: 12 })
					})]
				})]
			}),
			isTrigger && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
				type: "source",
				position: Position.Bottom,
				id: "source-bottom",
				className: "w-4 h-2.5 bg-emerald-500 rounded-sm border-none -mb-1"
			}),
			isWait && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
				type: "source",
				position: Position.Right,
				id: "source-right",
				className: "w-2.5 h-4 bg-emerald-500 rounded-sm border-none -mr-1"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
				type: "source",
				position: Position.Bottom,
				id: "source-bottom",
				className: "w-4 h-2.5 bg-emerald-500 rounded-sm border-none -mb-1"
			})] }),
			!isTrigger && !isWait && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Handle$1, {
				type: "source",
				position: Position.Right,
				id: "source-right",
				className: "w-2.5 h-4 bg-emerald-500 rounded-sm border-none -mr-1"
			})
		]
	});
}
//#endregion
//#region src/renderer/src/components/ParameterEditorDrawer.tsx
var SmartIcon = ({ name, size = 16 }) => {
	if (!name) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `w-8 h-8 bg-zinc-800 rounded-md border border-white/5` });
	const lower = name.toLowerCase();
	let icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiTerminalBoxLine, { size });
	let color = "text-zinc-400";
	let bg = "bg-zinc-800";
	if (lower.includes("chrome") || lower.includes("edge") || lower.includes("brave")) {
		icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiChromeLine, { size });
		color = "text-blue-400";
		bg = "bg-blue-500/10";
	} else if (lower.includes("code") || lower.includes("dev")) {
		icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiCodeLine, { size });
		color = "text-cyan-400";
		bg = "bg-cyan-500/10";
	} else if (lower.includes("spotify") || lower.includes("music")) {
		icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiSpotifyLine, { size });
		color = "text-green-400";
		bg = "bg-green-500/10";
	} else if (lower.includes("discord") || lower.includes("telegram") || lower.includes("whatsapp")) {
		icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiDiscordLine, { size });
		color = "text-indigo-400";
		bg = "bg-indigo-500/10";
	} else if (lower.includes("game") || lower.includes("launcher") || lower.includes("epic")) {
		icon = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiGamepadLine, { size });
		color = "text-purple-400";
		bg = "bg-purple-500/10";
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `w-8 h-8 rounded-md flex items-center justify-center border border-white/5 ${bg} ${color} shadow-sm shrink-0`,
		children: icon
	});
};
var AppSelector = ({ value, onChange }) => {
	const [allApps, setAllApps] = (0, import_react.useState)([]);
	const [searchTerm, setSearchTerm] = (0, import_react.useState)("");
	const [debouncedTerm, setDebouncedTerm] = (0, import_react.useState)("");
	const [page, setPage] = (0, import_react.useState)(1);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		getAllApps().then((raw) => {
			setAllApps((Array.isArray(raw) ? raw : []).filter((item) => item && typeof item === "object" && item.name));
			setLoading(false);
		});
	}, []);
	(0, import_react.useEffect)(() => {
		const timer = setTimeout(() => {
			setDebouncedTerm(searchTerm);
			setPage(1);
		}, 300);
		return () => clearTimeout(timer);
	}, [searchTerm]);
	const sortedApps = [...allApps.filter((app) => app.name.toLowerCase().includes(debouncedTerm.toLowerCase()))].sort((a, b) => {
		if (a.name === value) return -1;
		if (b.name === value) return 1;
		return 0;
	});
	const visibleApps = sortedApps.slice(0, page * 15);
	const observer = (0, import_react.useRef)(null);
	const lastElementRef = (0, import_react.useCallback)((node) => {
		if (loading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && visibleApps.length < sortedApps.length) setPage((prev) => prev + 1);
		});
		if (node) observer.current.observe(node);
	}, [
		loading,
		visibleApps.length,
		sortedApps.length
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-2 relative w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiSearchLine, {
				className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500",
				size: 14
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				placeholder: "Search installed apps...",
				value: searchTerm,
				onChange: (e) => setSearchTerm(e.target.value),
				className: "w-full bg-[#09090b] border border-[#27272a] rounded-md text-xs py-2 pl-9 pr-3 text-white outline-none focus:border-emerald-500 transition-colors placeholder-zinc-700"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-1.5 h-120 overflow-y-auto scrollbar-small bg-[#09090b] border border-[#27272a] rounded-md p-1.5 w-full shadow-inner",
			children: [
				loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] text-zinc-500 p-2 text-center",
					children: "Indexing System..."
				}),
				!loading && visibleApps.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] text-zinc-500 p-2 text-center",
					children: "No apps found."
				}),
				visibleApps.map((app, index) => {
					const isSelected = value === app.name;
					const isLast = visibleApps.length === index + 1;
					const AppRow = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						onClick: () => onChange(app.name),
						className: `flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-300 transform active:scale-95 group ${isSelected ? "bg-emerald-500/15 border border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.15)] order-first" : "hover:bg-[#18181b] border border-transparent hover:border-white/5"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `transition-transform duration-300 ${isSelected ? "scale-110" : "group-hover:scale-105"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmartIcon, { name: app.name })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `text-xs font-bold truncate ${isSelected ? "text-emerald-400" : "text-zinc-300"}`,
								children: app.name
							})]
						}), isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiCheckLine, {
							className: "text-emerald-500 shrink-0 mx-2 animate-in zoom-in-50 duration-200",
							size: 18
						})]
					});
					if (isLast) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: lastElementRef,
						children: AppRow
					}, `${app.id}-${index}`);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: AppRow }, `${app.id}-${index}`);
				})
			]
		})]
	});
};
function ParameterEditorDrawer({ nodeData, updateNodeInputs, closeEditor }) {
	const tool = nodeData?.data?.tool;
	const [localInputs, setLocalInputs] = (0, import_react.useState)({});
	const [localComment, setLocalComment] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (nodeData) {
			setLocalInputs(nodeData.data.inputs || {});
			setLocalComment(nodeData.data.comment || "");
		}
	}, [nodeData]);
	if (!nodeData || !tool) return null;
	const handleInputChange = (key, value) => {
		setLocalInputs((prev) => ({
			...prev,
			[key]: value
		}));
	};
	const handleSave = () => {
		updateNodeInputs(nodeData.id, localInputs, localComment);
		closeEditor();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute top-0 right-0 w-80 h-full bg-[#111113] border-l border-[#27272a] shadow-2xl flex flex-col z-50 animate-in slide-in-from-right-8 duration-200",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 border-b border-[#27272a] flex justify-between items-center bg-[#18181b]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold tracking-widest text-emerald-400 uppercase",
					children: "Configure Module"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: closeEditor,
					className: "text-zinc-500 hover:text-red-400 transition-colors cursor-pointer bg-black/40 p-1.5 rounded-md",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiCloseLine, { size: 18 })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-5 grow overflow-y-auto flex flex-col gap-6 custom-scrollbar scrollbar-small",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-black text-white uppercase tracking-widest mb-1 flex items-center gap-2",
						children: tool.name.replace(/_/g, " ")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-zinc-500 leading-relaxed font-mono",
						children: tool.description
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-[10px] text-zinc-400 uppercase tracking-widest font-bold",
							children: "Node Comment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							placeholder: "e.g., 'Boot up Dev Server'",
							className: "bg-[#09090b] border border-[#27272a] rounded-md text-xs p-2.5 text-white outline-none focus:border-emerald-500 transition-colors placeholder-zinc-700 shadow-inner",
							value: localComment,
							onChange: (e) => setLocalComment(e.target.value)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-[#27272a]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-[10px] font-bold tracking-widest text-emerald-500 uppercase",
							children: "Parameters"
						}), tool.parameters?.properties && Object.keys(tool.parameters.properties).length > 0 ? Object.entries(tool.parameters.properties).map(([key, prop]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "text-[10px] text-zinc-400 uppercase tracking-widest",
								children: key.replace(/_/g, " ")
							}), key === "app_name" && (tool.name === "open_app" || tool.name === "close_app") ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppSelector, {
								value: localInputs[key] || "",
								onChange: (val) => handleInputChange(key, val)
							}) : prop.enum ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "bg-[#09090b] border border-[#27272a] rounded-md text-xs p-2.5 text-white outline-none focus:border-emerald-500 transition-colors cursor-pointer w-full",
								value: localInputs[key] || "",
								onChange: (e) => handleInputChange(key, e.target.value),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Select option..."
								}), prop.enum.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: opt,
									children: opt
								}, opt))]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: prop.type === "NUMBER" ? "number" : "text",
								placeholder: prop.description || "",
								className: "bg-[#09090b] border border-[#27272a] rounded-md text-xs p-2.5 text-white outline-none focus:border-emerald-500 transition-colors placeholder-zinc-700 font-mono shadow-inner w-full",
								value: localInputs[key] || "",
								onChange: (e) => handleInputChange(key, e.target.value)
							})]
						}, key)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-zinc-600 italic uppercase tracking-widest bg-black/30 p-2 rounded text-center border border-white/5",
							children: "No configuration needed."
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-4 border-t border-[#27272a] bg-[#18181b]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleSave,
					className: "w-full bg-emerald-600 hover:bg-emerald-500 text-black py-2.5 rounded-lg text-[11px] font-black tracking-widest transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center justify-center gap-2 cursor-pointer",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiSave3Line, { size: 16 }), " APPLY CHANGES"]
				})
			})
		]
	});
}
//#endregion
//#region src/renderer/src/components/MacroManagementMenu.tsx
function MacroManagementMenu({ loadMacroToCanvas }) {
	const [workflows, setWorkflows] = (0, import_react.useState)([]);
	const [isMainOpen, setIsMainOpen] = (0, import_react.useState)(false);
	const [activeWorkflowActions, setActiveWorkflowActions] = (0, import_react.useState)(null);
	const menuRef = (0, import_react.useRef)(null);
	const loadWorkflowsList = async () => {
		try {
			const res = await window.electron.ipcRenderer.invoke("load-workflows");
			if (res.success) setWorkflows(res.workflows || []);
		} catch (e) {}
	};
	(0, import_react.useEffect)(() => {
		if (isMainOpen) loadWorkflowsList();
	}, [isMainOpen]);
	(0, import_react.useEffect)(() => {
		function handleClickOutside(event) {
			if (menuRef.current && !menuRef.current.contains(event.target)) {
				setIsMainOpen(false);
				setActiveWorkflowActions(null);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [menuRef]);
	const handleEdit = (macro) => {
		loadMacroToCanvas(macro);
		setIsMainOpen(false);
	};
	const handleDelete = async (macroName) => {
		if (window.confirm(`Are you sure you want to purge macro "${macroName}" from the neural net? This cannot be undone.`)) {
			await window.electron.ipcRenderer.invoke("delete-workflow", { name: macroName });
			loadWorkflowsList();
			setActiveWorkflowActions(null);
		}
	};
	const handleDuplicate = async (macro) => {
		const newMacro = {
			...macro,
			name: `${macro.name} Copy`
		};
		loadMacroToCanvas(newMacro);
		setIsMainOpen(false);
		alert(`Duplicated to canvas as '${newMacro.name}'. Change the name and save to finalize.`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref: menuRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => setIsMainOpen(!isMainOpen),
			className: `flex items-center gap-3 px-4 py-2 bg-[#18181b] border rounded-lg text-sm text-zinc-300 font-medium transition-all cursor-pointer ${isMainOpen ? "border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]" : "border-[#27272a] hover:border-zinc-700"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiBrainLine, { className: "text-emerald-500" }),
				"Neural Patterns (",
				workflows.length,
				")",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiArrowDropDownLine, {
					size: 18,
					className: `text-zinc-600 transition-transform ${isMainOpen ? "rotate-180" : ""}`
				})
			]
		}), isMainOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute top-12 left-0 w-80 bg-[#111113] border border-[#27272a] rounded-xl shadow-2xl z-50 p-2 flex flex-col gap-1 max-h-96 overflow-y-auto scrollbar-small animate-in fade-in duration-200",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-[10px] font-black tracking-widest text-zinc-600 p-2 uppercase border-b border-[#27272a] mb-2",
					children: "INGESTED MACROS"
				}),
				workflows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-zinc-700 p-4 text-center italic",
					children: "No macros saved in the neural net."
				}),
				workflows.map((macro) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative group",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => handleEdit(macro),
							className: "w-full text-left flex flex-col gap-1 p-3 rounded-lg hover:bg-zinc-800/60 group cursor-pointer border border-transparent hover:border-white/5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold text-zinc-100 uppercase tracking-wide group-hover:text-emerald-400",
								children: macro.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[9px] text-zinc-600 font-mono italic",
								children: ["Saved: ", new Date(macro.updatedAt).toLocaleString()]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActiveWorkflowActions(activeWorkflowActions === macro.name ? null : macro.name),
							className: "absolute top-3 right-3 p-1 rounded-md text-zinc-700 hover:text-white hover:bg-zinc-700 group cursor-pointer z-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiMore2Fill, { size: 16 })
						}),
						activeWorkflowActions === macro.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-8 right-2 w-32 bg-black border border-[#27272a] rounded-lg shadow-xl z-20 p-1 flex flex-col animate-in scale-95 fade-in duration-100",
							children: [
								{
									label: "Edit",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiEditBoxLine, {}),
									action: () => handleEdit(macro)
								},
								{
									label: "Duplicate",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiFileCopyLine, {}),
									action: () => handleDuplicate(macro)
								},
								{
									label: "Purge",
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiDeleteBinLine, {}),
									className: "text-red-400 hover:bg-red-950/40",
									action: () => handleDelete(macro.name)
								}
							].map((btn) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: btn.action,
								className: `flex items-center gap-2 p-2 rounded text-[10px] uppercase font-bold text-zinc-300 hover:bg-zinc-800 transition-colors cursor-pointer ${btn.className}`,
								children: [
									btn.icon,
									" ",
									btn.label
								]
							}, btn.label))
						})
					]
				}, macro.name))
			]
		})]
	});
}
//#endregion
//#region src/renderer/src/views/WorkFlowEditor.tsx
var CATEGORIZED_TOOLS = {
	TRIGGERS: [{
		name: "TRIGGER",
		description: "Starts the workflow.",
		parameters: {}
	}, {
		name: "WAIT",
		description: "Pauses execution.",
		parameters: { properties: { milliseconds: {
			type: "NUMBER",
			description: "Delay in ms (e.g. 2000)"
		} } }
	}],
	SYSTEM: [
		{
			name: "open_app",
			description: "Launch desktop app.",
			parameters: { properties: { app_name: { type: "STRING" } } }
		},
		{
			name: "close_app",
			description: "Force close an app.",
			parameters: { properties: { app_name: { type: "STRING" } } }
		},
		{
			name: "set_volume",
			description: "Change system volume (0-100).",
			parameters: { properties: { level: { type: "NUMBER" } } }
		}
	],
	AUTOMATION: [
		{
			name: "ghost_type",
			description: "Type text via keyboard.",
			parameters: { properties: { text: { type: "STRING" } } }
		},
		{
			name: "press_shortcut",
			description: "e.g. key: \"c\", modifiers: [\"control\"].",
			parameters: { properties: {
				key: { type: "STRING" },
				modifiers: {
					type: "ARRAY",
					items: { type: "STRING" }
				}
			} }
		},
		{
			name: "click_on_screen",
			description: "Click on specific X, Y coordinates.",
			parameters: { properties: {
				x: {
					type: "NUMBER",
					description: "X Coordinate (e.g. 960)"
				},
				y: {
					type: "NUMBER",
					description: "Y Coordinate (e.g. 540)"
				}
			} }
		},
		{
			name: "run_terminal",
			description: "Execute CLI command.",
			parameters: { properties: {
				command: { type: "STRING" },
				path: { type: "STRING" }
			} }
		}
	],
	WEB_INTELLIGENCE: [
		{
			name: "google_search",
			description: "Open a URL or search.",
			parameters: { properties: { query: { type: "STRING" } } }
		},
		{
			name: "deep_research",
			description: "AI Web scrape & Notion report.",
			parameters: { properties: { query: { type: "STRING" } } }
		},
		{
			name: "deploy_wormhole",
			description: "Exposes local server port to the internet.",
			parameters: { properties: { port: {
				type: "NUMBER",
				description: "e.g. 3000"
			} } }
		},
		{
			name: "close_wormhole",
			description: "Closes the public wormhole.",
			parameters: {}
		}
	],
	COMMUNICATION: [
		{
			name: "send_email",
			description: "Send an email instantly.",
			parameters: { properties: {
				to: { type: "STRING" },
				subject: { type: "STRING" },
				body: { type: "STRING" }
			} }
		},
		{
			name: "read_emails",
			description: "Read latest unread emails.",
			parameters: { properties: { max_results: {
				type: "NUMBER",
				description: "Default is 5"
			} } }
		},
		{
			name: "draft_email",
			description: "Create an email draft.",
			parameters: { properties: {
				to: { type: "STRING" },
				subject: { type: "STRING" },
				body: { type: "STRING" }
			} }
		}
	],
	MOBILE_LINK: [
		{
			name: "open_mobile_app",
			description: "Requires Android package name.",
			parameters: { properties: { package_name: { type: "STRING" } } }
		},
		{
			name: "toggle_mobile_hardware",
			description: "Toggle Wifi/Bluetooth.",
			parameters: { properties: {
				setting: { type: "STRING" },
				state: { type: "BOOLEAN" }
			} }
		},
		{
			name: "send_whatsapp",
			description: "Send instant message.",
			parameters: { properties: {
				name: { type: "STRING" },
				message: { type: "STRING" },
				file_path: {
					type: "STRING",
					description: "Optional"
				}
			} }
		},
		{
			name: "schedule_whatsapp",
			description: "Schedule a WhatsApp message.",
			parameters: { properties: {
				name: { type: "STRING" },
				message: { type: "STRING" },
				delay_minutes: { type: "NUMBER" },
				file_path: {
					type: "STRING",
					description: "Optional"
				}
			} }
		}
	]
};
var ALL_TOOLS = Object.values(CATEGORIZED_TOOLS).flat();
var nodeTypes = { customTool: ToolNode };
function Editor() {
	const [nodes, setNodes] = (0, import_react.useState)([]);
	const [edges, setEdges] = (0, import_react.useState)([]);
	const [workflowName, setWorkflowName] = (0, import_react.useState)("New IRIS Macro");
	const [description, setDescription] = (0, import_react.useState)("Custom Macro");
	const [selectedNodeId, setSelectedNodeId] = (0, import_react.useState)(null);
	const [isSaved, setIsSaved] = (0, import_react.useState)(false);
	const [isSidebarOpen, setIsSidebarOpen] = (0, import_react.useState)(true);
	const openParameterEditor = (0, import_react.useCallback)((nodeId) => setSelectedNodeId(nodeId), []);
	const loadMacroToCanvas = (macro) => {
		setWorkflowName(macro.name);
		setDescription(macro.description);
		setNodes((macro.nodes || []).map((node) => ({
			...node,
			data: {
				...node.data,
				openParameterEditor
			}
		})));
		setEdges(macro.edges || []);
		setIsSaved(true);
	};
	const resetCanvas = () => {
		setWorkflowName("New IRIS Macro");
		setDescription("Custom Macro");
		setNodes([]);
		setEdges([]);
		setIsSaved(false);
	};
	const updateNodeInputs = (0, import_react.useCallback)((nodeId, updatedInputs, updatedComment) => {
		setNodes((nds) => nds.map((node) => {
			if (node.id === nodeId) return {
				...node,
				data: {
					...node.data,
					inputs: updatedInputs,
					comment: updatedComment
				}
			};
			return node;
		}));
	}, []);
	const onNodesChange = (0, import_react.useCallback)((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
	const onEdgesChange = (0, import_react.useCallback)((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
	const onConnect = (0, import_react.useCallback)((params) => setEdges((eds) => addEdge({
		...params,
		type: "default",
		animated: true,
		style: {
			stroke: "#10b981",
			strokeWidth: 2,
			filter: "drop-shadow(0 0 4px #10b981)"
		}
	}, eds)), []);
	const onDrop = (0, import_react.useCallback)((event) => {
		event.preventDefault();
		const toolName = event.dataTransfer.getData("application/reactflow");
		if (!toolName) return;
		const toolSchema = ALL_TOOLS.find((t) => t.name === toolName);
		const position = {
			x: event.clientX - (isSidebarOpen ? 300 : 50),
			y: event.clientY - 100
		};
		const newNode = {
			id: `${toolName}_${Date.now()}`,
			type: "customTool",
			position,
			data: {
				tool: toolSchema,
				inputs: {},
				comment: "",
				openParameterEditor
			}
		};
		setNodes((nds) => nds.concat(newNode));
	}, [openParameterEditor, isSidebarOpen]);
	const onDragOver = (0, import_react.useCallback)((event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}, []);
	const saveWorkflow = async () => {
		const sanitizedNodes = nodes.map((node) => {
			const cleanData = { ...node.data };
			delete cleanData.openParameterEditor;
			return {
				...node,
				data: cleanData
			};
		});
		try {
			if ((await window.electron.ipcRenderer.invoke("save-workflow", {
				name: workflowName,
				description,
				nodes: sanitizedNodes,
				edges
			})).success) setIsSaved(true);
		} catch (err) {}
	};
	const runMacroManually = async () => {
		await saveWorkflow();
		const macroRes = await getMacroSequence(workflowName);
		if (!macroRes.success) {
			alert(`❌ Execution Failed: ${macroRes.error}`);
			return;
		}
		for (const step of macroRes.steps) try {
			if (step.tool === "TRIGGER" || step.tool === "TRIGGER_VOICE") {} else if (step.tool === "WAIT") await new Promise((resolve) => setTimeout(resolve, Number(step.args.milliseconds) || 1e3));
			else if (step.tool === "set_volume") await setVolume(Number(step.args.level));
			else if (step.tool === "open_app") await openApp(step.args.app_name);
			else if (step.tool === "close_app") await closeApp(step.args.app_name);
			else if (step.tool === "send_whatsapp") await sendWhatsAppMessage(step.args.name, step.args.message, step.args.file_path);
			else if (step.tool === "schedule_whatsapp") await scheduleWhatsAppMessage(step.args.name, step.args.message, Number(step.args.delay_minutes), step.args.file_path);
			else if (step.tool === "google_search") await performWebSearch(step.args.query);
			else if (step.tool === "run_terminal") await runTerminal(step.args.command, step.args.path);
			else if (step.tool === "send_email") await sendEmail(step.args.to, step.args.subject, step.args.body);
			else if (step.tool === "draft_email") await draftEmail(step.args.to, step.args.subject, step.args.body);
			else if (step.tool === "read_emails") await readEmails(Number(step.args.max_results) || 5);
			else if (step.tool === "deploy_wormhole") await window.electron.ipcRenderer.invoke("deploy-wormhole", Number(step.args.port));
			else if (step.tool === "close_wormhole") await window.electron.ipcRenderer.invoke("close-wormhole");
			else if (step.tool === "click_on_screen") await clickOnCoordinate(Number(step.args.x), Number(step.args.y));
			else if (step.tool === "scroll_screen") await scrollScreen(step.args.direction, Number(step.args.amount));
			else if (step.tool === "ghost_type") await window.electron.ipcRenderer.invoke("ghost-sequence", [{
				type: "type",
				text: step.args.text
			}]);
			else if (step.tool === "press_shortcut") {
				let safeModifiers = [];
				if (step.args.modifiers) {
					if (Array.isArray(step.args.modifiers)) safeModifiers = step.args.modifiers;
					else if (typeof step.args.modifiers === "string") safeModifiers = step.args.modifiers.split(",").map((m) => m.trim()).filter(Boolean);
				}
				await window.electron.ipcRenderer.invoke("ghost-sequence", [{
					type: "press",
					key: step.args.key,
					modifiers: safeModifiers
				}]);
			} else if (step.tool === "take_screenshot") await takeScreenshot();
		} catch (stepError) {
			alert(`🔴 Macro Execution Halted! Failed at node: ${step.tool}`);
			break;
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full w-full bg-[#09090b] relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `fixed top-14 left-0 h-[calc(100vh-56px)] bg-[#111113] border-r border-[#27272a] p-4 flex flex-col gap-1 transition-all duration-300 ease-in-out z-40 scrollbar-small overflow-auto mt-5 ${isSidebarOpen ? "w-72 opacity-100" : "w-0 opacity-0"}`,
				children: isSidebarOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[10px] font-black tracking-[0.2em] text-emerald-500 mb-6 flex items-center gap-2 border-b border-[#27272a] pb-2 uppercase",
					children: "MODULE LIBRARY"
				}), Object.entries(CATEGORIZED_TOOLS).map(([category, tools]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3",
						children: category
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col gap-2",
						children: tools.map((tool) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 p-2 bg-[#18181b] border border-[#27272a] rounded-lg cursor-grab hover:border-emerald-500/50 hover:bg-[#27272a]/50 transition-all group",
							draggable: true,
							onDragStart: (e) => e.dataTransfer.setData("application/reactflow", tool.name),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-1.5 bg-black rounded shadow-inner border border-white/5",
								children: getIcon(tool.name, 14)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-bold tracking-widest text-zinc-300 uppercase group-hover:text-white transition-colors",
									children: tool.name.replace(/_/g, " ")
								})
							})]
						}, tool.name))
					})]
				}, category))] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setIsSidebarOpen(!isSidebarOpen),
				className: "absolute top-1/2 left-0 transform -translate-y-1/2 bg-[#111113] border border-[#27272a] border-l-0 p-2 rounded-r-lg text-zinc-600 hover:text-emerald-500 z-50 transition-colors",
				children: isSidebarOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiLayoutColumnLine, { size: 18 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiLayoutColumnFill, { size: 18 })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `grow flex flex-col relative transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-72" : "ml-0"}`,
				onDrop,
				onDragOver,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute top-4 left-4 z-10 flex items-center gap-3 shadow-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: resetCanvas,
								className: "p-3 rounded-lg bg-[#18181b] border border-[#27272a] text-zinc-600 hover:text-emerald-500 hover:border-emerald-500/50 transition-colors cursor-pointer",
								"data-tooltip-id": "global-tooltip",
								"data-tooltip-content": "Start New Macro",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiAddLine, { size: 16 })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MacroManagementMenu, { loadMacroToCanvas }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: workflowName,
								onChange: (e) => setWorkflowName(e.target.value),
								className: "bg-[#18181b] border border-[#27272a] px-4 py-2 rounded-lg text-sm text-white outline-none focus:border-emerald-500 font-bold tracking-wide w-64 shadow-inner"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: runMacroManually,
								className: "bg-[#18181b] hover:bg-[#27272a] text-emerald-400 px-5 py-2 rounded-lg text-[11px] font-black tracking-widest transition-all border border-[#27272a] hover:border-emerald-500/50 flex items-center gap-2 cursor-pointer shadow-lg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiPlayFill, { size: 16 }), " RUN"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: saveWorkflow,
								className: "bg-emerald-600 hover:bg-emerald-500 text-black px-6 py-2 rounded-lg text-[11px] font-black tracking-widest transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiSave3Line, { size: 16 }), " SAVE"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ReactFlow, {
						nodes,
						edges,
						onNodesChange,
						onEdgesChange,
						onConnect,
						nodeTypes,
						className: "bg-[#09090b]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Background$1, {
							color: "#27272a",
							gap: 20,
							size: 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Controls$1, { className: "react-flow__controls" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Z, {
						id: "global-tooltip",
						place: "top",
						style: {
							maxWidth: "250px",
							backgroundColor: "#18181b",
							border: "1px solid #27272a",
							zIndex: 100
						}
					}),
					selectedNodeId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParameterEditorDrawer, {
						nodeData: nodes.find((n) => n.id === selectedNodeId),
						updateNodeInputs,
						closeEditor: () => setSelectedNodeId(null)
					})
				]
			})
		]
	});
}
function WorkFlowEditorView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReactFlowProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Editor, {}) });
}
//#endregion
export { WorkFlowEditorView as default };
