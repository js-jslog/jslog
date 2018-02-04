import React from 'react';
import EmbeddedGist from './EmbeddedGist.jsx';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import Figure, {FigureCaption} from './Figure.jsx';

const styles = theme => ({
    output: {
        fontFamily: theme.typography.code_font_family,
        color: theme.palette.text.primary,
    },
    error_output: {
        fontFamily: theme.typography.code_font_family,
        color: theme.palette.error.main,
    },
});

const CodeBlockOutput = (props) => {
    const {classes} = props;
    return (
        <Typography
            type='caption'
            className={classes.output}
        >
            {props.children}
        </Typography>
    );
};
const CodeBlockErrorOutput = (props) => {
    const {classes} = props;
    return (
        <Typography
            type='caption'
            className={classes.error_output}
        >
            {props.children}
        </Typography>
    );
};

const CodeBlock = (props) => {
    const {children, classes} = props;
    const childrenWithProps = React.Children.map(children, child => 
        React.cloneElement(child, {classes: classes})
    );
    return (
        <Figure>
            <EmbeddedGist gist={props.gist_id} />
            {childrenWithProps}
        </Figure>
    );
};

export default withStyles(styles)(CodeBlock);
export {CodeBlockOutput};
export {CodeBlockErrorOutput};
