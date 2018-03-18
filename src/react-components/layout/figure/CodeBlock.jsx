import React from 'react';
import EmbeddedGist from './helpers/EmbeddedGist.jsx';
import Code from '../typography/Code.jsx';
import {withStyles} from 'material-ui/styles';
import Figure from '../figure/Figure.jsx';
import Paper from 'material-ui/Paper';

const styles = theme => ({
    paper: {
        [theme.breakpoints.up('sm')]: {
            borderRadius: theme.scales.primary.m2,
        },
    },
    output: {
        marginLeft: theme.layout.page_column_gutter_xs,
        marginRight: theme.layout.page_column_gutter_xs,
        [theme.breakpoints.up('sm')]: {
            marginLeft: 0,
            marginRight: 0,
        },
    },
});

const CodeBlockOutput = (props) => {
    const {classes} = props;
    return (
        <div className={classes.output}>
            <Code block lead>
                {props.children}
            </Code>
        </div>
    );
};
const CodeBlockErrorOutput = (props) => {
    const {classes} = props;
    return (
        <div className={classes.output}>
            <Code block error lead>
                {props.children}
            </Code>
        </div>
    );
};

const CodeBlock = (props) => {
    const {children, classes, parallel} = props;
    const childrenWithProps = React.Children.map(children, child => 
        React.cloneElement(child, {classes: classes})
    );
    return (
        <Figure parallel={parallel}>
            <Paper className={classes.paper}>
                <EmbeddedGist
                    gist={props.gist_id}
                    file={props.file}
                />
            </Paper>
            {childrenWithProps}
        </Figure>
    );
};

export default withStyles(styles)(CodeBlock);
export {CodeBlockOutput};
export {CodeBlockErrorOutput};
