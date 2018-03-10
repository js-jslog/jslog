import React from 'react';
import {Link} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';

import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import dateFormat from 'dateformat';
import articles_list from '../../pages/articles/articles.js';

const styles = theme => ({
  row: {
    display: 'block',
    borderTop: '1px solid',
    padding: theme.scales.primary.m1 + ' ' + theme.scales.primary.p1,
  },
  date: {
    display: 'inline-flex',
    width: theme.scales.primary.p5,
  },
  page: {
  },
  tag: {
    float: 'right',
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
    return (
      <ListRow classes={classes} />
    );
  }
}

export default withStyles(styles)(ContentList);
