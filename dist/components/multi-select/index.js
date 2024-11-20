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
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var rn_strings_1 = require("../../config/rn-strings");
var checkbox_1 = require("../checkbox");
var icon_1 = require("../icon");
;
var search_1 = __importDefault(require("../search"));
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var view_1 = require("../view");
var text_1 = require("../text");
var rn_styles_1 = require("../../config/rn-styles");
var button_1 = require("../button");
var RnMultiSelect = /** @class */ (function (_super) {
    __extends(RnMultiSelect, _super);
    function RnMultiSelect(props) {
        var _this = _super.call(this, props) || this;
        _this.getRow = function (item, index, displayKey) {
            var shakeAnimation = new react_native_1.Animated.Value(0);
            var shakeValue = shakeAnimation.interpolate({
                inputRange: [0, 1, 2, 3, 4, 5],
                outputRange: [0, -40, 30, -20, 10, 0]
            });
            return (<react_native_1.Animated.View style={[{ transform: [{ translateX: shakeValue }] }]}>
                <react_native_1.TouchableOpacity onPress={function () {
                    if (!(item === null || item === void 0 ? void 0 : item.disabled))
                        _this.selectItem(item);
                    else {
                        react_native_1.Animated.timing(shakeAnimation, {
                            toValue: 5,
                            duration: 1000,
                            easing: react_native_1.Easing.bounce,
                            useNativeDriver: true,
                        }).start(function (res) {
                            if (res.finished)
                                shakeAnimation.setValue(0);
                        });
                    }
                }} style={[
                    {
                        paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING, paddingVertical: 7
                    }
                ]}>
                    <view_1.RnView>

                        <view_1.RnView style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <view_1.RnView margin>
                                {!item.isLabel ?
                    <checkbox_1.RnCheckbox checked={item.selected} label="" disabled={false} circle={false} onChange={function (value) {
                            if (!(item === null || item === void 0 ? void 0 : item.disabled))
                                _this.selectItem(item);
                            else {
                                react_native_1.Animated.timing(shakeAnimation, {
                                    toValue: 5,
                                    duration: 1000,
                                    easing: react_native_1.Easing.bounce,
                                    useNativeDriver: true,
                                }).start(function (res) {
                                    if (res.finished)
                                        shakeAnimation.setValue(0);
                                });
                            }
                        }}/>
                    : <text_1.RnText></text_1.RnText>}
                            </view_1.RnView>
                            {_this.props.customOptionRender ? _this.props.customOptionRender(item, index) :
                    <text_1.RnText paddingVertical={rn_constants_1.default.DEFAULT_PADDING / 2} style={[
                            {
                                flex: 1,
                                fontSize: rn_constants_1.default.MEDIUM_FONT_SIZE,
                            },
                            (item.selected && !item.isLabel) ? { color: rn_constants_1.default.PRIMARY_COLOR } : { color: rn_constants_1.default.TEXT_COLOR }
                        ]}>
                                        {item[displayKey]}
                                    </text_1.RnText>}


                        </view_1.RnView>
                    </view_1.RnView>
                </react_native_1.TouchableOpacity>
            </react_native_1.Animated.View>);
        };
        _this.clearSelection = function () {
            _this.setState({
                data: _this.state.data.map(function (i) {
                    i.selected = false;
                    return i;
                }),
            });
        };
        _this.renderOptions = function () {
            return (<>
                <view_1.RnView style={{ paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING }}>
                    <search_1.default searchObject={_this.state.data} keyFilter={["name"]} updateState={function (data) {
                    _this.setState({ filteredData: data });
                }} hideCancel={true} title={"Search"}/>
                </view_1.RnView>
                {(_this.state.data && _this.state.data.length)
                    ?
                        <view_1.RnView style={{ height: '90%' }}>{_this.renderList()}</view_1.RnView>
                    :
                        <view_1.RnView style={{ flexDirection: 'row', padding: rn_constants_1.default.DEFAULT_PADDING, justifyContent: 'center' }}>
                        <text_1.RnText>No Data</text_1.RnText>
                    </view_1.RnView>}
            </>);
        };
        _this.state = {
            data: [],
            filteredData: [],
            toggle: false,
            selectionMode: false,
            selectedValues: _this.props.selectedValues || '',
            disabled: false,
            showSelectedTop: typeof _this.props.showSelectedTop == 'boolean' ? _this.props.showSelectedTop : true,
            showModal: typeof _this.props.showModal == 'boolean' ? _this.props.showModal : true
        };
        return _this;
    }
    RnMultiSelect.prototype.componentDidMount = function () {
        this.setData();
    };
    RnMultiSelect.prototype.setData = function () {
        var _a;
        if ((_a = this.props.options) === null || _a === void 0 ? void 0 : _a.length) {
            var data = JSON.parse(JSON.stringify(this.props.options));
            var selectedItems = [];
            var unselectedItems = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var x = data_1[_i];
                if (x.selected || (this.props.selectedValues || []).includes(x.id)) {
                    selectedItems.push(x);
                    x.selected = true;
                }
                else {
                    unselectedItems.push(x);
                    x.selected = false;
                }
            }
            if (this.state.showSelectedTop) {
                data = [];
                data.push.apply(data, selectedItems);
                data.push.apply(data, unselectedItems);
            }
            this.setState({ data: data, filteredData: data, selectedValues: selectedItems.map(function (x) { return x.name; }).join(',') });
        }
        else {
            this.setState({ data: [], selectedValues: '' });
        }
    };
    // whenever options prop changes or selected items changes, data should be set again
    RnMultiSelect.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (JSON.stringify(prevProps) != JSON.stringify(this.props)) {
            this.setData();
        }
    };
    RnMultiSelect.prototype.selectItem = function (item) {
        var _this = this;
        this.setState({
            data: this.state.data.map(function (op) {
                if (op.id == item.id)
                    return __assign(__assign({}, item), { selected: !op.selected });
                return op;
            }),
            filteredData: this.state.filteredData.map(function (op) {
                if (op.id == item.id)
                    return __assign(__assign({}, item), { selected: !op.selected });
                return op;
            })
        }, function () {
            if (_this.props.onChange)
                _this.props.onChange([__assign(__assign({}, item), { selected: !item.selected })]);
        });
    };
    RnMultiSelect.prototype.setSelectedAndClose = function () {
        var _this = this;
        var selectedItems = this.state.data.filter(function (x) { return x.selected && !x.isLabel; }).map(function (x) { return x.name; });
        var selectedValuesAsString = selectedItems.join(',');
        this.setState({
            selectedValues: selectedValuesAsString,
            filteredData: this.state.data
        });
        this.setState({ toggle: false }, function () {
            if (typeof _this.props.close === 'function')
                _this.props.close(_this.state.data.filter(function (x) { return x.selected; }).map(function (x) { return x.id; }), _this.state.data.filter(function (x) { return x.selected; }));
        });
        react_native_1.Keyboard.dismiss();
    };
    RnMultiSelect.prototype.renderList = function () {
        var _this = this;
        return (<react_native_1.FlatList style={{ marginTop: rn_constants_1.default.DEFAULT_MARGIN }} keyboardShouldPersistTaps="always" nestedScrollEnabled={true} data={this.state.filteredData} initialNumToRender={25} renderItem={(function (_a) {
                var item = _a.item, index = _a.index;
                return _this.getRow(item, index, 'name');
            })} extraData={this.state} ListHeaderComponent={<view_1.RnView style={{
                    alignSelf: 'flex-start',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING,
                }}>
                        <view_1.RnView margin>
                            <checkbox_1.RnCheckbox checked={!this.state.data.some(function (ob) { return ((ob.selected == false) && !ob.isLabel); })} label="" disabled={false} circle={false} onChange={function (value) {
                    _this.setState({
                        data: _this.state.data.map(function (ob) {
                            return __assign(__assign({}, ob), { selected: value });
                        }),
                        filteredData: _this.state.filteredData.map(function (ob) {
                            return __assign(__assign({}, ob), { selected: value });
                        })
                    }, function () {
                        if (_this.props.onChange) {
                            _this.props.onChange(_this.state.data);
                        }
                    });
                }}/>
                        </view_1.RnView>
                        <text_1.RnText fontWeight={800} note>SELECT ALL</text_1.RnText>
                    </view_1.RnView>}/>);
    };
    RnMultiSelect.prototype.render = function () {
        var _this = this;
        return (<view_1.RnView>
                {this.state.showModal ? <>
                    <react_native_1.TouchableOpacity onPress={function () { return _this.setState({ toggle: true }); }} disabled={this.props.disable || false} style={[rn_styles_1.rnStyles.inputButton, this.props.inputBoxStyles, this.props.disable ? rn_styles_1.rnStyles.disabledFieldControl : {}]}>
                        <text_1.RnText ellipsizeMode='tail' numberOfLines={1} style={[rn_styles_1.rnStyles.inputButtonText]}> {(this.state.selectedValues && this.state.selectedValues.length > 0) ? this.state.selectedValues.replace(/,/g, ', ') : (this.props.label || rn_strings_1.rnStrings.SELECT_LABEL)}</text_1.RnText>
                        <icon_1.RnIcon name='keyboard-arrow-down' color={rn_constants_1.default.PRIMARY_COLOR}/>
                    </react_native_1.TouchableOpacity>
                    {this.state.toggle &&
                    <react_native_1.Modal animationType="slide" transparent={false} visible={this.state.toggle} onRequestClose={function () {
                        }}>
                            <react_native_safe_area_context_1.SafeAreaProvider>
                                <react_native_safe_area_context_1.SafeAreaInsetsContext.Consumer>
                                    {function (insets) {
                            return <view_1.RnView style={{ height: insets.top, backgroundColor: rn_constants_1.default.PRIMARY_COLOR }}/>;
                        }}
                                </react_native_safe_area_context_1.SafeAreaInsetsContext.Consumer>
                                <view_1.RnView full>
                                    <react_native_1.TouchableOpacity style={{ flexDirection: 'row', marginBottom: rn_constants_1.default.DEFAULT_MARGIN }} onPress={function () { return _this.setSelectedAndClose(); }}>
                                        <button_1.RnButton text={rn_strings_1.rnStrings.BACK} transparent onPress={function () { return _this.setSelectedAndClose(); }} iconLeft={<icon_1.RnIcon name='chevron-left' size={rn_constants_1.default.LARGE_FONT_SIZE} color={rn_constants_1.default.TEXT_COLOR}/>}></button_1.RnButton>

                                    </react_native_1.TouchableOpacity>
                                    {this.renderOptions()}
                                </view_1.RnView>
                            </react_native_safe_area_context_1.SafeAreaProvider>
                        </react_native_1.Modal>}</> : <>{this.renderOptions()}</>}


            </view_1.RnView>);
    };
    return RnMultiSelect;
}(React.Component));
exports.default = RnMultiSelect;
