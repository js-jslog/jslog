import React from 'react';
import CodeBlock, {CodeBlockOutput, CodeBlockErrorOutput} from '../../layout/code/CodeBlock.jsx';
import Code from '../../layout/code/Code.jsx';
import Figure, {FigureCaption} from '../../layout/figure/Figure.jsx';
import Typography from 'material-ui/Typography';
import {withStyles} from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const title = "The boolean function";
const image = "boolean-function.png";
const link = "boolean-function";
const blurb = "An description of the native Boolean function and explanation of why understanding this simple function might be more important than you think";
const published = true;
const styles = theme => ({});

let id = 0;
function createData(type, true_val, false_val) {
      id += 1;
      return {id, type, true_val, false_val};
}

const data = [
    createData('Boolean', 'true', 'false'),
    createData('String', 'Any nonempty string', '"" (empty string)'),
    createData('Number', 'Any nonzero number (including infinity)', '0 or NaN'),
    createData('Object', 'Any object', 'null'),
    createData('Undefined', 'n/a', 'undefined'),
];
function BooleanTable(props) {
    const { classes } = props;

    return (
        <Figure>
            <Paper>
                <Table>
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
            <FigureCaption>
                Mapping of JavaScript's datatypes to boolean literals using Boolean() casting function
            </FigureCaption>
            <FigureCaption cite>
                Professional JavaScript for Web Developers third edition pg34
            </FigureCaption>
        </Figure>
    );
}

class PageContents extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div>
                <Typography variant='display1'>
                    {title}
                </Typography>
                <Typography>
                    The Boolean() function converts a variable of any data type into it's boolean literal equivalent.
                </Typography>
                <BooleanTable />
                <Typography variant='display1'>Why is this important?</Typography>
                <Typography>
                    This casting to boolean literals is performed automatically within flow controls like <i>if statements</i>. Understanding the mappings here means that you will be able to work concisely with flow controls. For example :
                </Typography>
                <CodeBlock
                    gist_id="js-jslog/1f97ae4946a3c529283dd648e8c856f0"
                    file="bool_casting.js"
                >
                    <CodeBlockOutput>the Boolean() evaluation of the String true_bool ('false') is true</CodeBlockOutput>
                    <CodeBlockErrorOutput>Uncaught TypeError: Cannot read property 'length' of undefined</CodeBlockErrorOutput>
                </CodeBlock>
                <CodeBlock
                    gist_id="js-jslog/1f97ae4946a3c529283dd648e8c856f0"
                    file="bool_casting2.js"
                >
                    <CodeBlockOutput>the Boolean() evaluation of the String true_bool ('false') is true</CodeBlockOutput>
                    <CodeBlockOutput>undefined</CodeBlockOutput>
                </CodeBlock>
                <Typography>
                    In the first example above, the coder has decided to check for the length of the String in order to determine whether or not it has been set with a meaningful value. However their effort is wasted as both of these will produce the same output (printed above).
                </Typography>
                <Typography variant='title'>Complexity leads to errors</Typography>
                <Typography>
                    Additionally there is a bug in the first code block. The <Code>undefined</Code> literal does not contain a <Code>length</Code> property and evaluation of <Code>undefined.length;</Code> throws an error :
                </Typography>
                <Typography>
                    <Code inline error>Uncaught TypeError: Cannot read property 'length' of undefined(…)</Code> in Chrome45.0.
                </Typography>
                <Typography>
                    Evaluating an error inside an <i>if statement</i> will always produce a <Code inline>false</Code> result. As such, the bug will potentially go unnoticed.
                </Typography>
                <Typography variant='title'>Conclusion</Typography>
                <Typography>
                    The first solution will produce the same result as the second, but is less concise and as a result introduces the potential for bugs.
                </Typography>
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
