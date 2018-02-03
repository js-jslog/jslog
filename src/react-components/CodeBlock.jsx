import React from 'react';
import EmbeddedGist from './EmbeddedGist.jsx';

const CodeBlock = (props) => (
    <div>
        <EmbeddedGist gist={props.gist_id} />
        {props.children}
    </div>
);

export default CodeBlock;
