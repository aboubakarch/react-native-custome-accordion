"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const assets_1 = require("../src/assets");
if (react_native_1.Platform.OS === "android" && react_native_1.UIManager.setLayoutAnimationEnabledExperimental) {
    react_native_1.UIManager.setLayoutAnimationEnabledExperimental(true);
}
function Accordion({ style = {}, headerStyle = {}, headerTitle, headerTitleStyle = {}, children, showButton = false, buttonStyle = {}, renderHeader, renderButtonContent, }) {
    const [showContent, setShowContent] = React.useState(false);
    const handleToggleContent = () => {
        react_native_1.LayoutAnimation.configureNext(react_native_1.LayoutAnimation.Presets.easeInEaseOut);
        setShowContent(!showContent);
    };
    const renderAccordionHeader = () => {
        if (renderHeader) {
            return renderHeader(showContent);
        }
        return <react_native_1.Text style={[styles.headerText, headerTitleStyle]}>{headerTitle}</react_native_1.Text>;
    };
    const renderBtnContent = () => {
        if (renderButtonContent) {
            return renderButtonContent();
        }
        return <react_native_1.Image style={styles.arrowBtnIcon} source={showContent ? assets_1.images.arrowUp : assets_1.images.arrowDown}/>;
    };
    return (<react_native_1.View style={[styles.accordion, style]}>
      <react_native_1.TouchableOpacity style={headerStyle} disabled={showButton} onPress={handleToggleContent}>
        {renderAccordionHeader()}
      </react_native_1.TouchableOpacity>
      {showContent && children}
      {showButton && (<react_native_1.TouchableOpacity style={[styles.arrowBtn, buttonStyle]} onPress={handleToggleContent}>
          {renderBtnContent()}
        </react_native_1.TouchableOpacity>)}
    </react_native_1.View>);
}
exports.default = Accordion;
const styles = react_native_1.StyleSheet.create({
    accordion: {
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        elevation: 1,
        marginHorizontal: 12,
        marginTop: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        shadowColor: "#2B3857",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    arrowBtn: {
        alignItems: "center",
    },
    arrowBtnIcon: {
        height: 10,
        width: 16.5,
    },
    headerText: {
        fontSize: 14,
        fontWeight: "400",
    },
});
