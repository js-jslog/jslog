import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import JsLogMuiTheme from './muiThemes/JsLogMuiTheme.js';

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
        return <MuiThemeProvider muiTheme={JsLogMuiTheme}>
            <JsLog />
        </MuiThemeProvider>
    }
}

render(<App/>, document.getElementById("pageBody"));
