import React from 'react';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';

import {withStyles} from 'material-ui/styles';

const styles = theme => ({});

const MinimalBanner = function (props) { 
    const {classes} = props;
    return (
        <AppBar position='static'>
            This is my site
        </AppBar>
    );
};

export default withStyles(styles)(MinimalBanner);
