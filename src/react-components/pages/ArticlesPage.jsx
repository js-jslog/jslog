import React from 'react';
import ReactDOM from 'react-dom';

import ArticleBoxRow from '../ArticleBoxRow.jsx';

class ArticlesPage extends React.Component {
    render () {
      const that = this;
      const page_info = Object.keys(this.props.page_info).map(function (val) {
          return that.props.page_info[val];
      }).filter(function (obj) {
          return (!obj.exclude_from_articles);
      });
      const article_rows = page_info.map(function (val, index, arr) {
          const columns = 3;
          const marker = index * columns;
          return arr.slice(marker, marker + columns);
      }).filter(a => a.length>0)
        .map(function (row_data, index2) {
          let key = "row" + index2;
          return <ArticleBoxRow key={key} row_data={row_data} />;
      });
      return <div className="container">
          <div className="section">
              {article_rows}
          </div>
      </div>
    }
};

export default ArticlesPage;
