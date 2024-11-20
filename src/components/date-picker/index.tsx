import moment from "moment";
import React, { Component } from "react";
import { FlatList, Modal, TouchableOpacity } from "react-native";
import { convertDateToTZFormat } from "../../config/rn-date-formatter";
import rnConstants from "../../config/rn-constants";
import { rnStyles } from "../../config/rn-styles";
import { RnButton } from "../button";
import { RnIcon } from "../icon";
import { RnView } from "../view";
import { RnText } from "../text";
import { RnDatePickerProps } from "../../types";

enum VIEW_TYPE {
    DATE = 'DATE',
    MONTH = 'MONTH',
    YEAR = 'YEAR',
    PINNED_DATES = 'PINNED_DATES',
    MONTH_PICKER = 'MONTH_PICKER'
}

interface RndatePickerState {
    selectedOrStartDate: string | Date,
    endDate: string | Date,
    dateRangeSelectionOn: boolean,
    dates: string[],
    currentSelectedMonth: number,
    currentSelectedYear: number,
    viewType: VIEW_TYPE,
    allYears: number[],
    selectedPinnedDate: string,
    datePickerState: boolean,
    showCalendar: boolean,
    showModal: boolean,
    headerColor: string,
}



const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


export class RnDatePicker extends Component<RnDatePickerProps, RndatePickerState> {
    private primaryColor: string = rnConstants.PRIMARY_COLOR
    private secondaryColor: string = rnConstants.TEXT_COLOR
    private viewType = 'dialog'
    private modalPosition = 'center'
    constructor(props: RnDatePickerProps | Readonly<RnDatePickerProps>) {
        super(props)
        this.primaryColor = this.props.primaryColor ? this.props.primaryColor : this.primaryColor
        this.secondaryColor = this.props.secondaryColor ? this.props.secondaryColor : this.secondaryColor
        this.viewType = this.props?.type || 'dialog'
        this.modalPosition = this.props.alignItem || 'center'
        this.state = {
            selectedOrStartDate: this.isSelectedDateValid(this.props.selectedOrStartDate) ? this.props.selectedOrStartDate : "",
            dates: this.getDates(),
            currentSelectedMonth: this.isSelectedDateValid(this.props.selectedOrStartDate) ? new Date(this.props.selectedOrStartDate).getMonth() : new Date().getMonth(),
            currentSelectedYear: this.isSelectedDateValid(this.props.selectedOrStartDate) ? new Date(this.props.selectedOrStartDate).getFullYear() : new Date().getFullYear(),
            viewType: this.props.monthPicker ? VIEW_TYPE.MONTH_PICKER : VIEW_TYPE.DATE,
            allYears: this.getYears(this.isSelectedDateValid(this.props.selectedOrStartDate) ? new Date(this.props.selectedOrStartDate).getFullYear() : new Date().getFullYear()),
            endDate: (this.isSelectedDateValid(this.props.endDate as string | Date) ? this.props.endDate : "") as string | Date,
            dateRangeSelectionOn: false,
            selectedPinnedDate: "",
            datePickerState: false,
            showCalendar: false,
            showModal: typeof this.props.showModal == 'boolean' ? this.props.showModal : true,
            headerColor: !this.props?.showModal ? this.secondaryColor : rnConstants.WHITE_COLOR,
        }
    }

