import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  title: Object.assign(
    {
      textAlign: 'center',
      fontSize: theme.scales.primary.p3,
      fontWeight: 500,
    },
    theme.layout.vertical_spacing_uneven
  )
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
