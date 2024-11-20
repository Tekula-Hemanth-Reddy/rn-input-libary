# rn-input-libary
An Input Library with necessary props to make React Native code easy

### RnView

  RnView is a highly customizable wrapper around the standard View component in React Native, designed to make it easier to apply layout and styling properties, especially for common patterns like padding, margin, flexbox layout (row and col), and alignment (justifyCenter, justifyStart, etc.). It simplifies using these properties in your app by passing them as props, and it applies the necessary styles to the View component based on those props.

#### Example
```
<RnView
     row={true}
     justifyCenter={true}
     justifyStart={false}
     justifyEnd={false}
     justifyBetween={false}
     col={false}
     full
     border
     padding
     paddingHorizontal={20}
     paddingVertical={30}
     paddingTop={10}
     paddingBottom={10}
     paddingLeft={5}
     paddingRight={5}
     margin
     marginHorizontal={15}
     marginVertical={25}
     marginTop={10}
     marginBottom={10}
     marginLeft={10}
     marginRight={10}
   >
     <Text>Hello, World!</Text>
   </RnView>
```
   
#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| row | boolean | Defines a horizontal layout. If true, the children of the View will be displayed in a row (horizontal). | No | FALSE |
| col | boolean | Defines a vertical layout. If true, the children of the View will be displayed in a column (vertical). | No | FALSE |
| justifyCenter | boolean | Centers the children of the View along the main axis (horizontal for row, vertical for col). | No | FALSE |
| justifyStart | boolean | Aligns the children of the View to the start of the main axis (horizontal for row, vertical for col). | No | FALSE |
| justifyEnd | boolean | Aligns the children of the View to the end of the main axis (horizontal for row, vertical for col). | No | FALSE |
| justifyBetween | boolean | Distributes the children of the View evenly along the main axis with space between them. | No | FALSE |
| padding | boolean | number | Applies padding to all sides. If true, it applies the default padding value. If a number is passed, it applies that value as padding. | 10 |
| paddingHorizontal | boolean | number | Applies horizontal padding (left and right). If true, it applies the default padding. If a number is passed, it applies that value. | 10 |
| paddingVertical | boolean | number | Applies vertical padding (top and bottom). If true, it applies the default padding. If a number is passed, it applies that value. | 10 |
| paddingTop | boolean | number | Applies padding to the top side. If true, it applies the default padding. If a number is passed, it applies that value. | 10 |
| paddingBottom | boolean | number | Applies padding to the bottom side. If true, it applies the default padding. If a number is passed, it applies that value. | 10 |
| paddingLeft | boolean | number | Applies padding to the left side. If true, it applies the default padding. If a number is passed, it applies that value. | 10 |
| paddingRight | boolean | number | Applies padding to the right side. If true, it applies the default padding. If a number is passed, it applies that value. | 10 |
| margin | boolean | number | Applies margin to all sides. If true, it applies the default margin value. If a number is passed, it applies that value as margin. | 10 |
| marginHorizontal | boolean | number | Applies horizontal margin (left and right). If true, it applies the default margin. If a number is passed, it applies that value. | 10 |
| marginVertical | boolean | number | Applies vertical margin (top and bottom). If true, it applies the default margin. If a number is passed, it applies that value. | 10 |
| marginTop | boolean | number | Applies margin to the top side. If true, it applies the default margin. If a number is passed, it applies that value. | 10 |
| marginBottom | boolean | number | Applies margin to the bottom side. If true, it applies the default margin. If a number is passed, it applies that value. | 10 |
| marginLeft | boolean | number | Applies margin to the left side. If true, it applies the default margin. If a number is passed, it applies that value. | 10 |
| marginRight | boolean | number | Applies margin to the right side. If true, it applies the default margin. If a number is passed, it applies that value. | 10 |
| border | boolean | Adds a border around the View. If true, the border defined in commonStyles.border is applied. | No | FALSE |
| full | boolean | Makes the View occupy the full available space (100% width and height). If true, the View will stretch to fill its container. | No | FALSE |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RnText  

  RnText is a customizable text component built on top of the standard Text component in React Native. It provides several props to easily manage common text styling needs such as font weight, alignment, padding, margin, and special text styles like note, title, and banner. This component supports a wide range of customization options that allow you to apply padding, margin, font weight, and more to your text content.

