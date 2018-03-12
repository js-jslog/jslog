import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
  subheading: Object.assign(
    {
      fontSize: theme.scales.primary.p1,
      fontFamily: '"Nanum Gothic", sans-serif',
    },
    theme.layout.vertical_spacing_uneven
  )
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
