import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as Factory, d as ArrowRight, i as Scale, r as Sparkles } from "../_libs/lucide-react.mjs";
import { d as Button, f as SHOP, i as useShopStore, m as formatWon, r as useConsult } from "./router-CLUrqHMP.mjs";
import { n as PriceBoard, t as Calculator } from "./price-board-Bf7yMP_0.mjs";
import { t as ProductCard } from "./product-card-Dxl5dUyk.mjs";
import { t as PRODUCTS } from "./products-D-t31Thm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-pm12-nVp.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const { openConsult } = useConsult();
	const rates = useShopStore((s) => s.rates);
	const featured = PRODUCTS.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-[88svh] overflow-hidden bg-night text-ivory",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/hero.jpg",
					alt: "",
					className: "absolute inset-0 size-full object-cover opacity-55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-r from-night via-night/80 to-night/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[88svh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-[0.28em] text-gold",
							children: "SONGPA · CHEONHO · FACTORY"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-4 max-w-xl font-display text-5xl leading-[1.05] sm:text-7xl",
							children: [
								"오늘 금값으로",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"투명하게."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-5 max-w-md text-sm leading-relaxed text-ivory/75 sm:text-base",
							children: [
								SHOP.tagline,
								". 순금 1돈 살 때",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums text-ivory",
									children: formatWon(rates.gold24Buy)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#calculator",
									children: "내 금 지금 얼마인지 계산"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "cream",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/shop",
									children: "오늘 시세로 구매 견적"
								})
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-3 px-4 py-10 sm:px-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scale, { className: "size-5" }),
					title: "금 팔기",
					text: "시세·순도·중량·공제를 계산기로 먼저 보여드립니다.",
					href: "/sell"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-5" }),
					title: "금 사기 · 맞춤",
					text: "14K·18K·24K 공장 제작. 오늘 재료비+공임으로 견적.",
					href: "/shop"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Factory, { className: "size-5" }),
					title: "공장 직영",
					text: "제조·도매·소매가 한 구조라 중간 마진이 없습니다.",
					href: "/visit"
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "calculator",
			className: "scroll-mt-24 bg-paper py-16 sm:py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceBoard, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] text-gold-deep",
						children: "CALCULATOR"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "내 금 계산기"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 mb-6 max-w-md text-sm leading-relaxed text-muted",
						children: "계산기가 돈을 버는 게 아닙니다. 정확한 감정과 방문으로 연결합니다."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { onConsult: (payload) => openConsult({
						type: payload.type,
						message: payload.message,
						estimate: payload.estimate
					}) })
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-[0.2em] text-gold-deep",
					children: "READY TO ORDER"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-4xl",
					children: "오늘 시세로 맞추기"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					className: "inline-flex items-center gap-1 text-sm text-ink",
					children: ["전체 보기 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-night text-ivory",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/atelier.jpg",
					alt: "황금시대 공방",
					className: "aspect-video w-full rounded-lg object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.2em] text-gold",
						children: "ATELIER"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-4xl",
						children: "공장에서 매장까지"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-ivory/70",
						children: "일반 금은방과 다릅니다. 소량 제작, 디자인 변형, 보유 금 리셋팅, 빠른 납기가 가능합니다. 지금은 천호 매장에서 유입과 구매 숫자를 먼저 만듭니다."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-2 text-sm text-ivory/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "소량 · OEM 제작" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "커플링 · 예물 · 돌반지" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "폐금 매입 후 새 제품 교환" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "mt-8",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/visit",
							children: "매장 방문 예약"
						})
					})
				] })]
			})
		})
	] });
}
function Feature({ icon, title, text, href }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		className: "rounded-lg border border-line bg-cream p-5 hover:border-gold",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-gold-deep",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 font-display text-2xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm leading-relaxed text-muted",
				children: text
			})
		]
	});
}
//#endregion
export { Home as component };
