import React from 'react';

const title = "Loops or array-methods";
const image = "loops-or-array-methods.jpg";
const link = "loops-or-array-methods";
const blurb = "A discussion on the pros and cons of loops vs array methods";
const published = true;

const PageContents = () => (
      <div className="container">
         <div className="section">
<p>After writing the article on <a href="/iterative-array-methods">iterative array methods</a> I heard Douglas Crockford at a Nordic JS event state that he <a href="https://www.youtube.com/watch?v=PSGEjv3Tqo0#t=10m54s">no longer uses <code>for</code> loops</a><sup>1</sup>.</p>
<p>Now, I love the language subset idea espoused by Douglas that it is a developers duty to use only the good parts of a language. It is a mature and sensible approach to progressing languages which must maintain support for defunct features. Abandoning the <code>for</code> loop felt like a bold step & one which I was willing to take so I investigated further.</p>
<h3>Expressiveness</h3>
<p>Douglas' only point during his brief comment on this subject was with regards to expressiveness. <q cite="#bib01">For was invented originally for Fortran to deal with arrays. We don't need those in JavaScript any more, we can do Array's with methods, and it's so much cleaner & so much better</q>. He's not very specific here but I think his intention is clear. Lets compare a for loop and an array method.</p>
<div className="row">
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">JavaScript</div>
        <pre>
          <code className=" language-javascript">{`
// Find how many times 'red' appears in the array
var colours = ["red","blue","green","red"];
var count   = 0;
var i;

for (i=0; i&lt;colours.length; i+=1) {
  if (colours[i] === "red") {
    count += 1;
  }
}

console.log(count);
          `}</code>
          <output>2</output>
        </pre>
      </div>
      <figcaption>Counting occurences within an array using <code>for</code> loop</figcaption>
    </figure>
  </div>
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">JavaScript</div>
        <pre>
          <code className=" language-javascript">{`
// Find how many times 'red' appears in the array
var colours = ["red","blue","green","red"];
var count   = 0;

colours.forEach(function(item, index, array){
  if (item === "red"){
    count += 1;
  }
});

console.log(count);
          `}</code>
          <output>2</output>
        </pre>
      </div>
      <figcaption>Counting occurrences within an array using <code>forEach</code> method</figcaption>
    </figure>
  </div>
</div>
<p>The <code>forEach</code> method is really the direct counterpart of the for loop. As you can see we still need to perform all of the same logic within the iterating logic. The additional verbosity of having the words 'for' and 'each' in the method name might be debatable to seasoned programmers of any type as we have all become used to deciphering for loops on sight, but the slight reduction in cognitive load may be valuable when trying to grasp a complex piece of code.</p>
<div className="row">
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">JavaScript</div>
        <pre>
          <code className=" language-javascript">{`
// Determine whether there is at least one green and a blue in the array
var colours   = ["red","blue","green","red"];
var coloursLength = colours.length;
var blueFlag  = false;
var greenFlag = false;
var i;
var thisColour;

for (i=0; i&lt;coloursLength; i+=1) {
  thisColour = colours[i];
  if (thisColour === "blue") {
    blueFlag = true;
  } else if (thisColour === "green") {
    greenFlag = true;
  }
  if (blueFlag && greenFlag) {
    break;
  }
}

console.log(blueFlag && greenFlag);
          `}</code>
          <output>true</output>
        </pre>
      </div>
      <figcaption>Using a <code>for</code> loop to determine whether both a blue and green exist inside the array and then exiting as soon as a conclusion has been reached.</figcaption>
    </figure>
  </div>
  <div className="col-md-6">
    <figure>
      <div className="panel panel-code">
        <div className="panel-heading">JavaScript</div>
        <pre>
          <code className=" language-javascript">{`
// Determine whether there is at least one green and a blue in the array
var colours   = ["red","blue","green","red"];
var greenFlag = false;
var blueFlag  = false;

blueFlag = colours.some(function(item, index, array){
  return item==="blue";
});
greenFlag = colours.some(function(item, index, array){
  return item==="green";
});

console.log(blueFlag && greenFlag);
          `}</code>
          <output>true</output>
        </pre>
      </div>
      <figcaption>Using a pair of <code>some</code> methods to determine whether the array contains blue & then green.</figcaption>
    </figure>
  </div>
</div>
<p>These two solutions are not equivalent. In the first we are looping through the array once, keeping track of green & blue & breaking out once we know we have an answer, while in the second we loop through once for each value. However, this would be a natural approach to using the two different methods & the difference in clarity is striking.</p>
<p>If running through the array twice is an issue for speed then we would probably want to use the <code>for</code> loop. How likely this is, is addressed in the next section.</p>
<h3>Efficiency</h3>
<p>Even without the structural differences like the one above, it appears that Array methods are significantly slower than the <code>for</code> loop. A demonstration of this at <a href="https://jsperf.com/for-vs-foreach/37">jsPerf</a> shows <code>for</code> loops to be more than twice as fast in a simple summing task on my machine running chrome 45.0.</p>
<p>However, reading around in the community this seems to be an acceptable trade off in most cases. Ben Hollis writes an excellent article investigating the <a href="http://benhollis.net/blog/2009/12/13/investigating-javascript-array-iteration-performance/">relative speeds of various methods</a><sup>3</sup> including those included in the jQuery and Underscore libraries. He is very disappointed in the speeds of the Array methods, but still concludes that they will be his preferred approach unless iterating over very large arrays.</p>
<h3><code>continue</code> & <code>break</code>?</h3>
<p>Some people have suggested that the inability to use <code>continue</code> & <code>break</code> within Array methods leaves them short of a feature present in for loops. Technically speaking this is correct. However that isn't to say that you are always committed to iterating over the whole array (<code>break</code>) or performing all of the logic (<code>continue</code>).</p>
<p>You can exit the logic within an of the methods by returning for that iteration. That is the point of returning - you have determined what you need from applying the logic to this array ite,</p>
<p>The <code>some</code> exists for the very purpose of only checking some of the array. If we add some logging code to our previous example you can see that the array is never checked in full.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className=" language-javascript">{`
// Determine whether there is at least one green and a blue in the array
var colours   = ["red","blue","green","red"];
var greenFlag = false;
var blueFlag  = false;

console.log("Starting check for 'blues'");
blueFlag = colours.some(function(item, index, array){
  console.log(index);
  return item==="blue";
});

console.log("Starting check for 'greens'");
greenFlag = colours.some(function(item, index, array){
  console.log(index);
  return item==="green";
});

console.log(blueFlag && greenFlag);
      `}</code>
      <output>Starting check for 'blues'<br/>0<br/>1<br/>Starting check for 'greens'<br/>0<br/>1<br/>2<br/>true</output>
    </pre>
  </div>
  <figcaption>Demonstrating that the <code>some</code> method will not check the whole array if it is not necessary.</figcaption>
</figure>
<h3>Conclusion</h3>
<p>At the end of the day, Array iteration is a very fast process whichever method you use. If Array iteration is the only thing that your application is doing then you will still see performance benefits from using <code>for</code> loops and may consider using them still. Otherwise you will find improved readability and cleanness from a short investment in  <a href="/iterative-array-methods">learning the Array iteration methods</a>.</p>
<h3>References</h3>
<ol>
  <li id="bib01"><cite><a href="https://www.youtube.com/watch?v=PSGEjv3Tqo0#t=10m54s">Douglas Crockford : The Better Parts - Nordic JS 2014. 10m54s</a></cite></li>
  <li id="bib02"><cite><a href="https://jsperf.com/for-vs-foreach/37">jsPerf - for vs forEach</a></cite></li>
  <li id="bib03"><cite><a href="http://benhollis.net/blog/2009/12/13/investigating-javascript-array-iteration-performance/">BenHollis.net - Investigating JavaScript Array Iteration Performance</a></cite></li>
</ol>
          </div>
      </div>
);

const exportable = {
    published: published,
    PageContents: PageContents,
    title: title,
    image: image,
    blurb: blurb,
    link: link,
}

export default exportable;
