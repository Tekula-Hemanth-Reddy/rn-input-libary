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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.RnButton = RnButton;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var text_1 = require("../text");
var loader_1 = __importDefault(require("./loader"));
var rn_styles_1 = require("../../config/rn-styles");
var rn_button_constants_1 = require("../../config/rn-button-constants");
var getTheme = function (props) {
    switch (true) {
        case props.primary:
            return rn_button_constants_1.themeOptions.primary;
        case props.secondary:
            return rn_button_constants_1.themeOptions.secondary;
        case props.neutral:
            return rn_button_constants_1.themeOptions.neutral;
        case props.success:
            return rn_button_constants_1.themeOptions.success;
        case props.warning:
            return rn_button_constants_1.themeOptions.warning;
        case props.danger:
            return rn_button_constants_1.themeOptions.danger;
        default:
            return rn_button_constants_1.themeOptions.default;
    }
};
function RnButton(props) {
    var text = props.text, large = props.large, small = props.small, outline = props.outline, transparent = props.transparent, leftIcon = props.iconLeft, rightIcon = props.iconRight, icon = props.icon, maxLinesToView = props.maxLinesToView, numberOfLines = props.numberOfLines, primary = props.primary, secondary = props.secondary, warning = props.warning, success = props.success, danger = props.danger, neutral = props.neutral, padding = props.padding, paddingHorizontal = props.paddingHorizontal, paddingTop = props.paddingTop, paddingBottom = props.paddingBottom, paddingVertical = props.paddingVertical, margin = props.margin, marginHorizontal = props.marginHorizontal, marginVertical = props.marginVertical, marginTop = props.marginTop, paddingLeft = props.paddingLeft, paddingRight = props.paddingRight, marginLeft = props.marginLeft, marginRight = props.marginRight, marginBottom = props.marginBottom, justifyStart = props.justifyStart, justifyEnd = props.justifyEnd, justifyBetween = props.justifyBetween, brightBorder = props.brightBorder, isActionDone = props.isActionDone, textStyles = props.textStyle, touchableOpacityProps = __rest(props, ["text", "large", "small", "outline", "transparent", "iconLeft", "iconRight", "icon", "maxLinesToView", "numberOfLines", "primary", "secondary", "warning", "success", "danger", "neutral", "padding", "paddingHorizontal", "paddingTop", "paddingBottom", "paddingVertical", "margin", "marginHorizontal", "marginVertical", "marginTop", "paddingLeft", "paddingRight", "marginLeft", "marginRight", "marginBottom", "justifyStart", "justifyEnd", "justifyBetween", "brightBorder", "isActionDone", "textStyle"]);
    var _a = (0, react_1.useState)(false), reRender = _a[0], setReRender = _a[1];
    var isSaving = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        if (isActionDone && isSaving.current) {
            isSaving.current = false;
            setReRender(!reRender);
        }
    }, [isSaving.current, isActionDone]);
    var themeOption = getTheme(props);
    if (!outline && !transparent) {
        themeOption.borderColor = themeOption.borderColor;
    }
    switch (true) {
        case small:
            themeOption.fontSize = rn_constants_1.default.SMALL_FONT_SIZE;
            themeOption.padding = rn_constants_1.default.XXX_SMALL_PADDING;
            break;
        case large:
            themeOption.fontSize = rn_constants_1.default.LARGE_FONT_SIZE;
            themeOption.padding = rn_constants_1.default.XX_SMALL_PADDING;
        default:
            themeOption.fontSize = rn_constants_1.default.BASE_FONT_SIZE;
            themeOption.padding = rn_constants_1.default.DEFAULT_PADDING;
            break;
    }
    return (<react_native_1.TouchableOpacity {...touchableOpacityProps} style={[
            rn_styles_1.rnStyles.mainSliderContainer,
            __assign({ backgroundColor: transparent || outline ? 'transparent' : (props.disabled ? rn_constants_1.default.DISABLE_COLOR : themeOption.backgroundColor), borderColor: props.disabled ? rn_constants_1.default.DISABLE_COLOR : props.brightBorder ? rn_constants_1.default.SECONDARY_COLOR : themeOption.borderColor, borderWidth: transparent && !outline ? 0 : 1, height: small ? rn_button_constants_1.buttonHeights['small'] : (large ? rn_button_constants_1.buttonHeights['large'] : rn_button_constants_1.buttonHeights['default']), padding: themeOption.padding }, (leftIcon || rightIcon ? { justifyContent: 'center' } : {})),
            (justifyStart ? { justifyContent: 'flex-start' } : {}),
            (justifyEnd ? { justifyContent: 'flex-end' } : {}),
            (justifyBetween ? { justifyContent: 'space-between' } : {}),
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
            touchableOpacityProps.style
        ]} onPress={function () {
            var _a, _b;
            if ('isActionDone' in props) {
                if (!isSaving.current) {
                    isSaving.current = true;
                    (_a = props.onPress) === null || _a === void 0 ? void 0 : _a.call(props);
                }
            }
            else {
                (_b = props.onPress) === null || _b === void 0 ? void 0 : _b.call(props);
            }
        }} disabled={props.disabled || isSaving.current}>

            {isActionDone ?
            <loader_1.default />
            : <>
                        {/* {rnButtonLeftIcon} */}
                        {leftIcon ? react_1.default.cloneElement(leftIcon, { color: leftIcon.props.color ? leftIcon.props.color : themeOption.textColor }) : <></>}
                        {icon ? react_1.default.cloneElement(icon, { color: icon.props.color ? icon.props.color : themeOption.textColor }) : <></>}
                        {text && <text_1.RnText {...numberOfLines ? { numberOfLines: numberOfLines } : {}} {...maxLinesToView ? { maxLinesToView: maxLinesToView } : {}} style={[{ color: outline ? themeOption.outlineTextColor : themeOption.textColor, fontSize: rn_constants_1.default.SMALL_FONT_SIZE }, __assign(__assign({}, rn_styles_1.rnStyles.buttonText), (props.textStyle || {}))]} {...props.textProps}>{text}</text_1.RnText>}
                        {props.children}
                        {/* {rnButtonRightIcon} */}
                        {rightIcon ? react_1.default.cloneElement(rightIcon, { color: rightIcon.props.color ? rightIcon.props.color : themeOption.textColor }) : <></>}
                    </>}

        </react_native_1.TouchableOpacity>);
}
