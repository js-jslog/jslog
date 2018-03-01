import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    page_content_spacing: Object.assign(
        {
            marginRight: '-' + theme.scales.primary.p3,
            marginLeft: '-' + theme.scales.primary.p3,
        },
        theme.layout.vertical_spacing_even
    ),
    cite: {
        textAlign: 'right',
        fontStyle: 'italic',
        fontSize: theme.scales.primary.m1,
    },
});

const FigureCaption = (props) => {
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

const Figure = (props) => {
    const {classes, margin} = props;
    const children = React.Children.map(props.children, child =>
        React.cloneElement(child, {classes: classes})
    );
    return (
        <figure 
            className={classes.page_content_spacing}
            style={{
                marginRight: margin || undefined,
                marginLeft: margin || undefined,
            }}
        >
            {children}
        </figure>
    );
};

export default withStyles(styles)(Figure);
export {FigureCaption};
