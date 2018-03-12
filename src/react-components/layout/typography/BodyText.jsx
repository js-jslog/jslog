import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  body: {
    fontSize: theme.scales.primary.main,
    marginBottom: theme.scales.primary.p2,
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
