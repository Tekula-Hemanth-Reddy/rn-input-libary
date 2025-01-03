import * as React from "react";
import {
    Animated,
    Easing,
    Keyboard,
    Modal,
    TouchableOpacity,
    FlatList
} from "react-native";

import { EdgeInsets, SafeAreaInsetsContext, SafeAreaProvider } from "react-native-safe-area-context";
import { rnStrings } from "../../config/rn-strings";
import { RnCheckbox } from "../checkbox";
import { RnIcon } from "../icon";;
import RnSearchComponent from "../search";
import { RnMultiSelectProps, RnMutliSelectOption } from "../../types";
import rnConstants from "../../config/rn-constants";
import { RnView } from "../view";
import { RnText } from "../text";
import { rnStyles } from "../../config/rn-styles";
import { RnButton } from "../button";

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
                                paddingHorizontal: rnConstants.DEFAULT_PADDING, paddingVertical: 7
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
                                    <RnText paddingVertical={rnConstants.DEFAULT_PADDING / 2}
                                        style={[
                                            {
                                                flex: 1,
                                                fontSize: rnConstants.MEDIUM_FONT_SIZE,
                                            },

                                            (item.selected && !item.isLabel) ? { color: rnConstants.PRIMARY_COLOR } : { color: rnConstants.TEXT_COLOR }
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
                style={{ marginTop: rnConstants.DEFAULT_MARGIN }}
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
                        paddingHorizontal: rnConstants.DEFAULT_PADDING,
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
                <RnView style={{ paddingHorizontal: rnConstants.DEFAULT_PADDING }}>
                    <RnSearchComponent
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
                    <RnView style={{ flexDirection: 'row', padding: rnConstants.DEFAULT_PADDING, justifyContent: 'center' }}>
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
                        style={[rnStyles.inputButton, this.props.inputBoxStyles, this.props.disable ? rnStyles.disabledFieldControl : {}]} >
                        < RnText ellipsizeMode='tail' numberOfLines={1} style={[rnStyles.inputButtonText]} > {(this.state.selectedValues && this.state.selectedValues.length > 0) ? this.state.selectedValues.replace(/,/g, ', ') : (this.props.label || rnStrings.SELECT_LABEL)}</RnText >
                        <RnIcon name='keyboard-arrow-down' color={rnConstants.PRIMARY_COLOR} />
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
                                        <RnView style={{ height: (insets as EdgeInsets).top, backgroundColor: rnConstants.PRIMARY_COLOR }} />
                                    }
                                </SafeAreaInsetsContext.Consumer>
                                <RnView full>
                                    <TouchableOpacity style={{ flexDirection: 'row', marginBottom: rnConstants.DEFAULT_MARGIN }} onPress={() => this.setSelectedAndClose()}>
                                        <RnButton text={rnStrings.BACK} transparent onPress={() => this.setSelectedAndClose()} iconLeft={<RnIcon name='chevron-left' size={rnConstants.LARGE_FONT_SIZE} color={rnConstants.TEXT_COLOR} />}></RnButton>

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