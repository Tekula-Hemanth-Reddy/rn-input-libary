import React from "react";
import { TouchableOpacity } from "react-native";
import rnConstants from "../../config/rn-constants";
import { RnView } from "../view";
import { RnText } from "../text";
import { RnChipProps } from "src/types";

export default function RnChip(props: RnChipProps) {
  const {
    iconLeft,
    iconRight,
    text,
    textStyle,
    radius,
    keyProp,
    onDelete,
    heading,
    headingStyle,
    chipColor,
  } = props;
  return (
    <RnView
      row
      border
      marginTop
      marginHorizontal={rnConstants.DEFAULT_MARGIN / 2}
      padding={rnConstants.DEFAULT_PADDING / 2}
      {...(keyProp ? { keyProp } : {})}
      style={{
        alignSelf: "flex-start",
        borderRadius: radius || rnConstants.CHIP_RADIUS,
        backgroundColor: chipColor ? chipColor : rnConstants.LIGHT_PRIMARY_COLOR,
      }}
    >
      {iconLeft ? (
        <TouchableOpacity {...(onDelete ? { onPress: () => onDelete() } : {})}>
          {React.cloneElement(iconLeft, {
            color: iconLeft.props.color
              ? iconLeft.props.color
              : rnConstants.TEXT_COLOR,
          })}
        </TouchableOpacity>
      ) : (
        <></>
      )}
      <RnView>
        {heading && <RnText fontWeight={600} title textAlignCenter>
          {heading}
        </RnText>}
        <RnText
          style={textStyle || {}}
        >
          {text}
        </RnText>
      </RnView>
      {iconRight ? (
        <TouchableOpacity {...(onDelete ? { onPress: () => onDelete() } : {})}>
          {React.cloneElement(iconRight, {
            color: iconRight.props.color
              ? iconRight.props.color
              : rnConstants.TEXT_COLOR,
          })}
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </RnView>
  );
}
