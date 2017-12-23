import NavigationBar from './NavigationBar.jsx';
import HeroBanner from './HeroBanner.jsx';
import ArticlesPageContent from './articles-page-content.jsx';

class PageBody extends React.Component {
    render() {
        return <div>
            <NavigationBar />
            <HeroBanner />
            <div className="container">
              <ArticlesPageContent />
            </div>
        </div>
    };
}

ReactDOM.render(
  <PageBody />,
  document.getElementById('pageBody')
);
