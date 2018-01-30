import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';


const JsLogMuiTheme = createMuiTheme({
    typography: {
        root: {
            fontStyle: 'italic',
        },
    },
    root: {
        body_text_margin: '100px',
    },
    palette: {
        primary: {
            light: '#6d6d6d',
            main: '#424242',
            dark: '#1b1b1b',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#cfcfcf',
            main: '#9e9e9e',
            dark: '#707070',
            contrastText: '#000000',
        },
        error: {
            main: red[500],
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        background: {
            paper: '#ffffff',
        },
    },
});

export default JsLogMuiTheme;
