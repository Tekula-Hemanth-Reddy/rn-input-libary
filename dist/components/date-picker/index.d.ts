import React, { Component } from "react";
import { RnDatePickerProps } from "../../types";
declare enum VIEW_TYPE {
    DATE = "DATE",
    MONTH = "MONTH",
    YEAR = "YEAR",
    PINNED_DATES = "PINNED_DATES",
    MONTH_PICKER = "MONTH_PICKER"
}
interface RndatePickerState {
    selectedOrStartDate: string | Date;
    endDate: string | Date;
    dateRangeSelectionOn: boolean;
    dates: string[];
    currentSelectedMonth: number;
    currentSelectedYear: number;
    viewType: VIEW_TYPE;
    allYears: number[];
    selectedPinnedDate: string;
    datePickerState: boolean;
    showCalendar: boolean;
    showModal: boolean;
    headerColor: string;
}
export declare class RnDatePicker extends Component<RnDatePickerProps, RndatePickerState> {
    private primaryColor;
    private secondaryColor;
    private viewType;
    private modalPosition;
    constructor(props: RnDatePickerProps | Readonly<RnDatePickerProps>);
    componentDidUpdate(prevProps: Readonly<RnDatePickerProps>, prevState: Readonly<RndatePickerState>, snapshot?: any): void;
    /**
     * check whether the given date or string is valid or not
     * @private
     * @param {(string | Date)} date
     * @return {*}
     * @memberof DateWithCalendar
     */
    private isSelectedDateValid;
    /**
     * get years with range -10 to 10 from given year
     * @private
     * @param {*} middleYear
     * @return {*}
     * @memberof DateWithCalendar
     */
    private getYears;
    /**
     * get dates of current month in current year
     * @private
     * @param {number} [year]
     * @param {number} [month]
     * @return {*}
     * @memberof DateWithCalendar
     */
    private getDates;
    /**
     * set dates for selected month and year
     * @private
     * @param {*} cb is a function
     * @memberof DateWithCalendar
     */
    private setDatesofCurrentSelectedMonthAndYear;
    private checkSelectedDate;
    private isToday;
    private isDateDisable;
    private pinnedData;
    private onMonthSelect;
    private onYearSelect;
    private onDateSelect;
    private incrementMonth;
    private decrementMonth;
    private incrementYear;
    private decrementYear;
    private calendarItems;
    private monthItems;
    private yearItems;
    private showEvents;
    private flatListItemSeparator;
    private flatListHeader;
    private calendar;
    private renderCalendar;
    private handleDatePickerPress;
    private getFormatedDateValue;
    private renderCalendarInput;
    private renderType;
    private renderDateField;
    render(): React.ReactNode;
}
export {};
