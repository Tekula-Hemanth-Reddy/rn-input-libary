import { MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import cssConstants from "../../config/css-constants";
import { RnView } from '../view';
import { RnIconProps } from '../../types';



// search icons: "https://icons.expo.fyi/"

export function RnIcon({ name, color, size, ...iconProps }: RnIconProps) {
    const IconSize = size || cssConstants.ICON_SIZE;
    const [iconColor, setIconColor] = useState(color || cssConstants.TEXT_COLOR);
    useEffect(() => {
        setIconColor(color || cssConstants.TEXT_COLOR);
    }, [color]);
    return (
        <RnView {...iconProps} style={[styles.container, iconProps.style]}>
            <MaterialIcons name={name as any} size={IconSize} color={iconColor} />
        </RnView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    }
});