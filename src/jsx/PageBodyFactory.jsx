import ArticlesPageContent from './pageContents/articles-page-content.jsx';
import IndexPageContent from './pageContents/indexPageContent.jsx';

class PageBodyFactory extends React.Component {
    render() {
        const pathname = window.location.pathname;
        let contentTag;
        if (pathname === "/index") {
            contentTag = <IndexPageContent />;
        } else if (pathname === "/articles") {
            contentTag = <ArticlesPageContent />;
        }
        return contentTag;
    };
}

export default PageBodyFactory;
