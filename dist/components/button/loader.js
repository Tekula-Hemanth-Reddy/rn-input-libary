"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
/**
 * Component Made Using ChatGPT
 */
var ButtonLoader = function (_a) {
    var numberOfCircles = _a.numberOfCircles, color = _a.color, size = _a.size;
    var styles = react_native_1.StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        circle: {
            width: size || 7,
            height: size || 7,
            borderRadius: 5,
            backgroundColor: color || rn_constants_1.default.BODY
        },
    });
    var animatedValues = (0, react_1.useRef)(__spreadArray([], Array(numberOfCircles || 4), true).map(function () { return new react_native_1.Animated.Value(0); })).current;
    (0, react_1.useEffect)(function () {
        var animations = animatedValues.map(function (animatedValue) {
            return react_native_1.Animated.sequence([
                react_native_1.Animated.timing(animatedValue, {
                    toValue: 1,
                    duration: 300, // Adjust the duration for the complete wave cycle
                    useNativeDriver: true,
                }),
                react_native_1.Animated.timing(animatedValue, {
                    toValue: 0,
                    duration: 300, // Adjust the duration for the complete wave cycle
                    useNativeDriver: true,
                }),
            ]);
        });
        react_native_1.Animated.loop(react_native_1.Animated.stagger(200, animations)).start(); // Adjust the stagger duration for the delay between circles
    }, [animatedValues]);
    var renderCircles = function () {
        return animatedValues.map(function (animatedValue, index) {
            var translateY = animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, !!size ? -size : -7], // Adjust this value to control the maximum wave height
            });
            return (<react_native_1.Animated.View key={index} style={[
                    styles.circle,
                    {
                        transform: [{ translateY: translateY }],
                        marginLeft: index !== 0 ? 7 : 0, // Adjust spacing between circles
                    },
                ]}/>);
        });
    };
    return <react_native_1.View style={styles.container}>{renderCircles()}</react_native_1.View>;
};
exports.default = ButtonLoader;
