import React from 'react';
import ArticleBoxRow from '../ArticleBoxRow.jsx';

const pageLibraryToArticlesPageArray = function (page_library) {
    const filtered_page_array = Object.keys(page_library)
        .map(page_key => page_library[page_key])
        .filter(page_detail => !page_detail.exclude_from_articles);
    return filtered_page_array;
};

const generateArticleBoxRows = function (page_details) {
    const columns = 3;
    const article_box_rows = page_details.map((detail, index, array) => {
        const row_start = index * columns;
        const row_end = row_start + columns;
        return array.slice(row_start, row_end);
    })
    .filter(row => row.length>0)
    .map((row, index) => {
        const key = "article_row_" + index;
        return <ArticleBoxRow key={key} row_data={row} />;
    });
    return article_box_rows;
};

class ArticlesPage extends React.Component {
    render () {
        const filtered_page_array = pageLibraryToArticlesPageArray(this.props.page_library);
        const article_box_rows = generateArticleBoxRows(filtered_page_array);
        return <div className="container">
            <div className="section">
                {article_box_rows}
            </div>
        </div>
    };
};

export default ArticlesPage;
