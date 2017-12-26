import ArticleBox from './ArticleBox.jsx';

class ArticleBoxRow extends React.Component {
    render() {
        let articles = this.props.row_data.map(article_data => {
            return <ArticleBox key={article_data.href} data={article_data} />
        });
        return <div className="row">
            {articles}
        </div>
    };
}

export default ArticleBoxRow
