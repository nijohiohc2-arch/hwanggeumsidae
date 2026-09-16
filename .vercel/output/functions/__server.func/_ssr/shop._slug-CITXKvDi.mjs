import { R as notFound, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as estimateBuy, d as Button, i as useShopStore, m as formatWon, n as Route, r as useConsult } from "./router-CLUrqHMP.mjs";
import { n as getProduct } from "./products-D-t31Thm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop._slug-CITXKvDi.js
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const product = getProduct(slug);
	const { openConsult } = useConsult();
	const rates = useShopStore((s) => s.rates);
	if (!product) throw notFound();
	const price = estimateBuy({
		karat: product.karat,
		grams: product.grams,
		labor: product.labor,
		rates
	});
	const estimate = `${product.name} · ${product.karat} ${product.grams}g · 예상 ${formatWon(price.total)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: product.image,
			alt: product.name,
			className: "aspect-square w-full rounded-lg object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:py-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "text-sm text-muted hover:text-ink",
					children: "구매 목록"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs tracking-[0.16em] text-gold-deep",
					children: [
						product.karat,
						" · ",
						product.grams,
						"g · ",
						product.stock === "ready" ? "재고" : "주문제작"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl sm:text-5xl",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted",
					children: product.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-display text-4xl tabular-nums",
					children: formatWon(price.total)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: ["오늘 시세 예상가 · 제작 ", product.leadDays]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "재료비",
							v: formatWon(price.material)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "공임",
							v: formatWon(price.labor)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "부가세 10%",
							v: formatWon(price.vat)
						}),
						product.options ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "옵션",
							v: product.options
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-3 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						className: "flex-1",
						onClick: () => openConsult({
							type: "buy",
							productSlug: product.slug,
							estimate,
							message: estimate
						}),
						children: "오늘 시세로 구매 문의"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: "outline",
						className: "flex-1",
						onClick: () => openConsult({
							type: "visit",
							productSlug: product.slug,
							message: `${product.name} 실물 보고 싶습니다.`
						}),
						children: "방문하고 실물 보기"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xs leading-relaxed text-muted",
					children: "온라인 즉시 결제는 다음 단계입니다. 지금은 견적 확정 후 방문 수령 또는 예약금으로 진행합니다."
				})
			]
		})]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between border-b border-line py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "tabular-nums text-ink",
			children: v
		})]
	});
}
//#endregion
export { ProductPage as component };
