import React, { Component } from 'react';
import { FlatList, Modal, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { default as rnConstants, default as innConstants } from '../../config/rn-constants';
import { formStyles } from '../../config/rn-styles';
import { RnButton } from '../button';
import { RnIcon } from '../icon';
import { RnView } from '../view';
import InnSearchComponent from '../search';
import { RnText } from '../text';
import { RnPickerProps, RnPickerOption } from '../../types';
import { rnStrings } from 'src/config/rn-strings';

interface InnPickerState {
    visible: boolean;
    pickerData: RnPickerOption[];
    filteredPickerData: RnPickerOption[];
    pickerSearchText: string,
    selected?: RnPickerOption;
    showModal: boolean;
}

export class InnPicker extends Component<RnPickerProps, InnPickerState> {

    view: any

    constructor(props: RnPickerProps | Readonly<RnPickerProps>) {
        super(props);
        const pickerData = this.getPickerDataWithNoneOption(props.data || []);
        this.state = {
            visible: false,
            pickerData: pickerData,
            filteredPickerData: pickerData,
            pickerSearchText: '',
            selected: (this.props.selectedOption == undefined || this.props.selectedOption == null || this.props.selectedOption == "") ? undefined : (this.props.data || []).find(item => item.value == this.props.selectedOption),
            showModal: ('showModal' in this.props) ? this.props.showModal as boolean : true
        }
    }

    componentDidUpdate(prevProps: Readonly<RnPickerProps>, prevState: Readonly<InnPickerState>, snapshot?: any): void {
        if (prevProps.data?.length != this.props.data?.length || prevProps.selectedOption != this.props.selectedOption || JSON.stringify(prevProps.data) != JSON.stringify(this.props.data)) {
            const pickerData = this.getPickerDataWithNoneOption(this.props.data || []);
            this.setState({
                visible: false,
                pickerData: pickerData,
                filteredPickerData: pickerData,
                pickerSearchText: '',
                selected: (this.props.selectedOption == undefined || this.props.selectedOption == null || this.props.selectedOption == "") ? undefined : (this.props.data || []).find(item => item.value == this.props.selectedOption)
            })
        }
    }

    private getPickerDataWithNoneOption(data: RnPickerOption[]): RnPickerOption[] {
        if (this.props.showNoneOption && data?.length > 0) {
            return [{ label: 'None', value: '' }, ...data];
        }
        return data;
    }


    private toggleDropdown() {
        this.state.visible ? this.setState({ visible: false }) : this.setState({ visible: true });
    };

    private onItemPress(item: RnPickerOption, index: number) {
        this.setState({
            selected: (item.label == 'None' && this.props.showNoneOption) ? undefined : item,
            visible: false
        }, () => {
            this.props.onSelect({ ...item, index })
        })
    };

    private renderListItem(item: RnPickerOption, index: number) {
        return (
            <TouchableOpacity style={[styles.item]} disabled={(!this.props.customOptionRender && this.props.disable)} onPress={() => this.onItemPress(item, index)}>
                {
                    this.props.customOptionRender ? this.props.customOptionRender(item, index) :
                        <RnView row >
                            {item.color
                                ? <RnView
                                    marginRight
                                    style={
                                        [
                                            styles.circle,
                                            { backgroundColor: item.color }
                                        ]
                                    } >
                                </RnView>
                                : <></>
                            }
                            <RnText ellipsizeMode='tail' numberOfLines={1}
                                style={
                                    [
                                        styles.text,
                                        (this.state?.selected?.value == item.value)
                                            ? { color: rnConstants.PRIMARY_COLOR }
                                            : {}
                                    ]
                                }
                            >{item.label}
                            </RnText>
                        </RnView>
                }
            </TouchableOpacity>
        )
    }

    private renderOptions() {
        return <>
            <RnView style={{ marginHorizontal: innConstants.DEFAULT_MARGIN }}>
                <InnSearchComponent
                    searchObject={this.state.pickerData}
                    keyFilter={['label']}
                    updateState={(data) => {
                        this.setState({ filteredPickerData: data });
                    }}
                    searchText={this.state.pickerSearchText}
                    changeSearchText={pickerSearchText => { this.setState({ pickerSearchText }) }}
                    title={"Search"}
                />
            </RnView>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={this.state.filteredPickerData}
                renderItem={({ item, index }) => (
                    <>
                        {this.renderListItem(item, index)}
                    </>
                )}
                ItemSeparatorComponent={this.flatListItemSeparator}
                keyExtractor={(item, index) => index.toString()}
            />
        </>
    }

    private renderDropdown() {
        if (this.state.visible) {
            return (
                <Modal visible={this.state.visible} transparent animationType="none">
                    <SafeAreaView
                        style={{
                            height: '100%',
                            backgroundColor: rnConstants.WHITE_COLOR,
                            paddingBottom: innConstants.DEFAULT_PADDING,
                            paddingHorizontal: innConstants.DEFAULT_PADDING
                        }}
                    >
                        <RnView full style={styles.dropdown}>
                            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: innConstants.DEFAULT_MARGIN }} onPress={() => { this.toggleDropdown() }}>
                                <RnButton transparent onPress={() => { this.toggleDropdown() }} iconLeft={<RnIcon name='chevron-left' size={innConstants.LARGE_FONT_SIZE} color={innConstants.TEXT_COLOR} />} text={this.props.label}></RnButton>
                            </TouchableOpacity>
                            {this.renderOptions()}
                        </RnView>
                    </SafeAreaView>
                </Modal>
            );
        }
        else {
            return <></>
        }
    };

    private flatListItemSeparator() {
        return (
            <RnView
                style={{
                    height: 1,
                    width: "95%",
                    backgroundColor: innConstants.TEXT_COLOR,
                    opacity: 0.5,
                    marginVertical: innConstants.DEFAULT_MARGIN / 2,
                    marginHorizontal: innConstants.DEFAULT_MARGIN
                }}
            />
        );
    }



    render(): React.ReactNode {
        return (
            <>
                <RnView row>
                    {(this.props.label?.length > 0 && this.props.showLabel) && <RnText style={formStyles.fieldName}>{this.props.label}</RnText>}
                    {this.props.required && <RnText style={{ color: rnConstants.DANGER_TEXT_COLOR, marginBottom: rnConstants.DEFAULT_MARGIN / 2 }}>*</RnText>}
                </RnView>
                {!this.state.showModal ? <RnView full>
                    {this.renderOptions()}
                </RnView> :
                    <TouchableOpacity
                        ref={ref => this.view = ref}
                        style={[styles.button, this.props.pickerStyles || {}, this.props.disable ? formStyles.disabledFieldControl : {}]}
                        onPress={() => this.toggleDropdown()}
                        disabled={this.props.disable || false}
                    >
                        {this.renderDropdown()}
                        {this.state?.selected?.color
                            ? <RnView marginRight style={
                                [
                                    styles.circle,
                                    { backgroundColor: this.state.selected.color }
                                ]
                            }>
                            </RnView>
                            : <></>
                        }
                        <RnText textAlignLeft ellipsizeMode='tail' numberOfLines={1} style={[styles.buttonText, this.props.pickerTextStyles || {}]} > {
                            (this.state.selected && this.state.selected.label) ||
                            (this.props.showLabel
                                ? this.props.label
                                : this.props.placeHolder
                                    ? this.props.placeHolder
                                    : rnStrings.SELECT_LABEL
                            )
                        }</RnText >
                        <RnIcon name='keyboard-arrow-down' color={this.props.arrowColor ? this.props.arrowColor : innConstants.PRIMARY_COLOR} />
                    </TouchableOpacity >
                }
                {/* Warning mesagge for form validations */}
                {((this.props.triggerValidation && this.state.selected == undefined && this.props.required) ?
                    <RnText style={{ color: rnConstants.DANGER_TEXT_COLOR, fontSize: rnConstants.SMALL_FONT_SIZE }}>{this.props.label} is required</RnText>
                    : null)}
            </>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: innConstants.WHITE_COLOR,
        height: innConstants.INPUT_HEIGHT,
        paddingHorizontal: innConstants.DEFAULT_PADDING,
        borderRadius: innConstants.INPUT_BORDER_RADIUS,
        borderColor: innConstants.BORDER_COLOR,
        borderWidth: 1,
        zIndex: 1,
    },
    buttonText: {
        flex: 1,
        color: innConstants.TEXT_COLOR,
        fontSize: rnConstants.BASE_FONT_SIZE
    },
    dropdown: {
        width: '100%',
    },
    item: {
        paddingHorizontal: innConstants.DEFAULT_PADDING,
        paddingVertical: innConstants.DEFAULT_PADDING,
    },
    text: {
        color: rnConstants.LIGHT_TEXT_COLOR
    },
    circle: {
        height: rnConstants.PICKER_CIRCLE_HEIGHT,
        width: rnConstants.PICKER_CIRCLE_WIDTH,
        borderRadius: rnConstants.PICKER_BORDER_RADIUS
    },
});