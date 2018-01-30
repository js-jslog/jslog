import React from 'react';
import Typography from 'material-ui/Typography';

import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        padding: "20px",
        textAlign: "center",
    },
    typo: {
        color: theme.palette.primary.contrastText,
    },
    git_watermark: {
        margin: "5px",
    },
});

const Footer = function (props) { 
    const {classes} = props;
    return (
        <footer className={classes.footer}>
            <Typography className={classes.typo}>
                Paid for by <b>Joseph Sinfield</b>
            </Typography>
            <a href="https://github.com/js-jslog">
                <img className={classes.git_watermark} height="24" src="/images/GitHub-Mark-Light-32px.png" />
            </a>
        </footer>
    );
};

export default withStyles(styles)(Footer);
