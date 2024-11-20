"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.RnText = RnText;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var rn_styles_1 = require("../../config/rn-styles");
var FontWeights;
(function (FontWeights) {
    FontWeights["Bold"] = "Bold";
    FontWeights["SemiBold"] = "SemiBold";
    FontWeights["Medium"] = "Medium";
    FontWeights["Regular"] = "Regular";
    FontWeights["Light"] = "Light";
    FontWeights["ExtraLight"] = "ExtraLight";
    FontWeights["Black"] = "Black";
})(FontWeights || (FontWeights = {}));
var fontWeights = {
    100: FontWeights.ExtraLight,
    200: FontWeights.Light,
    300: FontWeights.Light,
    400: FontWeights.Regular,
    500: FontWeights.Medium,
    600: FontWeights.SemiBold,
    700: FontWeights.Bold,
    800: FontWeights.Bold,
    900: FontWeights.Black
};
function RnText(_a) {
    var fontWeight = _a.fontWeight, italic = _a.italic, note = _a.note, light = _a.light, title = _a.title, padding = _a.padding, paddingHorizontal = _a.paddingHorizontal, paddingTop = _a.paddingTop, paddingBottom = _a.paddingBottom, paddingVertical = _a.paddingVertical, margin = _a.margin, marginHorizontal = _a.marginHorizontal, marginVertical = _a.marginVertical, marginTop = _a.marginTop, marginBottom = _a.marginBottom, alignCenter = _a.textAlignCenter, alignLeft = _a.textAlignLeft, alignRight = _a.textAlignRight, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, marginLeft = _a.marginLeft, marginRight = _a.marginRight, full = _a.full, banner = _a.banner, textProps = __rest(_a, ["fontWeight", "italic", "note", "light", "title", "padding", "paddingHorizontal", "paddingTop", "paddingBottom", "paddingVertical", "margin", "marginHorizontal", "marginVertical", "marginTop", "marginBottom", "textAlignCenter", "textAlignLeft", "textAlignRight", "paddingLeft", "paddingRight", "marginLeft", "marginRight", "full", "banner"]);
    return <react_native_1.Text {...textProps} style={[
            {
                fontFamily: "Inter-".concat(fontWeights[fontWeight || 400]),
                fontSize: rn_constants_1.default.BASE_FONT_SIZE,
                color: rn_constants_1.default.TEXT_COLOR
            },
            { fontStyle: italic ? 'italic' : 'normal', fontWeight: fontWeight ? "".concat(fontWeight) : 'normal' },
            __assign({}, (note ? { fontSize: rn_constants_1.default.SMALL_FONT_SIZE } : {})),
            __assign({}, (light ? { color: rn_constants_1.default.LIGHT_TEXT_COLOR } : {})),
            __assign({}, (title ? { fontSize: rn_constants_1.default.MEDIUM_FONT_SIZE, color: rn_constants_1.default.SECONDARY_COLOR } : {})),
            __assign({}, (banner ? { fontFamily: "PlusJakartaSans-".concat(fontWeights[fontWeight || 600]) } : {})),
            (alignCenter ? rn_styles_1.rnStyles.textAlignCenter : {}),
            (alignLeft ? rn_styles_1.rnStyles.textAlignLeft : {}),
            (alignRight ? rn_styles_1.rnStyles.textAlignRight : {}),
            (full ? { flex: 1 } : {}),
            (padding && !isNaN(Number(padding)) ? { padding: Number(padding) } : {}),
            (padding && typeof padding === 'boolean' ? { padding: rn_constants_1.default.DEFAULT_PADDING } : {}),
            (paddingHorizontal && !isNaN(Number(paddingHorizontal)) ? { paddingHorizontal: Number(paddingHorizontal) } : {}),
            (paddingHorizontal && typeof paddingHorizontal === 'boolean' ? { paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING } : {}),
            (paddingVertical && !isNaN(Number(paddingVertical)) ? { paddingVertical: Number(paddingVertical) } : {}),
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
            textProps.style
        ]}/>;
}
