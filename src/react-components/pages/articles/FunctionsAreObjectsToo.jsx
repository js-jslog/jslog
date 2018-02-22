import React from 'react';
import {withStyles} from 'material-ui/styles';

import CodeBlock, {CodeBlockOutput, CodeBlockErrorOutput} from '../../layout/code/CodeBlock.jsx';
import Code from '../../layout/code/Code.jsx';
import Figure, {FigureCaption} from '../../layout/figure/Figure.jsx';
import BlockQuote from '../../layout/quote/BlockQuote.jsx';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import List, {ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';

const styles = theme => ({
});

const title = "Functions are objects too";
const image = "functions-are-objects-too.jpeg";
const link = "functions-are-objects-too";
const blurb = "An explanation of the history and power of functions as first class citizens in JavaScript";
const published = true;

const PageContents = () => (
  <div>
    <Typography>
This is a concept that many people struggle with. How can functions be objects? And what does that mean for the functions place within the language?
    </Typography>
    <Typography>
One of the reasons people struggle to accept this is because of the syntax differences. Objects are created through the use of constructors while functions are not. Well in fact this is not true, and understand this is the first step to felling comfortable with this concept. 
    </Typography>
    <Typography>
We all know that there are two ways of creating a function right?
    </Typography>
    <Grid item xs={12} sm={6}>
      <CodeBlock
        gist_id='js-jslog/4856ad531bf8955867a6b93b139b870d'
        file='functions_are_objects_too.js'
      >
      <FigureCaption>The two sensible ways to create a function</FigureCaption>
      </CodeBlock>
    </Grid>
    <Grid item xs={12} sm={6}>
      <CodeBlock
        gist_id='js-jslog/4856ad531bf8955867a6b93b139b870d'
        file='functions_are_objects_too2.js'
      >
      <FigureCaption>The two sensible ways to create a function</FigureCaption>
      </CodeBlock>
    </Grid>
    <Typography>
      Wrong! There is one further method. A constructor method which suddenly makes functions look a lot more like objects.
    </Typography>
    <CodeBlock
      gist_id='js-jslog/4856ad531bf8955867a6b93b139b870d'
      file='functions_are_objects_too2.js'
    >
      <FigureCaption>A constructor being employed to create a function <i>object</i></FigureCaption>
    </CodeBlock>
    <Typography>
      What this highlights is the following :
    </Typography>
    <Typography>
    <List>
      <ListItem>The <Code>addFunc</Code> variable is a pointer</ListItem>
      <ListItem>There is a <Code>Function()</Code> constructor</ListItem>
    </List>
    </Typography>
    <Typography>
      The idea that the <Code>addFunc</Code> variable is a pointer rather than a primitive should be easily digested. Given our two variable types (value & reference), a function hardly seems like a primitive value after all. However, the existence of a <Code>Function()</Code> constructor is relatively unknown. I suspect this is mostly due to the fact that at the elementary levels, JavaScript's syntax is heavily inspired by Java, where Objects are instantiated from Classes, inside which functions are defined as quite  separate entities, one of which is called the constructor.
    </Typography>
    <Typography>
But this is not Java. And while we can use a similar syntax for the creation of objects and functions, we need not. And it is this point at which we see the distinction between the Java way, and the JavaScript way.
    </Typography>
    <Typography>
Object and array literal notation show that we need not use a constructor syntax. But they go even further as Nicholas Zaka points out ...
    </Typography>
    <BlockQuote
      cite='#bib01'
    >
      When defining an object via object literal notation, the object constructor is never actually called [..]
    </BlockQuote>
    <Typography>
      The preferred method of creating objects and arrays is to use literals where possible and Eric Elliot, the writer of Oreilly's <cite>Programming JavaScript Applications</cite> makes a strong case for <Link to="http://ericleads.com/2012/09/stop-using-constructor-functions-in-javascript/">avoiding the constructor pattern for object creation</Link> in all cases.
    </Typography>
    <Typography variant='title'>
      The benefits
    </Typography>
    <Typography>
      Clearly Java and JavaScript are different, and the preference depends on the task at hand. One key implication for JavaScript, as a direct result of what we have discussed here is that overloading of functions is not possible.
    </Typography>
    <Typography>
      This is a consequence of the variable name alone acting as a pointer to the function object, rather than there being a complete function signature. he argument list is contained within the function object definition, and defining a function with a different argument list to the pointer will sever the pointers connection to the original function object.
    </Typography>
    <Typography>
Now this doesn't sound like an advantage, but from stinking turds, great oaks can grow and I have an example of a time when this behaviour made a task I needed to achieve very simple.
    </Typography>
    <Typography variant='title'>
      Function overwriting example
    </Typography>
    <Typography variant='subtitle'>
      The situation
    </Typography>
    <Typography>
      We have a 3rd party JavaScript application running on our site which provides an API which we wish to call whenever a user clicks on an element on the page.
    </Typography>
    <Typography variant='subtitle'>
      The problem
    </Typography>
    <Typography>
      The API takes 5 seconds to load onto the page. How do we deal with clicks which occur within these 5 seconds
    </Typography>
    <Typography variant='subtitle'>
      The answer
    </Typography>
    <Typography>
      Call a self invoking recursive "dummy" function with the same name as our API method (<Code>lateFunction</Code>). When the API method becomes available the pointer <Code>lateFunction</Code> will be reassigned a new function, while the call stack will only know that it needs to once more call the function designated by <Code>lateFunction</Code>, which is now our API method.
    </Typography>
    <Typography>
      Throw in some checks & delays too avoid any infinite loops & too many recursions and there you have it.
    </Typography>
    <CodeBlock
      gist_id='js-jslog/4856ad531bf8955867a6b93b139b870d'
      file='functions_are_objects_too4.js'
    >
      <CodeBlockOutput>API available. Parameter to log : Log this!!</CodeBlockOutput>
      <FigureCaption>Demonstration of a buffer mechanism which takes advantage of JavaScript's lack of function overloading</FigureCaption>
    </CodeBlock>
    <Typography variant='display1'>
      References
    </Typography>
    <Typography>
      <List>
        <ListItem id='bib01'>
          <cite>Professional JavaScript for Web Developers, 3rd edition - pg105</cite>
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
