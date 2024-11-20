import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import React, { Component } from "react";
import { Modal, Platform, TouchableOpacity } from "react-native";
import rnConstants from "../../config/rn-constants";
import { formStyles } from "../../config/rn-styles";
import { RnIcon } from "../icon";
import { RnView } from "../view";
import { RnText } from "../text";
import { RnTimePickerProps } from '../../types';

interface ITimePickerState {
    intialTime: string
    currentTime: Date,
    timePickerState: boolean,
    iosCurrentTime: Date,
}

export class InnTimePicker extends Component<RnTimePickerProps, ITimePickerState> {
    constructor(props) {
        super(props);

        let currentTime = moment(this.props.initialTime);
        let iosCurrentTime = moment(this.props.initialTime);


        if (!currentTime.isValid())
            currentTime = moment();
        if (!iosCurrentTime.isValid())
            iosCurrentTime = moment();

        this.state = {
            intialTime: this.props.initialTime,
            currentTime: currentTime.toDate(),
            timePickerState: false,
            iosCurrentTime: iosCurrentTime.toDate(),

        }
    }

    componentDidMount() {
        if (this.props.initialTime == "" || !moment(this.props.initialTime).isValid()) {
            let defaultTime = new Date();
            this.setState({
                iosCurrentTime: defaultTime,
                currentTime: defaultTime
            });
            this.props.onChange(defaultTime.toISOString())
        }
    }

    componentDidUpdate(prevProps: Readonly<RnTimePickerProps>, prevState: Readonly<ITimePickerState>, snapshot?: any): void {
        if (JSON.stringify(prevProps.initialTime) != JSON.stringify(this.props.initialTime)) {
            let currentTime = moment(this.props.initialTime);

            if (!currentTime.isValid())
                currentTime = moment();
            this.setState({
                currentTime: currentTime.toDate(),
                timePickerState: false,
                iosCurrentTime: currentTime.toDate(),
            })
        }
    }

    private openTimePicker() {
        this.setState({
            timePickerState: !this.state.timePickerState
        });
    }

    private closeTimePicker() {
        this.setState({
            timePickerState: false,

        })
    }

    private handleTimeObjectFormat(dateString: string | number) {
        let timeStamp = "";
        if (Platform.OS == "android") {
            timeStamp = dateString as string;
        }
        else {
            timeStamp = moment(dateString).toISOString()
        }

        return timeStamp;
    }

    private saveTime() {
        this.setState({
            timePickerState: false,
            intialTime: this.state.iosCurrentTime.toISOString(),
            currentTime: this.state.iosCurrentTime
        }, () => this.props.onChange(this.state.iosCurrentTime.toISOString()));
    }

    render() {
        return (
            <RnView style={{ flex: 1 }}>
                <RnView row>
                    {this.props.label?.length > 0 && <RnText style={formStyles.fieldName}>{this.props.label}</RnText>}
                    {this.props.required && <RnText style={{ ...formStyles.fieldName, color: rnConstants.DANGER_TEXT_COLOR }}>*</RnText>}
                </RnView>
                <TouchableOpacity disabled={this.props.disable}
                    onPress={this.openTimePicker.bind(this)}
                    style={[{
                        ...formStyles.fieldInputContainer,
                        justifyContent: 'space-between',
                        paddingHorizontal: rnConstants.DEFAULT_PADDING,
                        backgroundColor: 'white',
                        borderColor: rnConstants.BORDER_COLOR,
                        borderWidth: 1,
                        borderRadius: rnConstants.INPUT_BORDER_RADIUS
                    }, this.props.inputBoxStyles, this.props.disable ? formStyles.disabledFieldControl : {}]}>
                    <RnText>{moment(this.state.currentTime).format("h:mm A")}</RnText>
                    <RnIcon name="access-time" size={20} color={this.props?.pickerIconColor ? this.props?.pickerIconColor : rnConstants.PRIMARY_COLOR} />
                </TouchableOpacity>
                {/* Warning mesagge for form validations */}
                {((this.props.triggerValidation && this.state.intialTime == "" && this.props.required) ?
                    <RnText style={{ color: rnConstants.DANGER_TEXT_COLOR, fontSize: rnConstants.SMALL_FONT_SIZE }}>{this.props.label} is required</RnText>
                    : null)}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.timePickerState && Platform.OS == "ios"}
                    onRequestClose={() => this.closeTimePicker()}
                >
                    <RnView style={formStyles.tableModalView}>
                        <RnView style={{ ...formStyles.tableModalContent }}>
                            <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => this.closeTimePicker()}>
                                <RnIcon name="close" size={20} color={rnConstants.BLACK_COLOR} />
                            </TouchableOpacity>
                            <DateTimePicker
                                mode={'time'}
                                value={this.state.iosCurrentTime}
                                display={'spinner'}
                                onChange={(data) => {
                                    let timeStamp = this.handleTimeObjectFormat((data.nativeEvent as any).timestamp)
                                    this.setState({
                                        iosCurrentTime: moment(timeStamp).toDate()
                                    });
                                }}

                            />
                            <TouchableOpacity style={{
                                borderRadius: rnConstants.BASE_BORDER_RADIUS,
                                padding: rnConstants.DEFAULT_PADDING,
                                backgroundColor: rnConstants.PRIMARY_COLOR,
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }} onPress={() => this.saveTime()}>
                                <RnText style={{ color: rnConstants.WHITE_COLOR }}>OK</RnText>
                            </TouchableOpacity>
                        </RnView>
                    </RnView>
                </Modal>
                {
                    this.state.timePickerState && Platform.OS == "android" &&
                    <DateTimePicker
                        mode={'time'}
                        value={this.state.currentTime}
                        onChange={(data) => {
                            let timeStamp = this.handleTimeObjectFormat((data.nativeEvent as any).timestamp)
                            if (data.type == "set") {
                                this.setState({
                                    timePickerState: false,
                                    intialTime: timeStamp,
                                    currentTime: moment(timeStamp).toDate()
                                });
                                this.props.onChange(moment(timeStamp));
                            }
                            else
                                this.setState({
                                    timePickerState: false
                                });
                        }}

                    />
                }
            </RnView>
        );
    }
}