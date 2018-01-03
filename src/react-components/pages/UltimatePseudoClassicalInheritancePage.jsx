import React from 'react';

class UltimatePseudoClassicalInheritancePage extends React.Component {
    render () {
      return <div className="container">
          <div className="section">
<p>Getting to grips with inheritance in JavaScript is fundamental to mastering the language. It is so carelessly used by experienced programmers, probably because efforts have been made to give C derivative language developers a syntax which looks familiar.</p>
<p>Technical committee 39 were well intentioned in designing the language this way, and it is a key reason JavaScript's proliferation of the web as the de-facto client side language that everyone can use, but no-one understands. The recent addition of <code>Class</code> will only compound these conflicting forces.</p>
<h2>The bright side</h2>
<p>For those willing to look a little deeper, the concept of <i>Class-like</i> inheritance in JavaScript is extremely nuanced and interesting. In the absence of <i>actual</i> classes, objects can fulfil a <i>pseudo-class-like</i> role, permitting <i>sub-types</i> to inherit methods and properties. We call this <i>pseudo-classical inheritance</i> and it's comprehension requires a detailed knowledge of how objects work. I advise looking in detail at the following custom reference type (object) & inheritance patterns :</p>
<div className="row">
<div className="col-md-6">
<h4>Defining custom reference types</h4>
<ul>
<li>Factory</li>
<li>Constructor</li>
<li>Prototype</li>
<li>Combined constructor / prototype</li>
<li>Dynamic prototype</li>
<li>Parasitic prototype</li>
<li>Durable</li>
</ul>
</div>
<div className="col-md-6">
<h4>Inheritance</h4>
<ul>
<li>Prototype chaining</li>
<li>Constructor stealing</li>
<li>Combination inheritance</li>
<li>Prototypal inheritance</li>
<li>Parasitic prototypal inheritance</li>
<li>Parasitic combination inheritance</li>
</ul>
</div>
</div>
<p>As ever, my key source is Nicolas C. Zakas book<sup>1</sup>, but I returned to a number of other sources over and over again as my understanding grew to really solidify these ideas, some through advocating the approach, some by criticising it. I can't recommend the sources in the reference section below highly enough.</p>
<h3>The self expression</h3>
<p>
Naturally, having read all of that, I needed to try it out. Somewhat crudely I decided to jam as many of the patterns together as possible to replicate a classical model with as many of the benefits symptomatic of that as possible. I am reasonably happy with the result, but most importantly, I had to work on this for long enough that it had a significant impact to my understanding, and has become quite close to my heart. Depraved and defunct as I am sure it is.</p>
<h4>Step 1 - build a super-type</h4>
<p>I settled on the animal kingdom as many of us do at times like these.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className=" language-javascript">{`
function Animal(params) {
  this.name    = undefined;
  this.age     = 0;
  this.alive   = true;
  this.species = undefined;
  this.sound   = undefined;
  if (params.name     !== undefined){ this.name    = params.name;    }
  if (params.age      !== undefined){ this.age     = params.age;     }
  if (params.alive    !== undefined){ this.alive   = params.alive;   }
  if (params.species  !== undefined){ this.species = params.species; }
  if (params.sound    !== undefined){ this.sound   = params.sound;   }
  if (Animal.prototype.sayName === undefined) {
    Animal.prototype.respire = function() {
      if (this.alive) {
        console.log('breathing');
      } else {
        console.log("can't - dead");
      }
    };
    Animal.prototype.haveBirthday = function() {
      console.log("happy birthday! now " + (this.age += 1));
    };
    Animal.prototype.makeSound = function() {
      console.log(this.sound);
    };
  }
}
var animal = new Animal({name:"Joe", age:29});
animal.respire();
animal.haveBirthday();
      `}</code>
      <output>breathing</output>
      <output>happy birthday! now 30</output>
    </pre>
  </div>
  <figcaption>Initial definition of the Animal supertype</figcaption>
</figure>
<p>The key features here are :
<ul>
<li>An <code>Object</code> parameter which will give us flexibility for future extension. In the absence of overridden constructors this is a good alternative.</li>
<li>Setting default values before setting those from the parameter object. Sticking with the combined constructor / prototype pattern.</li>
<li>The Dynamic prototype pattern exists to allow us to define prototypes within the constructor definition. This is very class-like so I have included it here. It will later be abandoned however, for good reason</li>
</ul>
So a string start I think. Lots of ideas in there and something which looks quite class like.</p>
<h4>Step 2 - create a subtype</h4>
<p>A bear. This should be simple. No more principles to implement here, just the implementation of some default values for the <code>species</code> & <code>sound properties</code>, and an additional <code>swipe</code> method which will make use of an inherited property <code>sound</code>.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className=" language-javascript">{`
function Bear(params) {
  if (params.species === undefined){ params.species = "Bear"; }
  if (params.sound   === undefined){ params.sound   = "Grr";  }
  Animal.call(this, params);
  if (Bear.prototype.swipe === undefined) {
    Bear.prototype = new Animal(params);
      Bear.prototype.swipe = function() {
        console.log("swipe - '" + this.sound + "'");
    };
  }
}
var bear   = new Bear({name:"Joe",age:29});
bear.swipe();
bear.respire();
      `}</code>
      <output className="error">Uncaught TypeError: bear.swipe is not a function(…)</output>
      <output className="error">Uncaught TypeError: bear.respire is not a function(…)</output>
    </pre>
  </div>
  <figcaption>The prototype chain is not created properly so the dynamic prototype pattern is a folly here</figcaption>
</figure>
<p>Scuppered! A very helpful individual on stack overflow helped me identify that the dynamic pattern will not work here. The reason being that by the time the <code>Bear.prototype</code> property has been set to <code>Animal</code>, an object has already been created by the <code>new</code> operator which shares a reference to the current reference of <code>Bear.prototype</code>. The <code>bear</code> instance maintains this reference even after the reference of <code>Bear.prototype</code> is changed to <code>Animal</code>.</p>
<p>If we create another <code>Bear</code> instance it will have all the properties and correct prototype references as we expect.
</p>
<p>Thank you to Bergi who helped reduce this issue down to the common prototype resetting issue that it is - <a href="http://stackoverflow.com/questions/33035738/cannot-combine-dynamic-prototype-pattern-with-prototype-chaining">here</a>.</p>
<p>This failure and the fact that in reality this form adds no clarity whatsoever has lead me to remove it from my list of techniques altogether. As Douglas Crockford says - <q cite="#bib6">We should prefer forms which are error resistant</q><sup>6</sup>.</p>
<h4>Step3 - ditch the dynamic form</h4>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className=" language-javascript">{`
function Animal(params) {
  this.name    = undefined;
  this.age     = 0;
  this.alive   = true;
  this.species = undefined;
  this.sound   = undefined;
  if (params !== undefined) {
    if (params.name    !== undefined){ this.name    = params.name;  }
    if (params.age     !== undefined){ this.age     = params.age;   }
    if (params.alive   !== undefined){ this.alive   = params.alive; }
    if (params.species !== undefined){ this.species = params.species; }
    if (params.sound   !== undefined){ this.sound   = params.sound; }
  }
}
Animal.prototype.respire = function() {
  if (this.alive) {
    console.log('breathing');
  } else {
    console.log("can't - dead");
  }
};
Animal.prototype.haveBirthday = function() {
  console.log("happy birthday! now " + (this.age += 1));
};
Animal.prototype.makeSound = function() {
  console.log(this.sound);
};

function Bear(params) {
  if (params.species === undefined){ params.species = "Bear";  }
  if (params.sound   === undefined){ params.sound   = "Grr";  }
  Animal.call(this, params);
}
Bear.prototype = new Animal();
Bear.prototype.swipe = function() {
  console.log("swipe - '" + this.sound + "'");
};

var bear = new Bear({name:"Joe",age:29});
bear.swipe();
bear.respire();
      `}</code>
      <output>swipe - 'Grr'</output>
      <output>breathing</output>
    </pre>
  </div>
  <figcaption>Bringing the <code>prototype</code> definitions outside the constructor makes the world of difference</figcaption>
</figure>
<p>As well as moving the prototype definitions outside of the constructor we have had to make a couple of changes relating to the passing of <code>undefined</code> parameters to the Animal constructor during the prototype chaining phase. This involves :
<ul>
<li>Removing the out of scope <code>params</code> variable from the <code>Animal</code> constructor call in the prototype chaining phase</li>
<li>Adding a check to see if an argument has been passed to the <code>Animal</code> constructor before attempting to use it</li>
</ul>
We could equally well have simply passed an empty object literall (<code>{}</code>) into the constructor and done away with the check, but prudence is a virtue.
</p>
<p>
Now this works very well but the <code>Bear.prototype</code> is still <code>Animal</code>. For this an many other reasons (which I will no go into but please refer to reference<sup>2</sup> below) we can throw in a parasitic prototypal inheritance pattern to improve the prototype chain.
</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className=" language-javascript">{`
function object(o){
  function F(){}
  F.prototype = o;
  return new F();
}
function inheritPrototype(subType, superType){
  var prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
function Animal(params) {
  this.name    = undefined;
  this.age     = 0;
  this.alive   = true;
  this.species = undefined;
  this.sound   = undefined;
  if (params !== undefined) {
    if (params.name    !== undefined){ this.name    = params.name;  }
    if (params.age     !== undefined){ this.age     = params.age;   }
    if (params.alive   !== undefined){ this.alive   = params.alive; }
    if (params.species !== undefined){ this.species = params.species; }
    if (params.sound   !== undefined){ this.sound   = params.sound; }
  }
}
Animal.prototype.respire = function() {
  if (this.alive) {
    console.log('breathing');
  } else {
    console.log("can't - dead");
  }
};
Animal.prototype.haveBirthday = function() {
  console.log("happy birthday! now " + (this.age += 1));
};
Animal.prototype.makeSound = function() {
  console.log(this.sound);
};

function Bear(params) {
  if (params.species === undefined){ params.species = "Bear";  }
  if (params.sound   === undefined){ params.sound   = "Grr";  }
  Animal.call(this, params);
}
inheritPrototype(Bear, Animal);
Bear.prototype.swipe = function() {
    console.log("swipe - '" + this.sound + "'");
};

var bear = new Bear({name:"Joe",age:29});
bear.swipe();
bear.respire();
      `}</code>
      <output>swipe - 'Grr'</output>
      <output>breathing</output>
    </pre>
  </div>
  <figcaption>The combined (constructor / (parasitic prototypal prototype)) pseudo-classical inheritance pattern</figcaption>
</figure>
<p>
Et voila. The combined (constructor / (parasitic prototypal prototype)) pseudo-classical inheritance pattern. It has it's faults and it only makes use of the patterns I have looked at in my book this week (a recently discovered <i>module pattern</i> would have replaced the dynamic prototype pattern nicely). I also suffers the myriad of issues highlighted with constructor patterns in general throughout the references and elsewhere these days. For example we can see that there is a strong dependency between the <code>Animal</code> and <code>Bear</code> types now, with the <code>Bear.swipe</code> method relying on the <code>Animal</code> constructor to set a <code>sound</code> property for it to be used.
</p>
<p>
I'm sure there are also a number of subtle reasons to brand it an abomination which I won't even understand until I've got through to closures and the likes.
</p>
<p>
However, those weaknesses asside. This model comes close to a classical approach offering the following :
<ul>
<li>Object type hierarchy</li>
<li>Property and method inheritance</li>
<li>Object constructor parameters allowing safe extension & a form of function overriding if required</li>
<li>Prototypal inheritance allowing template objects to be used effectively as classes</li>
</ul>
It would be nice if we could add some instance property access restrictions by introducing the durable pattern. But due to the prototype chain necessarily feeding straight to object, this pattern cannot be used in combination with prototype chaining. I might expand on that point in the future, but I'm tired of writing and you must be tired of reading.
</p>
<h3>References</h3>
<ol>
  <li id="#bib1"><cite>Professional JavaScript for Web Developers, 3rd edition - chapter6</cite></li>
  <li id="#bib2"><cite><a href="http://javascript.crockford.com/prototypal.html">Douglas Crockford's first proposal of prototypal inheritance</a></cite></li>
  <li id="#bib3"><cite><a href="http://ericleads.com/2012/09/stop-using-constructor-functions-in-javascript/">Eric Elliott's critique of the use of constructors</a></cite></li>
  <li id="#bib4"><cite><a href="http://ericleads.com/2013/02/fluent-javascript-three-different-kinds-of-prototypal-oo/">Eric Elliott being creative with prototypal inheritance</a></cite></li>
  <li id="#bib5"><cite><a href="https://github.com/ericelliott/fluentjs1/blob/master/fluent-javascript.js">Eric Elliott giving a far more thorough overview than I have here</a></cite></li>
  <li id="#bib6"><cite><a href="https://www.youtube.com/watch?v=_EANG8ZZbRs">Any of Douglas Crockfords talks on JavaScript on youtube. They are all excellent and revealing in their own way. Here's another example.</a></cite></li>
</ol>
          </div>
      </div>
    }
};

export default UltimatePseudoClassicalInheritancePage;
