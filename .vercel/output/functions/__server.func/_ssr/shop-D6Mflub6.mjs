import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { p as cn } from "./router-CLUrqHMP.mjs";
import { t as ProductCard } from "./product-card-Dxl5dUyk.mjs";
import { t as PRODUCTS } from "./products-D-t31Thm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-D6Mflub6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	{
		id: "all",
		label: "전체"
	},
	{
		id: "14K",
		label: "14K"
	},
	{
		id: "18K",
		label: "18K"
	},
	{
		id: "24K",
		label: "24K"
	},
	{
		id: "couple",
		label: "커플·예물"
	},
	{
		id: "gift",
		label: "선물"
	}
];
function ShopPage() {
	const [filter, setFilter] = (0, import_react.useState)("all");
	const list = (0, import_react.useMemo)(() => filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category.includes(filter)), [filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.2em] text-gold-deep",
				children: "SHOP"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl sm:text-5xl",
				children: "오늘 시세로 구매"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-xl text-sm leading-relaxed text-muted",
				children: "가격은 당일 순금 시세에 재료비·공임·부가세를 더한 예상가입니다. 결제 전 카톡·전화로 확정한 뒤 방문 수령합니다."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 flex flex-wrap gap-2",
				children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setFilter(f.id),
					className: cn("h-10 rounded-full border px-4 text-sm", filter === f.id ? "border-ink bg-ink text-ivory" : "border-line text-ink-soft"),
					children: f.label
				}, f.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			})
		]
	});
}
//#endregion
export { ShopPage as component };
