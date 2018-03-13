import React from 'react';
import {withStyles} from 'material-ui/styles';
import Code from '../../layout/typography/Code.jsx';
import PostContent from '../../layout/wrapping/PostContent.jsx';
import PostHeader from '../../layout/wrapping/PostHeader.jsx';
import CodeBlock, {CodeBlockOutput, CodeBlockErrorOutput} from '../../layout/figure/CodeBlock.jsx';
import { BlockQuote, BodyText, Caption, HeadingBlurb, HeadingTitle, SectionHeading, SectionSubheading } from '../../layout/typography/index.js';
import {Link} from 'react-router-dom';
import Figure from '../../layout/figure/Figure.jsx';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import List, {ListItem} from 'material-ui/List';

let id = 0;
function createData1(input, rule, eg_in, eg_out) {
      id += 1;
      return {id, input, rule, eg_in, eg_out}
}
function createData2(base, input, output) {
      id += 1;
      return {id, base, input, output}
}
function createData3(input, output) {
      id += 1;
      return {id, input, output}
}

const number_conversion_data = [
    createData1('Number', 'Number types (apart from NaN - see below) are passed straight through the function unaffected', 'Number(5)', '5'),
    createData1('Number', 'Number types (apart from NaN - see below) are passed straight through the function unaffected', 'Number(Infinity)', 'Infinity'),
    createData1('Number', 'Number types (apart from NaN - see below) are passed straight through the function unaffected', 'Number(NaN)', 'NaN'),
    createData1('Boolean', 'true and false are converted to 1 & 0 respectively', 'Number(true)', '1'),
    createData1('Boolean', 'true and false are converted to 1 & 0 respectively', 'Number(false)', '0'),
    createData1('null', 'Returns 0', 'Number(null)', '0'),
    createData1('undefined', 'Returns NaN', 'Number(undefined)', 'NaN'),
    createData1('Strings', 'Strings containing only numbers will always be converted to decimals. Signs are accounted for & leading zeros are ignored', 'Number(\'1\')', '1'),
    createData1('Strings', 'Strings containing only numbers will always be converted to decimals. Signs are accounted for & leading zeros are ignored', 'Number(\'-1\')', '-1'),
    createData1('Strings', 'Strings containing only numbers will always be converted to decimals. Signs are accounted for & leading zeros are ignored', 'Number(\'0001\')', '1'),
    createData1('Strings', 'Strings containing valid floating-point formats are converted accordingly', 'Number(\'1.1\')', '1.1'),
    createData1('Strings', 'Strings containing valid floating-point formats are converted accordingly', 'Number(\'0001.1\')', '1.1'),
    createData1('Strings', 'Valid hexadecimal formats beginning with 0x will be converted to the appropriate integer', 'Number(\'0x1\')', '1'),
    createData1('Strings', 'Empty Strings are converted to 0', 'Number(\'\')', '0'),
    createData1('Strings', 'Any formates not matching these String rules will be converted to NaN', 'Number(\'true\')', 'NaN'),
    createData1('All', 'All white space before and after the evaluated parameter is ignored. Surprisingly, this includes white space after the sign if included', 'Number( 1 )', '1'),
    createData1('All', 'All white space before and after the evaluated parameter is ignored. Surprisingly, this includes white space after the sign if included', 'Number( - 1 )', '-1'),
    createData1('All', 'All white space before and after the evaluated parameter is ignored. Surprisingly, this includes white space after the sign if included', 'Number( \'   \'    )', '0'),
    createData1('All', 'All white space before and after the evaluated parameter is ignored. Surprisingly, this includes white space after the sign if included', 'Number( \'   0x1 \'    )', '1'),
    createData1('All', 'Anything not matching any of the rules above will throw a syntax error', 'Number( 5 5 )', 'Uncaught SyntaxError: missing ) after argument list'),
];

const parseint_conversion_data = [
    createData1('Strings', '1. Leading white space and 0\'s are ignored', 'parseInt(\'    001\')', '1'),
    createData1('Strings', '2. If the first character isn\'t a number or a sign, a NaN is returned', 'parseInt(\'    .1\')', 'NaN'),
    createData1('Strings', '2. If the first character isn\'t a number or a sign, a NaN is returned', 'parseInt(\'\')', 'NaN (Note: different to Number)'),
    createData1('Strings', '3. If the first character is a number or sign, the string is evaluated until either the end of the string, or the first non-numeric character (excpet in the special cases below', 'parseInt(\'    +1\')', '1'),
    createData1('Strings', '3. If the first character is a number or sign, the string is evaluated until either the end of the string, or the first non-numeric character (excpet in the special cases below', 'parseInt(\'    +1test\')', '1'),
    createData1('Strings', '3. If the first character is a number or sign, the string is evaluated until either the end of the string, or the first non-numeric character (excpet in the special cases below', 'parseInt(\'1.1\')', '1 (Note: . is an invalid character in the parseInt sequence'),
    createData1('Strings', 'Special cases exist which break the above rules to some extent','',''), 
    createData1('Strings', 'Step 3 behaves differently if the first 2 characters are 0x. The rest of the string is evaluated as a hexadecimal until the first non-hexadecimal character is met, at which point it stops parsing like in step 3','parseInt(\'0x1\')','1'), 
    createData1('Strings', 'Step 3 behaves differently if the first 2 characters are 0x. The rest of the string is evaluated as a hexadecimal until the first non-hexadecimal character is met, at which point it stops parsing like in step 3','parseInt(\'0x1test\'','1'), 
    createData1('Strings', 'If the number looks like an octal literal then in ECMAScript3 it will be interpreted as such, while in ECMAScript5 it will be interpreted as a decimal (therefore according to the standard rules)','',''), 
    createData1('Strings', 'ECMAScript5','parseInt(\'010\')','10'), 
    createData1('Strings', 'ECMAScript3','parseInt(\'010\')','8'),
];

