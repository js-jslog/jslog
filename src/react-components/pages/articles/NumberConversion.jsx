import React from 'react';
import {withStyles} from 'material-ui/styles';

import CodeBlock, {CodeBlockOutput, CodeBlockErrorOutput} from '../../layout/code/CodeBlock.jsx';
import Code from '../../layout/code/Code.jsx';
import Figure, {FigureCaption} from '../../layout/figure/Figure.jsx';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import List, {ListItem} from 'material-ui/List';

let id = 0;
function createData(input, rule, eg_in, eg_out) {
      id += 1;
      return {id, input, rule, eg_in, eg_out}
}

const number_conversion_data = [
    createData('Number', 'Number types (apart from NaN - see below) are passed straight through the function unaffected', 'Number(5)', '5'),
    createData('Number', 'Number types (apart from NaN - see below) are passed straight through the function unaffected', 'Number(Infinity)', 'Infinity'),
    createData('Number', 'Number types (apart from NaN - see below) are passed straight through the function unaffected', 'Number(NaN)', 'NaN'),
    createData('Boolean', 'true and false are converted to 1 & 0 respectively', 'Number(true)', '1'),
    createData('Boolean', 'true and false are converted to 1 & 0 respectively', 'Number(false)', '0'),
    createData('null', 'Returns 0', 'Number(null)', '0'),
    createData('undefined', 'Returns NaN', 'Number(undefined)', 'NaN'),
    createData('Strings', 'Strings containing only numbers will always be converted to decimals. Signs are accounted for & leading zeros are ignored', 'Number(\'1\')', '1'),
    createData('Strings', 'Strings containing only numbers will always be converted to decimals. Signs are accounted for & leading zeros are ignored', 'Number(\'-1\')', '-1'),
    createData('Strings', 'Strings containing only numbers will always be converted to decimals. Signs are accounted for & leading zeros are ignored', 'Number(\'0001\')', '1'),
    createData('Strings', 'Strings containing valid floating-point formats are converted accordingly', 'Number(\'1.1\')', '1.1'),
    createData('Strings', 'Strings containing valid floating-point formats are converted accordingly', 'Number(\'0001.1\')', '1.1'),
    createData('Strings', 'Valid hexadecimal formats beginning with 0x will be converted to the appropriate integer', 'Number(\'0x1\')', '1'),
    createData('Strings', 'Empty Strings are converted to 0', 'Number(\'\')', '0'),
    createData('Strings', 'Any formates not matching these String rules will be converted to NaN', 'Number(\'true\')', 'NaN'),
    createData('All', 'All white space before and after the evaluated parameter is ignored. Surprisingly, this includes white space after the sign if included', 'Number( 1 )', '1'),
    createData('All', 'All white space before and after the evaluated parameter is ignored. Surprisingly, this includes white space after the sign if included', 'Number( - 1 )', '-1'),
    createData('All', 'All white space before and after the evaluated parameter is ignored. Surprisingly, this includes white space after the sign if included', 'Number( \'   \'    )', '0'),
    createData('All', 'All white space before and after the evaluated parameter is ignored. Surprisingly, this includes white space after the sign if included', 'Number( \'   0x1 \'    )', '1'),
    createData('All', 'Anything not matching any of the rules above will throw a syntax error', 'Number( 5 5 )', 'Uncaught SyntaxError: missing ) after argument list'),
];

const parseint_conversion_data = [
    createData('Strings', '1. Leading white space and 0\'s are ignored', 'parseInt(\'    001\')', '1'),
    createData('Strings', '2. If the first character isn\'t a number or a sign, a NaN is returned', 'parseInt(\'    .1\')', 'NaN'),
    createData('Strings', '2. If the first character isn\'t a number or a sign, a NaN is returned', 'parseInt(\'\')', 'NaN (Note: different to Number)'),
    createData('Strings', '3. If the first character is a number or sign, the string is evaluated until either the end of the string, or the first non-numeric character (excpet in the special cases below', 'parseInt(\'    +1\')', '1'),
    createData('Strings', '3. If the first character is a number or sign, the string is evaluated until either the end of the string, or the first non-numeric character (excpet in the special cases below', 'parseInt(\'    +1test\')', '1'),
    createData('Strings', '3. If the first character is a number or sign, the string is evaluated until either the end of the string, or the first non-numeric character (excpet in the special cases below', 'parseInt(\'1.1\')', '1 (Note: . is an invalid character in the parseInt sequence'),
    createData('Strings', 'Special cases exist which break the above rules to some extent','',''), 
    createData('Strings', 'Step 3 behaves differently if the first 2 characters are 0x. The rest of the string is evaluated as a hexadecimal until the first non-hexadecimal character is met, at which point it stops parsing like in step 3','parseInt(\'0x1\')','1'), 
    createData('Strings', 'Step 3 behaves differently if the first 2 characters are 0x. The rest of the string is evaluated as a hexadecimal until the first non-hexadecimal character is met, at which point it stops parsing like in step 3','parseInt(\'0x1test\'','1'), 
    createData('Strings', 'If the number looks like an octal literal then in ECMAScript3 it will be interpreted as such, while in ECMAScript5 it will be interpreted as a decimal (therefore according to the standard rules)','',''), 
    createData('Strings', 'ECMAScript5','parseInt(\'010\')','10'), 
    createData('Strings', 'ECMAScript3','parseInt(\'010\')','8'),
];

