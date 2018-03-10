import React from 'react';
import {Link} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';

import Button from 'material-ui/Button';
import List, {ListItem} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';
import * as Scroll from 'react-scroll';

const styles = function (theme) {
    theme.overrides.MuiTypography.title.color = 'inherit';
    theme.overrides.MuiButton.root.color = 'inherit';
    theme.overrides.MuiButton.root.paddingRight = '0';
    return {
    nav: {
        color: theme.palette.primary.main,
        position: 'fixed',
        top: '0',
        zIndex: theme.zIndex.appBar,
        right: '0',
        textAlign: 'right',
        padding: theme.scales.primary.p1,
        [theme.breakpoints.up('sm')]: {
            padding: theme.scales.primary.p2,
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.scales.primary.p4,
        },
    },
    page_title: {
        margin: '0',
        padding: '0',
        fontSize: theme.scales.primary.p3,
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.scales.primary.p4,
        },
    },
    nav_button: {
        fontSize: theme.scales.primary.main,
        [theme.breakpoints.up('md')]: {
            fontSize: theme.scales.secondary.main,
            paddingLeft: theme.scales.primary.p2,
        },
    },
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

const NavLinks = function (props) {
    return nav_links.map(link => (
        <Button 
            key={link.link}
            component={Link}
            to={link.link}
            className={props.classes.nav_button}
        >
            {link.display_text}
        </Button>
    ));
};

class OverlayMenu extends React.Component {

    componentDidMount () {
        this.nav.style.color = this.props.text_colour;
        window.addEventListener('scroll', this.handleScroll.bind(this));
        window.addEventListener('resize', this.updateElementSizeCache.bind(this));
    };
    componentWillReceiveProps(nextProps) {
        if (nextProps.container_height !== this.props.container_height) {
            this.updateElementSizeCache();
            if (!this.initial_scroll_performed) {
                this.scrollToContent(nextProps.container_height);
                this.initial_scroll_performed = true;
            }
        }
    };
    componentWillUnmount () {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
        window.removeEventListener('resize', this.updateElementSizeCache.bind(this));
    };
    updateElementSizeCache () {
        const nav_height = getComputedStyle(this.nav).height.split('px')[0];
        const nav_padding_top = getComputedStyle(this.nav).paddingTop.split('px')[0];
        const nav_padding_bottom = getComputedStyle(this.nav).paddingBottom.split('px')[0];
        const nav_total = parseFloat(nav_height) + parseFloat(nav_padding_top) + parseFloat(nav_padding_bottom);
        this.nav_total = nav_total;
    };
    handleScroll (event) {
        const diff = parseFloat(this.props.container_height) - parseFloat(this.nav_total);
        if (window.scrollY < diff) {
            this.nav.style.position = 'fixed';
            this.nav.style.top = 0;
        }
        if (window.scrollY > diff) {
            this.nav.style.position = 'absolute';
            this.nav.style.top = diff + 'px';
        }
    };
    scrollToContent (container_height) {
        const diff = parseFloat(container_height) - parseFloat(this.nav_total)
        const scroll = Scroll.animateScroll;
        scroll.scrollTo(diff, {
            delay: 250,
            duration: 2500,
        });
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
                <NavLinks classes={classes}/>
            </nav>
        );
    };
}

export default withStyles(styles)(OverlayMenu);
