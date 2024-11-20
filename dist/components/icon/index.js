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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RnIcon = RnIcon;
var vector_icons_1 = require("@expo/vector-icons");
var react_1 = __importStar(require("react"));
var rn_constants_1 = __importDefault(require("../../config/rn-constants"));
var view_1 = require("../view");
var rn_styles_1 = require("../../config/rn-styles");
// search icons: "https://icons.expo.fyi/"
function RnIcon(_a) {
    var type = _a.type, name = _a.name, color = _a.color, size = _a.size, iconProps = __rest(_a, ["type", "name", "color", "size"]);
    var IconSize = size || rn_constants_1.default.ICON_SIZE;
    var _b = (0, react_1.useState)(color || rn_constants_1.default.TEXT_COLOR), iconColor = _b[0], setIconColor = _b[1];
    (0, react_1.useEffect)(function () {
        setIconColor(color || rn_constants_1.default.TEXT_COLOR);
    }, [color]);
    var getIcon = function () {
        switch (type) {
            case 'FontAwesome':
                return <vector_icons_1.FontAwesome name={name} size={IconSize} color={iconColor}/>;
            case 'FontAwesome5':
                return <vector_icons_1.FontAwesome5 name={name} size={IconSize} color={iconColor}/>;
            case 'FontAwesome6':
                return <vector_icons_1.FontAwesome6 name={name} size={IconSize} color={iconColor}/>;
            case 'Feather':
                return <vector_icons_1.Feather name={name} size={IconSize} color={iconColor}/>;
            case 'Entypo':
                return <vector_icons_1.Entypo name={name} size={IconSize} color={iconColor}/>;
            case 'EvilIcons':
                return <vector_icons_1.EvilIcons name={name} size={IconSize} color={iconColor}/>;
            case 'Ionicons':
                return <vector_icons_1.Ionicons name={name} size={IconSize} color={iconColor}/>;
            case 'AntDesign':
                return <vector_icons_1.AntDesign name={name} size={IconSize} color={iconColor}/>;
            case 'MaterialIcons':
            default:
                return <vector_icons_1.MaterialIcons name={name} size={IconSize} color={iconColor}/>;
        }
    };
    return (<view_1.RnView {...iconProps} style={[rn_styles_1.rnStyles.iconContainer, iconProps.style]}>
            {getIcon()}
        </view_1.RnView>);
}
