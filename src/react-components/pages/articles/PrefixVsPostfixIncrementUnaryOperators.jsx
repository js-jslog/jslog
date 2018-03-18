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

const title = "Prefix vs postfix increment unary operators";
const image = "prefix-vs-postfix-increment-unary-operators.jpg";
const link = "prefix-vs-postfix-increment-unary-operators";
const blurb = "Revealing a little known subtlety in Javascript";
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
                The increment & decrement operators will be recognisable to anyone with some experience programming JavaScript. They are taken straight from C and are simple in concept.
            </BodyText>
            <CodeBlock
                gist_id="js-jslog/c73fac767ed0702a3005412eb557f621"
                file="unary_operator.js"
            >
                <Caption>
                    Demonstration of the unary increment postfix operator increasing the value of a number variable by 1
                </Caption>
                <CodeBlockOutput>11</CodeBlockOutput>
            </CodeBlock>
            <BodyText>
                The above postfix is widely known and you will see it's all over the place. It's prefix cousin is less commonly used, and whilst being very similar, has one important distinction. Observe the following examples, the first using the postfix operator & the second using the prefix operator.
            </BodyText>
            <CodeBlock
                gist_id="js-jslog/c73fac767ed0702a3005412eb557f621"
                file="unary_operator2.js"
            >
                <Caption>
                    The variable assignment of num2 happens before the unary operation on num1
                </Caption>
                <CodeBlockOutput>10</CodeBlockOutput>
            </CodeBlock>
            <CodeBlock
                gist_id="js-jslog/c73fac767ed0702a3005412eb557f621"
                file="unary_operator3.js"
            >
                <Caption>
                    The unary operation on num1 happens before the variable assignment of num2
                </Caption>
                <CodeBlockOutput>11</CodeBlockOutput>
            </CodeBlock>
            <BodyText>
                The prefix operator ensures that it is the first operation to occur in the statement while the postfix operator waits until the whole statement has been evaluated before acting.
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