    componentDidUpdate(prevProps: Readonly<RnDatePickerProps>, prevState: Readonly<RndatePickerState>, snapshot?: any): void {
        if (prevProps.selectedOrStartDate != this.props.selectedOrStartDate) {
            this.setState({
                selectedOrStartDate: this.isSelectedDateValid(this.props.selectedOrStartDate) ? this.props.selectedOrStartDate : "",
                dates: this.getDates(),
                currentSelectedMonth: this.isSelectedDateValid(this.props.selectedOrStartDate) ? new Date(this.props.selectedOrStartDate).getMonth() : new Date().getMonth(),
                currentSelectedYear: this.isSelectedDateValid(this.props.selectedOrStartDate) ? new Date(this.props.selectedOrStartDate).getFullYear() : new Date().getFullYear(),
                viewType: this.props.monthPicker ? VIEW_TYPE.MONTH_PICKER : VIEW_TYPE.DATE,
                allYears: this.getYears(this.isSelectedDateValid(this.props.selectedOrStartDate) ? new Date(this.props.selectedOrStartDate).getFullYear() : new Date().getFullYear()),
                endDate: (this.isSelectedDateValid(this.props.endDate as string | Date) ? this.props.endDate : "") as string | Date,
                dateRangeSelectionOn: false,
                selectedPinnedDate: ""
            })
        }
    }
    //#region  ***************** dates setting in calendar ************************
    /**
     * check whether the given date or string is valid or not
     * @private
     * @param {(string | Date)} date
     * @return {*} 
     * @memberof DateWithCalendar
     */
    private isSelectedDateValid(date: string | Date) {
        if (date == undefined || date == null || !moment(date).isValid()) {
            return false
        }
        else {
            return true
        }
    }
    /**
     * get years with range -10 to 10 from given year
     * @private
     * @param {*} middleYear
     * @return {*} 
     * @memberof DateWithCalendar
     */
    private getYears(middleYear: number) {
        let years: number[] = []
        for (let index = -8; index < 10; index++) {
            years.push(middleYear + index)
        }
        return years
    }
    /**
     * get dates of current month in current year
     * @private
     * @param {number} [year]
     * @param {number} [month]
     * @return {*} 
     * @memberof DateWithCalendar
     */
    private getDates(year?: number, month?: number) {
        // new Date(year, month, day, hours, minutes, seconds, milliseconds)
        const newDate: Date = new Date()
        if (!year) {
            if (this.isSelectedDateValid(this.state?.selectedOrStartDate)) {
                year = new Date(this.state.selectedOrStartDate).getFullYear()
            }
            else if (this.isSelectedDateValid(this.props?.selectedOrStartDate)) {
                year = new Date(this.props.selectedOrStartDate).getFullYear()
            }
            else {
                year = newDate.getFullYear()
            }
        }
        if (!month) {
            if (this.isSelectedDateValid(this.state?.selectedOrStartDate)) {
                month = new Date(this.state.selectedOrStartDate).getMonth()
            }
            else if (this.isSelectedDateValid(this.props?.selectedOrStartDate)) {
                month = new Date(this.props.selectedOrStartDate).getMonth()
            }
            else {
                month = newDate.getMonth()
            }
        }
        let currenDate = new Date(year, month)
        var firstDay = new Date(currenDate.getFullYear(), currenDate.getMonth(), 1).getDay();
        let numDays = new Date(currenDate.getFullYear(), currenDate.getMonth() + 1, 0).getDate();
        let days = 1;
        let datesArray: string[] = []
        let startDateFound = false
        for (let index = 0; index < 42; index++) {
            if (startDateFound) {
                if (days <= numDays) {
                    datesArray.push(days.toString())
                    days++
                }
                else {
                    datesArray.push("")
                }
            }
            else {
                if (index == firstDay) {
                    datesArray.push(days.toString())
                    days++
                    startDateFound = true
                }
                else {
                    datesArray.push("")
                }
            }
        }
        return datesArray
    }
    /**
     * set dates for selected month and year
     * @private
     * @param {*} cb is a function
     * @memberof DateWithCalendar
     */
    private setDatesofCurrentSelectedMonthAndYear(cb: Function) {
        this.setState({
            dates: this.getDates(this.state.currentSelectedYear, this.state.currentSelectedMonth)
        }, () => cb(null))

    }

    //#endregion

    //#region  ***************** validations and event on date , month and year ************************

    private checkSelectedDate(day: number) {
        if (day == 0) {
            return false
        }
        const currentDate = moment().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(day).format('YYYY-MM-DD')
        const selectedOrStartDate = moment(this.state.selectedOrStartDate || new Date()).format('YYYY-MM-DD')
        if (!(this.props.dateRange || this.props?.showDateRangeLabel) || this.state.endDate == "") {
            if (currentDate == selectedOrStartDate)
                return true
            else
                return false
        }
        else {
            const endDate = moment(this.state.endDate).format('YYYY-MM-DD')
            if ((currentDate >= selectedOrStartDate) && (currentDate <= endDate))
                return true
            else
                return false
        }
    }

    private isToday(day) {
        const currentDate = moment().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(day).format('YYYY-MM-DD')
        const selectedOrStartDate = moment(new Date()).format('YYYY-MM-DD')
        return (currentDate === selectedOrStartDate);
    }

    private isDateDisable(day: number) {
        let minDate = this.props?.minDateToDisable ? moment(this.props?.minDateToDisable).format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')
        let maxDate = this.props?.maxDateToDisable ? moment(this.props?.maxDateToDisable).format('YYYY-MM-DD') : moment().format('YYYY-MM-DD')
        let currnetDate = moment().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(day).format('YYYY-MM-DD')
        if (day == 0) {
            return true
        }
        else if (this.props.disableBeforeDays && (currnetDate < minDate)) {
            return true
        }
        else if (this.props.disableAfterDays && (currnetDate > maxDate)) {
            return true
        }
        return false
    }

