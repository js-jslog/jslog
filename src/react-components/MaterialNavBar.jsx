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

const styles = {
};

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
                <AppBar position="static">
                    <Toolbar>
                        <Hidden mdUp>
                            <IconButton>
                                <MenuIcon onClick={this.toggleDrawer()} />
                            </IconButton>
                        </Hidden>
                        <Hidden mdDown>
                            <ToolbarNavItems classes={classes}/>
                        </Hidden>
                        <Typography type="title">
                            {this.props.title} 
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Hidden mdUp>
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
