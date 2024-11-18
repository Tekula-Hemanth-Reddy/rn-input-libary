import React from "react";
import {
    Keyboard,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import { createFilter } from "react-native-search-filter";
import cssConstants from "../../config/css-constants";
import { RnButton } from "../button";
import { RnIcon } from "../icon";
import { RnView } from "../view";
import { InnSearchComponentProps } from "../../types";
import colors from "../../config/colors";

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
                    // style={styles.crossIcon}
                    // active

                    name="close"
                    color={cssConstants.TEXT_COLOR}

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
        return <RnIcon name="search" color={colors.NEUTRAL.NEUTRAL_50} />;
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
            //  <Header style={styles.searchBarHeader}>
            <RnView style={styles.searchBarHeader} >
                <TouchableOpacity
                    // regular
                    style={[styles.search, this.textInput?.isFocused() ? styles.boxShadow : {}]}
                    onPress={this.handleSearchPress.bind(this)}
                >
                    {this.searchIconRenderer()}
                    < TextInput
                        style={{ flex: 1, fontSize: cssConstants.BASE_FONT_SIZE, paddingLeft: cssConstants.DEFAULT_PADDING / 2 }
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

const styles = StyleSheet.create({
    searchBarHeader: {
        backgroundColor: "transparent",
        height: cssConstants.INPUT_HEIGHT,
        flexDirection: "row",
        paddingHorizontal: 0,
        // paddingVertical: metrics.scale(4),
    },
    search: {
        flex: 1,
        alignItems: "center",
        borderRadius: 8,
        flexDirection: 'row',
        height: cssConstants.INPUT_HEIGHT,
        borderWidth: 1,
        borderColor: cssConstants.BORDER_COLOR,
        backgroundColor: colors.WHITE,
        paddingHorizontal: cssConstants.DEFAULT_PADDING
    },
    boxShadow: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },
    crossIcon: {
        opacity: 0.2,
    },
    searchIcon: {
        // opacity: 0.
        // color: cssConstants.SEARCH_ICON,
    },
});
