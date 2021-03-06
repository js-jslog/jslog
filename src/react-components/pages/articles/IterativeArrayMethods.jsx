import React from 'react';
import {withStyles} from 'material-ui/styles';
import Code from '../../layout/typography/Code.jsx';
import PostContent from '../../layout/wrapping/PostContent.jsx';
import PostHeader from '../../layout/wrapping/PostHeader.jsx';
import CodeBlock, {CodeBlockOutput, CodeBlockErrorOutput} from '../../layout/figure/CodeBlock.jsx';
import { BlockQuote, BodyText, Caption, HeadingBlurb, HeadingTitle, SectionHeading, SectionSubheading } from '../../layout/typography/index.js';
import List, {ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';


const styles = theme => ({
  left_listbox: {
    width: theme.scales.primary.p4,
    display: 'table-cell',
  },
  right_listbox: {
    display: 'table-cell',
  },
});

const title = "Iterative array methods";
const image = "iterative-array-methods.jpg";
const link = "iterative-array-methods";
const blurb = "A rundown of the 5 higher order iterative functions which exist on Arrays as of ES2015";
const published = true;
const date = new Date('01/01/2016');

class PageContents extends React.Component {
  render () {
    const {classes} = this.props;
    return (
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
            Amongst the functionality offered by JavaScript core which the casual developer may be unaware of, are the iterative methods for array objects. These offer verbose ways of performing tasks or drawing conclusions on whole arrays without the need for developer defined loops.
          </BodyText>
          <BodyText>
            The simplicity of these tasks may account for why so many people are unaware of the, However, having these functions under your belt will save an enormous amount of time in the long run and also standardise your code for improved maintainability.
          </BodyText>
          <SectionHeading>
            The functions
          </SectionHeading>
          <List>
            <ListItem>
              <div className={classes.left_listbox}>
                <Link to='#everyMethod'>every</Link>
              </div>
              <div className={classes.right_listbox}>
                check whether all elements of an array match a criteria
              </div>
            </ListItem>
            <ListItem>
              <div className={classes.left_listbox}>
                <Link to='#someMethod'>some</Link>
              </div>
              <div className={classes.right_listbox}>
                check whether some elements of an array match a criteria
              </div>
            </ListItem>
            <ListItem>
              <div className={classes.left_listbox}>
                <Link to='#filterMethod'>filter</Link>
              </div>
              <div className={classes.right_listbox}>
                return a copy of the original array containing only the elements which match a criteria
              </div>
            </ListItem>
            <ListItem>
              <div className={classes.left_listbox}>
                <Link to='#mapMethod'>map</Link>
              </div>
              <div className={classes.right_listbox}>
                return a copy of the original with a transform applied to each element
              </div>
            </ListItem>
            <ListItem>
              <div className={classes.left_listbox}>
                <Link to='#foreachMethod'>forEach</Link>
              </div>
              <div className={classes.right_listbox}>
                iterate through each element of an array
              </div>
            </ListItem>
          </List>
          <SectionHeading>
            The arguments
          </SectionHeading>
          <BodyText>
            As each of the methods works by a similar principle, each of the methods takes the same arguments
          </BodyText>
          <List>
            <ListItem>
              a function which itself takes 3 arguments :
              <ol>
                <li>
                  item - the item which is the subject of this iteration
                </li>
                <li>
                  index - the index this item is within the array
                </li>
                <li>
                  array - the array itself
                </li>
              </ol>
            </ListItem>
            <ListItem>
              These parameters are used within the function to create a return value - the purpose of which varies depending on the function being used.
            </ListItem>
            <ListItem>
              an optional scope object which affects the value of <Code>this</Code>
            </ListItem>
          </List>
          <SectionHeading>
            Syntax
          </SectionHeading>
          <CodeBlock
            gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
            file='iterative_array_methods.js'
          >
            <Caption>The syntax of an iterative method applied to an array. Where - arrayName : array being iterated over, &lt;method&gt; : the method being applied, &lt;some&gt; logic> : the logic applied to each element of the array</Caption>
          </CodeBlock>
          <BodyText>
            The logic determining the return value can be anything at all, but it makes sense that it be based on the value of the <Code>item</Code> under question. More complicated criteria may require that you also observe the <Code>index</Code> and / or <Code>array</Code> arguments.
          </BodyText>
          <SectionHeading>
            Examples
          </SectionHeading>
          <BodyText>
            As ever, examples will make this significantly easier to explain & understand
          </BodyText>
          <div id='everyMethod'>
            <SectionSubheading>
              The <Code>every</Code> method
            </SectionSubheading>
          </div>
          <BodyText>
            The <Code>every</Code> method will return true if all of its iterations return true on the criteria defined in the function.
          </BodyText>
          <CodeBlock
            gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
            file='iterative_array_methods2.js'
          >
            <CodeBlockOutput>false</CodeBlockOutput>
          </CodeBlock>
          <BodyText>
            In this case we are asking whether the item under question in each iteration is less than 2. As all but one of these iterations returns false, the <Code>every</Code> method will return false for this input.
          </BodyText>
          <div id='someMethod'>
            <SectionSubheading>
              The <Code>some</Code> method
            </SectionSubheading>
          </div>
          <BodyText>
            The <Code>some</Code> method will return true if any of its iterations return true on the criteria defined in the function.
          </BodyText>
          <CodeBlock
            gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
            file='iterative_array_methods3.js'
          >
            <CodeBlockOutput>true</CodeBlockOutput>
          </CodeBlock>
          <div id='filterMethod'>
            <SectionSubheading>
              The <Code>filter</Code> method
            </SectionSubheading>
          </div>
          <BodyText>
            The <Code>filter</Code> method will return an array which includes all of the elements from the original array which meet the criteria defined in the function argument.
          </BodyText>
          <CodeBlock
            gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
            file='iterative_array_methods4.js'
          >
            <CodeBlockOutput>[1]</CodeBlockOutput>
          </CodeBlock>
          <SectionSubheading id='mapMethod' variant='display2'>
            The <Code>map</Code> method
          </SectionSubheading>
          <BodyText>
            The <Code>map</Code> method will return an array composed of the result of the function arguments logic applied to each of the original arrays elements in turn.
          </BodyText>
          <CodeBlock
            gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
            file='iterative_array_methods5.js'
          >
            <CodeBlockOutput>[true, false, false, false, false, false, false, false, false]</CodeBlockOutput>
          </CodeBlock>
          <div id='foreachMethod'>
            <SectionSubheading>
              The <Code>forEach</Code> method
            </SectionSubheading>
          </div>
          <BodyText>
            The <Code>forEach</Code> method simply acts as a convenient operator for iterating through all of the elements in an array. It does not return a value and should be used simply as a way to gain access to each element in the array.
          </BodyText>
          <CodeBlock
            gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
            file='iterative_array_methods6.js'
          >
            <CodeBlockOutput>undefined</CodeBlockOutput>
          </CodeBlock>
          <BodyText>
            The <Code>forEach</Code> is a little different to the others as it does not return a result. As such you are likely to either be using it to assign values to another variable you have previously defined or updating the input array itself. Note however, when modifying the elements of the array, it is more reliable to access the <Code>numbers[index]</Code> rather than using the <Code>item</Code> variable.
          </BodyText>
          <BodyText>
            This is because the values passed into the "function argument's" argument's are passed by value rather than reference (as is the case with all function arguments). In short this means that <Code>item</Code> is a copy of the array element, stored in a different memory location. Changes to this value do not change the value in the array.
          </BodyText>
          <BodyText>
            There is one nuance to this worth mentioning. If the element of the array being iterated over is a <i>reference type</i> itself. That is, it is a pointer to an <i>object</i> elsewhere in memory, then when a copy of that pointer is passed into the function, the new pointer will also be pointing to the same object as the element in the original array.
          </BodyText>
          <BodyText>
            In this case it is possible to effect the values represented in the original array by gaining access to the same object by a new pointer.
          </BodyText>
          <CodeBlock
            gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
            file='iterative_array_methods7.js'
          >
            <CodeBlockOutput>{'{[{name : "notjoe"}, {age : 29, name : "notjoe"}, 3, 4, 5, 6, 7, 8, 9]}'}</CodeBlockOutput>
          </CodeBlock>
          <BodyText>
            This works because we are using our new pointer to update an existing object.
          </BodyText>
          <BodyText>
            If we were to sever the connection to the existing object & assign our new pointer to a new object, then any changes we make to this object are not reflected on the object in the original array.
          </BodyText>
          <CodeBlock
            gist_id='js-jslog/14214f5e221b52427d2ea1f41b68d72b'
            file='iterative_array_methods8.js'
          >
            <CodeBlockOutput>{'{[{name : "joe"}, {age : 29}, 3, 4, 5, 6, 7, 8, 9]}'}</CodeBlockOutput>
          </CodeBlock>
          </PostContent>
      </div>
    );
  }
}

const StyledPageContents = withStyles(styles)(PageContents);
export {StyledPageContents}
export {title};
export {image};
export {blurb};
export {link};
export {published};
export {date};