#### Example
```
<RnText
     fontWeight\={500}
     italic
     note\={false}
     title
     textAlignCenter
     padding
     paddingHorizontal\={20}
     paddingVertical\={15}
     margin
     marginTop\={10}
     marginLeft\={15}
     style\={styles.customStyle}
   \>
     Hello, React Native!
   </RnText\>
```

#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| fontWeight | 100 | 200 | 300 | 400 |
| italic | boolean | Applies italic style to the text. | No | FALSE |
| note | boolean | If true, sets a smaller font size suitable for notes. | No | FALSE |
| light | boolean | If true, applies a light text color. | No | FALSE |
| title | boolean | If true, applies styles suitable for a title, like a larger font size and different color. | No | FALSE |
| banner | boolean | If true, applies special font styles for a banner, such as a different font family. | No | FALSE |
| textAlignCenter | boolean | If true, aligns the text to the center horizontally. | No | FALSE |
| textAlignLeft | boolean | If true, aligns the text to the left. | No | FALSE |
| textAlignRight | boolean | If true, aligns the text to the right. | No | FALSE |
| full | boolean | If true, allows the text to take up the full available space (100% width). | No | FALSE |
| padding | boolean | number | If true, applies padding to all sides. If a number is passed, it applies that value as padding. | 10 |
| paddingHorizontal | boolean | number | If true, applies horizontal padding (left and right). If a number is passed, it applies that value. | 10 |
| paddingVertical | boolean | number | If true, applies vertical padding (top and bottom). If a number is passed, it applies that value. | 10 |
| paddingTop | boolean | number | If true, applies padding to the top side. If a number is passed, it applies that value. | 10 |
| paddingBottom | boolean | number | If true, applies padding to the bottom side. If a number is passed, it applies that value. | 10 |
| paddingLeft | boolean | number | If true, applies padding to the left side. If a number is passed, it applies that value. | 10 |
| paddingRight | boolean | number | If true, applies padding to the right side. If a number is passed, it applies that value. | 10 |
| margin | boolean | number | If true, applies margin to all sides. If a number is passed, it applies that value as margin. | 10 |
| marginHorizontal | boolean | number | If true, applies horizontal margin (left and right). If a number is passed, it applies that value. | 10 |
| marginVertical | boolean | number | If true, applies vertical margin (top and bottom). If a number is passed, it applies that value. | 10 |
| marginTop | boolean | number | If true, applies margin to the top side. If a number is passed, it applies that value. | 10 |
| marginBottom | boolean | number | If true, applies margin to the bottom side. If a number is passed, it applies that value. | 10 |
| marginLeft | boolean | number | If true, applies margin to the left side. If a number is passed, it applies that value. | 10 |
| marginRight | boolean | number | If true, applies margin to the right side. If a number is passed, it applies that value. | 10 |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RnButton 

  RnButton is a customizable button component built on top of React Native’s TouchableOpacity. It provides a variety of styling and functional props to handle button size, appearance, icon placement, and user interaction. This component is designed to be flexible, allowing you to create buttons with custom themes, icons, padding, margins, and text styles.

#### Example
```
<RnButton
     text\="Submit"
     primary
     large
     iconLeft\={<Icon name\="check" />}
     padding
     marginVertical\={10}
     onPress\={() \=> console.log('Button Pressed')}
   />
```
  
