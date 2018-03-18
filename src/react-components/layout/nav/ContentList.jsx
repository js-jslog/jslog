import React from 'react';
import {Link} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import dateFormat from 'dateformat';
import articles_list from '../../pages/articles/articles.js';

const styles = theme => ({
  title: theme.layout.vertical_spacing_uneven,
  row: {
    display: 'block',
    color: theme.palette.primary.main,
    borderTop: '1px solid ' + theme.palette.primary.light,
    borderBottom: 0,
    padding: theme.scales.primary.m1 + ' ' + theme.scales.primary.p1,
  },
  date: {
    fontFamily: '"Nanum Gothic", sans-serif',
    fontSize: theme.scales.secondary.m1,
    color: theme.palette.primary.light,
    display: 'block',
    paddingBottom: theme.scales.primary.m1,
    [theme.breakpoints.up('lg')]: {
      display: 'inline-flex',
      width: theme.scales.primary.p5,
    }
  },
  page: {
  },
  tag: {
    fontFamily: '"Nanum Gothic", sans-serif',
    fontSize: theme.scales.secondary.m1,
    color: theme.palette.primary.light,
    float: 'right',
    paddingLeft: theme.scales.primary.m1,
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.scales.primary.m3,
    }
  }
});

class ListRow extends React.Component {
  render() {
    return (
      articles_list.map((article_info) => {
        const {classes} = this.props;
        if (article_info.published) {
          return (
            <Link
              to={'/articles/' + article_info.link}
              className={classes.row}
              key={article_info.link}
            >
              <span className={classes.date}>
                {dateFormat(article_info.date, 'mmmm dS yyyy')}
              </span>
              <span className={classes.page}>
                {article_info.title}
              </span>
              <span className={classes.tag}>
                article
              </span>
            </Link>
          );
        }
      })
    );
  }
}

class ContentList extends React.Component {
  render() {
    const {classes} = this.props;
    const title = this.props.title || 'Content';
    return (
      <div>
        <Typography
          className={classes.title}
          variant='display1'
        >
          {title}
        </Typography>
        <ListRow classes={classes} />
      </div>
    );
  }
}

export default withStyles(styles)(ContentList);
