import React from 'react';
import {withStyles} from 'material-ui/styles';
import Code from '../../layout/code/Code.jsx';
import CodeBlock, {CodeBlockOutput, CodeBlockErrorOutput} from '../../layout/code/CodeBlock.jsx';
import Typography from 'material-ui/Typography';
import List, {ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';
import Figure, {FigureCaption} from '../../layout/figure/Figure.jsx';

const styles = theme => ({
});

const title = "Iterative array methods";
const image = "iterative-array-methods.jpg";
const link = "iterative-array-methods";
const blurb = "A rundown of the 5 higher order iterative functions which exist on Arrays as of ES2015";
const published = true;

const PageContents = () => (
  <div>
    <Typography>
      Amongst the functionality offered by JavaScript core which the casual developer may be unaware of, are the iterative methods for array objects. These offer verbose ways of performing tasks or drawing conclusions on whole arrays without the need for developer defined loops.
    </Typography>
    <Typography>
      The simplicity of these tasks may account for why so many people are unaware of the, However, having these functions under your belt will save an enormous amount of time in the long run and also standardise your code for improved maintainability.
    </Typography>
    <Typography>
      The functions
    </Typography>
    <Typography>
      <List>
        <ListItem>
          <Link to='#everyMethod'>every</Link> - check whether <b>all</b> elements of an array match a criteria
        </ListItem>
        <ListItem>
          <Link to='#someMethod'>some</Link> - check whether <b>some</b> elements of an array match a criteria
        </ListItem>
        <ListItem>
          <Link to='#filterMethod'>filter</Link> - return a copy of the original array <b>containing only the elements which match a criteria</b>
        </ListItem>
        <ListItem>
          <Link to='#mapMethod'>map</Link> - return a copy of the original with a <b>transform applied to each element</b>
        </ListItem>
        <ListItem>
          <Link to='#foreachMethod'>forEach</Link> - iterate through each element of an array
        </ListItem>
      </List>
    </Typography>
    <Typography variant='display1'>
      The arguments
    </Typography>
    <Typography>
      As each of the methods works by a similar principle, each of the methods takes the same arguments
    </Typography>
    <Typography>
      <List>
        <ListItem>
          a function which itself takes 3 arguments :
        </ListItem>
        <List>
          <ListItem>
            item - the item which is the subject of this iteration
          </ListItem>
          <ListItem>
            index - the index this item is within the array
          </ListItem>
          <ListItem>
            array - the array itself
          </ListItem>
        </List>
        <ListItem>
          These parameters are used within the function to create a return value - the purpose of which varies depending on the function being used.
        </ListItem>
        <ListItem>
          an optional scope object which affects the value of <Code>this</Code>
        </ListItem>
      </List>
    </Typography>
    <Typography variant='display1'>
      Syntax
    </Typography>
    <CodeBlock
      gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
      file='iterative_array_methods.js'
    >
      <FigureCaption>The syntax of an iterative method applied to an array. Where - arrayName : array being iterated over, &lt;method&gt; : the method being applied, &lt;some&gt; logic> : the logic applied to each element of the array</FigureCaption>
    </CodeBlock>
    <Typography>
      The logic determining the return value can be anything at all, but it makes sense that it be based on the value of the <Code>item</Code> under question. More complicated criteria may require that you also observe the <Code>index</Code> and / or <Code>array</Code> arguments.
    </Typography>
    <Typography variant='display1'>
      Examples
    </Typography>
    <Typography>
      As ever, examples will make this significantly easier to explain & understand
    </Typography>
    <Typography id='everyMethod' variant='display2'>
      The <Code>every</Code> method
    </Typography>
    <Typography>
      The <Code>every</Code> method will return true if all of its iterations return true on the criteria defined in the function.
    </Typography>
    <CodeBlock
      gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
      file='iterative_array_methods2.js'
    >
      <CodeBlockOutput>false</CodeBlockOutput>
    </CodeBlock>
    <Typography>
      In this case we are asking whether the item under question in each iteration is less than 2. As all but one of these iterations returns false, the <Code>every</Code> method will return false for this input.
    </Typography>
    <Typography id='someMethod' variant='display2'>
      The <Code>some</Code> method
    </Typography>
    <Typography>
      The <Code>some</Code> method will return true if any of its iterations return true on the criteria defined in the function.
    </Typography>
    <CodeBlock
      gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
      file='iterative_array_methods3.js'
    >
      <CodeBlockOutput>true</CodeBlockOutput>
    </CodeBlock>
    <Typography id='filterMethod' variant='display2'>
      The <Code>filter</Code> method
    </Typography>
    <Typography>
      The <Code>filter</Code> method will return an array which includes all of the elements from the original array which meet the criteria defined in the function argument.
    </Typography>
    <CodeBlock
      gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
      file='iterative_array_methods4.js'
    >
      <CodeBlockOutput>[1]</CodeBlockOutput>
    </CodeBlock>
    <Typography id='mapMethod' variant='display2'>
      The <Code>map</Code> method
    </Typography>
    <Typography>
      The <Code>map</Code> method will return an array composed of the result of the function arguments logic applied to each of the original arrays elements in turn.
    </Typography>
    <CodeBlock
      gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
      file='iterative_array_methods5.js'
    >
      <CodeBlockOutput>[true, false, false, false, false, false, false, false, false]</CodeBlockOutput>
    </CodeBlock>
    <Typography id='foreachMethod' variant='display2'>
      The <Code>forEach</Code> method
    </Typography>
    <Typography>
      The <Code>forEach</Code> method simply acts as a convenient operator for iterating through all of the elements in an array. It does not return a value and should be used simply as a way to gain access to each element in the array.
    </Typography>
    <CodeBlock
      gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
      file='iterative_array_methods6.js'
    >
      <CodeBlockOutput>undefined</CodeBlockOutput>
    </CodeBlock>
    <Typography>
      The <Code>forEach</Code> is a little different to the others as it does not return a result. As such you are likely to either be using it to assign values to another variable you have previously defined or updating the input array itself. Note however, when modifying the elements of the array, it is more reliable to access the <Code>numbers[index]</Code> rather than using the <Code>item</Code> variable.
    </Typography>
    <Typography>
      This is because the values passed into the "function argument's" argument's are passed by value rather than reference (as is the case with all function arguments). In short this means that <Code>item</Code> is a copy of the array element, stored in a different memory location. Changes to this value do not change the value in the array.
    </Typography>
    <Typography>
      There is one nuance to this worth mentioning. If the element of the array being iterated over is a <i>reference type</i> itself. That is, it is a pointer to an <i>object</i> elsewhere in memory, then when a copy of that pointer is passed into the function, the new pointer will also be pointing to the same object as the element in the original array.
    </Typography>
    <Typography>
      In this case it is possible to effect the values represented in the original array by gaining access to the same object by a new pointer.
    </Typography>
    <CodeBlock
      gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
      file='iterative_array_methods7.js'
    >
      <CodeBlockOutput>{'{[{name : "notjoe"}, {age : 29, name : "notjoe"}, 3, 4, 5, 6, 7, 8, 9]}'}</CodeBlockOutput>
    </CodeBlock>
    <Typography>
      This works because we are using our new pointer to update an existing object.
    </Typography>
    <Typography>
      If we were to sever the connection to the existing object & assign our new pointer to a new object, then any changes we make to this object are not reflected on the object in the original array.
    </Typography>
    <CodeBlock
      gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
      file='iterative_array_methods8.js'
    >
      <CodeBlockOutput>{'{[{name : "joe"}, {age : 29}, 3, 4, 5, 6, 7, 8, 9]}'}</CodeBlockOutput>
    </CodeBlock>
  </div>
);

const StyledPageContents = withStyles(styles)(PageContents);
export {StyledPageContents}
export {title};
export {image};
export {blurb};
export {link};
export {published};