#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| text | string | The text to display inside the button. | No | "" |
| textStyles | TextStyle | Custom styles to apply to the button's text. | No | {} (empty object) |
| large | boolean | If true, applies a large size to the button (larger padding, font size, height). | No | FALSE |
| small | boolean | If true, applies a small size to the button (smaller padding, font size, height). | No | FALSE |
| transparent | boolean | If true, makes the button transparent (no background color). | No | FALSE |
| outline | boolean | If true, makes the button an outline (border with no background color). | No | FALSE |
| iconLeft | JSX.Element | Custom icon component to display on the left side of the button. | No | null |
| iconRight | JSX.Element | Custom icon component to display on the right side of the button. | No | null |
| icon | JSX.Element | Custom icon to be displayed within the button. | No | null |
| primary | boolean | If true, applies the primary theme to the button (background, border, text color). | No | FALSE |
| secondary | boolean | If true, applies the secondary theme to the button. | No | FALSE |
| warning | boolean | If true, applies the warning theme to the button. | No | FALSE |
| success | boolean | If true, applies the success theme to the button. | No | FALSE |
| danger | boolean | If true, applies the danger theme to the button. | No | FALSE |
| neutral | boolean | If true, applies a neutral theme to the button. | No | FALSE |
| justifyStart | boolean | If true, aligns the button content to the left. | No | FALSE |
| justifyEnd | boolean | If true, aligns the button content to the right. | No | FALSE |
| justifyBetween | boolean | If true, applies space-between alignment to the button's content (spacing between elements inside). | No | FALSE |
| padding | boolean | number | If true, applies padding to all sides. If a number is passed, applies that value as padding to all sides. | No |
| paddingHorizontal | boolean | number | If true, applies padding to the left and right sides. If a number is passed, applies that value as horizontal padding. | No |
| paddingVertical | boolean | number | If true, applies padding to the top and bottom sides. If a number is passed, applies that value as vertical padding. | No |
| paddingTop | boolean | number | If true, applies padding to the top side. If a number is passed, applies that value to the top side. | No |
| paddingBottom | boolean | number | If true, applies padding to the bottom side. If a number is passed, applies that value to the bottom side. | No |
| margin | boolean | number | If true, applies margin to all sides. If a number is passed, applies that value as margin to all sides. | No |
| marginHorizontal | boolean | number | If true, applies margin to the left and right sides. If a number is passed, applies that value as horizontal margin. | No |
| marginVertical | boolean | number | If true, applies margin to the top and bottom sides. If a number is passed, applies that value as vertical margin. | No |
| marginTop | boolean | number | If true, applies margin to the top side. If a number is passed, applies that value to the top side. | No |
| marginBottom | boolean | number | If true, applies margin to the bottom side. If a number is passed, applies that value to the bottom side. | No |
| marginLeft | boolean | number | If true, applies margin to the left side. If a number is passed, applies that value to the left side. | No |
| marginRight | boolean | number | If true, applies margin to the right side. If a number is passed, applies that value to the right side. | No |
| onPress | () => void | A function that is called when the button is pressed. | No | null |
| isActionDone | boolean | If true, it disables the button after the action is completed to prevent multiple presses. | No | FALSE |
| disabled | boolean | If true, disables the button and prevents any interaction with it. | No | FALSE |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RnIcon

  RnIcon is a customizable icon component that allows you to easily use icons from various icon libraries like MaterialIcons, FontAwesome, FontAwesome5, FontAwesome6, Feather, Entypo, EvilIcons, Ionicons, and AntDesign. This component provides several props to manage icon properties such as type, size, and color.This component supports a wide range of customization options, allowing you to choose from multiple icon types and control the size and color of the icon.

#### Example
```
<RnIcon
     type\="FontAwesome"
     name\="home"
     size\={30}
     color\="blue"
     style\={{ margin: 10 }}
   />
```
   
#### Properties:

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| type | MaterialIcons' | "FontAwesome" | "FontAwesome5" | "FontAwesome6" | "Feather" | "Entypo" | "EvilIcons" | "Ionicons" | "AntDesign' | The icon library to use. Available options are MaterialIcons, FontAwesome, FontAwesome5, FontAwesome6, Feather, Entypo, EvilIcons, Ionicons, AntDesign. | No | MaterialIcons' |
| name | string | The name of the icon to display. | Yes | ' |
| color | string | The color of the icon. | No | rnConstants.TEXT_COLOR |
| size | number | The size of the icon. | No | rnConstants.ICON_SIZE |
| style | ViewStyle | Custom styles to apply to the icon container. | No | {} (empty object) |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RnSearchComponent

  RnSearchComponent is a customizable search bar component designed to handle text input and search functionality. It allows users to filter data based on their input and provides options such as displaying a cancel button, customizing search filters, and managing search state. This component supports several customization options to fit different use cases.

#### Example
```
<RnnSearchComponent
     searchObject\={\[{ name: 'Apple' }, { name: 'Banana' }\]}
     keyFilter\={\['name'\]}
     updateState\={(filteredData) \=> console.log(filteredData)}
     title\="Search fruits"
     focus\={true}
     cancelSearch\={() \=> console.log('Search canceled')}
   />
```

