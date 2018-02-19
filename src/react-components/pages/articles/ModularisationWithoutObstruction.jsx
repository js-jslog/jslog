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

const styles = theme => ({
});

const title = "Modularisation without obstruction";
const image = "modularisation-without-obstruction.jpg";
const link = "modularisation-without-obstruction";
const blurb = "An introductory look at the progressing field of modularisation in JavaScript";
const published = true;

const PageContents = () => (
  <div>
    <Typography>
      During my first attempts at using module patterns I was very concerned with the issue of reducing my application's exposed API. Douglas Crockford's advice to reducing code's exposed API through use of closures was at the forefront of my mind and I gave little consideration to the other side of module patterns. Namely, the modularity element. It seems like an obvious point, but let me illustrate my mistake.
    </Typography>
    <Typography>
      After studying the <Link to="http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html">module pattern</Link> for a while, you might be tempted to create an application which looks something like this :
    </Typography>
    <CodeBlock
      gist_id='js-jslog/6a79de3a4d8f8b57661b42ef3fe88ee4'
      file='modularisation_without_obstruction.js'
    >
      <CodeBlockOutput>module1</CodeBlockOutput>
      <CodeBlockOutput>module2</CodeBlockOutput>
      <FigureCaption>A 'modular' design which does not permit unit testing</FigureCaption>
    </CodeBlock>
    <Typography>
      We have achieved encapsulation of our functionality, and reduced the size of our exposed API to as little as possible. The code is modular to the extent that if I wanted to replace module 2's implementation, I know where I would need to do my rewrite. However, this is not the limit of what we have available to us with modular patterns.
    </Typography>
    <Typography>
      Hiding implementations inside an application wrapper is not the solution. Proper modular design will have your modules <i>loaded</i> into the application rather than being written into the, This way the module exists outside of the application and is therefore exposed for testing purposes, but once loaded into some other code, can be shielded from the global namespace by that codes API.
    </Typography>
    <Grid item xs={12} sm={6}>
      <Figure>
        <img src="/images/modular-by-wrapping-implementation.png" />
        <FigureCaption>
          This code is taking advantage of the module pattern, but creating modules inside calling code leaves those modules beyond reach of any unit testing framework
        </FigureCaption>
      </Figure>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Figure>
        <img src="/images/modular-proper.png" />
        <FigureCaption>
          module1.js & module2.js API will not be accessible by the global context when they are running inside the application.js code, but they are still distinct units whose API's can therefore still be tested from outside the application context
        </FigureCaption>
      </Figure>
    </Grid>
    <Typography>
      Our example above should be rewritten then, like this (using RequireJS syntax):
    </Typography>
    <CodeBlock
      gist_id='js-jslog/6a79de3a4d8f8b57661b42ef3fe88ee4'
      file='modularisation_without_obstruction2.js'
    >
      <CodeBlockOutput>
        module1
      </CodeBlockOutput>
      <CodeBlockOutput>
        module2
      </CodeBlockOutput>
      <FigureCaption>
        A 'modular' design which does permit unit testing
      </FigureCaption>
    </CodeBlock>
    <Typography>
      Even if you are not familiar with RequireJS yet the idea here should be clear enough. Our modules are now properly decoupled from the application code, we have the ability to test them and they are still not exposed to the global namespace when in the context of the running application.
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
