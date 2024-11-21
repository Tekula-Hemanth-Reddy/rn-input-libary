import { Platform, StyleSheet } from "react-native";
import rnConstants from "./rn-constants";

const layout = StyleSheet.create({
  background_transperent: {
    backgroundColor: 'transparent'
  },
  border: {
    borderWidth: 1,
    borderColor: rnConstants.BORDER_COLOR,
    borderRadius: rnConstants.BASE_BORDER_RADIUS,
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

const textStyles = StyleSheet.create({
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
  errorText: {
    height: 20,
    marginTop: 4,
    fontSize: rnConstants.SMALL_FONT_SIZE,
    color: rnConstants.DANGER_TEXT_COLOR,
    ...Platform.select({
      android: {
        paddingLeft: 4,
        paddingTop: 5
      },
    })
  },
  // used for button
  buttonText: {
    lineHeight: 24,
  },
})

const containerStyles = StyleSheet.create({
  // container
  container: {
    borderRadius: rnConstants.INPUT_BORDER_RADIUS,
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
    backgroundColor: rnConstants.BACKGROUND_COLOR,
    height: rnConstants.INPUT_HEIGHT,
    paddingHorizontal: rnConstants.DEFAULT_PADDING,
    borderRadius: rnConstants.INPUT_BORDER_RADIUS * 2,
    borderWidth: 1,
    fontSize: rnConstants.BASE_FONT_SIZE,
    color: rnConstants.TEXT_COLOR,
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
    borderColor: rnConstants.BORDER_COLOR,
    borderRadius: rnConstants.INPUT_BORDER_RADIUS,
    paddingHorizontal: rnConstants.DEFAULT_PADDING / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: rnConstants.INPUT_HEIGHT,
  },
})

// form styles
const formStyles = StyleSheet.create({

  // Input field label style
  fieldName: {
    marginBottom: rnConstants.DEFAULT_MARGIN / 2,
    color: rnConstants.TEXT_COLOR,
  },

  fieldInputContainer: {
    height: rnConstants.INPUT_HEIGHT,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },

  fieldInput: {
    paddingHorizontal: rnConstants.DEFAULT_PADDING,
    height: rnConstants.INPUT_HEIGHT,
    fontSize: rnConstants.BASE_FONT_SIZE,
    color: rnConstants.TEXT_COLOR,
    width: "100%",
    borderRadius: rnConstants.INPUT_BORDER_RADIUS,
    borderWidth: 1,
    borderColor: rnConstants.BORDER_COLOR,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: rnConstants.BACKGROUND_COLOR,
  },

  tableHeader: {
    backgroundColor: rnConstants.PRIMARY_COLOR,
    padding: rnConstants.DEFAULT_PADDING,
    minHeight: rnConstants.INPUT_HEIGHT,
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
    backgroundColor: rnConstants.WHITE_COLOR,
    elevation: 5,
    borderRadius: rnConstants.BASE_BORDER_RADIUS,
    margin: rnConstants.DEFAULT_MARGIN * 2,
    padding: rnConstants.DEFAULT_PADDING * 2,
  },
  disabledFieldControl: {
    backgroundColor: rnConstants.DISABLE_COLOR,
  },
  highlightedFieldControl: {
    borderColor: rnConstants.PRIMARY_COLOR,
    borderWidth: 1,
    shadowColor: rnConstants.PRIMARY_COLOR,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  radioButtonWrapper: {
    width: 26,
    height: 26,
    borderColor: rnConstants.BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: rnConstants.DEFAULT_MARGIN,
  },
  inputText: {
    color: rnConstants.LIGHT_TEXT_COLOR
  },
});

const slider = StyleSheet.create({
  mainContainer:
  {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
    aspectRatio: 4,
  },
  mainSliderContainer:
  {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
    flexDirection: "row",
  },

  sliderContainer:
  {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    flex: 8,
    overflow: 'visible',
  },
  lineContainer:
  {
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

  labelValue:
  {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    flex: 1,
  },
  labelValueText:
  {
    fontSize: rnConstants.BASE_FONT_SIZE,
  },
  line:
  {
    height: "100%",
    width: "100%",
    position: 'absolute',
  },
  draggable:
  {
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
  circle:
  {
    shadowColor: rnConstants.DISABLE_COLOR,
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
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#f1f1f1",
    overflow: "visible",
  },
  icon:
  {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: "100%",
    width: "80%",
    paddingTop: 5
  },
  labelContainer:
  {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    width: "100%",
    aspectRatio: 3,
    position: 'absolute',
    bottom: 0,
  },
  label:
  {
    fontSize: 9,
  },
});

const search = StyleSheet.create({
  searchBarHeader: {
    backgroundColor: "transparent",
    height: rnConstants.INPUT_HEIGHT,
    flexDirection: "row",
    paddingHorizontal: 0,
  },
  search: {
    flex: 1,
    alignItems: "center",
    borderRadius: 8,
    flexDirection: 'row',
    height: rnConstants.INPUT_HEIGHT,
    borderWidth: 1,
    borderColor: rnConstants.BORDER_COLOR,
    backgroundColor: rnConstants.WHITE_COLOR,
    paddingHorizontal: rnConstants.DEFAULT_PADDING
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

const progressBar = StyleSheet.create({
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

const input = StyleSheet.create({
  inputButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: rnConstants.BACKGROUND_COLOR,
    height: rnConstants.INPUT_HEIGHT,
    paddingHorizontal: rnConstants.DEFAULT_PADDING,
    borderRadius: rnConstants.INPUT_BORDER_RADIUS,
    borderColor: rnConstants.BORDER_COLOR,
    borderWidth: 1,
    zIndex: 1,
  },
  inputButtonText: {
    flex: 1,
    color: rnConstants.TEXT_COLOR,
    textAlign: 'left',
    fontSize: rnConstants.BASE_FONT_SIZE
  },
  inputDropdown: {
    width: '100%',
  },
  inputItem: {
    paddingHorizontal: rnConstants.DEFAULT_PADDING,
    paddingVertical: rnConstants.DEFAULT_PADDING,
  },
  inputCircle: {
    height: rnConstants.PICKER_CIRCLE_HEIGHT,
    width: rnConstants.PICKER_CIRCLE_WIDTH,
    borderRadius: rnConstants.PICKER_BORDER_RADIUS
  }
});

const date = StyleSheet.create({
  dateButton: {
    flex: 1,
    ...input.inputButton
  },
  calendarBackGround: {
    backgroundColor: rnConstants.BACKGROUND_COLOR,
    elevation: 1,
    borderRadius: rnConstants.BASE_BORDER_RADIUS,
    margin: rnConstants.DEFAULT_MARGIN,
    marginTop: 0,
    borderWidth: 1,
    height: 380,
    borderColor: rnConstants.BORDER_COLOR,
    paddingBottom: rnConstants.DEFAULT_PADDING
  },
  dayYearStyles: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopLeftRadius: rnConstants.BASE_BORDER_RADIUS,
    borderTopRightRadius: rnConstants.BASE_BORDER_RADIUS,
    paddingVertical: rnConstants.DEFAULT_PADDING,
    marginBottom: rnConstants.DEFAULT_MARGIN
  },
  iconStyles: {
    fontSize: rnConstants.MEDIUM_FONT_SIZE,
    display: 'flex',
    color: rnConstants.WHITE_COLOR,
    marginHorizontal: rnConstants.DEFAULT_MARGIN
  },
  pinnedDatesIconStyles: {
    fontSize: rnConstants.MEDIUM_FONT_SIZE,
    marginHorizontal: rnConstants.DEFAULT_MARGIN / 2,
    color: rnConstants.WHITE_COLOR
  },
  dialogHeader: {
    borderTopLeftRadius: rnConstants.BASE_BORDER_RADIUS,
    borderTopRightRadius: rnConstants.BASE_BORDER_RADIUS,
    shadowColor: rnConstants.TRANSPARENT_COLOR,
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: 0, height: 1 },
    borderBottomColor: rnConstants.BORDER_COLOR,
    backgroundColor: rnConstants.BACKGROUND_COLOR,
    borderBottomWidth: 1
  },
  dateRangeText: {
    marginLeft: rnConstants.DEFAULT_MARGIN,
    fontSize: rnConstants.SMALL_FONT_SIZE,
    color: rnConstants.TEXT_COLOR
  },
  dayButton: {
    backgroundColor: '#F5F5F6',
    padding: rnConstants.DEFAULT_PADDING,
    borderRadius: rnConstants.BASE_BORDER_RADIUS
  }
})

export const rnStyles = StyleSheet.create({
  fullView: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: rnConstants.WHITE_COLOR,
  },
  thumbnail: {
    height: 60,
    width: 60,
    marginHorizontal: rnConstants.DEFAULT_MARGIN / 2,
    borderRadius: 50,
  },
  boxShadow: {
    shadowColor: rnConstants.PRIMARY_COLOR,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  ...containerStyles,
  ...textStyles,
  ...formStyles,
  ...date,
  ...slider,
  ...search,
  ...progressBar,
  ...input,
  ...layout,
});
