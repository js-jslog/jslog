import React from 'react';
import {Link} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';

import Button from 'material-ui/Button';
import List, {ListItem} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';

const styles = function (theme) {
    theme.overrides.MuiTypography.body1.color= 'inherit';
    theme.overrides.MuiTypography.title.color= 'inherit';
    return {
    nav: {
        color: theme.palette.primary.main,
        position: 'fixed',
        top: '0',
        zIndex: theme.zIndex.appBar,
        right: '0',
        textAlign: 'right',
        paddingRight: theme.scales.primary.p1,
        paddingTop: theme.scales.primary.p1,
        [theme.breakpoints.up('sm')]: {
            paddingRight: theme.scales.primary.p2,
            paddingTop: theme.scales.primary.p2,
        },
    },
    page_title: {
        margin: '0',
        padding: '0',
        top: theme.scales.secondary.p1,
        fontSize: theme.scales.secondary.p1,
        [theme.breakpoints.up('sm')]: {
            top: theme.scales.secondary.p2,
            fontSize: theme.scales.secondary.p2,
        },
        [theme.breakpoints.up('md')]: {
            top: theme.scales.primary.p2,
            fontSize: theme.scales.primary.p3,
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: theme.scales.secondary.p3,
        },
    },
    menu: {
        paddingRight: theme.scales.primary.main,
        fontSize: theme.scales.primary.main,
        [theme.breakpoints.up('sm')]: {
            paddingRight: theme.scales.primary.p1,
            fontSize: theme.scales.primary.p1,
        },
    }
}};

const nav_links = [
    {
        link: "/",
        display_text: "Home",
    },
    {
        link: "/articles",
        display_text: "Articles",
    },
    {
        link: "/apps",
        display_text: "Apps",
    },
];

class OverlayMenu extends React.Component {

    componentDidMount () {
        this.updateElementSizeCache();
        this.nav.style.color = this.props.text_colour;
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.updateElementSizeCache.bind(this));
    };
    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
        window.removeEventListener('resize', this.updateElementSizeCache.bind(this));
    };
    updateElementSizeCache () {
        const nav_height = getComputedStyle(this.nav).height.split('px')[0];
        const nav_padding = getComputedStyle(this.nav).paddingTop.split('px')[0];
        const nav_total = parseFloat(nav_height) + parseFloat(nav_padding);
        this.setState({nav_total: nav_total});
    };
    handleScroll (event) {
        const diff = parseFloat(this.props.container_height) - parseFloat(this.state.nav_total);
        if (window.scrollY < diff) {
            this.nav.style.position = 'fixed';
            this.nav.style.top = 0;
        }
        if (window.scrollY > diff) {
            this.nav.style.position = 'absolute';
            this.nav.style.top = diff + 'px';
        }
    };
    render() {
        const {classes} = this.props;
        return (
            <nav
                className={classes.nav}
                ref={nav => this.nav = nav}
            >
                <Typography
                    variant='title'
                    className={classes.page_title}
                >
                    {this.props.title}
                </Typography>
                <div className={classes.menu}>
                    <Typography>
                        Home
                    </Typography>
                </div>
            </nav>
        );
    };
}

export default withStyles(styles)(OverlayMenu);
