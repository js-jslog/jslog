import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    cite: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: theme.scales.primary.m1,
    },
});

const Caption = (props) => {
    const {classes} = props;
    const classname = props.cite ? classes.cite : '';
    const children = React.Children.map(props.children, child => {
        const output = props.cite ? '~ ' + child : child;
        return output;
    });
    return (
        <Typography variant='caption' className={classname}>
            {children}
        </Typography>
    );
};

export default withStyles(styles)(Caption);
