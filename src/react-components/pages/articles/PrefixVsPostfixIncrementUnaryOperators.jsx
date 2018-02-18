import React from 'react';
import {withStyles} from 'material-ui/styles';
import Figure, {FigureCaption} from '../../layout/figure/Figure.jsx';
import CodeBlock, {CodeBlockOutput, CodeBlockErrorOutput} from '../../layout/code/CodeBlock.jsx';
import Typography from 'material-ui/Typography';

const styles = theme => ({
});

const title = "Prefix vs postfix increment unary operators";
const image = "prefix-vs-postfix-increment-unary-operators.jpg";
const link = "prefix-vs-postfix-increment-unary-operators";
const blurb = "Revealing a little known subtlety in Javascript";
const published = true;

const PageContents = () => (
    <div>
        <Typography>
            The increment & decrement operators will be recognisable to anyone with some experience programming JavaScript. They are taken straight from C and are simple in concept.
        </Typography>
        <CodeBlock
            gist_id="js-jslog/c73fac767ed0702a3005412eb557f621"
            file="unary_operator.js"
        >
            <CodeBlockOutput>11</CodeBlockOutput>
            <FigureCaption>
                Demonstration of the unary increment postfix operator increasing the value of a number variable by 1
            </FigureCaption>
        </CodeBlock>
        <Typography>
            The above postfix is widely known and you will see it's all over the place. It's prefix cousin is less commonly used, and whilst being very similar, has one important distinction. Observe the following examples, the first using the postfix operator & the second using the prefix operator.
        </Typography>
        <CodeBlock
            gist_id="js-jslog/c73fac767ed0702a3005412eb557f621"
            file="unary_operator2.js"
        >
            <CodeBlockOutput>10</CodeBlockOutput>
            <FigureCaption>
                The variable assignment of num2 happens before the unary operation on num1
            </FigureCaption>
        </CodeBlock>
        <CodeBlock
            gist_id="js-jslog/c73fac767ed0702a3005412eb557f621"
            file="unary_operator3.js"
        >
            <CodeBlockOutput>11</CodeBlockOutput>
            <FigureCaption>
                The unary operation on num1 happens before the variable assignment of num2
            </FigureCaption>
        </CodeBlock>
        <Typography>
            The prefix operator ensures that it is the first operation to occur in the statement while the postfix operator waits until the whole statement has been evaluated before acting.
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
