import React from 'react';
import EmbeddedGist from './EmbeddedGist.jsx';
import Figure from './Figure.jsx';

const CodeBlock = (props) => {
    return (
        <Figure>
            <EmbeddedGist gist={props.gist_id} />
            {props.children}
        </Figure>
    );
};

export default CodeBlock;
