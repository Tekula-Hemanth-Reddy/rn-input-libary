import React from "react";
import { RnSearchComponentProps } from "../../types";
interface RnSearchComponentState {
    showCancel: boolean;
    lengthOfInputString: number;
    searchText: string;
}
export default class RnSearchComponent extends React.Component<RnSearchComponentProps, RnSearchComponentState> {
    textInput: any;
    constructor(props: RnSearchComponentProps | Readonly<RnSearchComponentProps>);
    componentDidUpdate(prevProps: Readonly<RnSearchComponentProps>, prevState: Readonly<RnSearchComponentState>, snapshot?: any): void;
    /**
     *reset state for search
     *
     * @memberof SearchComponent
     */
    resetSearchState(): void;
    /**
     *shows cancel button on focus of input form
     *
     * @memberof SearchComponent
     */
    handleOnFocusTextInput(): void;
    /**
     *it clears the search text and removes focus(removes cross and cancel buttons, clears search text)
     *
     * @memberof SearchComponent
     */
    handleOnPressCancel(): void;
    removeFocus(): void;
    setFocus(): void;
    /**
     *whenever text is changed the data is filtered based on inputText
     *
     * @param {string} searchText
     * @memberof SearchComponent
     */
    handleSearchText(searchText: string): void;
    /**
     *renders cross icon if there is at least more than or equal to one character of search text
     *
     * @returns
     * @memberof SearchComponent
     */
    crossIconRenderer(): React.JSX.Element | null;
    /**
     *
     *clears search text and removes cross icon
     * @memberof SearchComponent
     */
    onCrossIconPress(): void;
    /**
     *shoes search icon before placeholder if cancel button is not shown
     *
     * @returns
     * @memberof SearchComponent
     */
    searchIconRenderer(): React.JSX.Element;
    /**
     *set focus on selecting the search bar(outside TextInput)
     *
     * @memberof SearchComponent
     */
    handleSearchPress(): void;
    render(): React.JSX.Element;
}
export {};
