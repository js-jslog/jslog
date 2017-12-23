import NavigationBar from './NavigationBar.jsx';
import HeroBanner from './HeroBanner.jsx';
import PageBodyFactory from './PageBodyFactory.jsx';
import Footer from './Footer.jsx';

class PageBody extends React.Component {
    render() {
        return <div>
            <NavigationBar />
            <HeroBanner />
            <PageBodyFactory />
            <Footer />
        </div>
    };
}

ReactDOM.render(
  <PageBody />,
  document.getElementById('pageBody')
);
