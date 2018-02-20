import React from 'react';
import {withStyles} from 'material-ui/styles';

import Figure, {FigureCaption} from '../../layout/figure/Figure.jsx';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import List, {ListItem} from 'material-ui/List';

const styles = theme => ({
});

const title = "Keywords and reserved words in Javascript";
const image = "keywords-and-reserved-words-in-javascript.jpg";
const link = "keywords-and-reserved-words-in-javascript";
const blurb = "A complete list of the reserved words in the ECMAScript definition up to 2015";
const published = true;

let id = 0;
function createData(keyword, explanation) {
      id += 1;
      return {id, keyword, explanation};
}
const edition1_data = [
    createData('break', 'Placeholder for when you put in loads of text. A sentence, like'),
    createData('continue', ''),
    createData('delete', ''),
    createData('else', ''),
    createData('for', ''),
    createData('function', ''),
    createData('if', ''),
    createData('in', ''),
    createData('new', ''),
    createData('return', ''),
    createData('this', ''),
    createData('typeof', ''),
    createData('var', ''),
    createData('void', ''),
    createData('while', ''),
    createData('with', ''),
    createData('case', ''),
    createData('case', ''),
    createData('catch', ''),
    createData('class', ''),
    createData('const', ''),
    createData('debugger', ''),
    createData('default', ''),
    createData('do', ''),
    createData('enum', ''),
    createData('export', ''),
    createData('extends', ''),
    createData('finally', ''),
    createData('import', ''),
    createData('super', ''),
    createData('switch', ''),
    createData('throw', ''),
    createData('try', ''),
];

const edition2_data = [
    createData('abstract', ''),
    createData('boolean', ''),
    createData('byte', ''),
    createData('char', ''),
    createData('double', ''),
    createData('final', ''),
    createData('float', ''),
    createData('goto', ''),
    createData('implements', ''),
    createData('instanceof', ''),
    createData('int', ''),
    createData('interface', ''),
    createData('long', ''),
    createData('native', ''),
    createData('package', ''),
    createData('private', ''),
    createData('protected', ''),
    createData('public', ''),
    createData('short', ''),
    createData('static', ''),
    createData('synchronized', ''),
    createData('throws', ''),
    createData('transient', ''),
    createData('volatile', ''),
];

const edition3_data = [
    createData('case', ''),
    createData('catch', ''),
    createData('default', ''),
    createData('do', ''),
    createData('finally', ''),
    createData('instanceof', ''),
    createData('switch', ''),
    createData('throw', ''),
    createData('try', ''),
];

const edition5_data = [
    createData('debugger', ''),
    createData('let', ''),
    createData('yield', ''),
    createData('implements', ''),
    createData('interface', ''),
    createData('package', ''),
    createData('private', ''),
    createData('protected', ''),
    createData('public', ''),
    createData('static', ''),
    createData('abstract', ''),
    createData('boolean', ''),
    createData('byte', ''),
    createData('char', ''),
    createData('double', ''),
    createData('final', ''),
    createData('float', ''),
    createData('goto', ''),
    createData('int', ''),
    createData('long', ''),
    createData('native', ''),
    createData('short', ''),
    createData('synchronized', ''),
    createData('throws', ''),
    createData('transient', ''),
    createData('volatile', ''),
];

const edition6_data = [
    createData('class', ''),
    createData('const', ''),
    createData('export', ''),
    createData('extends', ''),
    createData('import', ''),
    createData('super', ''),
    createData('yield', ''),
    createData('await', 'Only considered a FutureReservedWord when Module is the goal symbol of the syntactic grammar'),
];

const TableBuilder = function (props) {
    return (
      <div>
        <Typography variant='title'>{props.title}</Typography>
        <Figure>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Keyword</TableCell>
                        <TableCell>Explanation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.data.map(n => {
                    return (
                        <TableRow key={n.id}>
                            <TableCell>{n.keyword}</TableCell>
                            <TableCell>{n.explanation}</TableCell>
                        </TableRow>
                    );
                    })}
                    </TableBody>
                </Table>
            </Paper>
        </Figure>
      </div>
    );
}

function Edition1Table(props) {
  return <TableBuilder title='EMCA-262 edition 1 (June 1997)' data={edition1_data} />
}

