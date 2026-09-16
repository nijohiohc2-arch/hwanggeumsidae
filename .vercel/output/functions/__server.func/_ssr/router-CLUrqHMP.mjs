import { i as __toESM } from "../_runtime.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Phone, n as TriangleAlert, o as MessageCircle, t as X, u as Calculator } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, c as Slot, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-DAJJipId.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatWon(value) {
	return `${Math.round(value).toLocaleString("ko-KR")}원`;
}
function formatWonShort(value) {
	return Math.round(value).toLocaleString("ko-KR");
}
var SHOP = {
	name: "황금시대",
	nameEn: "HWANGGEUM SIDAE",
	tagline: "공장에서 매장까지, 오늘의 금값으로 투명하게",
	phone: "0507-1345-3180",
	phoneHref: "tel:050713453180",
	smsHref: "sms:050713453180",
	address: "서울 송파구 천호대로 992 1층",
	addressLine2: "천호역 10번 출구에서 30m",
	hours: "매일 10:00 – 19:00",
	hoursNote: "시세·재고는 방문 감정 기준",
	parking: "매장 앞 단기 주차 가능 · 방문 전 연락 권장",
	naverPlace: "https://naver.me/GOhWHrw8",
	naverMap: "https://map.naver.com/p/entry/place/1912557373",
	kakaoDefault: ""
};
var INQUIRY_TYPES = [
	{
		id: "sell",
		label: "금 매입"
	},
	{
		id: "buy",
		label: "구매 견적"
	},
	{
		id: "custom",
		label: "맞춤 제작"
	},
	{
		id: "visit",
		label: "방문 예약"
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CLUrqHMP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors duration-150 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60", {
	variants: {
		variant: {
			gold: "bg-gold text-ivory hover:bg-gold-deep",
			ink: "bg-ink text-ivory hover:bg-ink-soft",
			night: "bg-night text-ivory hover:bg-night-2",
			outline: "border border-line bg-transparent text-ink hover:bg-paper",
			ghost: "text-ink hover:bg-paper",
			cream: "bg-cream text-ink border border-line hover:bg-paper"
		},
		size: {
			sm: "h-9 px-3",
			md: "h-11 px-4",
			lg: "h-12 px-5 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "gold",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-line bg-cream px-3 text-sm text-ink placeholder:text-muted outline-none focus-visible:ring-2 focus-visible:ring-gold/50", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-28 w-full rounded-md border border-line bg-cream px-3 py-2 text-sm text-ink placeholder:text-muted outline-none focus-visible:ring-2 focus-visible:ring-gold/50", className),
		...props
	});
}
var DON_GRAMS = 3.75;
var DEFAULT_RATES = {
	gold24Buy: 83e4,
	gold24Sell: 706e3,
	gold18Sell: 52e4,
	gold14Sell: 405e3,
	platinumSell: 271e3,
	silverSell: 10200,
	jewelryFactor: .97,
	goldbarFactor: 1,
	dentalFactor: .9,
	labor14PerGram: 22e3,
	labor18PerGram: 26e3,
	labor24PerGram: 8e3,
	updatedAt: "2026-09-12 10:00",
	prevGold24Buy: 841e3,
	prevGold24Sell: 716e3
};
var PURITY = {
	"24K": .999,
	"18K": .75,
	"14K": .585
};
function gramsToDon(grams) {
	return grams / DON_GRAMS;
}
function itemFactor(item, rates) {
	if (item === "goldbar") return rates.goldbarFactor;
	if (item === "dental") return rates.dentalFactor;
	return rates.jewelryFactor;
}
function sellPerDon(karat, rates) {
	if (karat === "24K") return rates.gold24Sell;
	if (karat === "18K") return rates.gold18Sell;
	if (karat === "14K") return rates.gold14Sell;
	return rates.gold18Sell;
}
function estimateSell(input) {
	const grams = Math.max(0, input.grams);
	const don = gramsToDon(grams);
	const perDon = sellPerDon(input.karat, input.rates);
	const factor = itemFactor(input.item, input.rates);
	const purity = input.karat === "unknown" ? PURITY["18K"] : PURITY[input.karat];
	const fineGoldGrams = grams * (input.karat === "unknown" ? PURITY["18K"] : purity);
	const amount = Math.round(perDon * don * factor);
	return {
		grams,
		don,
		perDon,
		factor,
		purity: input.karat === "unknown" ? PURITY["18K"] : purity,
		fineGoldGrams,
		amount,
		karatLabel: input.karat === "unknown" ? "18K 가정" : input.karat
	};
}
function estimateBuy(input) {
	const grams = Math.max(0, input.grams);
	const purity = PURITY[input.karat];
	const material = Math.round(input.rates.gold24Buy * gramsToDon(grams) * purity);
	const labor = Math.round(input.labor);
	const subtotal = material + labor;
	const vat = Math.round(subtotal * .1);
	return {
		grams,
		don: gramsToDon(grams),
		purity,
		material,
		labor,
		vat,
		total: subtotal + vat
	};
}
function defaultLabor(karat, grams, rates) {
	const perGram = karat === "24K" ? rates.labor24PerGram : karat === "18K" ? rates.labor18PerGram : rates.labor14PerGram;
	return Math.round(perGram * Math.max(grams, .8));
}
var useShopStore = create()(persist((set, get) => ({
	rates: DEFAULT_RATES,
	kakaoUrl: SHOP.kakaoDefault,
	inquiries: [],
	setRates: (rates) => set({ rates }),
	setKakaoUrl: (kakaoUrl) => set({ kakaoUrl }),
	addInquiry: (inquiry) => {
		const row = {
			...inquiry,
			id: crypto.randomUUID(),
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		set({ inquiries: [row, ...get().inquiries].slice(0, 80) });
		return row;
	}
}), {
	name: "hwanggeum-sidae",
	skipHydration: true
}));
function ConsultDialog({ open, onOpenChange, defaultType = "buy", defaultMessage = "", productSlug, estimate }) {
	const addInquiry = useShopStore((s) => s.addInquiry);
	const kakaoUrl = useShopStore((s) => s.kakaoUrl);
	const [sent, setSent] = (0, import_react.useState)(false);
	const [type, setType] = (0, import_react.useState)(defaultType);
	function submit(e) {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		addInquiry({
			name: String(form.get("name") ?? ""),
			phone: String(form.get("phone") ?? ""),
			type,
			message: String(form.get("message") ?? ""),
			visitDate: String(form.get("visitDate") ?? ""),
			productSlug,
			estimate
		});
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (next) => {
			if (!next) setSent(false);
			onOpenChange(next);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-night/55" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "fixed inset-x-4 top-[8%] z-50 mx-auto max-h-[84vh] max-w-lg overflow-y-auto rounded-xl bg-ivory p-5 shadow-xl outline-none sm:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-2xl text-ink",
					children: "상담 요청"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
					className: "mt-1 text-sm text-muted",
					children: "예상가는 참고입니다. 최종 금액은 매장 감정 후 확정됩니다."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
					className: "flex size-11 items-center justify-center rounded-md text-ink hover:bg-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md bg-paper px-4 py-3 text-sm leading-relaxed text-ink-soft",
						children: "요청이 접수되었습니다. 지금 전화하거나 문자로 이어가시면 더 빠릅니다."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: SHOP.phoneHref,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "전화"]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: kakaoUrl || SHOP.smsHref,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), kakaoUrl ? "카카오" : "문자"]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							className: "w-full",
							children: "닫기"
						})
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: submit,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: INQUIRY_TYPES.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setType(t.id),
							className: cn("h-10 rounded-full border px-3 text-sm", type === t.id ? "border-ink bg-ink text-ivory" : "border-line bg-cream text-ink-soft"),
							children: t.label
						}, t.id))
					}),
					estimate ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "rounded-md border border-line bg-cream px-3 py-2 text-sm tabular-nums text-ink-soft",
						children: estimate
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs text-muted",
						children: ["이름", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "name",
							required: true,
							className: "mt-1",
							placeholder: "김지수"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs text-muted",
						children: ["연락처", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "phone",
							required: true,
							inputMode: "tel",
							className: "mt-1",
							placeholder: "010-0000-0000"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs text-muted",
						children: ["방문 희망일", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "visitDate",
							type: "date",
							className: "mt-1"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs text-muted",
						children: ["메모 · 사진 설명", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							name: "message",
							className: "mt-1",
							defaultValue: defaultMessage,
							placeholder: "중량, 순도, 원하는 사이즈를 적어주세요."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						className: "w-full",
						size: "lg",
						children: "상담 요청 보내기"
					})
				]
			})]
		})] })
	});
}
var ConsultContext = (0, import_react.createContext)(null);
var ConsultProvider = ConsultContext.Provider;
function useConsult() {
	const ctx = (0, import_react.useContext)(ConsultContext);
	if (!ctx) throw new Error("ConsultProvider missing");
	return ctx;
}
function SiteHeader() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-line/80 bg-ivory/92 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex flex-col leading-none",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl tracking-tight text-ink",
						children: SHOP.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-0.5 text-[10px] tracking-[0.22em] text-gold-deep",
						children: SHOP.nameEn
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-6 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: cn("text-sm hover:text-ink", pathname === "/" ? "text-ink" : "text-ink-soft"),
							children: "홈"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/#calculator",
							className: "text-sm text-ink-soft hover:text-ink",
							children: "금값 계산"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sell",
							className: cn("text-sm hover:text-ink", pathname === "/sell" ? "text-ink" : "text-ink-soft"),
							children: "금 매입"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: cn("text-sm hover:text-ink", pathname.startsWith("/shop") ? "text-ink" : "text-ink-soft"),
							children: "구매"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/visit",
							className: cn("text-sm hover:text-ink", pathname === "/visit" ? "text-ink" : "text-ink-soft"),
							children: "방문"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: SHOP.phoneHref,
					className: "hidden h-10 items-center rounded-md bg-ink px-3 text-sm text-ivory md:inline-flex",
					children: SHOP.phone
				})
			]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-line bg-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: SHOP.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xs text-sm leading-relaxed text-muted",
					children: SHOP.tagline
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: SHOP.address }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: SHOP.addressLine2
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: SHOP.hours
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1",
							children: SHOP.parking
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "block text-ink hover:underline",
							href: SHOP.phoneHref,
							children: SHOP.phone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "mt-2 block text-gold-deep hover:underline",
							href: SHOP.naverPlace,
							children: "네이버 플레이스"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/manage",
							className: "mt-4 block text-xs text-muted hover:text-ink",
							children: "오늘의 시세 관리"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "border-t border-line px-4 py-4 text-center text-xs text-muted",
			children: ["표시 가격은 예상가입니다. 순도·중량·공임 감정 후 최종 확정 · ", SHOP.name]
		})]
	});
}
function StickyCta({ onConsult }) {
	const kakaoUrl = useShopStore((s) => s.kakaoUrl);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-line bg-ivory/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/#calculator",
					className: "flex h-14 flex-col items-center justify-center gap-0.5 text-[11px] text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "size-4" }), "계산기"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onConsult,
					className: "flex h-14 flex-col items-center justify-center gap-0.5 bg-gold text-[11px] text-ivory",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-4" }), kakaoUrl ? "카카오" : "상담"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: SHOP.phoneHref,
					className: "flex h-14 flex-col items-center justify-center gap-0.5 text-[11px] text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), "전화"]
				})
			]
		})
	});
}
function AppShell() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		useShopStore.persist.rehydrate();
	}, []);
	const value = (0, import_react.useMemo)(() => ({ openConsult: (next) => {
		setDraft(next ?? {});
		setOpen(true);
	} }), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultProvider, {
		value,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-dvh bg-ivory pb-16 text-ink md:pb-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyCta, { onConsult: () => value.openConsult({ type: "visit" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultDialog, {
					open,
					onOpenChange: setOpen,
					defaultType: draft.type,
					defaultMessage: draft.message,
					estimate: draft.estimate,
					productSlug: draft.productSlug
				}, `${draft.type}-${draft.estimate}-${open}`)
			]
		})
	});
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-DjQXeK_I.css";
var APP_NAME = "황금시대";
var Route$6 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "송파 천호 황금시대 — 오늘 금값 계산, 금 매입, 공장 직영 주얼리 견적"
			},
			{
				name: "theme-color",
				content: "#1A1612"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Noto+Sans+KR:wght@400;500;600&family=Noto+Serif+KR:wght@500;600&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ko",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-pm12-nVp.mjs");
