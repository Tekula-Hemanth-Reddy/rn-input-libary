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
exports.RnTimePicker = void 0;
var datetimepicker_1 = __importDefault(require("@react-native-community/datetimepicker"));
var moment_1 = __importDefault(require("moment"));
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var rn_styles_1 = require("../../config/rn-styles");
var icon_1 = require("../icon");
var view_1 = require("../view");
var text_1 = require("../text");
var RnTimePicker = /** @class */ (function (_super) {
    __extends(RnTimePicker, _super);
    function RnTimePicker(props) {
        var _this = _super.call(this, props) || this;
        var currentTime = (0, moment_1.default)(_this.props.initialTime);
        var iosCurrentTime = (0, moment_1.default)(_this.props.initialTime);
        if (!currentTime.isValid())
            currentTime = (0, moment_1.default)();
        if (!iosCurrentTime.isValid())
            iosCurrentTime = (0, moment_1.default)();
        _this.state = {
            intialTime: _this.props.initialTime,
            currentTime: currentTime.toDate(),
            timePickerState: false,
            iosCurrentTime: iosCurrentTime.toDate(),
        };
        return _this;
    }
    RnTimePicker.prototype.componentDidMount = function () {
        if (this.props.initialTime == "" || !(0, moment_1.default)(this.props.initialTime).isValid()) {
            var defaultTime = new Date();
            this.setState({
                iosCurrentTime: defaultTime,
                currentTime: defaultTime
            });
            this.props.onChange(defaultTime.toISOString());
        }
    };
    RnTimePicker.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (JSON.stringify(prevProps.initialTime) != JSON.stringify(this.props.initialTime)) {
            var currentTime = (0, moment_1.default)(this.props.initialTime);
            if (!currentTime.isValid())
                currentTime = (0, moment_1.default)();
            this.setState({
                currentTime: currentTime.toDate(),
                timePickerState: false,
                iosCurrentTime: currentTime.toDate(),
            });
        }
    };
    RnTimePicker.prototype.openTimePicker = function () {
        this.setState({
            timePickerState: !this.state.timePickerState
        });
    };
    RnTimePicker.prototype.closeTimePicker = function () {
        this.setState({
            timePickerState: false,
        });
    };
    RnTimePicker.prototype.handleTimeObjectFormat = function (dateString) {
        var timeStamp = "";
        if (react_native_1.Platform.OS == "android") {
            timeStamp = dateString;
        }
        else {
            timeStamp = (0, moment_1.default)(dateString).toISOString();
        }
        return timeStamp;
    };
    RnTimePicker.prototype.saveTime = function () {
        var _this = this;
        this.setState({
            timePickerState: false,
            intialTime: this.state.iosCurrentTime.toISOString(),
            currentTime: this.state.iosCurrentTime
        }, function () { return _this.props.onChange(_this.state.iosCurrentTime.toISOString()); });
    };
    RnTimePicker.prototype.render = function () {
        var _this = this;
        var _a, _b, _c;
        return (<view_1.RnView style={{ flex: 1 }}>
                <view_1.RnView row>
                    {((_a = this.props.label) === null || _a === void 0 ? void 0 : _a.length) > 0 && <text_1.RnText style={rn_styles_1.rnStyles.fieldName}>{this.props.label}</text_1.RnText>}
                    {this.props.required && <text_1.RnText style={__assign(__assign({}, rn_styles_1.rnStyles.fieldName), { color: rn_constants_1.default.DANGER_TEXT_COLOR })}>*</text_1.RnText>}
                </view_1.RnView>
                <react_native_1.TouchableOpacity disabled={this.props.disable} onPress={this.openTimePicker.bind(this)} style={[__assign(__assign({}, rn_styles_1.rnStyles.fieldInputContainer), { justifyContent: 'space-between', paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING, backgroundColor: 'white', borderColor: rn_constants_1.default.BORDER_COLOR, borderWidth: 1, borderRadius: rn_constants_1.default.INPUT_BORDER_RADIUS }), this.props.inputBoxStyles, this.props.disable ? rn_styles_1.rnStyles.disabledFieldControl : {}]}>
                    <text_1.RnText>{(0, moment_1.default)(this.state.currentTime).format("h:mm A")}</text_1.RnText>
                    <icon_1.RnIcon name="access-time" size={20} color={((_b = this.props) === null || _b === void 0 ? void 0 : _b.pickerIconColor) ? (_c = this.props) === null || _c === void 0 ? void 0 : _c.pickerIconColor : rn_constants_1.default.PRIMARY_COLOR}/>
                </react_native_1.TouchableOpacity>
                {/* Warning mesagge for form validations */}
                {((this.props.triggerValidation && this.state.intialTime == "" && this.props.required) ?
                <text_1.RnText style={{ color: rn_constants_1.default.DANGER_TEXT_COLOR, fontSize: rn_constants_1.default.SMALL_FONT_SIZE }}>{this.props.label} is required</text_1.RnText>
                : null)}
                <react_native_1.Modal animationType="fade" transparent={true} visible={this.state.timePickerState && react_native_1.Platform.OS == "ios"} onRequestClose={function () { return _this.closeTimePicker(); }}>
                    <view_1.RnView style={rn_styles_1.rnStyles.tableModalView}>
                        <view_1.RnView style={__assign({}, rn_styles_1.rnStyles.tableModalContent)}>
                            <react_native_1.TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={function () { return _this.closeTimePicker(); }}>
                                <icon_1.RnIcon name="close" size={20} color={rn_constants_1.default.BLACK_COLOR}/>
                            </react_native_1.TouchableOpacity>
                            <datetimepicker_1.default mode={'time'} value={this.state.iosCurrentTime} display={'spinner'} onChange={function (data) {
                var timeStamp = _this.handleTimeObjectFormat(data.nativeEvent.timestamp);
                _this.setState({
                    iosCurrentTime: (0, moment_1.default)(timeStamp).toDate()
                });
            }}/>
                            <react_native_1.TouchableOpacity style={{
                borderRadius: rn_constants_1.default.BASE_BORDER_RADIUS,
                padding: rn_constants_1.default.DEFAULT_PADDING,
                backgroundColor: rn_constants_1.default.PRIMARY_COLOR,
                flexDirection: 'row',
                justifyContent: 'center'
            }} onPress={function () { return _this.saveTime(); }}>
                                <text_1.RnText style={{ color: rn_constants_1.default.WHITE_COLOR }}>OK</text_1.RnText>
                            </react_native_1.TouchableOpacity>
                        </view_1.RnView>
                    </view_1.RnView>
                </react_native_1.Modal>
                {this.state.timePickerState && react_native_1.Platform.OS == "android" &&
                <datetimepicker_1.default mode={'time'} value={this.state.currentTime} onChange={function (data) {
                        var timeStamp = _this.handleTimeObjectFormat(data.nativeEvent.timestamp);
                        if (data.type == "set") {
                            _this.setState({
                                timePickerState: false,
                                intialTime: timeStamp,
                                currentTime: (0, moment_1.default)(timeStamp).toDate()
                            });
                            _this.props.onChange((0, moment_1.default)(timeStamp));
                        }
                        else
                            _this.setState({
                                timePickerState: false
                            });
                    }}/>}
            </view_1.RnView>);
    };
    return RnTimePicker;
}(react_1.Component));
exports.RnTimePicker = RnTimePicker;
