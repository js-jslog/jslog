import React from 'react';
import {Link} from 'react-router-dom';

import {Parallax} from 'react-scroll-parallax';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';

import JsLogIcon from './icons/JsLogIcon.jsx';

class MaterialNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    };
    toggleDrawer() {
        this.setState({
            open: !this.state.open,
        });
    };
    closeDrawer() {
        this.setState({
            open: false,
        });
    };
    render() {
        return (
            <div>
                <AppBar
                    onLeftIconButtonClick={this.toggleDrawer.bind(this)}
                    title={this.props.title}
                />
                <Drawer
                    open={this.state.open}>
                    <MenuItem
                        primaryText="Close"
                        leftIcon={
                            <FontIcon className="material-icons">exit_to_app</FontIcon>
                        }
                        onClick={this.closeDrawer.bind(this)}
                    />
                    <Divider />
                    <MenuItem
                        primaryText="Home"
                        containerElement={<Link to="/" />}
                    />
                    <MenuItem
                        primaryText="Articles"
                        containerElement={<Link to="/articles" />}
                    />
                    <MenuItem
                        primaryText="Apps"
                        containerElement={<Link to="/articles" />}
                    />
                </Drawer>
            </div>
        );
    };
}

export default MaterialNavBar;
