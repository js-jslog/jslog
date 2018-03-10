import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  subheading: {
  }
});

class SectionSubheading extends React.Component {
  render () {
    const {classes, children} = this.props;
    return (
      <Typography 
        variant='subheading' 
        className={classes.subheading}
      >
        {children}
      </Typography>
    );
  }
}

export default withStyles(styles)(SectionSubheading);
