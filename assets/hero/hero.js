import { r as e, t } from "./rolldown-runtime-QGRDbDUS.js";
import { n, t as r } from "./jsx-runtime-s04k_HfJ.js";
import { t as i } from "./scheduler-oVI243f0.js";
import { n as a, t as o } from "./section-cards-06B1lzKw.js";
// node_modules/react-dom/cjs/react-dom.production.js
var s = /* @__PURE__ */ t(((e) => {
	var t = n();
	function r(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function i() {}
	var a = {
		d: {
			f: i,
			r: function() {
				throw Error(r(522));
			},
			D: i,
			C: i,
			L: i,
			m: i,
			X: i,
			S: i,
			M: i
		},
		p: 0,
		findDOMNode: null
	}, o = Symbol.for("react.portal"), s = Symbol.for("react.recoverable"), c = Symbol.for("react.optimistic_key");
	function l(e, t, n) {
		var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: o,
			key: r == null ? null : r === c ? c : "" + r,
			children: e,
			containerInfo: t,
			implementation: n
		};
	}
	var u = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function d(e, t) {
		if (e === "font") return "";
		if (typeof t == "string") return t === "use-credentials" ? t : "";
	}
	e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, e.browser = function(e) {
		return {
			$$typeof: s,
			_reason: e
		};
	}, e.createPortal = function(e, t) {
		var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
		if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) throw Error(r(299));
		return l(e, t, null, n);
	}, e.flushSync = function(e) {
		var t = u.T, n = a.p;
		try {
			if (u.T = null, a.p = 2, e) return e();
		} finally {
			u.T = t, a.p = n, a.d.f();
		}
	}, e.preconnect = function(e, t) {
		typeof e == "string" && (t ? (t = t.crossOrigin, t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null, a.d.C(e, t));
	}, e.prefetchDNS = function(e) {
		typeof e == "string" && a.d.D(e);
	}, e.preinit = function(e, t) {
		if (typeof e == "string" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin), i = typeof t.integrity == "string" ? t.integrity : void 0, o = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
			n === "style" ? a.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
				crossOrigin: r,
				integrity: i,
				fetchPriority: o
			}) : n === "script" && a.d.X(e, {
				crossOrigin: r,
				integrity: i,
				fetchPriority: o,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0
			});
		}
	}, e.preinitModule = function(e, t) {
		if (typeof e == "string") {
			if (typeof t == "object" && t) {
				if (t.as == null || t.as === "script") {
					var n = d(t.as, t.crossOrigin);
					a.d.M(e, {
						crossOrigin: n,
						integrity: typeof t.integrity == "string" ? t.integrity : void 0,
						nonce: typeof t.nonce == "string" ? t.nonce : void 0,
						fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
					});
				}
			} else t ?? a.d.M(e);
		}
	}, e.preload = function(e, t) {
		if (typeof e == "string" && typeof t == "object" && t && typeof t.as == "string") {
			var n = t.as, r = d(n, t.crossOrigin);
			a.d.L(e, n, {
				crossOrigin: r,
				integrity: typeof t.integrity == "string" ? t.integrity : void 0,
				nonce: typeof t.nonce == "string" ? t.nonce : void 0,
				type: typeof t.type == "string" ? t.type : void 0,
				fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
				referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
				imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
				imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
				media: typeof t.media == "string" ? t.media : void 0
			});
		}
	}, e.preloadModule = function(e, t) {
		if (typeof e == "string") {
			if (t) {
				var n = d(t.as, t.crossOrigin);
				a.d.m(e, {
					as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
					crossOrigin: n,
					integrity: typeof t.integrity == "string" ? t.integrity : void 0,
					nonce: typeof t.nonce == "string" ? t.nonce : void 0,
					fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0
				});
			} else a.d.m(e);
		}
	}, e.requestFormReset = function(e) {
		a.d.r(e);
	}, e.unstable_batchedUpdates = function(e, t) {
		return e(t);
	}, e.useFormState = function(e, t, n) {
		return u.H.useFormState(e, t, n);
	}, e.useFormStatus = function() {
		return u.H.useHostTransitionStatus();
	}, e.version = "19.3.1";
})), c = /* @__PURE__ */ t(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = s();
})), l = /* @__PURE__ */ t(((e) => {
	var t = i(), r = n(), a = c();
	function o(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
	}
	function s(e) {
		return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
	}
	function l(e) {
		for (var t = e, n = t; n && !n.alternate;) t = n, t.flags & 4098 && (e = t.return), n = t.return;
		for (; t.return;) t = t.return;
		return t.tag === 3 ? e : null;
	}
	function u(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function d(e) {
		if (e.tag === 31) {
			var t = e.memoizedState;
			if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
		}
		return null;
	}
	function f(e) {
		if (l(e) !== e) throw Error(o(188));
	}
	function p(e) {
		var t = e.alternate;
		if (!t) {
			if (t = l(e), t === null) throw Error(o(188));
			return t === e ? e : null;
		}
		for (var n = e, r = t;;) {
			var i = n.return;
			if (i === null) break;
			var a = i.alternate;
			if (a === null) {
				if (r = i.return, r !== null) {
					n = r;
					continue;
				}
				break;
			}
			if (i.child === a.child) {
				for (a = i.child; a;) {
					if (a === n) return f(i), e;
					if (a === r) return f(i), t;
					a = a.sibling;
				}
				throw Error(o(188));
			}
			if (n.return !== r.return) n = i, r = a;
			else {
				for (var s = !1, c = i.child; c;) {
					if (c === n) {
						s = !0, n = i, r = a;
						break;
					}
					if (c === r) {
						s = !0, r = i, n = a;
						break;
					}
					c = c.sibling;
				}
				if (!s) {
					for (c = a.child; c;) {
						if (c === n) {
							s = !0, n = a, r = i;
							break;
						}
						if (c === r) {
							s = !0, r = a, n = i;
							break;
						}
						c = c.sibling;
					}
					if (!s) throw Error(o(189));
				}
			}
			if (n.alternate !== r) throw Error(o(190));
		}
		if (n.tag !== 3) throw Error(o(188));
		return n.stateNode.current === n ? e : t;
	}
	function m(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null;) {
			if (t = m(e), t !== null) return t;
			e = e.sibling;
		}
		return null;
	}
	function h(e, t, n, r, i, a) {
		for (; e !== null;) {
			if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && h(e.child, t, n, r, i, a)) return !0;
			e = e.sibling;
		}
		return !1;
	}
	function g(e) {
		for (e = e.return; e !== null;) {
			if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
			e = e.return;
		}
		return null;
	}
	function _(e) {
		var t = !1;
		for (e = e.return; e !== null && (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) e = e.return;
		return t;
	}
	function v(e) {
		var t = [null, null], n = g(e);
		return n === null || y(t, e, n.child, { foundSelf: !1 }), t;
	}
	function y(e, t, n, r) {
		for (; n !== null;) {
			if (n === t) r.foundSelf = !0;
			else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
				if (r.foundSelf) return e[1] = n, !0;
				e[0] = n;
			} else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) return !0;
			n = n.sibling;
		}
		return !1;
	}
	function b(e) {
		switch (e.tag) {
			case 5:
			case 27:
			case 6: return e.stateNode;
			case 3: return e.stateNode.containerInfo;
			default: throw Error(o(559));
		}
	}
	var x = null, S = null;
	function ee(e, t, n) {
		return e === n || e === t && (x = e, !0);
	}
	function C(e, t, n) {
		return e === n ? (S = e, !1) : e === t && (S !== null && (x = e), !0);
	}
	function w(e) {
		if (e === null) return null;
		do
			e = e === null ? null : e.return;
		while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
		return e || null;
	}
	function T(e, t, n) {
		for (var r = 0, i = e; i; i = n(i)) r++;
		i = 0;
		for (var a = t; a; a = n(a)) i++;
		for (; 0 < r - i;) e = n(e), r--;
		for (; 0 < i - r;) t = n(t), i--;
		for (; r--;) {
			if (e === t || t !== null && e === t.alternate) return e;
			e = n(e), t = n(t);
		}
		return null;
	}
	var E = Object.assign, te = Symbol.for("react.element"), ne = Symbol.for("react.transitional.element"), re = Symbol.for("react.portal"), ie = Symbol.for("react.fragment"), ae = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), se = Symbol.for("react.consumer"), ce = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), pe = Symbol.for("react.activity"), me = Symbol.for("react.legacy_hidden"), he = Symbol.for("react.memo_cache_sentinel"), ge = Symbol.for("react.view_transition"), _e = Symbol.for("react.recoverable"), ve = Symbol.iterator;
	function ye(e) {
		return typeof e != "object" || !e ? null : (e = ve && e[ve] || e["@@iterator"], typeof e == "function" ? e : null);
	}
	var be = Symbol.for("react.client.reference");
	function xe(e) {
		if (e == null) return null;
		if (typeof e == "function") return e.$$typeof === be ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case ie: return "Fragment";
			case oe: return "Profiler";
			case ae: return "StrictMode";
			case le: return "Suspense";
			case ue: return "SuspenseList";
			case pe: return "Activity";
			case ge: return "ViewTransition";
		}
		if (typeof e == "object") switch (e.$$typeof) {
			case re: return "Portal";
			case ce: return e.displayName || "Context";
			case se: return (e._context.displayName || "Context") + ".Consumer";
			case D:
				var t = e.render;
				return e = e.displayName, e ||= (e = t.displayName || t.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
			case de: return t = e.displayName || null, t === null ? xe(e.type) || "Memo" : t;
			case fe:
				t = e._payload, e = e._init;
				try {
					return xe(e(t));
				} catch {}
		}
		return null;
	}
	var O = Array.isArray, k = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = {
		pending: !1,
		data: null,
		method: null,
		action: null
	}, Se = [], Ce = -1;
	function we(e) {
		return { current: e };
	}
	function Te(e) {
		0 > Ce || (e.current = Se[Ce], Se[Ce] = null, Ce--);
	}
	function M(e, t) {
		Ce++, Se[Ce] = e.current, e.current = t;
	}
	var Ee = we(null), De = we(null), Oe = we(null), ke = we(null);
	function Ae(e, t) {
		switch (M(Oe, t), M(De, e), M(Ee, null), t.nodeType) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
				break;
			default: if (e = t.tagName, t = t.namespaceURI) t = up(t), e = dp(t, e);
			else switch (e) {
				case "svg":
					e = 1;
					break;
				case "math":
					e = 2;
					break;
				default: e = 0;
			}
		}
		Te(Ee), M(Ee, e);
	}
	function je() {
		Te(Ee), Te(De), Te(Oe);
	}
	function Me(e) {
		var t = e.memoizedState;
		t !== null && (sh._currentValue = t.memoizedState, M(ke, e)), t = Ee.current;
		var n = dp(t, e.type);
		t !== n && (M(De, e), M(Ee, n));
	}
	function Ne(e) {
		De.current === e && (Te(Ee), Te(De)), ke.current === e && (Te(ke), sh._currentValue = j);
	}
	var Pe, Fe;
	function Ie(e) {
		if (Pe === void 0) try {
			throw Error();
		} catch (e) {
			var t = e.stack.trim().match(/\n( *(at )?)/);
			Pe = t && t[1] || "", Fe = -1 < e.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
		}
		return "\n" + Pe + e + Fe;
	}
	var Le = !1;
	function Re(e, t) {
		if (!e || Le) return "";
		Le = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var r = { DetermineComponentFrameRoot: function() {
				try {
					if (t) {
						var n = function() {
							throw Error();
						};
						if (Object.defineProperty(n.prototype, "props", { set: function() {
							throw Error();
						} }), typeof Reflect == "object" && Reflect.construct) {
							try {
								Reflect.construct(n, []);
							} catch (e) {
								var r = e;
							}
							Reflect.construct(e, [], n);
						} else {
							try {
								n.call();
							} catch (e) {
								r = e;
							}
							n = !1;
							try {
								var i = Object.getOwnPropertyDescriptor(e.prototype, "props");
								Object.defineProperty(e.prototype, "props", {
									configurable: !0,
									set: function() {
										throw Error();
									}
								}), n = !0, new e();
							} finally {
								n && (i === void 0 ? delete e.prototype.props : Object.defineProperty(e.prototype, "props", i));
							}
						}
					} else {
						try {
							throw Error();
						} catch (e) {
							r = e;
						}
						(n = e()) && typeof n.catch == "function" && n.catch(function() {});
					}
				} catch (e) {
					if (e && r && typeof e.stack == "string") return [e.stack, r.stack];
				}
				return [null, null];
			} };
			r.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, "name");
			i && i.configurable && Object.defineProperty(r.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
			var a = r.DetermineComponentFrameRoot(), o = a[0], s = a[1];
			if (o && s) {
				var c = o.split("\n"), l = s.split("\n");
				for (i = r = 0; r < c.length && !c[r].includes("DetermineComponentFrameRoot");) r++;
				for (; i < l.length && !l[i].includes("DetermineComponentFrameRoot");) i++;
				if (r === c.length || i === l.length) for (r = c.length - 1, i = l.length - 1; 1 <= r && 0 <= i && c[r] !== l[i];) i--;
				for (; 1 <= r && 0 <= i; r--, i--) if (c[r] !== l[i]) {
					if (r !== 1 || i !== 1) do
						if (r--, i--, 0 > i || c[r] !== l[i]) {
							var u = "\n" + c[r].replace(" at new ", " at ");
							return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u;
						}
					while (1 <= r && 0 <= i);
					break;
				}
			}
		} finally {
			Le = !1, Error.prepareStackTrace = n;
		}
		return (n = e ? e.displayName || e.name : "") ? Ie(n) : "";
	}
	function ze(e, t) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5: return Ie(e.type);
			case 16: return Ie("Lazy");
			case 13: return e.child !== t && t !== null ? Ie("Suspense Fallback") : Ie("Suspense");
			case 19: return Ie("SuspenseList");
			case 0:
			case 15: return Re(e.type, !1);
			case 11: return Re(e.type.render, !1);
			case 1: return Re(e.type, !0);
			case 31: return Ie("Activity");
			case 30: return Ie("ViewTransition");
			default: return "";
		}
	}
	function Be(e) {
		try {
			var t = "", n = null;
			do
				t += ze(e, n), n = e, e = e.return;
			while (e);
			return t;
		} catch (e) {
			return "\nError generating stack: " + e.message + "\n" + e.stack;
		}
	}
	var Ve = Object.prototype.hasOwnProperty, He = t.unstable_scheduleCallback, Ue = t.unstable_cancelCallback, We = t.unstable_shouldYield, N = t.unstable_requestPaint, Ge = t.unstable_now, Ke = t.unstable_getCurrentPriorityLevel, qe = t.unstable_ImmediatePriority, Je = t.unstable_UserBlockingPriority, Ye = t.unstable_NormalPriority, Xe = t.unstable_LowPriority, Ze = t.unstable_IdlePriority, Qe = t.log, $e = t.unstable_setDisableYieldValue, et = null, tt = null;
	function nt(e) {
		if (typeof Qe == "function" && $e(e), tt && typeof tt.setStrictMode == "function") try {
			tt.setStrictMode(et, e);
		} catch {}
	}
	var rt = Math.clz32 ? Math.clz32 : ot, it = Math.log, at = Math.LN2;
	function ot(e) {
		return e >>>= 0, e === 0 ? 32 : 31 - (it(e) / at | 0) | 0;
	}
	var st = 256, ct = 262144, lt = 4194304;
	function ut(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1: return 1;
			case 2: return 2;
			case 4: return 4;
			case 8: return 8;
			case 16: return 16;
			case 32: return 32;
			case 64: return 64;
			case 128: return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072: return e & -e;
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return e & 3932160;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return e & 62914560;
			case 67108864: return 67108864;
			case 134217728: return 134217728;
			case 268435456: return 268435456;
			case 536870912: return 536870912;
			case 1073741824: return 0;
			default: return e;
		}
	}
	function dt(e, t, n) {
		var r = e.pendingLanes;
		if (r === 0) return 0;
		var i = 0, a = e.suspendedLanes, o = e.pingedLanes;
		e = e.warmLanes;
		var s = r & 134217727;
		return s === 0 ? (s = r & ~a, s === 0 ? o === 0 ? n || (n = r & ~e, n !== 0 && (i = ut(n))) : i = ut(o) : i = ut(s)) : (r = s & ~a, r === 0 ? (o &= s, o === 0 ? n || (n = s & ~e, n !== 0 && (i = ut(n))) : i = ut(o)) : i = ut(r)), i === 0 ? 0 : t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048) ? t : i;
	}
	function ft(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function pt(e, t) {
		t & 8 && (t |= t & 32);
		var n = e.entangledLanes;
		if (n !== 0) for (e = e.entanglements, n &= t; 0 < n;) {
			var r = 31 - rt(n), i = 1 << r;
			t |= e[r], n &= ~i;
		}
		return t;
	}
	function mt(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64: return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152: return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432: return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824: return -1;
			default: return -1;
		}
	}
	function ht() {
		var e = lt;
		return lt <<= 1, !(lt & 62914560) && (lt = 4194304), e;
	}
	function gt(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function _t(e, t) {
		e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
	}
	function P(e, t, n, r, i, a) {
		var o = e.pendingLanes;
		e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
		var s = e.entanglements, c = e.expirationTimes, l = e.hiddenUpdates;
		for (n = o & ~n; 0 < n;) {
			var u = 31 - rt(n), d = 1 << u;
			s[u] = 0, c[u] = -1;
			var f = l[u];
			if (f !== null) for (l[u] = null, u = 0; u < f.length; u++) {
				var p = f[u];
				p !== null && (p.lane &= -536870913);
			}
			n &= ~d;
		}
		r !== 0 && vt(e, r, 0), a !== 0 && i === 0 && e.tag !== 0 && (e.suspendedLanes |= a & ~(o & ~t));
	}
	function vt(e, t, n) {
		e.pendingLanes |= t, e.suspendedLanes &= ~t;
		var r = 31 - rt(t);
		e.entangledLanes |= t, e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
	}
	function yt(e, t) {
		var n = e.entangledLanes |= t;
		for (e = e.entanglements; n;) {
			var r = 31 - rt(n), i = 1 << r;
			i & t | e[r] & t && (e[r] |= t), n &= ~i;
		}
	}
	function bt(e, t) {
		var n = t & -t;
		return n = n & 42 ? 1 : xt(n), (n & (e.suspendedLanes | t)) === 0 ? n : 0;
	}
	function xt(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default: e = 0;
		}
		return e;
	}
	function St(e) {
		return e &= -e, 2 < e ? 8 < e ? e & 134217727 ? 32 : 268435456 : 8 : 2;
	}
	function Ct() {
		var e = A.p;
		return e === 0 ? (e = window.event, e === void 0 ? 32 : Ch(e.type)) : e;
	}
	function wt(e, t) {
		var n = A.p;
		try {
			return A.p = e, t();
		} finally {
			A.p = n;
		}
	}
	var Tt = Math.random().toString(36).slice(2), Et = "__reactFiber$" + Tt, Dt = "__reactProps$" + Tt, Ot = "__reactContainer$" + Tt, kt = "__reactEvents$" + Tt, At = "__reactListeners$" + Tt, jt = "__reactHandles$" + Tt, Mt = "__reactResources$" + Tt, Nt = "__reactMarker$" + Tt, Pt = "__reactLoad$" + Tt;
	function Ft(e) {
		delete e[Et], delete e[Dt], delete e[At], delete e[jt];
	}
	function It(e) {
		var t;
		if (t = e[Et]) return t;
		for (var n = e.parentNode; n;) {
			if (t = n[Ot] || n[Et]) {
				if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = fm(e); e !== null;) {
					if (n = e[Et]) return n;
					e = fm(e);
				}
				return t;
			}
			e = n, n = e.parentNode;
		}
		return null;
	}
	function Lt(e) {
		if (e = e[Et] || e[Ot]) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
		}
		return null;
	}
	function F(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(o(33));
	}
	function Rt(e) {
		var t = e[Mt];
		return t ||= e[Mt] = {
			hoistableStyles: /* @__PURE__ */ new Map(),
			hoistableScripts: /* @__PURE__ */ new Map()
		}, t;
	}
	function zt(e) {
		e[Nt] = !0;
	}
	function Bt(e) {
		e[Pt] = void 0;
	}
	var Vt = /* @__PURE__ */ new Set(), Ht = {};
	function Ut(e, t) {
		Wt(e, t), Wt(e + "Capture", t);
	}
	function Wt(e, t) {
		for (Ht[e] = t, e = 0; e < t.length; e++) Vt.add(t[e]);
	}
	var Gt = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Kt = {}, qt = {};
	function Jt(e) {
		return Ve.call(qt, e) ? !0 : Ve.call(Kt, e) ? !1 : Gt.test(e) ? qt[e] = !0 : (Kt[e] = !0, !1);
	}
	var I = !1;
	function Yt() {
		var e = I;
		return I = !1, e;
	}
	function Xt(e, t, n) {
		if (Jt(t)) {
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean":
						var r = t.toLowerCase().slice(0, 5);
						if (r !== "data-" && r !== "aria-") {
							e.removeAttribute(t);
							return;
						}
				}
				e.setAttribute(t, n);
			}
		}
	}
	function Zt(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, n);
		}
	}
	function Qt(e, t, n, r) {
		if (r === null) e.removeAttribute(n);
		else {
			switch (typeof r) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, r);
		}
	}
	function $t(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined": return e;
			case "object": return e;
			default: return "";
		}
	}
	function en(e) {
		var t = e.type;
		return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
	}
	function tn(e, t, n) {
		var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
		if (!e.hasOwnProperty(t) && r !== void 0 && typeof r.get == "function" && typeof r.set == "function") {
			var i = r.get, a = r.set;
			return Object.defineProperty(e, t, {
				configurable: !0,
				get: function() {
					return i.call(this);
				},
				set: function(e) {
					n = "" + e, a.call(this, e);
				}
			}), Object.defineProperty(e, t, { enumerable: r.enumerable }), {
				getValue: function() {
					return n;
				},
				setValue: function(e) {
					n = "" + e;
				},
				stopTracking: function() {
					e._valueTracker = null, delete e[t];
				}
			};
		}
	}
	function nn(e) {
		if (!e._valueTracker) {
			var t = en(e) ? "checked" : "value";
			e._valueTracker = tn(e, t, "" + e[t]);
		}
	}
	function rn(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(), r = "";
		return e && (r = en(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n && (t.setValue(e), !0);
	}
	var an = /[\n"\\]/g;
	function on(e) {
		return e.replace(an, function(e) {
			return "\\" + e.charCodeAt(0).toString(16) + " ";
		});
	}
	function sn(e, t, n, r, i, a, o, s) {
		e.name = "", o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.type = o : e.removeAttribute("type"), t == null ? o !== "submit" && o !== "reset" || e.removeAttribute("value") : o === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + $t(t)) : e.value !== "" + $t(t) && (e.value = "" + $t(t)), t == null ? n == null ? r != null && e.removeAttribute("value") : ln(e, $t(n)) : o === "number" && e.value == t ? ln(e, $t(e.value)) : ln(e, $t(t)), i == null && a != null && (e.defaultChecked = !!a), i != null && (e.checked = i && typeof i != "function" && typeof i != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + $t(s) : e.removeAttribute("name");
	}
	function cn(e, t, n, r, i, a, o, s) {
		if (a != null && typeof a != "function" && typeof a != "symbol" && typeof a != "boolean" && (e.type = a), t != null || n != null) {
			if (!(a !== "submit" && a !== "reset" || t != null)) {
				nn(e);
				return;
			}
			n = n == null ? "" : "" + $t(n), t = t == null ? n : "" + $t(t), s || t === e.value || (e.value = t), e.defaultValue = t;
		}
		r ??= i, r = typeof r != "function" && typeof r != "symbol" && !!r, e.checked = s ? e.checked : !!r, e.defaultChecked = !!r, o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" && (e.name = o), nn(e);
	}
	function ln(e, t) {
		e.defaultValue !== "" + t && (e.defaultValue = "" + t);
	}
	function un(e, t, n, r) {
		if (e = e.options, t) {
			t = {};
			for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
			for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + $t(n), t = null, i = 0; i < e.length; i++) {
				if (e[i].value === n) {
					e[i].selected = !0, r && (e[i].defaultSelected = !0);
					return;
				}
				t !== null || e[i].disabled || (t = e[i]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function dn(e, t, n) {
		t != null && (t = "" + $t(t), t !== e.value && (e.value = t), n == null) ? e.defaultValue !== t && (e.defaultValue = t) : e.defaultValue = n == null ? "" : "" + $t(n);
	}
	function fn(e, t, n, r) {
		if (t == null) {
			if (r != null) {
				if (n != null) throw Error(o(92));
				if (O(r)) {
					if (1 < r.length) throw Error(o(93));
					r = r[0];
				}
				n = r;
			}
			n ??= "", t = n;
		}
		n = $t(t), e.defaultValue = n, r = e.textContent, r === n && r !== "" && r !== null && (e.value = r), nn(e);
	}
	function pn(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var mn = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
	function hn(e, t, n) {
		var r = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === "" ? r ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : r ? e.setProperty(t, n) : typeof n != "number" || n === 0 || mn.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
	}
	function gn(e, t, n) {
		if (t != null && typeof t != "object") throw Error(o(62));
		if (e = e.style, n != null) {
			for (var r in n) !n.hasOwnProperty(r) || t != null && t.hasOwnProperty(r) || (r.indexOf("--") === 0 ? e.setProperty(r, "") : r === "float" ? e.cssFloat = "" : e[r] = "", I = !0);
			for (var i in t) r = t[i], t.hasOwnProperty(i) && n[i] !== r && (hn(e, i, r), I = !0);
		} else for (var a in t) t.hasOwnProperty(a) && hn(e, a, t[a]);
	}
	function _n(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph": return !1;
			default: return !0;
		}
	}
	var vn = /* @__PURE__ */ new Map([
		["acceptCharset", "accept-charset"],
		["htmlFor", "for"],
		["httpEquiv", "http-equiv"],
		["crossOrigin", "crossorigin"],
		["accentHeight", "accent-height"],
		["alignmentBaseline", "alignment-baseline"],
		["arabicForm", "arabic-form"],
		["baselineShift", "baseline-shift"],
		["capHeight", "cap-height"],
		["clipPath", "clip-path"],
		["clipRule", "clip-rule"],
		["colorInterpolation", "color-interpolation"],
		["colorInterpolationFilters", "color-interpolation-filters"],
		["colorProfile", "color-profile"],
		["colorRendering", "color-rendering"],
		["dominantBaseline", "dominant-baseline"],
		["enableBackground", "enable-background"],
		["fillOpacity", "fill-opacity"],
		["fillRule", "fill-rule"],
		["floodColor", "flood-color"],
		["floodOpacity", "flood-opacity"],
		["fontFamily", "font-family"],
		["fontSize", "font-size"],
		["fontSizeAdjust", "font-size-adjust"],
		["fontStretch", "font-stretch"],
		["fontStyle", "font-style"],
		["fontVariant", "font-variant"],
		["fontWeight", "font-weight"],
		["glyphName", "glyph-name"],
		["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
		["glyphOrientationVertical", "glyph-orientation-vertical"],
		["horizAdvX", "horiz-adv-x"],
		["horizOriginX", "horiz-origin-x"],
		["imageRendering", "image-rendering"],
		["letterSpacing", "letter-spacing"],
		["lightingColor", "lighting-color"],
		["markerEnd", "marker-end"],
		["markerMid", "marker-mid"],
		["markerStart", "marker-start"],
		["maskType", "mask-type"],
		["overlinePosition", "overline-position"],
		["overlineThickness", "overline-thickness"],
		["paintOrder", "paint-order"],
		["panose-1", "panose-1"],
		["pointerEvents", "pointer-events"],
		["renderingIntent", "rendering-intent"],
		["shapeRendering", "shape-rendering"],
		["stopColor", "stop-color"],
		["stopOpacity", "stop-opacity"],
		["strikethroughPosition", "strikethrough-position"],
		["strikethroughThickness", "strikethrough-thickness"],
		["strokeDasharray", "stroke-dasharray"],
		["strokeDashoffset", "stroke-dashoffset"],
		["strokeLinecap", "stroke-linecap"],
		["strokeLinejoin", "stroke-linejoin"],
		["strokeMiterlimit", "stroke-miterlimit"],
		["strokeOpacity", "stroke-opacity"],
		["strokeWidth", "stroke-width"],
		["textAnchor", "text-anchor"],
		["textDecoration", "text-decoration"],
		["textRendering", "text-rendering"],
		["transformOrigin", "transform-origin"],
		["underlinePosition", "underline-position"],
		["underlineThickness", "underline-thickness"],
		["unicodeBidi", "unicode-bidi"],
		["unicodeRange", "unicode-range"],
		["unitsPerEm", "units-per-em"],
		["vAlphabetic", "v-alphabetic"],
		["vHanging", "v-hanging"],
		["vIdeographic", "v-ideographic"],
		["vMathematical", "v-mathematical"],
		["vectorEffect", "vector-effect"],
		["vertAdvY", "vert-adv-y"],
		["vertOriginX", "vert-origin-x"],
		["vertOriginY", "vert-origin-y"],
		["wordSpacing", "word-spacing"],
		["writingMode", "writing-mode"],
		["xmlnsXlink", "xmlns:xlink"],
		["xHeight", "x-height"]
	]), yn = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function bn(e) {
		return yn.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
	}
	function xn() {}
	var Sn = null;
	function Cn(e) {
		return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
	}
	var wn = null, Tn = null;
	function En(e) {
		var t = Lt(e);
		if (t && (e = t.stateNode)) {
			var n = e[Dt] || null;
			a: switch (e = t.stateNode, t.type) {
				case "input":
					if (sn(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), t = n.name, n.type === "radio" && t != null) {
						for (n = e; n.parentNode;) n = n.parentNode;
						for (n = n.querySelectorAll("input[name=\"" + on("" + t) + "\"][type=\"radio\"]"), t = 0; t < n.length; t++) {
							var r = n[t];
							if (r !== e && r.form === e.form) {
								var i = r[Dt] || null;
								if (!i) throw Error(o(90));
								sn(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
							}
						}
						for (t = 0; t < n.length; t++) r = n[t], r.form === e.form && rn(r);
					}
					break a;
				case "textarea":
					dn(e, n.value, n.defaultValue);
					break a;
				case "select": t = n.value, t != null && un(e, !!n.multiple, t, !1);
			}
		}
	}
	var Dn = !1;
	function On(e, t, n) {
		if (Dn) return e(t, n);
		Dn = !0;
		try {
			return e(t);
		} finally {
			if (Dn = !1, (wn !== null || Tn !== null) && (zd(), wn && (t = wn, e = Tn, Tn = wn = null, En(t), e))) for (t = 0; t < e.length; t++) En(e[t]);
		}
	}
	function kn(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var r = n[Dt] || null;
		if (r === null) return null;
		n = r[t];
		a: switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(r = !r.disabled) || (e = e.type, r = e !== "button" && e !== "input" && e !== "select" && e !== "textarea"), e = !r;
				break a;
			default: e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(o(231, t, typeof n));
		return n;
	}
	var An = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0, jn = !1;
	if (An) try {
		var Mn = {};
		Object.defineProperty(Mn, "passive", { get: function() {
			jn = !0;
		} }), window.addEventListener("test", Mn, Mn), window.removeEventListener("test", Mn, Mn);
	} catch {
		jn = !1;
	}
	var Nn = null, Pn = null, Fn = null;
	function In() {
		if (Fn) return Fn;
		var e, t = Pn, n = t.length, r, i = "value" in Nn ? Nn.value : Nn.textContent, a = i.length;
		for (e = 0; e < n && t[e] === i[e]; e++);
		var o = n - e;
		for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
		return Fn = i.slice(e, 1 < r ? 1 - r : void 0);
	}
	function Ln(e) {
		var t = e.keyCode;
		return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
	}
	function Rn() {
		return !0;
	}
	function zn() {
		return !1;
	}
	function Bn(e) {
		function t(t, n, r, i, a) {
			for (var o in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(i) : i[o]);
			return this.isDefaultPrevented = (i.defaultPrevented == null ? !1 === i.returnValue : i.defaultPrevented) ? Rn : zn, this.isPropagationStopped = zn, this;
		}
		return E(t.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Rn);
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Rn);
			},
			persist: function() {},
			isPersistent: Rn
		}), t;
	}
	var Vn = {
		eventPhase: 0,
		bubbles: 0,
		cancelable: 0,
		timeStamp: function(e) {
			return e.timeStamp || Date.now();
		},
		defaultPrevented: 0,
		isTrusted: 0
	}, Hn = Bn(Vn), Un = E({}, Vn, {
		view: 0,
		detail: 0
	}), Wn = Bn(Un), Gn, Kn, qn, Jn = E({}, Un, {
		screenX: 0,
		screenY: 0,
		clientX: 0,
		clientY: 0,
		pageX: 0,
		pageY: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		getModifierState: ar,
		button: 0,
		buttons: 0,
		relatedTarget: function(e) {
			return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
		},
		movementX: function(e) {
			return "movementX" in e ? e.movementX : (e !== qn && (qn && e.type === "mousemove" ? (Gn = e.screenX - qn.screenX, Kn = e.screenY - qn.screenY) : Kn = Gn = 0, qn = e), Gn);
		},
		movementY: function(e) {
			return "movementY" in e ? e.movementY : Kn;
		}
	}), Yn = Bn(Jn), Xn = Bn(E({}, Jn, { dataTransfer: 0 })), Zn = Bn(E({}, Un, { relatedTarget: 0 })), Qn = Bn(E({}, Vn, {
		animationName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), $n = Bn(E({}, Vn, { clipboardData: function(e) {
		return "clipboardData" in e ? e.clipboardData : window.clipboardData;
	} })), er = Bn(E({}, Vn, { data: 0 })), tr = {
		Esc: "Escape",
		Spacebar: " ",
		Left: "ArrowLeft",
		Up: "ArrowUp",
		Right: "ArrowRight",
		Down: "ArrowDown",
		Del: "Delete",
		Win: "OS",
		Menu: "ContextMenu",
		Apps: "ContextMenu",
		Scroll: "ScrollLock",
		MozPrintableKey: "Unidentified"
	}, nr = {
		8: "Backspace",
		9: "Tab",
		12: "Clear",
		13: "Enter",
		16: "Shift",
		17: "Control",
		18: "Alt",
		19: "Pause",
		20: "CapsLock",
		27: "Escape",
		32: " ",
		33: "PageUp",
		34: "PageDown",
		35: "End",
		36: "Home",
		37: "ArrowLeft",
		38: "ArrowUp",
		39: "ArrowRight",
		40: "ArrowDown",
		45: "Insert",
		46: "Delete",
		112: "F1",
		113: "F2",
		114: "F3",
		115: "F4",
		116: "F5",
		117: "F6",
		118: "F7",
		119: "F8",
		120: "F9",
		121: "F10",
		122: "F11",
		123: "F12",
		144: "NumLock",
		145: "ScrollLock",
		224: "Meta"
	}, rr = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	function ir(e) {
		var t = this.nativeEvent;
		return t.getModifierState ? t.getModifierState(e) : (e = rr[e]) ? !!t[e] : !1;
	}
	function ar() {
		return ir;
	}
	var or = Bn(E({}, Un, {
		key: function(e) {
			if (e.key) {
				var t = tr[e.key] || e.key;
				if (t !== "Unidentified") return t;
			}
			return e.type === "keypress" ? (e = Ln(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? nr[e.keyCode] || "Unidentified" : "";
		},
		code: 0,
		location: 0,
		ctrlKey: 0,
		shiftKey: 0,
		altKey: 0,
		metaKey: 0,
		repeat: 0,
		locale: 0,
		getModifierState: ar,
		charCode: function(e) {
			return e.type === "keypress" ? Ln(e) : 0;
		},
		keyCode: function(e) {
			return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		},
		which: function(e) {
			return e.type === "keypress" ? Ln(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
		}
	})), sr = Bn(E({}, Jn, {
		pointerId: 0,
		width: 0,
		height: 0,
		pressure: 0,
		tangentialPressure: 0,
		tiltX: 0,
		tiltY: 0,
		twist: 0,
		pointerType: 0,
		isPrimary: 0
	})), cr = Bn(E({}, Vn, { submitter: 0 })), lr = Bn(E({}, Un, {
		touches: 0,
		targetTouches: 0,
		changedTouches: 0,
		altKey: 0,
		metaKey: 0,
		ctrlKey: 0,
		shiftKey: 0,
		getModifierState: ar
	})), ur = Bn(E({}, Vn, {
		propertyName: 0,
		elapsedTime: 0,
		pseudoElement: 0
	})), dr = Bn(E({}, Jn, {
		deltaX: function(e) {
			return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
		},
		deltaY: function(e) {
			return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
		},
		deltaZ: 0,
		deltaMode: 0
	})), fr = Bn(E({}, Vn, {
		newState: 0,
		oldState: 0,
		source: 0
	})), pr = [
		9,
		13,
		27,
		32
	], mr = An && "CompositionEvent" in window, hr = null;
	An && "documentMode" in document && (hr = document.documentMode);
	var gr = An && "TextEvent" in window && !hr, _r = An && (!mr || hr && 8 < hr && 11 >= hr), vr = " ", yr = !1;
	function br(e, t) {
		switch (e) {
			case "keyup": return pr.indexOf(t.keyCode) !== -1;
			case "keydown": return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout": return !0;
			default: return !1;
		}
	}
	function xr(e) {
		return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
	}
	var Sr = !1;
	function Cr(e, t) {
		switch (e) {
			case "compositionend": return xr(t);
			case "keypress": return t.which === 32 ? (yr = !0, vr) : null;
			case "textInput": return e = t.data, e === vr && yr ? null : e;
			default: return null;
		}
	}
	function wr(e, t) {
		if (Sr) return e === "compositionend" || !mr && br(e, t) ? (e = In(), Fn = Pn = Nn = null, Sr = !1, e) : null;
		switch (e) {
			case "paste": return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend": return _r && t.locale !== "ko" ? null : t.data;
			default: return null;
		}
	}
	var Tr = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	function Er(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Tr[e.type] : t === "textarea";
	}
	function Dr(e, t, n, r) {
		wn ? Tn ? Tn.push(r) : Tn = [r] : wn = r, t = Jf(t, "onChange"), 0 < t.length && (n = new Hn("onChange", "change", null, n, r), e.push({
			event: n,
			listeners: t
		}));
	}
	var Or = null, kr = null;
	function Ar(e) {
		Vf(e, 0);
	}
	function jr(e) {
		if (rn(F(e))) return e;
	}
	function Mr(e, t) {
		if (e === "change") return t;
	}
	var Nr = !1;
	if (An) {
		var Pr;
		if (An) {
			var Fr = "oninput" in document;
			if (!Fr) {
				var Ir = document.createElement("div");
				Ir.setAttribute("oninput", "return;"), Fr = typeof Ir.oninput == "function";
			}
			Pr = Fr;
		} else Pr = !1;
		Nr = Pr && (!document.documentMode || 9 < document.documentMode);
	}
	function Lr() {
		Or && (Or.detachEvent("onpropertychange", Rr), kr = Or = null);
	}
	function Rr(e) {
		if (e.propertyName === "value" && jr(kr)) {
			var t = [];
			Dr(t, kr, e, Cn(e)), On(Ar, t);
		}
	}
	function zr(e, t, n) {
		e === "focusin" ? (Lr(), Or = t, kr = n, Or.attachEvent("onpropertychange", Rr)) : e === "focusout" && Lr();
	}
	function Br(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown") return jr(kr);
	}
	function Vr(e, t) {
		if (e === "click") return jr(t);
	}
	function Hr(e, t) {
		if (e === "input" || e === "change") return jr(t);
	}
	function Ur(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var Wr = typeof Object.is == "function" ? Object.is : Ur;
	function Gr(e, t) {
		if (Wr(e, t)) return !0;
		if (typeof e != "object" || !e || typeof t != "object" || !t) return !1;
		var n = Object.keys(e), r = Object.keys(t);
		if (n.length !== r.length) return !1;
		for (r = 0; r < n.length; r++) {
			var i = n[r];
			if (!Ve.call(t, i) || !Wr(e[i], t[i])) return !1;
		}
		return !0;
	}
	function Kr(e) {
		if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	function qr(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e;
	}
	function Jr(e, t) {
		var n = qr(e);
		e = 0;
		for (var r; n;) {
			if (n.nodeType === 3) {
				if (r = e + n.textContent.length, e <= t && r >= t) return {
					node: n,
					offset: t - e
				};
				e = r;
			}
			a: {
				for (; n;) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break a;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = qr(n);
		}
	}
	function Yr(e, t) {
		return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Yr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
	}
	function Xr(e) {
		e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
		for (var t = Kr(e.document); t instanceof e.HTMLIFrameElement;) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Kr(e.document);
		}
		return t;
	}
	function Zr(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
	}
	var Qr = An && "documentMode" in document && 11 >= document.documentMode, $r = null, ei = null, ti = null, ni = !1;
	function ri(e, t, n) {
		var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		ni || $r == null || $r !== Kr(r) || (r = $r, "selectionStart" in r && Zr(r) ? r = {
			start: r.selectionStart,
			end: r.selectionEnd
		} : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
			anchorNode: r.anchorNode,
			anchorOffset: r.anchorOffset,
			focusNode: r.focusNode,
			focusOffset: r.focusOffset
		}), ti && Gr(ti, r) || (ti = r, r = Jf(ei, "onSelect"), 0 < r.length && (t = new Hn("onSelect", "select", null, t, n), e.push({
			event: t,
			listeners: r
		}), t.target = $r)));
	}
	function ii(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
	}
	var ai = {
		animationend: ii("Animation", "AnimationEnd"),
		animationiteration: ii("Animation", "AnimationIteration"),
		animationstart: ii("Animation", "AnimationStart"),
		transitionrun: ii("Transition", "TransitionRun"),
		transitionstart: ii("Transition", "TransitionStart"),
		transitioncancel: ii("Transition", "TransitionCancel"),
		transitionend: ii("Transition", "TransitionEnd")
	}, oi = {}, si = {};
	An && (si = document.createElement("div").style, "AnimationEvent" in window || (delete ai.animationend.animation, delete ai.animationiteration.animation, delete ai.animationstart.animation), "TransitionEvent" in window || delete ai.transitionend.transition);
	function ci(e) {
		if (oi[e]) return oi[e];
		if (!ai[e]) return e;
		var t = ai[e], n;
		for (n in t) if (t.hasOwnProperty(n) && n in si) return oi[e] = t[n];
		return e;
	}
	var li = ci("animationend"), ui = ci("animationiteration"), di = ci("animationstart"), fi = ci("transitionrun"), pi = ci("transitionstart"), mi = ci("transitioncancel"), hi = ci("transitionend"), gi = /* @__PURE__ */ new Map(), _i = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	_i.push("scrollEnd");
	function vi(e, t) {
		gi.set(e, t), Ut(t, [e]);
	}
	var yi = 0;
	function bi(e, t) {
		if (e.name != null && e.name !== "auto") return e.name;
		if (t.autoName !== null) return t.autoName;
		e = bd.identifierPrefix;
		var n = yi++;
		return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
	}
	function xi(e) {
		if (e == null || typeof e == "string") return e;
		var t = null, n = Od;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = e[n[r]];
			if (i != null) {
				if (i === "none") return "none";
				t = t == null ? i : t + (" " + i);
			}
		}
		return t ?? e.default;
	}
	function Si(e, t) {
		return e = xi(e), t = xi(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
	}
	var Ci = typeof reportError == "function" ? reportError : function(e) {
		if (typeof window == "object" && typeof window.ErrorEvent == "function") {
			var t = new window.ErrorEvent("error", {
				bubbles: !0,
				cancelable: !0,
				message: typeof e == "object" && e && typeof e.message == "string" ? String(e.message) : String(e),
				error: e
			});
			if (!window.dispatchEvent(t)) return;
		} else if (typeof process == "object" && typeof process.emit == "function") {
			process.emit("uncaughtException", e);
			return;
		}
		console.error(e);
	}, wi = [], Ti = 0, Ei = 0;
	function Di() {
		for (var e = Ti, t = Ei = Ti = 0; t < e;) {
			var n = wi[t];
			wi[t++] = null;
			var r = wi[t];
			wi[t++] = null;
			var i = wi[t];
			wi[t++] = null;
			var a = wi[t];
			if (wi[t++] = null, r !== null && i !== null) {
				var o = r.pending;
				o === null ? i.next = i : (i.next = o.next, o.next = i), r.pending = i;
			}
			a !== 0 && ji(n, i, a);
		}
	}
	function Oi(e, t, n, r) {
		wi[Ti++] = e, wi[Ti++] = t, wi[Ti++] = n, wi[Ti++] = r, Ei |= r, e.lanes |= r, e = e.alternate, e !== null && (e.lanes |= r);
	}
	function ki(e, t, n, r) {
		return Oi(e, t, n, r), Mi(e);
	}
	function Ai(e, t) {
		return Oi(e, null, null, t), Mi(e);
	}
	function ji(e, t, n) {
		e.lanes |= n;
		var r = e.alternate;
		r !== null && (r.lanes |= n);
		for (var i = !1, a = e.return; a !== null;) a.childLanes |= n, r = a.alternate, r !== null && (r.childLanes |= n), a.tag === 22 && (e = a.stateNode, e === null || e._visibility & 1 || (i = !0)), e = a, a = a.return;
		return e.tag === 3 ? (a = e.stateNode, i && t !== null && (i = 31 - rt(n), e = a.hiddenUpdates, r = e[i], r === null ? e[i] = [t] : r.push(t), t.lane = n | 536870912), a) : null;
	}
	function Mi(e) {
		if (50 < kd) throw kd = 0, Ad = null, Error(o(185));
		for (var t = e.return; t !== null;) e = t, t = e.return;
		return e.tag === 3 ? e.stateNode : null;
	}
	var Ni = {};
	function Pi(e, t, n, r) {
		this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
	}
	function Fi(e, t, n, r) {
		return new Pi(e, t, n, r);
	}
	function Ii(e) {
		return e = e.prototype, !(!e || !e.isReactComponent);
	}
	function Li(e, t) {
		var n = e.alternate;
		return n === null ? (n = Fi(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
	}
	function Ri(e, t) {
		e.flags &= 1206910978;
		var n = e.alternate;
		return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
			lanes: t.lanes,
			firstContext: t.firstContext
		}), e;
	}
	function zi(e, t, n, r, i, a) {
		var s = 0;
		if (r = e, typeof r == "function") Ii(r) && (s = 1);
		else if (typeof r == "string") s = qm(e, n, Ee.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
		else a: switch (r) {
			case pe: return e = Fi(31, n, t, i), e.elementType = pe, e.lanes = a, e;
			case ie: return Bi(n.children, i, a, t);
			case ae:
				s = 8, i |= 24;
				break;
			case oe: return e = Fi(12, n, t, i | 2), e.elementType = oe, e.lanes = a, e;
			case le: return e = Fi(13, n, t, i), e.elementType = le, e.lanes = a, e;
			case ue: return e = Fi(19, n, t, i), e.elementType = ue, e.lanes = a, e;
			case me:
			case ge: return e = i | 32, e = Fi(30, n, t, e), e.elementType = ge, e.lanes = a, e.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}, e;
			default:
				if (typeof r == "object" && r) switch (r.$$typeof) {
					case ce:
						s = 10;
						break a;
					case se:
						s = 9;
						break a;
					case D:
						s = 11;
						break a;
					case de:
						s = 14;
						break a;
					case fe:
						s = 16, r = null;
						break a;
				}
				s = 29, n = Error(o(130, e === null ? "null" : typeof e, "")), r = null;
		}
		return t = Fi(s, n, t, i), t.elementType = e, t.type = r, t.lanes = a, t;
	}
	function Bi(e, t, n, r) {
		return e = Fi(7, e, r, t), e.lanes = n, e;
	}
	function Vi(e, t, n) {
		return e = Fi(6, e, null, t), e.lanes = n, e;
	}
	function Hi(e) {
		var t = Fi(18, null, null, 0);
		return t.stateNode = e, t;
	}
	function Ui(e, t, n) {
		return t = Fi(4, e.children === null ? [] : e.children, e.key, t), t.lanes = n, t.stateNode = {
			containerInfo: e.containerInfo,
			pendingChildren: null,
			implementation: e.implementation
		}, t;
	}
	var Wi = /* @__PURE__ */ new WeakMap();
	function Gi(e, t) {
		if (typeof e == "object" && e) {
			var n = Wi.get(e);
			return n === void 0 ? (t = {
				value: e,
				source: t,
				stack: Be(t)
			}, Wi.set(e, t), t) : n;
		}
		return {
			value: e,
			source: t,
			stack: Be(t)
		};
	}
	var Ki = [], qi = 0, Ji = null, Yi = 0, Xi = [], Zi = 0, Qi = null, $i = 1, ea = "";
	function ta(e, t) {
		Ki[qi++] = Yi, Ki[qi++] = Ji, Ji = e, Yi = t;
	}
	function na(e, t, n) {
		Xi[Zi++] = $i, Xi[Zi++] = ea, Xi[Zi++] = Qi, Qi = e;
		var r = $i;
		e = ea;
		var i = 32 - rt(r) - 1;
		r &= ~(1 << i), n += 1;
		var a = 32 - rt(t) + i;
		if (30 < a) {
			var o = i - i % 5;
			a = (r & (1 << o) - 1).toString(32), r >>= o, i -= o, $i = 1 << 32 - rt(t) + i | n << i | r, ea = a + e;
		} else $i = 1 << a | n << i | r, ea = e;
	}
	function ra(e) {
		e.return !== null && (ta(e, 1), na(e, 1, 0));
	}
	function ia(e) {
		for (; e === Ji;) Ji = Ki[--qi], Ki[qi] = null, Yi = Ki[--qi], Ki[qi] = null;
		for (; e === Qi;) Qi = Xi[--Zi], Xi[Zi] = null, ea = Xi[--Zi], Xi[Zi] = null, $i = Xi[--Zi], Xi[Zi] = null;
	}
	function aa(e, t) {
		Xi[Zi++] = $i, Xi[Zi++] = ea, Xi[Zi++] = Qi, $i = t.id, ea = t.overflow, Qi = e;
	}
	var oa = null, L = null, R = !1, sa = null, ca = !1, la = Error(o(519));
	function ua(e) {
		throw ga(Gi(Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")), e)), la;
	}
	function da(e) {
		var t = e.stateNode, n = e.type, r = e.memoizedProps;
		switch (t[Et] = e, t[Dt] = r, n) {
			case "dialog":
				Q("cancel", t), Q("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				Q("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < zf.length; n++) Q(zf[n], t);
				break;
			case "source":
				Q("error", t);
				break;
			case "img":
			case "image":
			case "link":
				Q("error", t), Q("load", t);
				break;
			case "details":
				Q("toggle", t);
				break;
			case "input":
				Q("invalid", t), cn(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, !0);
				break;
			case "select":
				Q("invalid", t);
				break;
			case "textarea": Q("invalid", t), fn(t, r.value, r.defaultValue, r.children);
		}
		n = r.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || !0 === r.suppressHydrationWarning || ep(t.textContent, n) ? (r.popover != null && (Q("beforetoggle", t), Q("toggle", t)), r.onScroll != null && Q("scroll", t), r.onScrollEnd != null && Q("scrollend", t), r.onClick != null && (t.onclick = xn), t = !0) : t = !1, t || ua(e, !0);
	}
	function fa(e) {
		for (oa = e.return; oa;) switch (oa.tag) {
			case 5:
			case 31:
			case 13:
				ca = !1;
				return;
			case 27:
			case 3:
				ca = !0;
				return;
			default: oa = oa.return;
		}
	}
	function pa(e) {
		if (e !== oa) return !1;
		if (!R) return fa(e), R = !0, !1;
		var t = e.tag, n;
		if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = n === "form" || n === "button" || pp(e.type, e.memoizedProps)), n = !n), n && L && ua(e), fa(e), t === 13) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(o(317));
			L = dm(e);
		} else if (t === 31) {
			if (e = e.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(o(317));
			L = dm(e);
		} else t === 27 ? (t = L, Sp(e.type) ? (e = um, um = null, L = e) : L = t) : L = oa ? lm(e.stateNode.nextSibling) : null;
		return !0;
	}
	function ma() {
		L = oa = null, R = !1;
	}
	function ha() {
		var e = sa;
		return e !== null && (fd === null ? fd = e : fd.push.apply(fd, e), sa = null), e;
	}
	function ga(e) {
		sa === null ? sa = [e] : sa.push(e);
	}
	var _a = we(null), va = null, ya = null;
	function ba(e, t, n) {
		M(_a, t._currentValue), t._currentValue = n;
	}
	function xa(e) {
		e._currentValue = _a.current, Te(_a);
	}
	function Sa(e, t, n) {
		for (; e !== null;) {
			var r = e.alternate;
			if ((e.childLanes & t) === t ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t) : (e.childLanes |= t, r !== null && (r.childLanes |= t)), e === n) break;
			e = e.return;
		}
	}
	function Ca(e, t, n, r) {
		var i = e.child;
		for (i !== null && (i.return = e); i !== null;) {
			var a = i.dependencies;
			if (a !== null) {
				var s = i.child;
				a = a.firstContext;
				a: for (; a !== null;) {
					var c = a;
					a = i;
					for (var l = 0; l < t.length; l++) if (c.context === t[l]) {
						a.lanes |= n, c = a.alternate, c !== null && (c.lanes |= n), Sa(a.return, n, e), r || (s = null);
						break a;
					}
					a = c.next;
				}
			} else if (i.tag === 18) {
				if (s = i.return, s === null) throw Error(o(341));
				s.lanes |= n, a = s.alternate, a !== null && (a.lanes |= n), Sa(s, n, e), s = null;
			} else i.tag === 13 && i.memoizedState !== null && i.memoizedState.dehydrated === null ? (i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Sa(i.return, n, e), s = i.child, s = s === null ? null : s.sibling) : s = i.child;
			if (s !== null) s.return = i;
			else for (s = i; s !== null;) {
				if (s === e) {
					s = null;
					break;
				}
				if (i = s.sibling, i !== null) {
					i.return = s.return, s = i;
					break;
				}
				s = s.return;
			}
			i = s;
		}
	}
	function wa(e, t, n, r) {
		e = null;
		for (var i = t, a = !1; i !== null;) {
			if (!a) {
				if (i.flags & 524288) a = !0;
				else if (i.flags & 262144) break;
			}
			if (i.tag === 10) {
				var s = i.alternate;
				if (s === null) throw Error(o(387));
				if (s = s.memoizedProps, s !== null) {
					var c = i.type;
					Wr(i.pendingProps.value, s.value) || (e === null ? e = [c] : e.push(c));
				}
			} else if (i === ke.current) {
				if (s = i.alternate, s === null) throw Error(o(387));
				s.memoizedState.memoizedState !== i.memoizedState.memoizedState && (e === null ? e = [sh] : e.push(sh));
			}
			i = i.return;
		}
		return e !== null && Ca(t, e, n, r), t.flags |= 262144, e !== null;
	}
	function Ta(e) {
		for (e = e.firstContext; e !== null;) {
			if (!Wr(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function Ea(e) {
		va = e, ya = null, e = e.dependencies, e !== null && (e.firstContext = null);
	}
	function Da(e) {
		return ka(va, e);
	}
	function Oa(e, t) {
		return va === null && Ea(e), ka(e, t);
	}
	function ka(e, t) {
		var n = t._currentValue;
		if (t = {
			context: t,
			memoizedValue: n,
			next: null
		}, ya === null) {
			if (e === null) throw Error(o(308));
			ya = t, e.dependencies = {
				lanes: 0,
				firstContext: t
			}, e.flags |= 524288;
		} else ya = ya.next = t;
		return n;
	}
	var Aa = typeof AbortController < "u" ? AbortController : function() {
		var e = [], t = this.signal = {
			aborted: !1,
			addEventListener: function(t, n) {
				e.push(n);
			}
		};
		this.abort = function() {
			t.aborted = !0, e.forEach(function(e) {
				return e();
			});
		};
	}, ja = t.unstable_scheduleCallback, Ma = t.unstable_NormalPriority, Na = {
		$$typeof: ce,
		Consumer: null,
		Provider: null,
		_currentValue: null,
		_currentValue2: null,
		_threadCount: 0
	};
	function Pa() {
		return {
			controller: new Aa(),
			data: /* @__PURE__ */ new Map(),
			refCount: 0
		};
	}
	function Fa(e) {
		e.refCount--, e.refCount === 0 && ja(Ma, function() {
			e.controller.abort();
		});
	}
	function Ia(e, t) {
		if (e.pendingLanes & 4194048) {
			var n = e.transitionTypes;
			for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
				var r = t[e];
				n.indexOf(r) === -1 && n.push(r);
			}
		}
	}
	var La = null;
	function Ra(e) {
		var t = e.transitionTypes;
		return e.transitionTypes = null, t;
	}
	var za = null, Ba = 0, Va = 0, Ha = null;
	function Ua(e, t) {
		if (za === null) {
			var n = za = [];
			Ba = 0, Va = Pf(), Ha = {
				status: "pending",
				value: void 0,
				then: function(e) {
					n.push(e);
				}
			};
		}
		return Ba++, t.then(Wa, Wa), t;
	}
	function Wa() {
		if (--Ba === 0 && (La = null, za !== null)) {
			Ha !== null && (Ha.status = "fulfilled");
			var e = za;
			za = null, Va = 0, Ha = null;
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function Ga(e, t) {
		var n = [], r = {
			status: "pending",
			value: null,
			reason: null,
			then: function(e) {
				n.push(e);
			}
		};
		return e.then(function() {
			r.status = "fulfilled", r.value = t;
			for (var e = 0; e < n.length; e++) (0, n[e])(t);
		}, function(e) {
			for (r.status = "rejected", r.reason = e, e = 0; e < n.length; e++) (0, n[e])(void 0);
		}), r;
	}
	var Ka = k.S;
	k.S = function(e, t) {
		if (hd = Ge(), typeof t == "object" && t && typeof t.then == "function" && Ua(e, t), La !== null) for (var n = bf; n !== null;) Ia(n, La), n = n.next;
		if (n = e.types, n !== null) {
			for (var r = bf; r !== null;) Ia(r, n), r = r.next;
			if (Va !== 0) {
				r = La, r === null && (r = La = []);
				for (var i = 0; i < n.length; i++) {
					var a = n[i];
					r.indexOf(a) === -1 && r.push(a);
				}
			}
		}
		Ka !== null && Ka(e, t);
	};
	var qa = we(null);
	function Ja() {
		var e = qa.current;
		return e === null ? q.pooledCache : e;
	}
	function Ya(e, t) {
		t === null ? M(qa, qa.current) : M(qa, t.pool);
	}
	function Xa() {
		var e = Ja();
		return e === null ? null : {
			parent: Na._currentValue,
			pool: e
		};
	}
	var Za = Error(o(460)), Qa = Error(o(474)), $a = Error(o(542)), eo = { then: function() {} };
	function to(e) {
		return e = e.status, e === "fulfilled" || e === "rejected";
	}
	function no(e, t, n) {
		switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(xn, xn), t = n), t.status) {
			case "fulfilled": return t.value;
			case "rejected": throw e = t.reason, oo(e), e === void 0 && !("reason" in t) ? Error(o(600)) : e;
			default:
				if (typeof t.status == "string") t.then(xn, xn);
				else {
					if (e = q, e !== null && 100 < e.shellSuspendCounter) throw Error(o(482));
					e = t, e.status = "pending", e.then(function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "fulfilled", n.value = e;
						}
					}, function(e) {
						if (t.status === "pending") {
							var n = t;
							n.status = "rejected", n.reason = e;
						}
					});
				}
				switch (t.status) {
					case "fulfilled": return t.value;
					case "rejected": throw e = t.reason, oo(e), e;
				}
				throw io = t, Za;
		}
	}
	function ro(e) {
		try {
			var t = e._init;
			return t(e._payload);
		} catch (e) {
			throw typeof e == "object" && e && typeof e.then == "function" ? (io = e, Za) : e;
		}
	}
	var io = null;
	function ao() {
		if (io === null) throw Error(o(459));
		var e = io;
		return io = null, e;
	}
	function oo(e) {
		if (e === Za || e === $a) throw Error(o(483));
	}
	var so = null, co = 0;
	function lo(e) {
		var t = co;
		return co += 1, so === null && (so = []), no(so, e, t);
	}
	function uo(e, t) {
		t = t.props.ref, e.ref = t === void 0 ? null : t;
	}
	function fo(e, t) {
		throw t.$$typeof === te ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
	}
	function po(e) {
		function t(t, n) {
			if (e) {
				var r = t.deletions;
				r === null ? (t.deletions = [n], t.flags |= 16) : r.push(n);
			}
		}
		function n(n, r) {
			if (!e) return null;
			for (; r !== null;) t(n, r), r = r.sibling;
			return null;
		}
		function r(e) {
			for (var t = /* @__PURE__ */ new Map(); e !== null;) e.key === null ? t.set(e.index, e) : t.set(e.key, e), e = e.sibling;
			return t;
		}
		function i(e, t) {
			return e = Li(e, t), e.index = 0, e.sibling = null, e;
		}
		function a(t, n, r) {
			return t.index = r, e ? (r = t.alternate, r === null ? (t.flags |= 134217730, n) : (r = r.index, r < n ? (t.flags |= 2, n) : r)) : (t.flags |= 1048576, n);
		}
		function s(t) {
			return e && t.alternate === null && (t.flags |= 134217730), t;
		}
		function c(e, t, n, r) {
			return t === null || t.tag !== 6 ? (t = Vi(n, e.mode, r), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function l(e, t, n, r) {
			var a = n.type;
			return a === ie ? (e = d(e, t, n.props.children, r, n.key), uo(e, n), e) : t !== null && (t.elementType === a || typeof a == "object" && a && a.$$typeof === fe && ro(a) === t.type) ? (t = i(t, n.props), uo(t, n), t.return = e, t) : (t = zi(n.type, n.key, n.props, null, e.mode, r), uo(t, n), t.return = e, t);
		}
		function u(e, t, n, r) {
			return t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? (t = Ui(n, e.mode, r), t.return = e, t) : (t = i(t, n.children || []), t.return = e, t);
		}
		function d(e, t, n, r, a) {
			return t === null || t.tag !== 7 ? (t = Bi(n, e.mode, r, a), t.return = e, t) : (t = i(t, n), t.return = e, t);
		}
		function f(e, t, n) {
			if (typeof t == "string" && t !== "" || typeof t == "number" || typeof t == "bigint") return t = Vi("" + t, e.mode, n), t.return = e, t;
			if (typeof t == "object" && t) {
				switch (t.$$typeof) {
					case ne: return n = zi(t.type, t.key, t.props, null, e.mode, n), uo(n, t), n.return = e, n;
					case re: return t = Ui(t, e.mode, n), t.return = e, t;
					case fe: return t = ro(t), f(e, t, n);
				}
				if (O(t) || ye(t)) return t = Bi(t, e.mode, n, null), t.return = e, t;
				if (typeof t.then == "function") return f(e, lo(t), n);
				if (t.$$typeof === ce) return f(e, Oa(e, t), n);
				fo(e, t);
			}
			return null;
		}
		function p(e, t, n, r) {
			var i = t === null ? null : t.key;
			if (typeof n == "string" && n !== "" || typeof n == "number" || typeof n == "bigint") return i === null ? c(e, t, "" + n, r) : null;
			if (typeof n == "object" && n) {
				switch (n.$$typeof) {
					case ne: return n.key === i ? l(e, t, n, r) : null;
					case re: return n.key === i ? u(e, t, n, r) : null;
					case fe: return n = ro(n), p(e, t, n, r);
				}
				if (O(n) || ye(n)) return i === null ? d(e, t, n, r, null) : null;
				if (typeof n.then == "function") return p(e, t, lo(n), r);
				if (n.$$typeof === ce) return p(e, t, Oa(e, n), r);
				fo(e, n);
			}
			return null;
		}
		function m(e, t, n, r, i) {
			if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return e = e.get(n) || null, c(t, e, "" + r, i);
			if (typeof r == "object" && r) {
				switch (r.$$typeof) {
					case ne: return e = e.get(r.key === null ? n : r.key) || null, l(t, e, r, i);
					case re: return e = e.get(r.key === null ? n : r.key) || null, u(t, e, r, i);
					case fe: return r = ro(r), m(e, t, n, r, i);
				}
				if (O(r) || ye(r)) return e = e.get(n) || null, d(t, e, r, i, null);
				if (typeof r.then == "function") return m(e, t, n, lo(r), i);
				if (r.$$typeof === ce) return m(e, t, n, Oa(t, r), i);
				fo(t, r);
			}
			return null;
		}
		function h(i, o, s, c) {
			for (var l = null, u = null, d = o, h = o = 0, g = null; d !== null && h < s.length; h++) {
				d.index > h ? (g = d, d = null) : g = d.sibling;
				var _ = p(i, d, s[h], c);
				if (_ === null) {
					d === null && (d = g);
					break;
				}
				e && d && _.alternate === null && t(i, d), o = a(_, o, h), u === null ? l = _ : u.sibling = _, u = _, d = g;
			}
			if (h === s.length) return n(i, d), R && ta(i, h), l;
			if (d === null) {
				for (; h < s.length; h++) d = f(i, s[h], c), d !== null && (o = a(d, o, h), u === null ? l = d : u.sibling = d, u = d);
				return R && ta(i, h), l;
			}
			for (d = r(d); h < s.length; h++) g = m(d, i, h, s[h], c), g !== null && (e && (_ = g.alternate, _ !== null && d.delete(_.key === null ? h : _.key)), o = a(g, o, h), u === null ? l = g : u.sibling = g, u = g);
			return e && d.forEach(function(e) {
				return t(i, e);
			}), R && ta(i, h), l;
		}
		function g(i, s, c, l) {
			if (c == null) throw Error(o(151));
			for (var u = null, d = null, h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
				h.index > g ? (_ = h, h = null) : _ = h.sibling;
				var y = p(i, h, v.value, l);
				if (y === null) {
					h === null && (h = _);
					break;
				}
				e && h && y.alternate === null && t(i, h), s = a(y, s, g), d === null ? u = y : d.sibling = y, d = y, h = _;
			}
			if (v.done) return n(i, h), R && ta(i, g), u;
			if (h === null) {
				for (; !v.done; g++, v = c.next()) v = f(i, v.value, l), v !== null && (s = a(v, s, g), d === null ? u = v : d.sibling = v, d = v);
				return R && ta(i, g), u;
			}
			for (h = r(h); !v.done; g++, v = c.next()) v = m(h, i, g, v.value, l), v !== null && (e && (_ = v.alternate, _ !== null && h.delete(_.key === null ? g : _.key)), s = a(v, s, g), d === null ? u = v : d.sibling = v, d = v);
			return e && h.forEach(function(e) {
				return t(i, e);
			}), R && ta(i, g), u;
		}
		function _(e, r, a, c) {
			if (typeof a == "object" && a && a.type === ie && a.key === null && a.props.ref === void 0 && (a = a.props.children), typeof a == "object" && a) {
				switch (a.$$typeof) {
					case ne:
						a: {
							for (var l = a.key; r !== null;) {
								if (r.key === l) {
									if (l = a.type, l === ie) {
										if (r.tag === 7) {
											n(e, r.sibling), c = i(r, a.props.children), uo(c, a), c.return = e, e = c;
											break a;
										}
									} else if (r.elementType === l || typeof l == "object" && l && l.$$typeof === fe && ro(l) === r.type) {
										n(e, r.sibling), c = i(r, a.props), uo(c, a), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							a.type === ie ? (c = Bi(a.props.children, e.mode, c, a.key), uo(c, a), c.return = e, e = c) : (c = zi(a.type, a.key, a.props, null, e.mode, c), uo(c, a), c.return = e, e = c);
						}
						return s(e);
					case re:
						a: {
							for (l = a.key; r !== null;) {
								if (r.key === l) {
									if (r.tag === 4 && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
										n(e, r.sibling), c = i(r, a.children || []), c.return = e, e = c;
										break a;
									}
									n(e, r);
									break;
								}
								t(e, r), r = r.sibling;
							}
							c = Ui(a, e.mode, c), c.return = e, e = c;
						}
						return s(e);
					case fe: return a = ro(a), _(e, r, a, c);
				}
				if (O(a)) return h(e, r, a, c);
				if (ye(a)) {
					if (l = ye(a), typeof l != "function") throw Error(o(150));
					return a = l.call(a), g(e, r, a, c);
				}
				if (typeof a.then == "function") return _(e, r, lo(a), c);
				if (a.$$typeof === ce) return _(e, r, Oa(e, a), c);
				fo(e, a);
			}
			return typeof a == "string" && a !== "" || typeof a == "number" || typeof a == "bigint" ? (a = "" + a, r !== null && r.tag === 6 ? (n(e, r.sibling), c = i(r, a), c.return = e, e = c) : (n(e, r), c = Vi(a, e.mode, c), c.return = e, e = c), s(e)) : n(e, r);
		}
		return function(e, t, n, r) {
			try {
				co = 0;
				var i = _(e, t, n, r);
				return so = null, i;
			} catch (t) {
				if (t === Za || t === $a) throw t;
				var a = Fi(29, t, null, e.mode);
				return a.lanes = r, a.return = e, a;
			}
		};
	}
	var mo = po(!0), ho = po(!1), go = !1;
	function _o(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: {
				pending: null,
				lanes: 0,
				hiddenCallbacks: null
			},
			callbacks: null
		};
	}
	function vo(e, t) {
		e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
			baseState: e.baseState,
			firstBaseUpdate: e.firstBaseUpdate,
			lastBaseUpdate: e.lastBaseUpdate,
			shared: e.shared,
			callbacks: null
		});
	}
	function yo(e) {
		return {
			lane: e,
			tag: 0,
			payload: null,
			callback: null,
			next: null
		};
	}
	function bo(e, t, n) {
		var r = e.updateQueue;
		if (r === null) return null;
		if (r = r.shared, K & 2) {
			var i = r.pending;
			return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, t = Mi(e), ji(e, null, n), t;
		}
		return Oi(e, r, t, n), Mi(e);
	}
	function xo(e, t, n) {
		if (t = t.updateQueue, t !== null && (t = t.shared, n & 4194048)) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, yt(e, n);
		}
	}
	function So(e, t) {
		var n = e.updateQueue, r = e.alternate;
		if (r !== null && (r = r.updateQueue, n === r)) {
			var i = null, a = null;
			if (n = n.firstBaseUpdate, n !== null) {
				do {
					var o = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null
					};
					a === null ? i = a = o : a = a.next = o, n = n.next;
				} while (n !== null);
				a === null ? i = a = t : a = a.next = t;
			} else i = a = t;
			n = {
				baseState: r.baseState,
				firstBaseUpdate: i,
				lastBaseUpdate: a,
				shared: r.shared,
				callbacks: r.callbacks
			}, e.updateQueue = n;
		} else e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
	}
	var Co = !1;
	function wo() {
		if (Co) {
			var e = Ha;
			if (e !== null) throw e;
		}
	}
	function To(e, t, n, r) {
		Co = !1;
		var i = e.updateQueue;
		go = !1;
		var a = i.firstBaseUpdate, o = i.lastBaseUpdate, s = i.shared.pending;
		if (s !== null) {
			i.shared.pending = null;
			var c = s, l = c.next;
			c.next = null, o === null ? a = l : o.next = l, o = c;
			var u = e.alternate;
			u !== null && (u = u.updateQueue, s = u.lastBaseUpdate, s !== o && (s === null ? u.firstBaseUpdate = l : s.next = l, u.lastBaseUpdate = c));
		}
		if (a !== null) {
			var d = i.baseState;
			o = 0, u = l = c = null, s = a;
			do {
				var f = s.lane & -536870913, p = f !== s.lane;
				if (p ? (Y & f) === f : (r & f) === f) {
					f !== 0 && f === Va && (Co = !0), u !== null && (u = u.next = {
						lane: 0,
						tag: s.tag,
						payload: s.payload,
						callback: null,
						next: null
					});
					a: {
						var m = e, h = s;
						f = t;
						var g = n;
						switch (h.tag) {
							case 1:
								if (m = h.payload, typeof m == "function") {
									d = m.call(g, d, f);
									break a;
								}
								d = m;
								break a;
							case 3: m.flags = m.flags & -65537 | 128;
							case 0:
								if (m = h.payload, f = typeof m == "function" ? m.call(g, d, f) : m, f == null) break a;
								d = E({}, d, f);
								break a;
							case 2: go = !0;
						}
					}
					f = s.callback, f !== null && (e.flags |= 64, p && (e.flags |= 8192), p = i.callbacks, p === null ? i.callbacks = [f] : p.push(f));
				} else p = {
					lane: f,
					tag: s.tag,
					payload: s.payload,
					callback: s.callback,
					next: null
				}, u === null ? (l = u = p, c = d) : u = u.next = p, o |= f;
				if (s = s.next, s === null) {
					if (s = i.shared.pending, s === null) break;
					p = s, s = p.next, p.next = null, i.lastBaseUpdate = p, i.shared.pending = null;
				}
			} while (1);
			u === null && (c = d), i.baseState = c, i.firstBaseUpdate = l, i.lastBaseUpdate = u, a === null && (i.shared.lanes = 0), od |= o, e.lanes = o, e.memoizedState = d;
		}
	}
	function Eo(e, t) {
		if (typeof e != "function") throw Error(o(191, e));
		e.call(t);
	}
	function Do(e, t) {
		var n = e.callbacks;
		if (n !== null) for (e.callbacks = null, e = 0; e < n.length; e++) Eo(n[e], t);
	}
	var Oo = we(null), ko = we(0);
	function Ao(e, t) {
		e = id, M(ko, e), M(Oo, t), id = e | t.baseLanes;
	}
	function jo() {
		M(ko, id), M(Oo, Oo.current);
	}
	function Mo() {
		id = ko.current, Te(Oo), Te(ko);
	}
	var No = we(null), z = null;
	function Po(e) {
		var t = e.alternate;
		M(B, B.current & 1), M(No, e), z === null && (t === null || Oo.current !== null || t.memoizedState !== null) && (z = e);
	}
	function Fo(e) {
		M(B, B.current), M(No, e), z === null && (z = e);
	}
	function Io(e) {
		e.tag === 22 ? (M(B, B.current), M(No, e), z === null && (z = e)) : Lo();
	}
	function Lo() {
		M(B, B.current), M(No, No.current);
	}
	function Ro(e) {
		Te(No), z === e && (z = null), Te(B);
	}
	var B = we(0);
	function zo(e, t) {
		M(No, No.current), M(B, t);
	}
	function Bo(e) {
		Te(B), Te(No), z === e && (z = null);
	}
	function Vo(e) {
		for (var t = e; t !== null;) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
				if (t.flags & 128) return t;
			} else if (t.child !== null) {
				t.child.return = t, t = t.child;
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null;) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			t.sibling.return = t.return, t = t.sibling;
		}
		return null;
	}
	var Ho = 0, V = null, H = null, Uo = null, Wo = !1, Go = !1, Ko = !1, qo = 0, Jo = 0, Yo = null, Xo = 0;
	function Zo() {
		throw Error(o(321));
	}
	function Qo(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++) if (!Wr(e[n], t[n])) return !1;
		return !0;
	}
	function $o(e, t, n, r, i, a) {
		return Ho = a, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, k.H = e === null || e.memoizedState === null ? gc : _c, Ko = !1, a = n(r, i), Ko = !1, Go && (a = ts(t, n, r, i)), es(e), a;
	}
	function es(e) {
		k.H = hc;
		var t = H !== null && H.next !== null;
		if (Ho = 0, Uo = H = V = null, Wo = !1, Jo = 0, Yo = null, t) throw Error(o(300));
		e === null || Pc || (e = e.dependencies, e !== null && Ta(e) && (Pc = !0));
	}
	function ts(e, t, n, r) {
		V = e;
		var i = 0;
		do {
			if (Go && (Yo = null), Jo = 0, Go = !1, 25 <= i) throw Error(o(301));
			if (i += 1, Uo = H = null, e.updateQueue != null) {
				var a = e.updateQueue;
				a.lastEffect = null, a.events = null, a.stores = null, a.memoCache != null && (a.memoCache.index = 0);
			}
			k.H = vc, a = t(n, r);
		} while (Go);
		return a;
	}
	function ns() {
		var e = k.H, t = e.useState()[0];
		return t = typeof t.then == "function" ? ls(t) : t, e = e.useState()[0], (H === null ? null : H.memoizedState) !== e && (V.flags |= 1024), t;
	}
	function rs() {
		var e = qo !== 0;
		return qo = 0, e;
	}
	function is(e, t, n) {
		t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
	}
	function as(e) {
		if (Wo) {
			for (e = e.memoizedState; e !== null;) {
				var t = e.queue;
				t !== null && (t.pending = null), e = e.next;
			}
			Wo = !1;
		}
		Ho = 0, Uo = H = V = null, Go = !1, Jo = qo = 0, Yo = null;
	}
	function os() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		};
		return Uo === null ? V.memoizedState = Uo = e : Uo = Uo.next = e, Uo;
	}
	function ss() {
		if (H === null) {
			var e = V.alternate;
			e = e === null ? null : e.memoizedState;
		} else e = H.next;
		var t = Uo === null ? V.memoizedState : Uo.next;
		if (t !== null) Uo = t, H = e;
		else {
			if (e === null) throw V.alternate === null ? Error(o(467)) : Error(o(310));
			H = e, e = {
				memoizedState: H.memoizedState,
				baseState: H.baseState,
				baseQueue: H.baseQueue,
				queue: H.queue,
				next: null
			}, Uo === null ? V.memoizedState = Uo = e : Uo = Uo.next = e;
		}
		return Uo;
	}
	function cs() {
		return {
			lastEffect: null,
			events: null,
			stores: null,
			memoCache: null
		};
	}
	function ls(e) {
		var t = Jo;
		return Jo += 1, Yo === null && (Yo = []), e = no(Yo, e, t), t = V, (Uo === null ? t.memoizedState : Uo.next) === null && (t = t.alternate, k.H = t === null || t.memoizedState === null ? gc : _c), e;
	}
	function us(e) {
		if (typeof e == "object" && e) {
			if (typeof e.then == "function") return ls(e);
			if (e.$$typeof === _e) return;
			if (e.$$typeof === ce) return Da(e);
		}
		throw Error(o(438, String(e)));
	}
	function ds(e) {
		var t = null, n = V.updateQueue;
		if (n !== null && (t = n.memoCache), t == null) {
			var r = V.alternate;
			r !== null && (r = r.updateQueue, r !== null && (r = r.memoCache, r != null && (t = {
				data: r.data.map(function(e) {
					return e.slice();
				}),
				index: 0
			})));
		}
		if (t ??= {
			data: [],
			index: 0
		}, n === null && (n = cs(), V.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0) for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = he;
		return t.index++, n;
	}
	function fs(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function ps(e) {
		return ms(ss(), H, e);
	}
	function ms(e, t, n) {
		var r = e.queue;
		if (r === null) throw Error(o(311));
		r.lastRenderedReducer = n;
		var i = e.baseQueue, a = r.pending;
		if (a !== null) {
			if (i !== null) {
				var s = i.next;
				i.next = a.next, a.next = s;
			}
			t.baseQueue = i = a, r.pending = null;
		}
		if (a = e.baseState, i === null) e.memoizedState = a;
		else {
			t = i.next;
			var c = s = null, l = null, u = t, d = !1;
			do {
				var f = u.lane & -536870913;
				if (f === u.lane ? (Ho & f) === f : (Y & f) === f) {
					var p = u.revertLane;
					if (p === 0) l !== null && (l = l.next = {
						lane: 0,
						revertLane: 0,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}), f === Va && (d = !0);
					else if ((Ho & p) === p) {
						u = u.next, p === Va && (d = !0);
						continue;
					} else f = {
						lane: 0,
						revertLane: u.revertLane,
						gesture: null,
						action: u.action,
						hasEagerState: u.hasEagerState,
						eagerState: u.eagerState,
						next: null
					}, l === null ? (c = l = f, s = a) : l = l.next = f, V.lanes |= p, od |= p;
					f = u.action, Ko && n(a, f), a = u.hasEagerState ? u.eagerState : n(a, f);
				} else p = {
					lane: f,
					revertLane: u.revertLane,
					gesture: u.gesture,
					action: u.action,
					hasEagerState: u.hasEagerState,
					eagerState: u.eagerState,
					next: null
				}, l === null ? (c = l = p, s = a) : l = l.next = p, V.lanes |= f, od |= f;
				u = u.next;
			} while (u !== null && u !== t);
			if (l === null ? s = a : l.next = c, !Wr(a, e.memoizedState) && (Pc = !0, d && (n = Ha, n !== null))) throw n;
			e.memoizedState = a, e.baseState = s, e.baseQueue = l, r.lastRenderedState = a;
		}
		return i === null && (r.lanes = 0), [e.memoizedState, r.dispatch];
	}
	function hs(e) {
		var t = ss(), n = t.queue;
		if (n === null) throw Error(o(311));
		n.lastRenderedReducer = e;
		var r = n.dispatch, i = n.pending, a = t.memoizedState;
		if (i !== null) {
			n.pending = null;
			var s = i = i.next;
			do
				a = e(a, s.action), s = s.next;
			while (s !== i);
			Wr(a, t.memoizedState) || (Pc = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a;
		}
		return [a, r];
	}
	function gs(e, t, n) {
		var r = V, i = ss(), a = R;
		if (a) {
			if (n === void 0) throw Error(o(407));
			n = n();
		} else n = t();
		var s = !Wr((H || i).memoizedState, n);
		if (s && (i.memoizedState = n, Pc = !0), i = i.queue, Vs(ys.bind(null, r, i, e), [e]), e = i.getSnapshot !== t || s || Uo !== null && !!(Uo.memoizedState.tag & 1), Is(e ? 9 : 8, { destroy: void 0 }, vs.bind(null, r, i, n, t), null), e) {
			if (r.flags |= 2048, q === null) throw Error(o(349));
			a || Ho & 127 || _s(r, t, n);
		}
		return n;
	}
	function _s(e, t, n) {
		e.flags |= 16384, e = {
			getSnapshot: t,
			value: n
		}, t = V.updateQueue, t === null ? (t = cs(), V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
	}
	function vs(e, t, n, r) {
		t.value = n, t.getSnapshot = r, bs(t) && xs(e);
	}
	function ys(e, t, n) {
		return n(function() {
			bs(t) && xs(e);
		});
	}
	function bs(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !Wr(e, n);
		} catch {
			return !0;
		}
	}
	function xs(e) {
		var t = Ai(e, 2);
		t !== null && Pd(t, e, 2);
	}
	function Ss(e) {
		var t = os();
		if (typeof e == "function") {
			var n = e;
			if (e = n(), Ko) {
				nt(!0);
				try {
					n();
				} finally {
					nt(!1);
				}
			}
		}
		return t.memoizedState = t.baseState = e, t.queue = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: fs,
			lastRenderedState: e
		}, t;
	}
	function Cs(e, t, n, r) {
		return e.baseState = n, ms(e, H, typeof r == "function" ? r : fs);
	}
	function ws(e, t, n, r, i) {
		if (fc(e)) throw Error(o(485));
		if (e = t.action, e !== null) {
			var a = {
				payload: i,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: function(e) {
					a.listeners.push(e);
				}
			};
			k.T === null ? a.isTransition = !1 : n(!0), r(a), n = t.pending, n === null ? (a.next = t.pending = a, Ts(t, a)) : (a.next = n.next, t.pending = n.next = a);
		}
	}
	function Ts(e, t) {
		var n = t.action, r = t.payload, i = e.state;
		if (t.isTransition) {
			var a = k.T, o = {};
			o.types = a === null ? null : a.types, k.T = o;
			try {
				var s = n(i, r), c = k.S;
				c !== null && c(o, s), Es(e, t, s);
			} catch (n) {
				Os(e, t, n);
			} finally {
				a !== null && o.types !== null && (a.types = o.types), k.T = a;
			}
		} else try {
			a = n(i, r), Es(e, t, a);
		} catch (n) {
			Os(e, t, n);
		}
	}
	function Es(e, t, n) {
		typeof n == "object" && n && typeof n.then == "function" ? n.then(function(n) {
			Ds(e, t, n);
		}, function(n) {
			return Os(e, t, n);
		}) : Ds(e, t, n);
	}
	function Ds(e, t, n) {
		t.status = "fulfilled", t.value = n, ks(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Ts(e, n)));
	}
	function Os(e, t, n) {
		var r = e.pending;
		if (e.pending = null, r !== null) {
			r = r.next;
			do
				t.status = "rejected", t.reason = n, ks(t), t = t.next;
			while (t !== r);
		}
		e.action = null;
	}
	function ks(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function As(e, t) {
		return t;
	}
	function js(e, t) {
		if (R) {
			var n = q.formState;
			if (n !== null) {
				a: {
					var r = V;
					if (R) {
						if (L) {
							b: {
								for (var i = L, a = ca; i.nodeType !== 8;) if (!a || (i = lm(i.nextSibling), i === null)) {
									i = null;
									break b;
								}
								a = i.data, i = a === "F!" || a === "F" ? i : null;
							}
							if (i) {
								L = lm(i.nextSibling), r = i.data === "F!";
								break a;
							}
						}
						ua(r);
					}
					r = !1;
				}
				r && (t = n[0]);
			}
		}
		return n = os(), n.memoizedState = n.baseState = t, r = {
			pending: null,
			lanes: 0,
			dispatch: null,
			lastRenderedReducer: As,
			lastRenderedState: t
		}, n.queue = r, n = lc.bind(null, V, r), r.dispatch = n, r = Ss(!1), a = dc.bind(null, V, !1, r.queue), r = os(), i = {
			state: t,
			dispatch: null,
			action: e,
			pending: null
		}, r.queue = i, n = ws.bind(null, V, i, a, n), i.dispatch = n, r.memoizedState = e, [
			t,
			n,
			!1
		];
	}
	function Ms(e) {
		return Ns(ss(), H, e);
	}
	function Ns(e, t, n) {
		if (t = ms(e, t, As)[0], e = ps(fs)[0], typeof t == "object" && t && typeof t.then == "function") try {
			var r = ls(t);
		} catch (e) {
			throw e === Za ? $a : e;
		}
		else r = t;
		t = ss();
		var i = t.queue, a = i.dispatch;
		return n !== t.memoizedState && (V.flags |= 2048, Is(9, { destroy: void 0 }, Ps.bind(null, i, n), null)), [
			r,
			a,
			e
		];
	}
	function Ps(e, t) {
		e.action = t;
	}
	function Fs(e) {
		var t = ss(), n = H;
		if (n !== null) return Ns(t, n, e);
		ss(), t = t.memoizedState, n = ss();
		var r = n.queue.dispatch;
		return n.memoizedState = e, [
			t,
			r,
			!1
		];
	}
	function Is(e, t, n, r) {
		return e = {
			tag: e,
			create: n,
			deps: r,
			inst: t,
			next: null
		}, t = V.updateQueue, t === null && (t = cs(), V.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e;
	}
	function Ls() {
		return ss().memoizedState;
	}
	function Rs(e, t, n, r) {
		var i = os();
		V.flags |= e, i.memoizedState = Is(1 | t, { destroy: void 0 }, n, r === void 0 ? null : r);
	}
	function zs(e, t, n, r) {
		var i = ss();
		r = r === void 0 ? null : r;
		var a = i.memoizedState.inst;
		H !== null && r !== null && Qo(r, H.memoizedState.deps) ? i.memoizedState = Is(t, a, n, r) : (V.flags |= e, i.memoizedState = Is(1 | t, a, n, r));
	}
	function Bs(e, t) {
		Rs(8390656, 8, e, t);
	}
	function Vs(e, t) {
		zs(2048, 8, e, t);
	}
	function Hs(e) {
		V.flags |= 4;
		var t = V.updateQueue;
		if (t === null) t = cs(), V.updateQueue = t, t.events = [e];
		else {
			var n = t.events;
			n === null ? t.events = [e] : n.push(e);
		}
	}
	function Us(e) {
		var t = ss().memoizedState;
		return Hs({
			ref: t,
			nextImpl: e
		}), function() {
			if (K & 2) throw Error(o(440));
			return t.impl.apply(void 0, arguments);
		};
	}
	function Ws(e, t) {
		return zs(4, 2, e, t);
	}
	function Gs(e, t) {
		return zs(4, 4, e, t);
	}
	function Ks(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return function() {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null) return e = e(), t.current = e, function() {
			t.current = null;
		};
	}
	function qs(e, t, n) {
		n = n == null ? null : n.concat([e]), zs(4, 4, Ks.bind(null, t, e), n);
	}
	function Js() {}
	function Ys(e, t) {
		var n = ss();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		return t !== null && Qo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
	}
	function Xs(e, t) {
		var n = ss();
		t = t === void 0 ? null : t;
		var r = n.memoizedState;
		if (t !== null && Qo(t, r[1])) return r[0];
		if (r = e(), Ko) {
			nt(!0);
			try {
				e();
			} finally {
				nt(!1);
			}
		}
		return n.memoizedState = [r, t], r;
	}
	function Zs(e, t, n) {
		return n === void 0 || Ho & 1073741824 && !(Y & 261930) ? e.memoizedState = t : (e.memoizedState = n, e = Md(), V.lanes |= e, od |= e, n);
	}
	function Qs(e, t, n, r) {
		return Wr(n, t) ? n : Oo.current === null ? !(Ho & 106) || Ho & 1073741824 && !(Y & 261930) ? (Pc = !0, e.memoizedState = n) : (e = Md(), V.lanes |= e, od |= e, t) : (e = Zs(e, n, r), Wr(e, t) || (Pc = !0), e);
	}
	function $s(e, t, n, r, i) {
		var a = A.p;
		A.p = a !== 0 && 8 > a ? a : 8;
		var o = k.T, s = {};
		s.types = o === null ? null : o.types, k.T = s, dc(e, !1, t, n);
		try {
			var c = i(), l = k.S;
			l !== null && l(s, c), typeof c == "object" && c && typeof c.then == "function" ? uc(e, t, Ga(c, r), jd(e)) : uc(e, t, r, jd(e));
		} catch (n) {
			uc(e, t, {
				then: function() {},
				status: "rejected",
				reason: n
			}, jd());
		} finally {
			A.p = a, o !== null && s.types !== null && (o.types = s.types), k.T = o;
		}
	}
	function ec() {}
	function tc(e, t, n, r) {
		if (e.tag !== 5) throw Error(o(476));
		var i = nc(e).queue;
		$s(e, i, t, j, n === null ? ec : function() {
			return rc(e), n(r);
		});
	}
	function nc(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: j,
			baseState: j,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: fs,
				lastRenderedState: j
			},
			next: null
		};
		var n = {};
		return t.next = {
			memoizedState: n,
			baseState: n,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: fs,
				lastRenderedState: n
			},
			next: null
		}, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
	}
	function rc(e) {
		var t = nc(e);
		t.next === null && (t = e.alternate.memoizedState), uc(e, t.next.queue, {}, jd());
	}
	function ic() {
		return Da(sh);
	}
	function ac() {
		return ss().memoizedState;
	}
	function oc() {
		return ss().memoizedState;
	}
	function sc(e) {
		for (var t = e.return; t !== null;) {
			switch (t.tag) {
				case 24:
				case 3:
					var n = jd();
					e = yo(n);
					var r = bo(t, e, n);
					r !== null && (Pd(r, t, n), xo(r, t, n)), t = { cache: Pa() }, e.payload = t;
					return;
			}
			t = t.return;
		}
	}
	function cc(e, t, n) {
		var r = jd();
		n = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, fc(e) ? pc(t, n) : (n = ki(e, t, n, r), n !== null && (Pd(n, e, r), mc(n, t, r)));
	}
	function lc(e, t, n) {
		uc(e, t, n, jd());
	}
	function uc(e, t, n, r) {
		var i = {
			lane: r,
			revertLane: 0,
			gesture: null,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null
		};
		if (fc(e)) pc(t, i);
		else {
			var a = e.alternate;
			if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
				var o = t.lastRenderedState, s = a(o, n);
				if (i.hasEagerState = !0, i.eagerState = s, Wr(s, o)) return Oi(e, t, i, 0), q === null && Di(), !1;
			} catch {}
			if (n = ki(e, t, i, r), n !== null) return Pd(n, e, r), mc(n, t, r), !0;
		}
		return !1;
	}
	function dc(e, t, n, r) {
		if (r = {
			lane: 2,
			revertLane: Pf(),
			gesture: null,
			action: r,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}, fc(e)) {
			if (t) throw Error(o(479));
		} else t = ki(e, n, r, 2), t !== null && Pd(t, e, 2);
	}
	function fc(e) {
		var t = e.alternate;
		return e === V || t !== null && t === V;
	}
	function pc(e, t) {
		Go = Wo = !0;
		var n = e.pending;
		n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
	}
	function mc(e, t, n) {
		if (n & 4194048) {
			var r = t.lanes;
			r &= e.pendingLanes, n |= r, t.lanes = n, yt(e, n);
		}
	}
	var hc = {
		readContext: Da,
		use: us,
		useCallback: Zo,
		useContext: Zo,
		useEffect: Zo,
		useImperativeHandle: Zo,
		useLayoutEffect: Zo,
		useInsertionEffect: Zo,
		useMemo: Zo,
		useReducer: Zo,
		useRef: Zo,
		useState: Zo,
		useDebugValue: Zo,
		useDeferredValue: Zo,
		useTransition: Zo,
		useSyncExternalStore: Zo,
		useId: Zo,
		useHostTransitionStatus: Zo,
		useFormState: Zo,
		useActionState: Zo,
		useOptimistic: Zo,
		useMemoCache: Zo,
		useCacheRefresh: Zo,
		useEffectEvent: Zo
	}, gc = {
		readContext: Da,
		use: us,
		useCallback: function(e, t) {
			return os().memoizedState = [e, t === void 0 ? null : t], e;
		},
		useContext: Da,
		useEffect: Bs,
		useImperativeHandle: function(e, t, n) {
			n = n == null ? null : n.concat([e]), Rs(4194308, 4, Ks.bind(null, t, e), n);
		},
		useLayoutEffect: function(e, t) {
			return Rs(4194308, 4, e, t);
		},
		useInsertionEffect: function(e, t) {
			Rs(4, 2, e, t);
		},
		useMemo: function(e, t) {
			var n = os();
			t = t === void 0 ? null : t;
			var r = e();
			if (Ko) {
				nt(!0);
				try {
					e();
				} finally {
					nt(!1);
				}
			}
			return n.memoizedState = [r, t], r;
		},
		useReducer: function(e, t, n) {
			var r = os();
			if (n !== void 0) {
				var i = n(t);
				if (Ko) {
					nt(!0);
					try {
						n(t);
					} finally {
						nt(!1);
					}
				}
			} else i = t;
			return r.memoizedState = r.baseState = i, e = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: e,
				lastRenderedState: i
			}, r.queue = e, e = e.dispatch = cc.bind(null, V, e), [r.memoizedState, e];
		},
		useRef: function(e) {
			var t = os();
			return e = { current: e }, t.memoizedState = e;
		},
		useState: function(e) {
			e = Ss(e);
			var t = e.queue, n = lc.bind(null, V, t);
			return t.dispatch = n, [e.memoizedState, n];
		},
		useDebugValue: Js,
		useDeferredValue: function(e, t) {
			return Zs(os(), e, t);
		},
		useTransition: function() {
			var e = Ss(!1);
			return e = $s.bind(null, V, e.queue, !0, !1), os().memoizedState = e, [!1, e];
		},
		useSyncExternalStore: function(e, t, n) {
			var r = V, i = os();
			if (R) {
				if (n === void 0) throw Error(o(407));
				n = n();
			} else {
				if (n = t(), q === null) throw Error(o(349));
				Y & 127 || _s(r, t, n);
			}
			i.memoizedState = n;
			var a = {
				value: n,
				getSnapshot: t
			};
			return i.queue = a, Bs(ys.bind(null, r, a, e), [e]), r.flags |= 2048, Is(9, { destroy: void 0 }, vs.bind(null, r, a, n, t), null), n;
		},
		useId: function() {
			var e = os(), t = q.identifierPrefix;
			if (R) {
				var n = ea, r = $i;
				n = (r & ~(1 << 32 - rt(r) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = qo++, 0 < n && (t += "H" + n.toString(32)), t += "_";
			} else n = Xo++, t = "_" + t + "r_" + n.toString(32) + "_";
			return e.memoizedState = t;
		},
		useHostTransitionStatus: ic,
		useFormState: js,
		useActionState: js,
		useOptimistic: function(e) {
			var t = os();
			t.memoizedState = t.baseState = e;
			var n = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: null,
				lastRenderedState: null
			};
			return t.queue = n, t = dc.bind(null, V, !0, n), n.dispatch = t, [e, t];
		},
		useMemoCache: ds,
		useCacheRefresh: function() {
			return os().memoizedState = sc.bind(null, V);
		},
		useEffectEvent: function(e) {
			var t = os(), n = { impl: e };
			return t.memoizedState = n, function() {
				if (K & 2) throw Error(o(440));
				return n.impl.apply(void 0, arguments);
			};
		}
	}, _c = {
		readContext: Da,
		use: us,
		useCallback: Ys,
		useContext: Da,
		useEffect: Vs,
		useImperativeHandle: qs,
		useInsertionEffect: Ws,
		useLayoutEffect: Gs,
		useMemo: Xs,
		useReducer: ps,
		useRef: Ls,
		useState: function() {
			return ps(fs);
		},
		useDebugValue: Js,
		useDeferredValue: function(e, t) {
			return Qs(ss(), H.memoizedState, e, t);
		},
		useTransition: function() {
			var e = ps(fs)[0], t = ss().memoizedState;
			return [typeof e == "boolean" ? e : ls(e), t];
		},
		useSyncExternalStore: gs,
		useId: ac,
		useHostTransitionStatus: ic,
		useFormState: Ms,
		useActionState: Ms,
		useOptimistic: function(e, t) {
			return Cs(ss(), H, e, t);
		},
		useMemoCache: ds,
		useCacheRefresh: oc,
		useEffectEvent: Us
	}, vc = {
		readContext: Da,
		use: us,
		useCallback: Ys,
		useContext: Da,
		useEffect: Vs,
		useImperativeHandle: qs,
		useInsertionEffect: Ws,
		useLayoutEffect: Gs,
		useMemo: Xs,
		useReducer: hs,
		useRef: Ls,
		useState: function() {
			return hs(fs);
		},
		useDebugValue: Js,
		useDeferredValue: function(e, t) {
			var n = ss();
			return H === null ? Zs(n, e, t) : Qs(n, H.memoizedState, e, t);
		},
		useTransition: function() {
			var e = hs(fs)[0], t = ss().memoizedState;
			return [typeof e == "boolean" ? e : ls(e), t];
		},
		useSyncExternalStore: gs,
		useId: ac,
		useHostTransitionStatus: ic,
		useFormState: Fs,
		useActionState: Fs,
		useOptimistic: function(e, t) {
			var n = ss();
			return H === null ? (n.baseState = e, [e, n.queue.dispatch]) : Cs(n, H, e, t);
		},
		useMemoCache: ds,
		useCacheRefresh: oc,
		useEffectEvent: Us
	};
	function yc(e, t, n, r) {
		t = e.memoizedState, n = n(r, t), n = n == null ? t : E({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var bc = {
		enqueueSetState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = yo(r);
			i.payload = t, n != null && (i.callback = n), t = bo(e, i, r), t !== null && (Pd(t, e, r), xo(t, e, r));
		},
		enqueueReplaceState: function(e, t, n) {
			e = e._reactInternals;
			var r = jd(), i = yo(r);
			i.tag = 1, i.payload = t, n != null && (i.callback = n), t = bo(e, i, r), t !== null && (Pd(t, e, r), xo(t, e, r));
		},
		enqueueForceUpdate: function(e, t) {
			e = e._reactInternals;
			var n = jd(), r = yo(n);
			r.tag = 2, t != null && (r.callback = t), t = bo(e, r, n), t !== null && (Pd(t, e, n), xo(t, e, n));
		}
	};
	function xc(e, t, n, r, i, a, o) {
		return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !Gr(n, r) || !Gr(i, a) : !0;
	}
	function Sc(e, t, n, r) {
		e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && bc.enqueueReplaceState(t, t.state, null);
	}
	function Cc(e, t) {
		var n = t;
		if ("ref" in t) for (var r in n = {}, t) r !== "ref" && (n[r] = t[r]);
		if (e = e.defaultProps) for (var i in n === t && (n = E({}, n)), e) n[i] === void 0 && (n[i] = e[i]);
		return n;
	}
	function wc(e) {
		Ci(e);
	}
	function Tc(e) {
		console.error(e);
	}
	function Ec(e) {
		Ci(e);
	}
	function Dc(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function Oc(e, t, n) {
		try {
			var r = e.onCaughtError;
			r(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			});
		} catch (e) {
			setTimeout(function() {
				throw e;
			});
		}
	}
	function kc(e, t, n) {
		return n = yo(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
			Dc(e, t);
		}, n;
	}
	function Ac(e) {
		return e = yo(e), e.tag = 3, e;
	}
	function jc(e, t, n, r) {
		var i = n.type.getDerivedStateFromError;
		if (typeof i == "function") {
			var a = r.value;
			e.payload = function() {
				return i(a);
			}, e.callback = function() {
				Oc(t, n, r);
			};
		}
		var o = n.stateNode;
		o !== null && typeof o.componentDidCatch == "function" && (e.callback = function() {
			Oc(t, n, r), typeof i != "function" && (vd === null ? vd = /* @__PURE__ */ new Set([this]) : vd.add(this));
			var e = r.stack;
			this.componentDidCatch(r.value, { componentStack: e === null ? "" : e });
		});
	}
	function Mc(e, t, n, r, i) {
		if (n.flags |= 32768, typeof r == "object" && r && typeof r.then == "function") {
			if (t = n.alternate, t !== null && wa(t, n, i, !0), n = No.current, n !== null) {
				switch (n.tag) {
					case 31:
					case 13:
					case 19: return z === null ? Kd() : n.alternate === null && ad === 0 && (ad = 3), n.flags &= -257, n.flags |= 65536, n.lanes = i, r === eo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([r]) : t.add(r), mf(e, r, i)), !1;
					case 22: return n.flags |= 65536, r === eo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
						transitions: null,
						markerInstances: null,
						retryQueue: /* @__PURE__ */ new Set([r])
					}, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([r]) : n.add(r)), mf(e, r, i)), !1;
				}
				throw Error(o(435, n.tag));
			}
			return mf(e, r, i), Kd(), !1;
		}
		if (R) return t = No.current, t === null ? (r !== la && (t = Error(o(423), { cause: r }), ga(Gi(t, n))), e = e.current.alternate, e.flags |= 65536, i &= -i, e.lanes |= i, r = Gi(r, n), i = kc(e.stateNode, r, i), So(e, i), ad !== 4 && (ad = 2)) : (!(t.flags & 65536) && (t.flags |= 256), t.flags |= 65536, t.lanes = i, r !== la && (e = Error(o(422), { cause: r }), ga(Gi(e, n)))), !1;
		var a = Error(o(520), { cause: r });
		if (a = Gi(a, n), dd === null ? dd = [a] : dd.push(a), ad !== 4 && (ad = 2), t === null) return !0;
		r = Gi(r, n), n = t;
		do {
			switch (n.tag) {
				case 3: return n.flags |= 65536, e = i & -i, n.lanes |= e, e = kc(n.stateNode, r, e), So(n, e), !1;
				case 1:
					if (t = n.type, a = n.stateNode, !(n.flags & 128) && (typeof t.getDerivedStateFromError == "function" || a !== null && typeof a.componentDidCatch == "function" && (vd === null || !vd.has(a)))) return n.flags |= 65536, i &= -i, n.lanes |= i, i = Ac(i), jc(i, e, n, r), So(n, i), !1;
					break;
				case 22: if (n.memoizedState !== null) return n.flags |= 65536, !1;
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var Nc = Error(o(461)), Pc = !1;
	function Fc(e, t, n, r) {
		t.child = e === null ? ho(t, null, n, r) : mo(t, e.child, n, r);
	}
	function Ic(e, t, n, r, i) {
		n = n.render;
		var a = t.ref;
		if ("ref" in r) {
			var o = {};
			for (var s in r) s !== "ref" && (o[s] = r[s]);
		} else o = r;
		return Ea(t), r = $o(e, t, n, o, a, i), s = rs(), e !== null && !Pc ? (is(e, t, i), ul(e, t, i)) : (R && s && ra(t), t.flags |= 1, Fc(e, t, r, i), t.child);
	}
	function Lc(e, t, n, r, i) {
		if (e === null) {
			var a = n.type;
			return typeof a == "function" && !Ii(a) && a.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = a, Rc(e, t, a, r, i)) : (e = zi(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
		}
		if (a = e.child, !dl(e, i)) {
			var o = a.memoizedProps;
			if (n = n.compare, n = n === null ? Gr : n, n(o, r) && e.ref === t.ref) return ul(e, t, i);
		}
		return t.flags |= 1, e = Li(a, r), e.ref = t.ref, e.return = t, t.child = e;
	}
	function Rc(e, t, n, r, i) {
		if (e !== null) {
			var a = e.memoizedProps;
			if (Gr(a, r) && e.ref === t.ref) {
				if (Pc = !1, t.pendingProps = r = a, dl(e, i)) e.flags & 131072 && (Pc = !0);
				else return t.lanes = e.lanes, ul(e, t, i);
			}
		}
		return Kc(e, t, n, r, i);
	}
	function zc(e, t, n, r) {
		var i = r.children, a = e === null ? null : e.memoizedState;
		if (e === null && t.stateNode === null && (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), r.mode === "hidden") {
			if (t.flags & 128) {
				if (a = a === null ? n : a.baseLanes | n, e !== null) {
					for (r = t.child = e.child, i = 0; r !== null;) i = i | r.lanes | r.childLanes, r = r.sibling;
					r = i & ~a;
				} else r = 0, t.child = null;
				return Vc(e, t, a, n, r);
			}
			if (n & 536870912) t.memoizedState = {
				baseLanes: 0,
				cachePool: null
			}, e !== null && Ya(t, a === null ? null : a.cachePool), a === null ? jo() : Ao(t, a), Io(t);
			else return r = t.lanes = 536870912, Vc(e, t, a === null ? n : a.baseLanes | n, n, r);
		} else a === null ? (e !== null && Ya(t, null), jo(), Lo()) : (Ya(t, a.cachePool), Ao(t, a), Lo(), t.memoizedState = null);
		return Fc(e, t, i, n), t.child;
	}
	function Bc(e, t) {
		return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
			_visibility: 1,
			_pendingMarkers: null,
			_retryCache: null,
			_transitions: null
		}), t.sibling;
	}
	function Vc(e, t, n, r, i) {
		var a = Ja();
		return a = a === null ? null : {
			parent: Na._currentValue,
			pool: a
		}, t.memoizedState = {
			baseLanes: n,
			cachePool: a
		}, e !== null && Ya(t, null), jo(), Io(t), e !== null && wa(e, t, r, !0), t.childLanes = i, null;
	}
	function Hc(e, t) {
		return t = tl({
			mode: t.mode,
			children: t.children
		}, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
	}
	function Uc(e, t, n) {
		return mo(t, e.child, null, n), e = Hc(t, t.pendingProps), e.flags |= 2, Ro(t), t.memoizedState = null, e;
	}
	function Wc(e, t, n) {
		var r = t.pendingProps, i = !!(t.flags & 128);
		if (t.flags &= -129, e === null) {
			if (R) {
				if (r.mode === "hidden") return e = Hc(t, r), t.lanes = 536870912, e.memoizedState = {
					baseLanes: 0,
					cachePool: null
				}, Bc(null, e);
				if (Fo(t), (e = L) ? (e = am(e, ca), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Qi === null ? null : {
						id: $i,
						overflow: ea
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Hi(e), n.return = t, t.child = n, oa = t, L = null)) : e = null, e === null) throw ua(t);
				return t.lanes = 536870912, null;
			}
			return Hc(t, r);
		}
		var a = e.memoizedState;
		if (a !== null) {
			var s = a.dehydrated;
			if (Fo(t), i) {
				if (t.flags & 256) t.flags &= -257, t = Uc(e, t, n);
				else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
				else throw Error(o(558));
			} else if (Pc || wa(e, t, n, !1), i = (n & e.childLanes) !== 0, Pc || i) {
				if (Oo.current === null) {
					if (r = q, r !== null && (s = bt(r, n), s !== 0 && s !== a.retryLane)) throw a.retryLane = s, Ai(e, s), Pd(r, e, s), Nc;
					Kd();
				}
				t = Uc(e, t, n);
			} else e = a.treeContext, L = lm(s.nextSibling), oa = t, R = !0, sa = null, ca = !1, e !== null && aa(t, e), t = Hc(t, r), t.flags |= 134221824;
			return t;
		}
		return e = Li(e.child, {
			mode: r.mode,
			children: r.children
		}), e.ref = t.ref, t.child = e, e.return = t, e;
	}
	function Gc(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(o(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Kc(e, t, n, r, i) {
		return Ea(t), n = $o(e, t, n, r, void 0, i), r = rs(), e !== null && !Pc ? (is(e, t, i), ul(e, t, i)) : (R && r && ra(t), t.flags |= 1, Fc(e, t, n, i), t.child);
	}
	function qc(e, t, n, r, i, a) {
		return Ea(t), t.updateQueue = null, n = ts(t, r, n, i), es(e), r = rs(), e !== null && !Pc ? (is(e, t, a), ul(e, t, a)) : (R && r && ra(t), t.flags |= 1, Fc(e, t, n, a), t.child);
	}
	function Jc(e, t, n, r, i) {
		if (Ea(t), t.stateNode === null) {
			var a = Ni, o = n.contextType;
			typeof o == "object" && o && (a = Da(o)), a = new n(r, a), t.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = bc, t.stateNode = a, a._reactInternals = t, a = t.stateNode, a.props = r, a.state = t.memoizedState, a.refs = {}, _o(t), o = n.contextType, a.context = typeof o == "object" && o ? Da(o) : Ni, a.state = t.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (yc(t, n, o, r), a.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof a.getSnapshotBeforeUpdate == "function" || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (o = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), o !== a.state && bc.enqueueReplaceState(a, a.state, null), To(t, r, a, i), wo(), a.state = t.memoizedState), typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !0;
		} else if (e === null) {
			a = t.stateNode;
			var s = t.memoizedProps, c = Cc(n, s);
			a.props = c;
			var l = a.context, u = n.contextType;
			o = Ni, typeof u == "object" && u && (o = Da(u));
			var d = n.getDerivedStateFromProps;
			u = typeof d == "function" || typeof a.getSnapshotBeforeUpdate == "function", s = t.pendingProps !== s, u || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (s || l !== o) && Sc(t, a, r, o), go = !1;
			var f = t.memoizedState;
			a.state = f, To(t, r, a, i), wo(), l = t.memoizedState, s || f !== l || go ? (typeof d == "function" && (yc(t, n, d, r), l = t.memoizedState), (c = go || xc(t, n, c, r, f, l, o)) ? (u || typeof a.UNSAFE_componentWillMount != "function" && typeof a.componentWillMount != "function" || (typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount()), typeof a.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = o, r = c) : (typeof a.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
		} else {
			a = t.stateNode, vo(e, t), o = t.memoizedProps, u = Cc(n, o), a.props = u, d = t.pendingProps, f = a.context, l = n.contextType, c = Ni, typeof l == "object" && l && (c = Da(l)), s = n.getDerivedStateFromProps, (l = typeof s == "function" || typeof a.getSnapshotBeforeUpdate == "function") || typeof a.UNSAFE_componentWillReceiveProps != "function" && typeof a.componentWillReceiveProps != "function" || (o !== d || f !== c) && Sc(t, a, r, c), go = !1, f = t.memoizedState, a.state = f, To(t, r, a, i), wo();
			var p = t.memoizedState;
			o !== d || f !== p || go || e !== null && e.dependencies !== null && Ta(e.dependencies) ? (typeof s == "function" && (yc(t, n, s, r), p = t.memoizedState), (u = go || xc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && Ta(e.dependencies)) ? (l || typeof a.UNSAFE_componentWillUpdate != "function" && typeof a.componentWillUpdate != "function" || (typeof a.componentWillUpdate == "function" && a.componentWillUpdate(r, p, c), typeof a.UNSAFE_componentWillUpdate == "function" && a.UNSAFE_componentWillUpdate(r, p, c)), typeof a.componentDidUpdate == "function" && (t.flags |= 4), typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : (typeof a.componentDidUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), typeof a.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1);
		}
		return a = r, Gc(e, t), r = !!(t.flags & 128), a || r ? (a = t.stateNode, n = r && typeof n.getDerivedStateFromError != "function" ? null : a.render(), t.flags |= 1, e !== null && r ? (t.child = mo(t, e.child, null, i), t.child = mo(t, null, n, i)) : Fc(e, t, n, i), t.memoizedState = a.state, e = t.child) : e = ul(e, t, i), e;
	}
	function Yc(e, t, n, r) {
		return ma(), t.flags |= 256, Fc(e, t, n, r), t.child;
	}
	var Xc = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	};
	function Zc(e) {
		return {
			baseLanes: e,
			cachePool: Xa()
		};
	}
	function Qc(e, t, n) {
		return e = e === null ? 0 : e.childLanes & ~n, t && (e |= ld), e;
	}
	function $c(e, t, n) {
		var r = t.pendingProps, i = !1, a = !!(t.flags & 128), o;
		if ((o = a) || (o = e !== null && e.memoizedState === null ? !1 : !!(B.current & 2)), o && (i = !0, t.flags &= -129), o = !!(t.flags & 32), t.flags &= -33, e === null) {
			if (R) {
				if (i ? Po(t) : Lo(), (e = L) ? (e = am(e, ca), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
					dehydrated: e,
					treeContext: Qi === null ? null : {
						id: $i,
						overflow: ea
					},
					retryLane: 536870912,
					hydrationErrors: null
				}, n = Hi(e), n.return = t, t.child = n, oa = t, L = null)) : e = null, e === null) throw ua(t);
				return t.lanes = sm(e) ? 32 : 536870912, null;
			}
			return a = r.children, r = r.fallback, i ? (Lo(), i = t.mode, a = tl({
				mode: "hidden",
				children: a
			}, i), r = Bi(r, i, n, null), a.return = t, r.return = t, a.sibling = r, t.child = a, r = t.child, r.memoizedState = Zc(n), r.childLanes = Qc(e, o, n), t.memoizedState = Xc, Bc(null, r)) : (Po(t), el(t, a));
		}
		var s = e.memoizedState;
		if (s !== null) {
			var c = s.dehydrated;
			if (c !== null) return rl(e, t, a, o, r, c, s, n);
		}
		return i ? (Lo(), i = r.fallback, a = t.mode, s = e.child, c = s.sibling, r = Li(s, {
			mode: "hidden",
			children: r.children
		}), r.subtreeFlags = s.subtreeFlags & 1206910976, c === null ? (i = Bi(i, a, n, null), i.flags |= 2) : i = Li(c, i), i.return = t, r.return = t, r.sibling = i, t.child = r, Bc(null, r), r = t.child, i = e.child.memoizedState, i === null ? i = Zc(n) : (a = i.cachePool, a === null ? a = Xa() : (s = Na._currentValue, a = a.parent === s ? a : {
			parent: s,
			pool: s
		}), i = {
			baseLanes: i.baseLanes | n,
			cachePool: a
		}), r.memoizedState = i, r.childLanes = Qc(e, o, n), t.memoizedState = Xc, Bc(e.child, r)) : (Po(t), n = e.child, e = n.sibling, n = Li(n, {
			mode: "visible",
			children: r.children
		}), n.return = t, n.sibling = null, e !== null && (o = t.deletions, o === null ? (t.deletions = [e], t.flags |= 16) : o.push(e)), t.child = n, t.memoizedState = null, n);
	}
	function el(e, t) {
		return t = tl({
			mode: "visible",
			children: t
		}, e.mode), t.return = e, e.child = t;
	}
	function tl(e, t) {
		return e = Fi(22, e, null, t), e.lanes = 0, e;
	}
	function nl(e, t, n) {
		return mo(t, e.child, null, n), e = el(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
	}
	function rl(e, t, n, r, i, a, s, c) {
		if (n) return t.flags & 256 ? (Po(t), t.flags &= -257, nl(e, t, c)) : t.memoizedState === null ? (Lo(), a = i.fallback, s = t.mode, i = tl({
			mode: "visible",
			children: i.children
		}, s), a = Bi(a, s, c, null), a.flags |= 2, i.return = t, a.return = t, i.sibling = a, t.child = i, mo(t, e.child, null, c), i = t.child, i.memoizedState = Zc(c), i.childLanes = Qc(e, r, c), t.memoizedState = Xc, Bc(null, i)) : (Lo(), t.child = e.child, t.flags |= 128, null);
		if (Po(t), sm(a)) {
			if (r = a.nextSibling && a.nextSibling.dataset, r) var l = r.dgst;
			return r = l, r !== "" && (i = Error(o(419)), i.stack = "", i.digest = r, ga({
				value: i,
				source: null,
				stack: null
			})), nl(e, t, c);
		}
		if (Pc || wa(e, t, c, !1), r = (c & e.childLanes) !== 0, Pc || r) {
			if (Oo.current !== null) return nl(e, t, c);
			if (r = q, r !== null && (i = bt(r, c), i !== 0 && i !== s.retryLane)) throw s.retryLane = i, Ai(e, i), Pd(r, e, i), Nc;
			return om(a) || Kd(), nl(e, t, c);
		}
		return om(a) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, L = lm(a.nextSibling), oa = t, R = !0, sa = null, ca = !1, e !== null && aa(t, e), t = el(t, i.children), t.flags |= 134221824, t);
	}
	function il(e, t, n) {
		e.lanes |= t;
		var r = e.alternate;
		r !== null && (r.lanes |= t), Sa(e.return, t, n);
	}
	function al(e) {
		for (var t = null; e !== null;) {
			var n = e.alternate;
			n !== null && Vo(n) === null && (t = e), e = e.sibling;
		}
		return t;
	}
	function ol(e, t, n, r, i, a) {
		var o = e.memoizedState;
		o === null ? e.memoizedState = {
			isBackwards: t,
			rendering: null,
			renderingStartTime: 0,
			last: r,
			tail: n,
			tailMode: i,
			treeForkCount: a
		} : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = i, o.treeForkCount = a);
	}
	function sl(e) {
		var t = e.child;
		for (e.child = null; t !== null;) {
			var n = t.sibling;
			t.sibling = e.child, e.child = t, t = n;
		}
	}
	function cl(e, t, n) {
		var r = t.pendingProps, i = r.revealOrder, a = r.tail;
		r = r.children;
		var o = B.current;
		if (t.flags & 128) return zo(t, o), null;
		var s = !!(o & 2);
		if (s ? (o = o & 1 | 2, t.flags |= 128) : o &= 1, zo(t, o), i === "backwards" && e !== null ? (sl(e), Fc(e, t, r, n), sl(e)) : Fc(e, t, r, n), r = R ? Yi : 0, !s && e !== null && e.flags & 128) a: for (e = t.child; e !== null;) {
			if (e.tag === 13) e.memoizedState !== null && il(e, n, t);
			else if (e.tag === 19) il(e, n, t);
			else if (e.child !== null) {
				e.child.return = e, e = e.child;
				continue;
			}
			if (e === t) break a;
			for (; e.sibling === null;) {
				if (e.return === null || e.return === t) break a;
				e = e.return;
			}
			e.sibling.return = e.return, e = e.sibling;
		}
		switch (i) {
			case "backwards":
				n = al(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null, sl(t)), ol(t, !0, i, null, a, r);
				break;
			case "unstable_legacy-backwards":
				for (n = null, i = t.child, t.child = null; i !== null;) {
					if (e = i.alternate, e !== null && Vo(e) === null) {
						t.child = i;
						break;
					}
					e = i.sibling, i.sibling = n, n = i, i = e;
				}
				ol(t, !0, n, null, a, r);
				break;
			case "together":
				ol(t, !1, null, null, void 0, r);
				break;
			case "independent":
				t.memoizedState = null;
				break;
			default: n = al(t.child), n === null ? (i = t.child, t.child = null) : (i = n.sibling, n.sibling = null), ol(t, !1, i, n, a, r);
		}
		return t.child;
	}
	function ll(e, t, n) {
		var r = t.pendingProps;
		return ba(t, t.type, r.value), Fc(e, t, r.children, n), t.child;
	}
	function ul(e, t, n) {
		if (e !== null && (t.dependencies = e.dependencies), od |= t.lanes, (n & t.childLanes) === 0) {
			if (e !== null) {
				if (wa(e, t, n, !1), (n & t.childLanes) === 0) return null;
			} else return null;
		}
		if (e !== null && t.child !== e.child) throw Error(o(153));
		if (t.child !== null) {
			for (e = t.child, n = Li(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Li(e, e.pendingProps), n.return = t;
			n.sibling = null;
		}
		return t.child;
	}
	function dl(e, t) {
		return (e.lanes & t) !== 0 || (e = e.dependencies, !!(e !== null && Ta(e)));
	}
	function fl(e, t, n) {
		switch (t.tag) {
			case 3:
				Ae(t, t.stateNode.containerInfo), ba(t, Na, e.memoizedState.cache), ma();
				break;
			case 27:
			case 5:
				Me(t);
				break;
			case 4:
				Ae(t, t.stateNode.containerInfo);
				break;
			case 10:
				ba(t, t.type, t.memoizedProps.value);
				break;
			case 31:
				if (t.memoizedState !== null) return t.flags |= 128, Fo(t), null;
				break;
			case 13:
				var r = t.memoizedState;
				if (r !== null) {
					if (r.dehydrated !== null) return Po(t), t.flags |= 128, null;
					r = wa(e, t, n, !1);
					var i = t.child.childLanes;
					return r || (n & i) !== 0 ? $c(e, t, n) : (Po(t), e = ul(e, t, n), e === null ? null : e.sibling);
				}
				Po(t);
				break;
			case 19:
				if (t.flags & 128) return cl(e, t, n);
				if (i = !!(e.flags & 128), r = (n & t.childLanes) !== 0, r ||= (wa(e, t, n, !1), (n & t.childLanes) !== 0), i) {
					if (r) return cl(e, t, n);
					t.flags |= 128;
				}
				if (i = t.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), zo(t, B.current), r) break;
				return null;
			case 22: return t.lanes = 0, zc(e, t, n, t.pendingProps);
			case 24: ba(t, Na, e.memoizedState.cache);
		}
		return ul(e, t, n);
	}
	function pl(e, t, n) {
		if (e !== null) {
			if (e.memoizedProps !== t.pendingProps) Pc = !0;
			else {
				if (!dl(e, n) && !(t.flags & 128)) return Pc = !1, fl(e, t, n);
				Pc = !!(e.flags & 131072);
			}
		} else Pc = !1, R && t.flags & 1048576 && na(t, Yi, t.index);
		switch (t.lanes = 0, t.tag) {
			case 16:
				a: {
					var r = t.pendingProps;
					if (e = ro(t.elementType), t.type = e, typeof e == "function") Ii(e) ? (r = Cc(e, r), t.tag = 1, t = Jc(null, t, e, r, n)) : (t.tag = 0, t = Kc(null, t, e, r, n));
					else {
						if (e != null) {
							var i = e.$$typeof;
							if (i === D) {
								t.tag = 11, t = Ic(null, t, e, r, n);
								break a;
							}
							if (i === de) {
								t.tag = 14, t = Lc(null, t, e, r, n);
								break a;
							}
							if (i === ce) {
								t.tag = 10, t.type = e, t = ll(null, t, n);
								break a;
							}
						}
						throw t = xe(e) || e, Error(o(306, t, ""));
					}
				}
				return t;
			case 0: return Kc(e, t, t.type, t.pendingProps, n);
			case 1: return r = t.type, i = Cc(r, t.pendingProps), Jc(e, t, r, i, n);
			case 3:
				a: {
					if (Ae(t, t.stateNode.containerInfo), e === null) throw Error(o(387));
					r = t.pendingProps;
					var a = t.memoizedState;
					i = a.element, vo(e, t), To(t, r, null, n);
					var s = t.memoizedState;
					if (r = s.cache, ba(t, Na, r), r !== a.cache && Ca(t, [Na], n, !0), wo(), r = s.element, a.isDehydrated) {
						if (a = {
							element: r,
							isDehydrated: !1,
							cache: s.cache
						}, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
							t = Yc(e, t, r, n);
							break a;
						}
						if (r !== i) {
							i = Gi(Error(o(424)), t), ga(i), t = Yc(e, t, r, n);
							break a;
						}
						switch (e = t.stateNode.containerInfo, e.nodeType) {
							case 9:
								e = e.body;
								break;
							default: e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
						}
						for (L = lm(e.firstChild), oa = t, R = !0, sa = null, ca = !0, n = ho(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 134221824, n = n.sibling;
					} else {
						if (ma(), r === i) {
							t = ul(e, t, n);
							break a;
						}
						Fc(e, t, r, n);
					}
					t = t.child;
				}
				return t;
			case 26: return Gc(e, t), e === null ? (n = Nm(t.type, null, t.pendingProps, null)) ? t.memoizedState = n : R || (t.stateNode = fp(t.type, t.pendingProps, Oe.current, t)) : t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
			case 27: return Me(t), e === null && R && (r = t.stateNode = hm(t.type, t.pendingProps, Oe.current), oa = t, ca = !0, i = L, Sp(t.type) ? (um = i, L = lm(r.firstChild)) : L = i), Fc(e, t, t.pendingProps.children, n), Gc(e, t), e === null && (t.flags |= 4194304), t.child;
			case 5: return e === null && R && ((i = r = L) && (r = rm(r, t.type, t.pendingProps, ca), r === null ? i = !1 : (t.stateNode = r, oa = t, L = lm(r.firstChild), ca = !1, i = !0)), i || ua(t)), Me(t), i = t.type, a = t.pendingProps, s = e === null ? null : e.memoizedProps, r = a.children, pp(i, a) ? r = null : s !== null && pp(i, s) && (t.flags |= 32), t.memoizedState !== null && (i = $o(e, t, ns, null, null, n), sh._currentValue = i), Gc(e, t), Fc(e, t, r, n), t.child;
			case 6: return e === null && R && ((e = n = L) && (n = im(n, t.pendingProps, ca), n === null ? e = !1 : (t.stateNode = n, oa = t, L = null, e = !0)), e || ua(t)), null;
			case 13: return $c(e, t, n);
			case 4: return Ae(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mo(t, null, r, n) : Fc(e, t, r, n), t.child;
			case 11: return Ic(e, t, t.type, t.pendingProps, n);
			case 7: return r = t.pendingProps, Gc(e, t), Fc(e, t, r, n), t.child;
			case 8: return Fc(e, t, t.pendingProps.children, n), t.child;
			case 12: return Fc(e, t, t.pendingProps.children, n), t.child;
			case 10: return ll(e, t, n);
			case 9: return i = t.type._context, r = t.pendingProps.children, Ea(t), i = Da(i), r = r(i), t.flags |= 1, Fc(e, t, r, n), t.child;
			case 14: return Lc(e, t, t.type, t.pendingProps, n);
			case 15: return Rc(e, t, t.type, t.pendingProps, n);
			case 19: return cl(e, t, n);
			case 31: return Wc(e, t, n);
			case 22: return zc(e, t, n, t.pendingProps);
			case 24: return Ea(t), r = Da(Na), e === null ? (i = Ja(), i === null && (i = q, a = Pa(), i.pooledCache = a, a.refCount++, a !== null && (i.pooledCacheLanes |= n), i = a), t.memoizedState = {
				parent: r,
				cache: i
			}, _o(t), ba(t, Na, i)) : ((e.lanes & n) !== 0 && (vo(e, t), To(t, null, null, n), wo()), i = e.memoizedState, a = t.memoizedState, i.parent === r ? (r = a.cache, ba(t, Na, r), r !== i.cache && Ca(t, [Na], n, !0)) : (i = {
				parent: r,
				cache: r
			}, t.memoizedState = i, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = i), ba(t, Na, r))), Fc(e, t, t.pendingProps.children, n), t.child;
			case 30: return t.stateNode === null && (t.stateNode = {
				autoName: null,
				paired: null,
				clones: null,
				ref: null
			}), r = t.pendingProps, r.name != null && r.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : R && ra(t), e !== null && e.memoizedProps.name !== r.name ? t.flags |= 4194816 : Gc(e, t), Fc(e, t, r.children, n), t.child;
			case 29: throw t.pendingProps;
		}
		throw Error(o(156, t.tag));
	}
	function ml(e) {
		e.flags |= 4;
	}
	function hl(e, t, n, r, i) {
		var a;
		if ((a = !!(e.mode & 32)) && (a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)), a) {
			if (e.flags |= 16777216, (i & 335544128) === i) {
				if (e.stateNode.complete) e.flags |= 8192;
				else if (Ud()) e.flags |= 8192;
				else throw io = eo, Qa;
			}
		} else e.flags &= -16777217;
	}
	function gl(e, t) {
		if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
		else if (e.flags |= 16777216, !Ym(t)) {
			if (Ud()) e.flags |= 8192;
			else throw io = eo, Qa;
		}
	}
	function _l(e, t) {
		t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag === 22 ? 536870912 : ht(), e.lanes |= t, ud |= t);
	}
	function vl(e, t) {
		if (!R) switch (e.tailMode) {
			case "visible": break;
			case "collapsed":
				for (var n = e.tail, r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
				r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
				break;
			default:
				for (t = e.tail, n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
				n === null ? e.tail = null : n.sibling = null;
		}
	}
	function U(e) {
		var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
		if (t) for (var i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 1206910976, r |= i.flags & 1206910976, i.return = e, i = i.sibling;
		else for (i = e.child; i !== null;) n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling;
		return e.subtreeFlags |= r, e.childLanes = n, t;
	}
	function yl(e, t, n) {
		var r = t.pendingProps;
		switch (ia(t), t.tag) {
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14: return U(t), null;
			case 1: return U(t), null;
			case 3: return n = t.stateNode, r = null, e !== null && (r = e.memoizedState.cache), t.memoizedState.cache !== r && (t.flags |= 2048), xa(Na), je(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (pa(t) ? ml(t) : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, ha())), U(t), null;
			case 26:
				var i = t.type, a = t.memoizedState;
				return e === null ? (ml(t), a === null ? (U(t), hl(t, i, null, r, n)) : (U(t), gl(t, a))) : a ? a === e.memoizedState ? (U(t), t.flags &= -16777217) : (ml(t), U(t), gl(t, a)) : (e = e.memoizedProps, e !== r && ml(t), U(t), hl(t, i, e, r, n)), null;
			case 27:
				if (Ne(t), n = Oe.current, i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && ml(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(o(166));
						return U(t), t.subtreeFlags &= -33554433, null;
					}
					e = Ee.current, pa(t) ? da(t, e) : (e = hm(i, r, n), t.stateNode = e, ml(t));
				}
				return U(t), t.subtreeFlags &= -33554433, null;
			case 5:
				if (Ne(t), i = t.type, e !== null && t.stateNode != null) e.memoizedProps !== r && ml(t);
				else {
					if (!r) {
						if (t.stateNode === null) throw Error(o(166));
						return U(t), t.subtreeFlags &= -33554433, null;
					}
					if (a = Ee.current, pa(t)) da(t, a);
					else {
						var s = lp(Oe.current);
						switch (a) {
							case 1:
								a = s.createElementNS("http://www.w3.org/2000/svg", i);
								break;
							case 2:
								a = s.createElementNS("http://www.w3.org/1998/Math/MathML", i);
								break;
							default: switch (i) {
								case "svg":
									a = s.createElementNS("http://www.w3.org/2000/svg", i);
									break;
								case "math":
									a = s.createElementNS("http://www.w3.org/1998/Math/MathML", i);
									break;
								case "script":
									a = s.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild);
									break;
								case "select":
									a = typeof r.is == "string" ? s.createElement("select", { is: r.is }) : s.createElement("select"), r.multiple ? a.multiple = !0 : r.size && (a.size = r.size);
									break;
								default: a = typeof r.is == "string" ? s.createElement(i, { is: r.is }) : s.createElement(i);
							}
						}
						a[Et] = t, a[Dt] = r;
						a: for (s = t.child; s !== null;) {
							if (s.tag === 5 || s.tag === 6) a.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								s.child.return = s, s = s.child;
								continue;
							}
							if (s === t) break a;
							for (; s.sibling === null;) {
								if (s.return === null || s.return === t) break a;
								s = s.return;
							}
							s.sibling.return = s.return, s = s.sibling;
						}
						t.stateNode = a;
						a: switch (np(a, i, r), i) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								r = !!r.autoFocus;
								break a;
							case "img":
								r = !0;
								break a;
							default: r = !1;
						}
						r && ml(t);
					}
				}
				return U(t), t.subtreeFlags &= -33554433, hl(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== r && ml(t);
				else {
					if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
					if (e = Oe.current, pa(t)) {
						if (e = t.stateNode, n = t.memoizedProps, r = null, i = oa, i !== null) switch (i.tag) {
							case 27:
							case 5: r = i.memoizedProps;
						}
						e[Et] = t, e = !!(e.nodeValue === n || r !== null && !0 === r.suppressHydrationWarning || ep(e.nodeValue, n)), e || ua(t, !0);
					} else e = lp(e).createTextNode(r), e[Et] = t, t.stateNode = e;
				}
				return U(t), null;
			case 31:
				if (n = t.memoizedState, e === null || e.memoizedState !== null) {
					if (r = pa(t), n !== null) {
						if (e === null) {
							if (!r) throw Error(o(318));
							if (e = t.memoizedState, e = e === null ? null : e.dehydrated, !e) throw Error(o(557));
							e[Et] = t;
						} else ma(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						U(t), e = !1;
					} else n = ha(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
					if (!e) return t.flags & 256 ? (Ro(t), t) : (Ro(t), null);
					if (t.flags & 128) throw Error(o(558));
				}
				return U(t), null;
			case 13:
				if (r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
					if (i = pa(t), r !== null && r.dehydrated !== null) {
						if (e === null) {
							if (!i) throw Error(o(318));
							if (i = t.memoizedState, i = i === null ? null : i.dehydrated, !i) throw Error(o(317));
							i[Et] = t;
						} else ma(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
						U(t), i = !1;
					} else i = ha(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = i), i = !0;
					if (!i) return t.flags & 256 ? (Ro(t), t) : (Ro(t), null);
				}
				return Ro(t), t.flags & 128 ? (t.lanes = n, t) : (n = r !== null, e = e !== null && e.memoizedState !== null, n && (r = t.child, i = null, r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null && (i = r.alternate.memoizedState.cachePool.pool), a = null, r.memoizedState !== null && r.memoizedState.cachePool !== null && (a = r.memoizedState.cachePool.pool), a !== i && (r.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), _l(t, t.updateQueue), U(t), null);
			case 4: return je(), e === null && Wf(t.stateNode.containerInfo), t.flags |= 67108864, U(t), null;
			case 10: return xa(t.type), U(t), null;
			case 19:
				if (Bo(t), r = t.memoizedState, r === null) return U(t), null;
				if (i = !!(t.flags & 128), a = r.rendering, a === null) {
					if (i) vl(r, !1);
					else {
						if (ad !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null;) {
							if (a = Vo(e), a !== null) {
								for (t.flags |= 128, vl(r, !1), e = a.updateQueue, t.updateQueue = e, _l(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null;) Ri(n, e), n = n.sibling;
								return zo(t, B.current & 1 | 2), R && ta(t, r.treeForkCount), t.child;
							}
							e = e.sibling;
						}
						r.tail !== null && Ge() > gd && (t.flags |= 128, i = !0, vl(r, !1), t.lanes = 4194304);
					}
				} else {
					if (!i) {
						if (e = Vo(a), e !== null) {
							if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, _l(t, e), vl(r, !0), r.tail === null && r.tailMode !== "collapsed" && r.tailMode !== "visible" && !a.alternate && !R) return U(t), null;
						} else 2 * Ge() - r.renderingStartTime > gd && n !== 536870912 && (t.flags |= 128, i = !0, vl(r, !1), t.lanes = 4194304);
					}
					r.isBackwards ? (a.sibling = t.child, t.child = a) : (e = r.last, e === null ? t.child = a : e.sibling = a, r.last = a);
				}
				if (r.tail !== null) {
					e = r.tail;
					a: {
						for (n = e; n !== null;) {
							if (n.alternate !== null) {
								n = !1;
								break a;
							}
							n = n.sibling;
						}
						n = !0;
					}
					return r.rendering = e, r.tail = e.sibling, r.renderingStartTime = Ge(), e.sibling = null, a = B.current, a = i ? a & 1 | 2 : a & 1, r.tailMode === "visible" || r.tailMode === "collapsed" || !n || R ? zo(t, a) : (n = a, M(No, t), M(B, n), z === null && (z = t)), R && ta(t, r.treeForkCount), e;
				}
				return U(t), null;
			case 22:
			case 23: return Ro(t), Mo(), r = t.memoizedState !== null, e === null ? r && (t.flags |= 8192) : e.memoizedState !== null !== r && (t.flags |= 8192), r ? n & 536870912 && !(t.flags & 128) && (U(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : U(t), n = t.updateQueue, n !== null && _l(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), r = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (r = t.memoizedState.cachePool.pool), r !== n && (t.flags |= 2048), e !== null && Te(qa), null;
			case 24: return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), xa(Na), U(t), null;
			case 25: return null;
			case 30: return t.flags |= 33554432, U(t), null;
		}
		throw Error(o(156, t.tag));
	}
	function bl(e, t) {
		switch (ia(t), t.tag) {
			case 1: return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 3: return xa(Na), je(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
			case 26:
			case 27:
			case 5: return Ne(t), null;
			case 31:
				if (t.memoizedState !== null) {
					if (Ro(t), t.alternate === null) throw Error(o(340));
					ma();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 13:
				if (Ro(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
					if (t.alternate === null) throw Error(o(340));
					ma();
				}
				return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 19: return Bo(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
			case 4: return je(), null;
			case 10: return xa(t.type), null;
			case 22:
			case 23: return Ro(t), Mo(), e !== null && Te(qa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
			case 24: return xa(Na), null;
			case 25: return null;
			default: return null;
		}
	}
	function xl(e, t) {
		switch (ia(t), t.tag) {
			case 3:
				xa(Na), je();
				break;
			case 26:
			case 27:
			case 5:
				Ne(t);
				break;
			case 4:
				je();
				break;
			case 31:
				t.memoizedState !== null && Ro(t);
				break;
			case 13:
				Ro(t);
				break;
			case 19:
				Bo(t);
				break;
			case 10:
				xa(t.type);
				break;
			case 22:
			case 23:
				Ro(t), Mo(), e !== null && Te(qa);
				break;
			case 24: xa(Na);
		}
	}
	function Sl(e, t) {
		try {
			var n = t.updateQueue, r = n === null ? null : n.lastEffect;
			if (r !== null) {
				var i = r.next;
				n = i;
				do {
					if ((n.tag & e) === e) {
						r = void 0;
						var a = n.create, o = n.inst;
						r = a(), o.destroy = r;
					}
					n = n.next;
				} while (n !== i);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Cl(e, t, n) {
		try {
			var r = t.updateQueue, i = r === null ? null : r.lastEffect;
			if (i !== null) {
				var a = i.next;
				r = a;
				do {
					if ((r.tag & e) === e) {
						var o = r.inst, s = o.destroy;
						if (s !== void 0) {
							o.destroy = void 0, i = t;
							var c = n, l = s;
							try {
								l();
							} catch (e) {
								Z(i, c, e);
							}
						}
					}
					r = r.next;
				} while (r !== a);
			}
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function wl(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				Do(t, n);
			} catch (t) {
				Z(e, e.return, t);
			}
		}
	}
	function Tl(e, t, n) {
		n.props = Cc(e.type, e.memoizedProps), n.state = e.memoizedState;
		try {
			n.componentWillUnmount();
		} catch (n) {
			Z(e, t, n);
		}
	}
	function El(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var r = e.stateNode;
						break;
					case 30:
						var i = e.stateNode, a = bi(e.memoizedProps, i);
						(i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)), r = i.ref;
						break;
					case 7:
						if (e.stateNode === null) {
							var o = new Fp(e);
							h(e.child, !1, Qp, o, void 0, void 0), e.stateNode = o;
						}
						r = e.stateNode;
						break;
					default: r = e.stateNode;
				}
				typeof n == "function" ? e.refCleanup = n(r) : n.current = r;
			}
		} catch (n) {
			Z(e, t, n);
		}
	}
	function Dl(e, t) {
		var n = e.ref, r = e.refCleanup;
		if (n !== null) {
			if (typeof r == "function") try {
				r();
			} catch (n) {
				Z(e, t, n);
			} finally {
				e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
			}
			else if (typeof n == "function") try {
				n(null);
			} catch (n) {
				Z(e, t, n);
			}
			else n.current = null;
		}
	}
	function Ol(e, t) {
		if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
	}
	function kl(e) {
		for (var t = e.return; t !== null && (Ml(t) && em(e.stateNode, t.stateNode), !jl(t));) t = t.return;
	}
	function Al(e) {
		for (var t = e.return; t !== null && (Ml(t) && tm(e.stateNode, t.stateNode), !jl(t));) t = t.return;
	}
	function jl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 27;
	}
	function Ml(e) {
		return e && e.tag === 7 && e.stateNode !== null;
	}
	function Nl(e) {
		var t = e.type, n = e.memoizedProps, r = e.stateNode;
		try {
			a: switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && r.focus();
					break a;
				case "img": n.src ? r.src = n.src : n.srcSet && (r.srcset = n.srcSet);
			}
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Pl(e, t, n) {
		try {
			var r = e.stateNode;
			ip(r, e.type, n, t), r[Dt] = t;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	function Fl(e) {
		return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
	}
	function Il(e) {
		a: for (;;) {
			for (; e.sibling === null;) {
				if (e.return === null || Fl(e.return)) return null;
				e = e.return;
			}
			for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
				if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue a;
				e.child.return = e, e = e.child;
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Ll(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(i, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(i), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = xn)), Ol(e, r), I = !0;
		else if (i !== 4 && (i === 27 && (Ol(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) for (Ll(e, t, n, r), e = e.sibling; e !== null;) Ll(e, t, n, r), e = e.sibling;
	}
	function Rl(e, t, n, r) {
		var i = e.tag;
		if (i === 5 || i === 6) i = e.stateNode, t ? n.insertBefore(i, t) : n.appendChild(i), Ol(e, r), I = !0;
		else if (i !== 4 && (i === 27 && (Ol(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) for (Rl(e, t, n, r), e = e.sibling; e !== null;) Rl(e, t, n, r), e = e.sibling;
	}
	function zl(e) {
		var t = e.stateNode, n = e.memoizedProps;
		try {
			for (var r = e.type, i = t.attributes; i.length;) t.removeAttributeNode(i[0]);
			np(t, r, n), t[Et] = e, t[Dt] = n;
		} catch (t) {
			Z(e, e.return, t);
		}
	}
	var Bl = !1, Vl = null;
	function Hl(e) {
		(e.tag === 30 || e.subtreeFlags & 33554432) && (Bl = !0);
	}
	var Ul = null;
	function Wl() {
		var e = Ul;
		return Ul = null, e;
	}
	var Gl = 0;
	function Kl(e, t, n, r, i) {
		return Gl = 0, ql(e.child, t, n, r, i);
	}
	function ql(e, t, n, r, i) {
		for (var a = !1; e !== null;) {
			if (e.tag === 5) {
				var o = e.stateNode;
				if (r !== null) {
					var s = Op(o);
					r.push(s), s.view && (a = !0);
				} else a || Op(o).view && (a = !0);
				Bl = !0, Tp(o, Gl === 0 ? t : t + "_" + Gl, n), Gl++;
			} else e.tag === 22 && e.memoizedState !== null || e.tag === 30 && i || ql(e.child, t, n, r, i) && (a = !0);
			e = e.sibling;
		}
		return a;
	}
	function Jl(e, t) {
		for (; e !== null;) e.tag === 5 ? Ep(e.stateNode, e.memoizedProps) : e.tag === 22 && e.memoizedState !== null || e.tag === 30 && t || Jl(e.child, t), e = e.sibling;
	}
	function Yl(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if ((e.tag !== 22 || e.memoizedState === null) && (Yl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
				var t = e.memoizedProps;
				if (t.name == null || t.name === "auto") throw Error(o(544));
				var n = t.name;
				t = Si(t.default, t.share), t !== "none" && (Kl(e, n, t, null, !1) || Jl(e.child, !1));
			}
			e = e.sibling;
		}
	}
	function Xl(e, t) {
		if (e.tag === 30) {
			var n = e.stateNode, r = e.memoizedProps, i = bi(r, n), a = Si(r.default, n.paired ? r.share : r.enter);
			a === "none" ? Yl(e) : Kl(e, i, a, null, !1) ? (Yl(e), n.paired || t || Nd(e, r.onEnter)) : Jl(e.child, !1);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Xl(e, t), e = e.sibling;
		else Yl(e);
	}
	function Zl(e) {
		if (Vl !== null && Vl.size !== 0) {
			var t = Vl;
			if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
				if (e.tag !== 22 || e.memoizedState === null) {
					if (e.tag === 30 && e.flags & 18874368) {
						var n = e.memoizedProps, r = n.name;
						if (r != null && r !== "auto") {
							var i = t.get(r);
							if (i !== void 0) {
								var a = Si(n.default, n.share);
								if (a !== "none" && (Kl(e, r, a, null, !1) ? (a = e.stateNode, i.paired = a, a.paired = i, Nd(e, n.onShare)) : Jl(e.child, !1)), t.delete(r), t.size === 0) break;
							}
						}
					}
					Zl(e);
				}
				e = e.sibling;
			}
		}
	}
	function Ql(e) {
		if (e.tag === 30) {
			var t = e.memoizedProps, n = bi(t, e.stateNode), r = Vl === null ? void 0 : Vl.get(n), i = Si(t.default, r === void 0 ? t.exit : t.share);
			i !== "none" && (Kl(e, n, i, null, !1) ? r === void 0 ? Nd(e, t.onExit) : (i = e.stateNode, r.paired = i, i.paired = r, Vl.delete(n), Nd(e, t.onShare)) : Jl(e.child, !1)), Vl !== null && Zl(e);
		} else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) Ql(e), e = e.sibling;
		else Vl !== null && Zl(e);
	}
	function $l(e) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var t = e.memoizedProps, n = bi(t, e.stateNode);
				t = Si(t.default, t.update), e.flags &= -5, t !== "none" && Kl(e, n, t, e.memoizedState = [], !1);
			} else e.subtreeFlags & 33554432 && $l(e);
			e = e.sibling;
		}
	}
	function eu(e) {
		if (e.subtreeFlags & 18874368) for (e = e.child; e !== null;) {
			if (e.tag !== 22 || e.memoizedState === null) {
				if (e.tag === 30 && e.flags & 18874368) {
					var t = e.stateNode;
					t.paired !== null && (t.paired = null, Jl(e.child, !1));
				}
				eu(e);
			}
			e = e.sibling;
		}
	}
	function tu(e) {
		if (e.tag === 30) e.stateNode.paired = null, Jl(e.child, !1), eu(e);
		else if (e.subtreeFlags & 33554432) for (e = e.child; e !== null;) tu(e), e = e.sibling;
		else eu(e);
	}
	function nu(e) {
		for (e = e.child; e !== null;) e.tag === 30 ? Jl(e.child, !1) : e.subtreeFlags & 33554432 && nu(e), e = e.sibling;
	}
	function ru(e, t, n, r, i, a, o) {
		for (var s = !1; t !== null;) {
			if (t.tag === 5) {
				var c = t.stateNode;
				if (a !== null && Gl < a.length) {
					var l = a[Gl], u = Op(c);
					(l.view || u.view) && (s = !0);
					var d;
					if (d = !(e.flags & 4)) {
						if (u.clip) d = !0;
						else {
							d = l.rect;
							var f = u.rect;
							d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
						}
					}
					d && (e.flags |= 4), u.abs ? u = !l.abs : (l = l.rect, u = u.rect, u = l.height !== u.height || l.width !== u.width), u && (e.flags |= 32);
				} else e.flags |= 32;
				e.flags & 4 && Tp(c, Gl === 0 ? n : n + "_" + Gl, i), s && e.flags & 4 || (Ul === null && (Ul = []), Ul.push(c, Gl === 0 ? r : r + "_" + Gl, t.memoizedProps)), Gl++;
			} else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o ? e.flags |= t.flags & 32 : ru(e, t.child, n, r, i, a, o) && (s = !0));
			t = t.sibling;
		}
		return s;
	}
	function W(e, t) {
		for (e = e.child; e !== null;) {
			if (e.tag === 30) {
				var n = e.memoizedProps, r = e.stateNode, i = bi(n, r), a = Si(n.default, n.update);
				if (t) {
					r = r.clones;
					var o = r === null ? null : r.map(kp);
				} else o = e.memoizedState, e.memoizedState = null;
				r = e;
				var s = e.child;
				Gl = 0, i = ru(r, s, i, i, a, o, !1), e.flags & 4 && i && (t || Nd(e, n.onUpdate));
			} else e.subtreeFlags & 33554432 && W(e, t);
			e = e.sibling;
		}
	}
	var iu = !1, G = !1, au = !1, ou = !1, su = typeof WeakSet == "function" ? WeakSet : Set, cu = null, lu = !1, uu = !1, du = !1, fu = !1;
	function pu(e, t, n) {
		if (e = e.containerInfo, sp = gh, e = Xr(e), Zr(e)) {
			if ("selectionStart" in e) var r = {
				start: e.selectionStart,
				end: e.selectionEnd
			};
			else a: {
				r = (r = e.ownerDocument) && r.defaultView || window;
				var i = r.getSelection && r.getSelection();
				if (i && i.rangeCount !== 0) {
					r = i.anchorNode;
					var a = i.anchorOffset, o = i.focusNode;
					i = i.focusOffset;
					try {
						r.nodeType, o.nodeType;
					} catch {
						r = null;
						break a;
					}
					var s = 0, c = -1, l = -1, u = 0, d = 0, f = e, p = null;
					b: for (;;) {
						for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) p = f, f = m;
						for (;;) {
							if (f === e) break b;
							if (p === r && ++u === a && (c = s), p === o && ++d === i && (l = s), (m = f.nextSibling) !== null) break;
							f = p, p = f.parentNode;
						}
						f = m;
					}
					r = c === -1 || l === -1 ? null : {
						start: c,
						end: l
					};
				} else r = null;
			}
			r ||= {
				start: 0,
				end: 0
			};
		} else r = null;
		for (cp = {
			focusedElem: e,
			selectionRange: r
		}, gh = !1, n = (n & 335544064) === n, cu = t, t = n ? 9270 : 1024; cu !== null;) {
			if (e = cu, n && (r = e.deletions, r !== null)) for (a = 0; a < r.length; a++) n && Ql(r[a]);
			if (e.alternate === null && e.flags & 2) n && Hl(e), mu(n);
			else {
				if (e.tag === 22) {
					if (r = e.alternate, e.memoizedState !== null) {
						r !== null && r.memoizedState === null && n && Ql(r), mu(n);
						continue;
					}
					if (r !== null && r.memoizedState !== null) {
						n && Hl(e), mu(n);
						continue;
					}
				}
				r = e.child, (e.subtreeFlags & t) !== 0 && r !== null ? (r.return = e, cu = r) : (n && $l(e), mu(n));
			}
		}
		Vl = null;
	}
	function mu(e) {
		for (; cu !== null;) {
			var t = cu, n = e, r = t.alternate, i = t.flags;
			switch (t.tag) {
				case 0:
				case 11:
				case 15: break;
				case 1:
					if (i & 1024 && r !== null) {
						n = void 0, i = r.memoizedProps, r = r.memoizedState;
						var a = t.stateNode;
						try {
							var s = Cc(t.type, i);
							n = a.getSnapshotBeforeUpdate(s, r), a.__reactInternalSnapshotBeforeUpdate = n;
						} catch (e) {
							Z(t, t.return, e);
						}
					}
					break;
				case 3:
					if (i & 1024) {
						if (r = t.stateNode.containerInfo, n = r.nodeType, n === 9) nm(r);
						else if (n === 1) switch (r.nodeName) {
							case "HEAD":
							case "HTML":
							case "BODY":
								nm(r);
								break;
							default: r.textContent = "";
						}
					}
					break;
				case 5:
				case 26:
				case 27:
				case 6:
				case 4:
				case 17: break;
				case 30:
					n && r !== null && (n = bi(r.memoizedProps, r.stateNode), i = t.memoizedProps, i = Si(i.default, i.update), i !== "none" && Kl(r, n, i, r.memoizedState = [], !0));
					break;
				default: if (i & 1024) throw Error(o(163));
			}
			if (r = t.sibling, r !== null) {
				r.return = t.return, cu = r;
				break;
			}
			cu = t.return;
		}
	}
	function hu(e, t, n) {
		var r = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				Fu(e, n), r & 4 && Sl(5, n);
				break;
			case 1:
				if (Fu(e, n), r & 4) {
					if (e = n.stateNode, t === null) try {
						e.componentDidMount();
					} catch (e) {
						Z(n, n.return, e);
					}
					else {
						var i = Cc(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (e) {
							Z(n, n.return, e);
						}
					}
				}
				r & 64 && wl(n), r & 512 && El(n, n.return);
				break;
			case 3:
				if (Fu(e, n), r & 64 && (e = n.updateQueue, e !== null)) {
					if (t = null, n.child !== null) switch (n.child.tag) {
						case 27:
						case 5:
							t = n.child.stateNode;
							break;
						case 1: t = n.child.stateNode;
					}
					try {
						Do(e, t);
					} catch (e) {
						Z(n, n.return, e);
					}
				}
				break;
			case 27: t === null && r & 4 && zl(n);
			case 26:
			case 5:
				Fu(e, n), t === null && r & 4 && Nl(n), r & 512 && El(n, n.return);
				break;
			case 12:
				Fu(e, n);
				break;
			case 31:
				Fu(e, n), r & 4 && wu(e, n);
				break;
			case 13:
				Fu(e, n), r & 4 && Tu(e, n), r & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = _f.bind(null, n), cm(e, n))));
				break;
			case 22:
				if (r = n.memoizedState !== null || iu, !r) {
					var a = t !== null && t.memoizedState !== null || G;
					t = iu, i = G, iu = r, (G = a) && !i ? (r = 2, n.subtreeFlags & 8772 && (r |= 1), Lu(e, n, r)) : Fu(e, n), iu = t, G = i;
				}
				break;
			case 30:
				Fu(e, n), r & 512 && El(n, n.return);
				break;
			case 7: r & 512 && El(n, n.return);
			default: Fu(e, n);
		}
	}
	function gu(e, t) {
		for (e = e.child; e !== null;) _u(e, t), e = e.sibling;
	}
	function _u(e, t) {
		switch (e.tag) {
			case 5:
			case 26:
				try {
					var n = e.stateNode;
					if (t) {
						var r = n.style;
						typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
					} else {
						var i = e.stateNode, a = e.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null;
						i.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
					}
				} catch (t) {
					Z(e, e.return, t);
				}
				vu(e, t);
				break;
			case 6:
				try {
					e.stateNode.nodeValue = t ? "" : e.memoizedProps, I = !0;
				} catch (t) {
					Z(e, e.return, t);
				}
				break;
			case 18:
				try {
					var s = e.stateNode;
					t ? wp(s, !0) : wp(e.stateNode, !1);
				} catch (t) {
					Z(e, e.return, t);
				}
				break;
			case 22:
			case 23:
				e.memoizedState === null && gu(e, t);
				break;
			default: gu(e, t);
		}
	}
	function vu(e, t) {
		if (e.subtreeFlags & 67108864) for (e = e.child; e !== null;) {
			a: {
				var n = e, r = t;
				switch (n.tag) {
					case 4:
						_u(n, r);
						break a;
					case 22:
						n.memoizedState === null && vu(n, r);
						break a;
					default: vu(n, r);
				}
			}
			e = e.sibling;
		}
	}
	function yu(e) {
		var t = e.alternate;
		t !== null && (e.alternate = null, yu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Ft(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
	}
	var bu = null, xu = !1;
	function Su(e, t, n) {
		for (n = n.child; n !== null;) Cu(e, t, n), n = n.sibling;
	}
	function Cu(e, t, n) {
		if (tt && typeof tt.onCommitFiberUnmount == "function") try {
			tt.onCommitFiberUnmount(et, n);
		} catch {}
		switch (n.tag) {
			case 26:
				G || Dl(n, t), Su(e, t, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !G && (n = n.stateNode, n.parentNode.removeChild(n));
				break;
			case 27:
				G || Dl(n, t), Al(n);
				var r = bu, i = xu;
				Sp(n.type) && (bu = n.stateNode, xu = !1), Su(e, t, n), gm(n.stateNode, n.type, n.memoizedProps), bu = r, xu = i;
				break;
			case 5: G || Dl(n, t), Al(n);
			case 6:
				if (n.tag === 6 && Al(n), r = bu, i = xu, bu = null, Su(e, t, n), bu = r, xu = i, bu !== null) {
					if (xu) try {
						(bu.nodeType === 9 ? bu.body : bu.nodeName === "HTML" ? bu.ownerDocument.body : bu).removeChild(n.stateNode), I = !0;
					} catch (e) {
						Z(n, t, e);
					}
					else try {
						bu.removeChild(n.stateNode), I = !0;
					} catch (e) {
						Z(n, t, e);
					}
				}
				break;
			case 18:
				bu !== null && (xu ? (e = bu, Cp(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, n.stateNode), Hh(e)) : Cp(bu, n.stateNode));
				break;
			case 4:
				r = bu, i = xu, bu = n.stateNode.containerInfo, xu = !0, Su(e, t, n), bu = r, xu = i;
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				Cl(2, n, t), G || Cl(4, n, t), Su(e, t, n);
				break;
			case 1:
				G || (Dl(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function" && Tl(n, t, r)), Su(e, t, n);
				break;
			case 21:
				Su(e, t, n);
				break;
			case 22:
				G = (r = G) || n.memoizedState !== null, Su(e, t, n), G = r;
				break;
			case 30:
				Dl(n, t), Su(e, t, n);
				break;
			case 7:
				G || Dl(n, t), Su(e, t, n);
				break;
			default: Su(e, t, n);
		}
	}
	function wu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
			e = e.dehydrated;
			try {
				Hh(e);
			} catch (e) {
				Z(t, t.return, e);
			}
		}
	}
	function Tu(e, t) {
		if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
			Hh(e);
		} catch (e) {
			Z(t, t.return, e);
		}
	}
	function Eu(e) {
		switch (e.tag) {
			case 31:
			case 13:
			case 19:
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new su()), t;
			case 22: return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new su()), t;
			default: throw Error(o(435, e.tag));
		}
	}
	function Du(e, t) {
		var n = Eu(e);
		t.forEach(function(t) {
			if (!n.has(t)) {
				n.add(t);
				var r = vf.bind(null, e, t);
				t.then(r, r);
			}
		});
	}
	function Ou(e, t, n) {
		var r = t.deletions;
		if (r !== null) for (var i = 0; i < r.length; i++) {
			var a = r[i], s = e, c = t, l = c;
			a: for (; l !== null;) {
				switch (l.tag) {
					case 27:
						if (Sp(l.type)) {
							bu = l.stateNode, xu = !1;
							break a;
						}
						break;
					case 5:
						bu = l.stateNode, xu = !1;
						break a;
					case 3:
					case 4:
						bu = l.stateNode.containerInfo, xu = !0;
						break a;
				}
				l = l.return;
			}
			if (bu === null) throw Error(o(160));
			Cu(s, c, a), bu = null, xu = !1, s = a.alternate, s !== null && (s.return = null), a.return = null;
		}
		if (t.subtreeFlags & 13886) for (t = t.child; t !== null;) Au(t, e, n), t = t.sibling;
	}
	var ku = null;
	function Au(e, t, n) {
		var r = e.alternate, i = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				if (i & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) for (var a = 0; a < r.length; a++) {
					var s = r[a];
					s.ref.impl = s.nextImpl;
				}
				Ou(t, e, n), ju(e), i & 4 && (Cl(3, e, e.return), Sl(3, e), Cl(5, e, e.return));
				break;
			case 1:
				Ou(t, e, n), ju(e), i & 512 && (G || r === null || Dl(r, r.return)), i & 64 && iu && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
				break;
			case 26:
				if (a = ku, Ou(t, e, n), ju(e), i & 512 && (G || r === null || Dl(r, r.return)), i & 4) {
					if (i = r === null ? null : r.memoizedState, n = e.memoizedState, r === null) {
						if (n === null) {
							if (e.stateNode === null) {
								if (iu) e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
								else {
									a: {
										t = e.type, n = e.memoizedProps, i = a.ownerDocument || a;
										b: switch (t) {
											case "title":
												r = i.getElementsByTagName("title")[0], (!r || r[Nt] || r[Et] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = i.createElement(t), i.head.insertBefore(r, i.querySelector("head > title"))), np(r, t, n), r[Et] = e, zt(r), t = r;
												break a;
											case "link":
												if (a = Gm("link", "href", i).get(t + (n.href || ""))) {
													for (s = 0; s < a.length; s++) if (r = a[s], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
														a.splice(s, 1);
														break b;
													}
												}
												r = i.createElement(t), np(r, t, n), i.head.appendChild(r);
												break;
											case "meta":
												if (a = Gm("meta", "content", i).get(t + (n.content || ""))) {
													for (s = 0; s < a.length; s++) if (r = a[s], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
														a.splice(s, 1);
														break b;
													}
												}
												r = i.createElement(t), np(r, t, n), i.head.appendChild(r);
												break;
											default: throw Error(o(468, t));
										}
										r[Et] = e, zt(r), t = r;
									}
									e.stateNode = t;
								}
							} else iu || Km(a, e.type, e.stateNode);
						} else e.stateNode = Bm(a, n, e.memoizedProps);
					} else i === n ? n === null && e.stateNode !== null && Pl(e, e.memoizedProps, r.memoizedProps) : (i === null ? (t = r.stateNode, t === null || G || t.parentNode.removeChild(t)) : i.count--, n === null ? iu || Km(a, e.type, e.stateNode) : Bm(a, n, e.memoizedProps));
				}
				break;
			case 27:
				Ou(t, e, n), ju(e), i & 512 && (G || r === null || Dl(r, r.return)), r !== null && i & 4 && Pl(e, e.memoizedProps, r.memoizedProps);
				break;
			case 5:
				if (a = au, au = !1, Ou(t, e, n), au = a, ju(e), i & 512 && (G || r === null || Dl(r, r.return)), e.flags & 32) {
					t = e.stateNode;
					try {
						pn(t, ""), I = !0;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				i & 4 && e.stateNode != null && (t = e.memoizedProps, Pl(e, t, r === null ? t : r.memoizedProps)), i & 1024 && (ou = !0);
				break;
			case 6:
				if (Ou(t, e, n), ju(e), i & 4) {
					if (e.stateNode === null) throw Error(o(162));
					t = e.memoizedProps, n = e.stateNode;
					try {
						n.nodeValue = t, I = !0;
					} catch (t) {
						Z(e, e.return, t);
					}
				}
				break;
			case 3:
				if (I = !1, Wm = null, a = ku, ku = bm(t.containerInfo), Ou(t, e, n), ku = a, ju(e), i & 4 && r !== null && r.memoizedState.isDehydrated) try {
					Hh(t.containerInfo);
				} catch (t) {
					Z(e, e.return, t);
				}
				ou && (ou = !1, Mu(e)), I = !1;
				break;
			case 4:
				i = au, au = iu, r = Yt(), a = ku, ku = bm(e.stateNode.containerInfo), Ou(t, e, n), ju(e), ku = a, I && uu && (du = !0), I = r, au = i;
				break;
			case 12:
				Ou(t, e, n), ju(e);
				break;
			case 31:
				Ou(t, e, n), ju(e), i & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 13:
				Ou(t, e, n), ju(e), e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null) && (md = Ge()), i & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 22:
				a = e.memoizedState !== null, s = r !== null && r.memoizedState !== null;
				var c = iu, l = G, u = au;
				iu = c || a, au = u || a, G = l || s, Ou(t, e, n), G = l, au = u, iu = c, ju(e), i & 8192 && (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, !a || r === null || s || iu || G || (t = s || G, n = iu, r = G, iu = a || iu, G = t, Iu(e, 2), iu = n, G = r), !a && au || gu(e, a)), i & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, Du(e, n))));
				break;
			case 19:
				Ou(t, e, n), ju(e), i & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, Du(e, t)));
				break;
			case 30:
				i & 512 && (G || r === null || Dl(r, r.return)), i = Yt(), a = uu, s = (n & 335544064) === n, c = e.memoizedProps, uu = s && Si(c.default, c.update) !== "none", Ou(t, e, n), ju(e), s && r !== null && I && (e.flags |= 4), uu = a, I = i;
				break;
			case 21: break;
			case 7: i & 512 && (G || r === null || Dl(r, r.return)), r && r.stateNode !== null && (r.stateNode._fragmentFiber = e);
			default: Ou(t, e, n), ju(e);
		}
	}
	function ju(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, r = e.return; r !== null;) {
					if (Fl(r)) {
						n = r;
						break;
					}
					r = r.return;
				}
				r = null;
				for (var i = e.return; i !== null;) {
					if (Ml(i)) {
						var a = i.stateNode;
						r === null ? r = [a] : r.push(a);
					}
					if (jl(i)) break;
					i = i.return;
				}
				var s = r;
				if (n == null) throw Error(o(160));
				switch (n.tag) {
					case 27:
						var c = n.stateNode;
						Rl(e, Il(e), c, s);
						break;
					case 5:
						var l = n.stateNode;
						n.flags & 32 && (pn(l, ""), n.flags &= -33), Rl(e, Il(e), l, s);
						break;
					case 3:
					case 4:
						var u = n.stateNode.containerInfo;
						Ll(e, Il(e), u, s);
						break;
					default: throw Error(o(161));
				}
			} catch (t) {
				Z(e, e.return, t);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Mu(e) {
		if (e.subtreeFlags & 1024) for (e = e.child; e !== null;) {
			var t = e;
			Mu(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, gh = !0, t.reset(), gh = !1), e = e.sibling;
		}
	}
	function Nu(e, t) {
		if (t.subtreeFlags & 9270) for (t = t.child; t !== null;) Pu(t, e), t = t.sibling;
		else W(t, !1);
	}
	function Pu(e, t) {
		var n = e.alternate;
		if (n === null) Xl(e, !1);
		else switch (e.tag) {
			case 3:
				if (fu = lu = !1, Wl(), Nu(t, e), !lu && !du) {
					if (e = Ul, e !== null) for (var r = 0; r < e.length; r += 3) {
						n = e[r];
						var i = e[r + 1];
						Ep(n, e[r + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate({
							opacity: [0, 0],
							pointerEvents: ["none", "none"]
						}, {
							duration: 0,
							fill: "forwards",
							pseudoElement: "::view-transition-group(" + i + ")"
						});
					}
					e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate({
						opacity: [0, 0],
						pointerEvents: ["none", "none"]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition-group(root)"
					}), e.animate({
						width: [0, 0],
						height: [0, 0]
					}, {
						duration: 0,
						fill: "forwards",
						pseudoElement: "::view-transition"
					})), fu = !0;
				}
				Ul = null;
				break;
			case 5:
				Nu(t, e);
				break;
			case 4:
				r = lu, lu = !1, Nu(t, e), lu && (du = !0), lu = r;
				break;
			case 22:
				e.memoizedState === null && (n.memoizedState === null ? Nu(t, e) : Xl(e, !1));
				break;
			case 30:
				r = lu, i = Wl(), lu = !1, Nu(t, e), lu && (e.flags |= 4);
				var a = e.memoizedProps, o = e.stateNode;
				t = bi(a, o), o = bi(n.memoizedProps, o);
				var s = Si(a.default, a.update);
				s === "none" ? t = !1 : (a = n.memoizedState, n.memoizedState = null, n = e.child, Gl = 0, t = ru(e, n, t, o, s, a, !0), Gl !== (a === null ? 0 : a.length) && (e.flags |= 32)), e.flags & 4 && t ? (Nd(e, e.memoizedProps.onUpdate), Ul = i) : i !== null && (i.push.apply(i, Ul), Ul = i), lu = e.flags & 32 ? !0 : r;
				break;
			default: Nu(t, e);
		}
	}
	function Fu(e, t) {
		if (t.subtreeFlags & 8772) for (t = t.child; t !== null;) hu(e, t.alternate, t), t = t.sibling;
	}
	function Iu(e, t) {
		for (e = e.child; e !== null;) {
			var n = e, r = t;
			switch (n.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					Cl(4, n, n.return), Iu(n, r);
					break;
				case 1:
					Dl(n, n.return);
					var i = n.stateNode;
					typeof i.componentWillUnmount == "function" && Tl(n, n.return, i), Iu(n, r);
					break;
				case 27: r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
				case 5:
					Dl(n, n.return), n.tag !== 5 && n.tag !== 27 || Al(n), Iu(n, r);
					break;
				case 6:
					Al(n);
					break;
				case 26:
					Dl(n, n.return), i = n.stateNode, n.memoizedState !== null || i === null || G || i.parentNode.removeChild(i), Iu(n, r);
					break;
				case 22:
					n.memoizedState === null && Iu(n, r);
					break;
				case 30:
					Dl(n, n.return), Iu(n, r);
					break;
				case 7: Dl(n, n.return);
				default: Iu(n, r);
			}
			e = e.sibling;
		}
	}
	function Lu(e, t, n) {
		for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
			var r = t.alternate, i = e, a = t, o = a.flags, s = !!(n & 1);
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Lu(i, a, n), Sl(4, a);
					break;
				case 1:
					if (Lu(i, a, n), r = a, i = r.stateNode, typeof i.componentDidMount == "function") try {
						i.componentDidMount();
					} catch (e) {
						Z(r, r.return, e);
					}
					if (r = a, i = r.updateQueue, i !== null) {
						var c = r.stateNode;
						try {
							var l = i.shared.hiddenCallbacks;
							if (l !== null) for (i.shared.hiddenCallbacks = null, i = 0; i < l.length; i++) Eo(l[i], c);
						} catch (e) {
							Z(r, r.return, e);
						}
					}
					s && o & 64 && wl(a), El(a, a.return);
					break;
				case 27: n & 2 && zl(a);
				case 5:
					a.tag !== 5 && a.tag !== 27 || kl(a), Lu(i, a, n), s && r === null && o & 4 && Nl(a), El(a, a.return);
					break;
				case 6:
					kl(a);
					break;
				case 26:
					c = a.stateNode, a.memoizedState !== null || c === null || iu || Km(bm(c.ownerDocument), a.type, c), Lu(i, a, n), s && r === null && o & 4 && Nl(a), El(a, a.return);
					break;
				case 12:
					Lu(i, a, n);
					break;
				case 31:
					Lu(i, a, n), s && o & 4 && wu(i, a);
					break;
				case 13:
					Lu(i, a, n), s && o & 4 && Tu(i, a);
					break;
				case 22:
					a.memoizedState === null && Lu(i, a, n), El(a, a.return);
					break;
				case 30:
					Lu(i, a, n), El(a, a.return);
					break;
				case 7: El(a, a.return);
				default: Lu(i, a, n);
			}
			t = t.sibling;
		}
	}
	function Ru(e, t) {
		var n = null;
		e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Fa(n));
	}
	function zu(e, t) {
		e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Fa(e));
	}
	function Bu(e, t, n, r) {
		var i = (n & 335544064) === n;
		if (t.subtreeFlags & (i ? 10262 : 10256)) for (t = t.child; t !== null;) Vu(e, t, n, r), t = t.sibling;
		else i && nu(t);
	}
	function Vu(e, t, n, r) {
		var i = (n & 335544064) === n;
		i && t.alternate === null && t.return !== null && t.return.alternate !== null && tu(t);
		var a = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Bu(e, t, n, r), a & 2048 && Sl(9, t);
				break;
			case 1:
				Bu(e, t, n, r);
				break;
			case 3:
				Bu(e, t, n, r), i && fu && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), a & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== a && (t.refCount++, a != null && Fa(a)));
				break;
			case 12:
				if (a & 2048) {
					Bu(e, t, n, r), a = t.stateNode;
					try {
						var o = t.memoizedProps, s = o.id, c = o.onPostCommit;
						typeof c == "function" && c(s, t.alternate === null ? "mount" : "update", a.passiveEffectDuration, -0);
					} catch (e) {
						Z(t, t.return, e);
					}
				} else Bu(e, t, n, r);
				break;
			case 31:
				Bu(e, t, n, r);
				break;
			case 13:
				Bu(e, t, n, r);
				break;
			case 23: break;
			case 22:
				o = t.stateNode, s = t.alternate, t.memoizedState === null ? (i && s !== null && s.memoizedState !== null && tu(t), o._visibility & 2 ? Bu(e, t, n, r) : (o._visibility |= 2, Hu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1))) : (i && s !== null && s.memoizedState === null && tu(s), o._visibility & 2 ? Bu(e, t, n, r) : Uu(e, t)), a & 2048 && Ru(s, t);
				break;
			case 24:
				Bu(e, t, n, r), a & 2048 && zu(t.alternate, t);
				break;
			case 30:
				i && (a = t.alternate, a !== null && (Jl(a.child, !0), Jl(t.child, !0))), Bu(e, t, n, r);
				break;
			default: Bu(e, t, n, r);
		}
	}
	function Hu(e, t, n, r, i) {
		for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
			var a = e, o = t, s = n, c = r, l = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Hu(a, o, s, c, i), Sl(8, o);
					break;
				case 23: break;
				case 22:
					var u = o.stateNode;
					o.memoizedState === null ? (u._visibility |= 2, Hu(a, o, s, c, i)) : u._visibility & 2 ? Hu(a, o, s, c, i) : Uu(a, o), i && l & 2048 && Ru(o.alternate, o);
					break;
				case 24:
					Hu(a, o, s, c, i), i && l & 2048 && zu(o.alternate, o);
					break;
				default: Hu(a, o, s, c, i);
			}
			t = t.sibling;
		}
	}
	function Uu(e, t) {
		if (t.subtreeFlags & 10256) for (t = t.child; t !== null;) {
			var n = e, r = t, i = r.flags;
			switch (r.tag) {
				case 22:
					Uu(n, r), i & 2048 && Ru(r.alternate, r);
					break;
				case 24:
					Uu(n, r), i & 2048 && zu(r.alternate, r);
					break;
				default: Uu(n, r);
			}
			t = t.sibling;
		}
	}
	var Wu = 8192;
	function Gu(e, t, n) {
		if (e.subtreeFlags & Wu) for (e = e.child; e !== null;) Ku(e, t, n), e = e.sibling;
	}
	function Ku(e, t, n) {
		switch (e.tag) {
			case 26:
				Gu(e, t, n), e.flags & Wu && (e.memoizedState === null ? (e = e.stateNode, (t & 335544128) === t && Zm(n, e)) : Qm(n, ku, e.memoizedState, e.memoizedProps));
				break;
			case 5:
				Gu(e, t, n), e.flags & Wu && (e = e.stateNode, (t & 335544128) === t && Zm(n, e));
				break;
			case 3:
			case 4:
				var r = ku;
				ku = bm(e.stateNode.containerInfo), Gu(e, t, n), ku = r;
				break;
			case 22:
				e.memoizedState === null && (r = e.alternate, r !== null && r.memoizedState !== null ? (r = Wu, Wu = 16777216, Gu(e, t, n), Wu = r) : Gu(e, t, n));
				break;
			case 30:
				if ((e.flags & Wu) !== 0 && (r = e.memoizedProps.name, r != null && r !== "auto")) {
					var i = e.stateNode;
					i.paired = null, Vl === null && (Vl = /* @__PURE__ */ new Map()), Vl.set(r, i);
				}
				Gu(e, t, n);
				break;
			default: Gu(e, t, n);
		}
	}
	function qu(e) {
		var t = e.alternate;
		if (t !== null && (e = t.child, e !== null)) {
			t.child = null;
			do
				t = e.sibling, e.sibling = null, e = t;
			while (e !== null);
		}
	}
	function Ju(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				cu = r, Zu(r, e);
			}
			qu(e);
		}
		if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) Yu(e), e = e.sibling;
	}
	function Yu(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Ju(e), e.flags & 2048 && Cl(9, e, e.return);
				break;
			case 3:
				Ju(e);
				break;
			case 12:
				Ju(e);
				break;
			case 22:
				var t = e.stateNode;
				e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Xu(e)) : Ju(e);
				break;
			default: Ju(e);
		}
	}
	function Xu(e) {
		var t = e.deletions;
		if (e.flags & 16) {
			if (t !== null) for (var n = 0; n < t.length; n++) {
				var r = t[n];
				cu = r, Zu(r, e);
			}
			qu(e);
		}
		for (e = e.child; e !== null;) {
			switch (t = e, t.tag) {
				case 0:
				case 11:
				case 15:
					Cl(8, t, t.return), Xu(t);
					break;
				case 22:
					n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Xu(t));
					break;
				default: Xu(t);
			}
			e = e.sibling;
		}
	}
	function Zu(e, t) {
		for (; cu !== null;) {
			var n = cu;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					Cl(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var r = n.memoizedState.cachePool.pool;
						r != null && r.refCount++;
					}
					break;
				case 24: Fa(n.memoizedState.cache);
			}
			if (r = n.child, r !== null) r.return = n, cu = r;
			else a: for (n = e; cu !== null;) {
				r = cu;
				var i = r.sibling, a = r.return;
				if (yu(r), r === n) {
					cu = null;
					break a;
				}
				if (i !== null) {
					i.return = a, cu = i;
					break a;
				}
				cu = a;
			}
		}
	}
	var Qu = {
		getCacheForType: function(e) {
			var t = Da(Na), n = t.data.get(e);
			return n === void 0 && (n = e(), t.data.set(e, n)), n;
		},
		cacheSignal: function() {
			return Da(Na).controller.signal;
		}
	}, $u = typeof WeakMap == "function" ? WeakMap : Map, K = 0, q = null, J = null, Y = 0, X = 0, ed = null, td = !1, nd = !1, rd = !1, id = 0, ad = 0, od = 0, sd = 0, cd = 0, ld = 0, ud = 0, dd = null, fd = null, pd = !1, md = 0, hd = 0, gd = Infinity, _d = null, vd = null, yd = 0, bd = null, xd = null, Sd = 0, Cd = 0, wd = null, Td = null, Ed = null, Dd = null, Od = null, kd = 0, Ad = null;
	function jd() {
		return K & 2 && Y !== 0 ? Y & -Y : k.T === null ? Ct() : Pf();
	}
	function Md() {
		if (ld === 0) {
			if (!(Y & 536870912) || R) {
				var e = ct;
				ct <<= 1, !(ct & 3932160) && (ct = 262144), ld = e;
			} else ld = 536870912;
		}
		return e = No.current, e !== null && (e.flags |= 32), ld;
	}
	function Nd(e, t) {
		if (t != null) {
			var n = e.stateNode, r = n.ref;
			r === null && (r = n.ref = Pp(bi(e.memoizedProps, n))), Dd === null && (Dd = []), Dd.push(t.bind(null, r));
		}
	}
	function Pd(e, t, n) {
		(e === q && (X === 2 || X === 9) || e.cancelPendingCommit !== null) && (Vd(e, 0), Rd(e, Y, ld, !1)), _t(e, n), K & 2 && e === q || (e === q && (!(K & 2) && (sd |= n), ad === 4 && Rd(e, Y, ld, !1)), Ef(e));
	}
	function Fd(e, t, n) {
		if (K & 6) throw Error(o(327));
		var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || ft(e, t), i = r ? Yd(e, t) : qd(e, t, !0), a = r;
		do {
			if (i === 0) {
				nd && !r && Rd(e, t, 0, !1);
				break;
			}
			if (n = e.current.alternate, a && !Ld(n)) i = qd(e, t, !1), a = !1;
			else {
				if (i === 2) {
					if (a = t, e.errorRecoveryDisabledLanes & a) var s = 0;
					else s = e.pendingLanes & -536870913, s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
					if (s !== 0) {
						t = s;
						a: {
							var c = e;
							i = dd;
							var l = c.current.memoizedState.isDehydrated;
							if (l && (Vd(c, s).flags |= 256), s = qd(c, s, !1), s !== 2 && s !== 6) {
								if (rd && !l) {
									c.errorRecoveryDisabledLanes |= a, sd |= a, i = 4;
									break a;
								}
								a = fd, fd = i, a !== null && (fd === null ? fd = a : fd.push.apply(fd, a));
							}
							i = s;
						}
						if (a = !1, i !== 2) continue;
					}
				}
				if (i === 1) {
					Vd(e, 0), Rd(e, t, 0, !0);
					break;
				}
				a: {
					switch (r = e, a = i, a) {
						case 0:
						case 1: throw Error(o(345));
						case 4: if ((t & 4194048) !== t && (t & 62914560) !== t) break;
						case 6:
							Rd(r, t, ld, !td);
							break a;
						case 2:
							fd = null;
							break;
						case 3:
						case 5: break;
						default: throw Error(o(329));
					}
					if ((t & 62914560) === t && (i = md + 300 - Ge(), 10 < i)) {
						if (Rd(r, t, ld, !td), dt(r, 0, !0) !== 0) break a;
						Sd = t, r.timeoutHandle = gp(Id.bind(null, r, n, fd, _d, pd, t, ld, sd, ud, td, a, "Throttled", -0, 0), i);
						break a;
					}
					Id(r, n, fd, _d, pd, t, ld, sd, ud, td, a, null, -0, 0);
				}
				break;
			}
		} while (1);
		Ef(e);
	}
	function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
		e.timeoutHandle = -1;
		var m = t.subtreeFlags, h = (a & 335544064) === a;
		d = null, (h || m & 8192 || (m & 16785408) == 16785408) && (d = {
			stylesheets: null,
			count: 0,
			imgCount: 0,
			imgBytes: 0,
			suspenseyImages: [],
			waitingForImages: !0,
			waitingForViewTransition: !1,
			unsuspend: xn
		}, Vl = null, Ku(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = !0, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? md - Ge() : (a & 4194048) === a ? hd - Ge() : 0, m = eh(d, m), m !== null) ? (Sd = a, e.cancelPendingCommit = m(nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p)), Rd(e, a, o, !l)) : nf(e, t, a, n, r, i, o, s, c, l, u, d);
	}
	function Ld(e) {
		for (var t = e;;) {
			var n = t.tag;
			if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) for (var r = 0; r < n.length; r++) {
				var i = n[r], a = i.getSnapshot;
				i = i.value;
				try {
					if (!Wr(a(), i)) return !1;
				} catch {
					return !1;
				}
			}
			if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
			else {
				if (t === e) break;
				for (; t.sibling === null;) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				t.sibling.return = t.return, t = t.sibling;
			}
		}
		return !0;
	}
	function Rd(e, t, n, r) {
		t = pt(e, t), t &= ~cd, t &= ~sd, e.suspendedLanes |= t, e.pingedLanes &= ~t, r && (e.warmLanes |= t), r = e.expirationTimes;
		for (var i = t; 0 < i;) {
			var a = 31 - rt(i), o = 1 << a;
			r[a] = -1, i &= ~o;
		}
		n !== 0 && vt(e, n, t);
	}
	function zd() {
		return K & 6 ? !0 : (Df(0, !1), !1);
	}
	function Bd() {
		if (J !== null) {
			if (X === 0) var e = J.return;
			else e = J, ya = va = null, as(e), so = null, co = 0, e = J;
			for (; e !== null;) xl(e.alternate, e), e = e.return;
			J = null;
		}
	}
	function Vd(e, t) {
		var n = e.timeoutHandle;
		return n !== -1 && (e.timeoutHandle = -1, _p(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Sd = 0, Bd(), q = e, J = n = Li(e.current, null), Y = t, X = 0, ed = null, td = !1, nd = ft(e, t), rd = !1, ud = ld = cd = sd = od = ad = 0, fd = dd = null, pd = !1, id = pt(e, t), Di(), n;
	}
	function Hd(e, t) {
		V = null, k.H = hc, t === Za || t === $a ? (t = ao(), X = 3) : t === Qa ? (t = ao(), X = 4) : X = t === Nc ? 8 : typeof t == "object" && t && typeof t.then == "function" ? 6 : 1, ed = t, J === null && (ad = 1, Dc(e, Gi(t, e.current)));
	}
	function Ud() {
		var e = No.current;
		return e === null ? !0 : (Y & 4194048) === Y ? z === null : (Y & 62914560) === Y || Y & 536870912 ? e === z : !1;
	}
	function Wd() {
		var e = k.H;
		return k.H = hc, e === null ? hc : e;
	}
	function Gd() {
		var e = k.A;
		return k.A = Qu, e;
	}
	function Kd() {
		ad = 4, td || (Y & 4194048) !== Y && No.current !== null || (nd = !0), !(od & 134217727) && !(sd & 134217727) || q === null || Rd(q, Y, ld, !1);
	}
	function qd(e, t, n) {
		var r = K;
		K |= 2;
		var i = Wd(), a = Gd();
		(q !== e || Y !== t) && (_d = null, Vd(e, t)), t = !1;
		var o = ad;
		a: do
			try {
				if (X !== 0 && J !== null) {
					var s = J, c = ed;
					switch (X) {
						case 8:
							Bd(), o = 6;
							break a;
						case 3:
						case 2:
						case 9:
						case 6:
							No.current === null && (t = !0);
							var l = X;
							if (X = 0, ed = null, $d(e, s, c, l), n && nd) {
								o = 0;
								break a;
							}
							break;
						default: l = X, X = 0, ed = null, $d(e, s, c, l);
					}
				}
				Jd(), o = ad;
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return t && e.shellSuspendCounter++, ya = va = null, K = r, k.H = i, k.A = a, J === null && (q = null, Y = 0, Di()), o;
	}
	function Jd() {
		for (; J !== null;) Zd(J);
	}
	function Yd(e, t) {
		var n = K;
		K |= 2;
		var r = Wd(), i = Gd();
		q !== e || Y !== t ? (_d = null, gd = Ge() + 500, Vd(e, t)) : nd = ft(e, t);
		a: do
			try {
				if (X !== 0 && J !== null) {
					t = J;
					var a = ed;
					b: switch (X) {
						case 1:
							X = 0, ed = null, $d(e, t, a, 1);
							break;
						case 2:
						case 9:
							if (to(a)) {
								X = 0, ed = null, Qd(t);
								break;
							}
							t = function() {
								X !== 2 && X !== 9 || q !== e || (X = 7), Ef(e);
							}, a.then(t, t);
							break a;
						case 3:
							X = 7;
							break a;
						case 4:
							X = 5;
							break a;
						case 7:
							to(a) ? (X = 0, ed = null, Qd(t)) : (X = 0, ed = null, $d(e, t, a, 7));
							break;
						case 5:
							var s = null;
							switch (J.tag) {
								case 26: s = J.memoizedState;
								case 5:
								case 27:
									var c = J;
									if (s ? Ym(s) : c.stateNode.complete) {
										X = 0, ed = null;
										var l = c.sibling;
										if (l !== null) J = l;
										else {
											var u = c.return;
											u === null ? J = null : (J = u, ef(u));
										}
										break b;
									}
							}
							X = 0, ed = null, $d(e, t, a, 5);
							break;
						case 6:
							X = 0, ed = null, $d(e, t, a, 6);
							break;
						case 8:
							Bd(), ad = 6;
							break a;
						default: throw Error(o(462));
					}
				}
				Xd();
				break;
			} catch (t) {
				Hd(e, t);
			}
		while (1);
		return ya = va = null, k.H = r, k.A = i, K = n, J === null ? (q = null, Y = 0, Di(), ad) : 0;
	}
	function Xd() {
		for (; J !== null && !We();) Zd(J);
	}
	function Zd(e) {
		var t = pl(e.alternate, e, id);
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : J = t;
	}
	function Qd(e) {
		var t = e, n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = qc(n, t, t.pendingProps, t.type, void 0, Y);
				break;
			case 11:
				t = qc(n, t, t.pendingProps, t.type.render, t.ref, Y);
				break;
			case 5:
				as(t);
				var r = t;
				r === oa && (R ? (fa(r), r.tag === 5 && r.stateNode != null && (L = r.stateNode)) : (fa(r), R = !0));
			default: xl(n, t), t = J = Ri(t, id), t = pl(n, t, id);
		}
		e.memoizedProps = e.pendingProps, t === null ? ef(e) : J = t;
	}
	function $d(e, t, n, r) {
		ya = va = null, as(t), so = null, co = 0;
		var i = t.return;
		try {
			if (Mc(e, i, t, n, Y)) {
				ad = 1, Dc(e, Gi(n, e.current)), J = null;
				return;
			}
		} catch (t) {
			if (i !== null) throw J = i, t;
			ad = 1, Dc(e, Gi(n, e.current)), J = null;
			return;
		}
		t.flags & 32768 ? (R || r === 1 ? e = !0 : nd || Y & 536870912 ? e = !1 : (td = e = !0, (r === 2 || r === 9 || r === 3 || r === 6) && (r = No.current, r !== null && r.tag === 13 && (r.flags |= 16384))), tf(t, e)) : ef(t);
	}
	function ef(e) {
		var t = e;
		do {
			if (t.flags & 32768) {
				tf(t, td);
				return;
			}
			e = t.return;
			var n = yl(t.alternate, t, id);
			if (n !== null) {
				J = n;
				return;
			}
			if (t = t.sibling, t !== null) {
				J = t;
				return;
			}
			J = t = e;
		} while (t !== null);
		ad === 0 && (ad = 5);
	}
	function tf(e, t) {
		do {
			var n = bl(e.alternate, e);
			if (n !== null) {
				n.flags &= 32767, J = n;
				return;
			}
			if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
				J = e;
				return;
			}
			J = e = n;
		} while (e !== null);
		ad = 6, J = null;
	}
	function nf(e, t, n, r, i, a, s, c, l, u, d, f) {
		e.cancelPendingCommit = null;
		do
			df();
		while (yd !== 0);
		if (K & 6) throw Error(o(327));
		if (t !== null) {
			if (t === e.current) throw Error(o(177));
			e === q && (J = q = null, Y = 0), xd = t, bd = e, Sd = n, wd = i, Td = r, rf(e, t, n, s, c, l, f);
		}
	}
	function rf(e, t, n, r, i, a, o) {
		var s = t.lanes | t.childLanes;
		if (Cd = s, s |= Ei, P(e, n, s, r, i, a), Dd = null, (n & 335544064) === n ? (Od = Ra(e), r = 10262) : (Od = null, r = 10256), (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, yf(Ye, function() {
			return ff(), null;
		})) : (e.callbackNode = null, e.callbackPriority = 0), Bl = !1, r = !!(t.flags & 13878), t.subtreeFlags & 13878 || r) {
			r = k.T, k.T = null, i = A.p, A.p = 2, a = K, K |= 4;
			try {
				pu(e, t, n);
			} finally {
				K = a, A.p = i, k.T = r;
			}
		}
		yd = 1, Bl ? Ed = Mp(o, e.containerInfo, Od, sf, cf, of, lf, ff, af, null, null) : (sf(), cf(), lf());
	}
	function af(e) {
		if (yd !== 0) {
			var t = bd.onRecoverableError;
			t(e, { componentStack: null });
		}
	}
	function of() {
		yd === 3 && (yd = 0, Pu(xd, bd), yd = 4);
	}
	function sf() {
		if (yd === 1) {
			yd = 0;
			var e = bd, t = xd, n = Sd, r = !!(t.flags & 13878);
			if (t.subtreeFlags & 13878 || r) {
				r = k.T, k.T = null;
				var i = A.p;
				A.p = 2;
				var a = K;
				K |= 4;
				try {
					uu = du = !1, Au(t, e, n), n = cp;
					var o = Xr(e.containerInfo), s = n.focusedElem, c = n.selectionRange;
					if (o !== s && s && s.ownerDocument && Yr(s.ownerDocument.documentElement, s)) {
						if (c !== null && Zr(s)) {
							var l = c.start, u = c.end;
							if (u === void 0 && (u = l), "selectionStart" in s) s.selectionStart = l, s.selectionEnd = Math.min(u, s.value.length);
							else {
								var d = s.ownerDocument || document, f = d && d.defaultView || window;
								if (f.getSelection) {
									var p = f.getSelection(), m = s.textContent.length, h = Math.min(c.start, m), g = c.end === void 0 ? h : Math.min(c.end, m);
									!p.extend && h > g && (o = g, g = h, h = o);
									var _ = Jr(s, h), v = Jr(s, g);
									if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
										var y = d.createRange();
										y.setStart(_.node, _.offset), p.removeAllRanges(), h > g ? (p.addRange(y), p.extend(v.node, v.offset)) : (y.setEnd(v.node, v.offset), p.addRange(y));
									}
								}
							}
						}
						for (d = [], p = s; p = p.parentNode;) p.nodeType === 1 && d.push({
							element: p,
							left: p.scrollLeft,
							top: p.scrollTop
						});
						for (typeof s.focus == "function" && s.focus(), s = 0; s < d.length; s++) {
							var b = d[s];
							b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
						}
					}
					gh = !!sp, cp = sp = null;
				} finally {
					K = a, A.p = i, k.T = r;
				}
			}
			e.current = t, yd = 2;
		}
	}
	function cf() {
		if (yd === 2) {
			yd = 0;
			var e = bd, t = xd, n = !!(t.flags & 8772);
			if (t.subtreeFlags & 8772 || n) {
				n = k.T, k.T = null;
				var r = A.p;
				A.p = 2;
				var i = K;
				K |= 4;
				try {
					hu(e, t.alternate, t);
				} finally {
					K = i, A.p = r, k.T = n;
				}
			}
			yd = 3;
		}
	}
	function lf() {
		if (yd === 4 || yd === 3) {
			yd = 0;
			var e = Ed;
			Ed = null, N();
			var t = bd, n = xd, r = Sd, i = Td, a = (r & 335544064) === r ? 10262 : 10256;
			if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0 ? yd = 5 : (yd = 0, xd = bd = null, uf(t, t.pendingLanes)), a = t.pendingLanes, a === 0 && (vd = null), St(r), n = n.stateNode, tt && typeof tt.onCommitFiberRoot == "function") try {
				tt.onCommitFiberRoot(et, n, void 0, (n.current.flags & 128) == 128);
			} catch {}
			if (i !== null) {
				n = k.T, a = A.p, A.p = 2, k.T = null;
				try {
					for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
						var c = i[s];
						o(c.value, { componentStack: c.stack });
					}
				} finally {
					k.T = n, A.p = a;
				}
			}
			if (i = Dd, o = Od, Od = null, i !== null && (Dd = null, o === null && (o = []), e !== null)) for (c = 0; c < i.length; c++) n = (0, i[c])(o), n !== void 0 && e.finished.finally(n);
			Sd & 3 && df(), Ef(t), a = t.pendingLanes, r & 261930 && a & 42 ? t === Ad ? kd++ : (kd = 0, Ad = t) : (kd = 0, Ad = null), Df(0, !1);
		}
	}
	function uf(e, t) {
		(e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Fa(t)));
	}
	function df() {
		return Ed !== null && (Ed.skipTransition(), Ed = null), sf(), cf(), lf(), ff();
	}
	function ff() {
		if (yd !== 5) return !1;
		var e = bd, t = Cd;
		Cd = 0;
		var n = St(Sd), r = k.T, i = A.p;
		try {
			A.p = 32 > n ? 32 : n, k.T = null, n = wd, wd = null;
			var a = bd, s = Sd;
			if (yd = 0, xd = bd = null, Sd = 0, K & 6) throw Error(o(331));
			var c = K;
			if (K |= 4, Yu(a.current), Vu(a, a.current, s, n), K = c, Df(0, !1), tt && typeof tt.onPostCommitFiberRoot == "function") try {
				tt.onPostCommitFiberRoot(et, a);
			} catch {}
			return !0;
		} finally {
			A.p = i, k.T = r, uf(e, t);
		}
	}
	function pf(e, t, n) {
		t = Gi(n, t), t = kc(e.stateNode, t, 2), e = bo(e, t, 2), e !== null && (_t(e, 2), Ef(e));
	}
	function Z(e, t, n) {
		if (e.tag === 3) pf(e, e, n);
		else for (; t !== null;) {
			if (t.tag === 3) {
				pf(t, e, n);
				break;
			}
			if (t.tag === 1) {
				var r = t.stateNode;
				if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (vd === null || !vd.has(r))) {
					e = Gi(n, e), n = Ac(2), r = bo(t, n, 2), r !== null && (jc(n, r, t, e), _t(r, 2), Ef(r));
					break;
				}
			}
			t = t.return;
		}
	}
	function mf(e, t, n) {
		var r = e.pingCache;
		if (r === null) {
			r = e.pingCache = new $u();
			var i = /* @__PURE__ */ new Set();
			r.set(t, i);
		} else i = r.get(t), i === void 0 && (i = /* @__PURE__ */ new Set(), r.set(t, i));
		i.has(n) || (rd = !0, i.add(n), e = hf.bind(null, e, t, n), t.then(e, e));
	}
	function hf(e, t, n) {
		var r = e.pingCache;
		r !== null && r.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, q === e && (Y & n) === n && (ad === 4 || ad === 3 && (Y & 62914560) === Y && 300 > Ge() - md ? K & 2 ? cd |= n : Vd(e, 0) : cd |= n, ud === Y && (ud = 0)), Ef(e);
	}
	function gf(e, t) {
		t === 0 && (t = ht()), e = Ai(e, t), e !== null && (_t(e, t), Ef(e));
	}
	function _f(e) {
		var t = e.memoizedState, n = 0;
		t !== null && (n = t.retryLane), gf(e, n);
	}
	function vf(e, t) {
		var n = 0;
		switch (e.tag) {
			case 31:
			case 13:
				var r = e.stateNode, i = e.memoizedState;
				i !== null && (n = i.retryLane);
				break;
			case 19:
				r = e.stateNode;
				break;
			case 22:
				r = e.stateNode._retryCache;
				break;
			default: throw Error(o(314));
		}
		r !== null && r.delete(t), gf(e, n);
	}
	function yf(e, t) {
		return He(e, t);
	}
	var bf = null, xf = null, Sf = !1, Cf = !1, wf = !1, Tf = 0;
	function Ef(e) {
		e !== xf && e.next === null && (xf === null ? bf = xf = e : xf = xf.next = e), Cf = !0, Sf || (Sf = !0, Nf());
	}
	function Df(e, t) {
		if (!wf && Cf) {
			wf = !0;
			do
				for (var n = !1, r = bf; r !== null;) {
					if (!t) {
						if (e !== 0) {
							var i = r.pendingLanes;
							if (i === 0) var a = 0;
							else {
								var o = r.suspendedLanes, s = r.pingedLanes;
								a = (1 << 31 - rt(42 | e) + 1) - 1, a &= i & ~(o & ~s), a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
							}
							a !== 0 && (n = !0, Mf(r, a));
						} else a = Y, a = dt(r, r === q ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1), !(a & 3) || ft(r, a) || (n = !0, Mf(r, a));
					}
					r = r.next;
				}
			while (n);
			wf = !1;
		}
	}
	function Of() {
		kf();
	}
	function kf() {
		Cf = Sf = !1;
		var e = 0;
		Tf !== 0 && hp() && (e = Tf);
		for (var t = Ge(), n = null, r = bf; r !== null;) {
			var i = r.next, a = Af(r, t);
			a === 0 ? (r.next = null, n === null ? bf = i : n.next = i, i === null && (xf = n)) : (n = r, (e !== 0 || a & 3) && (Cf = !0)), r = i;
		}
		yd !== 0 && yd !== 5 || Df(e, !1), Tf !== 0 && (Tf = 0);
	}
	function Af(e, t) {
		for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, a = e.pendingLanes & -62914561; 0 < a;) {
			var o = 31 - rt(a), s = 1 << o, c = i[o];
			c === -1 ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = mt(s, t)) : c <= t && (e.expiredLanes |= s), a &= ~s;
		}
		if (t = q, n = Y, n = dt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r = e.callbackNode, n === 0 || e === t && (X === 2 || X === 9) || e.cancelPendingCommit !== null) return r !== null && r !== null && Ue(r), e.callbackNode = null, e.callbackPriority = 0;
		if (!(n & 3) || ft(e, n)) {
			if (t = n & -n, t === e.callbackPriority) return t;
			switch (r !== null && Ue(r), St(n)) {
				case 2:
				case 8:
					n = Je;
					break;
				case 32:
					n = Ye;
					break;
				case 268435456:
					n = Ze;
					break;
				default: n = Ye;
			}
			return r = jf.bind(null, e), n = He(n, r), e.callbackPriority = t, e.callbackNode = n, t;
		}
		return r !== null && r !== null && Ue(r), e.callbackPriority = 2, e.callbackNode = null, 2;
	}
	function jf(e, t) {
		if (yd !== 0 && yd !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
		var n = e.callbackNode;
		if (df() && e.callbackNode !== n) return null;
		var r = Y;
		return r = dt(e, e === q ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), r === 0 ? null : (Fd(e, r, t), Af(e, Ge()), e.callbackNode != null && e.callbackNode === n ? jf.bind(null, e) : null);
	}
	function Mf(e, t) {
		if (df()) return null;
		Fd(e, t, !0);
	}
	function Nf() {
		bp(function() {
			K & 6 ? He(qe, Of) : kf();
		});
	}
	function Pf() {
		if (Tf === 0) {
			var e = Va;
			e === 0 && (e = st, st <<= 1, !(st & 261888) && (st = 256)), Tf = e;
		}
		return Tf;
	}
	function Ff(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : bn(e);
	}
	function If(e, t, n, r, i) {
		if (t === "submit" && n && n.stateNode === i) {
			var a = Ff((i[Dt] || null).action), o = r.submitter;
			o && (t = (t = o[Dt] || null) ? Ff(t.formAction) : o.getAttribute("formAction"), t !== null && (a = t, o = null));
			var s = new Hn("action", "action", null, r, i);
			e.push({
				event: s,
				listeners: [{
					instance: null,
					listener: function() {
						if (r.defaultPrevented) {
							if (Tf !== 0) {
								var e = new FormData(i, o);
								tc(n, {
									pending: !0,
									data: e,
									method: i.method,
									action: a
								}, null, e);
							}
						} else typeof a == "function" && (s.preventDefault(), e = new FormData(i, o), tc(n, {
							pending: !0,
							data: e,
							method: i.method,
							action: a
						}, a, e));
					},
					currentTarget: i
				}]
			});
		}
	}
	for (var Lf = 0; Lf < _i.length; Lf++) {
		var Rf = _i[Lf];
		vi(Rf.toLowerCase(), "on" + (Rf[0].toUpperCase() + Rf.slice(1)));
	}
	vi(li, "onAnimationEnd"), vi(ui, "onAnimationIteration"), vi(di, "onAnimationStart"), vi("dblclick", "onDoubleClick"), vi("focusin", "onFocus"), vi("focusout", "onBlur"), vi(fi, "onTransitionRun"), vi(pi, "onTransitionStart"), vi(mi, "onTransitionCancel"), vi(hi, "onTransitionEnd"), Wt("onMouseEnter", ["mouseout", "mouseover"]), Wt("onMouseLeave", ["mouseout", "mouseover"]), Wt("onPointerEnter", ["pointerout", "pointerover"]), Wt("onPointerLeave", ["pointerout", "pointerover"]), Ut("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ut("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ut("onBeforeInput", [
		"compositionend",
		"keypress",
		"textInput",
		"paste"
	]), Ut("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ut("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ut("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
	var zf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Bf = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zf));
	function Vf(e, t) {
		t = !!(t & 4);
		for (var n = 0; n < e.length; n++) {
			var r = e[n], i = r.event;
			r = r.listeners;
			a: {
				var a = void 0;
				if (t) for (var o = r.length - 1; 0 <= o; o--) {
					var s = r[o], c = s.instance, l = s.currentTarget;
					if (s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Ci(e);
					}
					i.currentTarget = null, a = c;
				}
				else for (o = 0; o < r.length; o++) {
					if (s = r[o], c = s.instance, l = s.currentTarget, s = s.listener, c !== a && i.isPropagationStopped()) break a;
					a = s, i.currentTarget = l;
					try {
						a(i);
					} catch (e) {
						Ci(e);
					}
					i.currentTarget = null, a = c;
				}
			}
		}
	}
	function Q(e, t) {
		var n = t[kt];
		n === void 0 && (n = t[kt] = /* @__PURE__ */ new Set());
		var r = e + "__bubble";
		n.has(r) || (Gf(t, e, 2, !1), n.add(r));
	}
	function Hf(e, t, n) {
		var r = 0;
		t && (r |= 4), Gf(n, e, r, t);
	}
	var Uf = "_reactListening" + Math.random().toString(36).slice(2);
	function Wf(e) {
		if (!e[Uf]) {
			e[Uf] = !0, Vt.forEach(function(t) {
				t !== "selectionchange" && (Bf.has(t) || Hf(t, !1, e), Hf(t, !0, e));
			});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Uf] || (t[Uf] = !0, Hf("selectionchange", !1, t));
		}
	}
	function Gf(e, t, n, r) {
		switch (Ch(t)) {
			case 2:
				var i = _h;
				break;
			case 8:
				i = vh;
				break;
			default: i = yh;
		}
		n = i.bind(null, t, n, e), i = void 0, !jn || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0), r ? i === void 0 ? e.addEventListener(t, n, !0) : e.addEventListener(t, n, {
			capture: !0,
			passive: i
		}) : i === void 0 ? e.addEventListener(t, n, !1) : e.addEventListener(t, n, { passive: i });
	}
	function Kf(e, t, n, r, i) {
		var a = r;
		if (!(t & 1) && !(t & 2) && r !== null) a: for (;;) {
			if (r === null) return;
			var o = r.tag;
			if (o === 3 || o === 4) {
				var s = r.stateNode.containerInfo;
				if (s === i) break;
				if (o === 4) for (o = r.return; o !== null;) {
					var c = o.tag;
					if ((c === 3 || c === 4) && o.stateNode.containerInfo === i) return;
					o = o.return;
				}
				for (; s !== null;) {
					if (o = It(s), o === null) return;
					if (c = o.tag, c === 5 || c === 6 || c === 26 || c === 27) {
						r = a = o;
						continue a;
					}
					s = s.parentNode;
				}
			}
			r = r.return;
		}
		On(function() {
			var r = a, i = Cn(n), o = [];
			a: {
				var s = gi.get(e);
				if (s !== void 0) {
					var c = Hn, u = e;
					switch (e) {
						case "keypress": if (Ln(n) === 0) break a;
						case "keydown":
						case "keyup":
							c = or;
							break;
						case "focusin":
							u = "focus", c = Zn;
							break;
						case "focusout":
							u = "blur", c = Zn;
							break;
						case "beforeblur":
						case "afterblur":
							c = Zn;
							break;
						case "click": if (n.button === 2) break a;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							c = Yn;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							c = Xn;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							c = lr;
							break;
						case li:
						case ui:
						case di:
							c = Qn;
							break;
						case hi:
							c = ur;
							break;
						case "scroll":
						case "scrollend":
							c = Wn;
							break;
						case "wheel":
							c = dr;
							break;
						case "copy":
						case "cut":
						case "paste":
							c = $n;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							c = sr;
							break;
						case "submit":
							c = cr;
							break;
						case "toggle":
						case "beforetoggle": c = fr;
					}
					var d = !!(t & 4), f = !d && (e === "scroll" || e === "scrollend"), p = d ? s === null ? null : s + "Capture" : s;
					d = [];
					for (var m = r, h; m !== null;) {
						var g = m;
						if (h = g.stateNode, g = g.tag, g !== 5 && g !== 26 && g !== 27 || h === null || p === null || (g = kn(m, p), g != null && d.push(qf(m, g, h))), f) break;
						m = m.return;
					}
					0 < d.length && (s = new c(s, u, null, n, i), o.push({
						event: s,
						listeners: d
					}));
				}
			}
			if (!(t & 7)) {
				a: {
					if (c = e === "mouseover" || e === "pointerover", s = e === "mouseout" || e === "pointerout", c && n !== Sn && (u = n.relatedTarget || n.fromElement) && (It(u) || u[Ot])) break a;
					(s || c) && (u = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window, s ? (c = n.relatedTarget || n.toElement, s = r, c = c ? It(c) : null, c !== null && (f = l(c), d = c.tag, c !== f || d !== 5 && d !== 27 && d !== 6) && (c = null)) : (s = null, c = r), s !== c && (d = Yn, g = "onMouseLeave", p = "onMouseEnter", m = "mouse", (e === "pointerout" || e === "pointerover") && (d = sr, g = "onPointerLeave", p = "onPointerEnter", m = "pointer"), f = s == null ? u : F(s), h = c == null ? u : F(c), u = new d(g, m + "leave", s, n, i), u.target = f, u.relatedTarget = h, g = null, It(i) === r && (d = new d(p, m + "enter", c, n, i), d.target = h, d.relatedTarget = f, g = d), f = g, d = s && c ? T(s, c, Yf) : null, s !== null && Xf(o, u, s, d, !1), c !== null && f !== null && Xf(o, f, c, d, !0)));
				}
				a: {
					if (s = r ? F(r) : window, c = s.nodeName && s.nodeName.toLowerCase(), c === "select" || c === "input" && s.type === "file") var _ = Mr;
					else if (Er(s)) {
						if (Nr) _ = Hr;
						else {
							_ = Br;
							var v = zr;
						}
					} else c = s.nodeName, !c || c.toLowerCase() !== "input" || s.type !== "checkbox" && s.type !== "radio" ? r && _n(r.elementType) && (_ = Mr) : _ = Vr;
					if (_ &&= _(e, r)) {
						Dr(o, _, n, i);
						break a;
					}
					v && v(e, s, r);
				}
				switch (v = r ? F(r) : window, e) {
					case "focusin":
						(Er(v) || v.contentEditable === "true") && ($r = v, ei = r, ti = null);
						break;
					case "focusout":
						ti = ei = $r = null;
						break;
					case "mousedown":
						ni = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						ni = !1, ri(o, n, i);
						break;
					case "selectionchange": if (Qr) break;
					case "keydown":
					case "keyup": ri(o, n, i);
				}
				var y;
				if (mr) b: {
					switch (e) {
						case "compositionstart":
							var b = "onCompositionStart";
							break b;
						case "compositionend":
							b = "onCompositionEnd";
							break b;
						case "compositionupdate":
							b = "onCompositionUpdate";
							break b;
					}
					b = void 0;
				}
				else Sr ? br(e, n) && (b = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
				b && (_r && n.locale !== "ko" && (Sr || b !== "onCompositionStart" ? b === "onCompositionEnd" && Sr && (y = In()) : (Nn = i, Pn = "value" in Nn ? Nn.value : Nn.textContent, Sr = !0)), v = Jf(r, b), 0 < v.length && (b = new er(b, e, null, n, i), o.push({
					event: b,
					listeners: v
				}), y ? b.data = y : (y = xr(n), y !== null && (b.data = y)))), (y = gr ? Cr(e, n) : wr(e, n)) && (b = Jf(r, "onBeforeInput"), 0 < b.length && (v = new er("onBeforeInput", "beforeinput", null, n, i), o.push({
					event: v,
					listeners: b
				}), v.data = y)), If(o, e, r, n, i);
			}
			Vf(o, t);
		});
	}
	function qf(e, t, n) {
		return {
			instance: e,
			listener: t,
			currentTarget: n
		};
	}
	function Jf(e, t) {
		for (var n = t + "Capture", r = []; e !== null;) {
			var i = e, a = i.stateNode;
			if (i = i.tag, i !== 5 && i !== 26 && i !== 27 || a === null || (i = kn(e, n), i != null && r.unshift(qf(e, i, a)), i = kn(e, t), i != null && r.push(qf(e, i, a))), e.tag === 3) return r;
			e = e.return;
		}
		return [];
	}
	function Yf(e) {
		if (e === null) return null;
		do
			e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Xf(e, t, n, r, i) {
		for (var a = t._reactName, o = []; n !== null && n !== r;) {
			var s = n, c = s.alternate, l = s.stateNode;
			if (s = s.tag, c !== null && c === r) break;
			s !== 5 && s !== 26 && s !== 27 || l === null || (c = l, i ? (l = kn(n, a), l != null && o.unshift(qf(n, l, c))) : i || (l = kn(n, a), l != null && o.push(qf(n, l, c)))), n = n.return;
		}
		o.length !== 0 && e.push({
			event: t,
			listeners: o
		});
	}
	var Zf = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
	function $f(e) {
		return (typeof e == "string" ? e : "" + e).replace(Zf, "\n").replace(Qf, "");
	}
	function ep(e, t) {
		return t = $f(t), $f(e) === t;
	}
	function $(e, t, n, r, i, a) {
		switch (n) {
			case "children":
				if (typeof r == "string") t === "body" || t === "textarea" && r === "" || pn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") t !== "body" && pn(e, "" + r);
				else return;
				break;
			case "className":
				Zt(e, "class", r);
				break;
			case "tabIndex":
				Zt(e, "tabindex", r);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Zt(e, n, r);
				break;
			case "style":
				gn(e, r, a);
				return;
			case "data": if (t !== "object") {
				Zt(e, "data", r);
				break;
			}
			case "src":
			case "href":
				if (r === "" && (t !== "a" || n !== "href") || r == null || typeof r == "function" || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = bn(r), e.setAttribute(n, r);
				break;
			case "action":
			case "formAction":
				if (typeof r == "function") {
					e.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
					break;
				}
				if (typeof a == "function" && (n === "formAction" ? (t !== "input" && $(e, t, "name", i.name, i, null), $(e, t, "formEncType", i.formEncType, i, null), $(e, t, "formMethod", i.formMethod, i, null), $(e, t, "formTarget", i.formTarget, i, null)) : ($(e, t, "encType", i.encType, i, null), $(e, t, "method", i.method, i, null), $(e, t, "target", i.target, i, null))), r == null || typeof r == "symbol" || typeof r == "boolean") {
					e.removeAttribute(n);
					break;
				}
				r = bn(r), e.setAttribute(n, r);
				break;
			case "onClick":
				r != null && (e.onclick = xn);
				return;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(o(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(o(60));
						a?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "multiple":
				e.multiple = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "muted":
				e.muted = r && typeof r != "function" && typeof r != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref": break;
			case "autoFocus": break;
			case "xlinkHref":
				if (r == null || typeof r == "function" || typeof r == "boolean" || typeof r == "symbol") {
					e.removeAttribute("xlink:href");
					break;
				}
				n = bn(r), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "credentialless":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				r && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				!0 === r ? e.setAttribute(n, "") : !1 !== r && r != null && typeof r != "function" && typeof r != "symbol" ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				r != null && typeof r != "function" && typeof r != "symbol" && !isNaN(r) && 1 <= r ? e.setAttribute(n, r) : e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				r == null || typeof r == "function" || typeof r == "symbol" || isNaN(r) ? e.removeAttribute(n) : e.setAttribute(n, r);
				break;
			case "popover":
				Q("beforetoggle", e), Q("toggle", e), Xt(e, "popover", r);
				break;
			case "xlinkActuate":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", r);
				break;
			case "xlinkArcrole":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", r);
				break;
			case "xlinkRole":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:role", r);
				break;
			case "xlinkShow":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:show", r);
				break;
			case "xlinkTitle":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:title", r);
				break;
			case "xlinkType":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:type", r);
				break;
			case "xmlBase":
				Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", r);
				break;
			case "xmlLang":
				Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", r);
				break;
			case "xmlSpace":
				Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", r);
				break;
			case "is":
				Xt(e, "is", r);
				break;
			case "innerText":
			case "textContent": return;
			default: if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") n = vn.get(n) || n, Xt(e, n, r);
			else return;
		}
		I = !0;
	}
	function tp(e, t, n, r, i, a) {
		switch (n) {
			case "style":
				gn(e, r, a);
				return;
			case "dangerouslySetInnerHTML":
				if (r != null) {
					if (typeof r != "object" || !("__html" in r)) throw Error(o(61));
					if (n = r.__html, n != null) {
						if (i.children != null) throw Error(o(60));
						a?.__html !== n && (e.innerHTML = n);
					}
				}
				break;
			case "children":
				if (typeof r == "string") pn(e, r);
				else if (typeof r == "number" || typeof r == "bigint") pn(e, "" + r);
				else return;
				break;
			case "onScroll":
				r != null && Q("scroll", e);
				return;
			case "onScrollEnd":
				r != null && Q("scrollend", e);
				return;
			case "onClick":
				r != null && (e.onclick = xn);
				return;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref": return;
			case "innerText":
			case "textContent": return;
			default:
				if (!Ht.hasOwnProperty(n)) a: {
					if (n[0] === "o" && n[1] === "n" && (i = n.endsWith("Capture"), a = n.slice(2, i ? n.length - 7 : void 0), t = e[Dt] || null, t = t == null ? null : t[n], typeof t == "function" && e.removeEventListener(a, t, i), typeof r == "function")) {
						typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(a, r, i);
						break a;
					}
					I = !0, n in e ? e[n] = r : !0 === r ? e.setAttribute(n, "") : Xt(e, n, r);
				}
				return;
		}
		I = !0;
	}
	function np(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "img":
				Q("error", e), Q("load", e);
				var r = !1, i = !1, a;
				for (a in n) if (n.hasOwnProperty(a)) {
					var s = n[a];
					if (s != null) switch (a) {
						case "src":
							r = !0;
							break;
						case "srcSet":
							i = !0;
							break;
						case "children":
						case "dangerouslySetInnerHTML": throw Error(o(137, t));
						default: $(e, t, a, s, n, null);
					}
				}
				i && $(e, t, "srcSet", n.srcSet, n, null), r && $(e, t, "src", n.src, n, null);
				return;
			case "input":
				Q("invalid", e);
				var c = a = s = i = null, l = null, u = null;
				for (r in n) if (n.hasOwnProperty(r)) {
					var d = n[r];
					if (d != null) switch (r) {
						case "name":
							i = d;
							break;
						case "type":
							s = d;
							break;
						case "checked":
							l = d;
							break;
						case "defaultChecked":
							u = d;
							break;
						case "value":
							a = d;
							break;
						case "defaultValue":
							c = d;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (d != null) throw Error(o(137, t));
							break;
						default: $(e, t, r, d, n, null);
					}
				}
				cn(e, a, c, l, u, s, i, !1);
				return;
			case "select":
				for (i in Q("invalid", e), r = s = a = null, n) if (n.hasOwnProperty(i) && (c = n[i], c != null)) switch (i) {
					case "value":
						a = c;
						break;
					case "defaultValue":
						s = c;
						break;
					case "multiple": r = c;
					default: $(e, t, i, c, n, null);
				}
				t = a, n = s, e.multiple = !!r, t == null ? n != null && un(e, !!r, n, !0) : un(e, !!r, t, !1);
				return;
			case "textarea":
				for (s in Q("invalid", e), a = i = r = null, n) if (n.hasOwnProperty(s) && (c = n[s], c != null)) switch (s) {
					case "value":
						r = c;
						break;
					case "defaultValue":
						i = c;
						break;
					case "children":
						a = c;
						break;
					case "dangerouslySetInnerHTML":
						if (c != null) throw Error(o(91));
						break;
					default: $(e, t, s, c, n, null);
				}
				fn(e, r, i, a);
				return;
			case "option":
				for (l in n) if (n.hasOwnProperty(l) && (r = n[l], r != null)) switch (l) {
					case "selected":
						e.selected = r && typeof r != "function" && typeof r != "symbol";
						break;
					default: $(e, t, l, r, n, null);
				}
				return;
			case "dialog":
				Q("beforetoggle", e), Q("toggle", e), Q("cancel", e), Q("close", e);
				break;
			case "iframe":
			case "object":
				Q("load", e);
				break;
			case "video":
			case "audio":
				for (r = 0; r < zf.length; r++) Q(zf[r], e);
				break;
			case "image":
				Q("error", e), Q("load", e);
				break;
			case "details":
				Q("toggle", e);
				break;
			case "embed":
			case "source":
			case "link": Q("error", e), Q("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (u in n) if (n.hasOwnProperty(u) && (r = n[u], r != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML": throw Error(o(137, t));
					default: $(e, t, u, r, n, null);
				}
				return;
			default: if (_n(t)) {
				for (d in n) n.hasOwnProperty(d) && (r = n[d], r !== void 0 && tp(e, t, d, r, n, void 0));
				return;
			}
		}
		for (c in n) n.hasOwnProperty(c) && (r = n[c], r != null && $(e, t, c, r, n, null));
	}
	var rp = {};
	function ip(e, t, n, r) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li": break;
			case "input":
				var i = null, a = null, s = null, c = null, l = null, u = null, d = null;
				for (m in n) {
					var f = n[m];
					if (n.hasOwnProperty(m) && f != null) switch (m) {
						case "checked": break;
						case "value": break;
						case "defaultValue": l = f;
						default: r.hasOwnProperty(m) || $(e, t, m, null, r, f);
					}
				}
				for (var p in r) {
					var m = r[p];
					if (f = n[p], r.hasOwnProperty(p) && (m != null || f != null)) switch (p) {
						case "type":
							m !== f && (I = !0), a = m;
							break;
						case "name":
							m !== f && (I = !0), i = m;
							break;
						case "checked":
							m !== f && (I = !0), u = m;
							break;
						case "defaultChecked":
							m !== f && (I = !0), d = m;
							break;
						case "value":
							m !== f && (I = !0), s = m;
							break;
						case "defaultValue":
							m !== f && (I = !0), c = m;
							break;
						case "children":
						case "dangerouslySetInnerHTML":
							if (m != null) throw Error(o(137, t));
							break;
						default: m !== f && $(e, t, p, m, r, f);
					}
				}
				sn(e, s, c, l, u, d, a, i);
				return;
			case "select":
				for (a in m = s = c = p = null, n) if (l = n[a], n.hasOwnProperty(a) && l != null) switch (a) {
					case "value": break;
					case "multiple": m = l;
					default: r.hasOwnProperty(a) || $(e, t, a, null, r, l);
				}
				for (i in r) if (a = r[i], l = n[i], r.hasOwnProperty(i) && (a != null || l != null)) switch (i) {
					case "value":
						a !== l && (I = !0), p = a;
						break;
					case "defaultValue":
						a !== l && (I = !0), c = a;
						break;
					case "multiple": a !== l && (I = !0), s = a;
					default: a !== l && $(e, t, i, a, r, l);
				}
				t = c, n = s, r = m, p == null ? !!r != !!n && (t == null ? un(e, !!n, n ? [] : "", !1) : un(e, !!n, t, !0)) : un(e, !!n, p, !1);
				return;
			case "textarea":
				for (c in m = p = null, n) if (i = n[c], n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c)) switch (c) {
					case "value": break;
					case "children": break;
					default: $(e, t, c, null, r, i);
				}
				for (s in r) if (i = r[s], a = n[s], r.hasOwnProperty(s) && (i != null || a != null)) switch (s) {
					case "value":
						i !== a && (I = !0), p = i;
						break;
					case "defaultValue":
						i !== a && (I = !0), m = i;
						break;
					case "children": break;
					case "dangerouslySetInnerHTML":
						if (i != null) throw Error(o(91));
						break;
					default: i !== a && $(e, t, s, i, r, a);
				}
				dn(e, p, m);
				return;
			case "option":
				for (var h in n) if (p = n[h], n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) switch (h) {
					case "selected":
						e.selected = !1;
						break;
					default: $(e, t, h, null, r, p);
				}
				for (l in r) if (p = r[l], m = n[l], r.hasOwnProperty(l) && p !== m && (p != null || m != null)) switch (l) {
					case "selected":
						p !== m && (I = !0), e.selected = p && typeof p != "function" && typeof p != "symbol";
						break;
					default: $(e, t, l, p, r, m);
				}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var g in n) p = n[g], n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g) && $(e, t, g, null, r, p);
				for (u in r) if (p = r[u], m = n[u], r.hasOwnProperty(u) && p !== m && (p != null || m != null)) switch (u) {
					case "children":
					case "dangerouslySetInnerHTML":
						if (p != null) throw Error(o(137, t));
						break;
					default: $(e, t, u, p, r, m);
				}
				return;
			default: if (_n(t)) {
				for (var _ in n) p = n[_], n.hasOwnProperty(_) && p !== void 0 && !r.hasOwnProperty(_) && tp(e, t, _, void 0, r, p);
				for (d in r) p = r[d], m = n[d], !r.hasOwnProperty(d) || p === m || p === void 0 && m === void 0 || tp(e, t, d, p, r, m);
				return;
			}
		}
		for (var v in n) p = n[v], n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v) && $(e, t, v, null, r, p);
		for (f in r) p = r[f], m = n[f], !r.hasOwnProperty(f) || p === m || p == null && m == null || $(e, t, f, p, r, m);
	}
	function ap(e) {
		switch (e) {
			case "css":
			case "script":
			case "font":
			case "img":
			case "image":
			case "input":
			case "link": return !0;
			default: return !1;
		}
	}
	function op() {
		if (typeof performance.getEntriesByType == "function") {
			for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), r = 0; r < n.length; r++) {
				var i = n[r], a = i.transferSize, o = i.initiatorType, s = i.duration;
				if (a && s && ap(o)) {
					for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
						var c = n[r], l = c.startTime;
						if (l > s) break;
						var u = c.transferSize, d = c.initiatorType;
						u && ap(d) && (c = c.responseEnd, o += u * (c < s ? 1 : (s - l) / (c - l)));
					}
					if (--r, t += 8 * (a + o) / (i.duration / 1e3), e++, 10 < e) break;
				}
			}
			if (0 < e) return t / e / 1e6;
		}
		return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
	}
	var sp = null, cp = null;
	function lp(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function up(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg": return 1;
			case "http://www.w3.org/1998/Math/MathML": return 2;
			default: return 0;
		}
	}
	function dp(e, t) {
		if (e === 0) switch (t) {
			case "svg": return 1;
			case "math": return 2;
			default: return 0;
		}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function fp(e, t, n, r) {
		return n = lp(n).createElement(e), n[Et] = r, n[Dt] = t, np(n, e, t), zt(n), n;
	}
	function pp(e, t) {
		return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
	}
	var mp = null;
	function hp() {
		var e = window.event;
		return e && e.type === "popstate" ? e !== mp && (mp = e, !0) : (mp = null, !1);
	}
	var gp = typeof setTimeout == "function" ? setTimeout : void 0, _p = typeof clearTimeout == "function" ? clearTimeout : void 0, vp = typeof Promise == "function" ? Promise : void 0, yp = typeof requestAnimationFrame == "function" ? requestAnimationFrame : gp, bp = typeof queueMicrotask == "function" ? queueMicrotask : vp === void 0 ? gp : function(e) {
		return vp.resolve(null).then(e).catch(xp);
	};
	function xp(e) {
		setTimeout(function() {
			throw e;
		});
	}
	function Sp(e) {
		return e === "head";
	}
	function Cp(e, t) {
		var n = t, r = 0;
		do {
			var i = n.nextSibling;
			if (e.removeChild(n), i && i.nodeType === 8) {
				if (n = i.data, n === "/$" || n === "/&") {
					if (r === 0) {
						e.removeChild(i), Hh(t);
						return;
					}
					r--;
				} else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") r++;
				else if (n === "html") _m(e.ownerDocument.documentElement);
				else if (n === "head") {
					n = e.ownerDocument.head, _m(n);
					for (var a = n.firstChild; a;) {
						var o = a.nextSibling, s = a.nodeName;
						a[Nt] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && a.rel.toLowerCase() === "stylesheet" || n.removeChild(a), a = o;
					}
				} else n === "body" && _m(e.ownerDocument.body);
			}
			n = i;
		} while (n);
		Hh(t);
	}
	function wp(e, t) {
		var n = e;
		e = 0;
		do {
			var r = n.nextSibling;
			if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), r && r.nodeType === 8) {
				if (n = r.data, n === "/$") {
					if (e === 0) break;
					e--;
				} else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
			}
			n = r;
		} while (n);
	}
	function Tp(e, t, n) {
		if (t = CSS.escape(t) === t ? t : "r-" + btoa(t).replace(/=/g, ""), e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
			if (t = e.getClientRects(), t.length === 1) var r = 1;
			else for (var i = r = 0; i < t.length; i++) {
				var a = t[i];
				0 < a.width && 0 < a.height && r++;
			}
			r === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
		}
	}
	function Ep(e, t) {
		e = e.style, t = t.style;
		var n = t == null ? null : t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null;
		e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t == null ? null : t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n == null ? (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t) : e.margin = n));
	}
	function Dp(e, t, n) {
		return n = n.ownerDocument.defaultView, {
			rect: e,
			abs: t.position === "absolute" || t.position === "fixed",
			clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
			view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
		};
	}
	function Op(e) {
		return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
	}
	function kp(e) {
		var t = e.getBoundingClientRect();
		t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
		var n = getComputedStyle(e);
		return Dp(t, n, e);
	}
	function Ap(e) {
		return e.documentElement.clientHeight;
	}
	function jp(e) {
		this.addEventListener("load", e), this.addEventListener("error", e);
	}
	function Mp(e, t, n, r, i, a, o, s, c) {
		var l = t.nodeType === 9 ? t : t.ownerDocument;
		try {
			var u = l.startViewTransition({
				update: function() {
					var t = l.defaultView, n = t.navigation && t.navigation.transition, o = l.fonts.status;
					r();
					var s = [];
					if (o === "loaded" && (Ap(l), l.fonts.status === "loading" && s.push(l.fonts.ready)), o = s.length, e !== null) for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
						var f = c[d];
						if (!f.complete) {
							var p = f.getBoundingClientRect();
							if (0 < p.bottom && 0 < p.right && p.top < t.innerHeight && p.left < t.innerWidth) {
								if (u += Xm(f), u > $m) {
									s.length = o;
									break;
								}
								f = new Promise(jp.bind(f)), s.push(f);
							}
						}
					}
					if (0 < s.length) return t = Promise.race([Promise.all(s), new Promise(function(e) {
						return setTimeout(e, 500);
					})]).then(i, i), (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
					if (i(), n) return n.finished.then(a, a);
					a();
				},
				types: n
			});
			l.__reactViewTransition = u;
			var d = [];
			return u.ready.then(function() {
				for (var e = l.documentElement.getAnimations({ subtree: !0 }), t = 0; t < e.length; t++) {
					var n = e[t], r = n.effect, i = r.pseudoElement;
					if (i != null && i.startsWith("::view-transition")) {
						d.push(n), n = r.getKeyframes();
						for (var a = i = void 0, s = !0, c = 0; c < n.length; c++) {
							var u = n[c], f = u.width;
							if (i === void 0) i = f;
							else if (i !== f) {
								s = !1;
								break;
							}
							if (f = u.height, a === void 0) a = f;
							else if (a !== f) {
								s = !1;
								break;
							}
							delete u.width, delete u.height, u.transform === "none" && delete u.transform;
						}
						s && i !== void 0 && a !== void 0 && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a) && (s = n[0], s.width = i, s.height = a, s = n[n.length - 1], s.width = i, s.height = a, r.setKeyframes(n));
					}
				}
				o();
			}, function(e) {
				l.__reactViewTransition === u && (l.__reactViewTransition = null);
				try {
					if (typeof e == "object" && e) switch (e.name) {
						case "InvalidStateError": (e.message === "View transition was skipped because document visibility state is hidden." || e.message === "Skipping view transition because document visibility state has become hidden." || e.message === "Skipping view transition because viewport size changed." || e.message === "Transition was aborted because of invalid state") && (e = null);
					}
					e !== null && c(e);
				} finally {
					r(), i(), o();
				}
			}), u.finished.finally(function() {
				for (var e = 0; e < d.length; e++) d[e].cancel();
				l.__reactViewTransition === u && (l.__reactViewTransition = null), s();
			}), u;
		} catch {
			return r(), i(), o(), null;
		}
	}
	function Np(e, t) {
		this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
	}
	Np.prototype.animate = function(e, t) {
		return t = typeof t == "number" ? { duration: t } : E({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
	}, Np.prototype.getAnimations = function() {
		for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), r = [], i = 0; i < n.length; i++) {
			var a = n[i].effect;
			a !== null && a.target === e && a.pseudoElement === t && r.push(n[i]);
		}
		return r;
	}, Np.prototype.getComputedStyle = function() {
		return getComputedStyle(this._scope, this._selector);
	};
	function Pp(e) {
		return {
			name: e,
			group: new Np("group", e),
			imagePair: new Np("image-pair", e),
			old: new Np("old", e),
			new: new Np("new", e)
		};
	}
	function Fp(e) {
		this._fragmentFiber = e, this._observers = this._eventListeners = null;
	}
	Fp.prototype.addEventListener = function(e, t, n) {
		var r = null, i = null;
		if (!(n != null && typeof n != "boolean" && (r = n.signal || null, r !== null && r.aborted))) {
			this._eventListeners === null && (this._eventListeners = []);
			var a = this._eventListeners;
			if (Bp(a, e, t, n) === -1) {
				var o = this, s = t;
				n != null && typeof n != "boolean" && !0 === n.once && (s = function(r) {
					o.removeEventListener(e, t, n), typeof t == "function" ? t.call(this, r) : t.handleEvent(r);
				}), r !== null && (i = o.removeEventListener.bind(o, e, t, n), r.addEventListener("abort", i, { once: !0 }), i = r.removeEventListener.bind(r, "abort", i)), r = Rp(n), a.push({
					type: e,
					listener: t,
					optionsOrUseCapture: n,
					attachedListener: s,
					cleanup: i
				}), h(this._fragmentFiber.child, !1, Ip, e, s, r);
			}
			this._eventListeners = a;
		}
	};
	function Ip(e, t, n, r) {
		return b(e).addEventListener(t, n, r), !1;
	}
	Fp.prototype.removeEventListener = function(e, t, n) {
		var r = this._eventListeners;
		if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
			var i = r[t];
			n = i.attachedListener;
			var a = i.cleanup;
			i = Rp(i.optionsOrUseCapture), h(this._fragmentFiber.child, !1, Lp, e, n, i), r.splice(t, 1), a !== null && a();
		}
	};
	function Lp(e, t, n, r) {
		return b(e).removeEventListener(t, n, r), !1;
	}
	function Rp(e) {
		return e != null && typeof e != "boolean" && (!0 === e.once || e.signal instanceof AbortSignal) ? {
			capture: e.capture,
			passive: e.passive
		} : e;
	}
	function zp(e) {
		return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
	}
	function Bp(e, t, n, r) {
		if (e.length === 0) return -1;
		r = zp(r);
		for (var i = 0; i < e.length; i++) {
			var a = e[i];
			if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) return i;
		}
		return -1;
	}
	Fp.prototype.dispatchEvent = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return !0;
		t = b(t);
		var n = this._eventListeners;
		if (n !== null && 0 < n.length || !e.bubbles) {
			var r = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
			if (n) for (var i = 0; i < n.length; i++) {
				var a = n[i];
				r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			}
			if (t.appendChild(r), e = r.dispatchEvent(e), n) for (i = 0; i < n.length; i++) a = n[i], r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
			return t.removeChild(r), e;
		}
		return t.dispatchEvent(e);
	}, Fp.prototype.focus = function(e) {
		h(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
	};
	function Vp(e, t) {
		return e.tag !== 6 && (e = b(e), pm(e, t));
	}
	Fp.prototype.focusLast = function(e) {
		var t = [];
		h(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
		for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
	};
	function Hp(e, t) {
		return t.push(e), !1;
	}
	Fp.prototype.blur = function() {
		var e = g(this._fragmentFiber);
		e !== null && (e = b(e), e = lp(e).activeElement, e !== null && h(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
	};
	function Up(e, t) {
		return e.tag !== 6 && (e = b(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
	}
	Fp.prototype.observeUsing = function(e) {
		this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), h(this._fragmentFiber.child, !1, Wp, e, void 0, void 0);
	};
	function Wp(e, t) {
		return e.tag === 6 || (e = b(e), t.observe(e)), !1;
	}
	Fp.prototype.unobserveUsing = function(e) {
		var t = this._observers;
		if (t !== null && t.has(e)) {
			t.delete(e), h(this._fragmentFiber.child, !1, Gp, e, void 0, void 0);
			for (var n = t = 0; n < Kp.length; n++) {
				var r = Kp[n];
				r.fragmentInstance === this && r.observer === e ? e.unobserve(r.instance) : Kp[t++] = r;
			}
			Kp.length = t;
		}
	};
	function Gp(e, t) {
		return e.tag === 6 || (e = b(e), t.unobserve(e)), !1;
	}
	var Kp = [], qp = !1;
	function Jp(e, t, n) {
		Kp.push({
			fragmentInstance: e,
			observer: t,
			instance: n
		}), qp || (qp = !0, mm(function() {
			qp = !1;
			var e = Kp;
			Kp = [];
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				n.observer.unobserve(n.instance);
			}
		}));
	}
	Fp.prototype.getClientRects = function() {
		var e = [];
		return h(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e;
	};
	function Yp(e, t) {
		if (e.tag === 6) {
			e = e.stateNode;
			var n = e.ownerDocument.createRange();
			n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
		} else e = b(e), t.push.apply(t, e.getClientRects());
		return !1;
	}
	Fp.prototype.getRootNode = function(e) {
		var t = g(this._fragmentFiber);
		return t === null ? this : b(t).getRootNode(e);
	}, Fp.prototype.compareDocumentPosition = function(e) {
		var t = g(this._fragmentFiber);
		if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		var n = [];
		h(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
		var r = b(t);
		if (n.length === 0) {
			if (n = r, _(this._fragmentFiber)) {
				a: {
					for (t = this._fragmentFiber.return; t !== null;) {
						if (t.tag === 4) {
							t = t.stateNode.containerInfo;
							break a;
						}
						if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
						t = t.return;
					}
					t = null;
				}
				t != null && (n = t);
			}
			t = this._fragmentFiber;
			var i = r = n.compareDocumentPosition(e);
			return n === e ? i = Node.DOCUMENT_POSITION_CONTAINS : r & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = v(t)[1], n === null ? i = Node.DOCUMENT_POSITION_PRECEDING : (e = b(n).compareDocumentPosition(e), i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
		}
		t = b(n[0]), i = b(n[n.length - 1]);
		var a = _(this._fragmentFiber) ? t.parentElement : r;
		if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
		r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
		var o = t.compareDocumentPosition(e), s = i.compareDocumentPosition(e), c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
		return s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING, t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	};
	function Xp(e, t, n, r, i) {
		var a = It(i);
		if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
			if (n = !!a) a: {
				for (; a !== null;) {
					if (a.tag === 7 && (a === t || a.alternate === t)) {
						n = !0;
						break a;
					}
					a = a.return;
				}
				n = !1;
			}
			return n;
		}
		if (e & Node.DOCUMENT_POSITION_CONTAINS) {
			if (a === null) return a = i.ownerDocument, i === a || i === a.documentElement || i === a.body;
			a: {
				for (a = t, t = g(t); a !== null;) {
					if (!(a.tag !== 5 && a.tag !== 3 && a.tag !== 27 || a !== t && a.alternate !== t)) {
						a = !0;
						break a;
					}
					a = a.return;
				}
				a = !1;
			}
			return a;
		}
		return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!a) && !(t = a === n) && (t = T(n, a, w), t === null ? t = !1 : (h(t, !0, ee, a, n), a = x, x = null, t = a !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!a) && !(t = a === r) && (t = T(r, a, w), t === null ? t = !1 : (h(t, !0, C, a, r), a = x, S = x = null, t = a !== null)), t) : !1;
	}
	function Zp(e, t) {
		var n = e.ownerDocument.createRange();
		n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
	}
	Fp.prototype.scrollIntoView = function(e) {
		if (typeof e == "object") throw Error(o(566));
		var t = [];
		h(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
		var n = !1 !== e;
		if (t.length === 0) {
			var r = v(this._fragmentFiber);
			if (r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1], r === null) return;
			if (r.tag === 6) {
				e = b(r), Zp(e, n);
				return;
			}
			if (r = b(r), r.nodeType !== 9) {
				if (r.nodeType === 11) {
					n = "host" in r ? r.host : null, n !== null && n.scrollIntoView(e);
					return;
				}
				r.scrollIntoView(e);
			}
		}
		for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
			var i = t[r];
			i.tag === 6 ? (i = b(i), Zp(i, n)) : b(i).scrollIntoView(e), r += n ? -1 : 1;
		}
	};
	function Qp(e, t) {
		return e = b(e), $p(e, t), !1;
	}
	function $p(e, t) {
		e.reactFragments ??= /* @__PURE__ */ new Set(), e.reactFragments.add(t);
	}
	function em(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			for (var r = 0, i = 0; i < Kp.length; i++) {
				var a = Kp[i];
				(a.fragmentInstance !== t || a.observer !== n || a.instance !== e) && (Kp[r++] = a);
			}
			Kp.length = r, n.observe(e);
		}), $p(e, t));
	}
	function tm(e, t) {
		var n = t._eventListeners;
		if (n !== null) for (var r = 0; r < n.length; r++) {
			var i = n[r];
			e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
		}
		e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(n) {
			typeof n.rootMargin == "string" ? Jp(t, n, e) : n.unobserve(e);
		}), e.reactFragments != null && e.reactFragments.delete(t));
	}
	function nm(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
			var n = t;
			switch (t = t.nextSibling, n.nodeName) {
				case "HTML":
				case "HEAD":
				case "BODY":
					nm(n), Ft(n);
					continue;
				case "SCRIPT":
				case "STYLE": continue;
				case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function rm(e, t, n, r) {
		for (; e.nodeType === 1;) {
			var i = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!r && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (!r) {
				if (t === "input" && e.type === "hidden") {
					var a = i.name == null ? null : "" + i.name;
					if (i.type === "hidden" && e.getAttribute("name") === a) return e;
				} else return e;
			} else if (!e[Nt]) switch (t) {
				case "meta":
					if (!e.hasAttribute("itemprop")) break;
					return e;
				case "link":
					if (a = e.getAttribute("rel"), a === "stylesheet" && e.hasAttribute("data-precedence") || a !== i.rel || e.getAttribute("href") !== (i.href == null || i.href === "" ? null : i.href) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute("title") !== (i.title == null ? null : i.title)) break;
					return e;
				case "style":
					if (e.hasAttribute("data-precedence")) break;
					return e;
				case "script":
					if (a = e.getAttribute("src"), (a !== (i.src == null ? null : i.src) || e.getAttribute("type") !== (i.type == null ? null : i.type) || e.getAttribute("crossorigin") !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
					return e;
				default: return e;
			}
			if (e = lm(e.nextSibling), e === null) break;
		}
		return null;
	}
	function im(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function am(e, t) {
		for (; e.nodeType !== 8;) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = lm(e.nextSibling), e === null)) return null;
		return e;
	}
	function om(e) {
		return e.data === "$?" || e.data === "$~";
	}
	function sm(e) {
		return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
	}
	function cm(e, t) {
		var n = e.ownerDocument;
		if (e.data === "$~") e._reactRetry = t;
		else if (e.data !== "$?" || n.readyState !== "loading") t();
		else {
			var r = function() {
				t(), n.removeEventListener("DOMContentLoaded", r);
			};
			n.addEventListener("DOMContentLoaded", r), e._reactRetry = r;
		}
	}
	function lm(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
				if (t === "/$" || t === "/&") return null;
			}
		}
		return e;
	}
	var um = null;
	function dm(e) {
		e = e.nextSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "/$" || n === "/&") {
					if (t === 0) return lm(e.nextSibling);
					t--;
				} else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
			}
			e = e.nextSibling;
		}
		return null;
	}
	function fm(e) {
		e = e.previousSibling;
		for (var t = 0; e;) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
					if (t === 0) return e;
					t--;
				} else n !== "/$" && n !== "/&" || t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function pm(e, t) {
		function n() {
			r = !0;
		}
		if (e.ownerDocument.activeElement === e) return !0;
		var r = !1;
		try {
			e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
		} finally {
			e.ownerDocument.removeEventListener("focus", n, !0);
		}
		return r;
	}
	function mm(e) {
		yp(function() {
			yp(function(t) {
				return e(t);
			});
		});
	}
	function hm(e, t, n) {
		switch (t = lp(n), e) {
			case "html":
				if (e = t.documentElement, !e) throw Error(o(452));
				return e;
			case "head":
				if (e = t.head, !e) throw Error(o(453));
				return e;
			case "body":
				if (e = t.body, !e) throw Error(o(454));
				return e;
			default: throw Error(o(451));
		}
	}
	function gm(e, t, n) {
		for (var r in n) {
			var i = n[r];
			n.hasOwnProperty(r) && i != null && $(e, t, r, null, rp, i);
		}
		n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === xn && (e.onclick = null), Ft(e);
	}
	function _m(e) {
		for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
		Ft(e);
	}
	var vm = /* @__PURE__ */ new Map(), ym = /* @__PURE__ */ new Set();
	function bm(e) {
		if (typeof e.getRootNode == "function") {
			var t = e.getRootNode();
			if (t.nodeType === 9 || t.nodeType === 11) return t;
		}
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	var xm = A.d;
	A.d = {
		f: Sm,
		r: Cm,
		D: Em,
		C: Dm,
		L: Om,
		m: km,
		X: jm,
		S: Am,
		M: Mm
	};
	function Sm() {
		var e = xm.f(), t = zd();
		return e || t;
	}
	function Cm(e) {
		var t = Lt(e);
		t !== null && t.tag === 5 && t.type === "form" ? rc(t) : xm.r(e);
	}
	var wm = typeof document > "u" ? null : document;
	function Tm(e, t, n) {
		var r = wm;
		if (r && typeof t == "string" && t) {
			var i = on(t);
			i = "link[rel=\"" + e + "\"][href=\"" + i + "\"]", typeof n == "string" && (i += "[crossorigin=\"" + n + "\"]"), ym.has(i) || (ym.add(i), e = {
				rel: e,
				crossOrigin: n,
				href: t
			}, r.querySelector(i) === null && (t = r.createElement("link"), np(t, "link", e), zt(t), r.head.appendChild(t)));
		}
	}
	function Em(e) {
		xm.D(e), Tm("dns-prefetch", e, null);
	}
	function Dm(e, t) {
		xm.C(e, t), Tm("preconnect", e, t);
	}
	function Om(e, t, n) {
		xm.L(e, t, n);
		var r = wm;
		if (r && e && t) {
			var i = "link[rel=\"preload\"][as=\"" + on(t) + "\"]";
			t === "image" && n && n.imageSrcSet ? (i += "[imagesrcset=\"" + on(n.imageSrcSet) + "\"]", typeof n.imageSizes == "string" && (i += "[imagesizes=\"" + on(n.imageSizes) + "\"]")) : i += "[href=\"" + on(e) + "\"]";
			var a = i;
			switch (t) {
				case "style":
					a = Pm(e);
					break;
				case "script": a = Rm(e);
			}
			if (!(vm.has(a) || (e = E({
				rel: "preload",
				href: t === "image" && n && n.imageSrcSet ? void 0 : e,
				as: t
			}, n), vm.set(a, e), r.querySelector(i) !== null || t === "style" && r.querySelector(Fm(a)) || t === "script" && r.querySelector(zm(a))))) {
				var o = r.createElement("link");
				np(o, "link", e), t === "style" && (o[Pt] = !0, o.onload = o.onerror = function() {
					Bt(o);
				}), zt(o), r.head.appendChild(o);
			}
		}
	}
	function km(e, t) {
		xm.m(e, t);
		var n = wm;
		if (n && e) {
			var r = t && typeof t.as == "string" ? t.as : "script", i = "link[rel=\"modulepreload\"][as=\"" + on(r) + "\"][href=\"" + on(e) + "\"]", a = i;
			switch (r) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script": a = Rm(e);
			}
			if (!vm.has(a) && (e = E({
				rel: "modulepreload",
				href: e
			}, t), vm.set(a, e), n.querySelector(i) === null)) {
				switch (r) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script": if (n.querySelector(zm(a))) return;
				}
				r = n.createElement("link"), np(r, "link", e), zt(r), n.head.appendChild(r);
			}
		}
	}
	function Am(e, t, n) {
		xm.S(e, t, n);
		var r = wm;
		if (r && e) {
			var i = Rt(r).hoistableStyles, a = Pm(e);
			t ||= "default";
			var o = i.get(a);
			if (!o) {
				var s = {
					loading: 0,
					preload: null
				};
				if (o = r.querySelector(Fm(a))) s.loading = 5;
				else {
					e = E({
						rel: "stylesheet",
						href: e,
						"data-precedence": t
					}, n), (n = vm.get(a)) && Hm(e, n);
					var c = o = r.createElement("link");
					zt(c), np(c, "link", e), c._p = new Promise(function(e, t) {
						c.onload = e, c.onerror = t;
					}), c.addEventListener("load", function() {
						s.loading |= 1;
					}), c.addEventListener("error", function() {
						s.loading |= 2;
					}), s.loading |= 4, Vm(o, t, r);
				}
				o = {
					type: "stylesheet",
					instance: o,
					count: 1,
					state: s
				}, i.set(a, o);
			}
		}
	}
	function jm(e, t) {
		xm.X(e, t);
		var n = wm;
		if (n && e) {
			var r = Rt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = E({
				src: e,
				async: !0
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), zt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Mm(e, t) {
		xm.M(e, t);
		var n = wm;
		if (n && e) {
			var r = Rt(n).hoistableScripts, i = Rm(e), a = r.get(i);
			a || (a = n.querySelector(zm(i)), a || (e = E({
				src: e,
				async: !0,
				type: "module"
			}, t), (t = vm.get(i)) && Um(e, t), a = n.createElement("script"), zt(a), np(a, "link", e), n.head.appendChild(a)), a = {
				type: "script",
				instance: a,
				count: 1,
				state: null
			}, r.set(i, a));
		}
	}
	function Nm(e, t, n, r) {
		var i = (i = Oe.current) ? bm(i) : null;
		if (!i) throw Error(o(446));
		switch (e) {
			case "meta":
			case "title": return null;
			case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Pm(n.href), t = Rt(i).hoistableStyles, r = t.get(n), r || (r = {
				type: "style",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			case "link":
				if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
					e = Pm(n.href);
					var a = Rt(i).hoistableStyles, s = a.get(e);
					if (s || (i = i.ownerDocument || i, s = {
						type: "stylesheet",
						instance: null,
						count: 0,
						state: {
							loading: 0,
							preload: null
						}
					}, a.set(e, s), (a = i.querySelector(Fm(e))) ? a._p || (s.instance = a, s.state.loading = 5) : (a = vm.get(e), a || (a = {
						rel: "preload",
						as: "style",
						href: n.href,
						crossOrigin: n.crossOrigin,
						integrity: n.integrity,
						media: n.media,
						hrefLang: n.hrefLang,
						referrerPolicy: n.referrerPolicy
					}, vm.set(e, a)), Lm(i, e, a, s.state))), t && r === null) throw Error(o(528, ""));
					return s;
				}
				if (t && r !== null) throw Error(o(529, ""));
				return null;
			case "script": return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Rm(n), t = Rt(i).hoistableScripts, r = t.get(n), r || (r = {
				type: "script",
				instance: null,
				count: 0,
				state: null
			}, t.set(n, r)), r) : {
				type: "void",
				instance: null,
				count: 0,
				state: null
			};
			default: throw Error(o(444, e));
		}
	}
	function Pm(e) {
		return "href=\"" + on(e) + "\"";
	}
	function Fm(e) {
		return "link[rel=\"stylesheet\"][" + e + "]";
	}
	function Im(e) {
		return E({}, e, {
			"data-precedence": e.precedence,
			precedence: null
		});
	}
	function Lm(e, t, n, r) {
		if (t = e.querySelector("link[rel=\"preload\"][as=\"style\"][" + t + "]")) {
			if (!0 !== t[Pt]) {
				r.loading = 1;
				return;
			}
		} else t = e.createElement("link"), t[Pt] = !0, t.onload = t.onerror = Bt.bind(null, t), np(t, "link", n), zt(t), e.head.appendChild(t);
		r.preload = t, t.addEventListener("load", function() {
			return r.loading |= 1;
		}), t.addEventListener("error", function() {
			return r.loading |= 2;
		});
	}
	function Rm(e) {
		return "[src=\"" + on(e) + "\"]";
	}
	function zm(e) {
		return "script[async]" + e;
	}
	function Bm(e, t, n) {
		if (t.count++, t.instance === null) switch (t.type) {
			case "style":
				var r = e.querySelector("style[data-href~=\"" + on(n.href) + "\"]");
				if (r) return t.instance = r, zt(r), r;
				var i = E({}, n, {
					"data-href": n.href,
					"data-precedence": n.precedence,
					href: null,
					precedence: null
				});
				return r = (e.ownerDocument || e).createElement("style"), zt(r), np(r, "style", i), Vm(r, n.precedence, e), t.instance = r;
			case "stylesheet":
				i = Pm(n.href);
				var a = e.querySelector(Fm(i));
				if (a) return t.state.loading |= 4, t.instance = a, zt(a), a;
				r = Im(n), (i = vm.get(i)) && Hm(r, i), a = (e.ownerDocument || e).createElement("link"), zt(a);
				var s = a;
				return s._p = new Promise(function(e, t) {
					s.onload = e, s.onerror = t;
				}), np(a, "link", r), t.state.loading |= 4, Vm(a, n.precedence, e), t.instance = a;
			case "script": return a = Rm(n.src), (i = e.querySelector(zm(a))) ? (t.instance = i, zt(i), i) : (r = n, (i = vm.get(a)) && (r = E({}, n), Um(r, i)), e = e.ownerDocument || e, i = e.createElement("script"), zt(i), np(i, "link", r), e.head.appendChild(i), t.instance = i);
			case "void": return null;
			default: throw Error(o(443, t.type));
		}
		else t.type === "stylesheet" && !(t.state.loading & 4) && (r = t.instance, t.state.loading |= 4, Vm(r, n.precedence, e));
		return t.instance;
	}
	function Vm(e, t, n) {
		for (var r = n.querySelectorAll("link[rel=\"stylesheet\"][data-precedence],style[data-precedence]"), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
			var s = r[o];
			if (s.dataset.precedence === t) a = s;
			else if (a !== i) break;
		}
		a ? a.parentNode.insertBefore(e, a.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
	}
	function Hm(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.title ??= t.title;
	}
	function Um(e, t) {
		e.crossOrigin ??= t.crossOrigin, e.referrerPolicy ??= t.referrerPolicy, e.integrity ??= t.integrity;
	}
	var Wm = null;
	function Gm(e, t, n) {
		if (Wm === null) {
			var r = /* @__PURE__ */ new Map(), i = Wm = /* @__PURE__ */ new Map();
			i.set(n, r);
		} else i = Wm, r = i.get(n), r || (r = /* @__PURE__ */ new Map(), i.set(n, r));
		if (r.has(e)) return r;
		for (r.set(e, null), n = n.getElementsByTagName(e), i = 0; i < n.length; i++) {
			var a = n[i];
			if (!(a[Nt] || a[Et] || e === "link" && a.getAttribute("rel") === "stylesheet") && a.namespaceURI !== "http://www.w3.org/2000/svg") {
				var o = a.getAttribute(t) || "";
				o = e + o;
				var s = r.get(o);
				s ? s.push(a) : r.set(o, [a]);
			}
		}
		return r;
	}
	function Km(e, t, n) {
		e = e.ownerDocument || e, e.head.insertBefore(n, t === "title" ? e.querySelector("head > title") : null);
	}
	function qm(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title": return !0;
			case "style":
				if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
				return !0;
			case "link":
				if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
				switch (t.rel) {
					case "stylesheet": return e = t.disabled, typeof t.precedence == "string" && e == null;
					default: return !0;
				}
			case "script": if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
		}
		return !1;
	}
	function Jm(e, t) {
		return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
	}
	function Ym(e) {
		return !(e.type === "stylesheet" && !(e.state.loading & 3));
	}
	function Xm(e) {
		return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * .25;
	}
	function Zm(e, t) {
		typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Xm(t), e.suspenseyImages.push(t)), e = rh.bind(e), t.decode().then(e, e));
	}
	function Qm(e, t, n, r) {
		if (n.type === "stylesheet" && (typeof r.media != "string" || !1 !== matchMedia(r.media).matches) && !(n.state.loading & 4)) {
			if (n.instance === null) {
				var i = Pm(r.href), a = t.querySelector(Fm(i));
				if (a) {
					t = a._p, typeof t == "object" && t && typeof t.then == "function" && (e.count++, e = nh.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = a, zt(a);
					return;
				}
				a = t.ownerDocument || t, r = Im(r), (i = vm.get(i)) && Hm(r, i), a = a.createElement("link"), zt(a);
				var o = a;
				o._p = new Promise(function(e, t) {
					o.onload = e, o.onerror = t;
				}), np(a, "link", r), n.instance = a;
			}
			e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && !(n.state.loading & 3) && (e.count++, n = nh.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
		}
	}
	var $m = 0;
	function eh(e, t) {
		return e.stylesheets && e.count === 0 && ah(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
			var r = setTimeout(function() {
				if (e.stylesheets && ah(e, e.stylesheets), e.unsuspend) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, 6e4 + t);
			0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
			var i = setTimeout(function() {
				if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
					var t = e.unsuspend;
					e.unsuspend = null, t();
				}
			}, (e.imgBytes > $m ? 50 : 800) + t);
			return e.unsuspend = n, function() {
				e.unsuspend = null, clearTimeout(r), clearTimeout(i);
			};
		} : null;
	}
	function th(e) {
		if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
			if (e.stylesheets) ah(e, e.stylesheets);
			else if (e.unsuspend) {
				var t = e.unsuspend;
				e.unsuspend = null, t();
			}
		}
	}
	function nh() {
		this.count--, th(this);
	}
	function rh() {
		this.imgCount--, th(this);
	}
	var ih = null;
	function ah(e, t) {
		e.stylesheets = null, e.unsuspend !== null && (e.count++, ih = /* @__PURE__ */ new Map(), t.forEach(oh, e), ih = null, nh.call(e));
	}
	function oh(e, t) {
		if (!(t.state.loading & 4)) {
			var n = ih.get(e);
			if (n) var r = n.get(null);
			else {
				n = /* @__PURE__ */ new Map(), ih.set(e, n);
				for (var i = e.querySelectorAll("link[data-precedence],style[data-precedence]"), a = 0; a < i.length; a++) {
					var o = i[a];
					(o.nodeName === "LINK" || o.getAttribute("media") !== "not all") && (n.set(o.dataset.precedence, o), r = o);
				}
				r && n.set(null, r);
			}
			i = t.instance, o = i.getAttribute("data-precedence"), a = n.get(o) || r, a === r && n.set(null, i), n.set(o, i), this.count++, r = nh.bind(this), i.addEventListener("load", r), i.addEventListener("error", r), a ? a.parentNode.insertBefore(i, a.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(i, e.firstChild)), t.state.loading |= 4;
		}
	}
	var sh = {
		$$typeof: ce,
		Provider: null,
		Consumer: null,
		_currentValue: j,
		_currentValue2: j,
		_threadCount: 0
	};
	function ch(e, t, n, r, i, a, o, s, c) {
		this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gt(0), this.hiddenUpdates = gt(null), this.identifierPrefix = r, this.onUncaughtError = i, this.onCaughtError = a, this.onRecoverableError = o, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = c, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
	}
	function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
		return e = new ch(e, t, n, o, c, l, u, d, s), t = 1, !0 === a && (t |= 24), a = Fi(3, null, null, t), e.current = a, a.stateNode = e, t = Pa(), t.refCount++, e.pooledCache = t, t.refCount++, a.memoizedState = {
			element: r,
			isDehydrated: n,
			cache: t
		}, _o(a), e;
	}
	function uh(e) {
		return e ? (e = Ni, e) : Ni;
	}
	function dh(e, t, n, r, i, a) {
		i = uh(i), r.context === null ? r.context = i : r.pendingContext = i, r = yo(t), r.payload = { element: n }, a = a === void 0 ? null : a, a !== null && (r.callback = a), n = bo(e, r, t), n !== null && (Pd(n, e, t), xo(n, e, t));
	}
	function fh(e, t) {
		if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function ph(e, t) {
		fh(e, t), (e = e.alternate) && fh(e, t);
	}
	function mh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = Ai(e, 67108864);
			t !== null && Pd(t, e, 67108864), ph(e, 67108864);
		}
	}
	function hh(e) {
		if (e.tag === 13 || e.tag === 31) {
			var t = jd();
			t = xt(t);
			var n = Ai(e, t);
			n !== null && Pd(n, e, t), ph(e, t);
		}
	}
	var gh = !0;
	function _h(e, t, n, r) {
		var i = k.T;
		k.T = null;
		var a = A.p;
		try {
			A.p = 2, yh(e, t, n, r);
		} finally {
			A.p = a, k.T = i;
		}
	}
	function vh(e, t, n, r) {
		var i = k.T;
		k.T = null;
		var a = A.p;
		try {
			A.p = 8, yh(e, t, n, r);
		} finally {
			A.p = a, k.T = i;
		}
	}
	function yh(e, t, n, r) {
		if (gh) {
			var i = bh(r);
			if (i === null) Kf(e, t, r, xh, n), Mh(e, r);
			else if (Ph(i, e, t, n, r)) r.stopPropagation();
			else if (Mh(e, r), t & 4 && -1 < jh.indexOf(e)) {
				for (; i !== null;) {
					var a = Lt(i);
					if (a !== null) switch (a.tag) {
						case 3:
							if (a = a.stateNode, a.current.memoizedState.isDehydrated) {
								var o = ut(a.pendingLanes);
								if (o !== 0) {
									var s = a;
									for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
										var c = 1 << 31 - rt(o);
										s.entanglements[1] |= c, o &= ~c;
									}
									Ef(a), !(K & 6) && (gd = Ge() + 500, Df(0, !1));
								}
							}
							break;
						case 31:
						case 13: s = Ai(a, 2), s !== null && Pd(s, a, 2), zd(), ph(a, 2);
					}
					if (a = bh(r), a === null && Kf(e, t, r, xh, n), a === i) break;
					i = a;
				}
				i !== null && r.stopPropagation();
			} else Kf(e, t, r, null, n);
		}
	}
	function bh(e) {
		return e = Cn(e), Sh(e);
	}
	var xh = null;
	function Sh(e) {
		if (xh = null, e = It(e), e !== null) {
			var t = l(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (e = u(t), e !== null) return e;
					e = null;
				} else if (n === 31) {
					if (e = d(t), e !== null) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return xh = e, null;
	}
	function Ch(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "fullscreenerror":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart": return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "resize":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave": return 8;
			case "message": switch (Ke()) {
				case qe: return 2;
				case Je: return 8;
				case Ye:
				case Xe: return 32;
				case Ze: return 268435456;
				default: return 32;
			}
			default: return 32;
		}
	}
	var wh = !1, Th = null, Eh = null, Dh = null, Oh = /* @__PURE__ */ new Map(), kh = /* @__PURE__ */ new Map(), Ah = [], jh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
	function Mh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Th = null;
				break;
			case "dragenter":
			case "dragleave":
				Eh = null;
				break;
			case "mouseover":
			case "mouseout":
				Dh = null;
				break;
			case "pointerover":
			case "pointerout":
				Oh.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture": kh.delete(t.pointerId);
		}
	}
	function Nh(e, t, n, r, i, a) {
		return e === null || e.nativeEvent !== a ? (e = {
			blockedOn: t,
			domEventName: n,
			eventSystemFlags: r,
			nativeEvent: a,
			targetContainers: [i]
		}, t !== null && (t = Lt(t), t !== null && mh(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, i !== null && t.indexOf(i) === -1 && t.push(i), e);
	}
	function Ph(e, t, n, r, i) {
		switch (t) {
			case "focusin": return Th = Nh(Th, e, t, n, r, i), !0;
			case "dragenter": return Eh = Nh(Eh, e, t, n, r, i), !0;
			case "mouseover": return Dh = Nh(Dh, e, t, n, r, i), !0;
			case "pointerover":
				var a = i.pointerId;
				return Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0;
			case "gotpointercapture": return a = i.pointerId, kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)), !0;
		}
		return !1;
	}
	function Fh(e) {
		var t = It(e.target);
		if (t !== null) {
			var n = l(t);
			if (n !== null) {
				if (t = n.tag, t === 13) {
					if (t = u(n), t !== null) {
						e.blockedOn = t, wt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 31) {
					if (t = d(n), t !== null) {
						e.blockedOn = t, wt(e.priority, function() {
							hh(n);
						});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function Ih(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length;) {
			var n = bh(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var r = new n.constructor(n.type, n);
				Sn = r, n.target.dispatchEvent(r), Sn = null;
			} else return t = Lt(n), t !== null && mh(t), e.blockedOn = n, !1;
			t.shift();
		}
		return !0;
	}
	function Lh(e, t, n) {
		Ih(e) && n.delete(t);
	}
	function Rh() {
		wh = !1, Th !== null && Ih(Th) && (Th = null), Eh !== null && Ih(Eh) && (Eh = null), Dh !== null && Ih(Dh) && (Dh = null), Oh.forEach(Lh), kh.forEach(Lh);
	}
	function zh(e, n) {
		e.blockedOn === n && (e.blockedOn = null, wh || (wh = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
	}
	var Bh = null;
	function Vh(e) {
		Bh !== e && (Bh = e, t.unstable_scheduleCallback(t.unstable_NormalPriority, function() {
			Bh === e && (Bh = null);
			for (var t = 0; t < e.length; t += 3) {
				var n = e[t], r = e[t + 1], i = e[t + 2];
				if (typeof r != "function") {
					if (Sh(r || n) === null) continue;
					break;
				}
				var a = Lt(n);
				a !== null && (e.splice(t, 3), t -= 3, tc(a, {
					pending: !0,
					data: i,
					method: n.method,
					action: r
				}, r, i));
			}
		}));
	}
	function Hh(e) {
		function t(t) {
			return zh(t, e);
		}
		Th !== null && zh(Th, e), Eh !== null && zh(Eh, e), Dh !== null && zh(Dh, e), Oh.forEach(t), kh.forEach(t);
		for (var n = 0; n < Ah.length; n++) {
			var r = Ah[n];
			r.blockedOn === e && (r.blockedOn = null);
		}
		for (; 0 < Ah.length && (n = Ah[0], n.blockedOn === null);) Fh(n), n.blockedOn === null && Ah.shift();
		if (n = (e.ownerDocument || e).$$reactFormReplay, n != null) for (r = 0; r < n.length; r += 3) {
			var i = n[r], a = n[r + 1], o = i[Dt] || null;
			if (typeof a == "function") o || Vh(n);
			else if (o) {
				var s = null;
				if (a && a.hasAttribute("formAction")) {
					if (i = a, o = a[Dt] || null) s = o.formAction;
					else if (Sh(i) !== null) continue;
				} else s = o.action;
				typeof s == "function" ? n[r + 1] = s : (n.splice(r, 3), r -= 3), Vh(n);
			}
		}
	}
	function Uh() {
		function e(e) {
			e.canIntercept && e.info === "react-transition" && e.intercept({
				handler: function() {
					return new Promise(function(e) {
						return i = e;
					});
				},
				focusReset: "manual",
				scroll: "manual"
			});
		}
		function t() {
			i !== null && (i(), i = null), r || setTimeout(n, 20);
		}
		function n() {
			if (!r && !navigation.transition) {
				var e = navigation.currentEntry;
				e && e.url != null && navigation.navigate(e.url, {
					state: e.getState(),
					info: "react-transition",
					history: "replace"
				});
			}
		}
		if (typeof navigation == "object") {
			var r = !1, i = null;
			return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
				r = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), i !== null && (i(), i = null);
			};
		}
	}
	function Wh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.render = Wh.prototype.render = function(e) {
		var t = this._internalRoot;
		if (t === null) throw Error(o(409));
		var n = t.current;
		dh(n, jd(), e, t, null, null);
	}, Gh.prototype.unmount = Wh.prototype.unmount = function() {
		var e = this._internalRoot;
		if (e !== null) {
			this._internalRoot = null;
			var t = e.containerInfo;
			dh(e.current, 2, null, e, null, null), zd(), t[Ot] = null;
		}
	};
	function Gh(e) {
		this._internalRoot = e;
	}
	Gh.prototype.unstable_scheduleHydration = function(e) {
		if (e) {
			var t = Ct();
			e = {
				blockedOn: null,
				target: e,
				priority: t
			};
			for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
			Ah.splice(n, 0, e), n === 0 && Fh(e);
		}
	};
	var Kh = r.version;
	if (Kh !== "19.3.1") throw Error(o(527, Kh, "19.3.1"));
	A.findDOMNode = function(e) {
		var t = e._reactInternals;
		if (t === void 0) throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
		return e = p(t), e = e === null ? null : m(e), e = e === null ? null : e.stateNode, e;
	};
	var qh = {
		bundleType: 0,
		version: "19.3.1",
		rendererPackageName: "react-dom",
		currentDispatcherRef: k,
		reconcilerVersion: "19.3.1"
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Jh.isDisabled && Jh.supportsFiber) try {
			et = Jh.inject(qh), tt = Jh;
		} catch {}
	}
	e.createRoot = function(e, t) {
		if (!s(e)) throw Error(o(299));
		var n = !1, r = "", i = wc, a = Tc, c = Ec;
		return t != null && (!0 === t.unstable_strictMode && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onUncaughtError !== void 0 && (i = t.onUncaughtError), t.onCaughtError !== void 0 && (a = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = lh(e, 1, !1, null, null, n, r, null, i, a, c, Uh), e[Ot] = t.current, Wf(e), new Wh(t);
	};
})), u = /* @__PURE__ */ t(((e, t) => {
	function n() {
		if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function") try {
			__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
		} catch (e) {
			console.error(e);
		}
	}
	n(), t.exports = l();
})), d = /* @__PURE__ */ e(n(), 1), f = /* @__PURE__ */ (0, d.createContext)({});
// node_modules/framer-motion/dist/es/utils/use-constant.mjs
function p(e) {
	let t = (0, d.useRef)(null);
	return t.current === null && (t.current = e()), t.current;
}
// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var m = typeof window < "u" ? d.useLayoutEffect : d.useEffect, h = /* @__PURE__ */ (0, d.createContext)(null);
// node_modules/motion-utils/dist/es/array.mjs
function g(e, t) {
	e.indexOf(t) === -1 && e.push(t);
}
function _(e, t) {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}
// node_modules/motion-utils/dist/es/clamp.mjs
var v = (e, t, n) => n > t ? t : n < e ? e : n, y = {}, b = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), x = (e) => typeof e == "object" && !!e, S = (e) => /^0[^.\s]+$/u.test(e);
// node_modules/motion-utils/dist/es/memo.mjs
/*#__NO_SIDE_EFFECTS__*/
function ee(e) {
	let t;
	return () => (t === void 0 && (t = e()), t);
}
// node_modules/motion-utils/dist/es/noop.mjs
var C = /* @__NO_SIDE_EFFECTS__ */ (e) => e, w = (...e) => e.reduce((e, t) => (n) => t(e(n))), T = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
	let r = t - e;
	return r ? (n - e) / r : 1;
}, E = class {
	constructor() {
		this.subscriptions = [];
	}
	add(e) {
		return g(this.subscriptions, e), () => this.remove(e);
	}
	remove(e) {
		_(this.subscriptions, e);
	}
	notify(e, t, n) {
		let r = this.subscriptions.length;
		if (r) {
			if (r === 1) this.subscriptions[0](e, t, n);
			else for (let i = 0; i < r; i++) {
				let r = this.subscriptions[i];
				r && r(e, t, n);
			}
		}
	}
	getSize() {
		return this.subscriptions.length;
	}
	clear() {
		this.subscriptions.length = 0;
	}
}, te = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, ne = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3, re = /* @__NO_SIDE_EFFECTS__ */ (e, t) => t ? 1e3 / t * e : 0, ie = (e, t, n) => e * (3 * (1 - e) * ((1 - e) * t + e * n) + e * e);
/*#__NO_SIDE_EFFECTS__*/
function ae(e, t, n, r) {
	return e === t && n === r ? C : (i) => {
		let a = 0, o = 1, s = i;
		for (let t = 0;; t++) {
			s >= a && s <= o || (s = (a + o) / 2);
			let r = ie(s, e, n) - i;
			if (r * r < 1e-28 || t === 40) break;
			r > 0 ? o = s : a = s, s -= r * 1e-7 / (ie(s + 1e-7, e, n) - i - r);
		}
		return ie(s, t, r);
	};
}
// node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
var oe = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, se = /* @__NO_SIDE_EFFECTS__ */ (e) => (t) => 1 - e(1 - t), ce = /*@__PURE__*/ ae(.33, 1.53, .69, .99), D = /*@__PURE__*/ se(ce), le = /*@__PURE__*/ oe(D), ue = (e) => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * D(e) : .5 * (2 - 2 ** (-10 * (e - 1))), de = (e) => 1 - Math.sin(Math.acos(e)), fe = /* @__PURE__ */ se(de), pe = /* @__PURE__ */ oe(de), me = /*@__PURE__*/ ae(.42, 0, 1, 1), he = /*@__PURE__*/ ae(0, 0, .58, 1), ge = /*@__PURE__*/ ae(.42, 0, .58, 1), _e = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] != "number", ve = /* @__NO_SIDE_EFFECTS__ */ (e) => Array.isArray(e) && typeof e[0] == "number", ye = {
	linear: C,
	easeIn: me,
	easeInOut: ge,
	easeOut: he,
	circIn: de,
	circInOut: pe,
	circOut: fe,
	backIn: D,
	backInOut: le,
	backOut: ce,
	anticipate: ue
}, be = (e) => typeof e == "string", xe = (e) => {
	if (/* @__PURE__ */ ve(e)) {
		let [t, n, r, i] = e;
		return /* @__PURE__ */ ae(t, n, r, i);
	}
	return be(e) ? ye[e] : e;
}, O = {
	delta: 0,
	timestamp: 0,
	isProcessing: !1
}, k;
function A() {
	k = void 0;
}
var j = {
	now: () => (k === void 0 && j.set(O.isProcessing || y.useManualTiming ? O.timestamp : performance.now()), k),
	set: (e) => {
		k = e, queueMicrotask(A);
	}
}, Se = (e) => Math.round(e * 1e5) / 1e5, Ce = (e) => (t) => typeof t == "string" && t.startsWith(e), we = /*@__PURE__*/ Ce("--"), Te = /*@__PURE__*/ Ce("var(--"), M = (e) => Te(e) ? Ee.test(e.split("/*")[0].trim()) : !1, Ee = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function De(e) {
	return typeof e == "string" && e.split("/*")[0].includes("var(--");
}
// node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
var Oe = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, ke = {
	...Oe,
	transform: (e) => v(0, 1, e)
}, Ae = {
	...Oe,
	default: 1
}, je = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
// node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
function Me(e) {
	return e == null;
}
// node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
var Ne = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Pe = (e, t) => (n) => !!(typeof n == "string" && Ne.test(n) && n.startsWith(e) || t && !Me(n) && Object.prototype.hasOwnProperty.call(n, t)), Fe = (e, t, n) => (r) => {
	if (typeof r != "string") return r;
	let [i, a, o, s] = r.match(je);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, Ie = (e) => v(0, 255, e), Le = {
	...Oe,
	transform: (e) => Math.round(Ie(e))
}, Re = {
	test: /*@__PURE__*/ Pe("rgb", "red"),
	parse: /*@__PURE__*/ Fe("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Le.transform(e) + ", " + Le.transform(t) + ", " + Le.transform(n) + ", " + Se(ke.transform(r)) + ")"
}, ze = (e, t, n) => {
	let r = e.substring(1 + t * n, 1 + (t + 1) * n);
	return n > 1 ? r : r + r;
};
function Be(e) {
	let t = e.length > 5 ? 2 : 1, n = ze(e, 3, t);
	return {
		red: parseInt(ze(e, 0, t), 16),
		green: parseInt(ze(e, 1, t), 16),
		blue: parseInt(ze(e, 2, t), 16),
		alpha: n ? parseInt(n, 16) / 255 : 1
	};
}
var Ve = {
	test: /*@__PURE__*/ Pe("#"),
	parse: Be,
	transform: Re.transform
}, He = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
	test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), Ue = /*@__PURE__*/ He("deg"), We = /*@__PURE__*/ He("%"), N = /*@__PURE__*/ He("px"), Ge = /*@__PURE__*/ He("vh"), Ke = /*@__PURE__*/ He("vw"), qe = {
	...We,
	parse: (e) => We.parse(e) / 100,
	transform: (e) => We.transform(e * 100)
}, Je = {
	test: /*@__PURE__*/ Pe("hsl", "hue"),
	parse: /*@__PURE__*/ Fe("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + We.transform(Se(t)) + ", " + We.transform(Se(n)) + ", " + Se(ke.transform(r)) + ")"
}, Ye = {
	test: (e) => Re.test(e) || Ve.test(e) || Je.test(e),
	parse: (e) => Re.test(e) ? Re.parse(e) : Je.test(e) ? Je.parse(e) : Ve.parse(e),
	transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? Re.transform(e) : Je.transform(e),
	getAnimatableNone: (e) => {
		let t = Ye.parse(e);
		return t.alpha = 0, Ye.transform(t);
	}
}, Xe = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, Ze = /*@__PURE__*/ new RegExp(je.source), Qe = /*@__PURE__*/ new RegExp(Xe.source, "i");
function $e(e) {
	return isNaN(e) && typeof e == "string" && (Ze.test(e) || Qe.test(e));
}
var et = "number", tt = "color", nt = "var", rt = "var(", it = "${}", at = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
function ot(e) {
	let t = e.toString();
	return Ze.test(t) || Qe.test(t);
}
function st(e) {
	let t = e.toString(), n = [], r = {
		color: [],
		number: [],
		var: []
	}, i = [], a = 0;
	return {
		values: n,
		split: t.replace(at, (e) => (Ye.test(e) ? (r.color.push(a), i.push(tt), n.push(Ye.parse(e))) : e.startsWith(rt) ? (r.var.push(a), i.push(nt), n.push(e)) : (r.number.push(a), i.push(et), n.push(parseFloat(e))), ++a, it)).split(it),
		indexes: r,
		types: i
	};
}
function ct(e) {
	return st(e).values;
}
function lt({ split: e, types: t }) {
	let n = e.length;
	return (r) => {
		let i = "";
		for (let a = 0; a < n; a++) if (i += e[a], r[a] !== void 0) {
			let e = t[a];
			i += e === et ? Se(r[a]) : e === tt ? Ye.transform(r[a]) : r[a];
		}
		return i;
	};
}
function ut(e) {
	return lt(st(e));
}
var dt = (e) => typeof e == "number" ? 0 : Ye.test(e) ? Ye.getAnimatableNone(e) : e, ft = (e, t) => typeof e == "number" ? t?.trim().endsWith("/") ? e : 0 : dt(e);
function pt(e) {
	let t = st(e);
	return lt(t)(t.values.map((e, n) => ft(e, t.split[n])));
}
var mt = {
	test: $e,
	parse: ct,
	createTransformer: ut,
	getAnimatableNone: pt
};
// node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
function ht(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function gt({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = ht(s, r, e + 1 / 3), a = ht(s, r, e), o = ht(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
// node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
function _t(e, t) {
	return (n) => n > 0 ? t : e;
}
// node_modules/motion-dom/dist/es/utils/mix/number.mjs
var P = (e, t, n) => e + (t - e) * n, vt = (e, t, n) => {
	let r = e * e, i = n * (t * t - r) + r;
	return i < 0 ? 0 : Math.sqrt(i);
}, yt = [
	Ve,
	Re,
	Je
], bt = (e) => yt.find((t) => t.test(e));
function xt(e) {
	let t = bt(e);
	if (!t) return !1;
	let n = t.parse(e);
	return t === Je && (n = gt(n)), n;
}
var St = (e, t) => {
	let n = xt(e), r = xt(t);
	if (!n || !r) return _t(e, t);
	let i = { ...n };
	return (e) => (i.red = vt(n.red, r.red, e), i.green = vt(n.green, r.green, e), i.blue = vt(n.blue, r.blue, e), i.alpha = P(n.alpha, r.alpha, e), Re.transform(i));
}, Ct = /* @__PURE__ */ new Set(["none", "hidden"]);
function wt(e, t) {
	return Ct.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
// node_modules/motion-dom/dist/es/utils/mix/complex.mjs
function Tt(e, t) {
	return (n) => P(e, t, n);
}
function Et(e) {
	return typeof e == "number" ? Tt : typeof e == "string" ? M(e) ? _t : Ye.test(e) ? St : At : Array.isArray(e) ? Dt : typeof e == "object" ? Ye.test(e) ? St : Ot : _t;
}
function Dt(e, t) {
	let n = [...e], r = n.length, i = e.map((e, n) => Et(e)(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}
function Ot(e, t) {
	let n = {
		...e,
		...t
	}, r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Et(e[i])(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
}
function kt(e, t) {
	let n = [], r = {
		color: 0,
		var: 0,
		number: 0
	};
	for (let i = 0; i < t.values.length; i++) {
		let a = t.types[i], o = e.indexes[a][r[a]], s = e.values[o] ?? 0;
		n[i] = s, r[a]++;
	}
	return n;
}
var At = (e, t) => {
	let n = st(e), r = st(t);
	return n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length ? Ct.has(e) && !r.values.length || Ct.has(t) && !n.values.length ? wt(e, t) : w(Dt(kt(n, r), r.values), lt(r)) : _t(e, t);
}, jt = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function Mt(e, t) {
	let n = jt.exec(e);
	if (!n) return;
	let r = jt.exec(t);
	if (!r || n[2] !== r[2]) return;
	let i = n[2], a = parseFloat(n[1]), o = parseFloat(r[1]);
	return (e) => Se(P(a, o, e)) + i;
}
function Nt(e, t, n) {
	if (typeof e == "number" && typeof t == "number" && typeof n == "number") return P(e, t, n);
	if (typeof e == "string" && typeof t == "string") {
		let n = Mt(e, t);
		if (n) return n;
	}
	return Et(e)(e, t);
}
// node_modules/motion-dom/dist/es/frameloop/order.mjs
var Pt = [
	"setup",
	"read",
	"resolveKeyframes",
	"preUpdate",
	"update",
	"preRender",
	"render",
	"postRender"
];
// node_modules/motion-dom/dist/es/frameloop/render-step.mjs
function Ft(e) {
	let t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set(), r = !1, i = !1, a, o = /* @__PURE__ */ new Set(), s = {
		delta: 0,
		timestamp: 0,
		isProcessing: !1
	};
	function c(t) {
		o.has(t) && (n.add(t), e()), (a = t)(s);
	}
	let l = {
		schedule: (e, i = !1, s = !1) => {
			let c = s && r, l = c ? t : n;
			return i && o.add(e), c && e !== a && l.delete(e), l.add(e), e;
		},
		cancel: (e) => {
			n.delete(e), o.delete(e);
		},
		process: (e) => {
			if (s = e, r) {
				i = !0;
				return;
			}
			r = !0;
			let o = t;
			t = n, n = o, t.forEach(c), t.clear(), a = void 0, r = !1, i && (i = !1, l.process(e));
		}
	};
	return l;
}
// node_modules/motion-dom/dist/es/frameloop/batcher.mjs
var It = 40;
function Lt(e, t, n = {
	delta: 0,
	timestamp: 0,
	isProcessing: !1
}) {
	let r = !1, i = !0, a = () => r = !0, o = Pt.reduce((e, t) => (e[t] = Ft(a), e), {}), { setup: s, read: c, resolveKeyframes: l, preUpdate: u, update: d, preRender: f, render: p, postRender: m } = o, h = () => {
		let a = y.useManualTiming, o = a ? n.timestamp : performance.now();
		r = !1, a || (n.delta = i ? 1e3 / 60 : Math.max(Math.min(o - n.timestamp, It), 1)), n.timestamp = o, n.isProcessing = !0, s.process(n), c.process(n), l.process(n), u.process(n), d.process(n), f.process(n), p.process(n), m.process(n), n.isProcessing = !1, r && t && (i = !1, e(h));
	}, g = () => {
		r = !0, i = !0, n.isProcessing || e(h);
	};
	return {
		schedule: Pt.reduce((e, t) => {
			let n = o[t];
			return e[t] = (e, t = !1, i = !1) => (r || g(), n.schedule(e, t, i)), e;
		}, {}),
		cancel: (e) => {
			for (let t = 0; t < Pt.length; t++) o[Pt[t]].cancel(e);
		},
		state: n,
		steps: o
	};
}
// node_modules/motion-dom/dist/es/frameloop/frame.mjs
var { schedule: F, cancel: Rt, steps: zt } = /* @__PURE__ */ Lt(typeof requestAnimationFrame < "u" ? requestAnimationFrame : C, !0, O), Bt = (e) => {
	let t = ({ timestamp: t }) => e(t);
	return {
		start: (e = !0) => F.update(t, e),
		stop: () => Rt(t),
		now: () => O.isProcessing ? O.timestamp : j.now()
	};
}, Vt = (e, t, n = 10) => {
	let r = "", i = Math.max(Math.round(t / n), 2);
	for (let t = 0; t < i; t++) r += Math.round(e(t / (i - 1)) * 1e4) / 1e4 + ", ";
	return `linear(${r.substring(0, r.length - 2)})`;
}, Ht = 2e4;
function Ut(e, t = 50, n = Ht, r) {
	let i = 0, a = e.next(i);
	for (r?.push(a.value); !a.done && i < n;) i += t, a = e.next(i), r?.push(a.value);
	return i >= n ? Infinity : i;
}
// node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
function Wt(e, t = 100, n) {
	let { keyframes: r, velocity: i } = e, a = r && r[r.length - 1] - r[0], o = n({
		...e,
		velocity: i && a ? i * t / a : i,
		keyframes: [0, t]
	}), s = Math.min(Ut(o), Ht);
	return {
		type: "keyframes",
		ease: (e) => o.next(s * e).value / t,
		duration: /* @__PURE__ */ ne(s)
	};
}
// node_modules/motion-dom/dist/es/animation/generators/spring.mjs
var Gt = 100, Kt = 10, qt = 1, Jt = 800, I = .3, Yt = .3, Xt = .01, Zt = 2, Qt = .005, $t = .5, en = .01, tn = 10, nn = .05, rn = (e) => e < 0 ? 1 / Math.max(1 + e, nn) : Math.max(1 - e, nn);
function an(e, t) {
	if (!(e > 1)) return 1;
	let n = Math.sqrt(e * e - 1), r = e - n, i = e + n, a = 2 * n * Math.exp(-t) * (1 + t);
	return cn((e) => i * Math.exp(-r * e) - r * Math.exp(-i * e) - a, (e) => Math.exp(-i * e) - Math.exp(-r * e), t) / t;
}
function on(e, t) {
	return e * Math.sqrt(1 - t * t);
}
var sn = 12;
function cn(e, t, n) {
	let r = n;
	for (let n = 1; n < sn; n++) r -= e(r) / t(r);
	return r;
}
var ln = .001;
function un({ duration: e = Jt, bounce: t = I }) {
	let n, r, i = rn(t);
	e = v(en, tn, /* @__PURE__ */ ne(e)), i < 1 ? (n = (t) => {
		let n = t * i, r = n * e, a = on(t, i), o = Math.exp(-r);
		return ln - n / a * o;
	}, r = (t) => {
		let r = t * i * e, a = i * i * t * t * e, o = Math.exp(-r), s = on(t * t, i);
		return (-n(t) + ln > 0 ? -1 : 1) * -a * o / s;
	}) : (n = (t) => -.001 + Math.exp(-t * e) * (t * e + 1), r = (t) => Math.exp(-t * e) * (-t * (e * e)));
	let a = 5 / e, o = cn(n, r, a), s = o * an(i, o * e), c = s * s;
	return {
		stiffness: c,
		damping: i * 2 * Math.sqrt(c),
		duration: /* @__PURE__ */ te(e)
	};
}
var dn = (e, t) => (t ? e >= 0 : e > 0) && e < Infinity;
function fn(e, t) {
	if (dn(e, t)) return e;
}
function pn(e) {
	let t = fn(e.stiffness), n = fn(e.damping, !0), r = fn(e.mass), i = {
		...e,
		stiffness: t ?? Gt,
		damping: n ?? Kt,
		mass: r ?? qt,
		isResolvedFromDuration: !1,
		isTimeDefined: (t ?? n ?? r) === void 0 && (e.duration !== void 0 || e.bounce !== void 0)
	};
	if (i.isTimeDefined) {
		if (e.visualDuration) {
			let t = rn(e.bounce || 0), n = 2 * Math.PI / (e.visualDuration * 1.2) * an(t, 2 * Math.PI / 1.2);
			i.stiffness = n * n, i.damping = 2 * t * Math.sqrt(i.stiffness);
		} else Object.assign(i, un(i)), i.isResolvedFromDuration = !0;
		dn(i.stiffness) && dn(i.damping, !0) || (i.stiffness = Gt, i.damping = Kt);
	}
	return i;
}
function mn(e = Yt, t = I) {
	let n = typeof e == "object" ? e : {
		visualDuration: e,
		keyframes: [0, 1],
		bounce: t
	}, r = n.keyframes[0], i = n.keyframes[n.keyframes.length - 1], a = {
		done: !1,
		value: r
	}, { stiffness: o, damping: s, mass: c, duration: l, isResolvedFromDuration: u, isTimeDefined: d } = pn({ ...n }), f = (e) => d ? 0 : -/* @__PURE__ */ ne(e), p = s / (2 * Math.sqrt(o * c)), m = /* @__PURE__ */ ne(Math.sqrt(o / c)), h = p * m, g = {
		target: i,
		delta: i - r,
		velocity: f(n.velocity || 0) || 0,
		restSpeed: 0,
		restDelta: 0
	}, _ = () => {
		let e = Math.abs(g.delta) < 5;
		g.restSpeed = n.restSpeed || (e ? Xt : Zt), g.restDelta = n.restDelta || (e ? Qt : $t);
	};
	_();
	let v, y, b;
	if (p < 1) {
		let e = on(m, p), t = {
			A: 0,
			sinC: 0,
			cosC: 0,
			t: -1,
			env: 0,
			sin: 0,
			cos: 0
		};
		b = () => {
			t.A = (g.velocity + h * g.delta) / e, t.sinC = h * t.A + g.delta * e, t.cosC = h * g.delta - t.A * e;
		};
		let n = (n) => {
			n !== t.t && (t.t = n, t.env = Math.exp(-h * n), t.sin = Math.sin(e * n), t.cos = Math.cos(e * n));
		};
		v = (e) => (n(e), g.target - t.env * (t.A * t.sin + g.delta * t.cos)), y = (e) => (n(e), t.env * (t.sinC * t.sin + t.cosC * t.cos));
	} else if (p === 1) {
		v = (e) => g.target - Math.exp(-m * e) * (g.delta + (g.velocity + m * g.delta) * e);
		let e = { C: 0 };
		b = () => {
			e.C = g.velocity + m * g.delta;
		}, y = (t) => Math.exp(-m * t) * (m * e.C * t - g.velocity);
	} else {
		let e = m * Math.sqrt(p * p - 1), t = h - e, n = h + e, r = e < 1 || d ? Infinity : 300 / e, i = (e, t) => Math.exp(t > r ? (h - e) * r - h * t : -e * t), a = {
			S: 0,
			F: 0
		};
		b = () => {
			let t = (g.velocity + h * g.delta) / e;
			a.S = (g.delta + t) / 2, a.F = (g.delta - t) / 2;
		}, v = (e) => g.target - a.S * i(t, e) - a.F * i(n, e), y = (e) => t * a.S * i(t, e) + n * a.F * i(n, e);
	}
	b();
	let x = u && l || null, S = {
		calculatedDuration: x,
		retarget: (e, t) => {
			g.target = e[e.length - 1], g.delta = g.target - e[0], g.velocity = f(t), n.restSpeed && n.restDelta || _(), S.calculatedDuration = x, a.done = !1, b();
		},
		velocity: (e) => /* @__PURE__ */ te(y(e)),
		next: (e) => {
			let t = v(e);
			if (u) a.done = e >= l;
			else {
				let n = /* @__PURE__ */ te(y(e));
				a.done = Math.abs(n) <= g.restSpeed && Math.abs(g.target - t) <= g.restDelta;
			}
			return a.value = a.done ? g.target : t, a;
		},
		toString: () => {
			let e = Math.min(Ut(S), Ht), t = Vt((t) => S.next(e * t).value, e, 30);
			return e + "ms " + t;
		},
		toTransition: () => {}
	};
	return S;
}
var hn = /* @__PURE__ */ Object.assign(mn, { applyToOptions: (e) => {
	let t = Wt(e, 100, mn);
	return e.ease = t.ease, e.duration = /* @__PURE__ */ te(t.duration), e.type = "keyframes", e;
} });
// node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
function gn({ keyframes: e, velocity: t = 0, power: n = .8, timeConstant: r = 325, bounceDamping: i = 10, bounceStiffness: a = 500, modifyTarget: o, min: s, max: c, restDelta: l = .5, restSpeed: u }) {
	let d = e[0], f = {
		done: !1,
		value: d
	}, p = (e) => e < s || e > c, m = (e) => s === void 0 ? c : c === void 0 || Math.abs(s - e) < Math.abs(c - e) ? s : c, h = n * t, g = d + h, _ = o ? o(g) : g;
	_ !== g && (h = _ - d);
	let v = (e) => -h * Math.exp(-e / r), y = (e) => {
		let t = v(e);
		f.done = Math.abs(t) <= l, f.value = f.done ? _ : e ? _ + t : d;
	}, b, x, S = (e) => {
		p(f.value) && (b = e, x = hn({
			keyframes: [f.value, m(f.value)],
			velocity: -v(e) / r * 1e3,
			damping: i,
			stiffness: a,
			restDelta: l,
			restSpeed: u
		}));
	};
	return S(0), {
		calculatedDuration: null,
		next: (e) => {
			let t = !1;
			return !x && b === void 0 && (t = !0, y(e), S(e)), b !== void 0 && e >= b ? x.next(e - b) : (!t && y(e), f);
		}
	};
}
// node_modules/motion-dom/dist/es/utils/interpolate.mjs
function _n(e, t, n) {
	let r = [], i = y.mix || Nt, a = e.length - 1;
	for (let o = 0; o < a; o++) {
		let a = n?.(e[o], e[o + 1]) || i(e[o], e[o + 1]);
		t && (a = w(Array.isArray(t) ? t[o] || C : t, a)), r.push(a);
	}
	return r;
}
function vn(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	if (a === 1) return () => t[0];
	if (a === 2 && t[0] === t[1]) return () => t[1];
	let o = e[0] === e[1];
	e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
	let s = _n(t, r, i), c = s.length, l = (n) => {
		if (o && n < e[0]) return t[0];
		let r = 0;
		if (c > 1) for (; r < e.length - 2 && !(n < e[r + 1]); r++);
		let i = /* @__PURE__ */ T(e[r], e[r + 1], n);
		return s[r](i);
	};
	return n ? (t) => l(v(e[0], e[a - 1], t)) : l;
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
function yn(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = /* @__PURE__ */ T(0, t, r);
		e.push(P(n, 1, i));
	}
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
function bn(e) {
	let t = [0];
	return yn(t, e.length - 1), t;
}
// node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
function xn(e, t) {
	return e.map((e) => e * t);
}
// node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
function Sn(e, t) {
	return e.map(() => t || ge).splice(0, e.length - 1);
}
function Cn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut", mixer: i }) {
	let a = typeof t[0] == "number" ? void 0 : i, o = /* @__PURE__ */ _e(r) ? r.map(xe) : xe(r) || ge, s = {
		done: !1,
		value: t[0]
	}, c = -1;
	if (!a) {
		for (let e = 1; e < t.length; e++) if (t[e] !== t[e - 1]) {
			if (c >= 0) {
				c = -2;
				break;
			}
			c = e - 1;
		}
	}
	if (c >= 0) {
		let r = n && n.length === t.length ? n : bn(t), i = r[c] * e, a = r[c + 1] * e, l = t[c], u = t[c + 1], d = Array.isArray(o) ? o[c] : o, f = (y.mix || Nt)(l, u), p = t.length - 2;
		return {
			calculatedDuration: e,
			next: (t) => (s.value = c && t < i ? f(0) : c < p && (t >= a || !e) ? typeof u == "number" ? u : f(1) : f(d(t >= a || !e ? 1 : t <= i ? 0 : (t - i) / (a - i))), s.done = t >= e, s)
		};
	}
	let l = vn(xn(n && n.length === t.length ? n : bn(t), e), t, {
		ease: Array.isArray(o) ? o : Sn(t, o),
		mixer: a
	});
	return {
		calculatedDuration: e,
		next: (t) => (s.value = l(t), s.done = t >= e, s)
	};
}
// node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
var wn = 5;
function Tn(e, t, n) {
	let r = Math.max(t - wn, 0);
	return /* @__PURE__ */ re(n - e(r), t - r);
}
function En(e, t, n = 0) {
	return t <= 0 ? n : e.velocity ? e.velocity(t) : Tn((t) => e.next(t).value, t, e.next(t).value);
}
// node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
function Dn(e, { repeat: t, repeatType: n = "loop" }, r, i = 1) {
	let a, o, s = 0;
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		n !== null && (s++ || (a = n), o = n);
	}
	let c = i < 0 || t && n !== "loop" && t % 2 == 1 ? 0 : s - 1;
	return !c || r === void 0 ? c ? o : a : r;
}
// node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
var On = {
	decay: gn,
	inertia: gn,
	tween: Cn,
	keyframes: Cn,
	spring: hn
};
function kn(e) {
	typeof e.type == "string" && (e.type = On[e.type]);
}
// node_modules/motion-dom/dist/es/animation/utils/resolve-start-time.mjs
var An = 40, jn = (e, t) => t - e > An && !y.useManualTiming ? t : e;
// node_modules/motion-dom/dist/es/animation/utils/notify-inspector.mjs
function Mn(e, t) {
	return {
		kind: e,
		animation: t,
		timestamp: j.now(),
		frameTimestamp: O.timestamp,
		frameIsProcessing: O.isProcessing
	};
}
function Nn(e, t, n) {
	let r = globalThis.__MOTION_INSPECT__;
	if (r) try {
		r({
			...Mn("animation-start", e),
			options: n ? {
				...t,
				...n
			} : t
		});
	} catch {}
}
function Pn(e, t) {
	let n = globalThis.__MOTION_INSPECT__;
	if (n) try {
		n({
			...Mn("layout-animation-start", e),
			node: t
		});
	} catch {}
}
// node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
var Fn = class {
	constructor() {
		this.isResolved = !1;
	}
	get finished() {
		return this._finished ||= this.isResolved ? Promise.resolve() : new Promise((e) => {
			this._resolve = e;
		}), this._finished;
	}
	updateFinished() {
		this._finished = this._resolve = void 0, this.isResolved = !1;
	}
	notifyFinished() {
		this.isResolved = !0, this._resolve?.();
	}
	then(e, t) {
		return this.finished.then(e, t);
	}
}, In = (e) => e / 100, Ln = (e) => Math.round(e * 1e4) / 1e4, Rn = class extends Fn {
	constructor(e) {
		super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
			done: !1,
			value: void 0
		}, this.stop = () => {
			let { motionValue: e } = this.options;
			e && e.updatedAt !== j.now() && this.tick(j.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
		}, this.options = e, this.initAnimation(), this.play(), e.autoplay === !1 && this.pause(), Nn(this, this.options);
	}
	initAnimation() {
		let { options: e } = this;
		kn(e);
		let { type: t = Cn, repeat: n = 0, repeatDelay: r = 0, repeatType: i, velocity: a = 0 } = e, { keyframes: o } = e, s = t || Cn;
		this.mixKeyframes = void 0, s !== Cn && typeof o[0] != "number" && (this.mixKeyframes = w(In, e.mixer?.(o[0], o[1]) || Nt(o[0], o[1])), o = [0, 100]);
		let c = s(o === e.keyframes ? e : {
			...e,
			keyframes: o
		});
		i === "mirror" && (this.mirroredGenerator = s({
			...e,
			keyframes: [...o].reverse(),
			velocity: -a
		})), c.calculatedDuration === null && (c.calculatedDuration = Ut(c));
		let { calculatedDuration: l } = c;
		this.calculatedDuration = l, this.resolvedDuration = l + r, this.totalDuration = this.resolvedDuration * (n + 1) - r, this.generator = c;
	}
	updateTime(e) {
		this.currentTime = this.holdTime ?? Math.round(e - this.startTime) * this.playbackSpeed;
	}
	tick(e, t = !1) {
		let { generator: n, totalDuration: r, calculatedDuration: i } = this;
		if (this.startTime === null) return n.next(0);
		let { delay: a = 0, keyframes: o, type: s, onUpdate: c, finalKeyframe: l } = this.options;
		this.startTime === this.pendingStartTime && (this.startTime = jn(this.startTime, e)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
		let u = this.currentTime - a * (this.playbackSpeed >= 0 ? 1 : -1), d = this.playbackSpeed >= 0 ? u < 0 : u > r;
		this.currentTime = Math.max(u, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = r);
		let f = this.generate(this.currentTime, d), { done: p } = f;
		d || (p = this.playbackSpeed >= 0 ? i < Infinity ? this.currentTime >= r : p : this.currentTime <= 0);
		let m = this.holdTime === null && (this.state === "finished" || this.state === "running" && p);
		return m && s !== gn && (f.value = Dn(o, this.options, l, this.speed)), c && c(f.value), m && this.finish(), f;
	}
	at(e) {
		return this.holdTime ?? Ln((e - this.startTime) * this.playbackSpeed);
	}
	sampleAt(e, t) {
		let { options: n, totalDuration: r } = this, i = this.at(e) - (n.delay || 0);
		return i >= r && n.type !== gn ? Dn(n.keyframes, n, t ? void 0 : n.finalKeyframe) : this.generate(Math.max(i, 0), i < 0).value;
	}
	generate(e, t) {
		let { generator: n, totalDuration: r, mixKeyframes: i, mirroredGenerator: a, resolvedDuration: o } = this, { keyframes: s, repeat: c, repeatType: l, repeatDelay: u } = this.options, d = e, f = n;
		if (c) {
			let t = Math.min(e, r) / o, n = Math.floor(t), i = t % 1;
			!i && t >= 1 && (i = 1), i === 1 && n--, n = Math.min(n, c + 1), n % 2 && (l === "reverse" ? (i = 1 - i, u && (i -= u / o)) : l === "mirror" && (f = a)), d = v(0, 1, i) * o;
		}
		let p;
		return t ? (this.delayState.value = s[0], p = this.delayState) : p = f.next(d), i && !t && (p.value = i(p.value)), p;
	}
	get duration() {
		return /* @__PURE__ */ ne(this.calculatedDuration);
	}
	get iterationDuration() {
		return this.duration + /* @__PURE__ */ ne(this.options.delay ?? 0);
	}
	get time() {
		return /* @__PURE__ */ ne(this.currentTime);
	}
	set time(e) {
		this.state === "finished" && this.updateFinished(), e = /* @__PURE__ */ te(e), this.currentTime = e, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e));
	}
	getGeneratorVelocity() {
		return En(this.generator, this.currentTime, this.options.velocity);
	}
	get speed() {
		return this.playbackSpeed;
	}
	set speed(e) {
		let t = this.playbackSpeed !== e;
		t && this.driver && this.updateTime(j.now()), this.playbackSpeed = e, t && this.driver && (this.time = /* @__PURE__ */ ne(this.currentTime));
	}
	play() {
		if (this.isStopped) return;
		let { driver: e = Bt, startTime: t } = this.options;
		this.driver ||= e((e) => this.tick(e)), this.options.onPlay?.();
		let n = this.driver.now();
		this.state === "finished" ? (this.updateFinished(), this.startTime = n) : this.holdTime === null ? this.startTime ||= t ?? (this.pendingStartTime = n) : this.startTime = n - this.holdTime / (this.playbackSpeed || 1), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
	}
	pause() {
		this.state = "paused", this.updateTime(j.now()), this.holdTime = this.currentTime;
	}
	complete() {
		this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
	}
	finish() {
		this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
	}
	cancel() {
		this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
	}
	teardown() {
		this.state = "idle", this.driver?.stop(), this.driver = void 0, this.startTime = this.holdTime = null;
	}
	sample(e) {
		return this.startTime = 0, this.tick(e, !0);
	}
	attachTimeline(e) {
		return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this);
	}
}, zn = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function Bn(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(je) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!zn.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var Vn = /\b([a-z-]*)\(.*?\)/gu, Hn = {
	...mt,
	getAnimatableNone: (e) => {
		let t = e.match(Vn);
		return t ? t.map(Bn).join(" ") : e;
	}
}, Un = {
	...mt,
	getAnimatableNone: (e) => {
		let t = mt.parse(e);
		return mt.createTransformer(e)(t.map((e) => typeof e == "number" ? 0 : typeof e == "object" ? {
			...e,
			alpha: 1
		} : e));
	}
}, Wn = {
	...Oe,
	transform: Math.round
}, Gn = {
	rotate: Ue,
	pathRotation: Ue,
	rotateX: Ue,
	rotateY: Ue,
	rotateZ: Ue,
	scale: Ae,
	scaleX: Ae,
	scaleY: Ae,
	scaleZ: Ae,
	skew: Ue,
	skewX: Ue,
	skewY: Ue,
	distance: N,
	translateX: N,
	translateY: N,
	translateZ: N,
	x: N,
	y: N,
	z: N,
	perspective: N,
	transformPerspective: N,
	opacity: ke,
	originX: qe,
	originY: qe,
	originZ: N
}, Kn = {
	borderWidth: N,
	borderTopWidth: N,
	borderRightWidth: N,
	borderBottomWidth: N,
	borderLeftWidth: N,
	borderRadius: N,
	borderTopLeftRadius: N,
	borderTopRightRadius: N,
	borderBottomRightRadius: N,
	borderBottomLeftRadius: N,
	width: N,
	maxWidth: N,
	height: N,
	maxHeight: N,
	top: N,
	right: N,
	bottom: N,
	left: N,
	inset: N,
	insetBlock: N,
	insetBlockStart: N,
	insetBlockEnd: N,
	insetInline: N,
	insetInlineStart: N,
	insetInlineEnd: N,
	padding: N,
	paddingTop: N,
	paddingRight: N,
	paddingBottom: N,
	paddingLeft: N,
	paddingBlock: N,
	paddingBlockStart: N,
	paddingBlockEnd: N,
	paddingInline: N,
	paddingInlineStart: N,
	paddingInlineEnd: N,
	margin: N,
	marginTop: N,
	marginRight: N,
	marginBottom: N,
	marginLeft: N,
	marginBlock: N,
	marginBlockStart: N,
	marginBlockEnd: N,
	marginInline: N,
	marginInlineStart: N,
	marginInlineEnd: N,
	fontSize: N,
	backgroundPositionX: N,
	backgroundPositionY: N,
	...Gn,
	zIndex: Wn,
	fillOpacity: ke,
	strokeOpacity: ke,
	numOctaves: Wn
}, qn = {
	...Kn,
	color: Ye,
	backgroundColor: Ye,
	outlineColor: Ye,
	fill: Ye,
	stroke: Ye,
	borderColor: Ye,
	borderTopColor: Ye,
	borderRightColor: Ye,
	borderBottomColor: Ye,
	borderLeftColor: Ye,
	filter: Hn,
	WebkitFilter: Hn,
	mask: Un,
	WebkitMask: Un
}, Jn = (e) => qn[e], Yn = /*@__PURE__*/ new Set([Hn, Un]), Xn, Zn, Qn;
function $n(e, t) {
	if (e === Xn && t === Zn) return Qn;
	let n = Jn(e);
	return Yn.has(n) || (n = mt), Qn = n.getAnimatableNone ? n.getAnimatableNone(t) : void 0, Xn = e, Zn = t, Qn;
}
// node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
function er(e) {
	for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
// node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
var tr = (e) => e * 180 / Math.PI, nr = (e) => ir(tr(Math.atan2(e[1], e[0]))), rr = {
	x: 4,
	y: 5,
	translateX: 4,
	translateY: 5,
	scaleX: 0,
	scaleY: 3,
	scaleZ: () => 1,
	scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
	rotate: nr,
	rotateZ: nr,
	skewX: (e) => tr(Math.atan(e[1])),
	skewY: (e) => tr(Math.atan(e[2])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, ir = (e) => (e %= 360, e < 0 && (e += 360), e), ar = nr, or = (e) => Math.hypot(e[0], e[1]), sr = (e) => Math.hypot(e[4], e[5]), cr = {
	x: 12,
	y: 13,
	z: 14,
	translateX: 12,
	translateY: 13,
	translateZ: 14,
	scaleX: or,
	scaleY: sr,
	scaleZ: (e) => Math.hypot(e[8], e[9], e[10]),
	scale: (e) => (or(e) + sr(e)) / 2,
	rotateX: (e) => ir(tr(Math.atan2(e[6], e[5]))),
	rotateY: (e) => ir(tr(Math.atan2(-e[2], e[0]))),
	rotateZ: ar,
	rotate: ar,
	skewX: (e) => tr(Math.atan(e[4])),
	skewY: (e) => tr(Math.atan(e[1])),
	skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function lr(e) {
	return +!!e.includes("scale");
}
function ur(e, t) {
	if (!e || e === "none") return lr(t);
	let n = e.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);
	if (!n) return lr(t);
	let r = (n[1] ? cr : rr)[t], i = n[2].split(",").map((e) => parseFloat(e));
	return typeof r == "function" ? r(i) : i[r];
}
var dr = (e, t) => {
	let { transform: n = "none" } = getComputedStyle(e);
	return ur(n, t);
}, fr = [
	"transformPerspective",
	"x",
	"y",
	"z",
	"translateX",
	"translateY",
	"translateZ",
	"scale",
	"scaleX",
	"scaleY",
	"scaleZ",
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skew",
	"skewX",
	"skewY"
], pr = /* @__PURE__ */ new Set([...fr, "pathRotation"]), mr = (e) => e === Oe || e === N, hr = /* @__PURE__ */ new Set([
	"x",
	"y",
	"z"
]), gr = /* @__PURE__ */ fr.filter((e) => !hr.has(e));
function _r(e) {
	let t = [];
	return gr.forEach((n) => {
		let r = e.getValue(n);
		if (r !== void 0) {
			let e = r.get(), i = +!!n.startsWith("scale");
			if (e === i) return;
			t.push([n, e]), r.set(i);
		}
	}), t;
}
var vr = /* @__PURE__ */ new Set(["bottom", "right"]);
function yr(e, t, n, r, i, a) {
	let o = parseFloat(e);
	if (!isNaN(o)) return o;
	let { min: s, max: c } = t()[n], l = c - s;
	return a === "border-box" ? l : l - parseFloat(r) - parseFloat(i);
}
var br = ({ transform: e }) => ur(e, "x"), xr = ({ transform: e }) => ur(e, "y"), Sr = {
	width: ({ width: e, paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }, i) => yr(e, i, "x", t, n, r),
	height: ({ height: e, paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }, i) => yr(e, i, "y", t, n, r),
	top: ({ top: e }) => parseFloat(e),
	left: ({ left: e }) => parseFloat(e),
	bottom: ({ top: e }, t) => {
		let { y: n } = t();
		return parseFloat(e) + (n.max - n.min);
	},
	right: ({ left: e }, t) => {
		let { x: n } = t();
		return parseFloat(e) + (n.max - n.min);
	},
	x: br,
	y: xr,
	translateX: br,
	translateY: xr
}, Cr = /* @__PURE__ */ new Set(), wr = !1, Tr = !1, Er = !1;
function Dr() {
	if (Tr) {
		let e = [], t = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Set();
		Cr.forEach((r) => {
			r.needsMeasurement && (e.push(r), t.add(r.element), vr.has(r.name) && n.add(r.element));
		});
		let r = /* @__PURE__ */ new Map();
		n.forEach((e) => {
			let t = _r(e);
			t.length && (r.set(e, t), e.render());
		}), e.forEach((e) => e.measureInitialState()), t.forEach((e) => {
			e.render();
			let t = r.get(e);
			t && t.forEach(([t, n]) => {
				e.getValue(t)?.set(n);
			});
		}), e.forEach((e) => e.measureEndState()), e.forEach((e) => {
			e.suspendedScrollY !== void 0 && window.scrollTo(0, e.suspendedScrollY);
		});
	}
	Tr = !1, wr = !1, Cr.forEach((e) => e.complete(Er)), Cr.clear();
}
function Or() {
	Cr.forEach((e) => {
		e.readKeyframes(), e.needsMeasurement && (Tr = !0);
	});
}
function kr() {
	Er = !0, Or(), Dr(), Er = !1;
}
function Ar(e, t, n) {
	if (typeof e == "string") {
		if (b(e) || S(e)) return parseFloat(e);
		if (!mt.test(e) && mt.test(n)) return $n(t, n);
	}
	return e ?? void 0;
}
var jr = class {
	constructor(e, t, n, r, i, a = !1) {
		this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = i, this.isAsync = a;
	}
	scheduleResolve() {
		this.state = "scheduled", this.isAsync ? (Cr.add(this), wr || (wr = !0, F.read(Or), F.resolveKeyframes(Dr))) : (this.readKeyframes(), this.complete());
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, name: t, element: n, motionValue: r } = this;
		if (e[0] === null) {
			let i = r?.get(), a = e[e.length - 1];
			if (i !== void 0) e[0] = i;
			else if (n && t) {
				let r = Ar(n.readValue(t, a), t, a);
				r !== void 0 && (e[0] = r);
			}
			e[0] === void 0 && (e[0] = a), r && i === void 0 && r.set(e[0]);
		}
		er(e);
	}
	setFinalKeyframe() {}
	measureInitialState() {}
	renderEndStyles() {}
	measureEndState() {}
	complete(e = !1) {
		this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), Cr.delete(this);
	}
	cancel() {
		this.state === "scheduled" && (Cr.delete(this), this.state = "pending");
	}
	resume() {
		this.state === "pending" && this.scheduleResolve();
	}
}, Mr = (e) => e.startsWith("--");
// node_modules/motion-dom/dist/es/render/dom/style-set.mjs
function Nr(e, t, n) {
	Mr(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
// node_modules/motion-dom/dist/es/utils/supports/flags.mjs
var Pr = {};
// node_modules/motion-dom/dist/es/utils/supports/memo.mjs
function Fr(e, t) {
	let n = /* @__PURE__ */ ee(e);
	return () => Pr[t] ?? n();
}
// node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
var Ir = /* @__PURE__ */ Fr(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Lr = /*@__PURE__*/ Fr(() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
}, "linearEasing"), Rr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, zr = {
	linear: "linear",
	ease: "ease",
	easeIn: "ease-in",
	easeOut: "ease-out",
	easeInOut: "ease-in-out",
	circIn: /*@__PURE__*/ Rr([
		0,
		.65,
		.55,
		1
	]),
	circOut: /*@__PURE__*/ Rr([
		.55,
		0,
		1,
		.45
	]),
	backIn: /*@__PURE__*/ Rr([
		.31,
		.01,
		.66,
		-.59
	]),
	backOut: /*@__PURE__*/ Rr([
		.33,
		1.53,
		.69,
		.99
	])
};
// node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
function Br(e, t) {
	if (e) return typeof e == "function" ? Lr() ? Vt(e, t) : "ease-out" : /* @__PURE__ */ ve(e) ? Rr(e) : Array.isArray(e) ? e.map((e) => Br(e, t) || zr.easeOut) : zr[e];
}
// node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
function Vr(e, t, n, { delay: r = 0, duration: i = 300, repeat: a = 0, repeatType: o = "loop", ease: s = "easeOut", times: c } = {}, l = void 0) {
	let u = { [t]: n };
	c && (u.offset = c);
	let d = Br(s, i);
	Array.isArray(d) && (u.easing = d);
	let f = {
		delay: r,
		duration: i,
		easing: Array.isArray(d) ? "linear" : d,
		fill: "both",
		iterations: a + 1,
		direction: o === "reverse" ? "alternate" : "normal"
	};
	return l && (f.pseudoElement = l), e.animate(u, f);
}
// node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
function Hr(e) {
	return typeof e == "function" && "applyToOptions" in e;
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
function Ur({ type: e, ...t }) {
	return Hr(e) && Lr() ? e.applyToOptions(t) : (t.duration ??= 300, t.ease ??= "easeOut", t);
}
// node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
var Wr = class extends Fn {
	constructor(e) {
		if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
		let { element: t, name: n, keyframes: r, pseudoElement: i, allowFlatten: a = !1, finalKeyframe: o, onComplete: s } = e;
		this.isPseudoElement = !!i, this.allowFlatten = a, this.options = e;
		let c = Ur(e);
		this.animation = Vr(t, n, r, c, i), c.autoplay === !1 && this.animation.pause(), this.animation.onfinish = this.onFinish = () => {
			if (this.animation.onfinish = null, this.finishedTime = this.time, !i) {
				let e = Dn(r, this.options, o, this.speed);
				this.updateMotionValue?.(e), Nr(t, n, e), this.animation.cancel();
			}
			s?.(), this.notifyFinished();
		}, Nn(this, e, c);
	}
	play() {
		this.isStopped || (this.manualStartTime = null, this.animation.onfinish = this.onFinish, this.animation.play(), this.state === "finished" && this.updateFinished());
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.isStopped || (this.animation.onfinish = this.onFinish), this.animation.finish?.();
	}
	cancel() {
		this.animation.onfinish = null;
		try {
			this.animation.cancel();
		} catch {}
	}
	stop() {
		this.isStopped || (this.isStopped = !0, this.state !== "idle" && this.finishedTime === null && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel()));
	}
	commitStyles() {
		let e = this.options?.element;
		!this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.();
	}
	get duration() {
		let e = this.animation.effect?.getComputedTiming?.().duration || 0;
		return /* @__PURE__ */ ne(Number(e));
	}
	get iterationDuration() {
		let { delay: e = 0 } = this.options || {};
		return this.duration + /* @__PURE__ */ ne(e);
	}
	get time() {
		return /* @__PURE__ */ ne(Number(this.animation.currentTime) || 0);
	}
	set time(e) {
		let t = this.finishedTime !== null;
		this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ te(e), t && (this.animation.pause(), this.updateFinished());
	}
	get speed() {
		return this.animation.playbackRate;
	}
	set speed(e) {
		e < 0 && (this.finishedTime = null), this.animation.playbackRate = e;
	}
	get state() {
		return this.finishedTime === null ? this.animation.playState : "finished";
	}
	get startTime() {
		return this.manualStartTime ?? Number(this.animation.startTime);
	}
	set startTime(e) {
		this.manualStartTime = this.animation.startTime = e;
	}
	attachTimeline({ timeline: e, onAttach: t, observe: n }) {
		return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = this.onFinish = null, e && Ir() ? (this.animation.timeline = e, t?.(this.animation), C) : n(this);
	}
}, Gr = {
	anticipate: ue,
	backInOut: le,
	circInOut: pe
};
function Kr(e) {
	return e in Gr;
}
function qr(e) {
	typeof e.ease == "string" && Kr(e.ease) && (e.ease = Gr[e.ease]);
}
var Jr = class extends Wr {
	constructor(e) {
		qr(e), kn(e), super(e), e.startTime !== void 0 && e.autoplay !== !1 && (this.startTime = e.startTime), this.options = e;
	}
	elapsed() {
		return this.state === "running" ? (j.now() - this.startTime) * this.speed : this.time * 1e3;
	}
	sample(e) {
		if (!this.sampler) {
			let { motionValue: e, onUpdate: t, onComplete: n, onPlay: r, onStop: i, element: a, ...o } = this.options;
			this.sampler = new Rn({
				...o,
				autoplay: !1
			}), this.sampler.stop();
		}
		return this.sampler.sample(Math.max(0, e)).value;
	}
	liveValue() {
		let { state: e } = this;
		if (e === "running" || e === "paused") return this.sample(this.elapsed());
	}
	updateMotionValue(e) {
		let { motionValue: t, element: n, name: r } = this.options;
		if (!t) return;
		if (e !== void 0) {
			t.set(e);
			return;
		}
		let { speed: i } = this, a = this.elapsed(), o = this.state === "running" && i ? v(0, 10, a) : 0, s = this.sample(a);
		n && r && Nr(n, r, s), t.setWithVelocity(this.sample(a - o * Math.sign(i)), s, o / Math.abs(i || 1));
	}
}, Yr = (e, t) => t !== "zIndex" && !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (mt.test(e) || e === "0") && !e.startsWith("url("));
// node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
function Xr(e) {
	let t = e[0];
	if (e.length === 1) return !0;
	for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function Zr(e, t, n, r) {
	let i = e[0];
	if (i === null) return !1;
	if (t === "display" || t === "visibility") return !0;
	let a = e[e.length - 1], o = Yr(i, t), s = Yr(a, t);
	return !o || !s ? !1 : Xr(e) || (n === "spring" || Hr(n)) && r;
}
// node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
function Qr(e) {
	e.duration = 0, e.type = "keyframes";
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
var $r = /* @__PURE__ */ new Set([
	"opacity",
	"clipPath",
	"filter",
	"transform"
]), ei = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function ti(e) {
	for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && ei.test(e[t])) return !0;
	return !1;
}
// node_modules/motion-dom/dist/es/animation/waapi/utils/needs-mixer.mjs
var ni = ({ mixer: e, keyframes: t }) => e && typeof t[0] != "number" && t.some((n, r) => r && e(t[r - 1], n)), ri = /* @__PURE__ */ new Set([
	"color",
	"backgroundColor",
	"outlineColor",
	"fill",
	"stroke",
	"borderColor",
	"borderTopColor",
	"borderRightColor",
	"borderBottomColor",
	"borderLeftColor"
]), ii = () => !y.useManualTiming && Object.hasOwnProperty.call(Element.prototype, "animate");
function ai(e) {
	let { motionValue: t, name: n, repeatDelay: r, repeatType: i, damping: a, type: o, keyframes: s } = e;
	if (!n || !($r.has(n) || ri.has(n))) return !1;
	let c = t?.owner?.current;
	if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) return !1;
	let { onUpdate: l, transformTemplate: u } = t.owner.getProps();
	return ii() && ($r.has(n) || ri.has(n) && ti(s)) && (n !== "transform" || !u) && !l && !r && i !== "mirror" && a !== 0 && o !== "inertia" && !ni(e);
}
// node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
var oi = (e, t) => t && typeof e == "number" ? t.transform(e) : e, si = {
	x: "translateX",
	y: "translateY",
	z: "translateZ",
	transformPerspective: "perspective"
}, ci = fr.length, li = {}, ui = (e, t, n = oi(t, Gn[e])) => (li[e] || (li[e] = (si[e] || e) + "(")) + n + ")", di = (e, t) => (typeof t == "number" ? t : parseFloat(t)) === +!!e.startsWith("scale");
function fi(e, t, n) {
	let r = "";
	for (let i = 0; i < ci; i++) {
		let a = fr[i], o = e[a];
		if (o === void 0) continue;
		let s = n && (t[a] = oi(o, Kn[a]));
		di(a, o) || (r += ui(a, o, s || void 0) + " ");
	}
	let i = e.pathRotation;
	return i && (r += ui("rotate", i)), r = r.trim(), n ? n(t, r) : r || "none";
}
// node_modules/motion-dom/dist/es/animation/waapi/transforms/groups.mjs
var pi = /* @__PURE__ */ new WeakMap(), mi = 200, hi = .001, gi = .1, _i = .001, vi = 100, yi = 100, bi = /* @__PURE__ */ new Set([
	"linear",
	"easeIn",
	"easeOut",
	"easeInOut"
]), xi = (e) => bi.has(e), Si = /* @__PURE__ */ new WeakMap(), Ci = (e, t) => {
	let n = Si.get(e);
	return n?.[0] !== t && (n = [t, "linear(" + bn(Array(t + 1)).map((t) => Ln(e(t)) + " " + Ln(t * 100) + "%") + ")"], Si.set(e, n)), n[1];
}, wi = (e, t) => Math.min(mi, Math.max(2, Math.ceil((t - e) / 10))), Ti = (e, t) => Math.abs(e - t) <= hi, Ei = (e, t) => e - t, Di = (e, t, n) => bn(Array(n + 1)).map((n) => P(e, t, n)), Oi = (e) => e.motionValue.owner, ki = (e) => pi.get(e), Ai = ({ state: e }) => e === "idle" || e === "finished", ji = (e, t) => e.latestValues ? e.latestValues[t] : e.getValue(t)?.get(), Mi = ({ name: e, motionValue: t }) => e && fr.includes(e) && t?.owner?.current instanceof HTMLElement && ii() && Lr();
function Ni(e) {
	let t = Oi(e), { onUpdate: n, transformTemplate: r } = t.getProps();
	return !e.isHandoff && !n && !e.hasOnUpdate && !r && e.type !== "inertia" && (ji(t, "transform") || "none") === "none" && !ji(t, "pathRotation") && !t.projection?.isProjecting() && !ni(e);
}
var Pi = class {
	constructor(e, t, n, r) {
		this.element = e, this.update = t, this.makeDriver = n, this.animation = r;
	}
	get js() {
		return this.driver ||= this.makeDriver(this.update);
	}
	now() {
		return this.driver || this.makeDriver !== Bt ? this.js.now() : O.isProcessing ? O.timestamp : j.now();
	}
	start(e = !0) {
		let t = ki(this.element);
		!t || t.isJS ? this.js.start(e) : t.schedule(!1, !e);
	}
	stopJS() {
		this.driver?.stop();
	}
	stop() {
		this.stopJS();
		let e = ki(this.element);
		e && !e.isFinishing && e.release(this.animation);
	}
}, Fi, Ii = class extends Rn {
	constructor(e) {
		let t = Oi(e).current, { driver: n = Bt } = e, r, i = Ni(e);
		e.driver = (e) => new Pi(t, e, n, r), super(e), r = this;
		let a = this.driver;
		a && (a.animation = this), this.canAccelerate = i;
		let { stop: o } = this;
		this.stop = () => {
			this.isAccelerated() && this.sync(), o();
		};
	}
	offsets() {
		let { keyframes: e, times: t } = this.options;
		return t || (this.offsetsOf !== e && (this.offsetsOf = e, this.cachedOffsets = bn(e)), this.cachedOffsets);
	}
	get group() {
		return ki(Oi(this.options).current);
	}
	get js() {
		return this.driver?.js;
	}
	stopJS() {
		this.driver?.stopJS();
	}
	get name() {
		return this.options.name;
	}
	timing() {
		let { startTime: e, speed: t, totalDuration: n } = this, { delay: r = 0, repeatType: i } = this.options;
		return this.holdTime === null ? n === Infinity ? [e + r / t, this.resolvedDuration * (i === "loop" ? 1 : 2) / t || 1] : [e + (r + n) / t, 0] : [Infinity, 0];
	}
	isAccelerated() {
		let { group: e, state: t } = this;
		return e?.tracks.has(this) && !e.isJS && this.canAccelerate && (t === "running" || t === "paused");
	}
	liveValue() {
		return this.isAccelerated() ? this.sampleAt(j.now()) : void 0;
	}
	tween() {
		let { keyframes: e, type: t, repeat: n, delay: r = 0 } = this.options, i = -1;
		if (n || t !== Cn || this.holdTime !== null) return;
		for (let t = 1; t < e.length; t++) if (e[t] !== e[t - 1]) {
			if (i >= 0) return;
			i = t - 1;
		}
		let { ease: a } = this.options;
		/* @__PURE__ */ _e(a) && (a = a[i]);
		let o = this.offsets(), s = (e) => this.startTime + (r + o[e] * this.totalDuration) / this.speed;
		if (i >= 0) {
			let e = /* @__PURE__ */ ve(a) ? Rr(a) : xi(a) ? zr[a] : xe(a);
			return [
				s(i),
				s(i + 1),
				typeof e == "string" || Ti(e(0), 0) && Ti(e(1), 1) ? e : void 0
			];
		}
	}
	boundaries(e, t) {
		let { startTime: n, speed: r, resolvedDuration: i, options: a } = this, { delay: o = 0, repeat: s = 0, repeatDelay: c = 0, repeatType: l, type: u } = a, d = (u || Cn) === Cn ? this.offsets() : [0, 1], f = n + o / r, p = [];
		if (this.holdTime !== null || !(i > 0)) return p;
		for (let n = Math.max(0, Math.floor((e - f) * r / i)); n <= s; n++) {
			let a = f + n * i / r;
			if (a > t) break;
			for (let o of d) {
				let s = a + (n % 2 && l && l !== "loop" ? 1 - o : o) * (i - c) / r;
				s > e && s < t && p.push(s);
			}
		}
		return p;
	}
	numberAt(e) {
		return parseFloat(this.sampleAt(e, !0));
	}
	sync() {
		let e = j.now(), t = this.sampleAt(e, !0);
		this.options.motionValue.setWithVelocity(this.holdTime === null ? this.sampleAt(e - 10, !0) : t, t, 10);
	}
	play() {
		this.isStopped || ((this.group || zi(Oi(this.options))).tracks.add(this), super.play());
	}
	pause() {
		super.pause(), this.isAccelerated() && this.group.schedule(!1);
	}
	complete() {
		super.complete();
		let { group: e } = this;
		e && !e.isJS && this.tick(j.now());
	}
	get time() {
		return this.isAccelerated() ? /* @__PURE__ */ ne(v(0, this.totalDuration, this.at(j.now()) - (this.options.delay || 0))) : super.time;
	}
	set time(e) {
		(Fi ??= Object.getOwnPropertyDescriptor(Rn.prototype, "time").set).call(this, e);
	}
	attachTimeline(e) {
		return this.canAccelerate = !1, this.group?.demote(!0), super.attachTimeline(e);
	}
}, Li, Ri = (e) => {
	Li || queueMicrotask(() => {
		let e = Li;
		Li = void 0, e.forEach((e) => e());
	}), (Li ||= []).push(e);
};
function zi(e) {
	let t = e.current, n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), i = {}, a = [], o = /* @__PURE__ */ new Map(), s = [], c = !1, l = !1, u = !1, d = !1, f = -Infinity, p, m = Infinity, h, g = (e) => {
		for (let t of n) if (t.name === e) return !0;
	}, _ = (t, n) => {
		let o = {};
		for (let s of t === void 0 ? fr : a) {
			let a = r.get(s), c = t === void 0 ? ji(e, s) : a ? a.sampleAt(n > t && !a.timing()[1] ? n : t) : i[s];
			c !== void 0 && (o[s] = c);
		}
		return o;
	}, v = (e, t) => {
		let n = "";
		for (let r in e) {
			let i = e[r];
			t && di(r, i) || (n += ui(r, i) + " ");
		}
		return (t ? n.trim() : n) || "none";
	}, y = (e, t) => v(_(e, t)), b = (e = _()) => {
		t.style.transform = v(e, !0);
	}, x = (e) => {
		e.onfinish = e.oncancel = null, e.cancel();
	}, S = (e = !0) => {
		clearTimeout(p), m = Infinity, h = void 0, e && b(), s.forEach(({ animation: e }) => x(e)), s = [];
	}, ee = (e, n) => new Animation(new KeyframeEffect(t, e, n)), C = (e, t, n = Infinity) => {
		let r = {
			animation: e,
			offset: t,
			end: n
		};
		e.startTime = j.now() + t, n < Infinity && (e.onfinish = () => {
			r.isDone = !0, s.some((e) => e.end === Infinity) && (x(e), s = s.filter((e) => e !== r)), D.schedule(!1);
		}), e.oncancel = () => s.includes(r) && D.demote(), s.push(r);
	}, w = (e, t, n) => {
		let r = (t, n) => Math.abs(e(n) - e(t)), i = r(t, n);
		for (; n - t > .01;) {
			let e = (t + n) / 2;
			r(t, e) > r(e, n) ? n = e : t = e;
		}
		return r(t, n) > i / 2 ? [t, n] : [];
	}, E = (e, t, n, r) => {
		let i = wi(t, n);
		if (r.length * 4 > i) return;
		let a;
		for (let r of e) {
			let e = r.numberAt(t), i = (r.numberAt((t + n) / 2) - e) / (r.numberAt(n) - e);
			if (i === i) {
				if (a === void 0) a = i;
				else if (!Ti(i, a)) return;
			}
		}
		let o = Di(t, n, i).concat(r).sort(Ei), s = (e) => /* @__PURE__ */ T(t, n, e), c, l;
		for (let n of e) {
			let e = n.numberAt(t), r = o.map((t) => n.numberAt(t) - e), i = r[r.length - 1], a = r.some((e) => Math.abs(e) * hi > Math.abs(i)) ? 0 : i, s = r.map((e) => a ? e / a : e);
			if (a && !c) c = s, l = (t) => (n.numberAt(t) - e) / a;
			else if (s.some((e, t) => !Ti(e, a && c[t]))) return;
		}
		if (!c || c.every((e, t) => Ti(e, s(o[t])))) return "linear";
		let u = [], d = (e, t = l(e)) => u.push(Ln(t) + " " + Ln(s(e) * 100) + "%");
		return c.forEach((e, t) => {
			t && Math.abs(e - c[t - 1]) > .2 && w(l, o[t - 1], o[t]).forEach((e) => d(e)), d(o[t], e);
		}), "linear(" + u + ")";
	}, te = (e, t, n, r) => {
		let i = [t], a = [], o = n, s = t;
		for (let r of e) {
			let e = r.tween();
			if (e?.[2] !== "linear") {
				let [i, c] = r.timing(), [l, u] = e || [t, c ? n : i];
				o = Math.min(o, l), s = Math.max(s, u), a.push(r);
			}
		}
		o = Math.max(t, o), s = Math.min(n, s);
		let c = (e, t) => a.every((n) => !(Math.abs(n.numberAt((e + t) / 2) - (n.numberAt(e) + n.numberAt(t)) / 2) > (n.name.startsWith("scale") ? _i : gi))), l = (t, n, r) => {
			if (n - t < 1 || c(t, n)) i.push(n);
			else if (r < 4) l(t, (t + n) / 2, r + 1), l((t + n) / 2, n, r + 1);
			else {
				for (let r of e) i.push(...w((e) => r.numberAt(e), t, n));
				i.push(n);
			}
		}, u = s > o ? Di(o, s, Math.ceil((s - o) / 100)) : [];
		u.push(n);
		for (let e of r) u.push(e, Math.min(e + .01, n));
		let d = t;
		for (let e of u.sort(Ei)) e > d && l(d, e, 0), d = e;
		return i.sort(Ei);
	}, ne = (e) => {
		let t;
		for (let n of e) {
			let e = n.tween();
			if (!e || t && (Math.abs(e[0] - t[0]) > 1 || Math.abs(e[1] - t[1]) > 1)) return;
			t = [
				e[0],
				e[1],
				!t || e[2] === t[2] ? e[2] : void 0
			];
		}
		return t;
	}, re = (e, t, n, r, i = { fill: "both" }, a) => {
		let o = r ? [] : e.flatMap((e) => e.boundaries(t, n)), s = r || E(e, t, n, o), c = s ? [t, n] : te(e, t, n, o), l = c.map((e) => y(e, a)), u = { transform: l };
		return s || (u.offset = c.map((e) => /* @__PURE__ */ T(t, n, e))), l.every((e) => e === l[0]) && (b(_(t, a)), u = null), ee(u, {
			...i,
			duration: n - t,
			easing: s || "linear"
		});
	}, ie = (e) => {
		let t = j.now() + e;
		t < m && (clearTimeout(p), m = t, p = setTimeout(() => {
			m = Infinity, D.schedule(!1);
		}, e));
	}, ae = (t) => {
		let c = t, l = 0, u = 0, d = [], f = [], p = /* @__PURE__ */ new Set();
		r.clear(), o = /* @__PURE__ */ new Map();
		for (let e of n) {
			r.set(e.name, e);
			let [n, i] = e.timing(), a = n === Infinity;
			if (o.set(e, [
				e.at(t),
				e.speed,
				a
			]), !a) {
				if (e.speed < 0) return;
				if (i) {
					if (l) {
						let e = (n - u) / i;
						if (Math.abs(i - l) > 1 || Math.abs(e - Math.round(e)) * l > 1) return;
					} else l = i, u = n;
					f.push(e);
				} else p.add(n);
				d.push(e), c = Math.max(c, n);
			}
		}
		i = {}, a = fr.filter((t) => {
			if (r.has(t)) return !0;
			let n = i[t] = ji(e, t);
			return n !== void 0 && !di(t, n);
		}), S(!1);
		let m = !l && ne(d);
		try {
			if (c > t) {
				let e;
				if (m && m[1] > t) {
					let [n, r, i] = m;
					if (n - t > yi) return d.forEach((e) => e.sync()), ie(h = n - t - yi), !0;
					e = typeof i == "string" ? i : i ? Ci(i, wi(n, r)) : E(d, n, r, []), e && C(re(d, n, r, e, {
						fill: "both",
						endDelay: c - r
					}), n - t, c - n);
				}
				e || C(re(d, t, c), 0, c - t), p.forEach((e) => e < c - 1 && C(ee(null, { duration: e - t }), 0, e - t));
			}
			if (l) {
				let e = u + Math.floor((c - u) / l) * l;
				C(re(f, e, e + l, void 0, {
					iterations: Infinity,
					iterationStart: (c - e) / l,
					fill: "forwards"
				}, c), c - t);
			}
		} catch {
			return;
		}
		return s.length || S(), !0;
	}, oe = (e, t) => {
		let r, i = 0;
		for (let t of n) {
			let n = o.get(t);
			if (!n) return !1;
			let [a, c, l] = n, u = t.at(e), d = t.timing()[0] === Infinity;
			if (l) {
				if (d && (u === a || !s.length)) continue;
				return !1;
			}
			let f = (u - a) / c, p = d ? 0 : t.speed / c;
			if (r === void 0) r = f, i = p;
			else if (Math.abs(f - r) > 1 || p !== i) return !1;
		}
		if (r === void 0) return !0;
		if (!s.length) {
			if (h === void 0 || t && i) return !1;
			if (i) {
				let e = (h - r) / i;
				if (e < 1) return !1;
				ie(e);
			}
			return !0;
		}
		for (let { offset: e, end: n, isDone: i } of s) {
			let a = r - e;
			if (n < Infinity && (i ? a < n - 1 : a < 0 && (t || e <= 0) || a >= n)) return !1;
		}
		for (let { animation: t, offset: n, isDone: a } of s) {
			if (a) continue;
			let o = r - n;
			i && t.updatePlaybackRate && t.playState === "running" && Math.abs(Number(t.currentTime) - o) < 20 ? t.playbackRate !== i && t.updatePlaybackRate(i) : i ? (t.playbackRate !== i && (t.playbackRate = i), t.startTime = e - o / i) : (t.startTime = null, t.currentTime = o);
		}
		return !0;
	}, se = () => !n.size && (u = !0, ki(t) === D && pi.delete(t), D.isJS || S(), !0), ce = () => {
		let t = j.now();
		if (D.isJS || (D.isFinishing = !0, n.forEach((n) => {
			let [r, a] = n.timing();
			n.state === "running" && n.speed > 0 && !a && r <= t + 1 && (n.complete(), i[n.name] = ji(e, n.name), o.has(n) || (c = !0));
		}), D.isFinishing = !1), l = !1, u || (n.forEach((e) => Ai(e) && n.delete(e)), se())) return;
		for (let e of n) if (!e.canAccelerate) return D.demote(!0);
		D.isJS && (D.isJS = !1, c = !0, n.forEach((e) => e.stopJS()));
		let r = c, a = d;
		if (c = d = !1, r || !oe(t, a)) {
			if (a) {
				if (t - f < vi) return D.demote();
				f = t;
			}
			if (!ae(t)) return D.demote();
		} else if (h !== void 0 && !a) return;
		n.forEach((e) => e.timing()[0] === Infinity && e.sync());
	}, D = {
		tracks: n,
		isJS: !1,
		isFinishing: !1,
		schedule(e, t) {
			u || (c ||= e, d ||= !!t, l || (l = !0, O.isProcessing ? F.render(ce, !1, !0) : Ri(ce)));
		},
		release(e) {
			Ai(e) && n.delete(e), se() || D.schedule(!0);
		},
		check() {
			if (!D.isJS) {
				for (let t in i) if (ji(e, t) !== i[t] && !g(t)) return D.schedule(!0, !0);
			}
		},
		demote(e) {
			if (!(D.isJS || u)) return n.forEach((t) => {
				t.isAccelerated() && t.sync(), e || (t.canAccelerate = !1);
			}), D.isJS = !0, o = /* @__PURE__ */ new Map(), S(), n.forEach((e) => e.state === "running" && e.js?.start()), !0;
		}
	};
	return pi.set(t, D), D;
}
// node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
var Bi = class extends Fn {
	constructor(e) {
		super(), this.stop = () => {
			this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
		}, this.createdAt = j.now();
		let { keyframes: t, name: n, motionValue: r, element: i } = e, a = e;
		a.autoplay ??= !0, a.delay ??= 0, a.type ??= "keyframes", a.repeat ??= 0, a.repeatDelay ??= 0, a.repeatType ??= "loop";
		let o = i?.KeyframeResolver || jr;
		this.keyframeResolver = new o(t, (e, t, n) => this.onKeyframesResolved(e, t, a, !n), n, r, i), this.keyframeResolver?.scheduleResolve();
	}
	onKeyframesResolved(e, t, n, r) {
		this.keyframeResolver = void 0;
		let { name: i, type: a, velocity: o, delay: s, isHandoff: c, onUpdate: l } = n;
		this.resolvedAt = j.now();
		let u = Zr(e, i, a, o);
		u || ((y.instantAnimations || !s) && l?.(Dn(e, n, t)), e[0] = e[e.length - 1], Qr(n), n.repeat = 0);
		let { onComplete: d } = n;
		n.finalKeyframe = t, n.keyframes = e, n.onComplete = () => {
			d?.(), this.notifyFinished();
		};
		let f = u && !c && ai(n), p = !f && Mi(n);
		r && (f || p || this.resolvedAt !== this.createdAt) && (n.startTime ??= jn(this.createdAt, this.resolvedAt));
		let m;
		if (f) {
			n.element = n.motionValue?.owner?.current;
			try {
				m = new Jr(n);
			} catch {
				m = new Rn(n);
			}
		} else m = p ? new Ii(n) : new Rn(n);
		this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), void 0), this._animation = m;
	}
	get finished() {
		return this._animation ? this._animation.finished : super.finished;
	}
	then(e, t) {
		return this.finished.finally(e).then(() => {});
	}
	liveValue() {
		return this._animation?.liveValue?.();
	}
	get animation() {
		return this._animation || (this.keyframeResolver?.resume(), kr()), this._animation;
	}
	get duration() {
		return this.animation.duration;
	}
	get iterationDuration() {
		return this.animation.iterationDuration;
	}
	get time() {
		return this.animation.time;
	}
	set time(e) {
		this.animation.time = e;
	}
	get speed() {
		return this.animation.speed;
	}
	get state() {
		return this.animation.state;
	}
	set speed(e) {
		this.animation.speed = e;
	}
	get startTime() {
		return this.animation.startTime;
	}
	attachTimeline(e) {
		return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop();
	}
	play() {
		this.animation.play();
	}
	pause() {
		this.animation.pause();
	}
	complete() {
		this.animation.complete();
	}
	cancel() {
		this._animation?.cancel(), this.keyframeResolver?.cancel();
	}
};
// node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
function Vi(e, t, n, r = 0, i = 1) {
	let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t), o = e.size, s = (o - 1) * r;
	return typeof n == "function" ? n(a, o) : i === 1 ? a * r : s - a * r;
}
// node_modules/motion-dom/dist/es/value/index.mjs
var Hi = 30, Ui = (e) => !isNaN(parseFloat(e)), Wi = { current: void 0 }, Gi = class {
	constructor(e, t = {}) {
		this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (e) => {
			let t = j.now();
			if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.dirty(), this.dependents)) for (let e of this.dependents) e.dirty();
		}, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner;
	}
	setCurrent(e) {
		this.current = e, this.updatedAt = j.now(), this.canTrackVelocity === null && e !== void 0 && (this.canTrackVelocity = Ui(this.current));
	}
	setPrevFrameValue(e = this.current) {
		this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt;
	}
	onChange(e) {
		return this.on("change", e);
	}
	on(e, t) {
		var n;
		return e === "change" ? this.onChangeSubscribe(t) : ((n = this.events)[e] || (n[e] = new E())).add(t);
	}
	onChangeSubscribe(e) {
		let { events: t } = this;
		return !t.change && !this.changeSubscriber ? this.changeSubscriber = e : (t.change || (t.change = new E(), t.change.add(this.changeSubscriber), this.changeSubscriber = void 0), t.change.add(e)), () => {
			this.changeSubscriber === e ? this.changeSubscriber = void 0 : t.change?.remove(e), this.stopIfUnobserved();
		};
	}
	stopIfUnobserved() {
		F.read(() => {
			!this.changeSubscriber && !this.events.change?.getSize() && this.stop();
		});
	}
	clearListeners() {
		this.changeSubscriber = void 0;
		for (let e in this.events) this.events[e].clear();
	}
	attach(e, t) {
		this.passiveEffect = e, this.stopPassiveEffect = t;
	}
	set(e) {
		this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e);
	}
	setWithVelocity(e, t, n) {
		this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n;
	}
	jump(e, t = !0) {
		t && (this.updatedAt = j.now(), this.stop()), this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, this.stopPassiveEffect?.();
	}
	dirty() {
		let { current: e, changeSubscriber: t } = this;
		t ? t(e) : this.events.change?.notify(e);
	}
	addDependent(e) {
		(this.dependents ||= /* @__PURE__ */ new Set()).add(e);
	}
	removeDependent(e) {
		this.dependents?.delete(e);
	}
	get() {
		Wi.current?.push(this);
		let e = this.animation?.liveValue?.();
		return e === void 0 ? this.current : e;
	}
	getCurrent() {
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		let e = j.now();
		if (!this.canTrackVelocity || this.prevFrameValue === void 0 || e - this.updatedAt > Hi) return 0;
		let t = Math.min(this.updatedAt - this.prevUpdatedAt, Hi);
		return /* @__PURE__ */ re(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
	}
	start(e) {
		return new Promise((t) => this.run(e, t));
	}
	run(e, t) {
		this.stop(), this.hasAnimated = !0;
		let n = !1, r;
		r = e(() => {
			n = !0, this.events.animationComplete?.notify(), this.animation === r && (this.animation = void 0), t?.();
		}), n || (this.animation = r), this.events.animationStart?.notify();
	}
	stop() {
		this.animation && (this.animation.stop(), this.events.animationCancel?.notify()), this.animation = void 0;
	}
	isAnimating() {
		return !!this.animation;
	}
	destroy() {
		this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect?.();
	}
};
function Ki(e, t) {
	return new Gi(e, t);
}
// node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
function qi(e, t) {
	if (e?.inherit && t) {
		let { inherit: n, ...r } = e;
		return {
			...t,
			...r
		};
	}
	return e;
}
// node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
function Ji(e, t) {
	let n = e?.[t] ?? e?.default ?? e;
	return n === e ? n : qi(n, e);
}
// node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
var Yi = {
	type: "spring",
	stiffness: 500,
	damping: 25,
	restSpeed: 10
}, Xi = (e) => ({
	type: "spring",
	stiffness: 550,
	damping: e === 0 ? 2 * Math.sqrt(550) : 30,
	restSpeed: 10
}), Zi = {
	type: "keyframes",
	duration: .8
}, Qi = {
	type: "keyframes",
	ease: [
		.25,
		.1,
		.35,
		1
	],
	duration: .3
}, $i = (e, { keyframes: t }) => t.length > 2 ? Zi : pr.has(e) ? e.startsWith("scale") ? Xi(t[1]) : Yi : Qi, ea = /* @__PURE__ */ new Set([
	"when",
	"delay",
	"delayChildren",
	"staggerChildren",
	"staggerDirection",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from",
	"elapsed",
	"out",
	"mixer"
]);
function ta(e) {
	for (let t in e) if (!ea.has(t)) return !0;
	return !1;
}
// node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
var na = (e, t, n, r = {}, i, a) => (o) => {
	let s = Ji(r, e) || {}, c = s.delay || r.delay || 0, { elapsed: l = 0 } = r;
	l -= /* @__PURE__ */ te(c);
	let u = {
		keyframes: Array.isArray(n) ? n : [null, n],
		ease: "easeOut",
		velocity: t.getVelocity(),
		...s,
		delay: -l,
		onUpdate: (e) => {
			t.set(e), s.onUpdate && s.onUpdate(e);
		},
		onComplete: () => {
			o(), s.onComplete && s.onComplete();
		},
		name: e,
		motionValue: t,
		element: a ? void 0 : i,
		hasOnUpdate: !!s.onUpdate
	};
	ta(s) || Object.assign(u, $i(e, u)), u.duration &&= /* @__PURE__ */ te(u.duration), u.repeatDelay &&= /* @__PURE__ */ te(u.repeatDelay), u.from !== void 0 && (u.keyframes[0] = u.from);
	let d = !1;
	if ((u.type === !1 || u.duration === 0 && !u.repeatDelay) && (Qr(u), u.delay === 0 && (d = !0)), (y.instantAnimations || y.skipAnimations || i?.shouldSkipAnimations || s.skipAnimations) && (d = !0, Qr(u), u.delay = 0), u.allowFlatten = !s.type && !s.ease, d && !a && t.get() !== void 0) {
		let e = Dn(u.keyframes, s);
		if (e !== void 0) {
			F.update(() => {
				u.onUpdate(e), u.onComplete();
			});
			return;
		}
	}
	return s.isSync ? new Rn(u) : new Bi(u);
}, ra = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function ia(e) {
	let t = ra.exec(e);
	if (!t) return [,];
	let [, n, r, i] = t;
	return [`--${n ?? r}`, i];
}
function aa(e, t, n = 1) {
	let [r, i] = ia(e);
	if (!r) return;
	let a = window.getComputedStyle(t).getPropertyValue(r);
	if (a) {
		let e = a.trim();
		return b(e) ? parseFloat(e) : e;
	}
	return M(i) ? aa(i, t, n + 1) : i;
}
// node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
function oa(e) {
	let t = [{}, {}];
	return e?.values.forEach((e, n) => {
		t[0][n] = e.get(), t[1][n] = e.getVelocity();
	}), t;
}
function L(e, t, n, r) {
	let i = (t) => typeof t == "function" ? t(n === void 0 ? e.custom : n, ...oa(r)) : t;
	return t = i(t), typeof t == "string" && (t = e.variants && e.variants[t]), i(t);
}
// node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
function R(e, t, n) {
	return L(e.getProps(), t, n, e);
}
var sa = (e, t) => t === "exit" ? e.presenceContext?.custom : void 0, ca = /* @__PURE__ */ new Set([
	"width",
	"height",
	"top",
	"left",
	"right",
	"bottom",
	...fr
]), la = (e) => Array.isArray(e);
// node_modules/motion-dom/dist/es/render/utils/setters.mjs
function ua(e, t, n) {
	e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ki(n));
}
function da(e) {
	return la(e) ? e[e.length - 1] || 0 : e;
}
function fa(e, t) {
	let { transitionEnd: n = {}, transition: r = {}, ...i } = R(e, t) || {};
	i = {
		...i,
		...n
	};
	for (let t in i) ua(e, t, da(i[t]));
}
// node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
var pa = (e) => !!(e && e.getVelocity);
// node_modules/motion-dom/dist/es/value/will-change/is.mjs
function ma(e) {
	return !!(pa(e) && e.add);
}
// node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
function ha(e, t) {
	let n = e.getValue("willChange");
	if (ma(n)) return n.add(t);
	if (!n && y.WillChange) {
		let n = new y.WillChange("auto");
		e.addValue("willChange", n), n.add(t);
	}
}
// node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs
var ga = "data-framer-appear-id";
// node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
function _a(e) {
	return e.props[ga];
}
// node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
var va = typeof window < "u";
function ya({ protectedKeys: e, needsAnimating: t }, n) {
	let r = n in e && !t[n];
	return t[n] = !1, r;
}
function ba(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
	let { transition: a, transitionEnd: o, ...s } = t, c = e.getDefaultTransition();
	a = a ? qi(a, c) : c;
	let l = a?.reduceMotion, u = a?.skipAnimations;
	r && (a = r);
	let d = [], f = i && e.animationState?.getState()[i], p = a?.path;
	p && (p.animateValues ? p.animateValues((t) => e.getValue(t, e.latestValues[t] ?? 0), s, a, n, d) : p.animateVisualElement?.(e, s, a, n, d));
	for (let t in s) {
		let r = e.getValue(t, e.latestValues[t] ?? null), i = s[t];
		if (i === void 0 || f && ya(f, t)) continue;
		let o = {
			delay: n,
			...Ji(f?.out[t] || a || {}, t)
		};
		u && (o.skipAnimations = !0);
		let c = r.get();
		if (c !== void 0 && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
			F.update(() => r.set(i));
			continue;
		}
		let p = !1;
		if (va && window.MotionHandoffAnimation) {
			let n = _a(e);
			if (n) {
				let e = window.MotionHandoffAnimation(n, t, F);
				e !== null && (o.startTime = e, p = !0);
			}
		}
		ha(e, t);
		let m = l ?? e.shouldReduceMotion;
		r.run(na(t, r, i, m && ca.has(t) ? { type: !1 } : o, e, p));
		let h = r.animation;
		h && d.push(h);
	}
	if (o) {
		let t = () => F.update(() => {
			o && fa(e, o);
		});
		d.length ? Promise.all(d).then(t) : t();
	}
	return d;
}
// node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
function xa(e, t, n = {}) {
	let r = R(e, t, sa(e, n.type)), i = n.transitionOverride || (r?.transition ?? (e.getDefaultTransition() || {})), a = () => Promise.all(r ? ba(e, r, n) : []), o = (r = 0) => {
		let { variantChildren: a } = e, { delayChildren: o = 0, staggerChildren: s, staggerDirection: c } = i, l = [];
		return a?.forEach((e) => {
			e.notify("AnimationStart", t), l.push(xa(e, t, {
				...n,
				delay: r + (typeof o == "function" ? 0 : o) + Vi(a, e, o, s, c)
			}).then(() => e.notify("AnimationComplete", t)));
		}), Promise.all(l);
	}, { when: s } = i;
	return s ? s === "beforeChildren" ? a().then(() => o()) : o().then(a) : Promise.all([a(), o(n.delay)]);
}
// node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
function Sa(e, t, n = {}) {
	return e.notify("AnimationStart", t), (Array.isArray(t) ? Promise.all(t.map((t) => xa(e, t, n))) : typeof t == "string" ? xa(e, t, n) : Promise.all(ba(e, R(e, t, n.custom), n))).then(() => {
		e.notify("AnimationComplete", t);
	});
}
// node_modules/motion-dom/dist/es/value/types/auto.mjs
var Ca = {
	test: (e) => e === "auto",
	parse: (e) => e
}, wa = (e) => (t) => t.test(e), Ta = [
	Oe,
	N,
	We,
	Ue,
	Ke,
	Ge,
	Ca
], Ea = (e) => Ta.find(wa(e));
// node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
function Da(e) {
	return typeof e == "number" ? e === 0 : e === null || e === "none" || e === "0" || S(e);
}
// node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
var Oa = /* @__PURE__ */ new Set([
	"auto",
	"none",
	"0"
]);
function ka(e, t, n) {
	let r = 0, i;
	for (; r < e.length && !i;) {
		let t = e[r];
		typeof t == "string" && !Oa.has(t) && ot(t) && (i = e[r]), r++;
	}
	if (i && n) for (let r of t) e[r] !== i && (e[r] = $n(n, i));
}
// node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
var Aa = class extends jr {
	constructor(e, t, n, r, i) {
		super(e, t, n, r, i, !0);
	}
	scheduleResolve() {
		if (this.canReadNow() && (this.readKeyframes(), !this.needsMeasurement)) return this.complete();
		super.scheduleResolve();
	}
	canReadNow() {
		let { unresolvedKeyframes: e, element: t, motionValue: n } = this, r = e[0] ?? n?.get();
		if (!t?.current || r === void 0) return !1;
		for (let t = 0; t < e.length; t++) if (De(t ? e[t] : r)) return !1;
		return !0;
	}
	readKeyframes() {
		let { unresolvedKeyframes: e, element: t, name: n } = this;
		if (!t?.current) return;
		super.readKeyframes();
		for (let n = 0; n < e.length; n++) {
			let r = e[n];
			if (typeof r == "string" && (r = r.trim(), M(r))) {
				let i = aa(r, t.current);
				i !== void 0 && (e[n] = i), n === e.length - 1 && (this.finalKeyframe = r);
			}
		}
		if (this.resolveNoneKeyframes(), !ca.has(n) || e.length !== 2) return;
		let [r, i] = e;
		if (typeof r == "number" && typeof i == "number") return;
		let a = Ea(r), o = Ea(i);
		if (De(r) !== De(i) && Sr[n]) this.needsMeasurement = !0;
		else if (a !== o) {
			if (mr(a) && mr(o)) for (let t = 0; t < e.length; t++) {
				let n = e[t];
				typeof n == "string" && (e[t] = parseFloat(n));
			}
			else Sr[n] && (this.needsMeasurement = !0);
		}
	}
	resolveNoneKeyframes() {
		let { unresolvedKeyframes: e, name: t } = this, n = [];
		for (let t = 0; t < e.length; t++) (e[t] === null || Da(e[t])) && n.push(t);
		n.length && ka(e, n, t);
	}
	measure() {
		let { element: e, name: t } = this;
		return Sr[t](window.getComputedStyle(e.current), () => e.measureViewportBox());
	}
	measureInitialState() {
		let { element: e, unresolvedKeyframes: t, name: n } = this;
		if (!e?.current) return;
		n === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), t[0] = this.measuredOrigin;
		let r = t[t.length - 1];
		r !== void 0 && this.motionValue?.jump(r, !1);
	}
	measureEndState() {
		let { element: e, unresolvedKeyframes: t } = this;
		if (!e?.current) return;
		this.motionValue?.jump(this.measuredOrigin, !1);
		let n = t.length - 1, r = t[n];
		t[n] = this.measure(), r !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = r), this.resolveNoneKeyframes();
	}
}, ja = [
	"borderTopLeftRadius",
	"borderTopRightRadius",
	"borderBottomRightRadius",
	"borderBottomLeftRadius"
];
// node_modules/motion-dom/dist/es/utils/is-html-element.mjs
function Ma(e) {
	return x(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
// node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
function Na(e) {
	return x(e) && "ownerSVGElement" in e;
}
// node_modules/motion-dom/dist/es/scope/active.mjs
var Pa = {};
function Fa(e) {
	return Pa.current?.add(e), e;
}
var Ia = (e) => Pa.current ? Pa.current.bind(e) : e;
// node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
function La(e, t, n) {
	if (e == null) return [];
	if (e instanceof EventTarget) return [e];
	if (typeof e == "string") {
		let r = t ? t.current : Pa.current?.root || document, i = n?.[e] ?? r.querySelectorAll(e);
		return i ? Array.from(i) : [];
	}
	return Array.from(e).filter((e) => e != null);
}
// node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
function Ra(e) {
	return e.replace(/([A-Z])/g, (e) => `-${e.toLowerCase()}`);
}
// node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
function za(e, t, n) {
	let { style: r, vars: i, transformOrigin: a } = e, o = !1, s = !1;
	for (let e in t) {
		let n = t[e];
		if (pr.has(e)) o = !0;
		else if (we(e)) i[e] = n;
		else {
			let t = oi(n, Kn[e]);
			e.startsWith("origin") ? (s = !0, a[e] = t) : r[e] = t;
		}
	}
	if (t.transform || (o || n ? r.transform = fi(t, e.transform, n) : r.transform &&= "none"), s) {
		let { originX: e = "50%", originY: t = "50%", originZ: n = 0 } = a;
		r.transformOrigin = `${e} ${t} ${n}`;
	}
}
// node_modules/motion-dom/dist/es/render/svg/utils/path.mjs
var Ba = {
	offset: "stroke-dashoffset",
	array: "stroke-dasharray"
}, Va = {
	offset: "strokeDashoffset",
	array: "strokeDasharray"
};
function Ha(e, t, n = 1, r = 0, i = !0) {
	e.pathLength = 1;
	let a = i ? Ba : Va;
	e[a.offset] = `${-r}`, e[a.array] = `${t} ${n}`;
}
// node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
var Ua = [
	"transform",
	"opacity",
	"clipPath",
	"filter",
	"offsetDistance",
	"offsetPath",
	"offsetRotate",
	"offsetAnchor"
];
function Wa(e, { attrX: t, attrY: n, attrScale: r, pathLength: i, pathSpacing: a = 1, pathOffset: o = 0, ...s }, c, l, u) {
	if (za(e, s, l), c) {
		e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
		return;
	}
	e.attrs = e.style, e.style = {};
	let { attrs: d, style: f } = e;
	for (let e of Ua) d[e] !== void 0 && (f[e] = d[e], delete d[e]);
	(f.transform || d.transformOrigin) && (f.transformOrigin = d.transformOrigin ?? "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = u?.transformBox ?? "fill-box", delete d.transformBox), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), i !== void 0 && Ha(d, i, a, o, !1);
}
// node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
function Ga({ top: e, left: t, right: n, bottom: r }) {
	return {
		x: {
			min: t,
			max: n
		},
		y: {
			min: e,
			max: r
		}
	};
}
function Ka({ x: e, y: t }) {
	return {
		top: t.min,
		right: e.max,
		bottom: t.max,
		left: e.min
	};
}
function qa(e, t) {
	if (!t) return e;
	let n = t({
		x: e.left,
		y: e.top
	}), r = t({
		x: e.right,
		y: e.bottom
	});
	return {
		top: n.y,
		left: n.x,
		bottom: r.y,
		right: r.x
	};
}
// node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
function Ja(e) {
	return e === void 0 || e === 1;
}
function Ya({ scale: e, scaleX: t, scaleY: n }) {
	return !Ja(e) || !Ja(t) || !Ja(n);
}
var Xa = [
	"rotate",
	"rotateX",
	"rotateY",
	"rotateZ",
	"skewX",
	"skewY"
];
function Za(e) {
	return Ya(e) || $a(e) || Qa(e);
}
function Qa(e) {
	return e.z || e.rotate || e.rotateX || e.rotateY || e.rotateZ || e.skewX || e.skewY;
}
function $a(e) {
	return eo(e.x) || eo(e.y);
}
function eo(e) {
	return e && e !== "0%";
}
// node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
function to(e, t, n) {
	return n + t * (e - n);
}
function no(e, t, n, r, i) {
	return i !== void 0 && (e = to(e, i, r)), to(e, n, r) + t;
}
function ro(e, t = 0, n = 1, r, i) {
	e.min = no(e.min, t, n, r, i), e.max = no(e.max, t, n, r, i);
}
function io(e, { x: t, y: n }) {
	ro(e.x, t.translate, t.scale, t.originPoint), ro(e.y, n.translate, n.scale, n.originPoint);
}
var ao = .999999999999, oo = 1.0000000000001;
function so(e, t, n, r = !1) {
	let i = n.length;
	if (!i) return;
	t.x = t.y = 1;
	let a, o;
	for (let s = 0; s < i; s++) a = n[s], o = a.projectionDelta, a.options.visualElement?.props.style?.display !== "contents" && (r === !0 && a.options.layoutScroll && a.scroll && a !== a.root && (co(e.x, -a.scroll.offset.x), co(e.y, -a.scroll.offset.y)), o && (t.x *= o.x.scale, t.y *= o.y.scale, io(e, o)), r && (r.path?.[s] || r) !== a && Za(a.latestValues) && fo(e, a.latestValues, a.layout?.layoutBox));
	t.x < oo && t.x > ao && (t.x = 1), t.y < oo && t.y > ao && (t.y = 1);
}
function co(e, t) {
	e.min += t, e.max += t;
}
function lo(e, t, n, r, i = .5) {
	ro(e, t, n, P(e.min, e.max, i), r);
}
function uo(e, t) {
	return typeof e == "string" ? parseFloat(e) / 100 * (t.max - t.min) : e;
}
function fo(e, t, n) {
	let r = n ?? e;
	lo(e.x, uo(t.x, r.x), t.scaleX, t.scale, t.originX), lo(e.y, uo(t.y, r.y), t.scaleY, t.scale, t.originY);
}
// node_modules/motion-dom/dist/es/projection/utils/measure.mjs
function po(e, t) {
	return Ga(qa(e.getBoundingClientRect(), t));
}
function mo(e, t, n) {
	let r = po(e, n), { scroll: i } = t;
	return i && (co(r.x, i.offset.x), co(r.y, i.offset.y)), r;
}
var ho = () => ({
	x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
	y: document.documentElement.scrollTop || document.body?.scrollTop || 0
}), { schedule: go, cancel: _o } = /* @__PURE__ */ Lt(queueMicrotask, !1);
// node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
function vo(e, t, n) {
	let r = pa(e) ? e : Ki(e);
	return r.run(na("", r, t, n)), r.animation;
}
// node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs
var yo = {}, bo = {
	value: null,
	addProjectionMetrics: null,
	countProjection: void 0
};
// node_modules/motion-dom/dist/es/utils/delay.mjs
function xo(e, t) {
	let n = j.now();
	e = Ia(e);
	let r = ({ timestamp: i }) => {
		let a = i - n;
		a >= t && (Rt(r), e(a - t));
	};
	return F.setup(r, !0), Fa(() => Rt(r));
}
// node_modules/motion-dom/dist/es/utils/is-ref-object.mjs
function So(e) {
	return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
// node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
function Co(e) {
	return Na(e) && e.tagName === "svg";
}
// node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
function wo(e) {
	return pa(e) ? e.get() : e;
}
// node_modules/motion-dom/dist/es/value/utils/as-number.mjs
var To = (e) => typeof e == "number" ? e : parseFloat(e), Eo = ja.length, Do = (e) => typeof e == "number" || N.test(e);
function Oo(e, t, n, r, i, a) {
	i ? (e.opacity = P(0, n.opacity ?? 1, Ao(r)), e.opacityExit = P(t.opacity ?? 1, 0, jo(r))) : a && (e.opacity = P(t.opacity ?? 1, n.opacity ?? 1, r));
	for (let i = 0; i < Eo; i++) {
		let a = ja[i], o = ko(t, a), s = ko(n, a);
		(o !== void 0 || s !== void 0) && (o ||= 0, s ||= 0, o === 0 || s === 0 || Do(o) === Do(s) ? (e[a] = Math.max(P(To(o), To(s), r), 0), (We.test(s) || We.test(o)) && (e[a] += "%")) : e[a] = s);
	}
	for (let i = 0; i < Xa.length; i++) {
		let a = Xa[i];
		(t[a] || n[a]) && (e[a] = P(t[a] || 0, n[a] || 0, r));
	}
}
function ko(e, t) {
	return e[t] === void 0 ? e.borderRadius : e[t];
}
var Ao = /*@__PURE__*/ Mo(0, .5, fe), jo = /*@__PURE__*/ Mo(.5, .95, C);
function Mo(e, t, n) {
	return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ T(e, t, r));
}
// node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
function No(e, t) {
	e.min = t.min, e.max = t.max;
}
function z(e, t) {
	No(e.x, t.x), No(e.y, t.y);
}
function Po(e, t) {
	e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
// node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
var Fo = .9999, Io = 1.0001, Lo = -.01, Ro = .01;
function B(e) {
	return e.max - e.min;
}
function zo(e, t, n) {
	return Math.abs(e - t) <= n;
}
function Bo(e, t, n, r = .5) {
	e.origin = r, e.originPoint = P(t.min, t.max, e.origin), e.scale = B(n) / B(t), e.translate = P(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Fo && e.scale <= Io || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Lo && e.translate <= Ro || isNaN(e.translate)) && (e.translate = 0);
}
function Vo(e, t, n, r) {
	Bo(e.x, t.x, n.x, r?.originX), Bo(e.y, t.y, n.y, r?.originY);
}
function Ho(e, t, n, r = 0) {
	e.min = (r ? P(n.min, n.max, r) : n.min) + t.min, e.max = e.min + B(t);
}
function V(e, t, n, r) {
	Ho(e.x, t.x, n.x, r?.x), Ho(e.y, t.y, n.y, r?.y);
}
function H(e, t, n, r = 0) {
	let i = r ? P(n.min, n.max, r) : n.min;
	e.min = t.min - i, e.max = e.min + B(t);
}
function Uo(e, t, n, r) {
	H(e.x, t.x, n.x, r?.x), H(e.y, t.y, n.y, r?.y);
}
// node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
function Wo(e, t, n, r, i) {
	return e -= t, e = to(e, 1 / n, r), i !== void 0 && (e = to(e, 1 / i, r)), e;
}
function Go(e, t = 0, n = 1, r = .5, i, a = e, o = e) {
	if (We.test(t) && (t = parseFloat(t), t = P(o.min, o.max, t / 100) - o.min), typeof t != "number") return;
	let s = P(a.min, a.max, r);
	e === a && (s -= t), e.min = Wo(e.min, t, n, s, i), e.max = Wo(e.max, t, n, s, i);
}
function Ko(e, t, [n, r, i], a, o) {
	Go(e, t[n], t[r], t[i], t.scale, a, o);
}
var qo = [
	"x",
	"scaleX",
	"originX"
], Jo = [
	"y",
	"scaleY",
	"originY"
];
function Yo(e, t, n, r) {
	Ko(e.x, t, qo, n?.x, r?.x), Ko(e.y, t, Jo, n?.y, r?.y);
}
// node_modules/motion-dom/dist/es/projection/geometry/round.mjs
var Xo = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Zo = Xo("applewebkit/") && !Xo("chrome/") ? Math.round : C;
function Qo(e) {
	e.min = Zo(e.min), e.max = Zo(e.max);
}
function $o(e) {
	Qo(e.x), Qo(e.y);
}
// node_modules/motion-dom/dist/es/projection/geometry/models.mjs
var es = () => ({
	translate: 0,
	scale: 1,
	origin: 0,
	originPoint: 0
}), ts = () => ({
	x: es(),
	y: es()
}), ns = () => ({
	min: 0,
	max: 0
}), rs = () => ({
	x: ns(),
	y: ns()
});
// node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
function is(e) {
	return e.translate === 0 && e.scale === 1;
}
function as(e) {
	return is(e.x) && is(e.y);
}
function os(e, t) {
	return e.min === t.min && e.max === t.max;
}
function ss(e, t) {
	return os(e.x, t.x) && os(e.y, t.y);
}
function cs(e, t) {
	return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function ls(e, t) {
	return cs(e.x, t.x) && cs(e.y, t.y);
}
function us(e) {
	return B(e.x) / B(e.y);
}
function ds(e, t) {
	return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
// node_modules/motion-dom/dist/es/projection/shared/stack.mjs
var fs = class {
	constructor() {
		this.members = [];
	}
	add(e) {
		g(this.members, e);
		for (let t = this.members.length - 1; t >= 0; t--) {
			let n = this.members[t];
			if (n === e || n === this.lead || n === this.prevLead) continue;
			let r = n.instance;
			r && r.isConnected !== !1 || n.snapshot || (_(this.members, n), n.unmount());
		}
		e.scheduleRender();
	}
	remove(e) {
		if (_(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
			let e = this.members[this.members.length - 1];
			e && this.promote(e);
		}
	}
	relegate(e) {
		for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
			let e = this.members[t];
			if (e.isPresent !== !1 && e.instance?.isConnected !== !1) return this.promote(e), !0;
		}
		return !1;
	}
	promote(e, t) {
		let n = this.lead;
		if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
			n.updateSnapshot(), e.scheduleRender();
			let { layoutDependency: r } = n.options, { layoutDependency: i } = e.options;
			(r === void 0 || r !== i) && (e.resumeFrom = n, t && (n.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root?.isUpdating && (e.isLayoutDirty = !0)), e.options.crossfade === !1 && n.hide();
		}
	}
	exitAnimationComplete() {
		this.members.forEach((e) => {
			e.options.onExitComplete?.(), e.resumingFrom?.options.onExitComplete?.();
		});
	}
	scheduleRender() {
		this.members.forEach((e) => e.instance && e.scheduleRender(!1));
	}
	removeLeadSnapshot() {
		this.lead?.snapshot && (this.lead.snapshot = void 0);
	}
};
// node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
function ps(e, t) {
	return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var ms = { correct: (e, t) => {
	if (!t.target) return e;
	if (typeof e == "string") {
		if (N.test(e)) e = parseFloat(e);
		else return e;
	}
	return `${ps(e, t.target.x)}% ${ps(e, t.target.y)}%`;
} }, hs = {
	borderRadius: /* @__PURE__ */ Object.assign({}, ms, { applyTo: /* @__PURE__ */ ja.slice() }),
	borderTopLeftRadius: ms,
	borderTopRightRadius: ms,
	borderBottomLeftRadius: ms,
	borderBottomRightRadius: ms,
	boxShadow: { correct: (e, { treeScale: t, projectionDelta: n }) => {
		let r = e, i = mt.parse(e);
		if (i.length > 5) return r;
		let a = mt.createTransformer(e), o = typeof i[0] == "number" ? 0 : 1, s = n.x.scale * t.x, c = n.y.scale * t.y;
		i[0 + o] /= s, i[1 + o] /= c;
		let l = P(s, c, .5);
		return typeof i[2 + o] == "number" && (i[2 + o] /= l), typeof i[3 + o] == "number" && (i[3 + o] /= l), a(i);
	} }
};
// node_modules/motion-dom/dist/es/projection/styles/transform.mjs
function gs(e, t, n) {
	let r = "", i = e.x.translate / t.x, a = e.y.translate / t.y, o = n?.z || 0;
	(i || a || o) && (r = `translate3d(${i}px, ${a}px, ${o}px) `);
	let s = "";
	if (n) {
		let { transformPerspective: e } = n;
		e && (r = `perspective(${e}px) ${r}`);
		for (let e = 0; e < Xa.length; e++) {
			let t = Xa[e], r = n[t];
			r && (s += `${t}(${r}deg) `), !e && n.pathRotation && (s += `rotate(${n.pathRotation}deg) `);
		}
	}
	if (s) {
		(t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), r += s;
		let n = e.x.scale * t.x, i = e.y.scale * t.y;
		(n !== 1 || i !== 1) && (r += `scale(${n}, ${i})`);
	} else e.x.scale !== 1 || e.y.scale !== 1 ? r += `scale(${e.x.scale}, ${e.y.scale})` : r || t.x === 1 && t.y === 1 || (r = "scale(1, 1)");
	return r || "none";
}
// node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
function _s(e) {
	return [e("x"), e("y")];
}
// node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
var vs = (e, t) => e.depth - t.depth, ys = class {
	constructor() {
		this.children = [], this.isDirty = !1;
	}
	add(e) {
		g(this.children, e), this.isDirty = !0;
	}
	remove(e) {
		_(this.children, e), this.isDirty = !0;
	}
	forEach(e) {
		this.isDirty && this.children.sort(vs), this.isDirty = !1, this.children.forEach(e);
	}
}, bs = {
	hasAnimatedSinceResize: !0,
	hasEverUpdated: !1
}, xs = [
	"z",
	"skew",
	"skewZ"
], Ss = 1e3, Cs = 0;
function ws(e, t, n, r) {
	let { latestValues: i } = t;
	i[e] && (n[e] = i[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
var Ts = (e) => e.instance && pi.get(e.instance)?.demote() && e.resetSkewAndRotation();
function Es(e) {
	if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
	let { visualElement: t } = e.options;
	if (!t) return;
	let n = _a(t);
	if (window.MotionHasOptimisedAnimation(n, "transform")) {
		let { layout: t, layoutId: r } = e.options;
		window.MotionCancelOptimisedAnimation(n, "transform", F, !(t || r));
	}
	let { parent: r } = e;
	r && !r.hasCheckedOptimisedAppear && Es(r);
}
function Ds(e) {
	if (e) return e.options.allowProjection === !1 ? Ds(e.parent) : e.projection;
}
function Os({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i }) {
	return Object.assign(yo, {
		...hs,
		...yo
	}), class {
		static create(e, t, n) {
			let { layoutId: r, layout: i, drag: a, dragConstraints: o, layoutScroll: s, layoutRoot: c, layoutAnchor: l, layoutCrossfade: u } = t, d = e.projection = new this(e.latestValues, t["data-framer-portal-id"] ? void 0 : Ds(e.parent));
			d.setOptions({
				layoutId: r,
				layout: i,
				alwaysMeasureLayout: !!a || o && So(o),
				visualElement: e,
				animationType: typeof i == "string" ? i : "both",
				initialPromotionConfig: n,
				crossfade: u,
				layoutScroll: s,
				layoutRoot: c,
				layoutAnchor: l
			});
			let f = d.getStack()?.lead;
			f && !d.root.isUpdateBlocked() && (f.willUpdate(), f.scheduleCheckAfterUnmount());
		}
		constructor(e = {}, n = t?.()) {
			this.id = Cs++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
				x: 1,
				y: 1
			}, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
				this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
			}, this.updateProjection = () => {
				this.projectionUpdateScheduled = !1, this.nodes.forEach(js), this.nodes.forEach(Hs), this.nodes.forEach(Us), this.nodes.forEach(Ms), bo.countProjection?.();
			}, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = e, this.root = n ? n.root || n : this, this.path = n ? [...n.path, n] : [], this.parent = n, this.depth = n ? n.depth + 1 : 0;
			for (let e = 0; e < this.path.length; e++) this.path[e].shouldResetTransform = !0;
			this.root === this && (this.nodes = new ys());
		}
		addEventListener(e, t) {
			return this.eventHandlers.has(e) || this.eventHandlers.set(e, new E()), this.eventHandlers.get(e).add(t);
		}
		notifyListeners(e, ...t) {
			this.eventHandlers.get(e)?.notify(...t);
		}
		hasListeners(e) {
			return this.eventHandlers.has(e);
		}
		mount(t) {
			if (this.instance) return;
			this.isSVG = Na(t) && !Co(t), this.instance = t;
			let { layoutId: n, layout: r, visualElement: i } = this.options;
			if (i && !i.current && i.mount(t), this.root.nodes.add(this), this.parent?.children.add(this), this.root.hasTreeAnimated && (r || n) && (this.isLayoutDirty = !0), e) {
				let n, r = 0, i = () => this.root.updateBlockedByResize = !1;
				F.read(() => {
					r = window.innerWidth;
				}), e(t, () => {
					let e = window.innerWidth;
					e !== r && (r = e, this.root.updateBlockedByResize = !0, n?.(), n = xo(i, 250), bs.hasAnimatedSinceResize && (bs.hasAnimatedSinceResize = !1, this.nodes.forEach(Vs)));
				});
			}
			n && this.root.registerSharedNode(n, this), this.addLayoutListener();
		}
		addLayoutListener() {
			let { layoutId: e, layout: t, visualElement: n, animate: r } = this.options;
			this.instance && !this.hasLayoutListener && r !== !1 && n && (e || t) && (this.hasLayoutListener = !0, this.addEventListener("didUpdate", ({ delta: e, hasLayoutChanged: t, hasRelativeLayoutChanged: r, layout: i }) => {
				if (this.isAnimationBlocked) {
					this.target = void 0, this.relativeTarget = void 0;
					return;
				}
				let a = this.options.transition || n.getDefaultTransition() || Ys, { onLayoutAnimationStart: o, onLayoutAnimationComplete: s } = n.getProps(), c = !this.targetLayout || !ls(this.targetLayout, i), l = !t && r;
				if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
					this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
					let t = {
						...Ji(a, "layout"),
						onPlay: o,
						onComplete: s
					};
					(n.shouldReduceMotion || this.options.layoutRoot) && (t.delay = 0, t.type = !1), this.startAnimation(t), this.setAnimationOrigin(e, l, t.path);
				} else t || Vs(this), this.isLead() && this.options.onExitComplete?.();
				this.targetLayout = i;
			}));
		}
		unmount() {
			this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), this.getStack()?.remove(this), this.parent?.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), this.hasLayoutListener = !1, Rt(this.updateProjection);
		}
		blockUpdate() {
			this.updateManuallyBlocked = !0;
		}
		unblockUpdate() {
			this.updateManuallyBlocked = !1;
		}
		isUpdateBlocked() {
			return this.updateManuallyBlocked || this.updateBlockedByResize;
		}
		startUpdate() {
			this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes?.forEach(Ws), this.animationId++);
		}
		getTransformTemplate() {
			let { visualElement: e } = this.options;
			return e && e.getProps().transformTemplate;
		}
		willUpdate(e = !0) {
			if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
				this.options.onExitComplete?.();
				return;
			}
			if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Es(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
			Ts(this), this.isLayoutDirty = !0;
			for (let e = 0; e < this.path.length; e++) {
				let t = this.path[e];
				t.shouldResetTransform = !0, Ts(t), (typeof t.latestValues.x == "string" || typeof t.latestValues.y == "string") && (t.isLayoutDirty = !0), t.updateScroll("snapshot"), t.options.layoutRoot && t.willUpdate(!1), t.isAnimationBlocked && (t.dragSnapshot ||= t.measure(), this.dragAncestor = t);
			}
			let { layoutId: t, layout: n } = this.options;
			if (t === void 0 && !n) return;
			let r = this.getTransformTemplate();
			this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate");
		}
		update() {
			if (this.updateScheduled = !1, this.isUpdateBlocked()) {
				let e = this.updateBlockedByResize;
				this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), e && this.nodes.forEach(Fs), this.nodes.forEach(Ps);
				return;
			}
			if (this.animationId <= this.animationCommitId) {
				this.nodes.forEach(Is);
				return;
			}
			this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Rs), this.nodes.forEach(zs), this.nodes.forEach(Bs), this.nodes.forEach(ks), this.nodes.forEach(As)) : this.nodes.forEach(Is), this.clearAllSnapshots();
			let e = j.now();
			O.delta = v(0, 1e3 / 60, e - O.timestamp), O.timestamp = e, O.isProcessing = !0, zt.update.process(O), zt.preRender.process(O), zt.render.process(O), O.isProcessing = !1;
		}
		didUpdate() {
			this.updateScheduled || (this.updateScheduled = !0, go.read(this.scheduleUpdate));
		}
		clearAllSnapshots() {
			this.nodes.forEach(Ns), this.sharedNodes.forEach((e, t) => e.members.length ? e.removeLeadSnapshot() : this.sharedNodes.delete(t));
		}
		scheduleUpdateProjection() {
			this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, F.preRender(this.updateProjection, !1, !0));
		}
		scheduleCheckAfterUnmount() {
			F.postRender(() => {
				this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
			});
		}
		updateSnapshot() {
			!this.snapshot && this.instance && (this.snapshot = this.measure(), this.snapshot && !B(this.snapshot.measuredBox.x) && !B(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
		}
		updateLayout() {
			if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
			if (this.resumeFrom && !this.resumeFrom.instance) for (let e = 0; e < this.path.length; e++) this.path[e].updateScroll();
			let e = this.layout;
			this.layout = this.measure(!1), this.layoutCorrected ||= rs(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
			let { visualElement: t } = this.options;
			t?.notify("LayoutMeasure", this.layout.layoutBox, e?.layoutBox);
		}
		updateScroll(e = "measure") {
			let { scroll: t, instance: i } = this, { animationId: a } = this.root;
			if (this.options.layoutScroll && i && !(t && t.animationId === a && t.phase === e)) {
				let o = r(i);
				this.scroll = {
					animationId: a,
					phase: e,
					isRoot: o,
					offset: n(i),
					wasRoot: t ? t.isRoot : o
				};
			}
		}
		resetTransform() {
			if (!i) return;
			let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
			e && Ts(this);
			let t = this.projectionDelta && !as(this.projectionDelta), n = this.getTransformTemplate(), r = n ? n(this.latestValues, "") : void 0, a = r !== this.prevTransformTemplateValue;
			e && this.instance && (t || Za(this.latestValues) || a) && (i(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender());
		}
		measure(e = !0) {
			let t = this.measurePageBox(), n = this.removeElementScroll(t);
			return e && (n = this.removeTransform(n)), $o(n), {
				animationId: this.root.animationId,
				measuredBox: t,
				layoutBox: n,
				latestValues: {},
				source: this.id
			};
		}
		measurePageBox() {
			let { visualElement: e } = this.options;
			if (!e) return rs();
			let t = e.measureViewportBox();
			if (!(this.scroll?.wasRoot || this.path.some(Qs))) {
				let { scroll: e } = this.root;
				e && (co(t.x, e.offset.x), co(t.y, e.offset.y));
			}
			return t;
		}
		removeElementScroll(e) {
			let t = rs();
			if (z(t, e), this.scroll?.wasRoot) return t;
			for (let n = 0; n < this.path.length; n++) {
				let r = this.path[n], { scroll: i, options: a } = r;
				r !== this.root && i && a.layoutScroll && (i.wasRoot && z(t, e), co(t.x, i.offset.x), co(t.y, i.offset.y));
			}
			return t;
		}
		applyTransform(e, t = !1, n, r, i = 0) {
			let a = n || rs();
			z(a, e);
			for (let e = i; e < this.path.length; e++) {
				let n = this.path[e];
				!t && n.options.layoutScroll && n.scroll && n !== n.root && (co(a.x, -n.scroll.offset.x), co(a.y, -n.scroll.offset.y)), Za(n.latestValues) && fo(a, n.latestValues, n.layout?.layoutBox);
			}
			return !r && Za(this.latestValues) && fo(a, this.latestValues, this.layout?.layoutBox), a;
		}
		removeTransform(e) {
			let t = rs();
			z(t, e);
			for (let e = 0; e < this.path.length; e++) {
				let n = this.path[e];
				if (!Za(n.latestValues)) continue;
				let r;
				n.instance && (Ya(n.latestValues) && n.updateSnapshot(), r = rs(), z(r, n.measurePageBox())), Yo(t, n.latestValues, n.snapshot?.layoutBox, r);
			}
			return Za(this.latestValues) && Yo(t, this.latestValues), t;
		}
		setTargetDelta(e) {
			this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
		}
		setOptions(e) {
			this.options = {
				...this.options,
				...e,
				crossfade: e.crossfade === void 0 || e.crossfade
			}, this.addLayoutListener();
		}
		clearMeasurements() {
			this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
		}
		forceRelativeParentToResolveTarget() {
			this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== O.timestamp && this.relativeParent.resolveTargetDelta(!0);
		}
		resolveTargetDelta(e = !1) {
			let t = this.getLead();
			this.isProjectionDirty ||= t.isProjectionDirty, this.isTransformDirty ||= t.isTransformDirty, this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
			let n = !!this.resumingFrom || this !== t;
			if (!(e || n && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
			let { layout: r, layoutId: i } = this.options;
			if (!this.layout || !(r || i)) return;
			this.resolvedRelativeTargetAt = O.timestamp;
			let a = this.getClosestProjectingParent();
			!this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && a && a.layout ? this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox) : this.removeRelativeTarget()), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = rs(), this.targetWithTransforms = rs()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), V(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target, !0) : z(this.target, this.layout.layoutBox), io(this.target, this.targetDelta)) : z(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && a && (!a.resumingFrom == !this.resumingFrom || a.options.layoutRoot && !a.resumingFrom) && !a.options.layoutScroll && a.target && this.animationProgress !== 1 ? this.createRelativeTarget(a, this.target, a.target) : this.relativeParent = this.relativeTarget = void 0), bo.countProjection?.(1));
		}
		getClosestProjectingParent() {
			if (!(!this.parent || Ya(this.parent.latestValues) || $a(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
		}
		isProjecting() {
			return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
		}
		createRelativeTarget(e, t, n) {
			this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = rs(), this.relativeTargetOrigin = rs(), Uo(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || void 0), z(this.relativeTarget, this.relativeTargetOrigin);
		}
		removeRelativeTarget() {
			this.relativeParent = this.relativeTarget = void 0;
		}
		calcProjection() {
			let e = this.getLead(), t = !!this.resumingFrom || this !== e, n = !0;
			if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (n = !1), t && (this.isSharedProjectionDirty || this.isTransformDirty) && (n = !1), this.resolvedRelativeTargetAt === O.timestamp && (n = !1), n) return;
			let { layout: r, layoutId: i } = this.options;
			if (this.isTreeAnimating = !!(this.parent?.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || i)) return;
			z(this.layoutCorrected, this.layout.layoutBox);
			let a = this.treeScale.x, o = this.treeScale.y;
			so(this.layoutCorrected, this.treeScale, this.path, t && (e.relativeTarget && !e.relativeParent.resumingFrom ? e.relativeParent : !0)), e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (e.target = e.layout.layoutBox, e.targetWithTransforms = rs());
			let { target: s } = e;
			s ? (!this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Po(this.prevProjectionDelta.x, this.projectionDelta.x), Po(this.prevProjectionDelta.y, this.projectionDelta.y)), Vo(this.projectionDelta, this.layoutCorrected, s, this.latestValues), this.treeScale.x === a && this.treeScale.y === o && ds(this.projectionDelta.x, this.prevProjectionDelta.x) && ds(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", s)), bo.countProjection?.(2)) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
		}
		hide() {
			this.isVisible = !1;
		}
		show() {
			this.isVisible = !0;
		}
		scheduleRender(e = !0) {
			this.options.visualElement?.scheduleRender(), e && this.getStack()?.scheduleRender(), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
		}
		createProjectionDeltas() {
			this.prevProjectionDelta = ts(), this.projectionDelta = ts(), this.projectionDeltaWithTransform = ts();
		}
		setAnimationOrigin(e, t = !1, n) {
			let r = this.snapshot, i = r ? r.latestValues : {}, a = { ...this.latestValues }, o = ts();
			this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
			let s = rs(), c = r?.source !== this.layout?.source, l = this.getStack(), u = !l || l.members.length <= 1, d = !(!c || u || this.options.crossfade !== !0 || this.path.some(Js));
			this.animationProgress = 0;
			let f, p = n?.interpolateProjection(e);
			this.mixTargetDelta = (t) => {
				let n = t / 1e3, r = p?.(n);
				Gs(o.x, e.x, n), Gs(o.y, e.y, n), r && (o.x.translate = r.x, o.y.translate = r.y), this.setTargetDelta(o), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Uo(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), qs(this.relativeTarget, this.relativeTargetOrigin, s, n), f && ss(this.relativeTarget, f) && (this.isProjectionDirty = !1), f ||= rs(), z(f, this.relativeTarget)), c && (this.animationValues = a, Oo(a, i, this.latestValues, n, d, u)), r?.rotate !== void 0 && (this.animationValues ||= a, this.animationValues.pathRotation = r.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n;
			}, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
		}
		startAnimation(e) {
			this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation &&= (Rt(this.pendingAnimation), void 0), this.pendingAnimation = F.update(() => {
				bs.hasAnimatedSinceResize = !0, this.motionValue ||= Ki(0), this.motionValue.jump(0, !1), this.currentAnimation = vo(this.motionValue, [0, 1e3], {
					...e,
					velocity: 0,
					isSync: !0,
					onUpdate: (t) => {
						this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t);
					},
					onComplete: () => {
						e.onComplete && e.onComplete(), this.completeAnimation();
					}
				}), Pn(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
			});
		}
		completeAnimation() {
			this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
			let e = this.getStack();
			e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
		}
		finishAnimation() {
			this.currentAnimation && (this.mixTargetDelta?.(Ss), this.currentAnimation.stop()), this.completeAnimation();
		}
		applyTransformsToTarget() {
			let e = this.getLead(), { targetWithTransforms: t, layout: n, latestValues: r } = e, { target: i } = e;
			if (t && i && n) {
				if (this !== e && this.layout && n && Zs(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
					let { layoutBox: e } = this.layout, t = i;
					i = this.target || rs(), Xs(i.x, t.x, e.x), Xs(i.y, t.y, e.y);
				}
				z(t, i), fo(t, r), Vo(this.projectionDeltaWithTransform, this.layoutCorrected, t, r);
			}
		}
		registerSharedNode(e, t) {
			this.sharedNodes.has(e) || this.sharedNodes.set(e, new fs()), this.sharedNodes.get(e).add(t);
			let n = t.options.initialPromotionConfig;
			t.promote({
				transition: n?.transition,
				preserveFollowOpacity: n?.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
			});
		}
		isLead() {
			let e = this.getStack();
			return !e || e.lead === this;
		}
		getLead() {
			let { layoutId: e } = this.options;
			return e && this.getStack()?.lead || this;
		}
		getPrevLead() {
			let { layoutId: e } = this.options;
			return e ? this.getStack()?.prevLead : void 0;
		}
		getStack() {
			let { layoutId: e } = this.options;
			if (e) return this.root.sharedNodes.get(e);
		}
		promote({ needsReset: e, transition: t, preserveFollowOpacity: n } = {}) {
			this.getStack()?.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({ transition: t });
		}
		relegate() {
			return this.getStack()?.relegate(this) || !1;
		}
		resetSkewAndRotation() {
			let { visualElement: e } = this.options;
			if (!e) return;
			let { latestValues: t } = e;
			if (!Qa(t)) return;
			let n = {};
			for (let t = 0; t < xs.length; t++) ws(xs[t], e, n, this.animationValues);
			for (let t = 0; t < Xa.length; t++) ws(Xa[t], e, n, this.animationValues);
			e.render();
			for (let t in n) e.setStaticValue(t, n[t]), this.animationValues && (this.animationValues[t] = n[t]);
			e.scheduleRender();
		}
		applyProjectionStyles(e, t) {
			if (!this.instance || this.isSVG) return;
			let n = this.getLead();
			if (!this.isVisible && n !== this) {
				e.visibility = "hidden";
				return;
			}
			let r = this.getTransformTemplate();
			if (this.needsReset) {
				this.needsReset = !1, e.visibility = "", e.opacity = "", e.pointerEvents = wo(t?.pointerEvents) || "", e.transform = r ? r(this.latestValues, "") : "none";
				return;
			}
			if (!this.projectionDelta || !this.layout || !n.target) {
				(this.options.layoutId || this.needsShow) && (this.needsShow = !1, e.visibility = "", e.opacity = this.latestValues.opacity === void 0 ? 1 : this.latestValues.opacity, e.pointerEvents = wo(t?.pointerEvents) || ""), this.hasProjected && !Za(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1);
				return;
			}
			e.visibility = "";
			let i = n.animationValues || n.latestValues;
			this.applyTransformsToTarget();
			let a = gs(this.projectionDeltaWithTransform, this.treeScale, i);
			r && (a = r(i, a)), e.transform = a;
			let { x: o, y: s } = this.projectionDelta;
			e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`, e.opacity = n.animationValues ? n === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : n === this ? i.opacity === void 0 ? "" : i.opacity : i.opacityExit === void 0 ? 0 : i.opacityExit;
			for (let t in yo) {
				if (i[t] === void 0) continue;
				let { correct: r, applyTo: o, isCSSVariable: s } = yo[t], c = a === "none" ? i[t] : r(i[t], n);
				if (o) {
					let t = o.length;
					for (let n = 0; n < t; n++) e[o[n]] = c;
				} else s ? this.options.visualElement.renderState.vars[t] = c : e[t] = c;
			}
			this.options.layoutId && (e.pointerEvents = n === this ? wo(t?.pointerEvents) || "" : "none");
		}
		clearSnapshot() {
			this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
		}
		resetTree() {
			this.root.nodes.forEach((e) => e.currentAnimation?.stop()), this.root.nodes.forEach(Ps), this.root.sharedNodes.clear();
		}
	};
}
function ks(e) {
	e.updateLayout(), Ls(e);
}
function As(e) {
	let t = e.resumeFrom?.snapshot || e.snapshot;
	if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
		let { layoutBox: n, measuredBox: r } = e.layout, { animationType: i } = e.options, a = t.source !== e.layout.source, o = (r, a) => {
			if (i === "size") _s((e) => {
				let t = B(r[e]);
				r[e].min = a[e].min, r[e].max = r[e].min + t;
			});
			else if (i === "x" || i === "y") {
				let e = i === "x" ? "y" : "x";
				No(r[e], a[e]);
			} else Zs(i, t.layoutBox, n) && _s((t) => {
				let n = B(a[t]);
				r[t].max = r[t].min + n, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[t].max = e.relativeTarget[t].min + n);
			});
		}, s = a ? t.measuredBox : t.layoutBox;
		o(s, n);
		let c = ts();
		Vo(c, n, t.layoutBox);
		let l = ts();
		Vo(l, a ? e.applyTransform(r, !0) : n, s);
		let u = !as(c), d = !1, f = e.getClosestProjectingParent();
		if ((!a || f?.options.layoutRoot && e.resumeFrom?.path.includes(f)) && f && !f.resumeFrom) {
			let { snapshot: r, layout: i } = f;
			if (r && i) {
				let s = e.options.layoutAnchor || void 0, c = rs();
				Uo(c, a ? e.resumeFrom.applyTransform(t.layoutBox, !0, void 0, !0, f.depth + 1) : t.layoutBox, r.layoutBox, s);
				let l = rs();
				Uo(l, n, i.layoutBox, s), a && o(c, l), ls(c, l) || (d = !0), f.options.layoutRoot && (e.relativeTarget = l, e.relativeTargetOrigin = c, e.relativeParent = f);
			}
		}
		e.notifyListeners("didUpdate", {
			layout: n,
			snapshot: t,
			delta: l,
			layoutDelta: c,
			hasLayoutChanged: u,
			hasRelativeLayoutChanged: d
		});
	} else e.isLead() && e.options.onExitComplete?.();
	e.options.transition = void 0;
}
function js(e) {
	bo.countProjection?.(0), e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty ||= !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty), e.isTransformDirty ||= e.parent.isTransformDirty);
}
function Ms(e) {
	e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Ns(e) {
	e.clearSnapshot();
}
function Ps(e) {
	e.clearMeasurements();
}
function Fs(e) {
	e.isLayoutDirty = !0, e.updateLayout();
}
function Is(e) {
	e.isLayoutDirty = !1;
}
function Ls(e) {
	let { snapshot: t, dragAncestor: n } = e, r = n?.isAnimationBlocked && n.layout;
	if (!t || !r || e.resumeFrom || e.isAnimationBlocked) return;
	let i = n.dragSnapshot;
	_s((e) => co(t.layoutBox[e], r.layoutBox[e].min - i.layoutBox[e].min));
}
function Rs(e) {
	e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.dragSnapshot || e.layout, e.isLayoutDirty = !0);
}
function zs(e) {
	e.relativeTarget && e.relativeParent?.isLayoutDirty && (e.currentAnimation ? e.isLayoutDirty = !0 : (e.targetDelta = void 0, e.removeRelativeTarget()));
}
function Bs(e) {
	let { visualElement: t } = e.options;
	t?.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Vs(e) {
	e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Hs(e) {
	e.resolveTargetDelta();
}
function Us(e) {
	e.calcProjection();
}
function Ws(e) {
	e.resetSkewAndRotation();
}
function Gs(e, t, n) {
	e.translate = P(t.translate, 0, n), e.scale = P(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Ks(e, t, n, r) {
	e.min = P(t.min, n.min, r), e.max = P(t.max, n.max, r);
}
function qs(e, t, n, r) {
	Ks(e.x, t.x, n.x, r), Ks(e.y, t.y, n.y, r);
}
function Js(e) {
	return e.animationValues?.opacityExit !== void 0;
}
var Ys = {
	duration: .45,
	ease: [
		.4,
		0,
		.1,
		1
	]
};
function Xs(e, t, n) {
	e.max = B(n) + (e.min = t.min);
}
function Zs(e, t, n) {
	return e === "position" || e === "preserve-aspect" && !zo(us(t), us(n), .2);
}
function Qs(e) {
	return e !== e.root && e.scroll?.wasRoot;
}
// node_modules/motion-dom/dist/es/events/add-dom-event.mjs
function $s(e, t, n, r = { passive: !0 }) {
	return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
}
// node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
var ec = /* @__PURE__ */ Os({
	attachResizeListener: (e, t) => $s(e, "resize", t),
	measureScroll: ho,
	checkIsScrollRoot: () => !0
}), tc = { current: void 0 }, nc = /* @__PURE__ */ Os({
	measureScroll: (e) => ({
		x: e.scrollLeft,
		y: e.scrollTop
	}),
	defaultParent: () => {
		if (!tc.current) {
			let e = new ec({});
			e.mount(window), e.setOptions({ layoutScroll: !0 }), tc.current = e;
		}
		return tc.current;
	},
	resetTransform: (e, t) => {
		e.style.transform = t === void 0 ? "none" : t;
	},
	checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), rc = /* @__PURE__ */ new WeakMap();
// node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
function ic(e) {
	return typeof e == "object" && !!e && typeof e.start == "function";
}
// node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
function ac(e) {
	return typeof e == "string" || Array.isArray(e);
}
// node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
var oc = [
	"animate",
	"whileInView",
	"whileFocus",
	"whileHover",
	"whileTap",
	"whileDrag",
	"exit"
], sc = /* @__PURE__ */ ["initial"].concat(oc);
// node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
function cc(e) {
	if (ic(e.animate)) return !0;
	for (let t = 0; t < sc.length; t++) if (ac(e[sc[t]])) return !0;
	return !1;
}
function lc(e) {
	return !!(cc(e) || e.variants);
}
// node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
function uc(e, t, n) {
	for (let r in t) {
		let i = t[r], a = n[r];
		if (pa(i)) e.addValue(r, i);
		else if (pa(a)) e.addValue(r, Ki(i, { owner: e }));
		else if (a !== i) {
			if (e.hasValue(r)) {
				let t = e.getValue(r);
				t.liveStyle === !0 ? t.jump(i) : t.hasAnimated || t.set(i);
			} else {
				let t = e.getStaticValue(r);
				e.addValue(r, Ki(t === void 0 ? i : t, { owner: e }));
			}
		}
	}
	for (let r in n) t[r] === void 0 && e.removeValue(r);
	return t;
}
// node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
var dc = { current: null }, fc = { current: !1 }, pc = typeof window < "u";
function mc() {
	if (fc.current = !0, pc) {
		if (window.matchMedia) {
			let e = window.matchMedia("(prefers-reduced-motion)"), t = () => dc.current = e.matches;
			e.addEventListener("change", t), t();
		} else dc.current = !1;
	}
}
// node_modules/motion-dom/dist/es/render/VisualElement.mjs
var hc = [
	"AnimationStart",
	"AnimationComplete",
	"Update",
	"BeforeLayoutMeasure",
	"LayoutMeasure",
	"LayoutAnimationStart",
	"LayoutAnimationComplete"
], gc = {};
function _c(e) {
	gc = e;
}
function vc() {
	return gc;
}
var yc = class {
	scrapeMotionValuesFromProps(e, t, n) {
		return {};
	}
	constructor({ parent: e, props: t, presenceContext: n, reducedMotionConfig: r, skipAnimations: i, blockInitialAnimation: a, visualState: o }, s = {}) {
		this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = jr, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
			this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
		}, this.renderScheduledAt = 0, this.scheduleRender = () => {
			let e = j.now();
			this.renderScheduledAt < e && (this.renderScheduledAt = e, F.render(this.render, !1, !0));
		};
		let { latestValues: c, renderState: l } = o;
		this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = t.initial ? { ...c } : {}, this.renderState = l, this.parent = e, this.props = t, this.presenceContext = n, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = r, this.skipAnimationsConfig = i, this.options = s, this.blockInitialAnimation = !!a, this.isControllingVariants = cc(t), this.isVariantNode = lc(t), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(e && e.current);
		let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(t, {}, this);
		for (let e in d) {
			let t = d[e];
			c[e] !== void 0 && pa(t) && t.set(c[e]);
		}
	}
	mount(e) {
		let t = this.presenceContext;
		if (this.hasBeenMounted && t?.isPresent !== !1 && !t?.keepValuesOnRemount) for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
		if (this.current = e, rc.set(e, this), this.projection?.instance || this.projection?.mount(e), this.isVariantNode && !this.isControllingVariants) {
			let e = this;
			do
				e = e.props.inherit !== !1 && e.parent;
			while (e && !e.isVariantNode);
			if (e) {
				let { variantChildren: t } = e;
				t.add(this), this.removeFromVariantTree = () => t.delete(this);
			}
		}
		this.values.forEach((e, t) => this.bindToMotionValue(t, e)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (fc.current || mc(), this.shouldReduceMotion = dc.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
	}
	unmount() {
		this.projection?.unmount(), Rt(this.notifyUpdate), Rt(this.render), this.valueSubscriptions.forEach((e) => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree?.(), this.parent?.removeChild(this);
		for (let e in this.events) this.events[e].clear();
		for (let e in this.features) {
			let t = this.features[e];
			t && (t.unmount(), t.isMounted = !1);
		}
		this.current = null;
	}
	addChild(e) {
		this.children.add(e), (this.enteringChildren ||= /* @__PURE__ */ new Set()).add(e);
	}
	removeChild(e) {
		this.children.delete(e), this.enteringChildren?.delete(e);
	}
	bindToMotionValue(e, t) {
		if (this.valueSubscriptions.get(e)?.(), t.accelerate && $r.has(e) && this.current instanceof HTMLElement) {
			let { factory: n, keyframes: r, times: i, ease: a, duration: o } = t.accelerate, s = new Wr({
				element: this.current,
				name: e,
				keyframes: r,
				times: i,
				ease: a,
				duration: /* @__PURE__ */ te(o)
			}), c = n(s);
			this.valueSubscriptions.set(e, () => {
				c(), s.cancel();
			});
			return;
		}
		let n = pr.has(e);
		n && this.onBindTransform && this.onBindTransform();
		let r = t.on("change", (t) => {
			this.latestValues[e] = t, this.props.onUpdate && F.preRender(this.notifyUpdate), n && (this.projection && (this.projection.isTransformDirty = !0), pi.get(this.current)?.check()), this.scheduleRender();
		}), i;
		typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
			r(), i?.();
		});
	}
	sortNodePosition(e) {
		return !this.current || !e.current || !this.sortInstanceNodePosition || this.type !== e.type ? 0 : this.sortInstanceNodePosition(this.current, e.current);
	}
	updateFeatures() {
		let e = "animation";
		for (e in gc) {
			let t = gc[e];
			if (!t) continue;
			let { isEnabled: n, Feature: r } = t;
			if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
				let t = this.features[e];
				t.isMounted ? t.update() : (t.mount(), t.isMounted = !0);
			}
		}
	}
	triggerBuild() {
		this.build(this.renderState, this.latestValues, this.props);
	}
	measureViewportBox() {
		return this.current ? this.measureInstanceViewportBox(this.current, this.props) : rs();
	}
	getStaticValue(e) {
		return this.latestValues[e];
	}
	setStaticValue(e, t) {
		this.latestValues[e] = t;
	}
	update(e, t) {
		let { transformTemplate: n, onUpdate: r } = this.props;
		(e.transformTemplate || n) && this.scheduleRender(), (e.transformTemplate && !n || e.onUpdate && !r) && pi.get(this.current)?.demote(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
		for (let t = 0; t < hc.length; t++) {
			let n = hc[t];
			this.propEventSubscriptions[n]?.(), delete this.propEventSubscriptions[n];
			let r = e["on" + n];
			r && (this.propEventSubscriptions[n] = this.on(n, r));
		}
		this.prevMotionValues = uc(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue?.();
	}
	getProps() {
		return this.props;
	}
	getVariant(e) {
		return this.props.variants?.[e];
	}
	getDefaultTransition() {
		return this.props.transition;
	}
	getTransformPagePoint() {
		return this.props.transformPagePoint;
	}
	addValue(e, t) {
		let n = this.values.get(e);
		if (t !== n) {
			n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t);
			let r = t.get();
			r !== void 0 && (this.latestValues[e] = r);
		}
	}
	removeValue(e) {
		this.values.delete(e), this.valueSubscriptions.get(e)?.(), this.valueSubscriptions.delete(e), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState);
	}
	hasValue(e) {
		return this.values.has(e);
	}
	getValue(e, t) {
		let n = this.props.values?.[e];
		return n || (n = this.values.get(e), n === void 0 && t !== void 0 && (n = Ki(t ?? this.getDefaultValue?.(e), { owner: this }), this.addValue(e, n)), n);
	}
	readValue(e, t) {
		let n = this.latestValues[e] !== void 0 || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
		return n != null && (typeof n == "string" && (b(n) || S(n)) ? n = parseFloat(n) : typeof n != "number" && !mt.test(n) && mt.test(t) && (n = $n(e, t)), this.setBaseTarget(e, pa(n) ? n.get() : n)), pa(n) ? n.get() : n;
	}
	setBaseTarget(e, t) {
		this.baseTarget[e] = t;
	}
	on(e, t) {
		return (this.events[e] || (this.events[e] = new E())).add(t);
	}
	notify(e, ...t) {
		this.events[e]?.notify(...t);
	}
	scheduleRenderMicrotask() {
		go.render(this.render);
	}
}, bc = class extends yc {
	constructor() {
		super(...arguments), this.KeyframeResolver = Aa;
	}
	sortInstanceNodePosition(e, t) {
		return e.compareDocumentPosition(t) & 2 ? 1 : -1;
	}
	getBaseTargetFromProps(e, t) {
		let n = e.style;
		return n ? n[t] : void 0;
	}
	removeValueFromRenderState(e, { vars: t, style: n }) {
		delete t[e], delete n[e];
	}
	handleChildMotionValue() {
		this.childSubscription && (this.childSubscription(), delete this.childSubscription);
		let { children: e } = this.props;
		pa(e) && (this.childSubscription = e.on("change", (e) => {
			this.current && (this.current.textContent = `${e}`);
		}));
	}
};
// node_modules/motion-dom/dist/es/render/html/utils/render.mjs
function xc(e, { style: t, vars: n }, r, i) {
	let a = e.style, o;
	for (o in t) a[o] = t[o];
	for (o in i?.applyProjectionStyles(a, r), n) a.setProperty(o, n[o]);
}
// node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
function Sc(e, { layout: t, layoutId: n }) {
	return pr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!yo[e] || e === "opacity");
}
// node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
function Cc(e, t, n) {
	let r = e.style, i = t?.style, a = {};
	if (!r) return a;
	for (let t in r) (pa(r[t]) || i && pa(i[t]) || Sc(t, e) || n?.getValue(t)?.liveStyle !== void 0) && (a[t] = r[t]);
	return a;
}
// node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
function wc(e) {
	return window.getComputedStyle(e);
}
var Tc = class extends bc {
	constructor() {
		super(...arguments), this.type = "html", this.renderInstance = xc;
	}
	mount(e) {
		super.mount(e);
	}
	readValueFromInstance(e, t) {
		if (pr.has(t)) return this.projection?.isProjecting ? lr(t) : dr(e, t);
		{
			let n = wc(e), r = (we(t) ? n.getPropertyValue(t) : n[t]) || 0;
			return typeof r == "string" ? r.trim() : r;
		}
	}
	measureInstanceViewportBox(e, { transformPagePoint: t }) {
		return po(e, t);
	}
	build(e, t, n) {
		za(e, t, n.transformTemplate);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return Cc(e, t, n);
	}
}, Ec = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
// node_modules/motion-dom/dist/es/events/event-info.mjs
function Dc(e) {
	return { point: {
		x: e.pageX,
		y: e.pageY
	} };
}
var Oc = (e) => (t) => Ec(t) && e(t, Dc(t));
// node_modules/motion-dom/dist/es/events/add-pointer-event.mjs
function kc(e, t, n, r) {
	return $s(e, t, Oc(n), r);
}
// node_modules/motion-dom/dist/es/resize/handle-element.mjs
var Ac = /* @__PURE__ */ new WeakMap(), jc, Mc = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : Na(r) && "getBBox" in r ? r.getBBox()[t] : r[n], Nc = /*@__PURE__*/ Mc("inline", "width", "offsetWidth"), Pc = /*@__PURE__*/ Mc("block", "height", "offsetHeight");
function Fc({ target: e, borderBoxSize: t }) {
	Ac.get(e)?.forEach((n) => {
		n(e, {
			get width() {
				return Nc(e, t);
			},
			get height() {
				return Pc(e, t);
			}
		});
	});
}
function Ic(e) {
	e.forEach(Fc);
}
function Lc() {
	typeof ResizeObserver < "u" && (jc = new ResizeObserver(Ic));
}
function Rc(e, t) {
	jc || Lc();
	let n = La(e);
	return n.forEach((e) => {
		let n = Ac.get(e);
		n || (n = /* @__PURE__ */ new Set(), Ac.set(e, n)), n.add(t), jc?.observe(e);
	}), () => {
		n.forEach((e) => {
			let n = Ac.get(e);
			n?.delete(t), n?.size || jc?.unobserve(e);
		});
	};
}
// node_modules/motion-dom/dist/es/resize/handle-window.mjs
var zc = /* @__PURE__ */ new Set(), Bc;
function Vc() {
	Bc = () => {
		let e = {
			get width() {
				return window.innerWidth;
			},
			get height() {
				return window.innerHeight;
			}
		};
		zc.forEach((t) => t(e));
	}, window.addEventListener("resize", Bc);
}
function Hc(e) {
	return zc.add(e), Bc || Vc(), () => {
		zc.delete(e), !zc.size && typeof Bc == "function" && (window.removeEventListener("resize", Bc), Bc = void 0);
	};
}
// node_modules/motion-dom/dist/es/resize/index.mjs
function Uc(e, t) {
	return Fa(typeof e == "function" ? Hc(e) : Rc(e, t));
}
// node_modules/motion-dom/dist/es/utils/distance.mjs
var Wc = (e, t) => Math.abs(e - t);
function Gc(e, t) {
	let n = Wc(e.x, t.x), r = Wc(e.y, t.y);
	return Math.sqrt(n ** 2 + r ** 2);
}
// node_modules/motion-dom/dist/es/gestures/pan/PanSession.mjs
var Kc = /*#__PURE__*/ new Set(["auto", "scroll"]), qc = class {
	constructor(e, t, { transformPagePoint: n, contextWindow: r = window, dragSnapToOrigin: i = !1, distanceThreshold: a = 3, element: o, immediate: s } = {}) {
		if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.onElementScroll = (e) => {
			this.handleScroll(e.target);
		}, this.onWindowScroll = () => {
			this.handleScroll(window);
		}, this.updatePoint = () => {
			if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Yc(this.lastRawMoveEventInfo, this.transformPagePoint));
			let e = Zc(this.lastMoveEventInfo, this.history), t = this.startEvent !== null, n = Gc(e.offset, {
				x: 0,
				y: 0
			}) >= this.distanceThreshold;
			if (!t && !n) return;
			let { point: r } = e;
			this.history.push({
				...r,
				timestamp: j.now()
			});
			let { onStart: i, onMove: a } = this.handlers;
			t || (i?.(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), a?.(this.lastMoveEvent, e);
		}, this.handlePointerMove = (e, t) => {
			this.handleScroll(window), this.lastMoveEvent = e, this.lastRawMoveEventInfo = t, this.lastMoveEventInfo = Yc(t, this.transformPagePoint), this.hasPendingMove = !0, F.update(this.updatePoint, !0);
		}, this.handlePointerUp = (e, t) => {
			this.hasPendingMove && this.updatePoint(), this.end();
			let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
			if ((this.dragSnapToOrigin || !this.startEvent) && i?.(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
			let a = Zc(e.type === "pointercancel" ? this.lastMoveEventInfo : Yc(t, this.transformPagePoint), this.history);
			this.startEvent && n?.(e, a), r?.(e, a);
		}, !Ec(e)) return;
		this.dragSnapToOrigin = i, this.handlers = t, this.transformPagePoint = n, this.distanceThreshold = s ? 0 : a, this.contextWindow = r || window;
		let c = Dc(e), l = Yc(c, this.transformPagePoint), { point: u } = l;
		this.history = [{
			...u,
			timestamp: j.now()
		}];
		let { onSessionStart: d } = t;
		d && d(e, Zc(l, this.history));
		let f = {
			passive: !0,
			capture: !0
		};
		this.removeListeners = w(kc(this.contextWindow, "pointermove", this.handlePointerMove, f), kc(this.contextWindow, "pointerup", this.handlePointerUp, f), kc(this.contextWindow, "pointercancel", this.handlePointerUp, f)), o && this.startScrollTracking(o), s && (this.handlePointerMove(e, c), this.updatePoint());
	}
	startScrollTracking(e) {
		let t = e.parentElement;
		for (; t;) {
			let e = getComputedStyle(t);
			(Kc.has(e.overflowX) || Kc.has(e.overflowY)) && this.scrollPositions.set(t, Jc(t)), t = t.parentElement;
		}
		this.scrollPositions.set(window, Jc(window)), this.removeScrollListeners = w($s(window, "scroll", this.onElementScroll, { capture: !0 }), $s(window, "scroll", this.onWindowScroll, {}));
	}
	handleScroll(e) {
		let t = this.scrollPositions.get(e);
		if (!t) return;
		let n = e === window, r = Jc(e), i = {
			x: r.x - t.x,
			y: r.y - t.y
		};
		(i.x !== 0 || i.y !== 0) && (n ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += i.x, this.lastMoveEventInfo.point.y += i.y) : this.history.length > 0 && (this.history[0].x -= i.x, this.history[0].y -= i.y), this.scrollPositions.set(e, r), F.update(this.updatePoint, !0));
	}
	updateHandlers(e) {
		this.handlers = e;
	}
	end() {
		this.removeListeners?.(), this.removeScrollListeners?.(), this.scrollPositions.clear(), Rt(this.updatePoint);
	}
}, Jc = (e) => e === window ? {
	x: window.scrollX,
	y: window.scrollY
} : {
	x: e.scrollLeft,
	y: e.scrollTop
};
function Yc(e, t) {
	return t ? { point: t(e.point) } : e;
}
function Xc(e, t) {
	return {
		x: e.x - t.x,
		y: e.y - t.y
	};
}
function Zc({ point: e }, t) {
	return {
		point: e,
		delta: Xc(e, $c(t)),
		offset: Xc(e, Qc(t)),
		velocity: el(t, .1)
	};
}
function Qc(e) {
	return e[0];
}
function $c(e) {
	return e[e.length - 1];
}
function el(e, t) {
	if (e.length < 2) return {
		x: 0,
		y: 0
	};
	let n = e.length - 1, r = null, i = $c(e);
	for (; n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > /* @__PURE__ */ te(t)));) n--;
	if (!r) return {
		x: 0,
		y: 0
	};
	r === e[0] && e.length > 2 && i.timestamp - r.timestamp > /* @__PURE__ */ te(t) * 2 && (r = e[1]);
	let a = /* @__PURE__ */ ne(i.timestamp - r.timestamp);
	if (a === 0) return {
		x: 0,
		y: 0
	};
	let o = {
		x: (i.x - r.x) / a,
		y: (i.y - r.y) / a
	};
	return o.x === Infinity && (o.x = 0), o.y === Infinity && (o.y = 0), o;
}
// node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
var tl = /* @__PURE__ */ new Set([
	"BUTTON",
	"INPUT",
	"SELECT",
	"TEXTAREA",
	"A"
]);
function nl(e) {
	return tl.has(e.tagName) || e.isContentEditable === !0;
}
var rl = /* @__PURE__ */ new Set([
	"INPUT",
	"SELECT",
	"TEXTAREA"
]);
function il(e) {
	return rl.has(e.tagName) || e.isContentEditable === !0;
}
// node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
var al = {
	x: !1,
	y: !1
};
function ol() {
	return al.x || al.y;
}
// node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
function sl(e) {
	return e === "x" || e === "y" ? al[e] ? null : (al[e] = !0, () => {
		al[e] = !1;
	}) : al.x || al.y ? null : (al.x = al.y = !0, () => {
		al.x = al.y = !1;
	});
}
// node_modules/motion-dom/dist/es/gestures/drag/utils/constraints.mjs
function cl(e, { min: t, max: n }, r) {
	return t !== void 0 && e < t ? e = r ? P(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? P(n, e, r.max) : Math.min(e, n)), e;
}
function ll(e, t, n) {
	return {
		min: t === void 0 ? void 0 : e.min + t,
		max: n === void 0 ? void 0 : e.max + n - (e.max - e.min)
	};
}
function ul(e, { top: t, left: n, bottom: r, right: i }) {
	return {
		x: ll(e.x, n, i),
		y: ll(e.y, t, r)
	};
}
function dl(e, t) {
	let n = t.min - e.min, r = t.max - e.max;
	return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
		min: n,
		max: r
	};
}
function fl(e, t) {
	return {
		x: dl(e.x, t.x),
		y: dl(e.y, t.y)
	};
}
function pl(e, t) {
	let n = .5, r = B(e), i = B(t);
	return i > r ? n = /* @__PURE__ */ T(t.min, t.max - r, e.min) : r > i && (n = /* @__PURE__ */ T(e.min, e.max - i, t.min)), v(0, 1, n);
}
function ml(e, t) {
	let n = {};
	return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var hl = .35;
function gl(e = hl) {
	return e === !1 ? e = 0 : e === !0 && (e = hl), {
		x: _l(e, "left", "right"),
		y: _l(e, "top", "bottom")
	};
}
function _l(e, t, n) {
	return {
		min: vl(e, t),
		max: vl(e, n)
	};
}
function vl(e, t) {
	return typeof e == "number" ? e : e[t] || 0;
}
// node_modules/motion-dom/dist/es/gestures/drag/VisualElementDragControls.mjs
function U(e) {
	let t = "";
	for (let n of e.path) {
		n.scroll = void 0, n.updateScroll();
		let { scroll: r } = n;
		n !== e.root && r && (t += r.offset.x + "," + r.offset.y + ",");
	}
	return t;
}
var yl = /* @__PURE__ */ new WeakMap(), bl = class {
	constructor(e, t = () => e.getProps()) {
		this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
			x: 0,
			y: 0
		}, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = rs(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = e, this.readProps = t;
	}
	start(e, t = {}) {
		if (this.visualElement.presenceContext?.isPresent === !1) return;
		let n = (e) => {
			t.snapToCursor && this.snapToCursor(e), this.stopAnimation();
		}, r = (e, t) => {
			let { drag: n, dragConstraints: r, dragPropagation: i, onDragStart: a } = this.getProps();
			if (n && !i && (this.openDragLock?.(), this.openDragLock = sl(n), !this.openDragLock)) return;
			this.latestPointerEvent = e, this.latestPanInfo = t, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints();
			let { projection: o } = this.visualElement;
			o && (o.isAnimationBlocked = !0, o.target = void 0), _s((e) => {
				let t = this.getAxisMotionValue(e).get() || 0;
				if (M(t) && (t = aa(t, this.visualElement.current) || 0), N.test(t)) t = parseFloat(t);
				else if (We.test(t)) {
					let n = o?.layout?.layoutBox[e];
					n && (t = B(n) * (parseFloat(t) / 100));
				}
				this.originPoint[e] = t;
			}), this.point = typeof r == "function" && r(this), a && F.update(() => a(e, t), !1, !0), ha(this.visualElement, "transform"), this.visualElement.animationState?.setActive("whileDrag", !0);
		}, i = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t;
			let { dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: a } = this.getProps();
			if (!n && !this.openDragLock) return;
			let { offset: o } = t;
			if (r && this.currentDirection === null) {
				if (this.currentDirection = El(o), this.currentDirection === null) return;
				i && i(this.currentDirection);
			}
			this.updateAxis("x", o), this.updateAxis("y", o), this.point && this.point.move(), this.visualElement.render(), a && F.update(() => a(e, t), !1, !0);
		}, a = (e, t) => {
			this.latestPointerEvent = e, this.latestPanInfo = t, this.stop(e, t), this.latestPointerEvent = null, this.latestPanInfo = null;
		}, o = () => {
			let { dragSnapToOrigin: e } = this.getProps();
			(e || this.constraints || this.point) && this.startAnimation({
				x: 0,
				y: 0
			});
		}, { dragSnapToOrigin: s } = this.getProps();
		this.panSession = new qc(e, {
			onSessionStart: n,
			onStart: r,
			onMove: i,
			onSessionEnd: a,
			resumeAnimation: o
		}, {
			...t,
			transformPagePoint: this.visualElement.getTransformPagePoint(),
			dragSnapToOrigin: s,
			contextWindow: this.visualElement.current?.ownerDocument.defaultView,
			element: this.visualElement.current
		});
	}
	stop(e, t, n) {
		let r = e || this.latestPointerEvent, i = t || this.latestPanInfo, a = this.isDragging;
		if (this.cancel(), !a || !i || !r) return;
		let { velocity: o } = i;
		this.startAnimation(o, n);
		let { onDragEnd: s } = this.getProps();
		s && F.postRender(() => s(r, i));
	}
	cancel() {
		this.isDragging = !1;
		let { projection: e, animationState: t } = this.visualElement;
		e && (e.isAnimationBlocked = !1), this.endPanSession(), !this.getProps().dragPropagation && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t?.setActive("whileDrag", !1);
	}
	endPanSession() {
		this.panSession?.end(), this.panSession = void 0;
	}
	updateAxis(e, t) {
		let { drag: n } = this.readProps();
		if (!t || !Tl(e, n, this.currentDirection)) return;
		let r = this.getAxisMotionValue(e), i = this.originPoint[e] + t[e], a = this.constraints && this.constraints[e];
		a && (i = cl(i, a, this.elastic[e])), this.point ? this.point[e] = i : r.set(i);
	}
	resolveConstraints() {
		let { dragConstraints: e, dragElastic: t } = this.getProps(), { projection: n } = this.visualElement, r = n && (n.layout || n.measure(!1)), i = this.constraints;
		xl(e) ? this.constraints && this.scroll === U(n) || (this.constraints = this.resolveRefConstraints()) : this.constraints = e && r && typeof e == "object" ? ul(r.layoutBox, e) : !1, this.elastic = gl(t), i !== this.constraints && !xl(e) && r && this.constraints && !this.hasMutatedConstraints && _s((e) => {
			this.constraints !== !1 && this.getAxisMotionValue(e) && (this.constraints[e] = ml(r.layoutBox[e], this.constraints[e]));
		});
	}
	resolveRefConstraints() {
		let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
		if (!xl(e)) return !1;
		let n = Sl(e), { projection: r } = this.visualElement;
		if (!r || !r.layout) return !1;
		this.scroll = U(r);
		let i = mo(n, r.root, this.visualElement.getTransformPagePoint()), a = fl(r.layout.layoutBox, r.removeElementScroll(i));
		if (t) {
			let e = t(Ka(a));
			this.hasMutatedConstraints = !!e, e && (a = Ga(e));
		}
		return a;
	}
	startAnimation(e, t) {
		let { drag: n, dragMomentum: r, dragElastic: i, dragTransition: a, dragSnapToOrigin: o, onDragTransitionEnd: s } = this.getProps(), c = {
			bounceStiffness: i ? 200 : 1e6,
			bounceDamping: i ? 40 : 1e7,
			timeConstant: 750,
			restDelta: 1,
			restSpeed: 10,
			...a
		}, l = (i) => r && !(this.point && o) && Tl(i, t || n, this.currentDirection) ? e[i] : 0;
		if (this.point && !o) return this.point.release({
			x: l("x"),
			y: l("y")
		}, c).then(s);
		let u = this.constraints || {}, d = _s((e) => {
			if (!Tl(e, t || n, this.currentDirection)) return;
			let r = u[e] || {};
			(o === !0 || o === e) && (r = {
				min: 0,
				max: 0
			});
			let i = {
				type: "inertia",
				velocity: l(e),
				...c,
				...r
			};
			return this.startAxisValueAnimation(e, i);
		});
		return Promise.all(d).then(s);
	}
	startAxisValueAnimation(e, t) {
		let n = this.getAxisMotionValue(e);
		return ha(this.visualElement, e), n.start(na(e, n, 0, t, this.visualElement, !1));
	}
	stopAnimation() {
		_s((e) => this.getAxisMotionValue(e).stop());
	}
	getAxisMotionValue(e) {
		let t = `_drag${e.toUpperCase()}`;
		return this.readProps()[t] || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
	}
	snapToCursor({ clientX: e, clientY: t }) {
		let { drag: n } = this.getProps(), r = {
			x: e,
			y: t
		}, i = this.visualElement.getTransformPagePoint()?.(r) || r, a = this.visualElement.measureViewportBox();
		_s((e) => {
			if (!Tl(e, n, this.currentDirection)) return;
			let t = this.getAxisMotionValue(e), { min: r, max: o } = a[e];
			t.set((t.get() || 0) + i[e] - P(r, o, .5));
		});
	}
	scalePositionWithinConstraints() {
		if (!this.visualElement.current) return;
		let { drag: e, dragConstraints: t } = this.getProps(), { projection: n } = this.visualElement;
		if (!xl(t) || !n || !this.constraints) return;
		this.stopAnimation();
		let r = this.constraints, i = {
			x: 0,
			y: 0
		};
		_s((e) => {
			let t = this.getAxisMotionValue(e).get();
			i[e] = pl({
				min: t,
				max: t
			}, r[e]);
		});
		let { transformTemplate: a } = this.visualElement.getProps();
		this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root?.updateScroll(), n.updateLayout(), this.constraints = !1, this.resolveConstraints(), _s((t) => {
			let n = this.getAxisMotionValue(t);
			if (!Tl(t, e, null) || !n.get()) return;
			let { min: r, max: a } = this.constraints[t];
			n.set(P(r, a, i[t]));
		}), this.visualElement.render();
	}
	addListeners() {
		if (!this.visualElement.current) return;
		yl.set(this.visualElement, this);
		let e = this.visualElement.current, t = kc(e, "pointerdown", (t) => {
			let { drag: n, dragListener: r = !0 } = this.getProps(), i = t.target, a = i !== e && il(i);
			n && r && !a && this.start(t);
		}), n, r = () => {
			let { dragConstraints: t } = this.getProps(), r = xl(t) && Sl(t);
			r && (this.constraints = this.resolveRefConstraints(), n ||= wl(e, r, () => this.scalePositionWithinConstraints()));
		}, { projection: i } = this.visualElement, a = i.addEventListener("measure", r);
		i.layout || (i.root?.updateScroll(), i.updateLayout()), F.read(r);
		let o = $s(window, "resize", () => this.scalePositionWithinConstraints()), s = i.addEventListener("didUpdate", (({ delta: e, hasLayoutChanged: t }) => {
			this.isDragging && t && (_s((t) => {
				if (!Tl(t, this.getProps().drag, this.currentDirection)) return;
				let n = this.getAxisMotionValue(t);
				this.originPoint[t] += e[t].translate, n.set(n.get() + e[t].translate);
			}), this.visualElement.render());
		}));
		return () => {
			o(), t(), a(), s(), n?.();
		};
	}
	getProps() {
		let e = this.readProps(), { dragElastic: t = hl, dragMomentum: n = !0 } = e;
		return {
			...e,
			dragElastic: t,
			dragMomentum: n
		};
	}
};
function xl(e) {
	return !!e && typeof e == "object" && ("current" in e || "nodeType" in e);
}
var Sl = (e) => "current" in e ? e.current : e;
function Cl(e) {
	let t = !0;
	return () => {
		t ? t = !1 : e();
	};
}
function wl(e, t, n) {
	let r = Uc(e, Cl(n)), i = Uc(t, Cl(n));
	return () => {
		r(), i();
	};
}
function Tl(e, t, n) {
	return (t === !0 || t === e) && (n === null || n === e);
}
function El(e, t = 10) {
	let n = null;
	return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
// node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
function Dl(e, t) {
	let n = La(e), r = new AbortController();
	return [
		n,
		{
			passive: !0,
			...t,
			signal: r.signal
		},
		Fa(() => r.abort())
	];
}
// node_modules/motion-dom/dist/es/gestures/hover.mjs
function Ol(e) {
	return !(e.pointerType === "touch" || ol());
}
function kl(e, t, n = {}) {
	t = Ia(t);
	let [r, i, a] = Dl(e, n);
	return r.forEach((e) => {
		let n = !1, r = !1, a, o = () => {
			e.removeEventListener("pointerleave", u);
		}, s = (e) => {
			a &&= (a(e), void 0), o();
		}, c = (e) => {
			n = !1, window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), r && (r = !1, s(e));
		}, l = () => {
			n = !0, window.addEventListener("pointerup", c, i), window.addEventListener("pointercancel", c, i);
		}, u = (e) => {
			e.pointerType !== "touch" && (n ? r = !0 : s(e));
		};
		e.addEventListener("pointerenter", (n) => {
			if (!Ol(n)) return;
			r = !1;
			let o = t(e, n);
			typeof o == "function" && (a = o, e.addEventListener("pointerleave", u, i));
		}, i), e.addEventListener("pointerdown", l, i);
	}), a;
}
// node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
var Al = (e, t) => t ? e === t || Al(e, t.parentElement) : !1, jl = /* @__PURE__ */ new WeakSet();
// node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
function Ml(e) {
	return (t) => {
		t.key === "Enter" && e(t);
	};
}
function Nl(e, t) {
	e.dispatchEvent(new PointerEvent("pointer" + t, {
		isPrimary: !0,
		bubbles: !0
	}));
}
var Pl = (e, t) => {
	let n = !1, r = Ml(() => {
		n || jl.has(e) || (n = !0, Nl(e, "down"));
	}), i = Ml(() => {
		n && (n = !1, Nl(e, "up"));
	});
	e.addEventListener("keydown", r, t), e.addEventListener("keyup", i, t), e.addEventListener("blur", () => {
		e.removeEventListener("keydown", r), e.removeEventListener("keyup", i), n && Nl(e, "cancel");
	}, {
		...t,
		once: !0
	});
};
// node_modules/motion-dom/dist/es/gestures/press/index.mjs
function Fl(e) {
	return Ec(e) && !ol();
}
var Il = /* @__PURE__ */ new WeakSet(), Ll = 100, Rl = 8, zl = (e, t, n) => Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > n, Bl = (e) => e.preventDefault();
function Vl(e, t, n = {}) {
	t = Ia(t);
	let [r, i, a] = Dl(e, n), o = /* @__PURE__ */ new WeakMap(), s = (e) => {
		let r = e.currentTarget;
		if (!Fl(e) || Il.has(e)) return;
		n.stopPropagation && Il.add(e);
		let { count: a = 1, countTimeout: s = .3, hold: c = 0, repeat: l } = n, u = j.now(), d = /* @__PURE__ */ te(c), f = /* @__PURE__ */ te(s), p = o.get(r);
		p?.expire(zl(p.event, e, Ll)) ? p = void 0 : p && (Rt(p.expire), o.delete(r));
		let m = p ? p.count + 1 : 1, h = m >= a, g = h && (c || l), _ = !c, v = 0, y;
		if (jl.add(r), p) y = p.handlers;
		else {
			let n = t(r, e);
			y = typeof n == "function" ? { onComplete: n } : n || {};
		}
		h && _ && y.onActive?.();
		let b = /* @__PURE__ */ te(l), x = d || b, S = u + x, ee = !0, C = () => {
			if (i.signal.aborted) return Rt(C);
			let e = Math.min(1 - (S - j.now()) / x, 1);
			ee && e < 1 && (e = 0), ee = !1, y.onHold?.(e), e < 1 || (_ ? y.onRepeat?.(++v) : (_ = !0, y.onActive?.()), l ? (ee = !0, S += x = b) : Rt(C));
		}, w = {
			...i,
			capture: !0
		}, T = (t, n) => {
			if (window.removeEventListener("pointerup", E, w), window.removeEventListener("pointercancel", ne, w), window.removeEventListener("pointermove", re, w), r.removeEventListener("contextmenu", Bl), Rt(C), jl.delete(r), Ec(t)) {
				if (ol() && (n = !1), n && !h) {
					let n = j.now(), a = (e) => {
						let s = i.signal.aborted;
						if (s || e === !0 || j.now() - n > f) return Rt(a), o.delete(r), s || y.onComplete?.(t, { success: !1 }), !0;
					};
					o.set(r, {
						count: m,
						event: e,
						handlers: y,
						expire: a
					}), F.update(a, !0);
				} else y.onComplete?.(t, { success: n && _ });
			}
		}, E = (e) => {
			T(e, r === window || r === document || n.useGlobalTarget || Al(r, e.target));
		}, ne = (e) => {
			T(e, !1);
		}, re = (t) => {
			Ec(t) && ((l || !_) && zl(e, t, Rl) || a > 1 && ol()) && ne(t);
		};
		window.addEventListener("pointerup", E, w), window.addEventListener("pointercancel", ne, w), (g || a > 1) && window.addEventListener("pointermove", re, w), g && (F.update(C, !0), r.addEventListener("contextmenu", Bl, {
			...i,
			passive: !1
		}));
	};
	return r.forEach((e) => {
		(n.useGlobalTarget ? window : e).addEventListener("pointerdown", s, i), Ma(e) && (e.addEventListener("focus", () => Pl(e, i), i), !nl(e) && !e.hasAttribute("tabindex") && (e.tabIndex = 0));
	}), a;
}
// node_modules/motion-dom/dist/es/render/Feature.mjs
var Hl = class {
	constructor(e) {
		this.isMounted = !1, this.node = e;
	}
	update() {}
}, Ul = /* @__PURE__ */ new Set([
	"baseFrequency",
	"diffuseConstant",
	"kernelMatrix",
	"kernelUnitLength",
	"keySplines",
	"keyTimes",
	"limitingConeAngle",
	"markerHeight",
	"markerWidth",
	"numOctaves",
	"targetX",
	"targetY",
	"surfaceScale",
	"specularConstant",
	"specularExponent",
	"stdDeviation",
	"tableValues",
	"viewBox",
	"gradientTransform",
	"pathLength",
	"startOffset",
	"textLength",
	"lengthAdjust"
]), Wl = (e) => typeof e == "string" && e.toLowerCase() === "svg";
// node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
function Gl(e, t, n, r) {
	xc(e, t, void 0, r);
	for (let n in t.attrs) e.setAttribute(Ul.has(n) ? n : Ra(n), t.attrs[n]);
}
// node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
function Kl(e, t, n) {
	let r = Cc(e, t, n);
	for (let n in e) if (n !== "children" && (pa(e[n]) || pa(t[n]))) {
		let t = fr.indexOf(n) === -1 ? n : "attr" + n.charAt(0).toUpperCase() + n.substring(1);
		r[t] = e[n];
	}
	return r;
}
// node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
var ql = class extends bc {
	constructor() {
		super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = rs;
	}
	getBaseTargetFromProps(e, t) {
		return pr.has(t) ? super.getBaseTargetFromProps(e, t) ?? lr(t) : e[t];
	}
	getDefaultValue(e) {
		return pr.has(e) ? this.latestValues[e] ?? lr(e) : void 0;
	}
	readValueFromInstance(e, t) {
		if (pr.has(t)) {
			let e = Jn(t);
			return e && e.default || 0;
		}
		if (Ua.includes(t)) {
			let n = getComputedStyle(e)[t];
			if (typeof n == "string" && n) return n.trim();
		}
		return t = Ul.has(t) ? t : Ra(t), e.getAttribute(t);
	}
	scrapeMotionValuesFromProps(e, t, n) {
		return Kl(e, t, n);
	}
	build(e, t, n) {
		Wa(e, t, this.isSVGTag, n.transformTemplate, n.style);
	}
	renderInstance(e, t, n, r) {
		Gl(e, t, n, r);
	}
	mount(e) {
		this.isSVGTag = Wl(e.tagName), super.mount(e);
	}
};
// node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
function Jl(e, t) {
	if (!Array.isArray(t)) return !1;
	let n = t.length;
	if (n !== e.length) return !1;
	for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
	return !0;
}
// node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
var Yl = [...oc].reverse(), Xl = (e) => e?.out === !0 ? e : e?.out;
function Zl(e) {
	let t = (t) => Promise.all(t.map(({ animation: t, options: n }) => Sa(e, t, n))), n = $l(), r = !0, i = !1;
	function a(a) {
		let { props: o, parent: s, manuallyAnimateOnMount: c } = e, { initial: l } = o, u = r || i, d = [], f = (t = l) => typeof t != "boolean" && R(e, Array.isArray(t) ? t[0] : t, e.presenceContext?.custom) || void 0, p = /* @__PURE__ */ new Map(), m = {}, h = Infinity, g = e;
		do
			g = g.props.inherit !== !1 && g.parent;
		while (g && !g.isControllingVariants);
		let _ = u && Xl(f(l ?? (g && g.props.initial))?.transition);
		if (Yl.forEach((t, r) => {
			let i = n[t], l = o[t], f = g && g.props[t], v = l === void 0 ? ac(f) || f === !1 ? f : void 0 : l, y = ac(v), b = t === a ? i.isActive : null, x = y && l === void 0 && !(u && c);
			if (i.protectedKeys = { ...m }, !i.isActive && b === null || !v && !i.prevProp || ic(v) || typeof v == "boolean") return;
			if (b === !1 && (h = r), t === "exit" && i.isActive && b !== !0) {
				m = {
					...m,
					...i.prevResolvedValues
				};
				return;
			}
			let S = Ql(i.prevProp, v), ee = S || y && (b && !x || r > h), C = !1, w = Array.isArray(v) ? v : [v], T = {}, E;
			if (b !== !1) for (let n of w) {
				let { transition: r, transitionEnd: i, ...a } = R(e, n, sa(e, t)) || {};
				T = {
					...T,
					...a,
					...i
				}, E = Xl(r) || E;
			}
			let { prevResolvedValues: te } = i;
			for (let t in {
				...te,
				...T
			}) {
				if (t in m) continue;
				let n = T[t], r = te[t], a = Array.isArray(n) && Array.isArray(r) ? !Jl(n, r) || S : n !== r, o;
				if (a && n == null) p.has(t) || p.set(t, i.prevOut);
				else if (a || n !== void 0 && p.has(t)) {
					ee = !0, o = p.get(t) || _, p.delete(t) && (C = !0), i.needsAnimating[t] = !0;
					let n = e.getValue(t);
					n && (n.liveStyle = !1);
				} else i.protectedKeys[t] = !0;
				i.out[t] = o;
			}
			if (i.prevProp = v, i.prevResolvedValues = T, i.prevOut = E, i.isActive && (m = {
				...m,
				...T
			}), ee && (!(x && S) || C)) for (let n of w) {
				let r = { type: t };
				if (typeof n == "string" && u && c && s?.enteringChildren) {
					let t = R(s, n)?.transition?.delayChildren;
					r.delay = Vi(s.enteringChildren, e, t);
				}
				d.push({
					animation: n,
					options: r
				});
			}
		}), p.size) {
			let t = {}, n = f(), r = n?.transition;
			p.forEach((i, a) => {
				i && (r = {
					...r || e.getDefaultTransition(),
					[a]: i
				});
				let s = e.getValue(a);
				s && (s.liveStyle = !0);
				let c = n && !Array.isArray(l) ? n[a] : void 0, u = e.getBaseTargetFromProps(o, a);
				t[a] = (c === void 0 ? u !== void 0 && !pa(u) ? u : e.initialValues[a] === void 0 ? e.baseTarget[a] : void 0 : c) ?? null;
			}), r && (t.transition = r), d.push({ animation: t });
		}
		let v = u && e.blockInitialAnimation || r && !c && (o.initial === !1 || o.initial === o.animate);
		return r = i = !1, !v && d.length ? t(d) : Promise.resolve();
	}
	function o(t, r) {
		if (n[t].isActive === r) return Promise.resolve();
		e.variantChildren?.forEach((e) => e.animationState?.setActive(t, r)), n[t].isActive = r;
		let i = a(t);
		for (let e in n) n[e].protectedKeys = {};
		return i;
	}
	return {
		animateChanges: a,
		setActive: o,
		setAnimateFunction: (n) => {
			t = n(e);
		},
		getState: () => n,
		reset: () => {
			n = $l(), i = !0;
		}
	};
}
function Ql(e, t) {
	return typeof t == "string" ? t !== e : Array.isArray(t) ? !Jl(t, e) : !1;
}
function $l() {
	let e = {};
	for (let t of oc) e[t] = {
		isActive: t === "animate",
		protectedKeys: {},
		needsAnimating: {},
		prevResolvedValues: {},
		out: {}
	};
	return e;
}
// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var eu = /* @__PURE__ */ (0, d.createContext)({
	transformPagePoint: (e) => e,
	isStatic: !1,
	reducedMotion: "never"
});
// node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
function tu(e, t) {
	if (typeof e == "function") return e(t);
	e != null && (e.current = t);
}
function nu(...e) {
	return (t) => {
		let n = !1, r = e.map((e) => {
			let r = tu(e, t);
			return !n && typeof r == "function" && (n = !0), r;
		});
		if (n) return () => {
			for (let t = 0; t < r.length; t++) {
				let n = r[t];
				typeof n == "function" ? n() : tu(e[t], null);
			}
		};
	};
}
function ru(...e) {
	return d.useCallback(nu(...e), e);
}
// node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
var W = r(), iu = (e) => {
	let { width: t, height: n } = e?.getBoundingClientRect() || {};
	return [t / e?.offsetWidth || 1, n / e?.offsetHeight || 1];
}, G = (e) => {
	let { left: t, top: n } = e.getBoundingClientRect(), r = e;
	for (; r = r.parentElement || r.parentNode?.host;) {
		let { scrollLeft: e, scrollTop: i } = r;
		if (e || i) {
			let [a, o] = iu(r);
			t += e * a, n += i * o;
		}
		if (getComputedStyle(r).position === "fixed") break;
	}
	let [i, a] = iu(e.offsetParent);
	return [t / i, n / a];
}, au = class extends d.Component {
	getSnapshotBeforeUpdate(e) {
		let t = this.props.getElement();
		if (Ma(t) && e.isPresent && !this.props.isPresent && this.props.pop !== !1) {
			let e = t.offsetParent, n = Ma(e) && e.offsetWidth || 0, r = Ma(e) && e.offsetHeight || 0, i = getComputedStyle(t), a = this.props.sizeRef.current;
			a.height = parseFloat(i.height), a.width = parseFloat(i.width), a.top = t.offsetTop, a.left = t.offsetLeft, a.right = n - a.width - a.left, a.bottom = r - a.height - a.top, a.direction = i.direction, a.point = G(t);
		}
		return null;
	}
	componentDidUpdate() {}
	render() {
		return this.props.children;
	}
};
function ou({ children: e, isPresent: t, anchorX: n, anchorY: r, root: i, pop: a, popNode: o }) {
	let s = (0, d.useId)(), c = (0, d.useRef)(null), l = (0, d.useRef)({
		width: 0,
		height: 0,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		direction: "ltr"
	}), { nonce: u } = (0, d.useContext)(eu), f = ru(c, a === !1 ? void 0 : e.props?.ref ?? e?.ref), p = () => c.current || o?.current?.current, m = (e) => {
		let { width: t, height: i, top: a, left: o, right: c, bottom: u, direction: d } = l.current, f = d === "rtl", p = n === "left" ? f ? `right:${c}` : `left:${o}` : f ? `left:${o}` : `right:${c}`, m = r === "bottom" ? `bottom:${u}` : `top:${a}`;
		e?.insertRule(`[data-motion-pop-id="${s}"]{position:absolute!important;width:${t}px!important;height:${i}px!important;${p}px!important;${m}px!important}`);
	};
	return (0, d.useInsertionEffect)(() => {
		let { width: e, height: n } = l.current, r = p();
		if (t || a === !1 || !r || !e || !n) return;
		r.dataset.motionPopId = s;
		let o = r.ownerDocument, c = o.createElement("style");
		u && (c.nonce = u);
		let d = i ?? o.head;
		d.appendChild(c), m(c.sheet);
		let f = 0, h = 0;
		return go.setup(() => {
			let [e, t] = G(r);
			f = l.current.point[0] - e, h = l.current.point[1] - t;
		}), go.read(() => {
			let { sheet: e } = c;
			if (!e || !f && !h) return;
			let t = l.current;
			t.left += f, t.right -= f, t.top += h, t.bottom -= h, e.deleteRule(0), m(e);
		}), () => {
			r.removeAttribute("data-motion-pop-id"), d.contains(c) && d.removeChild(c);
		};
	}, [t]), (0, W.jsx)(au, {
		isPresent: t,
		getElement: p,
		sizeRef: l,
		pop: a,
		children: a === !1 ? e : d.cloneElement(e, { ref: f })
	});
}
// node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
var su = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: a, mode: o, anchorX: s, anchorY: c, root: l }) => {
	let u = p(cu), f = (0, d.useId)(), g = (0, d.useRef)(), _ = (0, d.useRef)(n), v = (0, d.useRef)(r);
	m(() => {
		_.current = n, v.current = r;
	});
	let y = !0, b = (0, d.useMemo)(() => (y = !1, {
		id: f,
		initial: t,
		isPresent: n,
		custom: i,
		onExitComplete: (e) => {
			u.set(e, !0);
			for (let e of u.values()) if (!e) return;
			r && r();
		},
		register: (e, t) => (u.set(e, !1), t && t.parent?.presenceContext?.id !== f && (g.current = t), () => {
			u.delete(e), !_.current && !u.size && v.current?.();
		})
	}), [
		n,
		u,
		r
	]);
	return a && y && (b = { ...b }), (0, d.useMemo)(() => {
		u.forEach((e, t) => u.set(t, !1));
	}, [n]), d.useEffect(() => {
		!n && !u.size && r && r();
	}, [n]), e = (0, W.jsx)(ou, {
		pop: o === "popLayout",
		isPresent: n,
		anchorX: s,
		anchorY: c,
		root: l,
		popNode: g,
		children: e
	}), (0, W.jsx)(h.Provider, {
		value: b,
		children: e
	});
};
function cu() {
	return /* @__PURE__ */ new Map();
}
// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function lu(e = !0) {
	let t = (0, d.useContext)(h);
	if (t === null) return [!0, null];
	let { isPresent: n, onExitComplete: r, register: i } = t, a = (0, d.useId)();
	(0, d.useEffect)(() => {
		if (e) return i(a);
	}, [e]);
	let o = (0, d.useCallback)(() => e && r && r(a), [
		a,
		r,
		e
	]);
	return !n && r ? [!1, o] : [!0];
}
// node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
var uu = (e) => e.key || "";
function du(e) {
	let t = [];
	return d.Children.forEach(e, (e) => {
		(0, d.isValidElement)(e) && t.push(e);
	}), t;
}
// node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
var fu = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: i = !0, mode: a = "sync", propagate: o = !1, anchorX: s = "left", anchorY: c = "top", root: l }) => {
	let [u, h] = lu(o), g = (0, d.useMemo)(() => du(e), [e]), _ = o && !u ? [] : g.map(uu), v = (0, d.useRef)(!0), y = p(() => /* @__PURE__ */ new Map()), b = (0, d.useRef)(/* @__PURE__ */ new Set()), [x, S] = (0, d.useState)(g), [ee, C] = (0, d.useState)(g);
	m(() => {
		o && !u && !ee.length && h?.();
	}, [
		u,
		o,
		ee.length,
		h
	]);
	let w = (0, d.useRef)();
	(0, d.useEffect)(() => () => {
		let e = w.current;
		w.current = void 0, e?.();
	}, [ee]), m(() => {
		v.current = !1;
		for (let e = 0; e < ee.length; e++) {
			let t = uu(ee[e]);
			_.includes(t) ? (y.delete(t), b.current.delete(t)) : y.get(t) !== !0 && y.set(t, !1);
		}
	}, [
		ee,
		_.length,
		_.join("-")
	]);
	let T = [];
	if (g !== x) {
		let e = [...g], t = 0;
		for (let n of ee) {
			let r = _.indexOf(uu(n));
			r === -1 ? (e.splice(t++, 0, n), T.push(n)) : t = r + T.length + 1;
		}
		return T.every((e) => y.get(uu(e))) ? e = g : a === "wait" && (e = T), C(du(e)), S(g), null;
	}
	let { forceRender: E } = (0, d.useContext)(f);
	return (0, W.jsx)(W.Fragment, { children: ee.map((e) => {
		let d = uu(e), f = o && !u ? !1 : g === ee || _.includes(d);
		return (0, W.jsx)(su, {
			isPresent: f,
			initial: !v.current || n ? void 0 : !1,
			custom: t,
			presenceAffectsLayout: i,
			mode: a,
			root: l,
			onExitComplete: f ? void 0 : () => {
				if (b.current.has(d)) return;
				if (y.has(d)) b.current.add(d), y.set(d, !0);
				else return;
				let e = !0;
				y.forEach((t) => {
					t || (e = !1);
				}), e && (E?.(), S([]), o && h?.(), w.current = r);
			},
			anchorX: s,
			anchorY: c,
			children: e
		}, d);
	}) });
}, pu = /* @__PURE__ */ (0, d.createContext)({ strict: !1 }), mu = {
	animation: ["variants", ...oc],
	exit: ["exit"],
	drag: ["drag", "dragControls"],
	focus: ["whileFocus"],
	hover: [
		"whileHover",
		"onHoverStart",
		"onHoverEnd"
	],
	tap: [
		"whileTap",
		"onTap",
		"onTapStart",
		"onTapCancel"
	],
	pan: [
		"onPan",
		"onPanStart",
		"onPanSessionStart",
		"onPanEnd"
	],
	inView: [
		"whileInView",
		"onViewportEnter",
		"onViewportLeave"
	],
	layout: ["layout", "layoutId"]
}, hu = !1;
function gu() {
	if (hu) return;
	let e = {};
	for (let t in mu) e[t] = { isEnabled: (e) => mu[t].some((t) => !!e[t]) };
	_c(e), hu = !0;
}
function _u() {
	return gu(), vc();
}
// node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function vu(e) {
	let t = _u();
	for (let n in e) t[n] = {
		...t[n],
		...e[n]
	};
	_c(t);
}
// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var yu = /* @__PURE__ */ (0, d.createContext)({});
// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function bu(e, t) {
	if (cc(e)) {
		let { initial: t, animate: n } = e;
		return {
			initial: t === !1 || ac(t) ? t : void 0,
			animate: ac(n) ? n : void 0
		};
	}
	return e.inherit === !1 ? {} : t;
}
// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function xu(e) {
	let { initial: t, animate: n } = bu(e, (0, d.useContext)(yu));
	return (0, d.useMemo)(() => ({
		initial: t,
		animate: n
	}), [Su(t), Su(n)]);
}
function Su(e) {
	return Array.isArray(e) ? e.join(" ") : e;
}
// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var Cu = () => ({
	style: {},
	transform: {},
	transformOrigin: {},
	vars: {}
});
// node_modules/framer-motion/dist/es/render/html/use-props.mjs
function wu(e, t, n) {
	for (let r in t) !pa(t[r]) && !Sc(r, n) && (e[r] = t[r]);
}
function Tu({ transformTemplate: e }, t) {
	return (0, d.useMemo)(() => {
		let n = Cu();
		return za(n, t, e), Object.assign({}, n.vars, n.style);
	}, [t]);
}
function Eu(e, t) {
	let n = e.style || {}, r = {};
	return wu(r, n, e), Object.assign(r, Tu(e, t)), r;
}
function Du(e, t) {
	let n = {}, r = Eu(e, t);
	return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var Ou = () => ({
	...Cu(),
	attrs: {}
});
// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function ku(e, t, n, r) {
	let i = (0, d.useMemo)(() => {
		let n = Ou();
		return Wa(n, t, Wl(r), e.transformTemplate, e.style), {
			...n.attrs,
			style: { ...n.style }
		};
	}, [t]);
	if (e.style) {
		let t = {};
		return wu(t, e.style, e), {
			...i,
			style: {
				...t,
				...i.style
			}
		};
	}
	return i;
}
// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var Au = /* @__PURE__ */ new Set(/* @__PURE__ */ "animate.exit.variants.initial.style.values.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.tap.propagate.ignoreStrict.viewport".split("."));
function ju(e) {
	return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Au.has(e);
}
// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
function Mu(e, t) {
	return e.startsWith("on") ? !ju(e) : t?.(e) ?? !ju(e);
}
function Nu(e, t, n, r) {
	let i = {};
	for (let a in e) a === "values" && typeof e.values == "object" || pa(e[a]) || (Mu(a, r) || n === !0 && ju(a) || !t && !ju(a) || e.draggable && a.startsWith("onDrag")) && (i[a] = e[a]);
	return i;
}
// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var Pu = [
	"animate",
	"circle",
	"defs",
	"desc",
	"ellipse",
	"g",
	"image",
	"line",
	"filter",
	"marker",
	"mask",
	"metadata",
	"path",
	"pattern",
	"polygon",
	"polyline",
	"rect",
	"stop",
	"switch",
	"symbol",
	"svg",
	"text",
	"tspan",
	"use",
	"view"
];
// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function Fu(e) {
	return typeof e != "string" || e.includes("-") ? !1 : !!(Pu.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function Iu(e, t, n, { latestValues: r }, i, a = !1, o, s) {
	let c = (o ?? Fu(e) ? ku : Du)(t, r, i, e), l = Nu(t, typeof e == "string", a, s), u = e === d.Fragment ? {} : {
		...l,
		...c,
		ref: n
	}, { children: f } = t, p = (0, d.useMemo)(() => pa(f) ? f.get() : f, [f]);
	return (0, d.createElement)(e, {
		...u,
		children: p
	});
}
// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function Lu({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
	return {
		latestValues: Ru(n, r, i, e),
		renderState: t()
	};
}
function Ru(e, t, n, r) {
	let i = {}, a = r(e, {});
	for (let e in a) i[e] = wo(a[e]);
	let { initial: o, animate: s } = e, c = cc(e), l = lc(e);
	t && l && !c && e.inherit !== !1 && (o === void 0 && (o = t.initial), s === void 0 && (s = t.animate));
	let u = n ? n.initial === !1 : !1;
	u ||= o === !1;
	let d = u ? s : o;
	if (d && typeof d != "boolean" && !ic(d)) {
		let t = Array.isArray(d) ? d : [d];
		for (let n = 0; n < t.length; n++) {
			let r = L(e, t[n]);
			if (r) {
				let { transitionEnd: e, transition: t, ...n } = r;
				for (let e in n) {
					let t = n[e];
					if (Array.isArray(t)) {
						let e = u ? t.length - 1 : 0;
						t = t[e];
					}
					t !== null && (i[e] = t);
				}
				for (let t in e) i[t] = e[t];
			}
		}
	}
	return i;
}
var zu = (e) => (t, n) => {
	let r = (0, d.useContext)(yu), i = (0, d.useContext)(h), a = () => Lu(e, t, r, i);
	return n ? a() : p(a);
}, Bu = /*@__PURE__*/ zu({
	scrapeMotionValuesFromProps: Cc,
	createRenderState: Cu
}), Vu = /*@__PURE__*/ zu({
	scrapeMotionValuesFromProps: Kl,
	createRenderState: Ou
}), Hu = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function Uu(e, t, n) {
	let r = (0, d.useRef)(n);
	(0, d.useInsertionEffect)(() => {
		r.current = n;
	});
	let i = (0, d.useRef)(null);
	return (0, d.useCallback)((n) => {
		n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount());
		let a = r.current;
		if (typeof a == "function") {
			if (n) {
				let e = a(n);
				typeof e == "function" && (i.current = e);
			} else i.current ? (i.current(), i.current = null) : a(n);
		} else a && (a.current = n);
	}, [t]);
}
// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var Wu = /* @__PURE__ */ (0, d.createContext)({});
// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function Gu(e, t, n, r, i, a) {
	let { visualElement: o } = (0, d.useContext)(yu), s = (0, d.useContext)(pu), c = (0, d.useContext)(h), l = (0, d.useContext)(eu), u = l.reducedMotion, f = l.skipAnimations, p = (0, d.useRef)(null), g = (0, d.useRef)(!1);
	r ||= s.renderer, !p.current && r && (p.current = r(e, {
		visualState: t,
		parent: o,
		props: n,
		presenceContext: c,
		blockInitialAnimation: c ? c.initial === !1 : !1,
		reducedMotionConfig: u,
		skipAnimations: f,
		isSVG: a
	}), g.current && p.current && (p.current.manuallyAnimateOnMount = !0));
	let _ = p.current, v = (0, d.useContext)(Wu);
	_ && !_.projection && i && (_.type === "html" || _.type === "svg") && i.create(_, n, v), (0, d.useInsertionEffect)(() => {
		_ && _.props !== n && _.update(n, c);
	});
	let y = n[ga], b = (0, d.useRef)(!!y && typeof window < "u" && !window.MotionHandoffIsComplete?.(y) && window.MotionHasOptimisedAnimation?.(y));
	return m(() => {
		g.current && _ && (_.animationState?.animateChanges(), _.enteringChildren = void 0);
	}, []), m(() => {
		g.current = !0, _ && (window.MotionIsMounted = !0, _.updateFeatures(), _.scheduleRenderMicrotask(), b.current && _.animationState && _.animationState.animateChanges());
	}), (0, d.useEffect)(() => {
		_ && (!b.current && _.animationState && _.animationState.animateChanges(), b.current &&= (queueMicrotask(() => {
			window.MotionHandoffMarkAsComplete?.(y);
		}), !1), _.enteringChildren = void 0);
	}), _;
}
// node_modules/framer-motion/dist/es/motion/index.mjs
function Ku(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
	r && vu(r);
	let a = n ? n === "svg" : Fu(e), o = a ? Vu : Bu;
	function s(n, s) {
		let c, l = qu(n);
		p(() => !!tc.current?.sharedNodes.get(l)?.lead && n.initial) && (n = {
			...n,
			initial: !1
		});
		let u = {
			...(0, d.useContext)(eu),
			...n,
			layoutId: l
		}, { isStatic: f, isValidProp: m } = u, h = xu(n), g = o(n, f);
		if (!f && typeof window < "u") {
			Ju(u, r);
			let t = Yu(u);
			h.visualElement = Gu(e, g, u, i, t.ProjectionNode, a), (t.isEnabled || h.visualElement?.projection?.options.layoutId) && (c = t.MeasureLayout);
		}
		return (0, W.jsxs)(yu.Provider, {
			value: h,
			children: [c && h.visualElement ? (0, W.jsx)(c, {
				visualElement: h.visualElement,
				...u
			}) : null, Iu(e, n, Uu(g, h.visualElement, s), g, f, t, a, m)]
		});
	}
	s.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
	let c = (0, d.forwardRef)(s);
	return c[Hu] = e, c;
}
function qu({ layoutId: e }) {
	let t = (0, d.useContext)(f).id;
	return t && e !== void 0 ? t + "-" + e : e;
}
function Ju(e, t) {
	(0, d.useContext)(pu).strict;
}
function Yu(e) {
	let { drag: t, layout: n } = _u();
	if (!t && !n) return {};
	let r = {
		...t,
		...n
	};
	return {
		MeasureLayout: r.MeasureLayout,
		isEnabled: t?.isEnabled(e) || n?.isEnabled(e),
		ProjectionNode: r.ProjectionNode
	};
}
// node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
function Xu(e, t) {
	if (typeof Proxy > "u") return Ku;
	let n = /* @__PURE__ */ new Map(), r = (n, r) => Ku(n, r, e, t);
	return new Proxy((e, t) => r(e, t), { get: (i, a) => a === "create" ? r : (n.has(a) || n.set(a, Ku(a, void 0, e, t)), n.get(a)) });
}
// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var Zu = (e, t) => t.isSVG ?? Fu(e) ? new ql(t) : new Tc(t, { allowProjection: e !== d.Fragment }), Qu = class extends Hl {
	constructor(e) {
		super(e), e.animationState ||= Zl(e);
	}
	updateAnimationControlsSubscription() {
		let { animate: e } = this.node.getProps();
		ic(e) && (this.unmountControls = e.subscribe(this.node));
	}
	mount() {
		this.updateAnimationControlsSubscription();
	}
	update() {
		this.node.getProps().animate !== this.node.prevProps?.animate && this.updateAnimationControlsSubscription();
	}
	unmount() {
		this.node.animationState.reset(), this.unmountControls?.();
	}
}, $u = 0, K = {
	animation: { Feature: Qu },
	exit: { Feature: class extends Hl {
		constructor() {
			super(...arguments), this.id = $u++;
		}
		update() {
			let { presenceContext: e, animationState: t } = this.node;
			if (!e || !t) return;
			let { isPresent: n, onExitComplete: r } = e;
			if (n === !this.exit) return;
			if (n) {
				if (this.exit === !0) {
					let { initial: e } = this.node.getProps();
					if (e && !Array.isArray(e)) {
						let { transition: t, transitionEnd: n, ...r } = R(this.node, e) || {};
						for (let e in r) this.node.getValue(e)?.jump(r[e]);
					}
					this.node.blockInitialAnimation = !1, t.reset(), t.animateChanges();
				} else t.setActive("exit", !1);
				this.exit = void 0;
				return;
			}
			let i = this.exit = t.setActive("exit", !0);
			r && i.then(() => {
				this.exit === i && (this.exit = !0, r(this.id));
			});
		}
		mount() {
			let { register: e } = this.node.presenceContext || {};
			e && (this.unmount = e(this.id, this.node)), this.update();
		}
		unmount() {}
	} }
}, q = class extends Hl {
	constructor(e) {
		super(e), this.removeGroupControls = C, this.removeListeners = C, this.controls = new bl(e);
	}
	mount() {
		let { dragControls: e } = this.node.getProps();
		e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || C;
	}
	update() {
		let { dragControls: e, drag: t } = this.node.getProps(), { dragControls: n, drag: r } = this.node.prevProps || {};
		e !== n && (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls))), r && !t && this.controls.stop(void 0, void 0, r);
	}
	unmount() {
		this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
	}
}, J = (e) => (t, n) => {
	e && F.update(() => e(t, n), !1, !0);
}, Y = class extends Hl {
	constructor() {
		super(...arguments), this.removePointerDownListener = C;
	}
	onPointerDown(e) {
		this.session = new qc(e, this.createPanHandlers(), {
			transformPagePoint: this.node.getTransformPagePoint(),
			contextWindow: this.node.current?.ownerDocument.defaultView
		});
	}
	createPanHandlers() {
		let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
		return {
			onSessionStart: J(e),
			onStart: J(t),
			onMove: J(n),
			onEnd: (e, t) => {
				delete this.session, r && F.postRender(() => r(e, t));
			}
		};
	}
	mount() {
		this.removePointerDownListener = kc(this.node.current, "pointerdown", (e) => this.onPointerDown(e));
	}
	update() {
		this.session?.updateHandlers(this.createPanHandlers());
	}
	unmount() {
		this.removePointerDownListener(), this.session?.end();
	}
}, X = !1, ed = ({ layout: e, layoutDependency: t, layoutAnchor: n }) => ({
	layout: e,
	layoutDependency: t,
	layoutAnchor: n,
	animationType: typeof e == "string" ? e : "both"
}), td = (e, t) => {
	let { snapshot: n } = e, r = e.getStack();
	r?.remove(e);
	let i = r?.lead;
	if (r?.prevLead === e && i.resumeFrom === e && (i.resumeFrom = i.currentAnimation = e.resumingFrom = void 0), e.options.layoutId = t, !t) e.needsShow = !0;
	else return e.root.registerSharedNode(t, e), () => {
		let { resumeFrom: t } = e;
		t?.isPresent !== !1 && e.getStack().members.includes(t) && (t.hide(), e.resumeFrom = void 0, e.snapshot = n);
	};
}, nd = class extends d.Component {
	componentDidMount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props, { projection: i } = e;
		i && (t.group?.add(i), r && n?.register?.(i), X && i.root.didUpdate(), i.options.layoutId !== r && td(i, r)?.(), i.addEventListener("animationComplete", () => this.safeToRemove()), i.setOptions({
			...i.options,
			...ed(this.props),
			onExitComplete: () => this.safeToRemove()
		})), bs.hasEverUpdated = !0;
	}
	getSnapshotBeforeUpdate(e) {
		let { layoutDependency: t, layoutId: n, visualElement: r, drag: i, isPresent: a } = this.props, { projection: o } = r;
		return o && (o.isPresent = a, this.takeOver = e.layoutId === n ? void 0 : (o.willUpdate(), td(o, n)), o.setOptions({
			...o.options,
			...ed(this.props)
		}), X = !0, i || e.layoutDependency !== t || t === void 0 || e.isPresent !== a ? o.willUpdate() : this.safeToRemove(), e.isPresent !== a && (a ? o.promote() : o.relegate() || F.postRender(() => {
			o.getStack()?.members.length || this.safeToRemove();
		}))), null;
	}
	componentDidUpdate() {
		let { projection: e } = this.props.visualElement;
		e && (this.takeOver?.(), e.root.didUpdate(), go.postRender(() => {
			!e.currentAnimation && e.isLead() && this.safeToRemove();
		}));
	}
	componentWillUnmount() {
		let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props, { projection: r } = e;
		X = !0, r && (r.scheduleCheckAfterUnmount(), t.group?.remove(r), n?.deregister?.(r));
	}
	safeToRemove() {
		this.props.safeToRemove?.();
	}
	render() {
		return null;
	}
};
function rd(e) {
	let [t, n] = lu(), r = (0, d.useContext)(f);
	return (0, W.jsx)(nd, {
		...e,
		layoutGroup: r,
		switchLayoutGroup: (0, d.useContext)(Wu),
		isPresent: t,
		safeToRemove: n
	});
}
// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var id = {
	pan: { Feature: Y },
	drag: {
		Feature: q,
		ProjectionNode: nc,
		MeasureLayout: rd
	}
};
// node_modules/framer-motion/dist/es/gestures/hover.mjs
function ad(e, t, n, r, i) {
	let { props: a } = e, o = "while" + n;
	!i && e.animationState && a[o] && e.animationState.setActive(o, r === "Start");
	let s = a["on" + n + r];
	s && F.postRender(() => s(t, Dc(t)));
}
var od = class extends Hl {
	mount() {
		let { current: e } = this.node;
		e && (this.unmount = kl(e, (e, t) => (ad(this.node, t, "Hover", "Start"), (e) => ad(this.node, e, "Hover", "End"))));
	}
	unmount() {}
}, sd = class extends Hl {
	constructor() {
		super(...arguments), this.isActive = !1;
	}
	onFocus() {
		let e = !1;
		try {
			e = this.node.current.matches(":focus-visible");
		} catch {
			e = !0;
		}
		e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
	}
	onBlur() {
		this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
	}
	mount() {
		this.unmount = w($s(this.node.current, "focus", () => this.onFocus()), $s(this.node.current, "blur", () => this.onBlur()));
	}
	unmount() {}
};
// node_modules/framer-motion/dist/es/gestures/press.mjs
function cd(e, t, n, r) {
	e.current instanceof HTMLButtonElement && e.current.disabled || ad(e, t, "Tap", n, r);
}
var ld = class extends Hl {
	constructor() {
		super(...arguments), this.options = {};
	}
	mount() {
		let { current: e } = this.node;
		e && (this.update(), this.unmount = Vl(e, (e, t) => (cd(this.node, t, "Start"), {
			onComplete: (e, { success: t }) => cd(this.node, e, t ? "" : "Cancel"),
			onRepeat: () => cd(this.node, t, "", !0)
		}), this.options));
	}
	update() {
		let { options: e, node: t } = this, { globalTapTarget: n, propagate: r, tap: i } = t.props;
		for (let t in e) delete e[t];
		Object.assign(e, i, {
			useGlobalTarget: n,
			stopPropagation: r?.tap === !1
		});
	}
	unmount() {}
}, ud = /* @__PURE__ */ new WeakMap(), dd = /* @__PURE__ */ new WeakMap(), fd = (e) => {
	let t = ud.get(e.target);
	t && t(e);
}, pd = (e) => {
	e.forEach(fd);
};
function md({ root: e, ...t }) {
	let n = e || document;
	dd.has(n) || dd.set(n, {});
	let r = dd.get(n), i = JSON.stringify(t);
	return r[i] || (r[i] = new IntersectionObserver(pd, {
		root: e,
		...t
	})), r[i];
}
function hd(e, t, n) {
	let r = md(t);
	return ud.set(e, n), r.observe(e), () => {
		ud.delete(e), r.unobserve(e);
	};
}
// node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
var gd = {
	some: 0,
	all: 1
}, _d = class extends Hl {
	constructor() {
		super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
	}
	startObserver() {
		this.stopObserver?.();
		let { viewport: e = {} } = this.node.getProps(), { root: t, margin: n, amount: r = "some", once: i } = e, a = {
			root: t ? t.current : void 0,
			rootMargin: n,
			threshold: typeof r == "number" ? r : gd[r]
		}, o = (e) => {
			let { isIntersecting: t } = e;
			if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) return;
			t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
			let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(), a = t ? n : r;
			a && a(e);
		};
		this.stopObserver = hd(this.node.current, a, o);
	}
	mount() {
		this.startObserver();
	}
	update() {
		if (typeof IntersectionObserver > "u") return;
		let { props: e, prevProps: t } = this.node;
		[
			"amount",
			"margin",
			"root"
		].some(vd(e, t)) && this.startObserver();
	}
	unmount() {
		this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
	}
};
function vd({ viewport: e = {} }, { viewport: t = {} } = {}) {
	return (n) => e[n] !== t[n];
}
// node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
var yd = /*@__PURE__*/ Xu(/* @__PURE__ */ Object.assign({}, K, {
	inView: { Feature: _d },
	tap: { Feature: ld },
	focus: { Feature: sd },
	hover: { Feature: od }
}, id, { layout: {
	ProjectionNode: nc,
	MeasureLayout: rd
} }), Zu);
// node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs
function bd() {
	!fc.current && mc();
	let [e] = (0, d.useState)(dc.current);
	return e;
}
// node_modules/motion/dist/es/react.mjs
var xd = /* @__PURE__ */ e(u(), 1), Sd = yd;
// components/ui/glowing-shadow.tsx
function Cd({ className: e = "", ...t }) {
	return /* @__PURE__ */ (0, W.jsx)("a", {
		...t,
		className: `glowing-shadow ${e}`
	});
}
// components/ui/shadcn-studio-hero-section-44.tsx
var wd = (...e) => e.filter(Boolean).join(" "), Td = "focus-visible:ring-ring/60 focus-visible:border-ring outline-none focus-visible:ring-[3px]", Ed = (0, d.lazy)(() => import("./hero-lanyard-COu3Fdyp.js")), Dd = class extends d.Component {
	state = { failed: !1 };
	static getDerivedStateFromError() {
		return { failed: !0 };
	}
	render() {
		return this.state.failed ? /* @__PURE__ */ (0, W.jsx)("img", {
			className: "hero-static-portrait",
			src: "images/susas_profilepic.jpg",
			alt: ""
		}) : this.props.children;
	}
}, Od = ({ greetings: e, intervalMs: t = 2200 }) => {
	let [n, r] = (0, d.useState)(0), i = bd();
	return (0, d.useEffect)(() => {
		if (i || e.length < 2) return;
		let n = setInterval(() => r((t) => (t + 1) % e.length), t);
		return () => clearInterval(n);
	}, [
		e.length,
		t,
		i
	]), /* @__PURE__ */ (0, W.jsxs)(W.Fragment, { children: [/* @__PURE__ */ (0, W.jsx)("span", {
		className: "sr-only",
		children: e[0]
	}), /* @__PURE__ */ (0, W.jsxs)("span", {
		"aria-hidden": "true",
		className: "greeting-rotator",
		children: [e.map((e) => /* @__PURE__ */ (0, W.jsx)("span", {
			className: "greeting-sizer",
			children: e
		}, e)), /* @__PURE__ */ (0, W.jsx)(fu, {
			mode: "wait",
			initial: !1,
			children: /* @__PURE__ */ (0, W.jsx)(Sd.span, {
				initial: {
					y: "100%",
					opacity: 0
				},
				animate: {
					y: "0%",
					opacity: 1
				},
				exit: {
					y: "-100%",
					opacity: 0
				},
				transition: {
					duration: .5,
					ease: "easeInOut"
				},
				className: "greeting-word",
				children: e[n]
			}, e[n])
		})]
	})] });
}, kd = "https://cdn.shadcnstudio.com/ss-assets/template/landing-page/zolt", Ad = Array.from({ length: 20 }, (e, t) => {
	let n = String(t + 1).padStart(2, "0");
	return {
		image: `${kd}/logo-${n}.png`,
		name: `Tech stack logo ${n}`
	};
}), jd = ({ greetings: e = [
	"Hello",
	"नमस्ते",
	"你好",
	"Ciao"
], name: t = "Zolt", role: n = "Design engineer", description: r = "Design engineer based in Austin. I don't just bridge design and engineering - I own the entire experience, from the first sketch to the final shipped product.", availabilityLabel: i = "Available", profileImage: o = `${kd}/profile.png`, downloadAction: s = {
	label: "Download CV",
	href: "#"
}, connectAction: c = {
	label: "Let's connect",
	href: "#"
}, brandLogos: l = Ad, className: u, sectionContent: f }) => {
	let [p, m] = (0, d.useState)(!1);
	return (0, d.useEffect)(() => {
		let e = window.matchMedia("(min-width: 1024px) and (prefers-reduced-motion: no-preference)"), t = () => m(e.matches);
		return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []), /* @__PURE__ */ (0, W.jsxs)("section", {
		"aria-label": "Introduction",
		className: wd("portfolio-hero bg-background text-foreground overflow-x-clip lg:relative", u),
		children: [/* @__PURE__ */ (0, W.jsx)("div", {
			className: "max-sm:pt-20 sm:py-16 lg:pt-32 lg:pb-24",
			children: /* @__PURE__ */ (0, W.jsx)("div", {
				className: "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8",
				children: /* @__PURE__ */ (0, W.jsxs)("div", {
					className: "space-y-6 lg:max-w-lg",
					children: [
						/* @__PURE__ */ (0, W.jsxs)("h1", {
							className: "mb-2 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[64px] lg:font-bold",
							children: [
								/* @__PURE__ */ (0, W.jsx)(Od, { greetings: e }),
								", I’m ",
								t,
								"."
							]
						}),
						/* @__PURE__ */ (0, W.jsx)("p", {
							className: "text-muted-foreground text-xl font-medium sm:text-2xl lg:text-3xl",
							children: n
						}),
						/* @__PURE__ */ (0, W.jsx)("p", {
							className: "text-muted-foreground mb-8 max-w-2xl text-base",
							children: r
						}),
						/* @__PURE__ */ (0, W.jsxs)("div", {
							className: "flex items-center gap-2.5 pt-2",
							children: [/* @__PURE__ */ (0, W.jsx)(Cd, {
								href: s.href,
								className: wd("border-border bg-background hover:bg-muted inline-flex h-11 items-center justify-center rounded-full border px-4 text-base font-medium whitespace-nowrap transition-colors", Td),
								children: s.label
							}), /* @__PURE__ */ (0, W.jsxs)(Cd, {
								href: c.href,
								className: wd("connect-glow border-border bg-card group inline-flex h-11 items-center justify-center gap-2.5 rounded-full border pr-4 pl-4 text-base font-medium whitespace-nowrap shadow-sm transition-[padding] duration-300 hover:pl-2 focus-visible:pl-2", Td),
								children: [/* @__PURE__ */ (0, W.jsx)("span", {
									className: "bg-primary relative flex size-2.5 items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover:size-6.5 group-focus-visible:size-6.5",
									children: /* @__PURE__ */ (0, W.jsx)(a, {
										"aria-hidden": "true",
										className: "text-primary-foreground absolute size-4.5 -translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
									})
								}), c.label]
							})]
						}),
						f
					]
				})
			})
		}), p && /* @__PURE__ */ (0, W.jsx)(Dd, { children: /* @__PURE__ */ (0, W.jsx)(d.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, W.jsx)(Ed, {
				frontImage: o,
				className: "mx-auto mt-8 aspect-4/5 w-full max-w-80 max-lg:hidden lg:absolute lg:-top-31 lg:right-0 lg:left-0 lg:z-10 lg:mt-0 lg:aspect-auto lg:h-182 lg:max-w-none"
			})
		}) })]
	});
}, Md = (...e) => e.filter(Boolean).join(" "), Nd = 2, Pd = 1e3, Fd = Math.PI * 2, Id = 220, Ld = 1.5, Rd = 1, zd = .03, Bd = 130, Vd = .55, Hd = 5.5, Ud = 1, Wd = .5, Gd = "var(--color-foreground, oklch(0.93 0.004 265))", Kd = "oklch(0.92 0.028 255)", qd = "oklch(0.92 0.055 75)", Jd = [
	232,
	233,
	238
], Yd = [
	221,
	233,
	247
], Xd = [
	243,
	226,
	194
], Zd = {
	base: Jd,
	cool: Yd,
	warm: Xd
}, Qd = 600, $d = 8, ef = 640, tf = .6, nf = 260, rf = 4e6, af = 676, of = 5e3, sf = 1200, cf = .85, lf = 12, uf = .05, df = 60, ff = 24, pf = 8, Z = 1.7, mf = 1.9, hf = .42, gf = .82, _f = .18, vf = .7, yf = .6, bf = .8, xf = .6, Sf = 1, Cf = .35, wf = .01, Tf = 6, Ef = .3, Df = .3, Of = .12, kf = 1.5, Af = .25, jf = .75, Mf = 1.15, Nf = .8, Pf = .5, Ff = .5, If = 128, Lf = 5, Rf = 987654321, zf = 16807, Bf = 2147483647, Vf = [
	1,
	0,
	-1,
	1,
	0,
	1,
	1,
	1
], Q = (e, t, n) => Math.max(t, Math.min(n, e)), Hf = (e, t, n) => e + (t - e) * n, Uf = (e) => e.trim().startsWith("--") ? `var(${e.trim()})` : e.trim(), Wf = (e, t) => {
	let n = document.createElement("span");
	n.style.display = "none", t.append(n);
	let r = document.createElement("canvas");
	r.width = 1, r.height = 1;
	let i = r.getContext("2d", { willReadFrequently: !0 }), a = e.map((e, t) => {
		let r = t === 0 ? Jd : Zd[t === 1 ? "cool" : "warm"] ?? Jd;
		if (!i) return r;
		n.style.color = "", n.style.color = Uf(e);
		let a = window.getComputedStyle(n).color;
		if (!a) return r;
		i.clearRect(0, 0, 1, 1), i.fillStyle = "#000000", i.fillStyle = a, i.fillRect(0, 0, 1, 1);
		let { data: o } = i.getImageData(0, 0, 1, 1);
		return [
			o[0],
			o[1],
			o[2]
		];
	});
	return n.remove(), a;
}, Gf = (e) => {
	let t = e % Bf || 1;
	return () => (t = t * zf % Bf, t / Bf);
}, Kf = (e, t) => {
	let n = e.getContext("2d");
	if (!n) return;
	let [r, i, a] = t, o = If / 2;
	n.clearRect(0, 0, If, If);
	let s = n.createRadialGradient(o, o, 0, o, o, o);
	s.addColorStop(0, `rgba(${r}, ${i}, ${a}, 1)`), s.addColorStop(.06, `rgba(${r}, ${i}, ${a}, 0.95)`), s.addColorStop(.14, `rgba(${r}, ${i}, ${a}, 0.5)`), s.addColorStop(.28, `rgba(${r}, ${i}, ${a}, 0.16)`), s.addColorStop(.55, `rgba(${r}, ${i}, ${a}, 0.04)`), s.addColorStop(1, `rgba(${r}, ${i}, ${a}, 0)`), n.fillStyle = s, n.fillRect(0, 0, If, If);
}, qf = (e, t, n) => {
	let r = Math.max(e.length - 1, 1);
	for (let i = 0; i < e.length; i++) {
		let a = i / r, o = [
			Math.round(Hf(t.base[0], Hf(t.cool[0], t.warm[0], a), n)),
			Math.round(Hf(t.base[1], Hf(t.cool[1], t.warm[1], a), n)),
			Math.round(Hf(t.base[2], Hf(t.cool[2], t.warm[2], a), n))
		];
		Kf(e[i], o);
	}
}, Jf = (e, t) => e.base[0] === t.base[0] && e.base[1] === t.base[1] && e.base[2] === t.base[2] && e.cool.every((e, n) => e === t.cool[n]) && e.warm.every((e, n) => e === t.warm[n]), Yf = (e) => {
	let t = e.getContext("2d");
	if (!t) return null;
	let n = [];
	for (let e = 0; e < Lf; e++) {
		let e = document.createElement("canvas");
		e.width = If, e.height = If, n.push(e);
	}
	let r = new Float32Array(Qd), i = new Float32Array(Qd), a = new Float32Array(Qd), o = new Float32Array(Qd), s = new Float32Array(Qd), c = new Float32Array(Qd), l = new Float32Array(Qd), u = new Float32Array(Qd), d = new Float32Array(Qd), f = new Float32Array(Qd), p = new Float32Array(Qd), m = new Float32Array(Qd), h = new Uint8Array(Qd), g = Gf(Rf);
	for (let e = 0; e < Qd; e++) {
		p[e] = g(), m[e] = g();
		let t = g() ** Z;
		l[e] = t, u[e] = g() * Fd, d[e] = Mf * (1 + (g() - .5) * Nf), f[e] = 1 + (g() - .5) * Ff;
		let n = (g() + g()) / 2;
		h[e] = Math.min(4, Math.floor(n * Lf));
		let r = g() * Fd, i = lf * (.15 + t);
		s[e] = Math.cos(r) * i, c[e] = Math.sin(r) * i;
	}
	let _ = Qd * pf, v = new Float32Array(_ * 4), y = new Uint8Array(_), b = /* @__PURE__ */ new Int32Array(1), x = /* @__PURE__ */ new Int32Array(1), S = new Int32Array(Qd), ee = performance.now(), C = {
		connect: !0,
		connectDistance: Bd,
		count: Id,
		drag: zd,
		glow: Hd,
		gravity: Rd,
		palette: Zd,
		speed: Ud,
		starSize: Ld,
		still: !1,
		tint: Wd,
		twinkle: Vd
	};
	qf(n, C.palette, C.tint);
	let w = 1, T = 1, E = 0, te = !1, ne = 0, re = 0, ie = !1, ae = ee, oe = 0, se = !1, ce = !1, D = () => {
		let e = Q(Math.round(C.count), $d, Qd);
		return w < ef ? Math.max($d, Math.round(e * tf)) : e;
	}, le = (e) => {
		for (let t = 0; t < e; t++) r[t] = p[t] * w, i[t] = m[t] * T, a[t] = 0, o[t] = 0;
		E = e, te = !0;
	}, ue = () => {
		let n = e.getBoundingClientRect(), a = Math.min(window.devicePixelRatio || 1, Nd), o = w, s = T;
		w = Math.max(1, n.width), T = Math.max(1, n.height);
		let c = Math.max(1, Math.round(w * a)), l = Math.max(1, Math.round(T * a));
		(e.width !== c || e.height !== l) && (e.width = c, e.height = l), t.setTransform(a, 0, 0, a, 0, 0);
		let u = D();
		if (!te || u !== E) {
			le(u);
			return;
		}
		let d = w / o, f = T / s;
		for (let e = 0; e < E; e++) r[e] *= d, i[e] *= f;
	}, de = () => {
		let e = Math.max(C.connectDistance, ff);
		return {
			cell: e,
			cols: Math.max(1, Math.ceil(w / e)),
			rows: Math.max(1, Math.ceil(T / e))
		};
	}, fe = (e, t, n) => {
		let a = t * n;
		b.length < a + 1 && (b = new Int32Array(a + 1), x = new Int32Array(a + 1)), b.fill(0, 0, a + 1), S.length < E && (S = new Int32Array(E));
		for (let a = 0; a < E; a++) {
			let o = Q(Math.floor(r[a] / e), 0, t - 1), s = Q(Math.floor(i[a] / e), 0, n - 1);
			b[s * t + o + 1]++;
		}
		for (let e = 0; e < a; e++) b[e + 1] += b[e], x[e] = b[e];
		for (let a = 0; a < E; a++) {
			let o = Q(Math.floor(r[a] / e), 0, t - 1), s = Q(Math.floor(i[a] / e), 0, n - 1) * t + o;
			S[x[s]] = a, x[s]++;
		}
	}, pe = (e, t) => {
		let n = l[e], a = nf * (xf + n * bf), o = ne - r[e], s = re - i[e], c = o * o + s * s;
		if (c > a * a) return;
		let u = Math.sqrt(c), d = Math.sqrt(c + af), f = 1 - u / a, p = Cf + n * Sf, m = Math.min(C.gravity * rf * p / (d * d), of) * f * f, h = o / d, g = s / d;
		t[0] += h * m - g * m * cf, t[1] += g * m + h * m * cf;
	}, me = /* @__PURE__ */ new Float32Array(2), he = (e) => {
		let t = (1 - C.drag) ** (e * df), { speed: n } = C;
		for (let l = 0; l < E; l++) {
			me[0] = 0, me[1] = 0, ie && pe(l, me);
			let u = (a[l] + me[0] * e) * t, d = (o[l] + me[1] * e) * t, f = u * u + d * d;
			if (f > sf * sf) {
				let e = sf / Math.sqrt(f);
				u *= e, d *= e;
			}
			a[l] = u, o[l] = d, r[l] += (u + s[l] * n) * e, i[l] += (d + c[l] * n) * e, r[l] < 0 ? r[l] += w : r[l] > w && (r[l] -= w), i[l] < 0 ? i[l] += T : i[l] > T && (i[l] -= T);
		}
	}, ge = (e, t) => {
		let n = C.connectDistance * C.connectDistance, a = 0, o = (e, t) => {
			if (a >= _) return;
			let o = r[e] - r[t], s = i[e] - i[t], c = o * o + s * s;
			if (c > n || c === 0) return;
			let u = (1 - Math.sqrt(c) / C.connectDistance) ** kf, d = Af + (l[e] + l[t]) / 2 * jf, f = Math.min(5, Math.floor(u * d * Tf)), p = a * 4;
			v[p] = r[e], v[p + 1] = i[e], v[p + 2] = r[t], v[p + 3] = i[t], y[a] = f, a++;
		};
		for (let n = 0; n < t; n++) for (let r = 0; r < e; r++) {
			let i = n * e + r, a = b[i], s = b[i + 1];
			for (let i = a; i < s; i++) {
				let a = S[i];
				for (let e = i + 1; e < s; e++) o(a, S[e]);
				for (let i = 0; i < Vf.length; i += 2) {
					let s = r + Vf[i], c = n + Vf[i + 1];
					if (s < 0 || s >= e || c >= t) continue;
					let l = c * e + s, u = b[l], d = b[l + 1];
					for (let e = u; e < d; e++) o(a, S[e]);
				}
			}
		}
		return a;
	}, _e = (e) => {
		let [n, r, i] = C.palette.base;
		for (let a = 0; a < Tf; a++) {
			let o = Ef * (a + 1) / Tf;
			t.strokeStyle = `rgba(${n}, ${r}, ${i}, ${o})`, t.lineWidth = Df + a * Of, t.beginPath();
			let s = !1;
			for (let n = 0; n < e; n++) {
				if (y[n] !== a) continue;
				let e = n * 4;
				t.moveTo(v[e], v[e + 1]), t.lineTo(v[e + 2], v[e + 3]), s = !0;
			}
			s && t.stroke();
		}
	}, ve = () => {
		let e = (performance.now() - ee) / Pd, { glow: a, starSize: o, still: s, twinkle: c } = C;
		for (let p = 0; p < E; p++) {
			let m = l[p], g = Math.sin(s ? u[p] : e * d[p] + u[p]), _ = Q((_f + m * gf) * (1 - c * Pf * (1 - g)), 0, 1);
			if (_ <= wf) continue;
			let v = o * (hf + m * mf) * f[p] * a * (yf + m * vf);
			t.globalAlpha = _, t.drawImage(n[h[p]], r[p] - v, i[p] - v, v * 2, v * 2);
		}
		t.globalAlpha = 1;
	}, ye = (e) => {
		t.clearRect(0, 0, w, T), C.connect && e > 0 && _e(e), ve();
	}, be = () => {
		let { cell: e, cols: t, rows: n } = de();
		fe(e, t, n);
		let r = C.connect ? ge(t, n) : 0;
		ye(r);
	}, xe = () => {
		if (ce || !se) return;
		let e = performance.now(), t = Math.min((e - ae) / Pd, uf);
		ae = e, he(t);
		let n = 0;
		if (C.connect) {
			let { cell: e, cols: t, rows: r } = de();
			fe(e, t, r), n = ge(t, r);
		}
		ye(n), oe = requestAnimationFrame(xe);
	};
	return ue(), {
		destroy: () => {
			ce = !0, se = !1, cancelAnimationFrame(oe), t.setTransform(1, 0, 0, 1, 0, 0), t.clearRect(0, 0, e.width, e.height), e.width = 0, e.height = 0;
			for (let e of n) e.width = 0, e.height = 0;
		},
		render: () => {
			ue(), be();
		},
		resize: () => {
			ue(), se || be();
		},
		setPointer: (e, t, n) => {
			ne = e, re = t, ie = n;
		},
		setRunning: (e) => {
			ce || se === e || (se = e, e ? (ae = performance.now(), oe = requestAnimationFrame(xe)) : cancelAnimationFrame(oe));
		},
		setSettings: (e) => {
			let t = e.count !== C.count, r = e.tint !== C.tint || !Jf(e.palette, C.palette);
			C = e, r && qf(n, e.palette, e.tint), t && le(D());
		}
	};
}, Xf = ({ children: e, className: t, color: n = Gd, connect: r = !0, connectDistance: i = Bd, count: a = Id, drag: o = zd, glow: s = Hd, gravity: c = Rd, paused: l = !1, speed: u = Ud, starSize: f = Ld, tint: p = Wd, twinkle: m = Vd }) => {
	let h = bd(), [g, _] = (0, d.useState)(h === !0);
	(0, d.useEffect)(() => {
		let e = window.matchMedia("(prefers-reduced-motion: reduce)"), t = () => _(e.matches);
		return t(), e.addEventListener("change", t), () => e.removeEventListener("change", t);
	}, []);
	let v = (0, d.useRef)(null), y = (0, d.useRef)(null), b = (0, d.useRef)(null), [x, S] = (0, d.useState)(!0), [ee, C] = (0, d.useState)(!1), [w, T] = (0, d.useState)(Zd);
	(0, d.useEffect)(() => {
		let e = v.current;
		if (!e) return;
		let t = () => {
			let [t, r, i] = Wf([
				n,
				Kd,
				qd
			], e);
			T({
				base: t ?? Jd,
				cool: r ?? Yd,
				warm: i ?? Xd
			});
		};
		t();
		let r = new MutationObserver(t);
		return r.observe(document.documentElement, {
			attributes: !0,
			attributeFilter: [
				"data-theme",
				"class",
				"style"
			]
		}), () => r.disconnect();
	}, [n]), (0, d.useEffect)(() => {
		let e = y.current;
		if (!e) return;
		let t = Yf(e);
		if (b.current = t, S(t !== null), !t) return;
		let n = new ResizeObserver(() => t.resize());
		return n.observe(e), () => {
			n.disconnect(), t.destroy(), b.current = null;
		};
	}, []), (0, d.useEffect)(() => {
		let e = v.current;
		if (!(e && x)) return;
		let t = !0, n = () => {
			C(t && document.visibilityState === "visible");
		}, r = new IntersectionObserver((e) => {
			t = e.some((e) => e.isIntersecting), n();
		});
		return r.observe(e), document.addEventListener("visibilitychange", n), n(), () => {
			r.disconnect(), document.removeEventListener("visibilitychange", n);
		};
	}, [x]), (0, d.useEffect)(() => {
		let e = b.current;
		e && (e.setSettings({
			connect: r,
			connectDistance: Math.max(i, 1),
			count: Q(Math.round(a), $d, Qd),
			drag: Q(o, 0, 1),
			glow: Math.max(s, 1),
			gravity: Math.max(c, 0),
			palette: w,
			speed: Math.max(u, 0),
			starSize: Math.max(f, .2),
			still: g === !0,
			tint: Q(p, 0, 1),
			twinkle: Q(m, 0, 1)
		}), e.render());
	}, [
		r,
		i,
		a,
		o,
		s,
		c,
		w,
		g,
		u,
		f,
		p,
		m
	]), (0, d.useEffect)(() => {
		let e = b.current;
		if (!e) return;
		let t = ee && !l && !g;
		e.setRunning(t), t || e.render();
	}, [
		ee,
		l,
		g
	]), (0, d.useEffect)(() => {
		let e = v.current, t = y.current;
		if (!(e && t) || g) return;
		let n = (e) => {
			let n = t.getBoundingClientRect();
			b.current?.setPointer(e.clientX - n.left, e.clientY - n.top, !0);
		}, r = () => {
			b.current?.setPointer(0, 0, !1);
		};
		return document.addEventListener("pointermove", n, { passive: !0 }), document.addEventListener("pointerleave", r), document.addEventListener("pointercancel", r), document.addEventListener("pointerup", r), window.addEventListener("blur", r), () => {
			document.removeEventListener("pointermove", n), document.removeEventListener("pointerleave", r), document.removeEventListener("pointercancel", r), document.removeEventListener("pointerup", r), window.removeEventListener("blur", r);
		};
	}, [g]);
	let E = Uf(n);
	return /* @__PURE__ */ (0, W.jsxs)("div", {
		className: Md("relative isolate overflow-hidden", t),
		ref: v,
		children: [x ? /* @__PURE__ */ (0, W.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0",
			children: /* @__PURE__ */ (0, W.jsx)("canvas", {
				className: "h-full w-full",
				ref: y
			})
		}) : /* @__PURE__ */ (0, W.jsx)("div", {
			"aria-hidden": "true",
			className: "pointer-events-none absolute inset-0 opacity-60",
			style: {
				backgroundImage: [`radial-gradient(circle at 30% 30%, ${E} 0px, transparent 1.5px)`, `radial-gradient(circle at 70% 65%, ${E} 0px, transparent 1px)`].join(", "),
				backgroundSize: "96px 96px, 53px 53px"
			}
		}), /* @__PURE__ */ (0, W.jsx)("div", {
			className: "relative z-10 h-full",
			children: e
		})]
	});
}, Zf = class extends d.Component {
	state = { failed: !1 };
	static getDerivedStateFromError() {
		return { failed: !0 };
	}
	render() {
		return this.state.failed ? /* @__PURE__ */ (0, W.jsxs)("section", {
			className: "hero-fallback",
			children: [
				/* @__PURE__ */ (0, W.jsx)("h1", { children: "Riovic Matthew G. Susas" }),
				/* @__PURE__ */ (0, W.jsx)("p", { children: "E-Commerce Systems Analyst" }),
				/* @__PURE__ */ (0, W.jsxs)("nav", {
					"aria-label": "Explore portfolio",
					children: [
						/* @__PURE__ */ (0, W.jsx)("a", {
							href: "latest/",
							children: "Latest Updates"
						}),
						/* @__PURE__ */ (0, W.jsx)("a", {
							href: "projects/",
							children: "Projects"
						}),
						/* @__PURE__ */ (0, W.jsx)("a", {
							href: "about/",
							children: "About Me"
						}),
						/* @__PURE__ */ (0, W.jsx)("a", {
							href: "testimonials/",
							children: "Testimonials"
						})
					]
				})
			]
		}) : this.props.children;
	}
}, Qf = (0, d.lazy)(() => import("./mobile-portfolio-ClNXO8Ec.js"));
function $f() {
	let [e, t] = (0, d.useState)(() => window.matchMedia("(max-width: 767px)").matches);
	return (0, d.useEffect)(() => {
		let e = window.matchMedia("(max-width: 767px)"), n = () => t(e.matches);
		return e.addEventListener("change", n), () => e.removeEventListener("change", n);
	}, []), e;
}
function ep() {
	return $f() ? /* @__PURE__ */ (0, W.jsx)(Qf, {}) : /* @__PURE__ */ (0, W.jsx)(jd, {
		greetings: [
			"Hello",
			"Kumusta",
			"Welcome"
		],
		name: "Riovic",
		role: "E-Commerce Systems Analyst",
		availabilityLabel: "Technical operations · Systems & automation",
		description: "I connect the moving parts of e-commerce. From Shopify Plus to warehouse routing and automation, I turn complex operations into clear, reliable systems.",
		profileImage: "images/susas_profilepic.jpg",
		downloadAction: {
			label: "View résumé",
			href: "RESUME-Riovic-Matthew-TechOps-Systems-Analyst.md"
		},
		connectAction: {
			label: "Let’s connect",
			href: "contact/"
		},
		brandLogos: [],
		sectionContent: /* @__PURE__ */ (0, W.jsx)(o, { layout: "carousel" })
	});
}
var $ = document.getElementById("heroRoot");
$ && (0, xd.createRoot)($).render(/* @__PURE__ */ (0, W.jsx)(Zf, { children: /* @__PURE__ */ (0, W.jsx)(d.Suspense, {
	fallback: /* @__PURE__ */ (0, W.jsx)("div", {
		className: "hero-loading",
		children: "Loading introduction…"
	}),
	children: /* @__PURE__ */ (0, W.jsx)(ep, {})
}) }));
function tp() {
	let e = $f();
	return /* @__PURE__ */ (0, W.jsx)(Xf, {
		className: "homepage-stars",
		color: "var(--text)",
		count: e ? 120 : 180,
		connectDistance: 110,
		tint: .5,
		starSize: 1.4,
		speed: .5,
		gravity: .8
	});
}
var np = document.getElementById("starsRoot");
np && (0, xd.createRoot)(np).render(/* @__PURE__ */ (0, W.jsx)(tp, {}));
