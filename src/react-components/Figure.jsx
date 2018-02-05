import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    page_content_spacing: Object.assign(
        {},
        theme.layout.responsive_page_column,
        theme.layout.vertical_spacing_even
    ),
    cite: {
        textAlign: 'right',
    },
});

const FigureCaption = (props) => {
    const {classes} = props;
    const classname = props.cite ? classes.cite : '';
    return (
        <Typography type='caption' className={classname}>
            {props.children}
        </Typography>
    );
};

const Figure = (props) => {
    const {classes} = props;
    const children = React.Children.map(props.children, child =>
        React.cloneElement(child, {classes: classes})
    );
    return (
        <figure className={classes.page_content_spacing}>
            {children}
        </figure>
    );
};

export default withStyles(styles)(Figure);
export {FigureCaption};
