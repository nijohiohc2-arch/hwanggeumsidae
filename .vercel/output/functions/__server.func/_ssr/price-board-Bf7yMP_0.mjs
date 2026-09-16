import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as estimateBuy, d as Button, h as formatWonShort, i as useShopStore, l as estimateSell, m as formatWon, o as DON_GRAMS, p as cn, s as defaultLabor, u as Input } from "./router-CLUrqHMP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/price-board-Bf7yMP_0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KARATS = [
	{
		id: "24K",
		label: "24K 순금"
	},
	{
		id: "18K",
		label: "18K"
	},
	{
		id: "14K",
		label: "14K"
	},
	{
		id: "unknown",
		label: "모름"
	}
];
var ITEMS = [
	{
		id: "ring",
		label: "반지"
	},
	{
		id: "necklace",
		label: "목걸이"
	},
	{
		id: "bracelet",
		label: "팔찌"
	},
	{
		id: "baby",
		label: "돌반지"
	},
	{
		id: "goldbar",
		label: "골드바"
	},
	{
		id: "dental",
		label: "금니"
	},
	{
		id: "other",
		label: "기타"
	}
];
function Calculator({ onConsult }) {
	const rates = useShopStore((s) => s.rates);
	const [mode, setMode] = (0, import_react.useState)("sell");
	const [karat, setKarat] = (0, import_react.useState)("18K");
	const [unit, setUnit] = (0, import_react.useState)("g");
	const [weight, setWeight] = (0, import_react.useState)("3.2");
	const [item, setItem] = (0, import_react.useState)("ring");
	const grams = (0, import_react.useMemo)(() => {
		const n = Number(weight);
		if (!Number.isFinite(n) || n <= 0) return 0;
		return unit === "don" ? n * DON_GRAMS : n;
	}, [weight, unit]);
	const sell = estimateSell({
		karat,
		grams,
		item,
		rates
	});
	const buyKarat = karat === "unknown" ? "18K" : karat;
	const buy = estimateBuy({
		karat: buyKarat,
		grams,
		labor: defaultLabor(buyKarat, grams, rates),
		rates
	});
	const result = mode === "sell" ? sell.amount : buy.total;
	const estimateLine = mode === "sell" ? `예상 매입가 ${formatWon(sell.amount)} · ${sell.karatLabel} ${grams.toFixed(2)}g` : `예상 구매가 ${formatWon(buy.total)} · ${buyKarat} ${grams.toFixed(2)}g`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl border border-line bg-cream p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 grid grid-cols-2 rounded-md bg-paper p-1",
				children: ["sell", "buy"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMode(m),
					className: cn("h-11 rounded-sm text-sm font-medium", mode === m ? "bg-ink text-ivory" : "text-ink-soft"),
					children: m === "sell" ? "내 금 팔기" : "금 맞추기"
				}, m))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs tracking-wide text-muted",
				children: "순도"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 flex flex-wrap gap-2",
				children: KARATS.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setKarat(k.id),
					className: cn("h-10 rounded-full border px-3 text-sm", karat === k.id ? "border-ink bg-ink text-ivory" : "border-line text-ink-soft"),
					children: k.label
				}, k.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 grid grid-cols-[1fr_auto] gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-xs text-muted",
					children: ["중량", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mt-1 tabular-nums",
						inputMode: "decimal",
						value: weight,
						onChange: (e) => setWeight(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "self-end flex rounded-md border border-line",
					children: ["g", "don"].map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setUnit(u),
						className: cn("h-11 w-14 text-sm", unit === u ? "bg-ink text-ivory" : "text-ink-soft"),
						children: u === "g" ? "g" : "돈"
					}, u))
				})]
			}),
			mode === "sell" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-xs tracking-wide text-muted",
				children: "품목"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-5 flex flex-wrap gap-2",
				children: ITEMS.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setItem(it.id),
					className: cn("h-10 rounded-full border px-3 text-sm", item === it.id ? "border-ink bg-ink text-ivory" : "border-line text-ink-soft"),
					children: it.label
				}, it.id))
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg bg-night px-4 py-5 text-ivory",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.16em] text-gold",
						children: mode === "sell" ? "예상 매입가" : "예상 제작가"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-4xl tabular-nums tracking-tight sm:text-5xl",
						children: grams > 0 ? formatWon(result) : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-ivory/70",
						children: "감정·스톤·마모에 따라 달라질 수 있습니다. 당일 시세 기준."
					})
				]
			}),
			grams > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-4 space-y-2 text-sm text-ink-soft",
				children: mode === "sell" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "적용 순도",
						v: sell.karatLabel
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "중량",
						v: `${sell.grams.toFixed(2)}g · ${sell.don.toFixed(3)}돈`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "1돈 매입가",
						v: formatWon(sell.perDon)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "품목 보정",
						v: `${Math.round(sell.factor * 100)}%`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "순금 환산",
						v: `${sell.fineGoldGrams.toFixed(2)}g`
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "재료비",
						v: formatWon(buy.material)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "공임",
						v: formatWon(buy.labor)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "부가세 10%",
						v: formatWon(buy.vat)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "합계",
						v: formatWon(buy.total)
					})
				] })
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-5 w-full",
				size: "lg",
				disabled: grams <= 0,
				onClick: () => onConsult({
					type: mode === "sell" ? "sell" : "custom",
					estimate: estimateLine,
					message: estimateLine
				}),
				children: "정확한 감정 · 견적 받기"
			})
		]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-4 border-b border-line/80 py-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "tabular-nums text-ink",
			children: v
		})]
	});
}
function PriceBoard({ tone = "light" }) {
	const rates = useShopStore((s) => s.rates);
	const dark = tone === "dark";
	const buyDelta = rates.gold24Buy - rates.prevGold24Buy;
	const sellDelta = rates.gold24Sell - rates.prevGold24Sell;
	const rows = [
		{
			name: "순금 24K",
			buy: rates.gold24Buy,
			sell: rates.gold24Sell
		},
		{
			name: "18K",
			buy: Math.round(rates.gold24Buy * .75),
			sell: rates.gold18Sell
		},
		{
			name: "14K",
			buy: Math.round(rates.gold24Buy * .585),
			sell: rates.gold14Sell
		},
		{
			name: "백금",
			buy: null,
			sell: rates.platinumSell
		},
		{
			name: "은",
			buy: null,
			sell: rates.silverSell
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: cn("rounded-xl border p-4 sm:p-6", dark ? "border-ivory/12 bg-night-2" : "border-line bg-cream"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("text-xs tracking-[0.18em]", dark ? "text-gold" : "text-gold-deep"),
					children: "TODAY · 1돈(3.75g)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: cn("font-display text-2xl", dark ? "text-ivory" : "text-ink"),
					children: "오늘 금값"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("text-right text-xs", dark ? "text-ivory/55" : "text-muted"),
					children: [
						"매장 적용가",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						rates.updatedAt
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cn("font-display text-4xl tabular-nums sm:text-5xl", dark ? "text-ivory" : "text-ink"),
					children: formatWon(rates.gold24Buy)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: cn("mt-1 text-sm", dark ? "text-ivory/70" : "text-muted"),
					children: [
						"순금 살 때 · ",
						deltaLabel(buyDelta),
						" · 팔 때 ",
						formatWonShort(rates.gold24Sell),
						"원",
						" ",
						deltaLabel(sellDelta)
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("grid grid-cols-3 gap-2 text-xs", dark ? "text-ivory/50" : "text-muted"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "구분" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-right",
						children: "살 때"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-right",
						children: "팔 때"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 space-y-2",
				children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("grid grid-cols-3 gap-2 border-t py-2 text-sm tabular-nums", dark ? "border-ivory/10" : "border-line"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: dark ? "text-ivory" : "text-ink",
							children: row.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("text-right", dark ? "text-ivory/80" : "text-ink-soft"),
							children: row.buy ? formatWonShort(row.buy) : "제품가"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("text-right", dark ? "text-ivory" : "text-ink"),
							children: formatWonShort(row.sell)
						})
					]
				}, row.name))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("mt-3 text-xs leading-relaxed", dark ? "text-ivory/45" : "text-muted"),
				children: "18K·14K 살 때는 재료비+공임+부가세가 붙는 제품가입니다. 최종가는 감정 후 확정됩니다."
			})
		]
	});
}
function deltaLabel(delta) {
	if (delta === 0) return "보합";
	const abs = Math.abs(delta).toLocaleString("ko-KR");
	return delta > 0 ? `▲ ${abs}원` : `▼ ${abs}원`;
}
//#endregion
export { PriceBoard as n, Calculator as t };
