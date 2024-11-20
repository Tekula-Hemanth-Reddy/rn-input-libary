import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import rnConstants from "../../config/rn-constants";
import { rnStyles } from "../../config/rn-styles";
import { RnIcon } from "../icon";
import { RnView } from "../view";
import { RnText } from "../text";
import { RnCheckboxProps } from "../../types";



export function RnCheckbox(props: RnCheckboxProps) {
    const size = props.size || 20;

    const [checked, setChecked] = useState(props.checked || false);
    const [checkBoxDisable, setDisable] = useState(props.disabled)
    const checkBoxCheckedBorderColor = props.checkBoxCheckedBorderColor || rnConstants.PRIMARY_COLOR
    const checkBoxUnCheckedBorderColor = props.checkBoxUnCheckedBorderColor || rnConstants.SECONDARY_COLOR
    const checkBoxCheckedColor = props.checkBoxCheckedColor || rnConstants.SECONDARY_COLOR
    const checkBoxCheckedFilledColor = props.checkBoxCheckedFilledColor || rnConstants.TRANSPARENT_COLOR
    const checkBoxUnCheckedFilledColor = props.checkBoxUnCheckedFilledColor || rnConstants.TRANSPARENT_COLOR

    useEffect(() => {
        setChecked(props.checked || false);
    }, [props.checked]);

    useEffect(() => {
        setDisable(props.disabled);
    }, [props.disabled]);

    return (
        <>
            <RnView row>
                {props.label && props.label?.length > 0 && <RnText style={rnStyles.fieldName}>{props.label}</RnText>}
                {props.required && <RnText style={{ ...rnStyles.fieldName, color: rnConstants.DANGER_TEXT_COLOR }}>*</RnText>}
            </RnView>
            <TouchableOpacity
                disabled={checkBoxDisable}
                style={
                    [
                        {
                            height: size + 2,
                            width: size + 2,
                            borderColor: checked ? checkBoxCheckedBorderColor : checkBoxUnCheckedBorderColor,
                            borderRadius: props.circle ? (size + 2) / 2 : rnConstants.BASE_BORDER_RADIUS,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: props.disabled ? rnConstants.DISABLE_COLOR : (checked ? checkBoxCheckedFilledColor : checkBoxUnCheckedFilledColor)
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
                <RnText style={{ color: rnConstants.DANGER_TEXT_COLOR, fontSize: rnConstants.SMALL_FONT_SIZE }}>{props.label} is required</RnText>
                : null)}
        </>
    )
}
