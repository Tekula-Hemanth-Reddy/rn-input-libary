import * as React from "react";
import { RnMultiSelectProps } from "../../types";
interface State {
    data: {
        name: string;
        id: string;
        selected?: boolean;
        isLabel?: boolean;
        uniqueId?: string;
    }[];
    filteredData: {
        name: string;
        id: string;
        selected?: boolean;
        isLabel?: boolean;
    }[];
    toggle: boolean;
    selectionMode: boolean;
    selectedValues: string;
    disabled: boolean;
    showSelectedTop: boolean;
    showModal: boolean;
}
declare class RnMultiSelect extends React.Component<RnMultiSelectProps, State> {
    constructor(props: any);
    componentDidMount(): void;
    setData(): void;
    componentDidUpdate(prevProps: Readonly<RnMultiSelectProps>, prevState: Readonly<State>, snapshot?: any): void;
    selectItem(item: any): void;
    setSelectedAndClose(): void;
    getRow: (item: any, index: any, displayKey: any) => React.JSX.Element;
    renderList(): React.JSX.Element;
    clearSelection: () => void;
    renderOptions: () => React.JSX.Element;
    render(): React.JSX.Element;
}
export default RnMultiSelect;