function Edition2Table(props) {
  return <TableBuilder title='EMCA-262 edition 2 (August 1998)' data={edition2_data} />
}
function Edition3Table(props) {
  return <TableBuilder title='EMCA-262 edition 3 (December 1999)' data={edition3_data} />
}
function Edition5Table(props) {
  return <TableBuilder title='EMCA-262 edition 5 (June 2011)' data={edition5_data} />
}
function Edition6Table(props) {
  return <TableBuilder title='EMCA-262 edition 6 (June 2015)' data={edition6_data} />
}

const PageContents = () => (
  <div>
    <Typography>
      All you <em>need</em> to know about <i>keywords</i> & <i>reserved</i> words is that you must not use them as <i>identifiers</i>. That means no variable names, function names, property names or parameter names. But it helps to understand a little more, so what follows is a definition of the terms in this area and a description of their history.
    </Typography>
    <Typography variant='display1'>
      What is the relationship between keywords & reserved words?
    </Typography>
    <Typography>
      When people talk about <i>reserved words</i> they are often actually just referring to what are known as <i>future reserved words</i>. <i>Future reserved words</i> and <i>keywords</i> are in fact both members of a group called <i>reserved words</i>.
    </Typography>
    <Figure>
      <img src="/images/hierarchy.png" alt=""  />
      <FigureCaption>
        <i>Keywords</i> & <i>future reserved words</i> are both children of <i>reserved words</i>
      </FigureCaption>
    </Figure>
    <Typography>
      So in understanding each of these we should start with a definition & understanding of the term <i>reserved words</i>.
    </Typography>
    <Typography>
      The EMCA defines <i>reserved words</i> as <q cite="#bib05">[...] an <i>IdentifierName</i> that cannot be used as an <i>Identifier</i></q>, and that the set of reserved words is made up of the following :
    </Typography>
    <Typography>
      <List>
        <ListItem>
          <i>Keyword</i>
        </ListItem>
        <ListItem>
          <i>FutureReservedWord</i>
        </ListItem>
        <ListItem>
          <i>NullLiteral</i>
        </ListItem>
        <ListItem>
          <i>BooleanLiteral</i>
        </ListItem>
      </List>
    </Typography>
    <Typography>
      This definition has been the same since the very first edition of the EMCA-262 language specification. From within this group the <i>NullLiteral</i> and <i>BooleanLiteral</i> have predictably remained the same being defined as (<code>null</code>) and (<code>true</code> or <code>false</code>) respectively.
    </Typography>
    <Typography>
      So now we get onto the question most people will be interested in. <em>In the above definition, what is the difference between <i>Keyword</i> and <i>FutureReservedWord</i>?</em>
    </Typography>
    <Typography>
      The simple answer to this <em>is</em> quite simple. <i>Keywords</i> have a specific use permanently assigned to them and cannot be used as <i>identifiers</i> as doing so would make parsing significantly more difficult and probably not a deterministic task.
    </Typography>
    <Typography>
      <i>FutureReservedWords</i> are words which the ECMA Technical Committee #39 have decided may become <i>Keywords</i> in the future. As such they have set them as reserved in the language specification so that code developed with these limitations imposed can be assumed safe to run against yet-to-be developed implementations of later editions of ECMA-262.
    </Typography>
    <Edition1Table />
    <Edition2Table />
    <Edition3Table />
    <Edition5Table />
    <Edition6Table />
    <Typography variant='display1'>
      References
    </Typography>
    <Typography>
      <List>
        <ListItem id="bib01">
          <cite><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf">EMCA-262 1st edition specification</a></cite>
        </ListItem>
        <ListItem id="bib02">
          <cite><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%202nd%20edition,%20August%201998.pdf">EMCA-262 2nd edition specification</a></cite>
        </ListItem>
        <ListItem id="bib03">
          <cite><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf">EMCA-262 3rd edition specification</a></cite>
        </ListItem>
        <ListItem id="bib04">
          <cite><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-7.6.1">EMCA-262 5th edition specification</a></cite>
        </ListItem>
        <ListItem id="bib05">
          <cite><a href="http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf">EMCA-262 6th edition specification</a></cite>
        </ListItem>
      </List>
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