#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| searchObject | any[] | The data to be filtered based on the search text. | No | [] |
| keyFilter | string[] | An array of keys used for filtering the searchObject. | No | [] |
| updateState | Function | A function to update the filtered state after search. | No | undefined |
| title | string | Placeholder text for the search input field. | No | Search' |
| searchText | string | The current search text. | No | ' |
| changeSearchText | Function | A function called whenever the search text changes. | No | undefined |
| cancelSearch | Function | A function called when the search is canceled. | No | undefined |
| focus | boolean | If true, automatically focuses the search input field. | No | FALSE |
| customSearchFilter | Function | A custom filter function that can be used to filter the data based on custom logic. | No | undefined |
| hideCancel | boolean | If true, hides the cancel button in the search bar. | No | FALSE |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RnInput

  RnInput is a customizable input field component built on top of React Native's TextInput. It supports various features like secure text entry (for passwords), customizable icons, error handling, and additional pre-text support. It also includes options for customizing icon colors, managing focus states, and toggling between different icon types, such as an eye icon for password visibility or a swap icon for special functionality.

#### Example
```
<RnInput
     placeholder\="Enter your text"
     error\="This field is required"
     eyeIcon\={true}
     iconColor\="gray"
     preText\="Pre-text"
     disabled\={false}
     multiline\={false}
     onChangeText\={(text) \=> console.log(text)}
   />
```

#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| error | string | The error message to display below the input field. | No | undefined |
| preText | string | Text to display before the main input text. | No | undefined |
| icon | any | The name of the icon to display inside the input field. | No | undefined |
| multiline | boolean | If true, allows the input to be multiline. | No | FALSE |
| iconColor | string | The color of the icon inside the input field. | No | #000 (default text color) |
| eyeIcon | boolean | If true, allows toggling between secure text (password) with an eye icon. | No | FALSE |
| swapIcon | boolean | If true, adds a swap icon inside the input field. | No | FALSE |
| disabled | boolean | If true, disables the input field. | No | FALSE |
| placeholderTextColor | string | The color of the placeholder text when the input is empty. | No | #999 (default text color) |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RnPicker

  RnPicker is a customizable dropdown component that allows users to select from a list of options. It supports a variety of features, such as search filtering, displaying custom render options, validation checks, and a placeholder option. The picker also offers the ability to display a "None" option, toggle visibility via modal, and customize the styling of the dropdown and its text.

#### Example
```
<RnPicker
     label\="Select Option"
     showLabel\={true}
     selectedOption\={1}
     data\={data}
     onSelect\={(item) \=> console.log(item)}
     placeHolder\="Please select"
     required\={true}
   />
```

#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| label | string | The label displayed above the picker. | Yes | undefined |
| showLabel | boolean | Controls whether the label should be shown above the picker. | Yes | TRUE |
| pickerStyles | StyleProp<ViewStyle> | Custom styles for the picker container. | No | undefined |
| pickerTextStyles | StyleProp<TextStyle> | Custom styles for the picker text inside the dropdown. | No | undefined |
| selectedOption | string | number | The value of the selected option in the picker. | Yes |
| data | RnPickerOption[] | Array of options to be displayed in the picker. | Yes | [] |
| disabled | boolean | If true, disables the picker. | No | FALSE |
| onSelect | (item: RnPickerOption & { index?: number }) => void | Callback function invoked when an option is selected. | Yes | undefined |
| required | boolean | If true, marks the picker as required for validation purposes. | No | FALSE |
| triggerValidation | boolean | If true, triggers validation for the selected option (used with required). | No | FALSE |
| placeholder | string | The placeholder text to display when no option is selected. | No | undefined |
| customOptionRender | (item, index) => JSX.Element | Custom render function for each option in the list. | No | undefined |
| showModal | boolean | If true, shows the options in a modal dialog. | No | TRUE |
| hideSearch | boolean | If true, disables the search bar inside the dropdown modal. | No | FALSE |
| arrowColor | string | The color of the dropdown arrow icon. | No |  |
| showNoneOption | boolean | If true, adds a "None" option at the beginning of the picker list. | No | FALSE |
| changeSearchText | Function | Callback to handle the change in search text when filtering options. | No | undefined |


