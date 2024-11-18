import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import cssConstants from "../../config/css-constants";
import { constants } from "src/config/constants";
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
      marginHorizontal={cssConstants.DEFAULT_MARGIN / 2}
      padding={cssConstants.DEFAULT_PADDING / 2}
      {...(keyProp ? { keyProp } : {})}
      style={{
        alignSelf: "flex-start",
        borderRadius: radius || constants.CHIP_RADIUS,
        backgroundColor: chipColor ? chipColor : colors.PRIMARY.PRIMARY_50,
      }}
    >
      {iconLeft ? (
        <TouchableOpacity {...(onDelete ? { onPress: () => onDelete() } : {})}>
          {React.cloneElement(iconLeft, {
            color: iconLeft.props.color
              ? iconLeft.props.color
              : cssConstants.TEXT_COLOR,
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
              : cssConstants.TEXT_COLOR,
          })}
        </TouchableOpacity>
      ) : (
        <></>
      )}
    </RnView>
  );
}
