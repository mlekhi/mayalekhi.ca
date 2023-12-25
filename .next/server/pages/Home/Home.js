(() => {
var exports = {};
exports.id = 832;
exports.ids = [832];
exports.modules = {

/***/ 296:
/***/ ((module) => {

// Exports
module.exports = {
	"home-hero": "Home_home-hero__Zx9i5",
	"hero-image": "Home_hero-image__INy_X",
	"home-hero-text": "Home_home-hero-text__zan_h",
	"button-container": "Home_button-container__fwmw2",
	"button": "Home_button__j4TC_",
	"button-active": "Home_button-active__lb4xj"
};


/***/ }),

/***/ 5560:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ private_next_pages_Home_Home_jsx__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var private_next_pages_Home_Home_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6175);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_Home_Home_jsx__WEBPACK_IMPORTED_MODULE_0__]);
private_next_pages_Home_Home_jsx__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

        // Next.js Route Loader
        
        
    
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9213:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5804);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




mixpanel_browser__WEBPACK_IMPORTED_MODULE_3___default().init("2b837b3806273e1cc3e621de8faee49e", {
    debug: true,
    persistence: "localStorage",
    ignore_dnt: true
});
const Card = ({ url , image , title , desc , properties  })=>{
    const cardTitle = title;
    const iconAnimate = {
        hover: {
            rotate: 360,
            transition: {
                ease: "easeOut",
                duration: 0.6
            }
        },
        click: {
            rotate: 0,
            transition: {
                ease: "easeOut",
                duration: 0.6
            }
        }
    };
    const propertiesMappable = properties ? properties.split(", ") : [];
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        whileHover: {
            scale: 1.05
        },
        whileTap: {
            scale: 0.95
        },
        variants: iconAnimate,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: url,
            onClick: ()=>{
                mixpanel_browser__WEBPACK_IMPORTED_MODULE_3___default().track("Projects: " + cardTitle);
            },
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "card-image",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: image,
                            alt: "Card Cover"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "name-details",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "organization",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: title
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "position",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: desc
                                })
                            }),
                            properties ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-row gap-2 pt-2",
                                children: propertiesMappable?.map((property, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "nav-item-active text-xs",
                                        children: property
                                    }, index))
                            }) : ""
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6175:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(296);
/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(402);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _components_Card_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9213);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5804);
/* harmony import */ var mixpanel_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mixpanel_browser__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components_Card_Card__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components_Card_Card__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