##### Picker Options

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| value | string | number | The value of the option. | Yes |
| label | string | number | The label of the option. | No |
| color | string | The color of the option, typically used for highlighting. | No | undefined |
| hide | boolean | If true, hides the option from the dropdown list. | No | FALSE |
| id | string | Unique identifier for the option. | No | undefined |
| extraData | string | Additional data associated with the option. | No | undefined |
| checked | string | Marks the option as checked if necessary. | No | undefined |
| dataT (Generic) | T | Additional data for the option, where T is a generic type. | No | undefined |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
### RnMultiSelect

  RnMultiSelect is a customizable multi-select dropdown component for React Native. It allows users to select multiple options from a list, with support for search functionality, custom option rendering, and modal management. It also provides features like displaying selected options at the top, validating required selections, and customizing the appearance of the dropdown.

#### Example
```
<RnMultiSelect
       label\="Select Options"
       options\={options}
       showSelectedTop\={true}
       onChange\={(selectedOptions) \=> console.log(selectedOptions)}
       selectedValues\="Option 1, Option 3"
     />
```
     
#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| label | string | The label to display for the multi-select dropdown. | Yes | N/A |
| options | RnMutliSelectOption[] | List of options to display in the dropdown. Each option should be an object containing name and id properties. | Yes | N/A |
| disabled | boolean | Disables the dropdown if set to true. | No | FALSE |
| showSelectedTop | boolean | If true, displays selected items at the top of the options list. | No | TRUE |
| required | boolean | If true, indicates that the selection is required (can trigger validation). | No | FALSE |
| triggerValidation | boolean | If true, triggers validation when the dropdown is used. | No | FALSE |
| selectedValues | string | A comma-separated string of selected option names to display initially in the input box. | No | "" (empty string) |
| closeFunction | Function | A callback function to close the multi-select modal when invoked. | No | undefined |
| inputBoxStyles | ViewStyle | Custom styles for the input box that opens the modal. | No | undefined |
| customOptionRender | (item, index) => JSX.Element | A function to render each option with custom JSX (allows customizing the option display). | No | undefined |
| onChangeFunction | Function | A callback function triggered when the selection changes. It receives the selected items as input. | No | undefined |
| onClickFunction | Function | A callback function triggered when the dropdown button is clicked. | No | undefined |
| changeSearchText | Function | A callback function triggered when the search text is changed. | No | undefined |

##### RnMultiSelectOption

RnMutliSelectOption = {    
name: string,
   id: string,
   selected?: boolean,
   disabled?: boolean,
   isLabel?: boolean
   tagColor?: string
}

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RnCheckbox

  RnCheckbox is a customizable checkbox component for React Native, allowing users to select or deselect options. It supports various customization features such as size, color, border styling, and display of validation messages. It is fully accessible for form usage with built-in support for required validation.

#### Example
```
     <RnCheckbox
       label\="Agree to terms"
       checked\={checked}
       onChange\={handleCheckboxChange}
       required\={true}
       disabled\={false}
       size\={24}
       checkBoxCheckedColor\="green"
       checkBoxUnCheckedBorderColor\="gray"
     />
```

#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| label | string | The label to display next to the checkbox. | No | N/A |
| size | number | The size of the checkbox. | No | 20 |
| checked | boolean | Indicates whether the checkbox is checked or not. | No | FALSE |
| disabled | boolean | Disables the checkbox if set to true. | Yes | N/A |
| circle | boolean | If true, the checkbox will be circular, else it will have a square shape. | Yes | FALSE |
| onChange | (checked: boolean) => void | Callback function triggered when the checkbox is toggled. | Yes | N/A |
| styles | TouchableOpacityProps['style'] | Custom styles for the checkbox container. | No | undefined |
| required | boolean | If true, indicates that the checkbox is required (used for validation purposes). | No | FALSE |
| triggerValidation | boolean | If true, triggers validation when the checkbox is required but not checked. | No | FALSE |
| checkBoxCheckedColor | string | The color of the checkmark when the checkbox is checked. | No | rnConstants.SECONDARY_COLOR |
| checkBoxCheckedFilledColor | string | The background color of the checkbox when checked. | No | rnConstants.TRANSPARENT_COLOR |
| checkBoxUnCheckedFilledColor | string | The background color of the checkbox when unchecked. | No | rnConstants.TRANSPARENT_COLOR |
| checkBoxUnCheckedBorderColor | string | The border color of the checkbox when unchecked. | No | rnConstants.SECONDARY_COLOR |
| checkBoxCheckedBorderColor | string | The border color of the checkbox when checked. | No | rnConstants.PRIMARY_COLOR |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RnCheckboxGroup

  RnCheckboxGroup is a customizable group of checkboxes for React Native that allows users to select one option from a list. It supports features such as custom labels, required validation, and dynamic state updates. The group can be customized with different fields and values, offering flexibility in form design.

