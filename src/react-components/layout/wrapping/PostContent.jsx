import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  page_gutter: theme.layout.responsive_page_column,
  page_verticles: theme.layout.vertical_spacing_even,
  page_gutter_medium: theme.layout.responsive_page_column_medium_augmentation,
  page_gutter_wide: theme.layout.responsive_page_column_wide_augmentation
});

class PostContent extends React.Component {
  render () {
    const {classes, children, wide, medium} = this.props;
    let class_name = classes.page_gutter + ' ' + classes.page_verticles;
    if (wide) {
      class_name += (' ' + classes.page_gutter_wide);
    } else if (medium) {
      class_name += (' ' + classes.page_gutter_medium);
    }
    return (
      <div 
        className={class_name}
      >
        {children}
      </div>
    );
  }
}

export default withStyles(styles)(PostContent);
