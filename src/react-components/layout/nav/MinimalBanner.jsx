import React from 'react';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    nav: {
        color: theme.palette.primary.main,
    }
});

const MinimalBanner = function (props) { 
    const {classes} = props;
    return (
        <div>
            <AppBar className={classes.nav} position='static'>
                JS
            </AppBar>
            <Link to='/'>
                Home
            </Link>
        </div>
    );
};

export default withStyles(styles)(MinimalBanner);
