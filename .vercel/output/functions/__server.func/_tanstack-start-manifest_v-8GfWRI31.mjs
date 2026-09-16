//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-8GfWRI31.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/manage",
			"/sell",
			"/shop",
			"/visit"
		],
		preloads: ["/assets/index-BoLGnoXC.js", "/assets/jsx-runtime-Cltr0gcK.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-BoLGnoXC.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-BPcwOkRL.js",
			"/assets/price-board-DNfhRCEN.js",
			"/assets/product-card-B7afFho6.js",
			"/assets/products-WQAyS3xR.js"
		]
	},
	"/manage": {
		filePath: "/workspace/src/routes/manage.tsx",
		children: void 0,
		preloads: ["/assets/manage-C2A9RDrk.js"]
	},
	"/sell": {
		filePath: "/workspace/src/routes/sell.tsx",
		children: void 0,
		preloads: ["/assets/sell-C93kVmgB.js", "/assets/price-board-DNfhRCEN.js"]
	},
	"/shop": {
		filePath: "/workspace/src/routes/shop.tsx",
		children: ["/shop/$slug"],
		preloads: [
			"/assets/shop-B-LrrdTE.js",
			"/assets/product-card-B7afFho6.js",
			"/assets/products-WQAyS3xR.js"
		]
	},
	"/visit": {
		filePath: "/workspace/src/routes/visit.tsx",
		children: void 0,
		preloads: ["/assets/visit-s3erKnHl.js"]
	},
	"/shop/$slug": {
		filePath: "/workspace/src/routes/shop.$slug.tsx",
		children: void 0,
		preloads: ["/assets/shop._slug-BCKD-OCu.js", "/assets/shop._slug-CkhHrQ-R.js"]
	}
} });
//#endregion
export { tsrStartManifest };
