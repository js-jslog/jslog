import React from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = theme => ({
});

class BlockQuote extends React.Component {
  render () {
    const {classes, cite, children} = this.props;
    return (
      <Typography>
        <blockquote cite={cite}>
          {children}
        </blockquote>
      </Typography>
    );
  };
};

export default withStyles(styles)(BlockQuote);

