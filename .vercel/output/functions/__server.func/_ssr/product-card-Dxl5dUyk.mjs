import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as estimateBuy, i as useShopStore, m as formatWon } from "./router-CLUrqHMP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-Dxl5dUyk.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const rates = useShopStore((s) => s.rates);
	const price = estimateBuy({
		karat: product.karat,
		grams: product.grams,
		labor: product.labor,
		rates
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/shop/$slug",
		params: { slug: product.slug },
		className: "group block overflow-hidden rounded-lg border border-line bg-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-square overflow-hidden bg-night",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.name,
				className: "size-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs tracking-[0.14em] text-gold-deep",
					children: [
						product.karat,
						" · ",
						product.grams,
						"g"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-display text-xl text-ink",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-medium tabular-nums text-ink",
					children: formatWon(price.total)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-xs text-muted",
					children: ["오늘 시세 예상가 · ", product.leadDays]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
