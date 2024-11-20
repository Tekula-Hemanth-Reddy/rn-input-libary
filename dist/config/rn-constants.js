"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rn_colors_1 = __importDefault(require("./rn-colors"));
var rnConstants = {
    //heights
    SMALL_INPUT_HEIGHT: 28,
    INPUT_HEIGHT: 40,
    LARGE_INPUT_HEIGHT: 44,
    HEADER_HEIGHT: 40,
    //radius
    BASE_BORDER_RADIUS: 6,
    INPUT_BORDER_RADIUS: 4,
    CHIP_RADIUS: 8,
    // Fonts
    BASE_FONT_SIZE: 14,
    SMALL_FONT_SIZE: 12,
    LARGE_FONT_SIZE: 20,
    MEDIUM_FONT_SIZE: 16,
    INPUT_FONT_SIZE: 16,
    EXTRA_SMALL_FONT_SIZE: 10,
    //Icon
    ICON_SIZE: 20,
    // margin
    DEFAULT_MARGIN: 10,
    //padding
    DEFAULT_PADDING: 10,
    XXX_SMALL_PADDING: 2,
    XX_SMALL_PADDING: 4,
    // Picker
    PICKER_CIRCLE_HEIGHT: 15,
    PICKER_CIRCLE_WIDTH: 15,
    PICKER_BORDER_RADIUS: 10,
    // Colors
    BODY: rn_colors_1.default.BODY,
    BLACK_COLOR: rn_colors_1.default.BLACK,
    WHITE_COLOR: rn_colors_1.default.WHITE,
    TRANSPARENT_COLOR: rn_colors_1.default.TRANSPARENT,
    LIGHT_PRIMARY_COLOR: rn_colors_1.default.PRIMARY.PRIMARY_50,
    PRIMARY_COLOR: rn_colors_1.default.PRIMARY.PRIMARY_500,
    DARK_PRIMARY_COLOR: rn_colors_1.default.PRIMARY.PRIMARY_900,
    SECONDARY_COLOR: rn_colors_1.default.SECONDARY.SECONDARY_500,
    DARK_SECONDARY_COLOR: rn_colors_1.default.SECONDARY.SECONDARY_900,
    DANGER_COLOR: rn_colors_1.default.DANGER.DANGER_500,
    DARK_DANGER_COLOR: rn_colors_1.default.DANGER.DANGER_900,
    LIGHT_NEUTRAL_COLOR: rn_colors_1.default.NEUTRAL.NEUTRAL_20,
    NEUTRAL_COLOR: rn_colors_1.default.NEUTRAL.NEUTRAL_50,
    MEDIUM_NEUTRAL_COLOR: rn_colors_1.default.NEUTRAL.NEUTRAL_80,
    DARK_NEUTRAL_COLOR: rn_colors_1.default.NEUTRAL.NEUTRAL_900,
    SUCCESS_COLOR: rn_colors_1.default.SUCCESS.SUCCESS_500,
    DARK_SUCCESS_COLOR: rn_colors_1.default.SUCCESS.SUCCESS_900,
    WARNING_COLOR: rn_colors_1.default.DANGER.DANGER_50,
    DARK_WARNING_COLOR: rn_colors_1.default.DANGER.DANGER_400,
    BACKGROUND_COLOR: rn_colors_1.default.WHITE,
    WARNING_BACKGROUND: rn_colors_1.default.DANGER.DANGER_300,
    // Text Colors
    TEXT_COLOR: rn_colors_1.default.NEUTRAL.NEUTRAL_600,
    LIGHT_TEXT_COLOR: rn_colors_1.default.NEUTRAL.NEUTRAL_200,
    DANGER_TEXT_COLOR: rn_colors_1.default.DANGER.DANGER_500,
    BORDER_COLOR: rn_colors_1.default.SECONDARY.SECONDARY_50,
    DISABLE_COLOR: rn_colors_1.default.NEUTRAL.NEUTRAL_40,
};
exports.default = rnConstants;
