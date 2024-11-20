"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var vector_icons_1 = require("@expo/vector-icons");
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var rn_styles_1 = require("../../config/rn-styles");
var icon_1 = require("../icon");
var view_1 = require("../view");
var text_1 = require("../text");
var RnInput = /** @class */ (function (_super) {
    __extends(RnInput, _super);
    function RnInput() {
        var _a;
        var _this = _super.apply(this, arguments) || this;
        _this.textInputRef = React.createRef();
        _this.state = {
            isFocused: false,
            secureText: ((_a = _this.props) === null || _a === void 0 ? void 0 : _a.eyeIcon) ? _this.props.eyeIcon : false,
            errorMessage: ""
        };
        _this.focus = function () {
            var _a, _b, _c, _d;
            if ((_a = _this.textInputRef) === null || _a === void 0 ? void 0 : _a.current) {
                (_d = (_c = (_b = _this.textInputRef) === null || _b === void 0 ? void 0 : _b.current) === null || _c === void 0 ? void 0 : _c.wrappedInstance) === null || _d === void 0 ? void 0 : _d.focus();
            }
        };
        _this.handleFocus = function (e) {
            _this.setState({ isFocused: true });
            // Remember to propagate the `onFocus` event to the
            // parent as well (if set)
            if (_this.props.onFocus) {
                _this.props.onFocus(e);
            }
        };
        _this.handleBlur = function (e) {
            _this.setState({ isFocused: false });
            // Remember to propagate the `onBlur` event to the
            // parent as well (if set)
            if (_this.props.onBlur) {
                _this.props.onBlur(e);
            }
        };
        return _this;
    }
    RnInput.prototype.render = function () {
        var _this = this;
        // console.log("props=",this.props);
        // On Android we want to change the color of the input
        // underline when it is focused. To do so this component
        // must be aware of being focused, so we'll use the
        // TextInput `onFocus` and `onBlur` callbacks to set
        // a variable in the state that keeps track of when the
        // TextInput is focused.
        // We should also make sure to remove the `onFocus` and
        // `onBlur` props from the `...otherProps`, otherwise
        // they would override our own handlers.
        var _a = this.props, icon = _a.icon, error = _a.error, onFocus = _a.onFocus, onBlur = _a.onBlur, style = _a.style, otherProps = __rest(_a, ["icon", "error", "onFocus", "onBlur", "style"]);
        var isFocused = this.state.isFocused;
        var showPassword = function () {
            _this.setState({ secureText: !_this.state.secureText });
        };
        return (<>
        <view_1.RnView style={[rn_styles_1.rnStyles.inputContainer, style, this.props.disabled ? rn_styles_1.rnStyles.disabledFieldControl : {}, { borderColor: error ? rn_constants_1.default.DANGER_TEXT_COLOR : rn_constants_1.default.BORDER_COLOR }]}>
          {this.props.icon ? <view_1.RnView style={{ marginHorizontal: rn_constants_1.default.DEFAULT_MARGIN / 2 }}><icon_1.RnIcon name={icon} color={this.props.iconColor ? this.props.iconColor : rn_constants_1.default.TEXT_COLOR}/></view_1.RnView> : null}
          {this.props.preText ? <view_1.RnView style={{ marginHorizontal: rn_constants_1.default.DEFAULT_MARGIN / 2 }}><text_1.RnText>{this.props.preText}</text_1.RnText></view_1.RnView> : null}
          <react_native_1.TextInput ref={this.textInputRef} multiline={this.props.multiline || false} editable={!this.props.disabled} selectionColor={rn_constants_1.default.PRIMARY_COLOR} placeholderTextColor={this.props.placeholderTextColor || rn_constants_1.default.TEXT_COLOR} secureTextEntry={this.state.secureText} style={rn_styles_1.rnStyles.textInput} onFocus={this.handleFocus} onBlur={this.handleBlur} 
        // {...(this.props.defaultValue ? {value:Number.isNaN(this.props.defaultValue) ? this.props.defaultValue : (this.props.defaultValue + '')} : {})}
        {...otherProps} onChangeText={function (text) {
                if (typeof _this.props.onChangeText == 'function') {
                    _this.props.onChangeText(text);
                }
            }}/>
          {this.props.eyeIcon ? <view_1.RnView style={{ position: 'absolute', right: 10 }}><vector_icons_1.Feather active name={this.state.secureText ? "eye" : "eye-off"} onPress={showPassword} style={{ color: rn_constants_1.default.MEDIUM_NEUTRAL_COLOR }} size={20}/></view_1.RnView> : null}
          {this.props.swapIcon ? <view_1.RnView style={{ position: 'absolute', right: 10 }}><icon_1.RnIcon name={"swap-vert"} color={rn_constants_1.default.MEDIUM_NEUTRAL_COLOR}/></view_1.RnView> : null}
        </view_1.RnView>
        {error ? <text_1.RnText fontWeight={500} style={rn_styles_1.rnStyles.errorText}>{error || ""}</text_1.RnText> : <></>}
        {this.state.errorMessage ? <text_1.RnText fontWeight={500} style={rn_styles_1.rnStyles.errorText}>{this.state.errorMessage || ""}</text_1.RnText> : <></>}
      </>);
    };
    return RnInput;
}(React.Component));
exports.default = RnInput;
