import React from 'react';
import Link from '../../layout/nav/Link.jsx';
import CodeBlock from '../../layout/figure/CodeBlock.jsx';
import { Caption, BodyText, HeadingBlurb, HeadingTitle, SectionHeading, SectionSubheading } from '../../layout/typography/index.js';
import PostContent from '../../layout/wrapping/PostContent.jsx';
import PostHeader from '../../layout/wrapping/PostHeader.jsx';
import {withStyles} from 'material-ui/styles';
import Code from '../../layout/typography/Code.jsx';
import List, {ListItem} from 'material-ui/List';

const title = "Dotfiles Multiplexer";
const link = "dotfiles-multiplexer";
const blurb = "Motivation for a new solution to dotfile management"
const published = true;
const date = new Date('04/06/2018');
const styles = theme => ({
  error: {
    color: theme.palette.error.main,
  },
});

class PageContents extends React.Component {
  render() {
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
            Managing &amp; maintaining your personal configuration files can be hard enough. But when your circumstance require you to make changes, how do you avoid creating divergent repositories?
          </BodyText>
          <SectionHeading>
            Picture this
          </SectionHeading>
          <BodyText>
            Here&apos;s a scenario, composed of some very mild assumptions:
          </BodyText>
          <BodyText>
            <List>
              <ListItem>
                You use git
              </ListItem>
              <ListItem>
                You have configured git with your user id &amp; email
              </ListItem>
              <ListItem>
                You don&apos;t enjoy running <Code>git config --global user.name &quot;your name&quot;</Code> so you have a version controlled <Code>.gitconfig</Code> for portability
              </ListItem>
              <ListItem>
                You have a job
              </ListItem>
              <ListItem>
                Your office has a firewall which git must be configured to use
              </ListItem>
              <ListItem className={classes.error}>
                You have a second version controlled <Code>.gitconfig</Code> which contains both your user credentials &amp; the firewall config
              </ListItem>
            </List>
          </BodyText>
          <BodyText>
            Now you have a problem. You had a second configuration requirement, but rather than creating a repository with a lean configuration file describing that requirement alone, you created a repository with an instance of one of the permutations of your two requirements. That is, your needs combined with the office needs.
          </BodyText>
          <SectionHeading>
            There&apos;s no maintaining this
          </SectionHeading>
          <BodyText>
            Here&apos;s why this is a problem:
          </BodyText>
          <BodyText>
            <List>
              <ListItem>
                You have two places to maintain each of your personal configuration files already
              </ListItem>
              <ListItem>
                Every new team member needs to copy the proxy requirement into another unique repository.
              </ListItem>
            </List>
          </BodyText>
          <SectionHeading>
            The alternative is worse
          </SectionHeading>
          <BodyText>
            The reason this happens is understandable. It&apos;s convenient to have a couple of repositories with deployment scripts for the couple of contexts you find yourself working in. And it&apos;s inconvenient to have a couple of repositories which you have to combine when you find yourself in a context which requires them both. <b>Afterall, you&apos;d have to write a deployment script for each different combination of those requirements.</b>
          </BodyText>
          <SectionHeading>
            No longer!
          </SectionHeading>
          <BodyText>
            Inspired by the observations of the author of <Link to='https://www.anishathalye.com/2014/08/03/managing-your-dotfiles/'>dotbot</Link>, I have created an application to combine the configuration files from multiple repositories.
          </BodyText>
          <BodyText>
            This means that you can have a single set of configurations for each context you work in, and the only thing that needs to vary is the configuration file which defines which files from which repositories need to be combined in which order.
          </BodyText>
          <BodyText>
            And if you name your personal configuration folders the same as your colleagues that configuration file can be shared with your whole team because everyone will be combining the same contexts.
          </BodyText>
          <SectionHeading>
            A demonstration
          </SectionHeading>
          <SectionSubheading>
            The self
          </SectionSubheading>
          <BodyText>
            Joe is a software developer. He is a tinkerer and an optimiser. Naturally he has highly personalised <Code>.vimrc</Code> &amp; <Code>.tmux.conf</Code> files.
          </BodyText>
          <CodeBlock
            gist_id="js-jslog/128ffb51b5635c527d4761074cfd35ca"
            file="self_vimrc"
          >
          </CodeBlock>
          <BodyText>
            He also has a <Code>.gitconfig</Code> file which contains the essentials for identifying himself.
          </BodyText>
          <CodeBlock
            gist_id="js-jslog/128ffb51b5635c527d4761074cfd35ca"
            file="self_gitconfig"
          >
          </CodeBlock>
          <BodyText>
            Finally, Joe has a deployment script which will create symbolic links in all the necessary places, to the configuration files he has in this repository.
          </BodyText>
          <CodeBlock
            gist_id="js-jslog/128ffb51b5635c527d4761074cfd35ca"
            file="self_deploy.sh"
          >
            <Caption>
              A shell script to create symbolic links from the dotfiles expeceted locations to the version controlled files in Joe&apos;s repository
            </Caption>
          </CodeBlock>
          <BodyText>
            This repository fulfills Joe&apos;s requirement to identify himself and satisfy his habits while developing software. But in a moment his requirements will change.
          </BodyText>
          <SectionSubheading>
            The office
          </SectionSubheading>
          <BodyText>
            Joe works in an office behind a firewall. The office also enforces a 4 space indentation code standard which Joe hates and doesn&apos;t want anywhere near his github profile. The office provide a repository with the relevant configuration files for this set of requirements.
          </BodyText>
          <CodeBlock
            gist_id="js-jslog/128ffb51b5635c527d4761074cfd35ca"
            file="office_vimrc"
          >
            <Caption>
              A .vimrc to configure vim to automatically indent lines by 4 spaces
            </Caption>
          </CodeBlock>
          <CodeBlock
            gist_id="js-jslog/128ffb51b5635c527d4761074cfd35ca"
            file="office_gitconfig"
          >
            <Caption>
              A .gitconfig file to configure git to use a proxy for it&apos;s http connections
            </Caption>
          </CodeBlock>
          <CodeBlock
            gist_id="js-jslog/128ffb51b5635c527d4761074cfd35ca"
            file="office_sshconf"
          >
            <Caption>
              A .ssh/config file configuring OpenSSH to communicate via a proxy when connecting to github
            </Caption>
          </CodeBlock>
          <BodyText>
            Joe&apos;s first thought is to fork this repository and add his configuration to it. However he resents the idea of having to maintain a second repository. Especially one with a 4 space configuration in it.
          </BodyText>
          <BodyText>
            Joe discovers the dotfiles-multiplexer and writes the following script for his office context.
          </BodyText>
          <CodeBlock
            gist_id="js-jslog/128ffb51b5635c527d4761074cfd35ca"
            file="office_deploy.sh"
          >
            <Caption>
              A deployment script which makes full use of dotfiles-multiplexer&apos;s automation
            </Caption>
          </CodeBlock>
          <CodeBlock
            gist_id="js-jslog/128ffb51b5635c527d4761074cfd35ca"
            file="office.yml"
          >
            <Caption>
              The dotfiles-multiplexer config file for the context of a) Joe + b) working in the office
            </Caption>
          </CodeBlock>
          
          <BodyText>
            Running the above script will clone the dotfiles-multiplexer repository and a contexts repository which contains a dotfiles-multiplexer configuration for each context which Joe uses dotfiles in.
          </BodyText>
          <BodyText>
            After that it deploys the relevant configuration file for this context to the home directory, and then kicks off dotfiles-multiplexer&apos;s <Code>setup.sh</Code> which does the rest.
          </BodyText>
          <BodyText>
            The dotfiles-multiplexer <Code>setup.sh</Code> will clone the personal and office repositories locally, generate new dotfiles from the composition of the dotfiles it finds in them and create symbolic links to these generated files.
          </BodyText>
          <BodyText>
            The generated dotfiles (for the most part) will use an include syntax, so it is still the repositories versions of the files which are being read by the system, &amp; if the files are updated there, this update in config will be instantly recognised by the system without any need to rerun setup.
          </BodyText>
          <BodyText>
            Furthermore, since the files are composed in the order that the aliases are defined in the <Code>.dotfiles-multiplexer.yml</Code> by default, Joe doesn&apos;t even need to modify his personal <Code>.vimrc</Code> file to have the office config overwrite his indentation config of 2 spaces with the office standard, 4.
          </BodyText>
          <SectionSubheading>
            The colleague
          </SectionSubheading>
          <BodyText>
            Joe has a colleague who is interested in playing with Joe&apos;s <Code>.vimrc</Code> and <Code>.gitconfig</Code> setup but naturally wants his own <Code>.gitconfig</Code> to take primacy on user credentials so that Joe doesn&apos;t get credit for his buggy contributions.
          </BodyText>
          <BodyText>
            All of Joe&apos;s config can be included at lower priority than the colleagues by simply including it before the colleagues own.
          </BodyText>
          <CodeBlock
            gist_id="js-jslog/128ffb51b5635c527d4761074cfd35ca"
            file="colleague_gitconfig"
          >
            <Caption>
              The colleagues <Code>.gitconfig</Code> file. He wants to keep this but import Joe&apos;s <Code>[diff]</Code> config along with everything else.
            </Caption>
          </CodeBlock>
          <CodeBlock
            gist_id="js-jslog/128ffb51b5635c527d4761074cfd35ca"
            file="colleague_office_plus_joe.yml"
          >
            <Caption>
              The colleagues <Code>dotfiles-multiplexer.yml</Code> file. He has his own configuration but he wants some of Joe&apos;s too.
            </Caption>
          </CodeBlock>
          <BodyText>
            All of Joe&apos;s configuration, including <Code>.gitconfig</Code> will be used, save for those items which the colleague has his own configuration for; which in this case is just his <Code>user.name</Code> &amp; <Code>user.email</Code> git configuration.
          </BodyText>
          <SectionSubheading>
            The money-maker
          </SectionSubheading>
          <BodyText>
            Joe is working on a project with a friend. This project will make Joe a lot of money and since inspiration can strike at any moment, Joe often finds himself needing to make small changes to the project while he is in the office. Joe is exceptionally productive and his bosses don&apos;t notice his fraudulant antics.
          </BodyText>
          <BodyText>
            Joe has discovered a new context. He is in the office and requires all of the proxy configuration which comes with the work config repo, but he cannot afford for the dreaded 4 space tab configuration to take effect on his vim application, potentially corrupting his immaculately 2 spaced personal project.
          </BodyText>
          <BodyText>
            This context is identical to his work context except that he doesn&apos;t need to office <Code>.vimrc</Code> file. To achieve this Joe doesn&apos;t need to make any changes to the repositories that he has checked out already, he just needs a different <Code>.dotfiles-multiplexer.yml</Code> file.
          </BodyText>
          <CodeBlock
            gist_id="js-jslog/128ffb51b5635c527d4761074cfd35ca"
            file="office_minus_vimrc.yml"
          >
            <Caption>
              The <Code>compose:</Code> node specifies which of the available repos should be included in the generated config and in which order.
            </Caption>
          </CodeBlock>
          <BodyText>
            Now Joe can switch back and forth between the two contexts of working hard in the office and wasting the office dollar by simply switching out which of the above configuration files is located at <Code>~/.dotfiles-multiplexer.yml</Code> and running <Code>~/dofiles-multiplexer/setup.sh</Code>
          </BodyText>
          <SectionHeading>
            Conclusion
          </SectionHeading>
          <BodyText>
            The dotfiles-multiplexer offers a solution to the problem of managing distinct set&apos;s of configuration requirements without duplication. This article has explored the basic motivation behind this need. There are many features of the solution which have been left untouched.
          </BodyText>
          <BodyText>
            At the time of writing there don&apos;t seem to be any other solutions to this problem. I&apos;m confused about this as I am sure that those at my level of tinkering and above (and there are many of you out there) must feel the need for such a thing.
          </BodyText>
          <BodyText>
            Perhaps I&apos;m mistake about that, or perhaps there is another solution which I have overlooked. Until I have been convinced of one or the other of those possibilities I intend to keep working on the project, and even if you are in a tiny minority of people who also find it useful and would like to contribute, you are most welcome to get involved. Visit me at <Link to="https://github.com/js-jslog/dotfiles-multiplexer">the project on github</Link>
          </BodyText>
        </PostContent>
      </div>
    );
  }
}

const StyledPageContents = withStyles(styles)(PageContents);
export {StyledPageContents}
export {title};
export {blurb};
export {link};
export {published};
export {date};
