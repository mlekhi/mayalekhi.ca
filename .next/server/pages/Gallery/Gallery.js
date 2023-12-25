(() => {
var exports = {};
exports.id = 709;
exports.ids = [709];
exports.modules = {

/***/ 3564:
/***/ ((module) => {

// Exports
module.exports = {
	"galleryTitle": "Projects_galleryTitle__Ou2HR",
	"imgGallery": "Projects_imgGallery__JufjR"
};


/***/ }),

/***/ 1409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Gallery_Gallery)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/pages/Projects/Projects.module.css
var Projects_module = __webpack_require__(3564);
var Projects_module_default = /*#__PURE__*/__webpack_require__.n(Projects_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "mixpanel-browser"
var external_mixpanel_browser_ = __webpack_require__(5804);
var external_mixpanel_browser_default = /*#__PURE__*/__webpack_require__.n(external_mixpanel_browser_);
;// CONCATENATED MODULE: ./src/pages/Gallery/Gallery.jsx




external_mixpanel_browser_default().init("2b837b3806273e1cc3e621de8faee49e", {
    debug: true,
    // track_pageview: true,
    persistence: "localStorage",
    ignore_dnt: true
});
function Gallery() {
    (0,external_react_.useEffect)(()=>{
        external_mixpanel_browser_default().track("View on Gallery");
    }, []);
    // Render the image gallery
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "content-body",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                children: "A collection of some of my works I'm fond of. Click to read."
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (Projects_module_default()).imgGallery,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: (Projects_module_default()).galleryTitle,
                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "rotateNinetyCounter",
                            children: "poems"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "https://maya-lekhi.notion.site/Tainted-59224276092a4808998521ae5ba01e1b?pvs=4",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "./photos/1.jpg",
                            alt: "1"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "https://maya-lekhi.notion.site/Interprovincial-cc56a4590c5a4ca9b1e203a5972f94e6?pvs=4",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "./photos/2.jpeg",
                            alt: "2"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "https://maya-lekhi.notion.site/Smoke-Rising-1378ff0c26a045e58c464c24409adbf7?pvs=4",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "./photos/3.jpeg",
                            alt: "3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "https://maya-lekhi.notion.site/Tikka-127b0bd05eeb42d0bc384dc8d70a5171?pvs=4",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "./photos/4.jpg",
                            alt: "4"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("a", {
                        href: "https://maya-lekhi.notion.site/A-Reminder-of-Affection-ead2cb0c62694e45a641c1e9bc4d12d1?pvs=4",
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: "./photos/5.jpg",
                            alt: "5"
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const Gallery_Gallery = (Gallery);

;// CONCATENATED MODULE: ../AppData/Roaming/npm/node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2FGallery%2FGallery&absolutePagePath=private-next-pages%2FGallery%2FGallery.jsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 5804:
/***/ ((module) => {

"use strict";
module.exports = require("mixpanel-browser");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893], () => (__webpack_exec__(1409)));
module.exports = __webpack_exports__;

})();