#### Example
```
<RnCheckboxGroup
       value\={selectedValue}
       label\="Choose your option"
       fields\={\[
         { label: "Option 1", value: "option1" },
         { label: "Option 2", value: "option2" },
         { label: "Option 3", value: "option3" }
       \]}
       required\={true}
       disable\={false}
       onChange\={handleCheckboxGroupChange}
     />
```

#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| value | string | The currently selected value from the checkbox options. | Yes | N/A |
| label | string | The label to display above the group of checkboxes. | No | N/A |
| fields | RnPickerOption[] | An array of options for the checkbox group. Each option should contain a label and value. | Yes | N/A |
| disabled | boolean | Disables the entire checkbox group if true. | Yes | FALSE |
| required | boolean | If true, marks the checkbox group as required for validation purposes. | Yes | FALSE |
| onChange | (value: string) => void | Callback function that is triggered when the selected value changes. | Yes | N/A |

#### CheckBox Type:

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| label | string | The label text to display next to the checkbox. | Yes | N/A |
| value | string | The unique value for the checkbox. | Yes | N/A |
| isSelected | boolean | Whether the checkbox is currently selected or not. | Yes | N/A |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
### RnChip

  RnChip is a customizable component for displaying small, interactive elements such as tags or labels. It allows for icons on either side, customizable text, heading, and the ability to delete the chip. The chip can be styled with a custom color and border radius.

#### Example
```
 <RnChip
       text\="Sample Chip"
       heading\="Chip Heading"
       onDelete\={handleDelete}
       iconLeft\={<MaterialIcons name\="remove-circle" size\={20} />}
       iconRight\={<MaterialIcons name\="close" size\={20} />}
       chipColor\="#E0E0E0"
       radius\={12}
     />
```

#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| text | string | The main text displayed inside the chip. | Yes | N/A |
| textStyle | TextStyle | Custom styles for the text inside the chip. | No | N/A |
| heading | string | Optional heading to display above the chip text. | No | N/A |
| headingStyle | TextStyle | Custom styles for the heading text. | No | N/A |
| iconLeft | JSX.Element | Optional icon to display on the left side of the chip. | No | N/A |
| iconRight | JSX.Element | Optional icon to display on the right side of the chip. | No | N/A |
| onDelete | Function | Optional callback function when the delete icon is pressed. | No | N/A |
| radius | number | The border radius of the chip, allowing for rounded corners. | No | rnConstants.CHIP_RADIUS |
| keyProp | number | A unique key for the chip component. | No | N/A |
| type | string | An optional type to categorize the chip (e.g., "info", "warning"). | No | N/A |
| chipColor | string | Custom background color for the chip. | No | rnConstants.LIGHT_PRIMARY_COLOR |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RnProgressBar

  RnProgressBar is a simple component that displays a horizontal progress bar. It allows you to visually track the completion of a task by filling the progress bar based on the provided progress value.

#### Example
```
<RnProgressBar progress\={0.5} />
```

#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| progress | number | The progress value, where 0 is 0% completion and 1 is 100%. | No | 0 |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RnSlider

  RnSlider is a component that allows users to interact with a range of values. It supports both single and range sliders with adjustable boundaries and initial values.

#### Example
```
     <RnSlider
       minBoundary\={0} maxBoundary\={99}
       min\_initVal\={12} max\_initVal\={88}
       rangeSlider\={true}
       onValueChange\={(data: { minValue: number, maxValue: number }) \=> {
         console.log("Selected Range:", data)
       }}
     />
```

#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| minBoundary | number | The minimum boundary of the slider. | No | 0 |
| maxBoundary | number | The maximum boundary of the slider. | Yes | N/A |
| min_initVal | number | The initial value for the minimum slider. | No | 0 |
| max_initVal | number | The initial value for the maximum slider. | Yes | N/A |
| rangeSlider | boolean | If true, the slider allows selecting a range (min and max values). | Yes | N/A |
| onValueChange | (data: { minValue: number, maxValue: number }) => void | Callback function that returns the selected range of values. | No | N/A |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RnDatePicker

  RnDatePicker is a customizable date picker component that allows users to select single dates or ranges, with various customization options including color schemes, date disabling, pinned dates, and more. It supports both dialog and sheet types, making it flexible for different use cases.

