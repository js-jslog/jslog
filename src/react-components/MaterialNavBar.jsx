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

const styles = {
    desktop_nav: {
        display: "none",
    },
    '@media (min-width: 992px)': {
        desktop_nav: {
            display: "flex",
        },
        mobile_nav: {
            display: "none",
        },
    },
};

const nav_links = [
    {
        link: "/",
        display_text: "Home",
    },
    {
        link: "articles",
        display_text: "Articles",
    },
    {
        link: "apps",
        display_text: "Apps",
    },
];

const DrawListNavItems = function () {
    return nav_links.map(link => (
        <ListItem key={link.link} button>
            <Link to={link.link}>
                {link.display_text}
            </Link>
        </ListItem>
    ));
};
const ToolbarNavItems = function ({classes}) {
    return nav_links.map(link => (
        <Button className={classes.desktop_nav} key={link.link}>
            <Link to={link.link}>
                {link.display_text}
            </Link>
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
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.mobile_nav}>
                            <MenuIcon onClick={this.toggleDrawer()} />
                        </IconButton>
                        <ToolbarNavItems classes={classes}/>
                        <Typography type="title">
                            {this.props.title} 
                        </Typography>
                    </Toolbar>
                </AppBar>
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
            </div>
        );
    };
}

export default withStyles(styles)(MaterialNavBar);
