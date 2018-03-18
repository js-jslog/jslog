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
    figure_spacing_parallel: {
        [theme.breakpoints.up('lg')]: {
            marginRight: theme.scales.primary.p1,
            marginLeft: theme.scales.primary.p1,
        },
    },
});

const Figure = (props) => {
    const {classes, children, parallel, margin} = props;
    let class_name = classes.figure_spacing;
    if (parallel) {
        class_name += ' ' + classes.figure_spacing_parallel;
    }
    return (
        <figure 
            className={class_name}
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
