import ArticlesPage from './pages/ArticlesPage.jsx';
import IndexPage from './pages/IndexPage.jsx';
import BooleanFunctionPage from './pages/BooleanFunctionPage.jsx';

class PageBodyFactory extends React.Component {
    render() {
        const pathname = window.location.pathname;
        let contentTag;
        if (pathname === "/index") {
            contentTag = <IndexPage />;
        } else if (pathname === "/articles") {
            contentTag = <ArticlesPage />;
        } else if (pathname === "/articles/boolean-function") {
            contentTag = <BooleanFunctionPage />
        }
        return contentTag;
    };
}

export default PageBodyFactory;
