import React from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  blockquote: {
    fontFamily: '"Nanum Gothic", sans-serif',
    fontStyle: 'italic',
  }
});

class BlockQuote extends React.Component {
  render () {
    const {classes, cite, children} = this.props;
    return (
      <Typography variant='body2' className={classes.blockquote}>
        <blockquote cite={cite}>
          "{children}"
        </blockquote>
      </Typography>
    );
  };
};

export default withStyles(styles)(BlockQuote);