#### Example
```
<RnDatePicker
       selectedOrStartDate\={selectedDate}
       onChange\={handleDateChange}
       disable\={false}
       dateRange\={false}
       pinnedDates\={{
         "2024-11-25": {
           color: "red",
           events: \[{ title: "Event 1", description: "Description of event 1" }\]
         }
       }}
       primaryColor\="#FF6347"
       secondaryColor\="#FFFFFF"
     />
```

#### properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| type | `'dialog' | sheet'` | The type of date picker, either a dialog or a sheet. | No |
| alignItem | `'center' | end'` | Controls the alignment of the date picker. Can be 'center' or 'end'. | No |
| calendarStyles | { [key: string]: any } | Custom styles for the calendar. | No | {} |
| onChange | Function | Callback function to handle date changes. Receives the selected date as a parameter. | Yes | N/A |
| selectedOrStartDate | string | Date | The selected date or the start date for date range selection. | Yes |
| disabled | boolean | If true, disables the date picker. | Yes | FALSE |
| calendarInputStyles | { [key: string]: any } | Custom styles for the input field of the calendar. | No | {} |
| primaryColor | string | The primary color for the calendar. | No | undefined |
| secondaryColor | string | The secondary color for the calendar. | No | undefined |
| dateRange | boolean | If true, the date picker will allow selecting a range of dates. | Yes | FALSE |
| disableBeforeDays | boolean | If true, disables dates before the selected date. | Yes | FALSE |
| disableAfterDays | boolean | If true, disables dates after the selected date. | Yes | FALSE |
| minDateToDisable | string | Date | The minimum date to disable. Can be a string (e.g., "YYYY-MM-DD") or a Date object. | No |
| maxDateToDisable | string | Date | The maximum date to disable. Can be a string (e.g., "YYYY-MM-DD") or a Date object. | No |
| endDate | string | Date | The end date for date range selection. | No |
| pinnedDates | { [key: string]: { color?: string, events: { title: string, description: string }[] } } | A list of pinned dates with optional events and colors. The key should be in the format "YYYY-MM-DD". | Yes | {} |
| monthPicker | boolean | If true, the picker will only allow month and year selection. | No | FALSE |
| startDateChangeDetect | boolean | If true, triggers the onChange function when the start date is selected (for range date picker). | No | FALSE |
| showDateRangeLabel | boolean | If true, shows a label indicating the selected date range. | No | FALSE |
| highlighted | boolean | If true, highlights the selected date. | No | FALSE |
| showModal | boolean | If true, displays the modal for date selection. | No | TRUE |
| dateRangeSeparator | string | The separator for the start and end dates in date range mode. | No | - ' |
| dateStyles | { [key: string]: any } | Custom styles for specific dates (e.g., pinned dates). | No | {} |
| calendarIconColor | string | The color for the calendar icon. | No | undefined |
| onClose | Function | Callback function that is called when the date picker modal is closed. | No | undefined |
| formatDate | string | The format in which the date will be displayed. | No | undefined |

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### RnTimePicker

  RnTimePicker is a customizable time picker component that allows users to select a specific time. It includes options for styling the input box, validation triggers, and the picker icon color.

#### Example
```
<RnTimePicker
       label\="Select Time"
       initialTime\={selectedTime}
       onChange\={handleTimeChange}
       required\={true}
       pickerIconColor\="#FF6347"
     />
```

#### Properties

| Prop | Type | Description | Mandatory | Default Value |
| --- | --- | --- | --- | --- |
| label | string | The label displayed next to the time picker input field. | Yes | N/A |
| initialTime | string | The initial time value displayed in the input field (in 12-hour format, e.g., "12:00 PM"). | Yes | N/A |
| onChange | Function | A callback function that is triggered when the selected time changes. Receives the updated time as a string. | Yes | N/A |
| inputBoxStyles | ViewStyle | Custom styles for the input box where the time is displayed. | No | {} |
| required | boolean | If true, marks the time picker as a required field, typically used in form validation. | No | FALSE |
| triggerValidation | boolean | If true, triggers validation when the time is selected. | No | FALSE |
| disable | boolean | If true, disables the time picker, making it non-interactive. | No | FALSE |
| pickerIconColor | string | The color of the icon displayed next to the time picker input. | No | undefined |
