import React from 'react';

class PageContents extends React.Component {
    render () {
      return <div className="container">
         <div className="section">
<p>Amongst the functionality offered by JavaScript core which the casual developer may be unaware of, are the iterative methods for array objects. These offer verbose ways of performing tasks or drawing conclusions on whole arrays without the need for developer defined loops.</p>
<p>The simplicity of these tasks may account for why so many people are unaware of the, However, having these functions under your belt will save an enormous amount of time in the long run and also standardise your code for improved maintainability.</p>
<h2>The functions</h2>
<ul>
<li><a className="href-scroll-id" href="#everyMethod">every</a> - check whether <b>all</b> elements of an array match a criteria</li>
<li><a className="href-scroll-id" href="#someMethod">some</a> - check whether <b>some</b> elements of an array match a criteria</li>
<li><a className="href-scroll-id" href="#filterMethod">filter</a> - return a copy of the original array <b>containing only the elements which match a criteria</b></li>
<li><a className="href-scroll-id" href="#mapMethod">map</a> - return a copy of the original array with a <b>transform applied to each element</b></li>
<li><a className="href-scroll-id" href="#foreachMethod">forEach</a> - iterate through each element of an array</li>
</ul>
<h2>The arguments</h2>
<p>As each of the methods works by a similar principle, each of the methods takes the same arguments</p>
<ol>
<li>
 a function which itself takes 3 arguments :
 <ol>
 <li>item - the item which is the subject of this iteration</li>
 <li>index - the index this item is within the array</li>
 <li>array - the array itself</li>
 </ol>
These parameters are used within the function to create a return value - the purpose of which varies depending on the function being used.
</li>
<li>an optional scope object which affects the value of <code>this</code></li>
</ol>
<h2>Syntax</h2>
<figure>
  <div className="panel panel-code">
  <div className="panel-heading">JavaScript</div>
  <pre>
    <code className="language-javascript">{`
var result = arrayName.&lt;method&gt;(function(item, index, array) {
    return &lt;some logic&gt;;
}
    `}</code>
  </pre>
  </div>
  <figcaption>The syntax of an iterative method applied to an array. Where - arrayName : array being iterated over, &lt;method&gt; : the method being applied, &lt;some logic&gt; : the logic applied to each element of the array</figcaption>
</figure>
<p>
The logic determining the return value can be anything at all, but it makes sense that it be based on the value of the <code>item</code> under question. More complicated criteria may require that you also observe the <code>index</code> and / or <code>array</code> arguments.
</p>
<h2>Examples</h2>
<p>As ever, examples will make this significantly easier to explain & understand</p>
<h3 id="everyMethod">The <code>every</code> method</h3>
<p>The <code>every</code> method will return true if all of its iterations return true on the criteria defined in the function.</p>
<figure>
<div className="panel panel-code">
<div className="panel-heading">JavaScript</div>
<pre>
<code className="language-javascript">{`
var numbers = [1,2,3,4,5,6,7,8,9];

var everyResult = numbers.every(function(item, index, array) {
    return item < 2;
});

console.log(everyResult);
`}</code>
<output>false</output>
</pre>
</div>
</figure>
<p>In this case we are asking whether the item under question in each iteration is less than 2. As all but one of these iterations returns false, the <code>every</code> method will return false for this input.</p>
<h3 id="someMethod">The <code>some</code> method</h3>
<p>The <code>some</code> method will return true if any of its iterations return true on the criteria defined in the function.</p>
<figure>
<div className="panel panel-code">
<div className="panel-heading">JavaScript</div>
<pre>
<code className="language-javascript">{`
var numbers = [1,2,3,4,5,6,7,8,9];

var someResult = numbers.some(function(item, index, array) {
    return item < 2;
});

console.log(someResult);
`}</code>
<output>true</output>
</pre>
</div>
</figure>
<h3 id="filterMethod">The <code>filter</code> method</h3>
<p>The <code>filter</code> method will return an array which includes all of the elements from the original array which meet the criteria defined in the function argument.</p>
<figure>
<div className="panel panel-code">
<div className="panel-heading">JavaScript</div>
<pre>
<code className="language-javascript">{`
var numbers = [1,2,3,4,5,6,7,8,9];

var filterResult = numbers.filter(function(item, index, array) {
    return item < 2;
});

console.log(filterResult);
`}</code>
<output>[1]</output>
</pre>
</div>
</figure>
<h3 id="mapMethod">The <code>map</code> method</h3>
<p>The <code>filter</code> method will return an array composed of the result of the function arguments logic applied to each of the original arrays elements in turn.</p>
<figure>
<div className="panel panel-code">
<div className="panel-heading">JavaScript</div>
<pre>
<code className="language-javascript">{`
var numbers = [1,2,3,4,5,6,7,8,9];

var mapResult = numbers.map(function(item, index, array) {
    return item < 2;
});

console.log(mapResult);
`}</code>
<output>[true, false, false, false, false, false, false, false, false]</output>
</pre>
</div>
</figure>
<h3 id="foreachMethod">The <code>forEach</code> method</h3>
<p>The <code>forEach</code> method simply acts as a convenient operator for iterating through all of the elements in an array. It does not return a value and should be used simply as a way to gain access to each element in the array.</p>
<figure>
<div className="panel panel-code">
<div className="panel-heading">JavaScript</div>
<pre>
<code className="language-javascript">{`
var numbers = [1,2,3,4,5,6,7,8,9];

var foreachResult = numbers.forEach(function(item, index, array) {
    return item < 2;
});

console.log(foreachResult);
`}</code>
<output>undefined</output>
</pre>
</div>
</figure>
<p>
The <code>forEach</code> is a little different to the others as it does not return a result. As such you are likely to either be using it to assign values to another variable you have previously defined or updating the input array itself. Note however, when modifying the elements of the array, it is more reliable to access the <code>numbers[index]</code> rather than using the <code>item</code> variable.
</p>
<p>
This is because the values passed into the "function argument's" argument's are passed by value rather than reference (as is the case with all function arguments). In short this means that <code>item</code> is a copy of the array element, stored in a different memory location. Changes to this value do not change the value in the array.
</p>
<p>
There is one nuance to this worth mentioning. If the element of the array being iterated over is a <i>reference type</i> itself. That is, it is a pointer to an <i>object</i> elsewhere in memory, then when a copy of that pointer is passed into the function, the new pointer will also be pointing to the same object as the element in the original array.
</p>
<p>
In this case it is possible to effect the values represented in the original array by gaining access to the same object by a new pointer.
</p>
<figure>
<div className="panel panel-code">
<div className="panel-heading">JavaScript</div>
<pre>
<code className="language-javascript">{`
var numbers = [{name : "joe"},{age : 29},3,4,5,6,7,8,9];

var foreachResult = numbers.forEach(function(item, index, array) {
    ite,name = "notjoe";
});

console.log(numbers);
`}</code>
<output>{`[{name : "notjoe"}, {age : 29, name : "notjoe"}, 3, 4, 5, 6, 7, 8, 9]`}</output>
</pre>
</div>
</figure>
<p>
This works because we are using our new pointer to update an existing object.
</p>
<p>
If we were to sever the connection to the existing object & assign our new pointer to a new object, then any changes we make to this object are not reflected on the object in the original array.
</p>
<figure>
<div className="panel panel-code">
<div className="panel-heading">JavaScript</div>
<pre>
<code className="language-javascript">{`
var numbers = [{name : "joe"},{age : 29},3,4,5,6,7,8,9];

var foreachResult = numbers.forEach(function(item, index, array) {
    item = {name : "notjoe"};
});

console.log(numbers);
`}</code>
<output>{`[{name : "joe"}, {age : 29}, 3, 4, 5, 6, 7, 8, 9]`}</output>
</pre>
</div>
</figure>
          </div>
      </div>
    }
};

const title = "boolean";
const image = "index.jpg";
const link = "boolean-function";
const blurb = "this is a test blurb";
const published = true;
export {
    PageContents,
    title,
    image,
    link,
    blurb,
    published,
}
