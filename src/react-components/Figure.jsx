import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    gutters: theme.layout.responsive_page_gutter,
});

const Figure = (props) => {
    const {classes} = props;
    return (
        <figure className={classes.gutters}>
            {props.children}
        </figure>
    );
};

export default withStyles(styles)(Figure);
