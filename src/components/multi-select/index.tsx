import * as React from "react";
import {
    Animated,
    Easing,
    Keyboard,
    Modal,
    StyleSheet,
    TouchableOpacity,
    FlatList
} from "react-native";

import { EdgeInsets, SafeAreaInsetsContext, SafeAreaProvider } from "react-native-safe-area-context";
import { strings } from "../../config/strings";
import { RnCheckbox } from "../checkbox";
import { RnIcon } from "../icon";;
import InnSearchComponent from "../search";
import { RnMultiSelectProps, RnMutliSelectOption } from "src/types";
import cssConstants from "src/config/css-constants";
import { RnView } from "../view";
import { RnText } from "../text";
import { formStyles } from "src/config/styles";
import { RnButton } from "../button";
import colors from "src/config/colors";

interface State {
    data: {
        name: string,
        id: string,
        selected?: boolean,
        isLabel?: boolean,
        uniqueId?: string
    }[];

    filteredData: {
        name: string,
        id: string,
        selected?: boolean,
        isLabel?: boolean
    }[];
    toggle: boolean;
    selectionMode: boolean;
    selectedValues: string;
    disabled: boolean
    showSelectedTop: boolean;
    showModal: boolean
}



class RnMultiSelect extends React.Component<RnMultiSelectProps, State> {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            filteredData: [],
            toggle: false,
            selectionMode: false,
            selectedValues: this.props.selectedValues || '',
            disabled: false,
            showSelectedTop: typeof this.props.showSelectedTop == 'boolean' ? this.props.showSelectedTop : true,
            showModal: typeof this.props.showModal == 'boolean' ? this.props.showModal : true
        }
    }
    componentDidMount() {
        this.setData();
    }

    setData() {
        if (this.props.options?.length) {
            let data: RnMutliSelectOption[] = JSON.parse(JSON.stringify(this.props.options)) as RnMutliSelectOption[];
            let selectedItems: RnMutliSelectOption[] = [];
            let unselectedItems: RnMutliSelectOption[] = [];

            for (let x of data) {
                if (x.selected || ((this.props.selectedValues || []) as string[]).includes(x.id)) {
                    selectedItems.push(x);
                    x.selected = true;
                }
                else {
                    unselectedItems.push(x)
                    x.selected = false;
                }
            }

            if (this.state.showSelectedTop) {
                data = [];
                data.push(...selectedItems);
                data.push(...unselectedItems);
            }
            this.setState({ data: data, filteredData: data, selectedValues: selectedItems.map(x => x.name).join(',') })
        } else {
            this.setState({ data: [], selectedValues: '' })
        }
    }

    // whenever options prop changes or selected items changes, data should be set again
    componentDidUpdate(prevProps: Readonly<RnMultiSelectProps>, prevState: Readonly<State>, snapshot?: any): void {
        if (JSON.stringify(prevProps) != JSON.stringify(this.props)) {
            this.setData();
        }
    }

    selectItem(item) {
        this.setState({
            data: this.state.data.map(op => {
                if (op.id == item.id)
                    return {
                        ...item,
                        selected: !op.selected
                    }
                return op;
            }),
            filteredData: this.state.filteredData.map(op => {
                if (op.id == item.id)
                    return {
                        ...item,
                        selected: !op.selected
                    }
                return op;
            })
        }, () => {
            if (this.props.onChange) this.props.onChange([{ ...item, selected: !item.selected }])
        });
    }
    setSelectedAndClose() {

        let selectedItems = this.state.data.filter(x => x.selected && !x.isLabel).map(x => x.name);
        let selectedValuesAsString: string = selectedItems.join(',');
        this.setState({
            selectedValues: selectedValuesAsString,
            filteredData: this.state.data
        });
        this.setState({ toggle: false }, () => {
            if (typeof this.props.close === 'function')
                this.props.close(this.state.data.filter(x => x.selected).map(x => x.id), this.state.data.filter(x => x.selected));
        });
        Keyboard.dismiss();
    }
    getRow = (item, index, displayKey) => {
        let shakeAnimation: Animated.Value = new Animated.Value(0);
        const shakeValue = shakeAnimation.interpolate({
            inputRange: [0, 1, 2, 3, 4, 5],
            outputRange: [0, -40, 30, -20, 10, 0]
        });

        return (
            <Animated.View style={[{ transform: [{ translateX: shakeValue }] }]}>
                <TouchableOpacity
                    onPress={() => {
                        if (!item?.disabled)
                            this.selectItem(item)
                        else {
                            Animated.timing(shakeAnimation, {
                                toValue: 5,
                                duration: 1000,
                                easing: Easing.bounce,
                                useNativeDriver: true,
                            }).start((res) => {
                                if (res.finished)
                                    shakeAnimation.setValue(0);
                            });
                        }
                    }}
                    style={
                        [
                            {
                                paddingHorizontal: cssConstants.DEFAULT_PADDING, paddingVertical: 7
                            }
                        ]}
                >
                    <RnView >

                        <RnView style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <RnView
                                margin
                            >
                                {!item.isLabel ?
                                    <RnCheckbox
                                        checked={item.selected}
                                        label=""
                                        disabled={false}
                                        circle={false}
                                        onChange={(value) => {
                                            if (!item?.disabled)
                                                this.selectItem(item)
                                            else {
                                                Animated.timing(shakeAnimation, {
                                                    toValue: 5,
                                                    duration: 1000,
                                                    easing: Easing.bounce,
                                                    useNativeDriver: true,
                                                }).start((res) => {
                                                    if (res.finished)
                                                        shakeAnimation.setValue(0);
                                                });
                                            }
                                        }} />
                                    : <RnText>{ }</RnText>}
                            </RnView>
                            {
                                this.props.customOptionRender ? this.props.customOptionRender(item, index) :
                                    <RnText paddingVertical={cssConstants.DEFAULT_PADDING / 2}
                                        style={[
                                            {
                                                flex: 1,
                                                fontSize: cssConstants.MEDIUM_FONT_SIZE,
                                            },

                                            (item.selected && !item.isLabel) ? { color: cssConstants.PRIMARY_COLOR } : { color: cssConstants.TEXT_COLOR }
                                        ]}
                                    >
                                        {item[displayKey]}
                                    </RnText>
                            }


                        </RnView>
                    </RnView>
                </TouchableOpacity>
            </Animated.View>
        );
    };
    renderList() {
        return (
            <FlatList
                style={{ marginTop: cssConstants.DEFAULT_MARGIN }}
                keyboardShouldPersistTaps="always"
                nestedScrollEnabled={true}
                data={this.state.filteredData}
                initialNumToRender={25}
                renderItem={(({ item, index }) =>
                    this.getRow(item, index, 'name')
                )}
                extraData={this.state}
                ListHeaderComponent={
                    <RnView style={{
                        alignSelf: 'flex-start',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: cssConstants.DEFAULT_PADDING,
                    }}>
                        <RnView margin >
                            <RnCheckbox
                                checked={!this.state.data.some(ob => ((ob.selected == false) && !ob.isLabel))}
                                label=""
                                disabled={false}
                                circle={false}
                                onChange={(value) => {
                                    this.setState({
                                        data: this.state.data.map(ob => {
                                            return {
                                                ...ob,
                                                selected: value
                                            }
                                        }),
                                        filteredData: this.state.filteredData.map(ob => {
                                            return {
                                                ...ob,
                                                selected: value
                                            }
                                        })
                                    }, () => {
                                        if (this.props.onChange) {
                                            this.props.onChange(this.state.data)
                                        }
                                    })
                                }} />
                        </RnView>
                        <RnText fontWeight={800} note>SELECT ALL</RnText>
                    </RnView>
                }
            />
        );
    }
    clearSelection = () => {
        this.setState({
            data: this.state.data.map(i => {
                i.selected = false;
                return i;
            }),
        })
    };
    renderOptions = () => {
        return (
            <>
                <RnView style={{ paddingHorizontal: cssConstants.DEFAULT_PADDING }}>
                    <InnSearchComponent
                        searchObject={this.state.data}
                        keyFilter={["name"]}
                        updateState={(data) => {
                            this.setState({ filteredData: data });
                        }}
                        hideCancel={true}
                        title={"Search"}
                    />
                </RnView>
                {(this.state.data && this.state.data.length)
                    ?
                    <RnView style={{ height: '90%' }}>{this.renderList()}</RnView>
                    :
                    <RnView style={{ flexDirection: 'row', padding: cssConstants.DEFAULT_PADDING, justifyContent: 'center' }}>
                        <RnText >No Data</RnText>
                    </RnView>}
            </>
        )
    }
    render() {
        return (
            <RnView>
                {this.state.showModal ? <>
                    <TouchableOpacity onPress={() => this.setState({ toggle: true })}
                        disabled={this.props.disable || false}
                        style={[this.props.brightBorder ? styles.brightButton : styles.button, this.props.inputBoxStyles, this.props.disable ? formStyles.disabledFieldControl : {}]} >
                        < RnText ellipsizeMode='tail' numberOfLines={1} style={[styles.buttonText]} > {(this.state.selectedValues && this.state.selectedValues.length > 0) ? this.state.selectedValues.replace(/,/g, ', ') : (this.props.label || strings.SELECT_LABEL)}</RnText >
                        <RnIcon name='keyboard-arrow-down' color={cssConstants.PRIMARY_COLOR} />
                    </TouchableOpacity >
                    {
                        this.state.toggle &&
                        <Modal
                            animationType="slide"
                            transparent={false}
                            visible={this.state.toggle}
                            onRequestClose={() => {
                            }}
                        >
                            <SafeAreaProvider>
                                <SafeAreaInsetsContext.Consumer>
                                    {(insets) =>
                                        <RnView style={{ height: (insets as EdgeInsets).top, backgroundColor: cssConstants.PRIMARY_COLOR }} />
                                    }
                                </SafeAreaInsetsContext.Consumer>
                                <RnView full>
                                    <TouchableOpacity style={{ flexDirection: 'row', marginBottom: cssConstants.DEFAULT_MARGIN }} onPress={() => this.setSelectedAndClose()}>
                                        <RnButton text={strings.BACK} transparent onPress={() => this.setSelectedAndClose()} iconLeft={<RnIcon name='chevron-left' size={cssConstants.LARGE_FONT_SIZE} color={cssConstants.TEXT_COLOR} />}></RnButton>

                                    </TouchableOpacity>
                                    {this.renderOptions()}
                                </RnView>
                            </SafeAreaProvider>
                        </Modal>
                    }</> : <>{this.renderOptions()}</>
                }


            </RnView>

        )
    }
}
export default RnMultiSelect;
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: cssConstants.BACKGROUND_COLOR,
        height: cssConstants.INPUT_HEIGHT,
        paddingHorizontal: cssConstants.DEFAULT_PADDING,
        borderRadius: cssConstants.INPUT_BORDER_RADIUS,
        borderColor: cssConstants.BORDER_COLOR,
        borderWidth: 1,
        zIndex: 1,
    },
    brightButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: cssConstants.BACKGROUND_COLOR,
        height: cssConstants.INPUT_HEIGHT,
        paddingHorizontal: cssConstants.DEFAULT_PADDING,
        borderRadius: cssConstants.INPUT_BORDER_RADIUS,
        borderColor: cssConstants.SECONDARY_COLOR,
        borderWidth: 1,
        zIndex: 1,
    },
    buttonText: {
        flex: 1,
        color: cssConstants.TEXT_COLOR,
        textAlign: 'left',
        fontSize: cssConstants.BASE_FONT_SIZE
    },
    backIcon: {
        fontSize: 20,
        color: colors.BLACK,
        alignSelf: 'flex-start',
        paddingVertical: 1,
        paddingHorizontal: 3

    },
    fieldInput: {
        fontSize: cssConstants.INPUT_FONT_SIZE,
        height: cssConstants.INPUT_HEIGHT
    },
})