import React from 'react';
import {withStyles} from 'material-ui/styles';
import grey from 'material-ui/colors/grey';

const styles = theme => ({
    code: {
        fontFamily: '"Cutive Mono", "Droid Sans Mono", monospace',
        color: theme.palette.text.main,
        paddingTop: theme.scales.primary.m2,
        marginLeft: theme.scales.primary.m3,
        marginRight: theme.scales.primary.m3,
        display: 'inline',
        fontSize: theme.scales.secondary.m1.split('rem')[0] + 'em',
        fontWeight: 'bold',
        lineHeight: theme.scales.primary.p1.split('rem')[0] + 'em',
    },
    block: {
        margin: 0,
        display: 'block',
    },
    error: {
        color: theme.palette.error.main,
    },
});

const mapChildren = (children, lead) => (
    React.Children.map(children, child => {
        return (lead ? '> ' + child : child)
    })
);

const Code = (props) => {
    const {classes} = props;
    const {code, block, error} = classes;
    const children = mapChildren(props.children, props.lead);
    let classnames = code;
    props.block ? classnames += (' ' + block) : classnames;
    props.error ? classnames += (' ' + error) : classnames;
    return (
        <code
            className={classnames}
        >
            {children}
        </code>
    );
};

export default withStyles(styles)(Code);
