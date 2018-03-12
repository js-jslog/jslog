import React from 'react';
import {withStyles} from 'material-ui/styles';
import { BlockQuote, BodyText, Caption, HeadingBlurb, HeadingTitle, SectionHeading, SectionSubheading } from '../../layout/typography/index.js';

import CodeBlock, {CodeBlockOutput, CodeBlockErrorOutput} from '../../layout/figure/CodeBlock.jsx';
import Code from '../../layout/typography/Code.jsx';
import PostContent from '../../layout/wrapping/PostContent.jsx';
import PostHeader from '../../layout/wrapping/PostHeader.jsx';
import Figure from '../../layout/figure/Figure.jsx';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import List, {ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';

const styles = theme => ({
});

const title = "Build a game with TDD";
const image = "index.jpg";
const link = "build-a-game-with-tdd";
const blurb = "A walkthrough of the development of a WingTron game";
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
        Here we will see the effect a TDD workflow has on application design by revisiting a game I created a few weeks ago. My coding ability may have improved slightly, but I expect an interesting deviation to arise purely from the use of the TDD workflow. This article will also serve as a simple demonstration of how to set up a basic project with version control in Git & GitHub and dependency management using bower.
      </HeadingBlurb>
      <HeadingBlurb>
    The original and modified games along with their source code can be found <Link to='tron-game'>here (original)</Link> & <Link to='wing-tron-game'>here (updated)</Link>
      </HeadingBlurb>
  </PostHeader>
  <PostContent>
  <SectionHeading>
    Introduction
  </SectionHeading>
  <BodyText>
    One of my earliest attempts at application development came in the form of <Link to='tron-game'>a game</Link>. I was quite proud of it at the time as I felt I had put a large number of decent development paradigms into action, and come up with a DRY application constructed diligently from 'the good parts' which I assumed would satisfy the open/closed principle & would be testable if I had invested any time in looking into that already.
  </BodyText>
  <BodyText>
    Some time has passed since then and although I have recognised one sever mistake in the modularisation of the application (a rookie error which inspired <Link to='modularisation-without-obstruction'>this article</Link>), I believe that its design is still comprehensible & effective.
  </BodyText>
  <BodyText>
    I am curious to know how the design will be effected by the use of a TDD workflow, so I am rewriting the game using this workflow. You can compare the codebases with the links found at the end of the opening paragraph of this article.
  </BodyText>
  <BodyText>
    As well as building the game we will be using version control, task automation, dependency management & following a TDD methodology.
  </BodyText>
  <BodyText>
    If you are not already familiar with Git, GitHub & Bower then I would recommend reading the links in my <Link to='professional-code-in-5-steps'>article on producing well managed code</Link> before attempting to walkthrough this process with me.
  </BodyText>
  <SectionHeading>
    Set up the project
  </SectionHeading>
  <BodyText>
    My <Link to='professional-code-in-5-steps'>experience with Yeoman</Link> had given me some example files which I thought best understood before consistently resorting to this automated method.
  </BodyText>
  <BodyText>
    First as I knew I would be using TDD I created two folders inside my project, a <Code>src</Code> folder containing one file, <Code>wingTron.js</Code> & a <Code>test</Code> folder containing <Code>wingTron.html</Code> to present the test results & <Code>wingTron_test.js</Code> to contain the tests themselves. Taking the test.html file produced by the template in the article linked above I updated wingTron.html with the following content :
  </BodyText>
  <CodeBlock
    gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
    file='markup.html'
  >
    <Caption>The starting wingTron.html file</Caption>
  </CodeBlock>
  <BodyText>
    Everything here makes sense, but we do not yet have a bower_components folder to contain the jQuery & QUnit files referenced here. The dependencies can be installed manually by running  <Code>bower install jquery</Code> & <Code>bower install qunit</Code> from inside the project folder, but better is to create a <Code>bower.json</Code> file which will allow us to define the dependencies for the project, and then install them with the more simple <Code>bower install</Code>.
  </BodyText>
  <BodyText>
    To create a bower.json file simply run <Code>bower init</Code> from the command prompt & the initialiser will ask a series of questions. At the time of writing the ' what types of modules does this package expose?' doesn't have an effect on the output file. It is supposed to modify the moduleType field, but here it is always left empty.
  </BodyText>
  <BodyText>
    Next we need to install the dependencies we have, and save this knowledge to our bower.json file to that all dependencies are recorded there. We can do these two steps for each dependency with a single command. So next type in <Code>bower install jquery --save</Code> & <Code>bower install qunit --save</Code>
  </BodyText>
  <BodyText>
    Here is what I ended up with :
  </BodyText>
  <CodeBlock
    gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
    file='bower.json'
  >
    <Caption>The bower.json file we create to let bower know what dependencies the project has for it to download</Caption>
  </CodeBlock>
  <BodyText>
    Using bower in this way allows us to commit just the <Code>bower.json</Code> file to the repository rather than the whole dependency folder. This reduces the size of the project and makes it more stable across different machines who may need different binaries of the dependencies for their operating syste, However, in order to prevent git from picking the bower_components folder up, we need to add a <Code>.gitignore</Code> file to the project root.
  </BodyText>
  <BodyText>
    Windows will not allow you to do this very easily through an explorer window. The easiest way to do it is by typing  <Code>echo /bower_components/ >> .gitignore</Code>. This will create the file with one entry which is all we need at the moment.
  </BodyText>
  <BodyText>
    Finally I created a local repository (<Code>git init</Code>), added all the candidate files & folder to it (<Code>git add -A</Code>), commit to the local repository (<Code>git commit -m "first commit"</Code>), connected with my remote repository (<Code>git remote add origin https://github.com/js-jslog/wingTron.git</Code>) and push the local repository up to the remote one (<Code>git push -u origin master</Code>).
  </BodyText>
  <SectionHeading>
    Development
  </SectionHeading>
  <BodyText>
    Now we are ready for the iterative process of developing the game. I am not going to replicate each of the iterations here. It would undoubtedly be a valuable resource for people trying to learn this, but it would take up a lot of space and I worry that the article would become unreadable without a better author at the hel, What I will do instead is describe a long list of requirements to satisfy a 'milestone' achievement, show all of the tests that were written when that milestone was reached then show all of the application code that was written to fulfil those tests.
  </BodyText>
  <SectionSubheading>
    Milestone 1. Minimum requirements
  </SectionSubheading>
  <BodyText>
    So for our first broad iteration, lets see what our minimum requirements from the 3 main components of the application are. First of all a definition of each of these components.
  </BodyText>
  <List>
    <ListItem>
      Field - an object which defines the boundaries of play
    </ListItem>
    <ListItem>
      Player - an object which moves within boundaries defined by the field. It must know it's location & whether it is alive. It must have the ability to turn left or right, and incrementally move forward, logging the points of the changes of direction as dictated by it's speed & direction. When a player is dead it must not move any longer
    </ListItem>
    <ListItem>
      Referee - an object which 'owns' the field and any number of players. It will define the timeline in which the player objects must move & inform the players when they have hit a wall or a path & consequentially mark them as dead.
    </ListItem>
  </List>
  <CodeBlock
    gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
    file='wingTron_test.js'
  >
    <Caption>The tests which we have after the first iteration</Caption>
  </CodeBlock>
  <CodeBlock
    gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
    file='wingTron.js'
  >
    <Caption>The code for the two modules which make up the field and the player objects</Caption>
  </CodeBlock>
  <BodyText>
    Before we go any further, since we have something that works & our next step is to refactor, we need to commit this work to version control. <Code>git add -A</Code>, <Code>git commit -m "First milestone. Minimum requirements"</Code>, <Code>git push -u origin master</Code>.
  </BodyText>
  <SectionSubheading>
    Refactor
  </SectionSubheading>
  <BodyText>
    Having reached our first milestone, it's time to reflect and refactor. I'm sure a number of criticisms could be levelled against the code I have produced, but the thing which really stood out to me were the following:
  </BodyText>
  <List>
    <ListItem>
      Pollution of the global namespace
    </ListItem>
    <ListItem>
      Pure functions being contained inside factory functions
    </ListItem>
  </List>
  <BodyText>
    These two issues are really part of 1 broader issue which is that of modularisation. While we have modularised our stateful functionality within objects specifically for that task, these objects are overexposed (to run a game we only need access to the a match object through use of the getMatch function. On top of this we have utility objects & functions which are either overexposed as well (radianLookup & pi), or are encapsulated inside a factory function, meaning that they will be created once for every call of that function & persist for the life of the object returned. This is because the execution context in which they were created will remain open while the object returned from that context is in use elsewhere in the application. As these are pure functions and do not rely on the objects state to function well this is a particular shame.
  </BodyText>
  <BodyText>
    We can summarise our goals for the refactoring in 2 statements.
  </BodyText>
  <List>
    <ListItem>
      Modularise the code so that only the matchFactory will be externally exposed, while leaving ALL modules APIs exposed for testing
    </ListItem>
    <ListItem>
      Place the pure functions & utility objects in a scope which shelters them from unnecessary access, and duplication, whilst being available where ever necessary
    </ListItem>
  </List>
  <BodyText>
    The solution to both of these requirements is to use a decent modularisation framework. I will be using RequireJS's AMD pattern framework.
  </BodyText>
  <BodyText>
    So first of all the sheltering of background APIs - that is those which the application does not need direct access to and sit behind at least one other layer of modules. In our case that will be fieldFactory, playerFactory & refereeFactory.
  </BodyText>
  <BodyText>
    This really is very simple. The first step is to create a new file for each of the functions we are converting to modules. That is fieldFactory.js, playerFactory.js, refereeFactory.js & matchFactory.js. These will replace wingTron.js eventually. If you are wondering where the pi & radianLookup variables will go, we will answer that soon.
  </BodyText>
  <BodyText>
    The fieldFactory & playerFactory modules have no dependencies, so we simply turn them into RequireJS modules by using the <Code>define</Code> keyword at the top & returning the <Code>getField</Code> or <Code>getPlayer</Code> function at the end.
  </BodyText>
  <Grid item xs={12} sm={6}>
  <CodeBlock
    gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
    file='fieldFactory.js'
  >
    <Caption>The fieldFactory.js file. Nothing surprising here.</Caption>
  </CodeBlock>
  </Grid>
  <Grid item xs={12} sm={6}>
    <CodeBlock
      gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
      file='playerFactory.js'
    >
      <Caption>The playerFactory.js file. Note that the pure functions have been moved from inside the getPlayer function body</Caption>
    </CodeBlock>
  </Grid>
  <BodyText>
    Simple enough. We have defined two modules which expose one function each. Note that in the playerFactory module we have moved the pure functions from the getPlayer function body to being independent local variables of the module. This means that they will only be created once when the module is used but will be available for use by all objects returned from the getPLayer function.
  </BodyText>
  <BodyText>
    Next, because the refereeFactory only receives field and player objects from the matchFactory, it doesn't actually have a dependency on the, The matchFactory however is dependent on all 3 of the former modules.
  </BodyText>
  <Grid item xs={12} sm={6}>
    <CodeBlock
      gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
      file='refereeFactory.js'
    >
      <Caption>The refereeFactory.js. Again, the pure function <Code>isPointWithinPath</Code> is encapsulated with the module and will only be loaded once</Caption>
    </CodeBlock>
  </Grid>
  <Grid item xs={12} sm={6}>
    <CodeBlock
      gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
      file='matchFactory.js'
    >
      <Caption>The matchFactory.js has dependencies on all 3 of the previously defined modules</Caption>
    </CodeBlock>
  </Grid>
  <BodyText>
    The test files only have a few simple changes. The wingTron_test.js file has been gutted to highlight where the changes are :
  </BodyText>
  <Grid item xs={12} sm={6}>
    <CodeBlock
      gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
      file='markup2.html'
    >
      <Caption>Only one line has been modified here to reference the require.js file we downloaded following the standard syntax for single entry point applications as ours will be</Caption>
    </CodeBlock>
  </Grid>
  <Grid item xs={12} sm={6}>
    <CodeBlock
      gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
      file='wingTron_test2.js'
    >
      <Caption>The tests here are simply wrapped in requirejs statements to define the dependencies these tests have. Even though the refereeFactory module itself doesn't have dependencies on fieldFactory & playerFactory, the tests do as we need to define new fileds & players for testing with.</Caption>
    </CodeBlock>
  </Grid>
  <BodyText>
    Before we move on, the modularity of the code now raises a question with the semantics we have in use. To get to the point, we are defining factory modules which are directly exposing the constructor function. This means that to get a player we access the getPlayer function directly. It would be much better if this function were contained within a factory object so that we access the constructor like so : playerFactory.getPlayer().
  </BodyText>
  <BodyText>
    Achieving this is as simple as returning an object literal of {`{getPlayer: getPlayer}`} rather than just returning the function itself. Following this we have to change the way that the module is handled by it's dependants. This is most apparent in the wingTron_test.js file where we have to append the factory object name to the front of every constructor function call. The following figures should make the changes in the modules clear & I have included the complete test file again so that you can copy all the changes if you wish. After this delete your src/wingTron.js file as we no longer need this and check that everything is ok with the unit tests.
  </BodyText>
  <Grid item xs={12} sm={6}>
    <CodeBlock
      gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
      file='fieldFactory2.js'
    >
      <Caption>Only the return statement is changed here</Caption>
    </CodeBlock>
  </Grid>
  <Grid item xs={12} sm={6}>
    <CodeBlock
      gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
      file='playerFactory2.js'
    >
      <Caption>Only the return statement is changed here</Caption>
    </CodeBlock>
  </Grid>
  <Grid item xs={12} sm={6}>
    <CodeBlock
      gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
      file='refereeFactory2.js'
    >
      <Caption>Only the return statement is changed here</Caption>
    </CodeBlock>
  </Grid>
  <Grid item xs={12} sm={6}>
    <CodeBlock
      gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
      file='matchFactory2.js'
    >
      <Caption>The return statement, the parameters which are passed in, and the use of those parameters has changed. This is what needs to be done to a much larger extent within wingTron_test.js.</Caption>
    </CodeBlock>
  </Grid>
  <CodeBlock
    gist_id='js-jslog/35a166646277f0d70b18c7815c0f5b51'
    file='wingTron_test3.js'
  >
    <Caption>Both the parameters which are passed into the requirejs function, and the use of those parameters has changed</Caption>
  </CodeBlock>
  <BodyText>
    I will endeavour to finish this guide, unfortunately now I have run out of time. You can finish the analysis yourself however by looking at the two codebases included in the links at the top of this article.
  </BodyText>
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
