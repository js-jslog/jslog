import React from 'react';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import grey from 'material-ui/colors/grey';

const styles = theme => ({
    code: {
        fontFamily: theme.typography.code_font_family,
        color: theme.palette.text.primary,
        backgroundColor: grey[50],
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderTopColor: grey[100],
        borderBottomColor: grey[100],
        paddingTop: theme.typography.code_vertical_padding,
        paddingBottom: theme.typography.code_vertical_padding,
        display: 'inline',
    },
    block: {
        display: 'block',
    },
    error: {
        color: theme.palette.error.main,
        backgroundColor: theme.palette.error.background,
        borderTopColor: theme.palette.error.light,
        borderBottomColor: theme.palette.error.light,
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
        <Typography
            type='caption'
            className={classnames}
        >
            {children}
        </Typography>
    );
};

export default withStyles(styles)(Code);