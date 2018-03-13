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

const styles = theme => ({
});

const title = "Loops or array-methods";
const image = "loops-or-array-methods.jpg";
const link = "loops-or-array-methods";
const blurb = "A discussion on the pros and cons of loops vs array methods";
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
      <HeadingBlurb>
        After writing the article on <Link to="/iterative-array-methods">iterative array methods</Link> I heard Douglas Crockford at a Nordic JS event state that he <Link to="https://www.youtube.com/watch?v=PSGEjv3Tqo0#t=10m54s">no longer uses <Code>for</Code> loops</Link><sup>1</sup>.
      </HeadingBlurb>
    </PostHeader>
    <PostContent>
      <BodyText>
        Now, I love the language subset idea espoused by Douglas that it is a developers duty to use only the good parts of a language. It is a mature and sensible approach to progressing languages which must maintain support for defunct features. Abandoning the <Code>for</Code> loop felt like a bold step & one which I was willing to take so I investigated further.
      </BodyText>
      <SectionHeading>
        Expressiveness
      </SectionHeading>
      <BodyText>
        Douglas' only point during his brief comment on this subject was with regards to expressiveness. <q cite="#bib01">For was invented originally for Fortran to deal with arrays. We don't need those in JavaScript any more, we can do Array's with methods, and it's so much cleaner & so much better</q>. He's not very specific here but I think his intention is clear. Lets compare a for loop and an array method.
      </BodyText>
      <Grid item xs={12} sm={6}>
        <CodeBlock
          gist_id='js-jslog/118717af64ecdfda830a894fad6bdbb3'
          file='loops_or_array_methods.js'
        >
          <CodeBlockOutput>2</CodeBlockOutput>
          <Caption>Counting occurences within an array using <Code>for</Code> loop</Caption>
        </CodeBlock>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CodeBlock
          gist_id='js-jslog/118717af64ecdfda830a894fad6bdbb3'
          file='loops_or_array_methods2.js'
        >
          <CodeBlockOutput>2</CodeBlockOutput>
          <Caption>Counting occurrences within an array using <Code>forEach</Code> method</Caption>
        </CodeBlock>
      </Grid>
      <BodyText>
        The <Code>forEach</Code> method is really the direct counterpart of the for loop. As you can see we still need to perform all of the same logic within the iterating logic. The additional verbosity of having the words 'for' and 'each' in the method name might be debatable to seasoned programmers of any type as we have all become used to deciphering for loops on sight, but the slight reduction in cognitive load may be valuable when trying to grasp a complex piece of code.
      </BodyText>
      <Grid item xs={12} sm={6}>
        <CodeBlock
          gist_id='js-jslog/118717af64ecdfda830a894fad6bdbb3'
          file='loops_or_array_methods3.js'
        >
          <CodeBlockOutput>true</CodeBlockOutput>
          <figcaption>Using a <Code>for</Code> loop to determine whether both a blue and green exist inside the array and then exiting as soon as a conclusion has been reached.</figcaption>
        </CodeBlock>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CodeBlock
          gist_id='js-jslog/118717af64ecdfda830a894fad6bdbb3'
          file='loops_or_array_methods4.js'
        >
          <CodeBlockOutput>true</CodeBlockOutput>
          <Caption>Using a pair of <Code>some</Code> methods to determine whether the array contains blue & then green.</Caption>
        </CodeBlock>
      </Grid>
      <BodyText>
        These two solutions are not equivalent. In the first we are looping through the array once, keeping track of green & blue & breaking out once we know we have an answer, while in the second we loop through once for each value. However, this would be a natural approach to using the two different methods & the difference in clarity is striking.
      </BodyText>
      <BodyText>
        If running through the array twice is an issue for speed then we would probably want to use the <Code>for</Code> loop. How likely this is, is addressed in the next section.
      </BodyText>
      <SectionHeading>
        Efficiency
      </SectionHeading>
      <BodyText>
        Even without the structural differences like the one above, it appears that Array methods are significantly slower than the <Code>for</Code> loop. A demonstration of this at <Link to="https://jsperf.com/for-vs-foreach/37">jsPerf</Link> shows <Code>for</Code> loops to be more than twice as fast in a simple summing task on my machine running chrome 45.0.
      </BodyText>
      <BodyText>
        However, reading around in the community this seems to be an acceptable trade off in most cases. Ben Hollis writes an excellent article investigating the <Link to="http://benhollis.net/blog/2009/12/13/investigating-javascript-array-iteration-performance/">relative speeds of various methods</Link><sup>3</sup> including those included in the jQuery and Underscore libraries. He is very disappointed in the speeds of the Array methods, but still concludes that they will be his preferred approach unless iterating over very large arrays.
      </BodyText>
      <SectionHeading>
        <Code>continue</Code> & <Code>break</Code>?
      </SectionHeading>
      <BodyText>
        Some people have suggested that the inability to use <Code>continue</Code> & <Code>break</Code> within Array methods leaves them short of a feature present in for loops. Technically speaking this is correct. However that isn't to say that you are always committed to iterating over the whole array (<Code>break</Code>) or performing all of the logic (<Code>continue</Code>).
      </BodyText>
      <BodyText>
        You can exit the logic within an of the methods by returning for that iteration. That is the point of returning - you have determined what you need from applying the logic to this array ite,
      </BodyText>
      <BodyText>
        The <Code>some</Code> exists for the very purpose of only checking some of the array. If we add some logging code to our previous example you can see that the array is never checked in full.
      </BodyText>
      <CodeBlock
        gist_id='js-jslog/118717af64ecdfda830a894fad6bdbb3'
        file='loops_or_array_methods4.js'
      >
        <CodeBlockOutput>true</CodeBlockOutput>
        <Caption>Demonstrating that the <Code>some</Code> method will not check the whole array if it is not necessary.</Caption>
      </CodeBlock>
      <SectionHeading>
        Conclusion
      </SectionHeading>
      <BodyText>
        At the end of the day, Array iteration is a very fast process whichever method you use. If Array iteration is the only thing that your application is doing then you will still see performance benefits from using <Code>for</Code> loops and may consider using them still. Otherwise you will find improved readability and cleanness from a short investment in  <Link to="/iterative-array-methods">learning the Array iteration methods</Link>.
      </BodyText>
      <SectionHeading>
        References
      </SectionHeading>
      <List>
        <ListItem id="bib01"><cite><Link to="https://www.youtube.com/watch?v=PSGEjv3Tqo0#t=10m54s">Douglas Crockford : The Better Parts - Nordic JS 2014. 10m54s</Link></cite></ListItem>
        <ListItem id="bib02"><cite><Link to="https://jsperf.com/for-vs-foreach/37">jsPerf - for vs forEach</Link></cite></ListItem>
        <ListItem id="bib03"><cite><Link to="http://benhollis.net/blog/2009/12/13/investigating-javascript-array-iteration-performance/">BenHollis.net - Investigating JavaScript Array Iteration Performance</Link></cite></ListItem>
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
