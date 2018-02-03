import {createMuiTheme} from 'material-ui/styles';
import red from 'material-ui/colors/red';

// I NEED TO PICK SIZES WHICH HAVE SOME RHYTHEM BETWEEN THEM
let JsLogMuiTheme = createMuiTheme({
    typography: {
        paragraph_verticle_spacing_xs: 20,
        paragraph_verticle_spacing_sm: 30,
        paragraph_verticle_spacing_md: 40,
        paragraph_verticle_spacing_lg: 50,
        paragraph_verticle_spacing_xl: 60,
    },
    layout: {
        page_gutter_xs: '5px',
        page_gutter_sm: '50px',
        page_gutter_md: '100px',
        page_gutter_lg: '300px',
        page_gutter_xl: '450px',
        figure_gutter_xs: '0px',
        figure_gutter_sm: '0px',
        figure_gutter_md: '100px',
        figure_gutter_lg: '300px',
        figure_gutter_xl: '450px',
        banner_image_height_xs: '400px',
        banner_image_height_sm: '500px',
        banner_image_height_md: '600px',
        banner_image_height_lg: '800px',
        banner_image_height_xl: '900px',
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

JsLogMuiTheme.layout = {
    banner_image: {
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
    },
    body_text: {
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
    },
    figure: {
        marginLeft: JsLogMuiTheme.layout.figure_gutter_xs,
        marginRight: JsLogMuiTheme.layout.figure_gutter_xs,
        [JsLogMuiTheme.breakpoints.up('sm')]: {
            marginLeft: JsLogMuiTheme.layout.figure_gutter_sm,
            marginRight: JsLogMuiTheme.layout.figure_gutter_sm,
        },
        [JsLogMuiTheme.breakpoints.up('md')]: {
            marginLeft: JsLogMuiTheme.layout.figure_gutter_md,
            marginRight: JsLogMuiTheme.layout.figure_gutter_md,
        },
        [JsLogMuiTheme.breakpoints.up('lg')]: {
            marginLeft: JsLogMuiTheme.layout.figure_gutter_lg,
            marginRight: JsLogMuiTheme.layout.figure_gutter_lg,
        },
        [JsLogMuiTheme.breakpoints.up('xl')]: {
            marginLeft: JsLogMuiTheme.layout.figure_gutter_xl,
            marginRight: JsLogMuiTheme.layout.figure_gutter_xl,
        },
    },
};

JsLogMuiTheme.overrides.MuiTypography = {
    body1: {
        marginTop: JsLogMuiTheme.typography.paragraph_verticle_spacing_xs + 'px',
        marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_xs + 'px',
        [JsLogMuiTheme.breakpoints.up('sm')]: {
            marginTop: JsLogMuiTheme.typography.paragraph_verticle_spacing_sm + 'px',
            marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_sm + 'px',
        },
        [JsLogMuiTheme.breakpoints.up('md')]: {
            marginTop: JsLogMuiTheme.typography.paragraph_verticle_spacing_md + 'px',
            marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_md + 'px',
        },
        [JsLogMuiTheme.breakpoints.up('lg')]: {
            marginTop: JsLogMuiTheme.typography.paragraph_verticle_spacing_lg + 'px',
            marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_lg + 'px',
        },
        [JsLogMuiTheme.breakpoints.up('xl')]: {
            marginTop: JsLogMuiTheme.typography.paragraph_verticle_spacing_xl + 'px',
            marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_xl + 'px',
        },
    },
    display1: {
        marginTop: (JsLogMuiTheme.typography.paragraph_verticle_spacing_xs * 2) + 'px',
        marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_xs + 'px',
        [JsLogMuiTheme.breakpoints.up('sm')]: {
            marginTop: (JsLogMuiTheme.typography.paragraph_verticle_spacing_sm * 2) + 'px',
            marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_sm + 'px',
        },
        [JsLogMuiTheme.breakpoints.up('md')]: {
            marginTop: (JsLogMuiTheme.typography.paragraph_verticle_spacing_md * 2) + 'px',
            marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_md + 'px',
        },
        [JsLogMuiTheme.breakpoints.up('lg')]: {
            marginTop: (JsLogMuiTheme.typography.paragraph_verticle_spacing_lg * 2) + 'px',
            marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_lg + 'px',
        },
        [JsLogMuiTheme.breakpoints.up('xl')]: {
            marginTop: (JsLogMuiTheme.typography.paragraph_verticle_spacing_xl * 2) + 'px',
            marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_xl + 'px',
        },
    },
    title: {
        marginTop: (JsLogMuiTheme.typography.paragraph_verticle_spacing_xs * 2) + 'px',
        marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_xs + 'px',
        [JsLogMuiTheme.breakpoints.up('sm')]: {
            marginTop: (JsLogMuiTheme.typography.paragraph_verticle_spacing_sm * 2) + 'px',
            marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_sm + 'px',
        },
        [JsLogMuiTheme.breakpoints.up('md')]: {
            marginTop: (JsLogMuiTheme.typography.paragraph_verticle_spacing_md * 2) + 'px',
            marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_md + 'px',
        },
        [JsLogMuiTheme.breakpoints.up('lg')]: {
            marginTop: (JsLogMuiTheme.typography.paragraph_verticle_spacing_lg * 2) + 'px',
            marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_lg + 'px',
        },
        [JsLogMuiTheme.breakpoints.up('xl')]: {
            marginTop: (JsLogMuiTheme.typography.paragraph_verticle_spacing_xl * 2) + 'px',
            marginBottom: JsLogMuiTheme.typography.paragraph_verticle_spacing_xl + 'px',
        },
    },
};


export default JsLogMuiTheme;
