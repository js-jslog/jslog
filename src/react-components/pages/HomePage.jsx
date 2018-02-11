import React from 'react';

import BannerNav from '../nav/BannerNav.jsx';
import HeroBanner from '../HeroBanner.jsx';
import Footer from '../Footer.jsx';

import {withStyles} from 'material-ui/styles';

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    grid: {
        flexGrow: 1,
        margin: 20,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

const PageContents = (props) => {
    const {classes} = props;
    return (
    <div>
        <BannerNav title='Joseph Sinfield' image="index.jpg" />
        <div className={classes.grid}>
          <Grid container spacing={24}>
            <Grid item sm={4} xs={12}>
                <Paper className={classes.paper}>We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</Paper>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Paper className={classes.paper}>We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</Paper>
            </Grid>
            <Grid item sm={4} xs={12}>
                <Paper className={classes.paper}>We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.</Paper>
            </Grid>
          </Grid>
        </div>
        <HeroBanner image="../highhope.jpg" overlayText="Open for business" />
        <Footer />
    </div>
    );
};

export default withStyles(styles)(PageContents);
