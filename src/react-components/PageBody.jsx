import NavigationBar from './NavigationBar.jsx';
import PageBodyFactory from './PageBodyFactory.jsx';
import Footer from './Footer.jsx';

class PageBody extends React.Component {
    render() {
        return <div>
            <NavigationBar />
            <PageBodyFactory />
            <Footer />
        </div>
    };
}

ReactDOM.render(
  <PageBody />,
  document.getElementById('pageBody')
);
