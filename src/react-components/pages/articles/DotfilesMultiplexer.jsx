import React from 'react';
import {Link} from 'react-router-dom';
import { BlockQuote, BodyText, Caption, HeadingBlurb, HeadingTitle, SectionHeading, SectionSubheading } from '../../layout/typography/index.js';
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
            Inspired by the observations of the author of <a href='https://www.anishathalye.com/2014/08/03/managing-your-dotfiles/'>dotbot</a>, I have created an application to combine the configuration files from multiple repositories.
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
          <div>
            set diffopt+=vertical
            set shiftwidth=2
            set softtabstop=2

            set -g base-index 1
            bind -n S-Left previous-window
            bind -n S-Right next-window
          </div>
          <BodyText>
            He also has a <Code>.gitconfig</Code> file which contains the essentials for identifying himself.
          </BodyText>
          <div>
            [user]
              email = jhs4jbs@hotmail.co.uk
              name = js-jslog
            [diff]
              tool = vimdiff
          </div>
          <BodyText>
            Finally, Joe has a deployment script which will create symbolic links in all the necessary places, to the configuration files he has in this repository.
          </BodyText>
          <div>
            #! /bin/bash
            ln -sf ~/dotfiles/.vimrc ~/.vimrc
            ln -sf ~/dotfiles/.tmux.conf ~/.tmux.conf
            ln -sf ~/dotfiles/.gitconfig ~/.gitconfig
          </div>
          <BodyText>
            This repository fulfills Joe&apos;s requirement to identify himself and satisfy his habits while developing software. But in a moment his requirements will change.
          </BodyText>
          <SectionSubheading>
            The office
          </SectionSubheading>
          <BodyText>
            Joe works in an office behind a firewall. The office also enforces a 4 space indentation code standard which Joe hates and doesn&apos;t want anywhere near his github profile. The office provide a repository with the relevant configuration files for this set of requirements.
          </BodyText>
          <div>
            [http]
              proxy = http://proxyaddress:8080

            Host *github.com
              ProxyCommand connect -H proxyaddress:8080 %h %p

            set shiftwidth=4
            set softtabstop=4
          </div>
          <BodyText>
            Joe&apos;s first thought is to fork this repository and add his configuration to it. However he resents the idea of having to maintain a second repository. Especially one with a 4 space configuration in it.
          </BodyText>
          <BodyText>
            Joe discovers the dotfiles-multiplexer and writes the following script for his office context.
          </BodyText>
          <div>
            #! /bin/bash

            git clone dotmplexrepo ~/dotfiles-multiplexer
            git clone dotfilesme ~/dotfiles-me
            git clone dotfileswork ~/dotfiles-work
            git clone dotfilescontexts ~/dotfiles-contexts
            cp ~/dotfiles-contexts/office.yml ~/.dotfiles-multiplexer.yml
            cd ~/dotfiles-multiplexer
            ./setup.sh

            Plus one showing what the office.yml looks like
            
          </div>
          <BodyText>
            Running the above script will clone the dotfiles-multiplexer repository along with the two repositories containing his two set&apos;s of requirements (personal &amp; work) in order to satisfy the combined needs he experiences in the context of *work*. He doesn&apos;t even need to alter his personal <Code>.vimrc</Code> in the face of the 4 space requirement from the office since the ordering of the <Code>.dotfiles-multiplexer.yml</Code> will mean the office configuration of 4 spaces overrides his personal configuration of 2 spaces.
          </BodyText>
          <SectionSubheading>
            The colleague
          </SectionSubheading>
          <BodyText>
            Joe has a colleague who is interested in playing with Joe&apos;s <Code>.vimrc</Code> setup but still wants his own <Code>.gitconfig</Code> and importantly doesn&apos;t want any of Joe&apos;s <Code>.gitconfig</Code> to be combined with his in the process.
          </BodyText>
          <BodyText>
            Joe&apos;s colleague has already emulated Joe&apos;s setup using dotfiles-multiplexer to combine the office config repo with his own repo (including his own inferior <Code>.vimrc</Code> file). Bringing any number of Joe&apos;s configuration files in to the mix is as simple as cloning Joe&apos;s repository, and referencing it where desired in the <Code>.dotfiles-multiplexer.yml</Code>.
          </BodyText>
          <div>
            code block of the colleagues dotfiles config including Joe&apos;s vim and tmux config
          </div>
          <SectionSubheading>
            The money-maker
          </SectionSubheading>
          <BodyText>
            Joe is working on a project with a friend. This project will make Joe a lot of money and since inspiration can strike at any moment Joe often finds himself needing to make small changes to the project while he is in the office. Joe is exceptionally productive and his bosses don&apos;t notice his fraudulant antics.
          </BodyText>
          <BodyText>
            Joe has discovered a new context. He is in the office and requires all of the proxy configuration which comes with the work config repo, but he cannot afford for the dreaded 4 space tab configuration to take effect on his vim application potentially corrupting his immaculately 2 spaced personal project. This context is identical to his work context except that he doesn&apos;t need to office <Code>.vimrc</Code> file. To achieve this Joe doesn&apos;t need to make any changes to the repositories that he has checked out already, he just needs a different <Code>.dotfiles-multiplexer.yml</Code> file.
          </BodyText>
          <div>
            code block showing the config files for the two contexts discussed
          </div>
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
            Perhaps I&apos;m mistake about that, or perhaps there is another solution which I have overlooked. Until I have been convinced of one or the other of those possibilities I intend to keep working on the project, and even if you are in a tiny minority of people who also find it useful and would like to contribute, you are most welcome to get involved. Visit me at <a href='xyz'>the project on github</a>
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
