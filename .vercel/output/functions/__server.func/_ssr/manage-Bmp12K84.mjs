import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DEFAULT_RATES, d as Button, i as useShopStore, m as formatWon, u as Input } from "./router-CLUrqHMP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/manage-Bmp12K84.js
var import_jsx_runtime = require_jsx_runtime();
function ManagePage() {
	const rates = useShopStore((s) => s.rates);
	const setRates = useShopStore((s) => s.setRates);
	const kakaoUrl = useShopStore((s) => s.kakaoUrl);
	const setKakaoUrl = useShopStore((s) => s.setKakaoUrl);
	const inquiries = useShopStore((s) => s.inquiries);
	function save(e) {
		e.preventDefault();
		const f = new FormData(e.currentTarget);
		const num = (key) => Number(f.get(key)) || 0;
		const next = {
			...rates,
			gold24Buy: num("gold24Buy"),
			gold24Sell: num("gold24Sell"),
			gold18Sell: num("gold18Sell"),
			gold14Sell: num("gold14Sell"),
			platinumSell: num("platinumSell"),
			silverSell: num("silverSell"),
			jewelryFactor: Number(f.get("jewelryFactor")) || .97,
			goldbarFactor: Number(f.get("goldbarFactor")) || 1,
			dentalFactor: Number(f.get("dentalFactor")) || .9,
			updatedAt: String(f.get("updatedAt") || rates.updatedAt),
			prevGold24Buy: rates.gold24Buy,
			prevGold24Sell: rates.gold24Sell
		};
		setRates(next);
		setKakaoUrl(String(f.get("kakaoUrl") ?? ""));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-[0.2em] text-gold-deep",
				children: "STORE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl",
				children: "오늘의 시세 관리"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "아침마다 숫자만 바꾸면 계산기와 상품가가 함께 바뀝니다. 이 기기에 저장됩니다."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-8 space-y-4 rounded-lg border border-line bg-cream p-5",
				onSubmit: save,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "gold24Buy",
						label: "순금 살 때 1돈",
						defaultValue: rates.gold24Buy
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "gold24Sell",
						label: "순금 팔 때 1돈",
						defaultValue: rates.gold24Sell
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "gold18Sell",
						label: "18K 팔 때 1돈",
						defaultValue: rates.gold18Sell
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "gold14Sell",
						label: "14K 팔 때 1돈",
						defaultValue: rates.gold14Sell
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "platinumSell",
						label: "백금 팔 때 1돈",
						defaultValue: rates.platinumSell
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						name: "silverSell",
						label: "은 팔 때 1돈",
						defaultValue: rates.silverSell
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs text-muted",
						children: ["장신구 보정 (0.97 = 97%)", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "jewelryFactor",
							className: "mt-1",
							defaultValue: rates.jewelryFactor
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs text-muted",
						children: ["골드바 보정", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "goldbarFactor",
							className: "mt-1",
							defaultValue: rates.goldbarFactor
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs text-muted",
						children: ["금니 보정", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "dentalFactor",
							className: "mt-1",
							defaultValue: rates.dentalFactor
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs text-muted",
						children: ["기준 시각", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "updatedAt",
							className: "mt-1",
							defaultValue: rates.updatedAt
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs text-muted",
						children: ["카카오 채널 URL", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "kakaoUrl",
							className: "mt-1",
							defaultValue: kakaoUrl,
							placeholder: "https://pf.kakao.com/..."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: "저장"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "button",
							variant: "outline",
							onClick: () => setRates(DEFAULT_RATES),
							children: "기본값"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-12 font-display text-2xl",
				children: ["최근 상담 ", inquiries.length]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 space-y-3",
				children: inquiries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "아직 접수된 상담이 없습니다."
				}) : inquiries.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-md border border-line bg-cream p-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-medium",
							children: [
								row.name,
								" · ",
								row.phone,
								" · ",
								row.type
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted",
							children: row.estimate || row.message
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 text-xs text-muted",
							children: [new Date(row.createdAt).toLocaleString("ko-KR"), row.visitDate ? ` · 방문 ${row.visitDate}` : ""]
						})
					]
				}, row.id))
			})
		]
	});
}
function Field({ name, label, defaultValue }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-xs text-muted",
		children: [
			label,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				name,
				className: "mt-1 tabular-nums",
				defaultValue
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-[11px]",
				children: formatWon(defaultValue)
			})
		]
	});
}
//#endregion
export { ManagePage as component };
