import { Feather } from '@expo/vector-icons';
import * as React from "react";
import {
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  TextInput,
  TextInputFocusEventData
} from "react-native";
import rnConstants from "../../config/rn-constants";
import { formStyles } from '../../config/rn-styles';
import { RnIcon } from '../icon';
import { RnView } from '../view';
import { RnText } from '../text';
import { RnInputProps } from '../../types';

interface State {
  isFocused: boolean;
  secureText: boolean;
  errorMessage: string;
}

class RnInput extends React.Component<RnInputProps, State> {
  textInputRef: any = React.createRef<TextInput>();

  readonly state: State = {
    isFocused: false,
    secureText: this.props?.eyeIcon ? this.props.eyeIcon : false,
    errorMessage: ""
  };


  focus = () => {
    if (this.textInputRef?.current) {
      this.textInputRef?.current?.wrappedInstance?.focus();
    }
  };

  handleFocus = (
    e: NativeSyntheticEvent<TextInputFocusEventData>
  ) => {
    this.setState({ isFocused: true });
    // Remember to propagate the `onFocus` event to the
    // parent as well (if set)
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  handleBlur = (
    e: NativeSyntheticEvent<TextInputFocusEventData>
  ) => {
    this.setState({ isFocused: false });
    // Remember to propagate the `onBlur` event to the
    // parent as well (if set)
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  render() {
    // console.log("props=",this.props);
    // On Android we want to change the color of the input
    // underline when it is focused. To do so this component
    // must be aware of being focused, so we'll use the
    // TextInput `onFocus` and `onBlur` callbacks to set
    // a variable in the state that keeps track of when the
    // TextInput is focused.
    // We should also make sure to remove the `onFocus` and
    // `onBlur` props from the `...otherProps`, otherwise
    // they would override our own handlers.
    const {
      icon,
      error,
      onFocus,
      onBlur,
      style,

      ...otherProps
    } = this.props;

    const { isFocused } = this.state;

    const showPassword = () => {
      this.setState({ secureText: !this.state.secureText });
    }

    return (
      <>
        <RnView style={[styles.container, style, this.props.disabled ? formStyles.disabledFieldControl : {}, { borderColor: error ? rnConstants.DANGER_TEXT_COLOR : rnConstants.BORDER_COLOR }]}>
          {/* { flexDirection: 'row', alignItems: 'center', borderRadius: cssConstants.INPUT_BORDER_RADIUS, backgroundColor: cssConstants.BACKGROUND_COLOR, borderWidth: 1, borderColor: isFocused ? cssConstants.PRIMARY_COLOR : cssConstants.BORDER_COLOR, paddingHorizontal: cssConstants.DEFAULT_PADDING } */}
          {/* <InnView style={formStyles.fieldInput}> */}
          {
            this.props.icon ? <RnView style={{ marginHorizontal: rnConstants.DEFAULT_MARGIN / 2 }}><RnIcon name={icon} color={this.props.iconColor ? this.props.iconColor : rnConstants.TEXT_COLOR} /></RnView> : null
          }
          {
            this.props.preText ? <RnView style={{ marginHorizontal: rnConstants.DEFAULT_MARGIN / 2 }}><RnText>{this.props.preText}</RnText></RnView> : null
          }
          <TextInput ref={this.textInputRef}
            multiline={this.props.multiline || false}
            editable={!this.props.disabled}
            selectionColor={rnConstants.PRIMARY_COLOR}
            placeholderTextColor={this.props.placeholderTextColor || rnConstants.TEXT_COLOR}
            secureTextEntry={this.state.secureText}
            style={styles.textInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            // {...(this.props.defaultValue ? {value:Number.isNaN(this.props.defaultValue) ? this.props.defaultValue : (this.props.defaultValue + '')} : {})}
            {...otherProps}
            onChangeText={(text) => {
              if (typeof this.props.onChangeText == 'function') {
                this.props.onChangeText(text);
              }
            }}
          />
          {
            this.props.eyeIcon ? <RnView style={{ position: 'absolute', right: 10 }}><Feather active name={this.state.secureText ? "eye" : "eye-off"} onPress={showPassword} style={{ color: rnConstants.MEDIUM_NEUTRAL_COLOR }} size={20} /></RnView> : null
          }
          {
            this.props.swapIcon ? <RnView style={{ position: 'absolute', right: 10 }}><RnIcon name={"swap-vert"} color={rnConstants.MEDIUM_NEUTRAL_COLOR} /></RnView> : null
          }
          {/* </InnView> */}
        </RnView>
        {error ? <RnText fontWeight={500} style={styles.errorText}>{error || ""}</RnText> : <></>}
        {this.state.errorMessage ? <RnText fontWeight={500} style={styles.errorText}>{this.state.errorMessage || ""}</RnText> : <></>}
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  }
});

export default RnInput;
