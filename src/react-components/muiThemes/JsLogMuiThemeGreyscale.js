import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';

const size_root_p16 = '206.258rem';
const size_root_p15 = '1363.571rem';
const size_root_p14 = '842.751rem';
const size_root_p13 = '520.86rem';
const size_root_p12 = '321.916rem';
const size_root_p11 = '198.959rem';
const size_root_p10 = '122.966rem';
const size_root_p9 = '75.999rem';
const size_root_p8 = '46.971rem';
const size_root_p7 = '29.03rem';
const size_root_p6 = '17.942rem';
const size_root_p5 = '11.089rem';
const size_root_p4 = '6.854rem';
const size_root_p3 = '4.236rem';
const size_root_p2 = '2.618rem';
const size_root_p1 = '1.618rem';
const size_root = '1rem';
const size_root_m1 = '0.618rem';
const size_root_m2 = '0.382rem';
const size_root_m3 = '0.236rem';
const size_root_m4 = '0.146rem';
const size_root_m5 = '0.09rem';
const size_root_m6 = '0.056rem';

// SIZES WHICH WILL NOT VARY WHEN ROOT FONT OF 18 IS MODIFIED
// NEEDED TO PREVENT GUTTERS FROM EXPANDING WITH TEXT SIZE
const size_root_m1_static_px = '11.124px';
const size_root_p2_static_px = '47.124px';

let JsLogMuiTheme = createMuiTheme({
    typography: {
        margin_thin: size_root_p1,
        margin_thick: size_root_p3,
        line_height: size_root_p1,
    },
    layout: {
        // page_column_width_xs: size_root_p6, REPLACED WITH STATIC GUTTERS AT SMALL SCREEN SIZES
        page_column_gutter_xs: size_root_m1_static_px,
        // page_column_width_sm: size_root_p7, REPLACED WITH STATIC GUTTERS AT SMALL SCREEN SIZES
        page_column_gutter_sm: size_root_p2_static_px,
        page_column_width_md: size_root_p8,
        page_column_width_lg: size_root_p8,
        page_column_width_xl: size_root_p8,
        banner_image_height_xs: size_root_p7,
        banner_image_height_sm: size_root_p8,
        banner_image_height_md: size_root_p8,
        banner_image_height_lg: size_root_p9,
        banner_image_height_xl: size_root_p10,
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
    overrides: {},
});
JsLogMuiTheme.layout.responsive_page_column = {
    marginLeft: size_root_m1,
    marginRight: size_root_m1,
    [JsLogMuiTheme.breakpoints.up('sm')]: {
        marginLeft: size_root_p2,
        marginRight: size_root_p2,
    },
    [JsLogMuiTheme.breakpoints.up('md')]: {
        maxWidth: JsLogMuiTheme.layout.page_column_width_md,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [JsLogMuiTheme.breakpoints.up('lg')]: {
        maxWidth: JsLogMuiTheme.layout.page_column_width_lg,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [JsLogMuiTheme.breakpoints.up('xl')]: {
        maxWidth: JsLogMuiTheme.layout.page_column_width_xl,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
};
JsLogMuiTheme.layout.vertical_spacing_even = {
    marginTop: JsLogMuiTheme.typography.margin_thin,
    marginBottom: JsLogMuiTheme.typography.margin_thin,
    lineHeight: JsLogMuiTheme.typography.line_height,
};
JsLogMuiTheme.layout.vertical_spacing_uneven = {
    marginTop: JsLogMuiTheme.typography.margin_thick,
    marginBottom: JsLogMuiTheme.typography.margin_thin,
};
JsLogMuiTheme.overrides.MuiTypography = {
    body1: Object.assign(
        {},
        JsLogMuiTheme.layout.vertical_spacing_even,
        JsLogMuiTheme.layout.responsive_page_column
    ),
    title: Object.assign(
        {},
        JsLogMuiTheme.layout.vertical_spacing_uneven,
        JsLogMuiTheme.layout.responsive_page_column
    ),
    display1: Object.assign(
        {},
        JsLogMuiTheme.layout.vertical_spacing_uneven,
        JsLogMuiTheme.layout.responsive_page_column
    ),
};

export default JsLogMuiTheme;
