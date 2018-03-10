import React from 'react';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    nav: {
        color: theme.palette.primary.main,
    },
    link_container: {
        textAlign: 'center',
    },
    link: {
        padding: theme.scales.primary.p1,
        fontFamily: '"Nanum Gothic", sans-serif',
    },
});

const MinimalBanner = function (props) { 
    const {classes} = props;
    return (
        <div>
            <AppBar className={classes.nav} position='static'>
                JS
            </AppBar>
            <div className={classes.link_container}>
                <Link
                    to='/'
                    className={classes.link}
                >
                    Home
                </Link>
                <Link
                    to='/articles'
                    className={classes.link}
                >
                    Articles
                </Link>
            </div>
        </div>
    );
};

export default withStyles(styles)(MinimalBanner);
