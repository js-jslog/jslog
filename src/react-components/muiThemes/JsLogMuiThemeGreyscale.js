import {createMuiTheme} from 'material-ui/styles';
import scales from './scales.js';

let Theme = createMuiTheme({
    scales: scales,
    layout: {
        // page_column_width_xs: scales.primary.p6, REPLACED WITH STATIC GUTTERS AT SMALL SCREEN SIZES
        page_column_gutter_xs: scales.px.primary.m1,
        page_column_width_sm: scales.primary.p7,
        page_column_width_md: scales.primary.p7,
        page_column_width_lg: scales.primary.p7,
        page_column_width_xl: scales.primary.p7,
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
       text: {
          light: '#999',
          main: '#555',
          dark: '#333',
          contrastText: '#ffffff',
       },
    },
    overrides: {},
});
Theme.layout.responsive_page_column = {
    marginLeft: Theme.layout.page_column_gutter_xs,
    marginRight: Theme.layout.page_column_gutter_xs,
    [Theme.breakpoints.up('sm')]: {
        maxWidth: Theme.layout.page_column_width_sm,
        marginLeft: 'auto',
        marginRight: 'auto',
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
    marginTop: Theme.scales.primary.p2,
    marginBottom: Theme.scales.primary.p2,
};
Theme.layout.vertical_spacing_uneven = {
    marginTop: Theme.scales.primary.p3,
    marginBottom: Theme.scales.primary.p1,
};
Theme.overrides.MuiButton = {root: {}};
Theme.overrides.MuiList = {
   root: {
      marginLeft: Theme.scales.primary.p1,
      marginTop: Theme.scales.primary.p2,
      marginBottom: Theme.scales.primary.p2,
   },
   padding: {
      paddingTop: 0,
      paddingBottom: 0,
   },
};
Theme.overrides.MuiListItem = {
   root: {
      fontFamily: '"Nanum Gothic", sans-serif',
      color: Theme.palette.primary.light,
      lineHeight: Theme.scales.primary.p2.split('rem')[0] + 'em',
   },
   default: {
      paddingTop: 0,
      paddingBottom: 0,
      marginTop: 0,
      marginBottom: 0,
   },
   gutters: {
      paddingLeft: 0,
      paddingRight: 0,
   },
};
Theme.overrides.MuiTypography = {
   root: {
      fontSize: 14,
      color: Theme.palette.text.main,
      lineHeight: Theme.scales.primary.p2.split('rem')[0] + 'em',
   },
   headline: {
      color: Theme.palette.text.dark,
      lineHeight: Theme.scales.primary.p1.split('rem')[0] + 'em',
   },
   title: {
      color: Theme.palette.text.dark,
      lineHeight: Theme.scales.primary.p1.split('rem')[0] + 'em',
   },
   subheading: {
      color: Theme.palette.text.dark,
      lineHeight: Theme.scales.primary.p1.split('rem')[0] + 'em',
   },
   body2: {
      color: undefined,
      lineHeight: undefined,
   },
   body1: {
      color: undefined,
      lineHeight: undefined,
   },
   caption: {
      color: undefined,
      lineHeight: undefined,
   },
   button: {
      color: undefined,
      lineHeight: undefined,
   },
};

export default Theme;
