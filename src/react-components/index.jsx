import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JsLogMuiTheme from './muiThemes/JsLogMuiTheme.js';

import {ParallaxProvider} from 'react-scroll-parallax';

import Home from './pages/HomePage.jsx';
import ArticlesIndex from './pages/ArticlesIndex.jsx';
import ArticleContainer from './pages/ArticleContainer.jsx';

const JsLog = () => (
    <ParallaxProvider>
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/articles" component={ArticlesIndex}/>
                <Route exact path="/articles/:article_id" component={ArticleContainer}/>
            </div>
        </Router>
    </ParallaxProvider>
);

class App extends React.Component {
    render () {
        return <MuiThemeProvider muiTheme={JsLogMuiTheme}>
            <JsLog />
        </MuiThemeProvider>
    }
}

render(<App/>, document.getElementById("pageBody"));