    private pinnedData(day: number) {
        if (day == 0) {
            return {
                found: false,
                data: {} as any
            }
        }
        let currnetDate = moment().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(day).format('YYYY-MM-DD')
        if (this.props.pinnedDates[currnetDate]) {
            return {
                found: true,
                data: this.props.pinnedDates[currnetDate]
            }
        }
        else {
            return {
                found: false,
                data: {} as any
            }
        }
    }

    private onMonthSelect(month: number) {
        if (this.state.viewType == VIEW_TYPE.MONTH_PICKER) {
            this.setState({ currentSelectedMonth: month, datePickerState: false },
                () => this.props.onChange({ month, year: this.state.currentSelectedYear }))
            return
        }
        this.setState({
            currentSelectedMonth: month,
            viewType: VIEW_TYPE.DATE
        }, () => { this.setDatesofCurrentSelectedMonthAndYear(() => { }) })
    }

    private onYearSelect(year: number) {
        this.setState({
            currentSelectedYear: year,
            viewType: this.props.monthPicker ? VIEW_TYPE.MONTH_PICKER : VIEW_TYPE.MONTH
        })
    }

    //#endregion

    //#region  ***************** date updates ************************

    private onDateSelect(date: number) {
        if (!this.props.dateRange) {
            this.setState({
                selectedOrStartDate: convertDateToTZFormat(moment().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(date).startOf('day')),
                datePickerState: false
            }, () => this.props.onChange(
                {
                    startDateString: this.state.selectedOrStartDate,
                    startDate: new Date(this.state.selectedOrStartDate), // returns current date as per time zone
                    endDateString: this.state.selectedOrStartDate,
                    endDate: new Date(this.state.selectedOrStartDate),
                }
            ))
        }
        else {
            if (this.props.startDateChangeDetect) {
                this.setState({
                    selectedOrStartDate: convertDateToTZFormat(moment().date(date).month(this.state.currentSelectedMonth).year(this.state.currentSelectedYear).startOf('day')),
                    endDate: '',
                    dateRangeSelectionOn: false,
                    datePickerState: false
                }, () => {
                    this.props.onChange(
                        {
                            startDateString: this.state.selectedOrStartDate,
                            startDate: new Date(this.state.selectedOrStartDate),
                            endDateString: '',
                            endDate: '',
                        }
                    )
                })
                return
            }
            if (!this.state.dateRangeSelectionOn) {
                this.setState({
                    selectedOrStartDate: convertDateToTZFormat(moment().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(date).startOf('day')),
                    dateRangeSelectionOn: true,
                    endDate: ""
                })
            }
            else {
                const startDate = moment(this.state.selectedOrStartDate).format("YYYY-MM-DD")
                const endDate = moment().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(date).format("YYYY-MM-DD")
                if (startDate > endDate) {
                    const startDate = this.state.selectedOrStartDate
                    this.setState({
                        selectedOrStartDate: convertDateToTZFormat(moment().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(date).startOf('day')),
                        endDate: startDate,
                        dateRangeSelectionOn: false,
                        datePickerState: false
                    }, () => {
                        this.props.onChange(
                            {
                                startDateString: this.state.selectedOrStartDate,
                                startDate: new Date(this.state.selectedOrStartDate),
                                endDateString: this.state.endDate,
                                endDate: new Date(this.state.endDate),
                            }
                        )
                    })
                }
                else {
                    this.setState({
                        endDate: convertDateToTZFormat(moment().year(this.state.currentSelectedYear).month(this.state.currentSelectedMonth).date(date).endOf('day')),
                        dateRangeSelectionOn: false,
                        datePickerState: false
                    }, () => {
                        this.props.onChange(
                            {
                                startDateString: this.state.selectedOrStartDate,
                                startDate: new Date(this.state.selectedOrStartDate),
                                endDateString: this.state.endDate,
                                endDate: new Date(this.state.endDate),
                            }
                        )
                    })
                }
            }
        }
        this.setState({ showCalendar: false })
    }

