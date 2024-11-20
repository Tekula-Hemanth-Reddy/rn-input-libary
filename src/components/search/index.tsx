import React from "react";
import {
    Keyboard,
    TextInput,
    TouchableOpacity
} from "react-native";
import { createFilter } from "react-native-search-filter";
import rnConstants from "../../config/rn-constants";
import { RnButton } from "../button";
import { RnIcon } from "../icon";
import { RnView } from "../view";
import { InnSearchComponentProps } from "../../types";
import { rnStyles } from "src/config/rn-styles";

interface InnSearchComponentState {
    showCancel: boolean;
    lengthOfInputString: number;
    searchText: string;
}

export default class InnSearchComponent extends React.Component<
    InnSearchComponentProps,
    InnSearchComponentState
> {
    textInput: any;

    constructor(props: InnSearchComponentProps | Readonly<InnSearchComponentProps>) {
        super(props);
        this.state = {
            showCancel: false,
            lengthOfInputString: 0,
            searchText: "",
        };
    }

    componentDidUpdate(prevProps: Readonly<InnSearchComponentProps>, prevState: Readonly<InnSearchComponentState>, snapshot?: any): void {
        if (this.props.searchObject !== prevProps.searchObject && !!this.state.searchText) {
            this.handleSearchText(this.state.searchText);
        }
    }

    /**
     *reset state for search
     *
     * @memberof SearchComponent
     */
    resetSearchState() {
        this.setState({
            showCancel: false,
            lengthOfInputString: 0,
            searchText: "",
        });
    }

    /**
     *shows cancel button on focus of input form
     *
     * @memberof SearchComponent
     */
    handleOnFocusTextInput() {
        this.setState({
            showCancel: true,
        });
    }

    /**
     *it clears the search text and removes focus(removes cross and cancel buttons, clears search text)
     *
     * @memberof SearchComponent
     */
    handleOnPressCancel() {
        //removes search text which removes cross icon
        this.onCrossIconPress();
        this.setState({
            showCancel: false,
        });
        //removes focus
        Keyboard.dismiss();
        if (this.props?.cancelSearch)
            this.props.cancelSearch();
        // hide search
    }

    removeFocus() {
        Keyboard.dismiss();
        this.state.lengthOfInputString == 0
            ? this.setState({
                showCancel: false,
            })
            : null;
    }

    setFocus() { }

    /**
     *whenever text is changed the data is filtered based on inputText
     *
     * @param {string} searchText
     * @memberof SearchComponent
     */
    handleSearchText(searchText: string) {
        this.setState({
            lengthOfInputString: searchText.length,
            showCancel: true,
            searchText: searchText,
        });
        if (!this.props.customSearchFilter) {
            if (this.props.searchObject) {
                const filteredObject = this.props.searchObject.filter(
                    createFilter(searchText, this.props.keyFilter as string[])
                );
                if (typeof this.props.updateState == 'function')
                    this.props.updateState(filteredObject);
            }
        } else if (
            (this.props.searchText && this.props.searchText.length > 0) ||
            searchText
        ) {
            this.props.customSearchFilter(searchText);
        }
        if (this.props.changeSearchText) {
            this.props.changeSearchText(searchText);
        }

        this.textInput.focus();
    }
    /**
     *renders cross icon if there is at least more than or equal to one character of search text
     *
     * @returns
     * @memberof SearchComponent
     */
    crossIconRenderer() {
        return (this.props.searchText !== undefined ? this.props.searchText : this.state.searchText).length > 0 ? (
            <RnButton transparent onPress={() => this.onCrossIconPress()
            } icon={
                <RnIcon
                    // style={rnStyles.crossIcon}
                    // active

                    name="close"
                    color={rnConstants.TEXT_COLOR}

                />}></RnButton>
        ) : null;
    }

    /**
     *
     *clears search text and removes cross icon
     * @memberof SearchComponent
     */
    onCrossIconPress() {
        this.textInput.clear();
        this.handleSearchText("");
        this.textInput.focus();
    }

    /**
     *shoes search icon before placeholder if cancel button is not shown
     *
     * @returns
     * @memberof SearchComponent
     */
    searchIconRenderer() {
        return <RnIcon name="search" color={rnConstants.NEUTRAL_COLOR} />;
    }

    /**
     *set focus on selecting the search bar(outside TextInput)
     *
     * @memberof SearchComponent
     */
    handleSearchPress() {
        this.textInput.focus();
    }

    render() {
        return (
            //  <Header style={rnStyles.searchBarHeader}>
            <RnView style={rnStyles.searchBarHeader} >
                <TouchableOpacity
                    // regular
                    style={[rnStyles.search, this.textInput?.isFocused() ? rnStyles.searchBoxShadow : {}]}
                    onPress={this.handleSearchPress.bind(this)}
                >
                    {this.searchIconRenderer()}
                    < TextInput
                        style={{ flex: 1, fontSize: rnConstants.BASE_FONT_SIZE, paddingLeft: rnConstants.DEFAULT_PADDING / 2 }
                        }
                        placeholder={this.props.title}
                        onFocus={this.handleOnFocusTextInput.bind(this)}
                        onChangeText={(searchText) => this.handleSearchText(searchText)}
                        ref={(ref) => {
                            this.textInput = ref;
                        }}
                        value={
                            this.props.searchText !== undefined
                                ? this.props.searchText
                                : this.state.searchText
                        }
                        autoFocus={this.props.focus}
                    />
                    {this.crossIconRenderer()}
                </TouchableOpacity>
            </RnView>
        );
    }
}
