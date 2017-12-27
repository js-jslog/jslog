import React from 'react';
import ReactDOM from 'react-dom';

class NavigationBar extends React.Component {
    render() {
      return <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="/" className="brand-logo">
            <img src="/images/jslog-logo.svg"/>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#">Navbar Link</a></li>
          </ul>
    
          <ul id="nav-mobile" className="side-nav">
            <li><a href="#">Navbar Link</a></li>
          </ul>
          <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
        </div>
            <div className="title-box">
                <h1 className="header">{this.props.page_title}</h1>
            </div>
      </nav>
    };
}

export default NavigationBar;
