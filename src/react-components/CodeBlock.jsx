import React from 'react';
import EmbeddedGist from './EmbeddedGist.jsx';
import Figure from './Figure.jsx';

const styles = {
    output: {
        fontFamily: '"Droid Sans Mono", monospace',
    },
};

const CodeBlockOutput = (props) => {
    return (
        <output style={styles.output}>
            {props.children}
        </output>
    );
};

const CodeBlock = (props) => {
    return (
        <Figure>
            <EmbeddedGist gist={props.gist_id} />
            {props.children}
        </Figure>
    );
};

export default CodeBlock;
export {CodeBlockOutput};
