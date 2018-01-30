import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
});

const title = "Keywords and reserved words in Javascript";
const image = "keywords-and-reserved-words-in-javascript.jpg";
const link = "keywords-and-reserved-words-in-javascript";
const blurb = "A complete list of the reserved words in the ECMAScript definition up to 2015";
const published = true;

const PageContents = () => (
      <div className="container">
         <div className="section">
<p>
All you <em>need</em> to know about <i>keywords</i> & <i>reserved</i> words is that you must not use them as <i>identifiers</i>. That means no variable names, function names, property names or parameter names. But it helps to understand a little more, so what follows is a definition of the terms in this area and a description of their history.
</p>
<h3>
What is the relationship between keywords & reserved words?
</h3>
<p>
When people talk about <i>reserved words</i> they are often actually just referring to what are known as <i>future reserved words</i>. <i>Future reserved words</i> and <i>keywords</i> are in fact both members of a group called <i>reserved words</i>.
</p>
<figure>
<img src="/images/hierarchy.png" className="scale-wide" alt=""  />
<figcaption><i>Keywords</i> & <i>future reserved words</i> are both children of <i>reserved words</i></figcaption>
</figure>
<p>
So in understanding each of these we should start with a definition & understanding of the term <i>reserved words</i>.
</p>
<p>
The EMCA defines <i>reserved words</i> as <q cite="#bib05">[...] an <i>IdentifierName</i> that cannot be used as an <i>Identifier</i></q>, and that the set of reserved words is made up of the following :
<ul>
  <li><i>Keyword</i></li>
  <li><i>FutureReservedWord</i></li>
  <li><i>NullLiteral</i></li>
  <li><i>BooleanLiteral</i></li>
</ul>
This definition has been the same since the very first edition of the EMCA-262 language specification. From within this group the <i>NullLiteral</i> and <i>BooleanLiteral</i> have predictably remained the same being defined as (<code>null</code>) and (<code>true</code> or <code>false</code>) respectively.
</p>
<p>
So now we get onto the question most people will be interested in. <em>In the above definition, what is the difference between <i>Keyword</i> and <i>FutureReservedWord</i>?</em>
</p>
<p>
The simple answer to this <em>is</em> quite simple. <i>Keywords</i> have a specific use permanently assigned to them and cannot be used as <i>identifiers</i> as doing so would make parsing significantly more difficult and probably not a deterministic task.
</p>
<p>
<i>FutureReservedWords</i> are words which the ECMA Technical Committee #39 have decided may become <i>Keywords</i> in the future. As such they have set them as reserved in the language specification so that code developed with these limitations imposed can be assumed safe to run against yet-to-be developed implementations of later editions of ECMA-262.
</p>
<figure>
<table className="table">
  <tbody>
    <tr>
      <th colSpan="2">EMCA-262 edition 1 (June 1997)</th>
    </tr>
    <tr>
      <td><code>break</code></td>
      <td>Placeholder for when you put in loads to text. A sentence, like</td>
    </tr>
    <tr>
      <td><code>continue</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>delete</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>else</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>for</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>function</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>if</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>in</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>new</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>return</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>this</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>typeof</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>var</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>void</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>while</code></td>
      <td></td>
    </tr>
    <tr>
      <td><code>with</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>case</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>catch</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>class</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>const</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>debugger</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>default</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>do</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>enum</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>export</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>extends</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>finally</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>import</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>super</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>switch</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>throw</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>try</code></td>
      <td></td>
    </tr>
    <tr>
      <th colSpan="2">EMCA-262 edition 2 (August 1998)</th>
    </tr>
    <tr className="future-reserved">
      <td><code>abstract</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>boolean</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>byte</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>char</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>double</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>final</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>float</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>goto</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>implements</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>instanceof</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>int</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>interface</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>long</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>native</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>package</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>private</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>protected</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>public</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>short</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>static</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>synchronized</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>throws</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>transient</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>volatile</code></td>
      <td></td>
    </tr>
    <tr>
      <th colSpan="2">EMCA-262 edition 3 (December 1999)</th>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>case</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>catch</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>default</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>do</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>finally</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>instanceof</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>switch</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>throw</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>try</code></td>
      <td></td>
    </tr>
    <tr>
      <th colSpan="2">EMCA-262 edition 5 (June 2011)</th>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>debugger</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved future-reserved-strict">
      <td><code>let</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved future-reserved-strict">
      <td><code>yield</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-strict">
      <td><code>implements</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-strict">
      <td><code>interface</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-strict">
      <td><code>package</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-strict">
      <td><code>private</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-strict">
      <td><code>protected</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-strict">
      <td><code>public</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-strict">
      <td><code>static</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>abstract</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>boolean</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>byte</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>char</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>double</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>final</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>float</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>goto</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>int</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>long</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>native</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>short</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>synchronized</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>throws</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>transient</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-removed">
      <td><code>volatile</code></td>
      <td></td>
    </tr>
    <tr>
      <th colSpan="2">EMCA-262 edition 6 (June 2015)</th>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>class</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>const</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>export</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>extends</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>import</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-promoted">
      <td><code>super</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved-strict-promoted">
      <td><code>yield</code></td>
      <td></td>
    </tr>
    <tr className="future-reserved">
      <td><code>await</code></td>
      <td><q cite="#bib05">Only considered a <i>FutureReservedWord</i> when <i>Module</i> is the goal symbol of the syntactic grammar</q></td>
    </tr>
  </tbody>
</table>
</figure>
<h3>References</h3>
<ul>
  <li id="bib01"><cite><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%201st%20edition,%20June%201997.pdf">EMCA-262 1st edition specification</a></cite></li>
  <li id="bib02"><cite><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%202nd%20edition,%20August%201998.pdf">EMCA-262 2nd edition specification</a></cite></li>
  <li id="bib03"><cite><a href="http://www.ecma-international.org/publications/files/ECMA-ST-ARCH/ECMA-262,%203rd%20edition,%20December%201999.pdf">EMCA-262 3rd edition specification</a></cite></li>
  <li id="bib04"><cite><a href="http://www.ecma-international.org/ecma-262/5.1/#sec-7.6.1">EMCA-262 5th edition specification</a></cite></li>
  <li id="bib05"><cite><a href="http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf">EMCA-262 6th edition specification</a></cite></li>
</ul>
          </div>
      </div>
);

export default withStyles(styles)(PageContents);
export {title};
export {image};
export {blurb};
export {link};
export {published};
