import { StyleSheet } from "react-native";
import rnConstants from "./rn-constants";

const layout = StyleSheet.create({
  background_transperent: {
    backgroundColor: 'transparent'
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
  col: {
    display: "flex",
    flexDirection: "column",
  },
  border: {
    borderWidth: 1,
    borderColor: rnConstants.BORDER_COLOR,
    borderRadius: rnConstants.BASE_BORDER_RADIUS,
  },
  textAlignCenter: {
    textAlign: "center",
  },
  textAlignLeft: {
    textAlign: "left",
  },
  textAlignRight: {
    textAlign: "right",
  },
  container: {
    borderRadius: rnConstants.INPUT_BORDER_RADIUS,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    lineHeight: 24,
  }
});

// form styles
export const formStyles = StyleSheet.create({


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
    // selectionColor: cssConstants.BORDER_COLOR,
    selectionColor: rnConstants.PRIMARY_COLOR,
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

  radioButtonWrapper: {
    width: 26,
    height: 26,
    borderColor: rnConstants.BORDER_COLOR,
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: rnConstants.DEFAULT_MARGIN,
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
  }

});

export const commonStyles = StyleSheet.create({
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
  ...layout,
});
