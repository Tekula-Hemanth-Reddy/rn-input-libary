import { ContentStyle } from "@shopify/flash-list";
import { ImageStyle, ModalProps, TextInputProps, TextProps, TextStyle, TouchableOpacityProps, ViewProps, ViewStyle } from "react-native";
import { WORKFLOW_ISSUE_ACTIONS, CommunicationFeatureType, IApprovalWorkflowLevel, IAttachment, IRoster, IUser, LABLE_POSITION, PickerOption, WORK_FLOW_TYPE, MimeTypes } from "../../models";
import { captureType } from "../../models/enum-types";
import { IMaterialReceipts } from "../../app/layout/features/(equipment-management)/constants/models";
import { SkeletonPlaceholderProps } from "./components/skeleton-content/type";


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
    justifyBetween?: boolean,
    justifyEnd?: boolean,
    border?: boolean;
    col?: boolean;
    full?: boolean;
}
export interface RnTextProps extends TextProps, DefaultStyleProps {
    fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
    italic?: boolean,
    note?: boolean,
    light?: boolean,
    title?: boolean,
    banner?: boolean
    textAlignCenter?: boolean,
    textAlignLeft?: boolean,
    textAlignRight?: boolean
    full?: boolean
}

export interface RnButtonProps extends TouchableOpacityProps, DefaultStyleProps {
    text?: string;
    textStyles?: TextStyle;
    large?: boolean;
    small?: boolean;
    transparent?: boolean;
    outline?: boolean;
    iconLeft?: JSX.Element
    iconRight?: JSX.Element,
    icon?: JSX.Element;
    primary?: boolean;
    secondary?: boolean;
    warning?: boolean;
    success?: boolean;
    danger?: boolean;
    neutral?: boolean;
    justifyStart?: boolean;
    justifyEnd?: boolean,
    justifyBetween?: boolean,
    maxLinesToView?: number,
    numberOfLines?: number,
    textStyle?: TextProps.style,
    textProps?: RnTextProps,
    brightBorder?: boolean,
    isActionDone?: boolean, // this is to avoid multiple clicks
    onPress?: () => void, // onPress by default closes the alertModal. Override it if you want to change the functionality
}

export interface RnIconProps extends ViewProps {
    type?: 'MaterialIcons' | "FontAwesome" | "FontAwesome5" | "FontAwesome6" | "Feather" | "Entypo" | "EvilIcons" | "Ionicons" | "AntDesign";
    name: string
    color?: string;
    size?: number;
}
export interface RnInputProps extends TextInputProps {
    error?: string;
    preText?: string;
    icon?: any;
    multiline?: boolean
    iconColor?: string;
    eyeIcon?: boolean,
    swapIcon?: boolean,
    disabled?: boolean,
    placeholderTextColor?: string,
}

type DefaultType<T = undefined> = T extends undefined ?
    {
        value: string | number,
        label?: string | number,
        color?: string,
        hide?: boolean,
        id?: string
        extraData?: string,
        checked?: string,
    } : {
        value: string | number,
        label?: string | number,
        color?: string,
        hide?: boolean,
        id?: string
        extraData?: string,
        checked?: string,
        data: T
    };

export type RnPickerOption<T = undefined> = DefaultType<T>;

export interface RnPickerProps {
    label: string;
    showLabel: boolean;
    pickerStyles?: StyleProp<ViewStyle>;
    pickerTextStyles?: StyleProp<TextStyle>;
    selectedOption: string | number;
    data: PickerOption[];
    disable?: boolean,
    onSelect: (item: PickerOption & { index?: number }) => void;
    required?: boolean;
    triggerValidation?: boolean;
    placeHolder?: string;
    customOptionRender?: (item, index) => JSX.Element;
    showModal?: boolean;
    hideSearch?: boolean;
    arrowColor?: string;
    showNoneOption?: boolean;
    changeSearchText?: Function,
}

export type RnMutliSelectOption = {
    name: string,
    id: string,
    selected?: boolean,
    disabled?: boolean,
    isLabel?: boolean
    tagColor?: string
}

