import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/styles/hljs';

// COPIED FROM https://gist.github.com/aVolpe/b364a8fcd10f1ba833d97e9ab278f42c
class EmbeddedGist extends Component {

    constructor(props) {
        super(props);
        this.gist = props.gist;
        this.file = props.file;
        this.stylesheetAdded = false;
        this.state = {
            loading: true,
            src: ""
        };
    }

    // The Gist JSON data includes a stylesheet to add to the page
    // to make it look correct. `addStylesheet` ensures we only add
    // the stylesheet one time.
    addStylesheet = (href) => {
        if (!this.stylesheetAdded) {
            this.stylesheetAdded = true;
            let link = document.createElement('link');
            link.type = "text/css";
            link.rel = "stylesheet";
            link.href = href;
            document.head.appendChild(link);
        }
    }

    componentDidMount() {
        // Create a JSONP callback that will set our state
        // with the data that comes back from the Gist site

        let gistCallback = EmbeddedGist.nextGistCallback();
        window[gistCallback] = function(gist) {
            this.setState({
                loading: false,
                src: gist.div
            });
            this.addStylesheet(gist.stylesheet);
        }.bind(this);

        let url = "https://gist.github.com/" + this.props.gist + ".json?callback=" + gistCallback;
        if (this.props.file) {
            url += "&file=" + this.props.file;
        }


        // Add the JSONP script tag to the document.
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        document.head.appendChild(script);
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        } else {
            return <div dangerouslySetInnerHTML={{__html: this.state.src}} />;
        }
    }
}

EmbeddedGist.propTypes = {
    gist: PropTypes.string.isRequired,
    file: PropTypes.string,
};

// Each time we request a Gist, we'll need to generate a new
// global function name to serve as the JSONP callback.
let gistCallbackId = 0;
EmbeddedGist.nextGistCallback = () => {
    return "embed_gist_callback_" + gistCallbackId++;
};

export default EmbeddedGist;
