import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/styles/hljs';

const CodeBlock = (props) => (
    <SyntaxHighlighter language='javascript' style={docco}>
        {props.code_string}
    </SyntaxHighlighter>
);

export default CodeBlock;
