import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  page_gutter: theme.layout.responsive_page_column,
  page_verticles: theme.layout.vertical_spacing_even,
});

class PostHeader extends React.Component {
  render () {
    const {classes, children} = this.props;
    return (
      <div 
        className={
          classes.page_gutter + ' ' + classes.page_verticles
        }
      >
        {children}
      </div>
    );
  };
};

export default withStyles(styles)(PostHeader);
