import React from 'react';

import Gist from 'react-gist';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/styles/hljs';

const CodeBlock = (props) => (
    <div>
        <Gist id={props.gist_id} />
        {props.children}
    </div>
);

export default CodeBlock;
