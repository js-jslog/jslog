import ArticleBox from './article.jsx';
//import ReactDOM from 'react-dom';

class ArticleRow extends React.Component {
    render() {
        let articles = this.props.data_array.map(article_info => {
            return <ArticleBox data={article_info} />
        });
        return <div className="row">
            {articles}
        </div>
    };
}

export default ArticleRow
