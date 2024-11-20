"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rnStyles = void 0;
var react_native_1 = require("react-native");
var rn_constants_1 = __importDefault(require("./rn-constants"));
var layout = react_native_1.StyleSheet.create({
    background_transperent: {
        backgroundColor: 'transparent'
    },
    border: {
        borderWidth: 1,
        borderColor: rn_constants_1.default.BORDER_COLOR,
        borderRadius: rn_constants_1.default.BASE_BORDER_RADIUS,
    },
    col: {
        display: "flex",
        flexDirection: "column",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    rowSpaceBetween: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
    },
    rowFlexEnd: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    rowFlexStart: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    centerAlign: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
});
var textStyles = react_native_1.StyleSheet.create({
    // used in text
    textAlignCenter: {
        textAlign: "center",
    },
    textAlignLeft: {
        textAlign: "left",
    },
    textAlignRight: {
        textAlign: "right",
    },
    // used in input
    textInput: {
        height: 40,
        borderWidth: 1,
        borderColor: 'transparent',
        width: '100%'
    },
    errorText: __assign({ height: 20, marginTop: 4, fontSize: rn_constants_1.default.SMALL_FONT_SIZE, color: rn_constants_1.default.DANGER_TEXT_COLOR }, react_native_1.Platform.select({
        android: {
            paddingLeft: 4,
            paddingTop: 5
        },
    })),
    // used for button
    buttonText: {
        lineHeight: 24,
    },
});
var containerStyles = react_native_1.StyleSheet.create({
    // container
    container: {
        borderRadius: rn_constants_1.default.INPUT_BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    // used for icon
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    // used in input
    inputContainer: {
        backgroundColor: rn_constants_1.default.BACKGROUND_COLOR,
        height: rn_constants_1.default.INPUT_HEIGHT,
        paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING,
        borderRadius: rn_constants_1.default.INPUT_BORDER_RADIUS * 2,
        borderWidth: 1,
        fontSize: rn_constants_1.default.BASE_FONT_SIZE,
        color: rn_constants_1.default.TEXT_COLOR,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    //used in date
    dateContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#000000' + 'BB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dateRangePickerContainer: {
        borderWidth: 1,
        borderColor: rn_constants_1.default.BORDER_COLOR,
        borderRadius: rn_constants_1.default.INPUT_BORDER_RADIUS,
        paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING / 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: rn_constants_1.default.INPUT_HEIGHT,
    },
});
// form styles
var formStyles = react_native_1.StyleSheet.create({
    // Input field label style
    fieldName: {
        marginBottom: rn_constants_1.default.DEFAULT_MARGIN / 2,
        color: rn_constants_1.default.TEXT_COLOR,
    },
    fieldInputContainer: {
        height: rn_constants_1.default.INPUT_HEIGHT,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flex: 1,
    },
    fieldInput: {
        paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING,
        height: rn_constants_1.default.INPUT_HEIGHT,
        fontSize: rn_constants_1.default.BASE_FONT_SIZE,
        color: rn_constants_1.default.TEXT_COLOR,
        width: "100%",
        borderRadius: rn_constants_1.default.INPUT_BORDER_RADIUS,
        borderWidth: 1,
        borderColor: rn_constants_1.default.BORDER_COLOR,
        selectionColor: rn_constants_1.default.PRIMARY_COLOR,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: rn_constants_1.default.BACKGROUND_COLOR,
    },
    tableHeader: {
        backgroundColor: rn_constants_1.default.PRIMARY_COLOR,
        padding: rn_constants_1.default.DEFAULT_PADDING,
        minHeight: rn_constants_1.default.INPUT_HEIGHT,
        width: 200,
        alignContent: "center",
    },
    tableModalView: {
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
        backgroundColor: "rgba( 0, 0, 0, 0.6 )",
    },
    tableModalContent: {
        backgroundColor: rn_constants_1.default.WHITE_COLOR,
        elevation: 5,
        borderRadius: rn_constants_1.default.BASE_BORDER_RADIUS,
        margin: rn_constants_1.default.DEFAULT_MARGIN * 2,
        padding: rn_constants_1.default.DEFAULT_PADDING * 2,
    },
    disabledFieldControl: {
        backgroundColor: rn_constants_1.default.DISABLE_COLOR,
    },
    highlightedFieldControl: {
        borderColor: rn_constants_1.default.PRIMARY_COLOR,
        borderWidth: 1,
        shadowColor: rn_constants_1.default.PRIMARY_COLOR,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    },
    radioButtonWrapper: {
        width: 26,
        height: 26,
        borderColor: rn_constants_1.default.BORDER_COLOR,
        borderWidth: 1,
        borderRadius: 13,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: rn_constants_1.default.DEFAULT_MARGIN,
    },
    inputText: {
        color: rn_constants_1.default.LIGHT_TEXT_COLOR
    },
});
var slider = react_native_1.StyleSheet.create({
    mainContainer: {
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        width: "100%",
        aspectRatio: 4,
    },
    mainSliderContainer: {
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flex: 1,
        flexDirection: "row",
    },
    sliderContainer: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        flex: 8,
        overflow: 'visible',
    },
    lineContainer: {
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        height: 4,
        width: "80%",
        flexDirection: 'row',
        position: "absolute",
        left: "10%",
        top: "50%",
        marginTop: -3,
        borderRadius: 60,
    },
    labelValue: {
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        flex: 1,
    },
    labelValueText: {
        fontSize: rn_constants_1.default.BASE_FONT_SIZE,
    },
    line: {
        height: "100%",
        width: "100%",
        position: 'absolute',
    },
    draggable: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        aspectRatio: 1,
        position: 'absolute',
        top: -5,
        flexDirection: 'row',
        borderRadius: 100,
        overflow: "visible",
    },
    circle: {
        shadowColor: rn_constants_1.default.DISABLE_COLOR,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.24,
        shadowRadius: 2.8,
        elevation: 3,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        aspectRatio: 1,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        borderWidth: react_native_1.StyleSheet.hairlineWidth,
        borderColor: "#f1f1f1",
        overflow: "visible",
    },
    icon: {
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        height: "100%",
        width: "80%",
        paddingTop: 5
    },
    labelContainer: {
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        width: "100%",
        aspectRatio: 3,
        position: 'absolute',
        bottom: 0,
    },
    label: {
        fontSize: 9,
    },
});
var search = react_native_1.StyleSheet.create({
    searchBarHeader: {
        backgroundColor: "transparent",
        height: rn_constants_1.default.INPUT_HEIGHT,
        flexDirection: "row",
        paddingHorizontal: 0,
    },
    search: {
        flex: 1,
        alignItems: "center",
        borderRadius: 8,
        flexDirection: 'row',
        height: rn_constants_1.default.INPUT_HEIGHT,
        borderWidth: 1,
        borderColor: rn_constants_1.default.BORDER_COLOR,
        backgroundColor: rn_constants_1.default.WHITE_COLOR,
        paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING
    },
    searchBoxShadow: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,
    },
    crossIcon: {
        opacity: 0.2,
    },
});
var progressBar = react_native_1.StyleSheet.create({
    progressBarContainer: {
        flex: 1,
        height: 10,
        backgroundColor: '#E7EAEE',
        borderRadius: 15,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#4caf50',
    },
    progressText: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -10 }, { translateY: -8 }],
        color: '#000',
    },
});
var input = react_native_1.StyleSheet.create({
    inputButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: rn_constants_1.default.BACKGROUND_COLOR,
        height: rn_constants_1.default.INPUT_HEIGHT,
        paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING,
        borderRadius: rn_constants_1.default.INPUT_BORDER_RADIUS,
        borderColor: rn_constants_1.default.BORDER_COLOR,
        borderWidth: 1,
        zIndex: 1,
    },
    inputButtonText: {
        flex: 1,
        color: rn_constants_1.default.TEXT_COLOR,
        textAlign: 'left',
        fontSize: rn_constants_1.default.BASE_FONT_SIZE
    },
    inputDropdown: {
        width: '100%',
    },
    inputItem: {
        paddingHorizontal: rn_constants_1.default.DEFAULT_PADDING,
        paddingVertical: rn_constants_1.default.DEFAULT_PADDING,
    },
    inputCircle: {
        height: rn_constants_1.default.PICKER_CIRCLE_HEIGHT,
        width: rn_constants_1.default.PICKER_CIRCLE_WIDTH,
        borderRadius: rn_constants_1.default.PICKER_BORDER_RADIUS
    }
});
var date = react_native_1.StyleSheet.create({
    dateButton: __assign({ flex: 1 }, input.inputButton),
    calendarBackGround: {
        backgroundColor: rn_constants_1.default.BACKGROUND_COLOR,
        elevation: 1,
        borderRadius: rn_constants_1.default.BASE_BORDER_RADIUS,
        margin: rn_constants_1.default.DEFAULT_MARGIN,
        marginTop: 0,
        borderWidth: 1,
        height: 380,
        borderColor: rn_constants_1.default.BORDER_COLOR,
        paddingBottom: rn_constants_1.default.DEFAULT_PADDING
    },
    dayYearStyles: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderTopLeftRadius: rn_constants_1.default.BASE_BORDER_RADIUS,
        borderTopRightRadius: rn_constants_1.default.BASE_BORDER_RADIUS,
        paddingVertical: rn_constants_1.default.DEFAULT_PADDING,
        marginBottom: rn_constants_1.default.DEFAULT_MARGIN
    },
    iconStyles: {
        fontSize: rn_constants_1.default.MEDIUM_FONT_SIZE,
        display: 'flex',
        color: rn_constants_1.default.WHITE_COLOR,
        marginHorizontal: rn_constants_1.default.DEFAULT_MARGIN
    },
    pinnedDatesIconStyles: {
        fontSize: rn_constants_1.default.MEDIUM_FONT_SIZE,
        marginHorizontal: rn_constants_1.default.DEFAULT_MARGIN / 2,
        color: rn_constants_1.default.WHITE_COLOR
    },
    dialogHeader: {
        borderTopLeftRadius: rn_constants_1.default.BASE_BORDER_RADIUS,
        borderTopRightRadius: rn_constants_1.default.BASE_BORDER_RADIUS,
        shadowColor: rn_constants_1.default.TRANSPARENT_COLOR,
        shadowOpacity: 0.15,
        shadowRadius: 2,
        elevation: 2,
        shadowOffset: { width: 0, height: 1 },
        borderBottomColor: rn_constants_1.default.BORDER_COLOR,
        backgroundColor: rn_constants_1.default.BACKGROUND_COLOR,
        borderBottomWidth: 1
    },
    dateRangeText: {
        marginLeft: rn_constants_1.default.DEFAULT_MARGIN,
        fontSize: rn_constants_1.default.SMALL_FONT_SIZE,
        color: rn_constants_1.default.TEXT_COLOR
    },
    dayButton: {
        backgroundColor: '#F5F5F6',
        padding: rn_constants_1.default.DEFAULT_PADDING,
        borderRadius: rn_constants_1.default.BASE_BORDER_RADIUS
    }
});
exports.rnStyles = react_native_1.StyleSheet.create(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({ fullView: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: rn_constants_1.default.WHITE_COLOR,
    }, thumbnail: {
        height: 60,
        width: 60,
        marginHorizontal: rn_constants_1.default.DEFAULT_MARGIN / 2,
        borderRadius: 50,
    }, boxShadow: {
        shadowColor: rn_constants_1.default.PRIMARY_COLOR,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
    } }, containerStyles), textStyles), formStyles), date), slider), search), progressBar), input), layout));
