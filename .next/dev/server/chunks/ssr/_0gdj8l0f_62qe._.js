module.exports = [
(()=>{"use strict";return[
"[project]/app/layout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Navbar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhatsAppButton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WhatsAppButton.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    metadataBase: new URL(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].siteUrl),
    title: {
        default: "Iai-Neh Homestay | Peaceful Homestay in Smit, Meghalaya",
        template: "%s | Iai-Neh Homestay"
    },
    description: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].description,
    applicationName: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name,
    category: "travel",
    alternates: {
        canonical: "/"
    },
    robots: {
        index: true,
        follow: true
    },
    openGraph: {
        title: "Iai-Neh Homestay | Smit, Meghalaya",
        description: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].description,
        url: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].siteUrl,
        siteName: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name,
        locale: "en_IN",
        type: "website"
    },
    twitter: {
        card: "summary_large_image"
    },
    verification: {
        google: "CrMYoTHG4XiaQx_s3E8ROw-PlpGxd3UWTk-Qjl2d5cc"
    }
};
function RootLayout({ children }) {
    const lodgingSchema = {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        name: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].name,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].description,
        telephone: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].phone,
        address: {
            "@type": "PostalAddress",
            streetAddress: "The way to Chandara Park, Lum-Kynsai",
            addressLocality: "Smit",
            addressRegion: "Meghalaya",
            postalCode: "793015",
            addressCountry: "IN"
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].rating),
            reviewCount: String(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].googleReviews)
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].coordinates.lat,
            longitude: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].coordinates.lng
        },
        url: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].siteUrl
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(lodgingSchema)
                    }
                }, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhatsAppButton$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/app/layout.js",
                    lineNumber: 68,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/layout.js",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.js",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Footer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.js [app-rsc] (ecmascript)");
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#142119] py-14 text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-shell grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-3xl",
                                children: "Iai-Neh"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 9,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 max-w-sm text-sm leading-6 text-white/60",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].tagline,
                                    ". A quiet stay in Smit, Meghalaya with warm local hospitality."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 10,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["whatsappLink"])(),
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "mt-6 inline-flex rounded-full bg-[#f2e7cf] px-5 py-3 text-sm font-semibold text-[#18251d]",
                                children: "WhatsApp the host"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 11,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-sm font-semibold uppercase tracking-[.2em] text-white/40",
                                children: "Explore"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3 text-sm text-white/70",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].nav.slice(1).map(([label, href])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: href,
                                        className: "block hover:text-white",
                                        children: label
                                    }, href, false, {
                                        fileName: "[project]/components/Footer.js",
                                        lineNumber: 16,
                                        columnNumber: 55
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 15,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4 text-sm font-semibold uppercase tracking-[.2em] text-white/40",
                                children: "Find us"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm leading-6 text-white/65",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].address
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "mt-3 block text-sm text-white/80 underline underline-offset-4",
                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].phone.replace(/\s/g, "")}`,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].phone
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                className: "mt-3 block text-sm text-white/80 underline underline-offset-4",
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["site"].mapUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "Open Google Maps"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.js",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.js",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-shell mt-12 border-t border-white/10 pt-5 text-xs text-white/40",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Iai-Neh Homestay. All rights reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.js",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/Navbar.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/Navbar.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/Navbar.js", "default");
}),
"[project]/components/Navbar.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/Navbar.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/WhatsAppButton.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/site.js [app-rsc] (ecmascript)");
;
;
function WhatsAppButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$site$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["whatsappLink"])(),
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Book Iai-Neh Homestay on WhatsApp",
        className: "fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#1f8f52] px-4 py-3 text-sm font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "grid size-7 place-items-center rounded-full bg-white/15",
                children: "↗"
            }, void 0, false, {
                fileName: "[project]/components/WhatsAppButton.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "hidden sm:inline",
                children: "Book on WhatsApp"
            }, void 0, false, {
                fileName: "[project]/components/WhatsAppButton.js",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WhatsAppButton.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/data/site.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "amenities",
    ()=>amenities,
    "faqs",
    ()=>faqs,
    "posts",
    ()=>posts,
    "rooms",
    ()=>rooms,
    "site",
    ()=>site,
    "whatsappLink",
    ()=>whatsappLink
]);
const site = {
    name: "Iai-Neh Homestay",
    shortName: "Iai-Neh",
    tagline: "A peaceful homestay in Smit, Meghalaya",
    description: "Stay at Iai-Neh Homestay in Smit, Meghalaya for warm local hospitality, homemade food and a peaceful village experience.",
    phone: "+91 96125 29072",
    whatsapp: "919612529072",
    address: "The way to Chandara Park, Lum-Kynsai, Smit, Meghalaya 793015",
    mapUrl: "https://maps.app.goo.gl/UAWKx8fR1GRy2ugX8?g_st=ac",
    googleReviews: 67,
    rating: 4.9,
    coordinates: {
        lat: 25.6105,
        lng: 91.5532
    },
    siteUrl: ("TURBOPACK compile-time value", "https://www.example.com") || "https://www.example.com",
    nav: [
        [
            "Home",
            "/"
        ],
        [
            "Stay",
            "/rooms"
        ],
        [
            "Experience",
            "/experiences"
        ],
        [
            "Gallery",
            "/gallery"
        ],
        [
            "Journal",
            "/blog"
        ],
        [
            "Contact",
            "/contact"
        ]
    ]
};
const amenities = [
    {
        icon: "⌂",
        title: "Homely atmosphere",
        text: "A quiet, comfortable place designed around the feeling of being at home."
    },
    {
        icon: "♨",
        title: "Homemade local food",
        text: "Enjoy authentic home-style meals and the flavours of Meghalaya."
    },
    {
        icon: "♡",
        title: "Warm hospitality",
        text: "Guests often mention the kind, helpful and welcoming hosts."
    },
    {
        icon: "⌖",
        title: "Peaceful village setting",
        text: "Slow down in Smit and enjoy a quieter side of Meghalaya."
    },
    {
        icon: "✦",
        title: "Local guidance",
        text: "Get practical help and local stories from people who know the area."
    },
    {
        icon: "◌",
        title: "Nearby food options",
        text: "The area has convenient options for eating nearby when you want variety."
    }
];
const rooms = [
    {
        slug: "the-homestay-room",
        name: "The Homestay Room",
        description: "A comfortable base for travellers who want a peaceful Smit stay with the warmth of a local home.",
        image: "/images/Image3.jpeg",
        alt: "Warmly furnished homestay bedroom with natural light",
        features: [
            "Comfortable sleeping space",
            "Quiet surroundings",
            "Homely atmosphere",
            "Local host support"
        ]
    },
    {
        slug: "the-family-stay",
        name: "The Family Stay",
        description: "A relaxed option for couples, families or friends looking for a slower Meghalaya experience.",
        image: "/images/Image6.jpeg",
        alt: "Bright comfortable guest room prepared for travellers",
        features: [
            "Relaxed setting",
            "Comfort-focused",
            "Local food available",
            "Village experience"
        ]
    }
];
const faqs = [
    {
        q: "Where is Iai-Neh Homestay located?",
        a: "Iai-Neh Homestay is on the way to Chandara Park in Lum-Kynsai, Smit, Meghalaya 793015."
    },
    {
        q: "How can I book a stay?",
        a: "For direct bookings and availability, message Iai-Neh Homestay on WhatsApp. The host can confirm dates, guests and stay details with you directly."
    },
    {
        q: "Does the homestay serve local food?",
        a: "Yes. Homemade authentic local meals are one of the experiences guests frequently appreciate."
    },
    {
        q: "Is Iai-Neh Homestay suitable for a peaceful getaway?",
        a: "Yes. The homestay is positioned as a quiet village stay in Smit, away from the feel of a busy city hotel."
    },
    {
        q: "Can the host help with local information?",
        a: "Guests have highlighted the helpful and friendly hosts, including their willingness to share local guidance and stories."
    }
];
const posts = [
    {
        slug: "a-slow-travel-guide-to-smit-meghalaya",
        title: "A Slow Travel Guide to Smit, Meghalaya",
        excerpt: "Why Smit is worth experiencing when you want to see a quieter, more local side of Meghalaya.",
        date: "2026-09-18",
        category: "Smit Guide",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=82",
        alt: "Green mountain landscape representing a peaceful Meghalaya journey"
    },
    {
        slug: "what-to-expect-from-a-meghalaya-homestay",
        title: "What to Expect From a Meghalaya Homestay",
        excerpt: "A practical look at the small details that make a local homestay different from a standard hotel.",
        date: "2026-09-12",
        category: "Travel Notes",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1400&q=82",
        alt: "Cozy guest room prepared for a homestay stay"
    },
    {
        slug: "local-food-and-the-meghalaya-homestay-experience",
        title: "Local Food and the Meghalaya Homestay Experience",
        excerpt: "Food is often one of the best ways to understand a place. Here is why home-style meals matter when travelling in Meghalaya.",
        date: "2026-09-05",
        category: "Food & Culture",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=82",
        alt: "Home-style meal representing local food and hospitality"
    }
];
function whatsappLink(message = "Hi, I would like to enquire about staying at Iai-Neh Homestay.") {
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return _link.useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
const _link = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)"));
function LinkComponent(props) {
    const isLegacyBehavior = props.legacyBehavior;
    const childIsHostComponent = typeof props.children === 'string' || typeof props.children === 'number' || typeof props.children?.type === 'string';
    const childIsClientComponent = props.children?.type?.$$typeof === Symbol.for('react.client.reference');
    if (isLegacyBehavior && !childIsHostComponent && !childIsClientComponent) {
        if (props.children?.type?.$$typeof === Symbol.for('react.lazy')) {
            console.error(`Using a Lazy Component as a direct child of \`<Link legacyBehavior>\` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's \`<a>\` tag.`);
        } else {
            console.error(`Using a Server Component as a direct child of \`<Link legacyBehavior>\` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's \`<a>\` tag.`);
        }
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
        ...props
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
]})(),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js"));
}),
];

//# sourceMappingURL=_0gdj8l0f_62qe._.js.map