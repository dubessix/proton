const require_chunk$1 = require("./chunk-Cek0wNdY.js");
const require_follow_redirects$1 = require("./follow-redirects-CzzIWTgW.js");
//#region node_modules/apache-arrow/node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = /* @__PURE__ */ require_chunk$1.__exportAll({
	__addDisposableResource: () => __addDisposableResource,
	__assign: () => __assign,
	__asyncDelegator: () => __asyncDelegator,
	__asyncGenerator: () => __asyncGenerator,
	__asyncValues: () => __asyncValues,
	__await: () => __await,
	__awaiter: () => __awaiter,
	__classPrivateFieldGet: () => __classPrivateFieldGet,
	__classPrivateFieldIn: () => __classPrivateFieldIn,
	__classPrivateFieldSet: () => __classPrivateFieldSet,
	__createBinding: () => __createBinding,
	__decorate: () => __decorate,
	__disposeResources: () => __disposeResources,
	__esDecorate: () => __esDecorate,
	__exportStar: () => __exportStar,
	__extends: () => __extends,
	__generator: () => __generator,
	__importDefault: () => __importDefault,
	__importStar: () => __importStar,
	__makeTemplateObject: () => __makeTemplateObject,
	__metadata: () => __metadata,
	__param: () => __param,
	__propKey: () => __propKey,
	__read: () => __read,
	__rest: () => __rest,
	__rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
	__runInitializers: () => __runInitializers,
	__setFunctionName: () => __setFunctionName,
	__spread: () => __spread,
	__spreadArray: () => __spreadArray,
	__spreadArrays: () => __spreadArrays,
	__values: () => __values,
	default: () => tslib_es6_default
});
function __extends(d, b) {
	if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
	extendStatics(d, b);
	function __() {
		this.constructor = d;
	}
	d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
	var t = {};
	for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
	if (s != null && typeof Object.getOwnPropertySymbols === "function") {
		for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
	}
	return t;
}
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
	return function(target, key) {
		decorator(target, key, paramIndex);
	};
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
	function accept(f) {
		if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
		return f;
	}
	var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
	var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
	var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
	var _, done = false;
	for (var i = decorators.length - 1; i >= 0; i--) {
		var context = {};
		for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
		for (var p in contextIn.access) context.access[p] = contextIn.access[p];
		context.addInitializer = function(f) {
			if (done) throw new TypeError("Cannot add initializers after decoration has completed");
			extraInitializers.push(accept(f || null));
		};
		var result = (0, decorators[i])(kind === "accessor" ? {
			get: descriptor.get,
			set: descriptor.set
		} : descriptor[key], context);
		if (kind === "accessor") {
			if (result === void 0) continue;
			if (result === null || typeof result !== "object") throw new TypeError("Object expected");
			if (_ = accept(result.get)) descriptor.get = _;
			if (_ = accept(result.set)) descriptor.set = _;
			if (_ = accept(result.init)) initializers.unshift(_);
		} else if (_ = accept(result)) if (kind === "field") initializers.unshift(_);
		else descriptor[key] = _;
	}
	if (target) Object.defineProperty(target, contextIn.name, descriptor);
	done = true;
}
function __runInitializers(thisArg, initializers, value) {
	var useValue = arguments.length > 2;
	for (var i = 0; i < initializers.length; i++) value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
	return useValue ? value : void 0;
}
function __propKey(x) {
	return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
	if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
	return Object.defineProperty(f, "name", {
		configurable: true,
		value: prefix ? "".concat(prefix, " ", name) : name
	});
}
function __metadata(metadataKey, metadataValue) {
	if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
	function adopt(value) {
		return value instanceof P ? value : new P(function(resolve) {
			resolve(value);
		});
	}
	return new (P || (P = Promise))(function(resolve, reject) {
		function fulfilled(value) {
			try {
				step(generator.next(value));
			} catch (e) {
				reject(e);
			}
		}
		function rejected(value) {
			try {
				step(generator["throw"](value));
			} catch (e) {
				reject(e);
			}
		}
		function step(result) {
			result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
		}
		step((generator = generator.apply(thisArg, _arguments || [])).next());
	});
}
function __generator(thisArg, body) {
	var _ = {
		label: 0,
		sent: function() {
			if (t[0] & 1) throw t[1];
			return t[1];
		},
		trys: [],
		ops: []
	}, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
	return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
		return this;
	}), g;
	function verb(n) {
		return function(v) {
			return step([n, v]);
		};
	}
	function step(op) {
		if (f) throw new TypeError("Generator is already executing.");
		while (g && (g = 0, op[0] && (_ = 0)), _) try {
			if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
			if (y = 0, t) op = [op[0] & 2, t.value];
			switch (op[0]) {
				case 0:
				case 1:
					t = op;
					break;
				case 4:
					_.label++;
					return {
						value: op[1],
						done: false
					};
				case 5:
					_.label++;
					y = op[1];
					op = [0];
					continue;
				case 7:
					op = _.ops.pop();
					_.trys.pop();
					continue;
				default:
					if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
						_ = 0;
						continue;
					}
					if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
						_.label = op[1];
						break;
					}
					if (op[0] === 6 && _.label < t[1]) {
						_.label = t[1];
						t = op;
						break;
					}
					if (t && _.label < t[2]) {
						_.label = t[2];
						_.ops.push(op);
						break;
					}
					if (t[2]) _.ops.pop();
					_.trys.pop();
					continue;
			}
			op = body.call(thisArg, _);
		} catch (e) {
			op = [6, e];
			y = 0;
		} finally {
			f = t = 0;
		}
		if (op[0] & 5) throw op[1];
		return {
			value: op[0] ? op[1] : void 0,
			done: true
		};
	}
}
function __exportStar(m, o) {
	for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
	var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
	if (m) return m.call(o);
	if (o && typeof o.length === "number") return { next: function() {
		if (o && i >= o.length) o = void 0;
		return {
			value: o && o[i++],
			done: !o
		};
	} };
	throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
	var m = typeof Symbol === "function" && o[Symbol.iterator];
	if (!m) return o;
	var i = m.call(o), r, ar = [], e;
	try {
		while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
	} catch (error) {
		e = { error };
	} finally {
		try {
			if (r && !r.done && (m = i["return"])) m.call(i);
		} finally {
			if (e) throw e.error;
		}
	}
	return ar;
}
/** @deprecated */
function __spread() {
	for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
	return ar;
}
/** @deprecated */
function __spreadArrays() {
	for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
	for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];
	return r;
}
function __spreadArray(to, from, pack) {
	if (pack || arguments.length === 2) {
		for (var i = 0, l = from.length, ar; i < l; i++) if (ar || !(i in from)) {
			if (!ar) ar = Array.prototype.slice.call(from, 0, i);
			ar[i] = from[i];
		}
	}
	return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
	return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var g = generator.apply(thisArg, _arguments || []), i, q = [];
	return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
		return this;
	}, i;
	function awaitReturn(f) {
		return function(v) {
			return Promise.resolve(v).then(f, reject);
		};
	}
	function verb(n, f) {
		if (g[n]) {
			i[n] = function(v) {
				return new Promise(function(a, b) {
					q.push([
						n,
						v,
						a,
						b
					]) > 1 || resume(n, v);
				});
			};
			if (f) i[n] = f(i[n]);
		}
	}
	function resume(n, v) {
		try {
			step(g[n](v));
		} catch (e) {
			settle(q[0][3], e);
		}
	}
	function step(r) {
		r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
	}
	function fulfill(value) {
		resume("next", value);
	}
	function reject(value) {
		resume("throw", value);
	}
	function settle(f, v) {
		if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
	}
}
function __asyncDelegator(o) {
	var i, p;
	return i = {}, verb("next"), verb("throw", function(e) {
		throw e;
	}), verb("return"), i[Symbol.iterator] = function() {
		return this;
	}, i;
	function verb(n, f) {
		i[n] = o[n] ? function(v) {
			return (p = !p) ? {
				value: __await(o[n](v)),
				done: false
			} : f ? f(v) : v;
		} : f;
	}
}
function __asyncValues(o) {
	if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
	var m = o[Symbol.asyncIterator], i;
	return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
		return this;
	}, i);
	function verb(n) {
		i[n] = o[n] && function(v) {
			return new Promise(function(resolve, reject) {
				v = o[n](v), settle(resolve, reject, v.done, v.value);
			});
		};
	}
	function settle(resolve, reject, d, v) {
		Promise.resolve(v).then(function(v) {
			resolve({
				value: v,
				done: d
			});
		}, reject);
	}
}
function __makeTemplateObject(cooked, raw) {
	if (Object.defineProperty) Object.defineProperty(cooked, "raw", { value: raw });
	else cooked.raw = raw;
	return cooked;
}
function __importStar(mod) {
	if (mod && mod.__esModule) return mod;
	var result = {};
	if (mod != null) {
		for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
	}
	__setModuleDefault(result, mod);
	return result;
}
function __importDefault(mod) {
	return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
	if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
	if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
	return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
	if (kind === "m") throw new TypeError("Private method is not writable");
	if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
	if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
	return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
	if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
	return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
	if (value !== null && value !== void 0) {
		if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
		var dispose, inner;
		if (async) {
			if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
			dispose = value[Symbol.asyncDispose];
		}
		if (dispose === void 0) {
			if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
			dispose = value[Symbol.dispose];
			if (async) inner = dispose;
		}
		if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
		if (inner) dispose = function() {
			try {
				inner.call(this);
			} catch (e) {
				return Promise.reject(e);
			}
		};
		env.stack.push({
			value,
			dispose,
			async
		});
	} else if (async) env.stack.push({ async: true });
	return value;
}
function __disposeResources(env) {
	function fail(e) {
		env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
		env.hasError = true;
	}
	var r, s = 0;
	function next() {
		while (r = env.stack.pop()) try {
			if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
			if (r.dispose) {
				var result = r.dispose.call(r.value);
				if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
					fail(e);
					return next();
				});
			} else s |= 1;
		} catch (e) {
			fail(e);
		}
		if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
		if (env.hasError) throw env.error;
	}
	return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
	if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
		return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
	});
	return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = require_chunk$1.__esmMin((() => {
	extendStatics = function(d, b) {
		extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
			d.__proto__ = b;
		} || function(d, b) {
			for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
		};
		return extendStatics(d, b);
	};
	__assign = function() {
		__assign = Object.assign || function __assign(t) {
			for (var s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i];
				for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
			}
			return t;
		};
		return __assign.apply(this, arguments);
	};
	__createBinding = Object.create ? (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		var desc = Object.getOwnPropertyDescriptor(m, k);
		if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
			enumerable: true,
			get: function() {
				return m[k];
			}
		};
		Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
		if (k2 === void 0) k2 = k;
		o[k2] = m[k];
	});
	__setModuleDefault = Object.create ? (function(o, v) {
		Object.defineProperty(o, "default", {
			enumerable: true,
			value: v
		});
	}) : function(o, v) {
		o["default"] = v;
	};
	ownKeys = function(o) {
		ownKeys = Object.getOwnPropertyNames || function(o) {
			var ar = [];
			for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
			return ar;
		};
		return ownKeys(o);
	};
	_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
		var e = new Error(message);
		return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
	};
	tslib_es6_default = {
		__extends,
		__assign,
		__rest,
		__decorate,
		__param,
		__esDecorate,
		__runInitializers,
		__propKey,
		__setFunctionName,
		__metadata,
		__awaiter,
		__generator,
		__createBinding,
		__exportStar,
		__values,
		__read,
		__spread,
		__spreadArrays,
		__spreadArray,
		__await,
		__asyncGenerator,
		__asyncDelegator,
		__asyncValues,
		__makeTemplateObject,
		__importStar,
		__importDefault,
		__classPrivateFieldGet,
		__classPrivateFieldSet,
		__classPrivateFieldIn,
		__addDisposableResource,
		__disposeResources,
		__rewriteRelativeImportExtension
	};
}));
//#endregion
//#region node_modules/apache-arrow/util/utf8.js
var require_utf8$2 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.encodeUtf8 = exports.decodeUtf8 = void 0;
	var decoder = new TextDecoder("utf-8");
	/** @ignore */
	exports.decodeUtf8 = decoder.decode.bind(decoder);
	var encoder = new TextEncoder();
	/** @ignore */
	var encodeUtf8 = (value) => encoder.encode(value);
	exports.encodeUtf8 = encodeUtf8;
}));
//#endregion
//#region node_modules/apache-arrow/util/compat.js
var require_compat = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isFlatbuffersByteBuffer = exports.isReadableNodeStream = exports.isWritableNodeStream = exports.isReadableDOMStream = exports.isWritableDOMStream = exports.isFetchResponse = exports.isFSReadStream = exports.isFileHandle = exports.isUnderlyingSink = exports.isIteratorResult = exports.isArrayLike = exports.isArrowJSON = exports.isAsyncIterable = exports.isIterable = exports.isObservable = exports.isPromise = exports.isObject = void 0;
	/** @ignore */ var isNumber = (x) => typeof x === "number";
	/** @ignore */ var isBoolean = (x) => typeof x === "boolean";
	/** @ignore */ var isFunction = (x) => typeof x === "function";
	/** @ignore */
	var isObject = (x) => x != null && Object(x) === x;
	exports.isObject = isObject;
	/** @ignore */
	var isPromise = (x) => {
		return (0, exports.isObject)(x) && isFunction(x.then);
	};
	exports.isPromise = isPromise;
	/** @ignore */
	var isObservable = (x) => {
		return (0, exports.isObject)(x) && isFunction(x.subscribe);
	};
	exports.isObservable = isObservable;
	/** @ignore */
	var isIterable = (x) => {
		return (0, exports.isObject)(x) && isFunction(x[Symbol.iterator]);
	};
	exports.isIterable = isIterable;
	/** @ignore */
	var isAsyncIterable = (x) => {
		return (0, exports.isObject)(x) && isFunction(x[Symbol.asyncIterator]);
	};
	exports.isAsyncIterable = isAsyncIterable;
	/** @ignore */
	var isArrowJSON = (x) => {
		return (0, exports.isObject)(x) && (0, exports.isObject)(x["schema"]);
	};
	exports.isArrowJSON = isArrowJSON;
	/** @ignore */
	var isArrayLike = (x) => {
		return (0, exports.isObject)(x) && isNumber(x["length"]);
	};
	exports.isArrayLike = isArrayLike;
	/** @ignore */
	var isIteratorResult = (x) => {
		return (0, exports.isObject)(x) && "done" in x && "value" in x;
	};
	exports.isIteratorResult = isIteratorResult;
	/** @ignore */
	var isUnderlyingSink = (x) => {
		return (0, exports.isObject)(x) && isFunction(x["abort"]) && isFunction(x["close"]) && isFunction(x["start"]) && isFunction(x["write"]);
	};
	exports.isUnderlyingSink = isUnderlyingSink;
	/** @ignore */
	var isFileHandle = (x) => {
		return (0, exports.isObject)(x) && isFunction(x["stat"]) && isNumber(x["fd"]);
	};
	exports.isFileHandle = isFileHandle;
	/** @ignore */
	var isFSReadStream = (x) => {
		return (0, exports.isReadableNodeStream)(x) && isNumber(x["bytesRead"]);
	};
	exports.isFSReadStream = isFSReadStream;
	/** @ignore */
	var isFetchResponse = (x) => {
		return (0, exports.isObject)(x) && (0, exports.isReadableDOMStream)(x["body"]);
	};
	exports.isFetchResponse = isFetchResponse;
	var isReadableInterop = (x) => "_getDOMStream" in x && "_getNodeStream" in x;
	/** @ignore */
	var isWritableDOMStream = (x) => {
		return (0, exports.isObject)(x) && isFunction(x["abort"]) && isFunction(x["getWriter"]) && !isReadableInterop(x);
	};
	exports.isWritableDOMStream = isWritableDOMStream;
	/** @ignore */
	var isReadableDOMStream = (x) => {
		return (0, exports.isObject)(x) && isFunction(x["cancel"]) && isFunction(x["getReader"]) && !isReadableInterop(x);
	};
	exports.isReadableDOMStream = isReadableDOMStream;
	/** @ignore */
	var isWritableNodeStream = (x) => {
		return (0, exports.isObject)(x) && isFunction(x["end"]) && isFunction(x["write"]) && isBoolean(x["writable"]) && !isReadableInterop(x);
	};
	exports.isWritableNodeStream = isWritableNodeStream;
	/** @ignore */
	var isReadableNodeStream = (x) => {
		return (0, exports.isObject)(x) && isFunction(x["read"]) && isFunction(x["pipe"]) && isBoolean(x["readable"]) && !isReadableInterop(x);
	};
	exports.isReadableNodeStream = isReadableNodeStream;
	/** @ignore */
	var isFlatbuffersByteBuffer = (x) => {
		return (0, exports.isObject)(x) && isFunction(x["clear"]) && isFunction(x["bytes"]) && isFunction(x["position"]) && isFunction(x["setPosition"]) && isFunction(x["capacity"]) && isFunction(x["getBufferIdentifier"]) && isFunction(x["createLong"]);
	};
	exports.isFlatbuffersByteBuffer = isFlatbuffersByteBuffer;
}));
//#endregion
//#region node_modules/apache-arrow/util/buffer.js
var require_buffer$2 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.compareArrayLike = exports.rebaseValueOffsets = exports.toUint8ClampedArrayAsyncIterator = exports.toFloat64ArrayAsyncIterator = exports.toFloat32ArrayAsyncIterator = exports.toUint32ArrayAsyncIterator = exports.toUint16ArrayAsyncIterator = exports.toUint8ArrayAsyncIterator = exports.toInt32ArrayAsyncIterator = exports.toInt16ArrayAsyncIterator = exports.toInt8ArrayAsyncIterator = exports.toArrayBufferViewAsyncIterator = exports.toUint8ClampedArrayIterator = exports.toFloat64ArrayIterator = exports.toFloat32ArrayIterator = exports.toUint32ArrayIterator = exports.toUint16ArrayIterator = exports.toUint8ArrayIterator = exports.toInt32ArrayIterator = exports.toInt16ArrayIterator = exports.toInt8ArrayIterator = exports.toArrayBufferViewIterator = exports.toUint8ClampedArray = exports.toFloat64Array = exports.toFloat32Array = exports.toBigUint64Array = exports.toUint32Array = exports.toUint16Array = exports.toUint8Array = exports.toBigInt64Array = exports.toInt32Array = exports.toInt16Array = exports.toInt8Array = exports.toArrayBufferView = exports.joinUint8Arrays = exports.memcpy = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var utf8_js_1 = require_utf8$2();
	var compat_js_1 = require_compat();
	/** @ignore */
	var SharedArrayBuf = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : ArrayBuffer;
	/** @ignore */
	function collapseContiguousByteRanges(chunks) {
		const result = chunks[0] ? [chunks[0]] : [];
		let xOffset, yOffset, xLen, yLen;
		for (let x, y, i = 0, j = 0, n = chunks.length; ++i < n;) {
			x = result[j];
			y = chunks[i];
			if (!x || !y || x.buffer !== y.buffer || y.byteOffset < x.byteOffset) {
				y && (result[++j] = y);
				continue;
			}
			({byteOffset: xOffset, byteLength: xLen} = x);
			({byteOffset: yOffset, byteLength: yLen} = y);
			if (xOffset + xLen < yOffset || yOffset + yLen < xOffset) {
				y && (result[++j] = y);
				continue;
			}
			result[j] = new Uint8Array(x.buffer, xOffset, yOffset - xOffset + yLen);
		}
		return result;
	}
	/** @ignore */
	function memcpy(target, source, targetByteOffset = 0, sourceByteLength = source.byteLength) {
		const targetByteLength = target.byteLength;
		const dst = new Uint8Array(target.buffer, target.byteOffset, targetByteLength);
		const src = new Uint8Array(source.buffer, source.byteOffset, Math.min(sourceByteLength, targetByteLength));
		dst.set(src, targetByteOffset);
		return target;
	}
	exports.memcpy = memcpy;
	/** @ignore */
	function joinUint8Arrays(chunks, size) {
		const result = collapseContiguousByteRanges(chunks);
		const byteLength = result.reduce((x, b) => x + b.byteLength, 0);
		let source, sliced, buffer;
		let offset = 0, index = -1;
		const length = Math.min(size || Number.POSITIVE_INFINITY, byteLength);
		for (const n = result.length; ++index < n;) {
			source = result[index];
			sliced = source.subarray(0, Math.min(source.length, length - offset));
			if (length <= offset + sliced.length) {
				if (sliced.length < source.length) result[index] = source.subarray(sliced.length);
				else if (sliced.length === source.length) index++;
				buffer ? memcpy(buffer, sliced, offset) : buffer = sliced;
				break;
			}
			memcpy(buffer || (buffer = new Uint8Array(length)), sliced, offset);
			offset += sliced.length;
		}
		return [
			buffer || new Uint8Array(0),
			result.slice(index),
			byteLength - (buffer ? buffer.byteLength : 0)
		];
	}
	exports.joinUint8Arrays = joinUint8Arrays;
	/** @ignore */
	function toArrayBufferView(ArrayBufferViewCtor, input) {
		let value = (0, compat_js_1.isIteratorResult)(input) ? input.value : input;
		if (value instanceof ArrayBufferViewCtor) {
			if (ArrayBufferViewCtor === Uint8Array) return new ArrayBufferViewCtor(value.buffer, value.byteOffset, value.byteLength);
			return value;
		}
		if (!value) return new ArrayBufferViewCtor(0);
		if (typeof value === "string") value = (0, utf8_js_1.encodeUtf8)(value);
		if (value instanceof ArrayBuffer) return new ArrayBufferViewCtor(value);
		if (value instanceof SharedArrayBuf) return new ArrayBufferViewCtor(value);
		if ((0, compat_js_1.isFlatbuffersByteBuffer)(value)) return toArrayBufferView(ArrayBufferViewCtor, value.bytes());
		return !ArrayBuffer.isView(value) ? ArrayBufferViewCtor.from(value) : value.byteLength <= 0 ? new ArrayBufferViewCtor(0) : new ArrayBufferViewCtor(value.buffer, value.byteOffset, value.byteLength / ArrayBufferViewCtor.BYTES_PER_ELEMENT);
	}
	exports.toArrayBufferView = toArrayBufferView;
	/** @ignore */ var toInt8Array = (input) => toArrayBufferView(Int8Array, input);
	exports.toInt8Array = toInt8Array;
	/** @ignore */ var toInt16Array = (input) => toArrayBufferView(Int16Array, input);
	exports.toInt16Array = toInt16Array;
	/** @ignore */ var toInt32Array = (input) => toArrayBufferView(Int32Array, input);
	exports.toInt32Array = toInt32Array;
	/** @ignore */ var toBigInt64Array = (input) => toArrayBufferView(BigInt64Array, input);
	exports.toBigInt64Array = toBigInt64Array;
	/** @ignore */ var toUint8Array = (input) => toArrayBufferView(Uint8Array, input);
	exports.toUint8Array = toUint8Array;
	/** @ignore */ var toUint16Array = (input) => toArrayBufferView(Uint16Array, input);
	exports.toUint16Array = toUint16Array;
	/** @ignore */ var toUint32Array = (input) => toArrayBufferView(Uint32Array, input);
	exports.toUint32Array = toUint32Array;
	/** @ignore */ var toBigUint64Array = (input) => toArrayBufferView(BigUint64Array, input);
	exports.toBigUint64Array = toBigUint64Array;
	/** @ignore */ var toFloat32Array = (input) => toArrayBufferView(Float32Array, input);
	exports.toFloat32Array = toFloat32Array;
	/** @ignore */ var toFloat64Array = (input) => toArrayBufferView(Float64Array, input);
	exports.toFloat64Array = toFloat64Array;
	/** @ignore */ var toUint8ClampedArray = (input) => toArrayBufferView(Uint8ClampedArray, input);
	exports.toUint8ClampedArray = toUint8ClampedArray;
	/** @ignore */
	var pump = (iterator) => {
		iterator.next();
		return iterator;
	};
	/** @ignore */
	function* toArrayBufferViewIterator(ArrayCtor, source) {
		const wrap = function* (x) {
			yield x;
		};
		yield* pump((function* (it) {
			let r = null;
			do
				r = it.next(yield toArrayBufferView(ArrayCtor, r));
			while (!r.done);
		})((typeof source === "string" ? wrap(source) : ArrayBuffer.isView(source) ? wrap(source) : source instanceof ArrayBuffer ? wrap(source) : source instanceof SharedArrayBuf ? wrap(source) : !(0, compat_js_1.isIterable)(source) ? wrap(source) : source)[Symbol.iterator]()));
		return new ArrayCtor();
	}
	exports.toArrayBufferViewIterator = toArrayBufferViewIterator;
	/** @ignore */ var toInt8ArrayIterator = (input) => toArrayBufferViewIterator(Int8Array, input);
	exports.toInt8ArrayIterator = toInt8ArrayIterator;
	/** @ignore */ var toInt16ArrayIterator = (input) => toArrayBufferViewIterator(Int16Array, input);
	exports.toInt16ArrayIterator = toInt16ArrayIterator;
	/** @ignore */ var toInt32ArrayIterator = (input) => toArrayBufferViewIterator(Int32Array, input);
	exports.toInt32ArrayIterator = toInt32ArrayIterator;
	/** @ignore */ var toUint8ArrayIterator = (input) => toArrayBufferViewIterator(Uint8Array, input);
	exports.toUint8ArrayIterator = toUint8ArrayIterator;
	/** @ignore */ var toUint16ArrayIterator = (input) => toArrayBufferViewIterator(Uint16Array, input);
	exports.toUint16ArrayIterator = toUint16ArrayIterator;
	/** @ignore */ var toUint32ArrayIterator = (input) => toArrayBufferViewIterator(Uint32Array, input);
	exports.toUint32ArrayIterator = toUint32ArrayIterator;
	/** @ignore */ var toFloat32ArrayIterator = (input) => toArrayBufferViewIterator(Float32Array, input);
	exports.toFloat32ArrayIterator = toFloat32ArrayIterator;
	/** @ignore */ var toFloat64ArrayIterator = (input) => toArrayBufferViewIterator(Float64Array, input);
	exports.toFloat64ArrayIterator = toFloat64ArrayIterator;
	/** @ignore */ var toUint8ClampedArrayIterator = (input) => toArrayBufferViewIterator(Uint8ClampedArray, input);
	exports.toUint8ClampedArrayIterator = toUint8ClampedArrayIterator;
	/** @ignore */
	function toArrayBufferViewAsyncIterator(ArrayCtor, source) {
		return tslib_1.__asyncGenerator(this, arguments, function* toArrayBufferViewAsyncIterator_1() {
			if ((0, compat_js_1.isPromise)(source)) return yield tslib_1.__await(yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues(toArrayBufferViewAsyncIterator(ArrayCtor, yield tslib_1.__await(source))))));
			const wrap = function(x) {
				return tslib_1.__asyncGenerator(this, arguments, function* () {
					yield yield tslib_1.__await(yield tslib_1.__await(x));
				});
			};
			const emit = function(source) {
				return tslib_1.__asyncGenerator(this, arguments, function* () {
					yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues(pump((function* (it) {
						let r = null;
						do
							r = it.next(yield r === null || r === void 0 ? void 0 : r.value);
						while (!r.done);
					})(source[Symbol.iterator]())))));
				});
			};
			const buffers = typeof source === "string" ? wrap(source) : ArrayBuffer.isView(source) ? wrap(source) : source instanceof ArrayBuffer ? wrap(source) : source instanceof SharedArrayBuf ? wrap(source) : (0, compat_js_1.isIterable)(source) ? emit(source) : !(0, compat_js_1.isAsyncIterable)(source) ? wrap(source) : source;
			yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues(pump((function(it) {
				return tslib_1.__asyncGenerator(this, arguments, function* () {
					let r = null;
					do
						r = yield tslib_1.__await(it.next(yield yield tslib_1.__await(toArrayBufferView(ArrayCtor, r))));
					while (!r.done);
				});
			})(buffers[Symbol.asyncIterator]())))));
			return yield tslib_1.__await(new ArrayCtor());
		});
	}
	exports.toArrayBufferViewAsyncIterator = toArrayBufferViewAsyncIterator;
	/** @ignore */ var toInt8ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int8Array, input);
	exports.toInt8ArrayAsyncIterator = toInt8ArrayAsyncIterator;
	/** @ignore */ var toInt16ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int16Array, input);
	exports.toInt16ArrayAsyncIterator = toInt16ArrayAsyncIterator;
	/** @ignore */ var toInt32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Int32Array, input);
	exports.toInt32ArrayAsyncIterator = toInt32ArrayAsyncIterator;
	/** @ignore */ var toUint8ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint8Array, input);
	exports.toUint8ArrayAsyncIterator = toUint8ArrayAsyncIterator;
	/** @ignore */ var toUint16ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint16Array, input);
	exports.toUint16ArrayAsyncIterator = toUint16ArrayAsyncIterator;
	/** @ignore */ var toUint32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint32Array, input);
	exports.toUint32ArrayAsyncIterator = toUint32ArrayAsyncIterator;
	/** @ignore */ var toFloat32ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Float32Array, input);
	exports.toFloat32ArrayAsyncIterator = toFloat32ArrayAsyncIterator;
	/** @ignore */ var toFloat64ArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Float64Array, input);
	exports.toFloat64ArrayAsyncIterator = toFloat64ArrayAsyncIterator;
	/** @ignore */ var toUint8ClampedArrayAsyncIterator = (input) => toArrayBufferViewAsyncIterator(Uint8ClampedArray, input);
	exports.toUint8ClampedArrayAsyncIterator = toUint8ClampedArrayAsyncIterator;
	function rebaseValueOffsets(offset, length, valueOffsets) {
		if (offset !== 0) {
			valueOffsets = valueOffsets.slice(0, length);
			for (let i = -1, n = valueOffsets.length; ++i < n;) valueOffsets[i] += offset;
		}
		return valueOffsets.subarray(0, length);
	}
	exports.rebaseValueOffsets = rebaseValueOffsets;
	/** @ignore */
	function compareArrayLike(a, b) {
		let i = 0;
		const n = a.length;
		if (n !== b.length) return false;
		if (n > 0) do
			if (a[i] !== b[i]) return false;
		while (++i < n);
		return true;
	}
	exports.compareArrayLike = compareArrayLike;
}));
//#endregion
//#region node_modules/apache-arrow/io/adapters.js
var require_adapters = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var buffer_js_1 = require_buffer$2();
	/** @ignore */
	exports.default = {
		fromIterable(source) {
			return pump(fromIterable(source));
		},
		fromAsyncIterable(source) {
			return pump(fromAsyncIterable(source));
		},
		fromDOMStream(source) {
			return pump(fromDOMStream(source));
		},
		fromNodeStream(stream) {
			return pump(fromNodeStream(stream));
		},
		toDOMStream(source, options) {
			throw new Error(`"toDOMStream" not available in this environment`);
		},
		toNodeStream(source, options) {
			throw new Error(`"toNodeStream" not available in this environment`);
		}
	};
	/** @ignore */
	var pump = (iterator) => {
		iterator.next();
		return iterator;
	};
	/** @ignore */
	function* fromIterable(source) {
		let done, threw = false;
		let buffers = [], buffer;
		let cmd, size, bufferLength = 0;
		function byteRange() {
			if (cmd === "peek") return (0, buffer_js_1.joinUint8Arrays)(buffers, size)[0];
			[buffer, buffers, bufferLength] = (0, buffer_js_1.joinUint8Arrays)(buffers, size);
			return buffer;
		}
		({cmd, size} = (yield (() => null)()) || {
			cmd: "read",
			size: 0
		});
		const it = (0, buffer_js_1.toUint8ArrayIterator)(source)[Symbol.iterator]();
		try {
			do {
				({done, value: buffer} = Number.isNaN(size - bufferLength) ? it.next() : it.next(size - bufferLength));
				if (!done && buffer.byteLength > 0) {
					buffers.push(buffer);
					bufferLength += buffer.byteLength;
				}
				if (done || size <= bufferLength) do
					({cmd, size} = yield byteRange());
				while (size < bufferLength);
			} while (!done);
		} catch (e) {
			threw = true;
			typeof it.throw === "function" && it.throw(e);
		} finally {
			threw === false && typeof it.return === "function" && it.return(null);
		}
		return null;
	}
	/** @ignore */
	function fromAsyncIterable(source) {
		return tslib_1.__asyncGenerator(this, arguments, function* fromAsyncIterable_1() {
			let done, threw = false;
			let buffers = [], buffer;
			let cmd, size, bufferLength = 0;
			function byteRange() {
				if (cmd === "peek") return (0, buffer_js_1.joinUint8Arrays)(buffers, size)[0];
				[buffer, buffers, bufferLength] = (0, buffer_js_1.joinUint8Arrays)(buffers, size);
				return buffer;
			}
			({cmd, size} = (yield yield tslib_1.__await((() => null)())) || {
				cmd: "read",
				size: 0
			});
			const it = (0, buffer_js_1.toUint8ArrayAsyncIterator)(source)[Symbol.asyncIterator]();
			try {
				do {
					({done, value: buffer} = Number.isNaN(size - bufferLength) ? yield tslib_1.__await(it.next()) : yield tslib_1.__await(it.next(size - bufferLength)));
					if (!done && buffer.byteLength > 0) {
						buffers.push(buffer);
						bufferLength += buffer.byteLength;
					}
					if (done || size <= bufferLength) do
						({cmd, size} = yield yield tslib_1.__await(byteRange()));
					while (size < bufferLength);
				} while (!done);
			} catch (e) {
				threw = true;
				typeof it.throw === "function" && (yield tslib_1.__await(it.throw(e)));
			} finally {
				threw === false && typeof it.return === "function" && (yield tslib_1.__await(it.return(new Uint8Array(0))));
			}
			return yield tslib_1.__await(null);
		});
	}
	/** @ignore */
	function fromDOMStream(source) {
		return tslib_1.__asyncGenerator(this, arguments, function* fromDOMStream_1() {
			let done = false, threw = false;
			let buffers = [], buffer;
			let cmd, size, bufferLength = 0;
			function byteRange() {
				if (cmd === "peek") return (0, buffer_js_1.joinUint8Arrays)(buffers, size)[0];
				[buffer, buffers, bufferLength] = (0, buffer_js_1.joinUint8Arrays)(buffers, size);
				return buffer;
			}
			({cmd, size} = (yield yield tslib_1.__await((() => null)())) || {
				cmd: "read",
				size: 0
			});
			const it = new AdaptiveByteReader(source);
			try {
				do {
					({done, value: buffer} = Number.isNaN(size - bufferLength) ? yield tslib_1.__await(it["read"]()) : yield tslib_1.__await(it["read"](size - bufferLength)));
					if (!done && buffer.byteLength > 0) {
						buffers.push((0, buffer_js_1.toUint8Array)(buffer));
						bufferLength += buffer.byteLength;
					}
					if (done || size <= bufferLength) do
						({cmd, size} = yield yield tslib_1.__await(byteRange()));
					while (size < bufferLength);
				} while (!done);
			} catch (e) {
				threw = true;
				yield tslib_1.__await(it["cancel"](e));
			} finally {
				threw === false ? yield tslib_1.__await(it["cancel"]()) : source["locked"] && it.releaseLock();
			}
			return yield tslib_1.__await(null);
		});
	}
	/** @ignore */
	var AdaptiveByteReader = class {
		constructor(source) {
			this.source = source;
			this.reader = null;
			this.reader = this.source["getReader"]();
			this.reader["closed"].catch(() => {});
		}
		get closed() {
			return this.reader ? this.reader["closed"].catch(() => {}) : Promise.resolve();
		}
		releaseLock() {
			if (this.reader) this.reader.releaseLock();
			this.reader = null;
		}
		cancel(reason) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				const { reader, source } = this;
				reader && (yield reader["cancel"](reason).catch(() => {}));
				source && source["locked"] && this.releaseLock();
			});
		}
		read(size) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				if (size === 0) return {
					done: this.reader == null,
					value: new Uint8Array(0)
				};
				const result = yield this.reader.read();
				!result.done && (result.value = (0, buffer_js_1.toUint8Array)(result));
				return result;
			});
		}
	};
	/** @ignore */
	var onEvent = (stream, event) => {
		const handler = (_) => resolve([event, _]);
		let resolve;
		return [
			event,
			handler,
			new Promise((r) => (resolve = r) && stream["once"](event, handler))
		];
	};
	/** @ignore */
	function fromNodeStream(stream) {
		return tslib_1.__asyncGenerator(this, arguments, function* fromNodeStream_1() {
			const events = [];
			let event = "error";
			let done = false, err = null;
			let cmd, size, bufferLength = 0;
			let buffers = [], buffer;
			function byteRange() {
				if (cmd === "peek") return (0, buffer_js_1.joinUint8Arrays)(buffers, size)[0];
				[buffer, buffers, bufferLength] = (0, buffer_js_1.joinUint8Arrays)(buffers, size);
				return buffer;
			}
			({cmd, size} = (yield yield tslib_1.__await((() => null)())) || {
				cmd: "read",
				size: 0
			});
			if (stream["isTTY"]) {
				yield yield tslib_1.__await(new Uint8Array(0));
				return yield tslib_1.__await(null);
			}
			try {
				events[0] = onEvent(stream, "end");
				events[1] = onEvent(stream, "error");
				do {
					events[2] = onEvent(stream, "readable");
					[event, err] = yield tslib_1.__await(Promise.race(events.map((x) => x[2])));
					if (event === "error") break;
					if (!(done = event === "end")) {
						if (!Number.isFinite(size - bufferLength)) buffer = (0, buffer_js_1.toUint8Array)(stream["read"]());
						else {
							buffer = (0, buffer_js_1.toUint8Array)(stream["read"](size - bufferLength));
							if (buffer.byteLength < size - bufferLength) buffer = (0, buffer_js_1.toUint8Array)(stream["read"]());
						}
						if (buffer.byteLength > 0) {
							buffers.push(buffer);
							bufferLength += buffer.byteLength;
						}
					}
					if (done || size <= bufferLength) do
						({cmd, size} = yield yield tslib_1.__await(byteRange()));
					while (size < bufferLength);
				} while (!done);
			} finally {
				yield tslib_1.__await(cleanup(events, event === "error" ? err : null));
			}
			return yield tslib_1.__await(null);
			function cleanup(events, err) {
				buffer = buffers = null;
				return new Promise((resolve, reject) => {
					for (const [evt, fn] of events) stream["off"](evt, fn);
					try {
						const destroy = stream["destroy"];
						destroy && destroy.call(stream, err);
						err = void 0;
					} catch (e) {
						err = e || err;
					} finally {
						err != null ? reject(err) : resolve();
					}
				});
			}
		});
	}
}));
//#endregion
//#region node_modules/apache-arrow/fb/metadata-version.js
var require_metadata_version = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MetadataVersion = void 0;
	/**
	* Logical types, vector layouts, and schemas
	* Format Version History.
	* Version 1.0 - Forward and backwards compatibility guaranteed.
	* Version 1.1 - Add Decimal256.
	* Version 1.2 - Add Interval MONTH_DAY_NANO.
	* Version 1.3 - Add Run-End Encoded.
	*/
	var MetadataVersion;
	(function(MetadataVersion) {
		/**
		* 0.1.0 (October 2016).
		*/
		MetadataVersion[MetadataVersion["V1"] = 0] = "V1";
		/**
		* 0.2.0 (February 2017). Non-backwards compatible with V1.
		*/
		MetadataVersion[MetadataVersion["V2"] = 1] = "V2";
		/**
		* 0.3.0 -> 0.7.1 (May - December 2017). Non-backwards compatible with V2.
		*/
		MetadataVersion[MetadataVersion["V3"] = 2] = "V3";
		/**
		* >= 0.8.0 (December 2017). Non-backwards compatible with V3.
		*/
		MetadataVersion[MetadataVersion["V4"] = 3] = "V4";
		/**
		* >= 1.0.0 (July 2020. Backwards compatible with V4 (V5 readers can read V4
		* metadata and IPC messages). Implementations are recommended to provide a
		* V4 compatibility mode with V5 format changes disabled.
		*
		* Incompatible changes between V4 and V5:
		* - Union buffer layout has changed. In V5, Unions don't have a validity
		*   bitmap buffer.
		*/
		MetadataVersion[MetadataVersion["V5"] = 4] = "V5";
	})(MetadataVersion || (exports.MetadataVersion = MetadataVersion = {}));
}));
//#endregion
//#region node_modules/apache-arrow/fb/union-mode.js
var require_union_mode = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.UnionMode = void 0;
	var UnionMode;
	(function(UnionMode) {
		UnionMode[UnionMode["Sparse"] = 0] = "Sparse";
		UnionMode[UnionMode["Dense"] = 1] = "Dense";
	})(UnionMode || (exports.UnionMode = UnionMode = {}));
}));
//#endregion
//#region node_modules/apache-arrow/fb/precision.js
var require_precision = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Precision = void 0;
	var Precision;
	(function(Precision) {
		Precision[Precision["HALF"] = 0] = "HALF";
		Precision[Precision["SINGLE"] = 1] = "SINGLE";
		Precision[Precision["DOUBLE"] = 2] = "DOUBLE";
	})(Precision || (exports.Precision = Precision = {}));
}));
//#endregion
//#region node_modules/apache-arrow/fb/date-unit.js
var require_date_unit = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DateUnit = void 0;
	var DateUnit;
	(function(DateUnit) {
		DateUnit[DateUnit["DAY"] = 0] = "DAY";
		DateUnit[DateUnit["MILLISECOND"] = 1] = "MILLISECOND";
	})(DateUnit || (exports.DateUnit = DateUnit = {}));
}));
//#endregion
//#region node_modules/apache-arrow/fb/time-unit.js
var require_time_unit = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TimeUnit = void 0;
	var TimeUnit;
	(function(TimeUnit) {
		TimeUnit[TimeUnit["SECOND"] = 0] = "SECOND";
		TimeUnit[TimeUnit["MILLISECOND"] = 1] = "MILLISECOND";
		TimeUnit[TimeUnit["MICROSECOND"] = 2] = "MICROSECOND";
		TimeUnit[TimeUnit["NANOSECOND"] = 3] = "NANOSECOND";
	})(TimeUnit || (exports.TimeUnit = TimeUnit = {}));
}));
//#endregion
//#region node_modules/apache-arrow/fb/interval-unit.js
var require_interval_unit = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.IntervalUnit = void 0;
	var IntervalUnit;
	(function(IntervalUnit) {
		IntervalUnit[IntervalUnit["YEAR_MONTH"] = 0] = "YEAR_MONTH";
		IntervalUnit[IntervalUnit["DAY_TIME"] = 1] = "DAY_TIME";
		IntervalUnit[IntervalUnit["MONTH_DAY_NANO"] = 2] = "MONTH_DAY_NANO";
	})(IntervalUnit || (exports.IntervalUnit = IntervalUnit = {}));
}));
//#endregion
//#region node_modules/apache-arrow/node_modules/flatbuffers/mjs/constants.js
var init_constants = require_chunk$1.__esmMin((() => {}));
//#endregion
//#region node_modules/apache-arrow/node_modules/flatbuffers/mjs/utils.js
var int32, float32, float64, isLittleEndian;
var init_utils = require_chunk$1.__esmMin((() => {
	int32 = new Int32Array(2);
	float32 = new Float32Array(int32.buffer);
	float64 = new Float64Array(int32.buffer);
	isLittleEndian = new Uint16Array(new Uint8Array([1, 0]).buffer)[0] === 1;
}));
//#endregion
//#region node_modules/apache-arrow/node_modules/flatbuffers/mjs/encoding.js
var Encoding;
var init_encoding = require_chunk$1.__esmMin((() => {
	(function(Encoding) {
		Encoding[Encoding["UTF8_BYTES"] = 1] = "UTF8_BYTES";
		Encoding[Encoding["UTF16_STRING"] = 2] = "UTF16_STRING";
	})(Encoding || (Encoding = {}));
}));
//#endregion
//#region node_modules/apache-arrow/node_modules/flatbuffers/mjs/byte-buffer.js
var ByteBuffer;
var init_byte_buffer = require_chunk$1.__esmMin((() => {
	init_constants();
	init_encoding();
	init_utils();
	ByteBuffer = class ByteBuffer {
		/**
		* Create a new ByteBuffer with a given array of bytes (`Uint8Array`)
		*/
		constructor(bytes_) {
			this.bytes_ = bytes_;
			this.position_ = 0;
			this.text_decoder_ = new TextDecoder();
		}
		/**
		* Create and allocate a new ByteBuffer with a given size.
		*/
		static allocate(byte_size) {
			return new ByteBuffer(new Uint8Array(byte_size));
		}
		clear() {
			this.position_ = 0;
		}
		/**
		* Get the underlying `Uint8Array`.
		*/
		bytes() {
			return this.bytes_;
		}
		/**
		* Get the buffer's position.
		*/
		position() {
			return this.position_;
		}
		/**
		* Set the buffer's position.
		*/
		setPosition(position) {
			this.position_ = position;
		}
		/**
		* Get the buffer's capacity.
		*/
		capacity() {
			return this.bytes_.length;
		}
		readInt8(offset) {
			return this.readUint8(offset) << 24 >> 24;
		}
		readUint8(offset) {
			return this.bytes_[offset];
		}
		readInt16(offset) {
			return this.readUint16(offset) << 16 >> 16;
		}
		readUint16(offset) {
			return this.bytes_[offset] | this.bytes_[offset + 1] << 8;
		}
		readInt32(offset) {
			return this.bytes_[offset] | this.bytes_[offset + 1] << 8 | this.bytes_[offset + 2] << 16 | this.bytes_[offset + 3] << 24;
		}
		readUint32(offset) {
			return this.readInt32(offset) >>> 0;
		}
		readInt64(offset) {
			return BigInt.asIntN(64, BigInt(this.readUint32(offset)) + (BigInt(this.readUint32(offset + 4)) << BigInt(32)));
		}
		readUint64(offset) {
			return BigInt.asUintN(64, BigInt(this.readUint32(offset)) + (BigInt(this.readUint32(offset + 4)) << BigInt(32)));
		}
		readFloat32(offset) {
			int32[0] = this.readInt32(offset);
			return float32[0];
		}
		readFloat64(offset) {
			int32[isLittleEndian ? 0 : 1] = this.readInt32(offset);
			int32[isLittleEndian ? 1 : 0] = this.readInt32(offset + 4);
			return float64[0];
		}
		writeInt8(offset, value) {
			this.bytes_[offset] = value;
		}
		writeUint8(offset, value) {
			this.bytes_[offset] = value;
		}
		writeInt16(offset, value) {
			this.bytes_[offset] = value;
			this.bytes_[offset + 1] = value >> 8;
		}
		writeUint16(offset, value) {
			this.bytes_[offset] = value;
			this.bytes_[offset + 1] = value >> 8;
		}
		writeInt32(offset, value) {
			this.bytes_[offset] = value;
			this.bytes_[offset + 1] = value >> 8;
			this.bytes_[offset + 2] = value >> 16;
			this.bytes_[offset + 3] = value >> 24;
		}
		writeUint32(offset, value) {
			this.bytes_[offset] = value;
			this.bytes_[offset + 1] = value >> 8;
			this.bytes_[offset + 2] = value >> 16;
			this.bytes_[offset + 3] = value >> 24;
		}
		writeInt64(offset, value) {
			this.writeInt32(offset, Number(BigInt.asIntN(32, value)));
			this.writeInt32(offset + 4, Number(BigInt.asIntN(32, value >> BigInt(32))));
		}
		writeUint64(offset, value) {
			this.writeUint32(offset, Number(BigInt.asUintN(32, value)));
			this.writeUint32(offset + 4, Number(BigInt.asUintN(32, value >> BigInt(32))));
		}
		writeFloat32(offset, value) {
			float32[0] = value;
			this.writeInt32(offset, int32[0]);
		}
		writeFloat64(offset, value) {
			float64[0] = value;
			this.writeInt32(offset, int32[isLittleEndian ? 0 : 1]);
			this.writeInt32(offset + 4, int32[isLittleEndian ? 1 : 0]);
		}
		/**
		* Return the file identifier.   Behavior is undefined for FlatBuffers whose
		* schema does not include a file_identifier (likely points at padding or the
		* start of a the root vtable).
		*/
		getBufferIdentifier() {
			if (this.bytes_.length < this.position_ + 4 + 4) throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
			let result = "";
			for (let i = 0; i < 4; i++) result += String.fromCharCode(this.readInt8(this.position_ + 4 + i));
			return result;
		}
		/**
		* Look up a field in the vtable, return an offset into the object, or 0 if the
		* field is not present.
		*/
		__offset(bb_pos, vtable_offset) {
			const vtable = bb_pos - this.readInt32(bb_pos);
			return vtable_offset < this.readInt16(vtable) ? this.readInt16(vtable + vtable_offset) : 0;
		}
		/**
		* Initialize any Table-derived type to point to the union at the given offset.
		*/
		__union(t, offset) {
			t.bb_pos = offset + this.readInt32(offset);
			t.bb = this;
			return t;
		}
		/**
		* Create a JavaScript string from UTF-8 data stored inside the FlatBuffer.
		* This allocates a new string and converts to wide chars upon each access.
		*
		* To avoid the conversion to string, pass Encoding.UTF8_BYTES as the
		* "optionalEncoding" argument. This is useful for avoiding conversion when
		* the data will just be packaged back up in another FlatBuffer later on.
		*
		* @param offset
		* @param opt_encoding Defaults to UTF16_STRING
		*/
		__string(offset, opt_encoding) {
			offset += this.readInt32(offset);
			const length = this.readInt32(offset);
			offset += 4;
			const utf8bytes = this.bytes_.subarray(offset, offset + length);
			if (opt_encoding === Encoding.UTF8_BYTES) return utf8bytes;
			else return this.text_decoder_.decode(utf8bytes);
		}
		/**
		* Handle unions that can contain string as its member, if a Table-derived type then initialize it,
		* if a string then return a new one
		*
		* WARNING: strings are immutable in JS so we can't change the string that the user gave us, this
		* makes the behaviour of __union_with_string different compared to __union
		*/
		__union_with_string(o, offset) {
			if (typeof o === "string") return this.__string(offset);
			return this.__union(o, offset);
		}
		/**
		* Retrieve the relative offset stored at "offset"
		*/
		__indirect(offset) {
			return offset + this.readInt32(offset);
		}
		/**
		* Get the start of data of a vector whose offset is stored at "offset" in this object.
		*/
		__vector(offset) {
			return offset + this.readInt32(offset) + 4;
		}
		/**
		* Get the length of a vector whose offset is stored at "offset" in this object.
		*/
		__vector_len(offset) {
			return this.readInt32(offset + this.readInt32(offset));
		}
		__has_identifier(ident) {
			if (ident.length != 4) throw new Error("FlatBuffers: file identifier must be length 4");
			for (let i = 0; i < 4; i++) if (ident.charCodeAt(i) != this.readInt8(this.position() + 4 + i)) return false;
			return true;
		}
		/**
		* A helper function for generating list for obj api
		*/
		createScalarList(listAccessor, listLength) {
			const ret = [];
			for (let i = 0; i < listLength; ++i) {
				const val = listAccessor(i);
				if (val !== null) ret.push(val);
			}
			return ret;
		}
		/**
		* A helper function for generating list for obj api
		* @param listAccessor function that accepts an index and return data at that index
		* @param listLength listLength
		* @param res result list
		*/
		createObjList(listAccessor, listLength) {
			const ret = [];
			for (let i = 0; i < listLength; ++i) {
				const val = listAccessor(i);
				if (val !== null) ret.push(val.unpack());
			}
			return ret;
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/node_modules/flatbuffers/mjs/builder.js
var Builder;
var init_builder = require_chunk$1.__esmMin((() => {
	init_byte_buffer();
	init_constants();
	Builder = class Builder {
		/**
		* Create a FlatBufferBuilder.
		*/
		constructor(opt_initial_size) {
			/** Minimum alignment encountered so far. */
			this.minalign = 1;
			/** The vtable for the current table. */
			this.vtable = null;
			/** The amount of fields we're actually using. */
			this.vtable_in_use = 0;
			/** Whether we are currently serializing a table. */
			this.isNested = false;
			/** Starting offset of the current struct/table. */
			this.object_start = 0;
			/** List of offsets of all vtables. */
			this.vtables = [];
			/** For the current vector being built. */
			this.vector_num_elems = 0;
			/** False omits default values from the serialized data */
			this.force_defaults = false;
			this.string_maps = null;
			this.text_encoder = new TextEncoder();
			let initial_size;
			if (!opt_initial_size) initial_size = 1024;
			else initial_size = opt_initial_size;
			/**
			* @type {ByteBuffer}
			* @private
			*/
			this.bb = ByteBuffer.allocate(initial_size);
			this.space = initial_size;
		}
		clear() {
			this.bb.clear();
			this.space = this.bb.capacity();
			this.minalign = 1;
			this.vtable = null;
			this.vtable_in_use = 0;
			this.isNested = false;
			this.object_start = 0;
			this.vtables = [];
			this.vector_num_elems = 0;
			this.force_defaults = false;
			this.string_maps = null;
		}
		/**
		* In order to save space, fields that are set to their default value
		* don't get serialized into the buffer. Forcing defaults provides a
		* way to manually disable this optimization.
		*
		* @param forceDefaults true always serializes default values
		*/
		forceDefaults(forceDefaults) {
			this.force_defaults = forceDefaults;
		}
		/**
		* Get the ByteBuffer representing the FlatBuffer. Only call this after you've
		* called finish(). The actual data starts at the ByteBuffer's current position,
		* not necessarily at 0.
		*/
		dataBuffer() {
			return this.bb;
		}
		/**
		* Get the bytes representing the FlatBuffer. Only call this after you've
		* called finish().
		*/
		asUint8Array() {
			return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset());
		}
		/**
		* Prepare to write an element of `size` after `additional_bytes` have been
		* written, e.g. if you write a string, you need to align such the int length
		* field is aligned to 4 bytes, and the string data follows it directly. If all
		* you need to do is alignment, `additional_bytes` will be 0.
		*
		* @param size This is the of the new element to write
		* @param additional_bytes The padding size
		*/
		prep(size, additional_bytes) {
			if (size > this.minalign) this.minalign = size;
			const align_size = ~(this.bb.capacity() - this.space + additional_bytes) + 1 & size - 1;
			while (this.space < align_size + size + additional_bytes) {
				const old_buf_size = this.bb.capacity();
				this.bb = Builder.growByteBuffer(this.bb);
				this.space += this.bb.capacity() - old_buf_size;
			}
			this.pad(align_size);
		}
		pad(byte_size) {
			for (let i = 0; i < byte_size; i++) this.bb.writeInt8(--this.space, 0);
		}
		writeInt8(value) {
			this.bb.writeInt8(this.space -= 1, value);
		}
		writeInt16(value) {
			this.bb.writeInt16(this.space -= 2, value);
		}
		writeInt32(value) {
			this.bb.writeInt32(this.space -= 4, value);
		}
		writeInt64(value) {
			this.bb.writeInt64(this.space -= 8, value);
		}
		writeFloat32(value) {
			this.bb.writeFloat32(this.space -= 4, value);
		}
		writeFloat64(value) {
			this.bb.writeFloat64(this.space -= 8, value);
		}
		/**
		* Add an `int8` to the buffer, properly aligned, and grows the buffer (if necessary).
		* @param value The `int8` to add the buffer.
		*/
		addInt8(value) {
			this.prep(1, 0);
			this.writeInt8(value);
		}
		/**
		* Add an `int16` to the buffer, properly aligned, and grows the buffer (if necessary).
		* @param value The `int16` to add the buffer.
		*/
		addInt16(value) {
			this.prep(2, 0);
			this.writeInt16(value);
		}
		/**
		* Add an `int32` to the buffer, properly aligned, and grows the buffer (if necessary).
		* @param value The `int32` to add the buffer.
		*/
		addInt32(value) {
			this.prep(4, 0);
			this.writeInt32(value);
		}
		/**
		* Add an `int64` to the buffer, properly aligned, and grows the buffer (if necessary).
		* @param value The `int64` to add the buffer.
		*/
		addInt64(value) {
			this.prep(8, 0);
			this.writeInt64(value);
		}
		/**
		* Add a `float32` to the buffer, properly aligned, and grows the buffer (if necessary).
		* @param value The `float32` to add the buffer.
		*/
		addFloat32(value) {
			this.prep(4, 0);
			this.writeFloat32(value);
		}
		/**
		* Add a `float64` to the buffer, properly aligned, and grows the buffer (if necessary).
		* @param value The `float64` to add the buffer.
		*/
		addFloat64(value) {
			this.prep(8, 0);
			this.writeFloat64(value);
		}
		addFieldInt8(voffset, value, defaultValue) {
			if (this.force_defaults || value != defaultValue) {
				this.addInt8(value);
				this.slot(voffset);
			}
		}
		addFieldInt16(voffset, value, defaultValue) {
			if (this.force_defaults || value != defaultValue) {
				this.addInt16(value);
				this.slot(voffset);
			}
		}
		addFieldInt32(voffset, value, defaultValue) {
			if (this.force_defaults || value != defaultValue) {
				this.addInt32(value);
				this.slot(voffset);
			}
		}
		addFieldInt64(voffset, value, defaultValue) {
			if (this.force_defaults || value !== defaultValue) {
				this.addInt64(value);
				this.slot(voffset);
			}
		}
		addFieldFloat32(voffset, value, defaultValue) {
			if (this.force_defaults || value != defaultValue) {
				this.addFloat32(value);
				this.slot(voffset);
			}
		}
		addFieldFloat64(voffset, value, defaultValue) {
			if (this.force_defaults || value != defaultValue) {
				this.addFloat64(value);
				this.slot(voffset);
			}
		}
		addFieldOffset(voffset, value, defaultValue) {
			if (this.force_defaults || value != defaultValue) {
				this.addOffset(value);
				this.slot(voffset);
			}
		}
		/**
		* Structs are stored inline, so nothing additional is being added. `d` is always 0.
		*/
		addFieldStruct(voffset, value, defaultValue) {
			if (value != defaultValue) {
				this.nested(value);
				this.slot(voffset);
			}
		}
		/**
		* Structures are always stored inline, they need to be created right
		* where they're used.  You'll get this assertion failure if you
		* created it elsewhere.
		*/
		nested(obj) {
			if (obj != this.offset()) throw new TypeError("FlatBuffers: struct must be serialized inline.");
		}
		/**
		* Should not be creating any other object, string or vector
		* while an object is being constructed
		*/
		notNested() {
			if (this.isNested) throw new TypeError("FlatBuffers: object serialization must not be nested.");
		}
		/**
		* Set the current vtable at `voffset` to the current location in the buffer.
		*/
		slot(voffset) {
			if (this.vtable !== null) this.vtable[voffset] = this.offset();
		}
		/**
		* @returns Offset relative to the end of the buffer.
		*/
		offset() {
			return this.bb.capacity() - this.space;
		}
		/**
		* Doubles the size of the backing ByteBuffer and copies the old data towards
		* the end of the new buffer (since we build the buffer backwards).
		*
		* @param bb The current buffer with the existing data
		* @returns A new byte buffer with the old data copied
		* to it. The data is located at the end of the buffer.
		*
		* uint8Array.set() formally takes {Array<number>|ArrayBufferView}, so to pass
		* it a uint8Array we need to suppress the type check:
		* @suppress {checkTypes}
		*/
		static growByteBuffer(bb) {
			const old_buf_size = bb.capacity();
			if (old_buf_size & 3221225472) throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
			const new_buf_size = old_buf_size << 1;
			const nbb = ByteBuffer.allocate(new_buf_size);
			nbb.setPosition(new_buf_size - old_buf_size);
			nbb.bytes().set(bb.bytes(), new_buf_size - old_buf_size);
			return nbb;
		}
		/**
		* Adds on offset, relative to where it will be written.
		*
		* @param offset The offset to add.
		*/
		addOffset(offset) {
			this.prep(4, 0);
			this.writeInt32(this.offset() - offset + 4);
		}
		/**
		* Start encoding a new object in the buffer.  Users will not usually need to
		* call this directly. The FlatBuffers compiler will generate helper methods
		* that call this method internally.
		*/
		startObject(numfields) {
			this.notNested();
			if (this.vtable == null) this.vtable = [];
			this.vtable_in_use = numfields;
			for (let i = 0; i < numfields; i++) this.vtable[i] = 0;
			this.isNested = true;
			this.object_start = this.offset();
		}
		/**
		* Finish off writing the object that is under construction.
		*
		* @returns The offset to the object inside `dataBuffer`
		*/
		endObject() {
			if (this.vtable == null || !this.isNested) throw new Error("FlatBuffers: endObject called without startObject");
			this.addInt32(0);
			const vtableloc = this.offset();
			let i = this.vtable_in_use - 1;
			for (; i >= 0 && this.vtable[i] == 0; i--);
			const trimmed_size = i + 1;
			for (; i >= 0; i--) this.addInt16(this.vtable[i] != 0 ? vtableloc - this.vtable[i] : 0);
			const standard_fields = 2;
			this.addInt16(vtableloc - this.object_start);
			const len = (trimmed_size + standard_fields) * 2;
			this.addInt16(len);
			let existing_vtable = 0;
			const vt1 = this.space;
			outer_loop: for (i = 0; i < this.vtables.length; i++) {
				const vt2 = this.bb.capacity() - this.vtables[i];
				if (len == this.bb.readInt16(vt2)) {
					for (let j = 2; j < len; j += 2) if (this.bb.readInt16(vt1 + j) != this.bb.readInt16(vt2 + j)) continue outer_loop;
					existing_vtable = this.vtables[i];
					break;
				}
			}
			if (existing_vtable) {
				this.space = this.bb.capacity() - vtableloc;
				this.bb.writeInt32(this.space, existing_vtable - vtableloc);
			} else {
				this.vtables.push(this.offset());
				this.bb.writeInt32(this.bb.capacity() - vtableloc, this.offset() - vtableloc);
			}
			this.isNested = false;
			return vtableloc;
		}
		/**
		* Finalize a buffer, poiting to the given `root_table`.
		*/
		finish(root_table, opt_file_identifier, opt_size_prefix) {
			const size_prefix = opt_size_prefix ? 4 : 0;
			if (opt_file_identifier) {
				const file_identifier = opt_file_identifier;
				this.prep(this.minalign, 8 + size_prefix);
				if (file_identifier.length != 4) throw new TypeError("FlatBuffers: file identifier must be length 4");
				for (let i = 3; i >= 0; i--) this.writeInt8(file_identifier.charCodeAt(i));
			}
			this.prep(this.minalign, 4 + size_prefix);
			this.addOffset(root_table);
			if (size_prefix) this.addInt32(this.bb.capacity() - this.space);
			this.bb.setPosition(this.space);
		}
		/**
		* Finalize a size prefixed buffer, pointing to the given `root_table`.
		*/
		finishSizePrefixed(root_table, opt_file_identifier) {
			this.finish(root_table, opt_file_identifier, true);
		}
		/**
		* This checks a required field has been set in a given table that has
		* just been constructed.
		*/
		requiredField(table, field) {
			const table_start = this.bb.capacity() - table;
			const vtable_start = table_start - this.bb.readInt32(table_start);
			if (!(field < this.bb.readInt16(vtable_start) && this.bb.readInt16(vtable_start + field) != 0)) throw new TypeError("FlatBuffers: field " + field + " must be set");
		}
		/**
		* Start a new array/vector of objects.  Users usually will not call
		* this directly. The FlatBuffers compiler will create a start/end
		* method for vector types in generated code.
		*
		* @param elem_size The size of each element in the array
		* @param num_elems The number of elements in the array
		* @param alignment The alignment of the array
		*/
		startVector(elem_size, num_elems, alignment) {
			this.notNested();
			this.vector_num_elems = num_elems;
			this.prep(4, elem_size * num_elems);
			this.prep(alignment, elem_size * num_elems);
		}
		/**
		* Finish off the creation of an array and all its elements. The array must be
		* created with `startVector`.
		*
		* @returns The offset at which the newly created array
		* starts.
		*/
		endVector() {
			this.writeInt32(this.vector_num_elems);
			return this.offset();
		}
		/**
		* Encode the string `s` in the buffer using UTF-8. If the string passed has
		* already been seen, we return the offset of the already written string
		*
		* @param s The string to encode
		* @return The offset in the buffer where the encoded string starts
		*/
		createSharedString(s) {
			if (!s) return 0;
			if (!this.string_maps) this.string_maps = /* @__PURE__ */ new Map();
			if (this.string_maps.has(s)) return this.string_maps.get(s);
			const offset = this.createString(s);
			this.string_maps.set(s, offset);
			return offset;
		}
		/**
		* Encode the string `s` in the buffer using UTF-8. If a Uint8Array is passed
		* instead of a string, it is assumed to contain valid UTF-8 encoded data.
		*
		* @param s The string to encode
		* @return The offset in the buffer where the encoded string starts
		*/
		createString(s) {
			if (s === null || s === void 0) return 0;
			let utf8;
			if (s instanceof Uint8Array) utf8 = s;
			else utf8 = this.text_encoder.encode(s);
			this.addInt8(0);
			this.startVector(1, utf8.length, 1);
			this.bb.setPosition(this.space -= utf8.length);
			this.bb.bytes().set(utf8, this.space);
			return this.endVector();
		}
		/**
		* Create a byte vector.
		*
		* @param v The bytes to add
		* @returns The offset in the buffer where the byte vector starts
		*/
		createByteVector(v) {
			if (v === null || v === void 0) return 0;
			this.startVector(1, v.length, 1);
			this.bb.setPosition(this.space -= v.length);
			this.bb.bytes().set(v, this.space);
			return this.endVector();
		}
		/**
		* A helper function to pack an object
		*
		* @returns offset of obj
		*/
		createObjectOffset(obj) {
			if (obj === null) return 0;
			if (typeof obj === "string") return this.createString(obj);
			else return obj.pack(this);
		}
		/**
		* A helper function to pack a list of object
		*
		* @returns list of offsets of each non null object
		*/
		createObjectOffsetList(list) {
			const ret = [];
			for (let i = 0; i < list.length; ++i) {
				const val = list[i];
				if (val !== null) ret.push(this.createObjectOffset(val));
				else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
			}
			return ret;
		}
		createStructOffsetList(list, startFunc) {
			startFunc(this, list.length);
			this.createObjectOffsetList(list.slice().reverse());
			return this.endVector();
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/node_modules/flatbuffers/mjs/flatbuffers.js
var flatbuffers_exports = /* @__PURE__ */ require_chunk$1.__exportAll({
	Builder: () => Builder,
	ByteBuffer: () => ByteBuffer,
	Encoding: () => Encoding,
	FILE_IDENTIFIER_LENGTH: () => 4,
	SIZEOF_INT: () => 4,
	SIZEOF_SHORT: () => 2,
	SIZE_PREFIX_LENGTH: () => 4,
	float32: () => float32,
	float64: () => float64,
	int32: () => int32,
	isLittleEndian: () => isLittleEndian
});
var init_flatbuffers = require_chunk$1.__esmMin((() => {
	init_constants();
	init_utils();
	init_builder();
	init_byte_buffer();
	init_encoding();
}));
//#endregion
//#region node_modules/apache-arrow/fb/body-compression-method.js
var require_body_compression_method = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BodyCompressionMethod = void 0;
	/**
	* Provided for forward compatibility in case we need to support different
	* strategies for compressing the IPC message body (like whole-body
	* compression rather than buffer-level) in the future
	*/
	var BodyCompressionMethod;
	(function(BodyCompressionMethod) {
		/**
		* Each constituent buffer is first compressed with the indicated
		* compressor, and then written with the uncompressed length in the first 8
		* bytes as a 64-bit little-endian signed integer followed by the compressed
		* buffer bytes (and then padding as required by the protocol). The
		* uncompressed length may be set to -1 to indicate that the data that
		* follows is not compressed, which can be useful for cases where
		* compression does not yield appreciable savings.
		*/
		BodyCompressionMethod[BodyCompressionMethod["BUFFER"] = 0] = "BUFFER";
	})(BodyCompressionMethod || (exports.BodyCompressionMethod = BodyCompressionMethod = {}));
}));
//#endregion
//#region node_modules/apache-arrow/fb/compression-type.js
var require_compression_type = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CompressionType = void 0;
	var CompressionType;
	(function(CompressionType) {
		CompressionType[CompressionType["LZ4_FRAME"] = 0] = "LZ4_FRAME";
		CompressionType[CompressionType["ZSTD"] = 1] = "ZSTD";
	})(CompressionType || (exports.CompressionType = CompressionType = {}));
}));
//#endregion
//#region node_modules/apache-arrow/fb/body-compression.js
var require_body_compression = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BodyCompression = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var body_compression_method_js_1 = require_body_compression_method();
	var compression_type_js_1 = require_compression_type();
	exports.BodyCompression = class BodyCompression {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsBodyCompression(bb, obj) {
			return (obj || new BodyCompression()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsBodyCompression(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new BodyCompression()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		/**
		* Compressor library.
		* For LZ4_FRAME, each compressed buffer must consist of a single frame.
		*/
		codec() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt8(this.bb_pos + offset) : compression_type_js_1.CompressionType.LZ4_FRAME;
		}
		/**
		* Indicates the way the record batch body was compressed
		*/
		method() {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.readInt8(this.bb_pos + offset) : body_compression_method_js_1.BodyCompressionMethod.BUFFER;
		}
		static startBodyCompression(builder) {
			builder.startObject(2);
		}
		static addCodec(builder, codec) {
			builder.addFieldInt8(0, codec, compression_type_js_1.CompressionType.LZ4_FRAME);
		}
		static addMethod(builder, method) {
			builder.addFieldInt8(1, method, body_compression_method_js_1.BodyCompressionMethod.BUFFER);
		}
		static endBodyCompression(builder) {
			return builder.endObject();
		}
		static createBodyCompression(builder, codec, method) {
			BodyCompression.startBodyCompression(builder);
			BodyCompression.addCodec(builder, codec);
			BodyCompression.addMethod(builder, method);
			return BodyCompression.endBodyCompression(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/buffer.js
var require_buffer$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Buffer = void 0;
	/**
	* ----------------------------------------------------------------------
	* A Buffer represents a single contiguous memory segment
	*/
	var Buffer = class {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		/**
		* The relative offset into the shared memory page where the bytes for this
		* buffer starts
		*/
		offset() {
			return this.bb.readInt64(this.bb_pos);
		}
		/**
		* The absolute length (in bytes) of the memory buffer. The memory is found
		* from offset (inclusive) to offset + length (non-inclusive). When building
		* messages using the encapsulated IPC message, padding bytes may be written
		* after a buffer, but such padding bytes do not need to be accounted for in
		* the size here.
		*/
		length() {
			return this.bb.readInt64(this.bb_pos + 8);
		}
		static sizeOf() {
			return 16;
		}
		static createBuffer(builder, offset, length) {
			builder.prep(8, 16);
			builder.writeInt64(BigInt(length !== null && length !== void 0 ? length : 0));
			builder.writeInt64(BigInt(offset !== null && offset !== void 0 ? offset : 0));
			return builder.offset();
		}
	};
	exports.Buffer = Buffer;
}));
//#endregion
//#region node_modules/apache-arrow/fb/field-node.js
var require_field_node = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FieldNode = void 0;
	/**
	* ----------------------------------------------------------------------
	* Data structures for describing a table row batch (a collection of
	* equal-length Arrow arrays)
	* Metadata about a field at some level of a nested type tree (but not
	* its children).
	*
	* For example, a List<Int16> with values `[[1, 2, 3], null, [4], [5, 6], null]`
	* would have {length: 5, null_count: 2} for its List node, and {length: 6,
	* null_count: 0} for its Int16 node, as separate FieldNode structs
	*/
	var FieldNode = class {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		/**
		* The number of value slots in the Arrow array at this level of a nested
		* tree
		*/
		length() {
			return this.bb.readInt64(this.bb_pos);
		}
		/**
		* The number of observed nulls. Fields with null_count == 0 may choose not
		* to write their physical validity bitmap out as a materialized buffer,
		* instead setting the length of the bitmap buffer to 0.
		*/
		nullCount() {
			return this.bb.readInt64(this.bb_pos + 8);
		}
		static sizeOf() {
			return 16;
		}
		static createFieldNode(builder, length, null_count) {
			builder.prep(8, 16);
			builder.writeInt64(BigInt(null_count !== null && null_count !== void 0 ? null_count : 0));
			builder.writeInt64(BigInt(length !== null && length !== void 0 ? length : 0));
			return builder.offset();
		}
	};
	exports.FieldNode = FieldNode;
}));
//#endregion
//#region node_modules/apache-arrow/fb/record-batch.js
var require_record_batch = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RecordBatch = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var body_compression_js_1 = require_body_compression();
	var buffer_js_1 = require_buffer$1();
	var field_node_js_1 = require_field_node();
	exports.RecordBatch = class RecordBatch {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsRecordBatch(bb, obj) {
			return (obj || new RecordBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsRecordBatch(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new RecordBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		/**
		* number of records / rows. The arrays in the batch should all have this
		* length
		*/
		length() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt64(this.bb_pos + offset) : BigInt("0");
		}
		/**
		* Nodes correspond to the pre-ordered flattened logical schema
		*/
		nodes(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? (obj || new field_node_js_1.FieldNode()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
		}
		nodesLength() {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		/**
		* Buffers correspond to the pre-ordered flattened buffer tree
		*
		* The number of buffers appended to this list depends on the schema. For
		* example, most primitive arrays will have 2 buffers, 1 for the validity
		* bitmap and 1 for the values. For struct arrays, there will only be a
		* single buffer for the validity (nulls) bitmap
		*/
		buffers(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? (obj || new buffer_js_1.Buffer()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
		}
		buffersLength() {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		/**
		* Optional compression of the message body
		*/
		compression(obj) {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? (obj || new body_compression_js_1.BodyCompression()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
		}
		static startRecordBatch(builder) {
			builder.startObject(4);
		}
		static addLength(builder, length) {
			builder.addFieldInt64(0, length, BigInt("0"));
		}
		static addNodes(builder, nodesOffset) {
			builder.addFieldOffset(1, nodesOffset, 0);
		}
		static startNodesVector(builder, numElems) {
			builder.startVector(16, numElems, 8);
		}
		static addBuffers(builder, buffersOffset) {
			builder.addFieldOffset(2, buffersOffset, 0);
		}
		static startBuffersVector(builder, numElems) {
			builder.startVector(16, numElems, 8);
		}
		static addCompression(builder, compressionOffset) {
			builder.addFieldOffset(3, compressionOffset, 0);
		}
		static endRecordBatch(builder) {
			return builder.endObject();
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/dictionary-batch.js
var require_dictionary_batch = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DictionaryBatch = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var record_batch_js_1 = require_record_batch();
	exports.DictionaryBatch = class DictionaryBatch {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsDictionaryBatch(bb, obj) {
			return (obj || new DictionaryBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsDictionaryBatch(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new DictionaryBatch()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		id() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt64(this.bb_pos + offset) : BigInt("0");
		}
		data(obj) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? (obj || new record_batch_js_1.RecordBatch()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
		}
		/**
		* If isDelta is true the values in the dictionary are to be appended to a
		* dictionary with the indicated id. If isDelta is false this dictionary
		* should replace the existing dictionary.
		*/
		isDelta() {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
		}
		static startDictionaryBatch(builder) {
			builder.startObject(3);
		}
		static addId(builder, id) {
			builder.addFieldInt64(0, id, BigInt("0"));
		}
		static addData(builder, dataOffset) {
			builder.addFieldOffset(1, dataOffset, 0);
		}
		static addIsDelta(builder, isDelta) {
			builder.addFieldInt8(2, +isDelta, 0);
		}
		static endDictionaryBatch(builder) {
			return builder.endObject();
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/endianness.js
var require_endianness = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Endianness = void 0;
	/**
	* ----------------------------------------------------------------------
	* Endianness of the platform producing the data
	*/
	var Endianness;
	(function(Endianness) {
		Endianness[Endianness["Little"] = 0] = "Little";
		Endianness[Endianness["Big"] = 1] = "Big";
	})(Endianness || (exports.Endianness = Endianness = {}));
}));
//#endregion
//#region node_modules/apache-arrow/fb/dictionary-kind.js
var require_dictionary_kind = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DictionaryKind = void 0;
	/**
	* ----------------------------------------------------------------------
	* Dictionary encoding metadata
	* Maintained for forwards compatibility, in the future
	* Dictionaries might be explicit maps between integers and values
	* allowing for non-contiguous index values
	*/
	var DictionaryKind;
	(function(DictionaryKind) {
		DictionaryKind[DictionaryKind["DenseArray"] = 0] = "DenseArray";
	})(DictionaryKind || (exports.DictionaryKind = DictionaryKind = {}));
}));
//#endregion
//#region node_modules/apache-arrow/fb/int.js
var require_int$2 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Int = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.Int = class Int {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsInt(bb, obj) {
			return (obj || new Int()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsInt(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Int()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		bitWidth() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
		}
		isSigned() {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
		}
		static startInt(builder) {
			builder.startObject(2);
		}
		static addBitWidth(builder, bitWidth) {
			builder.addFieldInt32(0, bitWidth, 0);
		}
		static addIsSigned(builder, isSigned) {
			builder.addFieldInt8(1, +isSigned, 0);
		}
		static endInt(builder) {
			return builder.endObject();
		}
		static createInt(builder, bitWidth, isSigned) {
			Int.startInt(builder);
			Int.addBitWidth(builder, bitWidth);
			Int.addIsSigned(builder, isSigned);
			return Int.endInt(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/dictionary-encoding.js
var require_dictionary_encoding = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DictionaryEncoding = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var dictionary_kind_js_1 = require_dictionary_kind();
	var int_js_1 = require_int$2();
	exports.DictionaryEncoding = class DictionaryEncoding {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsDictionaryEncoding(bb, obj) {
			return (obj || new DictionaryEncoding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsDictionaryEncoding(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new DictionaryEncoding()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		/**
		* The known dictionary id in the application where this data is used. In
		* the file or streaming formats, the dictionary ids are found in the
		* DictionaryBatch messages
		*/
		id() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt64(this.bb_pos + offset) : BigInt("0");
		}
		/**
		* The dictionary indices are constrained to be non-negative integers. If
		* this field is null, the indices must be signed int32. To maximize
		* cross-language compatibility and performance, implementations are
		* recommended to prefer signed integer types over unsigned integer types
		* and to avoid uint64 indices unless they are required by an application.
		*/
		indexType(obj) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? (obj || new int_js_1.Int()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
		}
		/**
		* By default, dictionaries are not ordered, or the order does not have
		* semantic meaning. In some statistical, applications, dictionary-encoding
		* is used to represent ordered categorical data, and we provide a way to
		* preserve that metadata here
		*/
		isOrdered() {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
		}
		dictionaryKind() {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? this.bb.readInt16(this.bb_pos + offset) : dictionary_kind_js_1.DictionaryKind.DenseArray;
		}
		static startDictionaryEncoding(builder) {
			builder.startObject(4);
		}
		static addId(builder, id) {
			builder.addFieldInt64(0, id, BigInt("0"));
		}
		static addIndexType(builder, indexTypeOffset) {
			builder.addFieldOffset(1, indexTypeOffset, 0);
		}
		static addIsOrdered(builder, isOrdered) {
			builder.addFieldInt8(2, +isOrdered, 0);
		}
		static addDictionaryKind(builder, dictionaryKind) {
			builder.addFieldInt16(3, dictionaryKind, dictionary_kind_js_1.DictionaryKind.DenseArray);
		}
		static endDictionaryEncoding(builder) {
			return builder.endObject();
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/key-value.js
var require_key_value = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.KeyValue = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.KeyValue = class KeyValue {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsKeyValue(bb, obj) {
			return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsKeyValue(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new KeyValue()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		key(optionalEncoding) {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
		}
		value(optionalEncoding) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
		}
		static startKeyValue(builder) {
			builder.startObject(2);
		}
		static addKey(builder, keyOffset) {
			builder.addFieldOffset(0, keyOffset, 0);
		}
		static addValue(builder, valueOffset) {
			builder.addFieldOffset(1, valueOffset, 0);
		}
		static endKeyValue(builder) {
			return builder.endObject();
		}
		static createKeyValue(builder, keyOffset, valueOffset) {
			KeyValue.startKeyValue(builder);
			KeyValue.addKey(builder, keyOffset);
			KeyValue.addValue(builder, valueOffset);
			return KeyValue.endKeyValue(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/binary.js
var require_binary$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Binary = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.Binary = class Binary {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsBinary(bb, obj) {
			return (obj || new Binary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsBinary(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Binary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static startBinary(builder) {
			builder.startObject(0);
		}
		static endBinary(builder) {
			return builder.endObject();
		}
		static createBinary(builder) {
			Binary.startBinary(builder);
			return Binary.endBinary(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/bool.js
var require_bool$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Bool = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.Bool = class Bool {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsBool(bb, obj) {
			return (obj || new Bool()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsBool(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Bool()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static startBool(builder) {
			builder.startObject(0);
		}
		static endBool(builder) {
			return builder.endObject();
		}
		static createBool(builder) {
			Bool.startBool(builder);
			return Bool.endBool(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/date.js
var require_date$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Date = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var date_unit_js_1 = require_date_unit();
	exports.Date = class Date {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsDate(bb, obj) {
			return (obj || new Date()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsDate(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Date()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		unit() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt16(this.bb_pos + offset) : date_unit_js_1.DateUnit.MILLISECOND;
		}
		static startDate(builder) {
			builder.startObject(1);
		}
		static addUnit(builder, unit) {
			builder.addFieldInt16(0, unit, date_unit_js_1.DateUnit.MILLISECOND);
		}
		static endDate(builder) {
			return builder.endObject();
		}
		static createDate(builder, unit) {
			Date.startDate(builder);
			Date.addUnit(builder, unit);
			return Date.endDate(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/decimal.js
var require_decimal$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Decimal = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.Decimal = class Decimal {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsDecimal(bb, obj) {
			return (obj || new Decimal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsDecimal(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Decimal()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		/**
		* Total number of decimal digits
		*/
		precision() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
		}
		/**
		* Number of digits after the decimal point "."
		*/
		scale() {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
		}
		/**
		* Number of bits per value. The only accepted widths are 128 and 256.
		* We use bitWidth for consistency with Int::bitWidth.
		*/
		bitWidth() {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? this.bb.readInt32(this.bb_pos + offset) : 128;
		}
		static startDecimal(builder) {
			builder.startObject(3);
		}
		static addPrecision(builder, precision) {
			builder.addFieldInt32(0, precision, 0);
		}
		static addScale(builder, scale) {
			builder.addFieldInt32(1, scale, 0);
		}
		static addBitWidth(builder, bitWidth) {
			builder.addFieldInt32(2, bitWidth, 128);
		}
		static endDecimal(builder) {
			return builder.endObject();
		}
		static createDecimal(builder, precision, scale, bitWidth) {
			Decimal.startDecimal(builder);
			Decimal.addPrecision(builder, precision);
			Decimal.addScale(builder, scale);
			Decimal.addBitWidth(builder, bitWidth);
			return Decimal.endDecimal(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/duration.js
var require_duration$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Duration = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var time_unit_js_1 = require_time_unit();
	exports.Duration = class Duration {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsDuration(bb, obj) {
			return (obj || new Duration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsDuration(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Duration()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		unit() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt16(this.bb_pos + offset) : time_unit_js_1.TimeUnit.MILLISECOND;
		}
		static startDuration(builder) {
			builder.startObject(1);
		}
		static addUnit(builder, unit) {
			builder.addFieldInt16(0, unit, time_unit_js_1.TimeUnit.MILLISECOND);
		}
		static endDuration(builder) {
			return builder.endObject();
		}
		static createDuration(builder, unit) {
			Duration.startDuration(builder);
			Duration.addUnit(builder, unit);
			return Duration.endDuration(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/fixed-size-binary.js
var require_fixed_size_binary = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FixedSizeBinary = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.FixedSizeBinary = class FixedSizeBinary {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsFixedSizeBinary(bb, obj) {
			return (obj || new FixedSizeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsFixedSizeBinary(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new FixedSizeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		/**
		* Number of bytes per value
		*/
		byteWidth() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
		}
		static startFixedSizeBinary(builder) {
			builder.startObject(1);
		}
		static addByteWidth(builder, byteWidth) {
			builder.addFieldInt32(0, byteWidth, 0);
		}
		static endFixedSizeBinary(builder) {
			return builder.endObject();
		}
		static createFixedSizeBinary(builder, byteWidth) {
			FixedSizeBinary.startFixedSizeBinary(builder);
			FixedSizeBinary.addByteWidth(builder, byteWidth);
			return FixedSizeBinary.endFixedSizeBinary(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/fixed-size-list.js
var require_fixed_size_list = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FixedSizeList = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.FixedSizeList = class FixedSizeList {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsFixedSizeList(bb, obj) {
			return (obj || new FixedSizeList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsFixedSizeList(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new FixedSizeList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		/**
		* Number of list items per value
		*/
		listSize() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt32(this.bb_pos + offset) : 0;
		}
		static startFixedSizeList(builder) {
			builder.startObject(1);
		}
		static addListSize(builder, listSize) {
			builder.addFieldInt32(0, listSize, 0);
		}
		static endFixedSizeList(builder) {
			return builder.endObject();
		}
		static createFixedSizeList(builder, listSize) {
			FixedSizeList.startFixedSizeList(builder);
			FixedSizeList.addListSize(builder, listSize);
			return FixedSizeList.endFixedSizeList(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/floating-point.js
var require_floating_point = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FloatingPoint = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var precision_js_1 = require_precision();
	exports.FloatingPoint = class FloatingPoint {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsFloatingPoint(bb, obj) {
			return (obj || new FloatingPoint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsFloatingPoint(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new FloatingPoint()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		precision() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt16(this.bb_pos + offset) : precision_js_1.Precision.HALF;
		}
		static startFloatingPoint(builder) {
			builder.startObject(1);
		}
		static addPrecision(builder, precision) {
			builder.addFieldInt16(0, precision, precision_js_1.Precision.HALF);
		}
		static endFloatingPoint(builder) {
			return builder.endObject();
		}
		static createFloatingPoint(builder, precision) {
			FloatingPoint.startFloatingPoint(builder);
			FloatingPoint.addPrecision(builder, precision);
			return FloatingPoint.endFloatingPoint(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/interval.js
var require_interval$2 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Interval = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var interval_unit_js_1 = require_interval_unit();
	exports.Interval = class Interval {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsInterval(bb, obj) {
			return (obj || new Interval()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsInterval(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Interval()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		unit() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt16(this.bb_pos + offset) : interval_unit_js_1.IntervalUnit.YEAR_MONTH;
		}
		static startInterval(builder) {
			builder.startObject(1);
		}
		static addUnit(builder, unit) {
			builder.addFieldInt16(0, unit, interval_unit_js_1.IntervalUnit.YEAR_MONTH);
		}
		static endInterval(builder) {
			return builder.endObject();
		}
		static createInterval(builder, unit) {
			Interval.startInterval(builder);
			Interval.addUnit(builder, unit);
			return Interval.endInterval(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/large-binary.js
var require_large_binary = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LargeBinary = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.LargeBinary = class LargeBinary {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsLargeBinary(bb, obj) {
			return (obj || new LargeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsLargeBinary(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new LargeBinary()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static startLargeBinary(builder) {
			builder.startObject(0);
		}
		static endLargeBinary(builder) {
			return builder.endObject();
		}
		static createLargeBinary(builder) {
			LargeBinary.startLargeBinary(builder);
			return LargeBinary.endLargeBinary(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/large-list.js
var require_large_list = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LargeList = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.LargeList = class LargeList {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsLargeList(bb, obj) {
			return (obj || new LargeList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsLargeList(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new LargeList()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static startLargeList(builder) {
			builder.startObject(0);
		}
		static endLargeList(builder) {
			return builder.endObject();
		}
		static createLargeList(builder) {
			LargeList.startLargeList(builder);
			return LargeList.endLargeList(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/large-utf8.js
var require_large_utf8 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LargeUtf8 = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.LargeUtf8 = class LargeUtf8 {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsLargeUtf8(bb, obj) {
			return (obj || new LargeUtf8()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsLargeUtf8(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new LargeUtf8()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static startLargeUtf8(builder) {
			builder.startObject(0);
		}
		static endLargeUtf8(builder) {
			return builder.endObject();
		}
		static createLargeUtf8(builder) {
			LargeUtf8.startLargeUtf8(builder);
			return LargeUtf8.endLargeUtf8(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/list.js
var require_list$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.List = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.List = class List {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsList(bb, obj) {
			return (obj || new List()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsList(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new List()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static startList(builder) {
			builder.startObject(0);
		}
		static endList(builder) {
			return builder.endObject();
		}
		static createList(builder) {
			List.startList(builder);
			return List.endList(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/map.js
var require_map$2 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Map = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.Map = class Map {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsMap(bb, obj) {
			return (obj || new Map()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsMap(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Map()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		/**
		* Set to true if the keys within each value are sorted
		*/
		keysSorted() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
		}
		static startMap(builder) {
			builder.startObject(1);
		}
		static addKeysSorted(builder, keysSorted) {
			builder.addFieldInt8(0, +keysSorted, 0);
		}
		static endMap(builder) {
			return builder.endObject();
		}
		static createMap(builder, keysSorted) {
			Map.startMap(builder);
			Map.addKeysSorted(builder, keysSorted);
			return Map.endMap(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/null.js
var require_null$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Null = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.Null = class Null {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsNull(bb, obj) {
			return (obj || new Null()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsNull(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Null()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static startNull(builder) {
			builder.startObject(0);
		}
		static endNull(builder) {
			return builder.endObject();
		}
		static createNull(builder) {
			Null.startNull(builder);
			return Null.endNull(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/run-end-encoded.js
var require_run_end_encoded = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RunEndEncoded = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.RunEndEncoded = class RunEndEncoded {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsRunEndEncoded(bb, obj) {
			return (obj || new RunEndEncoded()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsRunEndEncoded(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new RunEndEncoded()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static startRunEndEncoded(builder) {
			builder.startObject(0);
		}
		static endRunEndEncoded(builder) {
			return builder.endObject();
		}
		static createRunEndEncoded(builder) {
			RunEndEncoded.startRunEndEncoded(builder);
			return RunEndEncoded.endRunEndEncoded(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/struct-.js
var require_struct_ = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Struct_ = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.Struct_ = class Struct_ {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsStruct_(bb, obj) {
			return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsStruct_(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Struct_()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static startStruct_(builder) {
			builder.startObject(0);
		}
		static endStruct_(builder) {
			return builder.endObject();
		}
		static createStruct_(builder) {
			Struct_.startStruct_(builder);
			return Struct_.endStruct_(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/time.js
var require_time$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Time = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var time_unit_js_1 = require_time_unit();
	exports.Time = class Time {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsTime(bb, obj) {
			return (obj || new Time()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsTime(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Time()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		unit() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt16(this.bb_pos + offset) : time_unit_js_1.TimeUnit.MILLISECOND;
		}
		bitWidth() {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.readInt32(this.bb_pos + offset) : 32;
		}
		static startTime(builder) {
			builder.startObject(2);
		}
		static addUnit(builder, unit) {
			builder.addFieldInt16(0, unit, time_unit_js_1.TimeUnit.MILLISECOND);
		}
		static addBitWidth(builder, bitWidth) {
			builder.addFieldInt32(1, bitWidth, 32);
		}
		static endTime(builder) {
			return builder.endObject();
		}
		static createTime(builder, unit, bitWidth) {
			Time.startTime(builder);
			Time.addUnit(builder, unit);
			Time.addBitWidth(builder, bitWidth);
			return Time.endTime(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/timestamp.js
var require_timestamp$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Timestamp = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var time_unit_js_1 = require_time_unit();
	exports.Timestamp = class Timestamp {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsTimestamp(bb, obj) {
			return (obj || new Timestamp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsTimestamp(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Timestamp()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		unit() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt16(this.bb_pos + offset) : time_unit_js_1.TimeUnit.SECOND;
		}
		timezone(optionalEncoding) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
		}
		static startTimestamp(builder) {
			builder.startObject(2);
		}
		static addUnit(builder, unit) {
			builder.addFieldInt16(0, unit, time_unit_js_1.TimeUnit.SECOND);
		}
		static addTimezone(builder, timezoneOffset) {
			builder.addFieldOffset(1, timezoneOffset, 0);
		}
		static endTimestamp(builder) {
			return builder.endObject();
		}
		static createTimestamp(builder, unit, timezoneOffset) {
			Timestamp.startTimestamp(builder);
			Timestamp.addUnit(builder, unit);
			Timestamp.addTimezone(builder, timezoneOffset);
			return Timestamp.endTimestamp(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/union.js
var require_union$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Union = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var union_mode_js_1 = require_union_mode();
	exports.Union = class Union {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsUnion(bb, obj) {
			return (obj || new Union()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsUnion(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Union()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		mode() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt16(this.bb_pos + offset) : union_mode_js_1.UnionMode.Sparse;
		}
		typeIds(index) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
		}
		typeIdsLength() {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		typeIdsArray() {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
		}
		static startUnion(builder) {
			builder.startObject(2);
		}
		static addMode(builder, mode) {
			builder.addFieldInt16(0, mode, union_mode_js_1.UnionMode.Sparse);
		}
		static addTypeIds(builder, typeIdsOffset) {
			builder.addFieldOffset(1, typeIdsOffset, 0);
		}
		static createTypeIdsVector(builder, data) {
			builder.startVector(4, data.length, 4);
			for (let i = data.length - 1; i >= 0; i--) builder.addInt32(data[i]);
			return builder.endVector();
		}
		static startTypeIdsVector(builder, numElems) {
			builder.startVector(4, numElems, 4);
		}
		static endUnion(builder) {
			return builder.endObject();
		}
		static createUnion(builder, mode, typeIdsOffset) {
			Union.startUnion(builder);
			Union.addMode(builder, mode);
			Union.addTypeIds(builder, typeIdsOffset);
			return Union.endUnion(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/utf8.js
var require_utf8$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Utf8 = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.Utf8 = class Utf8 {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsUtf8(bb, obj) {
			return (obj || new Utf8()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsUtf8(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Utf8()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static startUtf8(builder) {
			builder.startObject(0);
		}
		static endUtf8(builder) {
			return builder.endObject();
		}
		static createUtf8(builder) {
			Utf8.startUtf8(builder);
			return Utf8.endUtf8(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/type.js
var require_type$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.unionListToType = exports.unionToType = exports.Type = void 0;
	var binary_js_1 = require_binary$1();
	var bool_js_1 = require_bool$1();
	var date_js_1 = require_date$1();
	var decimal_js_1 = require_decimal$1();
	var duration_js_1 = require_duration$1();
	var fixed_size_binary_js_1 = require_fixed_size_binary();
	var fixed_size_list_js_1 = require_fixed_size_list();
	var floating_point_js_1 = require_floating_point();
	var int_js_1 = require_int$2();
	var interval_js_1 = require_interval$2();
	var large_binary_js_1 = require_large_binary();
	var large_list_js_1 = require_large_list();
	var large_utf8_js_1 = require_large_utf8();
	var list_js_1 = require_list$1();
	var map_js_1 = require_map$2();
	var null_js_1 = require_null$1();
	var run_end_encoded_js_1 = require_run_end_encoded();
	var struct__js_1 = require_struct_();
	var time_js_1 = require_time$1();
	var timestamp_js_1 = require_timestamp$1();
	var union_js_1 = require_union$1();
	var utf8_js_1 = require_utf8$1();
	/**
	* ----------------------------------------------------------------------
	* Top-level Type value, enabling extensible type-specific metadata. We can
	* add new logical types to Type without breaking backwards compatibility
	*/
	var Type;
	(function(Type) {
		Type[Type["NONE"] = 0] = "NONE";
		Type[Type["Null"] = 1] = "Null";
		Type[Type["Int"] = 2] = "Int";
		Type[Type["FloatingPoint"] = 3] = "FloatingPoint";
		Type[Type["Binary"] = 4] = "Binary";
		Type[Type["Utf8"] = 5] = "Utf8";
		Type[Type["Bool"] = 6] = "Bool";
		Type[Type["Decimal"] = 7] = "Decimal";
		Type[Type["Date"] = 8] = "Date";
		Type[Type["Time"] = 9] = "Time";
		Type[Type["Timestamp"] = 10] = "Timestamp";
		Type[Type["Interval"] = 11] = "Interval";
		Type[Type["List"] = 12] = "List";
		Type[Type["Struct_"] = 13] = "Struct_";
		Type[Type["Union"] = 14] = "Union";
		Type[Type["FixedSizeBinary"] = 15] = "FixedSizeBinary";
		Type[Type["FixedSizeList"] = 16] = "FixedSizeList";
		Type[Type["Map"] = 17] = "Map";
		Type[Type["Duration"] = 18] = "Duration";
		Type[Type["LargeBinary"] = 19] = "LargeBinary";
		Type[Type["LargeUtf8"] = 20] = "LargeUtf8";
		Type[Type["LargeList"] = 21] = "LargeList";
		Type[Type["RunEndEncoded"] = 22] = "RunEndEncoded";
	})(Type || (exports.Type = Type = {}));
	function unionToType(type, accessor) {
		switch (Type[type]) {
			case "NONE": return null;
			case "Null": return accessor(new null_js_1.Null());
			case "Int": return accessor(new int_js_1.Int());
			case "FloatingPoint": return accessor(new floating_point_js_1.FloatingPoint());
			case "Binary": return accessor(new binary_js_1.Binary());
			case "Utf8": return accessor(new utf8_js_1.Utf8());
			case "Bool": return accessor(new bool_js_1.Bool());
			case "Decimal": return accessor(new decimal_js_1.Decimal());
			case "Date": return accessor(new date_js_1.Date());
			case "Time": return accessor(new time_js_1.Time());
			case "Timestamp": return accessor(new timestamp_js_1.Timestamp());
			case "Interval": return accessor(new interval_js_1.Interval());
			case "List": return accessor(new list_js_1.List());
			case "Struct_": return accessor(new struct__js_1.Struct_());
			case "Union": return accessor(new union_js_1.Union());
			case "FixedSizeBinary": return accessor(new fixed_size_binary_js_1.FixedSizeBinary());
			case "FixedSizeList": return accessor(new fixed_size_list_js_1.FixedSizeList());
			case "Map": return accessor(new map_js_1.Map());
			case "Duration": return accessor(new duration_js_1.Duration());
			case "LargeBinary": return accessor(new large_binary_js_1.LargeBinary());
			case "LargeUtf8": return accessor(new large_utf8_js_1.LargeUtf8());
			case "LargeList": return accessor(new large_list_js_1.LargeList());
			case "RunEndEncoded": return accessor(new run_end_encoded_js_1.RunEndEncoded());
			default: return null;
		}
	}
	exports.unionToType = unionToType;
	function unionListToType(type, accessor, index) {
		switch (Type[type]) {
			case "NONE": return null;
			case "Null": return accessor(index, new null_js_1.Null());
			case "Int": return accessor(index, new int_js_1.Int());
			case "FloatingPoint": return accessor(index, new floating_point_js_1.FloatingPoint());
			case "Binary": return accessor(index, new binary_js_1.Binary());
			case "Utf8": return accessor(index, new utf8_js_1.Utf8());
			case "Bool": return accessor(index, new bool_js_1.Bool());
			case "Decimal": return accessor(index, new decimal_js_1.Decimal());
			case "Date": return accessor(index, new date_js_1.Date());
			case "Time": return accessor(index, new time_js_1.Time());
			case "Timestamp": return accessor(index, new timestamp_js_1.Timestamp());
			case "Interval": return accessor(index, new interval_js_1.Interval());
			case "List": return accessor(index, new list_js_1.List());
			case "Struct_": return accessor(index, new struct__js_1.Struct_());
			case "Union": return accessor(index, new union_js_1.Union());
			case "FixedSizeBinary": return accessor(index, new fixed_size_binary_js_1.FixedSizeBinary());
			case "FixedSizeList": return accessor(index, new fixed_size_list_js_1.FixedSizeList());
			case "Map": return accessor(index, new map_js_1.Map());
			case "Duration": return accessor(index, new duration_js_1.Duration());
			case "LargeBinary": return accessor(index, new large_binary_js_1.LargeBinary());
			case "LargeUtf8": return accessor(index, new large_utf8_js_1.LargeUtf8());
			case "LargeList": return accessor(index, new large_list_js_1.LargeList());
			case "RunEndEncoded": return accessor(index, new run_end_encoded_js_1.RunEndEncoded());
			default: return null;
		}
	}
	exports.unionListToType = unionListToType;
}));
//#endregion
//#region node_modules/apache-arrow/fb/field.js
var require_field = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Field = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var dictionary_encoding_js_1 = require_dictionary_encoding();
	var key_value_js_1 = require_key_value();
	var type_js_1 = require_type$1();
	exports.Field = class Field {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsField(bb, obj) {
			return (obj || new Field()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsField(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Field()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		name(optionalEncoding) {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
		}
		/**
		* Whether or not this field can contain nulls. Should be true in general.
		*/
		nullable() {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
		}
		typeType() {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? this.bb.readUint8(this.bb_pos + offset) : type_js_1.Type.NONE;
		}
		/**
		* This is the type of the decoded value if the field is dictionary encoded.
		*/
		type(obj) {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
		}
		/**
		* Present only if the field is dictionary encoded.
		*/
		dictionary(obj) {
			const offset = this.bb.__offset(this.bb_pos, 12);
			return offset ? (obj || new dictionary_encoding_js_1.DictionaryEncoding()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
		}
		/**
		* children apply only to nested data types like Struct, List and Union. For
		* primitive types children will have length 0.
		*/
		children(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 14);
			return offset ? (obj || new Field()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
		}
		childrenLength() {
			const offset = this.bb.__offset(this.bb_pos, 14);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		/**
		* User-defined metadata
		*/
		customMetadata(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 16);
			return offset ? (obj || new key_value_js_1.KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
		}
		customMetadataLength() {
			const offset = this.bb.__offset(this.bb_pos, 16);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		static startField(builder) {
			builder.startObject(7);
		}
		static addName(builder, nameOffset) {
			builder.addFieldOffset(0, nameOffset, 0);
		}
		static addNullable(builder, nullable) {
			builder.addFieldInt8(1, +nullable, 0);
		}
		static addTypeType(builder, typeType) {
			builder.addFieldInt8(2, typeType, type_js_1.Type.NONE);
		}
		static addType(builder, typeOffset) {
			builder.addFieldOffset(3, typeOffset, 0);
		}
		static addDictionary(builder, dictionaryOffset) {
			builder.addFieldOffset(4, dictionaryOffset, 0);
		}
		static addChildren(builder, childrenOffset) {
			builder.addFieldOffset(5, childrenOffset, 0);
		}
		static createChildrenVector(builder, data) {
			builder.startVector(4, data.length, 4);
			for (let i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
			return builder.endVector();
		}
		static startChildrenVector(builder, numElems) {
			builder.startVector(4, numElems, 4);
		}
		static addCustomMetadata(builder, customMetadataOffset) {
			builder.addFieldOffset(6, customMetadataOffset, 0);
		}
		static createCustomMetadataVector(builder, data) {
			builder.startVector(4, data.length, 4);
			for (let i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
			return builder.endVector();
		}
		static startCustomMetadataVector(builder, numElems) {
			builder.startVector(4, numElems, 4);
		}
		static endField(builder) {
			return builder.endObject();
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/schema.js
var require_schema$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Schema = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var endianness_js_1 = require_endianness();
	var field_js_1 = require_field();
	var key_value_js_1 = require_key_value();
	exports.Schema = class Schema {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsSchema(bb, obj) {
			return (obj || new Schema()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsSchema(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Schema()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		/**
		* endianness of the buffer
		* it is Little Endian by default
		* if endianness doesn't match the underlying system then the vectors need to be converted
		*/
		endianness() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt16(this.bb_pos + offset) : endianness_js_1.Endianness.Little;
		}
		fields(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? (obj || new field_js_1.Field()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
		}
		fieldsLength() {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		customMetadata(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? (obj || new key_value_js_1.KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
		}
		customMetadataLength() {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		/**
		* Features used in the stream/file.
		*/
		features(index) {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? this.bb.readInt64(this.bb.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
		}
		featuresLength() {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		static startSchema(builder) {
			builder.startObject(4);
		}
		static addEndianness(builder, endianness) {
			builder.addFieldInt16(0, endianness, endianness_js_1.Endianness.Little);
		}
		static addFields(builder, fieldsOffset) {
			builder.addFieldOffset(1, fieldsOffset, 0);
		}
		static createFieldsVector(builder, data) {
			builder.startVector(4, data.length, 4);
			for (let i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
			return builder.endVector();
		}
		static startFieldsVector(builder, numElems) {
			builder.startVector(4, numElems, 4);
		}
		static addCustomMetadata(builder, customMetadataOffset) {
			builder.addFieldOffset(2, customMetadataOffset, 0);
		}
		static createCustomMetadataVector(builder, data) {
			builder.startVector(4, data.length, 4);
			for (let i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
			return builder.endVector();
		}
		static startCustomMetadataVector(builder, numElems) {
			builder.startVector(4, numElems, 4);
		}
		static addFeatures(builder, featuresOffset) {
			builder.addFieldOffset(3, featuresOffset, 0);
		}
		static createFeaturesVector(builder, data) {
			builder.startVector(8, data.length, 8);
			for (let i = data.length - 1; i >= 0; i--) builder.addInt64(data[i]);
			return builder.endVector();
		}
		static startFeaturesVector(builder, numElems) {
			builder.startVector(8, numElems, 8);
		}
		static endSchema(builder) {
			return builder.endObject();
		}
		static finishSchemaBuffer(builder, offset) {
			builder.finish(offset);
		}
		static finishSizePrefixedSchemaBuffer(builder, offset) {
			builder.finish(offset, void 0, true);
		}
		static createSchema(builder, endianness, fieldsOffset, customMetadataOffset, featuresOffset) {
			Schema.startSchema(builder);
			Schema.addEndianness(builder, endianness);
			Schema.addFields(builder, fieldsOffset);
			Schema.addCustomMetadata(builder, customMetadataOffset);
			Schema.addFeatures(builder, featuresOffset);
			return Schema.endSchema(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/sparse-matrix-compressed-axis.js
var require_sparse_matrix_compressed_axis = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SparseMatrixCompressedAxis = void 0;
	var SparseMatrixCompressedAxis;
	(function(SparseMatrixCompressedAxis) {
		SparseMatrixCompressedAxis[SparseMatrixCompressedAxis["Row"] = 0] = "Row";
		SparseMatrixCompressedAxis[SparseMatrixCompressedAxis["Column"] = 1] = "Column";
	})(SparseMatrixCompressedAxis || (exports.SparseMatrixCompressedAxis = SparseMatrixCompressedAxis = {}));
}));
//#endregion
//#region node_modules/apache-arrow/fb/sparse-matrix-index-csx.js
var require_sparse_matrix_index_csx = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SparseMatrixIndexCSX = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var buffer_js_1 = require_buffer$1();
	var int_js_1 = require_int$2();
	var sparse_matrix_compressed_axis_js_1 = require_sparse_matrix_compressed_axis();
	exports.SparseMatrixIndexCSX = class SparseMatrixIndexCSX {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsSparseMatrixIndexCSX(bb, obj) {
			return (obj || new SparseMatrixIndexCSX()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsSparseMatrixIndexCSX(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new SparseMatrixIndexCSX()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		/**
		* Which axis, row or column, is compressed
		*/
		compressedAxis() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt16(this.bb_pos + offset) : sparse_matrix_compressed_axis_js_1.SparseMatrixCompressedAxis.Row;
		}
		/**
		* The type of values in indptrBuffer
		*/
		indptrType(obj) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? (obj || new int_js_1.Int()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
		}
		/**
		* indptrBuffer stores the location and size of indptr array that
		* represents the range of the rows.
		* The i-th row spans from `indptr[i]` to `indptr[i+1]` in the data.
		* The length of this array is 1 + (the number of rows), and the type
		* of index value is long.
		*
		* For example, let X be the following 6x4 matrix:
		* ```text
		*   X := [[0, 1, 2, 0],
		*         [0, 0, 3, 0],
		*         [0, 4, 0, 5],
		*         [0, 0, 0, 0],
		*         [6, 0, 7, 8],
		*         [0, 9, 0, 0]].
		* ```
		* The array of non-zero values in X is:
		* ```text
		*   values(X) = [1, 2, 3, 4, 5, 6, 7, 8, 9].
		* ```
		* And the indptr of X is:
		* ```text
		*   indptr(X) = [0, 2, 3, 5, 5, 8, 10].
		* ```
		*/
		indptrBuffer(obj) {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? (obj || new buffer_js_1.Buffer()).__init(this.bb_pos + offset, this.bb) : null;
		}
		/**
		* The type of values in indicesBuffer
		*/
		indicesType(obj) {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? (obj || new int_js_1.Int()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
		}
		/**
		* indicesBuffer stores the location and size of the array that
		* contains the column indices of the corresponding non-zero values.
		* The type of index value is long.
		*
		* For example, the indices of the above X is:
		* ```text
		*   indices(X) = [1, 2, 2, 1, 3, 0, 2, 3, 1].
		* ```
		* Note that the indices are sorted in lexicographical order for each row.
		*/
		indicesBuffer(obj) {
			const offset = this.bb.__offset(this.bb_pos, 12);
			return offset ? (obj || new buffer_js_1.Buffer()).__init(this.bb_pos + offset, this.bb) : null;
		}
		static startSparseMatrixIndexCSX(builder) {
			builder.startObject(5);
		}
		static addCompressedAxis(builder, compressedAxis) {
			builder.addFieldInt16(0, compressedAxis, sparse_matrix_compressed_axis_js_1.SparseMatrixCompressedAxis.Row);
		}
		static addIndptrType(builder, indptrTypeOffset) {
			builder.addFieldOffset(1, indptrTypeOffset, 0);
		}
		static addIndptrBuffer(builder, indptrBufferOffset) {
			builder.addFieldStruct(2, indptrBufferOffset, 0);
		}
		static addIndicesType(builder, indicesTypeOffset) {
			builder.addFieldOffset(3, indicesTypeOffset, 0);
		}
		static addIndicesBuffer(builder, indicesBufferOffset) {
			builder.addFieldStruct(4, indicesBufferOffset, 0);
		}
		static endSparseMatrixIndexCSX(builder) {
			const offset = builder.endObject();
			builder.requiredField(offset, 6);
			builder.requiredField(offset, 8);
			builder.requiredField(offset, 10);
			builder.requiredField(offset, 12);
			return offset;
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/sparse-tensor-index-coo.js
var require_sparse_tensor_index_coo = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SparseTensorIndexCOO = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var buffer_js_1 = require_buffer$1();
	var int_js_1 = require_int$2();
	exports.SparseTensorIndexCOO = class SparseTensorIndexCOO {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsSparseTensorIndexCOO(bb, obj) {
			return (obj || new SparseTensorIndexCOO()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsSparseTensorIndexCOO(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new SparseTensorIndexCOO()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		/**
		* The type of values in indicesBuffer
		*/
		indicesType(obj) {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? (obj || new int_js_1.Int()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
		}
		/**
		* Non-negative byte offsets to advance one value cell along each dimension
		* If omitted, default to row-major order (C-like).
		*/
		indicesStrides(index) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.readInt64(this.bb.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
		}
		indicesStridesLength() {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		/**
		* The location and size of the indices matrix's data
		*/
		indicesBuffer(obj) {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? (obj || new buffer_js_1.Buffer()).__init(this.bb_pos + offset, this.bb) : null;
		}
		/**
		* This flag is true if and only if the indices matrix is sorted in
		* row-major order, and does not have duplicated entries.
		* This sort order is the same as of Tensorflow's SparseTensor,
		* but it is inverse order of SciPy's canonical coo_matrix
		* (SciPy employs column-major order for its coo_matrix).
		*/
		isCanonical() {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? !!this.bb.readInt8(this.bb_pos + offset) : false;
		}
		static startSparseTensorIndexCOO(builder) {
			builder.startObject(4);
		}
		static addIndicesType(builder, indicesTypeOffset) {
			builder.addFieldOffset(0, indicesTypeOffset, 0);
		}
		static addIndicesStrides(builder, indicesStridesOffset) {
			builder.addFieldOffset(1, indicesStridesOffset, 0);
		}
		static createIndicesStridesVector(builder, data) {
			builder.startVector(8, data.length, 8);
			for (let i = data.length - 1; i >= 0; i--) builder.addInt64(data[i]);
			return builder.endVector();
		}
		static startIndicesStridesVector(builder, numElems) {
			builder.startVector(8, numElems, 8);
		}
		static addIndicesBuffer(builder, indicesBufferOffset) {
			builder.addFieldStruct(2, indicesBufferOffset, 0);
		}
		static addIsCanonical(builder, isCanonical) {
			builder.addFieldInt8(3, +isCanonical, 0);
		}
		static endSparseTensorIndexCOO(builder) {
			const offset = builder.endObject();
			builder.requiredField(offset, 4);
			builder.requiredField(offset, 8);
			return offset;
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/sparse-tensor-index-csf.js
var require_sparse_tensor_index_csf = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SparseTensorIndexCSF = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var buffer_js_1 = require_buffer$1();
	var int_js_1 = require_int$2();
	exports.SparseTensorIndexCSF = class SparseTensorIndexCSF {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsSparseTensorIndexCSF(bb, obj) {
			return (obj || new SparseTensorIndexCSF()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsSparseTensorIndexCSF(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new SparseTensorIndexCSF()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		/**
		* CSF is a generalization of compressed sparse row (CSR) index.
		* See [smith2017knl](http://shaden.io/pub-files/smith2017knl.pdf)
		*
		* CSF index recursively compresses each dimension of a tensor into a set
		* of prefix trees. Each path from a root to leaf forms one tensor
		* non-zero index. CSF is implemented with two arrays of buffers and one
		* arrays of integers.
		*
		* For example, let X be a 2x3x4x5 tensor and let it have the following
		* 8 non-zero values:
		* ```text
		*   X[0, 0, 0, 1] := 1
		*   X[0, 0, 0, 2] := 2
		*   X[0, 1, 0, 0] := 3
		*   X[0, 1, 0, 2] := 4
		*   X[0, 1, 1, 0] := 5
		*   X[1, 1, 1, 0] := 6
		*   X[1, 1, 1, 1] := 7
		*   X[1, 1, 1, 2] := 8
		* ```
		* As a prefix tree this would be represented as:
		* ```text
		*         0          1
		*        / \         |
		*       0   1        1
		*      /   / \       |
		*     0   0   1      1
		*    /|  /|   |    /| |
		*   1 2 0 2   0   0 1 2
		* ```
		* The type of values in indptrBuffers
		*/
		indptrType(obj) {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? (obj || new int_js_1.Int()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
		}
		/**
		* indptrBuffers stores the sparsity structure.
		* Each two consecutive dimensions in a tensor correspond to a buffer in
		* indptrBuffers. A pair of consecutive values at `indptrBuffers[dim][i]`
		* and `indptrBuffers[dim][i + 1]` signify a range of nodes in
		* `indicesBuffers[dim + 1]` who are children of `indicesBuffers[dim][i]` node.
		*
		* For example, the indptrBuffers for the above X is:
		* ```text
		*   indptrBuffer(X) = [
		*                       [0, 2, 3],
		*                       [0, 1, 3, 4],
		*                       [0, 2, 4, 5, 8]
		*                     ].
		* ```
		*/
		indptrBuffers(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? (obj || new buffer_js_1.Buffer()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
		}
		indptrBuffersLength() {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		/**
		* The type of values in indicesBuffers
		*/
		indicesType(obj) {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? (obj || new int_js_1.Int()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
		}
		/**
		* indicesBuffers stores values of nodes.
		* Each tensor dimension corresponds to a buffer in indicesBuffers.
		* For example, the indicesBuffers for the above X is:
		* ```text
		*   indicesBuffer(X) = [
		*                        [0, 1],
		*                        [0, 1, 1],
		*                        [0, 0, 1, 1],
		*                        [1, 2, 0, 2, 0, 0, 1, 2]
		*                      ].
		* ```
		*/
		indicesBuffers(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? (obj || new buffer_js_1.Buffer()).__init(this.bb.__vector(this.bb_pos + offset) + index * 16, this.bb) : null;
		}
		indicesBuffersLength() {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		/**
		* axisOrder stores the sequence in which dimensions were traversed to
		* produce the prefix tree.
		* For example, the axisOrder for the above X is:
		* ```text
		*   axisOrder(X) = [0, 1, 2, 3].
		* ```
		*/
		axisOrder(index) {
			const offset = this.bb.__offset(this.bb_pos, 12);
			return offset ? this.bb.readInt32(this.bb.__vector(this.bb_pos + offset) + index * 4) : 0;
		}
		axisOrderLength() {
			const offset = this.bb.__offset(this.bb_pos, 12);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		axisOrderArray() {
			const offset = this.bb.__offset(this.bb_pos, 12);
			return offset ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + offset), this.bb.__vector_len(this.bb_pos + offset)) : null;
		}
		static startSparseTensorIndexCSF(builder) {
			builder.startObject(5);
		}
		static addIndptrType(builder, indptrTypeOffset) {
			builder.addFieldOffset(0, indptrTypeOffset, 0);
		}
		static addIndptrBuffers(builder, indptrBuffersOffset) {
			builder.addFieldOffset(1, indptrBuffersOffset, 0);
		}
		static startIndptrBuffersVector(builder, numElems) {
			builder.startVector(16, numElems, 8);
		}
		static addIndicesType(builder, indicesTypeOffset) {
			builder.addFieldOffset(2, indicesTypeOffset, 0);
		}
		static addIndicesBuffers(builder, indicesBuffersOffset) {
			builder.addFieldOffset(3, indicesBuffersOffset, 0);
		}
		static startIndicesBuffersVector(builder, numElems) {
			builder.startVector(16, numElems, 8);
		}
		static addAxisOrder(builder, axisOrderOffset) {
			builder.addFieldOffset(4, axisOrderOffset, 0);
		}
		static createAxisOrderVector(builder, data) {
			builder.startVector(4, data.length, 4);
			for (let i = data.length - 1; i >= 0; i--) builder.addInt32(data[i]);
			return builder.endVector();
		}
		static startAxisOrderVector(builder, numElems) {
			builder.startVector(4, numElems, 4);
		}
		static endSparseTensorIndexCSF(builder) {
			const offset = builder.endObject();
			builder.requiredField(offset, 4);
			builder.requiredField(offset, 6);
			builder.requiredField(offset, 8);
			builder.requiredField(offset, 10);
			builder.requiredField(offset, 12);
			return offset;
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/sparse-tensor-index.js
var require_sparse_tensor_index = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.unionListToSparseTensorIndex = exports.unionToSparseTensorIndex = exports.SparseTensorIndex = void 0;
	var sparse_matrix_index_csx_js_1 = require_sparse_matrix_index_csx();
	var sparse_tensor_index_coo_js_1 = require_sparse_tensor_index_coo();
	var sparse_tensor_index_csf_js_1 = require_sparse_tensor_index_csf();
	var SparseTensorIndex;
	(function(SparseTensorIndex) {
		SparseTensorIndex[SparseTensorIndex["NONE"] = 0] = "NONE";
		SparseTensorIndex[SparseTensorIndex["SparseTensorIndexCOO"] = 1] = "SparseTensorIndexCOO";
		SparseTensorIndex[SparseTensorIndex["SparseMatrixIndexCSX"] = 2] = "SparseMatrixIndexCSX";
		SparseTensorIndex[SparseTensorIndex["SparseTensorIndexCSF"] = 3] = "SparseTensorIndexCSF";
	})(SparseTensorIndex || (exports.SparseTensorIndex = SparseTensorIndex = {}));
	function unionToSparseTensorIndex(type, accessor) {
		switch (SparseTensorIndex[type]) {
			case "NONE": return null;
			case "SparseTensorIndexCOO": return accessor(new sparse_tensor_index_coo_js_1.SparseTensorIndexCOO());
			case "SparseMatrixIndexCSX": return accessor(new sparse_matrix_index_csx_js_1.SparseMatrixIndexCSX());
			case "SparseTensorIndexCSF": return accessor(new sparse_tensor_index_csf_js_1.SparseTensorIndexCSF());
			default: return null;
		}
	}
	exports.unionToSparseTensorIndex = unionToSparseTensorIndex;
	function unionListToSparseTensorIndex(type, accessor, index) {
		switch (SparseTensorIndex[type]) {
			case "NONE": return null;
			case "SparseTensorIndexCOO": return accessor(index, new sparse_tensor_index_coo_js_1.SparseTensorIndexCOO());
			case "SparseMatrixIndexCSX": return accessor(index, new sparse_matrix_index_csx_js_1.SparseMatrixIndexCSX());
			case "SparseTensorIndexCSF": return accessor(index, new sparse_tensor_index_csf_js_1.SparseTensorIndexCSF());
			default: return null;
		}
	}
	exports.unionListToSparseTensorIndex = unionListToSparseTensorIndex;
}));
//#endregion
//#region node_modules/apache-arrow/fb/tensor-dim.js
var require_tensor_dim = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TensorDim = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	exports.TensorDim = class TensorDim {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsTensorDim(bb, obj) {
			return (obj || new TensorDim()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsTensorDim(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new TensorDim()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		/**
		* Length of dimension
		*/
		size() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt64(this.bb_pos + offset) : BigInt("0");
		}
		name(optionalEncoding) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
		}
		static startTensorDim(builder) {
			builder.startObject(2);
		}
		static addSize(builder, size) {
			builder.addFieldInt64(0, size, BigInt("0"));
		}
		static addName(builder, nameOffset) {
			builder.addFieldOffset(1, nameOffset, 0);
		}
		static endTensorDim(builder) {
			return builder.endObject();
		}
		static createTensorDim(builder, size, nameOffset) {
			TensorDim.startTensorDim(builder);
			TensorDim.addSize(builder, size);
			TensorDim.addName(builder, nameOffset);
			return TensorDim.endTensorDim(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/sparse-tensor.js
var require_sparse_tensor = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.SparseTensor = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var buffer_js_1 = require_buffer$1();
	var sparse_tensor_index_js_1 = require_sparse_tensor_index();
	var tensor_dim_js_1 = require_tensor_dim();
	var type_js_1 = require_type$1();
	exports.SparseTensor = class SparseTensor {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsSparseTensor(bb, obj) {
			return (obj || new SparseTensor()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsSparseTensor(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new SparseTensor()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		typeType() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readUint8(this.bb_pos + offset) : type_js_1.Type.NONE;
		}
		/**
		* The type of data contained in a value cell.
		* Currently only fixed-width value types are supported,
		* no strings or nested types.
		*/
		type(obj) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
		}
		/**
		* The dimensions of the tensor, optionally named.
		*/
		shape(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? (obj || new tensor_dim_js_1.TensorDim()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
		}
		shapeLength() {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		/**
		* The number of non-zero values in a sparse tensor.
		*/
		nonZeroLength() {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? this.bb.readInt64(this.bb_pos + offset) : BigInt("0");
		}
		sparseIndexType() {
			const offset = this.bb.__offset(this.bb_pos, 12);
			return offset ? this.bb.readUint8(this.bb_pos + offset) : sparse_tensor_index_js_1.SparseTensorIndex.NONE;
		}
		/**
		* Sparse tensor index
		*/
		sparseIndex(obj) {
			const offset = this.bb.__offset(this.bb_pos, 14);
			return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
		}
		/**
		* The location and size of the tensor's data
		*/
		data(obj) {
			const offset = this.bb.__offset(this.bb_pos, 16);
			return offset ? (obj || new buffer_js_1.Buffer()).__init(this.bb_pos + offset, this.bb) : null;
		}
		static startSparseTensor(builder) {
			builder.startObject(7);
		}
		static addTypeType(builder, typeType) {
			builder.addFieldInt8(0, typeType, type_js_1.Type.NONE);
		}
		static addType(builder, typeOffset) {
			builder.addFieldOffset(1, typeOffset, 0);
		}
		static addShape(builder, shapeOffset) {
			builder.addFieldOffset(2, shapeOffset, 0);
		}
		static createShapeVector(builder, data) {
			builder.startVector(4, data.length, 4);
			for (let i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
			return builder.endVector();
		}
		static startShapeVector(builder, numElems) {
			builder.startVector(4, numElems, 4);
		}
		static addNonZeroLength(builder, nonZeroLength) {
			builder.addFieldInt64(3, nonZeroLength, BigInt("0"));
		}
		static addSparseIndexType(builder, sparseIndexType) {
			builder.addFieldInt8(4, sparseIndexType, sparse_tensor_index_js_1.SparseTensorIndex.NONE);
		}
		static addSparseIndex(builder, sparseIndexOffset) {
			builder.addFieldOffset(5, sparseIndexOffset, 0);
		}
		static addData(builder, dataOffset) {
			builder.addFieldStruct(6, dataOffset, 0);
		}
		static endSparseTensor(builder) {
			const offset = builder.endObject();
			builder.requiredField(offset, 6);
			builder.requiredField(offset, 8);
			builder.requiredField(offset, 14);
			builder.requiredField(offset, 16);
			return offset;
		}
		static finishSparseTensorBuffer(builder, offset) {
			builder.finish(offset);
		}
		static finishSizePrefixedSparseTensorBuffer(builder, offset) {
			builder.finish(offset, void 0, true);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/tensor.js
var require_tensor = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Tensor = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var buffer_js_1 = require_buffer$1();
	var tensor_dim_js_1 = require_tensor_dim();
	var type_js_1 = require_type$1();
	exports.Tensor = class Tensor {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsTensor(bb, obj) {
			return (obj || new Tensor()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsTensor(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Tensor()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		typeType() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readUint8(this.bb_pos + offset) : type_js_1.Type.NONE;
		}
		/**
		* The type of data contained in a value cell. Currently only fixed-width
		* value types are supported, no strings or nested types
		*/
		type(obj) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
		}
		/**
		* The dimensions of the tensor, optionally named
		*/
		shape(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? (obj || new tensor_dim_js_1.TensorDim()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
		}
		shapeLength() {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		/**
		* Non-negative byte offsets to advance one value cell along each dimension
		* If omitted, default to row-major order (C-like).
		*/
		strides(index) {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? this.bb.readInt64(this.bb.__vector(this.bb_pos + offset) + index * 8) : BigInt(0);
		}
		stridesLength() {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		/**
		* The location and size of the tensor's data
		*/
		data(obj) {
			const offset = this.bb.__offset(this.bb_pos, 12);
			return offset ? (obj || new buffer_js_1.Buffer()).__init(this.bb_pos + offset, this.bb) : null;
		}
		static startTensor(builder) {
			builder.startObject(5);
		}
		static addTypeType(builder, typeType) {
			builder.addFieldInt8(0, typeType, type_js_1.Type.NONE);
		}
		static addType(builder, typeOffset) {
			builder.addFieldOffset(1, typeOffset, 0);
		}
		static addShape(builder, shapeOffset) {
			builder.addFieldOffset(2, shapeOffset, 0);
		}
		static createShapeVector(builder, data) {
			builder.startVector(4, data.length, 4);
			for (let i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
			return builder.endVector();
		}
		static startShapeVector(builder, numElems) {
			builder.startVector(4, numElems, 4);
		}
		static addStrides(builder, stridesOffset) {
			builder.addFieldOffset(3, stridesOffset, 0);
		}
		static createStridesVector(builder, data) {
			builder.startVector(8, data.length, 8);
			for (let i = data.length - 1; i >= 0; i--) builder.addInt64(data[i]);
			return builder.endVector();
		}
		static startStridesVector(builder, numElems) {
			builder.startVector(8, numElems, 8);
		}
		static addData(builder, dataOffset) {
			builder.addFieldStruct(4, dataOffset, 0);
		}
		static endTensor(builder) {
			const offset = builder.endObject();
			builder.requiredField(offset, 6);
			builder.requiredField(offset, 8);
			builder.requiredField(offset, 12);
			return offset;
		}
		static finishTensorBuffer(builder, offset) {
			builder.finish(offset);
		}
		static finishSizePrefixedTensorBuffer(builder, offset) {
			builder.finish(offset, void 0, true);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/fb/message-header.js
var require_message_header = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.unionListToMessageHeader = exports.unionToMessageHeader = exports.MessageHeader = void 0;
	var dictionary_batch_js_1 = require_dictionary_batch();
	var record_batch_js_1 = require_record_batch();
	var schema_js_1 = require_schema$1();
	var sparse_tensor_js_1 = require_sparse_tensor();
	var tensor_js_1 = require_tensor();
	/**
	* ----------------------------------------------------------------------
	* The root Message type
	* This union enables us to easily send different message types without
	* redundant storage, and in the future we can easily add new message types.
	*
	* Arrow implementations do not need to implement all of the message types,
	* which may include experimental metadata types. For maximum compatibility,
	* it is best to send data using RecordBatch
	*/
	var MessageHeader;
	(function(MessageHeader) {
		MessageHeader[MessageHeader["NONE"] = 0] = "NONE";
		MessageHeader[MessageHeader["Schema"] = 1] = "Schema";
		MessageHeader[MessageHeader["DictionaryBatch"] = 2] = "DictionaryBatch";
		MessageHeader[MessageHeader["RecordBatch"] = 3] = "RecordBatch";
		MessageHeader[MessageHeader["Tensor"] = 4] = "Tensor";
		MessageHeader[MessageHeader["SparseTensor"] = 5] = "SparseTensor";
	})(MessageHeader || (exports.MessageHeader = MessageHeader = {}));
	function unionToMessageHeader(type, accessor) {
		switch (MessageHeader[type]) {
			case "NONE": return null;
			case "Schema": return accessor(new schema_js_1.Schema());
			case "DictionaryBatch": return accessor(new dictionary_batch_js_1.DictionaryBatch());
			case "RecordBatch": return accessor(new record_batch_js_1.RecordBatch());
			case "Tensor": return accessor(new tensor_js_1.Tensor());
			case "SparseTensor": return accessor(new sparse_tensor_js_1.SparseTensor());
			default: return null;
		}
	}
	exports.unionToMessageHeader = unionToMessageHeader;
	function unionListToMessageHeader(type, accessor, index) {
		switch (MessageHeader[type]) {
			case "NONE": return null;
			case "Schema": return accessor(index, new schema_js_1.Schema());
			case "DictionaryBatch": return accessor(index, new dictionary_batch_js_1.DictionaryBatch());
			case "RecordBatch": return accessor(index, new record_batch_js_1.RecordBatch());
			case "Tensor": return accessor(index, new tensor_js_1.Tensor());
			case "SparseTensor": return accessor(index, new sparse_tensor_js_1.SparseTensor());
			default: return null;
		}
	}
	exports.unionListToMessageHeader = unionListToMessageHeader;
}));
//#endregion
//#region node_modules/apache-arrow/enum.js
var require_enum = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BufferType = exports.Type = exports.MessageHeader = exports.IntervalUnit = exports.TimeUnit = exports.DateUnit = exports.Precision = exports.UnionMode = exports.MetadataVersion = void 0;
	var metadata_version_js_1 = require_metadata_version();
	Object.defineProperty(exports, "MetadataVersion", {
		enumerable: true,
		get: function() {
			return metadata_version_js_1.MetadataVersion;
		}
	});
	var union_mode_js_1 = require_union_mode();
	Object.defineProperty(exports, "UnionMode", {
		enumerable: true,
		get: function() {
			return union_mode_js_1.UnionMode;
		}
	});
	var precision_js_1 = require_precision();
	Object.defineProperty(exports, "Precision", {
		enumerable: true,
		get: function() {
			return precision_js_1.Precision;
		}
	});
	var date_unit_js_1 = require_date_unit();
	Object.defineProperty(exports, "DateUnit", {
		enumerable: true,
		get: function() {
			return date_unit_js_1.DateUnit;
		}
	});
	var time_unit_js_1 = require_time_unit();
	Object.defineProperty(exports, "TimeUnit", {
		enumerable: true,
		get: function() {
			return time_unit_js_1.TimeUnit;
		}
	});
	var interval_unit_js_1 = require_interval_unit();
	Object.defineProperty(exports, "IntervalUnit", {
		enumerable: true,
		get: function() {
			return interval_unit_js_1.IntervalUnit;
		}
	});
	var message_header_js_1 = require_message_header();
	Object.defineProperty(exports, "MessageHeader", {
		enumerable: true,
		get: function() {
			return message_header_js_1.MessageHeader;
		}
	});
	/**
	* Main data type enumeration.
	*
	* Data types in this library are all *logical*. They can be expressed as
	* either a primitive physical type (bytes or bits of some fixed size), a
	* nested type consisting of other data types, or another data type (e.g. a
	* timestamp encoded as an int64).
	*
	* **Note**: Only non-negative enum values are written to an Arrow IPC payload.
	*
	* The rest of the values are specified here so TypeScript can narrow the type
	* signatures further beyond the base Arrow Types. The Arrow DataTypes include
	* metadata like `bitWidth` that impact the type signatures of the values we
	* accept and return.
	*
	* For example, the `Int8Vector` reads 1-byte numbers from an `Int8Array`, an
	* `Int32Vector` reads a 4-byte number from an `Int32Array`, and an `Int64Vector`
	* reads a pair of 4-byte lo, hi 32-bit integers as a zero-copy slice from the
	* underlying `Int32Array`.
	*
	* Library consumers benefit by knowing the narrowest type, since we can ensure
	* the types across all public methods are propagated, and never bail to `any`.
	* These values are _never_ used at runtime, and they will _never_ be written
	* to the flatbuffers metadata of serialized Arrow IPC payloads.
	*/
	var Type;
	(function(Type) {
		Type[Type["NONE"] = 0] = "NONE";
		Type[Type["Null"] = 1] = "Null";
		Type[Type["Int"] = 2] = "Int";
		Type[Type["Float"] = 3] = "Float";
		Type[Type["Binary"] = 4] = "Binary";
		Type[Type["Utf8"] = 5] = "Utf8";
		Type[Type["Bool"] = 6] = "Bool";
		Type[Type["Decimal"] = 7] = "Decimal";
		Type[Type["Date"] = 8] = "Date";
		Type[Type["Time"] = 9] = "Time";
		Type[Type["Timestamp"] = 10] = "Timestamp";
		Type[Type["Interval"] = 11] = "Interval";
		Type[Type["List"] = 12] = "List";
		Type[Type["Struct"] = 13] = "Struct";
		Type[Type["Union"] = 14] = "Union";
		Type[Type["FixedSizeBinary"] = 15] = "FixedSizeBinary";
		Type[Type["FixedSizeList"] = 16] = "FixedSizeList";
		Type[Type["Map"] = 17] = "Map";
		Type[Type["Duration"] = 18] = "Duration";
		Type[Type["LargeBinary"] = 19] = "LargeBinary";
		Type[Type["LargeUtf8"] = 20] = "LargeUtf8";
		Type[Type["Dictionary"] = -1] = "Dictionary";
		Type[Type["Int8"] = -2] = "Int8";
		Type[Type["Int16"] = -3] = "Int16";
		Type[Type["Int32"] = -4] = "Int32";
		Type[Type["Int64"] = -5] = "Int64";
		Type[Type["Uint8"] = -6] = "Uint8";
		Type[Type["Uint16"] = -7] = "Uint16";
		Type[Type["Uint32"] = -8] = "Uint32";
		Type[Type["Uint64"] = -9] = "Uint64";
		Type[Type["Float16"] = -10] = "Float16";
		Type[Type["Float32"] = -11] = "Float32";
		Type[Type["Float64"] = -12] = "Float64";
		Type[Type["DateDay"] = -13] = "DateDay";
		Type[Type["DateMillisecond"] = -14] = "DateMillisecond";
		Type[Type["TimestampSecond"] = -15] = "TimestampSecond";
		Type[Type["TimestampMillisecond"] = -16] = "TimestampMillisecond";
		Type[Type["TimestampMicrosecond"] = -17] = "TimestampMicrosecond";
		Type[Type["TimestampNanosecond"] = -18] = "TimestampNanosecond";
		Type[Type["TimeSecond"] = -19] = "TimeSecond";
		Type[Type["TimeMillisecond"] = -20] = "TimeMillisecond";
		Type[Type["TimeMicrosecond"] = -21] = "TimeMicrosecond";
		Type[Type["TimeNanosecond"] = -22] = "TimeNanosecond";
		Type[Type["DenseUnion"] = -23] = "DenseUnion";
		Type[Type["SparseUnion"] = -24] = "SparseUnion";
		Type[Type["IntervalDayTime"] = -25] = "IntervalDayTime";
		Type[Type["IntervalYearMonth"] = -26] = "IntervalYearMonth";
		Type[Type["DurationSecond"] = -27] = "DurationSecond";
		Type[Type["DurationMillisecond"] = -28] = "DurationMillisecond";
		Type[Type["DurationMicrosecond"] = -29] = "DurationMicrosecond";
		Type[Type["DurationNanosecond"] = -30] = "DurationNanosecond";
		Type[Type["IntervalMonthDayNano"] = -31] = "IntervalMonthDayNano";
	})(Type || (exports.Type = Type = {}));
	var BufferType;
	(function(BufferType) {
		/**
		* used in List type, Dense Union and variable length primitive types (String, Binary)
		*/
		BufferType[BufferType["OFFSET"] = 0] = "OFFSET";
		/**
		* actual data, either fixed width primitive types in slots or variable width delimited by an OFFSET vector
		*/
		BufferType[BufferType["DATA"] = 1] = "DATA";
		/**
		* Bit vector indicating if each value is null
		*/
		BufferType[BufferType["VALIDITY"] = 2] = "VALIDITY";
		/**
		* Type vector used in Union type
		*/
		BufferType[BufferType["TYPE"] = 3] = "TYPE";
	})(BufferType || (exports.BufferType = BufferType = {}));
}));
//#endregion
//#region node_modules/apache-arrow/util/pretty.js
var require_pretty = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.valueToString = void 0;
	/** @ignore */ var undf = void 0;
	/** @ignore */
	function valueToString(x) {
		if (x === null) return "null";
		if (x === undf) return "undefined";
		switch (typeof x) {
			case "number": return `${x}`;
			case "bigint": return `${x}`;
			case "string": return `"${x}"`;
		}
		if (typeof x[Symbol.toPrimitive] === "function") return x[Symbol.toPrimitive]("string");
		if (ArrayBuffer.isView(x)) {
			if (x instanceof BigInt64Array || x instanceof BigUint64Array) return `[${[...x].map((x) => valueToString(x))}]`;
			return `[${x}]`;
		}
		return ArrayBuffer.isView(x) ? `[${x}]` : JSON.stringify(x, (_, y) => typeof y === "bigint" ? `${y}` : y);
	}
	exports.valueToString = valueToString;
}));
//#endregion
//#region node_modules/apache-arrow/util/bigint.js
var require_bigint = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.divideBigInts = exports.bigIntToNumber = void 0;
	/**
	* Converts an integer as a number or bigint to a number, throwing an error if the input cannot safely be represented as a number.
	*/
	function bigIntToNumber(number) {
		if (typeof number === "bigint" && (number < Number.MIN_SAFE_INTEGER || number > Number.MAX_SAFE_INTEGER)) throw new TypeError(`${number} is not safe to convert to a number.`);
		return Number(number);
	}
	exports.bigIntToNumber = bigIntToNumber;
	/**
	* Duivides the bigint number by the divisor and returns the result as a number.
	* Dividing bigints always results in bigints so we don't get the remainder.
	* This function gives us the remainder but assumes that the result fits into a number.
	*
	* @param number The number to divide.
	* @param divisor The divisor.
	* @returns The result of the division as a number.
	*/
	function divideBigInts(number, divisor) {
		return bigIntToNumber(number / divisor) + bigIntToNumber(number % divisor) / bigIntToNumber(divisor);
	}
	exports.divideBigInts = divideBigInts;
}));
//#endregion
//#region node_modules/apache-arrow/util/bn.js
var require_bn = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BN = exports.bigNumToBigInt = exports.bigNumToString = exports.bigNumToNumber = exports.isArrowBigNumSymbol = void 0;
	var buffer_js_1 = require_buffer$2();
	var bigint_js_1 = require_bigint();
	/** @ignore */
	exports.isArrowBigNumSymbol = Symbol.for("isArrowBigNum");
	/** @ignore */
	function BigNum(x, ...xs) {
		if (xs.length === 0) return Object.setPrototypeOf((0, buffer_js_1.toArrayBufferView)(this["TypedArray"], x), this.constructor.prototype);
		return Object.setPrototypeOf(new this["TypedArray"](x, ...xs), this.constructor.prototype);
	}
	BigNum.prototype[exports.isArrowBigNumSymbol] = true;
	BigNum.prototype.toJSON = function() {
		return `"${bigNumToString(this)}"`;
	};
	BigNum.prototype.valueOf = function(scale) {
		return bigNumToNumber(this, scale);
	};
	BigNum.prototype.toString = function() {
		return bigNumToString(this);
	};
	BigNum.prototype[Symbol.toPrimitive] = function(hint = "default") {
		switch (hint) {
			case "number": return bigNumToNumber(this);
			case "string": return bigNumToString(this);
			case "default": return bigNumToBigInt(this);
		}
		return bigNumToString(this);
	};
	/** @ignore */
	function SignedBigNum(...args) {
		return BigNum.apply(this, args);
	}
	/** @ignore */
	function UnsignedBigNum(...args) {
		return BigNum.apply(this, args);
	}
	/** @ignore */
	function DecimalBigNum(...args) {
		return BigNum.apply(this, args);
	}
	Object.setPrototypeOf(SignedBigNum.prototype, Object.create(Int32Array.prototype));
	Object.setPrototypeOf(UnsignedBigNum.prototype, Object.create(Uint32Array.prototype));
	Object.setPrototypeOf(DecimalBigNum.prototype, Object.create(Uint32Array.prototype));
	Object.assign(SignedBigNum.prototype, BigNum.prototype, {
		"constructor": SignedBigNum,
		"signed": true,
		"TypedArray": Int32Array,
		"BigIntArray": BigInt64Array
	});
	Object.assign(UnsignedBigNum.prototype, BigNum.prototype, {
		"constructor": UnsignedBigNum,
		"signed": false,
		"TypedArray": Uint32Array,
		"BigIntArray": BigUint64Array
	});
	Object.assign(DecimalBigNum.prototype, BigNum.prototype, {
		"constructor": DecimalBigNum,
		"signed": true,
		"TypedArray": Uint32Array,
		"BigIntArray": BigUint64Array
	});
	var TWO_TO_THE_64_MINUS_1 = BigInt(4294967296) * BigInt(4294967296) - BigInt(1);
	/** @ignore */
	function bigNumToNumber(bn, scale) {
		const { buffer, byteOffset, byteLength, "signed": signed } = bn;
		const words = new BigUint64Array(buffer, byteOffset, byteLength / 8);
		const negative = signed && words.at(-1) & BigInt(1) << BigInt(63);
		let number = BigInt(0);
		let i = 0;
		if (negative) {
			for (const word of words) number |= (word ^ TWO_TO_THE_64_MINUS_1) * (BigInt(1) << BigInt(64 * i++));
			number *= BigInt(-1);
			number -= BigInt(1);
		} else for (const word of words) number |= word * (BigInt(1) << BigInt(64 * i++));
		if (typeof scale === "number" && scale > 0) {
			const denominator = BigInt("1".padEnd(scale + 1, "0"));
			const quotient = number / denominator;
			const remainder = negative ? -(number % denominator) : number % denominator;
			const integerPart = (0, bigint_js_1.bigIntToNumber)(quotient);
			const fractionPart = `${remainder}`.padStart(scale, "0");
			return +`${negative && integerPart === 0 ? "-" : ""}${integerPart}.${fractionPart}`;
		}
		return (0, bigint_js_1.bigIntToNumber)(number);
	}
	exports.bigNumToNumber = bigNumToNumber;
	/** @ignore */
	function bigNumToString(a) {
		if (a.byteLength === 8) return `${new a["BigIntArray"](a.buffer, a.byteOffset, 1)[0]}`;
		if (!a["signed"]) return unsignedBigNumToString(a);
		let array = new Uint16Array(a.buffer, a.byteOffset, a.byteLength / 2);
		if (new Int16Array([array.at(-1)])[0] >= 0) return unsignedBigNumToString(a);
		array = array.slice();
		let carry = 1;
		for (let i = 0; i < array.length; i++) {
			const elem = array[i];
			const updated = ~elem + carry;
			array[i] = updated;
			carry &= elem === 0 ? 1 : 0;
		}
		return `-${unsignedBigNumToString(array)}`;
	}
	exports.bigNumToString = bigNumToString;
	/** @ignore */
	function bigNumToBigInt(a) {
		if (a.byteLength === 8) return new a["BigIntArray"](a.buffer, a.byteOffset, 1)[0];
		else return bigNumToString(a);
	}
	exports.bigNumToBigInt = bigNumToBigInt;
	/** @ignore */
	function unsignedBigNumToString(a) {
		let digits = "";
		const base64 = new Uint32Array(2);
		let base32 = new Uint16Array(a.buffer, a.byteOffset, a.byteLength / 2);
		const checks = new Uint32Array((base32 = new Uint16Array(base32).reverse()).buffer);
		let i = -1;
		const n = base32.length - 1;
		do {
			for (base64[0] = base32[i = 0]; i < n;) {
				base32[i++] = base64[1] = base64[0] / 10;
				base64[0] = (base64[0] - base64[1] * 10 << 16) + base32[i];
			}
			base32[i] = base64[1] = base64[0] / 10;
			base64[0] = base64[0] - base64[1] * 10;
			digits = `${base64[0]}${digits}`;
		} while (checks[0] || checks[1] || checks[2] || checks[3]);
		return digits !== null && digits !== void 0 ? digits : `0`;
	}
	exports.BN = class BN {
		/** @nocollapse */
		static new(num, isSigned) {
			switch (isSigned) {
				case true: return new SignedBigNum(num);
				case false: return new UnsignedBigNum(num);
			}
			switch (num.constructor) {
				case Int8Array:
				case Int16Array:
				case Int32Array:
				case BigInt64Array: return new SignedBigNum(num);
			}
			if (num.byteLength === 16) return new DecimalBigNum(num);
			return new UnsignedBigNum(num);
		}
		/** @nocollapse */
		static signed(num) {
			return new SignedBigNum(num);
		}
		/** @nocollapse */
		static unsigned(num) {
			return new UnsignedBigNum(num);
		}
		/** @nocollapse */
		static decimal(num) {
			return new DecimalBigNum(num);
		}
		constructor(num, isSigned) {
			return BN.new(num, isSigned);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/type.js
var require_type = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FixedSizeList = exports.FixedSizeBinary = exports.SparseUnion = exports.DenseUnion = exports.Union = exports.Struct = exports.List = exports.DurationNanosecond = exports.DurationMicrosecond = exports.DurationMillisecond = exports.DurationSecond = exports.Duration = exports.IntervalMonthDayNano = exports.IntervalYearMonth = exports.IntervalDayTime = exports.Interval = exports.TimestampNanosecond = exports.TimestampMicrosecond = exports.TimestampMillisecond = exports.TimestampSecond = exports.Timestamp = exports.TimeNanosecond = exports.TimeMicrosecond = exports.TimeMillisecond = exports.TimeSecond = exports.Time = exports.DateMillisecond = exports.DateDay = exports.Date_ = exports.Decimal = exports.Bool = exports.LargeUtf8 = exports.Utf8 = exports.LargeBinary = exports.Binary = exports.Float64 = exports.Float32 = exports.Float16 = exports.Float = exports.Uint64 = exports.Uint32 = exports.Uint16 = exports.Uint8 = exports.Int64 = exports.Int32 = exports.Int16 = exports.Int8 = exports.Int = exports.Null = exports.DataType = void 0;
	exports.strideForType = exports.Dictionary = exports.Map_ = void 0;
	var bigint_js_1 = require_bigint();
	var enum_js_1 = require_enum();
	/**
	* An abstract base class for classes that encapsulate metadata about each of
	* the logical types that Arrow can represent.
	*/
	var DataType = class DataType {
		/** @nocollapse */ static isNull(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Null;
		}
		/** @nocollapse */ static isInt(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Int;
		}
		/** @nocollapse */ static isFloat(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Float;
		}
		/** @nocollapse */ static isBinary(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Binary;
		}
		/** @nocollapse */ static isLargeBinary(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.LargeBinary;
		}
		/** @nocollapse */ static isUtf8(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Utf8;
		}
		/** @nocollapse */ static isLargeUtf8(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.LargeUtf8;
		}
		/** @nocollapse */ static isBool(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Bool;
		}
		/** @nocollapse */ static isDecimal(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Decimal;
		}
		/** @nocollapse */ static isDate(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Date;
		}
		/** @nocollapse */ static isTime(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Time;
		}
		/** @nocollapse */ static isTimestamp(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Timestamp;
		}
		/** @nocollapse */ static isInterval(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Interval;
		}
		/** @nocollapse */ static isDuration(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Duration;
		}
		/** @nocollapse */ static isList(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.List;
		}
		/** @nocollapse */ static isStruct(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Struct;
		}
		/** @nocollapse */ static isUnion(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Union;
		}
		/** @nocollapse */ static isFixedSizeBinary(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.FixedSizeBinary;
		}
		/** @nocollapse */ static isFixedSizeList(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.FixedSizeList;
		}
		/** @nocollapse */ static isMap(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Map;
		}
		/** @nocollapse */ static isDictionary(x) {
			return (x === null || x === void 0 ? void 0 : x.typeId) === enum_js_1.Type.Dictionary;
		}
		/** @nocollapse */ static isDenseUnion(x) {
			return DataType.isUnion(x) && x.mode === enum_js_1.UnionMode.Dense;
		}
		/** @nocollapse */ static isSparseUnion(x) {
			return DataType.isUnion(x) && x.mode === enum_js_1.UnionMode.Sparse;
		}
		constructor(typeId) {
			this.typeId = typeId;
		}
	};
	exports.DataType = DataType;
	_a = Symbol.toStringTag;
	DataType[_a] = ((proto) => {
		proto.children = null;
		proto.ArrayType = Array;
		proto.OffsetArrayType = Int32Array;
		return proto[Symbol.toStringTag] = "DataType";
	})(DataType.prototype);
	/** @ignore */
	var Null = class extends DataType {
		constructor() {
			super(enum_js_1.Type.Null);
		}
		toString() {
			return `Null`;
		}
	};
	exports.Null = Null;
	_b = Symbol.toStringTag;
	Null[_b] = ((proto) => proto[Symbol.toStringTag] = "Null")(Null.prototype);
	/** @ignore */
	var Int_ = class extends DataType {
		constructor(isSigned, bitWidth) {
			super(enum_js_1.Type.Int);
			this.isSigned = isSigned;
			this.bitWidth = bitWidth;
		}
		get ArrayType() {
			switch (this.bitWidth) {
				case 8: return this.isSigned ? Int8Array : Uint8Array;
				case 16: return this.isSigned ? Int16Array : Uint16Array;
				case 32: return this.isSigned ? Int32Array : Uint32Array;
				case 64: return this.isSigned ? BigInt64Array : BigUint64Array;
			}
			throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
		}
		toString() {
			return `${this.isSigned ? `I` : `Ui`}nt${this.bitWidth}`;
		}
	};
	exports.Int = Int_;
	_c = Symbol.toStringTag;
	Int_[_c] = ((proto) => {
		proto.isSigned = null;
		proto.bitWidth = null;
		return proto[Symbol.toStringTag] = "Int";
	})(Int_.prototype);
	/** @ignore */
	var Int8 = class extends Int_ {
		constructor() {
			super(true, 8);
		}
		get ArrayType() {
			return Int8Array;
		}
	};
	exports.Int8 = Int8;
	/** @ignore */
	var Int16 = class extends Int_ {
		constructor() {
			super(true, 16);
		}
		get ArrayType() {
			return Int16Array;
		}
	};
	exports.Int16 = Int16;
	/** @ignore */
	var Int32 = class extends Int_ {
		constructor() {
			super(true, 32);
		}
		get ArrayType() {
			return Int32Array;
		}
	};
	exports.Int32 = Int32;
	/** @ignore */
	var Int64 = class extends Int_ {
		constructor() {
			super(true, 64);
		}
		get ArrayType() {
			return BigInt64Array;
		}
	};
	exports.Int64 = Int64;
	/** @ignore */
	var Uint8 = class extends Int_ {
		constructor() {
			super(false, 8);
		}
		get ArrayType() {
			return Uint8Array;
		}
	};
	exports.Uint8 = Uint8;
	/** @ignore */
	var Uint16 = class extends Int_ {
		constructor() {
			super(false, 16);
		}
		get ArrayType() {
			return Uint16Array;
		}
	};
	exports.Uint16 = Uint16;
	/** @ignore */
	var Uint32 = class extends Int_ {
		constructor() {
			super(false, 32);
		}
		get ArrayType() {
			return Uint32Array;
		}
	};
	exports.Uint32 = Uint32;
	/** @ignore */
	var Uint64 = class extends Int_ {
		constructor() {
			super(false, 64);
		}
		get ArrayType() {
			return BigUint64Array;
		}
	};
	exports.Uint64 = Uint64;
	Object.defineProperty(Int8.prototype, "ArrayType", { value: Int8Array });
	Object.defineProperty(Int16.prototype, "ArrayType", { value: Int16Array });
	Object.defineProperty(Int32.prototype, "ArrayType", { value: Int32Array });
	Object.defineProperty(Int64.prototype, "ArrayType", { value: BigInt64Array });
	Object.defineProperty(Uint8.prototype, "ArrayType", { value: Uint8Array });
	Object.defineProperty(Uint16.prototype, "ArrayType", { value: Uint16Array });
	Object.defineProperty(Uint32.prototype, "ArrayType", { value: Uint32Array });
	Object.defineProperty(Uint64.prototype, "ArrayType", { value: BigUint64Array });
	/** @ignore */
	var Float = class extends DataType {
		constructor(precision) {
			super(enum_js_1.Type.Float);
			this.precision = precision;
		}
		get ArrayType() {
			switch (this.precision) {
				case enum_js_1.Precision.HALF: return Uint16Array;
				case enum_js_1.Precision.SINGLE: return Float32Array;
				case enum_js_1.Precision.DOUBLE: return Float64Array;
			}
			throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
		}
		toString() {
			return `Float${this.precision << 5 || 16}`;
		}
	};
	exports.Float = Float;
	_d = Symbol.toStringTag;
	Float[_d] = ((proto) => {
		proto.precision = null;
		return proto[Symbol.toStringTag] = "Float";
	})(Float.prototype);
	/** @ignore */
	var Float16 = class extends Float {
		constructor() {
			super(enum_js_1.Precision.HALF);
		}
	};
	exports.Float16 = Float16;
	/** @ignore */
	var Float32 = class extends Float {
		constructor() {
			super(enum_js_1.Precision.SINGLE);
		}
	};
	exports.Float32 = Float32;
	/** @ignore */
	var Float64 = class extends Float {
		constructor() {
			super(enum_js_1.Precision.DOUBLE);
		}
	};
	exports.Float64 = Float64;
	Object.defineProperty(Float16.prototype, "ArrayType", { value: Uint16Array });
	Object.defineProperty(Float32.prototype, "ArrayType", { value: Float32Array });
	Object.defineProperty(Float64.prototype, "ArrayType", { value: Float64Array });
	/** @ignore */
	var Binary = class extends DataType {
		constructor() {
			super(enum_js_1.Type.Binary);
		}
		toString() {
			return `Binary`;
		}
	};
	exports.Binary = Binary;
	_e = Symbol.toStringTag;
	Binary[_e] = ((proto) => {
		proto.ArrayType = Uint8Array;
		return proto[Symbol.toStringTag] = "Binary";
	})(Binary.prototype);
	/** @ignore */
	var LargeBinary = class extends DataType {
		constructor() {
			super(enum_js_1.Type.LargeBinary);
		}
		toString() {
			return `LargeBinary`;
		}
	};
	exports.LargeBinary = LargeBinary;
	_f = Symbol.toStringTag;
	LargeBinary[_f] = ((proto) => {
		proto.ArrayType = Uint8Array;
		proto.OffsetArrayType = BigInt64Array;
		return proto[Symbol.toStringTag] = "LargeBinary";
	})(LargeBinary.prototype);
	/** @ignore */
	var Utf8 = class extends DataType {
		constructor() {
			super(enum_js_1.Type.Utf8);
		}
		toString() {
			return `Utf8`;
		}
	};
	exports.Utf8 = Utf8;
	_g = Symbol.toStringTag;
	Utf8[_g] = ((proto) => {
		proto.ArrayType = Uint8Array;
		return proto[Symbol.toStringTag] = "Utf8";
	})(Utf8.prototype);
	/** @ignore */
	var LargeUtf8 = class extends DataType {
		constructor() {
			super(enum_js_1.Type.LargeUtf8);
		}
		toString() {
			return `LargeUtf8`;
		}
	};
	exports.LargeUtf8 = LargeUtf8;
	_h = Symbol.toStringTag;
	LargeUtf8[_h] = ((proto) => {
		proto.ArrayType = Uint8Array;
		proto.OffsetArrayType = BigInt64Array;
		return proto[Symbol.toStringTag] = "LargeUtf8";
	})(LargeUtf8.prototype);
	/** @ignore */
	var Bool = class extends DataType {
		constructor() {
			super(enum_js_1.Type.Bool);
		}
		toString() {
			return `Bool`;
		}
	};
	exports.Bool = Bool;
	_j = Symbol.toStringTag;
	Bool[_j] = ((proto) => {
		proto.ArrayType = Uint8Array;
		return proto[Symbol.toStringTag] = "Bool";
	})(Bool.prototype);
	/** @ignore */
	var Decimal = class extends DataType {
		constructor(scale, precision, bitWidth = 128) {
			super(enum_js_1.Type.Decimal);
			this.scale = scale;
			this.precision = precision;
			this.bitWidth = bitWidth;
		}
		toString() {
			return `Decimal[${this.precision}e${this.scale > 0 ? `+` : ``}${this.scale}]`;
		}
	};
	exports.Decimal = Decimal;
	_k = Symbol.toStringTag;
	Decimal[_k] = ((proto) => {
		proto.scale = null;
		proto.precision = null;
		proto.ArrayType = Uint32Array;
		return proto[Symbol.toStringTag] = "Decimal";
	})(Decimal.prototype);
	/** @ignore */
	var Date_ = class extends DataType {
		constructor(unit) {
			super(enum_js_1.Type.Date);
			this.unit = unit;
		}
		toString() {
			return `Date${(this.unit + 1) * 32}<${enum_js_1.DateUnit[this.unit]}>`;
		}
		get ArrayType() {
			return this.unit === enum_js_1.DateUnit.DAY ? Int32Array : BigInt64Array;
		}
	};
	exports.Date_ = Date_;
	_l = Symbol.toStringTag;
	Date_[_l] = ((proto) => {
		proto.unit = null;
		return proto[Symbol.toStringTag] = "Date";
	})(Date_.prototype);
	/** @ignore */
	var DateDay = class extends Date_ {
		constructor() {
			super(enum_js_1.DateUnit.DAY);
		}
	};
	exports.DateDay = DateDay;
	/**
	* A signed 64-bit date representing the elapsed time since UNIX epoch (1970-01-01) in milliseconds.
	* According to the specification, this should be treated as the number of days, in milliseconds,  since the UNIX epoch.
	* Therefore, values must be evenly divisible by `86_400_000` (the number of milliseconds in a standard day).
	*
	* Practically, validation that values of this type are evenly divisible by `86_400_000` is not enforced by this library
	* for performance and usability reasons.
	*
	* Users should prefer to use {@link DateDay} to cleanly represent the number of days. For JS dates,
	* {@link TimestampMillisecond} is the preferred type.
	*
	* @ignore
	*/
	var DateMillisecond = class extends Date_ {
		constructor() {
			super(enum_js_1.DateUnit.MILLISECOND);
		}
	};
	exports.DateMillisecond = DateMillisecond;
	/** @ignore */
	var Time_ = class extends DataType {
		constructor(unit, bitWidth) {
			super(enum_js_1.Type.Time);
			this.unit = unit;
			this.bitWidth = bitWidth;
		}
		toString() {
			return `Time${this.bitWidth}<${enum_js_1.TimeUnit[this.unit]}>`;
		}
		get ArrayType() {
			switch (this.bitWidth) {
				case 32: return Int32Array;
				case 64: return BigInt64Array;
			}
			throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`);
		}
	};
	exports.Time = Time_;
	_m = Symbol.toStringTag;
	Time_[_m] = ((proto) => {
		proto.unit = null;
		proto.bitWidth = null;
		return proto[Symbol.toStringTag] = "Time";
	})(Time_.prototype);
	/** @ignore */
	var TimeSecond = class extends Time_ {
		constructor() {
			super(enum_js_1.TimeUnit.SECOND, 32);
		}
	};
	exports.TimeSecond = TimeSecond;
	/** @ignore */
	var TimeMillisecond = class extends Time_ {
		constructor() {
			super(enum_js_1.TimeUnit.MILLISECOND, 32);
		}
	};
	exports.TimeMillisecond = TimeMillisecond;
	/** @ignore */
	var TimeMicrosecond = class extends Time_ {
		constructor() {
			super(enum_js_1.TimeUnit.MICROSECOND, 64);
		}
	};
	exports.TimeMicrosecond = TimeMicrosecond;
	/** @ignore */
	var TimeNanosecond = class extends Time_ {
		constructor() {
			super(enum_js_1.TimeUnit.NANOSECOND, 64);
		}
	};
	exports.TimeNanosecond = TimeNanosecond;
	/** @ignore */
	var Timestamp_ = class extends DataType {
		constructor(unit, timezone) {
			super(enum_js_1.Type.Timestamp);
			this.unit = unit;
			this.timezone = timezone;
		}
		toString() {
			return `Timestamp<${enum_js_1.TimeUnit[this.unit]}${this.timezone ? `, ${this.timezone}` : ``}>`;
		}
	};
	exports.Timestamp = Timestamp_;
	_o = Symbol.toStringTag;
	Timestamp_[_o] = ((proto) => {
		proto.unit = null;
		proto.timezone = null;
		proto.ArrayType = BigInt64Array;
		return proto[Symbol.toStringTag] = "Timestamp";
	})(Timestamp_.prototype);
	/** @ignore */
	var TimestampSecond = class extends Timestamp_ {
		constructor(timezone) {
			super(enum_js_1.TimeUnit.SECOND, timezone);
		}
	};
	exports.TimestampSecond = TimestampSecond;
	/** @ignore */
	var TimestampMillisecond = class extends Timestamp_ {
		constructor(timezone) {
			super(enum_js_1.TimeUnit.MILLISECOND, timezone);
		}
	};
	exports.TimestampMillisecond = TimestampMillisecond;
	/** @ignore */
	var TimestampMicrosecond = class extends Timestamp_ {
		constructor(timezone) {
			super(enum_js_1.TimeUnit.MICROSECOND, timezone);
		}
	};
	exports.TimestampMicrosecond = TimestampMicrosecond;
	/** @ignore */
	var TimestampNanosecond = class extends Timestamp_ {
		constructor(timezone) {
			super(enum_js_1.TimeUnit.NANOSECOND, timezone);
		}
	};
	exports.TimestampNanosecond = TimestampNanosecond;
	/** @ignore */
	var Interval_ = class extends DataType {
		constructor(unit) {
			super(enum_js_1.Type.Interval);
			this.unit = unit;
		}
		toString() {
			return `Interval<${enum_js_1.IntervalUnit[this.unit]}>`;
		}
	};
	exports.Interval = Interval_;
	_p = Symbol.toStringTag;
	Interval_[_p] = ((proto) => {
		proto.unit = null;
		proto.ArrayType = Int32Array;
		return proto[Symbol.toStringTag] = "Interval";
	})(Interval_.prototype);
	/** @ignore */
	var IntervalDayTime = class extends Interval_ {
		constructor() {
			super(enum_js_1.IntervalUnit.DAY_TIME);
		}
	};
	exports.IntervalDayTime = IntervalDayTime;
	/** @ignore */
	var IntervalYearMonth = class extends Interval_ {
		constructor() {
			super(enum_js_1.IntervalUnit.YEAR_MONTH);
		}
	};
	exports.IntervalYearMonth = IntervalYearMonth;
	/** @ignore */
	var IntervalMonthDayNano = class extends Interval_ {
		constructor() {
			super(enum_js_1.IntervalUnit.MONTH_DAY_NANO);
		}
	};
	exports.IntervalMonthDayNano = IntervalMonthDayNano;
	/** @ignore */
	var Duration = class extends DataType {
		constructor(unit) {
			super(enum_js_1.Type.Duration);
			this.unit = unit;
		}
		toString() {
			return `Duration<${enum_js_1.TimeUnit[this.unit]}>`;
		}
	};
	exports.Duration = Duration;
	_q = Symbol.toStringTag;
	Duration[_q] = ((proto) => {
		proto.unit = null;
		proto.ArrayType = BigInt64Array;
		return proto[Symbol.toStringTag] = "Duration";
	})(Duration.prototype);
	/** @ignore */
	var DurationSecond = class extends Duration {
		constructor() {
			super(enum_js_1.TimeUnit.SECOND);
		}
	};
	exports.DurationSecond = DurationSecond;
	/** @ignore */
	var DurationMillisecond = class extends Duration {
		constructor() {
			super(enum_js_1.TimeUnit.MILLISECOND);
		}
	};
	exports.DurationMillisecond = DurationMillisecond;
	/** @ignore */
	var DurationMicrosecond = class extends Duration {
		constructor() {
			super(enum_js_1.TimeUnit.MICROSECOND);
		}
	};
	exports.DurationMicrosecond = DurationMicrosecond;
	/** @ignore */
	var DurationNanosecond = class extends Duration {
		constructor() {
			super(enum_js_1.TimeUnit.NANOSECOND);
		}
	};
	exports.DurationNanosecond = DurationNanosecond;
	/** @ignore */
	var List = class extends DataType {
		constructor(child) {
			super(enum_js_1.Type.List);
			this.children = [child];
		}
		toString() {
			return `List<${this.valueType}>`;
		}
		get valueType() {
			return this.children[0].type;
		}
		get valueField() {
			return this.children[0];
		}
		get ArrayType() {
			return this.valueType.ArrayType;
		}
	};
	exports.List = List;
	_r = Symbol.toStringTag;
	List[_r] = ((proto) => {
		proto.children = null;
		return proto[Symbol.toStringTag] = "List";
	})(List.prototype);
	/** @ignore */
	var Struct = class extends DataType {
		constructor(children) {
			super(enum_js_1.Type.Struct);
			this.children = children;
		}
		toString() {
			return `Struct<{${this.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`;
		}
	};
	exports.Struct = Struct;
	_s = Symbol.toStringTag;
	Struct[_s] = ((proto) => {
		proto.children = null;
		return proto[Symbol.toStringTag] = "Struct";
	})(Struct.prototype);
	/** @ignore */
	var Union_ = class extends DataType {
		constructor(mode, typeIds, children) {
			super(enum_js_1.Type.Union);
			this.mode = mode;
			this.children = children;
			this.typeIds = typeIds = Int32Array.from(typeIds);
			this.typeIdToChildIndex = typeIds.reduce((typeIdToChildIndex, typeId, idx) => (typeIdToChildIndex[typeId] = idx) && typeIdToChildIndex || typeIdToChildIndex, Object.create(null));
		}
		toString() {
			return `${this[Symbol.toStringTag]}<${this.children.map((x) => `${x.type}`).join(` | `)}>`;
		}
	};
	exports.Union = Union_;
	_t = Symbol.toStringTag;
	Union_[_t] = ((proto) => {
		proto.mode = null;
		proto.typeIds = null;
		proto.children = null;
		proto.typeIdToChildIndex = null;
		proto.ArrayType = Int8Array;
		return proto[Symbol.toStringTag] = "Union";
	})(Union_.prototype);
	/** @ignore */
	var DenseUnion = class extends Union_ {
		constructor(typeIds, children) {
			super(enum_js_1.UnionMode.Dense, typeIds, children);
		}
	};
	exports.DenseUnion = DenseUnion;
	/** @ignore */
	var SparseUnion = class extends Union_ {
		constructor(typeIds, children) {
			super(enum_js_1.UnionMode.Sparse, typeIds, children);
		}
	};
	exports.SparseUnion = SparseUnion;
	/** @ignore */
	var FixedSizeBinary = class extends DataType {
		constructor(byteWidth) {
			super(enum_js_1.Type.FixedSizeBinary);
			this.byteWidth = byteWidth;
		}
		toString() {
			return `FixedSizeBinary[${this.byteWidth}]`;
		}
	};
	exports.FixedSizeBinary = FixedSizeBinary;
	_u = Symbol.toStringTag;
	FixedSizeBinary[_u] = ((proto) => {
		proto.byteWidth = null;
		proto.ArrayType = Uint8Array;
		return proto[Symbol.toStringTag] = "FixedSizeBinary";
	})(FixedSizeBinary.prototype);
	/** @ignore */
	var FixedSizeList = class extends DataType {
		constructor(listSize, child) {
			super(enum_js_1.Type.FixedSizeList);
			this.listSize = listSize;
			this.children = [child];
		}
		get valueType() {
			return this.children[0].type;
		}
		get valueField() {
			return this.children[0];
		}
		get ArrayType() {
			return this.valueType.ArrayType;
		}
		toString() {
			return `FixedSizeList[${this.listSize}]<${this.valueType}>`;
		}
	};
	exports.FixedSizeList = FixedSizeList;
	_v = Symbol.toStringTag;
	FixedSizeList[_v] = ((proto) => {
		proto.children = null;
		proto.listSize = null;
		return proto[Symbol.toStringTag] = "FixedSizeList";
	})(FixedSizeList.prototype);
	/** @ignore */
	var Map_ = class extends DataType {
		constructor(entries, keysSorted = false) {
			var _y, _z, _0;
			super(enum_js_1.Type.Map);
			this.children = [entries];
			this.keysSorted = keysSorted;
			if (entries) {
				entries["name"] = "entries";
				if ((_y = entries === null || entries === void 0 ? void 0 : entries.type) === null || _y === void 0 ? void 0 : _y.children) {
					const key = (_z = entries === null || entries === void 0 ? void 0 : entries.type) === null || _z === void 0 ? void 0 : _z.children[0];
					if (key) key["name"] = "key";
					const val = (_0 = entries === null || entries === void 0 ? void 0 : entries.type) === null || _0 === void 0 ? void 0 : _0.children[1];
					if (val) val["name"] = "value";
				}
			}
		}
		get keyType() {
			return this.children[0].type.children[0].type;
		}
		get valueType() {
			return this.children[0].type.children[1].type;
		}
		get childType() {
			return this.children[0].type;
		}
		toString() {
			return `Map<{${this.children[0].type.children.map((f) => `${f.name}:${f.type}`).join(`, `)}}>`;
		}
	};
	exports.Map_ = Map_;
	_w = Symbol.toStringTag;
	Map_[_w] = ((proto) => {
		proto.children = null;
		proto.keysSorted = null;
		return proto[Symbol.toStringTag] = "Map_";
	})(Map_.prototype);
	/** @ignore */
	var getId = ((atomicDictionaryId) => () => ++atomicDictionaryId)(-1);
	/** @ignore */
	var Dictionary = class extends DataType {
		constructor(dictionary, indices, id, isOrdered) {
			super(enum_js_1.Type.Dictionary);
			this.indices = indices;
			this.dictionary = dictionary;
			this.isOrdered = isOrdered || false;
			this.id = id == null ? getId() : (0, bigint_js_1.bigIntToNumber)(id);
		}
		get children() {
			return this.dictionary.children;
		}
		get valueType() {
			return this.dictionary;
		}
		get ArrayType() {
			return this.dictionary.ArrayType;
		}
		toString() {
			return `Dictionary<${this.indices}, ${this.dictionary}>`;
		}
	};
	exports.Dictionary = Dictionary;
	_x = Symbol.toStringTag;
	Dictionary[_x] = ((proto) => {
		proto.id = null;
		proto.indices = null;
		proto.isOrdered = null;
		proto.dictionary = null;
		return proto[Symbol.toStringTag] = "Dictionary";
	})(Dictionary.prototype);
	/** @ignore */
	function strideForType(type) {
		const t = type;
		switch (type.typeId) {
			case enum_js_1.Type.Decimal: return type.bitWidth / 32;
			case enum_js_1.Type.Interval:
				if (t.unit === enum_js_1.IntervalUnit.MONTH_DAY_NANO) return 4;
				return 1 + t.unit;
			case enum_js_1.Type.FixedSizeList: return t.listSize;
			case enum_js_1.Type.FixedSizeBinary: return t.byteWidth;
			default: return 1;
		}
	}
	exports.strideForType = strideForType;
}));
//#endregion
//#region node_modules/apache-arrow/visitor.js
var require_visitor = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Visitor = void 0;
	var enum_js_1 = require_enum();
	var type_js_1 = require_type();
	var Visitor = class {
		visitMany(nodes, ...args) {
			return nodes.map((node, i) => this.visit(node, ...args.map((x) => x[i])));
		}
		visit(...args) {
			return this.getVisitFn(args[0], false).apply(this, args);
		}
		getVisitFn(node, throwIfNotFound = true) {
			return getVisitFn(this, node, throwIfNotFound);
		}
		getVisitFnByTypeId(typeId, throwIfNotFound = true) {
			return getVisitFnByTypeId(this, typeId, throwIfNotFound);
		}
		visitNull(_node, ..._args) {
			return null;
		}
		visitBool(_node, ..._args) {
			return null;
		}
		visitInt(_node, ..._args) {
			return null;
		}
		visitFloat(_node, ..._args) {
			return null;
		}
		visitUtf8(_node, ..._args) {
			return null;
		}
		visitLargeUtf8(_node, ..._args) {
			return null;
		}
		visitBinary(_node, ..._args) {
			return null;
		}
		visitLargeBinary(_node, ..._args) {
			return null;
		}
		visitFixedSizeBinary(_node, ..._args) {
			return null;
		}
		visitDate(_node, ..._args) {
			return null;
		}
		visitTimestamp(_node, ..._args) {
			return null;
		}
		visitTime(_node, ..._args) {
			return null;
		}
		visitDecimal(_node, ..._args) {
			return null;
		}
		visitList(_node, ..._args) {
			return null;
		}
		visitStruct(_node, ..._args) {
			return null;
		}
		visitUnion(_node, ..._args) {
			return null;
		}
		visitDictionary(_node, ..._args) {
			return null;
		}
		visitInterval(_node, ..._args) {
			return null;
		}
		visitDuration(_node, ..._args) {
			return null;
		}
		visitFixedSizeList(_node, ..._args) {
			return null;
		}
		visitMap(_node, ..._args) {
			return null;
		}
	};
	exports.Visitor = Visitor;
	/** @ignore */
	function getVisitFn(visitor, node, throwIfNotFound = true) {
		if (typeof node === "number") return getVisitFnByTypeId(visitor, node, throwIfNotFound);
		if (typeof node === "string" && node in enum_js_1.Type) return getVisitFnByTypeId(visitor, enum_js_1.Type[node], throwIfNotFound);
		if (node && node instanceof type_js_1.DataType) return getVisitFnByTypeId(visitor, inferDType(node), throwIfNotFound);
		if ((node === null || node === void 0 ? void 0 : node.type) && node.type instanceof type_js_1.DataType) return getVisitFnByTypeId(visitor, inferDType(node.type), throwIfNotFound);
		return getVisitFnByTypeId(visitor, enum_js_1.Type.NONE, throwIfNotFound);
	}
	/** @ignore */
	function getVisitFnByTypeId(visitor, dtype, throwIfNotFound = true) {
		let fn = null;
		switch (dtype) {
			case enum_js_1.Type.Null:
				fn = visitor.visitNull;
				break;
			case enum_js_1.Type.Bool:
				fn = visitor.visitBool;
				break;
			case enum_js_1.Type.Int:
				fn = visitor.visitInt;
				break;
			case enum_js_1.Type.Int8:
				fn = visitor.visitInt8 || visitor.visitInt;
				break;
			case enum_js_1.Type.Int16:
				fn = visitor.visitInt16 || visitor.visitInt;
				break;
			case enum_js_1.Type.Int32:
				fn = visitor.visitInt32 || visitor.visitInt;
				break;
			case enum_js_1.Type.Int64:
				fn = visitor.visitInt64 || visitor.visitInt;
				break;
			case enum_js_1.Type.Uint8:
				fn = visitor.visitUint8 || visitor.visitInt;
				break;
			case enum_js_1.Type.Uint16:
				fn = visitor.visitUint16 || visitor.visitInt;
				break;
			case enum_js_1.Type.Uint32:
				fn = visitor.visitUint32 || visitor.visitInt;
				break;
			case enum_js_1.Type.Uint64:
				fn = visitor.visitUint64 || visitor.visitInt;
				break;
			case enum_js_1.Type.Float:
				fn = visitor.visitFloat;
				break;
			case enum_js_1.Type.Float16:
				fn = visitor.visitFloat16 || visitor.visitFloat;
				break;
			case enum_js_1.Type.Float32:
				fn = visitor.visitFloat32 || visitor.visitFloat;
				break;
			case enum_js_1.Type.Float64:
				fn = visitor.visitFloat64 || visitor.visitFloat;
				break;
			case enum_js_1.Type.Utf8:
				fn = visitor.visitUtf8;
				break;
			case enum_js_1.Type.LargeUtf8:
				fn = visitor.visitLargeUtf8;
				break;
			case enum_js_1.Type.Binary:
				fn = visitor.visitBinary;
				break;
			case enum_js_1.Type.LargeBinary:
				fn = visitor.visitLargeBinary;
				break;
			case enum_js_1.Type.FixedSizeBinary:
				fn = visitor.visitFixedSizeBinary;
				break;
			case enum_js_1.Type.Date:
				fn = visitor.visitDate;
				break;
			case enum_js_1.Type.DateDay:
				fn = visitor.visitDateDay || visitor.visitDate;
				break;
			case enum_js_1.Type.DateMillisecond:
				fn = visitor.visitDateMillisecond || visitor.visitDate;
				break;
			case enum_js_1.Type.Timestamp:
				fn = visitor.visitTimestamp;
				break;
			case enum_js_1.Type.TimestampSecond:
				fn = visitor.visitTimestampSecond || visitor.visitTimestamp;
				break;
			case enum_js_1.Type.TimestampMillisecond:
				fn = visitor.visitTimestampMillisecond || visitor.visitTimestamp;
				break;
			case enum_js_1.Type.TimestampMicrosecond:
				fn = visitor.visitTimestampMicrosecond || visitor.visitTimestamp;
				break;
			case enum_js_1.Type.TimestampNanosecond:
				fn = visitor.visitTimestampNanosecond || visitor.visitTimestamp;
				break;
			case enum_js_1.Type.Time:
				fn = visitor.visitTime;
				break;
			case enum_js_1.Type.TimeSecond:
				fn = visitor.visitTimeSecond || visitor.visitTime;
				break;
			case enum_js_1.Type.TimeMillisecond:
				fn = visitor.visitTimeMillisecond || visitor.visitTime;
				break;
			case enum_js_1.Type.TimeMicrosecond:
				fn = visitor.visitTimeMicrosecond || visitor.visitTime;
				break;
			case enum_js_1.Type.TimeNanosecond:
				fn = visitor.visitTimeNanosecond || visitor.visitTime;
				break;
			case enum_js_1.Type.Decimal:
				fn = visitor.visitDecimal;
				break;
			case enum_js_1.Type.List:
				fn = visitor.visitList;
				break;
			case enum_js_1.Type.Struct:
				fn = visitor.visitStruct;
				break;
			case enum_js_1.Type.Union:
				fn = visitor.visitUnion;
				break;
			case enum_js_1.Type.DenseUnion:
				fn = visitor.visitDenseUnion || visitor.visitUnion;
				break;
			case enum_js_1.Type.SparseUnion:
				fn = visitor.visitSparseUnion || visitor.visitUnion;
				break;
			case enum_js_1.Type.Dictionary:
				fn = visitor.visitDictionary;
				break;
			case enum_js_1.Type.Interval:
				fn = visitor.visitInterval;
				break;
			case enum_js_1.Type.IntervalDayTime:
				fn = visitor.visitIntervalDayTime || visitor.visitInterval;
				break;
			case enum_js_1.Type.IntervalYearMonth:
				fn = visitor.visitIntervalYearMonth || visitor.visitInterval;
				break;
			case enum_js_1.Type.IntervalMonthDayNano:
				fn = visitor.visitIntervalMonthDayNano || visitor.visitInterval;
				break;
			case enum_js_1.Type.Duration:
				fn = visitor.visitDuration;
				break;
			case enum_js_1.Type.DurationSecond:
				fn = visitor.visitDurationSecond || visitor.visitDuration;
				break;
			case enum_js_1.Type.DurationMillisecond:
				fn = visitor.visitDurationMillisecond || visitor.visitDuration;
				break;
			case enum_js_1.Type.DurationMicrosecond:
				fn = visitor.visitDurationMicrosecond || visitor.visitDuration;
				break;
			case enum_js_1.Type.DurationNanosecond:
				fn = visitor.visitDurationNanosecond || visitor.visitDuration;
				break;
			case enum_js_1.Type.FixedSizeList:
				fn = visitor.visitFixedSizeList;
				break;
			case enum_js_1.Type.Map:
				fn = visitor.visitMap;
				break;
		}
		if (typeof fn === "function") return fn;
		if (!throwIfNotFound) return () => null;
		throw new Error(`Unrecognized type '${enum_js_1.Type[dtype]}'`);
	}
	/** @ignore */
	function inferDType(type) {
		switch (type.typeId) {
			case enum_js_1.Type.Null: return enum_js_1.Type.Null;
			case enum_js_1.Type.Int: {
				const { bitWidth, isSigned } = type;
				switch (bitWidth) {
					case 8: return isSigned ? enum_js_1.Type.Int8 : enum_js_1.Type.Uint8;
					case 16: return isSigned ? enum_js_1.Type.Int16 : enum_js_1.Type.Uint16;
					case 32: return isSigned ? enum_js_1.Type.Int32 : enum_js_1.Type.Uint32;
					case 64: return isSigned ? enum_js_1.Type.Int64 : enum_js_1.Type.Uint64;
				}
				return enum_js_1.Type.Int;
			}
			case enum_js_1.Type.Float:
				switch (type.precision) {
					case enum_js_1.Precision.HALF: return enum_js_1.Type.Float16;
					case enum_js_1.Precision.SINGLE: return enum_js_1.Type.Float32;
					case enum_js_1.Precision.DOUBLE: return enum_js_1.Type.Float64;
				}
				return enum_js_1.Type.Float;
			case enum_js_1.Type.Binary: return enum_js_1.Type.Binary;
			case enum_js_1.Type.LargeBinary: return enum_js_1.Type.LargeBinary;
			case enum_js_1.Type.Utf8: return enum_js_1.Type.Utf8;
			case enum_js_1.Type.LargeUtf8: return enum_js_1.Type.LargeUtf8;
			case enum_js_1.Type.Bool: return enum_js_1.Type.Bool;
			case enum_js_1.Type.Decimal: return enum_js_1.Type.Decimal;
			case enum_js_1.Type.Time:
				switch (type.unit) {
					case enum_js_1.TimeUnit.SECOND: return enum_js_1.Type.TimeSecond;
					case enum_js_1.TimeUnit.MILLISECOND: return enum_js_1.Type.TimeMillisecond;
					case enum_js_1.TimeUnit.MICROSECOND: return enum_js_1.Type.TimeMicrosecond;
					case enum_js_1.TimeUnit.NANOSECOND: return enum_js_1.Type.TimeNanosecond;
				}
				return enum_js_1.Type.Time;
			case enum_js_1.Type.Timestamp:
				switch (type.unit) {
					case enum_js_1.TimeUnit.SECOND: return enum_js_1.Type.TimestampSecond;
					case enum_js_1.TimeUnit.MILLISECOND: return enum_js_1.Type.TimestampMillisecond;
					case enum_js_1.TimeUnit.MICROSECOND: return enum_js_1.Type.TimestampMicrosecond;
					case enum_js_1.TimeUnit.NANOSECOND: return enum_js_1.Type.TimestampNanosecond;
				}
				return enum_js_1.Type.Timestamp;
			case enum_js_1.Type.Date:
				switch (type.unit) {
					case enum_js_1.DateUnit.DAY: return enum_js_1.Type.DateDay;
					case enum_js_1.DateUnit.MILLISECOND: return enum_js_1.Type.DateMillisecond;
				}
				return enum_js_1.Type.Date;
			case enum_js_1.Type.Interval:
				switch (type.unit) {
					case enum_js_1.IntervalUnit.DAY_TIME: return enum_js_1.Type.IntervalDayTime;
					case enum_js_1.IntervalUnit.YEAR_MONTH: return enum_js_1.Type.IntervalYearMonth;
					case enum_js_1.IntervalUnit.MONTH_DAY_NANO: return enum_js_1.Type.IntervalMonthDayNano;
				}
				return enum_js_1.Type.Interval;
			case enum_js_1.Type.Duration:
				switch (type.unit) {
					case enum_js_1.TimeUnit.SECOND: return enum_js_1.Type.DurationSecond;
					case enum_js_1.TimeUnit.MILLISECOND: return enum_js_1.Type.DurationMillisecond;
					case enum_js_1.TimeUnit.MICROSECOND: return enum_js_1.Type.DurationMicrosecond;
					case enum_js_1.TimeUnit.NANOSECOND: return enum_js_1.Type.DurationNanosecond;
				}
				return enum_js_1.Type.Duration;
			case enum_js_1.Type.Map: return enum_js_1.Type.Map;
			case enum_js_1.Type.List: return enum_js_1.Type.List;
			case enum_js_1.Type.Struct: return enum_js_1.Type.Struct;
			case enum_js_1.Type.Union:
				switch (type.mode) {
					case enum_js_1.UnionMode.Dense: return enum_js_1.Type.DenseUnion;
					case enum_js_1.UnionMode.Sparse: return enum_js_1.Type.SparseUnion;
				}
				return enum_js_1.Type.Union;
			case enum_js_1.Type.FixedSizeBinary: return enum_js_1.Type.FixedSizeBinary;
			case enum_js_1.Type.FixedSizeList: return enum_js_1.Type.FixedSizeList;
			case enum_js_1.Type.Dictionary: return enum_js_1.Type.Dictionary;
		}
		throw new Error(`Unrecognized type '${enum_js_1.Type[type.typeId]}'`);
	}
	Visitor.prototype.visitInt8 = null;
	Visitor.prototype.visitInt16 = null;
	Visitor.prototype.visitInt32 = null;
	Visitor.prototype.visitInt64 = null;
	Visitor.prototype.visitUint8 = null;
	Visitor.prototype.visitUint16 = null;
	Visitor.prototype.visitUint32 = null;
	Visitor.prototype.visitUint64 = null;
	Visitor.prototype.visitFloat16 = null;
	Visitor.prototype.visitFloat32 = null;
	Visitor.prototype.visitFloat64 = null;
	Visitor.prototype.visitDateDay = null;
	Visitor.prototype.visitDateMillisecond = null;
	Visitor.prototype.visitTimestampSecond = null;
	Visitor.prototype.visitTimestampMillisecond = null;
	Visitor.prototype.visitTimestampMicrosecond = null;
	Visitor.prototype.visitTimestampNanosecond = null;
	Visitor.prototype.visitTimeSecond = null;
	Visitor.prototype.visitTimeMillisecond = null;
	Visitor.prototype.visitTimeMicrosecond = null;
	Visitor.prototype.visitTimeNanosecond = null;
	Visitor.prototype.visitDenseUnion = null;
	Visitor.prototype.visitSparseUnion = null;
	Visitor.prototype.visitIntervalDayTime = null;
	Visitor.prototype.visitIntervalYearMonth = null;
	Visitor.prototype.visitIntervalMonthDayNano = null;
	Visitor.prototype.visitDuration = null;
	Visitor.prototype.visitDurationSecond = null;
	Visitor.prototype.visitDurationMillisecond = null;
	Visitor.prototype.visitDurationMicrosecond = null;
	Visitor.prototype.visitDurationNanosecond = null;
}));
//#endregion
//#region node_modules/apache-arrow/util/math.js
var require_math = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.float64ToUint16 = exports.uint16ToFloat64 = void 0;
	var f64 = new Float64Array(1);
	var u32 = new Uint32Array(f64.buffer);
	/**
	* Convert uint16 (logically a float16) to a JS float64. Inspired by numpy's `npy_half_to_double`:
	* https://github.com/numpy/numpy/blob/5a5987291dc95376bb098be8d8e5391e89e77a2c/numpy/core/src/npymath/halffloat.c#L29
	* @param h {number} the uint16 to convert
	* @private
	* @ignore
	*/
	function uint16ToFloat64(h) {
		const expo = (h & 31744) >> 10;
		const sigf = (h & 1023) / 1024;
		const sign = Math.pow(-1, (h & 32768) >> 15);
		switch (expo) {
			case 31: return sign * (sigf ? NaN : Infinity);
			case 0: return sign * (sigf ? 6103515625e-14 * sigf : 0);
		}
		return sign * Math.pow(2, expo - 15) * (1 + sigf);
	}
	exports.uint16ToFloat64 = uint16ToFloat64;
	/**
	* Convert a float64 to uint16 (assuming the float64 is logically a float16). Inspired by numpy's `npy_double_to_half`:
	* https://github.com/numpy/numpy/blob/5a5987291dc95376bb098be8d8e5391e89e77a2c/numpy/core/src/npymath/halffloat.c#L43
	* @param d {number} The float64 to convert
	* @private
	* @ignore
	*/
	function float64ToUint16(d) {
		if (d !== d) return 32256;
		f64[0] = d;
		const sign = (u32[1] & 2147483648) >> 16 & 65535;
		let expo = u32[1] & 2146435072, sigf = 0;
		if (expo >= 1089470464) if (u32[0] > 0) expo = 31744;
		else {
			expo = (expo & 2080374784) >> 16;
			sigf = (u32[1] & 1048575) >> 10;
		}
		else if (expo <= 1056964608) {
			sigf = 1048576 + (u32[1] & 1048575);
			sigf = 1048576 + (sigf << (expo >> 20) - 998) >> 21;
			expo = 0;
		} else {
			expo = expo - 1056964608 >> 10;
			sigf = (u32[1] & 1048575) + 512 >> 10;
		}
		return sign | expo | sigf & 65535;
	}
	exports.float64ToUint16 = float64ToUint16;
}));
//#endregion
//#region node_modules/apache-arrow/visitor/set.js
var require_set = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.instance = exports.setDuration = exports.setDurationNanosecond = exports.setDurationMicrosecond = exports.setDurationMillisecond = exports.setDurationSecond = exports.setIntervalMonthDayNano = exports.setIntervalYearMonth = exports.setIntervalDayTime = exports.setIntervalValue = exports.setDecimal = exports.setTime = exports.setTimeNanosecond = exports.setTimeMicrosecond = exports.setTimeMillisecond = exports.setTimeSecond = exports.setTimestamp = exports.setTimestampNanosecond = exports.setTimestampMicrosecond = exports.setTimestampMillisecond = exports.setTimestampSecond = exports.setDate = exports.setFixedSizeBinary = exports.setDateMillisecond = exports.setDateDay = exports.setAnyFloat = exports.setFloat16 = exports.setFloat = exports.setInt = exports.setVariableWidthBytes = exports.setEpochMsToDays = exports.SetVisitor = void 0;
	var vector_js_1 = require_vector();
	var visitor_js_1 = require_visitor();
	var bigint_js_1 = require_bigint();
	var utf8_js_1 = require_utf8$2();
	var math_js_1 = require_math();
	var enum_js_1 = require_enum();
	/** @ignore */
	var SetVisitor = class extends visitor_js_1.Visitor {};
	exports.SetVisitor = SetVisitor;
	/** @ignore */
	function wrapSet(fn) {
		return (data, _1, _2) => {
			if (data.setValid(_1, _2 != null)) return fn(data, _1, _2);
		};
	}
	/** @ignore */
	var setEpochMsToDays = (data, index, epochMs) => {
		data[index] = Math.floor(epochMs / 864e5);
	};
	exports.setEpochMsToDays = setEpochMsToDays;
	/** @ignore */
	var setVariableWidthBytes = (values, valueOffsets, index, value) => {
		if (index + 1 < valueOffsets.length) {
			const x = (0, bigint_js_1.bigIntToNumber)(valueOffsets[index]);
			const y = (0, bigint_js_1.bigIntToNumber)(valueOffsets[index + 1]);
			values.set(value.subarray(0, y - x), x);
		}
	};
	exports.setVariableWidthBytes = setVariableWidthBytes;
	/** @ignore */
	var setBool = ({ offset, values }, index, val) => {
		const idx = offset + index;
		val ? values[idx >> 3] |= 1 << idx % 8 : values[idx >> 3] &= ~(1 << idx % 8);
	};
	/** @ignore */
	var setInt = ({ values }, index, value) => {
		values[index] = value;
	};
	exports.setInt = setInt;
	/** @ignore */
	var setFloat = ({ values }, index, value) => {
		values[index] = value;
	};
	exports.setFloat = setFloat;
	/** @ignore */
	var setFloat16 = ({ values }, index, value) => {
		values[index] = (0, math_js_1.float64ToUint16)(value);
	};
	exports.setFloat16 = setFloat16;
	/* istanbul ignore next */
	/** @ignore */
	var setAnyFloat = (data, index, value) => {
		switch (data.type.precision) {
			case enum_js_1.Precision.HALF: return (0, exports.setFloat16)(data, index, value);
			case enum_js_1.Precision.SINGLE:
			case enum_js_1.Precision.DOUBLE: return (0, exports.setFloat)(data, index, value);
		}
	};
	exports.setAnyFloat = setAnyFloat;
	/** @ignore */
	var setDateDay = ({ values }, index, value) => {
		(0, exports.setEpochMsToDays)(values, index, value.valueOf());
	};
	exports.setDateDay = setDateDay;
	/** @ignore */
	var setDateMillisecond = ({ values }, index, value) => {
		values[index] = BigInt(value);
	};
	exports.setDateMillisecond = setDateMillisecond;
	/** @ignore */
	var setFixedSizeBinary = ({ stride, values }, index, value) => {
		values.set(value.subarray(0, stride), stride * index);
	};
	exports.setFixedSizeBinary = setFixedSizeBinary;
	/** @ignore */
	var setBinary = ({ values, valueOffsets }, index, value) => (0, exports.setVariableWidthBytes)(values, valueOffsets, index, value);
	/** @ignore */
	var setUtf8 = ({ values, valueOffsets }, index, value) => (0, exports.setVariableWidthBytes)(values, valueOffsets, index, (0, utf8_js_1.encodeUtf8)(value));
	/* istanbul ignore next */
	var setDate = (data, index, value) => {
		data.type.unit === enum_js_1.DateUnit.DAY ? (0, exports.setDateDay)(data, index, value) : (0, exports.setDateMillisecond)(data, index, value);
	};
	exports.setDate = setDate;
	/** @ignore */
	var setTimestampSecond = ({ values }, index, value) => {
		values[index] = BigInt(value / 1e3);
	};
	exports.setTimestampSecond = setTimestampSecond;
	/** @ignore */
	var setTimestampMillisecond = ({ values }, index, value) => {
		values[index] = BigInt(value);
	};
	exports.setTimestampMillisecond = setTimestampMillisecond;
	/** @ignore */
	var setTimestampMicrosecond = ({ values }, index, value) => {
		values[index] = BigInt(value * 1e3);
	};
	exports.setTimestampMicrosecond = setTimestampMicrosecond;
	/** @ignore */
	var setTimestampNanosecond = ({ values }, index, value) => {
		values[index] = BigInt(value * 1e6);
	};
	exports.setTimestampNanosecond = setTimestampNanosecond;
	/* istanbul ignore next */
	/** @ignore */
	var setTimestamp = (data, index, value) => {
		switch (data.type.unit) {
			case enum_js_1.TimeUnit.SECOND: return (0, exports.setTimestampSecond)(data, index, value);
			case enum_js_1.TimeUnit.MILLISECOND: return (0, exports.setTimestampMillisecond)(data, index, value);
			case enum_js_1.TimeUnit.MICROSECOND: return (0, exports.setTimestampMicrosecond)(data, index, value);
			case enum_js_1.TimeUnit.NANOSECOND: return (0, exports.setTimestampNanosecond)(data, index, value);
		}
	};
	exports.setTimestamp = setTimestamp;
	/** @ignore */
	var setTimeSecond = ({ values }, index, value) => {
		values[index] = value;
	};
	exports.setTimeSecond = setTimeSecond;
	/** @ignore */
	var setTimeMillisecond = ({ values }, index, value) => {
		values[index] = value;
	};
	exports.setTimeMillisecond = setTimeMillisecond;
	/** @ignore */
	var setTimeMicrosecond = ({ values }, index, value) => {
		values[index] = value;
	};
	exports.setTimeMicrosecond = setTimeMicrosecond;
	/** @ignore */
	var setTimeNanosecond = ({ values }, index, value) => {
		values[index] = value;
	};
	exports.setTimeNanosecond = setTimeNanosecond;
	/* istanbul ignore next */
	/** @ignore */
	var setTime = (data, index, value) => {
		switch (data.type.unit) {
			case enum_js_1.TimeUnit.SECOND: return (0, exports.setTimeSecond)(data, index, value);
			case enum_js_1.TimeUnit.MILLISECOND: return (0, exports.setTimeMillisecond)(data, index, value);
			case enum_js_1.TimeUnit.MICROSECOND: return (0, exports.setTimeMicrosecond)(data, index, value);
			case enum_js_1.TimeUnit.NANOSECOND: return (0, exports.setTimeNanosecond)(data, index, value);
		}
	};
	exports.setTime = setTime;
	/** @ignore */
	var setDecimal = ({ values, stride }, index, value) => {
		values.set(value.subarray(0, stride), stride * index);
	};
	exports.setDecimal = setDecimal;
	/** @ignore */
	var setList = (data, index, value) => {
		const values = data.children[0];
		const valueOffsets = data.valueOffsets;
		const set = exports.instance.getVisitFn(values);
		if (Array.isArray(value)) for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end;) set(values, itr++, value[++idx]);
		else for (let idx = -1, itr = valueOffsets[index], end = valueOffsets[index + 1]; itr < end;) set(values, itr++, value.get(++idx));
	};
	/** @ignore */
	var setMap = (data, index, value) => {
		const values = data.children[0];
		const { valueOffsets } = data;
		const set = exports.instance.getVisitFn(values);
		let { [index]: idx, [index + 1]: end } = valueOffsets;
		const entries = value instanceof Map ? value.entries() : Object.entries(value);
		for (const val of entries) {
			set(values, idx, val);
			if (++idx >= end) break;
		}
	};
	/** @ignore */ var _setStructArrayValue = (o, v) => (set, c, _, i) => c && set(c, o, v[i]);
	/** @ignore */ var _setStructVectorValue = (o, v) => (set, c, _, i) => c && set(c, o, v.get(i));
	/** @ignore */ var _setStructMapValue = (o, v) => (set, c, f, _) => c && set(c, o, v.get(f.name));
	/** @ignore */ var _setStructObjectValue = (o, v) => (set, c, f, _) => c && set(c, o, v[f.name]);
	/** @ignore */
	var setStruct = (data, index, value) => {
		const childSetters = data.type.children.map((f) => exports.instance.getVisitFn(f.type));
		const set = value instanceof Map ? _setStructMapValue(index, value) : value instanceof vector_js_1.Vector ? _setStructVectorValue(index, value) : Array.isArray(value) ? _setStructArrayValue(index, value) : _setStructObjectValue(index, value);
		data.type.children.forEach((f, i) => set(childSetters[i], data.children[i], f, i));
	};
	/* istanbul ignore next */
	/** @ignore */
	var setUnion = (data, index, value) => {
		data.type.mode === enum_js_1.UnionMode.Dense ? setDenseUnion(data, index, value) : setSparseUnion(data, index, value);
	};
	/** @ignore */
	var setDenseUnion = (data, index, value) => {
		const childIndex = data.type.typeIdToChildIndex[data.typeIds[index]];
		const child = data.children[childIndex];
		exports.instance.visit(child, data.valueOffsets[index], value);
	};
	/** @ignore */
	var setSparseUnion = (data, index, value) => {
		const childIndex = data.type.typeIdToChildIndex[data.typeIds[index]];
		const child = data.children[childIndex];
		exports.instance.visit(child, index, value);
	};
	/** @ignore */
	var setDictionary = (data, index, value) => {
		var _a;
		(_a = data.dictionary) === null || _a === void 0 || _a.set(data.values[index], value);
	};
	/* istanbul ignore next */
	/** @ignore */
	var setIntervalValue = (data, index, value) => {
		switch (data.type.unit) {
			case enum_js_1.IntervalUnit.YEAR_MONTH: return (0, exports.setIntervalYearMonth)(data, index, value);
			case enum_js_1.IntervalUnit.DAY_TIME: return (0, exports.setIntervalDayTime)(data, index, value);
			case enum_js_1.IntervalUnit.MONTH_DAY_NANO: return (0, exports.setIntervalMonthDayNano)(data, index, value);
		}
	};
	exports.setIntervalValue = setIntervalValue;
	/** @ignore */
	var setIntervalDayTime = ({ values }, index, value) => {
		values.set(value.subarray(0, 2), 2 * index);
	};
	exports.setIntervalDayTime = setIntervalDayTime;
	/** @ignore */
	var setIntervalYearMonth = ({ values }, index, value) => {
		values[index] = value[0] * 12 + value[1] % 12;
	};
	exports.setIntervalYearMonth = setIntervalYearMonth;
	/** @ignore */
	var setIntervalMonthDayNano = ({ values, stride }, index, value) => {
		values.set(value.subarray(0, stride), stride * index);
	};
	exports.setIntervalMonthDayNano = setIntervalMonthDayNano;
	/** @ignore */
	var setDurationSecond = ({ values }, index, value) => {
		values[index] = value;
	};
	exports.setDurationSecond = setDurationSecond;
	/** @ignore */
	var setDurationMillisecond = ({ values }, index, value) => {
		values[index] = value;
	};
	exports.setDurationMillisecond = setDurationMillisecond;
	/** @ignore */
	var setDurationMicrosecond = ({ values }, index, value) => {
		values[index] = value;
	};
	exports.setDurationMicrosecond = setDurationMicrosecond;
	/** @ignore */
	var setDurationNanosecond = ({ values }, index, value) => {
		values[index] = value;
	};
	exports.setDurationNanosecond = setDurationNanosecond;
	/* istanbul ignore next */
	/** @ignore */
	var setDuration = (data, index, value) => {
		switch (data.type.unit) {
			case enum_js_1.TimeUnit.SECOND: return (0, exports.setDurationSecond)(data, index, value);
			case enum_js_1.TimeUnit.MILLISECOND: return (0, exports.setDurationMillisecond)(data, index, value);
			case enum_js_1.TimeUnit.MICROSECOND: return (0, exports.setDurationMicrosecond)(data, index, value);
			case enum_js_1.TimeUnit.NANOSECOND: return (0, exports.setDurationNanosecond)(data, index, value);
		}
	};
	exports.setDuration = setDuration;
	/** @ignore */
	var setFixedSizeList = (data, index, value) => {
		const { stride } = data;
		const child = data.children[0];
		const set = exports.instance.getVisitFn(child);
		if (Array.isArray(value)) for (let idx = -1, offset = index * stride; ++idx < stride;) set(child, offset + idx, value[idx]);
		else for (let idx = -1, offset = index * stride; ++idx < stride;) set(child, offset + idx, value.get(idx));
	};
	SetVisitor.prototype.visitBool = wrapSet(setBool);
	SetVisitor.prototype.visitInt = wrapSet(exports.setInt);
	SetVisitor.prototype.visitInt8 = wrapSet(exports.setInt);
	SetVisitor.prototype.visitInt16 = wrapSet(exports.setInt);
	SetVisitor.prototype.visitInt32 = wrapSet(exports.setInt);
	SetVisitor.prototype.visitInt64 = wrapSet(exports.setInt);
	SetVisitor.prototype.visitUint8 = wrapSet(exports.setInt);
	SetVisitor.prototype.visitUint16 = wrapSet(exports.setInt);
	SetVisitor.prototype.visitUint32 = wrapSet(exports.setInt);
	SetVisitor.prototype.visitUint64 = wrapSet(exports.setInt);
	SetVisitor.prototype.visitFloat = wrapSet(exports.setAnyFloat);
	SetVisitor.prototype.visitFloat16 = wrapSet(exports.setFloat16);
	SetVisitor.prototype.visitFloat32 = wrapSet(exports.setFloat);
	SetVisitor.prototype.visitFloat64 = wrapSet(exports.setFloat);
	SetVisitor.prototype.visitUtf8 = wrapSet(setUtf8);
	SetVisitor.prototype.visitLargeUtf8 = wrapSet(setUtf8);
	SetVisitor.prototype.visitBinary = wrapSet(setBinary);
	SetVisitor.prototype.visitLargeBinary = wrapSet(setBinary);
	SetVisitor.prototype.visitFixedSizeBinary = wrapSet(exports.setFixedSizeBinary);
	SetVisitor.prototype.visitDate = wrapSet(exports.setDate);
	SetVisitor.prototype.visitDateDay = wrapSet(exports.setDateDay);
	SetVisitor.prototype.visitDateMillisecond = wrapSet(exports.setDateMillisecond);
	SetVisitor.prototype.visitTimestamp = wrapSet(exports.setTimestamp);
	SetVisitor.prototype.visitTimestampSecond = wrapSet(exports.setTimestampSecond);
	SetVisitor.prototype.visitTimestampMillisecond = wrapSet(exports.setTimestampMillisecond);
	SetVisitor.prototype.visitTimestampMicrosecond = wrapSet(exports.setTimestampMicrosecond);
	SetVisitor.prototype.visitTimestampNanosecond = wrapSet(exports.setTimestampNanosecond);
	SetVisitor.prototype.visitTime = wrapSet(exports.setTime);
	SetVisitor.prototype.visitTimeSecond = wrapSet(exports.setTimeSecond);
	SetVisitor.prototype.visitTimeMillisecond = wrapSet(exports.setTimeMillisecond);
	SetVisitor.prototype.visitTimeMicrosecond = wrapSet(exports.setTimeMicrosecond);
	SetVisitor.prototype.visitTimeNanosecond = wrapSet(exports.setTimeNanosecond);
	SetVisitor.prototype.visitDecimal = wrapSet(exports.setDecimal);
	SetVisitor.prototype.visitList = wrapSet(setList);
	SetVisitor.prototype.visitStruct = wrapSet(setStruct);
	SetVisitor.prototype.visitUnion = wrapSet(setUnion);
	SetVisitor.prototype.visitDenseUnion = wrapSet(setDenseUnion);
	SetVisitor.prototype.visitSparseUnion = wrapSet(setSparseUnion);
	SetVisitor.prototype.visitDictionary = wrapSet(setDictionary);
	SetVisitor.prototype.visitInterval = wrapSet(exports.setIntervalValue);
	SetVisitor.prototype.visitIntervalDayTime = wrapSet(exports.setIntervalDayTime);
	SetVisitor.prototype.visitIntervalYearMonth = wrapSet(exports.setIntervalYearMonth);
	SetVisitor.prototype.visitIntervalMonthDayNano = wrapSet(exports.setIntervalMonthDayNano);
	SetVisitor.prototype.visitDuration = wrapSet(exports.setDuration);
	SetVisitor.prototype.visitDurationSecond = wrapSet(exports.setDurationSecond);
	SetVisitor.prototype.visitDurationMillisecond = wrapSet(exports.setDurationMillisecond);
	SetVisitor.prototype.visitDurationMicrosecond = wrapSet(exports.setDurationMicrosecond);
	SetVisitor.prototype.visitDurationNanosecond = wrapSet(exports.setDurationNanosecond);
	SetVisitor.prototype.visitFixedSizeList = wrapSet(setFixedSizeList);
	SetVisitor.prototype.visitMap = wrapSet(setMap);
	/** @ignore */
	exports.instance = new SetVisitor();
}));
//#endregion
//#region node_modules/apache-arrow/row/struct.js
var require_struct$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.StructRow = void 0;
	var pretty_js_1 = require_pretty();
	var get_js_1 = require_get();
	var set_js_1 = require_set();
	/** @ignore */ var kParent = Symbol.for("parent");
	/** @ignore */ var kRowIndex = Symbol.for("rowIndex");
	var StructRow = class {
		constructor(parent, rowIndex) {
			this[kParent] = parent;
			this[kRowIndex] = rowIndex;
			return new Proxy(this, structRowProxyHandler);
		}
		toArray() {
			return Object.values(this.toJSON());
		}
		toJSON() {
			const i = this[kRowIndex];
			const parent = this[kParent];
			const keys = parent.type.children;
			const json = {};
			for (let j = -1, n = keys.length; ++j < n;) json[keys[j].name] = get_js_1.instance.visit(parent.children[j], i);
			return json;
		}
		toString() {
			return `{${[...this].map(([key, val]) => `${(0, pretty_js_1.valueToString)(key)}: ${(0, pretty_js_1.valueToString)(val)}`).join(", ")}}`;
		}
		[Symbol.for("nodejs.util.inspect.custom")]() {
			return this.toString();
		}
		[Symbol.iterator]() {
			return new StructRowIterator(this[kParent], this[kRowIndex]);
		}
	};
	exports.StructRow = StructRow;
	var StructRowIterator = class {
		constructor(data, rowIndex) {
			this.childIndex = 0;
			this.children = data.children;
			this.rowIndex = rowIndex;
			this.childFields = data.type.children;
			this.numChildren = this.childFields.length;
		}
		[Symbol.iterator]() {
			return this;
		}
		next() {
			const i = this.childIndex;
			if (i < this.numChildren) {
				this.childIndex = i + 1;
				return {
					done: false,
					value: [this.childFields[i].name, get_js_1.instance.visit(this.children[i], this.rowIndex)]
				};
			}
			return {
				done: true,
				value: null
			};
		}
	};
	Object.defineProperties(StructRow.prototype, {
		[Symbol.toStringTag]: {
			enumerable: false,
			configurable: false,
			value: "Row"
		},
		[kParent]: {
			writable: true,
			enumerable: false,
			configurable: false,
			value: null
		},
		[kRowIndex]: {
			writable: true,
			enumerable: false,
			configurable: false,
			value: -1
		}
	});
	var StructRowProxyHandler = class {
		isExtensible() {
			return false;
		}
		deleteProperty() {
			return false;
		}
		preventExtensions() {
			return true;
		}
		ownKeys(row) {
			return row[kParent].type.children.map((f) => f.name);
		}
		has(row, key) {
			return row[kParent].type.children.some((f) => f.name === key);
		}
		getOwnPropertyDescriptor(row, key) {
			if (row[kParent].type.children.some((f) => f.name === key)) return {
				writable: true,
				enumerable: true,
				configurable: true
			};
		}
		get(row, key) {
			if (Reflect.has(row, key)) return row[key];
			const idx = row[kParent].type.children.findIndex((f) => f.name === key);
			if (idx !== -1) {
				const val = get_js_1.instance.visit(row[kParent].children[idx], row[kRowIndex]);
				Reflect.set(row, key, val);
				return val;
			}
		}
		set(row, key, val) {
			const idx = row[kParent].type.children.findIndex((f) => f.name === key);
			if (idx !== -1) {
				set_js_1.instance.visit(row[kParent].children[idx], row[kRowIndex], val);
				return Reflect.set(row, key, val);
			} else if (Reflect.has(row, key) || typeof key === "symbol") return Reflect.set(row, key, val);
			return false;
		}
	};
	var structRowProxyHandler = new StructRowProxyHandler();
}));
//#endregion
//#region node_modules/apache-arrow/visitor/get.js
var require_get = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.instance = exports.GetVisitor = void 0;
	var bn_js_1 = require_bn();
	var vector_js_1 = require_vector();
	var visitor_js_1 = require_visitor();
	var map_js_1 = require_map$1();
	var struct_js_1 = require_struct$1();
	var bigint_js_1 = require_bigint();
	var utf8_js_1 = require_utf8$2();
	var math_js_1 = require_math();
	var enum_js_1 = require_enum();
	/** @ignore */
	var GetVisitor = class extends visitor_js_1.Visitor {};
	exports.GetVisitor = GetVisitor;
	/** @ignore */
	function wrapGet(fn) {
		return (data, _1) => data.getValid(_1) ? fn(data, _1) : null;
	}
	/** @ignore */ var epochDaysToMs = (data, index) => 864e5 * data[index];
	/** @ignore */
	var getNull = (_data, _index) => null;
	/** @ignore */
	var getVariableWidthBytes = (values, valueOffsets, index) => {
		if (index + 1 >= valueOffsets.length) return null;
		const x = (0, bigint_js_1.bigIntToNumber)(valueOffsets[index]);
		const y = (0, bigint_js_1.bigIntToNumber)(valueOffsets[index + 1]);
		return values.subarray(x, y);
	};
	/** @ignore */
	var getBool = ({ offset, values }, index) => {
		const idx = offset + index;
		return (values[idx >> 3] & 1 << idx % 8) !== 0;
	};
	/** @ignore */
	var getDateDay = ({ values }, index) => epochDaysToMs(values, index);
	/** @ignore */
	var getDateMillisecond = ({ values }, index) => (0, bigint_js_1.bigIntToNumber)(values[index]);
	/** @ignore */
	var getNumeric = ({ stride, values }, index) => values[stride * index];
	/** @ignore */
	var getFloat16 = ({ stride, values }, index) => (0, math_js_1.uint16ToFloat64)(values[stride * index]);
	/** @ignore */
	var getBigInts = ({ values }, index) => values[index];
	/** @ignore */
	var getFixedSizeBinary = ({ stride, values }, index) => values.subarray(stride * index, stride * (index + 1));
	/** @ignore */
	var getBinary = ({ values, valueOffsets }, index) => getVariableWidthBytes(values, valueOffsets, index);
	/** @ignore */
	var getUtf8 = ({ values, valueOffsets }, index) => {
		const bytes = getVariableWidthBytes(values, valueOffsets, index);
		return bytes !== null ? (0, utf8_js_1.decodeUtf8)(bytes) : null;
	};
	/* istanbul ignore next */
	/** @ignore */
	var getInt = ({ values }, index) => values[index];
	/* istanbul ignore next */
	/** @ignore */
	var getFloat = ({ type, values }, index) => type.precision !== enum_js_1.Precision.HALF ? values[index] : (0, math_js_1.uint16ToFloat64)(values[index]);
	/* istanbul ignore next */
	/** @ignore */
	var getDate = (data, index) => data.type.unit === enum_js_1.DateUnit.DAY ? getDateDay(data, index) : getDateMillisecond(data, index);
	/** @ignore */
	var getTimestampSecond = ({ values }, index) => 1e3 * (0, bigint_js_1.bigIntToNumber)(values[index]);
	/** @ignore */
	var getTimestampMillisecond = ({ values }, index) => (0, bigint_js_1.bigIntToNumber)(values[index]);
	/** @ignore */
	var getTimestampMicrosecond = ({ values }, index) => (0, bigint_js_1.divideBigInts)(values[index], BigInt(1e3));
	/** @ignore */
	var getTimestampNanosecond = ({ values }, index) => (0, bigint_js_1.divideBigInts)(values[index], BigInt(1e6));
	/* istanbul ignore next */
	/** @ignore */
	var getTimestamp = (data, index) => {
		switch (data.type.unit) {
			case enum_js_1.TimeUnit.SECOND: return getTimestampSecond(data, index);
			case enum_js_1.TimeUnit.MILLISECOND: return getTimestampMillisecond(data, index);
			case enum_js_1.TimeUnit.MICROSECOND: return getTimestampMicrosecond(data, index);
			case enum_js_1.TimeUnit.NANOSECOND: return getTimestampNanosecond(data, index);
		}
	};
	/** @ignore */
	var getTimeSecond = ({ values }, index) => values[index];
	/** @ignore */
	var getTimeMillisecond = ({ values }, index) => values[index];
	/** @ignore */
	var getTimeMicrosecond = ({ values }, index) => values[index];
	/** @ignore */
	var getTimeNanosecond = ({ values }, index) => values[index];
	/* istanbul ignore next */
	/** @ignore */
	var getTime = (data, index) => {
		switch (data.type.unit) {
			case enum_js_1.TimeUnit.SECOND: return getTimeSecond(data, index);
			case enum_js_1.TimeUnit.MILLISECOND: return getTimeMillisecond(data, index);
			case enum_js_1.TimeUnit.MICROSECOND: return getTimeMicrosecond(data, index);
			case enum_js_1.TimeUnit.NANOSECOND: return getTimeNanosecond(data, index);
		}
	};
	/** @ignore */
	var getDecimal = ({ values, stride }, index) => bn_js_1.BN.decimal(values.subarray(stride * index, stride * (index + 1)));
	/** @ignore */
	var getList = (data, index) => {
		const { valueOffsets, stride, children } = data;
		const { [index * stride]: begin, [index * stride + 1]: end } = valueOffsets;
		const slice = children[0].slice(begin, end - begin);
		return new vector_js_1.Vector([slice]);
	};
	/** @ignore */
	var getMap = (data, index) => {
		const { valueOffsets, children } = data;
		const { [index]: begin, [index + 1]: end } = valueOffsets;
		const child = children[0];
		return new map_js_1.MapRow(child.slice(begin, end - begin));
	};
	/** @ignore */
	var getStruct = (data, index) => {
		return new struct_js_1.StructRow(data, index);
	};
	/* istanbul ignore next */
	/** @ignore */
	var getUnion = (data, index) => {
		return data.type.mode === enum_js_1.UnionMode.Dense ? getDenseUnion(data, index) : getSparseUnion(data, index);
	};
	/** @ignore */
	var getDenseUnion = (data, index) => {
		const childIndex = data.type.typeIdToChildIndex[data.typeIds[index]];
		const child = data.children[childIndex];
		return exports.instance.visit(child, data.valueOffsets[index]);
	};
	/** @ignore */
	var getSparseUnion = (data, index) => {
		const childIndex = data.type.typeIdToChildIndex[data.typeIds[index]];
		const child = data.children[childIndex];
		return exports.instance.visit(child, index);
	};
	/** @ignore */
	var getDictionary = (data, index) => {
		var _a;
		return (_a = data.dictionary) === null || _a === void 0 ? void 0 : _a.get(data.values[index]);
	};
	/* istanbul ignore next */
	/** @ignore */
	var getInterval = (data, index) => data.type.unit === enum_js_1.IntervalUnit.MONTH_DAY_NANO ? getIntervalMonthDayNano(data, index) : data.type.unit === enum_js_1.IntervalUnit.DAY_TIME ? getIntervalDayTime(data, index) : getIntervalYearMonth(data, index);
	/** @ignore */
	var getIntervalDayTime = ({ values }, index) => values.subarray(2 * index, 2 * (index + 1));
	/** @ignore */
	var getIntervalYearMonth = ({ values }, index) => {
		const interval = values[index];
		const int32s = new Int32Array(2);
		int32s[0] = Math.trunc(interval / 12);
		int32s[1] = Math.trunc(interval % 12);
		return int32s;
	};
	/** @ignore */
	var getIntervalMonthDayNano = ({ values }, index) => values.subarray(4 * index, 4 * (index + 1));
	/** @ignore */
	var getDurationSecond = ({ values }, index) => values[index];
	/** @ignore */
	var getDurationMillisecond = ({ values }, index) => values[index];
	/** @ignore */
	var getDurationMicrosecond = ({ values }, index) => values[index];
	/** @ignore */
	var getDurationNanosecond = ({ values }, index) => values[index];
	/* istanbul ignore next */
	/** @ignore */
	var getDuration = (data, index) => {
		switch (data.type.unit) {
			case enum_js_1.TimeUnit.SECOND: return getDurationSecond(data, index);
			case enum_js_1.TimeUnit.MILLISECOND: return getDurationMillisecond(data, index);
			case enum_js_1.TimeUnit.MICROSECOND: return getDurationMicrosecond(data, index);
			case enum_js_1.TimeUnit.NANOSECOND: return getDurationNanosecond(data, index);
		}
	};
	/** @ignore */
	var getFixedSizeList = (data, index) => {
		const { stride, children } = data;
		const slice = children[0].slice(index * stride, stride);
		return new vector_js_1.Vector([slice]);
	};
	GetVisitor.prototype.visitNull = wrapGet(getNull);
	GetVisitor.prototype.visitBool = wrapGet(getBool);
	GetVisitor.prototype.visitInt = wrapGet(getInt);
	GetVisitor.prototype.visitInt8 = wrapGet(getNumeric);
	GetVisitor.prototype.visitInt16 = wrapGet(getNumeric);
	GetVisitor.prototype.visitInt32 = wrapGet(getNumeric);
	GetVisitor.prototype.visitInt64 = wrapGet(getBigInts);
	GetVisitor.prototype.visitUint8 = wrapGet(getNumeric);
	GetVisitor.prototype.visitUint16 = wrapGet(getNumeric);
	GetVisitor.prototype.visitUint32 = wrapGet(getNumeric);
	GetVisitor.prototype.visitUint64 = wrapGet(getBigInts);
	GetVisitor.prototype.visitFloat = wrapGet(getFloat);
	GetVisitor.prototype.visitFloat16 = wrapGet(getFloat16);
	GetVisitor.prototype.visitFloat32 = wrapGet(getNumeric);
	GetVisitor.prototype.visitFloat64 = wrapGet(getNumeric);
	GetVisitor.prototype.visitUtf8 = wrapGet(getUtf8);
	GetVisitor.prototype.visitLargeUtf8 = wrapGet(getUtf8);
	GetVisitor.prototype.visitBinary = wrapGet(getBinary);
	GetVisitor.prototype.visitLargeBinary = wrapGet(getBinary);
	GetVisitor.prototype.visitFixedSizeBinary = wrapGet(getFixedSizeBinary);
	GetVisitor.prototype.visitDate = wrapGet(getDate);
	GetVisitor.prototype.visitDateDay = wrapGet(getDateDay);
	GetVisitor.prototype.visitDateMillisecond = wrapGet(getDateMillisecond);
	GetVisitor.prototype.visitTimestamp = wrapGet(getTimestamp);
	GetVisitor.prototype.visitTimestampSecond = wrapGet(getTimestampSecond);
	GetVisitor.prototype.visitTimestampMillisecond = wrapGet(getTimestampMillisecond);
	GetVisitor.prototype.visitTimestampMicrosecond = wrapGet(getTimestampMicrosecond);
	GetVisitor.prototype.visitTimestampNanosecond = wrapGet(getTimestampNanosecond);
	GetVisitor.prototype.visitTime = wrapGet(getTime);
	GetVisitor.prototype.visitTimeSecond = wrapGet(getTimeSecond);
	GetVisitor.prototype.visitTimeMillisecond = wrapGet(getTimeMillisecond);
	GetVisitor.prototype.visitTimeMicrosecond = wrapGet(getTimeMicrosecond);
	GetVisitor.prototype.visitTimeNanosecond = wrapGet(getTimeNanosecond);
	GetVisitor.prototype.visitDecimal = wrapGet(getDecimal);
	GetVisitor.prototype.visitList = wrapGet(getList);
	GetVisitor.prototype.visitStruct = wrapGet(getStruct);
	GetVisitor.prototype.visitUnion = wrapGet(getUnion);
	GetVisitor.prototype.visitDenseUnion = wrapGet(getDenseUnion);
	GetVisitor.prototype.visitSparseUnion = wrapGet(getSparseUnion);
	GetVisitor.prototype.visitDictionary = wrapGet(getDictionary);
	GetVisitor.prototype.visitInterval = wrapGet(getInterval);
	GetVisitor.prototype.visitIntervalDayTime = wrapGet(getIntervalDayTime);
	GetVisitor.prototype.visitIntervalYearMonth = wrapGet(getIntervalYearMonth);
	GetVisitor.prototype.visitIntervalMonthDayNano = wrapGet(getIntervalMonthDayNano);
	GetVisitor.prototype.visitDuration = wrapGet(getDuration);
	GetVisitor.prototype.visitDurationSecond = wrapGet(getDurationSecond);
	GetVisitor.prototype.visitDurationMillisecond = wrapGet(getDurationMillisecond);
	GetVisitor.prototype.visitDurationMicrosecond = wrapGet(getDurationMicrosecond);
	GetVisitor.prototype.visitDurationNanosecond = wrapGet(getDurationNanosecond);
	GetVisitor.prototype.visitFixedSizeList = wrapGet(getFixedSizeList);
	GetVisitor.prototype.visitMap = wrapGet(getMap);
	/** @ignore */
	exports.instance = new GetVisitor();
}));
//#endregion
//#region node_modules/apache-arrow/row/map.js
var require_map$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MapRow = exports._kKeysAsStrings = exports.kKeysAsStrings = exports.kVals = exports.kKeys = void 0;
	var vector_js_1 = require_vector();
	var pretty_js_1 = require_pretty();
	var get_js_1 = require_get();
	var set_js_1 = require_set();
	/** @ignore */ exports.kKeys = Symbol.for("keys");
	/** @ignore */ exports.kVals = Symbol.for("vals");
	/** @ignore */ exports.kKeysAsStrings = Symbol.for("kKeysAsStrings");
	/** @ignore */ exports._kKeysAsStrings = Symbol.for("_kKeysAsStrings");
	var MapRow = class {
		constructor(slice) {
			this[exports.kKeys] = new vector_js_1.Vector([slice.children[0]]).memoize();
			this[exports.kVals] = slice.children[1];
			return new Proxy(this, new MapRowProxyHandler());
		}
		/** @ignore */
		get [exports.kKeysAsStrings]() {
			return this[exports._kKeysAsStrings] || (this[exports._kKeysAsStrings] = Array.from(this[exports.kKeys].toArray(), String));
		}
		[Symbol.iterator]() {
			return new MapRowIterator(this[exports.kKeys], this[exports.kVals]);
		}
		get size() {
			return this[exports.kKeys].length;
		}
		toArray() {
			return Object.values(this.toJSON());
		}
		toJSON() {
			const keys = this[exports.kKeys];
			const vals = this[exports.kVals];
			const json = {};
			for (let i = -1, n = keys.length; ++i < n;) json[keys.get(i)] = get_js_1.instance.visit(vals, i);
			return json;
		}
		toString() {
			return `{${[...this].map(([key, val]) => `${(0, pretty_js_1.valueToString)(key)}: ${(0, pretty_js_1.valueToString)(val)}`).join(", ")}}`;
		}
		[Symbol.for("nodejs.util.inspect.custom")]() {
			return this.toString();
		}
	};
	exports.MapRow = MapRow;
	var MapRowIterator = class {
		constructor(keys, vals) {
			this.keys = keys;
			this.vals = vals;
			this.keyIndex = 0;
			this.numKeys = keys.length;
		}
		[Symbol.iterator]() {
			return this;
		}
		next() {
			const i = this.keyIndex;
			if (i === this.numKeys) return {
				done: true,
				value: null
			};
			this.keyIndex++;
			return {
				done: false,
				value: [this.keys.get(i), get_js_1.instance.visit(this.vals, i)]
			};
		}
	};
	/** @ignore */
	var MapRowProxyHandler = class {
		isExtensible() {
			return false;
		}
		deleteProperty() {
			return false;
		}
		preventExtensions() {
			return true;
		}
		ownKeys(row) {
			return row[exports.kKeysAsStrings];
		}
		has(row, key) {
			return row[exports.kKeysAsStrings].includes(key);
		}
		getOwnPropertyDescriptor(row, key) {
			if (row[exports.kKeysAsStrings].indexOf(key) !== -1) return {
				writable: true,
				enumerable: true,
				configurable: true
			};
		}
		get(row, key) {
			if (Reflect.has(row, key)) return row[key];
			const idx = row[exports.kKeysAsStrings].indexOf(key);
			if (idx !== -1) {
				const val = get_js_1.instance.visit(Reflect.get(row, exports.kVals), idx);
				Reflect.set(row, key, val);
				return val;
			}
		}
		set(row, key, val) {
			const idx = row[exports.kKeysAsStrings].indexOf(key);
			if (idx !== -1) {
				set_js_1.instance.visit(Reflect.get(row, exports.kVals), idx, val);
				return Reflect.set(row, key, val);
			} else if (Reflect.has(row, key)) return Reflect.set(row, key, val);
			return false;
		}
	};
	Object.defineProperties(MapRow.prototype, {
		[Symbol.toStringTag]: {
			enumerable: false,
			configurable: false,
			value: "Row"
		},
		[exports.kKeys]: {
			writable: true,
			enumerable: false,
			configurable: false,
			value: null
		},
		[exports.kVals]: {
			writable: true,
			enumerable: false,
			configurable: false,
			value: null
		},
		[exports._kKeysAsStrings]: {
			writable: true,
			enumerable: false,
			configurable: false,
			value: null
		}
	});
}));
//#endregion
//#region node_modules/apache-arrow/util/vector.js
var require_vector$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createElementComparator = exports.wrapIndex = exports.clampRange = void 0;
	var vector_js_1 = require_vector();
	var map_js_1 = require_map$1();
	var struct_js_1 = require_struct$1();
	var buffer_js_1 = require_buffer$2();
	/** @ignore */
	var tmp;
	/** @ignore */
	function clampRange(source, begin, end, then) {
		const { length: len = 0 } = source;
		let lhs = typeof begin !== "number" ? 0 : begin;
		let rhs = typeof end !== "number" ? len : end;
		lhs < 0 && (lhs = (lhs % len + len) % len);
		rhs < 0 && (rhs = (rhs % len + len) % len);
		rhs < lhs && (tmp = lhs, lhs = rhs, rhs = tmp);
		rhs > len && (rhs = len);
		return then ? then(source, lhs, rhs) : [lhs, rhs];
	}
	exports.clampRange = clampRange;
	/** @ignore */
	var wrapIndex = (index, len) => index < 0 ? len + index : index;
	exports.wrapIndex = wrapIndex;
	var isNaNFast = (value) => value !== value;
	/** @ignore */
	function createElementComparator(search) {
		if (typeof search !== "object" || search === null) {
			if (isNaNFast(search)) return isNaNFast;
			return (value) => value === search;
		}
		if (search instanceof Date) {
			const valueOfSearch = search.valueOf();
			return (value) => value instanceof Date ? value.valueOf() === valueOfSearch : false;
		}
		if (ArrayBuffer.isView(search)) return (value) => value ? (0, buffer_js_1.compareArrayLike)(search, value) : false;
		if (search instanceof Map) return createMapComparator(search);
		if (Array.isArray(search)) return createArrayLikeComparator(search);
		if (search instanceof vector_js_1.Vector) return createVectorComparator(search);
		return createObjectComparator(search, true);
	}
	exports.createElementComparator = createElementComparator;
	/** @ignore */
	function createArrayLikeComparator(lhs) {
		const comparators = [];
		for (let i = -1, n = lhs.length; ++i < n;) comparators[i] = createElementComparator(lhs[i]);
		return createSubElementsComparator(comparators);
	}
	/** @ignore */
	function createMapComparator(lhs) {
		let i = -1;
		const comparators = [];
		for (const v of lhs.values()) comparators[++i] = createElementComparator(v);
		return createSubElementsComparator(comparators);
	}
	/** @ignore */
	function createVectorComparator(lhs) {
		const comparators = [];
		for (let i = -1, n = lhs.length; ++i < n;) comparators[i] = createElementComparator(lhs.get(i));
		return createSubElementsComparator(comparators);
	}
	/** @ignore */
	function createObjectComparator(lhs, allowEmpty = false) {
		const keys = Object.keys(lhs);
		if (!allowEmpty && keys.length === 0) return () => false;
		const comparators = [];
		for (let i = -1, n = keys.length; ++i < n;) comparators[i] = createElementComparator(lhs[keys[i]]);
		return createSubElementsComparator(comparators, keys);
	}
	function createSubElementsComparator(comparators, keys) {
		return (rhs) => {
			if (!rhs || typeof rhs !== "object") return false;
			switch (rhs.constructor) {
				case Array: return compareArray(comparators, rhs);
				case Map: return compareObject(comparators, rhs, rhs.keys());
				case map_js_1.MapRow:
				case struct_js_1.StructRow:
				case Object:
				case void 0: return compareObject(comparators, rhs, keys || Object.keys(rhs));
			}
			return rhs instanceof vector_js_1.Vector ? compareVector(comparators, rhs) : false;
		};
	}
	function compareArray(comparators, arr) {
		const n = comparators.length;
		if (arr.length !== n) return false;
		for (let i = -1; ++i < n;) if (!comparators[i](arr[i])) return false;
		return true;
	}
	function compareVector(comparators, vec) {
		const n = comparators.length;
		if (vec.length !== n) return false;
		for (let i = -1; ++i < n;) if (!comparators[i](vec.get(i))) return false;
		return true;
	}
	function compareObject(comparators, obj, keys) {
		const lKeyItr = keys[Symbol.iterator]();
		const rKeyItr = obj instanceof Map ? obj.keys() : Object.keys(obj)[Symbol.iterator]();
		const rValItr = obj instanceof Map ? obj.values() : Object.values(obj)[Symbol.iterator]();
		let i = 0;
		const n = comparators.length;
		let rVal = rValItr.next();
		let lKey = lKeyItr.next();
		let rKey = rKeyItr.next();
		for (; i < n && !lKey.done && !rKey.done && !rVal.done; ++i, lKey = lKeyItr.next(), rKey = rKeyItr.next(), rVal = rValItr.next()) if (lKey.value !== rKey.value || !comparators[i](rVal.value)) break;
		if (i === n && lKey.done && rKey.done && rVal.done) return true;
		lKeyItr.return && lKeyItr.return();
		rKeyItr.return && rKeyItr.return();
		rValItr.return && rValItr.return();
		return false;
	}
}));
//#endregion
//#region node_modules/apache-arrow/util/bit.js
var require_bit = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.popcnt_uint32 = exports.popcnt_array = exports.popcnt_bit_range = exports.BitIterator = exports.packBools = exports.truncateBitmap = exports.setBool = exports.getBit = exports.getBool = void 0;
	/** @ignore */
	function getBool(_data, _index, byte, bit) {
		return (byte & 1 << bit) !== 0;
	}
	exports.getBool = getBool;
	/** @ignore */
	function getBit(_data, _index, byte, bit) {
		return (byte & 1 << bit) >> bit;
	}
	exports.getBit = getBit;
	/** @ignore */
	function setBool(bytes, index, value) {
		return value ? !!(bytes[index >> 3] |= 1 << index % 8) || true : !(bytes[index >> 3] &= ~(1 << index % 8)) && false;
	}
	exports.setBool = setBool;
	/** @ignore */
	function truncateBitmap(offset, length, bitmap) {
		const alignedSize = bitmap.byteLength + 7 & -8;
		if (offset > 0 || bitmap.byteLength < alignedSize) {
			const bytes = new Uint8Array(alignedSize);
			bytes.set(offset % 8 === 0 ? bitmap.subarray(offset >> 3) : packBools(new BitIterator(bitmap, offset, length, null, getBool)).subarray(0, alignedSize));
			return bytes;
		}
		return bitmap;
	}
	exports.truncateBitmap = truncateBitmap;
	/** @ignore */
	function packBools(values) {
		const xs = [];
		let i = 0, bit = 0, byte = 0;
		for (const value of values) {
			value && (byte |= 1 << bit);
			if (++bit === 8) {
				xs[i++] = byte;
				byte = bit = 0;
			}
		}
		if (i === 0 || bit > 0) xs[i++] = byte;
		const b = new Uint8Array(xs.length + 7 & -8);
		b.set(xs);
		return b;
	}
	exports.packBools = packBools;
	/** @ignore */
	var BitIterator = class {
		constructor(bytes, begin, length, context, get) {
			this.bytes = bytes;
			this.length = length;
			this.context = context;
			this.get = get;
			this.bit = begin % 8;
			this.byteIndex = begin >> 3;
			this.byte = bytes[this.byteIndex++];
			this.index = 0;
		}
		next() {
			if (this.index < this.length) {
				if (this.bit === 8) {
					this.bit = 0;
					this.byte = this.bytes[this.byteIndex++];
				}
				return { value: this.get(this.context, this.index++, this.byte, this.bit++) };
			}
			return {
				done: true,
				value: null
			};
		}
		[Symbol.iterator]() {
			return this;
		}
	};
	exports.BitIterator = BitIterator;
	/**
	* Compute the population count (the number of bits set to 1) for a range of bits in a Uint8Array.
	* @param vector The Uint8Array of bits for which to compute the population count.
	* @param lhs The range's left-hand side (or start) bit
	* @param rhs The range's right-hand side (or end) bit
	*/
	/** @ignore */
	function popcnt_bit_range(data, lhs, rhs) {
		if (rhs - lhs <= 0) return 0;
		if (rhs - lhs < 8) {
			let sum = 0;
			for (const bit of new BitIterator(data, lhs, rhs - lhs, data, getBit)) sum += bit;
			return sum;
		}
		const rhsInside = rhs >> 3 << 3;
		const lhsInside = lhs + (lhs % 8 === 0 ? 0 : 8 - lhs % 8);
		return popcnt_bit_range(data, lhs, lhsInside) + popcnt_bit_range(data, rhsInside, rhs) + popcnt_array(data, lhsInside >> 3, rhsInside - lhsInside >> 3);
	}
	exports.popcnt_bit_range = popcnt_bit_range;
	/** @ignore */
	function popcnt_array(arr, byteOffset, byteLength) {
		let cnt = 0, pos = Math.trunc(byteOffset);
		const view = new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
		const len = byteLength === void 0 ? arr.byteLength : pos + byteLength;
		while (len - pos >= 4) {
			cnt += popcnt_uint32(view.getUint32(pos));
			pos += 4;
		}
		while (len - pos >= 2) {
			cnt += popcnt_uint32(view.getUint16(pos));
			pos += 2;
		}
		while (len - pos >= 1) {
			cnt += popcnt_uint32(view.getUint8(pos));
			pos += 1;
		}
		return cnt;
	}
	exports.popcnt_array = popcnt_array;
	/** @ignore */
	function popcnt_uint32(uint32) {
		let i = Math.trunc(uint32);
		i = i - (i >>> 1 & 1431655765);
		i = (i & 858993459) + (i >>> 2 & 858993459);
		return (i + (i >>> 4) & 252645135) * 16843009 >>> 24;
	}
	exports.popcnt_uint32 = popcnt_uint32;
}));
//#endregion
//#region node_modules/apache-arrow/data.js
var require_data = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.makeData = exports.Data = exports.kUnknownNullCount = void 0;
	var vector_js_1 = require_vector();
	var enum_js_1 = require_enum();
	var type_js_1 = require_type();
	var bit_js_1 = require_bit();
	/** @ignore */ exports.kUnknownNullCount = -1;
	/**
	* Data structure underlying {@link Vector}s. Use the convenience method {@link makeData}.
	*/
	var Data = class Data {
		get typeId() {
			return this.type.typeId;
		}
		get ArrayType() {
			return this.type.ArrayType;
		}
		get buffers() {
			return [
				this.valueOffsets,
				this.values,
				this.nullBitmap,
				this.typeIds
			];
		}
		get nullable() {
			if (this._nullCount !== 0) {
				const { type } = this;
				if (type_js_1.DataType.isSparseUnion(type)) return this.children.some((child) => child.nullable);
				else if (type_js_1.DataType.isDenseUnion(type)) return this.children.some((child) => child.nullable);
				return this.nullBitmap && this.nullBitmap.byteLength > 0;
			}
			return true;
		}
		get byteLength() {
			let byteLength = 0;
			const { valueOffsets, values, nullBitmap, typeIds } = this;
			valueOffsets && (byteLength += valueOffsets.byteLength);
			values && (byteLength += values.byteLength);
			nullBitmap && (byteLength += nullBitmap.byteLength);
			typeIds && (byteLength += typeIds.byteLength);
			return this.children.reduce((byteLength, child) => byteLength + child.byteLength, byteLength);
		}
		get nullCount() {
			if (type_js_1.DataType.isUnion(this.type)) return this.children.reduce((nullCount, child) => nullCount + child.nullCount, 0);
			let nullCount = this._nullCount;
			let nullBitmap;
			if (nullCount <= exports.kUnknownNullCount && (nullBitmap = this.nullBitmap)) this._nullCount = nullCount = nullBitmap.length === 0 ? 0 : this.length - (0, bit_js_1.popcnt_bit_range)(nullBitmap, this.offset, this.offset + this.length);
			return nullCount;
		}
		constructor(type, offset, length, nullCount, buffers, children = [], dictionary) {
			this.type = type;
			this.children = children;
			this.dictionary = dictionary;
			this.offset = Math.floor(Math.max(offset || 0, 0));
			this.length = Math.floor(Math.max(length || 0, 0));
			this._nullCount = Math.floor(Math.max(nullCount || 0, -1));
			let buffer;
			if (buffers instanceof Data) {
				this.stride = buffers.stride;
				this.values = buffers.values;
				this.typeIds = buffers.typeIds;
				this.nullBitmap = buffers.nullBitmap;
				this.valueOffsets = buffers.valueOffsets;
			} else {
				this.stride = (0, type_js_1.strideForType)(type);
				if (buffers) {
					(buffer = buffers[0]) && (this.valueOffsets = buffer);
					(buffer = buffers[1]) && (this.values = buffer);
					(buffer = buffers[2]) && (this.nullBitmap = buffer);
					(buffer = buffers[3]) && (this.typeIds = buffer);
				}
			}
		}
		getValid(index) {
			const { type } = this;
			if (type_js_1.DataType.isUnion(type)) {
				const union = type;
				const child = this.children[union.typeIdToChildIndex[this.typeIds[index]]];
				const indexInChild = union.mode === enum_js_1.UnionMode.Dense ? this.valueOffsets[index] : index;
				return child.getValid(indexInChild);
			}
			if (this.nullable && this.nullCount > 0) {
				const pos = this.offset + index;
				return (this.nullBitmap[pos >> 3] & 1 << pos % 8) !== 0;
			}
			return true;
		}
		setValid(index, value) {
			let prev;
			const { type } = this;
			if (type_js_1.DataType.isUnion(type)) {
				const union = type;
				const child = this.children[union.typeIdToChildIndex[this.typeIds[index]]];
				const indexInChild = union.mode === enum_js_1.UnionMode.Dense ? this.valueOffsets[index] : index;
				prev = child.getValid(indexInChild);
				child.setValid(indexInChild, value);
			} else {
				let { nullBitmap } = this;
				const { offset, length } = this;
				const idx = offset + index;
				const mask = 1 << idx % 8;
				const byteOffset = idx >> 3;
				if (!nullBitmap || nullBitmap.byteLength <= byteOffset) {
					nullBitmap = new Uint8Array((offset + length + 63 & -64) >> 3).fill(255);
					if (this.nullCount > 0) {
						nullBitmap.set((0, bit_js_1.truncateBitmap)(offset, length, this.nullBitmap), 0);
						Object.assign(this, { nullBitmap });
					} else Object.assign(this, {
						nullBitmap,
						_nullCount: 0
					});
				}
				const byte = nullBitmap[byteOffset];
				prev = (byte & mask) !== 0;
				nullBitmap[byteOffset] = value ? byte | mask : byte & ~mask;
			}
			if (prev !== !!value) this._nullCount = this.nullCount + (value ? -1 : 1);
			return value;
		}
		clone(type = this.type, offset = this.offset, length = this.length, nullCount = this._nullCount, buffers = this, children = this.children) {
			return new Data(type, offset, length, nullCount, buffers, children, this.dictionary);
		}
		slice(offset, length) {
			const { stride, typeId, children } = this;
			const nullCount = +(this._nullCount === 0) - 1;
			const childStride = typeId === 16 ? stride : 1;
			const buffers = this._sliceBuffers(offset, length, stride, typeId);
			return this.clone(this.type, this.offset + offset, length, nullCount, buffers, children.length === 0 || this.valueOffsets ? children : this._sliceChildren(children, childStride * offset, childStride * length));
		}
		_changeLengthAndBackfillNullBitmap(newLength) {
			if (this.typeId === enum_js_1.Type.Null) return this.clone(this.type, 0, newLength, 0);
			const { length, nullCount } = this;
			const bitmap = new Uint8Array((newLength + 63 & -64) >> 3).fill(255, 0, length >> 3);
			bitmap[length >> 3] = (1 << length - (length & -8)) - 1;
			if (nullCount > 0) bitmap.set((0, bit_js_1.truncateBitmap)(this.offset, length, this.nullBitmap), 0);
			const buffers = this.buffers;
			buffers[enum_js_1.BufferType.VALIDITY] = bitmap;
			return this.clone(this.type, 0, newLength, nullCount + (newLength - length), buffers);
		}
		_sliceBuffers(offset, length, stride, typeId) {
			let arr;
			const { buffers } = this;
			(arr = buffers[enum_js_1.BufferType.TYPE]) && (buffers[enum_js_1.BufferType.TYPE] = arr.subarray(offset, offset + length));
			(arr = buffers[enum_js_1.BufferType.OFFSET]) && (buffers[enum_js_1.BufferType.OFFSET] = arr.subarray(offset, offset + length + 1)) || (arr = buffers[enum_js_1.BufferType.DATA]) && (buffers[enum_js_1.BufferType.DATA] = typeId === 6 ? arr : arr.subarray(stride * offset, stride * (offset + length)));
			return buffers;
		}
		_sliceChildren(children, offset, length) {
			return children.map((child) => child.slice(offset, length));
		}
	};
	exports.Data = Data;
	Data.prototype.children = Object.freeze([]);
	var visitor_js_1 = require_visitor();
	var buffer_js_1 = require_buffer$2();
	var makeDataVisitor = new class MakeDataVisitor extends visitor_js_1.Visitor {
		visit(props) {
			return this.getVisitFn(props["type"]).call(this, props);
		}
		visitNull(props) {
			const { ["type"]: type, ["offset"]: offset = 0, ["length"]: length = 0 } = props;
			return new Data(type, offset, length, length);
		}
		visitBool(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const data = (0, buffer_js_1.toArrayBufferView)(type.ArrayType, props["data"]);
			const { ["length"]: length = data.length >> 3, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				data,
				nullBitmap
			]);
		}
		visitInt(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const data = (0, buffer_js_1.toArrayBufferView)(type.ArrayType, props["data"]);
			const { ["length"]: length = data.length, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				data,
				nullBitmap
			]);
		}
		visitFloat(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const data = (0, buffer_js_1.toArrayBufferView)(type.ArrayType, props["data"]);
			const { ["length"]: length = data.length, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				data,
				nullBitmap
			]);
		}
		visitUtf8(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const data = (0, buffer_js_1.toUint8Array)(props["data"]);
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const valueOffsets = (0, buffer_js_1.toInt32Array)(props["valueOffsets"]);
			const { ["length"]: length = valueOffsets.length - 1, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				valueOffsets,
				data,
				nullBitmap
			]);
		}
		visitLargeUtf8(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const data = (0, buffer_js_1.toUint8Array)(props["data"]);
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const valueOffsets = (0, buffer_js_1.toBigInt64Array)(props["valueOffsets"]);
			const { ["length"]: length = valueOffsets.length - 1, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				valueOffsets,
				data,
				nullBitmap
			]);
		}
		visitBinary(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const data = (0, buffer_js_1.toUint8Array)(props["data"]);
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const valueOffsets = (0, buffer_js_1.toInt32Array)(props["valueOffsets"]);
			const { ["length"]: length = valueOffsets.length - 1, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				valueOffsets,
				data,
				nullBitmap
			]);
		}
		visitLargeBinary(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const data = (0, buffer_js_1.toUint8Array)(props["data"]);
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const valueOffsets = (0, buffer_js_1.toBigInt64Array)(props["valueOffsets"]);
			const { ["length"]: length = valueOffsets.length - 1, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				valueOffsets,
				data,
				nullBitmap
			]);
		}
		visitFixedSizeBinary(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const data = (0, buffer_js_1.toArrayBufferView)(type.ArrayType, props["data"]);
			const { ["length"]: length = data.length / (0, type_js_1.strideForType)(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				data,
				nullBitmap
			]);
		}
		visitDate(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const data = (0, buffer_js_1.toArrayBufferView)(type.ArrayType, props["data"]);
			const { ["length"]: length = data.length / (0, type_js_1.strideForType)(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				data,
				nullBitmap
			]);
		}
		visitTimestamp(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const data = (0, buffer_js_1.toArrayBufferView)(type.ArrayType, props["data"]);
			const { ["length"]: length = data.length / (0, type_js_1.strideForType)(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				data,
				nullBitmap
			]);
		}
		visitTime(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const data = (0, buffer_js_1.toArrayBufferView)(type.ArrayType, props["data"]);
			const { ["length"]: length = data.length / (0, type_js_1.strideForType)(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				data,
				nullBitmap
			]);
		}
		visitDecimal(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const data = (0, buffer_js_1.toArrayBufferView)(type.ArrayType, props["data"]);
			const { ["length"]: length = data.length / (0, type_js_1.strideForType)(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				data,
				nullBitmap
			]);
		}
		visitList(props) {
			const { ["type"]: type, ["offset"]: offset = 0, ["child"]: child } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const valueOffsets = (0, buffer_js_1.toInt32Array)(props["valueOffsets"]);
			const { ["length"]: length = valueOffsets.length - 1, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				valueOffsets,
				void 0,
				nullBitmap
			], [child]);
		}
		visitStruct(props) {
			const { ["type"]: type, ["offset"]: offset = 0, ["children"]: children = [] } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const { length = children.reduce((len, { length }) => Math.max(len, length), 0), nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				void 0,
				nullBitmap
			], children);
		}
		visitUnion(props) {
			const { ["type"]: type, ["offset"]: offset = 0, ["children"]: children = [] } = props;
			const typeIds = (0, buffer_js_1.toArrayBufferView)(type.ArrayType, props["typeIds"]);
			const { ["length"]: length = typeIds.length, ["nullCount"]: nullCount = -1 } = props;
			if (type_js_1.DataType.isSparseUnion(type)) return new Data(type, offset, length, nullCount, [
				void 0,
				void 0,
				void 0,
				typeIds
			], children);
			return new Data(type, offset, length, nullCount, [
				(0, buffer_js_1.toInt32Array)(props["valueOffsets"]),
				void 0,
				void 0,
				typeIds
			], children);
		}
		visitDictionary(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const data = (0, buffer_js_1.toArrayBufferView)(type.indices.ArrayType, props["data"]);
			const { ["dictionary"]: dictionary = new vector_js_1.Vector([new MakeDataVisitor().visit({ type: type.dictionary })]) } = props;
			const { ["length"]: length = data.length, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				data,
				nullBitmap
			], [], dictionary);
		}
		visitInterval(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const data = (0, buffer_js_1.toArrayBufferView)(type.ArrayType, props["data"]);
			const { ["length"]: length = data.length / (0, type_js_1.strideForType)(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				data,
				nullBitmap
			]);
		}
		visitDuration(props) {
			const { ["type"]: type, ["offset"]: offset = 0 } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const data = (0, buffer_js_1.toArrayBufferView)(type.ArrayType, props["data"]);
			const { ["length"]: length = data.length, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				data,
				nullBitmap
			]);
		}
		visitFixedSizeList(props) {
			const { ["type"]: type, ["offset"]: offset = 0, ["child"]: child = new MakeDataVisitor().visit({ type: type.valueType }) } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const { ["length"]: length = child.length / (0, type_js_1.strideForType)(type), ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				void 0,
				void 0,
				nullBitmap
			], [child]);
		}
		visitMap(props) {
			const { ["type"]: type, ["offset"]: offset = 0, ["child"]: child = new MakeDataVisitor().visit({ type: type.childType }) } = props;
			const nullBitmap = (0, buffer_js_1.toUint8Array)(props["nullBitmap"]);
			const valueOffsets = (0, buffer_js_1.toInt32Array)(props["valueOffsets"]);
			const { ["length"]: length = valueOffsets.length - 1, ["nullCount"]: nullCount = props["nullBitmap"] ? -1 : 0 } = props;
			return new Data(type, offset, length, nullCount, [
				valueOffsets,
				void 0,
				nullBitmap
			], [child]);
		}
	}();
	function makeData(props) {
		return makeDataVisitor.visit(props);
	}
	exports.makeData = makeData;
}));
//#endregion
//#region node_modules/apache-arrow/util/chunk.js
var require_chunk = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.wrapChunkedIndexOf = exports.wrapChunkedCall2 = exports.wrapChunkedCall1 = exports.isChunkedValid = exports.binarySearch = exports.sliceChunks = exports.computeChunkOffsets = exports.computeChunkNullCounts = exports.computeChunkNullable = exports.ChunkedIterator = void 0;
	/** @ignore */
	var ChunkedIterator = class {
		constructor(numChunks = 0, getChunkIterator) {
			this.numChunks = numChunks;
			this.getChunkIterator = getChunkIterator;
			this.chunkIndex = 0;
			this.chunkIterator = this.getChunkIterator(0);
		}
		next() {
			while (this.chunkIndex < this.numChunks) {
				const next = this.chunkIterator.next();
				if (!next.done) return next;
				if (++this.chunkIndex < this.numChunks) this.chunkIterator = this.getChunkIterator(this.chunkIndex);
			}
			return {
				done: true,
				value: null
			};
		}
		[Symbol.iterator]() {
			return this;
		}
	};
	exports.ChunkedIterator = ChunkedIterator;
	/** @ignore */
	function computeChunkNullable(chunks) {
		return chunks.some((chunk) => chunk.nullable);
	}
	exports.computeChunkNullable = computeChunkNullable;
	/** @ignore */
	function computeChunkNullCounts(chunks) {
		return chunks.reduce((nullCount, chunk) => nullCount + chunk.nullCount, 0);
	}
	exports.computeChunkNullCounts = computeChunkNullCounts;
	/** @ignore */
	function computeChunkOffsets(chunks) {
		return chunks.reduce((offsets, chunk, index) => {
			offsets[index + 1] = offsets[index] + chunk.length;
			return offsets;
		}, new Uint32Array(chunks.length + 1));
	}
	exports.computeChunkOffsets = computeChunkOffsets;
	/** @ignore */
	function sliceChunks(chunks, offsets, begin, end) {
		const slices = [];
		for (let i = -1, n = chunks.length; ++i < n;) {
			const chunk = chunks[i];
			const offset = offsets[i];
			const { length } = chunk;
			if (offset >= end) break;
			if (begin >= offset + length) continue;
			if (offset >= begin && offset + length <= end) {
				slices.push(chunk);
				continue;
			}
			const from = Math.max(0, begin - offset);
			const to = Math.min(end - offset, length);
			slices.push(chunk.slice(from, to - from));
		}
		if (slices.length === 0) slices.push(chunks[0].slice(0, 0));
		return slices;
	}
	exports.sliceChunks = sliceChunks;
	/** @ignore */
	function binarySearch(chunks, offsets, idx, fn) {
		let lhs = 0, mid = 0, rhs = offsets.length - 1;
		do {
			if (lhs >= rhs - 1) return idx < offsets[rhs] ? fn(chunks, lhs, idx - offsets[lhs]) : null;
			mid = lhs + Math.trunc((rhs - lhs) * .5);
			idx < offsets[mid] ? rhs = mid : lhs = mid;
		} while (lhs < rhs);
	}
	exports.binarySearch = binarySearch;
	/** @ignore */
	function isChunkedValid(data, index) {
		return data.getValid(index);
	}
	exports.isChunkedValid = isChunkedValid;
	/** @ignore */
	function wrapChunkedCall1(fn) {
		function chunkedFn(chunks, i, j) {
			return fn(chunks[i], j);
		}
		return function(index) {
			const data = this.data;
			return binarySearch(data, this._offsets, index, chunkedFn);
		};
	}
	exports.wrapChunkedCall1 = wrapChunkedCall1;
	/** @ignore */
	function wrapChunkedCall2(fn) {
		let _2;
		function chunkedFn(chunks, i, j) {
			return fn(chunks[i], j, _2);
		}
		return function(index, value) {
			const data = this.data;
			_2 = value;
			const result = binarySearch(data, this._offsets, index, chunkedFn);
			_2 = void 0;
			return result;
		};
	}
	exports.wrapChunkedCall2 = wrapChunkedCall2;
	/** @ignore */
	function wrapChunkedIndexOf(indexOf) {
		let _1;
		function chunkedIndexOf(data, chunkIndex, fromIndex) {
			let begin = fromIndex, index = 0, total = 0;
			for (let i = chunkIndex - 1, n = data.length; ++i < n;) {
				const chunk = data[i];
				if (~(index = indexOf(chunk, _1, begin))) return total + index;
				begin = 0;
				total += chunk.length;
			}
			return -1;
		}
		return function(element, offset) {
			_1 = element;
			const data = this.data;
			const result = typeof offset !== "number" ? chunkedIndexOf(data, 0, 0) : binarySearch(data, this._offsets, offset, chunkedIndexOf);
			_1 = void 0;
			return result;
		};
	}
	exports.wrapChunkedIndexOf = wrapChunkedIndexOf;
}));
//#endregion
//#region node_modules/apache-arrow/visitor/indexof.js
var require_indexof = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.instance = exports.IndexOfVisitor = void 0;
	var enum_js_1 = require_enum();
	var visitor_js_1 = require_visitor();
	var get_js_1 = require_get();
	var bit_js_1 = require_bit();
	var vector_js_1 = require_vector$1();
	/** @ignore */
	var IndexOfVisitor = class extends visitor_js_1.Visitor {};
	exports.IndexOfVisitor = IndexOfVisitor;
	/** @ignore */
	function nullIndexOf(data, searchElement) {
		return searchElement === null && data.length > 0 ? 0 : -1;
	}
	/** @ignore */
	function indexOfNull(data, fromIndex) {
		const { nullBitmap } = data;
		if (!nullBitmap || data.nullCount <= 0) return -1;
		let i = 0;
		for (const isValid of new bit_js_1.BitIterator(nullBitmap, data.offset + (fromIndex || 0), data.length, nullBitmap, bit_js_1.getBool)) {
			if (!isValid) return i;
			++i;
		}
		return -1;
	}
	/** @ignore */
	function indexOfValue(data, searchElement, fromIndex) {
		if (searchElement === void 0) return -1;
		if (searchElement === null) switch (data.typeId) {
			case enum_js_1.Type.Union: break;
			case enum_js_1.Type.Dictionary: break;
			default: return indexOfNull(data, fromIndex);
		}
		const get = get_js_1.instance.getVisitFn(data);
		const compare = (0, vector_js_1.createElementComparator)(searchElement);
		for (let i = (fromIndex || 0) - 1, n = data.length; ++i < n;) if (compare(get(data, i))) return i;
		return -1;
	}
	/** @ignore */
	function indexOfUnion(data, searchElement, fromIndex) {
		const get = get_js_1.instance.getVisitFn(data);
		const compare = (0, vector_js_1.createElementComparator)(searchElement);
		for (let i = (fromIndex || 0) - 1, n = data.length; ++i < n;) if (compare(get(data, i))) return i;
		return -1;
	}
	IndexOfVisitor.prototype.visitNull = nullIndexOf;
	IndexOfVisitor.prototype.visitBool = indexOfValue;
	IndexOfVisitor.prototype.visitInt = indexOfValue;
	IndexOfVisitor.prototype.visitInt8 = indexOfValue;
	IndexOfVisitor.prototype.visitInt16 = indexOfValue;
	IndexOfVisitor.prototype.visitInt32 = indexOfValue;
	IndexOfVisitor.prototype.visitInt64 = indexOfValue;
	IndexOfVisitor.prototype.visitUint8 = indexOfValue;
	IndexOfVisitor.prototype.visitUint16 = indexOfValue;
	IndexOfVisitor.prototype.visitUint32 = indexOfValue;
	IndexOfVisitor.prototype.visitUint64 = indexOfValue;
	IndexOfVisitor.prototype.visitFloat = indexOfValue;
	IndexOfVisitor.prototype.visitFloat16 = indexOfValue;
	IndexOfVisitor.prototype.visitFloat32 = indexOfValue;
	IndexOfVisitor.prototype.visitFloat64 = indexOfValue;
	IndexOfVisitor.prototype.visitUtf8 = indexOfValue;
	IndexOfVisitor.prototype.visitLargeUtf8 = indexOfValue;
	IndexOfVisitor.prototype.visitBinary = indexOfValue;
	IndexOfVisitor.prototype.visitLargeBinary = indexOfValue;
	IndexOfVisitor.prototype.visitFixedSizeBinary = indexOfValue;
	IndexOfVisitor.prototype.visitDate = indexOfValue;
	IndexOfVisitor.prototype.visitDateDay = indexOfValue;
	IndexOfVisitor.prototype.visitDateMillisecond = indexOfValue;
	IndexOfVisitor.prototype.visitTimestamp = indexOfValue;
	IndexOfVisitor.prototype.visitTimestampSecond = indexOfValue;
	IndexOfVisitor.prototype.visitTimestampMillisecond = indexOfValue;
	IndexOfVisitor.prototype.visitTimestampMicrosecond = indexOfValue;
	IndexOfVisitor.prototype.visitTimestampNanosecond = indexOfValue;
	IndexOfVisitor.prototype.visitTime = indexOfValue;
	IndexOfVisitor.prototype.visitTimeSecond = indexOfValue;
	IndexOfVisitor.prototype.visitTimeMillisecond = indexOfValue;
	IndexOfVisitor.prototype.visitTimeMicrosecond = indexOfValue;
	IndexOfVisitor.prototype.visitTimeNanosecond = indexOfValue;
	IndexOfVisitor.prototype.visitDecimal = indexOfValue;
	IndexOfVisitor.prototype.visitList = indexOfValue;
	IndexOfVisitor.prototype.visitStruct = indexOfValue;
	IndexOfVisitor.prototype.visitUnion = indexOfValue;
	IndexOfVisitor.prototype.visitDenseUnion = indexOfUnion;
	IndexOfVisitor.prototype.visitSparseUnion = indexOfUnion;
	IndexOfVisitor.prototype.visitDictionary = indexOfValue;
	IndexOfVisitor.prototype.visitInterval = indexOfValue;
	IndexOfVisitor.prototype.visitIntervalDayTime = indexOfValue;
	IndexOfVisitor.prototype.visitIntervalYearMonth = indexOfValue;
	IndexOfVisitor.prototype.visitIntervalMonthDayNano = indexOfValue;
	IndexOfVisitor.prototype.visitDuration = indexOfValue;
	IndexOfVisitor.prototype.visitDurationSecond = indexOfValue;
	IndexOfVisitor.prototype.visitDurationMillisecond = indexOfValue;
	IndexOfVisitor.prototype.visitDurationMicrosecond = indexOfValue;
	IndexOfVisitor.prototype.visitDurationNanosecond = indexOfValue;
	IndexOfVisitor.prototype.visitFixedSizeList = indexOfValue;
	IndexOfVisitor.prototype.visitMap = indexOfValue;
	/** @ignore */
	exports.instance = new IndexOfVisitor();
}));
//#endregion
//#region node_modules/apache-arrow/visitor/iterator.js
var require_iterator = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.instance = exports.IteratorVisitor = void 0;
	var visitor_js_1 = require_visitor();
	var enum_js_1 = require_enum();
	var type_js_1 = require_type();
	var chunk_js_1 = require_chunk();
	/** @ignore */
	var IteratorVisitor = class extends visitor_js_1.Visitor {};
	exports.IteratorVisitor = IteratorVisitor;
	/** @ignore */
	function vectorIterator(vector) {
		const { type } = vector;
		if (vector.nullCount === 0 && vector.stride === 1 && (type_js_1.DataType.isInt(type) && type.bitWidth !== 64 || type_js_1.DataType.isTime(type) && type.bitWidth !== 64 || type_js_1.DataType.isFloat(type) && type.precision !== enum_js_1.Precision.HALF)) return new chunk_js_1.ChunkedIterator(vector.data.length, (chunkIndex) => {
			const data = vector.data[chunkIndex];
			return data.values.subarray(0, data.length)[Symbol.iterator]();
		});
		let offset = 0;
		return new chunk_js_1.ChunkedIterator(vector.data.length, (chunkIndex) => {
			const length = vector.data[chunkIndex].length;
			const inner = vector.slice(offset, offset + length);
			offset += length;
			return new VectorIterator(inner);
		});
	}
	/** @ignore */
	var VectorIterator = class {
		constructor(vector) {
			this.vector = vector;
			this.index = 0;
		}
		next() {
			if (this.index < this.vector.length) return { value: this.vector.get(this.index++) };
			return {
				done: true,
				value: null
			};
		}
		[Symbol.iterator]() {
			return this;
		}
	};
	IteratorVisitor.prototype.visitNull = vectorIterator;
	IteratorVisitor.prototype.visitBool = vectorIterator;
	IteratorVisitor.prototype.visitInt = vectorIterator;
	IteratorVisitor.prototype.visitInt8 = vectorIterator;
	IteratorVisitor.prototype.visitInt16 = vectorIterator;
	IteratorVisitor.prototype.visitInt32 = vectorIterator;
	IteratorVisitor.prototype.visitInt64 = vectorIterator;
	IteratorVisitor.prototype.visitUint8 = vectorIterator;
	IteratorVisitor.prototype.visitUint16 = vectorIterator;
	IteratorVisitor.prototype.visitUint32 = vectorIterator;
	IteratorVisitor.prototype.visitUint64 = vectorIterator;
	IteratorVisitor.prototype.visitFloat = vectorIterator;
	IteratorVisitor.prototype.visitFloat16 = vectorIterator;
	IteratorVisitor.prototype.visitFloat32 = vectorIterator;
	IteratorVisitor.prototype.visitFloat64 = vectorIterator;
	IteratorVisitor.prototype.visitUtf8 = vectorIterator;
	IteratorVisitor.prototype.visitLargeUtf8 = vectorIterator;
	IteratorVisitor.prototype.visitBinary = vectorIterator;
	IteratorVisitor.prototype.visitLargeBinary = vectorIterator;
	IteratorVisitor.prototype.visitFixedSizeBinary = vectorIterator;
	IteratorVisitor.prototype.visitDate = vectorIterator;
	IteratorVisitor.prototype.visitDateDay = vectorIterator;
	IteratorVisitor.prototype.visitDateMillisecond = vectorIterator;
	IteratorVisitor.prototype.visitTimestamp = vectorIterator;
	IteratorVisitor.prototype.visitTimestampSecond = vectorIterator;
	IteratorVisitor.prototype.visitTimestampMillisecond = vectorIterator;
	IteratorVisitor.prototype.visitTimestampMicrosecond = vectorIterator;
	IteratorVisitor.prototype.visitTimestampNanosecond = vectorIterator;
	IteratorVisitor.prototype.visitTime = vectorIterator;
	IteratorVisitor.prototype.visitTimeSecond = vectorIterator;
	IteratorVisitor.prototype.visitTimeMillisecond = vectorIterator;
	IteratorVisitor.prototype.visitTimeMicrosecond = vectorIterator;
	IteratorVisitor.prototype.visitTimeNanosecond = vectorIterator;
	IteratorVisitor.prototype.visitDecimal = vectorIterator;
	IteratorVisitor.prototype.visitList = vectorIterator;
	IteratorVisitor.prototype.visitStruct = vectorIterator;
	IteratorVisitor.prototype.visitUnion = vectorIterator;
	IteratorVisitor.prototype.visitDenseUnion = vectorIterator;
	IteratorVisitor.prototype.visitSparseUnion = vectorIterator;
	IteratorVisitor.prototype.visitDictionary = vectorIterator;
	IteratorVisitor.prototype.visitInterval = vectorIterator;
	IteratorVisitor.prototype.visitIntervalDayTime = vectorIterator;
	IteratorVisitor.prototype.visitIntervalYearMonth = vectorIterator;
	IteratorVisitor.prototype.visitIntervalMonthDayNano = vectorIterator;
	IteratorVisitor.prototype.visitDuration = vectorIterator;
	IteratorVisitor.prototype.visitDurationSecond = vectorIterator;
	IteratorVisitor.prototype.visitDurationMillisecond = vectorIterator;
	IteratorVisitor.prototype.visitDurationMicrosecond = vectorIterator;
	IteratorVisitor.prototype.visitDurationNanosecond = vectorIterator;
	IteratorVisitor.prototype.visitFixedSizeList = vectorIterator;
	IteratorVisitor.prototype.visitMap = vectorIterator;
	/** @ignore */
	exports.instance = new IteratorVisitor();
}));
//#endregion
//#region node_modules/apache-arrow/vector.js
var require_vector = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.makeVector = exports.Vector = void 0;
	var enum_js_1 = require_enum();
	var vector_js_1 = require_vector$1();
	var type_js_1 = require_type();
	var data_js_1 = require_data();
	var chunk_js_1 = require_chunk();
	var get_js_1 = require_get();
	var set_js_1 = require_set();
	var indexof_js_1 = require_indexof();
	var iterator_js_1 = require_iterator();
	var visitorsByTypeId = {};
	var vectorPrototypesByTypeId = {};
	/**
	* Array-like data structure. Use the convenience method {@link makeVector} and {@link vectorFromArray} to create vectors.
	*/
	var Vector = class Vector {
		constructor(input) {
			var _b, _c, _d;
			const data = input[0] instanceof Vector ? input.flatMap((x) => x.data) : input;
			if (data.length === 0 || data.some((x) => !(x instanceof data_js_1.Data))) throw new TypeError("Vector constructor expects an Array of Data instances.");
			const type = (_b = data[0]) === null || _b === void 0 ? void 0 : _b.type;
			switch (data.length) {
				case 0:
					this._offsets = [0];
					break;
				case 1: {
					const { get, set, indexOf } = visitorsByTypeId[type.typeId];
					const unchunkedData = data[0];
					this.isValid = (index) => (0, chunk_js_1.isChunkedValid)(unchunkedData, index);
					this.get = (index) => get(unchunkedData, index);
					this.set = (index, value) => set(unchunkedData, index, value);
					this.indexOf = (index) => indexOf(unchunkedData, index);
					this._offsets = [0, unchunkedData.length];
					break;
				}
				default:
					Object.setPrototypeOf(this, vectorPrototypesByTypeId[type.typeId]);
					this._offsets = (0, chunk_js_1.computeChunkOffsets)(data);
					break;
			}
			this.data = data;
			this.type = type;
			this.stride = (0, type_js_1.strideForType)(type);
			this.numChildren = (_d = (_c = type.children) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0;
			this.length = this._offsets.at(-1);
		}
		/**
		* The aggregate size (in bytes) of this Vector's buffers and/or child Vectors.
		*/
		get byteLength() {
			return this.data.reduce((byteLength, data) => byteLength + data.byteLength, 0);
		}
		/**
		* Whether this Vector's elements can contain null values.
		*/
		get nullable() {
			return (0, chunk_js_1.computeChunkNullable)(this.data);
		}
		/**
		* The number of null elements in this Vector.
		*/
		get nullCount() {
			return (0, chunk_js_1.computeChunkNullCounts)(this.data);
		}
		/**
		* The Array or TypedArray constructor used for the JS representation
		*  of the element's values in {@link Vector.prototype.toArray `toArray()`}.
		*/
		get ArrayType() {
			return this.type.ArrayType;
		}
		/**
		* The name that should be printed when the Vector is logged in a message.
		*/
		get [Symbol.toStringTag]() {
			return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`;
		}
		/**
		* The name of this Vector.
		*/
		get VectorName() {
			return `${enum_js_1.Type[this.type.typeId]}Vector`;
		}
		/**
		* Check whether an element is null.
		* @param index The index at which to read the validity bitmap.
		*/
		isValid(index) {
			return false;
		}
		/**
		* Get an element value by position.
		* @param index The index of the element to read.
		*/
		get(index) {
			return null;
		}
		/**
		* Get an element value by position.
		* @param index The index of the element to read. A negative index will count back from the last element.
		*/
		at(index) {
			return this.get((0, vector_js_1.wrapIndex)(index, this.length));
		}
		/**
		* Set an element value by position.
		* @param index The index of the element to write.
		* @param value The value to set.
		*/
		set(index, value) {}
		/**
		* Retrieve the index of the first occurrence of a value in an Vector.
		* @param element The value to locate in the Vector.
		* @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
		*/
		indexOf(element, offset) {
			return -1;
		}
		includes(element, offset) {
			return this.indexOf(element, offset) > -1;
		}
		/**
		* Iterator for the Vector's elements.
		*/
		[Symbol.iterator]() {
			return iterator_js_1.instance.visit(this);
		}
		/**
		* Combines two or more Vectors of the same type.
		* @param others Additional Vectors to add to the end of this Vector.
		*/
		concat(...others) {
			return new Vector(this.data.concat(others.flatMap((x) => x.data).flat(Number.POSITIVE_INFINITY)));
		}
		/**
		* Return a zero-copy sub-section of this Vector.
		* @param start The beginning of the specified portion of the Vector.
		* @param end The end of the specified portion of the Vector. This is exclusive of the element at the index 'end'.
		*/
		slice(begin, end) {
			return new Vector((0, vector_js_1.clampRange)(this, begin, end, ({ data, _offsets }, begin, end) => (0, chunk_js_1.sliceChunks)(data, _offsets, begin, end)));
		}
		toJSON() {
			return [...this];
		}
		/**
		* Return a JavaScript Array or TypedArray of the Vector's elements.
		*
		* @note If this Vector contains a single Data chunk and the Vector's type is a
		*  primitive numeric type corresponding to one of the JavaScript TypedArrays, this
		*  method returns a zero-copy slice of the underlying TypedArray values. If there's
		*  more than one chunk, the resulting TypedArray will be a copy of the data from each
		*  chunk's underlying TypedArray values.
		*
		* @returns An Array or TypedArray of the Vector's elements, based on the Vector's DataType.
		*/
		toArray() {
			const { type, data, length, stride, ArrayType } = this;
			switch (type.typeId) {
				case enum_js_1.Type.Int:
				case enum_js_1.Type.Float:
				case enum_js_1.Type.Decimal:
				case enum_js_1.Type.Time:
				case enum_js_1.Type.Timestamp: switch (data.length) {
					case 0: return new ArrayType();
					case 1: return data[0].values.subarray(0, length * stride);
					default: return data.reduce((memo, { values, length: chunk_length }) => {
						memo.array.set(values.subarray(0, chunk_length * stride), memo.offset);
						memo.offset += chunk_length * stride;
						return memo;
					}, {
						array: new ArrayType(length * stride),
						offset: 0
					}).array;
				}
			}
			return [...this];
		}
		/**
		* Returns a string representation of the Vector.
		*
		* @returns A string representation of the Vector.
		*/
		toString() {
			return `[${[...this].join(",")}]`;
		}
		/**
		* Returns a child Vector by name, or null if this Vector has no child with the given name.
		* @param name The name of the child to retrieve.
		*/
		getChild(name) {
			var _b;
			return this.getChildAt((_b = this.type.children) === null || _b === void 0 ? void 0 : _b.findIndex((f) => f.name === name));
		}
		/**
		* Returns a child Vector by index, or null if this Vector has no child at the supplied index.
		* @param index The index of the child to retrieve.
		*/
		getChildAt(index) {
			if (index > -1 && index < this.numChildren) return new Vector(this.data.map(({ children }) => children[index]));
			return null;
		}
		get isMemoized() {
			if (type_js_1.DataType.isDictionary(this.type)) return this.data[0].dictionary.isMemoized;
			return false;
		}
		/**
		* Adds memoization to the Vector's {@link get} method. For dictionary
		* vectors, this method return a vector that memoizes only the dictionary
		* values.
		*
		* Memoization is very useful when decoding a value is expensive such as
		* Utf8. The memoization creates a cache of the size of the Vector and
		* therefore increases memory usage.
		*
		* @returns A new vector that memoizes calls to {@link get}.
		*/
		memoize() {
			if (type_js_1.DataType.isDictionary(this.type)) {
				const dictionary = new MemoizedVector(this.data[0].dictionary);
				return new Vector(this.data.map((data) => {
					const cloned = data.clone();
					cloned.dictionary = dictionary;
					return cloned;
				}));
			}
			return new MemoizedVector(this);
		}
		/**
		* Returns a vector without memoization of the {@link get} method. If this
		* vector is not memoized, this method returns this vector.
		*
		* @returns A new vector without memoization.
		*/
		unmemoize() {
			if (type_js_1.DataType.isDictionary(this.type) && this.isMemoized) {
				const dictionary = this.data[0].dictionary.unmemoize();
				return new Vector(this.data.map((data) => {
					const newData = data.clone();
					newData.dictionary = dictionary;
					return newData;
				}));
			}
			return this;
		}
	};
	exports.Vector = Vector;
	_a = Symbol.toStringTag;
	Vector[_a] = ((proto) => {
		proto.type = type_js_1.DataType.prototype;
		proto.data = [];
		proto.length = 0;
		proto.stride = 1;
		proto.numChildren = 0;
		proto._offsets = new Uint32Array([0]);
		proto[Symbol.isConcatSpreadable] = true;
		const typeIds = Object.keys(enum_js_1.Type).map((T) => enum_js_1.Type[T]).filter((T) => typeof T === "number" && T !== enum_js_1.Type.NONE);
		for (const typeId of typeIds) {
			visitorsByTypeId[typeId] = {
				get: get_js_1.instance.getVisitFnByTypeId(typeId),
				set: set_js_1.instance.getVisitFnByTypeId(typeId),
				indexOf: indexof_js_1.instance.getVisitFnByTypeId(typeId)
			};
			vectorPrototypesByTypeId[typeId] = Object.create(proto, {
				["isValid"]: { value: (0, chunk_js_1.wrapChunkedCall1)(chunk_js_1.isChunkedValid) },
				["get"]: { value: (0, chunk_js_1.wrapChunkedCall1)(get_js_1.instance.getVisitFnByTypeId(typeId)) },
				["set"]: { value: (0, chunk_js_1.wrapChunkedCall2)(set_js_1.instance.getVisitFnByTypeId(typeId)) },
				["indexOf"]: { value: (0, chunk_js_1.wrapChunkedIndexOf)(indexof_js_1.instance.getVisitFnByTypeId(typeId)) }
			});
		}
		return "Vector";
	})(Vector.prototype);
	var MemoizedVector = class MemoizedVector extends Vector {
		constructor(vector) {
			super(vector.data);
			const get = this.get;
			const set = this.set;
			const slice = this.slice;
			const cache = new Array(this.length);
			Object.defineProperty(this, "get", { value(index) {
				const cachedValue = cache[index];
				if (cachedValue !== void 0) return cachedValue;
				const value = get.call(this, index);
				cache[index] = value;
				return value;
			} });
			Object.defineProperty(this, "set", { value(index, value) {
				set.call(this, index, value);
				cache[index] = value;
			} });
			Object.defineProperty(this, "slice", { value: (begin, end) => new MemoizedVector(slice.call(this, begin, end)) });
			Object.defineProperty(this, "isMemoized", { value: true });
			Object.defineProperty(this, "unmemoize", { value: () => new Vector(this.data) });
			Object.defineProperty(this, "memoize", { value: () => this });
		}
	};
	var dtypes = require_type();
	function makeVector(init) {
		if (init) {
			if (init instanceof data_js_1.Data) return new Vector([init]);
			if (init instanceof Vector) return new Vector(init.data);
			if (init.type instanceof type_js_1.DataType) return new Vector([(0, data_js_1.makeData)(init)]);
			if (Array.isArray(init)) return new Vector(init.flatMap((v) => unwrapInputs(v)));
			if (ArrayBuffer.isView(init)) {
				if (init instanceof DataView) init = new Uint8Array(init.buffer);
				const props = {
					offset: 0,
					length: init.length,
					nullCount: -1,
					data: init
				};
				if (init instanceof Int8Array) return new Vector([(0, data_js_1.makeData)(Object.assign(Object.assign({}, props), { type: new dtypes.Int8() }))]);
				if (init instanceof Int16Array) return new Vector([(0, data_js_1.makeData)(Object.assign(Object.assign({}, props), { type: new dtypes.Int16() }))]);
				if (init instanceof Int32Array) return new Vector([(0, data_js_1.makeData)(Object.assign(Object.assign({}, props), { type: new dtypes.Int32() }))]);
				if (init instanceof BigInt64Array) return new Vector([(0, data_js_1.makeData)(Object.assign(Object.assign({}, props), { type: new dtypes.Int64() }))]);
				if (init instanceof Uint8Array || init instanceof Uint8ClampedArray) return new Vector([(0, data_js_1.makeData)(Object.assign(Object.assign({}, props), { type: new dtypes.Uint8() }))]);
				if (init instanceof Uint16Array) return new Vector([(0, data_js_1.makeData)(Object.assign(Object.assign({}, props), { type: new dtypes.Uint16() }))]);
				if (init instanceof Uint32Array) return new Vector([(0, data_js_1.makeData)(Object.assign(Object.assign({}, props), { type: new dtypes.Uint32() }))]);
				if (init instanceof BigUint64Array) return new Vector([(0, data_js_1.makeData)(Object.assign(Object.assign({}, props), { type: new dtypes.Uint64() }))]);
				if (init instanceof Float32Array) return new Vector([(0, data_js_1.makeData)(Object.assign(Object.assign({}, props), { type: new dtypes.Float32() }))]);
				if (init instanceof Float64Array) return new Vector([(0, data_js_1.makeData)(Object.assign(Object.assign({}, props), { type: new dtypes.Float64() }))]);
				throw new Error("Unrecognized input");
			}
		}
		throw new Error("Unrecognized input");
	}
	exports.makeVector = makeVector;
	function unwrapInputs(x) {
		return x instanceof data_js_1.Data ? [x] : x instanceof Vector ? x.data : makeVector(x).data;
	}
}));
//#endregion
//#region node_modules/apache-arrow/builder/valid.js
var require_valid = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createIsValidFunction = void 0;
	var pretty_js_1 = require_pretty();
	/**
	* Dynamically compile the null values into an `isValid()` function whose
	* implementation is a switch statement. Microbenchmarks in v8 indicate
	* this approach is 25% faster than using an ES6 Map.
	*
	* @example
	* console.log(createIsValidFunction([null, 'N/A', NaN]));
	* `function (x) {
	*     if (x !== x) return false;
	*     switch (x) {
	*         case null:
	*         case "N/A":
	*             return false;
	*     }
	*     return true;
	* }`
	*
	* @ignore
	* @param nullValues
	*/
	function createIsValidFunction(nullValues) {
		if (!nullValues || nullValues.length <= 0) return function isValid(value) {
			return true;
		};
		let fnBody = "";
		const noNaNs = nullValues.filter((x) => x === x);
		if (noNaNs.length > 0) fnBody = `
    switch (x) {${noNaNs.map((x) => `
        case ${valueToCase(x)}:`).join("")}
            return false;
    }`;
		if (nullValues.length !== noNaNs.length) fnBody = `if (x !== x) return false;\n${fnBody}`;
		return new Function(`x`, `${fnBody}\nreturn true;`);
	}
	exports.createIsValidFunction = createIsValidFunction;
	/** @ignore */
	function valueToCase(x) {
		if (typeof x !== "bigint") return (0, pretty_js_1.valueToString)(x);
		return `${(0, pretty_js_1.valueToString)(x)}n`;
	}
}));
//#endregion
//#region node_modules/apache-arrow/builder/buffer.js
var require_buffer = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.OffsetsBufferBuilder = exports.BitmapBufferBuilder = exports.DataBufferBuilder = exports.BufferBuilder = void 0;
	var buffer_js_1 = require_buffer$2();
	/** @ignore */
	function roundLengthUpToNearest64Bytes(len, BPE) {
		const bytesMinus1 = Math.ceil(len) * BPE - 1;
		return (bytesMinus1 - bytesMinus1 % 64 + 64 || 64) / BPE;
	}
	/** @ignore */
	function resizeArray(arr, len = 0) {
		return arr.length >= len ? arr.subarray(0, len) : (0, buffer_js_1.memcpy)(new arr.constructor(len), arr, 0);
	}
	/** @ignore */
	var BufferBuilder = class {
		constructor(bufferType, initialSize = 0, stride = 1) {
			this.length = Math.ceil(initialSize / stride);
			this.buffer = new bufferType(this.length);
			this.stride = stride;
			this.BYTES_PER_ELEMENT = bufferType.BYTES_PER_ELEMENT;
			this.ArrayType = bufferType;
		}
		get byteLength() {
			return Math.ceil(this.length * this.stride) * this.BYTES_PER_ELEMENT;
		}
		get reservedLength() {
			return this.buffer.length / this.stride;
		}
		get reservedByteLength() {
			return this.buffer.byteLength;
		}
		set(index, value) {
			return this;
		}
		append(value) {
			return this.set(this.length, value);
		}
		reserve(extra) {
			if (extra > 0) {
				this.length += extra;
				const stride = this.stride;
				const length = this.length * stride;
				const reserved = this.buffer.length;
				if (length >= reserved) this._resize(reserved === 0 ? roundLengthUpToNearest64Bytes(length * 1, this.BYTES_PER_ELEMENT) : roundLengthUpToNearest64Bytes(length * 2, this.BYTES_PER_ELEMENT));
			}
			return this;
		}
		flush(length = this.length) {
			length = roundLengthUpToNearest64Bytes(length * this.stride, this.BYTES_PER_ELEMENT);
			const array = resizeArray(this.buffer, length);
			this.clear();
			return array;
		}
		clear() {
			this.length = 0;
			this.buffer = new this.ArrayType();
			return this;
		}
		_resize(newLength) {
			return this.buffer = resizeArray(this.buffer, newLength);
		}
	};
	exports.BufferBuilder = BufferBuilder;
	/** @ignore */
	var DataBufferBuilder = class extends BufferBuilder {
		last() {
			return this.get(this.length - 1);
		}
		get(index) {
			return this.buffer[index];
		}
		set(index, value) {
			this.reserve(index - this.length + 1);
			this.buffer[index * this.stride] = value;
			return this;
		}
	};
	exports.DataBufferBuilder = DataBufferBuilder;
	/** @ignore */
	var BitmapBufferBuilder = class extends DataBufferBuilder {
		constructor() {
			super(Uint8Array, 0, 1 / 8);
			this.numValid = 0;
		}
		get numInvalid() {
			return this.length - this.numValid;
		}
		get(idx) {
			return this.buffer[idx >> 3] >> idx % 8 & 1;
		}
		set(idx, val) {
			const { buffer } = this.reserve(idx - this.length + 1);
			const byte = idx >> 3, bit = idx % 8, cur = buffer[byte] >> bit & 1;
			val ? cur === 0 && (buffer[byte] |= 1 << bit, ++this.numValid) : cur === 1 && (buffer[byte] &= ~(1 << bit), --this.numValid);
			return this;
		}
		clear() {
			this.numValid = 0;
			return super.clear();
		}
	};
	exports.BitmapBufferBuilder = BitmapBufferBuilder;
	/** @ignore */
	var OffsetsBufferBuilder = class extends DataBufferBuilder {
		constructor(type) {
			super(type.OffsetArrayType, 1, 1);
		}
		append(value) {
			return this.set(this.length - 1, value);
		}
		set(index, value) {
			const offset = this.length - 1;
			const buffer = this.reserve(index - offset + 1).buffer;
			if (offset < index++ && offset >= 0) buffer.fill(buffer[offset], offset, index);
			buffer[index] = buffer[index - 1] + value;
			return this;
		}
		flush(length = this.length - 1) {
			if (length > this.length) this.set(length - 1, this.BYTES_PER_ELEMENT > 4 ? BigInt(0) : 0);
			return super.flush(length + 1);
		}
	};
	exports.OffsetsBufferBuilder = OffsetsBufferBuilder;
}));
//#endregion
//#region node_modules/apache-arrow/builder.js
var require_builder$2 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VariableWidthBuilder = exports.FixedWidthBuilder = exports.Builder = void 0;
	var vector_js_1 = require_vector();
	var data_js_1 = require_data();
	var map_js_1 = require_map$1();
	var type_js_1 = require_type();
	var valid_js_1 = require_valid();
	var buffer_js_1 = require_buffer();
	/**
	* An abstract base class for types that construct Arrow Vectors from arbitrary JavaScript values.
	*
	* A `Builder` is responsible for writing arbitrary JavaScript values
	* to ArrayBuffers and/or child Builders according to the Arrow specification
	* for each DataType, creating or resizing the underlying ArrayBuffers as necessary.
	*
	* The `Builder` for each Arrow `DataType` handles converting and appending
	* values for a given `DataType`. The high-level {@link makeBuilder `makeBuilder()`} convenience
	* method creates the specific `Builder` subclass for the supplied `DataType`.
	*
	* Once created, `Builder` instances support both appending values to the end
	* of the `Builder`, and random-access writes to specific indices
	* (`Builder.prototype.append(value)` is a convenience method for
	* `builder.set(builder.length, value)`). Appending or setting values beyond the
	* Builder's current length may cause the builder to grow its underlying buffers
	* or child Builders (if applicable) to accommodate the new values.
	*
	* After enough values have been written to a `Builder`, `Builder.prototype.flush()`
	* will commit the values to the underlying ArrayBuffers (or child Builders). The
	* internal Builder state will be reset, and an instance of `Data<T>` is returned.
	* Alternatively, `Builder.prototype.toVector()` will flush the `Builder` and return
	* an instance of `Vector<T>` instead.
	*
	* When there are no more values to write, use `Builder.prototype.finish()` to
	* finalize the `Builder`. This does not reset the internal state, so it is
	* necessary to call `Builder.prototype.flush()` or `toVector()` one last time
	* if there are still values queued to be flushed.
	*
	* Note: calling `Builder.prototype.finish()` is required when using a `DictionaryBuilder`,
	* because this is when it flushes the values that have been enqueued in its internal
	* dictionary's `Builder`, and creates the `dictionaryVector` for the `Dictionary` `DataType`.
	*
	* @example
	* ```ts
	* import { makeBuilder, Utf8 } from 'apache-arrow';
	*
	* const utf8Builder = makeBuilder({
	*     type: new Utf8(),
	*     nullValues: [null, 'n/a']
	* });
	*
	* utf8Builder
	*     .append('hello')
	*     .append('n/a')
	*     .append('world')
	*     .append(null);
	*
	* const utf8Vector = utf8Builder.finish().toVector();
	*
	* console.log(utf8Vector.toJSON());
	* // > ["hello", null, "world", null]
	* ```
	*
	* @typeparam T The `DataType` of this `Builder`.
	* @typeparam TNull The type(s) of values which will be considered null-value sentinels.
	*/
	var Builder = class {
		/** @nocollapse */
		static throughNode(options) {
			throw new Error(`"throughNode" not available in this environment`);
		}
		/** @nocollapse */
		static throughDOM(options) {
			throw new Error(`"throughDOM" not available in this environment`);
		}
		/**
		* Construct a builder with the given Arrow DataType with optional null values,
		* which will be interpreted as "null" when set or appended to the `Builder`.
		* @param {{ type: T, nullValues?: any[] }} options A `BuilderOptions` object used to create this `Builder`.
		*/
		constructor({ "type": type, "nullValues": nulls }) {
			/**
			* The number of values written to the `Builder` that haven't been flushed yet.
			* @readonly
			*/
			this.length = 0;
			/**
			* A boolean indicating whether `Builder.prototype.finish()` has been called on this `Builder`.
			* @readonly
			*/
			this.finished = false;
			this.type = type;
			this.children = [];
			this.nullValues = nulls;
			this.stride = (0, type_js_1.strideForType)(type);
			this._nulls = new buffer_js_1.BitmapBufferBuilder();
			if (nulls && nulls.length > 0) this._isValid = (0, valid_js_1.createIsValidFunction)(nulls);
		}
		/**
		* Flush the `Builder` and return a `Vector<T>`.
		* @returns {Vector<T>} A `Vector<T>` of the flushed values.
		*/
		toVector() {
			return new vector_js_1.Vector([this.flush()]);
		}
		get ArrayType() {
			return this.type.ArrayType;
		}
		get nullCount() {
			return this._nulls.numInvalid;
		}
		get numChildren() {
			return this.children.length;
		}
		/**
		* @returns The aggregate length (in bytes) of the values that have been written.
		*/
		get byteLength() {
			let size = 0;
			const { _offsets, _values, _nulls, _typeIds, children } = this;
			_offsets && (size += _offsets.byteLength);
			_values && (size += _values.byteLength);
			_nulls && (size += _nulls.byteLength);
			_typeIds && (size += _typeIds.byteLength);
			return children.reduce((size, child) => size + child.byteLength, size);
		}
		/**
		* @returns The aggregate number of rows that have been reserved to write new values.
		*/
		get reservedLength() {
			return this._nulls.reservedLength;
		}
		/**
		* @returns The aggregate length (in bytes) that has been reserved to write new values.
		*/
		get reservedByteLength() {
			let size = 0;
			this._offsets && (size += this._offsets.reservedByteLength);
			this._values && (size += this._values.reservedByteLength);
			this._nulls && (size += this._nulls.reservedByteLength);
			this._typeIds && (size += this._typeIds.reservedByteLength);
			return this.children.reduce((size, child) => size + child.reservedByteLength, size);
		}
		get valueOffsets() {
			return this._offsets ? this._offsets.buffer : null;
		}
		get values() {
			return this._values ? this._values.buffer : null;
		}
		get nullBitmap() {
			return this._nulls ? this._nulls.buffer : null;
		}
		get typeIds() {
			return this._typeIds ? this._typeIds.buffer : null;
		}
		/**
		* Appends a value (or null) to this `Builder`.
		* This is equivalent to `builder.set(builder.length, value)`.
		* @param {T['TValue'] | TNull } value The value to append.
		*/
		append(value) {
			return this.set(this.length, value);
		}
		/**
		* Validates whether a value is valid (true), or null (false)
		* @param {T['TValue'] | TNull } value The value to compare against null the value representations
		*/
		isValid(value) {
			return this._isValid(value);
		}
		/**
		* Write a value (or null-value sentinel) at the supplied index.
		* If the value matches one of the null-value representations, a 1-bit is
		* written to the null `BitmapBufferBuilder`. Otherwise, a 0 is written to
		* the null `BitmapBufferBuilder`, and the value is passed to
		* `Builder.prototype.setValue()`.
		* @param {number} index The index of the value to write.
		* @param {T['TValue'] | TNull } value The value to write at the supplied index.
		* @returns {this} The updated `Builder` instance.
		*/
		set(index, value) {
			if (this.setValid(index, this.isValid(value))) this.setValue(index, value);
			return this;
		}
		/**
		* Write a value to the underlying buffers at the supplied index, bypassing
		* the null-value check. This is a low-level method that
		* @param {number} index
		* @param {T['TValue'] | TNull } value
		*/
		setValue(index, value) {
			this._setValue(this, index, value);
		}
		setValid(index, valid) {
			this.length = this._nulls.set(index, +valid).length;
			return valid;
		}
		addChild(child, name = `${this.numChildren}`) {
			throw new Error(`Cannot append children to non-nested type "${this.type}"`);
		}
		/**
		* Retrieve the child `Builder` at the supplied `index`, or null if no child
		* exists at that index.
		* @param {number} index The index of the child `Builder` to retrieve.
		* @returns {Builder | null} The child Builder at the supplied index or null.
		*/
		getChildAt(index) {
			return this.children[index] || null;
		}
		/**
		* Commit all the values that have been written to their underlying
		* ArrayBuffers, including any child Builders if applicable, and reset
		* the internal `Builder` state.
		* @returns A `Data<T>` of the buffers and children representing the values written.
		*/
		flush() {
			let data;
			let typeIds;
			let nullBitmap;
			let valueOffsets;
			const { type, length, nullCount, _typeIds, _offsets, _values, _nulls } = this;
			if (typeIds = _typeIds === null || _typeIds === void 0 ? void 0 : _typeIds.flush(length)) valueOffsets = _offsets === null || _offsets === void 0 ? void 0 : _offsets.flush(length);
			else if (valueOffsets = _offsets === null || _offsets === void 0 ? void 0 : _offsets.flush(length)) data = _values === null || _values === void 0 ? void 0 : _values.flush(_offsets.last());
			else data = _values === null || _values === void 0 ? void 0 : _values.flush(length);
			if (nullCount > 0) nullBitmap = _nulls === null || _nulls === void 0 ? void 0 : _nulls.flush(length);
			const children = this.children.map((child) => child.flush());
			this.clear();
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				children,
				"child": children[0],
				data,
				typeIds,
				nullBitmap,
				valueOffsets
			});
		}
		/**
		* Finalize this `Builder`, and child builders if applicable.
		* @returns {this} The finalized `Builder` instance.
		*/
		finish() {
			this.finished = true;
			for (const child of this.children) child.finish();
			return this;
		}
		/**
		* Clear this Builder's internal state, including child Builders if applicable, and reset the length to 0.
		* @returns {this} The cleared `Builder` instance.
		*/
		clear() {
			var _a, _b, _c, _d;
			this.length = 0;
			(_a = this._nulls) === null || _a === void 0 || _a.clear();
			(_b = this._values) === null || _b === void 0 || _b.clear();
			(_c = this._offsets) === null || _c === void 0 || _c.clear();
			(_d = this._typeIds) === null || _d === void 0 || _d.clear();
			for (const child of this.children) child.clear();
			return this;
		}
	};
	exports.Builder = Builder;
	Builder.prototype.length = 1;
	Builder.prototype.stride = 1;
	Builder.prototype.children = null;
	Builder.prototype.finished = false;
	Builder.prototype.nullValues = null;
	Builder.prototype._isValid = () => true;
	/** @ignore */
	var FixedWidthBuilder = class extends Builder {
		constructor(opts) {
			super(opts);
			this._values = new buffer_js_1.DataBufferBuilder(this.ArrayType, 0, this.stride);
		}
		setValue(index, value) {
			const values = this._values;
			values.reserve(index - values.length + 1);
			return super.setValue(index, value);
		}
	};
	exports.FixedWidthBuilder = FixedWidthBuilder;
	/** @ignore */
	var VariableWidthBuilder = class extends Builder {
		constructor(opts) {
			super(opts);
			this._pendingLength = 0;
			this._offsets = new buffer_js_1.OffsetsBufferBuilder(opts.type);
		}
		setValue(index, value) {
			const pending = this._pending || (this._pending = /* @__PURE__ */ new Map());
			const current = pending.get(index);
			current && (this._pendingLength -= current.length);
			this._pendingLength += value instanceof map_js_1.MapRow ? value[map_js_1.kKeys].length : value.length;
			pending.set(index, value);
		}
		setValid(index, isValid) {
			if (!super.setValid(index, isValid)) {
				(this._pending || (this._pending = /* @__PURE__ */ new Map())).set(index, void 0);
				return false;
			}
			return true;
		}
		clear() {
			this._pendingLength = 0;
			this._pending = void 0;
			return super.clear();
		}
		flush() {
			this._flush();
			return super.flush();
		}
		finish() {
			this._flush();
			return super.finish();
		}
		_flush() {
			const pending = this._pending;
			const pendingLength = this._pendingLength;
			this._pendingLength = 0;
			this._pending = void 0;
			if (pending && pending.size > 0) this._flushPending(pending, pendingLength);
			return this;
		}
	};
	exports.VariableWidthBuilder = VariableWidthBuilder;
}));
//#endregion
//#region node_modules/apache-arrow/fb/block.js
var require_block = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Block = void 0;
	var Block = class {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		/**
		* Index to the start of the RecordBlock (note this is past the Message header)
		*/
		offset() {
			return this.bb.readInt64(this.bb_pos);
		}
		/**
		* Length of the metadata
		*/
		metaDataLength() {
			return this.bb.readInt32(this.bb_pos + 8);
		}
		/**
		* Length of the data (this is aligned so there can be a gap between this and
		* the metadata).
		*/
		bodyLength() {
			return this.bb.readInt64(this.bb_pos + 16);
		}
		static sizeOf() {
			return 24;
		}
		static createBlock(builder, offset, metaDataLength, bodyLength) {
			builder.prep(8, 24);
			builder.writeInt64(BigInt(bodyLength !== null && bodyLength !== void 0 ? bodyLength : 0));
			builder.pad(4);
			builder.writeInt32(metaDataLength);
			builder.writeInt64(BigInt(offset !== null && offset !== void 0 ? offset : 0));
			return builder.offset();
		}
	};
	exports.Block = Block;
}));
//#endregion
//#region node_modules/apache-arrow/fb/footer.js
var require_footer = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Footer = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var block_js_1 = require_block();
	var key_value_js_1 = require_key_value();
	var metadata_version_js_1 = require_metadata_version();
	var schema_js_1 = require_schema$1();
	exports.Footer = class Footer {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsFooter(bb, obj) {
			return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsFooter(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Footer()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		version() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt16(this.bb_pos + offset) : metadata_version_js_1.MetadataVersion.V1;
		}
		schema(obj) {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? (obj || new schema_js_1.Schema()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
		}
		dictionaries(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? (obj || new block_js_1.Block()).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
		}
		dictionariesLength() {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		recordBatches(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? (obj || new block_js_1.Block()).__init(this.bb.__vector(this.bb_pos + offset) + index * 24, this.bb) : null;
		}
		recordBatchesLength() {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		/**
		* User-defined metadata
		*/
		customMetadata(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 12);
			return offset ? (obj || new key_value_js_1.KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
		}
		customMetadataLength() {
			const offset = this.bb.__offset(this.bb_pos, 12);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		static startFooter(builder) {
			builder.startObject(5);
		}
		static addVersion(builder, version) {
			builder.addFieldInt16(0, version, metadata_version_js_1.MetadataVersion.V1);
		}
		static addSchema(builder, schemaOffset) {
			builder.addFieldOffset(1, schemaOffset, 0);
		}
		static addDictionaries(builder, dictionariesOffset) {
			builder.addFieldOffset(2, dictionariesOffset, 0);
		}
		static startDictionariesVector(builder, numElems) {
			builder.startVector(24, numElems, 8);
		}
		static addRecordBatches(builder, recordBatchesOffset) {
			builder.addFieldOffset(3, recordBatchesOffset, 0);
		}
		static startRecordBatchesVector(builder, numElems) {
			builder.startVector(24, numElems, 8);
		}
		static addCustomMetadata(builder, customMetadataOffset) {
			builder.addFieldOffset(4, customMetadataOffset, 0);
		}
		static createCustomMetadataVector(builder, data) {
			builder.startVector(4, data.length, 4);
			for (let i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
			return builder.endVector();
		}
		static startCustomMetadataVector(builder, numElems) {
			builder.startVector(4, numElems, 4);
		}
		static endFooter(builder) {
			return builder.endObject();
		}
		static finishFooterBuffer(builder, offset) {
			builder.finish(offset);
		}
		static finishSizePrefixedFooterBuffer(builder, offset) {
			builder.finish(offset, void 0, true);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/schema.js
var require_schema = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Field = exports.Schema = void 0;
	var enum_js_1 = require_enum();
	var type_js_1 = require_type();
	var Schema = class Schema {
		constructor(fields = [], metadata, dictionaries, metadataVersion = enum_js_1.MetadataVersion.V5) {
			this.fields = fields || [];
			this.metadata = metadata || /* @__PURE__ */ new Map();
			if (!dictionaries) dictionaries = generateDictionaryMap(this.fields);
			this.dictionaries = dictionaries;
			this.metadataVersion = metadataVersion;
		}
		get [Symbol.toStringTag]() {
			return "Schema";
		}
		get names() {
			return this.fields.map((f) => f.name);
		}
		toString() {
			return `Schema<{ ${this.fields.map((f, i) => `${i}: ${f}`).join(", ")} }>`;
		}
		/**
		* Construct a new Schema containing only specified fields.
		*
		* @param fieldNames Names of fields to keep.
		* @returns A new Schema of fields matching the specified names.
		*/
		select(fieldNames) {
			const names = new Set(fieldNames);
			return new Schema(this.fields.filter((f) => names.has(f.name)), this.metadata);
		}
		/**
		* Construct a new Schema containing only fields at the specified indices.
		*
		* @param fieldIndices Indices of fields to keep.
		* @returns A new Schema of fields at the specified indices.
		*/
		selectAt(fieldIndices) {
			return new Schema(fieldIndices.map((i) => this.fields[i]).filter(Boolean), this.metadata);
		}
		assign(...args) {
			const other = args[0] instanceof Schema ? args[0] : Array.isArray(args[0]) ? new Schema(args[0]) : new Schema(args);
			const curFields = [...this.fields];
			const metadata = mergeMaps(mergeMaps(/* @__PURE__ */ new Map(), this.metadata), other.metadata);
			const newFields = other.fields.filter((f2) => {
				const i = curFields.findIndex((f) => f.name === f2.name);
				return ~i ? (curFields[i] = f2.clone({ metadata: mergeMaps(mergeMaps(/* @__PURE__ */ new Map(), curFields[i].metadata), f2.metadata) })) && false : true;
			});
			const newDictionaries = generateDictionaryMap(newFields, /* @__PURE__ */ new Map());
			return new Schema([...curFields, ...newFields], metadata, new Map([...this.dictionaries, ...newDictionaries]));
		}
	};
	exports.Schema = Schema;
	Schema.prototype.fields = null;
	Schema.prototype.metadata = null;
	Schema.prototype.dictionaries = null;
	var Field = class Field {
		/** @nocollapse */
		static new(...args) {
			let [name, type, nullable, metadata] = args;
			if (args[0] && typeof args[0] === "object") {
				({name} = args[0]);
				type === void 0 && (type = args[0].type);
				nullable === void 0 && (nullable = args[0].nullable);
				metadata === void 0 && (metadata = args[0].metadata);
			}
			return new Field(`${name}`, type, nullable, metadata);
		}
		constructor(name, type, nullable = false, metadata) {
			this.name = name;
			this.type = type;
			this.nullable = nullable;
			this.metadata = metadata || /* @__PURE__ */ new Map();
		}
		get typeId() {
			return this.type.typeId;
		}
		get [Symbol.toStringTag]() {
			return "Field";
		}
		toString() {
			return `${this.name}: ${this.type}`;
		}
		clone(...args) {
			let [name, type, nullable, metadata] = args;
			!args[0] || typeof args[0] !== "object" ? [name = this.name, type = this.type, nullable = this.nullable, metadata = this.metadata] = args : {name = this.name, type = this.type, nullable = this.nullable, metadata = this.metadata} = args[0];
			return Field.new(name, type, nullable, metadata);
		}
	};
	exports.Field = Field;
	Field.prototype.type = null;
	Field.prototype.name = null;
	Field.prototype.nullable = null;
	Field.prototype.metadata = null;
	/** @ignore */
	function mergeMaps(m1, m2) {
		return new Map([...m1 || /* @__PURE__ */ new Map(), ...m2 || /* @__PURE__ */ new Map()]);
	}
	/** @ignore */
	function generateDictionaryMap(fields, dictionaries = /* @__PURE__ */ new Map()) {
		for (let i = -1, n = fields.length; ++i < n;) {
			const type = fields[i].type;
			if (type_js_1.DataType.isDictionary(type)) {
				if (!dictionaries.has(type.id)) dictionaries.set(type.id, type.dictionary);
				else if (dictionaries.get(type.id) !== type.dictionary) throw new Error(`Cannot create Schema containing two different dictionaries with the same Id`);
			}
			if (type.children && type.children.length > 0) generateDictionaryMap(type.children, dictionaries);
		}
		return dictionaries;
	}
}));
//#endregion
//#region node_modules/apache-arrow/ipc/metadata/file.js
var require_file$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FileBlock = exports.Footer = void 0;
	var block_js_1 = require_block();
	var footer_js_1 = require_footer();
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var Builder = flatbuffers.Builder;
	var ByteBuffer = flatbuffers.ByteBuffer;
	var schema_js_1 = require_schema();
	var enum_js_1 = require_enum();
	var buffer_js_1 = require_buffer$2();
	var bigint_js_1 = require_bigint();
	/** @ignore */
	var Footer_ = class {
		/** @nocollapse */
		static decode(buf) {
			buf = new ByteBuffer((0, buffer_js_1.toUint8Array)(buf));
			const footer = footer_js_1.Footer.getRootAsFooter(buf);
			return new OffHeapFooter(schema_js_1.Schema.decode(footer.schema(), /* @__PURE__ */ new Map(), footer.version()), footer);
		}
		/** @nocollapse */
		static encode(footer) {
			const b = new Builder();
			const schemaOffset = schema_js_1.Schema.encode(b, footer.schema);
			footer_js_1.Footer.startRecordBatchesVector(b, footer.numRecordBatches);
			for (const rb of [...footer.recordBatches()].slice().reverse()) FileBlock.encode(b, rb);
			const recordBatchesOffset = b.endVector();
			footer_js_1.Footer.startDictionariesVector(b, footer.numDictionaries);
			for (const db of [...footer.dictionaryBatches()].slice().reverse()) FileBlock.encode(b, db);
			const dictionaryBatchesOffset = b.endVector();
			footer_js_1.Footer.startFooter(b);
			footer_js_1.Footer.addSchema(b, schemaOffset);
			footer_js_1.Footer.addVersion(b, enum_js_1.MetadataVersion.V5);
			footer_js_1.Footer.addRecordBatches(b, recordBatchesOffset);
			footer_js_1.Footer.addDictionaries(b, dictionaryBatchesOffset);
			footer_js_1.Footer.finishFooterBuffer(b, footer_js_1.Footer.endFooter(b));
			return b.asUint8Array();
		}
		get numRecordBatches() {
			return this._recordBatches.length;
		}
		get numDictionaries() {
			return this._dictionaryBatches.length;
		}
		constructor(schema, version = enum_js_1.MetadataVersion.V5, recordBatches, dictionaryBatches) {
			this.schema = schema;
			this.version = version;
			recordBatches && (this._recordBatches = recordBatches);
			dictionaryBatches && (this._dictionaryBatches = dictionaryBatches);
		}
		*recordBatches() {
			for (let block, i = -1, n = this.numRecordBatches; ++i < n;) if (block = this.getRecordBatch(i)) yield block;
		}
		*dictionaryBatches() {
			for (let block, i = -1, n = this.numDictionaries; ++i < n;) if (block = this.getDictionaryBatch(i)) yield block;
		}
		getRecordBatch(index) {
			return index >= 0 && index < this.numRecordBatches && this._recordBatches[index] || null;
		}
		getDictionaryBatch(index) {
			return index >= 0 && index < this.numDictionaries && this._dictionaryBatches[index] || null;
		}
	};
	exports.Footer = Footer_;
	/** @ignore */
	var OffHeapFooter = class extends Footer_ {
		get numRecordBatches() {
			return this._footer.recordBatchesLength();
		}
		get numDictionaries() {
			return this._footer.dictionariesLength();
		}
		constructor(schema, _footer) {
			super(schema, _footer.version());
			this._footer = _footer;
		}
		getRecordBatch(index) {
			if (index >= 0 && index < this.numRecordBatches) {
				const fileBlock = this._footer.recordBatches(index);
				if (fileBlock) return FileBlock.decode(fileBlock);
			}
			return null;
		}
		getDictionaryBatch(index) {
			if (index >= 0 && index < this.numDictionaries) {
				const fileBlock = this._footer.dictionaries(index);
				if (fileBlock) return FileBlock.decode(fileBlock);
			}
			return null;
		}
	};
	/** @ignore */
	var FileBlock = class FileBlock {
		/** @nocollapse */
		static decode(block) {
			return new FileBlock(block.metaDataLength(), block.bodyLength(), block.offset());
		}
		/** @nocollapse */
		static encode(b, fileBlock) {
			const { metaDataLength } = fileBlock;
			const offset = BigInt(fileBlock.offset);
			const bodyLength = BigInt(fileBlock.bodyLength);
			return block_js_1.Block.createBlock(b, offset, metaDataLength, bodyLength);
		}
		constructor(metaDataLength, bodyLength, offset) {
			this.metaDataLength = metaDataLength;
			this.offset = (0, bigint_js_1.bigIntToNumber)(offset);
			this.bodyLength = (0, bigint_js_1.bigIntToNumber)(bodyLength);
		}
	};
	exports.FileBlock = FileBlock;
}));
//#endregion
//#region node_modules/apache-arrow/fb/message.js
var require_message$2 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Message = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var key_value_js_1 = require_key_value();
	var message_header_js_1 = require_message_header();
	var metadata_version_js_1 = require_metadata_version();
	exports.Message = class Message {
		constructor() {
			this.bb = null;
			this.bb_pos = 0;
		}
		__init(i, bb) {
			this.bb_pos = i;
			this.bb = bb;
			return this;
		}
		static getRootAsMessage(bb, obj) {
			return (obj || new Message()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		static getSizePrefixedRootAsMessage(bb, obj) {
			bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
			return (obj || new Message()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
		}
		version() {
			const offset = this.bb.__offset(this.bb_pos, 4);
			return offset ? this.bb.readInt16(this.bb_pos + offset) : metadata_version_js_1.MetadataVersion.V1;
		}
		headerType() {
			const offset = this.bb.__offset(this.bb_pos, 6);
			return offset ? this.bb.readUint8(this.bb_pos + offset) : message_header_js_1.MessageHeader.NONE;
		}
		header(obj) {
			const offset = this.bb.__offset(this.bb_pos, 8);
			return offset ? this.bb.__union(obj, this.bb_pos + offset) : null;
		}
		bodyLength() {
			const offset = this.bb.__offset(this.bb_pos, 10);
			return offset ? this.bb.readInt64(this.bb_pos + offset) : BigInt("0");
		}
		customMetadata(index, obj) {
			const offset = this.bb.__offset(this.bb_pos, 12);
			return offset ? (obj || new key_value_js_1.KeyValue()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
		}
		customMetadataLength() {
			const offset = this.bb.__offset(this.bb_pos, 12);
			return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
		}
		static startMessage(builder) {
			builder.startObject(5);
		}
		static addVersion(builder, version) {
			builder.addFieldInt16(0, version, metadata_version_js_1.MetadataVersion.V1);
		}
		static addHeaderType(builder, headerType) {
			builder.addFieldInt8(1, headerType, message_header_js_1.MessageHeader.NONE);
		}
		static addHeader(builder, headerOffset) {
			builder.addFieldOffset(2, headerOffset, 0);
		}
		static addBodyLength(builder, bodyLength) {
			builder.addFieldInt64(3, bodyLength, BigInt("0"));
		}
		static addCustomMetadata(builder, customMetadataOffset) {
			builder.addFieldOffset(4, customMetadataOffset, 0);
		}
		static createCustomMetadataVector(builder, data) {
			builder.startVector(4, data.length, 4);
			for (let i = data.length - 1; i >= 0; i--) builder.addOffset(data[i]);
			return builder.endVector();
		}
		static startCustomMetadataVector(builder, numElems) {
			builder.startVector(4, numElems, 4);
		}
		static endMessage(builder) {
			return builder.endObject();
		}
		static finishMessageBuffer(builder, offset) {
			builder.finish(offset);
		}
		static finishSizePrefixedMessageBuffer(builder, offset) {
			builder.finish(offset, void 0, true);
		}
		static createMessage(builder, version, headerType, headerOffset, bodyLength, customMetadataOffset) {
			Message.startMessage(builder);
			Message.addVersion(builder, version);
			Message.addHeaderType(builder, headerType);
			Message.addHeader(builder, headerOffset);
			Message.addBodyLength(builder, bodyLength);
			Message.addCustomMetadata(builder, customMetadataOffset);
			return Message.endMessage(builder);
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/visitor/typeassembler.js
var require_typeassembler = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.instance = exports.TypeAssembler = void 0;
	var visitor_js_1 = require_visitor();
	var null_js_1 = require_null$1();
	var int_js_1 = require_int$2();
	var floating_point_js_1 = require_floating_point();
	var binary_js_1 = require_binary$1();
	var large_binary_js_1 = require_large_binary();
	var bool_js_1 = require_bool$1();
	var utf8_js_1 = require_utf8$1();
	var large_utf8_js_1 = require_large_utf8();
	var decimal_js_1 = require_decimal$1();
	var date_js_1 = require_date$1();
	var time_js_1 = require_time$1();
	var timestamp_js_1 = require_timestamp$1();
	var interval_js_1 = require_interval$2();
	var duration_js_1 = require_duration$1();
	var list_js_1 = require_list$1();
	var struct__js_1 = require_struct_();
	var union_js_1 = require_union$1();
	var dictionary_encoding_js_1 = require_dictionary_encoding();
	var fixed_size_binary_js_1 = require_fixed_size_binary();
	var fixed_size_list_js_1 = require_fixed_size_list();
	var map_js_1 = require_map$2();
	/** @ignore */
	var TypeAssembler = class extends visitor_js_1.Visitor {
		visit(node, builder) {
			return node == null || builder == null ? void 0 : super.visit(node, builder);
		}
		visitNull(_node, b) {
			null_js_1.Null.startNull(b);
			return null_js_1.Null.endNull(b);
		}
		visitInt(node, b) {
			int_js_1.Int.startInt(b);
			int_js_1.Int.addBitWidth(b, node.bitWidth);
			int_js_1.Int.addIsSigned(b, node.isSigned);
			return int_js_1.Int.endInt(b);
		}
		visitFloat(node, b) {
			floating_point_js_1.FloatingPoint.startFloatingPoint(b);
			floating_point_js_1.FloatingPoint.addPrecision(b, node.precision);
			return floating_point_js_1.FloatingPoint.endFloatingPoint(b);
		}
		visitBinary(_node, b) {
			binary_js_1.Binary.startBinary(b);
			return binary_js_1.Binary.endBinary(b);
		}
		visitLargeBinary(_node, b) {
			large_binary_js_1.LargeBinary.startLargeBinary(b);
			return large_binary_js_1.LargeBinary.endLargeBinary(b);
		}
		visitBool(_node, b) {
			bool_js_1.Bool.startBool(b);
			return bool_js_1.Bool.endBool(b);
		}
		visitUtf8(_node, b) {
			utf8_js_1.Utf8.startUtf8(b);
			return utf8_js_1.Utf8.endUtf8(b);
		}
		visitLargeUtf8(_node, b) {
			large_utf8_js_1.LargeUtf8.startLargeUtf8(b);
			return large_utf8_js_1.LargeUtf8.endLargeUtf8(b);
		}
		visitDecimal(node, b) {
			decimal_js_1.Decimal.startDecimal(b);
			decimal_js_1.Decimal.addScale(b, node.scale);
			decimal_js_1.Decimal.addPrecision(b, node.precision);
			decimal_js_1.Decimal.addBitWidth(b, node.bitWidth);
			return decimal_js_1.Decimal.endDecimal(b);
		}
		visitDate(node, b) {
			date_js_1.Date.startDate(b);
			date_js_1.Date.addUnit(b, node.unit);
			return date_js_1.Date.endDate(b);
		}
		visitTime(node, b) {
			time_js_1.Time.startTime(b);
			time_js_1.Time.addUnit(b, node.unit);
			time_js_1.Time.addBitWidth(b, node.bitWidth);
			return time_js_1.Time.endTime(b);
		}
		visitTimestamp(node, b) {
			const timezone = node.timezone && b.createString(node.timezone) || void 0;
			timestamp_js_1.Timestamp.startTimestamp(b);
			timestamp_js_1.Timestamp.addUnit(b, node.unit);
			if (timezone !== void 0) timestamp_js_1.Timestamp.addTimezone(b, timezone);
			return timestamp_js_1.Timestamp.endTimestamp(b);
		}
		visitInterval(node, b) {
			interval_js_1.Interval.startInterval(b);
			interval_js_1.Interval.addUnit(b, node.unit);
			return interval_js_1.Interval.endInterval(b);
		}
		visitDuration(node, b) {
			duration_js_1.Duration.startDuration(b);
			duration_js_1.Duration.addUnit(b, node.unit);
			return duration_js_1.Duration.endDuration(b);
		}
		visitList(_node, b) {
			list_js_1.List.startList(b);
			return list_js_1.List.endList(b);
		}
		visitStruct(_node, b) {
			struct__js_1.Struct_.startStruct_(b);
			return struct__js_1.Struct_.endStruct_(b);
		}
		visitUnion(node, b) {
			union_js_1.Union.startTypeIdsVector(b, node.typeIds.length);
			const typeIds = union_js_1.Union.createTypeIdsVector(b, node.typeIds);
			union_js_1.Union.startUnion(b);
			union_js_1.Union.addMode(b, node.mode);
			union_js_1.Union.addTypeIds(b, typeIds);
			return union_js_1.Union.endUnion(b);
		}
		visitDictionary(node, b) {
			const indexType = this.visit(node.indices, b);
			dictionary_encoding_js_1.DictionaryEncoding.startDictionaryEncoding(b);
			dictionary_encoding_js_1.DictionaryEncoding.addId(b, BigInt(node.id));
			dictionary_encoding_js_1.DictionaryEncoding.addIsOrdered(b, node.isOrdered);
			if (indexType !== void 0) dictionary_encoding_js_1.DictionaryEncoding.addIndexType(b, indexType);
			return dictionary_encoding_js_1.DictionaryEncoding.endDictionaryEncoding(b);
		}
		visitFixedSizeBinary(node, b) {
			fixed_size_binary_js_1.FixedSizeBinary.startFixedSizeBinary(b);
			fixed_size_binary_js_1.FixedSizeBinary.addByteWidth(b, node.byteWidth);
			return fixed_size_binary_js_1.FixedSizeBinary.endFixedSizeBinary(b);
		}
		visitFixedSizeList(node, b) {
			fixed_size_list_js_1.FixedSizeList.startFixedSizeList(b);
			fixed_size_list_js_1.FixedSizeList.addListSize(b, node.listSize);
			return fixed_size_list_js_1.FixedSizeList.endFixedSizeList(b);
		}
		visitMap(node, b) {
			map_js_1.Map.startMap(b);
			map_js_1.Map.addKeysSorted(b, node.keysSorted);
			return map_js_1.Map.endMap(b);
		}
	};
	exports.TypeAssembler = TypeAssembler;
	/** @ignore */
	exports.instance = new TypeAssembler();
}));
//#endregion
//#region node_modules/apache-arrow/ipc/metadata/json.js
var require_json = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.fieldFromJSON = exports.dictionaryBatchFromJSON = exports.recordBatchFromJSON = exports.schemaFromJSON = void 0;
	var schema_js_1 = require_schema();
	var type_js_1 = require_type();
	var message_js_1 = require_message$1();
	var enum_js_1 = require_enum();
	/** @ignore */
	function schemaFromJSON(_schema, dictionaries = /* @__PURE__ */ new Map()) {
		return new schema_js_1.Schema(schemaFieldsFromJSON(_schema, dictionaries), customMetadataFromJSON(_schema["metadata"]), dictionaries);
	}
	exports.schemaFromJSON = schemaFromJSON;
	/** @ignore */
	function recordBatchFromJSON(b) {
		return new message_js_1.RecordBatch(b["count"], fieldNodesFromJSON(b["columns"]), buffersFromJSON(b["columns"]), null);
	}
	exports.recordBatchFromJSON = recordBatchFromJSON;
	/** @ignore */
	function dictionaryBatchFromJSON(b) {
		return new message_js_1.DictionaryBatch(recordBatchFromJSON(b["data"]), b["id"], b["isDelta"]);
	}
	exports.dictionaryBatchFromJSON = dictionaryBatchFromJSON;
	/** @ignore */
	function schemaFieldsFromJSON(_schema, dictionaries) {
		return (_schema["fields"] || []).filter(Boolean).map((f) => schema_js_1.Field.fromJSON(f, dictionaries));
	}
	/** @ignore */
	function fieldChildrenFromJSON(_field, dictionaries) {
		return (_field["children"] || []).filter(Boolean).map((f) => schema_js_1.Field.fromJSON(f, dictionaries));
	}
	/** @ignore */
	function fieldNodesFromJSON(xs) {
		return (xs || []).reduce((fieldNodes, column) => [
			...fieldNodes,
			new message_js_1.FieldNode(column["count"], nullCountFromJSON(column["VALIDITY"])),
			...fieldNodesFromJSON(column["children"])
		], []);
	}
	/** @ignore */
	function buffersFromJSON(xs, buffers = []) {
		for (let i = -1, n = (xs || []).length; ++i < n;) {
			const column = xs[i];
			column["VALIDITY"] && buffers.push(new message_js_1.BufferRegion(buffers.length, column["VALIDITY"].length));
			column["TYPE_ID"] && buffers.push(new message_js_1.BufferRegion(buffers.length, column["TYPE_ID"].length));
			column["OFFSET"] && buffers.push(new message_js_1.BufferRegion(buffers.length, column["OFFSET"].length));
			column["DATA"] && buffers.push(new message_js_1.BufferRegion(buffers.length, column["DATA"].length));
			buffers = buffersFromJSON(column["children"], buffers);
		}
		return buffers;
	}
	/** @ignore */
	function nullCountFromJSON(validity) {
		return (validity || []).reduce((sum, val) => sum + +(val === 0), 0);
	}
	/** @ignore */
	function fieldFromJSON(_field, dictionaries) {
		let id;
		let keys;
		let field;
		let dictMeta;
		let type;
		let dictType;
		if (!dictionaries || !(dictMeta = _field["dictionary"])) {
			type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries));
			field = new schema_js_1.Field(_field["name"], type, _field["nullable"], customMetadataFromJSON(_field["metadata"]));
		} else if (!dictionaries.has(id = dictMeta["id"])) {
			keys = (keys = dictMeta["indexType"]) ? indexTypeFromJSON(keys) : new type_js_1.Int32();
			dictionaries.set(id, type = typeFromJSON(_field, fieldChildrenFromJSON(_field, dictionaries)));
			dictType = new type_js_1.Dictionary(type, keys, id, dictMeta["isOrdered"]);
			field = new schema_js_1.Field(_field["name"], dictType, _field["nullable"], customMetadataFromJSON(_field["metadata"]));
		} else {
			keys = (keys = dictMeta["indexType"]) ? indexTypeFromJSON(keys) : new type_js_1.Int32();
			dictType = new type_js_1.Dictionary(dictionaries.get(id), keys, id, dictMeta["isOrdered"]);
			field = new schema_js_1.Field(_field["name"], dictType, _field["nullable"], customMetadataFromJSON(_field["metadata"]));
		}
		return field || null;
	}
	exports.fieldFromJSON = fieldFromJSON;
	/** @ignore */
	function customMetadataFromJSON(metadata = []) {
		return new Map(metadata.map(({ key, value }) => [key, value]));
	}
	/** @ignore */
	function indexTypeFromJSON(_type) {
		return new type_js_1.Int(_type["isSigned"], _type["bitWidth"]);
	}
	/** @ignore */
	function typeFromJSON(f, children) {
		const typeId = f["type"]["name"];
		switch (typeId) {
			case "NONE": return new type_js_1.Null();
			case "null": return new type_js_1.Null();
			case "binary": return new type_js_1.Binary();
			case "largebinary": return new type_js_1.LargeBinary();
			case "utf8": return new type_js_1.Utf8();
			case "largeutf8": return new type_js_1.LargeUtf8();
			case "bool": return new type_js_1.Bool();
			case "list": return new type_js_1.List((children || [])[0]);
			case "struct": return new type_js_1.Struct(children || []);
			case "struct_": return new type_js_1.Struct(children || []);
		}
		switch (typeId) {
			case "int": {
				const t = f["type"];
				return new type_js_1.Int(t["isSigned"], t["bitWidth"]);
			}
			case "floatingpoint": {
				const t = f["type"];
				return new type_js_1.Float(enum_js_1.Precision[t["precision"]]);
			}
			case "decimal": {
				const t = f["type"];
				return new type_js_1.Decimal(t["scale"], t["precision"], t["bitWidth"]);
			}
			case "date": {
				const t = f["type"];
				return new type_js_1.Date_(enum_js_1.DateUnit[t["unit"]]);
			}
			case "time": {
				const t = f["type"];
				return new type_js_1.Time(enum_js_1.TimeUnit[t["unit"]], t["bitWidth"]);
			}
			case "timestamp": {
				const t = f["type"];
				return new type_js_1.Timestamp(enum_js_1.TimeUnit[t["unit"]], t["timezone"]);
			}
			case "interval": {
				const t = f["type"];
				return new type_js_1.Interval(enum_js_1.IntervalUnit[t["unit"]]);
			}
			case "duration": {
				const t = f["type"];
				return new type_js_1.Duration(enum_js_1.TimeUnit[t["unit"]]);
			}
			case "union": {
				const t = f["type"];
				const [m, ...ms] = (t["mode"] + "").toLowerCase();
				const mode = m.toUpperCase() + ms.join("");
				return new type_js_1.Union(enum_js_1.UnionMode[mode], t["typeIds"] || [], children || []);
			}
			case "fixedsizebinary": {
				const t = f["type"];
				return new type_js_1.FixedSizeBinary(t["byteWidth"]);
			}
			case "fixedsizelist": {
				const t = f["type"];
				return new type_js_1.FixedSizeList(t["listSize"], (children || [])[0]);
			}
			case "map": {
				const t = f["type"];
				return new type_js_1.Map_((children || [])[0], t["keysSorted"]);
			}
		}
		throw new Error(`Unrecognized type: "${typeId}"`);
	}
}));
//#endregion
//#region node_modules/apache-arrow/ipc/metadata/message.js
var require_message$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BodyCompression = exports.FieldNode = exports.BufferRegion = exports.DictionaryBatch = exports.RecordBatch = exports.Message = void 0;
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var schema_js_1 = require_schema$1();
	var int_js_1 = require_int$2();
	var record_batch_js_1 = require_record_batch();
	var dictionary_batch_js_1 = require_dictionary_batch();
	var buffer_js_1 = require_buffer$1();
	var field_js_1 = require_field();
	var field_node_js_1 = require_field_node();
	var type_js_1 = require_type$1();
	var key_value_js_1 = require_key_value();
	var endianness_js_1 = require_endianness();
	var floating_point_js_1 = require_floating_point();
	var decimal_js_1 = require_decimal$1();
	var date_js_1 = require_date$1();
	var time_js_1 = require_time$1();
	var timestamp_js_1 = require_timestamp$1();
	var interval_js_1 = require_interval$2();
	var duration_js_1 = require_duration$1();
	var union_js_1 = require_union$1();
	var fixed_size_binary_js_1 = require_fixed_size_binary();
	var fixed_size_list_js_1 = require_fixed_size_list();
	var map_js_1 = require_map$2();
	var message_js_1 = require_message$2();
	var body_compression_js_1 = require_body_compression();
	var body_compression_method_js_1 = require_body_compression_method();
	var schema_js_2 = require_schema();
	var buffer_js_2 = require_buffer$2();
	var bigint_js_1 = require_bigint();
	var enum_js_1 = require_enum();
	var typeassembler_js_1 = require_typeassembler();
	var json_js_1 = require_json();
	var Builder = flatbuffers.Builder;
	var ByteBuffer = flatbuffers.ByteBuffer;
	var type_js_2 = require_type();
	exports.Message = class Message {
		/** @nocollapse */
		static fromJSON(msg, headerType) {
			const message = new Message(0, enum_js_1.MetadataVersion.V5, headerType);
			message._createHeader = messageHeaderFromJSON(msg, headerType);
			return message;
		}
		/** @nocollapse */
		static decode(buf) {
			buf = new ByteBuffer((0, buffer_js_2.toUint8Array)(buf));
			const _message = message_js_1.Message.getRootAsMessage(buf);
			const bodyLength = _message.bodyLength();
			const version = _message.version();
			const headerType = _message.headerType();
			const message = new Message(bodyLength, version, headerType);
			message._createHeader = decodeMessageHeader(_message, headerType);
			return message;
		}
		/** @nocollapse */
		static encode(message) {
			const b = new Builder();
			let headerOffset = -1;
			if (message.isSchema()) headerOffset = schema_js_2.Schema.encode(b, message.header());
			else if (message.isRecordBatch()) headerOffset = RecordBatch.encode(b, message.header());
			else if (message.isDictionaryBatch()) headerOffset = DictionaryBatch.encode(b, message.header());
			message_js_1.Message.startMessage(b);
			message_js_1.Message.addVersion(b, enum_js_1.MetadataVersion.V5);
			message_js_1.Message.addHeader(b, headerOffset);
			message_js_1.Message.addHeaderType(b, message.headerType);
			message_js_1.Message.addBodyLength(b, BigInt(message.bodyLength));
			message_js_1.Message.finishMessageBuffer(b, message_js_1.Message.endMessage(b));
			return b.asUint8Array();
		}
		/** @nocollapse */
		static from(header, bodyLength = 0) {
			if (header instanceof schema_js_2.Schema) return new Message(0, enum_js_1.MetadataVersion.V5, enum_js_1.MessageHeader.Schema, header);
			if (header instanceof RecordBatch) return new Message(bodyLength, enum_js_1.MetadataVersion.V5, enum_js_1.MessageHeader.RecordBatch, header);
			if (header instanceof DictionaryBatch) return new Message(bodyLength, enum_js_1.MetadataVersion.V5, enum_js_1.MessageHeader.DictionaryBatch, header);
			throw new Error(`Unrecognized Message header: ${header}`);
		}
		get type() {
			return this.headerType;
		}
		get version() {
			return this._version;
		}
		get headerType() {
			return this._headerType;
		}
		get compression() {
			return this._compression;
		}
		get bodyLength() {
			return this._bodyLength;
		}
		header() {
			return this._createHeader();
		}
		isSchema() {
			return this.headerType === enum_js_1.MessageHeader.Schema;
		}
		isRecordBatch() {
			return this.headerType === enum_js_1.MessageHeader.RecordBatch;
		}
		isDictionaryBatch() {
			return this.headerType === enum_js_1.MessageHeader.DictionaryBatch;
		}
		constructor(bodyLength, version, headerType, header) {
			this._version = version;
			this._headerType = headerType;
			this.body = new Uint8Array(0);
			this._compression = header === null || header === void 0 ? void 0 : header.compression;
			header && (this._createHeader = () => header);
			this._bodyLength = (0, bigint_js_1.bigIntToNumber)(bodyLength);
		}
	};
	/**
	* @ignore
	* @private
	**/
	var RecordBatch = class {
		get nodes() {
			return this._nodes;
		}
		get length() {
			return this._length;
		}
		get buffers() {
			return this._buffers;
		}
		get compression() {
			return this._compression;
		}
		constructor(length, nodes, buffers, compression) {
			this._nodes = nodes;
			this._buffers = buffers;
			this._length = (0, bigint_js_1.bigIntToNumber)(length);
			this._compression = compression;
		}
	};
	exports.RecordBatch = RecordBatch;
	/**
	* @ignore
	* @private
	**/
	var DictionaryBatch = class {
		get id() {
			return this._id;
		}
		get data() {
			return this._data;
		}
		get isDelta() {
			return this._isDelta;
		}
		get length() {
			return this.data.length;
		}
		get nodes() {
			return this.data.nodes;
		}
		get buffers() {
			return this.data.buffers;
		}
		constructor(data, id, isDelta = false) {
			this._data = data;
			this._isDelta = isDelta;
			this._id = (0, bigint_js_1.bigIntToNumber)(id);
		}
	};
	exports.DictionaryBatch = DictionaryBatch;
	/**
	* @ignore
	* @private
	**/
	var BufferRegion = class {
		constructor(offset, length) {
			this.offset = (0, bigint_js_1.bigIntToNumber)(offset);
			this.length = (0, bigint_js_1.bigIntToNumber)(length);
		}
	};
	exports.BufferRegion = BufferRegion;
	/**
	* @ignore
	* @private
	**/
	var FieldNode = class {
		constructor(length, nullCount) {
			this.length = (0, bigint_js_1.bigIntToNumber)(length);
			this.nullCount = (0, bigint_js_1.bigIntToNumber)(nullCount);
		}
	};
	exports.FieldNode = FieldNode;
	/**
	* @ignore
	* @private
	**/
	var BodyCompression = class {
		constructor(type, method = body_compression_method_js_1.BodyCompressionMethod.BUFFER) {
			this.type = type;
			this.method = method;
		}
	};
	exports.BodyCompression = BodyCompression;
	/** @ignore */
	function messageHeaderFromJSON(message, type) {
		return (() => {
			switch (type) {
				case enum_js_1.MessageHeader.Schema: return schema_js_2.Schema.fromJSON(message);
				case enum_js_1.MessageHeader.RecordBatch: return RecordBatch.fromJSON(message);
				case enum_js_1.MessageHeader.DictionaryBatch: return DictionaryBatch.fromJSON(message);
			}
			throw new Error(`Unrecognized Message type: { name: ${enum_js_1.MessageHeader[type]}, type: ${type} }`);
		});
	}
	/** @ignore */
	function decodeMessageHeader(message, type) {
		return (() => {
			switch (type) {
				case enum_js_1.MessageHeader.Schema: return schema_js_2.Schema.decode(message.header(new schema_js_1.Schema()), /* @__PURE__ */ new Map(), message.version());
				case enum_js_1.MessageHeader.RecordBatch: return RecordBatch.decode(message.header(new record_batch_js_1.RecordBatch()), message.version());
				case enum_js_1.MessageHeader.DictionaryBatch: return DictionaryBatch.decode(message.header(new dictionary_batch_js_1.DictionaryBatch()), message.version());
			}
			throw new Error(`Unrecognized Message type: { name: ${enum_js_1.MessageHeader[type]}, type: ${type} }`);
		});
	}
	schema_js_2.Field["encode"] = encodeField;
	schema_js_2.Field["decode"] = decodeField;
	schema_js_2.Field["fromJSON"] = json_js_1.fieldFromJSON;
	schema_js_2.Schema["encode"] = encodeSchema;
	schema_js_2.Schema["decode"] = decodeSchema;
	schema_js_2.Schema["fromJSON"] = json_js_1.schemaFromJSON;
	RecordBatch["encode"] = encodeRecordBatch;
	RecordBatch["decode"] = decodeRecordBatch;
	RecordBatch["fromJSON"] = json_js_1.recordBatchFromJSON;
	DictionaryBatch["encode"] = encodeDictionaryBatch;
	DictionaryBatch["decode"] = decodeDictionaryBatch;
	DictionaryBatch["fromJSON"] = json_js_1.dictionaryBatchFromJSON;
	FieldNode["encode"] = encodeFieldNode;
	FieldNode["decode"] = decodeFieldNode;
	BufferRegion["encode"] = encodeBufferRegion;
	BufferRegion["decode"] = decodeBufferRegion;
	BodyCompression["encode"] = encodeBodyCompression;
	BodyCompression["decode"] = decodeBodyCompression;
	/** @ignore */
	function decodeSchema(_schema, dictionaries = /* @__PURE__ */ new Map(), version = enum_js_1.MetadataVersion.V5) {
		const fields = decodeSchemaFields(_schema, dictionaries);
		return new schema_js_2.Schema(fields, decodeCustomMetadata(_schema), dictionaries, version);
	}
	/** @ignore */
	function decodeRecordBatch(batch, version = enum_js_1.MetadataVersion.V5) {
		return new RecordBatch(batch.length(), decodeFieldNodes(batch), decodeBuffers(batch, version), decodeBodyCompression(batch.compression()));
	}
	/** @ignore */
	function decodeDictionaryBatch(batch, version = enum_js_1.MetadataVersion.V5) {
		return new DictionaryBatch(RecordBatch.decode(batch.data(), version), batch.id(), batch.isDelta());
	}
	/** @ignore */
	function decodeBufferRegion(b) {
		return new BufferRegion(b.offset(), b.length());
	}
	/** @ignore */
	function decodeFieldNode(f) {
		return new FieldNode(f.length(), f.nullCount());
	}
	/** @ignore */
	function decodeFieldNodes(batch) {
		const nodes = [];
		for (let f, i = -1, j = -1, n = batch.nodesLength(); ++i < n;) if (f = batch.nodes(i)) nodes[++j] = FieldNode.decode(f);
		return nodes;
	}
	/** @ignore */
	function decodeBuffers(batch, version) {
		const bufferRegions = [];
		for (let b, i = -1, j = -1, n = batch.buffersLength(); ++i < n;) if (b = batch.buffers(i)) {
			if (version < enum_js_1.MetadataVersion.V4) b.bb_pos += 8 * (i + 1);
			bufferRegions[++j] = BufferRegion.decode(b);
		}
		return bufferRegions;
	}
	/** @ignore */
	function decodeSchemaFields(schema, dictionaries) {
		const fields = [];
		for (let f, i = -1, j = -1, n = schema.fieldsLength(); ++i < n;) if (f = schema.fields(i)) fields[++j] = schema_js_2.Field.decode(f, dictionaries);
		return fields;
	}
	/** @ignore */
	function decodeFieldChildren(field, dictionaries) {
		const children = [];
		for (let f, i = -1, j = -1, n = field.childrenLength(); ++i < n;) if (f = field.children(i)) children[++j] = schema_js_2.Field.decode(f, dictionaries);
		return children;
	}
	/** @ignore */
	function decodeField(f, dictionaries) {
		let id;
		let field;
		let type;
		let keys;
		let dictType;
		let dictMeta;
		if (!dictionaries || !(dictMeta = f.dictionary())) {
			type = decodeFieldType(f, decodeFieldChildren(f, dictionaries));
			field = new schema_js_2.Field(f.name(), type, f.nullable(), decodeCustomMetadata(f));
		} else if (!dictionaries.has(id = (0, bigint_js_1.bigIntToNumber)(dictMeta.id()))) {
			keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new type_js_2.Int32();
			dictionaries.set(id, type = decodeFieldType(f, decodeFieldChildren(f, dictionaries)));
			dictType = new type_js_2.Dictionary(type, keys, id, dictMeta.isOrdered());
			field = new schema_js_2.Field(f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
		} else {
			keys = (keys = dictMeta.indexType()) ? decodeIndexType(keys) : new type_js_2.Int32();
			dictType = new type_js_2.Dictionary(dictionaries.get(id), keys, id, dictMeta.isOrdered());
			field = new schema_js_2.Field(f.name(), dictType, f.nullable(), decodeCustomMetadata(f));
		}
		return field || null;
	}
	/** @ignore */
	function decodeCustomMetadata(parent) {
		const data = /* @__PURE__ */ new Map();
		if (parent) {
			for (let entry, key, i = -1, n = Math.trunc(parent.customMetadataLength()); ++i < n;) if ((entry = parent.customMetadata(i)) && (key = entry.key()) != null) data.set(key, entry.value());
		}
		return data;
	}
	/** @ignore */
	function decodeIndexType(_type) {
		return new type_js_2.Int(_type.isSigned(), _type.bitWidth());
	}
	/** @ignore */
	function decodeFieldType(f, children) {
		const typeId = f.typeType();
		switch (typeId) {
			case type_js_1.Type["NONE"]: return new type_js_2.Null();
			case type_js_1.Type["Null"]: return new type_js_2.Null();
			case type_js_1.Type["Binary"]: return new type_js_2.Binary();
			case type_js_1.Type["LargeBinary"]: return new type_js_2.LargeBinary();
			case type_js_1.Type["Utf8"]: return new type_js_2.Utf8();
			case type_js_1.Type["LargeUtf8"]: return new type_js_2.LargeUtf8();
			case type_js_1.Type["Bool"]: return new type_js_2.Bool();
			case type_js_1.Type["List"]: return new type_js_2.List((children || [])[0]);
			case type_js_1.Type["Struct_"]: return new type_js_2.Struct(children || []);
		}
		switch (typeId) {
			case type_js_1.Type["Int"]: {
				const t = f.type(new int_js_1.Int());
				return new type_js_2.Int(t.isSigned(), t.bitWidth());
			}
			case type_js_1.Type["FloatingPoint"]: {
				const t = f.type(new floating_point_js_1.FloatingPoint());
				return new type_js_2.Float(t.precision());
			}
			case type_js_1.Type["Decimal"]: {
				const t = f.type(new decimal_js_1.Decimal());
				return new type_js_2.Decimal(t.scale(), t.precision(), t.bitWidth());
			}
			case type_js_1.Type["Date"]: {
				const t = f.type(new date_js_1.Date());
				return new type_js_2.Date_(t.unit());
			}
			case type_js_1.Type["Time"]: {
				const t = f.type(new time_js_1.Time());
				return new type_js_2.Time(t.unit(), t.bitWidth());
			}
			case type_js_1.Type["Timestamp"]: {
				const t = f.type(new timestamp_js_1.Timestamp());
				return new type_js_2.Timestamp(t.unit(), t.timezone());
			}
			case type_js_1.Type["Interval"]: {
				const t = f.type(new interval_js_1.Interval());
				return new type_js_2.Interval(t.unit());
			}
			case type_js_1.Type["Duration"]: {
				const t = f.type(new duration_js_1.Duration());
				return new type_js_2.Duration(t.unit());
			}
			case type_js_1.Type["Union"]: {
				const t = f.type(new union_js_1.Union());
				return new type_js_2.Union(t.mode(), t.typeIdsArray() || [], children || []);
			}
			case type_js_1.Type["FixedSizeBinary"]: {
				const t = f.type(new fixed_size_binary_js_1.FixedSizeBinary());
				return new type_js_2.FixedSizeBinary(t.byteWidth());
			}
			case type_js_1.Type["FixedSizeList"]: {
				const t = f.type(new fixed_size_list_js_1.FixedSizeList());
				return new type_js_2.FixedSizeList(t.listSize(), (children || [])[0]);
			}
			case type_js_1.Type["Map"]: {
				const t = f.type(new map_js_1.Map());
				return new type_js_2.Map_((children || [])[0], t.keysSorted());
			}
		}
		throw new Error(`Unrecognized type: "${type_js_1.Type[typeId]}" (${typeId})`);
	}
	/** @ignore */
	function decodeBodyCompression(b) {
		return b ? new BodyCompression(b.codec(), b.method()) : null;
	}
	/** @ignore */
	function encodeSchema(b, schema) {
		const fieldOffsets = schema.fields.map((f) => schema_js_2.Field.encode(b, f));
		schema_js_1.Schema.startFieldsVector(b, fieldOffsets.length);
		const fieldsVectorOffset = schema_js_1.Schema.createFieldsVector(b, fieldOffsets);
		const metadataOffset = !(schema.metadata && schema.metadata.size > 0) ? -1 : schema_js_1.Schema.createCustomMetadataVector(b, [...schema.metadata].map(([k, v]) => {
			const key = b.createString(`${k}`);
			const val = b.createString(`${v}`);
			key_value_js_1.KeyValue.startKeyValue(b);
			key_value_js_1.KeyValue.addKey(b, key);
			key_value_js_1.KeyValue.addValue(b, val);
			return key_value_js_1.KeyValue.endKeyValue(b);
		}));
		schema_js_1.Schema.startSchema(b);
		schema_js_1.Schema.addFields(b, fieldsVectorOffset);
		schema_js_1.Schema.addEndianness(b, platformIsLittleEndian ? endianness_js_1.Endianness.Little : endianness_js_1.Endianness.Big);
		if (metadataOffset !== -1) schema_js_1.Schema.addCustomMetadata(b, metadataOffset);
		return schema_js_1.Schema.endSchema(b);
	}
	/** @ignore */
	function encodeField(b, field) {
		let nameOffset = -1;
		let typeOffset = -1;
		let dictionaryOffset = -1;
		const type = field.type;
		let typeId = field.typeId;
		if (!type_js_2.DataType.isDictionary(type)) typeOffset = typeassembler_js_1.instance.visit(type, b);
		else {
			typeId = type.dictionary.typeId;
			dictionaryOffset = typeassembler_js_1.instance.visit(type, b);
			typeOffset = typeassembler_js_1.instance.visit(type.dictionary, b);
		}
		const childOffsets = (type.children || []).map((f) => schema_js_2.Field.encode(b, f));
		const childrenVectorOffset = field_js_1.Field.createChildrenVector(b, childOffsets);
		const metadataOffset = !(field.metadata && field.metadata.size > 0) ? -1 : field_js_1.Field.createCustomMetadataVector(b, [...field.metadata].map(([k, v]) => {
			const key = b.createString(`${k}`);
			const val = b.createString(`${v}`);
			key_value_js_1.KeyValue.startKeyValue(b);
			key_value_js_1.KeyValue.addKey(b, key);
			key_value_js_1.KeyValue.addValue(b, val);
			return key_value_js_1.KeyValue.endKeyValue(b);
		}));
		if (field.name) nameOffset = b.createString(field.name);
		field_js_1.Field.startField(b);
		field_js_1.Field.addType(b, typeOffset);
		field_js_1.Field.addTypeType(b, typeId);
		field_js_1.Field.addChildren(b, childrenVectorOffset);
		field_js_1.Field.addNullable(b, !!field.nullable);
		if (nameOffset !== -1) field_js_1.Field.addName(b, nameOffset);
		if (dictionaryOffset !== -1) field_js_1.Field.addDictionary(b, dictionaryOffset);
		if (metadataOffset !== -1) field_js_1.Field.addCustomMetadata(b, metadataOffset);
		return field_js_1.Field.endField(b);
	}
	/** @ignore */
	function encodeRecordBatch(b, recordBatch) {
		const nodes = recordBatch.nodes || [];
		const buffers = recordBatch.buffers || [];
		record_batch_js_1.RecordBatch.startNodesVector(b, nodes.length);
		for (const n of nodes.slice().reverse()) FieldNode.encode(b, n);
		const nodesVectorOffset = b.endVector();
		record_batch_js_1.RecordBatch.startBuffersVector(b, buffers.length);
		for (const b_ of buffers.slice().reverse()) BufferRegion.encode(b, b_);
		const buffersVectorOffset = b.endVector();
		let bodyCompressionOffset = null;
		if (recordBatch.compression !== null) bodyCompressionOffset = encodeBodyCompression(b, recordBatch.compression);
		record_batch_js_1.RecordBatch.startRecordBatch(b);
		record_batch_js_1.RecordBatch.addLength(b, BigInt(recordBatch.length));
		record_batch_js_1.RecordBatch.addNodes(b, nodesVectorOffset);
		record_batch_js_1.RecordBatch.addBuffers(b, buffersVectorOffset);
		if (recordBatch.compression !== null && bodyCompressionOffset) record_batch_js_1.RecordBatch.addCompression(b, bodyCompressionOffset);
		return record_batch_js_1.RecordBatch.endRecordBatch(b);
	}
	/** @ignore */
	function encodeBodyCompression(b, node) {
		body_compression_js_1.BodyCompression.startBodyCompression(b);
		body_compression_js_1.BodyCompression.addCodec(b, node.type);
		body_compression_js_1.BodyCompression.addMethod(b, node.method);
		return body_compression_js_1.BodyCompression.endBodyCompression(b);
	}
	/** @ignore */
	function encodeDictionaryBatch(b, dictionaryBatch) {
		const dataOffset = RecordBatch.encode(b, dictionaryBatch.data);
		dictionary_batch_js_1.DictionaryBatch.startDictionaryBatch(b);
		dictionary_batch_js_1.DictionaryBatch.addId(b, BigInt(dictionaryBatch.id));
		dictionary_batch_js_1.DictionaryBatch.addIsDelta(b, dictionaryBatch.isDelta);
		dictionary_batch_js_1.DictionaryBatch.addData(b, dataOffset);
		return dictionary_batch_js_1.DictionaryBatch.endDictionaryBatch(b);
	}
	/** @ignore */
	function encodeFieldNode(b, node) {
		return field_node_js_1.FieldNode.createFieldNode(b, BigInt(node.length), BigInt(node.nullCount));
	}
	/** @ignore */
	function encodeBufferRegion(b, node) {
		return buffer_js_1.Buffer.createBuffer(b, BigInt(node.offset), BigInt(node.length));
	}
	/** @ignore */
	var platformIsLittleEndian = (() => {
		const buffer = /* @__PURE__ */ new ArrayBuffer(2);
		new DataView(buffer).setInt16(0, 256, true);
		return new Int16Array(buffer)[0] === 256;
	})();
}));
//#endregion
//#region node_modules/apache-arrow/io/interfaces.js
var require_interfaces = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsyncQueue = exports.ReadableInterop = exports.ArrowJSON = exports.ITERATOR_DONE = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var adapters_js_1 = require_adapters();
	/** @ignore */
	exports.ITERATOR_DONE = Object.freeze({
		done: true,
		value: void 0
	});
	/** @ignore */
	var ArrowJSON = class {
		constructor(_json) {
			this._json = _json;
		}
		get schema() {
			return this._json["schema"];
		}
		get batches() {
			return this._json["batches"] || [];
		}
		get dictionaries() {
			return this._json["dictionaries"] || [];
		}
	};
	exports.ArrowJSON = ArrowJSON;
	/** @ignore */
	var ReadableInterop = class {
		tee() {
			return this._getDOMStream().tee();
		}
		pipe(writable, options) {
			return this._getNodeStream().pipe(writable, options);
		}
		pipeTo(writable, options) {
			return this._getDOMStream().pipeTo(writable, options);
		}
		pipeThrough(duplex, options) {
			return this._getDOMStream().pipeThrough(duplex, options);
		}
		_getDOMStream() {
			return this._DOMStream || (this._DOMStream = this.toDOMStream());
		}
		_getNodeStream() {
			return this._nodeStream || (this._nodeStream = this.toNodeStream());
		}
	};
	exports.ReadableInterop = ReadableInterop;
	/** @ignore */
	var AsyncQueue = class extends ReadableInterop {
		constructor() {
			super();
			this._values = [];
			this.resolvers = [];
			this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
		}
		get closed() {
			return this._closedPromise;
		}
		cancel(reason) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				yield this.return(reason);
			});
		}
		write(value) {
			if (this._ensureOpen()) this.resolvers.length <= 0 ? this._values.push(value) : this.resolvers.shift().resolve({
				done: false,
				value
			});
		}
		abort(value) {
			if (this._closedPromiseResolve) this.resolvers.length <= 0 ? this._error = { error: value } : this.resolvers.shift().reject({
				done: true,
				value
			});
		}
		close() {
			if (this._closedPromiseResolve) {
				const { resolvers } = this;
				while (resolvers.length > 0) resolvers.shift().resolve(exports.ITERATOR_DONE);
				this._closedPromiseResolve();
				this._closedPromiseResolve = void 0;
			}
		}
		[Symbol.asyncIterator]() {
			return this;
		}
		toDOMStream(options) {
			return adapters_js_1.default.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, options);
		}
		toNodeStream(options) {
			return adapters_js_1.default.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, options);
		}
		throw(_) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				yield this.abort(_);
				return exports.ITERATOR_DONE;
			});
		}
		return(_) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				yield this.close();
				return exports.ITERATOR_DONE;
			});
		}
		read(size) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				return (yield this.next(size, "read")).value;
			});
		}
		peek(size) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				return (yield this.next(size, "peek")).value;
			});
		}
		next(..._args) {
			if (this._values.length > 0) return Promise.resolve({
				done: false,
				value: this._values.shift()
			});
			else if (this._error) return Promise.reject({
				done: true,
				value: this._error.error
			});
			else if (!this._closedPromiseResolve) return Promise.resolve(exports.ITERATOR_DONE);
			else return new Promise((resolve, reject) => {
				this.resolvers.push({
					resolve,
					reject
				});
			});
		}
		_ensureOpen() {
			if (this._closedPromiseResolve) return true;
			throw new Error(`AsyncQueue is closed`);
		}
	};
	exports.AsyncQueue = AsyncQueue;
}));
//#endregion
//#region node_modules/apache-arrow/io/stream.js
var require_stream = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsyncByteStream = exports.ByteStream = exports.AsyncByteQueue = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var adapters_js_1 = require_adapters();
	var utf8_js_1 = require_utf8$2();
	var interfaces_js_1 = require_interfaces();
	var buffer_js_1 = require_buffer$2();
	var compat_js_1 = require_compat();
	/** @ignore */
	var AsyncByteQueue = class extends interfaces_js_1.AsyncQueue {
		write(value) {
			if ((value = (0, buffer_js_1.toUint8Array)(value)).byteLength > 0) return super.write(value);
		}
		toString(sync = false) {
			return sync ? (0, utf8_js_1.decodeUtf8)(this.toUint8Array(true)) : this.toUint8Array(false).then(utf8_js_1.decodeUtf8);
		}
		toUint8Array(sync = false) {
			return sync ? (0, buffer_js_1.joinUint8Arrays)(this._values)[0] : (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
				var _a, e_1, _b, _c;
				const buffers = [];
				let byteLength = 0;
				try {
					for (var _d = true, _e = tslib_1.__asyncValues(this), _f; _f = yield _e.next(), _a = _f.done, !_a; _d = true) {
						_c = _f.value;
						_d = false;
						const chunk = _c;
						buffers.push(chunk);
						byteLength += chunk.byteLength;
					}
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				return (0, buffer_js_1.joinUint8Arrays)(buffers, byteLength)[0];
			}))();
		}
	};
	exports.AsyncByteQueue = AsyncByteQueue;
	/** @ignore */
	var ByteStream = class {
		constructor(source) {
			if (source) this.source = new ByteStreamSource(adapters_js_1.default.fromIterable(source));
		}
		[Symbol.iterator]() {
			return this;
		}
		next(value) {
			return this.source.next(value);
		}
		throw(value) {
			return this.source.throw(value);
		}
		return(value) {
			return this.source.return(value);
		}
		peek(size) {
			return this.source.peek(size);
		}
		read(size) {
			return this.source.read(size);
		}
	};
	exports.ByteStream = ByteStream;
	exports.AsyncByteStream = class AsyncByteStream {
		constructor(source) {
			if (source instanceof AsyncByteStream) this.source = source.source;
			else if (source instanceof AsyncByteQueue) this.source = new AsyncByteStreamSource(adapters_js_1.default.fromAsyncIterable(source));
			else if ((0, compat_js_1.isReadableNodeStream)(source)) this.source = new AsyncByteStreamSource(adapters_js_1.default.fromNodeStream(source));
			else if ((0, compat_js_1.isReadableDOMStream)(source)) this.source = new AsyncByteStreamSource(adapters_js_1.default.fromDOMStream(source));
			else if ((0, compat_js_1.isFetchResponse)(source)) this.source = new AsyncByteStreamSource(adapters_js_1.default.fromDOMStream(source.body));
			else if ((0, compat_js_1.isIterable)(source)) this.source = new AsyncByteStreamSource(adapters_js_1.default.fromIterable(source));
			else if ((0, compat_js_1.isPromise)(source)) this.source = new AsyncByteStreamSource(adapters_js_1.default.fromAsyncIterable(source));
			else if ((0, compat_js_1.isAsyncIterable)(source)) this.source = new AsyncByteStreamSource(adapters_js_1.default.fromAsyncIterable(source));
		}
		[Symbol.asyncIterator]() {
			return this;
		}
		next(value) {
			return this.source.next(value);
		}
		throw(value) {
			return this.source.throw(value);
		}
		return(value) {
			return this.source.return(value);
		}
		get closed() {
			return this.source.closed;
		}
		cancel(reason) {
			return this.source.cancel(reason);
		}
		peek(size) {
			return this.source.peek(size);
		}
		read(size) {
			return this.source.read(size);
		}
	};
	/** @ignore */
	var ByteStreamSource = class {
		constructor(source) {
			this.source = source;
		}
		cancel(reason) {
			this.return(reason);
		}
		peek(size) {
			return this.next(size, "peek").value;
		}
		read(size) {
			return this.next(size, "read").value;
		}
		next(size, cmd = "read") {
			return this.source.next({
				cmd,
				size
			});
		}
		throw(value) {
			return Object.create(this.source.throw && this.source.throw(value) || interfaces_js_1.ITERATOR_DONE);
		}
		return(value) {
			return Object.create(this.source.return && this.source.return(value) || interfaces_js_1.ITERATOR_DONE);
		}
	};
	/** @ignore */
	var AsyncByteStreamSource = class {
		constructor(source) {
			this.source = source;
			this._closedPromise = new Promise((r) => this._closedPromiseResolve = r);
		}
		cancel(reason) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				yield this.return(reason);
			});
		}
		get closed() {
			return this._closedPromise;
		}
		read(size) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				return (yield this.next(size, "read")).value;
			});
		}
		peek(size) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				return (yield this.next(size, "peek")).value;
			});
		}
		next(size_1) {
			return tslib_1.__awaiter(this, arguments, void 0, function* (size, cmd = "read") {
				return yield this.source.next({
					cmd,
					size
				});
			});
		}
		throw(value) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				const result = this.source.throw && (yield this.source.throw(value)) || interfaces_js_1.ITERATOR_DONE;
				this._closedPromiseResolve && this._closedPromiseResolve();
				this._closedPromiseResolve = void 0;
				return Object.create(result);
			});
		}
		return(value) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				const result = this.source.return && (yield this.source.return(value)) || interfaces_js_1.ITERATOR_DONE;
				this._closedPromiseResolve && this._closedPromiseResolve();
				this._closedPromiseResolve = void 0;
				return Object.create(result);
			});
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/io/file.js
var require_file = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsyncRandomAccessFile = exports.RandomAccessFile = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var stream_js_1 = require_stream();
	var buffer_js_1 = require_buffer$2();
	/** @ignore */
	var RandomAccessFile = class extends stream_js_1.ByteStream {
		constructor(buffer, byteLength) {
			super();
			this.position = 0;
			this.buffer = (0, buffer_js_1.toUint8Array)(buffer);
			this.size = byteLength === void 0 ? this.buffer.byteLength : byteLength;
		}
		readInt32(position) {
			const { buffer, byteOffset } = this.readAt(position, 4);
			return new DataView(buffer, byteOffset).getInt32(0, true);
		}
		seek(position) {
			this.position = Math.min(position, this.size);
			return position < this.size;
		}
		read(nBytes) {
			const { buffer, size, position } = this;
			if (buffer && position < size) {
				if (typeof nBytes !== "number") nBytes = Number.POSITIVE_INFINITY;
				this.position = Math.min(size, position + Math.min(size - position, nBytes));
				return buffer.subarray(position, this.position);
			}
			return null;
		}
		readAt(position, nBytes) {
			const buf = this.buffer;
			const end = Math.min(this.size, position + nBytes);
			return buf ? buf.subarray(position, end) : new Uint8Array(nBytes);
		}
		close() {
			this.buffer && (this.buffer = null);
		}
		throw(value) {
			this.close();
			return {
				done: true,
				value
			};
		}
		return(value) {
			this.close();
			return {
				done: true,
				value
			};
		}
	};
	exports.RandomAccessFile = RandomAccessFile;
	/** @ignore */
	var AsyncRandomAccessFile = class extends stream_js_1.AsyncByteStream {
		constructor(file, byteLength) {
			super();
			this.position = 0;
			this._handle = file;
			if (typeof byteLength === "number") this.size = byteLength;
			else this._pending = (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
				this.size = (yield file.stat()).size;
				delete this._pending;
			}))();
		}
		readInt32(position) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				const { buffer, byteOffset } = yield this.readAt(position, 4);
				return new DataView(buffer, byteOffset).getInt32(0, true);
			});
		}
		seek(position) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				this._pending && (yield this._pending);
				this.position = Math.min(position, this.size);
				return position < this.size;
			});
		}
		read(nBytes) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				this._pending && (yield this._pending);
				const { _handle: file, size, position } = this;
				if (file && position < size) {
					if (typeof nBytes !== "number") nBytes = Number.POSITIVE_INFINITY;
					let pos = position, offset = 0, bytesRead = 0;
					const end = Math.min(size, pos + Math.min(size - pos, nBytes));
					const buffer = new Uint8Array(Math.max(0, (this.position = end) - pos));
					while ((pos += bytesRead) < end && (offset += bytesRead) < buffer.byteLength) ({bytesRead} = yield file.read(buffer, offset, buffer.byteLength - offset, pos));
					return buffer;
				}
				return null;
			});
		}
		readAt(position, nBytes) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				this._pending && (yield this._pending);
				const { _handle: file, size } = this;
				if (file && position + nBytes < size) {
					const end = Math.min(size, position + nBytes);
					const buffer = new Uint8Array(end - position);
					return (yield file.read(buffer, 0, nBytes, position)).buffer;
				}
				return new Uint8Array(nBytes);
			});
		}
		close() {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				const f = this._handle;
				this._handle = null;
				f && (yield f.close());
			});
		}
		throw(value) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				yield this.close();
				return {
					done: true,
					value
				};
			});
		}
		return(value) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				yield this.close();
				return {
					done: true,
					value
				};
			});
		}
	};
	exports.AsyncRandomAccessFile = AsyncRandomAccessFile;
}));
//#endregion
//#region node_modules/apache-arrow/util/int.js
var require_int$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Int128 = exports.Int64 = exports.Uint64 = exports.BaseInt64 = void 0;
	/** @ignore */
	var carryBit16 = 65536;
	/** @ignore */
	function intAsHex(value) {
		if (value < 0) value = 4294967295 + value + 1;
		return `0x${value.toString(16)}`;
	}
	/** @ignore */
	var kInt32DecimalDigits = 8;
	/** @ignore */
	var kPowersOfTen = [
		1,
		10,
		100,
		1e3,
		1e4,
		1e5,
		1e6,
		1e7,
		1e8
	];
	/** @ignore */
	var BaseInt64 = class {
		constructor(buffer) {
			this.buffer = buffer;
		}
		high() {
			return this.buffer[1];
		}
		low() {
			return this.buffer[0];
		}
		_times(other) {
			const L = new Uint32Array([
				this.buffer[1] >>> 16,
				this.buffer[1] & 65535,
				this.buffer[0] >>> 16,
				this.buffer[0] & 65535
			]);
			const R = new Uint32Array([
				other.buffer[1] >>> 16,
				other.buffer[1] & 65535,
				other.buffer[0] >>> 16,
				other.buffer[0] & 65535
			]);
			let product = L[3] * R[3];
			this.buffer[0] = product & 65535;
			let sum = product >>> 16;
			product = L[2] * R[3];
			sum += product;
			product = L[3] * R[2] >>> 0;
			sum += product;
			this.buffer[0] += sum << 16;
			this.buffer[1] = sum >>> 0 < product ? carryBit16 : 0;
			this.buffer[1] += sum >>> 16;
			this.buffer[1] += L[1] * R[3] + L[2] * R[2] + L[3] * R[1];
			this.buffer[1] += L[0] * R[3] + L[1] * R[2] + L[2] * R[1] + L[3] * R[0] << 16;
			return this;
		}
		_plus(other) {
			const sum = this.buffer[0] + other.buffer[0] >>> 0;
			this.buffer[1] += other.buffer[1];
			if (sum < this.buffer[0] >>> 0) ++this.buffer[1];
			this.buffer[0] = sum;
		}
		lessThan(other) {
			return this.buffer[1] < other.buffer[1] || this.buffer[1] === other.buffer[1] && this.buffer[0] < other.buffer[0];
		}
		equals(other) {
			return this.buffer[1] === other.buffer[1] && this.buffer[0] == other.buffer[0];
		}
		greaterThan(other) {
			return other.lessThan(this);
		}
		hex() {
			return `${intAsHex(this.buffer[1])} ${intAsHex(this.buffer[0])}`;
		}
	};
	exports.BaseInt64 = BaseInt64;
	/** @ignore */
	var Uint64 = class Uint64 extends BaseInt64 {
		times(other) {
			this._times(other);
			return this;
		}
		plus(other) {
			this._plus(other);
			return this;
		}
		/** @nocollapse */
		static from(val, out_buffer = new Uint32Array(2)) {
			return Uint64.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
		}
		/** @nocollapse */
		static fromNumber(num, out_buffer = new Uint32Array(2)) {
			return Uint64.fromString(num.toString(), out_buffer);
		}
		/** @nocollapse */
		static fromString(str, out_buffer = new Uint32Array(2)) {
			const length = str.length;
			const out = new Uint64(out_buffer);
			for (let posn = 0; posn < length;) {
				const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
				const chunk = new Uint64(new Uint32Array([Number.parseInt(str.slice(posn, posn + group), 10), 0]));
				const multiple = new Uint64(new Uint32Array([kPowersOfTen[group], 0]));
				out.times(multiple);
				out.plus(chunk);
				posn += group;
			}
			return out;
		}
		/** @nocollapse */
		static convertArray(values) {
			const data = new Uint32Array(values.length * 2);
			for (let i = -1, n = values.length; ++i < n;) Uint64.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
			return data;
		}
		/** @nocollapse */
		static multiply(left, right) {
			return new Uint64(new Uint32Array(left.buffer)).times(right);
		}
		/** @nocollapse */
		static add(left, right) {
			return new Uint64(new Uint32Array(left.buffer)).plus(right);
		}
	};
	exports.Uint64 = Uint64;
	/** @ignore */
	var Int64 = class Int64 extends BaseInt64 {
		negate() {
			this.buffer[0] = ~this.buffer[0] + 1;
			this.buffer[1] = ~this.buffer[1];
			if (this.buffer[0] == 0) ++this.buffer[1];
			return this;
		}
		times(other) {
			this._times(other);
			return this;
		}
		plus(other) {
			this._plus(other);
			return this;
		}
		lessThan(other) {
			const this_high = this.buffer[1] << 0;
			const other_high = other.buffer[1] << 0;
			return this_high < other_high || this_high === other_high && this.buffer[0] < other.buffer[0];
		}
		/** @nocollapse */
		static from(val, out_buffer = new Uint32Array(2)) {
			return Int64.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
		}
		/** @nocollapse */
		static fromNumber(num, out_buffer = new Uint32Array(2)) {
			return Int64.fromString(num.toString(), out_buffer);
		}
		/** @nocollapse */
		static fromString(str, out_buffer = new Uint32Array(2)) {
			const negate = str.startsWith("-");
			const length = str.length;
			const out = new Int64(out_buffer);
			for (let posn = negate ? 1 : 0; posn < length;) {
				const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
				const chunk = new Int64(new Uint32Array([Number.parseInt(str.slice(posn, posn + group), 10), 0]));
				const multiple = new Int64(new Uint32Array([kPowersOfTen[group], 0]));
				out.times(multiple);
				out.plus(chunk);
				posn += group;
			}
			return negate ? out.negate() : out;
		}
		/** @nocollapse */
		static convertArray(values) {
			const data = new Uint32Array(values.length * 2);
			for (let i = -1, n = values.length; ++i < n;) Int64.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 2 * i * 4, 2));
			return data;
		}
		/** @nocollapse */
		static multiply(left, right) {
			return new Int64(new Uint32Array(left.buffer)).times(right);
		}
		/** @nocollapse */
		static add(left, right) {
			return new Int64(new Uint32Array(left.buffer)).plus(right);
		}
	};
	exports.Int64 = Int64;
	exports.Int128 = class Int128 {
		constructor(buffer) {
			this.buffer = buffer;
		}
		high() {
			return new Int64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2));
		}
		low() {
			return new Int64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2));
		}
		negate() {
			this.buffer[0] = ~this.buffer[0] + 1;
			this.buffer[1] = ~this.buffer[1];
			this.buffer[2] = ~this.buffer[2];
			this.buffer[3] = ~this.buffer[3];
			if (this.buffer[0] == 0) ++this.buffer[1];
			if (this.buffer[1] == 0) ++this.buffer[2];
			if (this.buffer[2] == 0) ++this.buffer[3];
			return this;
		}
		times(other) {
			const L0 = new Uint64(new Uint32Array([this.buffer[3], 0]));
			const L1 = new Uint64(new Uint32Array([this.buffer[2], 0]));
			const L2 = new Uint64(new Uint32Array([this.buffer[1], 0]));
			const L3 = new Uint64(new Uint32Array([this.buffer[0], 0]));
			const R0 = new Uint64(new Uint32Array([other.buffer[3], 0]));
			const R1 = new Uint64(new Uint32Array([other.buffer[2], 0]));
			const R2 = new Uint64(new Uint32Array([other.buffer[1], 0]));
			const R3 = new Uint64(new Uint32Array([other.buffer[0], 0]));
			let product = Uint64.multiply(L3, R3);
			this.buffer[0] = product.low();
			const sum = new Uint64(new Uint32Array([product.high(), 0]));
			product = Uint64.multiply(L2, R3);
			sum.plus(product);
			product = Uint64.multiply(L3, R2);
			sum.plus(product);
			this.buffer[1] = sum.low();
			this.buffer[3] = sum.lessThan(product) ? 1 : 0;
			this.buffer[2] = sum.high();
			new Uint64(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(Uint64.multiply(L1, R3)).plus(Uint64.multiply(L2, R2)).plus(Uint64.multiply(L3, R1));
			this.buffer[3] += Uint64.multiply(L0, R3).plus(Uint64.multiply(L1, R2)).plus(Uint64.multiply(L2, R1)).plus(Uint64.multiply(L3, R0)).low();
			return this;
		}
		plus(other) {
			const sums = new Uint32Array(4);
			sums[3] = this.buffer[3] + other.buffer[3] >>> 0;
			sums[2] = this.buffer[2] + other.buffer[2] >>> 0;
			sums[1] = this.buffer[1] + other.buffer[1] >>> 0;
			sums[0] = this.buffer[0] + other.buffer[0] >>> 0;
			if (sums[0] < this.buffer[0] >>> 0) ++sums[1];
			if (sums[1] < this.buffer[1] >>> 0) ++sums[2];
			if (sums[2] < this.buffer[2] >>> 0) ++sums[3];
			this.buffer[3] = sums[3];
			this.buffer[2] = sums[2];
			this.buffer[1] = sums[1];
			this.buffer[0] = sums[0];
			return this;
		}
		hex() {
			return `${intAsHex(this.buffer[3])} ${intAsHex(this.buffer[2])} ${intAsHex(this.buffer[1])} ${intAsHex(this.buffer[0])}`;
		}
		/** @nocollapse */
		static multiply(left, right) {
			return new Int128(new Uint32Array(left.buffer)).times(right);
		}
		/** @nocollapse */
		static add(left, right) {
			return new Int128(new Uint32Array(left.buffer)).plus(right);
		}
		/** @nocollapse */
		static from(val, out_buffer = new Uint32Array(4)) {
			return Int128.fromString(typeof val === "string" ? val : val.toString(), out_buffer);
		}
		/** @nocollapse */
		static fromNumber(num, out_buffer = new Uint32Array(4)) {
			return Int128.fromString(num.toString(), out_buffer);
		}
		/** @nocollapse */
		static fromString(str, out_buffer = new Uint32Array(4)) {
			const negate = str.startsWith("-");
			const length = str.length;
			const out = new Int128(out_buffer);
			for (let posn = negate ? 1 : 0; posn < length;) {
				const group = kInt32DecimalDigits < length - posn ? kInt32DecimalDigits : length - posn;
				const chunk = new Int128(new Uint32Array([
					Number.parseInt(str.slice(posn, posn + group), 10),
					0,
					0,
					0
				]));
				const multiple = new Int128(new Uint32Array([
					kPowersOfTen[group],
					0,
					0,
					0
				]));
				out.times(multiple);
				out.plus(chunk);
				posn += group;
			}
			return negate ? out.negate() : out;
		}
		/** @nocollapse */
		static convertArray(values) {
			const data = new Uint32Array(values.length * 4);
			for (let i = -1, n = values.length; ++i < n;) Int128.from(values[i], new Uint32Array(data.buffer, data.byteOffset + 16 * i, 4));
			return data;
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/util/interval.js
var require_interval$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.toIntervalMonthDayNanoObjects = exports.toIntervalDayTimeObjects = exports.toIntervalMonthDayNanoInt32Array = exports.toIntervalDayTimeInt32Array = void 0;
	function toIntervalDayTimeInt32Array(objects) {
		var _a, _b;
		const length = objects.length;
		const array = new Int32Array(length * 2);
		for (let oi = 0, ai = 0; oi < length; oi++) {
			const interval = objects[oi];
			array[ai++] = (_a = interval["days"]) !== null && _a !== void 0 ? _a : 0;
			array[ai++] = (_b = interval["milliseconds"]) !== null && _b !== void 0 ? _b : 0;
		}
		return array;
	}
	exports.toIntervalDayTimeInt32Array = toIntervalDayTimeInt32Array;
	function toIntervalMonthDayNanoInt32Array(objects) {
		var _a, _b;
		const length = objects.length;
		const data = new Int32Array(length * 4);
		for (let oi = 0, ai = 0; oi < length; oi++) {
			const interval = objects[oi];
			data[ai++] = (_a = interval["months"]) !== null && _a !== void 0 ? _a : 0;
			data[ai++] = (_b = interval["days"]) !== null && _b !== void 0 ? _b : 0;
			const nanoseconds = interval["nanoseconds"];
			if (nanoseconds) {
				data[ai++] = Number(BigInt(nanoseconds) & BigInt(4294967295));
				data[ai++] = Number(BigInt(nanoseconds) >> BigInt(32));
			} else ai += 2;
		}
		return data;
	}
	exports.toIntervalMonthDayNanoInt32Array = toIntervalMonthDayNanoInt32Array;
	function toIntervalDayTimeObjects(array) {
		const length = array.length;
		const objects = new Array(length / 2);
		for (let ai = 0, oi = 0; ai < length; ai += 2) objects[oi++] = {
			"days": array[ai],
			"milliseconds": array[ai + 1]
		};
		return objects;
	}
	exports.toIntervalDayTimeObjects = toIntervalDayTimeObjects;
	/** @ignore */
	function toIntervalMonthDayNanoObjects(array, stringifyNano) {
		const length = array.length;
		const objects = new Array(length / 4);
		for (let ai = 0, oi = 0; ai < length; ai += 4) {
			const nanoseconds = BigInt(array[ai + 3]) << BigInt(32) | BigInt(array[ai + 2] >>> 0);
			objects[oi++] = {
				"months": array[ai],
				"days": array[ai + 1],
				"nanoseconds": stringifyNano ? `${nanoseconds}` : nanoseconds
			};
		}
		return objects;
	}
	exports.toIntervalMonthDayNanoObjects = toIntervalMonthDayNanoObjects;
}));
//#endregion
//#region node_modules/apache-arrow/visitor/vectorloader.js
var require_vectorloader = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.CompressedVectorLoader = exports.JSONVectorLoader = exports.VectorLoader = void 0;
	var data_js_1 = require_data();
	var schema_js_1 = require_schema();
	var type_js_1 = require_type();
	var visitor_js_1 = require_visitor();
	var bit_js_1 = require_bit();
	var utf8_js_1 = require_utf8$2();
	var int_js_1 = require_int$1();
	var enum_js_1 = require_enum();
	var buffer_js_1 = require_buffer$2();
	var interval_js_1 = require_interval$1();
	/** @ignore */
	var VectorLoader = class extends visitor_js_1.Visitor {
		constructor(bytes, nodes, buffers, dictionaries, metadataVersion = enum_js_1.MetadataVersion.V5) {
			super();
			this.nodesIndex = -1;
			this.buffersIndex = -1;
			this.bytes = bytes;
			this.nodes = nodes;
			this.buffers = buffers;
			this.dictionaries = dictionaries;
			this.metadataVersion = metadataVersion;
		}
		visit(node) {
			return super.visit(node instanceof schema_js_1.Field ? node.type : node);
		}
		visitNull(type, { length } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length
			});
		}
		visitBool(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				data: this.readData(type)
			});
		}
		visitInt(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				data: this.readData(type)
			});
		}
		visitFloat(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				data: this.readData(type)
			});
		}
		visitUtf8(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				valueOffsets: this.readOffsets(type),
				data: this.readData(type)
			});
		}
		visitLargeUtf8(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				valueOffsets: this.readOffsets(type),
				data: this.readData(type)
			});
		}
		visitBinary(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				valueOffsets: this.readOffsets(type),
				data: this.readData(type)
			});
		}
		visitLargeBinary(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				valueOffsets: this.readOffsets(type),
				data: this.readData(type)
			});
		}
		visitFixedSizeBinary(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				data: this.readData(type)
			});
		}
		visitDate(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				data: this.readData(type)
			});
		}
		visitTimestamp(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				data: this.readData(type)
			});
		}
		visitTime(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				data: this.readData(type)
			});
		}
		visitDecimal(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				data: this.readData(type)
			});
		}
		visitList(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				valueOffsets: this.readOffsets(type),
				"child": this.visit(type.children[0])
			});
		}
		visitStruct(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				children: this.visitMany(type.children)
			});
		}
		visitUnion(type, { length, nullCount } = this.nextFieldNode()) {
			if (this.metadataVersion < enum_js_1.MetadataVersion.V5) this.readNullBitmap(type, nullCount);
			return type.mode === enum_js_1.UnionMode.Sparse ? this.visitSparseUnion(type, {
				length,
				nullCount
			}) : this.visitDenseUnion(type, {
				length,
				nullCount
			});
		}
		visitDenseUnion(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				typeIds: this.readTypeIds(type),
				valueOffsets: this.readOffsets(type),
				children: this.visitMany(type.children)
			});
		}
		visitSparseUnion(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				typeIds: this.readTypeIds(type),
				children: this.visitMany(type.children)
			});
		}
		visitDictionary(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				data: this.readData(type.indices),
				dictionary: this.readDictionary(type)
			});
		}
		visitInterval(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				data: this.readData(type)
			});
		}
		visitDuration(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				data: this.readData(type)
			});
		}
		visitFixedSizeList(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				"child": this.visit(type.children[0])
			});
		}
		visitMap(type, { length, nullCount } = this.nextFieldNode()) {
			return (0, data_js_1.makeData)({
				type,
				length,
				nullCount,
				nullBitmap: this.readNullBitmap(type, nullCount),
				valueOffsets: this.readOffsets(type),
				"child": this.visit(type.children[0])
			});
		}
		nextFieldNode() {
			return this.nodes[++this.nodesIndex];
		}
		nextBufferRange() {
			return this.buffers[++this.buffersIndex];
		}
		readNullBitmap(type, nullCount, buffer = this.nextBufferRange()) {
			return nullCount > 0 && this.readData(type, buffer) || new Uint8Array(0);
		}
		readOffsets(type, buffer) {
			return this.readData(type, buffer);
		}
		readTypeIds(type, buffer) {
			return this.readData(type, buffer);
		}
		readData(_type, { length, offset } = this.nextBufferRange()) {
			return this.bytes.subarray(offset, offset + length);
		}
		readDictionary(type) {
			return this.dictionaries.get(type.id);
		}
	};
	exports.VectorLoader = VectorLoader;
	/** @ignore */
	var JSONVectorLoader = class extends VectorLoader {
		constructor(sources, nodes, buffers, dictionaries, metadataVersion) {
			super(new Uint8Array(0), nodes, buffers, dictionaries, metadataVersion);
			this.sources = sources;
		}
		readNullBitmap(_type, nullCount, { offset } = this.nextBufferRange()) {
			return nullCount <= 0 ? new Uint8Array(0) : (0, bit_js_1.packBools)(this.sources[offset]);
		}
		readOffsets(_type, { offset } = this.nextBufferRange()) {
			return (0, buffer_js_1.toArrayBufferView)(Uint8Array, (0, buffer_js_1.toArrayBufferView)(_type.OffsetArrayType, this.sources[offset]));
		}
		readTypeIds(type, { offset } = this.nextBufferRange()) {
			return (0, buffer_js_1.toArrayBufferView)(Uint8Array, (0, buffer_js_1.toArrayBufferView)(type.ArrayType, this.sources[offset]));
		}
		readData(type, { offset } = this.nextBufferRange()) {
			const { sources } = this;
			if (type_js_1.DataType.isTimestamp(type)) return (0, buffer_js_1.toArrayBufferView)(Uint8Array, int_js_1.Int64.convertArray(sources[offset]));
			else if ((type_js_1.DataType.isInt(type) || type_js_1.DataType.isTime(type)) && type.bitWidth === 64 || type_js_1.DataType.isDuration(type)) return (0, buffer_js_1.toArrayBufferView)(Uint8Array, int_js_1.Int64.convertArray(sources[offset]));
			else if (type_js_1.DataType.isDate(type) && type.unit === enum_js_1.DateUnit.MILLISECOND) return (0, buffer_js_1.toArrayBufferView)(Uint8Array, int_js_1.Int64.convertArray(sources[offset]));
			else if (type_js_1.DataType.isDecimal(type)) return (0, buffer_js_1.toArrayBufferView)(Uint8Array, int_js_1.Int128.convertArray(sources[offset]));
			else if (type_js_1.DataType.isBinary(type) || type_js_1.DataType.isLargeBinary(type) || type_js_1.DataType.isFixedSizeBinary(type)) return binaryDataFromJSON(sources[offset]);
			else if (type_js_1.DataType.isBool(type)) return (0, bit_js_1.packBools)(sources[offset]);
			else if (type_js_1.DataType.isUtf8(type) || type_js_1.DataType.isLargeUtf8(type)) return (0, utf8_js_1.encodeUtf8)(sources[offset].join(""));
			else if (type_js_1.DataType.isInterval(type)) switch (type.unit) {
				case enum_js_1.IntervalUnit.DAY_TIME: return (0, interval_js_1.toIntervalDayTimeInt32Array)(sources[offset]);
				case enum_js_1.IntervalUnit.MONTH_DAY_NANO: return (0, interval_js_1.toIntervalMonthDayNanoInt32Array)(sources[offset]);
				default: break;
			}
			return (0, buffer_js_1.toArrayBufferView)(Uint8Array, (0, buffer_js_1.toArrayBufferView)(type.ArrayType, sources[offset].map((x) => +x)));
		}
	};
	exports.JSONVectorLoader = JSONVectorLoader;
	/** @ignore */
	function binaryDataFromJSON(values) {
		const joined = values.join("");
		const data = new Uint8Array(joined.length / 2);
		for (let i = 0; i < joined.length; i += 2) data[i >> 1] = Number.parseInt(joined.slice(i, i + 2), 16);
		return data;
	}
	var CompressedVectorLoader = class extends VectorLoader {
		constructor(bodyChunks, nodes, buffers, dictionaries, metadataVersion) {
			super(new Uint8Array(0), nodes, buffers, dictionaries, metadataVersion);
			this.bodyChunks = bodyChunks;
		}
		readData(_type, _buffer = this.nextBufferRange()) {
			return this.bodyChunks[this.buffersIndex];
		}
	};
	exports.CompressedVectorLoader = CompressedVectorLoader;
}));
//#endregion
//#region node_modules/apache-arrow/builder/binary.js
var require_binary = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BinaryBuilder = void 0;
	var buffer_js_1 = require_buffer();
	var builder_js_1 = require_builder$2();
	var buffer_js_2 = require_buffer$2();
	/** @ignore */
	var BinaryBuilder = class extends builder_js_1.VariableWidthBuilder {
		constructor(opts) {
			super(opts);
			this._values = new buffer_js_1.BufferBuilder(Uint8Array);
		}
		get byteLength() {
			let size = this._pendingLength + this.length * 4;
			this._offsets && (size += this._offsets.byteLength);
			this._values && (size += this._values.byteLength);
			this._nulls && (size += this._nulls.byteLength);
			return size;
		}
		setValue(index, value) {
			return super.setValue(index, (0, buffer_js_2.toUint8Array)(value));
		}
		_flushPending(pending, pendingLength) {
			const offsets = this._offsets;
			const data = this._values.reserve(pendingLength).buffer;
			let offset = 0;
			for (const [index, value] of pending) if (value === void 0) offsets.set(index, 0);
			else {
				const length = value.length;
				data.set(value, offset);
				offsets.set(index, length);
				offset += length;
			}
		}
	};
	exports.BinaryBuilder = BinaryBuilder;
}));
//#endregion
//#region node_modules/apache-arrow/builder/largebinary.js
var require_largebinary = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LargeBinaryBuilder = void 0;
	var buffer_js_1 = require_buffer$2();
	var buffer_js_2 = require_buffer();
	var builder_js_1 = require_builder$2();
	/** @ignore */
	var LargeBinaryBuilder = class extends builder_js_1.VariableWidthBuilder {
		constructor(opts) {
			super(opts);
			this._values = new buffer_js_2.BufferBuilder(Uint8Array);
		}
		get byteLength() {
			let size = this._pendingLength + this.length * 4;
			this._offsets && (size += this._offsets.byteLength);
			this._values && (size += this._values.byteLength);
			this._nulls && (size += this._nulls.byteLength);
			return size;
		}
		setValue(index, value) {
			return super.setValue(index, (0, buffer_js_1.toUint8Array)(value));
		}
		_flushPending(pending, pendingLength) {
			const offsets = this._offsets;
			const data = this._values.reserve(pendingLength).buffer;
			let offset = 0;
			for (const [index, value] of pending) if (value === void 0) offsets.set(index, BigInt(0));
			else {
				const length = value.length;
				data.set(value, offset);
				offsets.set(index, BigInt(length));
				offset += length;
			}
		}
	};
	exports.LargeBinaryBuilder = LargeBinaryBuilder;
}));
//#endregion
//#region node_modules/apache-arrow/builder/bool.js
var require_bool = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BoolBuilder = void 0;
	var buffer_js_1 = require_buffer();
	var builder_js_1 = require_builder$2();
	/** @ignore */
	var BoolBuilder = class extends builder_js_1.Builder {
		constructor(options) {
			super(options);
			this._values = new buffer_js_1.BitmapBufferBuilder();
		}
		setValue(index, value) {
			this._values.set(index, +value);
		}
	};
	exports.BoolBuilder = BoolBuilder;
}));
//#endregion
//#region node_modules/apache-arrow/builder/date.js
var require_date = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DateMillisecondBuilder = exports.DateDayBuilder = exports.DateBuilder = void 0;
	var builder_js_1 = require_builder$2();
	var set_js_1 = require_set();
	/** @ignore */
	var DateBuilder = class extends builder_js_1.FixedWidthBuilder {};
	exports.DateBuilder = DateBuilder;
	DateBuilder.prototype._setValue = set_js_1.setDate;
	/** @ignore */
	var DateDayBuilder = class extends DateBuilder {};
	exports.DateDayBuilder = DateDayBuilder;
	DateDayBuilder.prototype._setValue = set_js_1.setDateDay;
	/** @ignore */
	var DateMillisecondBuilder = class extends DateBuilder {};
	exports.DateMillisecondBuilder = DateMillisecondBuilder;
	DateMillisecondBuilder.prototype._setValue = set_js_1.setDateMillisecond;
}));
//#endregion
//#region node_modules/apache-arrow/builder/decimal.js
var require_decimal = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DecimalBuilder = void 0;
	var builder_js_1 = require_builder$2();
	var set_js_1 = require_set();
	/** @ignore */
	var DecimalBuilder = class extends builder_js_1.FixedWidthBuilder {};
	exports.DecimalBuilder = DecimalBuilder;
	DecimalBuilder.prototype._setValue = set_js_1.setDecimal;
}));
//#endregion
//#region node_modules/apache-arrow/builder/dictionary.js
var require_dictionary = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DictionaryBuilder = void 0;
	var type_js_1 = require_type();
	var builder_js_1 = require_builder$2();
	var factories_js_1 = require_factories();
	/** @ignore */
	var DictionaryBuilder = class extends builder_js_1.Builder {
		constructor({ "type": type, "nullValues": nulls, "dictionaryHashFunction": hashFn }) {
			super({ type: new type_js_1.Dictionary(type.dictionary, type.indices, type.id, type.isOrdered) });
			this._nulls = null;
			this._dictionaryOffset = 0;
			this._keysToIndices = Object.create(null);
			this.indices = (0, factories_js_1.makeBuilder)({
				"type": this.type.indices,
				"nullValues": nulls
			});
			this.dictionary = (0, factories_js_1.makeBuilder)({
				"type": this.type.dictionary,
				"nullValues": null
			});
			if (typeof hashFn === "function") this.valueToKey = hashFn;
		}
		get values() {
			return this.indices.values;
		}
		get nullCount() {
			return this.indices.nullCount;
		}
		get nullBitmap() {
			return this.indices.nullBitmap;
		}
		get byteLength() {
			return this.indices.byteLength + this.dictionary.byteLength;
		}
		get reservedLength() {
			return this.indices.reservedLength + this.dictionary.reservedLength;
		}
		get reservedByteLength() {
			return this.indices.reservedByteLength + this.dictionary.reservedByteLength;
		}
		isValid(value) {
			return this.indices.isValid(value);
		}
		setValid(index, valid) {
			const indices = this.indices;
			valid = indices.setValid(index, valid);
			this.length = indices.length;
			return valid;
		}
		setValue(index, value) {
			const keysToIndices = this._keysToIndices;
			const key = this.valueToKey(value);
			let idx = keysToIndices[key];
			if (idx === void 0) keysToIndices[key] = idx = this._dictionaryOffset + this.dictionary.append(value).length - 1;
			return this.indices.setValue(index, idx);
		}
		flush() {
			const type = this.type;
			const prev = this._dictionary;
			const curr = this.dictionary.toVector();
			const data = this.indices.flush().clone(type);
			data.dictionary = prev ? prev.concat(curr) : curr;
			this.finished || (this._dictionaryOffset += curr.length);
			this._dictionary = data.dictionary;
			this.clear();
			return data;
		}
		finish() {
			this.indices.finish();
			this.dictionary.finish();
			this._dictionaryOffset = 0;
			this._keysToIndices = Object.create(null);
			return super.finish();
		}
		clear() {
			this.indices.clear();
			this.dictionary.clear();
			return super.clear();
		}
		valueToKey(val) {
			return typeof val === "string" ? val : `${val}`;
		}
	};
	exports.DictionaryBuilder = DictionaryBuilder;
}));
//#endregion
//#region node_modules/apache-arrow/builder/fixedsizebinary.js
var require_fixedsizebinary = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FixedSizeBinaryBuilder = void 0;
	var builder_js_1 = require_builder$2();
	var set_js_1 = require_set();
	/** @ignore */
	var FixedSizeBinaryBuilder = class extends builder_js_1.FixedWidthBuilder {};
	exports.FixedSizeBinaryBuilder = FixedSizeBinaryBuilder;
	FixedSizeBinaryBuilder.prototype._setValue = set_js_1.setFixedSizeBinary;
}));
//#endregion
//#region node_modules/apache-arrow/builder/fixedsizelist.js
var require_fixedsizelist = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FixedSizeListBuilder = void 0;
	var schema_js_1 = require_schema();
	var builder_js_1 = require_builder$2();
	var type_js_1 = require_type();
	/** @ignore */
	var FixedSizeListBuilder = class extends builder_js_1.Builder {
		setValue(index, value) {
			const [child] = this.children;
			const start = index * this.stride;
			for (let i = -1, n = this.stride; ++i < n;) child.set(start + i, value[i]);
		}
		setValid(index, valid) {
			if (!super.setValid(index, valid)) this.children[0].setValid((index + 1) * this.stride - 1, false);
			return valid;
		}
		addChild(child, name = "0") {
			if (this.numChildren > 0) throw new Error("FixedSizeListBuilder can only have one child.");
			const childIndex = this.children.push(child);
			this.type = new type_js_1.FixedSizeList(this.type.listSize, new schema_js_1.Field(name, child.type, true));
			return childIndex;
		}
	};
	exports.FixedSizeListBuilder = FixedSizeListBuilder;
}));
//#endregion
//#region node_modules/apache-arrow/builder/float.js
var require_float = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Float64Builder = exports.Float32Builder = exports.Float16Builder = exports.FloatBuilder = void 0;
	var math_js_1 = require_math();
	var builder_js_1 = require_builder$2();
	/** @ignore */
	var FloatBuilder = class extends builder_js_1.FixedWidthBuilder {
		setValue(index, value) {
			this._values.set(index, value);
		}
	};
	exports.FloatBuilder = FloatBuilder;
	/** @ignore */
	var Float16Builder = class extends FloatBuilder {
		setValue(index, value) {
			super.setValue(index, (0, math_js_1.float64ToUint16)(value));
		}
	};
	exports.Float16Builder = Float16Builder;
	/** @ignore */
	var Float32Builder = class extends FloatBuilder {};
	exports.Float32Builder = Float32Builder;
	/** @ignore */
	var Float64Builder = class extends FloatBuilder {};
	exports.Float64Builder = Float64Builder;
}));
//#endregion
//#region node_modules/apache-arrow/builder/interval.js
var require_interval = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.IntervalMonthDayNanoBuilder = exports.IntervalYearMonthBuilder = exports.IntervalDayTimeBuilder = exports.IntervalBuilder = void 0;
	var builder_js_1 = require_builder$2();
	var set_js_1 = require_set();
	/** @ignore */
	var IntervalBuilder = class extends builder_js_1.FixedWidthBuilder {};
	exports.IntervalBuilder = IntervalBuilder;
	IntervalBuilder.prototype._setValue = set_js_1.setIntervalValue;
	/** @ignore */
	var IntervalDayTimeBuilder = class extends IntervalBuilder {};
	exports.IntervalDayTimeBuilder = IntervalDayTimeBuilder;
	IntervalDayTimeBuilder.prototype._setValue = set_js_1.setIntervalDayTime;
	/** @ignore */
	var IntervalYearMonthBuilder = class extends IntervalBuilder {};
	exports.IntervalYearMonthBuilder = IntervalYearMonthBuilder;
	IntervalYearMonthBuilder.prototype._setValue = set_js_1.setIntervalYearMonth;
	/** @ignore */
	var IntervalMonthDayNanoBuilder = class extends IntervalBuilder {};
	exports.IntervalMonthDayNanoBuilder = IntervalMonthDayNanoBuilder;
	IntervalMonthDayNanoBuilder.prototype._setValue = set_js_1.setIntervalMonthDayNano;
}));
//#endregion
//#region node_modules/apache-arrow/builder/duration.js
var require_duration = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DurationNanosecondBuilder = exports.DurationMicrosecondBuilder = exports.DurationMillisecondBuilder = exports.DurationSecondBuilder = exports.DurationBuilder = void 0;
	var builder_js_1 = require_builder$2();
	var set_js_1 = require_set();
	/** @ignore */
	var DurationBuilder = class extends builder_js_1.FixedWidthBuilder {};
	exports.DurationBuilder = DurationBuilder;
	DurationBuilder.prototype._setValue = set_js_1.setDuration;
	/** @ignore */
	var DurationSecondBuilder = class extends DurationBuilder {};
	exports.DurationSecondBuilder = DurationSecondBuilder;
	DurationSecondBuilder.prototype._setValue = set_js_1.setDurationSecond;
	/** @ignore */
	var DurationMillisecondBuilder = class extends DurationBuilder {};
	exports.DurationMillisecondBuilder = DurationMillisecondBuilder;
	DurationMillisecondBuilder.prototype._setValue = set_js_1.setDurationMillisecond;
	/** @ignore */
	var DurationMicrosecondBuilder = class extends DurationBuilder {};
	exports.DurationMicrosecondBuilder = DurationMicrosecondBuilder;
	DurationMicrosecondBuilder.prototype._setValue = set_js_1.setDurationMicrosecond;
	/** @ignore */
	var DurationNanosecondBuilder = class extends DurationBuilder {};
	exports.DurationNanosecondBuilder = DurationNanosecondBuilder;
	DurationNanosecondBuilder.prototype._setValue = set_js_1.setDurationNanosecond;
}));
//#endregion
//#region node_modules/apache-arrow/builder/int.js
var require_int = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Uint64Builder = exports.Uint32Builder = exports.Uint16Builder = exports.Uint8Builder = exports.Int64Builder = exports.Int32Builder = exports.Int16Builder = exports.Int8Builder = exports.IntBuilder = void 0;
	var builder_js_1 = require_builder$2();
	/** @ignore */
	var IntBuilder = class extends builder_js_1.FixedWidthBuilder {
		setValue(index, value) {
			this._values.set(index, value);
		}
	};
	exports.IntBuilder = IntBuilder;
	/** @ignore */
	var Int8Builder = class extends IntBuilder {};
	exports.Int8Builder = Int8Builder;
	/** @ignore */
	var Int16Builder = class extends IntBuilder {};
	exports.Int16Builder = Int16Builder;
	/** @ignore */
	var Int32Builder = class extends IntBuilder {};
	exports.Int32Builder = Int32Builder;
	/** @ignore */
	var Int64Builder = class extends IntBuilder {};
	exports.Int64Builder = Int64Builder;
	/** @ignore */
	var Uint8Builder = class extends IntBuilder {};
	exports.Uint8Builder = Uint8Builder;
	/** @ignore */
	var Uint16Builder = class extends IntBuilder {};
	exports.Uint16Builder = Uint16Builder;
	/** @ignore */
	var Uint32Builder = class extends IntBuilder {};
	exports.Uint32Builder = Uint32Builder;
	/** @ignore */
	var Uint64Builder = class extends IntBuilder {};
	exports.Uint64Builder = Uint64Builder;
}));
//#endregion
//#region node_modules/apache-arrow/builder/list.js
var require_list = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ListBuilder = void 0;
	var schema_js_1 = require_schema();
	var type_js_1 = require_type();
	var buffer_js_1 = require_buffer();
	var builder_js_1 = require_builder$2();
	/** @ignore */
	var ListBuilder = class extends builder_js_1.VariableWidthBuilder {
		constructor(opts) {
			super(opts);
			this._offsets = new buffer_js_1.OffsetsBufferBuilder(opts.type);
		}
		addChild(child, name = "0") {
			if (this.numChildren > 0) throw new Error("ListBuilder can only have one child.");
			this.children[this.numChildren] = child;
			this.type = new type_js_1.List(new schema_js_1.Field(name, child.type, true));
			return this.numChildren - 1;
		}
		_flushPending(pending) {
			const offsets = this._offsets;
			const [child] = this.children;
			for (const [index, value] of pending) if (typeof value === "undefined") offsets.set(index, 0);
			else {
				const v = value;
				const n = v.length;
				const start = offsets.set(index, n).buffer[index];
				for (let i = -1; ++i < n;) child.set(start + i, v[i]);
			}
		}
	};
	exports.ListBuilder = ListBuilder;
}));
//#endregion
//#region node_modules/apache-arrow/builder/map.js
var require_map = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MapBuilder = void 0;
	var schema_js_1 = require_schema();
	var type_js_1 = require_type();
	var builder_js_1 = require_builder$2();
	/** @ignore */
	var MapBuilder = class extends builder_js_1.VariableWidthBuilder {
		set(index, value) {
			return super.set(index, value);
		}
		setValue(index, value) {
			const row = value instanceof Map ? value : new Map(Object.entries(value));
			const pending = this._pending || (this._pending = /* @__PURE__ */ new Map());
			const current = pending.get(index);
			current && (this._pendingLength -= current.size);
			this._pendingLength += row.size;
			pending.set(index, row);
		}
		addChild(child, name = `${this.numChildren}`) {
			if (this.numChildren > 0) throw new Error("ListBuilder can only have one child.");
			this.children[this.numChildren] = child;
			this.type = new type_js_1.Map_(new schema_js_1.Field(name, child.type, true), this.type.keysSorted);
			return this.numChildren - 1;
		}
		_flushPending(pending) {
			const offsets = this._offsets;
			const [child] = this.children;
			for (const [index, value] of pending) if (value === void 0) offsets.set(index, 0);
			else {
				let { [index]: idx, [index + 1]: end } = offsets.set(index, value.size).buffer;
				for (const val of value.entries()) {
					child.set(idx, val);
					if (++idx >= end) break;
				}
			}
		}
	};
	exports.MapBuilder = MapBuilder;
}));
//#endregion
//#region node_modules/apache-arrow/builder/null.js
var require_null = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.NullBuilder = void 0;
	var builder_js_1 = require_builder$2();
	/** @ignore */
	var NullBuilder = class extends builder_js_1.Builder {
		setValue(index, value) {}
		setValid(index, valid) {
			this.length = Math.max(index + 1, this.length);
			return valid;
		}
	};
	exports.NullBuilder = NullBuilder;
}));
//#endregion
//#region node_modules/apache-arrow/builder/struct.js
var require_struct = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.StructBuilder = void 0;
	var schema_js_1 = require_schema();
	var builder_js_1 = require_builder$2();
	var type_js_1 = require_type();
	/** @ignore */
	var StructBuilder = class extends builder_js_1.Builder {
		setValue(index, value) {
			const { children, type } = this;
			switch (Array.isArray(value) || value.constructor) {
				case true: return type.children.forEach((_, i) => children[i].set(index, value[i]));
				case Map: return type.children.forEach((f, i) => children[i].set(index, value.get(f.name)));
				default: return type.children.forEach((f, i) => children[i].set(index, value[f.name]));
			}
		}
		/** @inheritdoc */
		setValid(index, valid) {
			if (!super.setValid(index, valid)) this.children.forEach((child) => child.setValid(index, valid));
			return valid;
		}
		addChild(child, name = `${this.numChildren}`) {
			const childIndex = this.children.push(child);
			this.type = new type_js_1.Struct([...this.type.children, new schema_js_1.Field(name, child.type, true)]);
			return childIndex;
		}
	};
	exports.StructBuilder = StructBuilder;
}));
//#endregion
//#region node_modules/apache-arrow/builder/timestamp.js
var require_timestamp = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TimestampNanosecondBuilder = exports.TimestampMicrosecondBuilder = exports.TimestampMillisecondBuilder = exports.TimestampSecondBuilder = exports.TimestampBuilder = void 0;
	var builder_js_1 = require_builder$2();
	var set_js_1 = require_set();
	/** @ignore */
	var TimestampBuilder = class extends builder_js_1.FixedWidthBuilder {};
	exports.TimestampBuilder = TimestampBuilder;
	TimestampBuilder.prototype._setValue = set_js_1.setTimestamp;
	/** @ignore */
	var TimestampSecondBuilder = class extends TimestampBuilder {};
	exports.TimestampSecondBuilder = TimestampSecondBuilder;
	TimestampSecondBuilder.prototype._setValue = set_js_1.setTimestampSecond;
	/** @ignore */
	var TimestampMillisecondBuilder = class extends TimestampBuilder {};
	exports.TimestampMillisecondBuilder = TimestampMillisecondBuilder;
	TimestampMillisecondBuilder.prototype._setValue = set_js_1.setTimestampMillisecond;
	/** @ignore */
	var TimestampMicrosecondBuilder = class extends TimestampBuilder {};
	exports.TimestampMicrosecondBuilder = TimestampMicrosecondBuilder;
	TimestampMicrosecondBuilder.prototype._setValue = set_js_1.setTimestampMicrosecond;
	/** @ignore */
	var TimestampNanosecondBuilder = class extends TimestampBuilder {};
	exports.TimestampNanosecondBuilder = TimestampNanosecondBuilder;
	TimestampNanosecondBuilder.prototype._setValue = set_js_1.setTimestampNanosecond;
}));
//#endregion
//#region node_modules/apache-arrow/builder/time.js
var require_time = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TimeNanosecondBuilder = exports.TimeMicrosecondBuilder = exports.TimeMillisecondBuilder = exports.TimeSecondBuilder = exports.TimeBuilder = void 0;
	var builder_js_1 = require_builder$2();
	var set_js_1 = require_set();
	/** @ignore */
	var TimeBuilder = class extends builder_js_1.FixedWidthBuilder {};
	exports.TimeBuilder = TimeBuilder;
	TimeBuilder.prototype._setValue = set_js_1.setTime;
	/** @ignore */
	var TimeSecondBuilder = class extends TimeBuilder {};
	exports.TimeSecondBuilder = TimeSecondBuilder;
	TimeSecondBuilder.prototype._setValue = set_js_1.setTimeSecond;
	/** @ignore */
	var TimeMillisecondBuilder = class extends TimeBuilder {};
	exports.TimeMillisecondBuilder = TimeMillisecondBuilder;
	TimeMillisecondBuilder.prototype._setValue = set_js_1.setTimeMillisecond;
	/** @ignore */
	var TimeMicrosecondBuilder = class extends TimeBuilder {};
	exports.TimeMicrosecondBuilder = TimeMicrosecondBuilder;
	TimeMicrosecondBuilder.prototype._setValue = set_js_1.setTimeMicrosecond;
	/** @ignore */
	var TimeNanosecondBuilder = class extends TimeBuilder {};
	exports.TimeNanosecondBuilder = TimeNanosecondBuilder;
	TimeNanosecondBuilder.prototype._setValue = set_js_1.setTimeNanosecond;
}));
//#endregion
//#region node_modules/apache-arrow/builder/union.js
var require_union = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DenseUnionBuilder = exports.SparseUnionBuilder = exports.UnionBuilder = void 0;
	var schema_js_1 = require_schema();
	var buffer_js_1 = require_buffer();
	var builder_js_1 = require_builder$2();
	var type_js_1 = require_type();
	/** @ignore */
	var UnionBuilder = class extends builder_js_1.Builder {
		constructor(options) {
			super(options);
			this._typeIds = new buffer_js_1.DataBufferBuilder(Int8Array, 0, 1);
			if (typeof options["valueToChildTypeId"] === "function") this._valueToChildTypeId = options["valueToChildTypeId"];
		}
		get typeIdToChildIndex() {
			return this.type.typeIdToChildIndex;
		}
		append(value, childTypeId) {
			return this.set(this.length, value, childTypeId);
		}
		set(index, value, childTypeId) {
			if (childTypeId === void 0) childTypeId = this._valueToChildTypeId(this, value, index);
			this.setValue(index, value, childTypeId);
			return this;
		}
		setValue(index, value, childTypeId) {
			this._typeIds.set(index, childTypeId);
			const childIndex = this.type.typeIdToChildIndex[childTypeId];
			const child = this.children[childIndex];
			child === null || child === void 0 || child.set(index, value);
			this.length = Math.max(index + 1, this.length);
		}
		addChild(child, name = `${this.children.length}`) {
			const childTypeId = this.children.push(child);
			const { type: { children, mode, typeIds } } = this;
			const fields = [...children, new schema_js_1.Field(name, child.type)];
			this.type = new type_js_1.Union(mode, [...typeIds, childTypeId], fields);
			return childTypeId;
		}
		/** @ignore */
		_valueToChildTypeId(builder, value, offset) {
			throw new Error(`Cannot map UnionBuilder value to child typeId. \
Pass the \`childTypeId\` as the second argument to unionBuilder.append(), \
or supply a \`valueToChildTypeId\` function as part of the UnionBuilder constructor options.`);
		}
	};
	exports.UnionBuilder = UnionBuilder;
	/** @ignore */
	var SparseUnionBuilder = class extends UnionBuilder {};
	exports.SparseUnionBuilder = SparseUnionBuilder;
	/** @ignore */
	var DenseUnionBuilder = class extends UnionBuilder {
		constructor(options) {
			super(options);
			this._offsets = new buffer_js_1.DataBufferBuilder(Int32Array);
		}
		/** @ignore */
		setValue(index, value, childTypeId) {
			const id = this._typeIds.set(index, childTypeId).buffer[index];
			const child = this.getChildAt(this.type.typeIdToChildIndex[id]);
			const denseIndex = this._offsets.set(index, child.length).buffer[index];
			child === null || child === void 0 || child.set(denseIndex, value);
			this.length = Math.max(index + 1, this.length);
		}
	};
	exports.DenseUnionBuilder = DenseUnionBuilder;
}));
//#endregion
//#region node_modules/apache-arrow/builder/utf8.js
var require_utf8 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Utf8Builder = void 0;
	var utf8_js_1 = require_utf8$2();
	var binary_js_1 = require_binary();
	var buffer_js_1 = require_buffer();
	var builder_js_1 = require_builder$2();
	/** @ignore */
	var Utf8Builder = class extends builder_js_1.VariableWidthBuilder {
		constructor(opts) {
			super(opts);
			this._values = new buffer_js_1.BufferBuilder(Uint8Array);
		}
		get byteLength() {
			let size = this._pendingLength + this.length * 4;
			this._offsets && (size += this._offsets.byteLength);
			this._values && (size += this._values.byteLength);
			this._nulls && (size += this._nulls.byteLength);
			return size;
		}
		setValue(index, value) {
			return super.setValue(index, (0, utf8_js_1.encodeUtf8)(value));
		}
		_flushPending(pending, pendingLength) {}
	};
	exports.Utf8Builder = Utf8Builder;
	Utf8Builder.prototype._flushPending = binary_js_1.BinaryBuilder.prototype._flushPending;
}));
//#endregion
//#region node_modules/apache-arrow/builder/largeutf8.js
var require_largeutf8 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.LargeUtf8Builder = void 0;
	var utf8_js_1 = require_utf8$2();
	var buffer_js_1 = require_buffer();
	var builder_js_1 = require_builder$2();
	var largebinary_js_1 = require_largebinary();
	/** @ignore */
	var LargeUtf8Builder = class extends builder_js_1.VariableWidthBuilder {
		constructor(opts) {
			super(opts);
			this._values = new buffer_js_1.BufferBuilder(Uint8Array);
		}
		get byteLength() {
			let size = this._pendingLength + this.length * 4;
			this._offsets && (size += this._offsets.byteLength);
			this._values && (size += this._values.byteLength);
			this._nulls && (size += this._nulls.byteLength);
			return size;
		}
		setValue(index, value) {
			return super.setValue(index, (0, utf8_js_1.encodeUtf8)(value));
		}
		_flushPending(pending, pendingLength) {}
	};
	exports.LargeUtf8Builder = LargeUtf8Builder;
	LargeUtf8Builder.prototype._flushPending = largebinary_js_1.LargeBinaryBuilder.prototype._flushPending;
}));
//#endregion
//#region node_modules/apache-arrow/visitor/builderctor.js
var require_builderctor = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.instance = exports.GetBuilderCtor = void 0;
	var visitor_js_1 = require_visitor();
	var binary_js_1 = require_binary();
	var largebinary_js_1 = require_largebinary();
	var bool_js_1 = require_bool();
	var date_js_1 = require_date();
	var decimal_js_1 = require_decimal();
	var dictionary_js_1 = require_dictionary();
	var fixedsizebinary_js_1 = require_fixedsizebinary();
	var fixedsizelist_js_1 = require_fixedsizelist();
	var float_js_1 = require_float();
	var interval_js_1 = require_interval();
	var duration_js_1 = require_duration();
	var int_js_1 = require_int();
	var list_js_1 = require_list();
	var map_js_1 = require_map();
	var null_js_1 = require_null();
	var struct_js_1 = require_struct();
	var timestamp_js_1 = require_timestamp();
	var time_js_1 = require_time();
	var union_js_1 = require_union();
	var utf8_js_1 = require_utf8();
	var largeutf8_js_1 = require_largeutf8();
	/** @ignore */
	var GetBuilderCtor = class extends visitor_js_1.Visitor {
		visitNull() {
			return null_js_1.NullBuilder;
		}
		visitBool() {
			return bool_js_1.BoolBuilder;
		}
		visitInt() {
			return int_js_1.IntBuilder;
		}
		visitInt8() {
			return int_js_1.Int8Builder;
		}
		visitInt16() {
			return int_js_1.Int16Builder;
		}
		visitInt32() {
			return int_js_1.Int32Builder;
		}
		visitInt64() {
			return int_js_1.Int64Builder;
		}
		visitUint8() {
			return int_js_1.Uint8Builder;
		}
		visitUint16() {
			return int_js_1.Uint16Builder;
		}
		visitUint32() {
			return int_js_1.Uint32Builder;
		}
		visitUint64() {
			return int_js_1.Uint64Builder;
		}
		visitFloat() {
			return float_js_1.FloatBuilder;
		}
		visitFloat16() {
			return float_js_1.Float16Builder;
		}
		visitFloat32() {
			return float_js_1.Float32Builder;
		}
		visitFloat64() {
			return float_js_1.Float64Builder;
		}
		visitUtf8() {
			return utf8_js_1.Utf8Builder;
		}
		visitLargeUtf8() {
			return largeutf8_js_1.LargeUtf8Builder;
		}
		visitBinary() {
			return binary_js_1.BinaryBuilder;
		}
		visitLargeBinary() {
			return largebinary_js_1.LargeBinaryBuilder;
		}
		visitFixedSizeBinary() {
			return fixedsizebinary_js_1.FixedSizeBinaryBuilder;
		}
		visitDate() {
			return date_js_1.DateBuilder;
		}
		visitDateDay() {
			return date_js_1.DateDayBuilder;
		}
		visitDateMillisecond() {
			return date_js_1.DateMillisecondBuilder;
		}
		visitTimestamp() {
			return timestamp_js_1.TimestampBuilder;
		}
		visitTimestampSecond() {
			return timestamp_js_1.TimestampSecondBuilder;
		}
		visitTimestampMillisecond() {
			return timestamp_js_1.TimestampMillisecondBuilder;
		}
		visitTimestampMicrosecond() {
			return timestamp_js_1.TimestampMicrosecondBuilder;
		}
		visitTimestampNanosecond() {
			return timestamp_js_1.TimestampNanosecondBuilder;
		}
		visitTime() {
			return time_js_1.TimeBuilder;
		}
		visitTimeSecond() {
			return time_js_1.TimeSecondBuilder;
		}
		visitTimeMillisecond() {
			return time_js_1.TimeMillisecondBuilder;
		}
		visitTimeMicrosecond() {
			return time_js_1.TimeMicrosecondBuilder;
		}
		visitTimeNanosecond() {
			return time_js_1.TimeNanosecondBuilder;
		}
		visitDecimal() {
			return decimal_js_1.DecimalBuilder;
		}
		visitList() {
			return list_js_1.ListBuilder;
		}
		visitStruct() {
			return struct_js_1.StructBuilder;
		}
		visitUnion() {
			return union_js_1.UnionBuilder;
		}
		visitDenseUnion() {
			return union_js_1.DenseUnionBuilder;
		}
		visitSparseUnion() {
			return union_js_1.SparseUnionBuilder;
		}
		visitDictionary() {
			return dictionary_js_1.DictionaryBuilder;
		}
		visitInterval() {
			return interval_js_1.IntervalBuilder;
		}
		visitIntervalDayTime() {
			return interval_js_1.IntervalDayTimeBuilder;
		}
		visitIntervalYearMonth() {
			return interval_js_1.IntervalYearMonthBuilder;
		}
		visitIntervalMonthDayNano() {
			return interval_js_1.IntervalMonthDayNanoBuilder;
		}
		visitDuration() {
			return duration_js_1.DurationBuilder;
		}
		visitDurationSecond() {
			return duration_js_1.DurationSecondBuilder;
		}
		visitDurationMillisecond() {
			return duration_js_1.DurationMillisecondBuilder;
		}
		visitDurationMicrosecond() {
			return duration_js_1.DurationMicrosecondBuilder;
		}
		visitDurationNanosecond() {
			return duration_js_1.DurationNanosecondBuilder;
		}
		visitFixedSizeList() {
			return fixedsizelist_js_1.FixedSizeListBuilder;
		}
		visitMap() {
			return map_js_1.MapBuilder;
		}
	};
	exports.GetBuilderCtor = GetBuilderCtor;
	/** @ignore */
	exports.instance = new GetBuilderCtor();
}));
//#endregion
//#region node_modules/apache-arrow/visitor/typecomparator.js
var require_typecomparator = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.compareTypes = exports.compareFields = exports.compareSchemas = exports.instance = exports.TypeComparator = void 0;
	var visitor_js_1 = require_visitor();
	/** @ignore */
	var TypeComparator = class extends visitor_js_1.Visitor {
		compareSchemas(schema, other) {
			return schema === other || other instanceof schema.constructor && this.compareManyFields(schema.fields, other.fields);
		}
		compareManyFields(fields, others) {
			return fields === others || Array.isArray(fields) && Array.isArray(others) && fields.length === others.length && fields.every((f, i) => this.compareFields(f, others[i]));
		}
		compareFields(field, other) {
			return field === other || other instanceof field.constructor && field.name === other.name && field.nullable === other.nullable && this.visit(field.type, other.type);
		}
	};
	exports.TypeComparator = TypeComparator;
	function compareConstructor(type, other) {
		return other instanceof type.constructor;
	}
	function compareAny(type, other) {
		return type === other || compareConstructor(type, other);
	}
	function compareInt(type, other) {
		return type === other || compareConstructor(type, other) && type.bitWidth === other.bitWidth && type.isSigned === other.isSigned;
	}
	function compareFloat(type, other) {
		return type === other || compareConstructor(type, other) && type.precision === other.precision;
	}
	function compareFixedSizeBinary(type, other) {
		return type === other || compareConstructor(type, other) && type.byteWidth === other.byteWidth;
	}
	function compareDate(type, other) {
		return type === other || compareConstructor(type, other) && type.unit === other.unit;
	}
	function compareTimestamp(type, other) {
		return type === other || compareConstructor(type, other) && type.unit === other.unit && type.timezone === other.timezone;
	}
	function compareTime(type, other) {
		return type === other || compareConstructor(type, other) && type.unit === other.unit && type.bitWidth === other.bitWidth;
	}
	function compareList(type, other) {
		return type === other || compareConstructor(type, other) && type.children.length === other.children.length && exports.instance.compareManyFields(type.children, other.children);
	}
	function compareStruct(type, other) {
		return type === other || compareConstructor(type, other) && type.children.length === other.children.length && exports.instance.compareManyFields(type.children, other.children);
	}
	function compareUnion(type, other) {
		return type === other || compareConstructor(type, other) && type.mode === other.mode && type.typeIds.every((x, i) => x === other.typeIds[i]) && exports.instance.compareManyFields(type.children, other.children);
	}
	function compareDictionary(type, other) {
		return type === other || compareConstructor(type, other) && type.id === other.id && type.isOrdered === other.isOrdered && exports.instance.visit(type.indices, other.indices) && exports.instance.visit(type.dictionary, other.dictionary);
	}
	function compareInterval(type, other) {
		return type === other || compareConstructor(type, other) && type.unit === other.unit;
	}
	function compareDuration(type, other) {
		return type === other || compareConstructor(type, other) && type.unit === other.unit;
	}
	function compareFixedSizeList(type, other) {
		return type === other || compareConstructor(type, other) && type.listSize === other.listSize && type.children.length === other.children.length && exports.instance.compareManyFields(type.children, other.children);
	}
	function compareMap(type, other) {
		return type === other || compareConstructor(type, other) && type.keysSorted === other.keysSorted && type.children.length === other.children.length && exports.instance.compareManyFields(type.children, other.children);
	}
	TypeComparator.prototype.visitNull = compareAny;
	TypeComparator.prototype.visitBool = compareAny;
	TypeComparator.prototype.visitInt = compareInt;
	TypeComparator.prototype.visitInt8 = compareInt;
	TypeComparator.prototype.visitInt16 = compareInt;
	TypeComparator.prototype.visitInt32 = compareInt;
	TypeComparator.prototype.visitInt64 = compareInt;
	TypeComparator.prototype.visitUint8 = compareInt;
	TypeComparator.prototype.visitUint16 = compareInt;
	TypeComparator.prototype.visitUint32 = compareInt;
	TypeComparator.prototype.visitUint64 = compareInt;
	TypeComparator.prototype.visitFloat = compareFloat;
	TypeComparator.prototype.visitFloat16 = compareFloat;
	TypeComparator.prototype.visitFloat32 = compareFloat;
	TypeComparator.prototype.visitFloat64 = compareFloat;
	TypeComparator.prototype.visitUtf8 = compareAny;
	TypeComparator.prototype.visitLargeUtf8 = compareAny;
	TypeComparator.prototype.visitBinary = compareAny;
	TypeComparator.prototype.visitLargeBinary = compareAny;
	TypeComparator.prototype.visitFixedSizeBinary = compareFixedSizeBinary;
	TypeComparator.prototype.visitDate = compareDate;
	TypeComparator.prototype.visitDateDay = compareDate;
	TypeComparator.prototype.visitDateMillisecond = compareDate;
	TypeComparator.prototype.visitTimestamp = compareTimestamp;
	TypeComparator.prototype.visitTimestampSecond = compareTimestamp;
	TypeComparator.prototype.visitTimestampMillisecond = compareTimestamp;
	TypeComparator.prototype.visitTimestampMicrosecond = compareTimestamp;
	TypeComparator.prototype.visitTimestampNanosecond = compareTimestamp;
	TypeComparator.prototype.visitTime = compareTime;
	TypeComparator.prototype.visitTimeSecond = compareTime;
	TypeComparator.prototype.visitTimeMillisecond = compareTime;
	TypeComparator.prototype.visitTimeMicrosecond = compareTime;
	TypeComparator.prototype.visitTimeNanosecond = compareTime;
	TypeComparator.prototype.visitDecimal = compareAny;
	TypeComparator.prototype.visitList = compareList;
	TypeComparator.prototype.visitStruct = compareStruct;
	TypeComparator.prototype.visitUnion = compareUnion;
	TypeComparator.prototype.visitDenseUnion = compareUnion;
	TypeComparator.prototype.visitSparseUnion = compareUnion;
	TypeComparator.prototype.visitDictionary = compareDictionary;
	TypeComparator.prototype.visitInterval = compareInterval;
	TypeComparator.prototype.visitIntervalDayTime = compareInterval;
	TypeComparator.prototype.visitIntervalYearMonth = compareInterval;
	TypeComparator.prototype.visitIntervalMonthDayNano = compareInterval;
	TypeComparator.prototype.visitDuration = compareDuration;
	TypeComparator.prototype.visitDurationSecond = compareDuration;
	TypeComparator.prototype.visitDurationMillisecond = compareDuration;
	TypeComparator.prototype.visitDurationMicrosecond = compareDuration;
	TypeComparator.prototype.visitDurationNanosecond = compareDuration;
	TypeComparator.prototype.visitFixedSizeList = compareFixedSizeList;
	TypeComparator.prototype.visitMap = compareMap;
	/** @ignore */
	exports.instance = new TypeComparator();
	function compareSchemas(schema, other) {
		return exports.instance.compareSchemas(schema, other);
	}
	exports.compareSchemas = compareSchemas;
	function compareFields(field, other) {
		return exports.instance.compareFields(field, other);
	}
	exports.compareFields = compareFields;
	function compareTypes(type, other) {
		return exports.instance.visit(type, other);
	}
	exports.compareTypes = compareTypes;
}));
//#endregion
//#region node_modules/apache-arrow/factories.js
var require_factories = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.builderThroughAsyncIterable = exports.builderThroughIterable = exports.tableFromJSON = exports.vectorFromArray = exports.makeBuilder = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var schema_js_1 = require_schema();
	var dtypes = require_type();
	var data_js_1 = require_data();
	var vector_js_1 = require_vector();
	var builderctor_js_1 = require_builderctor();
	var table_js_1 = require_table();
	var recordbatch_js_1 = require_recordbatch();
	var typecomparator_js_1 = require_typecomparator();
	function makeBuilder(options) {
		const type = options.type;
		const builder = new (builderctor_js_1.instance.getVisitFn(type)())(options);
		if (type.children && type.children.length > 0) {
			const children = options["children"] || [];
			const defaultOptions = { "nullValues": options["nullValues"] };
			const getChildOptions = Array.isArray(children) ? ((_, i) => children[i] || defaultOptions) : (({ name }) => children[name] || defaultOptions);
			for (const [index, field] of type.children.entries()) {
				const { type } = field;
				const opts = getChildOptions(field, index);
				builder.children.push(makeBuilder(Object.assign(Object.assign({}, opts), { type })));
			}
		}
		return builder;
	}
	exports.makeBuilder = makeBuilder;
	function vectorFromArray(init, type) {
		if (init instanceof data_js_1.Data || init instanceof vector_js_1.Vector || init.type instanceof dtypes.DataType || ArrayBuffer.isView(init)) return (0, vector_js_1.makeVector)(init);
		const chunks = [...builderThroughIterable({
			type: type !== null && type !== void 0 ? type : inferType(init),
			nullValues: [null]
		})(init)];
		const vector = chunks.length === 1 ? chunks[0] : chunks.reduce((a, b) => a.concat(b));
		if (dtypes.DataType.isDictionary(vector.type)) return vector.memoize();
		return vector;
	}
	exports.vectorFromArray = vectorFromArray;
	/**
	* Creates a {@link Table} from an array of objects.
	*
	* @param array A table of objects.
	*/
	function tableFromJSON(array) {
		const vector = vectorFromArray(array);
		const batch = new recordbatch_js_1.RecordBatch(new schema_js_1.Schema(vector.type.children), vector.data[0]);
		return new table_js_1.Table(batch);
	}
	exports.tableFromJSON = tableFromJSON;
	function inferType(value) {
		if (value.length === 0) return new dtypes.Null();
		let nullsCount = 0;
		let arraysCount = 0;
		let objectsCount = 0;
		let numbersCount = 0;
		let stringsCount = 0;
		let bigintsCount = 0;
		let booleansCount = 0;
		let datesCount = 0;
		for (const val of value) {
			if (val == null) {
				++nullsCount;
				continue;
			}
			switch (typeof val) {
				case "bigint":
					++bigintsCount;
					continue;
				case "boolean":
					++booleansCount;
					continue;
				case "number":
					++numbersCount;
					continue;
				case "string":
					++stringsCount;
					continue;
				case "object":
					if (Array.isArray(val)) ++arraysCount;
					else if (Object.prototype.toString.call(val) === "[object Date]") ++datesCount;
					else ++objectsCount;
					continue;
			}
			throw new TypeError("Unable to infer Vector type from input values, explicit type declaration expected.");
		}
		if (numbersCount + nullsCount === value.length) return new dtypes.Float64();
		else if (stringsCount + nullsCount === value.length) return new dtypes.Dictionary(new dtypes.Utf8(), new dtypes.Int32());
		else if (bigintsCount + nullsCount === value.length) return new dtypes.Int64();
		else if (booleansCount + nullsCount === value.length) return new dtypes.Bool();
		else if (datesCount + nullsCount === value.length) return new dtypes.TimestampMillisecond();
		else if (arraysCount + nullsCount === value.length) {
			const array = value;
			const childType = inferType(array[array.findIndex((ary) => ary != null)]);
			if (array.every((ary) => ary == null || (0, typecomparator_js_1.compareTypes)(childType, inferType(ary)))) return new dtypes.List(new schema_js_1.Field("", childType, true));
		} else if (objectsCount + nullsCount === value.length) {
			const fields = /* @__PURE__ */ new Map();
			for (const row of value) for (const key of Object.keys(row)) if (!fields.has(key) && row[key] != null) fields.set(key, new schema_js_1.Field(key, inferType([row[key]]), true));
			return new dtypes.Struct([...fields.values()]);
		}
		throw new TypeError("Unable to infer Vector type from input values, explicit type declaration expected.");
	}
	/**
	* Transform a synchronous `Iterable` of arbitrary JavaScript values into a
	* sequence of Arrow Vector<T> following the chunking semantics defined in
	* the supplied `options` argument.
	*
	* This function returns a function that accepts an `Iterable` of values to
	* transform. When called, this function returns an Iterator of `Vector<T>`.
	*
	* The resulting `Iterator<Vector<T>>` yields Vectors based on the
	* `queueingStrategy` and `highWaterMark` specified in the `options` argument.
	*
	* * If `queueingStrategy` is `"count"` (or omitted), The `Iterator<Vector<T>>`
	*   will flush the underlying `Builder` (and yield a new `Vector<T>`) once the
	*   Builder's `length` reaches or exceeds the supplied `highWaterMark`.
	* * If `queueingStrategy` is `"bytes"`, the `Iterator<Vector<T>>` will flush
	*   the underlying `Builder` (and yield a new `Vector<T>`) once its `byteLength`
	*   reaches or exceeds the supplied `highWaterMark`.
	*
	* @param {IterableBuilderOptions<T, TNull>} options An object of properties which determine the `Builder` to create and the chunking semantics to use.
	* @returns A function which accepts a JavaScript `Iterable` of values to
	*          write, and returns an `Iterator` that yields Vectors according
	*          to the chunking semantics defined in the `options` argument.
	* @nocollapse
	*/
	function builderThroughIterable(options) {
		const { ["queueingStrategy"]: queueingStrategy = "count" } = options;
		const { ["highWaterMark"]: highWaterMark = queueingStrategy !== "bytes" ? Number.POSITIVE_INFINITY : Math.pow(2, 14) } = options;
		const sizeProperty = queueingStrategy !== "bytes" ? "length" : "byteLength";
		return function* (source) {
			let numChunks = 0;
			const builder = makeBuilder(options);
			for (const value of source) if (builder.append(value)[sizeProperty] >= highWaterMark) ++numChunks && (yield builder.toVector());
			if (builder.finish().length > 0 || numChunks === 0) yield builder.toVector();
		};
	}
	exports.builderThroughIterable = builderThroughIterable;
	/**
	* Transform an `AsyncIterable` of arbitrary JavaScript values into a
	* sequence of Arrow Vector<T> following the chunking semantics defined in
	* the supplied `options` argument.
	*
	* This function returns a function that accepts an `AsyncIterable` of values to
	* transform. When called, this function returns an AsyncIterator of `Vector<T>`.
	*
	* The resulting `AsyncIterator<Vector<T>>` yields Vectors based on the
	* `queueingStrategy` and `highWaterMark` specified in the `options` argument.
	*
	* * If `queueingStrategy` is `"count"` (or omitted), The `AsyncIterator<Vector<T>>`
	*   will flush the underlying `Builder` (and yield a new `Vector<T>`) once the
	*   Builder's `length` reaches or exceeds the supplied `highWaterMark`.
	* * If `queueingStrategy` is `"bytes"`, the `AsyncIterator<Vector<T>>` will flush
	*   the underlying `Builder` (and yield a new `Vector<T>`) once its `byteLength`
	*   reaches or exceeds the supplied `highWaterMark`.
	*
	* @param {IterableBuilderOptions<T, TNull>} options An object of properties which determine the `Builder` to create and the chunking semantics to use.
	* @returns A function which accepts a JavaScript `AsyncIterable` of values
	*          to write, and returns an `AsyncIterator` that yields Vectors
	*          according to the chunking semantics defined in the `options`
	*          argument.
	* @nocollapse
	*/
	function builderThroughAsyncIterable(options) {
		const { ["queueingStrategy"]: queueingStrategy = "count" } = options;
		const { ["highWaterMark"]: highWaterMark = queueingStrategy !== "bytes" ? Number.POSITIVE_INFINITY : Math.pow(2, 14) } = options;
		const sizeProperty = queueingStrategy !== "bytes" ? "length" : "byteLength";
		return function(source) {
			return tslib_1.__asyncGenerator(this, arguments, function* () {
				var _a, e_1, _b, _c;
				let numChunks = 0;
				const builder = makeBuilder(options);
				try {
					for (var _d = true, source_1 = tslib_1.__asyncValues(source), source_1_1; source_1_1 = yield tslib_1.__await(source_1.next()), _a = source_1_1.done, !_a; _d = true) {
						_c = source_1_1.value;
						_d = false;
						const value = _c;
						if (builder.append(value)[sizeProperty] >= highWaterMark) ++numChunks && (yield yield tslib_1.__await(builder.toVector()));
					}
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (!_d && !_a && (_b = source_1.return)) yield tslib_1.__await(_b.call(source_1));
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				if (builder.finish().length > 0 || numChunks === 0) yield yield tslib_1.__await(builder.toVector());
			});
		};
	}
	exports.builderThroughAsyncIterable = builderThroughAsyncIterable;
}));
//#endregion
//#region node_modules/apache-arrow/util/recordbatch.js
var require_recordbatch$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.distributeVectorsIntoRecordBatches = void 0;
	var data_js_1 = require_data();
	var type_js_1 = require_type();
	var recordbatch_js_1 = require_recordbatch();
	/** @ignore */
	function distributeVectorsIntoRecordBatches(schema, vecs) {
		return uniformlyDistributeChunksAcrossRecordBatches(schema, vecs.map((v) => v.data.concat()));
	}
	exports.distributeVectorsIntoRecordBatches = distributeVectorsIntoRecordBatches;
	/** @ignore */
	function uniformlyDistributeChunksAcrossRecordBatches(schema, cols) {
		const fields = [...schema.fields];
		const batches = [];
		const memo = { numBatches: cols.reduce((n, c) => Math.max(n, c.length), 0) };
		let numBatches = 0, batchLength = 0;
		let i = -1;
		const numColumns = cols.length;
		let child, children = [];
		while (memo.numBatches-- > 0) {
			for (batchLength = Number.POSITIVE_INFINITY, i = -1; ++i < numColumns;) {
				children[i] = child = cols[i].shift();
				batchLength = Math.min(batchLength, child ? child.length : batchLength);
			}
			if (Number.isFinite(batchLength)) {
				children = distributeChildren(fields, batchLength, children, cols, memo);
				if (batchLength > 0) batches[numBatches++] = (0, data_js_1.makeData)({
					type: new type_js_1.Struct(fields),
					length: batchLength,
					nullCount: 0,
					children: children.slice()
				});
			}
		}
		return [schema = schema.assign(fields), batches.map((data) => new recordbatch_js_1.RecordBatch(schema, data))];
	}
	/** @ignore */
	function distributeChildren(fields, batchLength, children, columns, memo) {
		var _a;
		const nullBitmapSize = (batchLength + 63 & -64) >> 3;
		for (let i = -1, n = columns.length; ++i < n;) {
			const child = children[i];
			const length = child === null || child === void 0 ? void 0 : child.length;
			if (length >= batchLength) if (length === batchLength) children[i] = child;
			else {
				children[i] = child.slice(0, batchLength);
				memo.numBatches = Math.max(memo.numBatches, columns[i].unshift(child.slice(batchLength, length - batchLength)));
			}
			else {
				const field = fields[i];
				fields[i] = field.clone({ nullable: true });
				children[i] = (_a = child === null || child === void 0 ? void 0 : child._changeLengthAndBackfillNullBitmap(batchLength)) !== null && _a !== void 0 ? _a : (0, data_js_1.makeData)({
					type: field.type,
					length: batchLength,
					nullCount: batchLength,
					nullBitmap: new Uint8Array(nullBitmapSize)
				});
			}
		}
		return children;
	}
}));
//#endregion
//#region node_modules/apache-arrow/table.js
var require_table = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.tableFromArrays = exports.makeTable = exports.Table = void 0;
	var enum_js_1 = require_enum();
	var data_js_1 = require_data();
	var factories_js_1 = require_factories();
	var vector_js_1 = require_vector();
	var schema_js_1 = require_schema();
	var type_js_1 = require_type();
	var typecomparator_js_1 = require_typecomparator();
	var recordbatch_js_1 = require_recordbatch$1();
	var chunk_js_1 = require_chunk();
	var get_js_1 = require_get();
	var set_js_1 = require_set();
	var indexof_js_1 = require_indexof();
	var iterator_js_1 = require_iterator();
	var vector_js_2 = require_vector$1();
	var recordbatch_js_2 = require_recordbatch();
	/**
	* Tables are collections of {@link Vector}s and have a {@link Schema}. Use the convenience methods {@link makeTable}
	* or {@link tableFromArrays} to create a table in JavaScript. To create a table from the IPC format, use
	* {@link tableFromIPC}.
	*/
	var Table = class Table {
		constructor(...args) {
			var _b, _c;
			if (args.length === 0) {
				this.batches = [];
				this.schema = new schema_js_1.Schema([]);
				this._offsets = [0];
				return this;
			}
			let schema;
			let offsets;
			if (args[0] instanceof schema_js_1.Schema) schema = args.shift();
			if (args.at(-1) instanceof Uint32Array) offsets = args.pop();
			const unwrap = (x) => {
				if (x) {
					if (x instanceof recordbatch_js_2.RecordBatch) return [x];
					else if (x instanceof Table) return x.batches;
					else if (x instanceof data_js_1.Data) {
						if (x.type instanceof type_js_1.Struct) return [new recordbatch_js_2.RecordBatch(new schema_js_1.Schema(x.type.children), x)];
					} else if (Array.isArray(x)) return x.flatMap((v) => unwrap(v));
					else if (typeof x[Symbol.iterator] === "function") return [...x].flatMap((v) => unwrap(v));
					else if (typeof x === "object") {
						const keys = Object.keys(x);
						const vecs = keys.map((k) => new vector_js_1.Vector([x[k]]));
						const batchSchema = schema !== null && schema !== void 0 ? schema : new schema_js_1.Schema(keys.map((k, i) => new schema_js_1.Field(String(k), vecs[i].type, vecs[i].nullable)));
						const [, batches] = (0, recordbatch_js_1.distributeVectorsIntoRecordBatches)(batchSchema, vecs);
						return batches.length === 0 ? [new recordbatch_js_2.RecordBatch(x)] : batches;
					}
				}
				return [];
			};
			const batches = args.flatMap((v) => unwrap(v));
			schema = (_c = schema !== null && schema !== void 0 ? schema : (_b = batches[0]) === null || _b === void 0 ? void 0 : _b.schema) !== null && _c !== void 0 ? _c : new schema_js_1.Schema([]);
			if (!(schema instanceof schema_js_1.Schema)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
			for (const batch of batches) {
				if (!(batch instanceof recordbatch_js_2.RecordBatch)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
				if (!(0, typecomparator_js_1.compareSchemas)(schema, batch.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.");
			}
			this.schema = schema;
			this.batches = batches;
			this._offsets = offsets !== null && offsets !== void 0 ? offsets : (0, chunk_js_1.computeChunkOffsets)(this.data);
		}
		/**
		* The contiguous {@link RecordBatch `RecordBatch`} chunks of the Table rows.
		*/
		get data() {
			return this.batches.map(({ data }) => data);
		}
		/**
		* The number of columns in this Table.
		*/
		get numCols() {
			return this.schema.fields.length;
		}
		/**
		* The number of rows in this Table.
		*/
		get numRows() {
			return this.data.reduce((numRows, data) => numRows + data.length, 0);
		}
		/**
		* The number of null rows in this Table.
		*/
		get nullCount() {
			if (this._nullCount === -1) this._nullCount = (0, chunk_js_1.computeChunkNullCounts)(this.data);
			return this._nullCount;
		}
		/**
		* Check whether an element is null.
		*
		* @param index The index at which to read the validity bitmap.
		*/
		isValid(index) {
			return false;
		}
		/**
		* Get an element value by position.
		*
		* @param index The index of the element to read.
		*/
		get(index) {
			return null;
		}
		/**
		* Get an element value by position.
		* @param index The index of the element to read. A negative index will count back from the last element.
		*/
		at(index) {
			return this.get((0, vector_js_2.wrapIndex)(index, this.numRows));
		}
		/**
		* Set an element value by position.
		*
		* @param index The index of the element to write.
		* @param value The value to set.
		*/
		set(index, value) {}
		/**
		* Retrieve the index of the first occurrence of a value in an Vector.
		*
		* @param element The value to locate in the Vector.
		* @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
		*/
		indexOf(element, offset) {
			return -1;
		}
		/**
		* Iterator for rows in this Table.
		*/
		[Symbol.iterator]() {
			if (this.batches.length > 0) return iterator_js_1.instance.visit(new vector_js_1.Vector(this.data));
			return new Array(0)[Symbol.iterator]();
		}
		/**
		* Return a JavaScript Array of the Table rows.
		*
		* @returns An Array of Table rows.
		*/
		toArray() {
			return [...this];
		}
		/**
		* Returns a string representation of the Table rows.
		*
		* @returns A string representation of the Table rows.
		*/
		toString() {
			return `[\n  ${this.toArray().join(",\n  ")}\n]`;
		}
		/**
		* Combines two or more Tables of the same schema.
		*
		* @param others Additional Tables to add to the end of this Tables.
		*/
		concat(...others) {
			const schema = this.schema;
			return new Table(schema, this.data.concat(others.flatMap(({ data }) => data)).map((data) => new recordbatch_js_2.RecordBatch(schema, data)));
		}
		/**
		* Return a zero-copy sub-section of this Table.
		*
		* @param begin The beginning of the specified portion of the Table.
		* @param end The end of the specified portion of the Table. This is exclusive of the element at the index 'end'.
		*/
		slice(begin, end) {
			const schema = this.schema;
			[begin, end] = (0, vector_js_2.clampRange)({ length: this.numRows }, begin, end);
			return new Table(schema, (0, chunk_js_1.sliceChunks)(this.data, this._offsets, begin, end).map((chunk) => new recordbatch_js_2.RecordBatch(schema, chunk)));
		}
		/**
		* Returns a child Vector by name, or null if this Vector has no child with the given name.
		*
		* @param name The name of the child to retrieve.
		*/
		getChild(name) {
			return this.getChildAt(this.schema.fields.findIndex((f) => f.name === name));
		}
		/**
		* Returns a child Vector by index, or null if this Vector has no child at the supplied index.
		*
		* @param index The index of the child to retrieve.
		*/
		getChildAt(index) {
			if (index > -1 && index < this.schema.fields.length) {
				const data = this.data.map((data) => data.children[index]);
				if (data.length === 0) {
					const { type } = this.schema.fields[index];
					const empty = (0, data_js_1.makeData)({
						type,
						length: 0,
						nullCount: 0
					});
					data.push(empty._changeLengthAndBackfillNullBitmap(this.numRows));
				}
				return new vector_js_1.Vector(data);
			}
			return null;
		}
		/**
		* Sets a child Vector by name.
		*
		* @param name The name of the child to overwrite.
		* @returns A new Table with the supplied child for the specified name.
		*/
		setChild(name, child) {
			var _b;
			return this.setChildAt((_b = this.schema.fields) === null || _b === void 0 ? void 0 : _b.findIndex((f) => f.name === name), child);
		}
		setChildAt(index, child) {
			let schema = this.schema;
			let batches = [...this.batches];
			if (index > -1 && index < this.numCols) {
				if (!child) child = new vector_js_1.Vector([(0, data_js_1.makeData)({
					type: new type_js_1.Null(),
					length: this.numRows
				})]);
				const fields = schema.fields.slice();
				const field = fields[index].clone({ type: child.type });
				const children = this.schema.fields.map((_, i) => this.getChildAt(i));
				[fields[index], children[index]] = [field, child];
				[schema, batches] = (0, recordbatch_js_1.distributeVectorsIntoRecordBatches)(schema, children);
			}
			return new Table(schema, batches);
		}
		/**
		* Construct a new Table containing only specified columns.
		*
		* @param columnNames Names of columns to keep.
		* @returns A new Table of columns matching the specified names.
		*/
		select(columnNames) {
			const nameToIndex = this.schema.fields.reduce((m, f, i) => m.set(f.name, i), /* @__PURE__ */ new Map());
			return this.selectAt(columnNames.map((columnName) => nameToIndex.get(columnName)).filter((x) => x > -1));
		}
		/**
		* Construct a new Table containing only columns at the specified indices.
		*
		* @param columnIndices Indices of columns to keep.
		* @returns A new Table of columns at the specified indices.
		*/
		selectAt(columnIndices) {
			return new Table(this.schema.selectAt(columnIndices), this.batches.map((batch) => batch.selectAt(columnIndices)));
		}
		assign(other) {
			const fields = this.schema.fields;
			const [indices, oldToNew] = other.schema.fields.reduce((memo, f2, newIdx) => {
				const [indices, oldToNew] = memo;
				const i = fields.findIndex((f) => f.name === f2.name);
				~i ? oldToNew[i] = newIdx : indices.push(newIdx);
				return memo;
			}, [[], []]);
			const schema = this.schema.assign(other.schema);
			const columns = [...fields.map((_, i) => [i, oldToNew[i]]).map(([i, j]) => j === void 0 ? this.getChildAt(i) : other.getChildAt(j)), ...indices.map((i) => other.getChildAt(i))].filter(Boolean);
			return new Table(...(0, recordbatch_js_1.distributeVectorsIntoRecordBatches)(schema, columns));
		}
	};
	exports.Table = Table;
	_a = Symbol.toStringTag;
	Table[_a] = ((proto) => {
		proto.schema = null;
		proto.batches = [];
		proto._offsets = new Uint32Array([0]);
		proto._nullCount = -1;
		proto[Symbol.isConcatSpreadable] = true;
		proto["isValid"] = (0, chunk_js_1.wrapChunkedCall1)(chunk_js_1.isChunkedValid);
		proto["get"] = (0, chunk_js_1.wrapChunkedCall1)(get_js_1.instance.getVisitFn(enum_js_1.Type.Struct));
		proto["set"] = (0, chunk_js_1.wrapChunkedCall2)(set_js_1.instance.getVisitFn(enum_js_1.Type.Struct));
		proto["indexOf"] = (0, chunk_js_1.wrapChunkedIndexOf)(indexof_js_1.instance.getVisitFn(enum_js_1.Type.Struct));
		return "Table";
	})(Table.prototype);
	/**
	* Creates a new Table from an object of typed arrays.
	*
	*  @example
	* ```ts
	* const table = makeTable({
	*   a: new Int8Array([1, 2, 3]),
	* })
	* ```
	*
	* @param input Input an object of typed arrays.
	* @returns A new Table.
	*/
	function makeTable(input) {
		const vecs = {};
		const inputs = Object.entries(input);
		for (const [key, col] of inputs) vecs[key] = (0, vector_js_1.makeVector)(col);
		return new Table(vecs);
	}
	exports.makeTable = makeTable;
	/**
	* Creates a new Table from an object of typed arrays or JavaScript arrays.
	*
	*  @example
	* ```ts
	* const table = tableFromArrays({
	*   a: [1, 2, 3],
	*   b: new Int8Array([1, 2, 3]),
	* })
	* ```
	*
	* @param input Input an object of typed arrays or JavaScript arrays.
	* @returns A new Table.
	*/
	function tableFromArrays(input) {
		const vecs = {};
		const inputs = Object.entries(input);
		for (const [key, col] of inputs) vecs[key] = (0, factories_js_1.vectorFromArray)(col);
		return new Table(vecs);
	}
	exports.tableFromArrays = tableFromArrays;
}));
//#endregion
//#region node_modules/apache-arrow/recordbatch.js
var require_recordbatch = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports._InternalEmptyPlaceholderRecordBatch = exports.RecordBatch = void 0;
	var data_js_1 = require_data();
	var table_js_1 = require_table();
	var vector_js_1 = require_vector();
	var schema_js_1 = require_schema();
	var type_js_1 = require_type();
	var vector_js_2 = require_vector$1();
	var get_js_1 = require_get();
	var set_js_1 = require_set();
	var indexof_js_1 = require_indexof();
	var iterator_js_1 = require_iterator();
	/** @ignore */
	var RecordBatch = class RecordBatch {
		constructor(...args) {
			switch (args.length) {
				case 2:
					[this.schema] = args;
					if (!(this.schema instanceof schema_js_1.Schema)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
					[, this.data = (0, data_js_1.makeData)({
						nullCount: 0,
						type: new type_js_1.Struct(this.schema.fields),
						children: this.schema.fields.map((f) => (0, data_js_1.makeData)({
							type: f.type,
							nullCount: 0
						}))
					})] = args;
					if (!(this.data instanceof data_js_1.Data)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
					[this.schema, this.data] = ensureSameLengthData(this.schema, this.data.children);
					break;
				case 1: {
					const [obj] = args;
					const { fields, children, length } = Object.keys(obj).reduce((memo, name, i) => {
						memo.children[i] = obj[name];
						memo.length = Math.max(memo.length, obj[name].length);
						memo.fields[i] = schema_js_1.Field.new({
							name,
							type: obj[name].type,
							nullable: true
						});
						return memo;
					}, {
						length: 0,
						fields: new Array(),
						children: new Array()
					});
					const schema = new schema_js_1.Schema(fields);
					const data = (0, data_js_1.makeData)({
						type: new type_js_1.Struct(fields),
						length,
						children,
						nullCount: 0
					});
					[this.schema, this.data] = ensureSameLengthData(schema, data.children, length);
					break;
				}
				default: throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.");
			}
		}
		get dictionaries() {
			return this._dictionaries || (this._dictionaries = collectDictionaries(this.schema.fields, this.data.children));
		}
		/**
		* The number of columns in this RecordBatch.
		*/
		get numCols() {
			return this.schema.fields.length;
		}
		/**
		* The number of rows in this RecordBatch.
		*/
		get numRows() {
			return this.data.length;
		}
		/**
		* The number of null rows in this RecordBatch.
		*/
		get nullCount() {
			return this.data.nullCount;
		}
		/**
		* Check whether an row is null.
		* @param index The index at which to read the validity bitmap.
		*/
		isValid(index) {
			return this.data.getValid(index);
		}
		/**
		* Get a row by position.
		* @param index The index of the row to read.
		*/
		get(index) {
			return get_js_1.instance.visit(this.data, index);
		}
		/**
		* Get a row value by position.
		* @param index The index of the row to read. A negative index will count back from the last row.
		*/
		at(index) {
			return this.get((0, vector_js_2.wrapIndex)(index, this.numRows));
		}
		/**
		* Set a row by position.
		* @param index The index of the row to write.
		* @param value The value to set.
		*/
		set(index, value) {
			return set_js_1.instance.visit(this.data, index, value);
		}
		/**
		* Retrieve the index of the first occurrence of a row in an RecordBatch.
		* @param element The row to locate in the RecordBatch.
		* @param offset The index at which to begin the search. If offset is omitted, the search starts at index 0.
		*/
		indexOf(element, offset) {
			return indexof_js_1.instance.visit(this.data, element, offset);
		}
		/**
		* Iterator for rows in this RecordBatch.
		*/
		[Symbol.iterator]() {
			return iterator_js_1.instance.visit(new vector_js_1.Vector([this.data]));
		}
		/**
		* Return a JavaScript Array of the RecordBatch rows.
		* @returns An Array of RecordBatch rows.
		*/
		toArray() {
			return [...this];
		}
		/**
		* Combines two or more RecordBatch of the same schema.
		* @param others Additional RecordBatch to add to the end of this RecordBatch.
		*/
		concat(...others) {
			return new table_js_1.Table(this.schema, [this, ...others]);
		}
		/**
		* Return a zero-copy sub-section of this RecordBatch.
		* @param start The beginning of the specified portion of the RecordBatch.
		* @param end The end of the specified portion of the RecordBatch. This is exclusive of the row at the index 'end'.
		*/
		slice(begin, end) {
			const [slice] = new vector_js_1.Vector([this.data]).slice(begin, end).data;
			return new RecordBatch(this.schema, slice);
		}
		/**
		* Returns a child Vector by name, or null if this Vector has no child with the given name.
		* @param name The name of the child to retrieve.
		*/
		getChild(name) {
			var _b;
			return this.getChildAt((_b = this.schema.fields) === null || _b === void 0 ? void 0 : _b.findIndex((f) => f.name === name));
		}
		/**
		* Returns a child Vector by index, or null if this Vector has no child at the supplied index.
		* @param index The index of the child to retrieve.
		*/
		getChildAt(index) {
			if (index > -1 && index < this.schema.fields.length) return new vector_js_1.Vector([this.data.children[index]]);
			return null;
		}
		/**
		* Sets a child Vector by name.
		* @param name The name of the child to overwrite.
		* @returns A new RecordBatch with the new child for the specified name.
		*/
		setChild(name, child) {
			var _b;
			return this.setChildAt((_b = this.schema.fields) === null || _b === void 0 ? void 0 : _b.findIndex((f) => f.name === name), child);
		}
		setChildAt(index, child) {
			let schema = this.schema;
			let data = this.data;
			if (index > -1 && index < this.numCols) {
				if (!child) child = new vector_js_1.Vector([(0, data_js_1.makeData)({
					type: new type_js_1.Null(),
					length: this.numRows
				})]);
				const fields = schema.fields.slice();
				const children = data.children.slice();
				const field = fields[index].clone({ type: child.type });
				[fields[index], children[index]] = [field, child.data[0]];
				schema = new schema_js_1.Schema(fields, new Map(this.schema.metadata));
				data = (0, data_js_1.makeData)({
					type: new type_js_1.Struct(fields),
					children
				});
			}
			return new RecordBatch(schema, data);
		}
		/**
		* Construct a new RecordBatch containing only specified columns.
		*
		* @param columnNames Names of columns to keep.
		* @returns A new RecordBatch of columns matching the specified names.
		*/
		select(columnNames) {
			const schema = this.schema.select(columnNames);
			const type = new type_js_1.Struct(schema.fields);
			const children = [];
			for (const name of columnNames) {
				const index = this.schema.fields.findIndex((f) => f.name === name);
				if (~index) children[index] = this.data.children[index];
			}
			return new RecordBatch(schema, (0, data_js_1.makeData)({
				type,
				length: this.numRows,
				children
			}));
		}
		/**
		* Construct a new RecordBatch containing only columns at the specified indices.
		*
		* @param columnIndices Indices of columns to keep.
		* @returns A new RecordBatch of columns matching at the specified indices.
		*/
		selectAt(columnIndices) {
			const schema = this.schema.selectAt(columnIndices);
			const children = columnIndices.map((i) => this.data.children[i]).filter(Boolean);
			return new RecordBatch(schema, (0, data_js_1.makeData)({
				type: new type_js_1.Struct(schema.fields),
				length: this.numRows,
				children
			}));
		}
	};
	exports.RecordBatch = RecordBatch;
	_a = Symbol.toStringTag;
	RecordBatch[_a] = ((proto) => {
		proto._nullCount = -1;
		proto[Symbol.isConcatSpreadable] = true;
		return "RecordBatch";
	})(RecordBatch.prototype);
	/** @ignore */
	function ensureSameLengthData(schema, chunks, maxLength = chunks.reduce((max, col) => Math.max(max, col.length), 0)) {
		var _b;
		const fields = [...schema.fields];
		const children = [...chunks];
		const nullBitmapSize = (maxLength + 63 & -64) >> 3;
		for (const [idx, field] of schema.fields.entries()) {
			const chunk = chunks[idx];
			if (!chunk || chunk.length !== maxLength) {
				fields[idx] = field.clone({ nullable: true });
				children[idx] = (_b = chunk === null || chunk === void 0 ? void 0 : chunk._changeLengthAndBackfillNullBitmap(maxLength)) !== null && _b !== void 0 ? _b : (0, data_js_1.makeData)({
					type: field.type,
					length: maxLength,
					nullCount: maxLength,
					nullBitmap: new Uint8Array(nullBitmapSize)
				});
			}
		}
		return [schema.assign(fields), (0, data_js_1.makeData)({
			type: new type_js_1.Struct(fields),
			length: maxLength,
			children
		})];
	}
	/** @ignore */
	function collectDictionaries(fields, children, dictionaries = /* @__PURE__ */ new Map()) {
		var _b, _c;
		if (((_b = fields === null || fields === void 0 ? void 0 : fields.length) !== null && _b !== void 0 ? _b : 0) > 0 && (fields === null || fields === void 0 ? void 0 : fields.length) === (children === null || children === void 0 ? void 0 : children.length)) for (let i = -1, n = fields.length; ++i < n;) {
			const { type } = fields[i];
			const data = children[i];
			for (const next of [data, ...((_c = data === null || data === void 0 ? void 0 : data.dictionary) === null || _c === void 0 ? void 0 : _c.data) || []]) collectDictionaries(type.children, next === null || next === void 0 ? void 0 : next.children, dictionaries);
			if (type_js_1.DataType.isDictionary(type)) {
				const { id } = type;
				if (!dictionaries.has(id)) {
					if (data === null || data === void 0 ? void 0 : data.dictionary) dictionaries.set(id, data.dictionary);
				} else if (dictionaries.get(id) !== data.dictionary) throw new Error(`Cannot create Schema containing two different dictionaries with the same Id`);
			}
		}
		return dictionaries;
	}
	/**
	* An internal class used by the `RecordBatchReader` and `RecordBatchWriter`
	* implementations to differentiate between a stream with valid zero-length
	* RecordBatches, and a stream with a Schema message, but no RecordBatches.
	* @see https://github.com/apache/arrow/pull/4373
	* @ignore
	* @private
	*/
	var _InternalEmptyPlaceholderRecordBatch = class extends RecordBatch {
		constructor(schema) {
			const children = schema.fields.map((f) => (0, data_js_1.makeData)({ type: f.type }));
			const data = (0, data_js_1.makeData)({
				type: new type_js_1.Struct(schema.fields),
				nullCount: 0,
				children
			});
			super(schema, data);
		}
	};
	exports._InternalEmptyPlaceholderRecordBatch = _InternalEmptyPlaceholderRecordBatch;
}));
//#endregion
//#region node_modules/apache-arrow/ipc/message.js
var require_message = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.magicX2AndPadding = exports.magicAndPadding = exports.magicLength = exports.checkForMagicArrowString = exports.MAGIC = exports.MAGIC_STR = exports.PADDING = exports.JSONMessageReader = exports.AsyncMessageReader = exports.MessageReader = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var enum_js_1 = require_enum();
	var flatbuffers_1 = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var message_js_1 = require_message$1();
	var compat_js_1 = require_compat();
	var file_js_1 = require_file();
	var buffer_js_1 = require_buffer$2();
	var stream_js_1 = require_stream();
	var interfaces_js_1 = require_interfaces();
	/** @ignore */ var invalidMessageType = (type) => `Expected ${enum_js_1.MessageHeader[type]} Message in stream, but was null or length 0.`;
	/** @ignore */ var nullMessage = (type) => `Header pointer of flatbuffer-encoded ${enum_js_1.MessageHeader[type]} Message is null or length 0.`;
	/** @ignore */ var invalidMessageMetadata = (expected, actual) => `Expected to read ${expected} metadata bytes, but only read ${actual}.`;
	/** @ignore */ var invalidMessageBodyLength = (expected, actual) => `Expected to read ${expected} bytes for message body, but only read ${actual}.`;
	/** @ignore */
	var MessageReader = class {
		constructor(source) {
			this.source = source instanceof stream_js_1.ByteStream ? source : new stream_js_1.ByteStream(source);
		}
		[Symbol.iterator]() {
			return this;
		}
		next() {
			let r;
			if ((r = this.readMetadataLength()).done) return interfaces_js_1.ITERATOR_DONE;
			if (r.value === -1 && (r = this.readMetadataLength()).done) return interfaces_js_1.ITERATOR_DONE;
			if ((r = this.readMetadata(r.value)).done) return interfaces_js_1.ITERATOR_DONE;
			return r;
		}
		throw(value) {
			return this.source.throw(value);
		}
		return(value) {
			return this.source.return(value);
		}
		readMessage(type) {
			let r;
			if ((r = this.next()).done) return null;
			if (type != null && r.value.headerType !== type) throw new Error(invalidMessageType(type));
			return r.value;
		}
		readMessageBody(bodyLength) {
			if (bodyLength <= 0) return new Uint8Array(0);
			const buf = (0, buffer_js_1.toUint8Array)(this.source.read(bodyLength));
			if (buf.byteLength < bodyLength) throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
			return buf.byteOffset % 8 === 0 && buf.byteOffset + buf.byteLength <= buf.buffer.byteLength ? buf : buf.slice();
		}
		readSchema(throwIfNull = false) {
			const type = enum_js_1.MessageHeader.Schema;
			const message = this.readMessage(type);
			const schema = message === null || message === void 0 ? void 0 : message.header();
			if (throwIfNull && !schema) throw new Error(nullMessage(type));
			return schema;
		}
		readMetadataLength() {
			const buf = this.source.read(exports.PADDING);
			const bb = buf && new flatbuffers_1.ByteBuffer(buf);
			const len = (bb === null || bb === void 0 ? void 0 : bb.readInt32(0)) || 0;
			return {
				done: len === 0,
				value: len
			};
		}
		readMetadata(metadataLength) {
			const buf = this.source.read(metadataLength);
			if (!buf) return interfaces_js_1.ITERATOR_DONE;
			if (buf.byteLength < metadataLength) throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
			return {
				done: false,
				value: message_js_1.Message.decode(buf)
			};
		}
	};
	exports.MessageReader = MessageReader;
	/** @ignore */
	var AsyncMessageReader = class {
		constructor(source, byteLength) {
			this.source = source instanceof stream_js_1.AsyncByteStream ? source : (0, compat_js_1.isFileHandle)(source) ? new file_js_1.AsyncRandomAccessFile(source, byteLength) : new stream_js_1.AsyncByteStream(source);
		}
		[Symbol.asyncIterator]() {
			return this;
		}
		next() {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				let r;
				if ((r = yield this.readMetadataLength()).done) return interfaces_js_1.ITERATOR_DONE;
				if (r.value === -1 && (r = yield this.readMetadataLength()).done) return interfaces_js_1.ITERATOR_DONE;
				if ((r = yield this.readMetadata(r.value)).done) return interfaces_js_1.ITERATOR_DONE;
				return r;
			});
		}
		throw(value) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				return yield this.source.throw(value);
			});
		}
		return(value) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				return yield this.source.return(value);
			});
		}
		readMessage(type) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				let r;
				if ((r = yield this.next()).done) return null;
				if (type != null && r.value.headerType !== type) throw new Error(invalidMessageType(type));
				return r.value;
			});
		}
		readMessageBody(bodyLength) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				if (bodyLength <= 0) return new Uint8Array(0);
				const buf = (0, buffer_js_1.toUint8Array)(yield this.source.read(bodyLength));
				if (buf.byteLength < bodyLength) throw new Error(invalidMessageBodyLength(bodyLength, buf.byteLength));
				return buf.byteOffset % 8 === 0 && buf.byteOffset + buf.byteLength <= buf.buffer.byteLength ? buf : buf.slice();
			});
		}
		readSchema() {
			return tslib_1.__awaiter(this, arguments, void 0, function* (throwIfNull = false) {
				const type = enum_js_1.MessageHeader.Schema;
				const message = yield this.readMessage(type);
				const schema = message === null || message === void 0 ? void 0 : message.header();
				if (throwIfNull && !schema) throw new Error(nullMessage(type));
				return schema;
			});
		}
		readMetadataLength() {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				const buf = yield this.source.read(exports.PADDING);
				const bb = buf && new flatbuffers_1.ByteBuffer(buf);
				const len = (bb === null || bb === void 0 ? void 0 : bb.readInt32(0)) || 0;
				return {
					done: len === 0,
					value: len
				};
			});
		}
		readMetadata(metadataLength) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				const buf = yield this.source.read(metadataLength);
				if (!buf) return interfaces_js_1.ITERATOR_DONE;
				if (buf.byteLength < metadataLength) throw new Error(invalidMessageMetadata(metadataLength, buf.byteLength));
				return {
					done: false,
					value: message_js_1.Message.decode(buf)
				};
			});
		}
	};
	exports.AsyncMessageReader = AsyncMessageReader;
	/** @ignore */
	var JSONMessageReader = class extends MessageReader {
		constructor(source) {
			super(new Uint8Array(0));
			this._schema = false;
			this._body = [];
			this._batchIndex = 0;
			this._dictionaryIndex = 0;
			this._json = source instanceof interfaces_js_1.ArrowJSON ? source : new interfaces_js_1.ArrowJSON(source);
		}
		next() {
			const { _json } = this;
			if (!this._schema) {
				this._schema = true;
				return {
					done: false,
					value: message_js_1.Message.fromJSON(_json.schema, enum_js_1.MessageHeader.Schema)
				};
			}
			if (this._dictionaryIndex < _json.dictionaries.length) {
				const batch = _json.dictionaries[this._dictionaryIndex++];
				this._body = batch["data"]["columns"];
				return {
					done: false,
					value: message_js_1.Message.fromJSON(batch, enum_js_1.MessageHeader.DictionaryBatch)
				};
			}
			if (this._batchIndex < _json.batches.length) {
				const batch = _json.batches[this._batchIndex++];
				this._body = batch["columns"];
				return {
					done: false,
					value: message_js_1.Message.fromJSON(batch, enum_js_1.MessageHeader.RecordBatch)
				};
			}
			this._body = [];
			return interfaces_js_1.ITERATOR_DONE;
		}
		readMessageBody(_bodyLength) {
			return flattenDataSources(this._body);
			function flattenDataSources(xs) {
				return (xs || []).reduce((buffers, column) => [
					...buffers,
					...column["VALIDITY"] && [column["VALIDITY"]] || [],
					...column["TYPE_ID"] && [column["TYPE_ID"]] || [],
					...column["OFFSET"] && [column["OFFSET"]] || [],
					...column["DATA"] && [column["DATA"]] || [],
					...flattenDataSources(column["children"])
				], []);
			}
		}
		readMessage(type) {
			let r;
			if ((r = this.next()).done) return null;
			if (type != null && r.value.headerType !== type) throw new Error(invalidMessageType(type));
			return r.value;
		}
		readSchema() {
			const type = enum_js_1.MessageHeader.Schema;
			const message = this.readMessage(type);
			const schema = message === null || message === void 0 ? void 0 : message.header();
			if (!message || !schema) throw new Error(nullMessage(type));
			return schema;
		}
	};
	exports.JSONMessageReader = JSONMessageReader;
	/** @ignore */
	exports.PADDING = 4;
	/** @ignore */
	exports.MAGIC_STR = "ARROW1";
	/** @ignore */
	exports.MAGIC = new Uint8Array(exports.MAGIC_STR.length);
	for (let i = 0; i < exports.MAGIC_STR.length; i += 1) exports.MAGIC[i] = exports.MAGIC_STR.codePointAt(i);
	/** @ignore */
	function checkForMagicArrowString(buffer, index = 0) {
		for (let i = -1, n = exports.MAGIC.length; ++i < n;) if (exports.MAGIC[i] !== buffer[index + i]) return false;
		return true;
	}
	exports.checkForMagicArrowString = checkForMagicArrowString;
	/** @ignore */
	exports.magicLength = exports.MAGIC.length;
	/** @ignore */
	exports.magicAndPadding = exports.magicLength + exports.PADDING;
	/** @ignore */
	exports.magicX2AndPadding = exports.magicLength * 2 + exports.PADDING;
}));
//#endregion
//#region node_modules/apache-arrow/ipc/compression/validators.js
var require_validators = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.compressionValidators = void 0;
	var compression_type_js_1 = require_compression_type();
	var Lz4FrameValidator = class {
		constructor() {
			this.LZ4_FRAME_MAGIC = new Uint8Array([
				4,
				34,
				77,
				24
			]);
			this.MIN_HEADER_LENGTH = 7;
		}
		isValidCodecEncode(codec) {
			const testData = new Uint8Array([
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8
			]);
			const compressed = codec.encode(testData);
			return this._isValidCompressed(compressed);
		}
		_isValidCompressed(buffer) {
			return this._hasMinimumLength(buffer) && this._hasValidMagicNumber(buffer) && this._hasValidVersion(buffer);
		}
		_hasMinimumLength(buffer) {
			return buffer.length >= this.MIN_HEADER_LENGTH;
		}
		_hasValidMagicNumber(buffer) {
			return this.LZ4_FRAME_MAGIC.every((byte, i) => buffer[i] === byte);
		}
		_hasValidVersion(buffer) {
			return (buffer[4] & 192) >> 6 === 1;
		}
	};
	var ZstdValidator = class {
		constructor() {
			this.ZSTD_MAGIC = new Uint8Array([
				40,
				181,
				47,
				253
			]);
			this.MIN_HEADER_LENGTH = 6;
		}
		isValidCodecEncode(codec) {
			const testData = new Uint8Array([
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8
			]);
			const compressed = codec.encode(testData);
			return this._isValidCompressed(compressed);
		}
		_isValidCompressed(buffer) {
			return this._hasMinimumLength(buffer) && this._hasValidMagicNumber(buffer);
		}
		_hasMinimumLength(buffer) {
			return buffer.length >= this.MIN_HEADER_LENGTH;
		}
		_hasValidMagicNumber(buffer) {
			return this.ZSTD_MAGIC.every((byte, i) => buffer[i] === byte);
		}
	};
	exports.compressionValidators = {
		[compression_type_js_1.CompressionType.LZ4_FRAME]: new Lz4FrameValidator(),
		[compression_type_js_1.CompressionType.ZSTD]: new ZstdValidator()
	};
}));
//#endregion
//#region node_modules/apache-arrow/ipc/compression/registry.js
var require_registry = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.compressionRegistry = void 0;
	var compression_type_js_1 = require_compression_type();
	var validators_js_1 = require_validators();
	var _CompressionRegistry = class {
		constructor() {
			this.registry = {};
		}
		set(compression, codec) {
			if ((codec === null || codec === void 0 ? void 0 : codec.encode) && typeof codec.encode === "function" && !validators_js_1.compressionValidators[compression].isValidCodecEncode(codec)) throw new Error(`Encoder for ${compression_type_js_1.CompressionType[compression]} is not valid.`);
			this.registry[compression] = codec;
		}
		get(compression) {
			var _a;
			return ((_a = this.registry) === null || _a === void 0 ? void 0 : _a[compression]) || null;
		}
	};
	exports.compressionRegistry = new _CompressionRegistry();
}));
//#endregion
//#region node_modules/apache-arrow/ipc/compression/constants.js
var require_constants = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.COMPRESS_LENGTH_PREFIX = exports.LENGTH_NO_COMPRESSED_DATA = void 0;
	exports.LENGTH_NO_COMPRESSED_DATA = -1;
	exports.COMPRESS_LENGTH_PREFIX = 8;
}));
//#endregion
//#region node_modules/apache-arrow/ipc/reader.js
var require_reader$2 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.AsyncRecordBatchFileReader = exports.RecordBatchFileReader = exports.AsyncRecordBatchStreamReader = exports.RecordBatchStreamReader = exports.RecordBatchReader = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var data_js_1 = require_data();
	var vector_js_1 = require_vector();
	var type_js_1 = require_type();
	var enum_js_1 = require_enum();
	var file_js_1 = require_file$1();
	var adapters_js_1 = require_adapters();
	var metadata = require_message$1();
	var stream_js_1 = require_stream();
	var file_js_2 = require_file();
	var vectorloader_js_1 = require_vectorloader();
	var recordbatch_js_1 = require_recordbatch();
	var interfaces_js_1 = require_interfaces();
	var message_js_1 = require_message();
	var compat_js_1 = require_compat();
	var registry_js_1 = require_registry();
	var bigint_js_1 = require_bigint();
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var constants_js_1 = require_constants();
	var RecordBatchReader = class RecordBatchReader extends interfaces_js_1.ReadableInterop {
		constructor(impl) {
			super();
			this._impl = impl;
		}
		get closed() {
			return this._impl.closed;
		}
		get schema() {
			return this._impl.schema;
		}
		get autoDestroy() {
			return this._impl.autoDestroy;
		}
		get dictionaries() {
			return this._impl.dictionaries;
		}
		get numDictionaries() {
			return this._impl.numDictionaries;
		}
		get numRecordBatches() {
			return this._impl.numRecordBatches;
		}
		get footer() {
			return this._impl.isFile() ? this._impl.footer : null;
		}
		isSync() {
			return this._impl.isSync();
		}
		isAsync() {
			return this._impl.isAsync();
		}
		isFile() {
			return this._impl.isFile();
		}
		isStream() {
			return this._impl.isStream();
		}
		next() {
			return this._impl.next();
		}
		throw(value) {
			return this._impl.throw(value);
		}
		return(value) {
			return this._impl.return(value);
		}
		cancel() {
			return this._impl.cancel();
		}
		reset(schema) {
			this._impl.reset(schema);
			this._DOMStream = void 0;
			this._nodeStream = void 0;
			return this;
		}
		open(options) {
			const opening = this._impl.open(options);
			return (0, compat_js_1.isPromise)(opening) ? opening.then(() => this) : this;
		}
		readRecordBatch(index) {
			return this._impl.isFile() ? this._impl.readRecordBatch(index) : null;
		}
		[Symbol.iterator]() {
			return this._impl[Symbol.iterator]();
		}
		[Symbol.asyncIterator]() {
			return this._impl[Symbol.asyncIterator]();
		}
		toDOMStream() {
			return adapters_js_1.default.toDOMStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this });
		}
		toNodeStream() {
			return adapters_js_1.default.toNodeStream(this.isSync() ? { [Symbol.iterator]: () => this } : { [Symbol.asyncIterator]: () => this }, { objectMode: true });
		}
		/** @nocollapse */
		static throughNode(options) {
			throw new Error(`"throughNode" not available in this environment`);
		}
		/** @nocollapse */
		static throughDOM(writableStrategy, readableStrategy) {
			throw new Error(`"throughDOM" not available in this environment`);
		}
		/** @nocollapse */
		static from(source) {
			if (source instanceof RecordBatchReader) return source;
			else if ((0, compat_js_1.isArrowJSON)(source)) return fromArrowJSON(source);
			else if ((0, compat_js_1.isFileHandle)(source)) return fromFileHandle(source);
			else if ((0, compat_js_1.isPromise)(source)) return (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
				return yield RecordBatchReader.from(yield source);
			}))();
			else if ((0, compat_js_1.isFetchResponse)(source) || (0, compat_js_1.isReadableDOMStream)(source) || (0, compat_js_1.isReadableNodeStream)(source) || (0, compat_js_1.isAsyncIterable)(source)) return fromAsyncByteStream(new stream_js_1.AsyncByteStream(source));
			return fromByteStream(new stream_js_1.ByteStream(source));
		}
		/** @nocollapse */
		static readAll(source) {
			if (source instanceof RecordBatchReader) return source.isSync() ? readAllSync(source) : readAllAsync(source);
			else if ((0, compat_js_1.isArrowJSON)(source) || ArrayBuffer.isView(source) || (0, compat_js_1.isIterable)(source) || (0, compat_js_1.isIteratorResult)(source)) return readAllSync(source);
			return readAllAsync(source);
		}
	};
	exports.RecordBatchReader = RecordBatchReader;
	/** @ignore */
	var RecordBatchStreamReader = class extends RecordBatchReader {
		constructor(_impl) {
			super(_impl);
			this._impl = _impl;
		}
		readAll() {
			return [...this];
		}
		[Symbol.iterator]() {
			return this._impl[Symbol.iterator]();
		}
		[Symbol.asyncIterator]() {
			return tslib_1.__asyncGenerator(this, arguments, function* _a() {
				yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues(this[Symbol.iterator]())));
			});
		}
	};
	exports.RecordBatchStreamReader = RecordBatchStreamReader;
	/** @ignore */
	var AsyncRecordBatchStreamReader = class extends RecordBatchReader {
		constructor(_impl) {
			super(_impl);
			this._impl = _impl;
		}
		readAll() {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				var _a, e_1, _b, _c;
				const batches = new Array();
				try {
					for (var _d = true, _e = tslib_1.__asyncValues(this), _f; _f = yield _e.next(), _a = _f.done, !_a; _d = true) {
						_c = _f.value;
						_d = false;
						const batch = _c;
						batches.push(batch);
					}
				} catch (e_1_1) {
					e_1 = { error: e_1_1 };
				} finally {
					try {
						if (!_d && !_a && (_b = _e.return)) yield _b.call(_e);
					} finally {
						if (e_1) throw e_1.error;
					}
				}
				return batches;
			});
		}
		[Symbol.iterator]() {
			throw new Error(`AsyncRecordBatchStreamReader is not Iterable`);
		}
		[Symbol.asyncIterator]() {
			return this._impl[Symbol.asyncIterator]();
		}
	};
	exports.AsyncRecordBatchStreamReader = AsyncRecordBatchStreamReader;
	/** @ignore */
	var RecordBatchFileReader = class extends RecordBatchStreamReader {
		constructor(_impl) {
			super(_impl);
			this._impl = _impl;
		}
	};
	exports.RecordBatchFileReader = RecordBatchFileReader;
	/** @ignore */
	var AsyncRecordBatchFileReader = class extends AsyncRecordBatchStreamReader {
		constructor(_impl) {
			super(_impl);
			this._impl = _impl;
		}
	};
	exports.AsyncRecordBatchFileReader = AsyncRecordBatchFileReader;
	/** @ignore */
	var RecordBatchReaderImpl = class {
		get numDictionaries() {
			return this._dictionaryIndex;
		}
		get numRecordBatches() {
			return this._recordBatchIndex;
		}
		constructor(dictionaries = /* @__PURE__ */ new Map()) {
			this.closed = false;
			this.autoDestroy = true;
			this._dictionaryIndex = 0;
			this._recordBatchIndex = 0;
			this.dictionaries = dictionaries;
		}
		isSync() {
			return false;
		}
		isAsync() {
			return false;
		}
		isFile() {
			return false;
		}
		isStream() {
			return false;
		}
		reset(schema) {
			this._dictionaryIndex = 0;
			this._recordBatchIndex = 0;
			this.schema = schema;
			this.dictionaries = /* @__PURE__ */ new Map();
			return this;
		}
		_loadRecordBatch(header, body) {
			let children;
			if (header.compression != null) {
				const codec = registry_js_1.compressionRegistry.get(header.compression.type);
				if ((codec === null || codec === void 0 ? void 0 : codec.decode) && typeof codec.decode === "function") {
					const { decommpressedBody, buffers } = this._decompressBuffers(header, body, codec);
					children = this._loadCompressedVectors(header, decommpressedBody, this.schema.fields);
					header = new metadata.RecordBatch(header.length, header.nodes, buffers, null);
				} else throw new Error("Record batch is compressed but codec not found");
			} else children = this._loadVectors(header, body, this.schema.fields);
			const data = (0, data_js_1.makeData)({
				type: new type_js_1.Struct(this.schema.fields),
				length: header.length,
				children
			});
			return new recordbatch_js_1.RecordBatch(this.schema, data);
		}
		_loadDictionaryBatch(header, body) {
			const { id, isDelta } = header;
			const { dictionaries, schema } = this;
			const dictionary = dictionaries.get(id);
			const type = schema.dictionaries.get(id);
			let data;
			if (header.data.compression != null) {
				const codec = registry_js_1.compressionRegistry.get(header.data.compression.type);
				if ((codec === null || codec === void 0 ? void 0 : codec.decode) && typeof codec.decode === "function") {
					const { decommpressedBody, buffers } = this._decompressBuffers(header.data, body, codec);
					data = this._loadCompressedVectors(header.data, decommpressedBody, [type]);
					header = new metadata.DictionaryBatch(new metadata.RecordBatch(header.data.length, header.data.nodes, buffers, null), id, isDelta);
				} else throw new Error("Dictionary batch is compressed but codec not found");
			} else data = this._loadVectors(header.data, body, [type]);
			return (dictionary && isDelta ? dictionary.concat(new vector_js_1.Vector(data)) : new vector_js_1.Vector(data)).memoize();
		}
		_loadVectors(header, body, types) {
			return new vectorloader_js_1.VectorLoader(body, header.nodes, header.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(types);
		}
		_loadCompressedVectors(header, body, types) {
			return new vectorloader_js_1.CompressedVectorLoader(body, header.nodes, header.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(types);
		}
		_decompressBuffers(header, body, codec) {
			const decompressedBuffers = [];
			const newBufferRegions = [];
			let currentOffset = 0;
			for (const { offset, length } of header.buffers) {
				if (length === 0) {
					decompressedBuffers.push(new Uint8Array(0));
					newBufferRegions.push(new metadata.BufferRegion(currentOffset, 0));
					continue;
				}
				const byteBuf = new flatbuffers.ByteBuffer(body.subarray(offset, offset + length));
				const uncompressedLenth = (0, bigint_js_1.bigIntToNumber)(byteBuf.readInt64(0));
				const bytes = byteBuf.bytes().subarray(constants_js_1.COMPRESS_LENGTH_PREFIX);
				const decompressed = uncompressedLenth === constants_js_1.LENGTH_NO_COMPRESSED_DATA ? bytes : codec.decode(bytes);
				decompressedBuffers.push(decompressed);
				const padding = (currentOffset + 7 & -8) - currentOffset;
				currentOffset += padding;
				newBufferRegions.push(new metadata.BufferRegion(currentOffset, decompressed.length));
				currentOffset += decompressed.length;
			}
			return {
				decommpressedBody: decompressedBuffers,
				buffers: newBufferRegions
			};
		}
	};
	/** @ignore */
	var RecordBatchStreamReaderImpl = class extends RecordBatchReaderImpl {
		constructor(source, dictionaries) {
			super(dictionaries);
			this._reader = !(0, compat_js_1.isArrowJSON)(source) ? new message_js_1.MessageReader(this._handle = source) : new message_js_1.JSONMessageReader(this._handle = source);
		}
		isSync() {
			return true;
		}
		isStream() {
			return true;
		}
		[Symbol.iterator]() {
			return this;
		}
		cancel() {
			if (!this.closed && (this.closed = true)) {
				this.reset()._reader.return();
				this._reader = null;
				this.dictionaries = null;
			}
		}
		open(options) {
			if (!this.closed) {
				this.autoDestroy = shouldAutoDestroy(this, options);
				if (!(this.schema || (this.schema = this._reader.readSchema()))) this.cancel();
			}
			return this;
		}
		throw(value) {
			if (!this.closed && this.autoDestroy && (this.closed = true)) return this.reset()._reader.throw(value);
			return interfaces_js_1.ITERATOR_DONE;
		}
		return(value) {
			if (!this.closed && this.autoDestroy && (this.closed = true)) return this.reset()._reader.return(value);
			return interfaces_js_1.ITERATOR_DONE;
		}
		next() {
			if (this.closed) return interfaces_js_1.ITERATOR_DONE;
			let message;
			const { _reader: reader } = this;
			while (message = this._readNextMessageAndValidate()) if (message.isSchema()) this.reset(message.header());
			else if (message.isRecordBatch()) {
				this._recordBatchIndex++;
				const header = message.header();
				const buffer = reader.readMessageBody(message.bodyLength);
				return {
					done: false,
					value: this._loadRecordBatch(header, buffer)
				};
			} else if (message.isDictionaryBatch()) {
				this._dictionaryIndex++;
				const header = message.header();
				const buffer = reader.readMessageBody(message.bodyLength);
				const vector = this._loadDictionaryBatch(header, buffer);
				this.dictionaries.set(header.id, vector);
			}
			if (this.schema && this._recordBatchIndex === 0) {
				this._recordBatchIndex++;
				return {
					done: false,
					value: new recordbatch_js_1._InternalEmptyPlaceholderRecordBatch(this.schema)
				};
			}
			return this.return();
		}
		_readNextMessageAndValidate(type) {
			return this._reader.readMessage(type);
		}
	};
	/** @ignore */
	var AsyncRecordBatchStreamReaderImpl = class extends RecordBatchReaderImpl {
		constructor(source, dictionaries) {
			super(dictionaries);
			this._reader = new message_js_1.AsyncMessageReader(this._handle = source);
		}
		isAsync() {
			return true;
		}
		isStream() {
			return true;
		}
		[Symbol.asyncIterator]() {
			return this;
		}
		cancel() {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				if (!this.closed && (this.closed = true)) {
					yield this.reset()._reader.return();
					this._reader = null;
					this.dictionaries = null;
				}
			});
		}
		open(options) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				if (!this.closed) {
					this.autoDestroy = shouldAutoDestroy(this, options);
					if (!(this.schema || (this.schema = yield this._reader.readSchema()))) yield this.cancel();
				}
				return this;
			});
		}
		throw(value) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				if (!this.closed && this.autoDestroy && (this.closed = true)) return yield this.reset()._reader.throw(value);
				return interfaces_js_1.ITERATOR_DONE;
			});
		}
		return(value) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				if (!this.closed && this.autoDestroy && (this.closed = true)) return yield this.reset()._reader.return(value);
				return interfaces_js_1.ITERATOR_DONE;
			});
		}
		next() {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				if (this.closed) return interfaces_js_1.ITERATOR_DONE;
				let message;
				const { _reader: reader } = this;
				while (message = yield this._readNextMessageAndValidate()) if (message.isSchema()) yield this.reset(message.header());
				else if (message.isRecordBatch()) {
					this._recordBatchIndex++;
					const header = message.header();
					const buffer = yield reader.readMessageBody(message.bodyLength);
					return {
						done: false,
						value: this._loadRecordBatch(header, buffer)
					};
				} else if (message.isDictionaryBatch()) {
					this._dictionaryIndex++;
					const header = message.header();
					const buffer = yield reader.readMessageBody(message.bodyLength);
					const vector = this._loadDictionaryBatch(header, buffer);
					this.dictionaries.set(header.id, vector);
				}
				if (this.schema && this._recordBatchIndex === 0) {
					this._recordBatchIndex++;
					return {
						done: false,
						value: new recordbatch_js_1._InternalEmptyPlaceholderRecordBatch(this.schema)
					};
				}
				return yield this.return();
			});
		}
		_readNextMessageAndValidate(type) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				return yield this._reader.readMessage(type);
			});
		}
	};
	/** @ignore */
	var RecordBatchFileReaderImpl = class extends RecordBatchStreamReaderImpl {
		get footer() {
			return this._footer;
		}
		get numDictionaries() {
			return this._footer ? this._footer.numDictionaries : 0;
		}
		get numRecordBatches() {
			return this._footer ? this._footer.numRecordBatches : 0;
		}
		constructor(source, dictionaries) {
			super(source instanceof file_js_2.RandomAccessFile ? source : new file_js_2.RandomAccessFile(source), dictionaries);
		}
		isSync() {
			return true;
		}
		isFile() {
			return true;
		}
		open(options) {
			if (!this.closed && !this._footer) {
				this.schema = (this._footer = this._readFooter()).schema;
				for (const block of this._footer.dictionaryBatches()) block && this._readDictionaryBatch(this._dictionaryIndex++);
			}
			return super.open(options);
		}
		readRecordBatch(index) {
			var _a;
			if (this.closed) return null;
			if (!this._footer) this.open();
			const block = (_a = this._footer) === null || _a === void 0 ? void 0 : _a.getRecordBatch(index);
			if (block && this._handle.seek(block.offset)) {
				const message = this._reader.readMessage(enum_js_1.MessageHeader.RecordBatch);
				if (message === null || message === void 0 ? void 0 : message.isRecordBatch()) {
					const header = message.header();
					const buffer = this._reader.readMessageBody(message.bodyLength);
					return this._loadRecordBatch(header, buffer);
				}
			}
			return null;
		}
		_readDictionaryBatch(index) {
			var _a;
			const block = (_a = this._footer) === null || _a === void 0 ? void 0 : _a.getDictionaryBatch(index);
			if (block && this._handle.seek(block.offset)) {
				const message = this._reader.readMessage(enum_js_1.MessageHeader.DictionaryBatch);
				if (message === null || message === void 0 ? void 0 : message.isDictionaryBatch()) {
					const header = message.header();
					const buffer = this._reader.readMessageBody(message.bodyLength);
					const vector = this._loadDictionaryBatch(header, buffer);
					this.dictionaries.set(header.id, vector);
				}
			}
		}
		_readFooter() {
			const { _handle } = this;
			const offset = _handle.size - message_js_1.magicAndPadding;
			const length = _handle.readInt32(offset);
			const buffer = _handle.readAt(offset - length, length);
			return file_js_1.Footer.decode(buffer);
		}
		_readNextMessageAndValidate(type) {
			var _a;
			if (!this._footer) this.open();
			if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
				const block = (_a = this._footer) === null || _a === void 0 ? void 0 : _a.getRecordBatch(this._recordBatchIndex);
				if (block && this._handle.seek(block.offset)) return this._reader.readMessage(type);
			}
			return null;
		}
	};
	/** @ignore */
	var AsyncRecordBatchFileReaderImpl = class extends AsyncRecordBatchStreamReaderImpl {
		get footer() {
			return this._footer;
		}
		get numDictionaries() {
			return this._footer ? this._footer.numDictionaries : 0;
		}
		get numRecordBatches() {
			return this._footer ? this._footer.numRecordBatches : 0;
		}
		constructor(source, ...rest) {
			const byteLength = typeof rest[0] !== "number" ? rest.shift() : void 0;
			const dictionaries = rest[0] instanceof Map ? rest.shift() : void 0;
			super(source instanceof file_js_2.AsyncRandomAccessFile ? source : new file_js_2.AsyncRandomAccessFile(source, byteLength), dictionaries);
		}
		isFile() {
			return true;
		}
		isAsync() {
			return true;
		}
		open(options) {
			const _super = Object.create(null, { open: { get: () => super.open } });
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				if (!this.closed && !this._footer) {
					this.schema = (this._footer = yield this._readFooter()).schema;
					for (const block of this._footer.dictionaryBatches()) block && (yield this._readDictionaryBatch(this._dictionaryIndex++));
				}
				return yield _super.open.call(this, options);
			});
		}
		readRecordBatch(index) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				var _a;
				if (this.closed) return null;
				if (!this._footer) yield this.open();
				const block = (_a = this._footer) === null || _a === void 0 ? void 0 : _a.getRecordBatch(index);
				if (block && (yield this._handle.seek(block.offset))) {
					const message = yield this._reader.readMessage(enum_js_1.MessageHeader.RecordBatch);
					if (message === null || message === void 0 ? void 0 : message.isRecordBatch()) {
						const header = message.header();
						const buffer = yield this._reader.readMessageBody(message.bodyLength);
						return this._loadRecordBatch(header, buffer);
					}
				}
				return null;
			});
		}
		_readDictionaryBatch(index) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				var _a;
				const block = (_a = this._footer) === null || _a === void 0 ? void 0 : _a.getDictionaryBatch(index);
				if (block && (yield this._handle.seek(block.offset))) {
					const message = yield this._reader.readMessage(enum_js_1.MessageHeader.DictionaryBatch);
					if (message === null || message === void 0 ? void 0 : message.isDictionaryBatch()) {
						const header = message.header();
						const buffer = yield this._reader.readMessageBody(message.bodyLength);
						const vector = this._loadDictionaryBatch(header, buffer);
						this.dictionaries.set(header.id, vector);
					}
				}
			});
		}
		_readFooter() {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				const { _handle } = this;
				_handle._pending && (yield _handle._pending);
				const offset = _handle.size - message_js_1.magicAndPadding;
				const length = yield _handle.readInt32(offset);
				const buffer = yield _handle.readAt(offset - length, length);
				return file_js_1.Footer.decode(buffer);
			});
		}
		_readNextMessageAndValidate(type) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				if (!this._footer) yield this.open();
				if (this._footer && this._recordBatchIndex < this.numRecordBatches) {
					const block = this._footer.getRecordBatch(this._recordBatchIndex);
					if (block && (yield this._handle.seek(block.offset))) return yield this._reader.readMessage(type);
				}
				return null;
			});
		}
	};
	/** @ignore */
	var RecordBatchJSONReaderImpl = class extends RecordBatchStreamReaderImpl {
		constructor(source, dictionaries) {
			super(source, dictionaries);
		}
		_loadVectors(header, body, types) {
			return new vectorloader_js_1.JSONVectorLoader(body, header.nodes, header.buffers, this.dictionaries, this.schema.metadataVersion).visitMany(types);
		}
	};
	/** @ignore */
	function shouldAutoDestroy(self, options) {
		return options && typeof options["autoDestroy"] === "boolean" ? options["autoDestroy"] : self["autoDestroy"];
	}
	/** @ignore */
	function* readAllSync(source) {
		const reader = RecordBatchReader.from(source);
		try {
			if (!reader.open({ autoDestroy: false }).closed) do
				yield reader;
			while (!reader.reset().open().closed);
		} finally {
			reader.cancel();
		}
	}
	/** @ignore */
	function readAllAsync(source) {
		return tslib_1.__asyncGenerator(this, arguments, function* readAllAsync_1() {
			const reader = yield tslib_1.__await(RecordBatchReader.from(source));
			try {
				if (!(yield tslib_1.__await(reader.open({ autoDestroy: false }))).closed) do
					yield yield tslib_1.__await(reader);
				while (!(yield tslib_1.__await(reader.reset().open())).closed);
			} finally {
				yield tslib_1.__await(reader.cancel());
			}
		});
	}
	/** @ignore */
	function fromArrowJSON(source) {
		return new RecordBatchStreamReader(new RecordBatchJSONReaderImpl(source));
	}
	/** @ignore */
	function fromByteStream(source) {
		const bytes = source.peek(message_js_1.magicLength + 7 & -8);
		return bytes && bytes.byteLength >= 4 ? !(0, message_js_1.checkForMagicArrowString)(bytes) ? new RecordBatchStreamReader(new RecordBatchStreamReaderImpl(source)) : new RecordBatchFileReader(new RecordBatchFileReaderImpl(source.read())) : new RecordBatchStreamReader(new RecordBatchStreamReaderImpl(function* () {}()));
	}
	/** @ignore */
	function fromAsyncByteStream(source) {
		return tslib_1.__awaiter(this, void 0, void 0, function* () {
			const bytes = yield source.peek(message_js_1.magicLength + 7 & -8);
			return bytes && bytes.byteLength >= 4 ? !(0, message_js_1.checkForMagicArrowString)(bytes) ? new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(source)) : new RecordBatchFileReader(new RecordBatchFileReaderImpl(yield source.read())) : new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(function() {
				return tslib_1.__asyncGenerator(this, arguments, function* () {});
			}()));
		});
	}
	/** @ignore */
	function fromFileHandle(source) {
		return tslib_1.__awaiter(this, void 0, void 0, function* () {
			const { size } = yield source.stat();
			const file = new file_js_2.AsyncRandomAccessFile(source, size);
			if (size >= message_js_1.magicX2AndPadding && (0, message_js_1.checkForMagicArrowString)(yield file.readAt(0, message_js_1.magicLength + 7 & -8))) return new AsyncRecordBatchFileReader(new AsyncRecordBatchFileReaderImpl(file));
			return new AsyncRecordBatchStreamReader(new AsyncRecordBatchStreamReaderImpl(file));
		});
	}
}));
//#endregion
//#region node_modules/apache-arrow/visitor/vectorassembler.js
var require_vectorassembler = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.VectorAssembler = void 0;
	var vector_js_1 = require_vector();
	var visitor_js_1 = require_visitor();
	var enum_js_1 = require_enum();
	var recordbatch_js_1 = require_recordbatch();
	var buffer_js_1 = require_buffer$2();
	var bit_js_1 = require_bit();
	var message_js_1 = require_message$1();
	var type_js_1 = require_type();
	var bigint_js_1 = require_bigint();
	/** @ignore */
	var VectorAssembler = class VectorAssembler extends visitor_js_1.Visitor {
		/** @nocollapse */
		static assemble(...args) {
			const unwrap = (nodes) => nodes.flatMap((node) => Array.isArray(node) ? unwrap(node) : node instanceof recordbatch_js_1.RecordBatch ? node.data.children : node.data);
			const assembler = new VectorAssembler();
			assembler.visitMany(unwrap(args));
			return assembler;
		}
		constructor() {
			super();
			this._byteLength = 0;
			this._nodes = [];
			this._buffers = [];
			this._bufferRegions = [];
		}
		visit(data) {
			if (data instanceof vector_js_1.Vector) {
				this.visitMany(data.data);
				return this;
			}
			const { type } = data;
			if (!type_js_1.DataType.isDictionary(type)) {
				const { length } = data;
				if (length > 2147483647)
 /* istanbul ignore next */
				throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
				if (type_js_1.DataType.isUnion(type)) this.nodes.push(new message_js_1.FieldNode(length, 0));
				else {
					const { nullCount } = data;
					if (!type_js_1.DataType.isNull(type)) addBuffer.call(this, nullCount <= 0 ? new Uint8Array(0) : (0, bit_js_1.truncateBitmap)(data.offset, length, data.nullBitmap));
					this.nodes.push(new message_js_1.FieldNode(length, nullCount));
				}
			}
			return super.visit(data);
		}
		visitNull(_null) {
			return this;
		}
		visitDictionary(data) {
			return this.visit(data.clone(data.type.indices));
		}
		get nodes() {
			return this._nodes;
		}
		get buffers() {
			return this._buffers;
		}
		get byteLength() {
			return this._byteLength;
		}
		get bufferRegions() {
			return this._bufferRegions;
		}
	};
	exports.VectorAssembler = VectorAssembler;
	/** @ignore */
	function addBuffer(values) {
		const byteLength = values.byteLength + 7 & -8;
		this.buffers.push(values);
		this.bufferRegions.push(new message_js_1.BufferRegion(this._byteLength, byteLength));
		this._byteLength += byteLength;
		return this;
	}
	/** @ignore */
	function assembleUnion(data) {
		var _a;
		const { type, length, typeIds, valueOffsets } = data;
		addBuffer.call(this, typeIds);
		if (type.mode === enum_js_1.UnionMode.Sparse) return assembleNestedVector.call(this, data);
		else if (type.mode === enum_js_1.UnionMode.Dense) if (data.offset <= 0) {
			addBuffer.call(this, valueOffsets);
			return assembleNestedVector.call(this, data);
		} else {
			const shiftedOffsets = new Int32Array(length);
			const childOffsets = Object.create(null);
			const childLengths = Object.create(null);
			for (let typeId, shift, index = -1; ++index < length;) {
				if ((typeId = typeIds[index]) === void 0) continue;
				if ((shift = childOffsets[typeId]) === void 0) shift = childOffsets[typeId] = valueOffsets[index];
				shiftedOffsets[index] = valueOffsets[index] - shift;
				childLengths[typeId] = ((_a = childLengths[typeId]) !== null && _a !== void 0 ? _a : 0) + 1;
			}
			addBuffer.call(this, shiftedOffsets);
			this.visitMany(data.children.map((child, childIndex) => {
				const typeId = type.typeIds[childIndex];
				const childOffset = childOffsets[typeId];
				const childLength = childLengths[typeId];
				return child.slice(childOffset, Math.min(length, childLength));
			}));
		}
		return this;
	}
	/** @ignore */
	function assembleBoolVector(data) {
		let values;
		if (data.nullCount >= data.length) return addBuffer.call(this, new Uint8Array(0));
		else if ((values = data.values) instanceof Uint8Array) return addBuffer.call(this, (0, bit_js_1.truncateBitmap)(data.offset, data.length, values));
		/* istanbul ignore next */
		return addBuffer.call(this, (0, bit_js_1.packBools)(data.values));
	}
	/** @ignore */
	function assembleFlatVector(data) {
		return addBuffer.call(this, data.values.subarray(0, data.length * data.stride));
	}
	/** @ignore */
	function assembleFlatListVector(data) {
		const { length, values, valueOffsets } = data;
		const begin = (0, bigint_js_1.bigIntToNumber)(valueOffsets[0]);
		const end = (0, bigint_js_1.bigIntToNumber)(valueOffsets[length]);
		const byteLength = Math.min(end - begin, values.byteLength - begin);
		addBuffer.call(this, (0, buffer_js_1.rebaseValueOffsets)(-begin, length + 1, valueOffsets));
		addBuffer.call(this, values.subarray(begin, begin + byteLength));
		return this;
	}
	/** @ignore */
	function assembleListVector(data) {
		const { length, valueOffsets } = data;
		if (valueOffsets) {
			const { [0]: begin, [length]: end } = valueOffsets;
			addBuffer.call(this, (0, buffer_js_1.rebaseValueOffsets)(-begin, length + 1, valueOffsets));
			return this.visit(data.children[0].slice(begin, end - begin));
		}
		return this.visit(data.children[0]);
	}
	/** @ignore */
	function assembleNestedVector(data) {
		return this.visitMany(data.type.children.map((_, i) => data.children[i]).filter(Boolean))[0];
	}
	VectorAssembler.prototype.visitBool = assembleBoolVector;
	VectorAssembler.prototype.visitInt = assembleFlatVector;
	VectorAssembler.prototype.visitFloat = assembleFlatVector;
	VectorAssembler.prototype.visitUtf8 = assembleFlatListVector;
	VectorAssembler.prototype.visitLargeUtf8 = assembleFlatListVector;
	VectorAssembler.prototype.visitBinary = assembleFlatListVector;
	VectorAssembler.prototype.visitLargeBinary = assembleFlatListVector;
	VectorAssembler.prototype.visitFixedSizeBinary = assembleFlatVector;
	VectorAssembler.prototype.visitDate = assembleFlatVector;
	VectorAssembler.prototype.visitTimestamp = assembleFlatVector;
	VectorAssembler.prototype.visitTime = assembleFlatVector;
	VectorAssembler.prototype.visitDecimal = assembleFlatVector;
	VectorAssembler.prototype.visitList = assembleListVector;
	VectorAssembler.prototype.visitStruct = assembleNestedVector;
	VectorAssembler.prototype.visitUnion = assembleUnion;
	VectorAssembler.prototype.visitInterval = assembleFlatVector;
	VectorAssembler.prototype.visitDuration = assembleFlatVector;
	VectorAssembler.prototype.visitFixedSizeList = assembleListVector;
	VectorAssembler.prototype.visitMap = assembleListVector;
}));
//#endregion
//#region node_modules/apache-arrow/visitor/jsontypeassembler.js
var require_jsontypeassembler = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.JSONTypeAssembler = void 0;
	var visitor_js_1 = require_visitor();
	var type_js_1 = require_type$1();
	var enum_js_1 = require_enum();
	/** @ignore */
	var JSONTypeAssembler = class extends visitor_js_1.Visitor {
		visit(node) {
			return node == null ? void 0 : super.visit(node);
		}
		visitNull({ typeId }) {
			return { "name": type_js_1.Type[typeId].toLowerCase() };
		}
		visitInt({ typeId, bitWidth, isSigned }) {
			return {
				"name": type_js_1.Type[typeId].toLowerCase(),
				"bitWidth": bitWidth,
				"isSigned": isSigned
			};
		}
		visitFloat({ typeId, precision }) {
			return {
				"name": type_js_1.Type[typeId].toLowerCase(),
				"precision": enum_js_1.Precision[precision]
			};
		}
		visitBinary({ typeId }) {
			return { "name": type_js_1.Type[typeId].toLowerCase() };
		}
		visitLargeBinary({ typeId }) {
			return { "name": type_js_1.Type[typeId].toLowerCase() };
		}
		visitBool({ typeId }) {
			return { "name": type_js_1.Type[typeId].toLowerCase() };
		}
		visitUtf8({ typeId }) {
			return { "name": type_js_1.Type[typeId].toLowerCase() };
		}
		visitLargeUtf8({ typeId }) {
			return { "name": type_js_1.Type[typeId].toLowerCase() };
		}
		visitDecimal({ typeId, scale, precision, bitWidth }) {
			return {
				"name": type_js_1.Type[typeId].toLowerCase(),
				"scale": scale,
				"precision": precision,
				"bitWidth": bitWidth
			};
		}
		visitDate({ typeId, unit }) {
			return {
				"name": type_js_1.Type[typeId].toLowerCase(),
				"unit": enum_js_1.DateUnit[unit]
			};
		}
		visitTime({ typeId, unit, bitWidth }) {
			return {
				"name": type_js_1.Type[typeId].toLowerCase(),
				"unit": enum_js_1.TimeUnit[unit],
				bitWidth
			};
		}
		visitTimestamp({ typeId, timezone, unit }) {
			return {
				"name": type_js_1.Type[typeId].toLowerCase(),
				"unit": enum_js_1.TimeUnit[unit],
				timezone
			};
		}
		visitInterval({ typeId, unit }) {
			return {
				"name": type_js_1.Type[typeId].toLowerCase(),
				"unit": enum_js_1.IntervalUnit[unit]
			};
		}
		visitDuration({ typeId, unit }) {
			return {
				"name": type_js_1.Type[typeId].toLocaleLowerCase(),
				"unit": enum_js_1.TimeUnit[unit]
			};
		}
		visitList({ typeId }) {
			return { "name": type_js_1.Type[typeId].toLowerCase() };
		}
		visitStruct({ typeId }) {
			return { "name": type_js_1.Type[typeId].toLowerCase() };
		}
		visitUnion({ typeId, mode, typeIds }) {
			return {
				"name": type_js_1.Type[typeId].toLowerCase(),
				"mode": enum_js_1.UnionMode[mode].toUpperCase(),
				"typeIds": [...typeIds]
			};
		}
		visitDictionary(node) {
			return this.visit(node.dictionary);
		}
		visitFixedSizeBinary({ typeId, byteWidth }) {
			return {
				"name": type_js_1.Type[typeId].toLowerCase(),
				"byteWidth": byteWidth
			};
		}
		visitFixedSizeList({ typeId, listSize }) {
			return {
				"name": type_js_1.Type[typeId].toLowerCase(),
				"listSize": listSize
			};
		}
		visitMap({ typeId, keysSorted }) {
			return {
				"name": type_js_1.Type[typeId].toLowerCase(),
				"keysSorted": keysSorted
			};
		}
	};
	exports.JSONTypeAssembler = JSONTypeAssembler;
}));
//#endregion
//#region node_modules/apache-arrow/visitor/jsonvectorassembler.js
var require_jsonvectorassembler = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.JSONVectorAssembler = void 0;
	var bn_js_1 = require_bn();
	var vector_js_1 = require_vector();
	var visitor_js_1 = require_visitor();
	var enum_js_1 = require_enum();
	var enum_js_2 = require_enum();
	var bit_js_1 = require_bit();
	var interval_js_1 = require_interval$1();
	var type_js_1 = require_type();
	exports.JSONVectorAssembler = class JSONVectorAssembler extends visitor_js_1.Visitor {
		/** @nocollapse */
		static assemble(...batches) {
			const assembler = new JSONVectorAssembler();
			return batches.map(({ schema, data }) => {
				return assembler.visitMany(schema.fields, data.children);
			});
		}
		visit({ name }, data) {
			const { length } = data;
			const { offset, nullCount, nullBitmap } = data;
			const type = type_js_1.DataType.isDictionary(data.type) ? data.type.indices : data.type;
			const buffers = Object.assign([], data.buffers, { [enum_js_1.BufferType.VALIDITY]: void 0 });
			return Object.assign({
				"name": name,
				"count": length,
				"VALIDITY": type_js_1.DataType.isNull(type) || type_js_1.DataType.isUnion(type) ? void 0 : nullCount <= 0 ? Array.from({ length }, () => 1) : [...new bit_js_1.BitIterator(nullBitmap, offset, length, null, bit_js_1.getBit)]
			}, super.visit(data.clone(type, offset, length, 0, buffers)));
		}
		visitNull() {
			return {};
		}
		visitBool({ values, offset, length }) {
			return { "DATA": [...new bit_js_1.BitIterator(values, offset, length, null, bit_js_1.getBool)] };
		}
		visitInt(data) {
			return { "DATA": data.type.bitWidth < 64 ? [...data.values] : [...bigNumsToStrings(data.values, 2)] };
		}
		visitFloat(data) {
			return { "DATA": [...data.values] };
		}
		visitUtf8(data) {
			return {
				"DATA": [...new vector_js_1.Vector([data])],
				"OFFSET": [...data.valueOffsets]
			};
		}
		visitLargeUtf8(data) {
			return {
				"DATA": [...new vector_js_1.Vector([data])],
				"OFFSET": [...bigNumsToStrings(data.valueOffsets, 2)]
			};
		}
		visitBinary(data) {
			return {
				"DATA": [...binaryToString(new vector_js_1.Vector([data]))],
				"OFFSET": [...data.valueOffsets]
			};
		}
		visitLargeBinary(data) {
			return {
				"DATA": [...binaryToString(new vector_js_1.Vector([data]))],
				"OFFSET": [...bigNumsToStrings(data.valueOffsets, 2)]
			};
		}
		visitFixedSizeBinary(data) {
			return { "DATA": [...binaryToString(new vector_js_1.Vector([data]))] };
		}
		visitDate(data) {
			return { "DATA": data.type.unit === enum_js_2.DateUnit.DAY ? [...data.values] : [...bigNumsToStrings(data.values, 2)] };
		}
		visitTimestamp(data) {
			return { "DATA": [...bigNumsToStrings(data.values, 2)] };
		}
		visitTime(data) {
			return { "DATA": data.type.unit < enum_js_2.TimeUnit.MICROSECOND ? [...data.values] : [...bigNumsToStrings(data.values, 2)] };
		}
		visitDecimal(data) {
			return { "DATA": [...bigNumsToStrings(data.values, 4)] };
		}
		visitList(data) {
			return {
				"OFFSET": [...data.valueOffsets],
				"children": this.visitMany(data.type.children, data.children)
			};
		}
		visitStruct(data) {
			return { "children": this.visitMany(data.type.children, data.children) };
		}
		visitUnion(data) {
			return {
				"TYPE_ID": [...data.typeIds],
				"OFFSET": data.type.mode === enum_js_2.UnionMode.Dense ? [...data.valueOffsets] : void 0,
				"children": this.visitMany(data.type.children, data.children)
			};
		}
		visitInterval(data) {
			switch (data.type.unit) {
				case enum_js_1.IntervalUnit.YEAR_MONTH: return { "DATA": [...data.values] };
				case enum_js_1.IntervalUnit.DAY_TIME: return { "DATA": (0, interval_js_1.toIntervalDayTimeObjects)(data.values) };
				case enum_js_1.IntervalUnit.MONTH_DAY_NANO: return { "DATA": (0, interval_js_1.toIntervalMonthDayNanoObjects)(data.values, true) };
			}
		}
		visitDuration(data) {
			return { "DATA": [...bigNumsToStrings(data.values, 2)] };
		}
		visitFixedSizeList(data) {
			return { "children": this.visitMany(data.type.children, data.children) };
		}
		visitMap(data) {
			return {
				"OFFSET": [...data.valueOffsets],
				"children": this.visitMany(data.type.children, data.children)
			};
		}
	};
	/** @ignore */
	function* binaryToString(vector) {
		for (const octets of vector) yield octets.reduce((str, byte) => {
			return `${str}${("0" + (byte & 255).toString(16)).slice(-2)}`;
		}, "").toUpperCase();
	}
	/** @ignore */
	function* bigNumsToStrings(values, stride) {
		const u32s = new Uint32Array(values.buffer);
		for (let i = -1, n = u32s.length / stride; ++i < n;) yield `${bn_js_1.BN.new(u32s.subarray((i + 0) * stride, (i + 1) * stride), false)}`;
	}
}));
//#endregion
//#region node_modules/apache-arrow/ipc/writer.js
var require_writer$2 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RecordBatchJSONWriter = exports.RecordBatchFileWriter = exports.RecordBatchStreamWriter = exports.RecordBatchWriter = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var table_js_1 = require_table();
	var message_js_1 = require_message();
	var vector_js_1 = require_vector();
	var type_js_1 = require_type();
	var message_js_2 = require_message$1();
	var metadata = require_message$1();
	var file_js_1 = require_file$1();
	var enum_js_1 = require_enum();
	var typecomparator_js_1 = require_typecomparator();
	var stream_js_1 = require_stream();
	var vectorassembler_js_1 = require_vectorassembler();
	var jsontypeassembler_js_1 = require_jsontypeassembler();
	var jsonvectorassembler_js_1 = require_jsonvectorassembler();
	var buffer_js_1 = require_buffer$2();
	var recordbatch_js_1 = require_recordbatch();
	var interfaces_js_1 = require_interfaces();
	var compat_js_1 = require_compat();
	var compression_type_js_1 = require_compression_type();
	var registry_js_1 = require_registry();
	var constants_js_1 = require_constants();
	var flatbuffers = (init_flatbuffers(), require_chunk$1.__toCommonJS(flatbuffers_exports));
	var RecordBatchWriter = class extends interfaces_js_1.ReadableInterop {
		/** @nocollapse */
		static throughNode(options) {
			throw new Error(`"throughNode" not available in this environment`);
		}
		/** @nocollapse */
		static throughDOM(writableStrategy, readableStrategy) {
			throw new Error(`"throughDOM" not available in this environment`);
		}
		constructor(options) {
			super();
			this._position = 0;
			this._started = false;
			this._compression = null;
			this._sink = new stream_js_1.AsyncByteQueue();
			this._schema = null;
			this._dictionaryBlocks = [];
			this._recordBatchBlocks = [];
			this._seenDictionaries = /* @__PURE__ */ new Map();
			this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map();
			(0, compat_js_1.isObject)(options) || (options = {
				autoDestroy: true,
				writeLegacyIpcFormat: false,
				compressionType: null
			});
			this._autoDestroy = typeof options.autoDestroy === "boolean" ? options.autoDestroy : true;
			this._writeLegacyIpcFormat = typeof options.writeLegacyIpcFormat === "boolean" ? options.writeLegacyIpcFormat : false;
			if (options.compressionType != null) {
				if (this._writeLegacyIpcFormat) throw new Error("Legacy IPC format does not support columnar compression. Use modern IPC format (writeLegacyIpcFormat=false).");
				if (Object.values(compression_type_js_1.CompressionType).includes(options.compressionType)) this._compression = new metadata.BodyCompression(options.compressionType);
				else {
					const validCompressionTypes = Object.values(compression_type_js_1.CompressionType).filter((v) => typeof v === "string");
					throw new Error(`Unsupported compressionType: ${options.compressionType} Available types: ${validCompressionTypes.join(", ")}`);
				}
			} else this._compression = null;
		}
		toString(sync = false) {
			return this._sink.toString(sync);
		}
		toUint8Array(sync = false) {
			return this._sink.toUint8Array(sync);
		}
		writeAll(input) {
			if ((0, compat_js_1.isPromise)(input)) return input.then((x) => this.writeAll(x));
			else if ((0, compat_js_1.isAsyncIterable)(input)) return writeAllAsync(this, input);
			return writeAll(this, input);
		}
		get closed() {
			return this._sink.closed;
		}
		[Symbol.asyncIterator]() {
			return this._sink[Symbol.asyncIterator]();
		}
		toDOMStream(options) {
			return this._sink.toDOMStream(options);
		}
		toNodeStream(options) {
			return this._sink.toNodeStream(options);
		}
		close() {
			return this.reset()._sink.close();
		}
		abort(reason) {
			return this.reset()._sink.abort(reason);
		}
		finish() {
			this._autoDestroy ? this.close() : this.reset(this._sink, this._schema);
			return this;
		}
		reset(sink = this._sink, schema = null) {
			if (sink === this._sink || sink instanceof stream_js_1.AsyncByteQueue) this._sink = sink;
			else {
				this._sink = new stream_js_1.AsyncByteQueue();
				if (sink && (0, compat_js_1.isWritableDOMStream)(sink)) this.toDOMStream({ type: "bytes" }).pipeTo(sink);
				else if (sink && (0, compat_js_1.isWritableNodeStream)(sink)) this.toNodeStream({ objectMode: false }).pipe(sink);
			}
			if (this._started && this._schema) this._writeFooter(this._schema);
			this._started = false;
			this._dictionaryBlocks = [];
			this._recordBatchBlocks = [];
			this._seenDictionaries = /* @__PURE__ */ new Map();
			this._dictionaryDeltaOffsets = /* @__PURE__ */ new Map();
			if (!schema || !(0, typecomparator_js_1.compareSchemas)(schema, this._schema)) if (schema == null) {
				this._position = 0;
				this._schema = null;
			} else {
				this._started = true;
				this._schema = schema;
				this._writeSchema(schema);
			}
			return this;
		}
		write(payload) {
			let schema = null;
			if (!this._sink) throw new Error(`RecordBatchWriter is closed`);
			else if (payload == null) return this.finish() && void 0;
			else if (payload instanceof table_js_1.Table && !(schema = payload.schema)) return this.finish() && void 0;
			else if (payload instanceof recordbatch_js_1.RecordBatch && !(schema = payload.schema)) return this.finish() && void 0;
			if (schema && !(0, typecomparator_js_1.compareSchemas)(schema, this._schema)) {
				if (this._started && this._autoDestroy) return this.close();
				this.reset(this._sink, schema);
			}
			if (payload instanceof recordbatch_js_1.RecordBatch) {
				if (!(payload instanceof recordbatch_js_1._InternalEmptyPlaceholderRecordBatch)) this._writeRecordBatch(payload);
			} else if (payload instanceof table_js_1.Table) this.writeAll(payload.batches);
			else if ((0, compat_js_1.isIterable)(payload)) this.writeAll(payload);
		}
		_writeMessage(message, alignment = 8) {
			const a = alignment - 1;
			const buffer = message_js_2.Message.encode(message);
			const flatbufferSize = buffer.byteLength;
			const prefixSize = !this._writeLegacyIpcFormat ? 8 : 4;
			const alignedSize = flatbufferSize + prefixSize + a & ~a;
			const nPaddingBytes = alignedSize - flatbufferSize - prefixSize;
			if (message.headerType === enum_js_1.MessageHeader.RecordBatch) this._recordBatchBlocks.push(new file_js_1.FileBlock(alignedSize, message.bodyLength, this._position));
			else if (message.headerType === enum_js_1.MessageHeader.DictionaryBatch) this._dictionaryBlocks.push(new file_js_1.FileBlock(alignedSize, message.bodyLength, this._position));
			if (!this._writeLegacyIpcFormat) this._write(Int32Array.of(-1));
			this._write(Int32Array.of(alignedSize - prefixSize));
			if (flatbufferSize > 0) this._write(buffer);
			return this._writePadding(nPaddingBytes);
		}
		_write(chunk) {
			if (this._started) {
				const buffer = (0, buffer_js_1.toUint8Array)(chunk);
				if (buffer && buffer.byteLength > 0) {
					this._sink.write(buffer);
					this._position += buffer.byteLength;
				}
			}
			return this;
		}
		_writeSchema(schema) {
			return this._writeMessage(message_js_2.Message.from(schema));
		}
		_writeFooter(schema) {
			return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0));
		}
		_writeMagic() {
			return this._write(message_js_1.MAGIC);
		}
		_writePadding(nBytes) {
			return nBytes > 0 ? this._write(new Uint8Array(nBytes)) : this;
		}
		_writeRecordBatch(batch) {
			const { byteLength, nodes, bufferRegions, buffers } = this._assembleRecordBatch(batch);
			const recordBatch = new metadata.RecordBatch(batch.numRows, nodes, bufferRegions, this._compression);
			const message = message_js_2.Message.from(recordBatch, byteLength);
			return this._writeDictionaries(batch)._writeMessage(message)._writeBodyBuffers(buffers);
		}
		_assembleRecordBatch(batch) {
			let { byteLength, nodes, bufferRegions, buffers } = vectorassembler_js_1.VectorAssembler.assemble(batch);
			if (this._compression != null) ({byteLength, bufferRegions, buffers} = this._compressBodyBuffers(buffers));
			return {
				byteLength,
				nodes,
				bufferRegions,
				buffers
			};
		}
		_compressBodyBuffers(buffers) {
			const codec = registry_js_1.compressionRegistry.get(this._compression.type);
			if (!(codec === null || codec === void 0 ? void 0 : codec.encode) || typeof codec.encode !== "function") throw new Error(`Codec for compression type "${compression_type_js_1.CompressionType[this._compression.type]}" has invalid encode method`);
			let currentOffset = 0;
			const compressedBuffers = [];
			const bufferRegions = [];
			for (const buffer of buffers) {
				const byteBuf = (0, buffer_js_1.toUint8Array)(buffer);
				if (byteBuf.length === 0) {
					compressedBuffers.push(new Uint8Array(0), new Uint8Array(0));
					bufferRegions.push(new metadata.BufferRegion(currentOffset, 0));
					continue;
				}
				const compressed = codec.encode(byteBuf);
				const isCompressionEffective = compressed.length < byteBuf.length;
				const finalBuffer = isCompressionEffective ? compressed : byteBuf;
				const byteLength = isCompressionEffective ? finalBuffer.length : constants_js_1.LENGTH_NO_COMPRESSED_DATA;
				const lengthPrefix = new flatbuffers.ByteBuffer(new Uint8Array(constants_js_1.COMPRESS_LENGTH_PREFIX));
				lengthPrefix.writeInt64(0, BigInt(byteLength));
				compressedBuffers.push(lengthPrefix.bytes(), new Uint8Array(finalBuffer));
				const padding = (currentOffset + 7 & -8) - currentOffset;
				currentOffset += padding;
				const fullBodyLength = constants_js_1.COMPRESS_LENGTH_PREFIX + finalBuffer.length;
				bufferRegions.push(new metadata.BufferRegion(currentOffset, fullBodyLength));
				currentOffset += fullBodyLength;
			}
			const finalPadding = (currentOffset + 7 & -8) - currentOffset;
			currentOffset += finalPadding;
			return {
				byteLength: currentOffset,
				bufferRegions,
				buffers: compressedBuffers
			};
		}
		_writeDictionaryBatch(dictionary, id, isDelta = false) {
			const { byteLength, nodes, bufferRegions, buffers } = this._assembleRecordBatch(new vector_js_1.Vector([dictionary]));
			const recordBatch = new metadata.RecordBatch(dictionary.length, nodes, bufferRegions, this._compression);
			const dictionaryBatch = new metadata.DictionaryBatch(recordBatch, id, isDelta);
			const message = message_js_2.Message.from(dictionaryBatch, byteLength);
			return this._writeMessage(message)._writeBodyBuffers(buffers);
		}
		_writeBodyBuffers(buffers) {
			const bufGroupSize = this._compression != null ? 2 : 1;
			const bufs = new Array(bufGroupSize);
			for (let i = 0; i < buffers.length; i += bufGroupSize) {
				let size = 0;
				for (let j = -1; ++j < bufGroupSize;) {
					bufs[j] = buffers[i + j];
					size += bufs[j].byteLength;
				}
				if (size === 0) continue;
				for (const buf of bufs) this._write(buf);
				const padding = (size + 7 & -8) - size;
				if (padding > 0) this._writePadding(padding);
			}
			return this;
		}
		_writeDictionaries(batch) {
			var _a, _b;
			for (const [id, dictionary] of batch.dictionaries) {
				const chunks = (_a = dictionary === null || dictionary === void 0 ? void 0 : dictionary.data) !== null && _a !== void 0 ? _a : [];
				const prevDictionary = this._seenDictionaries.get(id);
				const offset = (_b = this._dictionaryDeltaOffsets.get(id)) !== null && _b !== void 0 ? _b : 0;
				if (!prevDictionary || prevDictionary.data[0] !== chunks[0]) for (const [index, chunk] of chunks.entries()) this._writeDictionaryBatch(chunk, id, index > 0);
				else if (offset < chunks.length) for (const chunk of chunks.slice(offset)) this._writeDictionaryBatch(chunk, id, true);
				this._seenDictionaries.set(id, dictionary);
				this._dictionaryDeltaOffsets.set(id, chunks.length);
			}
			return this;
		}
	};
	exports.RecordBatchWriter = RecordBatchWriter;
	exports.RecordBatchStreamWriter = class RecordBatchStreamWriter extends RecordBatchWriter {
		/** @nocollapse */
		static writeAll(input, options) {
			const writer = new RecordBatchStreamWriter(options);
			if ((0, compat_js_1.isPromise)(input)) return input.then((x) => writer.writeAll(x));
			else if ((0, compat_js_1.isAsyncIterable)(input)) return writeAllAsync(writer, input);
			return writeAll(writer, input);
		}
	};
	exports.RecordBatchFileWriter = class RecordBatchFileWriter extends RecordBatchWriter {
		/** @nocollapse */
		static writeAll(input, options) {
			const writer = new RecordBatchFileWriter(options);
			if ((0, compat_js_1.isPromise)(input)) return input.then((x) => writer.writeAll(x));
			else if ((0, compat_js_1.isAsyncIterable)(input)) return writeAllAsync(writer, input);
			return writeAll(writer, input);
		}
		constructor(options) {
			super(options);
			this._autoDestroy = true;
			this._writeLegacyIpcFormat = false;
		}
		_writeSchema(schema) {
			return this._writeMagic()._writePadding(2);
		}
		_writeDictionaryBatch(dictionary, id, isDelta = false) {
			if (!isDelta && this._seenDictionaries.has(id)) throw new Error("The Arrow File format does not support replacement dictionaries. ");
			return super._writeDictionaryBatch(dictionary, id, isDelta);
		}
		_writeFooter(schema) {
			const buffer = file_js_1.Footer.encode(new file_js_1.Footer(schema, enum_js_1.MetadataVersion.V5, this._recordBatchBlocks, this._dictionaryBlocks));
			return super._writeFooter(schema)._write(buffer)._write(Int32Array.of(buffer.byteLength))._writeMagic();
		}
	};
	exports.RecordBatchJSONWriter = class RecordBatchJSONWriter extends RecordBatchWriter {
		/** @nocollapse */
		static writeAll(input) {
			return new RecordBatchJSONWriter().writeAll(input);
		}
		constructor() {
			super();
			this._autoDestroy = true;
			this._recordBatches = [];
			this._recordBatchesWithDictionaries = [];
		}
		_writeMessage() {
			return this;
		}
		_writeFooter(schema) {
			return this;
		}
		_writeSchema(schema) {
			return this._write(`{\n  "schema": ${JSON.stringify({ fields: schema.fields.map((field) => fieldToJSON(field)) }, null, 2)}`);
		}
		_writeDictionaries(batch) {
			if (batch.dictionaries.size > 0) this._recordBatchesWithDictionaries.push(batch);
			return this;
		}
		_writeDictionaryBatch(dictionary, id, isDelta = false) {
			this._write(this._dictionaryBlocks.length === 0 ? `    ` : `,\n    `);
			this._write(dictionaryBatchToJSON(dictionary, id, isDelta));
			this._dictionaryBlocks.push(new file_js_1.FileBlock(0, 0, 0));
			return this;
		}
		_writeRecordBatch(batch) {
			this._writeDictionaries(batch);
			this._recordBatches.push(batch);
			return this;
		}
		close() {
			if (this._recordBatchesWithDictionaries.length > 0) {
				this._write(`,\n  "dictionaries": [\n`);
				for (const batch of this._recordBatchesWithDictionaries) super._writeDictionaries(batch);
				this._write(`\n  ]`);
			}
			if (this._recordBatches.length > 0) {
				for (let i = -1, n = this._recordBatches.length; ++i < n;) {
					this._write(i === 0 ? `,\n  "batches": [\n    ` : `,\n    `);
					this._write(recordBatchToJSON(this._recordBatches[i]));
					this._recordBatchBlocks.push(new file_js_1.FileBlock(0, 0, 0));
				}
				this._write(`\n  ]`);
			}
			if (this._schema) this._write(`\n}`);
			this._recordBatchesWithDictionaries = [];
			this._recordBatches = [];
			return super.close();
		}
	};
	/** @ignore */
	function writeAll(writer, input) {
		let chunks = input;
		if (input instanceof table_js_1.Table) {
			chunks = input.batches;
			writer.reset(void 0, input.schema);
		}
		for (const batch of chunks) writer.write(batch);
		return writer.finish();
	}
	/** @ignore */
	function writeAllAsync(writer, batches) {
		return tslib_1.__awaiter(this, void 0, void 0, function* () {
			var _a, batches_1, batches_1_1;
			var _b, e_1, _c, _d;
			try {
				for (_a = true, batches_1 = tslib_1.__asyncValues(batches); batches_1_1 = yield batches_1.next(), _b = batches_1_1.done, !_b; _a = true) {
					_d = batches_1_1.value;
					_a = false;
					const batch = _d;
					writer.write(batch);
				}
			} catch (e_1_1) {
				e_1 = { error: e_1_1 };
			} finally {
				try {
					if (!_a && !_b && (_c = batches_1.return)) yield _c.call(batches_1);
				} finally {
					if (e_1) throw e_1.error;
				}
			}
			return writer.finish();
		});
	}
	/** @ignore */
	function fieldToJSON({ name, type, nullable }) {
		const assembler = new jsontypeassembler_js_1.JSONTypeAssembler();
		return {
			"name": name,
			"nullable": nullable,
			"type": assembler.visit(type),
			"children": (type.children || []).map((field) => fieldToJSON(field)),
			"dictionary": !type_js_1.DataType.isDictionary(type) ? void 0 : {
				"id": type.id,
				"isOrdered": type.isOrdered,
				"indexType": assembler.visit(type.indices)
			}
		};
	}
	/** @ignore */
	function dictionaryBatchToJSON(dictionary, id, isDelta = false) {
		const [columns] = jsonvectorassembler_js_1.JSONVectorAssembler.assemble(new recordbatch_js_1.RecordBatch({ [id]: dictionary }));
		return JSON.stringify({
			"id": id,
			"isDelta": isDelta,
			"data": {
				"count": dictionary.length,
				"columns": columns
			}
		}, null, 2);
	}
	/** @ignore */
	function recordBatchToJSON(records) {
		const [columns] = jsonvectorassembler_js_1.JSONVectorAssembler.assemble(records);
		return JSON.stringify({
			"count": records.numRows,
			"columns": columns
		}, null, 2);
	}
}));
//#endregion
//#region node_modules/apache-arrow/io/node/iterable.js
var require_iterable$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.toNodeStream = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var node_stream_1$3 = require("node:stream");
	var compat_js_1 = require_compat();
	/** @ignore */
	function toNodeStream(source, options) {
		if ((0, compat_js_1.isAsyncIterable)(source)) return new AsyncIterableReadable(source[Symbol.asyncIterator](), options);
		if ((0, compat_js_1.isIterable)(source)) return new IterableReadable(source[Symbol.iterator](), options);
		/* istanbul ignore next */
		throw new Error(`toNodeStream() must be called with an Iterable or AsyncIterable`);
	}
	exports.toNodeStream = toNodeStream;
	/** @ignore */
	var IterableReadable = class extends node_stream_1$3.Readable {
		constructor(it, options) {
			super(options);
			this._iterator = it;
			this._pulling = false;
			this._bytesMode = !options || !options.objectMode;
		}
		_read(size) {
			const it = this._iterator;
			if (it && !this._pulling && (this._pulling = true)) this._pulling = this._pull(size, it);
		}
		_destroy(e, cb) {
			const it = this._iterator;
			let fn;
			it && (fn = e != null && it.throw || it.return);
			fn === null || fn === void 0 || fn.call(it, e);
			cb && cb(null);
		}
		_pull(size, it) {
			const bm = this._bytesMode;
			let r = null;
			while (this.readable && !(r = it.next(bm ? size : null)).done) {
				if (size != null) size -= bm && ArrayBuffer.isView(r.value) ? r.value.byteLength : 1;
				if (!this.push(r.value) || size <= 0) break;
			}
			if (((r === null || r === void 0 ? void 0 : r.done) || !this.readable) && (this.push(null) || true)) it.return && it.return();
			return !this.readable;
		}
	};
	/** @ignore */
	var AsyncIterableReadable = class extends node_stream_1$3.Readable {
		constructor(it, options) {
			super(options);
			this._iterator = it;
			this._pulling = false;
			this._bytesMode = !options || !options.objectMode;
		}
		_read(size) {
			const it = this._iterator;
			if (it && !this._pulling && (this._pulling = true)) (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
				return this._pulling = yield this._pull(size, it);
			}))();
		}
		_destroy(e, cb) {
			const it = this._iterator;
			let fn;
			it && (fn = e != null && it.throw || it.return);
			!(fn === null || fn === void 0) && fn.call(it, e).then(() => cb && cb(null)) || cb && cb(null);
		}
		_pull(size, it) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				const bm = this._bytesMode;
				let r = null;
				while (this.readable && !(r = yield it.next(bm ? size : null)).done) {
					if (size != null) size -= bm && ArrayBuffer.isView(r.value) ? r.value.byteLength : 1;
					if (!this.push(r.value) || size <= 0) break;
				}
				if (((r === null || r === void 0 ? void 0 : r.done) || !this.readable) && (this.push(null) || true)) it.return && it.return();
				return !this.readable;
			});
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/io/node/builder.js
var require_builder$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.builderThroughNodeStream = void 0;
	var node_stream_1$2 = require("node:stream");
	var factories_js_1 = require_factories();
	/** @ignore */
	function builderThroughNodeStream(options) {
		return new BuilderDuplex((0, factories_js_1.makeBuilder)(options), options);
	}
	exports.builderThroughNodeStream = builderThroughNodeStream;
	/** @ignore */
	var BuilderDuplex = class extends node_stream_1$2.Duplex {
		constructor(builder, options) {
			const { queueingStrategy = "count", autoDestroy = true } = options;
			const { highWaterMark = queueingStrategy !== "bytes" ? 1e3 : Math.pow(2, 14) } = options;
			super({
				autoDestroy,
				highWaterMark: 1,
				allowHalfOpen: true,
				writableObjectMode: true,
				readableObjectMode: true
			});
			this._numChunks = 0;
			this._finished = false;
			this._builder = builder;
			this._desiredSize = highWaterMark;
			this._getSize = queueingStrategy !== "bytes" ? builderLength : builderByteLength;
		}
		_read(size) {
			this._maybeFlush(this._builder, this._desiredSize = size);
		}
		_final(cb) {
			this._maybeFlush(this._builder.finish(), this._desiredSize);
			cb && cb();
		}
		_write(value, _, cb) {
			const result = this._maybeFlush(this._builder.append(value), this._desiredSize);
			cb && cb();
			return result;
		}
		_destroy(err, cb) {
			this._builder.clear();
			cb && cb(err);
		}
		_maybeFlush(builder, size) {
			if (this._getSize(builder) >= size) ++this._numChunks && this.push(builder.toVector());
			if (builder.finished) {
				if (builder.length > 0 || this._numChunks === 0) ++this._numChunks && this.push(builder.toVector());
				if (!this._finished && (this._finished = true)) this.push(null);
				return false;
			}
			return this._getSize(builder) < this.writableHighWaterMark;
		}
	};
	/** @ignore */ var builderLength = (builder) => builder.length;
	/** @ignore */ var builderByteLength = (builder) => builder.byteLength;
}));
//#endregion
//#region node_modules/apache-arrow/io/node/reader.js
var require_reader$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.recordBatchReaderThroughNodeStream = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var node_stream_1$1 = require("node:stream");
	var stream_js_1 = require_stream();
	var reader_js_1 = require_reader$2();
	/** @ignore */
	function recordBatchReaderThroughNodeStream(options) {
		return new RecordBatchReaderDuplex(options);
	}
	exports.recordBatchReaderThroughNodeStream = recordBatchReaderThroughNodeStream;
	/** @ignore */
	var RecordBatchReaderDuplex = class extends node_stream_1$1.Duplex {
		constructor(options) {
			super(Object.assign(Object.assign({ allowHalfOpen: false }, options), {
				readableObjectMode: true,
				writableObjectMode: false
			}));
			this._pulling = false;
			this._autoDestroy = true;
			this._reader = null;
			this._pulling = false;
			this._asyncQueue = new stream_js_1.AsyncByteQueue();
			this._autoDestroy = options && typeof options.autoDestroy === "boolean" ? options.autoDestroy : true;
		}
		_final(cb) {
			const aq = this._asyncQueue;
			aq === null || aq === void 0 || aq.close();
			cb && cb();
		}
		_write(x, _, cb) {
			const aq = this._asyncQueue;
			aq === null || aq === void 0 || aq.write(x);
			cb && cb();
			return true;
		}
		_read(size) {
			const aq = this._asyncQueue;
			if (aq && !this._pulling && (this._pulling = true)) (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
				if (!this._reader) this._reader = yield this._open(aq);
				this._pulling = yield this._pull(size, this._reader);
			}))();
		}
		_destroy(err, cb) {
			const aq = this._asyncQueue;
			if (aq) err ? aq.abort(err) : aq.close();
			cb(this._asyncQueue = this._reader = null);
		}
		_open(source) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				return yield (yield reader_js_1.RecordBatchReader.from(source)).open({ autoDestroy: this._autoDestroy });
			});
		}
		_pull(size, reader) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				let r = null;
				while (this.readable && !(r = yield reader.next()).done) if (!this.push(r.value) || size != null && --size <= 0) break;
				if (!this.readable || (r === null || r === void 0 ? void 0 : r.done) && (reader.autoDestroy || (yield reader.reset().open()).closed)) {
					this.push(null);
					yield reader.cancel();
				}
				return !this.readable;
			});
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/io/node/writer.js
var require_writer$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.recordBatchWriterThroughNodeStream = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var node_stream_1 = require("node:stream");
	var stream_js_1 = require_stream();
	/** @ignore */
	function recordBatchWriterThroughNodeStream(options) {
		return new RecordBatchWriterDuplex(new this(options));
	}
	exports.recordBatchWriterThroughNodeStream = recordBatchWriterThroughNodeStream;
	/** @ignore */
	var RecordBatchWriterDuplex = class extends node_stream_1.Duplex {
		constructor(writer, options) {
			super(Object.assign(Object.assign({ allowHalfOpen: false }, options), {
				writableObjectMode: true,
				readableObjectMode: false
			}));
			this._pulling = false;
			this._writer = writer;
			this._reader = new stream_js_1.AsyncByteStream(writer);
		}
		_final(cb) {
			const writer = this._writer;
			writer === null || writer === void 0 || writer.close();
			cb && cb();
		}
		_write(x, _, cb) {
			const writer = this._writer;
			writer === null || writer === void 0 || writer.write(x);
			cb && cb();
			return true;
		}
		_read(size) {
			const it = this._reader;
			if (it && !this._pulling && (this._pulling = true)) (() => tslib_1.__awaiter(this, void 0, void 0, function* () {
				return this._pulling = yield this._pull(size, it);
			}))();
		}
		_destroy(err, cb) {
			const writer = this._writer;
			if (writer) err ? writer.abort(err) : writer.close();
			cb(this._reader = this._writer = null);
		}
		_pull(size, reader) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				let r = null;
				while (this.readable && !(r = yield reader.next(size || null)).done) {
					if (size != null && r.value) size -= r.value.byteLength;
					if (!this.push(r.value) || size <= 0) break;
				}
				if ((r === null || r === void 0 ? void 0 : r.done) || !this.readable) {
					this.push(null);
					yield reader.cancel();
				}
				return !this.readable;
			});
		}
	};
}));
//#endregion
//#region node_modules/apache-arrow/io/whatwg/iterable.js
var require_iterable = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.toDOMStream = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var buffer_js_1 = require_buffer$2();
	var compat_js_1 = require_compat();
	/** @ignore */
	function toDOMStream(source, options) {
		if ((0, compat_js_1.isAsyncIterable)(source)) return asyncIterableAsReadableDOMStream(source, options);
		if ((0, compat_js_1.isIterable)(source)) return iterableAsReadableDOMStream(source, options);
		/* istanbul ignore next */
		throw new Error(`toDOMStream() must be called with an Iterable or AsyncIterable`);
	}
	exports.toDOMStream = toDOMStream;
	/** @ignore */
	function iterableAsReadableDOMStream(source, options) {
		let it = null;
		const bm = (options === null || options === void 0 ? void 0 : options.type) === "bytes" || false;
		const hwm = (options === null || options === void 0 ? void 0 : options.highWaterMark) || Math.pow(2, 24);
		return new ReadableStream(Object.assign(Object.assign({}, options), {
			start(controller) {
				next(controller, it || (it = source[Symbol.iterator]()));
			},
			pull(controller) {
				it ? next(controller, it) : controller.close();
			},
			cancel() {
				!(it === null || it === void 0) && it.return && it.return();
				it = null;
			}
		}), Object.assign({ highWaterMark: bm ? hwm : void 0 }, options));
		function next(controller, it) {
			let buf;
			let r = null;
			let size = controller.desiredSize || null;
			while (!(r = it.next(bm ? size : null)).done) {
				if (ArrayBuffer.isView(r.value) && (buf = (0, buffer_js_1.toUint8Array)(r.value))) {
					size != null && bm && (size = size - buf.byteLength + 1);
					r.value = buf;
				}
				controller.enqueue(r.value);
				if (size != null && --size <= 0) return;
			}
			controller.close();
		}
	}
	/** @ignore */
	function asyncIterableAsReadableDOMStream(source, options) {
		let it = null;
		const bm = (options === null || options === void 0 ? void 0 : options.type) === "bytes" || false;
		const hwm = (options === null || options === void 0 ? void 0 : options.highWaterMark) || Math.pow(2, 24);
		return new ReadableStream(Object.assign(Object.assign({}, options), {
			start(controller) {
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					yield next(controller, it || (it = source[Symbol.asyncIterator]()));
				});
			},
			pull(controller) {
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					it ? yield next(controller, it) : controller.close();
				});
			},
			cancel() {
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					!(it === null || it === void 0) && it.return && (yield it.return());
					it = null;
				});
			}
		}), Object.assign({ highWaterMark: bm ? hwm : void 0 }, options));
		function next(controller, it) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				let buf;
				let r = null;
				let size = controller.desiredSize || null;
				while (!(r = yield it.next(bm ? size : null)).done) {
					if (ArrayBuffer.isView(r.value) && (buf = (0, buffer_js_1.toUint8Array)(r.value))) {
						size != null && bm && (size = size - buf.byteLength + 1);
						r.value = buf;
					}
					controller.enqueue(r.value);
					if (size != null && --size <= 0) return;
				}
				controller.close();
			});
		}
	}
}));
//#endregion
//#region node_modules/apache-arrow/io/whatwg/builder.js
var require_builder = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.BuilderTransform = exports.builderThroughDOMStream = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var factories_js_1 = require_factories();
	/** @ignore */
	function builderThroughDOMStream(options) {
		return new BuilderTransform(options);
	}
	exports.builderThroughDOMStream = builderThroughDOMStream;
	/** @ignore */
	var BuilderTransform = class {
		constructor(options) {
			this._numChunks = 0;
			this._finished = false;
			this._bufferedSize = 0;
			const { ["readableStrategy"]: readableStrategy, ["writableStrategy"]: writableStrategy, ["queueingStrategy"]: queueingStrategy = "count" } = options, builderOptions = tslib_1.__rest(options, [
				"readableStrategy",
				"writableStrategy",
				"queueingStrategy"
			]);
			this._controller = null;
			this._builder = (0, factories_js_1.makeBuilder)(builderOptions);
			this._getSize = queueingStrategy !== "bytes" ? chunkLength : chunkByteLength;
			const { ["highWaterMark"]: readableHighWaterMark = queueingStrategy === "bytes" ? Math.pow(2, 14) : 1e3 } = Object.assign({}, readableStrategy);
			const { ["highWaterMark"]: writableHighWaterMark = queueingStrategy === "bytes" ? Math.pow(2, 14) : 1e3 } = Object.assign({}, writableStrategy);
			this["readable"] = new ReadableStream({
				["cancel"]: () => {
					this._builder.clear();
				},
				["pull"]: (c) => {
					this._maybeFlush(this._builder, this._controller = c);
				},
				["start"]: (c) => {
					this._maybeFlush(this._builder, this._controller = c);
				}
			}, {
				"highWaterMark": readableHighWaterMark,
				"size": queueingStrategy !== "bytes" ? chunkLength : chunkByteLength
			});
			this["writable"] = new WritableStream({
				["abort"]: () => {
					this._builder.clear();
				},
				["write"]: () => {
					this._maybeFlush(this._builder, this._controller);
				},
				["close"]: () => {
					this._maybeFlush(this._builder.finish(), this._controller);
				}
			}, {
				"highWaterMark": writableHighWaterMark,
				"size": (value) => this._writeValueAndReturnChunkSize(value)
			});
		}
		_writeValueAndReturnChunkSize(value) {
			const bufferedSize = this._bufferedSize;
			this._bufferedSize = this._getSize(this._builder.append(value));
			return this._bufferedSize - bufferedSize;
		}
		_maybeFlush(builder, controller) {
			if (controller == null) return;
			if (this._bufferedSize >= controller.desiredSize) ++this._numChunks && this._enqueue(controller, builder.toVector());
			if (builder.finished) {
				if (builder.length > 0 || this._numChunks === 0) ++this._numChunks && this._enqueue(controller, builder.toVector());
				if (!this._finished && (this._finished = true)) this._enqueue(controller, null);
			}
		}
		_enqueue(controller, chunk) {
			this._bufferedSize = 0;
			this._controller = null;
			chunk == null ? controller.close() : controller.enqueue(chunk);
		}
	};
	exports.BuilderTransform = BuilderTransform;
	/** @ignore */ var chunkLength = (chunk) => {
		var _a;
		return (_a = chunk === null || chunk === void 0 ? void 0 : chunk.length) !== null && _a !== void 0 ? _a : 0;
	};
	/** @ignore */ var chunkByteLength = (chunk) => {
		var _a;
		return (_a = chunk === null || chunk === void 0 ? void 0 : chunk.byteLength) !== null && _a !== void 0 ? _a : 0;
	};
}));
//#endregion
//#region node_modules/apache-arrow/io/whatwg/reader.js
var require_reader = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.recordBatchReaderThroughDOMStream = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var stream_js_1 = require_stream();
	var reader_js_1 = require_reader$2();
	/** @ignore */
	function recordBatchReaderThroughDOMStream(writableStrategy, readableStrategy) {
		const queue = new stream_js_1.AsyncByteQueue();
		let reader = null;
		const readable = new ReadableStream({
			cancel() {
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					yield queue.close();
				});
			},
			start(controller) {
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					yield next(controller, reader || (reader = yield open()));
				});
			},
			pull(controller) {
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					reader ? yield next(controller, reader) : controller.close();
				});
			}
		});
		return {
			writable: new WritableStream(queue, Object.assign({ "highWaterMark": Math.pow(2, 14) }, writableStrategy)),
			readable
		};
		function open() {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				return yield (yield reader_js_1.RecordBatchReader.from(queue)).open(readableStrategy);
			});
		}
		function next(controller, reader) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				let size = controller.desiredSize;
				let r = null;
				while (!(r = yield reader.next()).done) {
					controller.enqueue(r.value);
					if (size != null && --size <= 0) return;
				}
				controller.close();
			});
		}
	}
	exports.recordBatchReaderThroughDOMStream = recordBatchReaderThroughDOMStream;
}));
//#endregion
//#region node_modules/apache-arrow/io/whatwg/writer.js
var require_writer = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.recordBatchWriterThroughDOMStream = void 0;
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var stream_js_1 = require_stream();
	/** @ignore */
	function recordBatchWriterThroughDOMStream(writableStrategy, readableStrategy) {
		const writer = new this(writableStrategy);
		const reader = new stream_js_1.AsyncByteStream(writer);
		const readable = new ReadableStream({
			cancel() {
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					yield reader.cancel();
				});
			},
			pull(controller) {
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					yield next(controller);
				});
			},
			start(controller) {
				return tslib_1.__awaiter(this, void 0, void 0, function* () {
					yield next(controller);
				});
			}
		}, Object.assign({ "highWaterMark": Math.pow(2, 14) }, readableStrategy));
		return {
			writable: new WritableStream(writer, writableStrategy),
			readable
		};
		function next(controller) {
			return tslib_1.__awaiter(this, void 0, void 0, function* () {
				let buf = null;
				let size = controller.desiredSize;
				while (buf = yield reader.read(size || null)) {
					controller.enqueue(buf);
					if (size != null && (size -= buf.byteLength) <= 0) return;
				}
				controller.close();
			});
		}
	}
	exports.recordBatchWriterThroughDOMStream = recordBatchWriterThroughDOMStream;
}));
//#endregion
//#region node_modules/apache-arrow/ipc/serialization.js
var require_serialization = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.tableToIPC = exports.tableFromIPC = void 0;
	var table_js_1 = require_table();
	var compat_js_1 = require_compat();
	var reader_js_1 = require_reader$2();
	var writer_js_1 = require_writer$2();
	function tableFromIPC(input) {
		const reader = reader_js_1.RecordBatchReader.from(input);
		if ((0, compat_js_1.isPromise)(reader)) return reader.then((reader) => tableFromIPC(reader));
		if (reader.isAsync()) return reader.readAll().then((xs) => new table_js_1.Table(xs));
		return new table_js_1.Table(reader.readAll());
	}
	exports.tableFromIPC = tableFromIPC;
	/**
	* Serialize a {@link Table} to the IPC format. This function is a convenience
	* wrapper for {@link RecordBatchStreamWriter} and {@link RecordBatchFileWriter}.
	* Opposite of {@link tableFromIPC}.
	*
	* @param table The Table to serialize.
	* @param type Whether to serialize the Table as a file or a stream.
	*/
	function tableToIPC(table, type = "stream", compressionType = null) {
		const writerOptions = { compressionType };
		return (type === "stream" ? writer_js_1.RecordBatchStreamWriter : writer_js_1.RecordBatchFileWriter).writeAll(table, writerOptions).toUint8Array(true);
	}
	exports.tableToIPC = tableToIPC;
}));
//#endregion
//#region node_modules/apache-arrow/Arrow.js
var require_Arrow = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Union = exports.Struct = exports.List = exports.Decimal = exports.TimeNanosecond = exports.TimeMicrosecond = exports.TimeMillisecond = exports.TimeSecond = exports.Time = exports.TimestampNanosecond = exports.TimestampMicrosecond = exports.TimestampMillisecond = exports.TimestampSecond = exports.Timestamp = exports.DateMillisecond = exports.DateDay = exports.Date_ = exports.FixedSizeBinary = exports.LargeBinary = exports.Binary = exports.LargeUtf8 = exports.Utf8 = exports.Float64 = exports.Float32 = exports.Float16 = exports.Float = exports.Uint64 = exports.Uint32 = exports.Uint16 = exports.Uint8 = exports.Int64 = exports.Int32 = exports.Int16 = exports.Int8 = exports.Int = exports.Bool = exports.Null = exports.DataType = exports.makeData = exports.Data = exports.MetadataVersion = exports.IntervalUnit = exports.UnionMode = exports.Precision = exports.TimeUnit = exports.DateUnit = exports.BufferType = exports.Type = exports.CompressionType = exports.MessageHeader = void 0;
	exports.Uint32Builder = exports.Uint16Builder = exports.Uint8Builder = exports.Int64Builder = exports.Int32Builder = exports.Int16Builder = exports.Int8Builder = exports.IntBuilder = exports.Float64Builder = exports.Float32Builder = exports.Float16Builder = exports.FloatBuilder = exports.FixedSizeBinaryBuilder = exports.DictionaryBuilder = exports.DecimalBuilder = exports.DateMillisecondBuilder = exports.DateDayBuilder = exports.DateBuilder = exports.NullBuilder = exports.BoolBuilder = exports.builderThroughAsyncIterable = exports.builderThroughIterable = exports.tableFromJSON = exports.vectorFromArray = exports.makeBuilder = exports.Builder = exports.StructRow = exports.MapRow = exports.Field = exports.Schema = exports.Visitor = exports.makeVector = exports.Vector = exports.tableFromArrays = exports.makeTable = exports.Table = exports.Map_ = exports.FixedSizeList = exports.DurationNanosecond = exports.DurationMicrosecond = exports.DurationMillisecond = exports.DurationSecond = exports.Duration = exports.IntervalMonthDayNano = exports.IntervalYearMonth = exports.IntervalDayTime = exports.Interval = exports.Dictionary = exports.SparseUnion = exports.DenseUnion = void 0;
	exports.Message = exports.JSONMessageReader = exports.AsyncMessageReader = exports.MessageReader = exports.compressionRegistry = exports.tableFromIPC = exports.tableToIPC = exports.RecordBatchJSONWriter = exports.RecordBatchStreamWriter = exports.RecordBatchFileWriter = exports.RecordBatchWriter = exports.AsyncRecordBatchStreamReader = exports.AsyncRecordBatchFileReader = exports.RecordBatchStreamReader = exports.RecordBatchFileReader = exports.RecordBatchReader = exports.AsyncByteQueue = exports.AsyncByteStream = exports.ByteStream = exports.DenseUnionBuilder = exports.SparseUnionBuilder = exports.UnionBuilder = exports.StructBuilder = exports.MapBuilder = exports.FixedSizeListBuilder = exports.ListBuilder = exports.LargeBinaryBuilder = exports.BinaryBuilder = exports.LargeUtf8Builder = exports.Utf8Builder = exports.DurationNanosecondBuilder = exports.DurationMicrosecondBuilder = exports.DurationMillisecondBuilder = exports.DurationSecondBuilder = exports.DurationBuilder = exports.IntervalMonthDayNanoBuilder = exports.IntervalYearMonthBuilder = exports.IntervalDayTimeBuilder = exports.IntervalBuilder = exports.TimestampNanosecondBuilder = exports.TimestampMicrosecondBuilder = exports.TimestampMillisecondBuilder = exports.TimestampSecondBuilder = exports.TimestampBuilder = exports.TimeNanosecondBuilder = exports.TimeMicrosecondBuilder = exports.TimeMillisecondBuilder = exports.TimeSecondBuilder = exports.TimeBuilder = exports.Uint64Builder = void 0;
	exports.util = exports.RecordBatch = void 0;
	var message_header_js_1 = require_message_header();
	Object.defineProperty(exports, "MessageHeader", {
		enumerable: true,
		get: function() {
			return message_header_js_1.MessageHeader;
		}
	});
	var compression_type_js_1 = require_compression_type();
	Object.defineProperty(exports, "CompressionType", {
		enumerable: true,
		get: function() {
			return compression_type_js_1.CompressionType;
		}
	});
	var enum_js_1 = require_enum();
	Object.defineProperty(exports, "Type", {
		enumerable: true,
		get: function() {
			return enum_js_1.Type;
		}
	});
	Object.defineProperty(exports, "BufferType", {
		enumerable: true,
		get: function() {
			return enum_js_1.BufferType;
		}
	});
	Object.defineProperty(exports, "DateUnit", {
		enumerable: true,
		get: function() {
			return enum_js_1.DateUnit;
		}
	});
	Object.defineProperty(exports, "TimeUnit", {
		enumerable: true,
		get: function() {
			return enum_js_1.TimeUnit;
		}
	});
	Object.defineProperty(exports, "Precision", {
		enumerable: true,
		get: function() {
			return enum_js_1.Precision;
		}
	});
	Object.defineProperty(exports, "UnionMode", {
		enumerable: true,
		get: function() {
			return enum_js_1.UnionMode;
		}
	});
	Object.defineProperty(exports, "IntervalUnit", {
		enumerable: true,
		get: function() {
			return enum_js_1.IntervalUnit;
		}
	});
	Object.defineProperty(exports, "MetadataVersion", {
		enumerable: true,
		get: function() {
			return enum_js_1.MetadataVersion;
		}
	});
	var data_js_1 = require_data();
	Object.defineProperty(exports, "Data", {
		enumerable: true,
		get: function() {
			return data_js_1.Data;
		}
	});
	Object.defineProperty(exports, "makeData", {
		enumerable: true,
		get: function() {
			return data_js_1.makeData;
		}
	});
	var type_js_1 = require_type();
	Object.defineProperty(exports, "DataType", {
		enumerable: true,
		get: function() {
			return type_js_1.DataType;
		}
	});
	Object.defineProperty(exports, "Null", {
		enumerable: true,
		get: function() {
			return type_js_1.Null;
		}
	});
	Object.defineProperty(exports, "Bool", {
		enumerable: true,
		get: function() {
			return type_js_1.Bool;
		}
	});
	Object.defineProperty(exports, "Int", {
		enumerable: true,
		get: function() {
			return type_js_1.Int;
		}
	});
	Object.defineProperty(exports, "Int8", {
		enumerable: true,
		get: function() {
			return type_js_1.Int8;
		}
	});
	Object.defineProperty(exports, "Int16", {
		enumerable: true,
		get: function() {
			return type_js_1.Int16;
		}
	});
	Object.defineProperty(exports, "Int32", {
		enumerable: true,
		get: function() {
			return type_js_1.Int32;
		}
	});
	Object.defineProperty(exports, "Int64", {
		enumerable: true,
		get: function() {
			return type_js_1.Int64;
		}
	});
	Object.defineProperty(exports, "Uint8", {
		enumerable: true,
		get: function() {
			return type_js_1.Uint8;
		}
	});
	Object.defineProperty(exports, "Uint16", {
		enumerable: true,
		get: function() {
			return type_js_1.Uint16;
		}
	});
	Object.defineProperty(exports, "Uint32", {
		enumerable: true,
		get: function() {
			return type_js_1.Uint32;
		}
	});
	Object.defineProperty(exports, "Uint64", {
		enumerable: true,
		get: function() {
			return type_js_1.Uint64;
		}
	});
	Object.defineProperty(exports, "Float", {
		enumerable: true,
		get: function() {
			return type_js_1.Float;
		}
	});
	Object.defineProperty(exports, "Float16", {
		enumerable: true,
		get: function() {
			return type_js_1.Float16;
		}
	});
	Object.defineProperty(exports, "Float32", {
		enumerable: true,
		get: function() {
			return type_js_1.Float32;
		}
	});
	Object.defineProperty(exports, "Float64", {
		enumerable: true,
		get: function() {
			return type_js_1.Float64;
		}
	});
	Object.defineProperty(exports, "Utf8", {
		enumerable: true,
		get: function() {
			return type_js_1.Utf8;
		}
	});
	Object.defineProperty(exports, "LargeUtf8", {
		enumerable: true,
		get: function() {
			return type_js_1.LargeUtf8;
		}
	});
	Object.defineProperty(exports, "Binary", {
		enumerable: true,
		get: function() {
			return type_js_1.Binary;
		}
	});
	Object.defineProperty(exports, "LargeBinary", {
		enumerable: true,
		get: function() {
			return type_js_1.LargeBinary;
		}
	});
	Object.defineProperty(exports, "FixedSizeBinary", {
		enumerable: true,
		get: function() {
			return type_js_1.FixedSizeBinary;
		}
	});
	Object.defineProperty(exports, "Date_", {
		enumerable: true,
		get: function() {
			return type_js_1.Date_;
		}
	});
	Object.defineProperty(exports, "DateDay", {
		enumerable: true,
		get: function() {
			return type_js_1.DateDay;
		}
	});
	Object.defineProperty(exports, "DateMillisecond", {
		enumerable: true,
		get: function() {
			return type_js_1.DateMillisecond;
		}
	});
	Object.defineProperty(exports, "Timestamp", {
		enumerable: true,
		get: function() {
			return type_js_1.Timestamp;
		}
	});
	Object.defineProperty(exports, "TimestampSecond", {
		enumerable: true,
		get: function() {
			return type_js_1.TimestampSecond;
		}
	});
	Object.defineProperty(exports, "TimestampMillisecond", {
		enumerable: true,
		get: function() {
			return type_js_1.TimestampMillisecond;
		}
	});
	Object.defineProperty(exports, "TimestampMicrosecond", {
		enumerable: true,
		get: function() {
			return type_js_1.TimestampMicrosecond;
		}
	});
	Object.defineProperty(exports, "TimestampNanosecond", {
		enumerable: true,
		get: function() {
			return type_js_1.TimestampNanosecond;
		}
	});
	Object.defineProperty(exports, "Time", {
		enumerable: true,
		get: function() {
			return type_js_1.Time;
		}
	});
	Object.defineProperty(exports, "TimeSecond", {
		enumerable: true,
		get: function() {
			return type_js_1.TimeSecond;
		}
	});
	Object.defineProperty(exports, "TimeMillisecond", {
		enumerable: true,
		get: function() {
			return type_js_1.TimeMillisecond;
		}
	});
	Object.defineProperty(exports, "TimeMicrosecond", {
		enumerable: true,
		get: function() {
			return type_js_1.TimeMicrosecond;
		}
	});
	Object.defineProperty(exports, "TimeNanosecond", {
		enumerable: true,
		get: function() {
			return type_js_1.TimeNanosecond;
		}
	});
	Object.defineProperty(exports, "Decimal", {
		enumerable: true,
		get: function() {
			return type_js_1.Decimal;
		}
	});
	Object.defineProperty(exports, "List", {
		enumerable: true,
		get: function() {
			return type_js_1.List;
		}
	});
	Object.defineProperty(exports, "Struct", {
		enumerable: true,
		get: function() {
			return type_js_1.Struct;
		}
	});
	Object.defineProperty(exports, "Union", {
		enumerable: true,
		get: function() {
			return type_js_1.Union;
		}
	});
	Object.defineProperty(exports, "DenseUnion", {
		enumerable: true,
		get: function() {
			return type_js_1.DenseUnion;
		}
	});
	Object.defineProperty(exports, "SparseUnion", {
		enumerable: true,
		get: function() {
			return type_js_1.SparseUnion;
		}
	});
	Object.defineProperty(exports, "Dictionary", {
		enumerable: true,
		get: function() {
			return type_js_1.Dictionary;
		}
	});
	Object.defineProperty(exports, "Interval", {
		enumerable: true,
		get: function() {
			return type_js_1.Interval;
		}
	});
	Object.defineProperty(exports, "IntervalDayTime", {
		enumerable: true,
		get: function() {
			return type_js_1.IntervalDayTime;
		}
	});
	Object.defineProperty(exports, "IntervalYearMonth", {
		enumerable: true,
		get: function() {
			return type_js_1.IntervalYearMonth;
		}
	});
	Object.defineProperty(exports, "IntervalMonthDayNano", {
		enumerable: true,
		get: function() {
			return type_js_1.IntervalMonthDayNano;
		}
	});
	Object.defineProperty(exports, "Duration", {
		enumerable: true,
		get: function() {
			return type_js_1.Duration;
		}
	});
	Object.defineProperty(exports, "DurationSecond", {
		enumerable: true,
		get: function() {
			return type_js_1.DurationSecond;
		}
	});
	Object.defineProperty(exports, "DurationMillisecond", {
		enumerable: true,
		get: function() {
			return type_js_1.DurationMillisecond;
		}
	});
	Object.defineProperty(exports, "DurationMicrosecond", {
		enumerable: true,
		get: function() {
			return type_js_1.DurationMicrosecond;
		}
	});
	Object.defineProperty(exports, "DurationNanosecond", {
		enumerable: true,
		get: function() {
			return type_js_1.DurationNanosecond;
		}
	});
	Object.defineProperty(exports, "FixedSizeList", {
		enumerable: true,
		get: function() {
			return type_js_1.FixedSizeList;
		}
	});
	Object.defineProperty(exports, "Map_", {
		enumerable: true,
		get: function() {
			return type_js_1.Map_;
		}
	});
	var table_js_1 = require_table();
	Object.defineProperty(exports, "Table", {
		enumerable: true,
		get: function() {
			return table_js_1.Table;
		}
	});
	Object.defineProperty(exports, "makeTable", {
		enumerable: true,
		get: function() {
			return table_js_1.makeTable;
		}
	});
	Object.defineProperty(exports, "tableFromArrays", {
		enumerable: true,
		get: function() {
			return table_js_1.tableFromArrays;
		}
	});
	var vector_js_1 = require_vector();
	Object.defineProperty(exports, "Vector", {
		enumerable: true,
		get: function() {
			return vector_js_1.Vector;
		}
	});
	Object.defineProperty(exports, "makeVector", {
		enumerable: true,
		get: function() {
			return vector_js_1.makeVector;
		}
	});
	var visitor_js_1 = require_visitor();
	Object.defineProperty(exports, "Visitor", {
		enumerable: true,
		get: function() {
			return visitor_js_1.Visitor;
		}
	});
	var schema_js_1 = require_schema();
	Object.defineProperty(exports, "Schema", {
		enumerable: true,
		get: function() {
			return schema_js_1.Schema;
		}
	});
	Object.defineProperty(exports, "Field", {
		enumerable: true,
		get: function() {
			return schema_js_1.Field;
		}
	});
	var map_js_1 = require_map$1();
	Object.defineProperty(exports, "MapRow", {
		enumerable: true,
		get: function() {
			return map_js_1.MapRow;
		}
	});
	var struct_js_1 = require_struct$1();
	Object.defineProperty(exports, "StructRow", {
		enumerable: true,
		get: function() {
			return struct_js_1.StructRow;
		}
	});
	var builder_js_1 = require_builder$2();
	Object.defineProperty(exports, "Builder", {
		enumerable: true,
		get: function() {
			return builder_js_1.Builder;
		}
	});
	var factories_js_1 = require_factories();
	Object.defineProperty(exports, "makeBuilder", {
		enumerable: true,
		get: function() {
			return factories_js_1.makeBuilder;
		}
	});
	Object.defineProperty(exports, "vectorFromArray", {
		enumerable: true,
		get: function() {
			return factories_js_1.vectorFromArray;
		}
	});
	Object.defineProperty(exports, "tableFromJSON", {
		enumerable: true,
		get: function() {
			return factories_js_1.tableFromJSON;
		}
	});
	Object.defineProperty(exports, "builderThroughIterable", {
		enumerable: true,
		get: function() {
			return factories_js_1.builderThroughIterable;
		}
	});
	Object.defineProperty(exports, "builderThroughAsyncIterable", {
		enumerable: true,
		get: function() {
			return factories_js_1.builderThroughAsyncIterable;
		}
	});
	var bool_js_1 = require_bool();
	Object.defineProperty(exports, "BoolBuilder", {
		enumerable: true,
		get: function() {
			return bool_js_1.BoolBuilder;
		}
	});
	var null_js_1 = require_null();
	Object.defineProperty(exports, "NullBuilder", {
		enumerable: true,
		get: function() {
			return null_js_1.NullBuilder;
		}
	});
	var date_js_1 = require_date();
	Object.defineProperty(exports, "DateBuilder", {
		enumerable: true,
		get: function() {
			return date_js_1.DateBuilder;
		}
	});
	Object.defineProperty(exports, "DateDayBuilder", {
		enumerable: true,
		get: function() {
			return date_js_1.DateDayBuilder;
		}
	});
	Object.defineProperty(exports, "DateMillisecondBuilder", {
		enumerable: true,
		get: function() {
			return date_js_1.DateMillisecondBuilder;
		}
	});
	var decimal_js_1 = require_decimal();
	Object.defineProperty(exports, "DecimalBuilder", {
		enumerable: true,
		get: function() {
			return decimal_js_1.DecimalBuilder;
		}
	});
	var dictionary_js_1 = require_dictionary();
	Object.defineProperty(exports, "DictionaryBuilder", {
		enumerable: true,
		get: function() {
			return dictionary_js_1.DictionaryBuilder;
		}
	});
	var fixedsizebinary_js_1 = require_fixedsizebinary();
	Object.defineProperty(exports, "FixedSizeBinaryBuilder", {
		enumerable: true,
		get: function() {
			return fixedsizebinary_js_1.FixedSizeBinaryBuilder;
		}
	});
	var float_js_1 = require_float();
	Object.defineProperty(exports, "FloatBuilder", {
		enumerable: true,
		get: function() {
			return float_js_1.FloatBuilder;
		}
	});
	Object.defineProperty(exports, "Float16Builder", {
		enumerable: true,
		get: function() {
			return float_js_1.Float16Builder;
		}
	});
	Object.defineProperty(exports, "Float32Builder", {
		enumerable: true,
		get: function() {
			return float_js_1.Float32Builder;
		}
	});
	Object.defineProperty(exports, "Float64Builder", {
		enumerable: true,
		get: function() {
			return float_js_1.Float64Builder;
		}
	});
	var int_js_1 = require_int();
	Object.defineProperty(exports, "IntBuilder", {
		enumerable: true,
		get: function() {
			return int_js_1.IntBuilder;
		}
	});
	Object.defineProperty(exports, "Int8Builder", {
		enumerable: true,
		get: function() {
			return int_js_1.Int8Builder;
		}
	});
	Object.defineProperty(exports, "Int16Builder", {
		enumerable: true,
		get: function() {
			return int_js_1.Int16Builder;
		}
	});
	Object.defineProperty(exports, "Int32Builder", {
		enumerable: true,
		get: function() {
			return int_js_1.Int32Builder;
		}
	});
	Object.defineProperty(exports, "Int64Builder", {
		enumerable: true,
		get: function() {
			return int_js_1.Int64Builder;
		}
	});
	Object.defineProperty(exports, "Uint8Builder", {
		enumerable: true,
		get: function() {
			return int_js_1.Uint8Builder;
		}
	});
	Object.defineProperty(exports, "Uint16Builder", {
		enumerable: true,
		get: function() {
			return int_js_1.Uint16Builder;
		}
	});
	Object.defineProperty(exports, "Uint32Builder", {
		enumerable: true,
		get: function() {
			return int_js_1.Uint32Builder;
		}
	});
	Object.defineProperty(exports, "Uint64Builder", {
		enumerable: true,
		get: function() {
			return int_js_1.Uint64Builder;
		}
	});
	var time_js_1 = require_time();
	Object.defineProperty(exports, "TimeBuilder", {
		enumerable: true,
		get: function() {
			return time_js_1.TimeBuilder;
		}
	});
	Object.defineProperty(exports, "TimeSecondBuilder", {
		enumerable: true,
		get: function() {
			return time_js_1.TimeSecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimeMillisecondBuilder", {
		enumerable: true,
		get: function() {
			return time_js_1.TimeMillisecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimeMicrosecondBuilder", {
		enumerable: true,
		get: function() {
			return time_js_1.TimeMicrosecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimeNanosecondBuilder", {
		enumerable: true,
		get: function() {
			return time_js_1.TimeNanosecondBuilder;
		}
	});
	var timestamp_js_1 = require_timestamp();
	Object.defineProperty(exports, "TimestampBuilder", {
		enumerable: true,
		get: function() {
			return timestamp_js_1.TimestampBuilder;
		}
	});
	Object.defineProperty(exports, "TimestampSecondBuilder", {
		enumerable: true,
		get: function() {
			return timestamp_js_1.TimestampSecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimestampMillisecondBuilder", {
		enumerable: true,
		get: function() {
			return timestamp_js_1.TimestampMillisecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimestampMicrosecondBuilder", {
		enumerable: true,
		get: function() {
			return timestamp_js_1.TimestampMicrosecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimestampNanosecondBuilder", {
		enumerable: true,
		get: function() {
			return timestamp_js_1.TimestampNanosecondBuilder;
		}
	});
	var interval_js_1 = require_interval();
	Object.defineProperty(exports, "IntervalBuilder", {
		enumerable: true,
		get: function() {
			return interval_js_1.IntervalBuilder;
		}
	});
	Object.defineProperty(exports, "IntervalDayTimeBuilder", {
		enumerable: true,
		get: function() {
			return interval_js_1.IntervalDayTimeBuilder;
		}
	});
	Object.defineProperty(exports, "IntervalYearMonthBuilder", {
		enumerable: true,
		get: function() {
			return interval_js_1.IntervalYearMonthBuilder;
		}
	});
	Object.defineProperty(exports, "IntervalMonthDayNanoBuilder", {
		enumerable: true,
		get: function() {
			return interval_js_1.IntervalMonthDayNanoBuilder;
		}
	});
	var duration_js_1 = require_duration();
	Object.defineProperty(exports, "DurationBuilder", {
		enumerable: true,
		get: function() {
			return duration_js_1.DurationBuilder;
		}
	});
	Object.defineProperty(exports, "DurationSecondBuilder", {
		enumerable: true,
		get: function() {
			return duration_js_1.DurationSecondBuilder;
		}
	});
	Object.defineProperty(exports, "DurationMillisecondBuilder", {
		enumerable: true,
		get: function() {
			return duration_js_1.DurationMillisecondBuilder;
		}
	});
	Object.defineProperty(exports, "DurationMicrosecondBuilder", {
		enumerable: true,
		get: function() {
			return duration_js_1.DurationMicrosecondBuilder;
		}
	});
	Object.defineProperty(exports, "DurationNanosecondBuilder", {
		enumerable: true,
		get: function() {
			return duration_js_1.DurationNanosecondBuilder;
		}
	});
	var utf8_js_1 = require_utf8();
	Object.defineProperty(exports, "Utf8Builder", {
		enumerable: true,
		get: function() {
			return utf8_js_1.Utf8Builder;
		}
	});
	var largeutf8_js_1 = require_largeutf8();
	Object.defineProperty(exports, "LargeUtf8Builder", {
		enumerable: true,
		get: function() {
			return largeutf8_js_1.LargeUtf8Builder;
		}
	});
	var binary_js_1 = require_binary();
	Object.defineProperty(exports, "BinaryBuilder", {
		enumerable: true,
		get: function() {
			return binary_js_1.BinaryBuilder;
		}
	});
	var largebinary_js_1 = require_largebinary();
	Object.defineProperty(exports, "LargeBinaryBuilder", {
		enumerable: true,
		get: function() {
			return largebinary_js_1.LargeBinaryBuilder;
		}
	});
	var list_js_1 = require_list();
	Object.defineProperty(exports, "ListBuilder", {
		enumerable: true,
		get: function() {
			return list_js_1.ListBuilder;
		}
	});
	var fixedsizelist_js_1 = require_fixedsizelist();
	Object.defineProperty(exports, "FixedSizeListBuilder", {
		enumerable: true,
		get: function() {
			return fixedsizelist_js_1.FixedSizeListBuilder;
		}
	});
	var map_js_2 = require_map();
	Object.defineProperty(exports, "MapBuilder", {
		enumerable: true,
		get: function() {
			return map_js_2.MapBuilder;
		}
	});
	var struct_js_2 = require_struct();
	Object.defineProperty(exports, "StructBuilder", {
		enumerable: true,
		get: function() {
			return struct_js_2.StructBuilder;
		}
	});
	var union_js_1 = require_union();
	Object.defineProperty(exports, "UnionBuilder", {
		enumerable: true,
		get: function() {
			return union_js_1.UnionBuilder;
		}
	});
	Object.defineProperty(exports, "SparseUnionBuilder", {
		enumerable: true,
		get: function() {
			return union_js_1.SparseUnionBuilder;
		}
	});
	Object.defineProperty(exports, "DenseUnionBuilder", {
		enumerable: true,
		get: function() {
			return union_js_1.DenseUnionBuilder;
		}
	});
	var stream_js_1 = require_stream();
	Object.defineProperty(exports, "ByteStream", {
		enumerable: true,
		get: function() {
			return stream_js_1.ByteStream;
		}
	});
	Object.defineProperty(exports, "AsyncByteStream", {
		enumerable: true,
		get: function() {
			return stream_js_1.AsyncByteStream;
		}
	});
	Object.defineProperty(exports, "AsyncByteQueue", {
		enumerable: true,
		get: function() {
			return stream_js_1.AsyncByteQueue;
		}
	});
	var reader_js_1 = require_reader$2();
	Object.defineProperty(exports, "RecordBatchReader", {
		enumerable: true,
		get: function() {
			return reader_js_1.RecordBatchReader;
		}
	});
	Object.defineProperty(exports, "RecordBatchFileReader", {
		enumerable: true,
		get: function() {
			return reader_js_1.RecordBatchFileReader;
		}
	});
	Object.defineProperty(exports, "RecordBatchStreamReader", {
		enumerable: true,
		get: function() {
			return reader_js_1.RecordBatchStreamReader;
		}
	});
	Object.defineProperty(exports, "AsyncRecordBatchFileReader", {
		enumerable: true,
		get: function() {
			return reader_js_1.AsyncRecordBatchFileReader;
		}
	});
	Object.defineProperty(exports, "AsyncRecordBatchStreamReader", {
		enumerable: true,
		get: function() {
			return reader_js_1.AsyncRecordBatchStreamReader;
		}
	});
	var writer_js_1 = require_writer$2();
	Object.defineProperty(exports, "RecordBatchWriter", {
		enumerable: true,
		get: function() {
			return writer_js_1.RecordBatchWriter;
		}
	});
	Object.defineProperty(exports, "RecordBatchFileWriter", {
		enumerable: true,
		get: function() {
			return writer_js_1.RecordBatchFileWriter;
		}
	});
	Object.defineProperty(exports, "RecordBatchStreamWriter", {
		enumerable: true,
		get: function() {
			return writer_js_1.RecordBatchStreamWriter;
		}
	});
	Object.defineProperty(exports, "RecordBatchJSONWriter", {
		enumerable: true,
		get: function() {
			return writer_js_1.RecordBatchJSONWriter;
		}
	});
	var serialization_js_1 = require_serialization();
	Object.defineProperty(exports, "tableToIPC", {
		enumerable: true,
		get: function() {
			return serialization_js_1.tableToIPC;
		}
	});
	Object.defineProperty(exports, "tableFromIPC", {
		enumerable: true,
		get: function() {
			return serialization_js_1.tableFromIPC;
		}
	});
	var registry_js_1 = require_registry();
	Object.defineProperty(exports, "compressionRegistry", {
		enumerable: true,
		get: function() {
			return registry_js_1.compressionRegistry;
		}
	});
	var message_js_1 = require_message();
	Object.defineProperty(exports, "MessageReader", {
		enumerable: true,
		get: function() {
			return message_js_1.MessageReader;
		}
	});
	Object.defineProperty(exports, "AsyncMessageReader", {
		enumerable: true,
		get: function() {
			return message_js_1.AsyncMessageReader;
		}
	});
	Object.defineProperty(exports, "JSONMessageReader", {
		enumerable: true,
		get: function() {
			return message_js_1.JSONMessageReader;
		}
	});
	var message_js_2 = require_message$1();
	Object.defineProperty(exports, "Message", {
		enumerable: true,
		get: function() {
			return message_js_2.Message;
		}
	});
	var recordbatch_js_1 = require_recordbatch();
	Object.defineProperty(exports, "RecordBatch", {
		enumerable: true,
		get: function() {
			return recordbatch_js_1.RecordBatch;
		}
	});
	var util_bn_ = require_bn();
	var util_int_ = require_int$1();
	var util_bit_ = require_bit();
	var util_math_ = require_math();
	var util_buffer_ = require_buffer$2();
	var util_vector_ = require_vector$1();
	var util_pretty_ = require_pretty();
	var util_interval_ = require_interval$1();
	var typecomparator_js_1 = require_typecomparator();
	/** @ignore */
	exports.util = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, util_bn_), util_int_), util_bit_), util_math_), util_buffer_), util_vector_), util_pretty_), util_interval_), {
		compareSchemas: typecomparator_js_1.compareSchemas,
		compareFields: typecomparator_js_1.compareFields,
		compareTypes: typecomparator_js_1.compareTypes
	});
}));
//#endregion
//#region node_modules/apache-arrow/Arrow.dom.js
var require_Arrow_dom = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Union = exports.StructRow = exports.Struct = exports.List = exports.Decimal = exports.TimeNanosecond = exports.TimeMicrosecond = exports.TimeMillisecond = exports.TimeSecond = exports.Time = exports.TimestampNanosecond = exports.TimestampMicrosecond = exports.TimestampMillisecond = exports.TimestampSecond = exports.Timestamp = exports.DateMillisecond = exports.DateDay = exports.Date_ = exports.FixedSizeBinary = exports.LargeBinary = exports.Binary = exports.LargeUtf8 = exports.Utf8 = exports.Float64 = exports.Float32 = exports.Float16 = exports.Float = exports.Uint64 = exports.Uint32 = exports.Uint16 = exports.Uint8 = exports.Int64 = exports.Int32 = exports.Int16 = exports.Int8 = exports.Int = exports.Bool = exports.Null = exports.DataType = exports.makeData = exports.Data = exports.BufferType = exports.UnionMode = exports.Type = exports.TimeUnit = exports.Precision = exports.MetadataVersion = exports.MessageHeader = exports.IntervalUnit = exports.DateUnit = void 0;
	exports.compressionRegistry = exports.builderThroughAsyncIterable = exports.builderThroughIterable = exports.makeBuilder = exports.Builder = exports.util = exports.RecordBatch = exports.Message = exports.JSONMessageReader = exports.AsyncMessageReader = exports.MessageReader = exports.tableToIPC = exports.tableFromIPC = exports.RecordBatchJSONWriter = exports.RecordBatchStreamWriter = exports.RecordBatchFileWriter = exports.RecordBatchWriter = exports.AsyncRecordBatchStreamReader = exports.AsyncRecordBatchFileReader = exports.RecordBatchStreamReader = exports.RecordBatchFileReader = exports.RecordBatchReader = exports.AsyncByteQueue = exports.AsyncByteStream = exports.ByteStream = exports.tableFromJSON = exports.vectorFromArray = exports.makeVector = exports.Vector = exports.Visitor = exports.Field = exports.Schema = exports.tableFromArrays = exports.makeTable = exports.Table = exports.MapRow = exports.Map_ = exports.FixedSizeList = exports.DurationNanosecond = exports.DurationMicrosecond = exports.DurationMillisecond = exports.DurationSecond = exports.Duration = exports.IntervalMonthDayNano = exports.IntervalYearMonth = exports.IntervalDayTime = exports.Interval = exports.Dictionary = exports.SparseUnion = exports.DenseUnion = void 0;
	exports.SparseUnionBuilder = exports.DenseUnionBuilder = exports.UnionBuilder = exports.TimeNanosecondBuilder = exports.TimeMicrosecondBuilder = exports.TimeMillisecondBuilder = exports.TimeSecondBuilder = exports.TimeBuilder = exports.TimestampNanosecondBuilder = exports.TimestampMicrosecondBuilder = exports.TimestampMillisecondBuilder = exports.TimestampSecondBuilder = exports.TimestampBuilder = exports.StructBuilder = exports.NullBuilder = exports.MapBuilder = exports.ListBuilder = exports.Uint64Builder = exports.Uint32Builder = exports.Uint16Builder = exports.Uint8Builder = exports.Int64Builder = exports.Int32Builder = exports.Int16Builder = exports.Int8Builder = exports.IntBuilder = exports.DurationNanosecondBuilder = exports.DurationMicrosecondBuilder = exports.DurationMillisecondBuilder = exports.DurationSecondBuilder = exports.DurationBuilder = exports.IntervalMonthDayNanoBuilder = exports.IntervalYearMonthBuilder = exports.IntervalDayTimeBuilder = exports.IntervalBuilder = exports.Float64Builder = exports.Float32Builder = exports.Float16Builder = exports.FloatBuilder = exports.FixedSizeListBuilder = exports.FixedSizeBinaryBuilder = exports.DictionaryBuilder = exports.DecimalBuilder = exports.DateMillisecondBuilder = exports.DateDayBuilder = exports.DateBuilder = exports.BoolBuilder = exports.LargeBinaryBuilder = exports.BinaryBuilder = exports.CompressionType = void 0;
	exports.LargeUtf8Builder = exports.Utf8Builder = void 0;
	var adapters_js_1 = require_adapters();
	var builder_js_1 = require_builder$2();
	var reader_js_1 = require_reader$2();
	var writer_js_1 = require_writer$2();
	var iterable_js_1 = require_iterable();
	var builder_js_2 = require_builder();
	var reader_js_2 = require_reader();
	var writer_js_2 = require_writer();
	adapters_js_1.default.toDOMStream = iterable_js_1.toDOMStream;
	builder_js_1.Builder["throughDOM"] = builder_js_2.builderThroughDOMStream;
	reader_js_1.RecordBatchReader["throughDOM"] = reader_js_2.recordBatchReaderThroughDOMStream;
	reader_js_1.RecordBatchFileReader["throughDOM"] = reader_js_2.recordBatchReaderThroughDOMStream;
	reader_js_1.RecordBatchStreamReader["throughDOM"] = reader_js_2.recordBatchReaderThroughDOMStream;
	writer_js_1.RecordBatchWriter["throughDOM"] = writer_js_2.recordBatchWriterThroughDOMStream;
	writer_js_1.RecordBatchFileWriter["throughDOM"] = writer_js_2.recordBatchWriterThroughDOMStream;
	writer_js_1.RecordBatchStreamWriter["throughDOM"] = writer_js_2.recordBatchWriterThroughDOMStream;
	var Arrow_js_1 = require_Arrow();
	Object.defineProperty(exports, "DateUnit", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.DateUnit;
		}
	});
	Object.defineProperty(exports, "IntervalUnit", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.IntervalUnit;
		}
	});
	Object.defineProperty(exports, "MessageHeader", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.MessageHeader;
		}
	});
	Object.defineProperty(exports, "MetadataVersion", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.MetadataVersion;
		}
	});
	Object.defineProperty(exports, "Precision", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Precision;
		}
	});
	Object.defineProperty(exports, "TimeUnit", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.TimeUnit;
		}
	});
	Object.defineProperty(exports, "Type", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Type;
		}
	});
	Object.defineProperty(exports, "UnionMode", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.UnionMode;
		}
	});
	Object.defineProperty(exports, "BufferType", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.BufferType;
		}
	});
	Object.defineProperty(exports, "Data", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Data;
		}
	});
	Object.defineProperty(exports, "makeData", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.makeData;
		}
	});
	Object.defineProperty(exports, "DataType", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.DataType;
		}
	});
	Object.defineProperty(exports, "Null", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Null;
		}
	});
	Object.defineProperty(exports, "Bool", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Bool;
		}
	});
	Object.defineProperty(exports, "Int", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Int;
		}
	});
	Object.defineProperty(exports, "Int8", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Int8;
		}
	});
	Object.defineProperty(exports, "Int16", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Int16;
		}
	});
	Object.defineProperty(exports, "Int32", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Int32;
		}
	});
	Object.defineProperty(exports, "Int64", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Int64;
		}
	});
	Object.defineProperty(exports, "Uint8", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Uint8;
		}
	});
	Object.defineProperty(exports, "Uint16", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Uint16;
		}
	});
	Object.defineProperty(exports, "Uint32", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Uint32;
		}
	});
	Object.defineProperty(exports, "Uint64", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Uint64;
		}
	});
	Object.defineProperty(exports, "Float", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Float;
		}
	});
	Object.defineProperty(exports, "Float16", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Float16;
		}
	});
	Object.defineProperty(exports, "Float32", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Float32;
		}
	});
	Object.defineProperty(exports, "Float64", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Float64;
		}
	});
	Object.defineProperty(exports, "Utf8", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Utf8;
		}
	});
	Object.defineProperty(exports, "LargeUtf8", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.LargeUtf8;
		}
	});
	Object.defineProperty(exports, "Binary", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Binary;
		}
	});
	Object.defineProperty(exports, "LargeBinary", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.LargeBinary;
		}
	});
	Object.defineProperty(exports, "FixedSizeBinary", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.FixedSizeBinary;
		}
	});
	Object.defineProperty(exports, "Date_", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Date_;
		}
	});
	Object.defineProperty(exports, "DateDay", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.DateDay;
		}
	});
	Object.defineProperty(exports, "DateMillisecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.DateMillisecond;
		}
	});
	Object.defineProperty(exports, "Timestamp", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Timestamp;
		}
	});
	Object.defineProperty(exports, "TimestampSecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.TimestampSecond;
		}
	});
	Object.defineProperty(exports, "TimestampMillisecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.TimestampMillisecond;
		}
	});
	Object.defineProperty(exports, "TimestampMicrosecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.TimestampMicrosecond;
		}
	});
	Object.defineProperty(exports, "TimestampNanosecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.TimestampNanosecond;
		}
	});
	Object.defineProperty(exports, "Time", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Time;
		}
	});
	Object.defineProperty(exports, "TimeSecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.TimeSecond;
		}
	});
	Object.defineProperty(exports, "TimeMillisecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.TimeMillisecond;
		}
	});
	Object.defineProperty(exports, "TimeMicrosecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.TimeMicrosecond;
		}
	});
	Object.defineProperty(exports, "TimeNanosecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.TimeNanosecond;
		}
	});
	Object.defineProperty(exports, "Decimal", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Decimal;
		}
	});
	Object.defineProperty(exports, "List", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.List;
		}
	});
	Object.defineProperty(exports, "Struct", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Struct;
		}
	});
	Object.defineProperty(exports, "StructRow", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.StructRow;
		}
	});
	Object.defineProperty(exports, "Union", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Union;
		}
	});
	Object.defineProperty(exports, "DenseUnion", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.DenseUnion;
		}
	});
	Object.defineProperty(exports, "SparseUnion", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.SparseUnion;
		}
	});
	Object.defineProperty(exports, "Dictionary", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Dictionary;
		}
	});
	Object.defineProperty(exports, "Interval", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Interval;
		}
	});
	Object.defineProperty(exports, "IntervalDayTime", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.IntervalDayTime;
		}
	});
	Object.defineProperty(exports, "IntervalYearMonth", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.IntervalYearMonth;
		}
	});
	Object.defineProperty(exports, "IntervalMonthDayNano", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.IntervalMonthDayNano;
		}
	});
	Object.defineProperty(exports, "Duration", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Duration;
		}
	});
	Object.defineProperty(exports, "DurationSecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.DurationSecond;
		}
	});
	Object.defineProperty(exports, "DurationMillisecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.DurationMillisecond;
		}
	});
	Object.defineProperty(exports, "DurationMicrosecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.DurationMicrosecond;
		}
	});
	Object.defineProperty(exports, "DurationNanosecond", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.DurationNanosecond;
		}
	});
	Object.defineProperty(exports, "FixedSizeList", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.FixedSizeList;
		}
	});
	Object.defineProperty(exports, "Map_", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Map_;
		}
	});
	Object.defineProperty(exports, "MapRow", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.MapRow;
		}
	});
	Object.defineProperty(exports, "Table", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Table;
		}
	});
	Object.defineProperty(exports, "makeTable", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.makeTable;
		}
	});
	Object.defineProperty(exports, "tableFromArrays", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.tableFromArrays;
		}
	});
	Object.defineProperty(exports, "Schema", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Schema;
		}
	});
	Object.defineProperty(exports, "Field", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Field;
		}
	});
	Object.defineProperty(exports, "Visitor", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Visitor;
		}
	});
	Object.defineProperty(exports, "Vector", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Vector;
		}
	});
	Object.defineProperty(exports, "makeVector", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.makeVector;
		}
	});
	Object.defineProperty(exports, "vectorFromArray", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.vectorFromArray;
		}
	});
	Object.defineProperty(exports, "tableFromJSON", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.tableFromJSON;
		}
	});
	Object.defineProperty(exports, "ByteStream", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.ByteStream;
		}
	});
	Object.defineProperty(exports, "AsyncByteStream", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.AsyncByteStream;
		}
	});
	Object.defineProperty(exports, "AsyncByteQueue", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.AsyncByteQueue;
		}
	});
	Object.defineProperty(exports, "RecordBatchReader", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.RecordBatchReader;
		}
	});
	Object.defineProperty(exports, "RecordBatchFileReader", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.RecordBatchFileReader;
		}
	});
	Object.defineProperty(exports, "RecordBatchStreamReader", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.RecordBatchStreamReader;
		}
	});
	Object.defineProperty(exports, "AsyncRecordBatchFileReader", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.AsyncRecordBatchFileReader;
		}
	});
	Object.defineProperty(exports, "AsyncRecordBatchStreamReader", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.AsyncRecordBatchStreamReader;
		}
	});
	Object.defineProperty(exports, "RecordBatchWriter", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.RecordBatchWriter;
		}
	});
	Object.defineProperty(exports, "RecordBatchFileWriter", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.RecordBatchFileWriter;
		}
	});
	Object.defineProperty(exports, "RecordBatchStreamWriter", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.RecordBatchStreamWriter;
		}
	});
	Object.defineProperty(exports, "RecordBatchJSONWriter", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.RecordBatchJSONWriter;
		}
	});
	Object.defineProperty(exports, "tableFromIPC", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.tableFromIPC;
		}
	});
	Object.defineProperty(exports, "tableToIPC", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.tableToIPC;
		}
	});
	Object.defineProperty(exports, "MessageReader", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.MessageReader;
		}
	});
	Object.defineProperty(exports, "AsyncMessageReader", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.AsyncMessageReader;
		}
	});
	Object.defineProperty(exports, "JSONMessageReader", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.JSONMessageReader;
		}
	});
	Object.defineProperty(exports, "Message", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Message;
		}
	});
	Object.defineProperty(exports, "RecordBatch", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.RecordBatch;
		}
	});
	Object.defineProperty(exports, "util", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.util;
		}
	});
	Object.defineProperty(exports, "Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.Builder;
		}
	});
	Object.defineProperty(exports, "makeBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.makeBuilder;
		}
	});
	Object.defineProperty(exports, "builderThroughIterable", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.builderThroughIterable;
		}
	});
	Object.defineProperty(exports, "builderThroughAsyncIterable", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.builderThroughAsyncIterable;
		}
	});
	Object.defineProperty(exports, "compressionRegistry", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.compressionRegistry;
		}
	});
	Object.defineProperty(exports, "CompressionType", {
		enumerable: true,
		get: function() {
			return Arrow_js_1.CompressionType;
		}
	});
	var Arrow_js_2 = require_Arrow();
	Object.defineProperty(exports, "BinaryBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.BinaryBuilder;
		}
	});
	Object.defineProperty(exports, "LargeBinaryBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.LargeBinaryBuilder;
		}
	});
	Object.defineProperty(exports, "BoolBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.BoolBuilder;
		}
	});
	Object.defineProperty(exports, "DateBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.DateBuilder;
		}
	});
	Object.defineProperty(exports, "DateDayBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.DateDayBuilder;
		}
	});
	Object.defineProperty(exports, "DateMillisecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.DateMillisecondBuilder;
		}
	});
	Object.defineProperty(exports, "DecimalBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.DecimalBuilder;
		}
	});
	Object.defineProperty(exports, "DictionaryBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.DictionaryBuilder;
		}
	});
	Object.defineProperty(exports, "FixedSizeBinaryBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.FixedSizeBinaryBuilder;
		}
	});
	Object.defineProperty(exports, "FixedSizeListBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.FixedSizeListBuilder;
		}
	});
	Object.defineProperty(exports, "FloatBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.FloatBuilder;
		}
	});
	Object.defineProperty(exports, "Float16Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.Float16Builder;
		}
	});
	Object.defineProperty(exports, "Float32Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.Float32Builder;
		}
	});
	Object.defineProperty(exports, "Float64Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.Float64Builder;
		}
	});
	Object.defineProperty(exports, "IntervalBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.IntervalBuilder;
		}
	});
	Object.defineProperty(exports, "IntervalDayTimeBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.IntervalDayTimeBuilder;
		}
	});
	Object.defineProperty(exports, "IntervalYearMonthBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.IntervalYearMonthBuilder;
		}
	});
	Object.defineProperty(exports, "IntervalMonthDayNanoBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.IntervalMonthDayNanoBuilder;
		}
	});
	Object.defineProperty(exports, "DurationBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.DurationBuilder;
		}
	});
	Object.defineProperty(exports, "DurationSecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.DurationSecondBuilder;
		}
	});
	Object.defineProperty(exports, "DurationMillisecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.DurationMillisecondBuilder;
		}
	});
	Object.defineProperty(exports, "DurationMicrosecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.DurationMicrosecondBuilder;
		}
	});
	Object.defineProperty(exports, "DurationNanosecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.DurationNanosecondBuilder;
		}
	});
	Object.defineProperty(exports, "IntBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.IntBuilder;
		}
	});
	Object.defineProperty(exports, "Int8Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.Int8Builder;
		}
	});
	Object.defineProperty(exports, "Int16Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.Int16Builder;
		}
	});
	Object.defineProperty(exports, "Int32Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.Int32Builder;
		}
	});
	Object.defineProperty(exports, "Int64Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.Int64Builder;
		}
	});
	Object.defineProperty(exports, "Uint8Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.Uint8Builder;
		}
	});
	Object.defineProperty(exports, "Uint16Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.Uint16Builder;
		}
	});
	Object.defineProperty(exports, "Uint32Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.Uint32Builder;
		}
	});
	Object.defineProperty(exports, "Uint64Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.Uint64Builder;
		}
	});
	Object.defineProperty(exports, "ListBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.ListBuilder;
		}
	});
	Object.defineProperty(exports, "MapBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.MapBuilder;
		}
	});
	Object.defineProperty(exports, "NullBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.NullBuilder;
		}
	});
	Object.defineProperty(exports, "StructBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.StructBuilder;
		}
	});
	Object.defineProperty(exports, "TimestampBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.TimestampBuilder;
		}
	});
	Object.defineProperty(exports, "TimestampSecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.TimestampSecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimestampMillisecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.TimestampMillisecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimestampMicrosecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.TimestampMicrosecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimestampNanosecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.TimestampNanosecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimeBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.TimeBuilder;
		}
	});
	Object.defineProperty(exports, "TimeSecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.TimeSecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimeMillisecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.TimeMillisecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimeMicrosecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.TimeMicrosecondBuilder;
		}
	});
	Object.defineProperty(exports, "TimeNanosecondBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.TimeNanosecondBuilder;
		}
	});
	Object.defineProperty(exports, "UnionBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.UnionBuilder;
		}
	});
	Object.defineProperty(exports, "DenseUnionBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.DenseUnionBuilder;
		}
	});
	Object.defineProperty(exports, "SparseUnionBuilder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.SparseUnionBuilder;
		}
	});
	Object.defineProperty(exports, "Utf8Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.Utf8Builder;
		}
	});
	Object.defineProperty(exports, "LargeUtf8Builder", {
		enumerable: true,
		get: function() {
			return Arrow_js_2.LargeUtf8Builder;
		}
	});
}));
//#endregion
//#region node_modules/apache-arrow/Arrow.node.js
var require_Arrow_node = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	var tslib_1 = (init_tslib_es6(), require_chunk$1.__toCommonJS(tslib_es6_exports));
	var adapters_js_1 = require_adapters();
	var builder_js_1 = require_builder$2();
	var reader_js_1 = require_reader$2();
	var writer_js_1 = require_writer$2();
	var iterable_js_1 = require_iterable$1();
	var builder_js_2 = require_builder$1();
	var reader_js_2 = require_reader$1();
	var writer_js_2 = require_writer$1();
	adapters_js_1.default.toNodeStream = iterable_js_1.toNodeStream;
	builder_js_1.Builder["throughNode"] = builder_js_2.builderThroughNodeStream;
	reader_js_1.RecordBatchReader["throughNode"] = reader_js_2.recordBatchReaderThroughNodeStream;
	writer_js_1.RecordBatchWriter["throughNode"] = writer_js_2.recordBatchWriterThroughNodeStream;
	tslib_1.__exportStar(require_Arrow_dom(), exports);
}));
//#endregion
//#region node_modules/vectordb/dist/sanitize.js
var require_sanitize = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sanitizeSchema = void 0;
	var apache_arrow_1 = require_Arrow_node();
	function sanitizeMetadata(metadataLike) {
		if (metadataLike === void 0 || metadataLike === null) return;
		if (!(metadataLike instanceof Map)) throw Error("Expected metadata, if present, to be a Map<string, string>");
		for (const item of metadataLike) if (!(typeof item[0] === "string" || !(typeof item[1] === "string"))) throw Error("Expected metadata, if present, to be a Map<string, string> but it had non-string keys or values");
		return metadataLike;
	}
	function sanitizeInt(typeLike) {
		if (!("bitWidth" in typeLike) || typeof typeLike.bitWidth !== "number" || !("isSigned" in typeLike) || typeof typeLike.isSigned !== "boolean") throw Error("Expected an Int Type to have a `bitWidth` and `isSigned` property");
		return new apache_arrow_1.Int(typeLike.isSigned, typeLike.bitWidth);
	}
	function sanitizeFloat(typeLike) {
		if (!("precision" in typeLike) || typeof typeLike.precision !== "number") throw Error("Expected a Float Type to have a `precision` property");
		return new apache_arrow_1.Float(typeLike.precision);
	}
	function sanitizeDecimal(typeLike) {
		if (!("scale" in typeLike) || typeof typeLike.scale !== "number" || !("precision" in typeLike) || typeof typeLike.precision !== "number" || !("bitWidth" in typeLike) || typeof typeLike.bitWidth !== "number") throw Error("Expected a Decimal Type to have `scale`, `precision`, and `bitWidth` properties");
		return new apache_arrow_1.Decimal(typeLike.scale, typeLike.precision, typeLike.bitWidth);
	}
	function sanitizeDate(typeLike) {
		if (!("unit" in typeLike) || typeof typeLike.unit !== "number") throw Error("Expected a Date type to have a `unit` property");
		return new apache_arrow_1.Date_(typeLike.unit);
	}
	function sanitizeTime(typeLike) {
		if (!("unit" in typeLike) || typeof typeLike.unit !== "number" || !("bitWidth" in typeLike) || typeof typeLike.bitWidth !== "number") throw Error("Expected a Time type to have `unit` and `bitWidth` properties");
		return new apache_arrow_1.Time(typeLike.unit, typeLike.bitWidth);
	}
	function sanitizeTimestamp(typeLike) {
		if (!("unit" in typeLike) || typeof typeLike.unit !== "number") throw Error("Expected a Timestamp type to have a `unit` property");
		let timezone = null;
		if ("timezone" in typeLike && typeof typeLike.timezone === "string") timezone = typeLike.timezone;
		return new apache_arrow_1.Timestamp(typeLike.unit, timezone);
	}
	function sanitizeTypedTimestamp(typeLike, Datatype) {
		let timezone = null;
		if ("timezone" in typeLike && typeof typeLike.timezone === "string") timezone = typeLike.timezone;
		return new Datatype(timezone);
	}
	function sanitizeInterval(typeLike) {
		if (!("unit" in typeLike) || typeof typeLike.unit !== "number") throw Error("Expected an Interval type to have a `unit` property");
		return new apache_arrow_1.Interval(typeLike.unit);
	}
	function sanitizeList(typeLike) {
		if (!("children" in typeLike) || !Array.isArray(typeLike.children)) throw Error("Expected a List type to have an array-like `children` property");
		if (typeLike.children.length !== 1) throw Error("Expected a List type to have exactly one child");
		return new apache_arrow_1.List(sanitizeField(typeLike.children[0]));
	}
	function sanitizeStruct(typeLike) {
		if (!("children" in typeLike) || !Array.isArray(typeLike.children)) throw Error("Expected a Struct type to have an array-like `children` property");
		return new apache_arrow_1.Struct(typeLike.children.map((child) => sanitizeField(child)));
	}
	function sanitizeUnion(typeLike) {
		if (!("typeIds" in typeLike) || !("mode" in typeLike) || typeof typeLike.mode !== "number") throw Error("Expected a Union type to have `typeIds` and `mode` properties");
		if (!("children" in typeLike) || !Array.isArray(typeLike.children)) throw Error("Expected a Union type to have an array-like `children` property");
		return new apache_arrow_1.Union(typeLike.mode, typeLike.typeIds, typeLike.children.map((child) => sanitizeField(child)));
	}
	function sanitizeTypedUnion(typeLike, UnionType) {
		if (!("typeIds" in typeLike)) throw Error("Expected a DenseUnion/SparseUnion type to have a `typeIds` property");
		if (!("children" in typeLike) || !Array.isArray(typeLike.children)) throw Error("Expected a DenseUnion/SparseUnion type to have an array-like `children` property");
		return new UnionType(typeLike.typeIds, typeLike.children.map((child) => sanitizeField(child)));
	}
	function sanitizeFixedSizeBinary(typeLike) {
		if (!("byteWidth" in typeLike) || typeof typeLike.byteWidth !== "number") throw Error("Expected a FixedSizeBinary type to have a `byteWidth` property");
		return new apache_arrow_1.FixedSizeBinary(typeLike.byteWidth);
	}
	function sanitizeFixedSizeList(typeLike) {
		if (!("listSize" in typeLike) || typeof typeLike.listSize !== "number") throw Error("Expected a FixedSizeList type to have a `listSize` property");
		if (!("children" in typeLike) || !Array.isArray(typeLike.children)) throw Error("Expected a FixedSizeList type to have an array-like `children` property");
		if (typeLike.children.length !== 1) throw Error("Expected a FixedSizeList type to have exactly one child");
		return new apache_arrow_1.FixedSizeList(typeLike.listSize, sanitizeField(typeLike.children[0]));
	}
	function sanitizeMap(typeLike) {
		if (!("children" in typeLike) || !Array.isArray(typeLike.children)) throw Error("Expected a Map type to have an array-like `children` property");
		if (!("keysSorted" in typeLike) || typeof typeLike.keysSorted !== "boolean") throw Error("Expected a Map type to have a `keysSorted` property");
		return new apache_arrow_1.Map_(typeLike.children.map((field) => sanitizeField(field)), typeLike.keysSorted);
	}
	function sanitizeDuration(typeLike) {
		if (!("unit" in typeLike) || typeof typeLike.unit !== "number") throw Error("Expected a Duration type to have a `unit` property");
		return new apache_arrow_1.Duration(typeLike.unit);
	}
	function sanitizeDictionary(typeLike) {
		if (!("id" in typeLike) || typeof typeLike.id !== "number") throw Error("Expected a Dictionary type to have an `id` property");
		if (!("indices" in typeLike) || typeof typeLike.indices !== "object") throw Error("Expected a Dictionary type to have an `indices` property");
		if (!("dictionary" in typeLike) || typeof typeLike.dictionary !== "object") throw Error("Expected a Dictionary type to have an `dictionary` property");
		if (!("isOrdered" in typeLike) || typeof typeLike.isOrdered !== "boolean") throw Error("Expected a Dictionary type to have an `isOrdered` property");
		return new apache_arrow_1.Dictionary(sanitizeType(typeLike.dictionary), sanitizeType(typeLike.indices), typeLike.id, typeLike.isOrdered);
	}
	function sanitizeType(typeLike) {
		if (typeof typeLike !== "object" || typeLike === null) throw Error("Expected a Type but object was null/undefined");
		if (!("typeId" in typeLike) || !(typeof typeLike.typeId !== "function")) throw Error("Expected a Type to have a typeId function");
		let typeId;
		if (typeof typeLike.typeId === "function") typeId = typeLike.typeId();
		else if (typeof typeLike.typeId === "number") typeId = typeLike.typeId;
		else throw Error("Type's typeId property was not a function or number");
		switch (typeId) {
			case apache_arrow_1.Type.NONE: throw Error("Received a Type with a typeId of NONE");
			case apache_arrow_1.Type.Null: return new apache_arrow_1.Null();
			case apache_arrow_1.Type.Int: return sanitizeInt(typeLike);
			case apache_arrow_1.Type.Float: return sanitizeFloat(typeLike);
			case apache_arrow_1.Type.Binary: return new apache_arrow_1.Binary();
			case apache_arrow_1.Type.Utf8: return new apache_arrow_1.Utf8();
			case apache_arrow_1.Type.Bool: return new apache_arrow_1.Bool();
			case apache_arrow_1.Type.Decimal: return sanitizeDecimal(typeLike);
			case apache_arrow_1.Type.Date: return sanitizeDate(typeLike);
			case apache_arrow_1.Type.Time: return sanitizeTime(typeLike);
			case apache_arrow_1.Type.Timestamp: return sanitizeTimestamp(typeLike);
			case apache_arrow_1.Type.Interval: return sanitizeInterval(typeLike);
			case apache_arrow_1.Type.List: return sanitizeList(typeLike);
			case apache_arrow_1.Type.Struct: return sanitizeStruct(typeLike);
			case apache_arrow_1.Type.Union: return sanitizeUnion(typeLike);
			case apache_arrow_1.Type.FixedSizeBinary: return sanitizeFixedSizeBinary(typeLike);
			case apache_arrow_1.Type.FixedSizeList: return sanitizeFixedSizeList(typeLike);
			case apache_arrow_1.Type.Map: return sanitizeMap(typeLike);
			case apache_arrow_1.Type.Duration: return sanitizeDuration(typeLike);
			case apache_arrow_1.Type.Dictionary: return sanitizeDictionary(typeLike);
			case apache_arrow_1.Type.Int8: return new apache_arrow_1.Int8();
			case apache_arrow_1.Type.Int16: return new apache_arrow_1.Int16();
			case apache_arrow_1.Type.Int32: return new apache_arrow_1.Int32();
			case apache_arrow_1.Type.Int64: return new apache_arrow_1.Int64();
			case apache_arrow_1.Type.Uint8: return new apache_arrow_1.Uint8();
			case apache_arrow_1.Type.Uint16: return new apache_arrow_1.Uint16();
			case apache_arrow_1.Type.Uint32: return new apache_arrow_1.Uint32();
			case apache_arrow_1.Type.Uint64: return new apache_arrow_1.Uint64();
			case apache_arrow_1.Type.Float16: return new apache_arrow_1.Float16();
			case apache_arrow_1.Type.Float32: return new apache_arrow_1.Float32();
			case apache_arrow_1.Type.Float64: return new apache_arrow_1.Float64();
			case apache_arrow_1.Type.DateMillisecond: return new apache_arrow_1.DateMillisecond();
			case apache_arrow_1.Type.DateDay: return new apache_arrow_1.DateDay();
			case apache_arrow_1.Type.TimeNanosecond: return new apache_arrow_1.TimeNanosecond();
			case apache_arrow_1.Type.TimeMicrosecond: return new apache_arrow_1.TimeMicrosecond();
			case apache_arrow_1.Type.TimeMillisecond: return new apache_arrow_1.TimeMillisecond();
			case apache_arrow_1.Type.TimeSecond: return new apache_arrow_1.TimeSecond();
			case apache_arrow_1.Type.TimestampNanosecond: return sanitizeTypedTimestamp(typeLike, apache_arrow_1.TimestampNanosecond);
			case apache_arrow_1.Type.TimestampMicrosecond: return sanitizeTypedTimestamp(typeLike, apache_arrow_1.TimestampMicrosecond);
			case apache_arrow_1.Type.TimestampMillisecond: return sanitizeTypedTimestamp(typeLike, apache_arrow_1.TimestampMillisecond);
			case apache_arrow_1.Type.TimestampSecond: return sanitizeTypedTimestamp(typeLike, apache_arrow_1.TimestampSecond);
			case apache_arrow_1.Type.DenseUnion: return sanitizeTypedUnion(typeLike, apache_arrow_1.DenseUnion);
			case apache_arrow_1.Type.SparseUnion: return sanitizeTypedUnion(typeLike, apache_arrow_1.SparseUnion);
			case apache_arrow_1.Type.IntervalDayTime: return new apache_arrow_1.IntervalDayTime();
			case apache_arrow_1.Type.IntervalYearMonth: return new apache_arrow_1.IntervalYearMonth();
			case apache_arrow_1.Type.DurationNanosecond: return new apache_arrow_1.DurationNanosecond();
			case apache_arrow_1.Type.DurationMicrosecond: return new apache_arrow_1.DurationMicrosecond();
			case apache_arrow_1.Type.DurationMillisecond: return new apache_arrow_1.DurationMillisecond();
			case apache_arrow_1.Type.DurationSecond: return new apache_arrow_1.DurationSecond();
		}
	}
	function sanitizeField(fieldLike) {
		if (fieldLike instanceof apache_arrow_1.Field) return fieldLike;
		if (typeof fieldLike !== "object" || fieldLike === null) throw Error("Expected a Field but object was null/undefined");
		if (!("type" in fieldLike) || !("name" in fieldLike) || !("nullable" in fieldLike)) throw Error("The field passed in is missing a `type`/`name`/`nullable` property");
		const type = sanitizeType(fieldLike.type);
		const name = fieldLike.name;
		if (!(typeof name === "string")) throw Error("The field passed in had a non-string `name` property");
		const nullable = fieldLike.nullable;
		if (!(typeof nullable === "boolean")) throw Error("The field passed in had a non-boolean `nullable` property");
		let metadata;
		if ("metadata" in fieldLike) metadata = sanitizeMetadata(fieldLike.metadata);
		return new apache_arrow_1.Field(name, type, nullable, metadata);
	}
	/**
	* Convert something schemaLike into a Schema instance
	*
	* This method is often needed even when the caller is using a Schema
	* instance because they might be using a different instance of apache-arrow
	* than lancedb is using.
	*/
	function sanitizeSchema(schemaLike) {
		if (schemaLike instanceof apache_arrow_1.Schema) return schemaLike;
		if (typeof schemaLike !== "object" || schemaLike === null) throw Error("Expected a Schema but object was null/undefined");
		if (!("fields" in schemaLike)) throw Error("The schema passed in does not appear to be a schema (no 'fields' property)");
		let metadata;
		if ("metadata" in schemaLike) metadata = sanitizeMetadata(schemaLike.metadata);
		if (!Array.isArray(schemaLike.fields)) throw Error("The schema passed in had a 'fields' property but it was not an array");
		const sanitizedFields = schemaLike.fields.map((field) => sanitizeField(field));
		return new apache_arrow_1.Schema(sanitizedFields, metadata);
	}
	exports.sanitizeSchema = sanitizeSchema;
}));
//#endregion
//#region node_modules/vectordb/dist/arrow.js
var require_arrow = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.createEmptyTable = exports.fromTableToStreamBuffer = exports.fromTableToBuffer = exports.fromRecordsToStreamBuffer = exports.fromRecordsToBuffer = exports.convertToTable = exports.makeEmptyTable = exports.makeArrowTable = exports.MakeArrowTableOptions = exports.VectorColumnOptions = void 0;
	var apache_arrow_1 = require_Arrow_node();
	var sanitize_1 = require_sanitize();
	var VectorColumnOptions = class {
		constructor(values) {
			/** Vector column type. */
			this.type = new apache_arrow_1.Float32();
			Object.assign(this, values);
		}
	};
	exports.VectorColumnOptions = VectorColumnOptions;
	/** Options to control the makeArrowTable call. */
	var MakeArrowTableOptions = class {
		constructor(values) {
			this.vectorColumns = { vector: new VectorColumnOptions() };
			/**
			* If true then string columns will be encoded with dictionary encoding
			*
			* Set this to true if your string columns tend to repeat the same values
			* often.  For more precise control use the `schema` property to specify the
			* data type for individual columns.
			*
			* If `schema` is provided then this property is ignored.
			*/
			this.dictionaryEncodeStrings = false;
			Object.assign(this, values);
		}
	};
	exports.MakeArrowTableOptions = MakeArrowTableOptions;
	/**
	* An enhanced version of the {@link makeTable} function from Apache Arrow
	* that supports nested fields and embeddings columns.
	*
	* This function converts an array of Record<String, any> (row-major JS objects)
	* to an Arrow Table (a columnar structure)
	*
	* Note that it currently does not support nulls.
	*
	* If a schema is provided then it will be used to determine the resulting array
	* types.  Fields will also be reordered to fit the order defined by the schema.
	*
	* If a schema is not provided then the types will be inferred and the field order
	* will be controlled by the order of properties in the first record.
	*
	* If the input is empty then a schema must be provided to create an empty table.
	*
	* When a schema is not specified then data types will be inferred.  The inference
	* rules are as follows:
	*
	*  - boolean => Bool
	*  - number => Float64
	*  - String => Utf8
	*  - Buffer => Binary
	*  - Record<String, any> => Struct
	*  - Array<any> => List
	*
	* @param data input data
	* @param options options to control the makeArrowTable call.
	*
	* @example
	*
	* ```ts
	*
	* import { fromTableToBuffer, makeArrowTable } from "../arrow";
	* import { Field, FixedSizeList, Float16, Float32, Int32, Schema } from "apache-arrow";
	*
	* const schema = new Schema([
	*   new Field("a", new Int32()),
	*   new Field("b", new Float32()),
	*   new Field("c", new FixedSizeList(3, new Field("item", new Float16()))),
	*  ]);
	*  const table = makeArrowTable([
	*    { a: 1, b: 2, c: [1, 2, 3] },
	*    { a: 4, b: 5, c: [4, 5, 6] },
	*    { a: 7, b: 8, c: [7, 8, 9] },
	*  ], { schema });
	* ```
	*
	* By default it assumes that the column named `vector` is a vector column
	* and it will be converted into a fixed size list array of type float32.
	* The `vectorColumns` option can be used to support other vector column
	* names and data types.
	*
	* ```ts
	*
	* const schema = new Schema([
	new Field("a", new Float64()),
	new Field("b", new Float64()),
	new Field(
	"vector",
	new FixedSizeList(3, new Field("item", new Float32()))
	),
	]);
	const table = makeArrowTable([
	{ a: 1, b: 2, vector: [1, 2, 3] },
	{ a: 4, b: 5, vector: [4, 5, 6] },
	{ a: 7, b: 8, vector: [7, 8, 9] },
	]);
	assert.deepEqual(table.schema, schema);
	* ```
	*
	* You can specify the vector column types and names using the options as well
	*
	* ```typescript
	*
	* const schema = new Schema([
	new Field('a', new Float64()),
	new Field('b', new Float64()),
	new Field('vec1', new FixedSizeList(3, new Field('item', new Float16()))),
	new Field('vec2', new FixedSizeList(3, new Field('item', new Float16())))
	]);
	* const table = makeArrowTable([
	{ a: 1, b: 2, vec1: [1, 2, 3], vec2: [2, 4, 6] },
	{ a: 4, b: 5, vec1: [4, 5, 6], vec2: [8, 10, 12] },
	{ a: 7, b: 8, vec1: [7, 8, 9], vec2: [14, 16, 18] }
	], {
	vectorColumns: {
	vec1: { type: new Float16() },
	vec2: { type: new Float16() }
	}
	}
	* assert.deepEqual(table.schema, schema)
	* ```
	*/
	function makeArrowTable(data, options) {
		if (data.length === 0 && (options?.schema === void 0 || options?.schema === null)) throw new Error("At least one record or a schema needs to be provided");
		const opt = new MakeArrowTableOptions(options !== void 0 ? options : {});
		if (opt.schema !== void 0 && opt.schema !== null) {
			opt.schema = (0, sanitize_1.sanitizeSchema)(opt.schema);
			opt.schema = validateSchemaEmbeddings(opt.schema, data, opt.embeddings);
		}
		const columns = {};
		const columnNames = opt.schema != null ? opt.schema.names : Object.keys(data[0]);
		for (const colName of columnNames) {
			if (data.length !== 0 && !Object.prototype.hasOwnProperty.call(data[0], colName)) continue;
			let values = data.map((datum) => datum[colName]);
			let type;
			if (opt.schema !== void 0) {
				type = opt.schema?.fields.filter((f) => f.name === colName)[0]?.type;
				if (apache_arrow_1.DataType.isInt(type) && type.bitWidth === 64) values = values.map((v) => {
					if (v === null) return v;
					return BigInt(v);
				});
			} else {
				const vectorColumnOptions = opt.vectorColumns[colName];
				if (vectorColumnOptions !== void 0) type = newVectorType(values[0].length, vectorColumnOptions.type);
			}
			try {
				columns[colName] = makeVector(values, type, opt.dictionaryEncodeStrings);
			} catch (error) {
				throw Error(`Could not convert column "${colName}" to Arrow: ${error}`);
			}
		}
		if (opt.schema != null) {
			const batchesFixed = new apache_arrow_1.Table(columns).batches.map((batch) => new apache_arrow_1.RecordBatch(opt.schema, batch.data));
			return new apache_arrow_1.Table(opt.schema, batchesFixed);
		} else return new apache_arrow_1.Table(columns);
	}
	exports.makeArrowTable = makeArrowTable;
	/**
	* Create an empty Arrow table with the provided schema
	*/
	function makeEmptyTable(schema) {
		return makeArrowTable([], { schema });
	}
	exports.makeEmptyTable = makeEmptyTable;
	function makeListVector(lists) {
		if (lists.length === 0 || lists[0].length === 0) throw Error("Cannot infer list vector from empty array or empty list");
		const sampleList = lists[0];
		let inferredType;
		try {
			inferredType = makeVector(sampleList).type;
		} catch (error) {
			throw Error(`Cannot infer list vector.  Cannot infer inner type: ${error}`);
		}
		const listBuilder = (0, apache_arrow_1.makeBuilder)({ type: new apache_arrow_1.List(new apache_arrow_1.Field("item", inferredType, true)) });
		for (const list of lists) listBuilder.append(list);
		return listBuilder.finish().toVector();
	}
	function makeVector(values, type, stringAsDictionary) {
		if (type !== void 0) return (0, apache_arrow_1.vectorFromArray)(values, type);
		if (values.length === 0) throw Error("makeVector requires at least one value or the type must be specfied");
		const sampleValue = values.find((val) => val !== null && val !== void 0);
		if (sampleValue === void 0) throw Error("makeVector cannot infer the type if all values are null or undefined");
		if (Array.isArray(sampleValue)) return makeListVector(values);
		else if (Buffer.isBuffer(sampleValue)) return (0, apache_arrow_1.vectorFromArray)(values, new apache_arrow_1.Binary());
		else if (!(stringAsDictionary ?? false) && (typeof sampleValue === "string" || sampleValue instanceof String)) return (0, apache_arrow_1.vectorFromArray)(values, new apache_arrow_1.Utf8());
		else return (0, apache_arrow_1.vectorFromArray)(values);
	}
	async function applyEmbeddings(table, embeddings, schema) {
		if (embeddings == null) return table;
		if (schema !== void 0 && schema !== null) schema = (0, sanitize_1.sanitizeSchema)(schema);
		const colEntries = [...Array(table.numCols).keys()].map((_, idx) => {
			return [table.schema.fields[idx].name, table.getChildAt(idx)];
		});
		const newColumns = Object.fromEntries(colEntries);
		const sourceColumn = newColumns[embeddings.sourceColumn];
		const destColumn = embeddings.destColumn ?? "vector";
		const innerDestType = embeddings.embeddingDataType ?? new apache_arrow_1.Float32();
		if (sourceColumn === void 0) throw new Error(`Cannot apply embedding function because the source column '${embeddings.sourceColumn}' was not present in the data`);
		if (table.numRows === 0) {
			if (Object.prototype.hasOwnProperty.call(newColumns, destColumn)) return table;
			if (embeddings.embeddingDimension !== void 0) newColumns[destColumn] = makeVector([], newVectorType(embeddings.embeddingDimension, innerDestType));
			else if (schema != null) {
				const destField = schema.fields.find((f) => f.name === destColumn);
				if (destField != null) newColumns[destColumn] = makeVector([], destField.type);
				else throw new Error(`Attempt to apply embeddings to an empty table failed because schema was missing embedding column '${destColumn}'`);
			} else throw new Error("Attempt to apply embeddings to an empty table when the embeddings function does not specify `embeddingDimension`");
		} else {
			if (Object.prototype.hasOwnProperty.call(newColumns, destColumn)) throw new Error(`Attempt to apply embeddings to table failed because column ${destColumn} already existed`);
			if (table.batches.length > 1) throw new Error("Internal error: `makeArrowTable` unexpectedly created a table with more than one batch");
			const values = sourceColumn.toArray();
			const vectors = await embeddings.embed(values);
			if (vectors.length !== values.length) throw new Error("Embedding function did not return an embedding for each input element");
			newColumns[destColumn] = makeVector(vectors, newVectorType(vectors[0].length, innerDestType));
		}
		const newTable = new apache_arrow_1.Table(newColumns);
		if (schema != null) {
			if (schema.fields.find((f) => f.name === destColumn) === void 0) throw new Error(`When using embedding functions and specifying a schema the schema should include the embedding column but the column ${destColumn} was missing`);
			return alignTable(newTable, schema);
		}
		return newTable;
	}
	async function convertToTable(data, embeddings, makeTableOptions) {
		return await applyEmbeddings(makeArrowTable(data, makeTableOptions), embeddings, makeTableOptions?.schema);
	}
	exports.convertToTable = convertToTable;
	function newVectorType(dim, innerType) {
		const children = new apache_arrow_1.Field("item", innerType, true);
		return new apache_arrow_1.FixedSizeList(dim, children);
	}
	/**
	* Serialize an Array of records into a buffer using the Arrow IPC File serialization
	*
	* This function will call `convertToTable` and pass on `embeddings` and `schema`
	*
	* `schema` is required if data is empty
	*/
	async function fromRecordsToBuffer(data, embeddings, schema) {
		if (schema !== void 0 && schema !== null) schema = (0, sanitize_1.sanitizeSchema)(schema);
		const table = await convertToTable(data, embeddings, {
			schema,
			embeddings
		});
		const writer = apache_arrow_1.RecordBatchFileWriter.writeAll(table);
		return Buffer.from(await writer.toUint8Array());
	}
	exports.fromRecordsToBuffer = fromRecordsToBuffer;
	/**
	* Serialize an Array of records into a buffer using the Arrow IPC Stream serialization
	*
	* This function will call `convertToTable` and pass on `embeddings` and `schema`
	*
	* `schema` is required if data is empty
	*/
	async function fromRecordsToStreamBuffer(data, embeddings, schema) {
		if (schema !== null && schema !== void 0) schema = (0, sanitize_1.sanitizeSchema)(schema);
		const table = await convertToTable(data, embeddings, { schema });
		const writer = apache_arrow_1.RecordBatchStreamWriter.writeAll(table);
		return Buffer.from(await writer.toUint8Array());
	}
	exports.fromRecordsToStreamBuffer = fromRecordsToStreamBuffer;
	/**
	* Serialize an Arrow Table into a buffer using the Arrow IPC File serialization
	*
	* This function will apply `embeddings` to the table in a manner similar to
	* `convertToTable`.
	*
	* `schema` is required if the table is empty
	*/
	async function fromTableToBuffer(table, embeddings, schema) {
		if (schema !== null && schema !== void 0) schema = (0, sanitize_1.sanitizeSchema)(schema);
		const tableWithEmbeddings = await applyEmbeddings(table, embeddings, schema);
		const writer = apache_arrow_1.RecordBatchFileWriter.writeAll(tableWithEmbeddings);
		return Buffer.from(await writer.toUint8Array());
	}
	exports.fromTableToBuffer = fromTableToBuffer;
	/**
	* Serialize an Arrow Table into a buffer using the Arrow IPC Stream serialization
	*
	* This function will apply `embeddings` to the table in a manner similar to
	* `convertToTable`.
	*
	* `schema` is required if the table is empty
	*/
	async function fromTableToStreamBuffer(table, embeddings, schema) {
		if (schema !== null && schema !== void 0) schema = (0, sanitize_1.sanitizeSchema)(schema);
		const tableWithEmbeddings = await applyEmbeddings(table, embeddings, schema);
		const writer = apache_arrow_1.RecordBatchStreamWriter.writeAll(tableWithEmbeddings);
		return Buffer.from(await writer.toUint8Array());
	}
	exports.fromTableToStreamBuffer = fromTableToStreamBuffer;
	function alignBatch(batch, schema) {
		const alignedChildren = [];
		for (const field of schema.fields) {
			const indexInBatch = batch.schema.fields?.findIndex((f) => f.name === field.name);
			if (indexInBatch < 0) throw new Error(`The column ${field.name} was not found in the Arrow Table`);
			alignedChildren.push(batch.data.children[indexInBatch]);
		}
		const newData = (0, apache_arrow_1.makeData)({
			type: new apache_arrow_1.Struct(schema.fields),
			length: batch.numRows,
			nullCount: batch.nullCount,
			children: alignedChildren
		});
		return new apache_arrow_1.RecordBatch(schema, newData);
	}
	function alignTable(table, schema) {
		const alignedBatches = table.batches.map((batch) => alignBatch(batch, schema));
		return new apache_arrow_1.Table(schema, alignedBatches);
	}
	function createEmptyTable(schema) {
		return new apache_arrow_1.Table((0, sanitize_1.sanitizeSchema)(schema));
	}
	exports.createEmptyTable = createEmptyTable;
	function validateSchemaEmbeddings(schema, data, embeddings) {
		const fields = [];
		const missingEmbeddingFields = [];
		for (const field of schema.fields) if (field.type instanceof apache_arrow_1.FixedSizeList) if (data.length !== 0 && data?.[0]?.[field.name] === void 0) missingEmbeddingFields.push(field);
		else fields.push(field);
		else fields.push(field);
		if (missingEmbeddingFields.length > 0 && embeddings === void 0) throw new Error(`Table has embeddings: "${missingEmbeddingFields.map((f) => f.name).join(",")}", but no embedding function was provided`);
		return new apache_arrow_1.Schema(fields, schema.metadata);
	}
}));
//#endregion
//#region node_modules/@neon-rs/load/dist/index.js
var require_dist$1 = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.lazy = exports.bin = exports.currentTarget = void 0;
	function currentTarget() {
		let os = null;
		switch (process.platform) {
			case "android":
				switch (process.arch) {
					case "arm": return "android-arm-eabi";
					case "arm64": return "android-arm64";
				}
				os = "Android";
				break;
			case "win32":
				switch (process.arch) {
					case "x64": return "win32-x64-msvc";
					case "arm64": return "win32-arm64-msvc";
					case "ia32": return "win32-ia32-msvc";
				}
				os = "Windows";
				break;
			case "darwin":
				switch (process.arch) {
					case "x64": return "darwin-x64";
					case "arm64": return "darwin-arm64";
				}
				os = "macOS";
				break;
			case "linux":
				switch (process.arch) {
					case "x64":
					case "arm64": return isGlibc() ? `linux-${process.arch}-gnu` : `linux-${process.arch}-musl`;
					case "arm": return "linux-arm-gnueabihf";
				}
				os = "Linux";
				break;
			case "freebsd":
				if (process.arch === "x64") return "freebsd-x64";
				os = "FreeBSD";
				break;
		}
		if (os) throw new Error(`Neon: unsupported ${os} architecture: ${process.arch}`);
		throw new Error(`Neon: unsupported system: ${process.platform}`);
	}
	exports.currentTarget = currentTarget;
	function isGlibc() {
		const report = process.report?.getReport();
		if (typeof report !== "object" || !report || !("header" in report)) return false;
		const header = report.header;
		return typeof header === "object" && !!header && "glibcVersionRuntime" in header;
	}
	function* interleave(a1, a2) {
		const length = Math.max(a1.length, a2.length);
		for (let i = 0; i < length; i++) {
			if (i < a1.length) yield a1[i];
			if (i < a2.length) yield a2[i];
		}
	}
	function bin(scope, ...rest) {
		return [...interleave(scope, rest)].join("") + "/" + currentTarget();
	}
	exports.bin = bin;
	function lazy(loaders, exports$1) {
		let loaded = null;
		function load() {
			if (loaded) return loaded;
			const target = currentTarget();
			if (!loaders.hasOwnProperty(target)) throw new Error(`no precompiled module found for ${target}`);
			loaded = loaders[target]();
			return loaded;
		}
		let module$1 = {};
		for (const key of exports$1) Object.defineProperty(module$1, key, { get() {
			return load()[key];
		} });
		return module$1;
	}
	exports.lazy = lazy;
}));
//#endregion
//#region node_modules/vectordb/native.js
var require_native = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports, module) => {
	var { currentTarget } = require_dist$1();
	var nativeLib;
	try {
		nativeLib = require("./index.node");
	} catch {
		try {
			nativeLib = require(`@lancedb/vectordb-${currentTarget()}`);
		} catch (e) {
			throw new Error(`vectordb: failed to load native library.
  You may need to run \`npm install @lancedb/vectordb-${currentTarget()}\`.

  If that does not work, please file a bug report at https://github.com/lancedb/lancedb/issues
      
  Source error: ${e}`);
		}
	}
	module.exports = nativeLib;
}));
//#endregion
//#region node_modules/vectordb/dist/query.js
var require_query = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Query = void 0;
	var apache_arrow_1 = require_Arrow_node();
	var { tableSearch } = require_native();
	/**
	* A builder for nearest neighbor queries for LanceDB.
	*/
	var Query = class {
		constructor(query, tbl, embeddings) {
			this.where = this.filter;
			this._tbl = tbl;
			this._query = query;
			this._limit = 10;
			this._nprobes = 20;
			this._refineFactor = void 0;
			this._select = void 0;
			this._filter = void 0;
			this._metricType = void 0;
			this._embeddings = embeddings;
			this._prefilter = false;
			this._fastSearch = false;
		}
		/***
		* Sets the number of results that will be returned
		* default value is 10
		* @param value number of results
		*/
		limit(value) {
			this._limit = value;
			return this;
		}
		/**
		* Refine the results by reading extra elements and re-ranking them in memory.
		* @param value refine factor to use in this query.
		*/
		refineFactor(value) {
			this._refineFactor = value;
			return this;
		}
		/**
		* The number of probes used. A higher number makes search more accurate but also slower.
		* @param value The number of probes used.
		*/
		nprobes(value) {
			this._nprobes = value;
			return this;
		}
		/**
		* A filter statement to be applied to this query.
		* @param value A filter in the same format used by a sql WHERE clause.
		*/
		filter(value) {
			this._filter = value;
			return this;
		}
		/** Return only the specified columns.
		*
		* @param value Only select the specified columns. If not specified, all columns will be returned.
		*/
		select(value) {
			this._select = value;
			return this;
		}
		/**
		* The MetricType used for this Query.
		* @param value The metric to the. @see MetricType for the different options
		*/
		metricType(value) {
			this._metricType = value;
			return this;
		}
		prefilter(value) {
			this._prefilter = value;
			return this;
		}
		/**
		* Skip searching un-indexed data. This can make search faster, but will miss
		* any data that is not yet indexed.
		*/
		fastSearch(value) {
			this._fastSearch = value;
			return this;
		}
		/**
		* Execute the query and return the results as an Array of Objects
		*/
		async execute() {
			if (this._query !== void 0) if (this._embeddings !== void 0) this._queryVector = (await this._embeddings.embed([this._query]))[0];
			else this._queryVector = this._query;
			const isElectron = this.isElectron();
			const buffer = await tableSearch.call(this._tbl, this, isElectron);
			return (0, apache_arrow_1.tableFromIPC)(buffer).toArray().map((entry) => {
				const newObject = {};
				Object.keys(entry).forEach((key) => {
					if (entry[key] instanceof apache_arrow_1.Vector) newObject[key] = entry[key].toJSON();
					else newObject[key] = entry[key];
				});
				return newObject;
			});
		}
		isElectron() {
			try {
				return process?.versions?.hasOwnProperty("electron") || navigator?.userAgent?.toLowerCase()?.includes(" electron");
			} catch (e) {
				return false;
			}
		}
	};
	exports.Query = Query;
}));
//#endregion
//#region node_modules/axios/dist/node/axios.cjs
/*! Axios v1.16.1 Copyright (c) 2026 Matt Zabriskie and contributors */
var require_axios = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports, module) => {
	var FormData$1 = require_follow_redirects$1.require_form_data();
	var crypto = require("crypto");
	var url = require("url");
	var HttpsProxyAgent = require_follow_redirects$1.require_dist();
	var http = require("http");
	var https = require("https");
	var http2 = require("http2");
	var util = require("util");
	var path = require("path");
	var followRedirects = require_follow_redirects$1.require_follow_redirects();
	var zlib = require("zlib");
	var stream = require("stream");
	var events = require("events");
	/**
	* Create a bound version of a function with a specified `this` context
	*
	* @param {Function} fn - The function to bind
	* @param {*} thisArg - The value to be passed as the `this` parameter
	* @returns {Function} A new function that will call the original function with the specified `this` context
	*/
	function bind(fn, thisArg) {
		return function wrap() {
			return fn.apply(thisArg, arguments);
		};
	}
	var { toString } = Object.prototype;
	var { getPrototypeOf } = Object;
	var { iterator, toStringTag } = Symbol;
	var kindOf = ((cache) => (thing) => {
		const str = toString.call(thing);
		return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
	})(Object.create(null));
	var kindOfTest = (type) => {
		type = type.toLowerCase();
		return (thing) => kindOf(thing) === type;
	};
	var typeOfTest = (type) => (thing) => typeof thing === type;
	/**
	* Determine if a value is a non-null object
	*
	* @param {Object} val The value to test
	*
	* @returns {boolean} True if value is an Array, otherwise false
	*/
	var { isArray } = Array;
	/**
	* Determine if a value is undefined
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if the value is undefined, otherwise false
	*/
	var isUndefined = typeOfTest("undefined");
	/**
	* Determine if a value is a Buffer
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is a Buffer, otherwise false
	*/
	function isBuffer(val) {
		return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction$1(val.constructor.isBuffer) && val.constructor.isBuffer(val);
	}
	/**
	* Determine if a value is an ArrayBuffer
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is an ArrayBuffer, otherwise false
	*/
	var isArrayBuffer = kindOfTest("ArrayBuffer");
	/**
	* Determine if a value is a view on an ArrayBuffer
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	*/
	function isArrayBufferView(val) {
		let result;
		if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
		else result = val && val.buffer && isArrayBuffer(val.buffer);
		return result;
	}
	/**
	* Determine if a value is a String
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is a String, otherwise false
	*/
	var isString = typeOfTest("string");
	/**
	* Determine if a value is a Function
	*
	* @param {*} val The value to test
	* @returns {boolean} True if value is a Function, otherwise false
	*/
	var isFunction$1 = typeOfTest("function");
	/**
	* Determine if a value is a Number
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is a Number, otherwise false
	*/
	var isNumber = typeOfTest("number");
	/**
	* Determine if a value is an Object
	*
	* @param {*} thing The value to test
	*
	* @returns {boolean} True if value is an Object, otherwise false
	*/
	var isObject = (thing) => thing !== null && typeof thing === "object";
	/**
	* Determine if a value is a Boolean
	*
	* @param {*} thing The value to test
	* @returns {boolean} True if value is a Boolean, otherwise false
	*/
	var isBoolean = (thing) => thing === true || thing === false;
	/**
	* Determine if a value is a plain Object
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is a plain Object, otherwise false
	*/
	var isPlainObject = (val) => {
		if (kindOf(val) !== "object") return false;
		const prototype = getPrototypeOf(val);
		return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
	};
	/**
	* Determine if a value is an empty object (safely handles Buffers)
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is an empty object, otherwise false
	*/
	var isEmptyObject = (val) => {
		if (!isObject(val) || isBuffer(val)) return false;
		try {
			return Object.keys(val).length === 0 && Object.getPrototypeOf(val) === Object.prototype;
		} catch (e) {
			return false;
		}
	};
	/**
	* Determine if a value is a Date
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is a Date, otherwise false
	*/
	var isDate = kindOfTest("Date");
	/**
	* Determine if a value is a File
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is a File, otherwise false
	*/
	var isFile = kindOfTest("File");
	/**
	* Determine if a value is a React Native Blob
	* React Native "blob": an object with a `uri` attribute. Optionally, it can
	* also have a `name` and `type` attribute to specify filename and content type
	*
	* @see https://github.com/facebook/react-native/blob/26684cf3adf4094eb6c405d345a75bf8c7c0bf88/Libraries/Network/FormData.js#L68-L71
	*
	* @param {*} value The value to test
	*
	* @returns {boolean} True if value is a React Native Blob, otherwise false
	*/
	var isReactNativeBlob = (value) => {
		return !!(value && typeof value.uri !== "undefined");
	};
	/**
	* Determine if environment is React Native
	* ReactNative `FormData` has a non-standard `getParts()` method
	*
	* @param {*} formData The formData to test
	*
	* @returns {boolean} True if environment is React Native, otherwise false
	*/
	var isReactNative = (formData) => formData && typeof formData.getParts !== "undefined";
	/**
	* Determine if a value is a Blob
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is a Blob, otherwise false
	*/
	var isBlob = kindOfTest("Blob");
	/**
	* Determine if a value is a FileList
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is a FileList, otherwise false
	*/
	var isFileList = kindOfTest("FileList");
	/**
	* Determine if a value is a Stream
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is a Stream, otherwise false
	*/
	var isStream = (val) => isObject(val) && isFunction$1(val.pipe);
	/**
	* Determine if a value is a FormData
	*
	* @param {*} thing The value to test
	*
	* @returns {boolean} True if value is an FormData, otherwise false
	*/
	function getGlobal() {
		if (typeof globalThis !== "undefined") return globalThis;
		if (typeof self !== "undefined") return self;
		if (typeof window !== "undefined") return window;
		if (typeof global !== "undefined") return global;
		return {};
	}
	var G = getGlobal();
	var FormDataCtor = typeof G.FormData !== "undefined" ? G.FormData : void 0;
	var isFormData = (thing) => {
		if (!thing) return false;
		if (FormDataCtor && thing instanceof FormDataCtor) return true;
		const proto = getPrototypeOf(thing);
		if (!proto || proto === Object.prototype) return false;
		if (!isFunction$1(thing.append)) return false;
		const kind = kindOf(thing);
		return kind === "formdata" || kind === "object" && isFunction$1(thing.toString) && thing.toString() === "[object FormData]";
	};
	/**
	* Determine if a value is a URLSearchParams object
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is a URLSearchParams object, otherwise false
	*/
	var isURLSearchParams = kindOfTest("URLSearchParams");
	var [isReadableStream, isRequest, isResponse, isHeaders] = [
		"ReadableStream",
		"Request",
		"Response",
		"Headers"
	].map(kindOfTest);
	/**
	* Trim excess whitespace off the beginning and end of a string
	*
	* @param {String} str The String to trim
	*
	* @returns {String} The String freed of excess whitespace
	*/
	var trim = (str) => {
		return str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
	};
	/**
	* Iterate over an Array or an Object invoking a function for each item.
	*
	* If `obj` is an Array callback will be called passing
	* the value, index, and complete array for each item.
	*
	* If 'obj' is an Object callback will be called passing
	* the value, key, and complete object for each property.
	*
	* @param {Object|Array<unknown>} obj The object to iterate
	* @param {Function} fn The callback to invoke for each item
	*
	* @param {Object} [options]
	* @param {Boolean} [options.allOwnKeys = false]
	* @returns {any}
	*/
	function forEach(obj, fn, { allOwnKeys = false } = {}) {
		if (obj === null || typeof obj === "undefined") return;
		let i;
		let l;
		if (typeof obj !== "object") obj = [obj];
		if (isArray(obj)) for (i = 0, l = obj.length; i < l; i++) fn.call(null, obj[i], i, obj);
		else {
			if (isBuffer(obj)) return;
			const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
			const len = keys.length;
			let key;
			for (i = 0; i < len; i++) {
				key = keys[i];
				fn.call(null, obj[key], key, obj);
			}
		}
	}
	/**
	* Finds a key in an object, case-insensitive, returning the actual key name.
	* Returns null if the object is a Buffer or if no match is found.
	*
	* @param {Object} obj - The object to search.
	* @param {string} key - The key to find (case-insensitive).
	* @returns {?string} The actual key name if found, otherwise null.
	*/
	function findKey(obj, key) {
		if (isBuffer(obj)) return null;
		key = key.toLowerCase();
		const keys = Object.keys(obj);
		let i = keys.length;
		let _key;
		while (i-- > 0) {
			_key = keys[i];
			if (key === _key.toLowerCase()) return _key;
		}
		return null;
	}
	var _global = (() => {
		if (typeof globalThis !== "undefined") return globalThis;
		return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
	})();
	var isContextDefined = (context) => !isUndefined(context) && context !== _global;
	/**
	* Accepts varargs expecting each argument to be an object, then
	* immutably merges the properties of each object and returns result.
	*
	* When multiple objects contain the same key the later object in
	* the arguments list will take precedence.
	*
	* Example:
	*
	* ```js
	* const result = merge({foo: 123}, {foo: 456});
	* console.log(result.foo); // outputs 456
	* ```
	*
	* @param {Object} obj1 Object to merge
	*
	* @returns {Object} Result of all merge properties
	*/
	function merge(...objs) {
		const { caseless, skipUndefined } = isContextDefined(this) && this || {};
		const result = {};
		const assignValue = (val, key) => {
			if (key === "__proto__" || key === "constructor" || key === "prototype") return;
			const targetKey = caseless && findKey(result, key) || key;
			const existing = hasOwnProperty(result, targetKey) ? result[targetKey] : void 0;
			if (isPlainObject(existing) && isPlainObject(val)) result[targetKey] = merge(existing, val);
			else if (isPlainObject(val)) result[targetKey] = merge({}, val);
			else if (isArray(val)) result[targetKey] = val.slice();
			else if (!skipUndefined || !isUndefined(val)) result[targetKey] = val;
		};
		for (let i = 0, l = objs.length; i < l; i++) objs[i] && forEach(objs[i], assignValue);
		return result;
	}
	/**
	* Extends object a by mutably adding to it the properties of object b.
	*
	* @param {Object} a The object to be extended
	* @param {Object} b The object to copy properties from
	* @param {Object} thisArg The object to bind function to
	*
	* @param {Object} [options]
	* @param {Boolean} [options.allOwnKeys]
	* @returns {Object} The resulting value of object a
	*/
	var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
		forEach(b, (val, key) => {
			if (thisArg && isFunction$1(val)) Object.defineProperty(a, key, {
				__proto__: null,
				value: bind(val, thisArg),
				writable: true,
				enumerable: true,
				configurable: true
			});
			else Object.defineProperty(a, key, {
				__proto__: null,
				value: val,
				writable: true,
				enumerable: true,
				configurable: true
			});
		}, { allOwnKeys });
		return a;
	};
	/**
	* Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
	*
	* @param {string} content with BOM
	*
	* @returns {string} content value without BOM
	*/
	var stripBOM = (content) => {
		if (content.charCodeAt(0) === 65279) content = content.slice(1);
		return content;
	};
	/**
	* Inherit the prototype methods from one constructor into another
	* @param {function} constructor
	* @param {function} superConstructor
	* @param {object} [props]
	* @param {object} [descriptors]
	*
	* @returns {void}
	*/
	var inherits = (constructor, superConstructor, props, descriptors) => {
		constructor.prototype = Object.create(superConstructor.prototype, descriptors);
		Object.defineProperty(constructor.prototype, "constructor", {
			__proto__: null,
			value: constructor,
			writable: true,
			enumerable: false,
			configurable: true
		});
		Object.defineProperty(constructor, "super", {
			__proto__: null,
			value: superConstructor.prototype
		});
		props && Object.assign(constructor.prototype, props);
	};
	/**
	* Resolve object with deep prototype chain to a flat object
	* @param {Object} sourceObj source object
	* @param {Object} [destObj]
	* @param {Function|Boolean} [filter]
	* @param {Function} [propFilter]
	*
	* @returns {Object}
	*/
	var toFlatObject = (sourceObj, destObj, filter, propFilter) => {
		let props;
		let i;
		let prop;
		const merged = {};
		destObj = destObj || {};
		if (sourceObj == null) return destObj;
		do {
			props = Object.getOwnPropertyNames(sourceObj);
			i = props.length;
			while (i-- > 0) {
				prop = props[i];
				if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
					destObj[prop] = sourceObj[prop];
					merged[prop] = true;
				}
			}
			sourceObj = filter !== false && getPrototypeOf(sourceObj);
		} while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
		return destObj;
	};
	/**
	* Determines whether a string ends with the characters of a specified string
	*
	* @param {String} str
	* @param {String} searchString
	* @param {Number} [position= 0]
	*
	* @returns {boolean}
	*/
	var endsWith = (str, searchString, position) => {
		str = String(str);
		if (position === void 0 || position > str.length) position = str.length;
		position -= searchString.length;
		const lastIndex = str.indexOf(searchString, position);
		return lastIndex !== -1 && lastIndex === position;
	};
	/**
	* Returns new array from array like object or null if failed
	*
	* @param {*} [thing]
	*
	* @returns {?Array}
	*/
	var toArray = (thing) => {
		if (!thing) return null;
		if (isArray(thing)) return thing;
		let i = thing.length;
		if (!isNumber(i)) return null;
		const arr = new Array(i);
		while (i-- > 0) arr[i] = thing[i];
		return arr;
	};
	/**
	* Checking if the Uint8Array exists and if it does, it returns a function that checks if the
	* thing passed in is an instance of Uint8Array
	*
	* @param {TypedArray}
	*
	* @returns {Array}
	*/
	var isTypedArray = ((TypedArray) => {
		return (thing) => {
			return TypedArray && thing instanceof TypedArray;
		};
	})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
	/**
	* For each entry in the object, call the function with the key and value.
	*
	* @param {Object<any, any>} obj - The object to iterate over.
	* @param {Function} fn - The function to call for each entry.
	*
	* @returns {void}
	*/
	var forEachEntry = (obj, fn) => {
		const _iterator = (obj && obj[iterator]).call(obj);
		let result;
		while ((result = _iterator.next()) && !result.done) {
			const pair = result.value;
			fn.call(obj, pair[0], pair[1]);
		}
	};
	/**
	* It takes a regular expression and a string, and returns an array of all the matches
	*
	* @param {string} regExp - The regular expression to match against.
	* @param {string} str - The string to search.
	*
	* @returns {Array<boolean>}
	*/
	var matchAll = (regExp, str) => {
		let matches;
		const arr = [];
		while ((matches = regExp.exec(str)) !== null) arr.push(matches);
		return arr;
	};
	var isHTMLForm = kindOfTest("HTMLFormElement");
	var toCamelCase = (str) => {
		return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function replacer(m, p1, p2) {
			return p1.toUpperCase() + p2;
		});
	};
	var hasOwnProperty = (({ hasOwnProperty }) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);
	/**
	* Determine if a value is a RegExp object
	*
	* @param {*} val The value to test
	*
	* @returns {boolean} True if value is a RegExp object, otherwise false
	*/
	var isRegExp = kindOfTest("RegExp");
	var reduceDescriptors = (obj, reducer) => {
		const descriptors = Object.getOwnPropertyDescriptors(obj);
		const reducedDescriptors = {};
		forEach(descriptors, (descriptor, name) => {
			let ret;
			if ((ret = reducer(descriptor, name, obj)) !== false) reducedDescriptors[name] = ret || descriptor;
		});
		Object.defineProperties(obj, reducedDescriptors);
	};
	/**
	* Makes all methods read-only
	* @param {Object} obj
	*/
	var freezeMethods = (obj) => {
		reduceDescriptors(obj, (descriptor, name) => {
			if (isFunction$1(obj) && [
				"arguments",
				"caller",
				"callee"
			].includes(name)) return false;
			const value = obj[name];
			if (!isFunction$1(value)) return;
			descriptor.enumerable = false;
			if ("writable" in descriptor) {
				descriptor.writable = false;
				return;
			}
			if (!descriptor.set) descriptor.set = () => {
				throw Error("Can not rewrite read-only method '" + name + "'");
			};
		});
	};
	/**
	* Converts an array or a delimited string into an object set with values as keys and true as values.
	* Useful for fast membership checks.
	*
	* @param {Array|string} arrayOrString - The array or string to convert.
	* @param {string} delimiter - The delimiter to use if input is a string.
	* @returns {Object} An object with keys from the array or string, values set to true.
	*/
	var toObjectSet = (arrayOrString, delimiter) => {
		const obj = {};
		const define = (arr) => {
			arr.forEach((value) => {
				obj[value] = true;
			});
		};
		isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
		return obj;
	};
	var noop = () => {};
	var toFiniteNumber = (value, defaultValue) => {
		return value != null && Number.isFinite(value = +value) ? value : defaultValue;
	};
	/**
	* If the thing is a FormData object, return true, otherwise return false.
	*
	* @param {unknown} thing - The thing to check.
	*
	* @returns {boolean}
	*/
	function isSpecCompliantForm(thing) {
		return !!(thing && isFunction$1(thing.append) && thing[toStringTag] === "FormData" && thing[iterator]);
	}
	/**
	* Recursively converts an object to a JSON-compatible object, handling circular references and Buffers.
	*
	* @param {Object} obj - The object to convert.
	* @returns {Object} The JSON-compatible object.
	*/
	var toJSONObject = (obj) => {
		const visited = /* @__PURE__ */ new WeakSet();
		const visit = (source) => {
			if (isObject(source)) {
				if (visited.has(source)) return;
				if (isBuffer(source)) return source;
				if (!("toJSON" in source)) {
					visited.add(source);
					const target = isArray(source) ? [] : {};
					forEach(source, (value, key) => {
						const reducedValue = visit(value);
						!isUndefined(reducedValue) && (target[key] = reducedValue);
					});
					visited.delete(source);
					return target;
				}
			}
			return source;
		};
		return visit(obj);
	};
	/**
	* Determines if a value is an async function.
	*
	* @param {*} thing - The value to test.
	* @returns {boolean} True if value is an async function, otherwise false.
	*/
	var isAsyncFn = kindOfTest("AsyncFunction");
	/**
	* Determines if a value is thenable (has then and catch methods).
	*
	* @param {*} thing - The value to test.
	* @returns {boolean} True if value is thenable, otherwise false.
	*/
	var isThenable = (thing) => thing && (isObject(thing) || isFunction$1(thing)) && isFunction$1(thing.then) && isFunction$1(thing.catch);
	/**
	* Provides a cross-platform setImmediate implementation.
	* Uses native setImmediate if available, otherwise falls back to postMessage or setTimeout.
	*
	* @param {boolean} setImmediateSupported - Whether setImmediate is supported.
	* @param {boolean} postMessageSupported - Whether postMessage is supported.
	* @returns {Function} A function to schedule a callback asynchronously.
	*/
	var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
		if (setImmediateSupported) return setImmediate;
		return postMessageSupported ? ((token, callbacks) => {
			_global.addEventListener("message", ({ source, data }) => {
				if (source === _global && data === token) callbacks.length && callbacks.shift()();
			}, false);
			return (cb) => {
				callbacks.push(cb);
				_global.postMessage(token, "*");
			};
		})(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
	})(typeof setImmediate === "function", isFunction$1(_global.postMessage));
	/**
	* Schedules a microtask or asynchronous callback as soon as possible.
	* Uses queueMicrotask if available, otherwise falls back to process.nextTick or _setImmediate.
	*
	* @type {Function}
	*/
	var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
	var isIterable = (thing) => thing != null && isFunction$1(thing[iterator]);
	var utils$1 = {
		isArray,
		isArrayBuffer,
		isBuffer,
		isFormData,
		isArrayBufferView,
		isString,
		isNumber,
		isBoolean,
		isObject,
		isPlainObject,
		isEmptyObject,
		isReadableStream,
		isRequest,
		isResponse,
		isHeaders,
		isUndefined,
		isDate,
		isFile,
		isReactNativeBlob,
		isReactNative,
		isBlob,
		isRegExp,
		isFunction: isFunction$1,
		isStream,
		isURLSearchParams,
		isTypedArray,
		isFileList,
		forEach,
		merge,
		extend,
		trim,
		stripBOM,
		inherits,
		toFlatObject,
		kindOf,
		kindOfTest,
		endsWith,
		toArray,
		forEachEntry,
		matchAll,
		isHTMLForm,
		hasOwnProperty,
		hasOwnProp: hasOwnProperty,
		reduceDescriptors,
		freezeMethods,
		toObjectSet,
		toCamelCase,
		noop,
		toFiniteNumber,
		findKey,
		global: _global,
		isContextDefined,
		isSpecCompliantForm,
		toJSONObject,
		isAsyncFn,
		isThenable,
		setImmediate: _setImmediate,
		asap,
		isIterable
	};
	var ignoreDuplicateOf = utils$1.toObjectSet([
		"age",
		"authorization",
		"content-length",
		"content-type",
		"etag",
		"expires",
		"from",
		"host",
		"if-modified-since",
		"if-unmodified-since",
		"last-modified",
		"location",
		"max-forwards",
		"proxy-authorization",
		"referer",
		"retry-after",
		"user-agent"
	]);
	/**
	* Parse headers into an object
	*
	* ```
	* Date: Wed, 27 Aug 2014 08:58:49 GMT
	* Content-Type: application/json
	* Connection: keep-alive
	* Transfer-Encoding: chunked
	* ```
	*
	* @param {String} rawHeaders Headers needing to be parsed
	*
	* @returns {Object} Headers parsed into an object
	*/
	var parseHeaders = (rawHeaders) => {
		const parsed = {};
		let key;
		let val;
		let i;
		rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
			i = line.indexOf(":");
			key = line.substring(0, i).trim().toLowerCase();
			val = line.substring(i + 1).trim();
			if (!key || parsed[key] && ignoreDuplicateOf[key]) return;
			if (key === "set-cookie") if (parsed[key]) parsed[key].push(val);
			else parsed[key] = [val];
			else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
		});
		return parsed;
	};
	function trimSPorHTAB(str) {
		let start = 0;
		let end = str.length;
		while (start < end) {
			const code = str.charCodeAt(start);
			if (code !== 9 && code !== 32) break;
			start += 1;
		}
		while (end > start) {
			const code = str.charCodeAt(end - 1);
			if (code !== 9 && code !== 32) break;
			end -= 1;
		}
		return start === 0 && end === str.length ? str : str.slice(start, end);
	}
	var INVALID_UNICODE_HEADER_VALUE_CHARS = /* @__PURE__ */ new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+", "g");
	var INVALID_BYTE_STRING_HEADER_VALUE_CHARS = /* @__PURE__ */ new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+", "g");
	function sanitizeValue(value, invalidChars) {
		if (utils$1.isArray(value)) return value.map((item) => sanitizeValue(item, invalidChars));
		return trimSPorHTAB(String(value).replace(invalidChars, ""));
	}
	var sanitizeHeaderValue = (value) => sanitizeValue(value, INVALID_UNICODE_HEADER_VALUE_CHARS);
	var sanitizeByteStringHeaderValue = (value) => sanitizeValue(value, INVALID_BYTE_STRING_HEADER_VALUE_CHARS);
	function toByteStringHeaderObject(headers) {
		const byteStringHeaders = Object.create(null);
		utils$1.forEach(headers.toJSON(), (value, header) => {
			byteStringHeaders[header] = sanitizeByteStringHeaderValue(value);
		});
		return byteStringHeaders;
	}
	var $internals = Symbol("internals");
	function normalizeHeader(header) {
		return header && String(header).trim().toLowerCase();
	}
	function normalizeValue(value) {
		if (value === false || value == null) return value;
		return utils$1.isArray(value) ? value.map(normalizeValue) : sanitizeHeaderValue(String(value));
	}
	function parseTokens(str) {
		const tokens = Object.create(null);
		const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
		let match;
		while (match = tokensRE.exec(str)) tokens[match[1]] = match[2];
		return tokens;
	}
	var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
	function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
		if (utils$1.isFunction(filter)) return filter.call(this, value, header);
		if (isHeaderNameFilter) value = header;
		if (!utils$1.isString(value)) return;
		if (utils$1.isString(filter)) return value.indexOf(filter) !== -1;
		if (utils$1.isRegExp(filter)) return filter.test(value);
	}
	function formatHeader(header) {
		return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
			return char.toUpperCase() + str;
		});
	}
	function buildAccessors(obj, header) {
		const accessorName = utils$1.toCamelCase(" " + header);
		[
			"get",
			"set",
			"has"
		].forEach((methodName) => {
			Object.defineProperty(obj, methodName + accessorName, {
				__proto__: null,
				value: function(arg1, arg2, arg3) {
					return this[methodName].call(this, header, arg1, arg2, arg3);
				},
				configurable: true
			});
		});
	}
	var AxiosHeaders = class {
		constructor(headers) {
			headers && this.set(headers);
		}
		set(header, valueOrRewrite, rewrite) {
			const self = this;
			function setHeader(_value, _header, _rewrite) {
				const lHeader = normalizeHeader(_header);
				if (!lHeader) throw new Error("header name must be a non-empty string");
				const key = utils$1.findKey(self, lHeader);
				if (!key || self[key] === void 0 || _rewrite === true || _rewrite === void 0 && self[key] !== false) self[key || _header] = normalizeValue(_value);
			}
			const setHeaders = (headers, _rewrite) => utils$1.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
			if (utils$1.isPlainObject(header) || header instanceof this.constructor) setHeaders(header, valueOrRewrite);
			else if (utils$1.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) setHeaders(parseHeaders(header), valueOrRewrite);
			else if (utils$1.isObject(header) && utils$1.isIterable(header)) {
				let obj = {}, dest, key;
				for (const entry of header) {
					if (!utils$1.isArray(entry)) throw TypeError("Object iterator must return a key-value pair");
					obj[key = entry[0]] = (dest = obj[key]) ? utils$1.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]] : entry[1];
				}
				setHeaders(obj, valueOrRewrite);
			} else header != null && setHeader(valueOrRewrite, header, rewrite);
			return this;
		}
		get(header, parser) {
			header = normalizeHeader(header);
			if (header) {
				const key = utils$1.findKey(this, header);
				if (key) {
					const value = this[key];
					if (!parser) return value;
					if (parser === true) return parseTokens(value);
					if (utils$1.isFunction(parser)) return parser.call(this, value, key);
					if (utils$1.isRegExp(parser)) return parser.exec(value);
					throw new TypeError("parser must be boolean|regexp|function");
				}
			}
		}
		has(header, matcher) {
			header = normalizeHeader(header);
			if (header) {
				const key = utils$1.findKey(this, header);
				return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
			}
			return false;
		}
		delete(header, matcher) {
			const self = this;
			let deleted = false;
			function deleteHeader(_header) {
				_header = normalizeHeader(_header);
				if (_header) {
					const key = utils$1.findKey(self, _header);
					if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
						delete self[key];
						deleted = true;
					}
				}
			}
			if (utils$1.isArray(header)) header.forEach(deleteHeader);
			else deleteHeader(header);
			return deleted;
		}
		clear(matcher) {
			const keys = Object.keys(this);
			let i = keys.length;
			let deleted = false;
			while (i--) {
				const key = keys[i];
				if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
					delete this[key];
					deleted = true;
				}
			}
			return deleted;
		}
		normalize(format) {
			const self = this;
			const headers = {};
			utils$1.forEach(this, (value, header) => {
				const key = utils$1.findKey(headers, header);
				if (key) {
					self[key] = normalizeValue(value);
					delete self[header];
					return;
				}
				const normalized = format ? formatHeader(header) : String(header).trim();
				if (normalized !== header) delete self[header];
				self[normalized] = normalizeValue(value);
				headers[normalized] = true;
			});
			return this;
		}
		concat(...targets) {
			return this.constructor.concat(this, ...targets);
		}
		toJSON(asStrings) {
			const obj = Object.create(null);
			utils$1.forEach(this, (value, header) => {
				value != null && value !== false && (obj[header] = asStrings && utils$1.isArray(value) ? value.join(", ") : value);
			});
			return obj;
		}
		[Symbol.iterator]() {
			return Object.entries(this.toJSON())[Symbol.iterator]();
		}
		toString() {
			return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
		}
		getSetCookie() {
			return this.get("set-cookie") || [];
		}
		get [Symbol.toStringTag]() {
			return "AxiosHeaders";
		}
		static from(thing) {
			return thing instanceof this ? thing : new this(thing);
		}
		static concat(first, ...targets) {
			const computed = new this(first);
			targets.forEach((target) => computed.set(target));
			return computed;
		}
		static accessor(header) {
			const accessors = (this[$internals] = this[$internals] = { accessors: {} }).accessors;
			const prototype = this.prototype;
			function defineAccessor(_header) {
				const lHeader = normalizeHeader(_header);
				if (!accessors[lHeader]) {
					buildAccessors(prototype, _header);
					accessors[lHeader] = true;
				}
			}
			utils$1.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
			return this;
		}
	};
	AxiosHeaders.accessor([
		"Content-Type",
		"Content-Length",
		"Accept",
		"Accept-Encoding",
		"User-Agent",
		"Authorization"
	]);
	utils$1.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
		let mapped = key[0].toUpperCase() + key.slice(1);
		return {
			get: () => value,
			set(headerValue) {
				this[mapped] = headerValue;
			}
		};
	});
	utils$1.freezeMethods(AxiosHeaders);
	var REDACTED = "[REDACTED ****]";
	function hasOwnOrPrototypeToJSON(source) {
		if (utils$1.hasOwnProp(source, "toJSON")) return true;
		let prototype = Object.getPrototypeOf(source);
		while (prototype && prototype !== Object.prototype) {
			if (utils$1.hasOwnProp(prototype, "toJSON")) return true;
			prototype = Object.getPrototypeOf(prototype);
		}
		return false;
	}
	function redactConfig(config, redactKeys) {
		const lowerKeys = new Set(redactKeys.map((k) => String(k).toLowerCase()));
		const seen = [];
		const visit = (source) => {
			if (source === null || typeof source !== "object") return source;
			if (utils$1.isBuffer(source)) return source;
			if (seen.indexOf(source) !== -1) return void 0;
			if (source instanceof AxiosHeaders) source = source.toJSON();
			seen.push(source);
			let result;
			if (utils$1.isArray(source)) {
				result = [];
				source.forEach((v, i) => {
					const reducedValue = visit(v);
					if (!utils$1.isUndefined(reducedValue)) result[i] = reducedValue;
				});
			} else {
				if (!utils$1.isPlainObject(source) && hasOwnOrPrototypeToJSON(source)) {
					seen.pop();
					return source;
				}
				result = Object.create(null);
				for (const [key, value] of Object.entries(source)) {
					const reducedValue = lowerKeys.has(key.toLowerCase()) ? REDACTED : visit(value);
					if (!utils$1.isUndefined(reducedValue)) result[key] = reducedValue;
				}
			}
			seen.pop();
			return result;
		};
		return visit(config);
	}
	var AxiosError = class AxiosError extends Error {
		static from(error, code, config, request, response, customProps) {
			const axiosError = new AxiosError(error.message, code || error.code, config, request, response);
			axiosError.cause = error;
			axiosError.name = error.name;
			if (error.status != null && axiosError.status == null) axiosError.status = error.status;
			customProps && Object.assign(axiosError, customProps);
			return axiosError;
		}
		/**
		* Create an Error with the specified message, config, error code, request and response.
		*
		* @param {string} message The error message.
		* @param {string} [code] The error code (for example, 'ECONNABORTED').
		* @param {Object} [config] The config.
		* @param {Object} [request] The request.
		* @param {Object} [response] The response.
		*
		* @returns {Error} The created error.
		*/
		constructor(message, code, config, request, response) {
			super(message);
			Object.defineProperty(this, "message", {
				__proto__: null,
				value: message,
				enumerable: true,
				writable: true,
				configurable: true
			});
			this.name = "AxiosError";
			this.isAxiosError = true;
			code && (this.code = code);
			config && (this.config = config);
			request && (this.request = request);
			if (response) {
				this.response = response;
				this.status = response.status;
			}
		}
		toJSON() {
			const config = this.config;
			const redactKeys = config && utils$1.hasOwnProp(config, "redact") ? config.redact : void 0;
			const serializedConfig = utils$1.isArray(redactKeys) && redactKeys.length > 0 ? redactConfig(config, redactKeys) : utils$1.toJSONObject(config);
			return {
				message: this.message,
				name: this.name,
				description: this.description,
				number: this.number,
				fileName: this.fileName,
				lineNumber: this.lineNumber,
				columnNumber: this.columnNumber,
				stack: this.stack,
				config: serializedConfig,
				code: this.code,
				status: this.status
			};
		}
	};
	AxiosError.ERR_BAD_OPTION_VALUE = "ERR_BAD_OPTION_VALUE";
	AxiosError.ERR_BAD_OPTION = "ERR_BAD_OPTION";
	AxiosError.ECONNABORTED = "ECONNABORTED";
	AxiosError.ETIMEDOUT = "ETIMEDOUT";
	AxiosError.ECONNREFUSED = "ECONNREFUSED";
	AxiosError.ERR_NETWORK = "ERR_NETWORK";
	AxiosError.ERR_FR_TOO_MANY_REDIRECTS = "ERR_FR_TOO_MANY_REDIRECTS";
	AxiosError.ERR_DEPRECATED = "ERR_DEPRECATED";
	AxiosError.ERR_BAD_RESPONSE = "ERR_BAD_RESPONSE";
	AxiosError.ERR_BAD_REQUEST = "ERR_BAD_REQUEST";
	AxiosError.ERR_CANCELED = "ERR_CANCELED";
	AxiosError.ERR_NOT_SUPPORT = "ERR_NOT_SUPPORT";
	AxiosError.ERR_INVALID_URL = "ERR_INVALID_URL";
	AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED = "ERR_FORM_DATA_DEPTH_EXCEEDED";
	/**
	* Determines if the given thing is a array or js object.
	*
	* @param {string} thing - The object or array to be visited.
	*
	* @returns {boolean}
	*/
	function isVisitable(thing) {
		return utils$1.isPlainObject(thing) || utils$1.isArray(thing);
	}
	/**
	* It removes the brackets from the end of a string
	*
	* @param {string} key - The key of the parameter.
	*
	* @returns {string} the key without the brackets.
	*/
	function removeBrackets(key) {
		return utils$1.endsWith(key, "[]") ? key.slice(0, -2) : key;
	}
	/**
	* It takes a path, a key, and a boolean, and returns a string
	*
	* @param {string} path - The path to the current key.
	* @param {string} key - The key of the current object being iterated over.
	* @param {string} dots - If true, the key will be rendered with dots instead of brackets.
	*
	* @returns {string} The path to the current key.
	*/
	function renderKey(path, key, dots) {
		if (!path) return key;
		return path.concat(key).map(function each(token, i) {
			token = removeBrackets(token);
			return !dots && i ? "[" + token + "]" : token;
		}).join(dots ? "." : "");
	}
	/**
	* If the array is an array and none of its elements are visitable, then it's a flat array.
	*
	* @param {Array<any>} arr - The array to check
	*
	* @returns {boolean}
	*/
	function isFlatArray(arr) {
		return utils$1.isArray(arr) && !arr.some(isVisitable);
	}
	var predicates = utils$1.toFlatObject(utils$1, {}, null, function filter(prop) {
		return /^is[A-Z]/.test(prop);
	});
	/**
	* Convert a data object to FormData
	*
	* @param {Object} obj
	* @param {?Object} [formData]
	* @param {?Object} [options]
	* @param {Function} [options.visitor]
	* @param {Boolean} [options.metaTokens = true]
	* @param {Boolean} [options.dots = false]
	* @param {?Boolean} [options.indexes = false]
	*
	* @returns {Object}
	**/
	/**
	* It converts an object into a FormData object
	*
	* @param {Object<any, any>} obj - The object to convert to form data.
	* @param {string} formData - The FormData object to append to.
	* @param {Object<string, any>} options
	*
	* @returns
	*/
	function toFormData(obj, formData, options) {
		if (!utils$1.isObject(obj)) throw new TypeError("target must be an object");
		formData = formData || new (FormData$1 || FormData)();
		options = utils$1.toFlatObject(options, {
			metaTokens: true,
			dots: false,
			indexes: false
		}, false, function defined(option, source) {
			return !utils$1.isUndefined(source[option]);
		});
		const metaTokens = options.metaTokens;
		const visitor = options.visitor || defaultVisitor;
		const dots = options.dots;
		const indexes = options.indexes;
		const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
		const maxDepth = options.maxDepth === void 0 ? 100 : options.maxDepth;
		const useBlob = _Blob && utils$1.isSpecCompliantForm(formData);
		if (!utils$1.isFunction(visitor)) throw new TypeError("visitor must be a function");
		function convertValue(value) {
			if (value === null) return "";
			if (utils$1.isDate(value)) return value.toISOString();
			if (utils$1.isBoolean(value)) return value.toString();
			if (!useBlob && utils$1.isBlob(value)) throw new AxiosError("Blob is not supported. Use a Buffer instead.");
			if (utils$1.isArrayBuffer(value) || utils$1.isTypedArray(value)) return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
			return value;
		}
		/**
		* Default visitor.
		*
		* @param {*} value
		* @param {String|Number} key
		* @param {Array<String|Number>} path
		* @this {FormData}
		*
		* @returns {boolean} return true to visit the each prop of the value recursively
		*/
		function defaultVisitor(value, key, path) {
			let arr = value;
			if (utils$1.isReactNative(formData) && utils$1.isReactNativeBlob(value)) {
				formData.append(renderKey(path, key, dots), convertValue(value));
				return false;
			}
			if (value && !path && typeof value === "object") {
				if (utils$1.endsWith(key, "{}")) {
					key = metaTokens ? key : key.slice(0, -2);
					value = JSON.stringify(value);
				} else if (utils$1.isArray(value) && isFlatArray(value) || (utils$1.isFileList(value) || utils$1.endsWith(key, "[]")) && (arr = utils$1.toArray(value))) {
					key = removeBrackets(key);
					arr.forEach(function each(el, index) {
						!(utils$1.isUndefined(el) || el === null) && formData.append(indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]", convertValue(el));
					});
					return false;
				}
			}
			if (isVisitable(value)) return true;
			formData.append(renderKey(path, key, dots), convertValue(value));
			return false;
		}
		const stack = [];
		const exposedHelpers = Object.assign(predicates, {
			defaultVisitor,
			convertValue,
			isVisitable
		});
		function build(value, path, depth = 0) {
			if (utils$1.isUndefined(value)) return;
			if (depth > maxDepth) throw new AxiosError("Object is too deeply nested (" + depth + " levels). Max depth: " + maxDepth, AxiosError.ERR_FORM_DATA_DEPTH_EXCEEDED);
			if (stack.indexOf(value) !== -1) throw Error("Circular reference detected in " + path.join("."));
			stack.push(value);
			utils$1.forEach(value, function each(el, key) {
				if ((!(utils$1.isUndefined(el) || el === null) && visitor.call(formData, el, utils$1.isString(key) ? key.trim() : key, path, exposedHelpers)) === true) build(el, path ? path.concat(key) : [key], depth + 1);
			});
			stack.pop();
		}
		if (!utils$1.isObject(obj)) throw new TypeError("data must be an object");
		build(obj);
		return formData;
	}
	/**
	* It encodes a string by replacing all characters that are not in the unreserved set with
	* their percent-encoded equivalents
	*
	* @param {string} str - The string to encode.
	*
	* @returns {string} The encoded string.
	*/
	function encode$1(str) {
		const charMap = {
			"!": "%21",
			"'": "%27",
			"(": "%28",
			")": "%29",
			"~": "%7E",
			"%20": "+"
		};
		return encodeURIComponent(str).replace(/[!'()~]|%20/g, function replacer(match) {
			return charMap[match];
		});
	}
	/**
	* It takes a params object and converts it to a FormData object
	*
	* @param {Object<string, any>} params - The parameters to be converted to a FormData object.
	* @param {Object<string, any>} options - The options object passed to the Axios constructor.
	*
	* @returns {void}
	*/
	function AxiosURLSearchParams(params, options) {
		this._pairs = [];
		params && toFormData(params, this, options);
	}
	var prototype = AxiosURLSearchParams.prototype;
	prototype.append = function append(name, value) {
		this._pairs.push([name, value]);
	};
	prototype.toString = function toString(encoder) {
		const _encode = encoder ? function(value) {
			return encoder.call(this, value, encode$1);
		} : encode$1;
		return this._pairs.map(function each(pair) {
			return _encode(pair[0]) + "=" + _encode(pair[1]);
		}, "").join("&");
	};
	/**
	* It replaces URL-encoded forms of `:`, `$`, `,`, and spaces with
	* their plain counterparts (`:`, `$`, `,`, `+`).
	*
	* @param {string} val The value to be encoded.
	*
	* @returns {string} The encoded value.
	*/
	function encode(val) {
		return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+");
	}
	/**
	* Build a URL by appending params to the end
	*
	* @param {string} url The base of the url (e.g., http://www.google.com)
	* @param {object} [params] The params to be appended
	* @param {?(object|Function)} options
	*
	* @returns {string} The formatted url
	*/
	function buildURL(url, params, options) {
		if (!params) return url;
		const _encode = options && options.encode || encode;
		const _options = utils$1.isFunction(options) ? { serialize: options } : options;
		const serializeFn = _options && _options.serialize;
		let serializedParams;
		if (serializeFn) serializedParams = serializeFn(params, _options);
		else serializedParams = utils$1.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams(params, _options).toString(_encode);
		if (serializedParams) {
			const hashmarkIndex = url.indexOf("#");
			if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
			url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
		}
		return url;
	}
	var InterceptorManager = class {
		constructor() {
			this.handlers = [];
		}
		/**
		* Add a new interceptor to the stack
		*
		* @param {Function} fulfilled The function to handle `then` for a `Promise`
		* @param {Function} rejected The function to handle `reject` for a `Promise`
		* @param {Object} options The options for the interceptor, synchronous and runWhen
		*
		* @return {Number} An ID used to remove interceptor later
		*/
		use(fulfilled, rejected, options) {
			this.handlers.push({
				fulfilled,
				rejected,
				synchronous: options ? options.synchronous : false,
				runWhen: options ? options.runWhen : null
			});
			return this.handlers.length - 1;
		}
		/**
		* Remove an interceptor from the stack
		*
		* @param {Number} id The ID that was returned by `use`
		*
		* @returns {void}
		*/
		eject(id) {
			if (this.handlers[id]) this.handlers[id] = null;
		}
		/**
		* Clear all interceptors from the stack
		*
		* @returns {void}
		*/
		clear() {
			if (this.handlers) this.handlers = [];
		}
		/**
		* Iterate over all the registered interceptors
		*
		* This method is particularly useful for skipping over any
		* interceptors that may have become `null` calling `eject`.
		*
		* @param {Function} fn The function to call for each interceptor
		*
		* @returns {void}
		*/
		forEach(fn) {
			utils$1.forEach(this.handlers, function forEachHandler(h) {
				if (h !== null) fn(h);
			});
		}
	};
	var transitionalDefaults = {
		silentJSONParsing: true,
		forcedJSONParsing: true,
		clarifyTimeoutError: false,
		legacyInterceptorReqResOrdering: true
	};
	var URLSearchParams = url.URLSearchParams;
	var ALPHA = "abcdefghijklmnopqrstuvwxyz";
	var DIGIT = "0123456789";
	var ALPHABET = {
		DIGIT,
		ALPHA,
		ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
	};
	var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
		let str = "";
		const { length } = alphabet;
		const randomValues = new Uint32Array(size);
		crypto.randomFillSync(randomValues);
		for (let i = 0; i < size; i++) str += alphabet[randomValues[i] % length];
		return str;
	};
	var platform$1 = {
		isNode: true,
		classes: {
			URLSearchParams,
			FormData: FormData$1,
			Blob: typeof Blob !== "undefined" && Blob || null
		},
		ALPHABET,
		generateString,
		protocols: [
			"http",
			"https",
			"file",
			"data"
		]
	};
	var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
	var _navigator = typeof navigator === "object" && navigator || void 0;
	/**
	* Determine if we're running in a standard browser environment
	*
	* This allows axios to run in a web worker, and react-native.
	* Both environments support XMLHttpRequest, but not fully standard globals.
	*
	* web workers:
	*  typeof window -> undefined
	*  typeof document -> undefined
	*
	* react-native:
	*  navigator.product -> 'ReactNative'
	* nativescript
	*  navigator.product -> 'NativeScript' or 'NS'
	*
	* @returns {boolean}
	*/
	var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || [
		"ReactNative",
		"NativeScript",
		"NS"
	].indexOf(_navigator.product) < 0);
	/**
	* Determine if we're running in a standard browser webWorker environment
	*
	* Although the `isStandardBrowserEnv` method indicates that
	* `allows axios to run in a web worker`, the WebWorker will still be
	* filtered out due to its judgment standard
	* `typeof window !== 'undefined' && typeof document !== 'undefined'`.
	* This leads to a problem when axios post `FormData` in webWorker
	*/
	var hasStandardBrowserWebWorkerEnv = (() => {
		return typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
	})();
	var origin = hasBrowserEnv && window.location.href || "http://localhost";
	var platform = {
		.../* @__PURE__ */ Object.freeze({
			__proto__: null,
			hasBrowserEnv,
			hasStandardBrowserEnv,
			hasStandardBrowserWebWorkerEnv,
			navigator: _navigator,
			origin
		}),
		...platform$1
	};
	function toURLEncodedForm(data, options) {
		return toFormData(data, new platform.classes.URLSearchParams(), {
			visitor: function(value, key, path, helpers) {
				if (platform.isNode && utils$1.isBuffer(value)) {
					this.append(key, value.toString("base64"));
					return false;
				}
				return helpers.defaultVisitor.apply(this, arguments);
			},
			...options
		});
	}
	/**
	* It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
	*
	* @param {string} name - The name of the property to get.
	*
	* @returns An array of strings.
	*/
	function parsePropPath(name) {
		return utils$1.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
			return match[0] === "[]" ? "" : match[1] || match[0];
		});
	}
	/**
	* Convert an array to an object.
	*
	* @param {Array<any>} arr - The array to convert to an object.
	*
	* @returns An object with the same keys and values as the array.
	*/
	function arrayToObject(arr) {
		const obj = {};
		const keys = Object.keys(arr);
		let i;
		const len = keys.length;
		let key;
		for (i = 0; i < len; i++) {
			key = keys[i];
			obj[key] = arr[key];
		}
		return obj;
	}
	/**
	* It takes a FormData object and returns a JavaScript object
	*
	* @param {string} formData The FormData object to convert to JSON.
	*
	* @returns {Object<string, any> | null} The converted object.
	*/
	function formDataToJSON(formData) {
		function buildPath(path, value, target, index) {
			let name = path[index++];
			if (name === "__proto__") return true;
			const isNumericKey = Number.isFinite(+name);
			const isLast = index >= path.length;
			name = !name && utils$1.isArray(target) ? target.length : name;
			if (isLast) {
				if (utils$1.hasOwnProp(target, name)) target[name] = utils$1.isArray(target[name]) ? target[name].concat(value) : [target[name], value];
				else target[name] = value;
				return !isNumericKey;
			}
			if (!utils$1.hasOwnProp(target, name) || !utils$1.isObject(target[name])) target[name] = [];
			if (buildPath(path, value, target[name], index) && utils$1.isArray(target[name])) target[name] = arrayToObject(target[name]);
			return !isNumericKey;
		}
		if (utils$1.isFormData(formData) && utils$1.isFunction(formData.entries)) {
			const obj = {};
			utils$1.forEachEntry(formData, (name, value) => {
				buildPath(parsePropPath(name), value, obj, 0);
			});
			return obj;
		}
		return null;
	}
	var own = (obj, key) => obj != null && utils$1.hasOwnProp(obj, key) ? obj[key] : void 0;
	/**
	* It takes a string, tries to parse it, and if it fails, it returns the stringified version
	* of the input
	*
	* @param {any} rawValue - The value to be stringified.
	* @param {Function} parser - A function that parses a string into a JavaScript object.
	* @param {Function} encoder - A function that takes a value and returns a string.
	*
	* @returns {string} A stringified version of the rawValue.
	*/
	function stringifySafely(rawValue, parser, encoder) {
		if (utils$1.isString(rawValue)) try {
			(parser || JSON.parse)(rawValue);
			return utils$1.trim(rawValue);
		} catch (e) {
			if (e.name !== "SyntaxError") throw e;
		}
		return (encoder || JSON.stringify)(rawValue);
	}
	var defaults = {
		transitional: transitionalDefaults,
		adapter: [
			"xhr",
			"http",
			"fetch"
		],
		transformRequest: [function transformRequest(data, headers) {
			const contentType = headers.getContentType() || "";
			const hasJSONContentType = contentType.indexOf("application/json") > -1;
			const isObjectPayload = utils$1.isObject(data);
			if (isObjectPayload && utils$1.isHTMLForm(data)) data = new FormData(data);
			if (utils$1.isFormData(data)) return hasJSONContentType ? JSON.stringify(formDataToJSON(data)) : data;
			if (utils$1.isArrayBuffer(data) || utils$1.isBuffer(data) || utils$1.isStream(data) || utils$1.isFile(data) || utils$1.isBlob(data) || utils$1.isReadableStream(data)) return data;
			if (utils$1.isArrayBufferView(data)) return data.buffer;
			if (utils$1.isURLSearchParams(data)) {
				headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
				return data.toString();
			}
			let isFileList;
			if (isObjectPayload) {
				const formSerializer = own(this, "formSerializer");
				if (contentType.indexOf("application/x-www-form-urlencoded") > -1) return toURLEncodedForm(data, formSerializer).toString();
				if ((isFileList = utils$1.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
					const env = own(this, "env");
					const _FormData = env && env.FormData;
					return toFormData(isFileList ? { "files[]": data } : data, _FormData && new _FormData(), formSerializer);
				}
			}
			if (isObjectPayload || hasJSONContentType) {
				headers.setContentType("application/json", false);
				return stringifySafely(data);
			}
			return data;
		}],
		transformResponse: [function transformResponse(data) {
			const transitional = own(this, "transitional") || defaults.transitional;
			const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
			const responseType = own(this, "responseType");
			const JSONRequested = responseType === "json";
			if (utils$1.isResponse(data) || utils$1.isReadableStream(data)) return data;
			if (data && utils$1.isString(data) && (forcedJSONParsing && !responseType || JSONRequested)) {
				const strictJSONParsing = !(transitional && transitional.silentJSONParsing) && JSONRequested;
				try {
					return JSON.parse(data, own(this, "parseReviver"));
				} catch (e) {
					if (strictJSONParsing) {
						if (e.name === "SyntaxError") throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, own(this, "response"));
						throw e;
					}
				}
			}
			return data;
		}],
		/**
		* A timeout in milliseconds to abort a request. If set to 0 (default) a
		* timeout is not created.
		*/
		timeout: 0,
		xsrfCookieName: "XSRF-TOKEN",
		xsrfHeaderName: "X-XSRF-TOKEN",
		maxContentLength: -1,
		maxBodyLength: -1,
		env: {
			FormData: platform.classes.FormData,
			Blob: platform.classes.Blob
		},
		validateStatus: function validateStatus(status) {
			return status >= 200 && status < 300;
		},
		headers: { common: {
			Accept: "application/json, text/plain, */*",
			"Content-Type": void 0
		} }
	};
	utils$1.forEach([
		"delete",
		"get",
		"head",
		"post",
		"put",
		"patch",
		"query"
	], (method) => {
		defaults.headers[method] = {};
	});
	/**
	* Transform the data for a request or a response
	*
	* @param {Array|Function} fns A single function or Array of functions
	* @param {?Object} response The response object
	*
	* @returns {*} The resulting transformed data
	*/
	function transformData(fns, response) {
		const config = this || defaults;
		const context = response || config;
		const headers = AxiosHeaders.from(context.headers);
		let data = context.data;
		utils$1.forEach(fns, function transform(fn) {
			data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
		});
		headers.normalize();
		return data;
	}
	function isCancel(value) {
		return !!(value && value.__CANCEL__);
	}
	var CanceledError = class extends AxiosError {
		/**
		* A `CanceledError` is an object that is thrown when an operation is canceled.
		*
		* @param {string=} message The message.
		* @param {Object=} config The config.
		* @param {Object=} request The request.
		*
		* @returns {CanceledError} The created error.
		*/
		constructor(message, config, request) {
			super(message == null ? "canceled" : message, AxiosError.ERR_CANCELED, config, request);
			this.name = "CanceledError";
			this.__CANCEL__ = true;
		}
	};
	/**
	* Resolve or reject a Promise based on response status.
	*
	* @param {Function} resolve A function that resolves the promise.
	* @param {Function} reject A function that rejects the promise.
	* @param {object} response The response.
	*
	* @returns {object} The response.
	*/
	function settle(resolve, reject, response) {
		const validateStatus = response.config.validateStatus;
		if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
		else reject(new AxiosError("Request failed with status code " + response.status, response.status >= 400 && response.status < 500 ? AxiosError.ERR_BAD_REQUEST : AxiosError.ERR_BAD_RESPONSE, response.config, response.request, response));
	}
	/**
	* Determines whether the specified URL is absolute
	*
	* @param {string} url The URL to test
	*
	* @returns {boolean} True if the specified URL is absolute, otherwise false
	*/
	function isAbsoluteURL(url) {
		if (typeof url !== "string") return false;
		return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
	}
	/**
	* Creates a new URL by combining the specified URLs
	*
	* @param {string} baseURL The base URL
	* @param {string} relativeURL The relative URL
	*
	* @returns {string} The combined URL
	*/
	function combineURLs(baseURL, relativeURL) {
		return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
	}
	/**
	* Creates a new URL by combining the baseURL with the requestedURL,
	* only when the requestedURL is not already an absolute URL.
	* If the requestURL is absolute, this function returns the requestedURL untouched.
	*
	* @param {string} baseURL The base URL
	* @param {string} requestedURL Absolute or relative URL to combine
	*
	* @returns {string} The combined full path
	*/
	function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
		let isRelativeUrl = !isAbsoluteURL(requestedURL);
		if (baseURL && (isRelativeUrl || allowAbsoluteUrls === false)) return combineURLs(baseURL, requestedURL);
		return requestedURL;
	}
	var DEFAULT_PORTS$1 = {
		ftp: 21,
		gopher: 70,
		http: 80,
		https: 443,
		ws: 80,
		wss: 443
	};
	function parseUrl(urlString) {
		try {
			return new URL(urlString);
		} catch {
			return null;
		}
	}
	/**
	* @param {string|object|URL} url - The URL as a string or URL instance, or a
	*   compatible object (such as the result from legacy url.parse).
	* @return {string} The URL of the proxy that should handle the request to the
	*  given URL. If no proxy is set, this will be an empty string.
	*/
	function getProxyForUrl(url) {
		var parsedUrl = (typeof url === "string" ? parseUrl(url) : url) || {};
		var proto = parsedUrl.protocol;
		var hostname = parsedUrl.host;
		var port = parsedUrl.port;
		if (typeof hostname !== "string" || !hostname || typeof proto !== "string") return "";
		proto = proto.split(":", 1)[0];
		hostname = hostname.replace(/:\d*$/, "");
		port = parseInt(port) || DEFAULT_PORTS$1[proto] || 0;
		if (!shouldProxy(hostname, port)) return "";
		var proxy = getEnv(proto + "_proxy") || getEnv("all_proxy");
		if (proxy && proxy.indexOf("://") === -1) proxy = proto + "://" + proxy;
		return proxy;
	}
	/**
	* Determines whether a given URL should be proxied.
	*
	* @param {string} hostname - The host name of the URL.
	* @param {number} port - The effective port of the URL.
	* @returns {boolean} Whether the given URL should be proxied.
	* @private
	*/
	function shouldProxy(hostname, port) {
		var NO_PROXY = getEnv("no_proxy").toLowerCase();
		if (!NO_PROXY) return true;
		if (NO_PROXY === "*") return false;
		return NO_PROXY.split(/[,\s]/).every(function(proxy) {
			if (!proxy) return true;
			var parsedProxy = proxy.match(/^(.+):(\d+)$/);
			var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
			var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
			if (parsedProxyPort && parsedProxyPort !== port) return true;
			if (!/^[.*]/.test(parsedProxyHostname)) return hostname !== parsedProxyHostname;
			if (parsedProxyHostname.charAt(0) === "*") parsedProxyHostname = parsedProxyHostname.slice(1);
			return !hostname.endsWith(parsedProxyHostname);
		});
	}
	/**
	* Get the value for an environment variable.
	*
	* @param {string} key - The name of the environment variable.
	* @return {string} The value of the environment variable.
	* @private
	*/
	function getEnv(key) {
		return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || "";
	}
	var VERSION = "1.16.1";
	function parseProtocol(url) {
		const match = /^([-+\w]{1,25}):(?:\/\/)?/.exec(url);
		return match && match[1] || "";
	}
	var DATA_URL_PATTERN = /^([^,;]+\/[^,;]+)?((?:;[^,;=]+=[^,;]+)*)(;base64)?,([\s\S]*)$/;
	/**
	* Parse data uri to a Buffer or Blob
	*
	* @param {String} uri
	* @param {?Boolean} asBlob
	* @param {?Object} options
	* @param {?Function} options.Blob
	*
	* @returns {Buffer|Blob}
	*/
	function fromDataURI(uri, asBlob, options) {
		const _Blob = options && options.Blob || platform.classes.Blob;
		const protocol = parseProtocol(uri);
		if (asBlob === void 0 && _Blob) asBlob = true;
		if (protocol === "data") {
			uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
			const match = DATA_URL_PATTERN.exec(uri);
			if (!match) throw new AxiosError("Invalid URL", AxiosError.ERR_INVALID_URL);
			const type = match[1];
			const params = match[2];
			const encoding = match[3] ? "base64" : "utf8";
			const body = match[4];
			let mime;
			if (type) mime = params ? type + params : type;
			else if (params) mime = "text/plain" + params;
			const buffer = Buffer.from(decodeURIComponent(body), encoding);
			if (asBlob) {
				if (!_Blob) throw new AxiosError("Blob is not supported", AxiosError.ERR_NOT_SUPPORT);
				return new _Blob([buffer], { type: mime });
			}
			return buffer;
		}
		throw new AxiosError("Unsupported protocol " + protocol, AxiosError.ERR_NOT_SUPPORT);
	}
	var kInternals = Symbol("internals");
	var AxiosTransformStream = class extends stream.Transform {
		constructor(options) {
			options = utils$1.toFlatObject(options, {
				maxRate: 0,
				chunkSize: 64 * 1024,
				minChunkSize: 100,
				timeWindow: 500,
				ticksRate: 2,
				samplesCount: 15
			}, null, (prop, source) => {
				return !utils$1.isUndefined(source[prop]);
			});
			super({ readableHighWaterMark: options.chunkSize });
			const internals = this[kInternals] = {
				timeWindow: options.timeWindow,
				chunkSize: options.chunkSize,
				maxRate: options.maxRate,
				minChunkSize: options.minChunkSize,
				bytesSeen: 0,
				isCaptured: false,
				notifiedBytesLoaded: 0,
				ts: Date.now(),
				bytes: 0,
				onReadCallback: null
			};
			this.on("newListener", (event) => {
				if (event === "progress") {
					if (!internals.isCaptured) internals.isCaptured = true;
				}
			});
		}
		_read(size) {
			const internals = this[kInternals];
			if (internals.onReadCallback) internals.onReadCallback();
			return super._read(size);
		}
		_transform(chunk, encoding, callback) {
			const internals = this[kInternals];
			const maxRate = internals.maxRate;
			const readableHighWaterMark = this.readableHighWaterMark;
			const timeWindow = internals.timeWindow;
			const bytesThreshold = maxRate / (1e3 / timeWindow);
			const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * .01) : 0;
			const pushChunk = (_chunk, _callback) => {
				const bytes = Buffer.byteLength(_chunk);
				internals.bytesSeen += bytes;
				internals.bytes += bytes;
				internals.isCaptured && this.emit("progress", internals.bytesSeen);
				if (this.push(_chunk)) process.nextTick(_callback);
				else internals.onReadCallback = () => {
					internals.onReadCallback = null;
					process.nextTick(_callback);
				};
			};
			const transformChunk = (_chunk, _callback) => {
				const chunkSize = Buffer.byteLength(_chunk);
				let chunkRemainder = null;
				let maxChunkSize = readableHighWaterMark;
				let bytesLeft;
				let passed = 0;
				if (maxRate) {
					const now = Date.now();
					if (!internals.ts || (passed = now - internals.ts) >= timeWindow) {
						internals.ts = now;
						bytesLeft = bytesThreshold - internals.bytes;
						internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
						passed = 0;
					}
					bytesLeft = bytesThreshold - internals.bytes;
				}
				if (maxRate) {
					if (bytesLeft <= 0) return setTimeout(() => {
						_callback(null, _chunk);
					}, timeWindow - passed);
					if (bytesLeft < maxChunkSize) maxChunkSize = bytesLeft;
				}
				if (maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize) {
					chunkRemainder = _chunk.subarray(maxChunkSize);
					_chunk = _chunk.subarray(0, maxChunkSize);
				}
				pushChunk(_chunk, chunkRemainder ? () => {
					process.nextTick(_callback, null, chunkRemainder);
				} : _callback);
			};
			transformChunk(chunk, function transformNextChunk(err, _chunk) {
				if (err) return callback(err);
				if (_chunk) transformChunk(_chunk, transformNextChunk);
				else callback(null);
			});
		}
	};
	var { asyncIterator } = Symbol;
	var readBlob = async function* (blob) {
		if (blob.stream) yield* blob.stream();
		else if (blob.arrayBuffer) yield await blob.arrayBuffer();
		else if (blob[asyncIterator]) yield* blob[asyncIterator]();
		else yield blob;
	};
	var BOUNDARY_ALPHABET = platform.ALPHABET.ALPHA_DIGIT + "-_";
	var textEncoder = typeof TextEncoder === "function" ? new TextEncoder() : new util.TextEncoder();
	var CRLF = "\r\n";
	var CRLF_BYTES = textEncoder.encode(CRLF);
	var CRLF_BYTES_COUNT = 2;
	var FormDataPart = class {
		constructor(name, value) {
			const { escapeName } = this.constructor;
			const isStringValue = utils$1.isString(value);
			let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ""}${CRLF}`;
			if (isStringValue) value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
			else {
				const safeType = String(value.type || "application/octet-stream").replace(/[\r\n]/g, "");
				headers += `Content-Type: ${safeType}${CRLF}`;
			}
			this.headers = textEncoder.encode(headers + CRLF);
			this.contentLength = isStringValue ? value.byteLength : value.size;
			this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;
			this.name = name;
			this.value = value;
		}
		async *encode() {
			yield this.headers;
			const { value } = this;
			if (utils$1.isTypedArray(value)) yield value;
			else yield* readBlob(value);
			yield CRLF_BYTES;
		}
		static escapeName(name) {
			return String(name).replace(/[\r\n"]/g, (match) => ({
				"\r": "%0D",
				"\n": "%0A",
				"\"": "%22"
			})[match]);
		}
	};
	var formDataToStream = (form, headersHandler, options) => {
		const { tag = "form-data-boundary", size = 25, boundary = tag + "-" + platform.generateString(size, BOUNDARY_ALPHABET) } = options || {};
		if (!utils$1.isFormData(form)) throw TypeError("FormData instance required");
		if (boundary.length < 1 || boundary.length > 70) throw Error("boundary must be 1-70 characters long");
		const boundaryBytes = textEncoder.encode("--" + boundary + CRLF);
		const footerBytes = textEncoder.encode("--" + boundary + "--\r\n");
		let contentLength = footerBytes.byteLength;
		const parts = Array.from(form.entries()).map(([name, value]) => {
			const part = new FormDataPart(name, value);
			contentLength += part.size;
			return part;
		});
		contentLength += boundaryBytes.byteLength * parts.length;
		contentLength = utils$1.toFiniteNumber(contentLength);
		const computedHeaders = { "Content-Type": `multipart/form-data; boundary=${boundary}` };
		if (Number.isFinite(contentLength)) computedHeaders["Content-Length"] = contentLength;
		headersHandler && headersHandler(computedHeaders);
		return stream.Readable.from(async function* () {
			for (const part of parts) {
				yield boundaryBytes;
				yield* part.encode();
			}
			yield footerBytes;
		}());
	};
	var ZlibHeaderTransformStream = class extends stream.Transform {
		__transform(chunk, encoding, callback) {
			this.push(chunk);
			callback();
		}
		_transform(chunk, encoding, callback) {
			if (chunk.length !== 0) {
				this._transform = this.__transform;
				if (chunk[0] !== 120) {
					const header = Buffer.alloc(2);
					header[0] = 120;
					header[1] = 156;
					this.push(header, encoding);
				}
			}
			this.__transform(chunk, encoding, callback);
		}
	};
	var callbackify = (fn, reducer) => {
		return utils$1.isAsyncFn(fn) ? function(...args) {
			const cb = args.pop();
			fn.apply(this, args).then((value) => {
				try {
					reducer ? cb(null, ...reducer(value)) : cb(null, value);
				} catch (err) {
					cb(err);
				}
			}, cb);
		} : fn;
	};
	var LOOPBACK_HOSTNAMES = new Set(["localhost"]);
	var isIPv4Loopback = (host) => {
		const parts = host.split(".");
		if (parts.length !== 4) return false;
		if (parts[0] !== "127") return false;
		return parts.every((p) => /^\d+$/.test(p) && Number(p) >= 0 && Number(p) <= 255);
	};
	var isIPv6Loopback = (host) => {
		if (host === "::1") return true;
		const v4MappedDotted = host.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/i);
		if (v4MappedDotted) return isIPv4Loopback(v4MappedDotted[1]);
		const v4MappedHex = host.match(/^::ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i);
		if (v4MappedHex) {
			const high = parseInt(v4MappedHex[1], 16);
			return high >= 32512 && high <= 32767;
		}
		const groups = host.split(":");
		if (groups.length === 8) {
			for (let i = 0; i < 7; i++) if (!/^0+$/.test(groups[i])) return false;
			return /^0*1$/.test(groups[7]);
		}
		return false;
	};
	var isLoopback = (host) => {
		if (!host) return false;
		if (LOOPBACK_HOSTNAMES.has(host)) return true;
		if (isIPv4Loopback(host)) return true;
		return isIPv6Loopback(host);
	};
	var DEFAULT_PORTS = {
		http: 80,
		https: 443,
		ws: 80,
		wss: 443,
		ftp: 21
	};
	var parseNoProxyEntry = (entry) => {
		let entryHost = entry;
		let entryPort = 0;
		if (entryHost.charAt(0) === "[") {
			const bracketIndex = entryHost.indexOf("]");
			if (bracketIndex !== -1) {
				const host = entryHost.slice(1, bracketIndex);
				const rest = entryHost.slice(bracketIndex + 1);
				if (rest.charAt(0) === ":" && /^\d+$/.test(rest.slice(1))) entryPort = Number.parseInt(rest.slice(1), 10);
				return [host, entryPort];
			}
		}
		const firstColon = entryHost.indexOf(":");
		const lastColon = entryHost.lastIndexOf(":");
		if (firstColon !== -1 && firstColon === lastColon && /^\d+$/.test(entryHost.slice(lastColon + 1))) {
			entryPort = Number.parseInt(entryHost.slice(lastColon + 1), 10);
			entryHost = entryHost.slice(0, lastColon);
		}
		return [entryHost, entryPort];
	};
	var IPV4_MAPPED_DOTTED_RE = /^(?:::|(?:0{1,4}:){1,4}:|(?:0{1,4}:){5})ffff:(\d+\.\d+\.\d+\.\d+)$/i;
	var IPV4_MAPPED_HEX_RE = /^(?:::|(?:0{1,4}:){1,4}:|(?:0{1,4}:){5})ffff:([0-9a-f]{1,4}):([0-9a-f]{1,4})$/i;
	var unmapIPv4MappedIPv6 = (host) => {
		if (typeof host !== "string" || host.indexOf(":") === -1) return host;
		const dotted = host.match(IPV4_MAPPED_DOTTED_RE);
		if (dotted) return dotted[1];
		const hex = host.match(IPV4_MAPPED_HEX_RE);
		if (hex) {
			const high = parseInt(hex[1], 16);
			const low = parseInt(hex[2], 16);
			return `${high >> 8}.${high & 255}.${low >> 8}.${low & 255}`;
		}
		return host;
	};
	var normalizeNoProxyHost = (hostname) => {
		if (!hostname) return hostname;
		if (hostname.charAt(0) === "[" && hostname.charAt(hostname.length - 1) === "]") hostname = hostname.slice(1, -1);
		return unmapIPv4MappedIPv6(hostname.replace(/\.+$/, ""));
	};
	function shouldBypassProxy(location) {
		let parsed;
		try {
			parsed = new URL(location);
		} catch (_err) {
			return false;
		}
		const noProxy = (process.env.no_proxy || process.env.NO_PROXY || "").toLowerCase();
		if (!noProxy) return false;
		if (noProxy === "*") return true;
		const port = Number.parseInt(parsed.port, 10) || DEFAULT_PORTS[parsed.protocol.split(":", 1)[0]] || 0;
		const hostname = normalizeNoProxyHost(parsed.hostname.toLowerCase());
		return noProxy.split(/[\s,]+/).some((entry) => {
			if (!entry) return false;
			let [entryHost, entryPort] = parseNoProxyEntry(entry);
			entryHost = normalizeNoProxyHost(entryHost);
			if (!entryHost) return false;
			if (entryPort && entryPort !== port) return false;
			if (entryHost.charAt(0) === "*") entryHost = entryHost.slice(1);
			if (entryHost.charAt(0) === ".") return hostname.endsWith(entryHost);
			return hostname === entryHost || isLoopback(hostname) && isLoopback(entryHost);
		});
	}
	/**
	* Calculate data maxRate
	* @param {Number} [samplesCount= 10]
	* @param {Number} [min= 1000]
	* @returns {Function}
	*/
	function speedometer(samplesCount, min) {
		samplesCount = samplesCount || 10;
		const bytes = new Array(samplesCount);
		const timestamps = new Array(samplesCount);
		let head = 0;
		let tail = 0;
		let firstSampleTS;
		min = min !== void 0 ? min : 1e3;
		return function push(chunkLength) {
			const now = Date.now();
			const startedAt = timestamps[tail];
			if (!firstSampleTS) firstSampleTS = now;
			bytes[head] = chunkLength;
			timestamps[head] = now;
			let i = tail;
			let bytesCount = 0;
			while (i !== head) {
				bytesCount += bytes[i++];
				i = i % samplesCount;
			}
			head = (head + 1) % samplesCount;
			if (head === tail) tail = (tail + 1) % samplesCount;
			if (now - firstSampleTS < min) return;
			const passed = startedAt && now - startedAt;
			return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
		};
	}
	/**
	* Throttle decorator
	* @param {Function} fn
	* @param {Number} freq
	* @return {Function}
	*/
	function throttle(fn, freq) {
		let timestamp = 0;
		let threshold = 1e3 / freq;
		let lastArgs;
		let timer;
		const invoke = (args, now = Date.now()) => {
			timestamp = now;
			lastArgs = null;
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}
			fn(...args);
		};
		const throttled = (...args) => {
			const now = Date.now();
			const passed = now - timestamp;
			if (passed >= threshold) invoke(args, now);
			else {
				lastArgs = args;
				if (!timer) timer = setTimeout(() => {
					timer = null;
					invoke(lastArgs);
				}, threshold - passed);
			}
		};
		const flush = () => lastArgs && invoke(lastArgs);
		return [throttled, flush];
	}
	var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
		let bytesNotified = 0;
		const _speedometer = speedometer(50, 250);
		return throttle((e) => {
			if (!e || typeof e.loaded !== "number") return;
			const rawLoaded = e.loaded;
			const total = e.lengthComputable ? e.total : void 0;
			const loaded = total != null ? Math.min(rawLoaded, total) : rawLoaded;
			const progressBytes = Math.max(0, loaded - bytesNotified);
			const rate = _speedometer(progressBytes);
			bytesNotified = Math.max(bytesNotified, loaded);
			listener({
				loaded,
				total,
				progress: total ? loaded / total : void 0,
				bytes: progressBytes,
				rate: rate ? rate : void 0,
				estimated: rate && total ? (total - loaded) / rate : void 0,
				event: e,
				lengthComputable: total != null,
				[isDownloadStream ? "download" : "upload"]: true
			});
		}, freq);
	};
	var progressEventDecorator = (total, throttled) => {
		const lengthComputable = total != null;
		return [(loaded) => throttled[0]({
			lengthComputable,
			total,
			loaded
		}), throttled[1]];
	};
	var asyncDecorator = (fn) => (...args) => utils$1.asap(() => fn(...args));
	/**
	* Estimate decoded byte length of a data:// URL *without* allocating large buffers.
	* - For base64: compute exact decoded size using length and padding;
	*               handle %XX at the character-count level (no string allocation).
	* - For non-base64: use UTF-8 byteLength of the encoded body as a safe upper bound.
	*
	* @param {string} url
	* @returns {number}
	*/
	function estimateDataURLDecodedBytes(url) {
		if (!url || typeof url !== "string") return 0;
		if (!url.startsWith("data:")) return 0;
		const comma = url.indexOf(",");
		if (comma < 0) return 0;
		const meta = url.slice(5, comma);
		const body = url.slice(comma + 1);
		if (/;base64/i.test(meta)) {
			let effectiveLen = body.length;
			const len = body.length;
			for (let i = 0; i < len; i++) if (body.charCodeAt(i) === 37 && i + 2 < len) {
				const a = body.charCodeAt(i + 1);
				const b = body.charCodeAt(i + 2);
				if ((a >= 48 && a <= 57 || a >= 65 && a <= 70 || a >= 97 && a <= 102) && (b >= 48 && b <= 57 || b >= 65 && b <= 70 || b >= 97 && b <= 102)) {
					effectiveLen -= 2;
					i += 2;
				}
			}
			let pad = 0;
			let idx = len - 1;
			const tailIsPct3D = (j) => j >= 2 && body.charCodeAt(j - 2) === 37 && body.charCodeAt(j - 1) === 51 && (body.charCodeAt(j) === 68 || body.charCodeAt(j) === 100);
			if (idx >= 0) {
				if (body.charCodeAt(idx) === 61) {
					pad++;
					idx--;
				} else if (tailIsPct3D(idx)) {
					pad++;
					idx -= 3;
				}
			}
			if (pad === 1 && idx >= 0) {
				if (body.charCodeAt(idx) === 61) pad++;
				else if (tailIsPct3D(idx)) pad++;
			}
			const bytes = Math.floor(effectiveLen / 4) * 3 - (pad || 0);
			return bytes > 0 ? bytes : 0;
		}
		if (typeof Buffer !== "undefined" && typeof Buffer.byteLength === "function") return Buffer.byteLength(body, "utf8");
		let bytes = 0;
		for (let i = 0, len = body.length; i < len; i++) {
			const c = body.charCodeAt(i);
			if (c < 128) bytes += 1;
			else if (c < 2048) bytes += 2;
			else if (c >= 55296 && c <= 56319 && i + 1 < len) {
				const next = body.charCodeAt(i + 1);
				if (next >= 56320 && next <= 57343) {
					bytes += 4;
					i++;
				} else bytes += 3;
			} else bytes += 3;
		}
		return bytes;
	}
	var zlibOptions = {
		flush: zlib.constants.Z_SYNC_FLUSH,
		finishFlush: zlib.constants.Z_SYNC_FLUSH
	};
	var brotliOptions = {
		flush: zlib.constants.BROTLI_OPERATION_FLUSH,
		finishFlush: zlib.constants.BROTLI_OPERATION_FLUSH
	};
	var isBrotliSupported = utils$1.isFunction(zlib.createBrotliDecompress);
	var { http: httpFollow, https: httpsFollow } = followRedirects;
	var isHttps = /https:?/;
	var FORM_DATA_CONTENT_HEADERS$1 = ["content-type", "content-length"];
	function setFormDataHeaders$1(headers, formHeaders, policy) {
		if (policy !== "content-only") {
			headers.set(formHeaders);
			return;
		}
		Object.entries(formHeaders).forEach(([key, val]) => {
			if (FORM_DATA_CONTENT_HEADERS$1.includes(key.toLowerCase())) headers.set(key, val);
		});
	}
	var kAxiosSocketListener = Symbol("axios.http.socketListener");
	var kAxiosCurrentReq = Symbol("axios.http.currentReq");
	var kAxiosInstalledTunnel = Symbol("axios.http.installedTunnel");
	var tunnelingAgentCache = /* @__PURE__ */ new Map();
	var tunnelingAgentCacheUser = /* @__PURE__ */ new WeakMap();
	function getTunnelingAgent(agentOptions, userHttpsAgent) {
		const key = agentOptions.protocol + "//" + agentOptions.hostname + ":" + (agentOptions.port || "") + "#" + (agentOptions.auth || "");
		const cache = userHttpsAgent ? tunnelingAgentCacheUser.get(userHttpsAgent) || tunnelingAgentCacheUser.set(userHttpsAgent, /* @__PURE__ */ new Map()).get(userHttpsAgent) : tunnelingAgentCache;
		let agent = cache.get(key);
		if (agent) return agent;
		agent = new HttpsProxyAgent(userHttpsAgent && userHttpsAgent.options ? {
			...userHttpsAgent.options,
			...agentOptions
		} : agentOptions);
		agent[kAxiosInstalledTunnel] = true;
		cache.set(key, agent);
		return agent;
	}
	var supportedProtocols = platform.protocols.map((protocol) => {
		return protocol + ":";
	});
	var decodeURIComponentSafe = (value) => {
		if (!utils$1.isString(value)) return value;
		try {
			return decodeURIComponent(value);
		} catch (error) {
			return value;
		}
	};
	var flushOnFinish = (stream, [throttled, flush]) => {
		stream.on("end", flush).on("error", flush);
		return throttled;
	};
	var Http2Sessions = class {
		constructor() {
			this.sessions = Object.create(null);
		}
		getSession(authority, options) {
			options = Object.assign({ sessionTimeout: 1e3 }, options);
			let authoritySessions = this.sessions[authority];
			if (authoritySessions) {
				let len = authoritySessions.length;
				for (let i = 0; i < len; i++) {
					const [sessionHandle, sessionOptions] = authoritySessions[i];
					if (!sessionHandle.destroyed && !sessionHandle.closed && util.isDeepStrictEqual(sessionOptions, options)) return sessionHandle;
				}
			}
			const session = http2.connect(authority, options);
			let removed;
			const removeSession = () => {
				if (removed) return;
				removed = true;
				let entries = authoritySessions, len = entries.length, i = len;
				while (i--) if (entries[i][0] === session) {
					if (len === 1) delete this.sessions[authority];
					else entries.splice(i, 1);
					if (!session.closed) session.close();
					return;
				}
			};
			const originalRequestFn = session.request;
			const { sessionTimeout } = options;
			if (sessionTimeout != null) {
				let timer;
				let streamsCount = 0;
				session.request = function() {
					const stream = originalRequestFn.apply(this, arguments);
					streamsCount++;
					if (timer) {
						clearTimeout(timer);
						timer = null;
					}
					stream.once("close", () => {
						if (!--streamsCount) timer = setTimeout(() => {
							timer = null;
							removeSession();
						}, sessionTimeout);
					});
					return stream;
				};
			}
			session.once("close", removeSession);
			let entry = [session, options];
			authoritySessions ? authoritySessions.push(entry) : authoritySessions = this.sessions[authority] = [entry];
			return session;
		}
	};
	var http2Sessions = new Http2Sessions();
	/**
	* If the proxy or config beforeRedirects functions are defined, call them with the options
	* object.
	*
	* @param {Object<string, any>} options - The options object that was passed to the request.
	*
	* @returns {Object<string, any>}
	*/
	function dispatchBeforeRedirect(options, responseDetails, requestDetails) {
		if (options.beforeRedirects.proxy) options.beforeRedirects.proxy(options);
		if (options.beforeRedirects.config) options.beforeRedirects.config(options, responseDetails, requestDetails);
	}
	/**
	* If the proxy or config afterRedirects functions are defined, call them with the options
	*
	* @param {http.ClientRequestArgs} options
	* @param {AxiosProxyConfig} configProxy configuration from Axios options object
	* @param {string} location
	*
	* @returns {http.ClientRequestArgs}
	*/
	function setProxy(options, configProxy, location, isRedirect, configHttpsAgent) {
		let proxy = configProxy;
		if (!proxy && proxy !== false) {
			const proxyUrl = getProxyForUrl(location);
			if (proxyUrl) {
				if (!shouldBypassProxy(location)) proxy = new URL(proxyUrl);
			}
		}
		if (isRedirect && options.headers) {
			for (const name of Object.keys(options.headers)) if (name.toLowerCase() === "proxy-authorization") delete options.headers[name];
		}
		if (isRedirect && options.agent && options.agent[kAxiosInstalledTunnel]) options.agent = void 0;
		if (proxy) {
			const isProxyURL = proxy instanceof URL;
			const readProxyField = (key) => isProxyURL || utils$1.hasOwnProp(proxy, key) ? proxy[key] : void 0;
			const proxyUsername = readProxyField("username");
			const proxyPassword = readProxyField("password");
			let proxyAuth = utils$1.hasOwnProp(proxy, "auth") ? proxy.auth : void 0;
			if (proxyUsername) proxyAuth = (proxyUsername || "") + ":" + (proxyPassword || "");
			if (proxyAuth) {
				const authIsObject = typeof proxyAuth === "object";
				const authUsername = authIsObject && utils$1.hasOwnProp(proxyAuth, "username") ? proxyAuth.username : void 0;
				const authPassword = authIsObject && utils$1.hasOwnProp(proxyAuth, "password") ? proxyAuth.password : void 0;
				if (Boolean(authUsername || authPassword)) proxyAuth = (authUsername || "") + ":" + (authPassword || "");
				else if (authIsObject) throw new AxiosError("Invalid proxy authorization", AxiosError.ERR_BAD_OPTION, { proxy });
			}
			if (isHttps.test(options.protocol)) {
				if (!(configHttpsAgent instanceof HttpsProxyAgent)) {
					const proxyHost = readProxyField("hostname") || readProxyField("host");
					const proxyPort = readProxyField("port");
					const rawProxyProtocol = readProxyField("protocol");
					const normalizedProtocol = rawProxyProtocol ? rawProxyProtocol.includes(":") ? rawProxyProtocol : `${rawProxyProtocol}:` : "http:";
					const proxyHostForURL = proxyHost && proxyHost.includes(":") && !proxyHost.startsWith("[") ? `[${proxyHost}]` : proxyHost;
					const proxyURL = new URL(`${normalizedProtocol}//${proxyHostForURL}${proxyPort ? ":" + proxyPort : ""}`);
					const agentOptions = {
						protocol: proxyURL.protocol,
						hostname: proxyURL.hostname.replace(/^\[|\]$/g, ""),
						port: proxyURL.port,
						auth: proxyAuth && typeof proxyAuth === "string" ? proxyAuth : void 0
					};
					if (proxyURL.protocol === "https:") agentOptions.ALPNProtocols = ["http/1.1"];
					const tunnelingAgent = getTunnelingAgent(agentOptions, configHttpsAgent);
					options.agent = tunnelingAgent;
					if (options.agents) options.agents.https = tunnelingAgent;
				}
			} else {
				if (proxyAuth) {
					const base64 = Buffer.from(proxyAuth, "utf8").toString("base64");
					options.headers["Proxy-Authorization"] = "Basic " + base64;
				}
				let hasUserHostHeader = false;
				for (const name of Object.keys(options.headers)) if (name.toLowerCase() === "host") {
					hasUserHostHeader = true;
					break;
				}
				if (!hasUserHostHeader) options.headers.host = options.hostname + (options.port ? ":" + options.port : "");
				const proxyHost = readProxyField("hostname") || readProxyField("host");
				options.hostname = proxyHost;
				options.host = proxyHost;
				options.port = readProxyField("port");
				options.path = location;
				const proxyProtocol = readProxyField("protocol");
				if (proxyProtocol) options.protocol = proxyProtocol.includes(":") ? proxyProtocol : `${proxyProtocol}:`;
			}
		}
		options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
			setProxy(redirectOptions, configProxy, redirectOptions.href, true, configHttpsAgent);
		};
	}
	var isHttpAdapterSupported = typeof process !== "undefined" && utils$1.kindOf(process) === "process";
	var wrapAsync = (asyncExecutor) => {
		return new Promise((resolve, reject) => {
			let onDone;
			let isDone;
			const done = (value, isRejected) => {
				if (isDone) return;
				isDone = true;
				onDone && onDone(value, isRejected);
			};
			const _resolve = (value) => {
				done(value);
				resolve(value);
			};
			const _reject = (reason) => {
				done(reason, true);
				reject(reason);
			};
			asyncExecutor(_resolve, _reject, (onDoneHandler) => onDone = onDoneHandler).catch(_reject);
		});
	};
	var resolveFamily = ({ address, family }) => {
		if (!utils$1.isString(address)) throw TypeError("address must be a string");
		return {
			address,
			family: family || (address.indexOf(".") < 0 ? 6 : 4)
		};
	};
	var buildAddressEntry = (address, family) => resolveFamily(utils$1.isObject(address) ? address : {
		address,
		family
	});
	var http2Transport = { request(options, cb) {
		const authority = options.protocol + "//" + options.hostname + ":" + (options.port || (options.protocol === "https:" ? 443 : 80));
		const { http2Options, headers } = options;
		const session = http2Sessions.getSession(authority, http2Options);
		const { HTTP2_HEADER_SCHEME, HTTP2_HEADER_METHOD, HTTP2_HEADER_PATH, HTTP2_HEADER_STATUS } = http2.constants;
		const http2Headers = {
			[HTTP2_HEADER_SCHEME]: options.protocol.replace(":", ""),
			[HTTP2_HEADER_METHOD]: options.method,
			[HTTP2_HEADER_PATH]: options.path
		};
		utils$1.forEach(headers, (header, name) => {
			name.charAt(0) !== ":" && (http2Headers[name] = header);
		});
		const req = session.request(http2Headers);
		req.once("response", (responseHeaders) => {
			const response = req;
			responseHeaders = Object.assign({}, responseHeaders);
			const status = responseHeaders[HTTP2_HEADER_STATUS];
			delete responseHeaders[HTTP2_HEADER_STATUS];
			response.headers = responseHeaders;
			response.statusCode = +status;
			cb(response);
		});
		return req;
	} };
	var httpAdapter = isHttpAdapterSupported && function httpAdapter(config) {
		return wrapAsync(async function dispatchHttpRequest(resolve, reject, onDone) {
			const own = (key) => utils$1.hasOwnProp(config, key) ? config[key] : void 0;
			let data = own("data");
			let lookup = own("lookup");
			let family = own("family");
			let httpVersion = own("httpVersion");
			if (httpVersion === void 0) httpVersion = 1;
			let http2Options = own("http2Options");
			const responseType = own("responseType");
			const responseEncoding = own("responseEncoding");
			const method = config.method.toUpperCase();
			let isDone;
			let rejected = false;
			let req;
			let connectPhaseTimer;
			httpVersion = +httpVersion;
			if (Number.isNaN(httpVersion)) throw TypeError(`Invalid protocol version: '${config.httpVersion}' is not a number`);
			if (httpVersion !== 1 && httpVersion !== 2) throw TypeError(`Unsupported protocol version '${httpVersion}'`);
			const isHttp2 = httpVersion === 2;
			if (lookup) {
				const _lookup = callbackify(lookup, (value) => utils$1.isArray(value) ? value : [value]);
				lookup = (hostname, opt, cb) => {
					_lookup(hostname, opt, (err, arg0, arg1) => {
						if (err) return cb(err);
						const addresses = utils$1.isArray(arg0) ? arg0.map((addr) => buildAddressEntry(addr)) : [buildAddressEntry(arg0, arg1)];
						opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
					});
				};
			}
			const abortEmitter = new events.EventEmitter();
			function abort(reason) {
				try {
					abortEmitter.emit("abort", !reason || reason.type ? new CanceledError(null, config, req) : reason);
				} catch (err) {
					console.warn("emit error", err);
				}
			}
			function clearConnectPhaseTimer() {
				if (connectPhaseTimer) {
					clearTimeout(connectPhaseTimer);
					connectPhaseTimer = null;
				}
			}
			function createTimeoutError() {
				let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
				const transitional = config.transitional || transitionalDefaults;
				if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
				return new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, req);
			}
			abortEmitter.once("abort", reject);
			const onFinished = () => {
				clearConnectPhaseTimer();
				if (config.cancelToken) config.cancelToken.unsubscribe(abort);
				if (config.signal) config.signal.removeEventListener("abort", abort);
				abortEmitter.removeAllListeners();
			};
			if (config.cancelToken || config.signal) {
				config.cancelToken && config.cancelToken.subscribe(abort);
				if (config.signal) config.signal.aborted ? abort() : config.signal.addEventListener("abort", abort);
			}
			onDone((response, isRejected) => {
				isDone = true;
				clearConnectPhaseTimer();
				if (isRejected) {
					rejected = true;
					onFinished();
					return;
				}
				const { data } = response;
				if (data instanceof stream.Readable || data instanceof stream.Duplex) {
					const offListeners = stream.finished(data, () => {
						offListeners();
						onFinished();
					});
				} else onFinished();
			});
			const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
			const parsed = new URL(fullPath, platform.hasBrowserEnv ? platform.origin : void 0);
			const protocol = parsed.protocol || supportedProtocols[0];
			if (protocol === "data:") {
				if (config.maxContentLength > -1) {
					if (estimateDataURLDecodedBytes(String(config.url || fullPath || "")) > config.maxContentLength) return reject(new AxiosError("maxContentLength size of " + config.maxContentLength + " exceeded", AxiosError.ERR_BAD_RESPONSE, config));
				}
				let convertedData;
				if (method !== "GET") return settle(resolve, reject, {
					status: 405,
					statusText: "method not allowed",
					headers: {},
					config
				});
				try {
					convertedData = fromDataURI(config.url, responseType === "blob", { Blob: config.env && config.env.Blob });
				} catch (err) {
					throw AxiosError.from(err, AxiosError.ERR_BAD_REQUEST, config);
				}
				if (responseType === "text") {
					convertedData = convertedData.toString(responseEncoding);
					if (!responseEncoding || responseEncoding === "utf8") convertedData = utils$1.stripBOM(convertedData);
				} else if (responseType === "stream") convertedData = stream.Readable.from(convertedData);
				return settle(resolve, reject, {
					data: convertedData,
					status: 200,
					statusText: "OK",
					headers: new AxiosHeaders(),
					config
				});
			}
			if (supportedProtocols.indexOf(protocol) === -1) return reject(new AxiosError("Unsupported protocol " + protocol, AxiosError.ERR_BAD_REQUEST, config));
			const headers = AxiosHeaders.from(config.headers).normalize();
			headers.set("User-Agent", "axios/1.16.1", false);
			const { onUploadProgress, onDownloadProgress } = config;
			const maxRate = config.maxRate;
			let maxUploadRate = void 0;
			let maxDownloadRate = void 0;
			if (utils$1.isSpecCompliantForm(data)) {
				const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
				data = formDataToStream(data, (formHeaders) => {
					headers.set(formHeaders);
				}, {
					tag: `axios-${VERSION}-boundary`,
					boundary: userBoundary && userBoundary[1] || void 0
				});
			} else if (utils$1.isFormData(data) && utils$1.isFunction(data.getHeaders) && data.getHeaders !== Object.prototype.getHeaders) {
				setFormDataHeaders$1(headers, data.getHeaders(), own("formDataHeaderPolicy"));
				if (!headers.hasContentLength()) try {
					const knownLength = await util.promisify(data.getLength).call(data);
					Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
				} catch (e) {}
			} else if (utils$1.isBlob(data) || utils$1.isFile(data)) {
				data.size && headers.setContentType(data.type || "application/octet-stream");
				headers.setContentLength(data.size || 0);
				data = stream.Readable.from(readBlob(data));
			} else if (data && !utils$1.isStream(data)) {
				if (Buffer.isBuffer(data));
				else if (utils$1.isArrayBuffer(data)) data = Buffer.from(new Uint8Array(data));
				else if (utils$1.isString(data)) data = Buffer.from(data, "utf-8");
				else return reject(new AxiosError("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", AxiosError.ERR_BAD_REQUEST, config));
				headers.setContentLength(data.length, false);
				if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) return reject(new AxiosError("Request body larger than maxBodyLength limit", AxiosError.ERR_BAD_REQUEST, config));
			}
			const contentLength = utils$1.toFiniteNumber(headers.getContentLength());
			if (utils$1.isArray(maxRate)) {
				maxUploadRate = maxRate[0];
				maxDownloadRate = maxRate[1];
			} else maxUploadRate = maxDownloadRate = maxRate;
			if (data && (onUploadProgress || maxUploadRate)) {
				if (!utils$1.isStream(data)) data = stream.Readable.from(data, { objectMode: false });
				data = stream.pipeline([data, new AxiosTransformStream({ maxRate: utils$1.toFiniteNumber(maxUploadRate) })], utils$1.noop);
				onUploadProgress && data.on("progress", flushOnFinish(data, progressEventDecorator(contentLength, progressEventReducer(asyncDecorator(onUploadProgress), false, 3))));
			}
			let auth = void 0;
			const configAuth = own("auth");
			if (configAuth) {
				const username = configAuth.username || "";
				const password = configAuth.password || "";
				auth = username + ":" + password;
			}
			if (!auth && parsed.username) {
				const urlUsername = decodeURIComponentSafe(parsed.username);
				const urlPassword = decodeURIComponentSafe(parsed.password);
				auth = urlUsername + ":" + urlPassword;
			}
			auth && headers.delete("authorization");
			let path$1;
			try {
				path$1 = buildURL(parsed.pathname + parsed.search, config.params, config.paramsSerializer).replace(/^\?/, "");
			} catch (err) {
				const customErr = new Error(err.message);
				customErr.config = config;
				customErr.url = config.url;
				customErr.exists = true;
				return reject(customErr);
			}
			headers.set("Accept-Encoding", "gzip, compress, deflate" + (isBrotliSupported ? ", br" : ""), false);
			const options = Object.assign(Object.create(null), {
				path: path$1,
				method,
				headers: toByteStringHeaderObject(headers),
				agents: {
					http: config.httpAgent,
					https: config.httpsAgent
				},
				auth,
				protocol,
				family,
				beforeRedirect: dispatchBeforeRedirect,
				beforeRedirects: Object.create(null),
				http2Options
			});
			!utils$1.isUndefined(lookup) && (options.lookup = lookup);
			if (config.socketPath) {
				if (typeof config.socketPath !== "string") return reject(new AxiosError("socketPath must be a string", AxiosError.ERR_BAD_OPTION_VALUE, config));
				if (config.allowedSocketPaths != null) {
					const allowed = Array.isArray(config.allowedSocketPaths) ? config.allowedSocketPaths : [config.allowedSocketPaths];
					const resolvedSocket = path.resolve(config.socketPath);
					if (!allowed.some((entry) => typeof entry === "string" && path.resolve(entry) === resolvedSocket)) return reject(new AxiosError(`socketPath "${config.socketPath}" is not permitted by allowedSocketPaths`, AxiosError.ERR_BAD_OPTION_VALUE, config));
				}
				options.socketPath = config.socketPath;
			} else {
				options.hostname = parsed.hostname.startsWith("[") ? parsed.hostname.slice(1, -1) : parsed.hostname;
				options.port = parsed.port;
				setProxy(options, config.proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path, false, config.httpsAgent);
			}
			let transport;
			let isNativeTransport = false;
			const isHttpsRequest = isHttps.test(options.protocol);
			if (options.agent == null) options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
			if (isHttp2) transport = http2Transport;
			else {
				const configTransport = own("transport");
				if (configTransport) transport = configTransport;
				else if (config.maxRedirects === 0) {
					transport = isHttpsRequest ? https : http;
					isNativeTransport = true;
				} else {
					if (config.maxRedirects) options.maxRedirects = config.maxRedirects;
					const configBeforeRedirect = own("beforeRedirect");
					if (configBeforeRedirect) options.beforeRedirects.config = configBeforeRedirect;
					transport = isHttpsRequest ? httpsFollow : httpFollow;
				}
			}
			if (config.maxBodyLength > -1) options.maxBodyLength = config.maxBodyLength;
			else options.maxBodyLength = Infinity;
			options.insecureHTTPParser = Boolean(own("insecureHTTPParser"));
			req = transport.request(options, function handleResponse(res) {
				clearConnectPhaseTimer();
				if (req.destroyed) return;
				const streams = [res];
				const responseLength = utils$1.toFiniteNumber(res.headers["content-length"]);
				if (onDownloadProgress || maxDownloadRate) {
					const transformStream = new AxiosTransformStream({ maxRate: utils$1.toFiniteNumber(maxDownloadRate) });
					onDownloadProgress && transformStream.on("progress", flushOnFinish(transformStream, progressEventDecorator(responseLength, progressEventReducer(asyncDecorator(onDownloadProgress), true, 3))));
					streams.push(transformStream);
				}
				let responseStream = res;
				const lastRequest = res.req || req;
				if (config.decompress !== false && res.headers["content-encoding"]) {
					if (method === "HEAD" || res.statusCode === 204) delete res.headers["content-encoding"];
					switch ((res.headers["content-encoding"] || "").toLowerCase()) {
						case "gzip":
						case "x-gzip":
						case "compress":
						case "x-compress":
							streams.push(zlib.createUnzip(zlibOptions));
							delete res.headers["content-encoding"];
							break;
						case "deflate":
							streams.push(new ZlibHeaderTransformStream());
							streams.push(zlib.createUnzip(zlibOptions));
							delete res.headers["content-encoding"];
							break;
						case "br": if (isBrotliSupported) {
							streams.push(zlib.createBrotliDecompress(brotliOptions));
							delete res.headers["content-encoding"];
						}
					}
				}
				responseStream = streams.length > 1 ? stream.pipeline(streams, utils$1.noop) : streams[0];
				const response = {
					status: res.statusCode,
					statusText: res.statusMessage,
					headers: new AxiosHeaders(res.headers),
					config,
					request: lastRequest
				};
				if (responseType === "stream") {
					if (config.maxContentLength > -1) {
						const limit = config.maxContentLength;
						const source = responseStream;
						async function* enforceMaxContentLength() {
							let totalResponseBytes = 0;
							for await (const chunk of source) {
								totalResponseBytes += chunk.length;
								if (totalResponseBytes > limit) throw new AxiosError("maxContentLength size of " + limit + " exceeded", AxiosError.ERR_BAD_RESPONSE, config, lastRequest);
								yield chunk;
							}
						}
						responseStream = stream.Readable.from(enforceMaxContentLength(), { objectMode: false });
					}
					response.data = responseStream;
					settle(resolve, reject, response);
				} else {
					const responseBuffer = [];
					let totalResponseBytes = 0;
					responseStream.on("data", function handleStreamData(chunk) {
						responseBuffer.push(chunk);
						totalResponseBytes += chunk.length;
						if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
							rejected = true;
							responseStream.destroy();
							abort(new AxiosError("maxContentLength size of " + config.maxContentLength + " exceeded", AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
						}
					});
					responseStream.on("aborted", function handlerStreamAborted() {
						if (rejected) return;
						const err = new AxiosError("stream has been aborted", AxiosError.ERR_BAD_RESPONSE, config, lastRequest, response);
						responseStream.destroy(err);
						reject(err);
					});
					responseStream.on("error", function handleStreamError(err) {
						if (rejected) return;
						reject(AxiosError.from(err, null, config, lastRequest, response));
					});
					responseStream.on("end", function handleStreamEnd() {
						try {
							let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
							if (responseType !== "arraybuffer") {
								responseData = responseData.toString(responseEncoding);
								if (!responseEncoding || responseEncoding === "utf8") responseData = utils$1.stripBOM(responseData);
							}
							response.data = responseData;
						} catch (err) {
							return reject(AxiosError.from(err, null, config, response.request, response));
						}
						settle(resolve, reject, response);
					});
				}
				abortEmitter.once("abort", (err) => {
					if (!responseStream.destroyed) {
						responseStream.emit("error", err);
						responseStream.destroy();
					}
				});
			});
			abortEmitter.once("abort", (err) => {
				if (req.close) req.close();
				else req.destroy(err);
			});
			req.on("error", function handleRequestError(err) {
				reject(AxiosError.from(err, null, config, req));
			});
			const boundSockets = /* @__PURE__ */ new Set();
			req.on("socket", function handleRequestSocket(socket) {
				socket.setKeepAlive(true, 1e3 * 60);
				if (!socket[kAxiosSocketListener]) {
					socket.on("error", function handleSocketError(err) {
						const current = socket[kAxiosCurrentReq];
						if (current && !current.destroyed) current.destroy(err);
					});
					socket[kAxiosSocketListener] = true;
				}
				socket[kAxiosCurrentReq] = req;
				boundSockets.add(socket);
			});
			req.once("close", function clearCurrentReq() {
				clearConnectPhaseTimer();
				for (const socket of boundSockets) if (socket[kAxiosCurrentReq] === req) socket[kAxiosCurrentReq] = null;
				boundSockets.clear();
			});
			if (config.timeout) {
				const timeout = parseInt(config.timeout, 10);
				if (Number.isNaN(timeout)) {
					abort(new AxiosError("error trying to parse `config.timeout` to int", AxiosError.ERR_BAD_OPTION_VALUE, config, req));
					return;
				}
				const handleTimeout = function handleTimeout() {
					if (isDone) return;
					abort(createTimeoutError());
				};
				if (isNativeTransport && timeout > 0) connectPhaseTimer = setTimeout(handleTimeout, timeout);
				req.setTimeout(timeout, handleTimeout);
			} else req.setTimeout(0);
			if (utils$1.isStream(data)) {
				let ended = false;
				let errored = false;
				data.on("end", () => {
					ended = true;
				});
				data.once("error", (err) => {
					errored = true;
					req.destroy(err);
				});
				data.on("close", () => {
					if (!ended && !errored) abort(new CanceledError("Request stream has been aborted", config, req));
				});
				let uploadStream = data;
				if (config.maxBodyLength > -1 && config.maxRedirects === 0) {
					const limit = config.maxBodyLength;
					let bytesSent = 0;
					uploadStream = stream.pipeline([data, new stream.Transform({ transform(chunk, _enc, cb) {
						bytesSent += chunk.length;
						if (bytesSent > limit) return cb(new AxiosError("Request body larger than maxBodyLength limit", AxiosError.ERR_BAD_REQUEST, config, req));
						cb(null, chunk);
					} })], utils$1.noop);
					uploadStream.on("error", (err) => {
						if (!req.destroyed) req.destroy(err);
					});
				}
				uploadStream.pipe(req);
			} else {
				data && req.write(data);
				req.end();
			}
		});
	};
	var isURLSameOrigin = platform.hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
		url = new URL(url, platform.origin);
		return origin.protocol === url.protocol && origin.host === url.host && (isMSIE || origin.port === url.port);
	})(new URL(platform.origin), platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)) : () => true;
	var cookies = platform.hasStandardBrowserEnv ? {
		write(name, value, expires, path, domain, secure, sameSite) {
			if (typeof document === "undefined") return;
			const cookie = [`${name}=${encodeURIComponent(value)}`];
			if (utils$1.isNumber(expires)) cookie.push(`expires=${new Date(expires).toUTCString()}`);
			if (utils$1.isString(path)) cookie.push(`path=${path}`);
			if (utils$1.isString(domain)) cookie.push(`domain=${domain}`);
			if (secure === true) cookie.push("secure");
			if (utils$1.isString(sameSite)) cookie.push(`SameSite=${sameSite}`);
			document.cookie = cookie.join("; ");
		},
		read(name) {
			if (typeof document === "undefined") return null;
			const cookies = document.cookie.split(";");
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].replace(/^\s+/, "");
				const eq = cookie.indexOf("=");
				if (eq !== -1 && cookie.slice(0, eq) === name) return decodeURIComponent(cookie.slice(eq + 1));
			}
			return null;
		},
		remove(name) {
			this.write(name, "", Date.now() - 864e5, "/");
		}
	} : {
		write() {},
		read() {
			return null;
		},
		remove() {}
	};
	var headersToObject = (thing) => thing instanceof AxiosHeaders ? { ...thing } : thing;
	/**
	* Config-specific merge-function which creates a new config-object
	* by merging two configuration objects together.
	*
	* @param {Object} config1
	* @param {Object} config2
	*
	* @returns {Object} New object resulting from merging config2 to config1
	*/
	function mergeConfig(config1, config2) {
		config2 = config2 || {};
		const config = Object.create(null);
		Object.defineProperty(config, "hasOwnProperty", {
			__proto__: null,
			value: Object.prototype.hasOwnProperty,
			enumerable: false,
			writable: true,
			configurable: true
		});
		function getMergedValue(target, source, prop, caseless) {
			if (utils$1.isPlainObject(target) && utils$1.isPlainObject(source)) return utils$1.merge.call({ caseless }, target, source);
			else if (utils$1.isPlainObject(source)) return utils$1.merge({}, source);
			else if (utils$1.isArray(source)) return source.slice();
			return source;
		}
		function mergeDeepProperties(a, b, prop, caseless) {
			if (!utils$1.isUndefined(b)) return getMergedValue(a, b, prop, caseless);
			else if (!utils$1.isUndefined(a)) return getMergedValue(void 0, a, prop, caseless);
		}
		function valueFromConfig2(a, b) {
			if (!utils$1.isUndefined(b)) return getMergedValue(void 0, b);
		}
		function defaultToConfig2(a, b) {
			if (!utils$1.isUndefined(b)) return getMergedValue(void 0, b);
			else if (!utils$1.isUndefined(a)) return getMergedValue(void 0, a);
		}
		function mergeDirectKeys(a, b, prop) {
			if (utils$1.hasOwnProp(config2, prop)) return getMergedValue(a, b);
			else if (utils$1.hasOwnProp(config1, prop)) return getMergedValue(void 0, a);
		}
		const mergeMap = {
			url: valueFromConfig2,
			method: valueFromConfig2,
			data: valueFromConfig2,
			baseURL: defaultToConfig2,
			transformRequest: defaultToConfig2,
			transformResponse: defaultToConfig2,
			paramsSerializer: defaultToConfig2,
			timeout: defaultToConfig2,
			timeoutMessage: defaultToConfig2,
			withCredentials: defaultToConfig2,
			withXSRFToken: defaultToConfig2,
			adapter: defaultToConfig2,
			responseType: defaultToConfig2,
			xsrfCookieName: defaultToConfig2,
			xsrfHeaderName: defaultToConfig2,
			onUploadProgress: defaultToConfig2,
			onDownloadProgress: defaultToConfig2,
			decompress: defaultToConfig2,
			maxContentLength: defaultToConfig2,
			maxBodyLength: defaultToConfig2,
			beforeRedirect: defaultToConfig2,
			transport: defaultToConfig2,
			httpAgent: defaultToConfig2,
			httpsAgent: defaultToConfig2,
			cancelToken: defaultToConfig2,
			socketPath: defaultToConfig2,
			allowedSocketPaths: defaultToConfig2,
			responseEncoding: defaultToConfig2,
			validateStatus: mergeDirectKeys,
			headers: (a, b, prop) => mergeDeepProperties(headersToObject(a), headersToObject(b), prop, true)
		};
		utils$1.forEach(Object.keys({
			...config1,
			...config2
		}), function computeConfigValue(prop) {
			if (prop === "__proto__" || prop === "constructor" || prop === "prototype") return;
			const merge = utils$1.hasOwnProp(mergeMap, prop) ? mergeMap[prop] : mergeDeepProperties;
			const configValue = merge(utils$1.hasOwnProp(config1, prop) ? config1[prop] : void 0, utils$1.hasOwnProp(config2, prop) ? config2[prop] : void 0, prop);
			utils$1.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
		});
		return config;
	}
	var FORM_DATA_CONTENT_HEADERS = ["content-type", "content-length"];
	function setFormDataHeaders(headers, formHeaders, policy) {
		if (policy !== "content-only") {
			headers.set(formHeaders);
			return;
		}
		Object.entries(formHeaders).forEach(([key, val]) => {
			if (FORM_DATA_CONTENT_HEADERS.includes(key.toLowerCase())) headers.set(key, val);
		});
	}
	/**
	* Encode a UTF-8 string to a Latin-1 byte string for use with btoa().
	* This is a modern replacement for the deprecated unescape(encodeURIComponent(str)) pattern.
	*
	* @param {string} str The string to encode
	*
	* @returns {string} UTF-8 bytes as a Latin-1 string
	*/
	var encodeUTF8 = (str) => encodeURIComponent(str).replace(/%([0-9A-F]{2})/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
	var resolveConfig = (config) => {
		const newConfig = mergeConfig({}, config);
		const own = (key) => utils$1.hasOwnProp(newConfig, key) ? newConfig[key] : void 0;
		const data = own("data");
		let withXSRFToken = own("withXSRFToken");
		const xsrfHeaderName = own("xsrfHeaderName");
		const xsrfCookieName = own("xsrfCookieName");
		let headers = own("headers");
		const auth = own("auth");
		const baseURL = own("baseURL");
		const allowAbsoluteUrls = own("allowAbsoluteUrls");
		const url = own("url");
		newConfig.headers = headers = AxiosHeaders.from(headers);
		newConfig.url = buildURL(buildFullPath(baseURL, url, allowAbsoluteUrls), config.params, config.paramsSerializer);
		if (auth) headers.set("Authorization", "Basic " + btoa((auth.username || "") + ":" + (auth.password ? encodeUTF8(auth.password) : "")));
		if (utils$1.isFormData(data)) {
			if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) headers.setContentType(void 0);
			else if (utils$1.isFunction(data.getHeaders)) setFormDataHeaders(headers, data.getHeaders(), own("formDataHeaderPolicy"));
		}
		if (platform.hasStandardBrowserEnv) {
			if (utils$1.isFunction(withXSRFToken)) withXSRFToken = withXSRFToken(newConfig);
			if (withXSRFToken === true || withXSRFToken == null && isURLSameOrigin(newConfig.url)) {
				const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);
				if (xsrfValue) headers.set(xsrfHeaderName, xsrfValue);
			}
		}
		return newConfig;
	};
	var xhrAdapter = typeof XMLHttpRequest !== "undefined" && function(config) {
		return new Promise(function dispatchXhrRequest(resolve, reject) {
			const _config = resolveConfig(config);
			let requestData = _config.data;
			const requestHeaders = AxiosHeaders.from(_config.headers).normalize();
			let { responseType, onUploadProgress, onDownloadProgress } = _config;
			let onCanceled;
			let uploadThrottled, downloadThrottled;
			let flushUpload, flushDownload;
			function done() {
				flushUpload && flushUpload();
				flushDownload && flushDownload();
				_config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
				_config.signal && _config.signal.removeEventListener("abort", onCanceled);
			}
			let request = new XMLHttpRequest();
			request.open(_config.method.toUpperCase(), _config.url, true);
			request.timeout = _config.timeout;
			function onloadend() {
				if (!request) return;
				const responseHeaders = AxiosHeaders.from("getAllResponseHeaders" in request && request.getAllResponseHeaders());
				settle(function _resolve(value) {
					resolve(value);
					done();
				}, function _reject(err) {
					reject(err);
					done();
				}, {
					data: !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response,
					status: request.status,
					statusText: request.statusText,
					headers: responseHeaders,
					config,
					request
				});
				request = null;
			}
			if ("onloadend" in request) request.onloadend = onloadend;
			else request.onreadystatechange = function handleLoad() {
				if (!request || request.readyState !== 4) return;
				if (request.status === 0 && !(request.responseURL && request.responseURL.startsWith("file:"))) return;
				setTimeout(onloadend);
			};
			request.onabort = function handleAbort() {
				if (!request) return;
				reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
				done();
				request = null;
			};
			request.onerror = function handleError(event) {
				const err = new AxiosError(event && event.message ? event.message : "Network Error", AxiosError.ERR_NETWORK, config, request);
				err.event = event || null;
				reject(err);
				done();
				request = null;
			};
			request.ontimeout = function handleTimeout() {
				let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
				const transitional = _config.transitional || transitionalDefaults;
				if (_config.timeoutErrorMessage) timeoutErrorMessage = _config.timeoutErrorMessage;
				reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));
				done();
				request = null;
			};
			requestData === void 0 && requestHeaders.setContentType(null);
			if ("setRequestHeader" in request) utils$1.forEach(toByteStringHeaderObject(requestHeaders), function setRequestHeader(val, key) {
				request.setRequestHeader(key, val);
			});
			if (!utils$1.isUndefined(_config.withCredentials)) request.withCredentials = !!_config.withCredentials;
			if (responseType && responseType !== "json") request.responseType = _config.responseType;
			if (onDownloadProgress) {
				[downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
				request.addEventListener("progress", downloadThrottled);
			}
			if (onUploadProgress && request.upload) {
				[uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
				request.upload.addEventListener("progress", uploadThrottled);
				request.upload.addEventListener("loadend", flushUpload);
			}
			if (_config.cancelToken || _config.signal) {
				onCanceled = (cancel) => {
					if (!request) return;
					reject(!cancel || cancel.type ? new CanceledError(null, config, request) : cancel);
					request.abort();
					done();
					request = null;
				};
				_config.cancelToken && _config.cancelToken.subscribe(onCanceled);
				if (_config.signal) _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
			}
			const protocol = parseProtocol(_config.url);
			if (protocol && !platform.protocols.includes(protocol)) {
				reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
				return;
			}
			request.send(requestData || null);
		});
	};
	var composeSignals = (signals, timeout) => {
		signals = signals ? signals.filter(Boolean) : [];
		if (!timeout && !signals.length) return;
		const controller = new AbortController();
		let aborted = false;
		const onabort = function(reason) {
			if (!aborted) {
				aborted = true;
				unsubscribe();
				const err = reason instanceof Error ? reason : this.reason;
				controller.abort(err instanceof AxiosError ? err : new CanceledError(err instanceof Error ? err.message : err));
			}
		};
		let timer = timeout && setTimeout(() => {
			timer = null;
			onabort(new AxiosError(`timeout of ${timeout}ms exceeded`, AxiosError.ETIMEDOUT));
		}, timeout);
		const unsubscribe = () => {
			if (!signals) return;
			timer && clearTimeout(timer);
			timer = null;
			signals.forEach((signal) => {
				signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener("abort", onabort);
			});
			signals = null;
		};
		signals.forEach((signal) => signal.addEventListener("abort", onabort));
		const { signal } = controller;
		signal.unsubscribe = () => utils$1.asap(unsubscribe);
		return signal;
	};
	var streamChunk = function* (chunk, chunkSize) {
		let len = chunk.byteLength;
		if (len < chunkSize) {
			yield chunk;
			return;
		}
		let pos = 0;
		let end;
		while (pos < len) {
			end = pos + chunkSize;
			yield chunk.slice(pos, end);
			pos = end;
		}
	};
	var readBytes = async function* (iterable, chunkSize) {
		for await (const chunk of readStream(iterable)) yield* streamChunk(chunk, chunkSize);
	};
	var readStream = async function* (stream) {
		if (stream[Symbol.asyncIterator]) {
			yield* stream;
			return;
		}
		const reader = stream.getReader();
		try {
			for (;;) {
				const { done, value } = await reader.read();
				if (done) break;
				yield value;
			}
		} finally {
			await reader.cancel();
		}
	};
	var trackStream = (stream, chunkSize, onProgress, onFinish) => {
		const iterator = readBytes(stream, chunkSize);
		let bytes = 0;
		let done;
		let _onFinish = (e) => {
			if (!done) {
				done = true;
				onFinish && onFinish(e);
			}
		};
		return new ReadableStream({
			async pull(controller) {
				try {
					const { done, value } = await iterator.next();
					if (done) {
						_onFinish();
						controller.close();
						return;
					}
					let len = value.byteLength;
					if (onProgress) onProgress(bytes += len);
					controller.enqueue(new Uint8Array(value));
				} catch (err) {
					_onFinish(err);
					throw err;
				}
			},
			cancel(reason) {
				_onFinish(reason);
				return iterator.return();
			}
		}, { highWaterMark: 2 });
	};
	var DEFAULT_CHUNK_SIZE = 64 * 1024;
	var { isFunction } = utils$1;
	var test = (fn, ...args) => {
		try {
			return !!fn(...args);
		} catch (e) {
			return false;
		}
	};
	var factory = (env) => {
		const globalObject = utils$1.global !== void 0 && utils$1.global !== null ? utils$1.global : globalThis;
		const { ReadableStream, TextEncoder } = globalObject;
		env = utils$1.merge.call({ skipUndefined: true }, {
			Request: globalObject.Request,
			Response: globalObject.Response
		}, env);
		const { fetch: envFetch, Request, Response } = env;
		const isFetchSupported = envFetch ? isFunction(envFetch) : typeof fetch === "function";
		const isRequestSupported = isFunction(Request);
		const isResponseSupported = isFunction(Response);
		if (!isFetchSupported) return false;
		const isReadableStreamSupported = isFetchSupported && isFunction(ReadableStream);
		const encodeText = isFetchSupported && (typeof TextEncoder === "function" ? ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Request(str).arrayBuffer()));
		const supportsRequestStream = isRequestSupported && isReadableStreamSupported && test(() => {
			let duplexAccessed = false;
			const request = new Request(platform.origin, {
				body: new ReadableStream(),
				method: "POST",
				get duplex() {
					duplexAccessed = true;
					return "half";
				}
			});
			const hasContentType = request.headers.has("Content-Type");
			if (request.body != null) request.body.cancel();
			return duplexAccessed && !hasContentType;
		});
		const supportsResponseStream = isResponseSupported && isReadableStreamSupported && test(() => utils$1.isReadableStream(new Response("").body));
		const resolvers = { stream: supportsResponseStream && ((res) => res.body) };
		isFetchSupported && (() => {
			[
				"text",
				"arrayBuffer",
				"blob",
				"formData",
				"stream"
			].forEach((type) => {
				!resolvers[type] && (resolvers[type] = (res, config) => {
					let method = res && res[type];
					if (method) return method.call(res);
					throw new AxiosError(`Response type '${type}' is not supported`, AxiosError.ERR_NOT_SUPPORT, config);
				});
			});
		})();
		const getBodyLength = async (body) => {
			if (body == null) return 0;
			if (utils$1.isBlob(body)) return body.size;
			if (utils$1.isSpecCompliantForm(body)) return (await new Request(platform.origin, {
				method: "POST",
				body
			}).arrayBuffer()).byteLength;
			if (utils$1.isArrayBufferView(body) || utils$1.isArrayBuffer(body)) return body.byteLength;
			if (utils$1.isURLSearchParams(body)) body = body + "";
			if (utils$1.isString(body)) return (await encodeText(body)).byteLength;
		};
		const resolveBodyLength = async (headers, body) => {
			const length = utils$1.toFiniteNumber(headers.getContentLength());
			return length == null ? getBodyLength(body) : length;
		};
		return async (config) => {
			let { url, method, data, signal, cancelToken, timeout, onDownloadProgress, onUploadProgress, responseType, headers, withCredentials = "same-origin", fetchOptions, maxContentLength, maxBodyLength } = resolveConfig(config);
			const hasMaxContentLength = utils$1.isNumber(maxContentLength) && maxContentLength > -1;
			const hasMaxBodyLength = utils$1.isNumber(maxBodyLength) && maxBodyLength > -1;
			let _fetch = envFetch || fetch;
			responseType = responseType ? (responseType + "").toLowerCase() : "text";
			let composedSignal = composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
			let request = null;
			const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
				composedSignal.unsubscribe();
			});
			let requestContentLength;
			try {
				if (hasMaxContentLength && typeof url === "string" && url.startsWith("data:")) {
					if (estimateDataURLDecodedBytes(url) > maxContentLength) throw new AxiosError("maxContentLength size of " + maxContentLength + " exceeded", AxiosError.ERR_BAD_RESPONSE, config, request);
				}
				if (hasMaxBodyLength && method !== "get" && method !== "head") {
					const outboundLength = await resolveBodyLength(headers, data);
					if (typeof outboundLength === "number" && isFinite(outboundLength) && outboundLength > maxBodyLength) throw new AxiosError("Request body larger than maxBodyLength limit", AxiosError.ERR_BAD_REQUEST, config, request);
				}
				if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
					let _request = new Request(url, {
						method: "POST",
						body: data,
						duplex: "half"
					});
					let contentTypeHeader;
					if (utils$1.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) headers.setContentType(contentTypeHeader);
					if (_request.body) {
						const [onProgress, flush] = progressEventDecorator(requestContentLength, progressEventReducer(asyncDecorator(onUploadProgress)));
						data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
					}
				}
				if (!utils$1.isString(withCredentials)) withCredentials = withCredentials ? "include" : "omit";
				const isCredentialsSupported = isRequestSupported && "credentials" in Request.prototype;
				if (utils$1.isFormData(data)) {
					const contentType = headers.getContentType();
					if (contentType && /^multipart\/form-data/i.test(contentType) && !/boundary=/i.test(contentType)) headers.delete("content-type");
				}
				headers.set("User-Agent", "axios/1.16.1", false);
				const resolvedOptions = {
					...fetchOptions,
					signal: composedSignal,
					method: method.toUpperCase(),
					headers: toByteStringHeaderObject(headers.normalize()),
					body: data,
					duplex: "half",
					credentials: isCredentialsSupported ? withCredentials : void 0
				};
				request = isRequestSupported && new Request(url, resolvedOptions);
				let response = await (isRequestSupported ? _fetch(request, fetchOptions) : _fetch(url, resolvedOptions));
				if (hasMaxContentLength) {
					const declaredLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
					if (declaredLength != null && declaredLength > maxContentLength) throw new AxiosError("maxContentLength size of " + maxContentLength + " exceeded", AxiosError.ERR_BAD_RESPONSE, config, request);
				}
				const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
				if (supportsResponseStream && response.body && (onDownloadProgress || hasMaxContentLength || isStreamResponse && unsubscribe)) {
					const options = {};
					[
						"status",
						"statusText",
						"headers"
					].forEach((prop) => {
						options[prop] = response[prop];
					});
					const responseContentLength = utils$1.toFiniteNumber(response.headers.get("content-length"));
					const [onProgress, flush] = onDownloadProgress && progressEventDecorator(responseContentLength, progressEventReducer(asyncDecorator(onDownloadProgress), true)) || [];
					let bytesRead = 0;
					const onChunkProgress = (loadedBytes) => {
						if (hasMaxContentLength) {
							bytesRead = loadedBytes;
							if (bytesRead > maxContentLength) throw new AxiosError("maxContentLength size of " + maxContentLength + " exceeded", AxiosError.ERR_BAD_RESPONSE, config, request);
						}
						onProgress && onProgress(loadedBytes);
					};
					response = new Response(trackStream(response.body, DEFAULT_CHUNK_SIZE, onChunkProgress, () => {
						flush && flush();
						unsubscribe && unsubscribe();
					}), options);
				}
				responseType = responseType || "text";
				let responseData = await resolvers[utils$1.findKey(resolvers, responseType) || "text"](response, config);
				if (hasMaxContentLength && !supportsResponseStream && !isStreamResponse) {
					let materializedSize;
					if (responseData != null) {
						if (typeof responseData.byteLength === "number") materializedSize = responseData.byteLength;
						else if (typeof responseData.size === "number") materializedSize = responseData.size;
						else if (typeof responseData === "string") materializedSize = typeof TextEncoder === "function" ? new TextEncoder().encode(responseData).byteLength : responseData.length;
					}
					if (typeof materializedSize === "number" && materializedSize > maxContentLength) throw new AxiosError("maxContentLength size of " + maxContentLength + " exceeded", AxiosError.ERR_BAD_RESPONSE, config, request);
				}
				!isStreamResponse && unsubscribe && unsubscribe();
				return await new Promise((resolve, reject) => {
					settle(resolve, reject, {
						data: responseData,
						headers: AxiosHeaders.from(response.headers),
						status: response.status,
						statusText: response.statusText,
						config,
						request
					});
				});
			} catch (err) {
				unsubscribe && unsubscribe();
				if (composedSignal && composedSignal.aborted && composedSignal.reason instanceof AxiosError) {
					const canceledError = composedSignal.reason;
					canceledError.config = config;
					request && (canceledError.request = request);
					err !== canceledError && (canceledError.cause = err);
					throw canceledError;
				}
				if (err && err.name === "TypeError" && /Load failed|fetch/i.test(err.message)) throw Object.assign(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request, err && err.response), { cause: err.cause || err });
				throw AxiosError.from(err, err && err.code, config, request, err && err.response);
			}
		};
	};
	var seedCache = /* @__PURE__ */ new Map();
	var getFetch = (config) => {
		let env = config && config.env || {};
		const { fetch, Request, Response } = env;
		const seeds = [
			Request,
			Response,
			fetch
		];
		let i = seeds.length, seed, target, map = seedCache;
		while (i--) {
			seed = seeds[i];
			target = map.get(seed);
			target === void 0 && map.set(seed, target = i ? /* @__PURE__ */ new Map() : factory(env));
			map = target;
		}
		return target;
	};
	getFetch();
	/**
	* Known adapters mapping.
	* Provides environment-specific adapters for Axios:
	* - `http` for Node.js
	* - `xhr` for browsers
	* - `fetch` for fetch API-based requests
	*
	* @type {Object<string, Function|Object>}
	*/
	var knownAdapters = {
		http: httpAdapter,
		xhr: xhrAdapter,
		fetch: { get: getFetch }
	};
	utils$1.forEach(knownAdapters, (fn, value) => {
		if (fn) {
			try {
				Object.defineProperty(fn, "name", {
					__proto__: null,
					value
				});
			} catch (e) {}
			Object.defineProperty(fn, "adapterName", {
				__proto__: null,
				value
			});
		}
	});
	/**
	* Render a rejection reason string for unknown or unsupported adapters
	*
	* @param {string} reason
	* @returns {string}
	*/
	var renderReason = (reason) => `- ${reason}`;
	/**
	* Check if the adapter is resolved (function, null, or false)
	*
	* @param {Function|null|false} adapter
	* @returns {boolean}
	*/
	var isResolvedHandle = (adapter) => utils$1.isFunction(adapter) || adapter === null || adapter === false;
	/**
	* Get the first suitable adapter from the provided list.
	* Tries each adapter in order until a supported one is found.
	* Throws an AxiosError if no adapter is suitable.
	*
	* @param {Array<string|Function>|string|Function} adapters - Adapter(s) by name or function.
	* @param {Object} config - Axios request configuration
	* @throws {AxiosError} If no suitable adapter is available
	* @returns {Function} The resolved adapter function
	*/
	function getAdapter(adapters, config) {
		adapters = utils$1.isArray(adapters) ? adapters : [adapters];
		const { length } = adapters;
		let nameOrAdapter;
		let adapter;
		const rejectedReasons = {};
		for (let i = 0; i < length; i++) {
			nameOrAdapter = adapters[i];
			let id;
			adapter = nameOrAdapter;
			if (!isResolvedHandle(nameOrAdapter)) {
				adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
				if (adapter === void 0) throw new AxiosError(`Unknown adapter '${id}'`);
			}
			if (adapter && (utils$1.isFunction(adapter) || (adapter = adapter.get(config)))) break;
			rejectedReasons[id || "#" + i] = adapter;
		}
		if (!adapter) {
			const reasons = Object.entries(rejectedReasons).map(([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build"));
			throw new AxiosError(`There is no suitable adapter to dispatch the request ` + (length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT");
		}
		return adapter;
	}
	/**
	* Exports Axios adapters and utility to resolve an adapter
	*/
	var adapters = {
		/**
		* Resolve an adapter from a list of adapter names or functions.
		* @type {Function}
		*/
		getAdapter,
		/**
		* Exposes all known adapters
		* @type {Object<string, Function|Object>}
		*/
		adapters: knownAdapters
	};
	/**
	* Throws a `CanceledError` if cancellation has been requested.
	*
	* @param {Object} config The config that is to be used for the request
	*
	* @returns {void}
	*/
	function throwIfCancellationRequested(config) {
		if (config.cancelToken) config.cancelToken.throwIfRequested();
		if (config.signal && config.signal.aborted) throw new CanceledError(null, config);
	}
	/**
	* Dispatch a request to the server using the configured adapter.
	*
	* @param {object} config The config that is to be used for the request
	*
	* @returns {Promise} The Promise to be fulfilled
	*/
	function dispatchRequest(config) {
		throwIfCancellationRequested(config);
		config.headers = AxiosHeaders.from(config.headers);
		config.data = transformData.call(config, config.transformRequest);
		if ([
			"post",
			"put",
			"patch"
		].indexOf(config.method) !== -1) config.headers.setContentType("application/x-www-form-urlencoded", false);
		return adapters.getAdapter(config.adapter || defaults.adapter, config)(config).then(function onAdapterResolution(response) {
			throwIfCancellationRequested(config);
			config.response = response;
			try {
				response.data = transformData.call(config, config.transformResponse, response);
			} finally {
				delete config.response;
			}
			response.headers = AxiosHeaders.from(response.headers);
			return response;
		}, function onAdapterRejection(reason) {
			if (!isCancel(reason)) {
				throwIfCancellationRequested(config);
				if (reason && reason.response) {
					config.response = reason.response;
					try {
						reason.response.data = transformData.call(config, config.transformResponse, reason.response);
					} finally {
						delete config.response;
					}
					reason.response.headers = AxiosHeaders.from(reason.response.headers);
				}
			}
			return Promise.reject(reason);
		});
	}
	var validators$1 = {};
	[
		"object",
		"boolean",
		"number",
		"function",
		"string",
		"symbol"
	].forEach((type, i) => {
		validators$1[type] = function validator(thing) {
			return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
		};
	});
	var deprecatedWarnings = {};
	/**
	* Transitional option validator
	*
	* @param {function|boolean?} validator - set to false if the transitional option has been removed
	* @param {string?} version - deprecated version / removed since version
	* @param {string?} message - some message with additional info
	*
	* @returns {function}
	*/
	validators$1.transitional = function transitional(validator, version, message) {
		function formatMessage(opt, desc) {
			return "[Axios v1.16.1] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
		}
		return (value, opt, opts) => {
			if (validator === false) throw new AxiosError(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError.ERR_DEPRECATED);
			if (version && !deprecatedWarnings[opt]) {
				deprecatedWarnings[opt] = true;
				console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
			}
			return validator ? validator(value, opt, opts) : true;
		};
	};
	validators$1.spelling = function spelling(correctSpelling) {
		return (value, opt) => {
			console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
			return true;
		};
	};
	/**
	* Assert object's properties type
	*
	* @param {object} options
	* @param {object} schema
	* @param {boolean?} allowUnknown
	*
	* @returns {object}
	*/
	function assertOptions(options, schema, allowUnknown) {
		if (typeof options !== "object") throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
		const keys = Object.keys(options);
		let i = keys.length;
		while (i-- > 0) {
			const opt = keys[i];
			const validator = Object.prototype.hasOwnProperty.call(schema, opt) ? schema[opt] : void 0;
			if (validator) {
				const value = options[opt];
				const result = value === void 0 || validator(value, opt, options);
				if (result !== true) throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
				continue;
			}
			if (allowUnknown !== true) throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
		}
	}
	var validator = {
		assertOptions,
		validators: validators$1
	};
	var validators = validator.validators;
	/**
	* Create a new instance of Axios
	*
	* @param {Object} instanceConfig The default config for the instance
	*
	* @return {Axios} A new instance of Axios
	*/
	var Axios = class {
		constructor(instanceConfig) {
			this.defaults = instanceConfig || {};
			this.interceptors = {
				request: new InterceptorManager(),
				response: new InterceptorManager()
			};
		}
		/**
		* Dispatch a request
		*
		* @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
		* @param {?Object} config
		*
		* @returns {Promise} The Promise to be fulfilled
		*/
		async request(configOrUrl, config) {
			try {
				return await this._request(configOrUrl, config);
			} catch (err) {
				if (err instanceof Error) {
					let dummy = {};
					Error.captureStackTrace ? Error.captureStackTrace(dummy) : dummy = /* @__PURE__ */ new Error();
					const stack = (() => {
						if (!dummy.stack) return "";
						const firstNewlineIndex = dummy.stack.indexOf("\n");
						return firstNewlineIndex === -1 ? "" : dummy.stack.slice(firstNewlineIndex + 1);
					})();
					try {
						if (!err.stack) err.stack = stack;
						else if (stack) {
							const firstNewlineIndex = stack.indexOf("\n");
							const secondNewlineIndex = firstNewlineIndex === -1 ? -1 : stack.indexOf("\n", firstNewlineIndex + 1);
							const stackWithoutTwoTopLines = secondNewlineIndex === -1 ? "" : stack.slice(secondNewlineIndex + 1);
							if (!String(err.stack).endsWith(stackWithoutTwoTopLines)) err.stack += "\n" + stack;
						}
					} catch (e) {}
				}
				throw err;
			}
		}
		_request(configOrUrl, config) {
			if (typeof configOrUrl === "string") {
				config = config || {};
				config.url = configOrUrl;
			} else config = configOrUrl || {};
			config = mergeConfig(this.defaults, config);
			const { transitional, paramsSerializer, headers } = config;
			if (transitional !== void 0) validator.assertOptions(transitional, {
				silentJSONParsing: validators.transitional(validators.boolean),
				forcedJSONParsing: validators.transitional(validators.boolean),
				clarifyTimeoutError: validators.transitional(validators.boolean),
				legacyInterceptorReqResOrdering: validators.transitional(validators.boolean)
			}, false);
			if (paramsSerializer != null) if (utils$1.isFunction(paramsSerializer)) config.paramsSerializer = { serialize: paramsSerializer };
			else validator.assertOptions(paramsSerializer, {
				encode: validators.function,
				serialize: validators.function
			}, true);
			if (config.allowAbsoluteUrls !== void 0);
			else if (this.defaults.allowAbsoluteUrls !== void 0) config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
			else config.allowAbsoluteUrls = true;
			validator.assertOptions(config, {
				baseUrl: validators.spelling("baseURL"),
				withXsrfToken: validators.spelling("withXSRFToken")
			}, true);
			config.method = (config.method || this.defaults.method || "get").toLowerCase();
			let contextHeaders = headers && utils$1.merge(headers.common, headers[config.method]);
			headers && utils$1.forEach([
				"delete",
				"get",
				"head",
				"post",
				"put",
				"patch",
				"query",
				"common"
			], (method) => {
				delete headers[method];
			});
			config.headers = AxiosHeaders.concat(contextHeaders, headers);
			const requestInterceptorChain = [];
			let synchronousRequestInterceptors = true;
			this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
				if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
				synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
				const transitional = config.transitional || transitionalDefaults;
				if (transitional && transitional.legacyInterceptorReqResOrdering) requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
				else requestInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
			});
			const responseInterceptorChain = [];
			this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
				responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
			});
			let promise;
			let i = 0;
			let len;
			if (!synchronousRequestInterceptors) {
				const chain = [dispatchRequest.bind(this), void 0];
				chain.unshift(...requestInterceptorChain);
				chain.push(...responseInterceptorChain);
				len = chain.length;
				promise = Promise.resolve(config);
				while (i < len) promise = promise.then(chain[i++], chain[i++]);
				return promise;
			}
			len = requestInterceptorChain.length;
			let newConfig = config;
			while (i < len) {
				const onFulfilled = requestInterceptorChain[i++];
				const onRejected = requestInterceptorChain[i++];
				try {
					newConfig = onFulfilled(newConfig);
				} catch (error) {
					onRejected.call(this, error);
					break;
				}
			}
			try {
				promise = dispatchRequest.call(this, newConfig);
			} catch (error) {
				return Promise.reject(error);
			}
			i = 0;
			len = responseInterceptorChain.length;
			while (i < len) promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
			return promise;
		}
		getUri(config) {
			config = mergeConfig(this.defaults, config);
			return buildURL(buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls), config.params, config.paramsSerializer);
		}
	};
	utils$1.forEach([
		"delete",
		"get",
		"head",
		"options"
	], function forEachMethodNoData(method) {
		Axios.prototype[method] = function(url, config) {
			return this.request(mergeConfig(config || {}, {
				method,
				url,
				data: (config || {}).data
			}));
		};
	});
	utils$1.forEach([
		"post",
		"put",
		"patch",
		"query"
	], function forEachMethodWithData(method) {
		function generateHTTPMethod(isForm) {
			return function httpMethod(url, data, config) {
				return this.request(mergeConfig(config || {}, {
					method,
					headers: isForm ? { "Content-Type": "multipart/form-data" } : {},
					url,
					data
				}));
			};
		}
		Axios.prototype[method] = generateHTTPMethod();
		if (method !== "query") Axios.prototype[method + "Form"] = generateHTTPMethod(true);
	});
	/**
	* A `CancelToken` is an object that can be used to request cancellation of an operation.
	*
	* @param {Function} executor The executor function.
	*
	* @returns {CancelToken}
	*/
	var CancelToken = class CancelToken {
		constructor(executor) {
			if (typeof executor !== "function") throw new TypeError("executor must be a function.");
			let resolvePromise;
			this.promise = new Promise(function promiseExecutor(resolve) {
				resolvePromise = resolve;
			});
			const token = this;
			this.promise.then((cancel) => {
				if (!token._listeners) return;
				let i = token._listeners.length;
				while (i-- > 0) token._listeners[i](cancel);
				token._listeners = null;
			});
			this.promise.then = (onfulfilled) => {
				let _resolve;
				const promise = new Promise((resolve) => {
					token.subscribe(resolve);
					_resolve = resolve;
				}).then(onfulfilled);
				promise.cancel = function reject() {
					token.unsubscribe(_resolve);
				};
				return promise;
			};
			executor(function cancel(message, config, request) {
				if (token.reason) return;
				token.reason = new CanceledError(message, config, request);
				resolvePromise(token.reason);
			});
		}
		/**
		* Throws a `CanceledError` if cancellation has been requested.
		*/
		throwIfRequested() {
			if (this.reason) throw this.reason;
		}
		/**
		* Subscribe to the cancel signal
		*/
		subscribe(listener) {
			if (this.reason) {
				listener(this.reason);
				return;
			}
			if (this._listeners) this._listeners.push(listener);
			else this._listeners = [listener];
		}
		/**
		* Unsubscribe from the cancel signal
		*/
		unsubscribe(listener) {
			if (!this._listeners) return;
			const index = this._listeners.indexOf(listener);
			if (index !== -1) this._listeners.splice(index, 1);
		}
		toAbortSignal() {
			const controller = new AbortController();
			const abort = (err) => {
				controller.abort(err);
			};
			this.subscribe(abort);
			controller.signal.unsubscribe = () => this.unsubscribe(abort);
			return controller.signal;
		}
		/**
		* Returns an object that contains a new `CancelToken` and a function that, when called,
		* cancels the `CancelToken`.
		*/
		static source() {
			let cancel;
			return {
				token: new CancelToken(function executor(c) {
					cancel = c;
				}),
				cancel
			};
		}
	};
	/**
	* Syntactic sugar for invoking a function and expanding an array for arguments.
	*
	* Common use case would be to use `Function.prototype.apply`.
	*
	*  ```js
	*  function f(x, y, z) {}
	*  const args = [1, 2, 3];
	*  f.apply(null, args);
	*  ```
	*
	* With `spread` this example can be re-written.
	*
	*  ```js
	*  spread(function(x, y, z) {})([1, 2, 3]);
	*  ```
	*
	* @param {Function} callback
	*
	* @returns {Function}
	*/
	function spread(callback) {
		return function wrap(arr) {
			return callback.apply(null, arr);
		};
	}
	/**
	* Determines whether the payload is an error thrown by Axios
	*
	* @param {*} payload The value to test
	*
	* @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
	*/
	function isAxiosError(payload) {
		return utils$1.isObject(payload) && payload.isAxiosError === true;
	}
	var HttpStatusCode = {
		Continue: 100,
		SwitchingProtocols: 101,
		Processing: 102,
		EarlyHints: 103,
		Ok: 200,
		Created: 201,
		Accepted: 202,
		NonAuthoritativeInformation: 203,
		NoContent: 204,
		ResetContent: 205,
		PartialContent: 206,
		MultiStatus: 207,
		AlreadyReported: 208,
		ImUsed: 226,
		MultipleChoices: 300,
		MovedPermanently: 301,
		Found: 302,
		SeeOther: 303,
		NotModified: 304,
		UseProxy: 305,
		Unused: 306,
		TemporaryRedirect: 307,
		PermanentRedirect: 308,
		BadRequest: 400,
		Unauthorized: 401,
		PaymentRequired: 402,
		Forbidden: 403,
		NotFound: 404,
		MethodNotAllowed: 405,
		NotAcceptable: 406,
		ProxyAuthenticationRequired: 407,
		RequestTimeout: 408,
		Conflict: 409,
		Gone: 410,
		LengthRequired: 411,
		PreconditionFailed: 412,
		PayloadTooLarge: 413,
		UriTooLong: 414,
		UnsupportedMediaType: 415,
		RangeNotSatisfiable: 416,
		ExpectationFailed: 417,
		ImATeapot: 418,
		MisdirectedRequest: 421,
		UnprocessableEntity: 422,
		Locked: 423,
		FailedDependency: 424,
		TooEarly: 425,
		UpgradeRequired: 426,
		PreconditionRequired: 428,
		TooManyRequests: 429,
		RequestHeaderFieldsTooLarge: 431,
		UnavailableForLegalReasons: 451,
		InternalServerError: 500,
		NotImplemented: 501,
		BadGateway: 502,
		ServiceUnavailable: 503,
		GatewayTimeout: 504,
		HttpVersionNotSupported: 505,
		VariantAlsoNegotiates: 506,
		InsufficientStorage: 507,
		LoopDetected: 508,
		NotExtended: 510,
		NetworkAuthenticationRequired: 511,
		WebServerIsDown: 521,
		ConnectionTimedOut: 522,
		OriginIsUnreachable: 523,
		TimeoutOccurred: 524,
		SslHandshakeFailed: 525,
		InvalidSslCertificate: 526
	};
	Object.entries(HttpStatusCode).forEach(([key, value]) => {
		HttpStatusCode[value] = key;
	});
	/**
	* Create an instance of Axios
	*
	* @param {Object} defaultConfig The default config for the instance
	*
	* @returns {Axios} A new instance of Axios
	*/
	function createInstance(defaultConfig) {
		const context = new Axios(defaultConfig);
		const instance = bind(Axios.prototype.request, context);
		utils$1.extend(instance, Axios.prototype, context, { allOwnKeys: true });
		utils$1.extend(instance, context, null, { allOwnKeys: true });
		instance.create = function create(instanceConfig) {
			return createInstance(mergeConfig(defaultConfig, instanceConfig));
		};
		return instance;
	}
	var axios = createInstance(defaults);
	axios.Axios = Axios;
	axios.CanceledError = CanceledError;
	axios.CancelToken = CancelToken;
	axios.isCancel = isCancel;
	axios.VERSION = VERSION;
	axios.toFormData = toFormData;
	axios.AxiosError = AxiosError;
	axios.Cancel = axios.CanceledError;
	axios.all = function all(promises) {
		return Promise.all(promises);
	};
	axios.spread = spread;
	axios.isAxiosError = isAxiosError;
	axios.mergeConfig = mergeConfig;
	axios.AxiosHeaders = AxiosHeaders;
	axios.formToJSON = (thing) => formDataToJSON(utils$1.isHTMLForm(thing) ? new FormData(thing) : thing);
	axios.getAdapter = adapters.getAdapter;
	axios.HttpStatusCode = HttpStatusCode;
	axios.default = axios;
	module.exports = axios;
}));
//#endregion
//#region node_modules/vectordb/dist/middleware.js
var require_middleware = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Method = void 0;
	var Method;
	(function(Method) {
		Method[Method["GET"] = 0] = "GET";
		Method[Method["POST"] = 1] = "POST";
	})(Method || (exports.Method = Method = {}));
}));
//#endregion
//#region node_modules/vectordb/dist/remote/client.js
var require_client = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.HttpLancedbClient = void 0;
	var axios_1 = require_axios();
	var apache_arrow_1 = require_Arrow_node();
	var middleware_1 = require_middleware();
	/**
	* Invoke the middleware chain and at the end call the remote endpoint
	*/
	async function callWithMiddlewares(req, middlewares, opts) {
		async function call(i, req) {
			if (i > middlewares.length) {
				const headers = Object.fromEntries(req.headers.entries());
				const params = Object.fromEntries(req.params?.entries() ?? []);
				const timeout = opts?.timeout;
				let res;
				if (req.method === middleware_1.Method.POST) res = await axios_1.default.post(req.uri, req.body, {
					headers,
					params,
					timeout,
					responseType: opts?.responseType
				});
				else res = await axios_1.default.get(req.uri, {
					headers,
					params,
					timeout
				});
				return toLanceRes(res);
			}
			return await middlewares[i - 1].onRemoteRequest(req, async (req) => {
				return await call(i + 1, req);
			});
		}
		return await call(1, req);
	}
	/**
	* Marshall the library response into a LanceDB response
	*/
	function toLanceRes(res) {
		const headers = /* @__PURE__ */ new Map();
		for (const h in res.headers) headers.set(h, res.headers[h]);
		return {
			status: res.status,
			statusText: res.statusText,
			headers,
			body: async () => {
				return res.data;
			}
		};
	}
	async function decodeErrorData(res, responseType) {
		const errorData = await res.body();
		if (responseType === "arraybuffer") return new TextDecoder().decode(errorData);
		else {
			if (typeof errorData === "object") return JSON.stringify(errorData);
			return errorData;
		}
	}
	exports.HttpLancedbClient = class HttpLancedbClient {
		constructor(url, apiKey, timeout, _dbName) {
			this._dbName = _dbName;
			this._url = url;
			this._apiKey = () => apiKey;
			this._middlewares = [];
			this._timeout = timeout;
		}
		get uri() {
			return this._url;
		}
		async search(tableName, vector, k, nprobes, prefilter, refineFactor, columns, filter, metricType, fastSearch) {
			const result = await this.post(`/v1/table/${tableName}/query/`, {
				vector,
				k,
				nprobes,
				refine_factor: refineFactor,
				columns,
				filter,
				prefilter,
				metric: metricType,
				fast_search: fastSearch
			}, void 0, void 0, "arraybuffer");
			return (0, apache_arrow_1.tableFromIPC)(await result.body());
		}
		/**
		* Sent GET request.
		*/
		async get(path, params) {
			const req = {
				uri: `${this._url}${path}`,
				method: middleware_1.Method.GET,
				headers: new Map(Object.entries({
					"Content-Type": "application/json",
					"x-api-key": this._apiKey(),
					...this._dbName !== void 0 ? { "x-lancedb-database": this._dbName } : {}
				})),
				params: new Map(Object.entries(params ?? {}))
			};
			let response;
			try {
				response = await callWithMiddlewares(req, this._middlewares);
				return response;
			} catch (err) {
				console.error(serializeErrorAsJson(err));
				if (err.response === void 0) throw new Error(`Network Error: ${err.message}`);
				response = toLanceRes(err.response);
			}
			if (response.status !== 200) {
				const errorData = await decodeErrorData(response);
				throw new Error(`Server Error, status: ${response.status}, message: ${response.statusText}: ${errorData}`);
			}
			return response;
		}
		/**
		* Sent POST request.
		*/
		async post(path, data, params, content, responseType) {
			const req = {
				uri: `${this._url}${path}`,
				method: middleware_1.Method.POST,
				headers: new Map(Object.entries({
					"Content-Type": content ?? "application/json",
					"x-api-key": this._apiKey(),
					...this._dbName !== void 0 ? { "x-lancedb-database": this._dbName } : {}
				})),
				params: new Map(Object.entries(params ?? {})),
				body: data
			};
			let response;
			try {
				response = await callWithMiddlewares(req, this._middlewares, {
					responseType,
					timeout: this._timeout
				});
			} catch (err) {
				console.error(serializeErrorAsJson(err));
				if (err.response === void 0) throw new Error(`Network Error: ${err.message}`);
				response = toLanceRes(err.response);
			}
			if (response.status !== 200) {
				const errorData = await decodeErrorData(response, responseType);
				throw new Error(`Server Error, status: ${response.status}, message: ${response.statusText}: ${errorData}`);
			}
			return response;
		}
		/**
		* Instrument this client with middleware
		* @param mw - The middleware that instruments the client
		* @returns - an instance of this client instrumented with the middleware
		*/
		withMiddleware(mw) {
			const wrapped = this.clone();
			wrapped._middlewares.push(mw);
			return wrapped;
		}
		/**
		* Make a clone of this client
		*/
		clone() {
			const clone = new HttpLancedbClient(this._url, this._apiKey(), this._timeout, this._dbName);
			for (const mw of this._middlewares) clone._middlewares.push(mw);
			return clone;
		}
	};
	function serializeErrorAsJson(err) {
		const error = JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)));
		error.response = err.response != null ? JSON.parse(JSON.stringify(err.response, Object.getOwnPropertyNames(err.response).filter((prop) => prop !== "config"))) : null;
		return JSON.stringify({ error });
	}
}));
//#endregion
//#region node_modules/vectordb/dist/embedding/embedding_function.js
var require_embedding_function = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isEmbeddingFunction = void 0;
	function isEmbeddingFunction(value) {
		return typeof value.sourceColumn === "string" && typeof value.embed === "function";
	}
	exports.isEmbeddingFunction = isEmbeddingFunction;
}));
//#endregion
//#region node_modules/vectordb/dist/util.js
var require_util = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.TTLCache = exports.toSQL = void 0;
	function toSQL(value) {
		if (typeof value === "string") return `'${value}'`;
		if (typeof value === "number") return value.toString();
		if (typeof value === "boolean") return value ? "TRUE" : "FALSE";
		if (value === null) return "NULL";
		if (value instanceof Date) return `'${value.toISOString()}'`;
		if (Array.isArray(value)) return `[${value.map(toSQL).join(", ")}]`;
		throw new Error(`Unsupported value type: ${typeof value} value: (${value})`);
	}
	exports.toSQL = toSQL;
	var TTLCache = class {
		/**
		* @param ttl Time to live in milliseconds
		*/
		constructor(ttl) {
			this.ttl = ttl;
			this.cache = /* @__PURE__ */ new Map();
		}
		get(key) {
			const entry = this.cache.get(key);
			if (entry === void 0) return;
			if (entry.expires < Date.now()) {
				this.cache.delete(key);
				return;
			}
			return entry.value;
		}
		set(key, value) {
			this.cache.set(key, {
				value,
				expires: Date.now() + this.ttl
			});
		}
		delete(key) {
			this.cache.delete(key);
		}
	};
	exports.TTLCache = TTLCache;
}));
//#endregion
//#region node_modules/vectordb/dist/remote/index.js
var require_remote = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.RemoteTable = exports.RemoteQuery = exports.RemoteConnection = void 0;
	var index_1 = require_dist();
	var query_1 = require_query();
	var apache_arrow_1 = require_Arrow_node();
	var client_1 = require_client();
	var embedding_function_1 = require_embedding_function();
	var arrow_1 = require_arrow();
	var util_1 = require_util();
	exports.RemoteConnection = class RemoteConnection {
		constructor(opts) {
			this._tableCache = new util_1.TTLCache(3e5);
			if (!opts.uri.startsWith("db://")) throw new Error(`Invalid remote DB URI: ${opts.uri}`);
			if (opts.apiKey == null || opts.apiKey === "") opts = Object.assign({}, opts, { apiKey: process.env.LANCEDB_API_KEY });
			if (opts.apiKey === void 0 || opts.region === void 0) throw new Error("API key and region are must be passed for remote connections. API key can also be set through LANCEDB_API_KEY env variable.");
			this._dbName = opts.uri.slice(5);
			let server;
			if (opts.hostOverride === void 0) server = `https://${this._dbName}.${opts.region}.api.lancedb.com`;
			else server = opts.hostOverride;
			this._client = new client_1.HttpLancedbClient(server, opts.apiKey, opts.timeout, opts.hostOverride === void 0 ? void 0 : this._dbName);
		}
		get uri() {
			return "db://" + this._client.uri;
		}
		async tableNames(pageToken = "", limit = 10) {
			const body = await (await this._client.get("/v1/table/", {
				limit: `${limit}`,
				page_token: pageToken
			})).body();
			for (const table of body.tables) this._tableCache.set(table, true);
			return body.tables;
		}
		async openTable(name, embeddings) {
			if (this._tableCache.get(name) === void 0) {
				await this._client.post(`/v1/table/${encodeURIComponent(name)}/describe/`);
				this._tableCache.set(name, true);
			}
			if (embeddings !== void 0) return new RemoteTable(this._client, name, embeddings);
			else return new RemoteTable(this._client, name);
		}
		async createTable(nameOrOpts, data, optsOrEmbedding, opt) {
			let schema;
			let embeddings;
			let tableName;
			if (typeof nameOrOpts === "string") {
				if (optsOrEmbedding !== void 0 && (0, embedding_function_1.isEmbeddingFunction)(optsOrEmbedding)) embeddings = optsOrEmbedding;
				tableName = nameOrOpts;
			} else {
				schema = nameOrOpts.schema;
				embeddings = nameOrOpts.embeddingFunction;
				tableName = nameOrOpts.name;
				if (data === void 0) data = nameOrOpts.data;
			}
			let buffer;
			function isEmpty(data) {
				if (data instanceof apache_arrow_1.Table) return data.numRows === 0;
				return data.length === 0;
			}
			if (data === void 0 || isEmpty(data)) {
				if (schema === void 0) throw new Error("Either data or schema needs to defined");
				buffer = await (0, arrow_1.fromTableToStreamBuffer)((0, arrow_1.createEmptyTable)(schema));
			} else if (data instanceof apache_arrow_1.Table) buffer = await (0, arrow_1.fromTableToStreamBuffer)(data, embeddings);
			else buffer = await (0, arrow_1.fromRecordsToStreamBuffer)(data, embeddings);
			const res = await this._client.post(`/v1/table/${encodeURIComponent(tableName)}/create/`, buffer, void 0, "application/vnd.apache.arrow.stream");
			if (res.status !== 200) throw new Error(`Server Error, status: ${res.status}, message: ${res.statusText}: ${await res.body()}`);
			this._tableCache.set(tableName, true);
			if (embeddings === void 0) return new RemoteTable(this._client, tableName);
			else return new RemoteTable(this._client, tableName, embeddings);
		}
		async dropTable(name) {
			await this._client.post(`/v1/table/${encodeURIComponent(name)}/drop/`);
			this._tableCache.delete(name);
		}
		withMiddleware(middleware) {
			const wrapped = this.clone();
			wrapped._client = wrapped._client.withMiddleware(middleware);
			return wrapped;
		}
		clone() {
			const clone = Object.create(RemoteConnection.prototype);
			return Object.assign(clone, this);
		}
	};
	var RemoteQuery = class extends query_1.Query {
		constructor(query, _client, _name, embeddings) {
			super(query, void 0, embeddings);
			this._client = _client;
			this._name = _name;
		}
		async execute() {
			const embeddings = this._embeddings;
			const query = this._query;
			let queryVector;
			if (embeddings !== void 0) queryVector = (await embeddings.embed([query]))[0];
			else queryVector = query;
			return (await this._client.search(this._name, queryVector, this._limit, this._nprobes, this._prefilter, this._refineFactor, this._select, this._filter, this._metricType, this._fastSearch)).toArray().map((entry) => {
				const newObject = {};
				Object.keys(entry).forEach((key) => {
					if (entry[key] instanceof apache_arrow_1.Vector) newObject[key] = entry[key].toArray();
					else newObject[key] = entry[key];
				});
				return newObject;
			});
		}
	};
	exports.RemoteQuery = RemoteQuery;
	var RemoteTable = class RemoteTable {
		constructor(client, name, embeddings) {
			this._client = client;
			this._name = name;
			this._embeddings = embeddings;
		}
		get name() {
			return this._name;
		}
		get schema() {
			return this._client.post(`/v1/table/${encodeURIComponent(this._name)}/describe/`).then(async (res) => {
				if (res.status !== 200) throw new Error(`Server Error, status: ${res.status}, message: ${res.statusText}: ${await res.body()}`);
				return (await res.body())?.schema;
			});
		}
		search(query) {
			return new RemoteQuery(query, this._client, encodeURIComponent(this._name));
		}
		filter(where) {
			throw new Error("Not implemented");
		}
		async mergeInsert(on, data, args) {
			let tbl;
			if (data instanceof apache_arrow_1.Table) tbl = data;
			else tbl = (0, index_1.makeArrowTable)(data, await this.schema);
			const queryParams = { on };
			if (args.whenMatchedUpdateAll !== false && args.whenMatchedUpdateAll !== null && args.whenMatchedUpdateAll !== void 0) {
				queryParams.when_matched_update_all = "true";
				if (typeof args.whenMatchedUpdateAll === "string") queryParams.when_matched_update_all_filt = args.whenMatchedUpdateAll;
			} else queryParams.when_matched_update_all = "false";
			if (args.whenNotMatchedInsertAll ?? false) queryParams.when_not_matched_insert_all = "true";
			else queryParams.when_not_matched_insert_all = "false";
			if (args.whenNotMatchedBySourceDelete !== false && args.whenNotMatchedBySourceDelete !== null && args.whenNotMatchedBySourceDelete !== void 0) {
				queryParams.when_not_matched_by_source_delete = "true";
				if (typeof args.whenNotMatchedBySourceDelete === "string") queryParams.when_not_matched_by_source_delete_filt = args.whenNotMatchedBySourceDelete;
			} else queryParams.when_not_matched_by_source_delete = "false";
			const buffer = await (0, arrow_1.fromTableToStreamBuffer)(tbl, this._embeddings);
			const res = await this._client.post(`/v1/table/${encodeURIComponent(this._name)}/merge_insert/`, buffer, queryParams, "application/vnd.apache.arrow.stream");
			if (res.status !== 200) throw new Error(`Server Error, status: ${res.status}, message: ${res.statusText}: ${await res.body()}`);
		}
		async add(data) {
			let tbl;
			if (data instanceof apache_arrow_1.Table) tbl = data;
			else tbl = (0, index_1.makeArrowTable)(data, await this.schema);
			const buffer = await (0, arrow_1.fromTableToStreamBuffer)(tbl, this._embeddings);
			const res = await this._client.post(`/v1/table/${encodeURIComponent(this._name)}/insert/`, buffer, { mode: "append" }, "application/vnd.apache.arrow.stream");
			if (res.status !== 200) throw new Error(`Server Error, status: ${res.status}, message: ${res.statusText}: ${await res.body()}`);
			return tbl.numRows;
		}
		async overwrite(data) {
			let tbl;
			if (data instanceof apache_arrow_1.Table) tbl = data;
			else tbl = (0, index_1.makeArrowTable)(data);
			const buffer = await (0, arrow_1.fromTableToStreamBuffer)(tbl, this._embeddings);
			const res = await this._client.post(`/v1/table/${encodeURIComponent(this._name)}/insert/`, buffer, { mode: "overwrite" }, "application/vnd.apache.arrow.stream");
			if (res.status !== 200) throw new Error(`Server Error, status: ${res.status}, message: ${res.statusText}: ${await res.body()}`);
			return tbl.numRows;
		}
		async createIndex(indexParams) {
			for (const param of [
				"index_name",
				"num_partitions",
				"max_iters",
				"use_opq",
				"num_sub_vectors",
				"num_bits",
				"max_opq_iters",
				"replace"
			]) if (indexParams[param]) throw new Error(`${param} is not supported for remote connections`);
			const data = {
				column: indexParams.column ?? "vector",
				index_type: "vector",
				metric_type: indexParams.metric_type ?? "L2",
				index_cache_size: indexParams.index_cache_size ?? null
			};
			const res = await this._client.post(`/v1/table/${encodeURIComponent(this._name)}/create_index/`, data);
			if (res.status !== 200) throw new Error(`Server Error, status: ${res.status}, message: ${res.statusText}: ${await res.body()}`);
		}
		async createScalarIndex(column) {
			const data = {
				column,
				index_type: "scalar",
				replace: true
			};
			const res = await this._client.post(`/v1/table/${encodeURIComponent(this._name)}/create_scalar_index/`, data);
			if (res.status !== 200) throw new Error(`Server Error, status: ${res.status}, message: ${res.statusText}: ${await res.body()}`);
		}
		async dropIndex(index_name) {
			const res = await this._client.post(`/v1/table/${encodeURIComponent(this._name)}/index/${encodeURIComponent(index_name)}/drop/`);
			if (res.status !== 200) throw new Error(`Server Error, status: ${res.status}, message: ${res.statusText}: ${await res.body()}`);
		}
		async countRows(filter) {
			return await (await this._client.post(`/v1/table/${encodeURIComponent(this._name)}/count_rows/`, { predicate: filter })).body();
		}
		async delete(filter) {
			await this._client.post(`/v1/table/${encodeURIComponent(this._name)}/delete/`, { predicate: filter });
		}
		async update(args) {
			let filter;
			let updates;
			if ("valuesSql" in args) {
				filter = args.where ?? null;
				updates = args.valuesSql;
			} else {
				filter = args.where ?? null;
				updates = {};
				for (const [key, value] of Object.entries(args.values)) updates[key] = (0, util_1.toSQL)(value);
			}
			await this._client.post(`/v1/table/${encodeURIComponent(this._name)}/update/`, {
				predicate: filter,
				updates: Object.entries(updates).map(([key, value]) => [key, value])
			});
		}
		async listIndices() {
			return (await (await this._client.post(`/v1/table/${encodeURIComponent(this._name)}/index/list/`)).body()).indexes?.map((index) => ({
				columns: index.columns,
				name: index.index_name,
				uuid: index.index_uuid,
				status: index.status
			}));
		}
		async indexStats(indexName) {
			const body = await (await this._client.post(`/v1/table/${encodeURIComponent(this._name)}/index/${indexName}/stats/`)).body();
			return {
				numIndexedRows: body?.num_indexed_rows,
				numUnindexedRows: body?.num_unindexed_rows,
				indexType: body?.index_type,
				distanceType: body?.distance_type
			};
		}
		async addColumns(newColumnTransforms) {
			throw new Error("Add columns is not yet supported in LanceDB Cloud.");
		}
		async alterColumns(columnAlterations) {
			throw new Error("Alter columns is not yet supported in LanceDB Cloud.");
		}
		async dropColumns(columnNames) {
			throw new Error("Drop columns is not yet supported in LanceDB Cloud.");
		}
		withMiddleware(middleware) {
			const wrapped = this.clone();
			wrapped._client = wrapped._client.withMiddleware(middleware);
			return wrapped;
		}
		clone() {
			const clone = Object.create(RemoteTable.prototype);
			return Object.assign(clone, this);
		}
	};
	exports.RemoteTable = RemoteTable;
}));
//#endregion
//#region node_modules/vectordb/dist/embedding/openai.js
var require_openai = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.OpenAIEmbeddingFunction = void 0;
	var OpenAIEmbeddingFunction = class {
		constructor(sourceColumn, openAIKey, modelName = "text-embedding-ada-002") {
			/**
			* @type {import("openai").default}
			*/
			let Openai;
			try {
				Openai = require("openai");
			} catch {
				throw new Error("please install openai@^4.24.1 using npm install openai");
			}
			this.sourceColumn = sourceColumn;
			const configuration = { apiKey: openAIKey };
			this._openai = new Openai(configuration);
			this._modelName = modelName;
		}
		async embed(data) {
			const response = await this._openai.embeddings.create({
				model: this._modelName,
				input: data
			});
			const embeddings = [];
			for (let i = 0; i < response.data.length; i++) embeddings.push(response.data[i].embedding);
			return embeddings;
		}
	};
	exports.OpenAIEmbeddingFunction = OpenAIEmbeddingFunction;
}));
//#endregion
//#region node_modules/vectordb/dist/index.js
var require_dist = /* @__PURE__ */ require_chunk$1.__commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.MetricType = exports.isWriteOptions = exports.DefaultWriteOptions = exports.WriteMode = exports.LocalTable = exports.LocalConnection = exports.IndexStatus = exports.connect = exports.makeArrowTable = exports.convertToTable = exports.OpenAIEmbeddingFunction = exports.Query = void 0;
	var apache_arrow_1 = require_Arrow_node();
	var arrow_1 = require_arrow();
	var remote_1 = require_remote();
	var query_1 = require_query();
	Object.defineProperty(exports, "Query", {
		enumerable: true,
		get: function() {
			return query_1.Query;
		}
	});
	var embedding_function_1 = require_embedding_function();
	var util_1 = require_util();
	var { databaseNew, databaseTableNames, databaseOpenTable, databaseDropTable, tableCreate, tableAdd, tableCreateScalarIndex, tableCreateVectorIndex, tableCountRows, tableDelete, tableUpdate, tableMergeInsert, tableCleanupOldVersions, tableCompactFiles, tableListIndices, tableIndexStats, tableSchema, tableAddColumns, tableAlterColumns, tableDropColumns, tableDropIndex } = require_native();
	var openai_1 = require_openai();
	Object.defineProperty(exports, "OpenAIEmbeddingFunction", {
		enumerable: true,
		get: function() {
			return openai_1.OpenAIEmbeddingFunction;
		}
	});
	var arrow_2 = require_arrow();
	Object.defineProperty(exports, "convertToTable", {
		enumerable: true,
		get: function() {
			return arrow_2.convertToTable;
		}
	});
	Object.defineProperty(exports, "makeArrowTable", {
		enumerable: true,
		get: function() {
			return arrow_2.makeArrowTable;
		}
	});
	var defaultAwsRegion = "us-east-1";
	var defaultRequestTimeout = 1e4;
	function getAwsArgs(opts) {
		const callArgs = [];
		const awsCredentials = opts.awsCredentials;
		if (awsCredentials !== void 0) {
			callArgs.push(awsCredentials.accessKeyId);
			callArgs.push(awsCredentials.secretKey);
			callArgs.push(awsCredentials.sessionToken);
		} else callArgs.fill(void 0, 0, 3);
		callArgs.push(opts.awsRegion);
		return callArgs;
	}
	async function connect(arg) {
		let partOpts;
		if (typeof arg === "string") partOpts = { uri: arg };
		else {
			const keys = Object.keys(arg);
			if (keys.length === 1 && keys[0] === "uri" && typeof arg.uri === "string") partOpts = { uri: arg.uri };
			else partOpts = arg;
		}
		let defaultRegion = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION;
		defaultRegion = (defaultRegion ?? "").trim() !== "" ? defaultRegion : defaultAwsRegion;
		const opts = {
			uri: partOpts.uri ?? "",
			awsCredentials: partOpts.awsCredentials ?? void 0,
			awsRegion: partOpts.awsRegion ?? defaultRegion,
			apiKey: partOpts.apiKey ?? void 0,
			region: partOpts.region ?? defaultRegion,
			timeout: partOpts.timeout ?? defaultRequestTimeout,
			readConsistencyInterval: partOpts.readConsistencyInterval ?? void 0,
			storageOptions: partOpts.storageOptions ?? void 0,
			hostOverride: partOpts.hostOverride ?? void 0
		};
		if (opts.uri.startsWith("db://")) return new remote_1.RemoteConnection(opts);
		const storageOptions = opts.storageOptions ?? {};
		if (opts.awsCredentials?.accessKeyId !== void 0) storageOptions.aws_access_key_id = opts.awsCredentials.accessKeyId;
		if (opts.awsCredentials?.secretKey !== void 0) storageOptions.aws_secret_access_key = opts.awsCredentials.secretKey;
		if (opts.awsCredentials?.sessionToken !== void 0) storageOptions.aws_session_token = opts.awsCredentials.sessionToken;
		if (opts.awsRegion !== void 0) storageOptions.region = opts.awsRegion;
		const storageOptionsArr = Object.entries(storageOptions);
		return new LocalConnection(await databaseNew(opts.uri, storageOptionsArr, opts.readConsistencyInterval), opts);
	}
	exports.connect = connect;
	var IndexStatus;
	(function(IndexStatus) {
		IndexStatus["Pending"] = "pending";
		IndexStatus["Indexing"] = "indexing";
		IndexStatus["Done"] = "done";
		IndexStatus["Failed"] = "failed";
	})(IndexStatus || (exports.IndexStatus = IndexStatus = {}));
	/**
	* A connection to a LanceDB database.
	*/
	var LocalConnection = class {
		constructor(db, options) {
			this._options = () => options;
			this._db = db;
		}
		get uri() {
			return this._options().uri;
		}
		/**
		* Get the names of all tables in the database.
		*/
		async tableNames() {
			return databaseTableNames.call(this._db);
		}
		async openTable(name, embeddings) {
			const tbl = await databaseOpenTable.call(this._db, name);
			if (embeddings !== void 0) return new LocalTable(tbl, name, this._options(), embeddings);
			else return new LocalTable(tbl, name, this._options());
		}
		async createTable(name, data, optsOrEmbedding, opt) {
			if (typeof name === "string") {
				let writeOptions = new DefaultWriteOptions();
				if (opt !== void 0 && isWriteOptions(opt)) writeOptions = opt;
				else if (optsOrEmbedding !== void 0 && isWriteOptions(optsOrEmbedding)) writeOptions = optsOrEmbedding;
				let embeddings;
				if (optsOrEmbedding !== void 0 && (0, embedding_function_1.isEmbeddingFunction)(optsOrEmbedding)) embeddings = optsOrEmbedding;
				return await this.createTableImpl({
					name,
					data,
					embeddingFunction: embeddings,
					writeOptions
				});
			}
			return await this.createTableImpl(name);
		}
		async createTableImpl({ name, data, schema, embeddingFunction, writeOptions = new DefaultWriteOptions() }) {
			let buffer;
			function isEmpty(data) {
				if (data instanceof apache_arrow_1.Table) return data.data.length === 0;
				return data.length === 0;
			}
			if (data === void 0 || isEmpty(data)) {
				if (schema === void 0) throw new Error("Either data or schema needs to defined");
				buffer = await (0, arrow_1.fromTableToBuffer)((0, arrow_1.createEmptyTable)(schema));
			} else if (data instanceof apache_arrow_1.Table) buffer = await (0, arrow_1.fromTableToBuffer)(data, embeddingFunction, schema);
			else buffer = await (0, arrow_1.fromRecordsToBuffer)(data, embeddingFunction, schema);
			const tbl = await tableCreate.call(this._db, name, buffer, writeOptions?.writeMode?.toString(), ...getAwsArgs(this._options()));
			if (embeddingFunction !== void 0) return new LocalTable(tbl, name, this._options(), embeddingFunction);
			else return new LocalTable(tbl, name, this._options());
		}
		/**
		* Drop an existing table.
		* @param name The name of the table to drop.
		*/
		async dropTable(name) {
			await databaseDropTable.call(this._db, name);
		}
		withMiddleware(middleware) {
			return this;
		}
	};
	exports.LocalConnection = LocalConnection;
	var LocalTable = class {
		constructor(tbl, name, options, embeddings) {
			this.where = this.filter;
			this._tbl = tbl;
			this._name = name;
			this._embeddings = embeddings;
			this._options = () => options;
			this._isElectron = this.checkElectron();
		}
		get name() {
			return this._name;
		}
		/**
		* Creates a search query to find the nearest neighbors of the given search term
		* @param query The query search term
		*/
		search(query) {
			return new query_1.Query(query, this._tbl, this._embeddings);
		}
		/**
		* Creates a filter query to find all rows matching the specified criteria
		* @param value The filter criteria (like SQL where clause syntax)
		*/
		filter(value) {
			return new query_1.Query(void 0, this._tbl, this._embeddings).filter(value);
		}
		/**
		* Insert records into this Table.
		*
		* @param data Records to be inserted into the Table
		* @return The number of rows added to the table
		*/
		async add(data) {
			const schema = await this.schema;
			let tbl;
			if (data instanceof apache_arrow_1.Table) tbl = data;
			else tbl = (0, arrow_1.makeArrowTable)(data, {
				schema,
				embeddings: this._embeddings
			});
			return tableAdd.call(this._tbl, await (0, arrow_1.fromTableToBuffer)(tbl, this._embeddings, schema), WriteMode.Append.toString(), ...getAwsArgs(this._options())).then((newTable) => {
				this._tbl = newTable;
			});
		}
		/**
		* Insert records into this Table, replacing its contents.
		*
		* @param data Records to be inserted into the Table
		* @return The number of rows added to the table
		*/
		async overwrite(data) {
			let buffer;
			if (data instanceof apache_arrow_1.Table) buffer = await (0, arrow_1.fromTableToBuffer)(data, this._embeddings);
			else buffer = await (0, arrow_1.fromRecordsToBuffer)(data, this._embeddings);
			return tableAdd.call(this._tbl, buffer, WriteMode.Overwrite.toString(), ...getAwsArgs(this._options())).then((newTable) => {
				this._tbl = newTable;
			});
		}
		/**
		* Create an ANN index on this Table vector index.
		*
		* @param indexParams The parameters of this Index, @see VectorIndexParams.
		*/
		async createIndex(indexParams) {
			return tableCreateVectorIndex.call(this._tbl, indexParams).then((newTable) => {
				this._tbl = newTable;
			});
		}
		async createScalarIndex(column, replace) {
			if (replace === void 0) replace = true;
			return tableCreateScalarIndex.call(this._tbl, column, replace);
		}
		/**
		* Returns the number of rows in this table.
		*/
		async countRows(filter) {
			return tableCountRows.call(this._tbl, filter);
		}
		/**
		* Delete rows from this table.
		*
		* @param filter A filter in the same format used by a sql WHERE clause.
		*/
		async delete(filter) {
			return tableDelete.call(this._tbl, filter).then((newTable) => {
				this._tbl = newTable;
			});
		}
		/**
		* Update rows in this table.
		*
		* @param args see {@link UpdateArgs} and {@link UpdateSqlArgs} for more details
		*
		* @returns
		*/
		async update(args) {
			let filter;
			let updates;
			if ("valuesSql" in args) {
				filter = args.where ?? null;
				updates = args.valuesSql;
			} else {
				filter = args.where ?? null;
				updates = {};
				for (const [key, value] of Object.entries(args.values)) updates[key] = (0, util_1.toSQL)(value);
			}
			return tableUpdate.call(this._tbl, filter, updates).then((newTable) => {
				this._tbl = newTable;
			});
		}
		async mergeInsert(on, data, args) {
			let whenMatchedUpdateAll = false;
			let whenMatchedUpdateAllFilt = null;
			if (args.whenMatchedUpdateAll !== void 0 && args.whenMatchedUpdateAll !== null) {
				whenMatchedUpdateAll = true;
				if (args.whenMatchedUpdateAll !== true) whenMatchedUpdateAllFilt = args.whenMatchedUpdateAll;
			}
			const whenNotMatchedInsertAll = args.whenNotMatchedInsertAll ?? false;
			let whenNotMatchedBySourceDelete = false;
			let whenNotMatchedBySourceDeleteFilt = null;
			if (args.whenNotMatchedBySourceDelete !== void 0 && args.whenNotMatchedBySourceDelete !== null) {
				whenNotMatchedBySourceDelete = true;
				if (args.whenNotMatchedBySourceDelete !== true) whenNotMatchedBySourceDeleteFilt = args.whenNotMatchedBySourceDelete;
			}
			const schema = await this.schema;
			let tbl;
			if (data instanceof apache_arrow_1.Table) tbl = data;
			else tbl = (0, arrow_1.makeArrowTable)(data, { schema });
			const buffer = await (0, arrow_1.fromTableToBuffer)(tbl, this._embeddings, schema);
			this._tbl = await tableMergeInsert.call(this._tbl, on, whenMatchedUpdateAll, whenMatchedUpdateAllFilt, whenNotMatchedInsertAll, whenNotMatchedBySourceDelete, whenNotMatchedBySourceDeleteFilt, buffer);
		}
		/**
		* Clean up old versions of the table, freeing disk space.
		*
		* @param olderThan The minimum age in minutes of the versions to delete. If not
		*                  provided, defaults to two weeks.
		* @param deleteUnverified Because they may be part of an in-progress
		*                  transaction, uncommitted files newer than 7 days old are
		*                  not deleted by default. This means that failed transactions
		*                  can leave around data that takes up disk space for up to
		*                  7 days. You can override this safety mechanism by setting
		*                 this option to `true`, only if you promise there are no
		*                 in progress writes while you run this operation. Failure to
		*                 uphold this promise can lead to corrupted tables.
		* @returns
		*/
		async cleanupOldVersions(olderThan, deleteUnverified) {
			return tableCleanupOldVersions.call(this._tbl, olderThan, deleteUnverified).then((res) => {
				this._tbl = res.newTable;
				return res.metrics;
			});
		}
		/**
		* Run the compaction process on the table.
		*
		* This can be run after making several small appends to optimize the table
		* for faster reads.
		*
		* @param options Advanced options configuring compaction. In most cases, you
		*               can omit this arguments, as the default options are sensible
		*               for most tables.
		* @returns Metrics about the compaction operation.
		*/
		async compactFiles(options) {
			const optionsArg = options ?? {};
			return tableCompactFiles.call(this._tbl, optionsArg).then((res) => {
				this._tbl = res.newTable;
				return res.metrics;
			});
		}
		async listIndices() {
			return tableListIndices.call(this._tbl);
		}
		async indexStats(indexName) {
			return tableIndexStats.call(this._tbl, indexName);
		}
		get schema() {
			return this.getSchema();
		}
		async getSchema() {
			const buffer = await tableSchema.call(this._tbl, this._isElectron);
			return (0, apache_arrow_1.tableFromIPC)(buffer).schema;
		}
		checkElectron() {
			try {
				return Object.prototype.hasOwnProperty.call(process?.versions, "electron") || navigator?.userAgent?.toLowerCase()?.includes(" electron");
			} catch (e) {
				return false;
			}
		}
		async addColumns(newColumnTransforms) {
			return tableAddColumns.call(this._tbl, newColumnTransforms);
		}
		async alterColumns(columnAlterations) {
			return tableAlterColumns.call(this._tbl, columnAlterations);
		}
		async dropColumns(columnNames) {
			return tableDropColumns.call(this._tbl, columnNames);
		}
		async dropIndex(indexName) {
			return tableDropIndex.call(this._tbl, indexName);
		}
		withMiddleware(middleware) {
			return this;
		}
	};
	exports.LocalTable = LocalTable;
	/**
	* Write mode for writing a table.
	*/
	var WriteMode;
	(function(WriteMode) {
		/** Create a new {@link Table}. */
		WriteMode["Create"] = "create";
		/** Overwrite the existing {@link Table} if presented. */
		WriteMode["Overwrite"] = "overwrite";
		/** Append new data to the table. */
		WriteMode["Append"] = "append";
	})(WriteMode || (exports.WriteMode = WriteMode = {}));
	var DefaultWriteOptions = class {
		constructor() {
			this.writeMode = WriteMode.Create;
		}
	};
	exports.DefaultWriteOptions = DefaultWriteOptions;
	function isWriteOptions(value) {
		return Object.keys(value).length === 1 && (value.writeMode === void 0 || typeof value.writeMode === "string");
	}
	exports.isWriteOptions = isWriteOptions;
	/**
	* Distance metrics type.
	*/
	var MetricType;
	(function(MetricType) {
		/**
		* Euclidean distance
		*/
		MetricType["L2"] = "l2";
		/**
		* Cosine distance
		*/
		MetricType["Cosine"] = "cosine";
		/**
		* Dot product
		*/
		MetricType["Dot"] = "dot";
	})(MetricType || (exports.MetricType = MetricType = {}));
}));
//#endregion
Object.defineProperty(exports, "default", {
	enumerable: true,
	get: function() {
		return require_dist();
	}
});