const NumberConversionTable = function () {
    return (
        <Figure>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Input</TableCell>
                        <TableCell>Rule Applied</TableCell>
                        <TableCell>Examples : IN</TableCell>
                        <TableCell>OUT</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {number_conversion_data.map(n => {
                    return (
                        <TableRow key={n.id}>
                            <TableCell>{n.input}</TableCell>
                            <TableCell>{n.rule}</TableCell>
                            <TableCell>{n.eg_in}</TableCell>
                            <TableCell>{n.eg_out}</TableCell>
                        </TableRow>
                    );
                    })}
                    </TableBody>
                </Table>
            </Paper>
        </Figure>
    );
}

const ParseIntConversionTable = function () {
  return (
        <Figure>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Input</TableCell>
                        <TableCell>Rule Applied</TableCell>
                        <TableCell>Examples : IN</TableCell>
                        <TableCell>OUT</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {parseint_conversion_data.map(n => {
                    return (
                        <TableRow key={n.id}>
                            <TableCell>{n.input}</TableCell>
                            <TableCell>{n.rule}</TableCell>
                            <TableCell>{n.eg_in}</TableCell>
                            <TableCell>{n.eg_out}</TableCell>
                        </TableRow>
                    );
                    })}
                    </TableBody>
                </Table>
            </Paper>
        </Figure>
    );
}

const styles = theme => ({
});

const title = "Number conversion";
const image = "number-conversion.jpg";
const link = "number-conversion";
const blurb = "A look at number conversion in JavaScript";
const published = true;

const PageContents = () => (
  <div>
    <Typography>
Type conversion is at the heart of JavaScript's flexibility. The earlier article on the type conversion implicit in flow control statements discussed the <a href="boolean_function">Boolean() casting function</a> demonstrated how various types are converted to the boolean type. Converting to the numeric type is one of the most common conversions you will come across in JavaScript development. However despite its ease of use, it is not necessarily as straight forward as it appears.
</Typography>
<Typography variant='display1'>
  3 Functions
</Typography>
<Typography>
There are 3 functions with which you can convert to numeric values :
<ul>
<li>Number()</li>
<li>parseInt()</li>
<li>parseFloat()</li>
</ul>
The rules governing each of these may be most simply understood in the following tables.
</Typography>
<Typography variant='display1'>
  Number()
</Typography>
  <Figure>
    <NumberConversionTable />
    <FigureCaption>
      Rules for converting various types to numbers using the Number() function
    </FigureCaption>
  </Figure>
  <Typography>
We are about to see a pair of much more reliable conversion functions. However it is important to understand the Number() function as <i>it is the function which defines the auto-casting to numbers when using bitwise operators</i>.
</Typography>
<Typography variant='display1'>
  parseInt()
</Typography>
<Typography>
The parsInt() function behaves the same as the Number() function, other than it's effect on strings. For strings it will convert according to the following rules:
<detail>The rules are applied in the order listed. If a rule does not apply, the next rule will be applied.</detail>
  </Typography>
  <Figure>
    <ParseIntConversionTable />
    <FigureCaption>
      Rules for converting various types to numbers using the parseInt() function
    </FigureCaption>
  </Figure>
  <Typography>
As you can see there is a lot of potential confusion involved in using parseInt() with number formats which are up for interpretation. To avoid this & because you are likely to know what format your number should be coming in, even if it might look like another format, an additional parameter is available for the parseInt() function. This parameter enables you to define what base the number coming in should be interpreted in. It is called the <i>radix</i>.
</Typography>
  <Typography>
<figure>
<table className="table">
<tbody>
 <tr>
  <th>Base</th>
  <th>Input</th>
  <th>Output</th>
 </tr>
 <tr>
  <td>Binary</td>
  <td><code>parseInt("011", 2)</code></td>
  <td><output>3</output></td>
 </tr>
 <tr>
  <td>Octal</td>
  <td><code>parseInt("017", 8)</code></td>
  <td><output>15</output></td>
 </tr>
 <tr>
  <td>Decimal</td>
  <td><code>parseInt("019", 10)</code></td>
  <td><output>19</output></td>
 </tr>
 <tr>
  <td>Hexadecimal</td>
  <td><code>parseInt("01f", 16)</code></td>
  <td><output>31</output></td>
 </tr>
</tbody>
</table>
<figcaption>The effect of the <i>radix</i> on parseInt() string interpretation</figcaption>
</figure>
  </Typography>
  <Typography variant='display1'>
    parseFloat()
  </Typography>
<Typography>
The parseFloat() function operates in the same way as parseInt() except that it has <b>no radix parameter</b>, only accepts <b>decimal form</b> at at stage 3 it will also accept a <b>single decimal point</b> followed once again only by numeric characters.
</Typography>
  <Typography>
<figure>
<table className="table">
<tbody>
 <tr>
  <th>Input</th>
  <th>Output</th>
 </tr>
 <tr>
  <td><code>parseFloat("1.1")</code></td>
  <td><output>1.1</output></td>
 </tr>
 <tr>
  <td><code>parseFloat("01.1")</code></td>
  <td><output>1.1</output></td>
 </tr>
 <tr>
  <td><code>parseFloat("1.1test")</code></td>
  <td><output>1.1</output></td>
 </tr>
 <tr>
  <td><code>parseFloat("1.1.1")</code></td>
  <td><output>1.1</output></td>
 </tr>
 <tr>
  <td><code>parseFloat("11", 2)</code></td>
  <td><output>11</output></td>
 </tr>
 <tr>
  <td><code>parseFloat("0x1")</code></td>
  <td><output>0</output></td>
 </tr>
</tbody>
</table>
<figcaption>The use of decimal points in the parseFloat() function</figcaption>
</figure>
  </Typography>
          </div>
);

const StyledPageContents = withStyles(styles)(PageContents);
export {StyledPageContents}
export {title};
export {image};
export {blurb};
export {link};
export {published};
