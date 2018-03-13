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
import Grid from 'material-ui/Grid';
import List, {ListItem} from 'material-ui/List';

const styles = theme => ({
});

const title = "The ultimate pseudo-classical inheritance pattern";
const overlayColours = {
    text_colour: '#fff',
    background_colour: '#000',
};
const image = "ultimate-pseudo-classical-inheritance.jpg";
const link = "ultimate-pseudo-classical-inheritance";
const blurb = "A detailed examination of a less than ideal pattern";
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
        Getting to grips with inheritance in JavaScript is fundamental to mastering the language. It is so carelessly used by experienced programmers, probably because efforts have been made to give C derivative language developers a syntax which looks familiar.
      </BodyText>
      <BodyText>
        Technical committee 39 were well intentioned in designing the language this way, and it is a key reason JavaScript's proliferation of the web as the de-facto client side language that everyone can use, but no-one understands. The recent addition of <Code>Class</Code> will only compound these conflicting forces.
      </BodyText>
      <SectionHeading>
        The bright side
      </SectionHeading>
      <BodyText>
        For those willing to look a little deeper, the concept of <i>Class-like</i> inheritance in JavaScript is extremely nuanced and interesting. In the absence of <i>actual</i> classes, objects can fulfil a <i>pseudo-class-like</i> role, permitting <i>sub-types</i> to inherit methods and properties. We call this <i>pseudo-classical inheritance</i> and it's comprehension requires a detailed knowledge of how objects work. I advise looking in detail at the following custom reference type (object) & inheritance patterns :
      </BodyText>
      <Grid item xs={12} sm={6}>
        <SectionSubheading>
          Defining custom reference types
        </SectionSubheading>
        <List>
          <ListItem>
            Factory
          </ListItem>
          <ListItem>
            Constructor
          </ListItem>
          <ListItem>
            Prototype
          </ListItem>
          <ListItem>
            Combined constructor / prototype
          </ListItem>
          <ListItem>
            Dynamic prototype
          </ListItem>
          <ListItem>
            Parasitic prototype
          </ListItem>
          <ListItem>
            Durable
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SectionSubheading>
          Inheritance
        </SectionSubheading>
        <List>
          <ListItem>
            Prototype chaining
          </ListItem>
          <ListItem>
            Constructor stealing
          </ListItem>
          <ListItem>
            Combination inheritance
          </ListItem>
          <ListItem>
            Prototypal inheritance
          </ListItem>
          <ListItem>
            Parasitic prototypal inheritance
          </ListItem>
          <ListItem>
            Parasitic combination inheritance
          </ListItem>
        </List>
      </Grid>
      <BodyText>
        As ever, my key source is Nicolas C. Zakas book<sup>1</sup>, but I returned to a number of other sources over and over again as my understanding grew to really solidify these ideas, some through advocating the approach, some by criticising it. I can't recommend the sources in the reference section below highly enough.
      </BodyText>
      <SectionHeading>
        The self expression
      </SectionHeading>
      <BodyText>
        Naturally, having read all of that, I needed to try it out. Somewhat crudely I decided to jam as many of the patterns together as possible to replicate a classical model with as many of the benefits symptomatic of that as possible. I am reasonably happy with the result, but most importantly, I had to work on this for long enough that it had a significant impact to my understanding, and has become quite close to my heart. Depraved and defunct as I am sure it is.
      </BodyText>
      <SectionSubheading>
        Step 1 - build a super-type
      </SectionSubheading>
      <BodyText>
        I settled on the animal kingdom as many of us do at times like these.
      </BodyText>
      <CodeBlock
        gist_id="js-jslog/031b29e803acff157ee2c4e63a3ba1f3"
        file="ultimate_pseudoclassical_pattern.js"
      >
        <CodeBlockOutput>
          breathing
        </CodeBlockOutput>
        <CodeBlockOutput>
          happy birthday! now 30
        </CodeBlockOutput>
        <Caption>
          Initial definition of the Animal supertype
        </Caption>
      </CodeBlock>
      <BodyText>
        The key features here are :
      </BodyText>
      <List>
        <ListItem>
          An <Code>Object</Code> parameter which will give us flexibility for future extension. In the absence of overridden constructors this is a good alternative.
        </ListItem>
        <ListItem>
          Setting default values before setting those from the parameter object. Sticking with the combined constructor / prototype pattern.
        </ListItem>
        <ListItem>
          The Dynamic prototype pattern exists to allow us to define prototypes within the constructor definition. This is very class-like so I have included it here. It will later be abandoned however, for good reason
        </ListItem>
      </List>
      <BodyText>
        So a string start I think. Lots of ideas in there and something which looks quite class like.
      </BodyText>
      <SectionSubheading>
        Step 2 - create a subtype
      </SectionSubheading>
      <BodyText>
        A bear. This should be simple. No more principles to implement here, just the implementation of some default values for the <Code>species</Code> & <Code>sound properties</Code>, and an additional <Code>swipe</Code> method which will make use of an inherited property <Code>sound</Code>.
      </BodyText>
      <CodeBlock
        gist_id="js-jslog/031b29e803acff157ee2c4e63a3ba1f3"
        file="ultimate_pseudoclassical_pattern2.js"
      >
        <CodeBlockErrorOutput>
          Uncaught TypeError: bear.swipe is not a function(…)
        </CodeBlockErrorOutput>
        <CodeBlockErrorOutput>
          Uncaught TypeError: bear.respire is not a function(…)
        </CodeBlockErrorOutput>
        <Caption>
          The prototype chain is not created properly so the dynamic prototype pattern is a folly here
        </Caption>
      </CodeBlock>
      <BodyText>
        Scuppered! A very helpful individual on stack overflow helped me identify that the dynamic pattern will not work here. The reason being that by the time the <Code>Bear.prototype</Code> property has been set to <Code>Animal</Code>, an object has already been created by the <Code>new</Code> operator which shares a reference to the current reference of <Code>Bear.prototype</Code>. The <Code>bear</Code> instance maintains this reference even after the reference of <Code>Bear.prototype</Code> is changed to <Code>Animal</Code>.
      </BodyText>
      <BodyText>
        If we create another <Code>Bear</Code> instance it will have all the properties and correct prototype references as we expect.
      </BodyText>
      <BodyText>
        Thank you to Bergi who helped reduce this issue down to the common prototype resetting issue that it is - <a href="http://stackoverflow.com/questions/33035738/cannot-combine-dynamic-prototype-pattern-with-prototype-chaining">here</a>.
      </BodyText>
      <BodyText>
        This failure and the fact that in reality this form adds no clarity whatsoever has lead me to remove it from my list of techniques altogether. As Douglas Crockford says - <q cite="#bib6">We should prefer forms which are error resistant</q><sup>6</sup>.
      </BodyText>
      <SectionSubheading>
        Step3 - ditch the dynamic form
      </SectionSubheading>
      <CodeBlock
        gist_id="js-jslog/031b29e803acff157ee2c4e63a3ba1f3"
        file="ultimate_pseudoclassical_pattern3.js"
      >
        <CodeBlockOutput>
          swipe - 'Grr'
        </CodeBlockOutput>
        <CodeBlockOutput>
          breathing
        </CodeBlockOutput>
        <Caption>
          Bringing the <Code>prototype</Code> definitions outside the constructor makes the world of difference
        </Caption>
      </CodeBlock>
      <BodyText>
        As well as moving the prototype definitions outside of the constructor we have had to make a couple of changes relating to the passing of <Code>undefined</Code> parameters to the Animal constructor during the prototype chaining phase. This involves :
      </BodyText>
      <List>
        <ListItem>
          Removing the out of scope <Code>params</Code> variable from the <Code>Animal</Code> constructor call in the prototype chaining phase
        </ListItem>
        <ListItem>
          Adding a check to see if an argument has been passed to the <Code>Animal</Code> constructor before attempting to use it
        </ListItem>
      </List>
      <BodyText>
        We could equally well have simply passed an empty object literall (<Code>{}</Code>) into the constructor and done away with the check, but prudence is a virtue.
      </BodyText>
      <BodyText>
        Now this works very well but the <Code>Bear.prototype</Code> is still <Code>Animal</Code>. For this an many other reasons (which I will no go into but please refer to reference<sup>2</sup> below) we can throw in a parasitic prototypal inheritance pattern to improve the prototype chain.
      </BodyText>
      <CodeBlock
        gist_id="js-jslog/031b29e803acff157ee2c4e63a3ba1f3"
        file="ultimate_pseudoclassical_pattern4.js"
      >
        <CodeBlockOutput>
          swipe - 'Grr'
        </CodeBlockOutput>
        <CodeBlockOutput>
          breathing
        </CodeBlockOutput>
        <Caption>
          The combined (constructor / (parasitic prototypal prototype)) pseudo-classical inheritance pattern
        </Caption>
      </CodeBlock>
      <BodyText>
        Et voila. The combined (constructor / (parasitic prototypal prototype)) pseudo-classical inheritance pattern. It has it's faults and it only makes use of the patterns I have looked at in my book this week (a recently discovered <i>module pattern</i> would have replaced the dynamic prototype pattern nicely). I also suffers the myriad of issues highlighted with constructor patterns in general throughout the references and elsewhere these days. For example we can see that there is a strong dependency between the <Code>Animal</Code> and <Code>Bear</Code> types now, with the <Code>Bear.swipe</Code> method relying on the <Code>Animal</Code> constructor to set a <Code>sound</Code> property for it to be used.
      </BodyText>
      <BodyText>
        I'm sure there are also a number of subtle reasons to brand it an abomination which I won't even understand until I've got through to closures and the likes.
      </BodyText>
      <BodyText>
        However, those weaknesses asside. This model comes close to a classical approach offering the following :
      </BodyText>
      <List>
        <ListItem>
          Object type hierarchy
        </ListItem>
        <ListItem>
          Property and method inheritance
        </ListItem>
        <ListItem>
          Object constructor parameters allowing safe extension & a form of function overriding if required
        </ListItem>
        <ListItem>
          Prototypal inheritance allowing template objects to be used effectively as classes
        </ListItem>
      </List>
      <BodyText>
        It would be nice if we could add some instance property access restrictions by introducing the durable pattern. But due to the prototype chain necessarily feeding straight to object, this pattern cannot be used in combination with prototype chaining. I might expand on that point in the future, but I'm tired of writing and you must be tired of reading.
      </BodyText>
      <SectionHeading>
        References
      </SectionHeading>
      <List>
        <ListItem id="#bib1">
          <cite>Professional JavaScript for Web Developers, 3rd edition - chapter6</cite>
        </ListItem>
        <ListItem id="#bib2">
          <cite><a href="http://javascript.crockford.com/prototypal.html">Douglas Crockford's first proposal of prototypal inheritance</a></cite>
        </ListItem>
        <ListItem id="#bib3">
          <cite><a href="http://ericleads.com/2012/09/stop-using-constructor-functions-in-javascript/">Eric Elliott's critique of the use of constructors</a></cite>
        </ListItem>
        <ListItem id="#bib4">
          <cite><a href="http://ericleads.com/2013/02/fluent-javascript-three-different-kinds-of-prototypal-oo/">Eric Elliott being creative with prototypal inheritance</a></cite>
        </ListItem>
        <ListItem id="#bib5">
          <cite><a href="https://github.com/ericelliott/fluentjs1/blob/master/fluent-javascript.js">Eric Elliott giving a far more thorough overview than I have here</a></cite>
        </ListItem>
        <ListItem id="#bib6">
          <cite><a href="https://www.youtube.com/watch?v=_EANG8ZZbRs">Any of Douglas Crockfords talks on JavaScript on youtube. They are all excellent and revealing in their own way. Here's another example.</a></cite>
        </ListItem>
      </List>
    </PostContent>
  </div>
);

const StyledPageContents = withStyles(styles)(PageContents);
export {StyledPageContents}
export {title};
export {overlayColours};
export {image};
export {blurb};
export {link};
export {published};
export {date};
