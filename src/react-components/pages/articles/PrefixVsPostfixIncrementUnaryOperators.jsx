import React from 'react';

const title = "Prefix vs postfix increment unary operators";
const image = "prefix-vs-postfix-increment-unary-operators.jpg";
const link = "prefix-vs-postfix-increment-unary-operators";
const blurb = "this is a test blurb";
const published = true;

class PageContents extends React.Component {
    render () {
      return <div className="container">
          <div className="section">
<p>The increment & decrement operators will be recognisable to anyone with some experience programming JavaScript. They are taken straight from C and are simple in concept.</p>
<figure>
<div className="panel panel-code">
<div className="panel-heading">JavaScript</div>
<pre>
<code className="language-javascript">{`
var num = 10;
num++;
console.log(num);
`}</code>
<output>11</output>
</pre>
</div>
<figcaption>Demonstration of the unary increment postfix operator increasing the value of a number variable by 1</figcaption>
</figure>
<p>
The above postfix is widely known and you will see it's all over the place. It's prefix cousin is less commonly used, and whilst being very similar, has one important distinction. Observe the following examples, the first using the postfix operator & the second using the prefix operator.
</p>
<div className="row">
<div className="col-md-6">
<figure>
<div className="panel panel-code">
<div className="panel-heading">JavaScript</div>
<pre>
<code className="language-javascript">{`
var num1 = 10;
var num2 = num1++;
console.log(num2);
`}</code>
<output>10</output>
</pre>
</div>
<figcaption>The variable assignment of num2 happens before the unary operation on num1</figcaption>
</figure>
</div>
<div className="col-md-6">
<figure>
<div className="panel panel-code">
<div className="panel-heading">JavaScript</div>
<pre>
<code className="language-javascript">{`
var num1 = 10;
var num2 = ++num1;
console.log(num2);
`}</code>
<output>11</output>
</pre>
</div>
<figcaption>The unary operation on num1 happens before the variable assignment of num2</figcaption>
</figure>
</div>
</div>
<p>
The prefix operator ensures that it is the first operation to occur in the statement while the postfix operator waits until the whole statement has been evaluated before acting.
</p>
          </div>
      </div>
    }
};

const exportable = {
    published: published,
    PageContents: PageContents,
    title: title,
    image: image,
    blurb: blurb,
}

export default exportable;