const radix_conversion_data = [
    createData2('Binary', 'parseInt(\'011\', 2)', '3'),
    createData2('Octal', 'parseInt(\'017\', 8)', '15'),
    createData2('Decimal', 'parseInt(\'019\', 10)', '19'),
    createData2('Hexadecimal', 'parseInt(\'01f\', 16)', '31'),
];

const parseFloat_conversion_data = [
  createData3('parseFloat(\'1.1\')', '1.1'),
  createData3('parseFloat(\'01.1\')', '1.1'),
  createData3('parseFloat(\'1.1test\')', '1.1'),
  createData3('parseFloat(\'1.1.1\')', '1.1'),
  createData3('parseFloat(\'11\', 2)', '11'),
  createData3('parseFloat(\'0x1\')', '0'),
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
            <Caption>
              Rules for converting various types to numbers using the Number() function
            </Caption>
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
            <Caption>
              Rules for converting various types to numbers using the parseInt() function
            </Caption>
        </Figure>
    );
}

const RadixConversionTable = function () {
  return (
    <Figure>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Base</TableCell>
              <TableCell>Input</TableCell>
              <TableCell>Output</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {radix_conversion_data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>{n.base}</TableCell>
                  <TableCell>{n.input}</TableCell>
                  <TableCell>{n.output}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      <Caption>The effect of the <i>radix</i> on parseInt() string interpretation</Caption>
    </Figure>
  );
}

const ParseFloatConversionTable = function () {
  return (
    <Figure>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Input</TableCell>
              <TableCell>Output</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {parseFloat_conversion_data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>{n.input}</TableCell>
                  <TableCell>{n.output}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      <Caption>The use of decimal points in the parseFloat() function</Caption>
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
const date = new Date('01/01/2016');

const PageContents = () => (
  <div>
    <PostHeader>
      <HeadingTitle>
        {title}
      </HeadingTitle>
      <HeadingBlurb>
        {blurb}
      </HeadingBlurb>
    </PostHeader>
    <PostContent>
      <BodyText>
        Type conversion is at the heart of JavaScript's flexibility. The earlier article on the type conversion implicit in flow control statements discussed the <a href="boolean_function">Boolean() casting function</a> demonstrated how various types are converted to the boolean type. Converting to the numeric type is one of the most common conversions you will come across in JavaScript development. However despite its ease of use, it is not necessarily as straight forward as it appears.
      </BodyText>
      <SectionHeading>
        3 Functions
      </SectionHeading>
      <BodyText>
        There are 3 functions with which you can convert to numeric values :
      </BodyText>
      <List>
        <ListItem>Number()</ListItem>
        <ListItem>parseInt()</ListItem>
        <ListItem>parseFloat()</ListItem>
      </List>
      <BodyText>
        The rules governing each of these may be most simply understood in the following tables.
      </BodyText>
      <SectionHeading>
        Number()
      </SectionHeading>
      <NumberConversionTable />
      <BodyText>
        We are about to see a pair of much more reliable conversion functions. However it is important to understand the Number() function as <i>it is the function which defines the auto-casting to numbers when using bitwise operators</i>.
      </BodyText>
      <SectionHeading>
        parseInt()
      </SectionHeading>
      <BodyText>
        The parsInt() function behaves the same as the Number() function, other than it's effect on strings. For strings it will convert according to the following rules:
        <detail>The rules are applied in the order listed. If a rule does not apply, the next rule will be applied.</detail>
      </BodyText>
      <ParseIntConversionTable />
      <BodyText>
        As you can see there is a lot of potential confusion involved in using parseInt() with number formats which are up for interpretation. To avoid this & because you are likely to know what format your number should be coming in, even if it might look like another format, an additional parameter is available for the parseInt() function. This parameter enables you to define what base the number coming in should be interpreted in. It is called the <i>radix</i>.
      </BodyText>
      <RadixConversionTable />
      <SectionHeading>
        parseFloat()
      </SectionHeading>
      <BodyText>
        The parseFloat() function operates in the same way as parseInt() except that it has <b>no radix parameter</b>, only accepts <b>decimal form</b> at at stage 3 it will also accept a <b>single decimal point</b> followed once again only by numeric characters.
      </BodyText>
      <ParseFloatConversionTable />
    </PostContent>
  </div>
);

const StyledPageContents = withStyles(styles)(PageContents);
export {StyledPageContents}
export {title};
export {image};
export {blurb};
export {link};
export {published};
export {date};
