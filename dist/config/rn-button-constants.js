"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonHeights = exports.themeOptions = void 0;
var rn_constants_1 = __importDefault(require("./rn-constants"));
exports.themeOptions = {
    primary: {
        backgroundColor: rn_constants_1.default.PRIMARY_COLOR,
        textColor: rn_constants_1.default.WHITE_COLOR,
        outlineTextColor: rn_constants_1.default.DARK_PRIMARY_COLOR,
        borderColor: rn_constants_1.default.PRIMARY_COLOR,
        fontSize: rn_constants_1.default.MEDIUM_FONT_SIZE,
        padding: rn_constants_1.default.DEFAULT_PADDING,
    },
    secondary: {
        backgroundColor: rn_constants_1.default.SECONDARY_COLOR,
        outlineTextColor: rn_constants_1.default.DARK_SECONDARY_COLOR,
        textColor: rn_constants_1.default.WHITE_COLOR,
        borderColor: rn_constants_1.default.SECONDARY_COLOR,
        fontSize: rn_constants_1.default.MEDIUM_FONT_SIZE,
        padding: rn_constants_1.default.DEFAULT_PADDING,
    },
    warning: {
        backgroundColor: rn_constants_1.default.DANGER_COLOR,
        textColor: rn_constants_1.default.WHITE_COLOR,
        outlineTextColor: rn_constants_1.default.DARK_DANGER_COLOR,
        borderColor: rn_constants_1.default.DANGER_COLOR,
        fontSize: rn_constants_1.default.MEDIUM_FONT_SIZE,
        padding: rn_constants_1.default.DEFAULT_PADDING,
    },
    success: {
        backgroundColor: rn_constants_1.default.SUCCESS_COLOR,
        textColor: rn_constants_1.default.WHITE_COLOR,
        outlineTextColor: rn_constants_1.default.DARK_SUCCESS_COLOR,
        borderColor: rn_constants_1.default.SUCCESS_COLOR,
        fontSize: rn_constants_1.default.MEDIUM_FONT_SIZE,
        padding: rn_constants_1.default.DEFAULT_PADDING,
    },
    danger: {
        backgroundColor: rn_constants_1.default.WARNING_COLOR,
        textColor: rn_constants_1.default.DANGER_TEXT_COLOR,
        outlineTextColor: rn_constants_1.default.DARK_WARNING_COLOR,
        borderColor: rn_constants_1.default.DARK_WARNING_COLOR,
        fontSize: rn_constants_1.default.MEDIUM_FONT_SIZE,
        padding: rn_constants_1.default.DEFAULT_PADDING,
    },
    neutral: {
        backgroundColor: rn_constants_1.default.NEUTRAL_COLOR,
        textColor: rn_constants_1.default.TEXT_COLOR,
        outlineTextColor: rn_constants_1.default.DARK_NEUTRAL_COLOR,
        borderColor: rn_constants_1.default.NEUTRAL_COLOR,
        fontSize: rn_constants_1.default.MEDIUM_FONT_SIZE,
        padding: rn_constants_1.default.DEFAULT_PADDING,
    },
    default: {
        backgroundColor: rn_constants_1.default.LIGHT_NEUTRAL_COLOR,
        textColor: rn_constants_1.default.TEXT_COLOR,
        outlineTextColor: rn_constants_1.default.TEXT_COLOR,
        borderColor: rn_constants_1.default.NEUTRAL_COLOR,
        fontSize: rn_constants_1.default.MEDIUM_FONT_SIZE,
        padding: rn_constants_1.default.DEFAULT_PADDING,
    },
};
exports.buttonHeights = {
    small: rn_constants_1.default.SMALL_INPUT_HEIGHT,
    default: rn_constants_1.default.INPUT_HEIGHT,
    large: rn_constants_1.default.LARGE_INPUT_HEIGHT
};
