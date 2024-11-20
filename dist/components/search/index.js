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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var react_native_search_filter_1 = require("react-native-search-filter");
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var button_1 = require("../button");
var icon_1 = require("../icon");
var view_1 = require("../view");
var rn_styles_1 = require("../../config/rn-styles");
var RnSearchComponent = /** @class */ (function (_super) {
    __extends(RnSearchComponent, _super);
    function RnSearchComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showCancel: false,
            lengthOfInputString: 0,
            searchText: "",
        };
        return _this;
    }
    RnSearchComponent.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (this.props.searchObject !== prevProps.searchObject && !!this.state.searchText) {
            this.handleSearchText(this.state.searchText);
        }
    };
    /**
     *reset state for search
     *
     * @memberof SearchComponent
     */
    RnSearchComponent.prototype.resetSearchState = function () {
        this.setState({
            showCancel: false,
            lengthOfInputString: 0,
            searchText: "",
        });
    };
    /**
     *shows cancel button on focus of input form
     *
     * @memberof SearchComponent
     */
    RnSearchComponent.prototype.handleOnFocusTextInput = function () {
        this.setState({
            showCancel: true,
        });
    };
    /**
     *it clears the search text and removes focus(removes cross and cancel buttons, clears search text)
     *
     * @memberof SearchComponent
     */
    RnSearchComponent.prototype.handleOnPressCancel = function () {
        var _a;
        //removes search text which removes cross icon
        this.onCrossIconPress();
        this.setState({
            showCancel: false,
        });
        //removes focus
        react_native_1.Keyboard.dismiss();
        if ((_a = this.props) === null || _a === void 0 ? void 0 : _a.cancelSearch)
            this.props.cancelSearch();
        // hide search
    };
    RnSearchComponent.prototype.removeFocus = function () {
        react_native_1.Keyboard.dismiss();
        this.state.lengthOfInputString == 0
            ? this.setState({
                showCancel: false,
            })
            : null;
    };
    RnSearchComponent.prototype.setFocus = function () { };
    /**
     *whenever text is changed the data is filtered based on inputText
     *
     * @param {string} searchText
     * @memberof SearchComponent
     */
    RnSearchComponent.prototype.handleSearchText = function (searchText) {
        this.setState({
            lengthOfInputString: searchText.length,
            showCancel: true,
            searchText: searchText,
        });
        if (!this.props.customSearchFilter) {
            if (this.props.searchObject) {
                var filteredObject = this.props.searchObject.filter((0, react_native_search_filter_1.createFilter)(searchText, this.props.keyFilter));
                if (typeof this.props.updateState == 'function')
                    this.props.updateState(filteredObject);
            }
        }
        else if ((this.props.searchText && this.props.searchText.length > 0) ||
            searchText) {
            this.props.customSearchFilter(searchText);
        }
        if (this.props.changeSearchText) {
            this.props.changeSearchText(searchText);
        }
        this.textInput.focus();
    };
    /**
     *renders cross icon if there is at least more than or equal to one character of search text
     *
     * @returns
     * @memberof SearchComponent
     */
    RnSearchComponent.prototype.crossIconRenderer = function () {
        var _this = this;
        return (this.props.searchText !== undefined ? this.props.searchText : this.state.searchText).length > 0 ? (<button_1.RnButton transparent onPress={function () { return _this.onCrossIconPress(); }} icon={<icon_1.RnIcon 
            // style={rnStyles.crossIcon}
            // active
            name="close" color={rn_constants_1.default.TEXT_COLOR}/>}></button_1.RnButton>) : null;
    };
    /**
     *
     *clears search text and removes cross icon
     * @memberof SearchComponent
     */
    RnSearchComponent.prototype.onCrossIconPress = function () {
        this.textInput.clear();
        this.handleSearchText("");
        this.textInput.focus();
    };
    /**
     *shoes search icon before placeholder if cancel button is not shown
     *
     * @returns
     * @memberof SearchComponent
     */
    RnSearchComponent.prototype.searchIconRenderer = function () {
        return <icon_1.RnIcon name="search" color={rn_constants_1.default.NEUTRAL_COLOR}/>;
    };
    /**
     *set focus on selecting the search bar(outside TextInput)
     *
     * @memberof SearchComponent
     */
    RnSearchComponent.prototype.handleSearchPress = function () {
        this.textInput.focus();
    };
    RnSearchComponent.prototype.render = function () {
        var _this = this;
        var _a;
        return (
        //  <Header style={rnStyles.searchBarHeader}>
        <view_1.RnView style={rn_styles_1.rnStyles.searchBarHeader}>
                <react_native_1.TouchableOpacity 
        // regular
        style={[rn_styles_1.rnStyles.search, ((_a = this.textInput) === null || _a === void 0 ? void 0 : _a.isFocused()) ? rn_styles_1.rnStyles.searchBoxShadow : {}]} onPress={this.handleSearchPress.bind(this)}>
                    {this.searchIconRenderer()}
                    <react_native_1.TextInput style={{ flex: 1, fontSize: rn_constants_1.default.BASE_FONT_SIZE, paddingLeft: rn_constants_1.default.DEFAULT_PADDING / 2 }} placeholder={this.props.title} onFocus={this.handleOnFocusTextInput.bind(this)} onChangeText={function (searchText) { return _this.handleSearchText(searchText); }} ref={function (ref) {
                _this.textInput = ref;
            }} value={this.props.searchText !== undefined
                ? this.props.searchText
                : this.state.searchText} autoFocus={this.props.focus}/>
                    {this.crossIconRenderer()}
                </react_native_1.TouchableOpacity>
            </view_1.RnView>);
    };
    return RnSearchComponent;
}(react_1.default.Component));
exports.default = RnSearchComponent;
