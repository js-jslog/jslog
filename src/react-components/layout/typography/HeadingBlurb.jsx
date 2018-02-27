import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  blurb: {
  }
});

class HeadingBlurb extends React.Component {
  render () {
    const {classes, children} = this.props;
    return (
      <Typography 
        variant='body2' 
        className={classes.blurb}
      >
        {children}
      </Typography>
    );
  }
}

export default withStyles(styles)(HeadingBlurb);
