"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RnChip;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var view_1 = require("../view");
var text_1 = require("../text");
function RnChip(props) {
    var iconLeft = props.iconLeft, iconRight = props.iconRight, text = props.text, textStyle = props.textStyle, radius = props.radius, keyProp = props.keyProp, onDelete = props.onDelete, heading = props.heading, headingStyle = props.headingStyle, chipColor = props.chipColor;
    return (<view_1.RnView row border marginTop marginHorizontal={rn_constants_1.default.DEFAULT_MARGIN / 2} padding={rn_constants_1.default.DEFAULT_PADDING / 2} {...(keyProp ? { keyProp: keyProp } : {})} style={{
            alignSelf: "flex-start",
            borderRadius: radius || rn_constants_1.default.CHIP_RADIUS,
            backgroundColor: chipColor ? chipColor : rn_constants_1.default.LIGHT_PRIMARY_COLOR,
        }}>
      {iconLeft ? (<react_native_1.TouchableOpacity {...(onDelete ? { onPress: function () { return onDelete(); } } : {})}>
          {react_1.default.cloneElement(iconLeft, {
                color: iconLeft.props.color
                    ? iconLeft.props.color
                    : rn_constants_1.default.TEXT_COLOR,
            })}
        </react_native_1.TouchableOpacity>) : (<></>)}
      <view_1.RnView>
        {heading && <text_1.RnText fontWeight={600} title textAlignCenter>
          {heading}
        </text_1.RnText>}
        <text_1.RnText style={textStyle || {}}>
          {text}
        </text_1.RnText>
      </view_1.RnView>
      {iconRight ? (<react_native_1.TouchableOpacity {...(onDelete ? { onPress: function () { return onDelete(); } } : {})}>
          {react_1.default.cloneElement(iconRight, {
                color: iconRight.props.color
                    ? iconRight.props.color
                    : rn_constants_1.default.TEXT_COLOR,
            })}
        </react_native_1.TouchableOpacity>) : (<></>)}
    </view_1.RnView>);
}
