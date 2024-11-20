"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RnProgressBar = void 0;
var react_1 = __importDefault(require("react"));
var view_1 = require("../view");
var rn_styles_1 = require("../../config/rn-styles");
var RnProgressBar = function (_a) {
    var progress = _a.progress;
    return (<view_1.RnView style={rn_styles_1.rnStyles.progressBarContainer}>
            <view_1.RnView style={[rn_styles_1.rnStyles.progressBar, { width: "".concat((progress || 0) * 100, "%") }]}/>
        </view_1.RnView>);
};
exports.RnProgressBar = RnProgressBar;
