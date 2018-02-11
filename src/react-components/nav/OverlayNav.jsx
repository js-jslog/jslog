import React from 'react';
import {Link} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';

import Button from 'material-ui/Button';
import List, {ListItem} from 'material-ui/List';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';

const styles = theme => ({
    nav: {
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
        color: theme.palette.primary.main,
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
});

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

    render() {
        const {classes} = this.props;
        return (
            <nav
                className={classes.nav}
                ref={this.props.navRef}
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
