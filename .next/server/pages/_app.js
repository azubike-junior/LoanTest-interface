(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@chakra-ui/react"
const react_namespaceObject = require("@chakra-ui/react");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/Navbar/index.tsx

function Navbar({ setOpen , open  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: !open && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "px-8 pt-6 flex lg:hidden xl:hidden 2xl:hidden",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "./menu.svg",
                    alt: "",
                    className: "lg:hidden",
                    onClick: ()=>setOpen(true)
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "./cloudbank-2.svg",
                    alt: "",
                    className: "mx-auto"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./helpers/classNames.ts
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

;// CONCATENATED MODULE: ./components/Sidebar/index.tsx




//
const Url = ({ icon , name , color , router , pathname , link  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: link,
        className: classNames(router === pathname && "bg-[#D7ECEC] rounded-lg p-2 px-3", "flex space-x-4 cursor-pointer"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: icon,
                alt: ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `sm:text-sm text-base 2xl:text-base text-[#489494] ${color}`,
                children: name
            })
        ]
    });
function Sidebar({ open  }) {
    const router = (0,router_namespaceObject.useRouter)().pathname;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: classNames(open && "fixed -left-4 sm:block md:block", `z-20 hidden xl:block 2xl:block lg:block top-0 fixed left-0 lg:w-[220px] 2xl:w-[250px] lg:left-0 transition-all  ease-in-out delay-150 bg-white w-[250px]  text-red-400 shadow-lg h-full`),
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "pt-16 flex justify-center ",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "./cloudbank.svg",
                        alt: ""
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "pt-12 sm:space-y-8 space-y-60 ",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "sm:space-y-8 space-y-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Url, {
                                        icon: "./home.svg",
                                        name: "Home",
                                        link: "/",
                                        pathname: "/",
                                        router: router
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Url, {
                                        icon: "./sendmoney.svg",
                                        name: "Send Money",
                                        link: "/ww",
                                        pathname: "/abb",
                                        router: router
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Url, {
                                        icon: "./investment.svg",
                                        name: "Investment",
                                        link: "/ww",
                                        pathname: "/aa",
                                        router: router
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Url, {
                                        icon: "./lona.svg",
                                        name: "Loan",
                                        link: "/ww",
                                        pathname: "/lls",
                                        router: router
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Url, {
                                        icon: "./cards.svg",
                                        name: "Cards",
                                        link: "/ww",
                                        pathname: "/lls"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Url, {
                                        icon: "./transactss.svg",
                                        name: "Transactions",
                                        link: "/ww",
                                        pathname: "/lls",
                                        router: router
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Url, {
                                        icon: "./marketplace.svg",
                                        name: "Marketplace",
                                        link: "/sss",
                                        pathname: "/lls",
                                        router: router
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Url, {
                                        icon: "./settings.svg",
                                        name: "Settings",
                                        link: "/dmd",
                                        pathname: "/lls",
                                        router: router
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Url, {
                                icon: "./logout.svg",
                                color: "text-red-600",
                                name: "Logout",
                                link: "/kmkm",
                                router: router
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Layout/index.tsx




function Layout({ children  }) {
    const [open, setOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex relative font-poppins",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {
                open: open
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full bg-[#F3F5FC] h-[100%]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {
                        setOpen: setOpen,
                        open: open
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: ()=>setOpen(false),
                        className: "py-10 2xl:py-20 2xl:pb-20 sm:pl-0 md:pl-0 pl-[250px] 2xl:pl-[250px] lg:pl-[220px] lg:py-16 xl:py-16",
                        children: children
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.tsx





//Theme Customization
const theme = (0,react_namespaceObject.extendTheme)({
    styles: {
        global: ()=>({
                body: {
                    bg: "#E5E5E5"
                }
            })
    },
    components: {
        Button: {
            variants: {
                solid: (props)=>({
                        bg: props.colorMode === "light" ? "ipcolor" : "null"
                    })
            },
            defaultProps: {
                colorScheme: "ipcolor"
            }
        }
    },
    space: {}
});
function App({ Component , pageProps , ...appProps }) {
    const isLayoutDashboard = [
        "/"
    ].includes(appProps.router.pathname);
    const LayoutComponent = isLayoutDashboard ? Layout : (external_react_default()).Fragment;
    return /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.ChakraProvider, {
        theme: theme,
        children: /*#__PURE__*/ jsx_runtime_.jsx(LayoutComponent, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(1994)));
module.exports = __webpack_exports__;

})();