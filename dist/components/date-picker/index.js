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
exports.RnDatePicker = void 0;
var moment_1 = __importDefault(require("moment"));
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var rn_date_formatter_1 = require("../../config/rn-date-formatter");
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var rn_styles_1 = require("../../config/rn-styles");
var button_1 = require("../button");
var icon_1 = require("../icon");
var view_1 = require("../view");
var text_1 = require("../text");
var VIEW_TYPE;
(function (VIEW_TYPE) {
    VIEW_TYPE["DATE"] = "DATE";
    VIEW_TYPE["MONTH"] = "MONTH";
    VIEW_TYPE["YEAR"] = "YEAR";
    VIEW_TYPE["PINNED_DATES"] = "PINNED_DATES";
    VIEW_TYPE["MONTH_PICKER"] = "MONTH_PICKER";
})(VIEW_TYPE || (VIEW_TYPE = {}));
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var RnDatePicker = /** @class */ (function (_super) {
    __extends(RnDatePicker, _super);
    function RnDatePicker(props) {
        var _a, _b;
        var _this = _super.call(this, props) || this;
        _this.primaryColor = rn_constants_1.default.PRIMARY_COLOR;
        _this.secondaryColor = rn_constants_1.default.TEXT_COLOR;
        _this.viewType = 'dialog';
        _this.modalPosition = 'center';
        _this.primaryColor = _this.props.primaryColor ? _this.props.primaryColor : _this.primaryColor;
        _this.secondaryColor = _this.props.secondaryColor ? _this.props.secondaryColor : _this.secondaryColor;
        _this.viewType = ((_a = _this.props) === null || _a === void 0 ? void 0 : _a.type) || 'dialog';
        _this.modalPosition = _this.props.alignItem || 'center';
        _this.state = {
            selectedOrStartDate: _this.isSelectedDateValid(_this.props.selectedOrStartDate) ? _this.props.selectedOrStartDate : "",
            dates: _this.getDates(),
            currentSelectedMonth: _this.isSelectedDateValid(_this.props.selectedOrStartDate) ? new Date(_this.props.selectedOrStartDate).getMonth() : new Date().getMonth(),
            currentSelectedYear: _this.isSelectedDateValid(_this.props.selectedOrStartDate) ? new Date(_this.props.selectedOrStartDate).getFullYear() : new Date().getFullYear(),
            viewType: _this.props.monthPicker ? VIEW_TYPE.MONTH_PICKER : VIEW_TYPE.DATE,
            allYears: _this.getYears(_this.isSelectedDateValid(_this.props.selectedOrStartDate) ? new Date(_this.props.selectedOrStartDate).getFullYear() : new Date().getFullYear()),
            endDate: (_this.isSelectedDateValid(_this.props.endDate) ? _this.props.endDate : ""),
            dateRangeSelectionOn: false,
            selectedPinnedDate: "",
            datePickerState: false,
            showCalendar: false,
            showModal: typeof _this.props.showModal == 'boolean' ? _this.props.showModal : true,
            headerColor: !((_b = _this.props) === null || _b === void 0 ? void 0 : _b.showModal) ? _this.secondaryColor : rn_constants_1.default.WHITE_COLOR,
        };
        return _this;
    }
    RnDatePicker.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
        if (prevProps.selectedOrStartDate != this.props.selectedOrStartDate) {
            this.setState({
                selectedOrStartDate: this.isSelectedDateValid(this.props.selectedOrStartDate) ? this.props.selectedOrStartDate : "",
                dates: this.getDates(),
                currentSelectedMonth: this.isSelectedDateValid(this.props.selectedOrStartDate) ? new Date(this.props.selectedOrStartDate).getMonth() : new Date().getMonth(),
                currentSelectedYear: this.isSelectedDateValid(this.props.selectedOrStartDate) ? new Date(this.props.selectedOrStartDate).getFullYear() : new Date().getFullYear(),
                viewType: this.props.monthPicker ? VIEW_TYPE.MONTH_PICKER : VIEW_TYPE.DATE,
                allYears: this.getYears(this.isSelectedDateValid(this.props.selectedOrStartDate) ? new Date(this.props.selectedOrStartDate).getFullYear() : new Date().getFullYear()),
                endDate: (this.isSelectedDateValid(this.props.endDate) ? this.props.endDate : ""),
                dateRangeSelectionOn: false,
                selectedPinnedDate: ""
            });
        }
    };
    //#region  ***************** dates setting in calendar ************************
    /**
     * check whether the given date or string is valid or not
     * @private
     * @param {(string | Date)} date
     * @return {*}
     * @memberof DateWithCalendar
     */
    RnDatePicker.prototype.isSelectedDateValid = function (date) {
        if (date == undefined || date == null || !(0, moment_1.default)(date).isValid()) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * get years with range -10 to 10 from given year
     * @private
     * @param {*} middleYear
     * @return {*}
     * @memberof DateWithCalendar
     */
    RnDatePicker.prototype.getYears = function (middleYear) {
        var years = [];
        for (var index = -8; index < 10; index++) {
            years.push(middleYear + index);
        }
        return years;
    };
    /**
     * get dates of current month in current year
     * @private
     * @param {number} [year]
     * @param {number} [month]
     * @return {*}
     * @memberof DateWithCalendar
     */
    RnDatePicker.prototype.getDates = function (year, month) {
        var _a, _b, _c, _d;
        // new Date(year, month, day, hours, minutes, seconds, milliseconds)
        var newDate = new Date();
        if (!year) {
            if (this.isSelectedDateValid((_a = this.state) === null || _a === void 0 ? void 0 : _a.selectedOrStartDate)) {
                year = new Date(this.state.selectedOrStartDate).getFullYear();
            }
            else if (this.isSelectedDateValid((_b = this.props) === null || _b === void 0 ? void 0 : _b.selectedOrStartDate)) {
                year = new Date(this.props.selectedOrStartDate).getFullYear();
            }
            else {
                year = newDate.getFullYear();
            }
        }
        if (!month) {
            if (this.isSelectedDateValid((_c = this.state) === null || _c === void 0 ? void 0 : _c.selectedOrStartDate)) {
                month = new Date(this.state.selectedOrStartDate).getMonth();
            }
            else if (this.isSelectedDateValid((_d = this.props) === null || _d === void 0 ? void 0 : _d.selectedOrStartDate)) {
                month = new Date(this.props.selectedOrStartDate).getMonth();
            }
            else {
                month = newDate.getMonth();
            }
        }
        var currenDate = new Date(year, month);
        var firstDay = new Date(currenDate.getFullYear(), currenDate.getMonth(), 1).getDay();
        var numDays = new Date(currenDate.getFullYear(), currenDate.getMonth() + 1, 0).getDate();
        var days = 1;
        var datesArray = [];
        var startDateFound = false;
        for (var index = 0; index < 42; index++) {
            if (startDateFound) {
                if (days <= numDays) {
                    datesArray.push(days.toString());
                    days++;
                }
                else {
                    datesArray.push("");
                }
            }
            else {
                if (index == firstDay) {
                    datesArray.push(days.toString());
                    days++;
                    startDateFound = true;
                }
                else {
                    datesArray.push("");
                }
            }
        }
        return datesArray;
    };
    /**
     * set dates for selected month and year
     * @private
     * @param {*} cb is a function
     * @memberof DateWithCalendar
     */
    RnDatePicker.prototype.setDatesofCurrentSelectedMonthAndYear = function (cb) {
        this.setState({
            dates: this.getDates(this.state.currentSelectedYear, this.state.currentSelectedMonth)
        }, function () { return cb(null); });
    };
    //#endregion
    //#region  ***************** validations and event on date , month and year ************************
    RnDatePicker.prototype.checkSelectedDate = function (day) {
        var _a;
        if (day == 0) {
            return false;
        }
        var currentDate = (0, moment_1.default)().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(day).format('YYYY-MM-DD');
        var selectedOrStartDate = (0, moment_1.default)(this.state.selectedOrStartDate || new Date()).format('YYYY-MM-DD');
        if (!(this.props.dateRange || ((_a = this.props) === null || _a === void 0 ? void 0 : _a.showDateRangeLabel)) || this.state.endDate == "") {
            if (currentDate == selectedOrStartDate)
                return true;
            else
                return false;
        }
        else {
            var endDate = (0, moment_1.default)(this.state.endDate).format('YYYY-MM-DD');
            if ((currentDate >= selectedOrStartDate) && (currentDate <= endDate))
                return true;
            else
                return false;
        }
    };
    RnDatePicker.prototype.isToday = function (day) {
        var currentDate = (0, moment_1.default)().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(day).format('YYYY-MM-DD');
        var selectedOrStartDate = (0, moment_1.default)(new Date()).format('YYYY-MM-DD');
        return (currentDate === selectedOrStartDate);
    };
    RnDatePicker.prototype.isDateDisable = function (day) {
        var _a, _b, _c, _d;
        var minDate = ((_a = this.props) === null || _a === void 0 ? void 0 : _a.minDateToDisable) ? (0, moment_1.default)((_b = this.props) === null || _b === void 0 ? void 0 : _b.minDateToDisable).format('YYYY-MM-DD') : (0, moment_1.default)().format('YYYY-MM-DD');
        var maxDate = ((_c = this.props) === null || _c === void 0 ? void 0 : _c.maxDateToDisable) ? (0, moment_1.default)((_d = this.props) === null || _d === void 0 ? void 0 : _d.maxDateToDisable).format('YYYY-MM-DD') : (0, moment_1.default)().format('YYYY-MM-DD');
        var currnetDate = (0, moment_1.default)().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(day).format('YYYY-MM-DD');
        if (day == 0) {
            return true;
        }
        else if (this.props.disableBeforeDays && (currnetDate < minDate)) {
            return true;
        }
        else if (this.props.disableAfterDays && (currnetDate > maxDate)) {
            return true;
        }
        return false;
    };
    RnDatePicker.prototype.pinnedData = function (day) {
        if (day == 0) {
            return {
                found: false,
                data: {}
            };
        }
        var currnetDate = (0, moment_1.default)().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(day).format('YYYY-MM-DD');
        if (this.props.pinnedDates[currnetDate]) {
            return {
                found: true,
                data: this.props.pinnedDates[currnetDate]
            };
        }
        else {
            return {
                found: false,
                data: {}
            };
        }
    };
    RnDatePicker.prototype.onMonthSelect = function (month) {
        var _this = this;
        if (this.state.viewType == VIEW_TYPE.MONTH_PICKER) {
            this.setState({ currentSelectedMonth: month, datePickerState: false }, function () { return _this.props.onChange({ month: month, year: _this.state.currentSelectedYear }); });
            return;
        }
        this.setState({
            currentSelectedMonth: month,
            viewType: VIEW_TYPE.DATE
        }, function () { _this.setDatesofCurrentSelectedMonthAndYear(function () { }); });
    };
    RnDatePicker.prototype.onYearSelect = function (year) {
        this.setState({
            currentSelectedYear: year,
            viewType: this.props.monthPicker ? VIEW_TYPE.MONTH_PICKER : VIEW_TYPE.MONTH
        });
    };
    //#endregion
    //#region  ***************** date updates ************************
    RnDatePicker.prototype.onDateSelect = function (date) {
        var _this = this;
        if (!this.props.dateRange) {
            this.setState({
                selectedOrStartDate: (0, rn_date_formatter_1.convertDateToTZFormat)((0, moment_1.default)().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(date).startOf('day')),
                datePickerState: false
            }, function () { return _this.props.onChange({
                startDateString: _this.state.selectedOrStartDate,
                startDate: new Date(_this.state.selectedOrStartDate), // returns current date as per time zone
                endDateString: _this.state.selectedOrStartDate,
                endDate: new Date(_this.state.selectedOrStartDate),
            }); });
        }
        else {
            if (this.props.startDateChangeDetect) {
                this.setState({
                    selectedOrStartDate: (0, rn_date_formatter_1.convertDateToTZFormat)((0, moment_1.default)().date(date).month(this.state.currentSelectedMonth).year(this.state.currentSelectedYear).startOf('day')),
                    endDate: '',
                    dateRangeSelectionOn: false,
                    datePickerState: false
                }, function () {
                    _this.props.onChange({
                        startDateString: _this.state.selectedOrStartDate,
                        startDate: new Date(_this.state.selectedOrStartDate),
                        endDateString: '',
                        endDate: '',
                    });
                });
                return;
            }
            if (!this.state.dateRangeSelectionOn) {
                this.setState({
                    selectedOrStartDate: (0, rn_date_formatter_1.convertDateToTZFormat)((0, moment_1.default)().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(date).startOf('day')),
                    dateRangeSelectionOn: true,
                    endDate: ""
                });
            }
            else {
                var startDate = (0, moment_1.default)(this.state.selectedOrStartDate).format("YYYY-MM-DD");
                var endDate = (0, moment_1.default)().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(date).format("YYYY-MM-DD");
                if (startDate > endDate) {
                    var startDate_1 = this.state.selectedOrStartDate;
                    this.setState({
                        selectedOrStartDate: (0, rn_date_formatter_1.convertDateToTZFormat)((0, moment_1.default)().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(date).startOf('day')),
                        endDate: startDate_1,
                        dateRangeSelectionOn: false,
                        datePickerState: false
                    }, function () {
                        _this.props.onChange({
                            startDateString: _this.state.selectedOrStartDate,
                            startDate: new Date(_this.state.selectedOrStartDate),
                            endDateString: _this.state.endDate,
                            endDate: new Date(_this.state.endDate),
                        });
                    });
                }
                else {
                    this.setState({
                        endDate: (0, rn_date_formatter_1.convertDateToTZFormat)((0, moment_1.default)().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(date).endOf('day')),
                        dateRangeSelectionOn: false,
                        datePickerState: false
                    }, function () {
                        _this.props.onChange({
                            startDateString: _this.state.selectedOrStartDate,
                            startDate: new Date(_this.state.selectedOrStartDate),
                            endDateString: _this.state.endDate,
                            endDate: new Date(_this.state.endDate),
                        });
                    });
                }
            }
        }
        this.setState({ showCalendar: false });
    };
    RnDatePicker.prototype.incrementMonth = function () {
        var _this = this;
        if (this.state.currentSelectedMonth == 11) {
            this.setState({
                currentSelectedMonth: 0,
                currentSelectedYear: this.state.currentSelectedYear + 1
            }, function () { _this.setDatesofCurrentSelectedMonthAndYear(function () { }); });
        }
        else {
            this.setState({ currentSelectedMonth: this.state.currentSelectedMonth + 1 }, function () { _this.setDatesofCurrentSelectedMonthAndYear(function () { }); });
        }
    };
    RnDatePicker.prototype.decrementMonth = function () {
        var _this = this;
        if (this.state.currentSelectedMonth == 0) {
            this.setState({
                currentSelectedMonth: 11,
                currentSelectedYear: this.state.currentSelectedYear - 1
            }, function () { _this.setDatesofCurrentSelectedMonthAndYear(function () { }); });
        }
        else {
            this.setState({ currentSelectedMonth: this.state.currentSelectedMonth - 1 }, function () { _this.setDatesofCurrentSelectedMonthAndYear(function () { }); });
        }
    };
    RnDatePicker.prototype.incrementYear = function () {
        var _this = this;
        this.setState({
            currentSelectedYear: this.state.currentSelectedYear + 1
        }, function () { _this.setDatesofCurrentSelectedMonthAndYear(function () { _this.setDatesofCurrentSelectedMonthAndYear(function () { }); }); });
    };
    RnDatePicker.prototype.decrementYear = function () {
        var _this = this;
        this.setState({
            currentSelectedYear: this.state.currentSelectedYear - 1
        }, function () { _this.setDatesofCurrentSelectedMonthAndYear(function () { _this.setDatesofCurrentSelectedMonthAndYear(function () { }); }); });
    };
    //#endregion
    //#region  ***************** Ui for specific views ************************
    RnDatePicker.prototype.calendarItems = function (item) {
        var _this = this;
        var _a, _b, _c;
        var pinnedDate = this.pinnedData(parseInt(item || '0'));
        var isToday = this.isToday(parseInt(item || '0'));
        var isSelected = this.checkSelectedDate(parseInt(item || '0'));
        return (<react_native_1.TouchableOpacity style={[
                {
                    flex: 1,
                    height: rn_constants_1.default.HEADER_HEIGHT,
                    paddingVertical: rn_constants_1.default.DEFAULT_PADDING,
                    marginHorizontal: rn_constants_1.default.DEFAULT_MARGIN / 5,
                    opacity: this.isDateDisable(parseInt(item || '0')) ? 0.5 : 1,
                },
                __assign({}, (isSelected || isToday ? __assign(__assign({ borderColor: (isToday || !this.state.selectedOrStartDate) ? rn_constants_1.default.PRIMARY_COLOR : rn_constants_1.default.TRANSPARENT_COLOR, borderWidth: (isToday || !this.state.selectedOrStartDate) ? 1 : 0 }, (isSelected && this.state.selectedOrStartDate ? { backgroundColor: this.primaryColor } : {})), { borderRadius: rn_constants_1.default.INPUT_BORDER_RADIUS }) :
                    pinnedDate.found ?
                        {
                            backgroundColor: ((_a = pinnedDate.data) === null || _a === void 0 ? void 0 : _a.color) ? pinnedDate.data.color : rn_constants_1.default.BACKGROUND_COLOR,
                            borderRadius: rn_constants_1.default.INPUT_BORDER_RADIUS,
                        }
                        :
                            (this.isDateDisable(parseInt(item || '0')) && item != "") ?
                                {
                                    backgroundColor: rn_constants_1.default.BACKGROUND_COLOR,
                                    borderRadius: rn_constants_1.default.INPUT_BORDER_RADIUS,
                                }
                                :
                                    {}))
            ]} disabled={pinnedDate.found == true ? false : this.isDateDisable(parseInt(item || '0'))} onLongPress={function () {
                if (parseInt(item || '0') == 0 || pinnedDate.found == false) {
                    return;
                }
                var currnetDate = (0, moment_1.default)().date(parseInt(item || '0')).month(_this.state.currentSelectedMonth).year(_this.state.currentSelectedYear).format('YYYY-MM-DD');
                _this.setState({
                    selectedPinnedDate: currnetDate,
                    viewType: VIEW_TYPE.PINNED_DATES
                });
            }} onPress={function () {
                if (_this.isDateDisable(parseInt(item || '0'))) {
                    return;
                }
                _this.onDateSelect(parseInt(item || '0'));
            }}>
                {pinnedDate.found
                ?
                    <icon_1.RnIcon name="circle" size={rn_constants_1.default.EXTRA_SMALL_FONT_SIZE} color={((_b = pinnedDate.data) === null || _b === void 0 ? void 0 : _b.color) && pinnedDate.data.color == rn_constants_1.default.WHITE_COLOR ? rn_constants_1.default.TEXT_COLOR : rn_constants_1.default.WHITE_COLOR}/>
                :
                    <></>}
                <text_1.RnText textAlignCenter style={{ color: this.isDateDisable(parseInt(item || '0')) ? rn_constants_1.default.DISABLE_COLOR : (this.checkSelectedDate(parseInt(item || '0')) && this.state.selectedOrStartDate) || pinnedDate.found ? (pinnedDate.found && ((_c = pinnedDate.data) === null || _c === void 0 ? void 0 : _c.color) && pinnedDate.data.color == rn_constants_1.default.WHITE_COLOR) ? this.secondaryColor : rn_constants_1.default.WHITE_COLOR : this.secondaryColor }} note>{item}</text_1.RnText>
            </react_native_1.TouchableOpacity>);
    };
    RnDatePicker.prototype.monthItems = function (item, index) {
        var _this = this;
        return (<react_native_1.TouchableOpacity style={[
                {
                    flex: 1,
                    height: rn_constants_1.default.HEADER_HEIGHT,
                    paddingVertical: rn_constants_1.default.DEFAULT_PADDING,
                    marginHorizontal: rn_constants_1.default.DEFAULT_MARGIN / 5
                },
                __assign({}, ((this.state.currentSelectedMonth == index) ?
                    {
                        backgroundColor: this.primaryColor,
                        borderRadius: rn_constants_1.default.INPUT_BORDER_RADIUS,
                    }
                    :
                        {}))
            ]} onPress={function () { return _this.onMonthSelect(index); }}>
                <text_1.RnText textAlignCenter style={{ color: (this.state.currentSelectedMonth == index) ? rn_constants_1.default.WHITE_COLOR : this.secondaryColor }} note>{item}</text_1.RnText>
            </react_native_1.TouchableOpacity>);
    };
    RnDatePicker.prototype.yearItems = function (item) {
        var _this = this;
        return (<react_native_1.TouchableOpacity style={[
                {
                    flex: 1,
                    height: rn_constants_1.default.HEADER_HEIGHT,
                    paddingVertical: rn_constants_1.default.DEFAULT_PADDING,
                    marginHorizontal: rn_constants_1.default.DEFAULT_MARGIN / 5
                },
                __assign({}, ((this.state.currentSelectedYear == item) ?
                    {
                        backgroundColor: this.primaryColor,
                        borderRadius: rn_constants_1.default.INPUT_BORDER_RADIUS,
                    }
                    :
                        {}))
            ]} onPress={function () { return _this.onYearSelect(item); }}>
                <text_1.RnText textAlignCenter style={{ color: (this.state.currentSelectedYear == item) ? rn_constants_1.default.WHITE_COLOR : this.secondaryColor }} note>{item}</text_1.RnText>
            </react_native_1.TouchableOpacity>);
    };
    RnDatePicker.prototype.showEvents = function (event) {
        return (<view_1.RnView style={{ marginLeft: rn_constants_1.default.DEFAULT_MARGIN }}>
                <text_1.RnText ellipsizeMode="tail" numberOfLines={1}>
                    {event.title}
                </text_1.RnText>
                <text_1.RnText ellipsizeMode="tail" numberOfLines={2} note>
                    {event.description}
                </text_1.RnText>
            </view_1.RnView>);
    };
    //#endregion
    //#region  ***************** calendar ui ************************
    RnDatePicker.prototype.flatListItemSeparator = function () {
        return (<view_1.RnView style={{
                height: 1,
                width: "95%",
                backgroundColor: rn_constants_1.default.TEXT_COLOR,
                opacity: 0.5,
                marginVertical: rn_constants_1.default.DEFAULT_MARGIN / 2,
                marginHorizontal: rn_constants_1.default.DEFAULT_MARGIN
            }}/>);
    };
    RnDatePicker.prototype.flatListHeader = function () {
        var _this = this;
        switch (this.state.viewType) {
            case VIEW_TYPE.PINNED_DATES:
                return (<view_1.RnView style={{ flex: 1 }}>
                        <text_1.RnText textAlignCenter style={{ color: this.primaryColor }}>
                            {"Events on ".concat(this.state.selectedPinnedDate)}
                        </text_1.RnText>
                    </view_1.RnView>);
                break;
            case VIEW_TYPE.MONTH:
            case VIEW_TYPE.MONTH_PICKER:
                return (<view_1.RnView style={{ marginBottom: rn_constants_1.default.DEFAULT_MARGIN / 2 }}>
                        <text_1.RnText textAlignCenter style={{ color: this.primaryColor }}>Choose Month</text_1.RnText>
                    </view_1.RnView>);
                break;
            case VIEW_TYPE.YEAR:
                return (<view_1.RnView style={{ marginBottom: rn_constants_1.default.DEFAULT_MARGIN / 2, flexDirection: 'row', justifyContent: 'center' }}>
                        <button_1.RnButton transparent onPress={function () {
                        _this.setState({
                            allYears: _this.getYears(_this.state.allYears[0] - 10)
                        });
                    }} iconLeft={<icon_1.RnIcon name="chevron-left" size={rn_constants_1.default.MEDIUM_FONT_SIZE} color={this.primaryColor}/>}></button_1.RnButton>
                        <text_1.RnText style={{ color: this.primaryColor }}>{"".concat(this.state.allYears[0], "-").concat(this.state.allYears[this.state.allYears.length - 1])}</text_1.RnText>
                        <button_1.RnButton transparent onPress={function () {
                        _this.setState({
                            allYears: _this.getYears(_this.state.allYears[_this.state.allYears.length - 1] + 9)
                        });
                    }} iconLeft={<icon_1.RnIcon name="chevron-right" size={rn_constants_1.default.MEDIUM_FONT_SIZE} color={this.primaryColor}/>}></button_1.RnButton>
                    </view_1.RnView>);
                break;
            case VIEW_TYPE.DATE:
            default:
                return (<view_1.RnView style={{ marginBottom: rn_constants_1.default.DEFAULT_MARGIN / 2 }}>
                        <react_native_1.FlatList data={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']} numColumns={7} renderItem={function (_a) {
                        var item = _a.item, index = _a.index;
                        return (<view_1.RnView style={{ flex: 1 }}>
                                    <text_1.RnText textAlignCenter style={{ color: _this.primaryColor }} note>{item}</text_1.RnText>
                                </view_1.RnView>);
                    }}/>
                    </view_1.RnView>);
                break;
        }
    };
    RnDatePicker.prototype.calendar = function () {
        var _this = this;
        var _a;
        switch (this.state.viewType) {
            case VIEW_TYPE.PINNED_DATES:
                {
                    return (<react_native_1.FlatList data={(_a = this.props.pinnedDates[this.state.selectedPinnedDate]) === null || _a === void 0 ? void 0 : _a.events} initialNumToRender={50} style={{ paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING / 2 }} ItemSeparatorComponent={this.flatListItemSeparator} ListHeaderComponent={this.flatListHeader.bind(this)} renderItem={function (_a) {
                            var item = _a.item, index = _a.index;
                            return (<>
                                    {_this.showEvents(item)}
                                </>);
                        }} key={'$'} keyExtractor={function (item, index) {
                            return "$".concat(item.toString());
                        }} showsVerticalScrollIndicator={false}/>);
                    break;
                }
            case VIEW_TYPE.MONTH_PICKER:
            case VIEW_TYPE.MONTH:
                {
                    return (<react_native_1.FlatList data={monthNames} initialNumToRender={50} numColumns={2} style={{ paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING / 2 }} ItemSeparatorComponent={this.flatListItemSeparator} ListHeaderComponent={this.flatListHeader.bind(this)} renderItem={function (_a) {
                            var item = _a.item, index = _a.index;
                            return (<>
                                    {_this.monthItems(item, index)}
                                </>);
                        }} key={'_'} keyExtractor={function (item, index) {
                            return "_".concat(item.toString());
                        }} showsVerticalScrollIndicator={false}/>);
                    break;
                }
            case VIEW_TYPE.YEAR:
                {
                    return (<react_native_1.FlatList data={this.state.allYears} initialNumToRender={50} numColumns={3} style={{ paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING / 2 }} ItemSeparatorComponent={this.flatListItemSeparator} ListHeaderComponent={this.flatListHeader.bind(this)} renderItem={function (_a) {
                            var item = _a.item, index = _a.index;
                            return (<>
                                    {_this.yearItems(item)}
                                </>);
                        }} key={'@'} keyExtractor={function (item, index) {
                            return "@".concat(item.toString());
                        }} showsVerticalScrollIndicator={false}/>);
                    break;
                }
            case VIEW_TYPE.DATE:
            default:
                {
                    return (<react_native_1.FlatList data={this.state.dates} initialNumToRender={50} numColumns={7} style={{ paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING / 2 }} ItemSeparatorComponent={this.flatListItemSeparator} ListHeaderComponent={this.flatListHeader.bind(this)} renderItem={function (_a) {
                            var item = _a.item, index = _a.index;
                            return (<>
                                    {_this.calendarItems(item)}
                                </>);
                        }} key={'#'} keyExtractor={function (item, index) {
                            return "#".concat(item.toString());
                        }} extraData={{ disableBeforeDays: this.props.disableBeforeDays, disableAfterDays: this.props.disableAfterDays }} showsVerticalScrollIndicator={false}/>);
                    break;
                }
        }
    };
    //#endregion
    RnDatePicker.prototype.renderCalendar = function () {
        var _this = this;
        var _a, _b;
        return (<view_1.RnView style={((_a = this.props) === null || _a === void 0 ? void 0 : _a.calendarStyles) ? (_b = this.props) === null || _b === void 0 ? void 0 : _b.calendarStyles : rn_styles_1.rnStyles.calendarBackGround}>
                <view_1.RnView style={[__assign({}, (!this.state.showModal ? { width: '40%', backgroundColor: 'transparent' } : { backgroundColor: this.primaryColor })), rn_styles_1.rnStyles.dayYearStyles]}>
                    {this.state.viewType == VIEW_TYPE.PINNED_DATES
                ?
                    <react_native_1.TouchableOpacity style={{ marginBottom: rn_constants_1.default.DEFAULT_MARGIN / 2, flexDirection: 'row' }} onPress={function () {
                            _this.setState({
                                viewType: VIEW_TYPE.DATE
                            });
                        }}>
                                <icon_1.RnIcon name="chevron-left" size={rn_constants_1.default.MEDIUM_FONT_SIZE} color={this.state.headerColor}/>
                                <text_1.RnText style={{ color: this.state.headerColor }} note>Calendar</text_1.RnText>
                            </react_native_1.TouchableOpacity>
                : (this.state.viewType == VIEW_TYPE.MONTH_PICKER ?
                    <>
                                    <view_1.RnView style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                                        <view_1.RnView row>
                                            {/* to decrement year */}
                                            <button_1.RnButton transparent onPress={function () { return _this.decrementYear(); }} iconLeft={<icon_1.RnIcon name="chevron-left" size={rn_constants_1.default.MEDIUM_FONT_SIZE} color={this.state.headerColor}/>}></button_1.RnButton>
                                            {/* year */}
                                            <text_1.RnText style={{ color: this.state.headerColor }} onPress={function () { _this.setState({ viewType: VIEW_TYPE.YEAR }); }}>
                                                {"".concat(this.state.currentSelectedYear)}
                                            </text_1.RnText>
                                            {/* to increment year */}
                                            <button_1.RnButton transparent onPress={function () { return _this.incrementYear(); }} iconLeft={<icon_1.RnIcon name="chevron-right" size={rn_constants_1.default.MEDIUM_FONT_SIZE} color={this.state.headerColor}/>}></button_1.RnButton>
                                        </view_1.RnView>

                                    </view_1.RnView>
                                </>
                    :
                        <>
                                    <view_1.RnView row>
                                        {/* to decrement month */}
                                        <button_1.RnButton transparent onPress={function () { return _this.decrementMonth(); }} iconLeft={<icon_1.RnIcon name="chevron-left" size={rn_constants_1.default.MEDIUM_FONT_SIZE} color={this.state.headerColor}/>}></button_1.RnButton>
                                        {/* month */}
                                        <text_1.RnText style={{ color: this.state.headerColor }} onPress={function () { _this.setState({ viewType: VIEW_TYPE.MONTH }); }}>
                                            {"".concat(monthNames[this.state.currentSelectedMonth])}
                                        </text_1.RnText>
                                        {/* to increment month */}
                                        <button_1.RnButton transparent onPress={function () { return _this.incrementMonth(); }} iconLeft={<icon_1.RnIcon name="chevron-right" size={rn_constants_1.default.MEDIUM_FONT_SIZE} color={this.state.headerColor}/>}></button_1.RnButton>
                                    </view_1.RnView>
                                    <view_1.RnView row>
                                        <text_1.RnText style={{ color: this.state.headerColor }} note>
                                            {"".concat(this.isSelectedDateValid(this.state.selectedOrStartDate) ? (0, moment_1.default)(this.state.selectedOrStartDate).format("Do MMMM YYYY") : "")}
                                        </text_1.RnText>
                                    </view_1.RnView>
                                    {/* ........................................................................................ */}
                                    <view_1.RnView row>
                                        {/* to decrement year */}
                                        <button_1.RnButton transparent onPress={function () { return _this.decrementYear(); }} iconLeft={<icon_1.RnIcon name="chevron-left" size={rn_constants_1.default.MEDIUM_FONT_SIZE} color={this.state.headerColor}/>}></button_1.RnButton>
                                        {/* year */}
                                        <text_1.RnText style={{ color: this.state.headerColor }} onPress={function () { _this.setState({ viewType: VIEW_TYPE.YEAR }); }}>
                                            {"".concat(this.state.currentSelectedYear)}
                                        </text_1.RnText>
                                        {/* to increment year */}
                                        <button_1.RnButton transparent onPress={function () { return _this.incrementYear(); }} iconLeft={<icon_1.RnIcon name="chevron-right" size={rn_constants_1.default.MEDIUM_FONT_SIZE} color={this.state.headerColor}/>}></button_1.RnButton>
                                    </view_1.RnView>
                                </>)}

                </view_1.RnView>
                {this.calendar()}
            </view_1.RnView>);
    };
    RnDatePicker.prototype.handleDatePickerPress = function (state) {
        if (!state && this.props.onClose) {
            this.props.onClose({
                startDateString: this.state.selectedOrStartDate,
                startDate: new Date(this.state.selectedOrStartDate),
                endDateString: this.state.endDate,
                endDate: new Date(this.state.endDate),
            });
        }
        this.setState({
            datePickerState: state
        });
    };
    RnDatePicker.prototype.getFormatedDateValue = function (date) {
        if (this.props.monthPicker) {
            if (this.isSelectedDateValid(this.props.selectedOrStartDate))
                return (((this.state.currentSelectedMonth + 1) < 10 ? '0' : '') + "".concat(this.state.currentSelectedMonth + 1, "/").concat(this.state.currentSelectedYear));
            return "MM YYYY";
        }
        if ((0, moment_1.default)(date).isValid())
            return (0, moment_1.default)(date).format(this.props.formatDate || 'DD MM YYYY');
        return this.props.formatDate || 'DD MM YYYY';
    };
    RnDatePicker.prototype.renderCalendarInput = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        return (<react_native_1.TouchableOpacity disabled={this.props.disable} onPress={function () {
                _this.state.showModal ? _this.handleDatePickerPress(true) : _this.setState({ showCalendar: true });
            }} style={[((_a = this.props) === null || _a === void 0 ? void 0 : _a.calendarInputStyles) ? (_b = this.props) === null || _b === void 0 ? void 0 : _b.calendarInputStyles : rn_styles_1.rnStyles.dateRangePickerContainer, this.props.disable ? rn_styles_1.rnStyles.disabledFieldControl : {}, this.props.highlighted ? rn_styles_1.rnStyles.highlightedFieldControl : {}]}>
                <view_1.RnView row>
                    <view_1.RnView row style={rn_styles_1.rnStyles.dateRangeText}>
                        <text_1.RnText textAlignCenter style={(_d = (_c = this.props) === null || _c === void 0 ? void 0 : _c.dateStyles) !== null && _d !== void 0 ? _d : rn_styles_1.rnStyles.inputText}>{this.getFormatedDateValue(this.state.selectedOrStartDate)}</text_1.RnText>
                        {(this.props.dateRange || ((_e = this.props) === null || _e === void 0 ? void 0 : _e.showDateRangeLabel)) && <text_1.RnText textAlignCenter style={rn_styles_1.rnStyles.inputText}>{(_f = this.props.dateRangeSeparator) !== null && _f !== void 0 ? _f : ' - '}</text_1.RnText>}
                        {(this.props.dateRange || ((_g = this.props) === null || _g === void 0 ? void 0 : _g.showDateRangeLabel)) && <text_1.RnText textAlignCenter style={(_j = (_h = this.props) === null || _h === void 0 ? void 0 : _h.dateStyles) !== null && _j !== void 0 ? _j : rn_styles_1.rnStyles.inputText}>{this.getFormatedDateValue(this.state.endDate)}</text_1.RnText>}
                    </view_1.RnView>
                </view_1.RnView>
                <view_1.RnView marginLeft={rn_constants_1.default.DEFAULT_MARGIN / 2}>
                    <icon_1.RnIcon name="date-range" color={(_k = this.props.calendarIconColor) !== null && _k !== void 0 ? _k : rn_constants_1.default.LIGHT_TEXT_COLOR} size={rn_constants_1.default.ICON_SIZE}/>
                </view_1.RnView>
            </react_native_1.TouchableOpacity>);
    };
    RnDatePicker.prototype.renderType = function () {
        switch (this.viewType) {
            case 'sheet':
                return <>{this.renderCalendar()}</>;
            case 'dialog':
            default:
                return <>{this.renderCalendarInput()}</>;
                break;
        }
    };
    RnDatePicker.prototype.renderDateField = function () {
        return <view_1.RnView>
            {this.state.showCalendar ? this.renderCalendar() : this.renderCalendarInput()}
        </view_1.RnView>;
    };
    RnDatePicker.prototype.render = function () {
        var _this = this;
        var _a;
        return (<>
                {!((_a = this.props) === null || _a === void 0 ? void 0 : _a.showModal) ? this.renderDateField() : this.renderType()}
                <react_native_1.Modal animationType="fade" transparent={true} visible={this.state.datePickerState} onRequestClose={function () { return _this.handleDatePickerPress(false); }}>
                    <view_1.RnView style={[rn_styles_1.rnStyles.dateContainer, (this.modalPosition == 'end' ? { justifyContent: 'flex-end' } : {})]}>
                        <view_1.RnView style={{ width: this.modalPosition == 'end' ? '100%' : '95%' }}>
                            <view_1.RnView padding row justifyCenter style={rn_styles_1.rnStyles.dialogHeader}>
                                <text_1.RnText textAlignCenter style={{ flex: 1, fontSize: 18 }} fontWeight={600}>Calendar</text_1.RnText>
                                <button_1.RnButton transparent onPress={function () { return _this.handleDatePickerPress(false); }} iconLeft={<icon_1.RnIcon name="close" size={20} color={rn_constants_1.default.PRIMARY_COLOR}></icon_1.RnIcon>}></button_1.RnButton>
                            </view_1.RnView>
                            <view_1.RnView style={{ backgroundColor: rn_constants_1.default.WHITE_COLOR, borderBottomLeftRadius: rn_constants_1.default.BASE_BORDER_RADIUS, borderBottomRightRadius: rn_constants_1.default.BASE_BORDER_RADIUS, paddingTop: rn_constants_1.default.DEFAULT_PADDING }}>
                                {this.renderCalendar()}
                            </view_1.RnView>
                        </view_1.RnView>
                    </view_1.RnView>
                </react_native_1.Modal>
            </>);
    };
    return RnDatePicker;
}(react_1.Component));
exports.RnDatePicker = RnDatePicker;
