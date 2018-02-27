import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  title: {
    textAlign: 'center',
  }
});

class HeadingTitle extends React.Component {
  render () {
    const {classes, children} = this.props;
    return (
      <Typography 
        variant='headline' 
        className={classes.title}
      >
        {children}
      </Typography>
    );
  }
}

export default withStyles(styles)(HeadingTitle);
