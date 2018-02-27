import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    page_gutter: theme.layout.responsive_page_column,
});

class PostContent extends React.Component {
  render () {
    const {classes, children} = this.props;
    return (
        <div className={classes.page_gutter}>
            {children}
        </div>
    );
  };
};

export default withStyles(styles)(PostContent);
