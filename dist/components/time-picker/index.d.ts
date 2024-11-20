import React, { Component } from "react";
import { RnTimePickerProps } from '../../types';
interface ITimePickerState {
    intialTime: string;
    currentTime: Date;
    timePickerState: boolean;
    iosCurrentTime: Date;
}
export declare class RnTimePicker extends Component<RnTimePickerProps, ITimePickerState> {
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<RnTimePickerProps>, prevState: Readonly<ITimePickerState>, snapshot?: any): void;
    private openTimePicker;
    private closeTimePicker;
    private handleTimeObjectFormat;
    private saveTime;
    render(): React.JSX.Element;
}
export {};
