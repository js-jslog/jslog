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

let JsLogMuiTheme = createMuiTheme({
    typography: {
        margin_thin: size_root_p1,
        margin_thick: size_root_p3,
        line_height: size_root_p1,
    },
    layout: {
        page_gutter_xs: size_root_m1,
        page_gutter_sm: size_root_p2,
        page_gutter_md: size_root_p4,
        page_gutter_lg: size_root_p6,
        page_gutter_xl: size_root_p7,
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

JsLogMuiTheme.layout.banner_image = {
    height: JsLogMuiTheme.layout.banner_image_height_xs,
    [JsLogMuiTheme.breakpoints.up('sm')]: {
        height: JsLogMuiTheme.layout.banner_image_height_sm,
    },
    [JsLogMuiTheme.breakpoints.up('md')]: {
        height: JsLogMuiTheme.layout.banner_image_height_md,
    },
    [JsLogMuiTheme.breakpoints.up('lg')]: {
        height: JsLogMuiTheme.layout.banner_image_height_lg,
    },
    [JsLogMuiTheme.breakpoints.up('xl')]: {
        height: JsLogMuiTheme.layout.banner_image_height_xl,
    },
};
JsLogMuiTheme.layout.responsive_page_gutter = {
    marginLeft: JsLogMuiTheme.layout.page_gutter_xs,
    marginRight: JsLogMuiTheme.layout.page_gutter_xs,
    [JsLogMuiTheme.breakpoints.up('sm')]: {
        marginLeft: JsLogMuiTheme.layout.page_gutter_sm,
        marginRight: JsLogMuiTheme.layout.page_gutter_sm,
    },
    [JsLogMuiTheme.breakpoints.up('md')]: {
        marginLeft: JsLogMuiTheme.layout.page_gutter_md,
        marginRight: JsLogMuiTheme.layout.page_gutter_md,
    },
    [JsLogMuiTheme.breakpoints.up('lg')]: {
        marginLeft: JsLogMuiTheme.layout.page_gutter_lg,
        marginRight: JsLogMuiTheme.layout.page_gutter_lg,
    },
    [JsLogMuiTheme.breakpoints.up('xl')]: {
        marginLeft: JsLogMuiTheme.layout.page_gutter_xl,
        marginRight: JsLogMuiTheme.layout.page_gutter_xl,
    },
};
JsLogMuiTheme.layout.body_text = JsLogMuiTheme.layout.responsive_page_gutter;
JsLogMuiTheme.layout.figure = JsLogMuiTheme.layout.responsive_page_gutter;

JsLogMuiTheme.typography.body_text_spacing = {
    marginTop: JsLogMuiTheme.typography.margin_thin,
    marginBottom: JsLogMuiTheme.typography.margin_thin,
    lineHeight: JsLogMuiTheme.typography.line_height,
};
JsLogMuiTheme.typography.heading_text_spacing = {
    marginTop: JsLogMuiTheme.typography.margin_thick,
    marginBottom: JsLogMuiTheme.typography.margin_thin,
};
JsLogMuiTheme.overrides.MuiTypography = {
    body1: Object.assign({}, JsLogMuiTheme.typography.body_text_spacing, JsLogMuiTheme.layout.responsive_page_gutter),
    title: Object.assign({}, JsLogMuiTheme.typography.heading_text_spacing, JsLogMuiTheme.layout.responsive_page_gutter),
    display1: Object.assign({}, JsLogMuiTheme.typography.heading_text_spacing, JsLogMuiTheme.layout.responsive_page_gutter),
};

export default JsLogMuiTheme;
