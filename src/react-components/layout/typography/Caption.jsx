import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    caption: {
        lineHeight: theme.scales.primary.main,
        marginTop: theme.scales.primary.m2,
        marginBottom: theme.scales.primary.main,
    },
    cite: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: theme.scales.primary.m1,
    },
    margins: {
        marginLeft: theme.layout.page_column_gutter_xs,
        marginRight: theme.layout.page_column_gutter_xs,
        [theme.breakpoints.up('sm')]: {
            marginLeft: 0,
            marginRight: 0,
        },
    }
});

const Caption = (props) => {
    const {classes, children} = props;
    let classname = props.cite ? classes.cite : classes.caption;
    classname += ' ' + classes.margins;
    return (
        <Typography variant='caption' className={classname}>
            {children}
        </Typography>
    );
};

export default withStyles(styles)(Caption);
