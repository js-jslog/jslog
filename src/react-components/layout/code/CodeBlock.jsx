import React from 'react';
import EmbeddedGist from './EmbeddedGist.jsx';
import Code from './Code.jsx';
import {withStyles} from 'material-ui/styles';
import Figure, {FigureCaption} from '../figure/Figure.jsx';

const styles = theme => ({});

const CodeBlockOutput = (props) => {
    const {classes} = props;
    return (
        <Code block lead>
            {props.children}
        </Code>
    );
};
const CodeBlockErrorOutput = (props) => {
    const {classes} = props;
    return (
        <Code block error lead>
            {props.children}
        </Code>
    );
};

const CodeBlock = (props) => {
    const {children, classes} = props;
    const childrenWithProps = React.Children.map(children, child => 
        React.cloneElement(child, {classes: classes})
    );
    return (
        <Figure>
            <EmbeddedGist
                gist={props.gist_id}
                file={props.file}
            />
            {childrenWithProps}
        </Figure>
    );
};

export default withStyles(styles)(CodeBlock);
export {CodeBlockOutput};
export {CodeBlockErrorOutput};