    private incrementMonth() {
        if (this.state.currentSelectedMonth == 11) {
            this.setState({
                currentSelectedMonth: 0,
                currentSelectedYear: this.state.currentSelectedYear + 1
            }, () => { this.setDatesofCurrentSelectedMonthAndYear(() => { }) })
        }
        else {
            this.setState({ currentSelectedMonth: this.state.currentSelectedMonth + 1 }
                , () => { this.setDatesofCurrentSelectedMonthAndYear(() => { }) })
        }
    }

    private decrementMonth() {
        if (this.state.currentSelectedMonth == 0) {
            this.setState({
                currentSelectedMonth: 11,
                currentSelectedYear: this.state.currentSelectedYear - 1
            }, () => { this.setDatesofCurrentSelectedMonthAndYear(() => { }) })
        }
        else {
            this.setState({ currentSelectedMonth: this.state.currentSelectedMonth - 1 }, () => { this.setDatesofCurrentSelectedMonthAndYear(() => { }) })
        }
    }

    private incrementYear() {
        this.setState({
            currentSelectedYear: this.state.currentSelectedYear + 1
        }, () => { this.setDatesofCurrentSelectedMonthAndYear(() => { this.setDatesofCurrentSelectedMonthAndYear(() => { }) }) })
    }

    private decrementYear() {
        this.setState({
            currentSelectedYear: this.state.currentSelectedYear - 1
        }, () => { this.setDatesofCurrentSelectedMonthAndYear(() => { this.setDatesofCurrentSelectedMonthAndYear(() => { }) }) })
    }

    //#endregion

    //#region  ***************** Ui for specific views ************************

    private calendarItems(item: any) {
        let pinnedDate: {
            found: boolean,
            data: {
                color?: string,
                events: {
                    title: string,
                    description: string
                }[]
            }

        } = this.pinnedData(parseInt(item || '0'))
        const isToday = this.isToday(parseInt(item || '0'));
        const isSelected = this.checkSelectedDate(parseInt(item || '0'));
        return (
            <TouchableOpacity style={[
                {
                    flex: 1,
                    height: rnConstants.HEADER_HEIGHT,
                    paddingVertical: rnConstants.DEFAULT_PADDING,
                    marginHorizontal: rnConstants.DEFAULT_MARGIN / 5,
                    opacity: this.isDateDisable(parseInt(item || '0')) ? 0.5 : 1,
                },
                {
                    ...(
                        isSelected || isToday ?
                            {
                                borderColor: (isToday || !this.state.selectedOrStartDate) ? rnConstants.PRIMARY_COLOR : rnConstants.TRANSPARENT_COLOR,
                                borderWidth: (isToday || !this.state.selectedOrStartDate) ? 1 : 0,
                                ...(isSelected && this.state.selectedOrStartDate ? { backgroundColor: this.primaryColor } : {}),
                                borderRadius: rnConstants.INPUT_BORDER_RADIUS,
                            }
                            :
                            pinnedDate.found ?
                                {
                                    backgroundColor: pinnedDate.data?.color ? pinnedDate.data.color : rnConstants.BACKGROUND_COLOR,
                                    borderRadius: rnConstants.INPUT_BORDER_RADIUS,
                                }
                                :
                                (this.isDateDisable(parseInt(item || '0')) && item != "") ?
                                    {

                                        backgroundColor: rnConstants.BACKGROUND_COLOR,
                                        borderRadius: rnConstants.INPUT_BORDER_RADIUS,
                                    }
                                    :
                                    {}
                    )
                }]}
                disabled={pinnedDate.found == true ? false : this.isDateDisable(parseInt(item || '0'))}
                onLongPress={() => {
                    if (parseInt(item || '0') == 0 || pinnedDate.found == false) {
                        return
                    }
                    let currnetDate = moment().date(parseInt(item || '0')).month(this.state.currentSelectedMonth).year(this.state.currentSelectedYear).format('YYYY-MM-DD')
                    this.setState({
                        selectedPinnedDate: currnetDate,
                        viewType: VIEW_TYPE.PINNED_DATES
                    })
                }}
                onPress={() => {
                    if (this.isDateDisable(parseInt(item || '0'))) {
                        return
                    }
                    this.onDateSelect(parseInt(item || '0'))
                }}
            >
                {
                    pinnedDate.found
                        ?
                        <RnIcon
                            name="circle"
                            size={rnConstants.EXTRA_SMALL_FONT_SIZE}
                            color={pinnedDate.data?.color && pinnedDate.data.color == rnConstants.WHITE_COLOR ? rnConstants.TEXT_COLOR : rnConstants.WHITE_COLOR}
                        />
                        :
                        <></>
                }
                <RnText textAlignCenter style={{ color: this.isDateDisable(parseInt(item || '0')) ? rnConstants.DISABLE_COLOR : (this.checkSelectedDate(parseInt(item || '0')) && this.state.selectedOrStartDate) || pinnedDate.found ? (pinnedDate.found && pinnedDate.data?.color && pinnedDate.data.color == rnConstants.WHITE_COLOR) ? this.secondaryColor : rnConstants.WHITE_COLOR : this.secondaryColor }} note>{item}</RnText>
            </TouchableOpacity>
        )
    }

