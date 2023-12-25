(() => {
var exports = {};
exports.id = 509;
exports.ids = [509];
exports.modules = {

/***/ 1137:
/***/ (() => {

throw new Error("Module build failed (from ../AppData/Roaming/npm/node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js):\nCssSyntaxError\n\n(6:5) Selector \"&Disabled\" is not pure (pure selectors must contain at least one local class or id)\n\n \u001b[90m 4 | \u001b[39m    cursor\u001b[33m:\u001b[39m pointer\u001b[33m;\u001b[39m\n \u001b[90m 5 | \u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 6 | \u001b[39m    &Disabled \u001b[33m{\u001b[39m\n \u001b[90m   | \u001b[39m    \u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 7 | \u001b[39m    \u001b[36m@extend\u001b[39m \u001b[33m.card\u001b[39m\u001b[33m;\u001b[39m\n \u001b[90m 8 | \u001b[39m    opacity\u001b[33m:\u001b[39m 0.8\u001b[33m;\u001b[39m\n");

/***/ }),

/***/ 3564:
/***/ ((module) => {

// Exports
module.exports = {
	"galleryTitle": "Projects_galleryTitle__Ou2HR",
	"imgGallery": "Projects_imgGallery__JufjR"
};


/***/ }),

/***/ 7962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ Dev)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../AppData/Roaming/npm/node_modules/next/image.js
var next_image = __webpack_require__(8648);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/pages/Projects/Projects.module.css
var Projects_module = __webpack_require__(3564);
var Projects_module_default = /*#__PURE__*/__webpack_require__.n(Projects_module);
// EXTERNAL MODULE: ./src/components/Card2/devCard.module.css
var devCard_module = __webpack_require__(1137);
var devCard_module_default = /*#__PURE__*/__webpack_require__.n(devCard_module);
// EXTERNAL MODULE: ../AppData/Roaming/npm/node_modules/next/router.js
var next_router = __webpack_require__(3783);
;// CONCATENATED MODULE: ./src/components/Card2/devCard.jsx




const DevCard = ({ title , description , tags , imageURL , colour , disabled  })=>{
    const router = (0,next_router.useRouter)();
    const handleClick = ()=>{
        const formattedTitle = title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        router.push(`/dev/${formattedTitle}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: !disabled ? (devCard_module_default()).card : (devCard_module_default()).cardDisabled,
        onClick: disabled ? undefined : handleClick,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (devCard_module_default()).imageBlock,
                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                    className: !disabled ? (devCard_module_default()).image : (devCard_module_default()).imageDisabled,
                    src: imageURL,
                    alt: title
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: (devCard_module_default()).info,
                style: {
                    backgroundColor: colour
                },
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: (devCard_module_default()).infoMain,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: description
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (devCard_module_default()).tagList,
                                children: tags.map((tag, index)=>/*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: (devCard_module_default()).tag,
                                        children: tag
                                    }, index))
                            }),
                            !disabled && /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: (devCard_module_default()).arrow,
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: "/arrow.svg",
                                    alt: "->",
                                    width: 32,
                                    height: 32
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const devCard = (DevCard);

// EXTERNAL MODULE: ../AppData/Roaming/npm/node_modules/next/link.js
var next_link = __webpack_require__(2199);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/pages/Projects/gallery.jsx
var gallery = __webpack_require__(5228);
;// CONCATENATED MODULE: ./src/pages/Projects/Projects.jsx







function Dev() {
    return /*#__PURE__*/ jsx_runtime.jsx("main", {
        className: (Projects_module_default()).main,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: (Projects_module_default()).projects,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: (Projects_module_default()).header,
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            children: "I develop things that matter."
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            children: "From tackling mental illness, solving sustainability issues, and taking on real business problems, I code for the potential technology has to aid and enrich our lives. Also, it’s fun."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: (Projects_module_default()).devGrid,
                    children: gallery/* projects.map */.q.map((project)=>project.disabled ? /*#__PURE__*/ jsx_runtime.jsx(devCard, {
                            title: project.title,
                            description: project.description,
                            tags: project.tags,
                            imageURL: project.imageURL,
                            colour: project.colour,
                            disabled: project.disabled
                        }, project.title) : /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: `/dev/${encodeURIComponent(project.title)}`,
                            passHref: true,
                            children: /*#__PURE__*/ jsx_runtime.jsx(devCard, {
                                title: project.title,
                                description: project.description,
                                tags: project.tags,
                                imageURL: project.imageURL,
                                colour: project.colour,
                                disabled: project.disabled
                            })
                        }, project.title))
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ../AppData/Roaming/npm/node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2FProjects%2FProjects&absolutePagePath=private-next-pages%2FProjects%2FProjects.jsx&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5830:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/bloom-filter.js");

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

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ 1668:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/handle-smooth-scroll.js");

/***/ }),

/***/ 3773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/interpolate-as.js");

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

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 4639:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/omit.js");

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

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

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

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,712,2,756,228], () => (__webpack_exec__(7962)));
module.exports = __webpack_exports__;

})();