mixpanel_browser__WEBPACK_IMPORTED_MODULE_5___default().init("2b837b3806273e1cc3e621de8faee49e", {
    debug: true,
    // track_pageview: true,
    persistence: "localStorage",
    ignore_dnt: true
});
function Home() {
    const iconAnimate = {
        hover: {
            rotate: 360,
            transition: {
                ease: "easeOut",
                duration: 0.6
            }
        },
        click: {
            rotate: 0,
            transition: {
                ease: "easeOut",
                duration: 0.6
            }
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        mixpanel_browser__WEBPACK_IMPORTED_MODULE_5___default().track("View on Home");
    }, []);
    const [cardsShown, setCardsShown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("past");
    const cardsPresent = [
        {
            url: "https://www.td.com/ca/en/personal-banking",
            image: _images__WEBPACK_IMPORTED_MODULE_2__/* .TDCard */ .$x,
            orgName: "TD Bank",
            positionName: "Technology Operations"
        },
        {
            url: "https://www.cucai.ca",
            image: _images__WEBPACK_IMPORTED_MODULE_2__/* .CastellaniCard */ .hh,
            orgName: "Castellani Lab",
            positionName: "Bioinformatics Research"
        },
        {
            url: "https://www.foundersnetwork.ca",
            image: _images__WEBPACK_IMPORTED_MODULE_2__/* .WFNCard */ .ri,
            orgName: "WFN | Western's Entrepreuneurial Society",
            positionName: "Future View President"
        },
        {
            url: "https://www.rbcroyalbank.com",
            image: _images__WEBPACK_IMPORTED_MODULE_2__/* .RBCCard */ .SX,
            orgName: "RBC",
            positionName: "Innovation and Design"
        }
    ];
    const cardsPast = [
        {
            url: "https://opensource.fb.com/partnerships/major-league-hacking/",
            image: _images__WEBPACK_IMPORTED_MODULE_2__/* .MetaCard */ .D_,
            orgName: "Meta & Major League Hacking | Technology",
            positionName: "Site Reliability Engineer ['23]"
        },
        {
            url: "https://algifoods.com",
            image: _images__WEBPACK_IMPORTED_MODULE_2__/* .AlgiCard */ .eb,
            orgName: "Algi | Food with Impact",
            positionName: "Growth Strategy ['22]"
        },
        {
            url: "https://www.project5k.ca",
            image: _images__WEBPACK_IMPORTED_MODULE_2__/* .P5KCard */ .IP,
            orgName: "Project 5K | Meaningful Youth Volunteerism",
            positionName: "President ['21-'22]"
        },
        {
            url: "https://www.linkedin.com/company/mastery-tutoring-services",
            image: _images__WEBPACK_IMPORTED_MODULE_2__/* .MTSCard */ .NQ,
            orgName: "Mastery Tutoring Services | Education",
            positionName: "Founder ['19-'22]"
        }
    ];
    const cardsCur = cardsShown === "past" ? cardsPresent : cardsPast;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content-body",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default()["home-hero"])} ${"flex flex-col-reverse lg:flex-row"}`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `${(_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default()["home-hero-text"])} ${"lg:w-[60%] w-full"}`,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "header-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Hi! I'm Maya Lekhi"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    class: "colored",
                                    children: "Software Engineer, Product Designer, Researcher"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "I am a driven second-year Computer Science student at Western University. I’m extremely passionate about tech, social impact, writing, and nurturing communities! ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Currently, I'm lead Western University's largest conference on emerging technology at ",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    target: "_blank",
                                    href: "https://www.foundersnetwork.ca",
                                    children: "Western Founder's Network,"
                                }),
                                " Western's entrepreneurship society.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "On top of this, I have been building Momentum: a coworking community bringing together Western University's builders, creatives, technologists, budding founders, and more, to work on and showcase their passion projects. It's a space that provides youth with the permission, accountability, and community to dedicate themselves to work they care about.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "When I'm not working to support youth in their passions, I'm busy pursuing my own! You can usually find me playing Pok\xe9mon, making Spotify playlists, competing in hackathons, meeting exceptional people, and building new things."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default()["button-container"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.a, {
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                variants: iconAnimate,
                                className: (_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),
                                target: "_blank",
                                href: "mailto: maya.lekhi1@gmail.com",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Email Me!"
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "nav-bar",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        variants: iconAnimate,
                        onClick: ()=>setCardsShown("past"),
                        className: `${(_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button)} ${// eslint-disable-next-line
                        cardsShown == "present" ? (_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default()["button-active"]) : ""}`,
                        children: [
                            "Present",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                style: {
                                    paddingLeft: "0.5rem",
                                    fontSize: "8pt",
                                    alignSelf: "center"
                                },
                                children: [
                                    "(",
                                    cardsPast.length,
                                    ")"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        variants: iconAnimate,
                        onClick: ()=>setCardsShown("present"),
                        className: `${(_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().button)} ${// eslint-disable-next-line
                        cardsShown == "past" ? (_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default()["button-active"]) : ""}`,
                        children: [
                            "Past",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                style: {
                                    paddingLeft: "0.5rem",
                                    fontSize: "8pt",
                                    alignSelf: "center"
                                },
                                children: [
                                    "(",
                                    cardsPresent.length,
                                    ")"
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "gallery",
                children: cardsCur.map((card, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card_Card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        url: card.url,
                        image: card.image,
                        title: card.orgName,
                        desc: card.positionName
                    }, index);
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,402], () => (__webpack_exec__(5560)));
module.exports = __webpack_exports__;

})();