var Route$5 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./manage-Bmp12K84.mjs");
var Route$4 = createFileRoute("/manage")({ component: lazyRouteComponent($$splitComponentImporter$4, "component") });
var $$splitComponentImporter$3 = () => import("./sell-1Zw-EE0S.mjs");
var Route$3 = createFileRoute("/sell")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./shop-D6Mflub6.mjs");
var Route$2 = createFileRoute("/shop")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./visit-BdAzRiZi.mjs");
var Route$1 = createFileRoute("/visit")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitNotFoundComponentImporter = () => import("./shop._slug-D2bfTAdD.mjs");
var $$splitComponentImporter = () => import("./shop._slug-CITXKvDi.mjs");
var Route = createFileRoute("/shop/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent")
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var ManageRoute = Route$4.update({
	id: "/manage",
	path: "/manage",
	getParentRoute: () => Route$6
});
var SellRoute = Route$3.update({
	id: "/sell",
	path: "/sell",
	getParentRoute: () => Route$6
});
var ShopRoute = Route$2.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$6
});
var VisitRoute = Route$1.update({
	id: "/visit",
	path: "/visit",
	getParentRoute: () => Route$6
});
var ShopRouteChildren = { ShopSlugRoute: Route.update({
	id: "/$slug",
	path: "/$slug",
	getParentRoute: () => ShopRoute
}) };
var rootRouteChildren = {
	IndexRoute,
	ManageRoute,
	SellRoute,
	ShopRoute: ShopRoute._addFileChildren(ShopRouteChildren),
	VisitRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { DEFAULT_RATES as a, estimateBuy as c, Button as d, SHOP as f, formatWonShort as h, useShopStore as i, estimateSell as l, formatWon as m, Route as n, DON_GRAMS as o, cn as p, useConsult as r, defaultLabor as s, router_exports as t, Input as u };
