import ArticlesPage from './pages/ArticlesPage.jsx';
import IndexPage from './pages/IndexPage.jsx';

class PageBodyFactory extends React.Component {
    render() {
        const pathname = window.location.pathname;
        let contentTag;
        if (pathname === "/index") {
            contentTag = <IndexPage />;
        } else if (pathname === "/articles") {
            contentTag = <ArticlesPage />;
        }
        return contentTag;
    };
}

export default PageBodyFactory;
