import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';

const burnt_orange_light = "#f9683a";
const burnt_orange_main = "#bf360c";
const burnt_orange_dark = "#870000";
const burnt_orange_contrast = "#fbe9e7";
const dark_brown_light = "#6a4f4b"
const dark_brown_main = "#3e2723"
const dark_brown_dark = "#1b0000"
const dark_brown_contrast = "#bcaaa4";

const JsLogMuiTheme = createMuiTheme({
    root: {
        body: {
            margin: 0,
        },
    },
    typography: {
        fontFamily: '"Roboto", sans-serif',
    },
    palette: {
        primary: {
            light: burnt_orange_light,
            main: burnt_orange_main,
            dark: burnt_orange_dark,
            contrastText: burnt_orange_contrast,
        },
        secondary: {
            light: dark_brown_light,
            main: dark_brown_main,
            dark: dark_brown_dark,
            contrastText: dark_brown_contrast,
        },
        error: {
            main: red[500],
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});

export default JsLogMuiTheme;
