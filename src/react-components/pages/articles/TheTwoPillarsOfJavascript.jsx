import React from 'react';

const title = "The two pillars of Javascript";
const image = "the-two-pillars-of-javascript.jpg";
const link = "the-two-pillars-of-javascript";
const blurb = "this is a test blurb";
const published = true;

class PageContents extends React.Component {
    render () {
      return <div className="container">
          <div className="section">
<p>Eric Elliots two articles titled 'The two pillars of JavaScript' <a href="https://medium.com/javascript-scene/the-two-pillars-of-javascript-ee6f3281e7f3#.d517hj1ji">Part 1</a> & <a href="">Part 2</a> describe the two fundamental features (as Eric see's it) of JavaScript which make it <q>one of the most important programming languages of all time</q>.</p>
<p>The two pillars are :</p>
<ul>
<li><a className="href-scroll-id" href="#prototypalInheritance">Prototypal inheritance</a></li>
<li><a className="href-scroll-id" href="#functionalProgramming">Functional programming</a></li>
</ul>
<p>These features have existed since long before JavaScript, but they have never been on display in a programming language as popular. This is unsurprising, as JavaScript is one of the most widely used programming language around, but both these pillars (especially the first) represent a paradigm shift that many programmers will find it difficult to make and in many cases appear blind to their benefits. This latter point is what Eric attempts to address in these two articles.</p>
<blockquote><p>You’re working in the phony version of JavaScript that only exists to dress the language up like Java</p><p><small>Eric Elliott</small></p></blockquote>
<p>As well as linking to the articles themselves above, I want to give my own angle on it's contents. I hope if Eric reads it he will find it accurately represents his points and extends the ideas in a sensible and useful way.</p>
<h2 id="prototypalInheritance">Pillar 1. Prototypal inheritance</h2>
<blockquote><p>As the abused broadsword may skewer logs, for use as a mallet; JavaScript is defiled and blunted by pseudo-classical designs</p><p><small>Joe Sinfield</small></p></blockquote>
<p>Eric's case for prototypal inheritance can be expressed as two separate but related points:
<ol>
<li><a className="href-scroll-id" href="#badConstructors">That Constructors are bad</a> because of their treatment of ‘this’ and their therefore inconvenient requirement for ‘new’</li>
<li>That prototypal inheritance avoids many of the structural issues associated with classical inheritance</li>
</ol></p>
<p>Lets address each of these in turn :</p>
<ol>
<li><h3 id="badConstructors">Constructors are bad</h3>
      <p>There are 4 invocation forms in JavaScript and each treats the <code>this</code> keyword differently. Douglas Crockford <a href="https://www.youtube.com/watch?v=ya4UHuXNygM#t=13m48s">discusses this well</a> but neglects to point out that another feature of the Constructor form is that if the <code>new</code> keyword is not added to the invocation, <code>this</code> is bound to the global scope. This is a bug waiting to happen and without significant benefits elsewhere this makes Constructors too hazardous to justify.</p>
<p>The Factory function is a function invocation identical to the Constructor except that it does not use <code>this</code> in it's definition, and therefore also does not need <code>new</code> in it's invocation. It therefore has all the benefits of the Constructor, without the risk of global scope pollution and as Douglas Crockford says - The text around <q>If a feature is sometimes dangerous, and there is a better option, then always use the better option</q>.</p>
<p>That's it. It's really that simple. Factory functions are just a better option than Constructors.</p>
<p>I sometimes wonder why Eric makes this point. It is not necessary, as acceptance of prototypal inheritance over pseudo-classical inheritance presupposes this preference. It is possible to do either with Factories, but true prototypal inheritance is unavailable to Constructors.</p>
<p>Perhaps this is less of a logical step towards the conclusion and more of an emotional one. To help people overcome their dogmatic adoration of the Constructor, take a step back and prepare for seeing pseudo-classical inheritance for what it truly is - an unnecessary, unwieldy & dangerous use of a tool designed with other functions in mind. As the abused broadsword may skewer logs, for use as a mallet; JavaScript is defiled and blunted by pseudo-classical designs.</p>
</li>
<li><h3>Prototypal inheritance avoids code smells</h3>
      <blockquote><p>The seminal work on classical OO design is anti-class inheritance</p><p><small>Eric Elliott</small></p></blockquote>
      <p>I'll open with the statement Eric builds towards. The above quote refers to arguably the two most important design principles espoused in the widely acclaimed Gang of Four book on design patterns:</p>
<ol>
<li>Program to an interface, not an implementation</li>
<li>Favour object composition over class inheritance</li>
</ol>
<p>As Eric points out <a href="https://www.youtube.com/watch?v=lKCCZTUx0sI#t=11m35s">elsewhere</a> when talking on this subject, the second point flows from the first, as <q>the coupling between a child class and its parent is the tightest form of coupling in OO design</q>, since the child knows everything about its parents implementation. Recognition of the first forces us to accept the second.</p>
<p>It is at this point that Eric briefly discusses ways of achieving composition over class inheritance in JavaScript. I will go into them in more detail below but want to point out that after accepting their feasibility, and assuming the truth of the 2 GOF principles above, this is a crushing argument for prototypal inheritance over classical inheritance in general. The argument for using prototypal inheritance over pseudo-classical inheritance in JavaScript itself therefore, is already won.</p>
</li>
</ol>
<h3>Achieving composition in JavaScript</h3>
<p>Eric outlines 3 methods of achieving composition in JavaScript. I have taken the opportunity to discuss them in slightly more detail in the links below:</p>
<ul>
<li><a href="">Stampit: Eric's own inheritance library</a></li>
<li><a href="">Crockford's functional approach</a></li>
<li><a href="">Non-inheritance based approaches</a></li>
</ul>
<h2 id="functionalProgramming">Pillar 2. Functional programming</h2>
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
