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
exports.RnCheckBoxGroup = RnCheckBoxGroup;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var rn_styles_1 = require("../../config/rn-styles");
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var icon_1 = require("../icon");
var view_1 = require("../view");
var text_1 = require("../text");
/**
 *
 *
 * @export
 * @param {string} value
 * @param {string} label
 * @param {{fieldValue: string}[]} fields
 * @param {boolean} [disable=false]
 * @param {boolean} [required=false]
 * @param {Function} [onChange]
 * @return {*}
 */
function RnCheckBoxGroup(props) {
    var value = props.value, label = props.label, fields = props.fields, _a = props.disable, disable = _a === void 0 ? false : _a, _b = props.required, required = _b === void 0 ? false : _b, onChange = props.onChange;
    var _c = (0, react_1.useState)(fields.map(function (field) {
        return {
            label: field.label,
            value: field.value,
            isSelected: field.value == value
        };
    })), currentValues = _c[0], setValues = _c[1];
    var currentValueChange = (0, react_1.useCallback)(function (item) {
        setValues(fields.map(function (field) {
            return {
                label: field.label,
                value: field.value,
                isSelected: field.value == item.value
            };
        }));
        onChange(item.value);
    }, [fields, onChange]);
    (0, react_1.useEffect)(function () {
        setValues(props.fields.map(function (field) {
            return {
                label: field.label,
                value: field.value,
                isSelected: field.value == props.value
            };
        }));
    }, [props]);
    return (<view_1.RnView>
            {(label && label.length) &&
            <view_1.RnView row>
                    <text_1.RnText marginVertical>{label}</text_1.RnText>
                    {required && <text_1.RnText style={{ color: rn_constants_1.default.DANGER_TEXT_COLOR, fontSize: rn_constants_1.default.SMALL_FONT_SIZE }}>*</text_1.RnText>}
                </view_1.RnView>}
            <react_native_1.FlatList data={currentValues} horizontal={true} renderItem={function (_a) {
            var item = _a.item, index = _a.index;
            return (<view_1.RnView key={index} style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                            <react_native_1.TouchableOpacity style={rn_styles_1.rnStyles.radioButtonWrapper} disabled={disable} onPress={function () { return currentValueChange(item); }}>
                                {(item.isSelected) ?
                    <icon_1.RnIcon size={rn_constants_1.default.MEDIUM_FONT_SIZE} name="check" color={rn_constants_1.default.PRIMARY_COLOR}/>
                    : null}
                            </react_native_1.TouchableOpacity>
                            {item.label && item.label.length && <text_1.RnText style={__assign(__assign({}, rn_styles_1.rnStyles.fieldName), { marginBottom: 0 })}>{item.label}</text_1.RnText>}
                        </view_1.RnView>);
        }} keyExtractor={function (item) { return item.value; }}/>
        </view_1.RnView>);
}