export interface RnMultiSelectProps {
    label: string;
    disable?: boolean,
    options: RnMutliSelectOption[];
    close?: Function;
    inputBoxStyles?: ViewStyle
    showSelectedTop?: boolean
    required?: boolean;
    triggerValidation?: boolean;
    selectedValues?: string,
    customOptionRender?: (item, index) => JSX.Element,
    showModal?: boolean,
    onChange?: Function,
    onClick?: Function,
    changeSearchText?: Function,
}

export interface RnTimePickerProps {
    label: string;
    initialTime: string,
    onChange: Function,
    inputBoxStyles?: ViewStyle,
    required?: boolean;
    triggerValidation?: boolean;
    disable?: boolean
    pickerIconColor?: string;
}

export interface InnCardCheckboxProps extends TouchableOpacityProps {
    renderCheckBox?: JSX.Element,
    onClick?: Function
    checkboxStyle?: 'circle' | 'square',
    isSelected?: boolean
}

export interface RnCheckboxProps extends TouchableOpacityProps {
    label?: string;
    size?: number,
    checked?: boolean,
    disabled: boolean,
    circle: boolean,
    onChange: (checked: boolean) => void,
    styles?: TouchableOpacityProps['style']
    required?: boolean;
    triggerValidation?: boolean;
    checkBoxCheckedColor?: string;
    checkBoxCheckedFilledColor?: string;
    checkBoxUnCheckedFilledColor?: string;
    checkBoxUnCheckedBorderColor?: string;
    checkBoxCheckedBorderColor?: string;
}

export interface RnCheckboxGroupProps extends TouchableOpacityProps {
    value: string,
    label?: string,
    fields: PickerOption[],
    disable: boolean,
    required: boolean,
    onChange: Function
}

export interface InnSearchComponentProps {
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

export interface InnDatePickerResult {
    startDateString: string,
    startDate: Date,
    endDateString: string,
    endDate: Date,
}
export interface RndatePickerProps {
    type?: 'dialog' | 'sheet' // default dialog
    alignItem?: 'center' | 'end' // default center
    calendarStyles?: {
        [key: string]: any
    }
    onChange: Function,
    selectedOrStartDate: string | Date,
    disable: boolean,
    calendarInputStyles?: {
        [key: string]: any
    }
    primaryColor?: string
    secondaryColor?: string,
    dateRange: boolean,
    disableBeforeDays: boolean;
    disableAfterDays: boolean;
    minDateToDisable?: string | Date;
    maxDateToDisable?: string | Date;
    endDate?: string | Date,
    pinnedDates: {
        [key: string]: { // key should be date string with format "YYYY-MM-DD"
            color?: string,
            events: {
                title: string,
                description: string
            }[]
        }
    },
    monthPicker?: boolean // to select only month and year
    startDateChangeDetect?: boolean // when start date is clicked (for range date picker) onChange Prop will be emited
    showDateRangeLabel?: boolean
    highlighted?: boolean,
    showModal?: boolean,
    dateRangeSeparator?: string;
    dateStyles?: {
        [key: string]: any
    }
    calendarIconColor?: string,
    onClose?: Function,
    formatDate?: string,
}

export interface RnSliderProps {
    minBoundary?: number;
    maxBoundary: number;
    min_initVal?: number;
    max_initVal: number;
    rangeSlider: boolean;
    onValueChange?: (data: { minValue: number, maxValue: number }) => void;
}

export interface RnChipProps {
    text: string;
    textStyle?: TextStyle;
    heading?: string,
    headingStyle?: TextStyle,
    iconLeft?: JSX.Element;
    iconRight?: JSX.Element;
    onDelete?: Function;
    radius?: number;
    keyProp?: number;
    type?: string;
    chipColor?: string;
}

export interface RnImageProps {
    onPress?: Function;
    type?: string;
    source: ImageSourcePropType | AVPlaybackSource,
    image?: boolean;
    style?: StyleProp<ImageStyle> | StyleProp<ViewStyle>,
    resizeMode?: ImageResizeMode | ResizeMode;
    resizeMethod?: boolean;
}

export interface RnSwiper {
    children: React.ReactNode
    height?: number
    snapScroll?: boolean,
    pagination?: boolean
}