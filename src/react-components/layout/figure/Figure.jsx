import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    figure_spacing: Object.assign(
        {
            marginRight: '-' + theme.layout.page_column_gutter_xs,
            marginLeft: '-' + theme.layout.page_column_gutter_xs,
            [theme.breakpoints.up('sm')]: {
                marginRight: '-' + theme.scales.primary.p3,
                marginLeft: '-' + theme.scales.primary.p3,
            },
        },
        theme.layout.vertical_spacing_even
    ),
});

const Figure = (props) => {
    const {classes, children, margin} = props;
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
