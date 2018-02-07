import React from 'react';
import {Link} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import List, {ListItem} from 'material-ui/List';
import MenuIcon from 'material-ui-icons/Menu';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Hidden from 'material-ui/Hidden';

const styles = theme => ({
    app_bar: {
        backgroundColor: theme.palette.background.paper,
    },
    page_title: {
        display: 'none',
        margin: '0',
        textAlign: 'center',
        zIndex: theme.zIndex.appBar,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            position: 'fixed',
            top: '3.142rem',
            textAlign: 'right',
            right: '3.142rem',
            fontSize: '3.142rem',
            color: theme.palette.background.paper,
        },
        [theme.breakpoints.up('md')]: {
            top: '2.618rem',
            right: '4.236rem',
            fontSize: '4.236rem',
        },
        [theme.breakpoints.up('lg')]: {
            right: '5.083rem',
            fontSize: '5.083rem',
        },
    },
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

const DrawListNavItems = function () {
    return nav_links.map(link => (
        <ListItem key={link.link} component={Link} to={link.link} button>
            {link.display_text}
        </ListItem>
    ));
};
const ToolbarNavItems = function () {
    return nav_links.map(link => (
        <Button key={link.link} component={Link} to={link.link}>
            {link.display_text}
        </Button>
    ));
};


class MaterialNavBar extends React.Component {
    state = {
        open: false,
    };

    toggleDrawer = () => () => {
        this.setState({
            open: !this.state.open,
        })
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <AppBar position="static" className={classes.app_bar}>
                    <Toolbar>
                        <Hidden smUp>
                            <IconButton>
                                <MenuIcon onClick={this.toggleDrawer()} />
                            </IconButton>
                        </Hidden>
                        <Hidden xsDown>
                            <ToolbarNavItems classes={classes}/>
                        </Hidden>
                        <Typography variant='title' className={classes.page_title}>
                            {this.props.title} 
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Hidden smUp>
                    <Drawer
                        open={this.state.open} onClose={this.toggleDrawer()}
                    >
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer()}
                            onKeyDown={this.toggleDrawer()}
                        >
                            <List>
                                <DrawListNavItems />
                            </List>
                        </div>
                    </Drawer>
                </Hidden>
            </div>
        );
    };
}

export default withStyles(styles)(MaterialNavBar);
