import React from 'react';
import {withStyles} from 'material-ui/styles';

import CodeBlock, {CodeBlockOutput, CodeBlockErrorOutput} from '../../layout/figure/CodeBlock.jsx';
import { BlockQuote, BodyText, Caption, HeadingBlurb, HeadingTitle, SectionHeading, SectionSubheading } from '../../layout/typography/index.js';
import PostContent from '../../layout/wrapping/PostContent.jsx';
import PostHeader from '../../layout/wrapping/PostHeader.jsx';
import Grid from 'material-ui/Grid';
import Code from '../../layout/typography/Code.jsx';
import List, {ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';

const styles = theme => ({
});

const title = "Functions are objects too";
const image = "functions-are-objects-too.jpeg";
const link = "functions-are-objects-too";
const blurb = "An explanation of the history and power of functions as first class citizens in JavaScript";
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
This is a concept that many people struggle with. How can functions be objects? And what does that mean for the functions place within the language?
    </BodyText>
    <BodyText>
One of the reasons people struggle to accept this is because of the syntax differences. Objects are created through the use of constructors while functions are not. Well in fact this is not true, and understand this is the first step to felling comfortable with this concept. 
    </BodyText>
    <BodyText>
We all know that there are two ways of creating a function right?
    </BodyText>
  </PostContent>
  <PostContent wide>
    <Grid container spacing={12}>
      <Grid item xs={12} sm={6}>
        <CodeBlock
          parallel
          gist_id='js-jslog/4856ad531bf8955867a6b93b139b870d'
          file='functions_are_objects_too.js'
        >
        <Caption>The two sensible ways to create a function</Caption>
        </CodeBlock>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CodeBlock
          parallel
          gist_id='js-jslog/4856ad531bf8955867a6b93b139b870d'
          file='functions_are_objects_too2.js'
        >
        <Caption>The two sensible ways to create a function</Caption>
        </CodeBlock>
      </Grid>
    </Grid>
  </PostContent>
  <PostContent>
    <BodyText>
      Wrong! There is one further method. A constructor method which suddenly makes functions look a lot more like objects.
    </BodyText>
    <CodeBlock
      gist_id='js-jslog/4856ad531bf8955867a6b93b139b870d'
      file='functions_are_objects_too2.js'
    >
      <Caption>A constructor being employed to create a function <i>object</i></Caption>
    </CodeBlock>
    <BodyText>
      What this highlights is the following :
    </BodyText>
    <List>
      <ListItem>The <Code>addFunc</Code> variable is a pointer</ListItem>
      <ListItem>There is a <Code>Function()</Code> constructor</ListItem>
    </List>
    <BodyText>
      The idea that the <Code>addFunc</Code> variable is a pointer rather than a primitive should be easily digested. Given our two variable types (value & reference), a function hardly seems like a primitive value after all. However, the existence of a <Code>Function()</Code> constructor is relatively unknown. I suspect this is mostly due to the fact that at the elementary levels, JavaScript's syntax is heavily inspired by Java, where Objects are instantiated from Classes, inside which functions are defined as quite  separate entities, one of which is called the constructor.
    </BodyText>
    <BodyText>
But this is not Java. And while we can use a similar syntax for the creation of objects and functions, we need not. And it is this point at which we see the distinction between the Java way, and the JavaScript way.
    </BodyText>
    <BodyText>
      Object and array literal notation show that we need not use a constructor syntax. But they go even further as Nicholas Zaka points out ...
    </BodyText>
    <BlockQuote
      cite='#bib01'
    >
      When defining an object via object literal notation, the object constructor is never actually called [..]
    </BlockQuote>
    <BodyText>
      The preferred method of creating objects and arrays is to use literals where possible and Eric Elliot, the writer of Oreilly's <cite>Programming JavaScript Applications</cite> makes a strong case for <Link to="http://ericleads.com/2012/09/stop-using-constructor-functions-in-javascript/">avoiding the constructor pattern for object creation</Link> in all cases.
    </BodyText>
    <SectionHeading>
      The benefits
    </SectionHeading>
    <BodyText>
      Clearly Java and JavaScript are different, and the preference depends on the task at hand. One key implication for JavaScript, as a direct result of what we have discussed here is that overloading of functions is not possible.
    </BodyText>
    <BodyText>
      This is a consequence of the variable name alone acting as a pointer to the function object, rather than there being a complete function signature. he argument list is contained within the function object definition, and defining a function with a different argument list to the pointer will sever the pointers connection to the original function object.
    </BodyText>
    <BodyText>
Now this doesn't sound like an advantage, but from stinking turds, great oaks can grow and I have an example of a time when this behaviour made a task I needed to achieve very simple.
    </BodyText>
    <SectionHeading>
      Function overwriting example
    </SectionHeading>
    <SectionSubheading>
      The situation
    </SectionSubheading>
    <BodyText>
      We have a 3rd party JavaScript application running on our site which provides an API which we wish to call whenever a user clicks on an element on the page.
    </BodyText>
    <SectionSubheading>
      The problem
    </SectionSubheading>
    <BodyText>
      The API takes 5 seconds to load onto the page. How do we deal with clicks which occur within these 5 seconds
    </BodyText>
    <SectionSubheading>
      The answer
    </SectionSubheading>
    <BodyText>
      Call a self invoking recursive "dummy" function with the same name as our API method (<Code>lateFunction</Code>). When the API method becomes available the pointer <Code>lateFunction</Code> will be reassigned a new function, while the call stack will only know that it needs to once more call the function designated by <Code>lateFunction</Code>, which is now our API method.
    </BodyText>
    <BodyText>
      Throw in some checks & delays too avoid any infinite loops & too many recursions and there you have it.
    </BodyText>
    <CodeBlock
      gist_id='js-jslog/4856ad531bf8955867a6b93b139b870d'
      file='functions_are_objects_too4.js'
    >
      <CodeBlockOutput>API available. Parameter to log : Log this!!</CodeBlockOutput>
      <Caption>Demonstration of a buffer mechanism which takes advantage of JavaScript's lack of function overloading</Caption>
    </CodeBlock>
    <SectionHeading>
      References
    </SectionHeading>
    <List>
      <ListItem id='bib01'>
        <cite>Professional JavaScript for Web Developers, 3rd edition - pg105</cite>
      </ListItem>
    </List>
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
