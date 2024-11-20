"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RnSlider;
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var MaterialIcons_1 = __importDefault(require("@expo/vector-icons/MaterialIcons"));
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var rn_styles_1 = require("../../config/rn-styles");
// ---------- usage --------------//
{ /*
    <RnSlider
        minBoundary={0} maxBoundary={99}
        min_initVal={12} max_initVal={88}
        rangeSlider={true}
        onMinValueChange={(data: number) => {
            console.log("min value change", data)
        }}
        onMaxValueChange={(data: number) => {
            console.log("max value change", data)
        }}
    />
*/
}
function RnSlider(props) {
    // ------------------ OPTIONS ------------------------ //
    var icon = "circle";
    var minBoundary = (props === null || props === void 0 ? void 0 : props.minBoundary) || 0;
    var maxBoundary = props.maxBoundary;
    var min_initVal = (props === null || props === void 0 ? void 0 : props.min_initVal) || 0;
    var max_initVal = props.max_initVal;
    var colorNeutral = rn_constants_1.default.BORDER_COLOR;
    var colorHighlight = rn_constants_1.default.PRIMARY_COLOR;
    // Next line is the position's difference of min slider and max slider
    // To avoid overlap and blocking at the maximum boundary value
    // Keep between 0.10 and 0.40 for best user experience
    var manualOffsetBetweenSlider = 0.10;
    // ----------------- Common ----------------------- //
    var _a = react_1.default.useState(0), forceRender = _a[0], setForceRender = _a[1];
    var _b = react_1.default.useState(0), sliderHeight = _b[0], setSliderHeight = _b[1];
    var _c = react_1.default.useState(0), sliderWidth = _c[0], setSliderWidth = _c[1];
    var _d = react_1.default.useState(0), sliderCenter = _d[0], setSliderCenter = _d[1];
    var initSliders = function (height, width) {
        // Set sizes
        var sWidth = width - height; // - height : Avoid the slider to overlap the borders
        var center = sWidth / 2;
        var stepWidth = sWidth / (maxBoundary - minBoundary);
        setSliderHeight(height);
        setSliderWidth(sWidth);
        setSliderCenter(center);
        // Init min slider
        var min_initOff = (min_initVal - ((maxBoundary - minBoundary) / 2)) * stepWidth;
        min_setInitOffset(min_initOff);
        var minPos = (-sWidth / 2) - min_initOff;
        min_setMinBoundaryPosition(minPos);
        min_setMaxBoundaryPosition(minPos + sWidth);
        min_animState.sliderHeight = height;
        min_animState.sliderWidth = sWidth;
        min_animState.stepWidth = stepWidth;
        min_animState.minBoundary = minBoundary;
        min_animState.maxBoundary = maxBoundary;
        min_animState.initOffSet = min_initOff;
        min_animState.minBoundaryPosition = minPos;
        min_animState.maxBoundaryPosition = minPos + sWidth;
        // Init max slider
        var max_initOff = (max_initVal - ((maxBoundary - minBoundary) / 2)) * stepWidth;
        max_setInitOffset(max_initOff);
        var maxPos = (-sWidth / 2) - max_initOff;
        max_setMinBoundaryPosition(maxPos);
        max_setMaxBoundaryPosition(maxPos + sWidth);
        max_animState.sliderHeight = height;
        max_animState.sliderWidth = sWidth;
        max_animState.stepWidth = stepWidth;
        max_animState.minBoundary = minBoundary;
        max_animState.maxBoundary = maxBoundary;
        max_animState.initOffSet = max_initOff;
        max_animState.minBoundaryPosition = maxPos;
        max_animState.maxBoundaryPosition = maxPos + sWidth;
        // Initialize sliders
        placeSlider(min_pan.x._value, min_animState, max_animState, max_setMinBoundaryPosition, true);
        placeSlider(max_pan.x._value, max_animState, min_animState, min_setMaxBoundaryPosition, false);
    };
    // Main function, placing the slider, contraining it and changing the overlap limit of the other slider
    var placeSlider = function (position, state, otherSliderState, setBoundary, isMin) {
        if (isMin === void 0) { isMin = true; }
        var newVal = position +
            state.offSet +
            state.initOffSet +
            state.sliderWidth / 2 -
            state.clampOffSet;
        // Make sure the value is constrained in boundaries
        newVal = Math.max(state.minBoundaryPosition + state.initOffSet + state.sliderWidth / 2, Math.min(state.maxBoundaryPosition + state.initOffSet + state.sliderWidth / 2, newVal));
        // Constrain the other slider to avoid overlap
        var newBoundary = 0;
        if (isMin === true) {
            // Unlock the slider position
            state.effectiveMaxBoundaryPosition = state.maxBoundaryPosition;
            // Constrain the minimum of the max slider
            newBoundary = Math.min(newVal - otherSliderState.initOffSet - state.sliderWidth / 2, otherSliderState.maxBoundaryPosition);
            setBoundary(newBoundary);
            otherSliderState.minBoundaryPosition = newBoundary;
        }
        else {
            // Unlock the slider position
            state.effectiveMinBoundaryPosition = state.minBoundaryPosition;
            // Constrain the maximum of the min slider
            newBoundary = Math.max(newVal - otherSliderState.initOffSet - state.sliderWidth / 2, otherSliderState.minBoundaryPosition);
            setBoundary(newBoundary);
            otherSliderState.maxBoundaryPosition = newBoundary;
        }
        // Set the value
        state.displayVal = Math.trunc((newVal + state.stepWidth / 2) / state.stepWidth);
        if (typeof props.onValueChange == 'function') {
            if (isMin === true) {
                props.onValueChange({
                    minValue: state.displayVal,
                    maxValue: max_animState.displayVal
                });
            }
            else {
                props.onValueChange({
                    minValue: min_animState.displayVal,
                    maxValue: state.displayVal
                });
            }
        }
        setForceRender(newVal); // Update the state so the render function is called (and elements are updated on screen)
        state.currentVal = newVal - state.initOffSet - state.sliderWidth / 2;
    };
    // ----------------- Min slider ----------------------- //
    var min_pan = react_1.default.useRef(new react_native_1.Animated.ValueXY()).current;
    var _e = react_1.default.useState(0), min_initOffset = _e[0], min_setInitOffset = _e[1];
    var _f = react_1.default.useState(0), min_minBoundaryPosition = _f[0], min_setMinBoundaryPosition = _f[1];
    var _g = react_1.default.useState(0), min_maxBoundaryPosition = _g[0], min_setMaxBoundaryPosition = _g[1];
    var _h = react_1.default.useState(0), min_effectiveMaxBoundaryPosition = _h[0], min_setEffectiveMaxBoundaryPosition = _h[1];
    var min_animState = react_1.default.useRef({
        currentVal: 0,
        displayVal: 0,
        sliderWidth: 0,
        sliderHeight: 0,
        stepWidth: 0,
        minBoundary: 0,
        maxBoundary: 0,
        minBoundaryPosition: 0,
        maxBoundaryPosition: 0,
        effectiveMaxBoundaryPosition: 0,
        offSet: 0,
        clampOffSet: 0,
        initOffSet: 0,
    }).current;
    var min_getPanResponder = function () {
        return react_native_1.PanResponder.create({
            // onMoveShouldSetResponderCapture: () => true, //Tell iOS that we are allowing the movement
            onMoveShouldSetPanResponderCapture: function () { return true; }, // Same here, tell iOS that we allow dragging
            onStartShouldSetPanResponder: function () { return true; },
            onPanResponderGrant: function () {
                var clamp = Math.max(min_animState.minBoundaryPosition, Math.min(min_animState.maxBoundaryPosition, min_animState.currentVal));
                min_animState.clampOffSet = min_animState.clampOffSet + min_pan.x._value - clamp;
                min_pan.setOffset({ x: clamp, y: 0 });
            },
            onPanResponderMove: function (e, gesture) {
                min_setEffectiveMaxBoundaryPosition(min_animState.maxBoundaryPosition);
                placeSlider(min_pan.x._value, min_animState, max_animState, max_setMinBoundaryPosition, true);
                react_native_1.Animated.event([null, { dx: min_pan.x, dy: min_pan.y }], {})(e, { dx: gesture.dx, dy: 0 });
            },
            onPanResponderRelease: function (e, gesture) {
                // Lock the slider position
                min_animState.effectiveMaxBoundaryPosition = min_animState.currentVal;
                min_setEffectiveMaxBoundaryPosition(min_animState.currentVal);
                // Save slider's offset
                min_animState.offSet = min_animState.offSet + min_pan.x._value;
                min_pan.flattenOffset();
            }
        });
    };
    var _j = react_1.default.useState(min_getPanResponder()), min_panResponder = _j[0], min_setPanResponder = _j[1];
    var min_getSlider = function () {
        return (<react_native_1.Animated.View style={[
                rn_styles_1.rnStyles.draggable,
                {
                    transform: [{
                            translateX: min_pan.x.interpolate({
                                inputRange: [Math.min(min_minBoundaryPosition, min_effectiveMaxBoundaryPosition), Math.max(min_minBoundaryPosition, min_effectiveMaxBoundaryPosition)],
                                outputRange: [Math.min(min_minBoundaryPosition, min_effectiveMaxBoundaryPosition), Math.max(min_minBoundaryPosition, min_effectiveMaxBoundaryPosition)],
                                extrapolate: 'clamp'
                            })
                        }]
                },
                { left: sliderCenter + min_initOffset - sliderHeight * manualOffsetBetweenSlider }
            ]} {...min_panResponder.panHandlers}>
                <react_native_1.View style={rn_styles_1.rnStyles.icon}>
                    <MaterialIcons_1.default name={icon} size={30} color={colorHighlight}/>
                </react_native_1.View>
            </react_native_1.Animated.View>);
    };
    var min_getLine = function () {
        return (<react_native_1.Animated.View style={[
                rn_styles_1.rnStyles.line,
                [{
                        translateX: min_pan.x.interpolate({
                            inputRange: [Math.min(min_minBoundaryPosition, min_effectiveMaxBoundaryPosition), Math.max(min_minBoundaryPosition, min_effectiveMaxBoundaryPosition)],
                            outputRange: [
                                Math.min(min_minBoundaryPosition + min_initOffset - sliderWidth / 2 - sliderHeight * manualOffsetBetweenSlider, min_effectiveMaxBoundaryPosition + min_initOffset - sliderWidth / 2 - sliderHeight * manualOffsetBetweenSlider),
                                Math.max(min_minBoundaryPosition + min_initOffset - sliderWidth / 2 - sliderHeight * manualOffsetBetweenSlider, min_effectiveMaxBoundaryPosition + min_initOffset - sliderWidth / 2 - sliderHeight * manualOffsetBetweenSlider),
                            ],
                            extrapolate: 'clamp'
                        })
                    }],
                { backgroundColor: colorNeutral }
            ]}/>);
    };
    // ----------------- Max slider ----------------------- //
    var max_pan = react_1.default.useRef(new react_native_1.Animated.ValueXY()).current;
    var _k = react_1.default.useState(0), max_initOffset = _k[0], max_setInitOffset = _k[1];
    var _l = react_1.default.useState(0), max_minBoundaryPosition = _l[0], max_setMinBoundaryPosition = _l[1];
    var _m = react_1.default.useState(0), max_maxBoundaryPosition = _m[0], max_setMaxBoundaryPosition = _m[1];
    var _o = react_1.default.useState(0), max_effectiveMinBoundaryPosition = _o[0], max_setEffectiveMinBoundaryPosition = _o[1];
    var max_animState = react_1.default.useRef({
        currentVal: 0,
        displayVal: 0,
        sliderWidth: 0,
        stepWidth: 0,
        sliderHeight: 0,
        minBoundary: 0,
        maxBoundary: 0,
        minBoundaryPosition: 0,
        maxBoundaryPosition: 0,
        effectiveMinBoundaryPosition: 0,
        offSet: 0,
        clampOffSet: 0,
        initOffSet: 0,
    }).current;
    var max_getPanResponder = function () {
        return react_native_1.PanResponder.create({
            // onMoveShouldSetResponderCapture: () => true, //Tell iOS that we are allowing the movement
            onMoveShouldSetPanResponderCapture: function () { return true; }, // Same here, tell iOS that we allow dragging
            onStartShouldSetPanResponder: function () { return true; },
            onPanResponderGrant: function () {
                var clamp = Math.max(max_animState.minBoundaryPosition, Math.min(max_animState.maxBoundaryPosition, max_animState.currentVal));
                max_animState.clampOffSet = max_animState.clampOffSet + max_pan.x._value - clamp;
                max_pan.setOffset({ x: clamp, y: 0 });
            },
            onPanResponderMove: function (e, gesture) {
                max_setEffectiveMinBoundaryPosition(max_animState.minBoundaryPosition);
                placeSlider(max_pan.x._value, max_animState, min_animState, min_setMaxBoundaryPosition, false);
                react_native_1.Animated.event([null, { dx: max_pan.x, dy: max_pan.y }], {})(e, { dx: gesture.dx, dy: 0 });
            },
            onPanResponderRelease: function (evt, gestureState) {
                max_animState.effectiveMinBoundaryPosition = max_animState.currentVal;
                max_setEffectiveMinBoundaryPosition(max_animState.currentVal);
                max_animState.offSet = max_animState.offSet + max_pan.x._value;
                max_pan.flattenOffset();
            }
        });
    };
    var _p = react_1.default.useState(max_getPanResponder()), max_panResponder = _p[0], max_setPanResponder = _p[1];
    var max_getSlider = function () {
        return (<react_native_1.Animated.View style={[
                rn_styles_1.rnStyles.draggable,
                {
                    transform: [{
                            translateX: max_pan.x.interpolate({
                                inputRange: [Math.min(max_effectiveMinBoundaryPosition, max_maxBoundaryPosition), Math.max(max_effectiveMinBoundaryPosition, max_maxBoundaryPosition)],
                                outputRange: [Math.min(max_effectiveMinBoundaryPosition, max_maxBoundaryPosition), Math.max(max_effectiveMinBoundaryPosition, max_maxBoundaryPosition)],
                                extrapolate: 'clamp'
                            })
                        }]
                },
                { left: sliderCenter + max_initOffset + sliderHeight * manualOffsetBetweenSlider }
            ]} {...max_panResponder.panHandlers}>
                <react_native_1.View style={rn_styles_1.rnStyles.icon}>
                    <MaterialIcons_1.default name={icon} size={30} color={colorHighlight}/>
                </react_native_1.View>
            </react_native_1.Animated.View>);
    };
    var max_getLine = function () {
        return (<react_native_1.Animated.View style={[
                rn_styles_1.rnStyles.line,
                [{
                        translateX: max_pan.x.interpolate({
                            inputRange: [Math.min(max_effectiveMinBoundaryPosition, max_maxBoundaryPosition), Math.max(max_effectiveMinBoundaryPosition, max_maxBoundaryPosition)],
                            outputRange: [
                                Math.min(max_effectiveMinBoundaryPosition + sliderWidth / 2 + max_initOffset + sliderHeight * manualOffsetBetweenSlider, max_maxBoundaryPosition + sliderWidth / 2 + max_initOffset + sliderHeight * manualOffsetBetweenSlider),
                                Math.max(max_effectiveMinBoundaryPosition + sliderWidth / 2 + max_initOffset + sliderHeight * manualOffsetBetweenSlider, max_maxBoundaryPosition + sliderWidth / 2 + max_initOffset + sliderHeight * manualOffsetBetweenSlider),
                            ],
                            extrapolate: 'clamp'
                        })
                    }],
                { backgroundColor: colorNeutral }
            ]}/>);
    };
    // ----------------- Render ----------------------- //
    return (<react_native_1.View style={rn_styles_1.rnStyles.mainContainer}>
            <react_native_1.View style={rn_styles_1.rnStyles.mainSliderContainer}>
                <react_native_1.View style={rn_styles_1.rnStyles.labelValue}>
                    <react_native_1.Text style={rn_styles_1.rnStyles.labelValueText}>{min_animState.displayVal}</react_native_1.Text>
                </react_native_1.View>
                <react_native_1.View style={[rn_styles_1.rnStyles.sliderContainer, { marginHorizontal: sliderHeight * manualOffsetBetweenSlider }]} onLayout={function (event) { return initSliders(event.nativeEvent.layout.height, event.nativeEvent.layout.width); }}>
                    <react_native_1.View style={[rn_styles_1.rnStyles.lineContainer, { backgroundColor: colorHighlight }]}>
                        {props.rangeSlider && min_getLine()}
                        {max_getLine()}
                    </react_native_1.View>
                    {props.rangeSlider && min_getSlider()}
                    {max_getSlider()}
                </react_native_1.View>
                <react_native_1.View style={rn_styles_1.rnStyles.labelValue}>
                    <react_native_1.Text style={rn_styles_1.rnStyles.labelValueText}>{max_animState.displayVal}</react_native_1.Text>
                </react_native_1.View>
            </react_native_1.View>
        </react_native_1.View>);
}
