import React, { Component } from 'react';
import { RnPickerProps, RnPickerOption } from '../../types';
interface RnPickerState {
    visible: boolean;
    pickerData: RnPickerOption[];
    filteredPickerData: RnPickerOption[];
    pickerSearchText: string;
    selected?: RnPickerOption;
    showModal: boolean;
}
export declare class RnPicker extends Component<RnPickerProps, RnPickerState> {
    view: any;
    constructor(props: RnPickerProps | Readonly<RnPickerProps>);
    componentDidUpdate(prevProps: Readonly<RnPickerProps>, prevState: Readonly<RnPickerState>, snapshot?: any): void;
    private getPickerDataWithNoneOption;
    private toggleDropdown;
    private onItemPress;
    private renderListItem;
    private renderOptions;
    private renderDropdown;
    private flatListItemSeparator;
    render(): React.ReactNode;
}
export {};
