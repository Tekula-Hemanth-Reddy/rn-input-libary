import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { formStyles } from "../../config/rn-styles";
import rnConstants from "../../config/rn-constants";
import { RnIcon } from "../icon";
import { RnView } from "../view";
import { RnText } from "../text";
import { RnCheckboxGroupProps } from "../../types";

type CheckBox = { label: string, value: string, isSelected: boolean }

/**
 *
 *
 * @export
 * @param {string} value
 * @param {string} label
 * @param {{fieldValue: string}[]} fields
 * @param {boolean} [disable=false]
 * @param {boolean} [required=false]
 * @param {Function} [onChange]
 * @return {*} 
 */
export function RnCheckBoxGroup(props: RnCheckboxGroupProps) {
    const { value, label, fields, disable = false, required = false, onChange } = props;
    const [currentValues, setValues] = useState<CheckBox[]>(fields.map((field: CheckBox) => {
        return {
            label: field.label,
            value: field.value,
            isSelected: field.value == value
        }
    }));
    let currentValueChange = useCallback((item: CheckBox) => {
        setValues(fields.map((field: CheckBox) => {
            return {
                label: field.label,
                value: field.value,
                isSelected: field.value == item.value
            }
        }))
        onChange(item.value);
    }, [fields, onChange])

    useEffect(() => {
        setValues(props.fields.map((field: CheckBox) => {
            return {
                label: field.label,
                value: field.value,
                isSelected: field.value == props.value
            }
        }))
    }, [props])
    return (
        <RnView>
            {
                (label && label.length) &&
                <RnView row>
                    <RnText marginVertical>{label}</RnText>
                    {required && <RnText style={{ color: rnConstants.DANGER_TEXT_COLOR, fontSize: rnConstants.SMALL_FONT_SIZE }}>*</RnText>}
                </RnView>
            }
            <FlatList
                data={currentValues}
                horizontal={true}
                renderItem={({ item, index }: { item: CheckBox, index: number }) => {
                    return (
                        <RnView key={index} style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity
                                style={styles.radioButtonWrapper}
                                disabled={disable}
                                onPress={() => currentValueChange(item)}
                            >
                                {(item.isSelected) ?
                                    <RnIcon size={rnConstants.MEDIUM_FONT_SIZE} name="check" color={rnConstants.PRIMARY_COLOR} />
                                    : null
                                }
                            </TouchableOpacity>
                            {item.label && item.label.length && <RnText style={{ ...formStyles.fieldName, marginBottom: 0 }}>{item.label}</RnText>}
                        </RnView>
                    );
                }}
                keyExtractor={(item: CheckBox) => item.value}
            />
        </RnView>
    );
}


const styles = StyleSheet.create({
    radioButtonWrapper: {
        width: 26,
        height: 26,
        borderColor: rnConstants.BORDER_COLOR,
        borderWidth: 1,
        borderRadius: 13,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: rnConstants.DEFAULT_MARGIN,
    },
})