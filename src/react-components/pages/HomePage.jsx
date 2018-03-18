import React from 'react';

import Typography from 'material-ui/Typography';
import PostContent from '../layout/wrapping/PostContent.jsx';
import Banner from '../layout/banner/Banner.jsx';
import ContentList from '../layout/nav/ContentList.jsx';
import Footer from '../layout/nav/Footer.jsx';

import {withStyles} from 'material-ui/styles';

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
    overlay_content: {
        textAlign: 'left',
        fontSize: theme.scales.secondary.m1,
        paddingBottom: theme.scales.primary.m1,
        maxWidth: theme.scales.primary.p6,
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.scales.primary.main,
            paddingBottom: theme.scales.primary.main,
            maxWidth: theme.scales.primary.p7,
        }
    },
});

const PageContents = (props) => {
    const {classes} = props;
    return (
    <div>
        <Banner title='Joseph Sinfield' image="index.jpg">
            <Typography className={classes.overlay_content}>
                My name is Joe and I am a full stack developer specialising in javascript.
            </Typography>
            <Typography className={classes.overlay_content}>
                I have a ruderless passion for whatever is most interesting to me at work and in the tech communities I am a part of.
            </Typography>
            <Typography className={classes.overlay_content}>
                Below is a collection of articles and apps I have created recently. You can also see what I am currently working on at github.
            </Typography>
        </Banner>
        <PostContent wide>
            <ContentList title='Recently added' />
        </PostContent>
        <Footer />
    </div>
    );
};

export default withStyles(styles)(PageContents);
