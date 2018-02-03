import React from 'react';
import CodeBlock from '../../CodeBlock.jsx';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const title = "The boolean function";
const image = "boolean-function.png";
const link = "boolean-function";
const blurb = "An description of the native Boolean function and explanation of why understanding this simple function might be more important than you think";
const published = true;

const styles = theme => ({
    table: {
        margin: 'auto auto',
    },
    body_text: theme.layout.body_text,
    figure: theme.layout.figure,
});

let id = 0;
function createData(type, true_val, false_val) {
      id += 1;
      return {id, type, true_val, false_val};
}

const data = [
    createData('Boolean', '<code>true</code>', 'false'),
    createData('String', 'Any nonempty string', '"" (empty string)'),
    createData('Number', 'Any nonzero number (including infinity)', '0 or NaN'),
    createData('Object', 'Any object', 'null'),
    createData('Undefined', 'n/a', 'undefined'),
];
function BooleanTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                    <TableCell>Data type</TableCell>
                    <TableCell>Values converted to true</TableCell>
                    <TableCell>Values converted to false</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map(n => {
                return (
                    <TableRow key={n.id}>
                        <TableCell>{n.type}</TableCell>
                        <TableCell numeric>{n.true_val}</TableCell>
                        <TableCell numeric>{n.false_val}</TableCell>
                    </TableRow>
                );
                })}
                </TableBody>
            </Table>
        </Paper>
    );
}

class PageContents extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.body_text}>
                    <Typography>
                        The Boolean() function converts a variable of any data type into it's boolean literal equivalent.
                    </Typography>
                </div>
                <figure className={classes.figure}>
                    <BooleanTable classes={classes} />
                    <figcaption>Mapping of JavaScript's datatypes to boolean literals using Boolean() casting function. Source : <cite>Professional JavaScript for Web Developers third edition pg34</cite></figcaption>
                </figure>
                <div className={classes.body_text}>
                    <Typography type='display1'>Why is this important?</Typography>
                    <Typography>
                        This casting to boolean literals is performed automatically within flow controls like <i>if statements</i>. Understanding the mappings here means that you will be able to work concisely with flow controls. For example :
                    </Typography>
                </div>
                <figure className={classes.figure}>
                    <CodeBlock gist_id="1f97ae4946a3c529283dd648e8c856f0">
                      <output>the Boolean() evaluation of the String true_bool ('false') is true</output>
                      <output>Uncaught TypeError: Cannot read property 'length' of undefined</output>
                    </CodeBlock>
                </figure>
                <figure className={classes.figure}>
                    <CodeBlock gist_id="fe20761a27144a71a1b126edcce69dcd">
                      <output>the Boolean() evaluation of the String true_bool ('false') is true</output>
                    </CodeBlock>
                </figure>
                <div className={classes.body_text}>
                    <Typography>
                        In the first example above, the coder has decided to check for the length of the String in order to determine whether or not it has been set with a meaningful value. However their effort is wasted as both of these will produce the same output (printed above).
                    </Typography>
                    <Typography type='title'>Complexity leads to errors</Typography>
                    <Typography>
                        Additionally there is a bug in the first code block. The <code>undefined</code> literal does not contain a <code>length</code> property and evaluation of <code className="language-javascript">undefined.length;</code> throws an error :
                    </Typography>
                    <Typography>
                        <output className="error">Uncaught TypeError: Cannot read property 'length' of undefined(…)</output> in Chrome45.0.
                    </Typography>
                    <Typography>
                        Evaluating an error inside an <i>if statement</i> will always produce a <code>false</code> result. As such, the bug will potentially go unnoticed.
                    </Typography>
                    <Typography type='title'>Conclusion</Typography>
                    <Typography>
                        The first solution will produce the same result as the second, but is less concise and as a result introduces the potential for bugs.
                    </Typography>
                </div>
            </div>
        );
    };
};

const StyledPageContents = withStyles(styles)(PageContents);
export {StyledPageContents}
export {title};
export {image};
export {blurb};
export {link};
export {published};
