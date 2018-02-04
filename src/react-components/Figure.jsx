import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    page_content_spacing: Object.assign(
        {},
        theme.layout.responsive_page_column,
        theme.layout.vertical_spacing_even
    ),
});

const FigureCaption = (props) => {
    return (
        <Typography type='caption'>
            {props.children}
        </Typography>
    );
};

const Figure = (props) => {
    const {classes} = props;
    return (
        <figure className={classes.page_content_spacing}>
            {props.children}
        </figure>
    );
};

export default withStyles(styles)(Figure);
export {FigureCaption};