    private monthItems(item: string, index: number) {
        return (
            <TouchableOpacity style={[
                {
                    flex: 1,
                    height: rnConstants.HEADER_HEIGHT,
                    paddingVertical: rnConstants.DEFAULT_PADDING,
                    marginHorizontal: rnConstants.DEFAULT_MARGIN / 5
                },
                {
                    ...(
                        (this.state.currentSelectedMonth == index) ?
                            {

                                backgroundColor: this.primaryColor,
                                borderRadius: rnConstants.INPUT_BORDER_RADIUS,
                            }
                            :
                            {}
                    )
                }]}
                onPress={() => this.onMonthSelect(index)}
            >
                <RnText textAlignCenter style={{ color: (this.state.currentSelectedMonth == index) ? rnConstants.WHITE_COLOR : this.secondaryColor }} note>{item}</RnText>
            </TouchableOpacity>
        )
    }

    private yearItems(item: number) {
        return (
            <TouchableOpacity style={[
                {
                    flex: 1,
                    height: rnConstants.HEADER_HEIGHT,
                    paddingVertical: rnConstants.DEFAULT_PADDING,
                    marginHorizontal: rnConstants.DEFAULT_MARGIN / 5
                },
                {
                    ...(
                        (this.state.currentSelectedYear == item) ?
                            {

                                backgroundColor: this.primaryColor,
                                borderRadius: rnConstants.INPUT_BORDER_RADIUS,
                            }
                            :
                            {}
                    )
                }]}
                onPress={() => this.onYearSelect(item)}
            >
                <RnText textAlignCenter style={{ color: (this.state.currentSelectedYear == item) ? rnConstants.WHITE_COLOR : this.secondaryColor }} note>{item}</RnText>
            </TouchableOpacity>
        )
    }

    private showEvents(event: {
        title: string,
        description: string
    }) {
        return (
            <RnView style={{ marginLeft: rnConstants.DEFAULT_MARGIN }}>
                <RnText ellipsizeMode="tail" numberOfLines={1}>
                    {event.title}
                </RnText>
                <RnText ellipsizeMode="tail" numberOfLines={2} note>
                    {event.description}
                </RnText>
            </RnView>
        )
    }

    //#endregion

    //#region  ***************** calendar ui ************************

    private flatListItemSeparator() {
        return (
            <RnView
                style={{
                    height: 1,
                    width: "95%",
                    backgroundColor: rnConstants.TEXT_COLOR,
                    opacity: 0.5,
                    marginVertical: rnConstants.DEFAULT_MARGIN / 2,
                    marginHorizontal: rnConstants.DEFAULT_MARGIN
                }}
            />
        );
    }

