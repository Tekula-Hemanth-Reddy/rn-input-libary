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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RnCheckbox = RnCheckbox;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var rn_styles_1 = require("../../config/rn-styles");
var icon_1 = require("../icon");
var view_1 = require("../view");
var text_1 = require("../text");
function RnCheckbox(props) {
    var _a;
    var size = props.size || 20;
    var _b = (0, react_1.useState)(props.checked || false), checked = _b[0], setChecked = _b[1];
    var _c = (0, react_1.useState)(props.disabled), checkBoxDisable = _c[0], setDisable = _c[1];
    var checkBoxCheckedBorderColor = props.checkBoxCheckedBorderColor || rn_constants_1.default.PRIMARY_COLOR;
    var checkBoxUnCheckedBorderColor = props.checkBoxUnCheckedBorderColor || rn_constants_1.default.SECONDARY_COLOR;
    var checkBoxCheckedColor = props.checkBoxCheckedColor || rn_constants_1.default.SECONDARY_COLOR;
    var checkBoxCheckedFilledColor = props.checkBoxCheckedFilledColor || rn_constants_1.default.TRANSPARENT_COLOR;
    var checkBoxUnCheckedFilledColor = props.checkBoxUnCheckedFilledColor || rn_constants_1.default.TRANSPARENT_COLOR;
    (0, react_1.useEffect)(function () {
        setChecked(props.checked || false);
    }, [props.checked]);
    (0, react_1.useEffect)(function () {
        setDisable(props.disabled);
    }, [props.disabled]);
    return (<>
            <view_1.RnView row>
                {props.label && ((_a = props.label) === null || _a === void 0 ? void 0 : _a.length) > 0 && <text_1.RnText style={rn_styles_1.rnStyles.fieldName}>{props.label}</text_1.RnText>}
                {props.required && <text_1.RnText style={__assign(__assign({}, rn_styles_1.rnStyles.fieldName), { color: rn_constants_1.default.DANGER_TEXT_COLOR })}>*</text_1.RnText>}
            </view_1.RnView>
            <react_native_1.TouchableOpacity disabled={checkBoxDisable} style={[
            {
                height: size + 2,
                width: size + 2,
                borderColor: checked ? checkBoxCheckedBorderColor : checkBoxUnCheckedBorderColor,
                borderRadius: props.circle ? (size + 2) / 2 : rn_constants_1.default.BASE_BORDER_RADIUS,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: props.disabled ? rn_constants_1.default.DISABLE_COLOR : (checked ? checkBoxCheckedFilledColor : checkBoxUnCheckedFilledColor)
            },
            props.styles
        ]} onPress={function () {
            setChecked(!checked);
            props.onChange(!checked);
        }}>
                {checked &&
            <icon_1.RnIcon size={size} name="check" color={checkBoxCheckedColor}/>}
            </react_native_1.TouchableOpacity>
            {/* Warning mesagge for form validations */}
            {((props.triggerValidation && checked == false && props.required) ?
            <text_1.RnText style={{ color: rn_constants_1.default.DANGER_TEXT_COLOR, fontSize: rn_constants_1.default.SMALL_FONT_SIZE }}>{props.label} is required</text_1.RnText>
            : null)}
        </>);
}
