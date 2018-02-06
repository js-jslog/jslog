import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';

const size_primary_p16 = '206.258rem';
const size_primary_p15 = '1363.571rem';
const size_primary_p14 = '842.751rem';
const size_primary_p13 = '520.86rem';
const size_primary_p12 = '321.916rem';
const size_primary_p11 = '198.959rem';
const size_primary_p10 = '122.966rem';
const size_primary_p9 = '75.999rem';
const size_primary_p8 = '46.971rem';
const size_primary_p7 = '29.03rem';
const size_primary_p6 = '17.942rem';
const size_primary_p5 = '11.089rem';
const size_primary_p4 = '6.854rem';
const size_primary_p3 = '4.236rem';
const size_primary_p2 = '2.618rem';
const size_primary_p1 = '1.618rem';
const size_primary = '1rem';
const size_primary_m1 = '0.618rem';
const size_primary_m2 = '0.382rem';
const size_primary_m3 = '0.236rem';
const size_primary_m4 = '0.146rem';
const size_primary_m5 = '0.09rem';
const size_primary_m6 = '0.056rem';

const size_secondary_p1 = '1.942rem';
const size_secondary = '1.2rem';
const size_secondary_m1 = '0.742rem';
const size_secondary_m2 = '0.458rem';

// SIZES WHICH WILL NOT VARY WHEN ROOT FONT OF 18 IS MODIFIED
// NEEDED TO PREVENT GUTTERS FROM EXPANDING WITH TEXT SIZE
const size_primary_m1_static_px = '11.124px';
const size_primary_p2_static_px = '47.124px';

let Theme = createMuiTheme({
    typography: {
        margin_thin: size_primary_p1,
        margin_thick: size_primary_p3,
        line_height: size_primary_p1,
        code_font_family: '"Droid Sans Mono", monospace',
        code_vertical_padding: size_primary_m3,
        font_body1: {
            fontSize: size_primary,
        },
        font_title: {
            fontSize: size_primary_p1,
        },
        font_caption: {
            fontSize: size_secondary_m1,
        },
    },
    layout: {
        // page_column_width_xs: size_primary_p6, REPLACED WITH STATIC GUTTERS AT SMALL SCREEN SIZES
        page_column_gutter_xs: size_primary_m1_static_px,
        // page_column_width_sm: size_primary_p7, REPLACED WITH STATIC GUTTERS AT SMALL SCREEN SIZES
        page_column_gutter_sm: size_primary_p2_static_px,
        page_column_width_md: size_primary_p8,
        page_column_width_lg: size_primary_p8,
        page_column_width_xl: size_primary_p8,
        banner_image_height_xs: size_primary_p7,
        banner_image_height_sm: size_primary_p8,
        banner_image_height_md: size_primary_p8,
        banner_image_height_lg: size_primary_p8,
        banner_image_height_xl: size_primary_p9,
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
            light: red[100],
            background: red[50],
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        background: {
            paper: '#ffffff',
        },
    },
    overrides: {},
});
Theme.layout.responsive_page_column = {
    marginLeft: size_primary_m1,
    marginRight: size_primary_m1,
    [Theme.breakpoints.up('sm')]: {
        marginLeft: size_primary_p2,
        marginRight: size_primary_p2,
    },
    [Theme.breakpoints.up('md')]: {
        maxWidth: Theme.layout.page_column_width_md,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [Theme.breakpoints.up('lg')]: {
        maxWidth: Theme.layout.page_column_width_lg,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    [Theme.breakpoints.up('xl')]: {
        maxWidth: Theme.layout.page_column_width_xl,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
};
Theme.layout.vertical_spacing_even = {
    marginTop: Theme.typography.margin_thin,
    marginBottom: Theme.typography.margin_thin,
    lineHeight: Theme.typography.line_height,
};
Theme.layout.vertical_spacing_uneven = {
    marginTop: Theme.typography.margin_thick,
    marginBottom: Theme.typography.margin_thin,
};
Theme.overrides.MuiTypography = {
    body1: Object.assign(
        {},
        Theme.layout.vertical_spacing_even,
        Theme.layout.responsive_page_column,
        Theme.typography.font_body1,
    ),
    title: Object.assign(
        {},
        Theme.layout.vertical_spacing_uneven,
        Theme.layout.responsive_page_column,
        Theme.typography.font_title,
    ),
    display1: Object.assign(
        {},
        Theme.layout.vertical_spacing_uneven,
        Theme.layout.responsive_page_column
    ),
    caption: Object.assign(
        {},
        Theme.typography.font_caption
    ),
};

export default Theme;
