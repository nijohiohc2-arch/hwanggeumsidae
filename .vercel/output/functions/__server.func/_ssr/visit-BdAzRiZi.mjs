import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Phone, l as Clock, s as MapPin } from "../_libs/lucide-react.mjs";
import { d as Button, f as SHOP, r as useConsult } from "./router-CLUrqHMP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/visit-BdAzRiZi.js
var import_jsx_runtime = require_jsx_runtime();
function VisitPage() {
	const { openConsult } = useConsult();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.2em] text-gold-deep",
				children: "VISIT"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl sm:text-5xl",
				children: "방문 · 상담"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-lg text-sm text-muted",
				children: "계산과 견적은 온라인, 확정은 천호 매장에서. 감정 저울을 앞에서 보여드립니다."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-lg border border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "황금시대 지도",
						className: "h-[320px] w-full lg:h-full min-h-[320px]",
						src: "https://map.naver.com/p/entry/place/1912557373?c=15.00,0,0,0,dh"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-line bg-cream p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-3xl",
							children: SHOP.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-6 space-y-4 text-sm text-ink-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										SHOP.address,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										SHOP.addressLine2
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mt-0.5 size-4 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										SHOP.hours,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										SHOP.hoursNote
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 size-4 text-gold-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: SHOP.phoneHref,
										className: "underline-offset-2 hover:underline",
										children: SHOP.phone
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm text-muted",
							children: SHOP.parking
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								onClick: () => openConsult({ type: "visit" }),
								children: "방문 예약하기"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: SHOP.naverPlace,
									target: "_blank",
									rel: "noreferrer",
									children: "네이버 길찾기"
								})
							})]
						})
					]
				})]
			})
		]
	});
}
//#endregion
export { VisitPage as component };
