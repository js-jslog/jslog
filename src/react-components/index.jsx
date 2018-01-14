import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './pages/HomePage.jsx';
import Articles from './pages/ArticlesPage.jsx';


const JsLog = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/articles" component={Articles}/>
        </div>
    </Router>
);

class App extends React.Component {
    render () {
        return <JsLog />
    }
}

render(<App/>, document.getElementById("pageBody"));
