"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RnView = RnView;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var rn_styles_1 = require("../../config/rn-styles");
function RnView(_a) {
    var row = _a.row, col = _a.col, full = _a.full, justifyBetween = _a.justifyBetween, justifyCenter = _a.justifyCenter, justifyEnd = _a.justifyEnd, justifyStart = _a.justifyStart, padding = _a.padding, paddingHorizontal = _a.paddingHorizontal, paddingTop = _a.paddingTop, paddingBottom = _a.paddingBottom, paddingVertical = _a.paddingVertical, margin = _a.margin, marginHorizontal = _a.marginHorizontal, marginVertical = _a.marginVertical, marginTop = _a.marginTop, marginBottom = _a.marginBottom, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, marginLeft = _a.marginLeft, marginRight = _a.marginRight, border = _a.border, viewProps = __rest(_a, ["row", "col", "full", "justifyBetween", "justifyCenter", "justifyEnd", "justifyStart", "padding", "paddingHorizontal", "paddingTop", "paddingBottom", "paddingVertical", "margin", "marginHorizontal", "marginVertical", "marginTop", "marginBottom", "paddingLeft", "paddingRight", "marginLeft", "marginRight", "border"]);
    return <react_native_1.View {...viewProps} style={[rn_styles_1.rnStyles.background_transperent,
            (row ? rn_styles_1.rnStyles.row : {}),
            (justifyBetween ? rn_styles_1.rnStyles.rowSpaceBetween : {}),
            (justifyCenter ? rn_styles_1.rnStyles.centerAlign : {}),
            (justifyEnd ? rn_styles_1.rnStyles.rowFlexEnd : {}),
            (justifyStart ? rn_styles_1.rnStyles.rowFlexStart : {}),
            (col ? rn_styles_1.rnStyles.col : {}),
            (padding && !isNaN(Number(padding)) ? { padding: Number(padding) } : {}),
            (padding && typeof padding === 'boolean' ? { padding: rn_constants_1.default.DEFAULT_PADDING } : {}),
            (paddingHorizontal && !isNaN(Number(paddingHorizontal)) ? { paddingHorizontal: Number(paddingHorizontal) } : {}),
            (paddingHorizontal && typeof paddingHorizontal === 'boolean' ? { paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING } : {}),
            (paddingVertical && !isNaN(Number(paddingHorizontal)) ? { paddingVertical: Number(paddingVertical) } : {}),
            (paddingVertical && typeof paddingVertical === 'boolean' ? { paddingVertical: rn_constants_1.default.DEFAULT_PADDING } : {}),
            (paddingTop && !isNaN(Number(paddingTop)) ? { paddingTop: Number(paddingTop) } : {}),
            (paddingTop && typeof paddingTop === 'boolean' ? { paddingTop: rn_constants_1.default.DEFAULT_PADDING } : {}),
            (paddingBottom && !isNaN(Number(paddingBottom)) ? { paddingBottom: Number(paddingBottom) } : {}),
            (paddingBottom && typeof paddingBottom === 'boolean' ? { paddingBottom: rn_constants_1.default.DEFAULT_PADDING } : {}),
            (paddingLeft && !isNaN(Number(paddingLeft)) ? { paddingLeft: Number(paddingLeft) } : {}),
            (paddingLeft && typeof paddingLeft === 'boolean' ? { paddingLeft: rn_constants_1.default.DEFAULT_PADDING } : {}),
            (paddingRight && !isNaN(Number(paddingRight)) ? { paddingRight: Number(paddingRight) } : {}),
            (paddingRight && typeof paddingRight === 'boolean' ? { paddingRight: rn_constants_1.default.DEFAULT_PADDING } : {}),
            (margin && !isNaN(Number(margin)) ? { margin: Number(margin) } : {}),
            (margin && typeof margin === 'boolean' ? { margin: rn_constants_1.default.DEFAULT_MARGIN } : {}),
            (marginHorizontal && !isNaN(Number(marginHorizontal)) ? { marginHorizontal: Number(marginHorizontal) } : {}),
            (marginHorizontal && typeof marginHorizontal === 'boolean' ? { marginHorizontal: rn_constants_1.default.DEFAULT_MARGIN } : {}),
            (marginVertical && !isNaN(Number(marginVertical)) ? { marginVertical: Number(marginVertical) } : {}),
            (marginVertical && typeof marginVertical === 'boolean' ? { marginVertical: rn_constants_1.default.DEFAULT_MARGIN } : {}),
            (marginTop && !isNaN(Number(marginTop)) ? { marginTop: Number(marginTop) } : {}),
            (marginTop && typeof marginTop === 'boolean' ? { marginTop: rn_constants_1.default.DEFAULT_MARGIN } : {}),
            (marginBottom && !isNaN(Number(marginBottom)) ? { marginBottom: Number(marginBottom) } : {}),
            (marginBottom && typeof marginBottom === 'boolean' ? { marginBottom: rn_constants_1.default.DEFAULT_MARGIN } : {}),
            (marginLeft && !isNaN(Number(marginLeft)) ? { marginLeft: Number(marginLeft) } : {}),
            (marginLeft && typeof marginLeft === 'boolean' ? { marginLeft: rn_constants_1.default.DEFAULT_MARGIN } : {}),
            (marginRight && !isNaN(Number(marginRight)) ? { marginRight: Number(marginRight) } : {}),
            (marginRight && typeof marginRight === 'boolean' ? { marginRight: rn_constants_1.default.DEFAULT_MARGIN } : {}),
            (border ? rn_styles_1.rnStyles.border : {}),
            (full ? rn_styles_1.rnStyles.fullView : {}),
            viewProps.style]}>{viewProps.children}</react_native_1.View>;
}