    private flatListHeader() {
        switch (this.state.viewType) {
            case VIEW_TYPE.PINNED_DATES:
                return (
                    <RnView style={{ flex: 1 }}>
                        <RnText textAlignCenter style={{ color: this.primaryColor }}
                        >
                            {`Events on ${this.state.selectedPinnedDate}`}
                        </RnText>
                    </RnView>
                )
                break;
            case VIEW_TYPE.MONTH:
            case VIEW_TYPE.MONTH_PICKER:
                return (
                    <RnView style={{ marginBottom: rnConstants.DEFAULT_MARGIN / 2 }}>
                        <RnText textAlignCenter style={{ color: this.primaryColor }}>Choose Month</RnText>
                    </RnView>
                )

                break;

            case VIEW_TYPE.YEAR:
                return (
                    <RnView style={{ marginBottom: rnConstants.DEFAULT_MARGIN / 2, flexDirection: 'row', justifyContent: 'center' }}>
                        <RnButton transparent
                            onPress={() => {
                                this.setState({
                                    allYears: this.getYears(this.state.allYears[0] - 10)
                                })
                            }}
                            iconLeft={<RnIcon
                                name="chevron-left"
                                size={rnConstants.MEDIUM_FONT_SIZE}
                                color={this.primaryColor}

                            />}></RnButton>
                        <RnText style={{ color: this.primaryColor }}>{`${this.state.allYears[0]}-${this.state.allYears[this.state.allYears.length - 1]}`}</RnText>
                        <RnButton transparent
                            onPress={() => {
                                this.setState({
                                    allYears: this.getYears(this.state.allYears[this.state.allYears.length - 1] + 9)
                                })
                            }}
                            iconLeft={<RnIcon
                                name="chevron-right"
                                size={rnConstants.MEDIUM_FONT_SIZE}
                                color={this.primaryColor}

                            />}></RnButton>
                    </RnView>
                )
                break;

            case VIEW_TYPE.DATE:
            default:
                return (
                    <RnView style={{ marginBottom: rnConstants.DEFAULT_MARGIN / 2 }}>
                        <FlatList
                            data={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
                            numColumns={7}
                            renderItem={({ item, index }) => (
                                <RnView style={{ flex: 1 }}>
                                    <RnText textAlignCenter style={{ color: this.primaryColor }} note>{item}</RnText>
                                </RnView>
                            )}
                        />
                    </RnView>
                );
                break;
        }
    }

    private calendar() {
        switch (this.state.viewType) {
            case VIEW_TYPE.PINNED_DATES:
                {
                    return (
                        <FlatList
                            data={this.props.pinnedDates[this.state.selectedPinnedDate]?.events}
                            initialNumToRender={50}
                            style={{ paddingHorizontal: rnConstants.DEFAULT_PADDING / 2 }}
                            ItemSeparatorComponent={this.flatListItemSeparator}
                            ListHeaderComponent={this.flatListHeader.bind(this)}
                            renderItem={({ item, index }) => (
                                <>
                                    {this.showEvents(item)}
                                </>
                            )}
                            key={'$'}
                            keyExtractor={(item, index) => {
                                return `$${item.toString()}`;
                            }}
                            showsVerticalScrollIndicator={false}
                        />
                    )

                    break;
                }
            case VIEW_TYPE.MONTH_PICKER:
            case VIEW_TYPE.MONTH:
                {
                    return (
                        <FlatList
                            data={monthNames}
                            initialNumToRender={50}
                            numColumns={2}
                            style={{ paddingHorizontal: rnConstants.DEFAULT_PADDING / 2 }}
                            ItemSeparatorComponent={this.flatListItemSeparator}
                            ListHeaderComponent={this.flatListHeader.bind(this)}
                            renderItem={({ item, index }) => (
                                <>
                                    {this.monthItems(item, index)}
                                </>
                            )}
                            key={'_'}
                            keyExtractor={(item, index) => {
                                return `_${item.toString()}`;
                            }}
                            showsVerticalScrollIndicator={false}
                        />
                    )

                    break;
                }
            case VIEW_TYPE.YEAR:
                {
                    return (
                        <FlatList
                            data={this.state.allYears}
                            initialNumToRender={50}
                            numColumns={3}
                            style={{ paddingHorizontal: rnConstants.DEFAULT_PADDING / 2 }}
                            ItemSeparatorComponent={this.flatListItemSeparator}
                            ListHeaderComponent={this.flatListHeader.bind(this)}
                            renderItem={({ item, index }) => (
                                <>
                                    {this.yearItems(item)}
                                </>
                            )}
                            key={'@'}
                            keyExtractor={(item, index) => {
                                return `@${item.toString()}`;
                            }}
                            showsVerticalScrollIndicator={false}
                        />
                    )
                    break;
                }

            case VIEW_TYPE.DATE:
            default:
                {
                    return (
                        <FlatList
                            data={this.state.dates}
                            initialNumToRender={50}
                            numColumns={7}
                            style={{ paddingHorizontal: rnConstants.DEFAULT_PADDING / 2 }}
                            ItemSeparatorComponent={this.flatListItemSeparator}
                            ListHeaderComponent={this.flatListHeader.bind(this)}
                            renderItem={({ item, index }) => (
                                <>
                                    {this.calendarItems(item)}
                                </>
                            )}
                            key={'#'}
                            keyExtractor={(item, index) => {
                                return `#${item.toString()}`;
                            }}
                            extraData={{ disableBeforeDays: this.props.disableBeforeDays, disableAfterDays: this.props.disableAfterDays }}
                            showsVerticalScrollIndicator={false}
                        />
                    )
                    break;
                }
        }
    }

    //#endregion

    private renderCalendar() {
        return (
            <RnView style={this.props?.calendarStyles ? this.props?.calendarStyles : rnStyles.calendarBackGround}>
                <RnView style={[{ ...(!this.state.showModal ? { width: '40%', backgroundColor: 'transparent' } : { backgroundColor: this.primaryColor }) }, rnStyles.dayYearStyles]}>
                    {
                        this.state.viewType == VIEW_TYPE.PINNED_DATES
                            ?
                            <TouchableOpacity style={{ marginBottom: rnConstants.DEFAULT_MARGIN / 2, flexDirection: 'row' }}
                                onPress={() => {
                                    this.setState({
                                        viewType: VIEW_TYPE.DATE
                                    })
                                }}
                            >
                                <RnIcon
                                    name="chevron-left"
                                    size={rnConstants.MEDIUM_FONT_SIZE}
                                    color={this.state.headerColor}
                                />
                                <RnText style={{ color: this.state.headerColor }} note>Calendar</RnText>
                            </TouchableOpacity>
                            : (this.state.viewType == VIEW_TYPE.MONTH_PICKER ?
                                <>
                                    <RnView style={{ flex: 1, alignItems: "center", justifyContent: 'center' }}>
                                        <RnView row>
                                            {/* to decrement year */}
                                            <RnButton transparent
                                                onPress={() => this.decrementYear()}
                                                iconLeft={<RnIcon
                                                    name="chevron-left"
                                                    size={rnConstants.MEDIUM_FONT_SIZE}
                                                    color={this.state.headerColor}
                                                />}></RnButton>
                                            {/* year */}
                                            <RnText style={{ color: this.state.headerColor }}
                                                onPress={() => { this.setState({ viewType: VIEW_TYPE.YEAR }) }}
                                            >
                                                {`${this.state.currentSelectedYear}`}
                                            </RnText>
                                            {/* to increment year */}
                                            <RnButton transparent
                                                onPress={() => this.incrementYear()}
                                                iconLeft={<RnIcon
                                                    name="chevron-right"
                                                    size={rnConstants.MEDIUM_FONT_SIZE}
                                                    color={this.state.headerColor}

                                                />}></RnButton>
                                        </RnView>

                                    </RnView>
                                </>
                                :

                                <>
                                    <RnView row>
                                        {/* to decrement month */}
                                        <RnButton transparent
                                            onPress={() => this.decrementMonth()}
                                            iconLeft={<RnIcon
                                                name="chevron-left"
                                                size={rnConstants.MEDIUM_FONT_SIZE}
                                                color={this.state.headerColor}
                                            />}></RnButton>
                                        {/* month */}
                                        <RnText style={{ color: this.state.headerColor }}
                                            onPress={() => { this.setState({ viewType: VIEW_TYPE.MONTH }) }}
                                        >
                                            {`${monthNames[this.state.currentSelectedMonth]}`}
                                        </RnText>
                                        {/* to increment month */}
                                        <RnButton transparent
                                            onPress={() => this.incrementMonth()}
                                            iconLeft={<RnIcon
                                                name="chevron-right"
                                                size={rnConstants.MEDIUM_FONT_SIZE}
                                                color={this.state.headerColor}

                                            />}></RnButton>
                                    </RnView>
                                    <RnView row>
                                        <RnText style={{ color: this.state.headerColor }} note
                                        >
                                            {`${this.isSelectedDateValid(this.state.selectedOrStartDate) ? moment(this.state.selectedOrStartDate).format("Do MMMM YYYY") : ""}`}
                                        </RnText>
                                    </RnView>
                                    {/* ........................................................................................ */}
                                    <RnView row>
                                        {/* to decrement year */}
                                        <RnButton transparent
                                            onPress={() => this.decrementYear()}
                                            iconLeft={<RnIcon
                                                name="chevron-left"
                                                size={rnConstants.MEDIUM_FONT_SIZE}
                                                color={this.state.headerColor}
                                            />}></RnButton>
                                        {/* year */}
                                        <RnText style={{ color: this.state.headerColor }}
                                            onPress={() => { this.setState({ viewType: VIEW_TYPE.YEAR }) }}
                                        >
                                            {`${this.state.currentSelectedYear}`}
                                        </RnText>
                                        {/* to increment year */}
                                        <RnButton transparent
                                            onPress={() => this.incrementYear()}
                                            iconLeft={<RnIcon
                                                name="chevron-right"
                                                size={rnConstants.MEDIUM_FONT_SIZE}
                                                color={this.state.headerColor}

                                            />}></RnButton>
                                    </RnView>
                                </>)
                    }

                </RnView>
                {this.calendar()}
            </RnView>
        )
    }

    private handleDatePickerPress(state: boolean) {
        if (!state && this.props.onClose) {
            this.props.onClose({
                startDateString: this.state.selectedOrStartDate,
                startDate: new Date(this.state.selectedOrStartDate),
                endDateString: this.state.endDate,
                endDate: new Date(this.state.endDate),
            })
        }
        this.setState({
            datePickerState: state
        });
    }
    private getFormatedDateValue(date: string | Date) {
        if (this.props.monthPicker) {
            if (this.isSelectedDateValid(this.props.selectedOrStartDate))
                return (((this.state.currentSelectedMonth + 1) < 10 ? '0' : '') + `${this.state.currentSelectedMonth + 1}/${this.state.currentSelectedYear}`)
            return "MM YYYY"
        }
        if (moment(date).isValid())
            return moment(date).format(this.props.formatDate || 'DD MM YYYY');
        return this.props.formatDate || 'DD MM YYYY';
    }

    private renderCalendarInput() {
        return (
            <TouchableOpacity disabled={this.props.disable} onPress={() => {
                this.state.showModal ? this.handleDatePickerPress(true) : this.setState({ showCalendar: true })
            }} style={[this.props?.calendarInputStyles ? this.props?.calendarInputStyles : rnStyles.dateRangePickerContainer, this.props.disable ? rnStyles.disabledFieldControl : {}, this.props.highlighted ? rnStyles.highlightedFieldControl : {}]}>
                <RnView row>
                    <RnView row style={rnStyles.dateRangeText}>
                        <RnText textAlignCenter style={this.props?.dateStyles ?? rnStyles.inputText}>{this.getFormatedDateValue(this.state.selectedOrStartDate)}</RnText>
                        {(this.props.dateRange || this.props?.showDateRangeLabel) && <RnText textAlignCenter style={rnStyles.inputText}>{this.props.dateRangeSeparator ?? ' - '}</RnText>}
                        {(this.props.dateRange || this.props?.showDateRangeLabel) && <RnText textAlignCenter style={this.props?.dateStyles ?? rnStyles.inputText}>{this.getFormatedDateValue(this.state.endDate)}</RnText>}
                    </RnView>
                </RnView>
                <RnView marginLeft={rnConstants.DEFAULT_MARGIN / 2}>
                    <RnIcon
                        name="date-range"
                        color={this.props.calendarIconColor ?? rnConstants.LIGHT_TEXT_COLOR}
                        size={rnConstants.ICON_SIZE}
                    />
                </RnView>
            </TouchableOpacity>
        )
    }

    private renderType() {
        switch (this.viewType) {
            case 'sheet':
                return <>{this.renderCalendar()}</>
            case 'dialog':
            default:
                return <>{this.renderCalendarInput()}</>
                break;
        }
    }

    private renderDateField() {
        return <RnView>
            {this.state.showCalendar ? this.renderCalendar() : this.renderCalendarInput()}
        </RnView>
    }

    render(): React.ReactNode {
        return (
            <>
                {
                    !this.props?.showModal ? this.renderDateField() : this.renderType()
                }
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.datePickerState}
                    onRequestClose={() => this.handleDatePickerPress(false)}
                >
                    <RnView style={[rnStyles.dateContainer, (this.modalPosition == 'end' ? { justifyContent: 'flex-end' } : {})]}>
                        <RnView style={{ width: this.modalPosition == 'end' ? '100%' : '95%' }}>
                            <RnView padding row justifyCenter style={rnStyles.dialogHeader}>
                                <RnText textAlignCenter style={{ flex: 1, fontSize: 18 }} fontWeight={600}>Calendar</RnText>
                                <RnButton transparent onPress={() => this.handleDatePickerPress(false)} iconLeft={<RnIcon name="close" size={20} color={rnConstants.PRIMARY_COLOR}></RnIcon>}></RnButton>
                            </RnView>
                            <RnView style={{ backgroundColor: rnConstants.WHITE_COLOR, borderBottomLeftRadius: rnConstants.BASE_BORDER_RADIUS, borderBottomRightRadius: rnConstants.BASE_BORDER_RADIUS, paddingTop: rnConstants.DEFAULT_PADDING }}>
                                {this.renderCalendar()}
                            </RnView>
                        </RnView>
                    </RnView>
                </Modal >
            </>
        )
    }
}
