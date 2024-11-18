import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import cssConstants from "../../config/css-constants";
import { formStyles } from "../../config/styles";
import { RnIcon } from "../icon";
import { RnView } from "../view";
import { RnText } from "../text";
import { RnCheckboxProps } from "../../types";



export function RnCheckbox(props: RnCheckboxProps) {
    const size = props.size || 20;

    const [checked, setChecked] = useState(props.checked || false);
    const [checkBoxDisable, setDisable] = useState(props.disabled)
    const checkBoxCheckedBorderColor = props.checkBoxCheckedBorderColor || cssConstants.PRIMARY_COLOR
    const checkBoxUnCheckedBorderColor = props.checkBoxUnCheckedBorderColor || cssConstants.SECONDARY_COLOR
    const checkBoxCheckedColor = props.checkBoxCheckedColor || cssConstants.SECONDARY_COLOR
    const checkBoxCheckedFilledColor = props.checkBoxCheckedFilledColor || cssConstants.TRANSPARENT_COLOR
    const checkBoxUnCheckedFilledColor = props.checkBoxUnCheckedFilledColor || cssConstants.TRANSPARENT_COLOR

    useEffect(() => {
        setChecked(props.checked || false);
    }, [props.checked]);

    useEffect(() => {
        setDisable(props.disabled);
    }, [props.disabled]);

    return (
        <>
            <RnView row>
                {props.label && props.label?.length > 0 && <RnText style={formStyles.fieldName}>{props.label}</RnText>}
                {props.required && <RnText style={{ ...formStyles.fieldName, color: cssConstants.DANGER_TEXT_COLOR }}>*</RnText>}
            </RnView>
            <TouchableOpacity
                disabled={checkBoxDisable}
                style={
                    [
                        {
                            height: size + 2,
                            width: size + 2,
                            borderColor: checked ? checkBoxCheckedBorderColor : checkBoxUnCheckedBorderColor,
                            borderRadius: props.circle ? (size + 2) / 2 : cssConstants.BASE_BORDER_RADIUS,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: props.disabled ? cssConstants.DISABLE_COLOR : (checked ? checkBoxCheckedFilledColor : checkBoxUnCheckedFilledColor)
                        },
                        props.styles
                    ]
                }
                onPress={() => {
                    setChecked(!checked);
                    props.onChange(!checked);
                }}
            >
                {
                    checked &&
                    <RnIcon size={size} name="check" color={checkBoxCheckedColor} />
                }
            </TouchableOpacity>
            {/* Warning mesagge for form validations */}
            {((props.triggerValidation && checked == false && props.required) ?
                <RnText style={{ color: cssConstants.DANGER_TEXT_COLOR, fontSize: cssConstants.SMALL_FONT_SIZE }}>{props.label} is required</RnText>
                : null)}
        </>
    )
}
