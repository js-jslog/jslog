import React from 'react';

import BannerNav from '../layout/nav/BannerNav.jsx';
import ContentList from '../layout/nav/ContentList.jsx';
import Footer from '../layout/nav/Footer.jsx';

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
        <ContentList />
        <ContentList />
        <ContentList />
        <ContentList />
        <ContentList />
        <ContentList />
        <ContentList />
        <ContentList />
        <ContentList />
        <Footer />
    </div>
    );
};

export default withStyles(styles)(PageContents);
