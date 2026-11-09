import { r as e } from "./rolldown-runtime-QGRDbDUS.js";
import { n as t, t as n } from "./jsx-runtime-s04k_HfJ.js";
// node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs
var r = /* @__PURE__ */ e(t(), 1), i = (e) => e?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
// node_modules/lucide-react/dist/esm/shared/src/utils/toLucideIconData.mjs
function a(e, t, n = []) {
	if (t == null) throw Error("[lucide]: iconNode is required when icon name is used");
	return {
		name: i(e),
		size: 24,
		node: t,
		...n.length > 0 ? { aliases: n } : {}
	};
}
// node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs
var o = (e) => {
	let t = "", n = !1;
	for (let r of e) r === "-" || r === "_" || r <= " " ? n = t.length > 0 : (t.length === 0 ? t += r.toLowerCase() : t += n ? r.toUpperCase() : r, n = !1);
	return t;
}, s = (e) => {
	let t = o(e);
	return t.charAt(0).toUpperCase() + t.slice(1);
}, c = (...e) => e.filter((e, t, n) => !!e && e.trim() !== "" && n.indexOf(e) === t).join(" ").trim(), l = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	"stroke-width": 2,
	"stroke-linecap": "round",
	"stroke-linejoin": "round"
};
// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconNode.mjs
function u(e) {
	return e != null;
}
function d(e, t = {}) {
	let n = t.attributeNames ?? {}, r = (e) => n[e] ?? e, i = e.size ?? e.width ?? l.width, a = e.size ?? e.height ?? l.height, o = e.aliases?.filter((e) => typeof e == "string" && e.trim() !== "").map((e) => `lucide-${e}`) ?? [], s = [...e.name ? [`lucide-${e.name}`] : [], ...o], d = t.className?.split(" ").filter(Boolean) ?? [], f = t.includeDefaultClasses === !1 ? c(...d) : c("lucide", ...s, ...d), p = t.absoluteStrokeWidth ? Number(t.strokeWidth ?? l["stroke-width"]) * Number(e.size ?? e.width ?? l.width) / Number(t.size ?? t.width ?? l.width) : t.strokeWidth ?? l["stroke-width"];
	return [
		"svg",
		{
			...Object.entries(l).reduce((e, [t, n]) => (e[r(t)] = n, e), {}),
			..."color" in t && t.color && { [r("stroke")]: t.color },
			..."size" in t && u(t.size) && {
				[r("width")]: t.size,
				[r("height")]: t.size
			},
			..."width" in t && u(t.width) && { [r("width")]: t.width },
			..."height" in t && u(t.height) && { [r("height")]: t.height },
			[r("stroke-width")]: p,
			...f && { [r("class")]: f },
			[r("viewBox")]: `0 0 ${i} ${a}`,
			...t.hasA11yProp === !1 ? { [r("aria-hidden")]: "true" } : {},
			..."attributes" in t && t.attributes
		},
		e.node.map((e) => {
			let [n, i, a] = e, o = t.nonScalingStroke ? {
				[r("vector-effect")]: "non-scaling-stroke",
				...i
			} : i;
			return a ? [
				n,
				o,
				a
			] : [n, o];
		})
	];
}
// node_modules/lucide-react/dist/esm/shared/src/build/buildLucideIconForReact.mjs
function f(e, t = {}) {
	return d(e, {
		...t,
		attributeNames: {
			...t.attributeNames,
			class: "className",
			"stroke-width": "strokeWidth",
			"stroke-linecap": "strokeLinecap",
			"stroke-linejoin": "strokeLinejoin",
			"vector-effect": "vectorEffect"
		}
	});
}
// node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs
var p = (e) => {
	for (let t in e) if (t.startsWith("aria-") || t === "role" || t === "title") return !0;
	return !1;
}, m = (0, r.createContext)({}), h = () => (0, r.useContext)(m), g = (0, r.forwardRef)(({ color: e, size: t, width: n, height: i, strokeWidth: a, absoluteStrokeWidth: o, nonScalingStroke: s, className: l = "", children: u, iconNode: d = [], icon: m = {
	node: d,
	aliases: [],
	size: 24
}, ...g }, _) => {
	let { size: v = 24, strokeWidth: y = 2, absoluteStrokeWidth: b = !1, nonScalingStroke: x = !1, color: S = "currentColor", className: C = "" } = h() ?? {}, w = !!u || p(g), [T, E, D = []] = f(m, {
		color: e ?? S,
		width: n ?? t ?? v,
		height: i ?? t ?? v,
		strokeWidth: a ?? y,
		absoluteStrokeWidth: o ?? b,
		nonScalingStroke: s ?? x,
		className: c(C, l),
		hasA11yProp: w,
		attributes: g
	});
	return (0, r.createElement)(T, {
		ref: _,
		...E
	}, [...D.map(([e, t]) => (0, r.createElement)(e, t)), ...Array.isArray(u) ? u : [u]]);
});
// node_modules/lucide-react/dist/esm/createLucideIcon.mjs
function _(e, t = [], n = []) {
	let i = typeof e == "string" ? a(e, t, n) : e, o = (0, r.forwardRef)(({ className: e, ...t }, n) => (0, r.createElement)(g, {
		ref: n,
		icon: i,
		className: e,
		...t
	}));
	return i.name && (o.displayName = s(i.name)), o;
}
// node_modules/lucide-react/dist/esm/icons/arrow-left.mjs
var v = {
	name: "arrow-left",
	size: 24,
	node: [["path", {
		d: "m12 19-7-7 7-7",
		key: "1l729n"
	}], ["path", {
		d: "M19 12H5",
		key: "x3x0zl"
	}]]
};
v.node;
var y = _(v), b = {
	name: "arrow-right",
	size: 24,
	node: [["path", {
		d: "M5 12h14",
		key: "1ays0h"
	}], ["path", {
		d: "m12 5 7 7-7 7",
		key: "xquz4c"
	}]]
};
b.node;
var x = _(b), S = {
	name: "arrow-up-right",
	size: 24,
	node: [["path", {
		d: "M7 7h10v10",
		key: "1tivn9"
	}], ["path", {
		d: "M7 17 17 7",
		key: "1vkiza"
	}]]
};
S.node;
var C = _(S), w = n(), T = r.forwardRef(({ title: e, images: t, description: n, href: r, className: i = "" }, a) => /* @__PURE__ */ (0, w.jsxs)("a", {
	ref: a,
	href: r,
	className: `section-preview-card glowing-shadow ${i}`,
	"aria-label": `Explore ${e}`,
	children: [
		/* @__PURE__ */ (0, w.jsxs)("div", {
			className: "section-preview-header",
			children: [/* @__PURE__ */ (0, w.jsx)("h3", { children: e }), /* @__PURE__ */ (0, w.jsx)(C, {
				size: 22,
				"aria-hidden": "true"
			})]
		}),
		/* @__PURE__ */ (0, w.jsx)("div", {
			className: "section-preview-images",
			"aria-hidden": "true",
			children: t.slice(0, 3).map((e, n) => {
				let { src: r, alt: i = "", fallback: a } = typeof e == "string" ? { src: e } : e;
				return /* @__PURE__ */ (0, w.jsx)("div", {
					className: "section-preview-image",
					style: {
						"--stack-left": `${n * 10}%`,
						"--fan-left": `${n * 24}%`,
						"--fan-rotate": `${n * 5 - 5}deg`,
						zIndex: t.length - n
					},
					children: /* @__PURE__ */ (0, w.jsx)("img", {
						src: r,
						alt: i,
						title: i,
						loading: "lazy",
						decoding: "async",
						width: 576,
						height: 380,
						onError: a ? (e) => {
							let t = e.currentTarget;
							t.dataset.fallback || (t.dataset.fallback = "true", t.src = a);
						} : void 0
					})
				}, r);
			})
		}),
		/* @__PURE__ */ (0, w.jsx)("p", { children: n }),
		/* @__PURE__ */ (0, w.jsxs)("span", {
			className: "section-preview-cta",
			children: ["Explore section ", /* @__PURE__ */ (0, w.jsx)("span", {
				"aria-hidden": "true",
				children: "→"
			})]
		})
	]
}));
T.displayName = "AnimatedHikeCard";
var E = {
	latest: [
		{
			src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
			alt: "Asynchronous Order Mutation & Webhook Failure Autopsy",
			fallback: "images/hero-cards/project-update.svg"
		},
		{
			src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
			alt: "Order State Machine & Point-of-No-Return (PONR) Protocol",
			fallback: "images/hero-cards/project-update.svg"
		},
		{
			src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
			alt: "Bi-Coastal Multi-Node Routing Engine & Freight Optimization",
			fallback: "images/hero-cards/project-update.svg"
		}
	],
	projects: [
		{
			src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
			alt: "Asynchronous Order Mutation & Webhook Failure",
			fallback: "images/hero-cards/projects.svg"
		},
		{
			src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
			alt: "Order State Machine & Point-of-No-Return (PONR) Protocol",
			fallback: "images/hero-cards/projects.svg"
		},
		{
			src: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
			alt: "Bi-Coastal Multi-Node Routing Engine & Freight Optimization",
			fallback: "images/hero-cards/projects.svg"
		}
	],
	testimonials: [
		{
			src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
			alt: "David F.",
			fallback: "images/hero-cards/feedback.svg"
		},
		{
			src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
			alt: "Sarah L.",
			fallback: "images/hero-cards/feedback.svg"
		},
		{
			src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
			alt: "Marcus K.",
			fallback: "images/hero-cards/feedback.svg"
		}
	]
}, D = [
	{
		title: "Latest Updates",
		href: "latest/",
		images: E.latest,
		description: "Recent project releases, operational improvements, and technical investigations from the activity timeline."
	},
	{
		title: "Projects",
		href: "projects/",
		images: E.projects,
		description: "Six operational domains and a capstone investigation, covering fulfillment, catalog governance, automation, and support."
	},
	{
		title: "About Me",
		href: "about/",
		images: [
			{
				src: "images/susas_profilepic.jpg",
				alt: "Riovic Matthew Susas"
			},
			{
				src: "images/hero-cards/systems.svg",
				alt: "Connected systems illustration"
			},
			{
				src: "images/hero-cards/workspace.svg",
				alt: "Technical workspace illustration"
			}
		],
		description: "My engineering background, certifications, technical approach, and résumé."
	},
	{
		title: "Testimonials",
		href: "testimonials/",
		images: E.testimonials,
		description: "Client perspectives on automation, margin protection, catalog work, and frontline operations."
	}
];
// src/section-cards.tsx
function O({ layout: e }) {
	let t = (0, r.useRef)(null), n = (0, r.useRef)({
		active: !1,
		moved: !1,
		x: 0,
		scroll: 0
	}), [i, a] = (0, r.useState)(0), o = (e) => {
		let n = t.current;
		if (!n) return;
		let r = n.clientWidth + 16;
		n.scrollTo({
			left: n.scrollLeft + e * r,
			behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
		});
	};
	return e === "stack" ? /* @__PURE__ */ (0, w.jsx)("nav", {
		className: "mobile-section-cards",
		"aria-label": "Portfolio sections",
		children: D.map((e) => /* @__PURE__ */ (0, w.jsx)(T, { ...e }, e.href))
	}) : /* @__PURE__ */ (0, w.jsxs)("section", {
		className: "desktop-section-carousel",
		"aria-label": "Explore portfolio",
		children: [/* @__PURE__ */ (0, w.jsx)("div", {
			className: "desktop-section-track",
			ref: t,
			tabIndex: 0,
			onScroll: () => {
				let e = t.current;
				e && a(e.scrollLeft / Math.max(1, e.scrollWidth - e.clientWidth));
			},
			onKeyDown: (e) => {
				(e.key === "ArrowRight" || e.key === "ArrowLeft") && (e.preventDefault(), o(e.key === "ArrowRight" ? 1 : -1));
			},
			onDragStart: (e) => e.preventDefault(),
			onPointerDown: (e) => {
				e.pointerType === "mouse" && e.button === 0 && (n.current = {
					active: !0,
					moved: !1,
					x: e.clientX,
					scroll: e.currentTarget.scrollLeft
				});
			},
			onPointerMove: (e) => {
				let t = n.current;
				if (!t.active) return;
				let r = e.clientX - t.x;
				Math.abs(r) > 6 && (t.moved = !0, e.currentTarget.setPointerCapture(e.pointerId), e.currentTarget.classList.add("is-dragging")), t.moved && (e.preventDefault(), e.currentTarget.scrollLeft = t.scroll - r);
			},
			onPointerUp: (e) => {
				n.current.active = !1, e.currentTarget.classList.remove("is-dragging"), e.currentTarget.hasPointerCapture(e.pointerId) && e.currentTarget.releasePointerCapture(e.pointerId);
			},
			onPointerCancel: () => {
				n.current.active = !1, t.current?.classList.remove("is-dragging");
			},
			onClickCapture: (e) => {
				n.current.moved && (e.preventDefault(), n.current.moved = !1);
			},
			children: D.map((e) => /* @__PURE__ */ (0, w.jsx)(T, { ...e }, e.href))
		}), /* @__PURE__ */ (0, w.jsxs)("div", {
			className: "desktop-section-controls",
			children: [
				/* @__PURE__ */ (0, w.jsx)("button", {
					type: "button",
					onClick: () => o(-1),
					disabled: i < .01,
					"aria-label": "Previous portfolio cards",
					children: /* @__PURE__ */ (0, w.jsx)(y, { size: 15 })
				}),
				/* @__PURE__ */ (0, w.jsx)("div", {
					className: "desktop-page-dots",
					role: "group",
					"aria-label": "Portfolio carousel pages",
					children: [0, 1].map((e) => /* @__PURE__ */ (0, w.jsx)("button", {
						type: "button",
						className: "desktop-page-dot",
						"aria-label": `Show portfolio cards ${e * 2 + 1} and ${e * 2 + 2}`,
						"aria-current": (i < .5 ? 0 : 1) === e ? "true" : "false",
						onClick: () => {
							let n = t.current;
							n && n.scrollTo({
								left: e === 0 ? 0 : n.scrollWidth - n.clientWidth,
								behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
							});
						}
					}, e))
				}),
				/* @__PURE__ */ (0, w.jsx)("button", {
					type: "button",
					onClick: () => o(1),
					disabled: i > .99,
					"aria-label": "Next portfolio cards",
					children: /* @__PURE__ */ (0, w.jsx)(x, { size: 15 })
				})
			]
		})]
	});
}
export { x as n, O as t };
