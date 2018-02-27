import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  body: {
    color: 'red',
  }
});

class BodyText extends React.Component {
  render () {
    const {classes, children} = this.props;
    return (
      <Typography 
        variant='body1' 
        className={classes.body}
      >
        {children}
      </Typography>
    );
  }
}

export default withStyles(styles)(BodyText);
