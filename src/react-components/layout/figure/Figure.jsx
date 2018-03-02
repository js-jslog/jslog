import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    figure_spacing: Object.assign(
        {
            marginRight: 0,
            marginLeft: 0,
            [theme.breakpoints.up('sm')]: {
                marginRight: '-' + theme.scales.primary.p3,
                marginLeft: '-' + theme.scales.primary.p3,
            },
        },
        theme.layout.vertical_spacing_even
    ),
});

const Figure = (props) => {
    const {classes, margin} = props;
    const children = React.Children.map(props.children, child =>
        React.cloneElement(child, {classes: classes})
    );
    return (
        <figure 
            className={classes.figure_spacing}
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
