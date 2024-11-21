import * as React from "react";
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";
import { RnInputProps } from '../../types';
interface State {
    isFocused: boolean;
    secureText: boolean;
    errorMessage: string;
}
declare class RnInput extends React.Component<RnInputProps, State> {
    textInputRef: any;
    readonly state: State;
    focus: () => void;
    handleFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    handleBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    render(): React.JSX.Element;
}
export default RnInput;
