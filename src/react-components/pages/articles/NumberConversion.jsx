import React from 'react';

const title = "Number conversion";
const image = "number-conversion.jpg";
const link = "number-conversion";
const blurb = "this is a test blurb";
const published = true;

class PageContents extends React.Component {
    render () {
      return <div className="container">
         <div className="section">
<p>
Type conversion is at the heart of JavaScript's flexibility. The earlier article on the type conversion implicit in flow control statements discussed the <a href="boolean_function">Boolean() casting function</a> demonstrated how various types are converted to the boolean type. Converting to the numeric type is one of the most common conversions you will come across in JavaScript development. However despite its ease of use, it is not necessarily as straight forward as it appears.
</p>
<h2>3 Functions</h2>
<p>
There are 3 functions with which you can convert to numeric values :
<ul>
<li>Number()</li>
<li>parseInt()</li>
<li>parseFloat()</li>
</ul>
The rules governing each of these may be most simply understood in the following tables.
</p>
<h3>Number()</h3>
<p>
<figure>
<table className="table">
<tbody>
 <tr>
  <th>Input</th>
  <th>Rule Applied</th>
  <th>Examples : IN</th>
  <th>OUT</th>
 </tr>
 <tr>
  <td rowspan="3">Number</td>
  <td rowspan="3">Number types (apart from NaN - see below) are passed straight through the function unaffected</td>
  <td><code>Number(5)</code></td>
  <td><output>5</output></td>
 </tr>
 <tr>
  <td><code>Number(Infinity)</code></td>
  <td><output>Infinity</output></td>
 </tr>
 <tr>
  <td><code>Number(NaN)</code></td>
  <td><output>NaN</output></td>
 </tr>
 <tr>
  <td rowspan="2">Boolean</td>
  <td rowspan="2"><code>true</code> and <code>false</code> are converted to <code>1</code> & <code>0</code> respectively</td>
  <td><code>Number(true)</code></td>
  <td><output>1</output></td>
 </tr>
 <tr>
  <td><code>Number(false)</code></td>
  <td><output>0</output></td>
 </tr>
 <tr>
  <td><code>null</code></td>
  <td>Returns 0</td>
  <td><code>Number(null)</code></td>
  <td><output>0</output></td>
 </tr>
 <tr>
  <td><code>undefined</code></td>
  <td>Returns <code>NaN</code></td>
  <td><code>Number(undefined)</code></td>
  <td><output><code>NaN</code></output></td>
 </tr>
 <tr>
  <td rowspan="8"><code>Strings</code></td>
  <td rowspan="3">Strings containing only numbers will always be converted to decimals. Signs are accounted for & leading zeros are ignored.</td>
  <td><code>Number("1")</code></td>
  <td><output>1</output></td>
 </tr>
 <tr>
  <td><code>Number("-1")</code></td>
  <td><output>-1</output></td>
 </tr>
 <tr>
  <td><code>Number("0001")</code></td>
  <td><output>1</output></td>
 </tr>
 <tr>
  <td rowspan="2">Strings containing valid floating-point formats are converted accordingly</td>
  <td><code>Number("1.1")</code></td>
  <td><output>1.1</output></td>
 </tr>
 <tr>
  <td><code>Number("0001.1")</code></td>
  <td><output>1.1</output></td>
 </tr>
 <tr>
  <td>Valid hexadecimal formats beginning with <code>0x</code> will be converted to the appropriate integer</td>
  <td><code>Number("0x1")</code></td>
  <td><output>1</output></td>
 </tr>
 <tr>
  <td>Empty Strings are converted to 0</td>
  <td><code>Number("")</code></td>
  <td><output>0</output></td>
 </tr>
 <tr>
  <td>Any formats not matching these String rules will be converted to <code>NaN</code></td>
  <td><code>Number( "true" )</code></td>
  <td><output>NaN</output></td>
 </tr>
 <tr>
  <td rowspan="5">All</td>
  <td rowspan="4">All white space before and after the evaluated parameter is ignored. Surprisingly this includes white space after the sign if included.</td>
  <td><code>Number(  1  )</code></td>
  <td><output>1</output></td>
 </tr>
 <tr>
  <td><code>Number( - 1 )</code></td>
  <td><output>-1</output></td>
 </tr>
 <tr>
  <td><code>Number( "    "   )</code></td>
  <td><output>0</output></td>
 </tr>
 <tr>
  <td><code>Number( "   0x1 "   )</code></td>
  <td><output>1</output></td>
 </tr>
 <tr>
  <td>Anything not matching any of the rules above will throw a syntax error</td>
  <td><code>Number( 5 5)</code></td>
  <td><output className="error">Uncaught SyntaxError: missing ) after argument list</output></td>
 </tr>
</tbody>
</table>
<figcaption>Rules for converting various types to numbers using the Number() function</figcaption>
</figure>
</p>
<p>
We are about to see a pair of much more reliable conversion functions. However it is important to understand the Number() function as <i>it is the function which defines the auto-casting to numbers when using bitwise operators</i>.
</p>
<h3>parseInt()</h3>
<p>
The parsInt() function behaves the same as the Number() function, other than it's effect on strings. For strings it will convert according to the following rules:
<detail>The rules are applied in the order listed. If a rule does not apply, the next rule will be applied.</detail>
</p>
<p>
<figure>
<table className="table">
<tbody>
 <tr>
  <th>Input</th>
  <th>Rule Applied</th>
  <th>Examples : IN</th>
  <th>OUT</th>
 </tr>
 <tr>
  <td rowspan="13"><code>Strings</code></td>
  <td>1. Leading white space and 0's are ignored</td>
  <td><code>parseInt("   001")</code></td>
  <td><output>1</output></td>
 </tr>
 <tr>
  <td rowspan="2">2. If the first character isn't a number or a sign, a <code>NaN</code> is returned</td>
  <td><code>parseInt("  .1")</code></td>
  <td><output>NaN</output></td>
 </tr>
 <tr>
  <td><code>parseInt("")</code></td>
  <td><output>NaN</output> Note : different to Number()</td>
 </tr>
 <tr>
  <td rowspan="3">3. If the first character is a number or sign, the string is evaluated until either the end of the string, or the first non-numeric character (except in the special cases below)</td>
  <td><code>parseInt("  +1")</code></td>
  <td><output>111</output></td>
 </tr>
 <tr>
  <td><code>parseInt("  +1test")</code></td>
  <td><output>1</output></td>
 </tr>
 <tr>
  <td><code>parseInt("1.1")</code></td>
  <td><output>1</output> Note: . is an invalid character in the parseInt() sequence</td>
 </tr>
 <tr>
  <td colspan="3">
    <b>Special cases exist which break the above rules to some extent</b>
  </td>
 </tr>
 <tr>
  <td rowspan="2">
    Step 3 behaves differently if the first 2 characters are 0x. The rest of the string is evaluated as a hexadecimal until the first non-hexadecimal character is met, at which point it stops parsing like in step 3
  </td>
  <td><code>parseInt("0x1")</code></td>
  <td><output>1</output></td>
 </tr>
 <tr>
  <td><code>parseInt("0x1test")</code></td>
  <td><output>1</output></td>
 </tr>
 <tr>
  <td rowspan="4">
    If the number looks like an octal literal then in ECMAScript3 it will be interpreted as such, while in ECMAScript5 it will be interpreted as a decimal (therefore according to the standard rules)
  </td>
  <td colspan="2">ECMAScript5</td>
 </tr>
 <tr>
  <td><code>parseInt("010")</code></td>
  <td><output>10</output></td>
 </tr>
 <tr>
  <td colspan="2">ECMAScript3</td>
 </tr>
 <tr>
  <td><code>parseInt("010")</code></td>
  <td><output>8</output></td>
 </tr>
</tbody>
</table>
<figcaption>Rules for converting various types to numbers using the parseInt() function</figcaption>
</figure>
</p>
<p>
As you can see there is a lot of potential confusion involved in using parseInt() with number formats which are up for interpretation. To avoid this & because you are likely to know what format your number should be coming in, even if it might look like another format, an additional parameter is available for the parseInt() function. This parameter enables you to define what base the number coming in should be interpreted in. It is called the <i>radix</i>.
</p>
<p>
<figure>
<table className="table">
<tbody>
 <tr>
  <th>Base</th>
  <th>Input</th>
  <th>Output</th>
 </tr>
 <tr>
  <td>Binary</td>
  <td><code>parseInt("011", 2)</code></td>
  <td><output>3</output></td>
 </tr>
 <tr>
  <td>Octal</td>
  <td><code>parseInt("017", 8)</code></td>
  <td><output>15</output></td>
 </tr>
 <tr>
  <td>Decimal</td>
  <td><code>parseInt("019", 10)</code></td>
  <td><output>19</output></td>
 </tr>
 <tr>
  <td>Hexadecimal</td>
  <td><code>parseInt("01f", 16)</code></td>
  <td><output>31</output></td>
 </tr>
</tbody>
</table>
<figcaption>The effect of the <i>radix</i> on parseInt() string interpretation</figcaption>
</figure>
</p>
<h3>parseFloat()</h3>
<p>
The parseFloat() function operates in the same way as parseInt() except that it has <b>no radix parameter</b>, only accepts <b>decimal form</b> at at stage 3 it will also accept a <b>single decimal point</b> followed once again only by numeric characters.
</p>
<p>
<figure>
<table className="table">
<tbody>
 <tr>
  <th>Input</th>
  <th>Output</th>
 </tr>
 <tr>
  <td><code>parseFloat("1.1")</code></td>
  <td><output>1.1</output></td>
 </tr>
 <tr>
  <td><code>parseFloat("01.1")</code></td>
  <td><output>1.1</output></td>
 </tr>
 <tr>
  <td><code>parseFloat("1.1test")</code></td>
  <td><output>1.1</output></td>
 </tr>
 <tr>
  <td><code>parseFloat("1.1.1")</code></td>
  <td><output>1.1</output></td>
 </tr>
 <tr>
  <td><code>parseFloat("11", 2)</code></td>
  <td><output>11</output></td>
 </tr>
 <tr>
  <td><code>parseFloat("0x1")</code></td>
  <td><output>0</output></td>
 </tr>
</tbody>
</table>
<figcaption>The use of decimal points in the parseFloat() function</figcaption>
</figure>
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
    link: link,
}

export default exportable;
