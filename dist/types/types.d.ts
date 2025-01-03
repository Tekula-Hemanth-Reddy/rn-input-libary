import { TextInputProps, TextProps, TextStyle, TouchableOpacityProps, ViewProps, ViewStyle } from "react-native";
export interface DefaultStyleProps {
    padding?: boolean | number;
    paddingHorizontal?: boolean | number;
    paddingVertical?: boolean | number;
    paddingLeft?: boolean | number;
    paddingRight?: boolean | number;
    paddingTop?: boolean | number;
    paddingBottom?: boolean | number;
    margin?: boolean | number;
    marginHorizontal?: boolean | number;
    marginVertical?: boolean | number;
    marginLeft?: boolean | number;
    marginRight?: boolean | number;
    marginTop?: boolean | number;
    marginBottom?: boolean | number;
}
export interface RnViewProps extends ViewProps, DefaultStyleProps {
    row?: boolean;
    justifyCenter?: boolean;
    justifyStart?: boolean;
    justifyBetween?: boolean;
    justifyEnd?: boolean;
    border?: boolean;
    col?: boolean;
    full?: boolean;
}
export interface RnTextProps extends TextProps, DefaultStyleProps {
    fontWeight?: TextStyle['fontWeight'];
    italic?: boolean;
    note?: boolean;
    light?: boolean;
    title?: boolean;
    banner?: boolean;
    textAlignCenter?: boolean;
    textAlignLeft?: boolean;
    textAlignRight?: boolean;
    full?: boolean;
}
export interface RnButtonProps extends TouchableOpacityProps, DefaultStyleProps {
    text?: string;
    textStyles?: TextStyle;
    large?: boolean;
    small?: boolean;
    transparent?: boolean;
    outline?: boolean;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    icon?: JSX.Element;
    primary?: boolean;
    secondary?: boolean;
    warning?: boolean;
    success?: boolean;
    danger?: boolean;
    neutral?: boolean;
    justifyStart?: boolean;
    justifyEnd?: boolean;
    justifyBetween?: boolean;
    maxLinesToView?: number;
    numberOfLines?: number;
    textStyle?: TextStyle;
    textFontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
    textProps?: RnTextProps;
    brightBorder?: boolean;
    isActionDone?: boolean;
    onPress?: () => void;
}
export interface RnIconProps extends ViewProps {
    type?: 'MaterialIcons' | "FontAwesome" | "FontAwesome5" | "FontAwesome6" | "Feather" | "Entypo" | "EvilIcons" | "Ionicons" | "AntDesign";
    name: string;
    color?: string;
    size?: number;
}
export interface RnInputProps extends TextInputProps {
    error?: string;
    preText?: string;
    icon?: any;
    multiline?: boolean;
    iconColor?: string;
    eyeIcon?: boolean;
    swapIcon?: boolean;
    disabled?: boolean;
    placeholderTextColor?: string;
}
type DefaultType<T = undefined> = T extends undefined ? {
    value: string | number;
    label?: string | number;
    color?: string;
    hide?: boolean;
    id?: string;
    extraData?: string;
    checked?: string;
} : {
    value: string | number;
    label?: string | number;
    color?: string;
    hide?: boolean;
    id?: string;
    extraData?: string;
    checked?: string;
    data: T;
};
export type RnPickerOption<T = undefined> = DefaultType<T>;
export interface RnPickerProps {
    label: string;
    showLabel: boolean;
    pickerStyles?: ViewStyle;
    pickerTextStyles?: TextStyle;
    selectedOption: string | number;
    data: RnPickerOption[];
    disable?: boolean;
    onSelect: (item: RnPickerOption & {
        index?: number;
    }) => void;
    required?: boolean;
    triggerValidation?: boolean;
    placeHolder?: string;
    customOptionRender?: (item: any, index: any) => JSX.Element;
    showModal?: boolean;
    hideSearch?: boolean;
    arrowColor?: string;
    showNoneOption?: boolean;
    changeSearchText?: Function;
}
export type RnMutliSelectOption = {
    name: string;
    id: string;
    selected?: boolean;
    disabled?: boolean;
    isLabel?: boolean;
    tagColor?: string;
};
export interface RnMultiSelectProps {
    label: string;
    disable?: boolean;
    options: RnMutliSelectOption[];
    close?: Function;
    inputBoxStyles?: ViewStyle;
    showSelectedTop?: boolean;
    required?: boolean;
    triggerValidation?: boolean;
    selectedValues?: string;
    customOptionRender?: (item: any, index: any) => JSX.Element;
    showModal?: boolean;
    onChange?: Function;
    onClick?: Function;
    changeSearchText?: Function;
}
export interface RnTimePickerProps {
    label: string;
    initialTime: string;
    onChange: Function;
    inputBoxStyles?: ViewStyle;
    required?: boolean;
    triggerValidation?: boolean;
    disable?: boolean;
    pickerIconColor?: string;
}
export interface RnCheckboxProps extends TouchableOpacityProps {
    label?: string;
    size?: number;
    checked?: boolean;
    disabled: boolean;
    circle: boolean;
    onChange: (checked: boolean) => void;
    styles?: TouchableOpacityProps['style'];
    required?: boolean;
    triggerValidation?: boolean;
    checkBoxCheckedColor?: string;
    checkBoxCheckedFilledColor?: string;
    checkBoxUnCheckedFilledColor?: string;
    checkBoxUnCheckedBorderColor?: string;
    checkBoxCheckedBorderColor?: string;
}
export type RnCheckBox = {
    label: string;
    value: string;
    isSelected: boolean;
};
export interface RnCheckboxGroupProps extends TouchableOpacityProps {
    value: string;
    label?: string;
    fields: RnCheckBox[];
    disable: boolean;
    required: boolean;
    onChange: Function;
}
export interface RnSearchComponentProps {
    searchObject?: any[];
    keyFilter?: string[];
    updateState?: Function;
    title?: string;
    searchText?: string;
    changeSearchText?: Function;
    cancelSearch?: Function;
    focus?: boolean;
    customSearchFilter?: Function;
    hideCancel?: boolean;
}
export interface RnDatePickerResult {
    startDateString: string;
    startDate: Date;
    endDateString: string;
    endDate: Date;
}
export interface RnDatePickerProps {
    type?: 'dialog' | 'sheet';
    alignItem?: 'center' | 'end';
    calendarStyles?: {
        [key: string]: any;
    };
    onChange: Function;
    selectedOrStartDate: string | Date;
    disable: boolean;
    calendarInputStyles?: {
        [key: string]: any;
    };
    primaryColor?: string;
    secondaryColor?: string;
    dateRange: boolean;
    disableBeforeDays: boolean;
    disableAfterDays: boolean;
    minDateToDisable?: string | Date;
    maxDateToDisable?: string | Date;
    endDate?: string | Date;
    pinnedDates: {
        [key: string]: {
            color?: string;
            events: {
                title: string;
                description: string;
            }[];
        };
    };
    monthPicker?: boolean;
    startDateChangeDetect?: boolean;
    showDateRangeLabel?: boolean;
    highlighted?: boolean;
    showModal?: boolean;
    dateRangeSeparator?: string;
    dateStyles?: {
        [key: string]: any;
    };
    calendarIconColor?: string;
    onClose?: Function;
    formatDate?: string;
}
export interface RnSliderProps {
    minBoundary?: number;
    maxBoundary: number;
    min_initVal?: number;
    max_initVal: number;
    rangeSlider: boolean;
    onValueChange?: (data: {
        minValue: number;
        maxValue: number;
    }) => void;
}
export interface RnChipProps {
    text: string;
    textStyle?: TextStyle;
    heading?: string;
    headingStyle?: TextStyle;
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    onDelete?: Function;
    radius?: number;
    keyProp?: number;
    type?: string;
    chipColor?: string;
}
export interface RnProgressBarProps {
    progress?: number;
}
export {};
