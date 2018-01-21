import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {darkBlack, white} from 'material-ui/styles/colors';

const burnt_orange = "#bb4430";
const dark_brown = "#3b352b";

const JsLogMuiTheme = getMuiTheme({
    palette: {
        primary1Color: white,
        primary2color: white,
        primary3Color: white,
        accent1Color: darkBlack,
        textColor: darkBlack,
        alternateTextColor: dark_brown,
    },
});

export default JsLogMuiTheme;
