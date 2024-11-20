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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RnPicker = void 0;
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var rn_styles_1 = require("../../config/rn-styles");
var button_1 = require("../button");
var icon_1 = require("../icon");
var view_1 = require("../view");
var search_1 = __importDefault(require("../search"));
var text_1 = require("../text");
var rn_strings_1 = require("../../config/rn-strings");
var RnPicker = /** @class */ (function (_super) {
    __extends(RnPicker, _super);
    function RnPicker(props) {
        var _this = _super.call(this, props) || this;
        var pickerData = _this.getPickerDataWithNoneOption(props.data || []);
        _this.state = {
            visible: false,
            pickerData: pickerData,
            filteredPickerData: pickerData,
            pickerSearchText: '',
            selected: (_this.props.selectedOption == undefined || _this.props.selectedOption == null || _this.props.selectedOption == "") ? undefined : (_this.props.data || []).find(function (item) { return item.value == _this.props.selectedOption; }),
            showModal: ('showModal' in _this.props) ? _this.props.showModal : true
        };
        return _this;
    }
    RnPicker.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        var _this = this;
        var _a, _b;
        if (((_a = prevProps.data) === null || _a === void 0 ? void 0 : _a.length) != ((_b = this.props.data) === null || _b === void 0 ? void 0 : _b.length) || prevProps.selectedOption != this.props.selectedOption || JSON.stringify(prevProps.data) != JSON.stringify(this.props.data)) {
            var pickerData = this.getPickerDataWithNoneOption(this.props.data || []);
            this.setState({
                visible: false,
                pickerData: pickerData,
                filteredPickerData: pickerData,
                pickerSearchText: '',
                selected: (this.props.selectedOption == undefined || this.props.selectedOption == null || this.props.selectedOption == "") ? undefined : (this.props.data || []).find(function (item) { return item.value == _this.props.selectedOption; })
            });
        }
    };
    RnPicker.prototype.getPickerDataWithNoneOption = function (data) {
        if (this.props.showNoneOption && (data === null || data === void 0 ? void 0 : data.length) > 0) {
            return __spreadArray([{ label: 'None', value: '' }], data, true);
        }
        return data;
    };
    RnPicker.prototype.toggleDropdown = function () {
        this.state.visible ? this.setState({ visible: false }) : this.setState({ visible: true });
    };
    ;
    RnPicker.prototype.onItemPress = function (item, index) {
        var _this = this;
        this.setState({
            selected: (item.label == 'None' && this.props.showNoneOption) ? undefined : item,
            visible: false
        }, function () {
            _this.props.onSelect(__assign(__assign({}, item), { index: index }));
        });
    };
    ;
    RnPicker.prototype.renderListItem = function (item, index) {
        var _this = this;
        var _a, _b;
        return (<react_native_1.TouchableOpacity style={[rn_styles_1.rnStyles.inputItem]} disabled={(!this.props.customOptionRender && this.props.disable)} onPress={function () { return _this.onItemPress(item, index); }}>
                {this.props.customOptionRender ? this.props.customOptionRender(item, index) :
                <view_1.RnView row>
                            {item.color
                        ? <view_1.RnView marginRight style={[
                                rn_styles_1.rnStyles.inputCircle,
                                { backgroundColor: item.color }
                            ]}>
                                </view_1.RnView>
                        : <></>}
                            <text_1.RnText ellipsizeMode='tail' numberOfLines={1} style={[
                        rn_styles_1.rnStyles.inputText,
                        (((_b = (_a = this.state) === null || _a === void 0 ? void 0 : _a.selected) === null || _b === void 0 ? void 0 : _b.value) == item.value)
                            ? { color: rn_constants_1.default.PRIMARY_COLOR }
                            : {}
                    ]}>{item.label}
                            </text_1.RnText>
                        </view_1.RnView>}
            </react_native_1.TouchableOpacity>);
    };
    RnPicker.prototype.renderOptions = function () {
        var _this = this;
        return <>
            <view_1.RnView style={{ marginHorizontal: rn_constants_1.default.DEFAULT_MARGIN }}>
                <search_1.default searchObject={this.state.pickerData} keyFilter={['label']} updateState={function (data) {
                _this.setState({ filteredPickerData: data });
            }} searchText={this.state.pickerSearchText} changeSearchText={function (pickerSearchText) { _this.setState({ pickerSearchText: pickerSearchText }); }} title={"Search"}/>
            </view_1.RnView>
            <react_native_1.FlatList showsVerticalScrollIndicator={false} data={this.state.filteredPickerData} renderItem={function (_a) {
                var item = _a.item, index = _a.index;
                return (<>
                        {_this.renderListItem(item, index)}
                    </>);
            }} ItemSeparatorComponent={this.flatListItemSeparator} keyExtractor={function (item, index) { return index.toString(); }}/>
        </>;
    };
    RnPicker.prototype.renderDropdown = function () {
        var _this = this;
        if (this.state.visible) {
            return (<react_native_1.Modal visible={this.state.visible} transparent animationType="none">
                    <react_native_1.SafeAreaView style={{
                    height: '100%',
                    backgroundColor: rn_constants_1.default.WHITE_COLOR,
                    paddingBottom: rn_constants_1.default.DEFAULT_PADDING,
                    paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING
                }}>
                        <view_1.RnView full style={rn_styles_1.rnStyles.inputDropdown}>
                            <react_native_1.TouchableOpacity style={{ flexDirection: 'row', marginBottom: rn_constants_1.default.DEFAULT_MARGIN }} onPress={function () { _this.toggleDropdown(); }}>
                                <button_1.RnButton transparent onPress={function () { _this.toggleDropdown(); }} iconLeft={<icon_1.RnIcon name='chevron-left' size={rn_constants_1.default.LARGE_FONT_SIZE} color={rn_constants_1.default.TEXT_COLOR}/>} text={this.props.label}></button_1.RnButton>
                            </react_native_1.TouchableOpacity>
                            {this.renderOptions()}
                        </view_1.RnView>
                    </react_native_1.SafeAreaView>
                </react_native_1.Modal>);
        }
        else {
            return <></>;
        }
    };
    ;
    RnPicker.prototype.flatListItemSeparator = function () {
        return (<view_1.RnView style={{
                height: 1,
                width: "95%",
                backgroundColor: rn_constants_1.default.TEXT_COLOR,
                opacity: 0.5,
                marginVertical: rn_constants_1.default.DEFAULT_MARGIN / 2,
                marginHorizontal: rn_constants_1.default.DEFAULT_MARGIN
            }}/>);
    };
    RnPicker.prototype.render = function () {
        var _this = this;
        var _a, _b, _c;
        return (<>
                <view_1.RnView row>
                    {(((_a = this.props.label) === null || _a === void 0 ? void 0 : _a.length) > 0 && this.props.showLabel) && <text_1.RnText style={rn_styles_1.rnStyles.fieldName}>{this.props.label}</text_1.RnText>}
                    {this.props.required && <text_1.RnText style={{ color: rn_constants_1.default.DANGER_TEXT_COLOR, marginBottom: rn_constants_1.default.DEFAULT_MARGIN / 2 }}>*</text_1.RnText>}
                </view_1.RnView>
                {!this.state.showModal ? <view_1.RnView full>
                    {this.renderOptions()}
                </view_1.RnView> :
                <react_native_1.TouchableOpacity ref={function (ref) { return _this.view = ref; }} style={[rn_styles_1.rnStyles.inputButton, this.props.pickerStyles || {}, this.props.disable ? rn_styles_1.rnStyles.disabledFieldControl : {}]} onPress={function () { return _this.toggleDropdown(); }} disabled={this.props.disable || false}>
                        {this.renderDropdown()}
                        {((_c = (_b = this.state) === null || _b === void 0 ? void 0 : _b.selected) === null || _c === void 0 ? void 0 : _c.color)
                        ? <view_1.RnView marginRight style={[
                                rn_styles_1.rnStyles.inputCircle,
                                { backgroundColor: this.state.selected.color }
                            ]}>
                            </view_1.RnView>
                        : <></>}
                        <text_1.RnText textAlignLeft ellipsizeMode='tail' numberOfLines={1} style={[rn_styles_1.rnStyles.inputButtonText, this.props.pickerTextStyles || {}]}> {(this.state.selected && this.state.selected.label) ||
                        (this.props.showLabel
                            ? this.props.label
                            : this.props.placeHolder
                                ? this.props.placeHolder
                                : rn_strings_1.rnStrings.SELECT_LABEL)}</text_1.RnText>
                        <icon_1.RnIcon name='keyboard-arrow-down' color={this.props.arrowColor ? this.props.arrowColor : rn_constants_1.default.PRIMARY_COLOR}/>
                    </react_native_1.TouchableOpacity>}
                {/* Warning mesagge for form validations */}
                {((this.props.triggerValidation && this.state.selected == undefined && this.props.required) ?
                <text_1.RnText style={{ color: rn_constants_1.default.DANGER_TEXT_COLOR, fontSize: rn_constants_1.default.SMALL_FONT_SIZE }}>{this.props.label} is required</text_1.RnText>
                : null)}
            </>);
    };
    return RnPicker;
}(react_1.Component));
exports.RnPicker = RnPicker;
