import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
});

const title = "The Object object";
const image = "the-object-object.jpg";
const link = "the-object-object";
const blurb = "A simple look at the Object object";
const published = true;

const PageContents = () => (
      <div className="container">
          <div className="section">
<p>
My obsession with the fundamentals continues today with a look into the native Object methods & properties. The examples used are designed partly to expose the details of the function being used but also as an opportunity to have a bit of a play in general. You may see unnecessary use of IIFE's, or sub-optimal forms. Please excuse these cases. I think the points are still clearly made. Depricated methods have not been included. Information gathered from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Mozilla.org.</a>
</p>
<h2>Object methods</h2>
<p>The methods on the <code>Object</code> object itself. These methods are not inherited by any created objects through normal instantiation, but they can be if the Object is used as a prototype - <code>var obj = Object.create(Object);</code></p>
<h3>assign (ES6)</h3>
<p>Set all of 1 or more source objects own properties to a target.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {prop1 : "obj1p1",
            prop2 : "obj1p2",
            meth1 : function () {
              return "obj1Meth1";
            }};

var obj2 = {prop1 : "obj2p1",
            prop3 : "obj2p3",
            meth1 : function () {
              return "obj2Meth1";
            }};

var targ = {};
Object.assign(targ, obj1, obj2);

console.log(targ.prop1);      // obj2p1
console.log(targ.prop2);      // obj1p2
console.log(targ.prop3);      // obj2p3
console.log(targ.meth1());    // obj2Meth1
      `}</code>
      <output>obj2p1<br/>obj1p2<br/>obj2p3<br/>obj2Meth1</output>
    </pre>
  </div>
  <figcaption>Where property names conflict, properties from objects later in the parameter list will take precedence in the new object</figcaption>
</figure>
<h3>create</h3>
<p>Creates an object taking the passed object as a prototype.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var proto1 = {prop1 : "protoP1",
              prop2 : "protoP2",
              meth1 : function () {
                return "protoMeth1";
              }};
var obj1   = Object.create(proto1);
proto1.prop1 = "protoP1Changed";
proto1.meth1 = function () {
  return "protoMethChanged";
};
console.log(obj1.prop1);      // protoP1Changed
console.log(obj1.meth1());    // protoMethChanged
// demonstrates the dynamic nature of prototypal inheritance

obj1.prop2 = "objP2";
console.log(obj1.prop2);      // objP2
console.log(proto1.prop2);    // protoP2
// demonstrates that object properties 'shadow' those property names on the prototype
      `}</code>
      <output>protoP1Changed<br/>protoMethChanged<br/>objP2<br/>protoP2</output>
    </pre>
  </div>
  <figcaption>Demonstrating a key feature of prototypal inheritance (<i>dynamic object extension</i>) being used in both the prototype and the instance</figcaption>
</figure>
<p>I'd just like to go on record as stating that I believe the term 'shadow', is a gross misnomer in this situation. It is true that a shadow of the instance's property name <b>is</b> (figuratively) cast over the prototype's property of the same name. However in this analogy, we would say that the second propertry is <i>eclipsed</i> by the first. The term shadowing as I have experienced it in computer science has always meant something more akin to mimicry. I believe it's use here to be confusing, but until I am an official spoksman for the language I will follow convention.</p>
<h3>defineProperties</h3>
<p>Define several properties on an object at once along with the ability to set attributes of those properties.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {};
Object.defineProperties(obj1, {
  "years" : {
    value : 100,
    writable : true
  },
  "days" : {
    get : function () {return this.years * 365 + " days";},
    set : function (x) {this.years = x/365;}
  }
});

console.log(obj1.days);  // 36500 days

obj1.years = 1;                  
console.log(obj1.days);  // 365 days

obj1.days = 182.5;
console.log(obj1.years); // 0.5
      `}</code>
      <output>36500 days<br/>365 days<br/>0.5</output>
    </pre>
  </div>
  <figcaption>Defining both a data and an accessor property at once</figcaption>
</figure>
<h3>defineProperty</h3>
<p>Same as above but just for one property with a slightly different parameter list.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {years : 100};
Object.defineProperty(obj1, "days", {
  get : function () {return this.years * 365 + " days";},
  set : function (x) {this.years = x/365;}
});
console.log(obj1.days);  // 36500 days
obj1.years = 1;                  
console.log(obj1.days);  // 365 days
obj1.days = 182.5;
console.log(obj1.years); // 0.5
      `}</code>
      <output>36500 days<br/>365 days<br/>0.5</output>
    </pre>
  </div>
  <figcaption>Defining both a data and an accessor property using both literal and functional methods</figcaption>
</figure>
<h3>freeze</h3>
<p>Make an object totally immutable and returns a copy of this object in the same frozen state.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {prop1 : "p1"};
var obj2 = Object.freeze(obj1);

obj1.prop1 = "p1Changed";
obj2.prop1 = "p1Changed";

console.log(obj1.prop1);  // p1
console.log(obj2.prop1);  // p1
      `}</code>
      <output>p1<br/>p1</output>
    </pre>
  </div>
  <figcaption>Demonstrating that both the returned object & the original object are frozen</figcaption>
</figure>
<h3>getOwnPropertyDescriptor</h3>
<p>Return an object description of the properties in the object & their attributes.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {years : 100};
Object.defineProperty(obj1, "days", {
  get : function () {return this.years * 365 + " days";},
  set : function (x) {this.years = x/365;}
});

console.log(Object.getOwnPropertyDescriptor(obj1, "years"));  // { value: 100, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(obj1, "days"));   // { get: [Function], set: [Function], enumerable: false, configurable: false }
      `}</code>
      <output>{`{ value: 100, writable: true, enumerable: true, configurable: true }<br/>{ get: [Function], set: [Function], enumerable: false, configurable: false }`}</output>
    </pre>
  </div>
  <figcaption>Demonstrating that the non-enumerable values are included in the output of <code>getOwnPropertyDescriptor</code>. Also demonstrating the difference in a property's default attribute value when set through literal vs <code>defineProperty</code>.</figcaption>
</figure>
<h3>getOwnPropertyNames</h3>
<p>Return an array of the names of the properties in the object.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {years : 100};
Object.defineProperty(obj1, "days", {
  get : function () {return this.years * 365 + " days";},
  set : function (x) {this.years = x/365;}
});
console.log(Object.getOwnPropertyNames(obj1));  // [ 'years', 'days' ]
console.log(Object.getOwnPropertyNames(obj1));  // [ 'years', 'days' ]
      `}</code>
      <output>[ 'years', 'days' ]<br/>[ 'years', 'days' ]</output>
    </pre>
  </div>
  <figcaption>Demonstrating the same as above, but with less information</figcaption>
</figure>
<h3>getOwnPropertySymbols</h3>
<p>//////////////////////////////.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`

      `}</code>
      <output></output>
    </pre>
  </div>
  <figcaption></figcaption>
</figure>
<h3>getPrototypeOf</h3>
<p>Returns the value of the internal [[Prototype]] property.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var objProto1 = {prop1 : "p1"};
var obj1 = Object.create(objProto1);

console.log(Object.getPrototypeOf(obj1));                   // Object {prop1, "p1"}
console.log(Object.getPrototypeOf(obj1) === objProto1);     // true

function Obj() {
  this.prop1 = "p1";
}
var obj1 = new Obj();

console.log(Object.getPrototypeOf(obj1));                     // Obj {}
console.log(Object.getPrototypeOf(obj1) === Obj.prototype);   // true
      `}</code>
      <output>{`Object {prop1, "p1"}<br/>true<br/>Obj {}<br/>true`}</output>
    </pre>
  </div>
  <figcaption>Demonstrating the different ways of aquiring a prototype</figcaption>
</figure>
<h3>is (ES6)</h3>
<p>A more accurate comparison than ===.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
console.log(NaN === NaN);           // false
console.log(Object.is(NaN, NaN));   // true

console.log(+0 === -0);             // true
console.log(Object.is(+0, -0));     // false
      `}</code>
      <output>false<br/>true<br/>true<br/>false</output>
    </pre>
  </div>
  <figcaption>Demonstrating two of the problems with the <code>===</code> operator which <code>is</code> resolves</figcaption>
</figure>
<h3>isExtensible</h3>
<p>Identifies whether an object is extensible.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {prop1 : "p1"};
var obj2 = {prop1 : "p1"};
var obj3 = {prop1 : "p1"};
console.log(Object.isExtensible(obj1) && Object.isExtensible(obj2) && Object.isExtensible(obj3));   // true

Object.preventExtensions(obj1);
Object.freeze(obj2);
Object.seal(obj3);
console.log(Object.isExtensible(obj1) || Object.isExtensible(obj2) || Object.isExtensible(obj3));   // false
      `}</code>
      <output>true<br/>false</output>
    </pre>
  </div>
  <figcaption>Demonstrating that at least part of the function of all of the object functions used above remove extensibility from the object</figcaption>
</figure>
<h3>isFrozen</h3>
<p>Identifies whether an object is frozen.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {prop1 : "p1"};
var obj2 = {prop1 : "p1"};
var obj3 = {};
Object.defineProperty(obj3, "prop1", {value : "p1"});

Object.preventExtensions(obj1);
Object.freeze(obj2);
Object.seal(obj3);
console.log(Object.isFrozen(obj1) || Object.isFrozen(obj3));   // false
console.log(Object.isFrozen(obj2));                            // true

Object.preventExtensions(obj3);
Object.seal(obj1);
console.log(Object.isFrozen(obj1));   // false
console.log(Object.isFrozen(obj3));   // true
      `}</code>
      <output>false<br/>true<br/>false<br/>true</output>
    </pre>
  </div>
  <figcaption>Demonstrating that being frozen consists of being non-extensible, sealed and having non-writable properties</figcaption>
</figure>
<h3>isSealed</h3>
<p>Identifies whether an object is frozen.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {};
Object.defineProperty(obj1, "prop1", {value : "p1", writable : true});
var obj2 = {prop1 : "p1"};
var obj3 = {prop1 : "p1"};

Object.preventExtensions(obj1);
Object.freeze(obj2);
Object.seal(obj3);
console.log(Object.isSealed(obj1) && Object.isSealed(obj2) && Object.isSealed(obj3));   // true

var obj4 = {};
Object.defineProperty(obj4, "prop1", {value : "p1", writable : true, configurable : true});
Object.preventExtensions(obj4);
console.log(Object.isSealed(obj4));           // false
      `}</code>
      <output>true<br/>false</output>
    </pre>
  </div>
  <figcaption>Demonstrating that being sealed consists only of lacking extensibility & configurability</figcaption>
</figure>
<h3>keys</h3>
<p>Returns the objects own properties in the order they would be presented in a for-in loop - ie the enumerable ones.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {
  prop1 : "p1",
  prop4 : "p4",
  prop5 : function () {return 1},
  prop2 : "p2"
};
Object.defineProperty(obj1, "prop3", {value : "p3"});

console.log(Object.keys(obj1));                   // [ 'prop1', 'prop4', 'prop5', 'prop2' ]
console.log(Object.getOwnPropertyNames(obj1));    // [ 'prop1', 'prop4', 'prop5', 'prop2', 'prop3' ]
      `}</code>
      <output>[ 'prop1', 'prop4', 'prop5', 'prop2' ]<br/>[ 'prop1', 'prop4', 'prop5', 'prop2', 'prop3' ]</output>
    </pre>
  </div>
  <figcaption>Demonstrating the difference between <code>keys</code> & <code>getOwnPropertyNames</code></figcaption>
</figure>
<h3>observe (ES6)</h3>
<p>Asynchronously observe changes to an object.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {
  prop1 : "p1",
  prop2 : "p2",
  prop3 : "p3"
};
Object.observe(obj1, function (changes) {
  console.log("/////////////OBSERVATION MADE////////////////");
  changes.forEach(function (item, index, array) {
    switch (ite,type) {
      case "add" :
        console.log("Property " + ite,name + " was added : " + ite,object[ite,name]);
        break;
      case "update" :
        console.log("Property " + ite,name + " was updated : " + ite,oldValue + " -> " + ite,object[ite,name]);
        break;
      case "delete" :
        console.log("Property " + ite,name + " was deleted : " + ite,oldValue + " -> " + ite,object[ite,name]);
        break;
      default : console.log("Some other kind of change.. " + ite,type);
    }
  }, ["add", "update", "delete", "reconfigure", "preventExtensions", "setPrototype"]);
});

obj1.prop1 = "p1changed";
setTimeout(function() {obj1.prop4 = "p4new";},            100);
setTimeout(function() {delete obj1.prop4;},               200);
setTimeout(function() {Object.setPrototypeOf(obj1, {});}, 300);
setTimeout(function() {Object.defineProperty(obj1, "prop1", {configurable : false});}, 400);
setTimeout(function() {Object.seal(obj1);},               500);
      `}</code>
      <output>/////////////OBSERVATION MADE////////////////<br/>Property prop1 was updated : p1 -> p1changed<br/>/////////////OBSERVATION MADE////////////////<br/>Property prop4 was added : p4new<br/>/////////////OBSERVATION MADE////////////////<br/>Property prop4 was deleted : p4new -> undefined<br/>/////////////OBSERVATION MADE////////////////<br/>Some other kind of change.. setPrototype<br/>/////////////OBSERVATION MADE////////////////<br/>Some other kind of change.. reconfigure<br/>/////////////OBSERVATION MADE////////////////<br/>Some other kind of change.. reconfigure<br/>Some other kind of change.. reconfigure<br/>Some other kind of change.. preventExtensions</output>
    </pre>
  </div>
  <figcaption>Demonstrating the use of the <code>observe</code> method</figcaption>
</figure>
<p>There are two features which are not apparent in the example above because of the use of timeouts. These were necessary due to the asynchronous nature of the observation engine.</p>
<p>The timeouts are in place to facilitate the use of a console log which separates each result-set from the next. Two other ideas initially occured to me but were proven infeasible due to the two features we will see now</p>
<h4>Asynchronicity</h4>
<p>Initially I tried to simply place the console log in between each of the object modifications, as below. However from the logging it is clear to see that the observation engine doesn't process the changes until after all the loggin is complete :</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
/////////////OBSERVATION MADE////////////////
obj1.prop1 = "p1changed";
/////////////OBSERVATION MADE////////////////
obj1.prop4 = "p4new";
/////////////OBSERVATION MADE////////////////
delete obj1.prop4;
/////////////OBSERVATION MADE////////////////
Object.setPrototypeOf(obj1, {});
/////////////OBSERVATION MADE////////////////
Object.defineProperty(obj1, "prop1", {configurable : false});
/////////////OBSERVATION MADE////////////////
Object.seal(obj1);
      `}</code>
      <output>/////////////OBSERVATION MADE////////////////<br/>/////////////OBSERVATION MADE////////////////<br/>/////////////OBSERVATION MADE////////////////<br/>/////////////OBSERVATION MADE////////////////<br/>/////////////OBSERVATION MADE////////////////<br/>/////////////OBSERVATION MADE////////////////<br/>Property prop1 was updated : p1 -> p1changed<br/>Property prop4 was added : undefined<br/>Property prop4 was deleted : p4new -> undefined<br/>Some other kind of change.. setPrototype<br/>Some other kind of change.. reconfigure<br/>Some other kind of change.. reconfigure<br/>Some other kind of change.. reconfigure<br/>Some other kind of change.. preventExtensions</output>
    </pre>
  </div>
  <figcaption>Demonstrating the asynchronicity of the observe engine</figcaption>
</figure>
<h4>Debounce</h4>
<p>The second feature became aparrent once I moved the logging into the callback function but without using the timeouts. As you will see below the log is only seen once at the top so all callbacks are being handled with a single pass through the callback function. This is known as debouncing and is a key feature of functions which may otherwise be called multiple times in quick succession.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
obj1.prop1 = "p1changed";
obj1.prop4 = "p4new";
delete obj1.prop4;
Object.setPrototypeOf(obj1, {});
Object.defineProperty(obj1, "prop1", {configurable : false});
Object.seal(obj1);
      `}</code>
      <output>/////////////OBSERVATION MADE////////////////<br/>Property prop1 was updated : p1 -> p1changed<br/>Property prop4 was added : p4new<br/>Property prop4 was deleted : p4new -> undefined<br/>Some other kind of change.. setPrototype<br/>Some other kind of change.. reconfigure<br/>Some other kind of change.. reconfigure<br/>Some other kind of change.. reconfigure<br/>Some other kind of change.. preventExtensions</output>
    </pre>
  </div>
  <figcaption>Demonstrating the presence of a debounce within the observe engine</figcaption>
</figure>
<h3>preventExtensions</h3>
<p>Prevents new properties from being added to an object.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {};
Object.preventExtensions(obj1);
obj1.prop1 = "p1";
console.log(obj1.prop1);        // undefined
      `}</code>
      <output>undefined</output>
    </pre>
  </div>
  <figcaption>Demonstrating the use of the <code>preventExtensions</code></figcaption>
</figure>
<h3>seal</h3>
<p>Seals the object, meaning that it is not extensible & the properties are not configurable - though they may be still writable.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = {
  prop1 : "p1"
};
Object.seal(obj1);
console.log(obj1.prop1);      // p1

obj1.prop1 = "p1changed";     // can be changed
delete obj1.prop1;            // can't be deleted
console.log(obj1.prop1);      // p1changed

Object.defineProperty(obj1, "prop1", {writable : false});
obj1.prop1 = "p1";
console.log(obj1.prop1);      // p1changed - can have it's attributes modified
      `}</code>
      <output>p1<br/>p1changed<br/>p1Changed</output>
    </pre>
  </div>
  <figcaption>Demonstrating the features of being sealed</figcaption>
</figure>
<h3>setPrototypeOf (ES6)</h3>
<p>Reassigns the [[Prototype]] property of an object. Better to just create a new object with the correct prototype using Object.create() and then assign the properties over from the old object.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`

      `}</code>
      <output></output>
    </pre>
  </div>
  <figcaption></figcaption>
</figure>
<h3>unobserve (ES6)</h3>
<p>Stop opbserving an object with a particular function.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`

      `}</code>
      <output></output>
    </pre>
  </div>
  <figcaption></figcaption>
</figure>
<h2>Object.prototype methods</h2>
<p>These methods are inherited by instances of Object so they are usable by those instances themselves.</p>
<h3>hasOwnProperty</h3>
<p>Returns a boolean indicating whether an object has a property, excluding properties it has visability of through inheritance.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = (function () {
  var var1 = 10;
  return {prop1: 100, func1 : function(){return var1;}};
}());

console.log(obj1.hasOwnProperty("var1"));    // false
console.log(obj1.hasOwnProperty("prop1"));   // true
      `}</code>
      <output>false<br/>true</output>
    </pre>
  </div>
  <figcaption>Demonstrating that while variables down the scope chain from a closure are accessible by the closure, they are not considered properties of the object containing that closure</figcaption>
</figure>
<h3>isPrototypeOf</h3>
<p>Returns a boolean idenifying whether the specified Object is in the prototype chain of the calling object.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
function Obj1(prop1, prop2) {
  this.prop1 = prop1;
  this.prop2 = prop2;
}
function Obj2() {
  Obj1.call(this, "p1", "p2");
}
Obj2.prototype  = Obj1.prototype;
Obj2.contructor = Obj2;

var i1 = new Obj2();
var i2 = new Obj1("p1", "p2");
var i3 = Object.create(i1);
var i4 = {};
i4.prototype = Obj1.prototype;
i4.contructor = Obj2;

console.log(Obj1.prototype.isPrototypeOf(i1));  // true
console.log(Obj1.prototype.isPrototypeOf(i2));  // true
console.log(Obj1.prototype.isPrototypeOf(i3));  // true
console.log(Obj1.prototype.isPrototypeOf(i4));  // false
      `}</code>
      <output>true<br/>true<br/>true<br/>false</output>
    </pre>
  </div>
  <figcaption>Demonstrating the difference between setting the prototype property on the template object prior to instance creation vs setting the value of prototype on the instance itself. The prototype chain is made from the [[Prototype]] property rather than the prototype property. This can only be set during object creation and cannot simply be set after creation.</figcaption>
</figure>
<h3>propertyIsEnumerable</h3>
<p>Returns the boolean value of the [[Enumerable]] attribute of the property.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = (function () {
  var obj1 = {prop1 : "p1",
              prop2 : "p2"};
  Object.defineProperty(obj1, "prop2", {enumerable : false});
  Object.defineProperty(obj1, "prop3", {value : 1});
  return obj1;
}());

console.log(obj1.propertyIsEnumerable("prop1"));  // true
console.log(obj1.propertyIsEnumerable("prop2"));  // false
console.log(obj1.propertyIsEnumerable("prop3"));  // false
      `}</code>
      <output>true<br/>false<br/>false</output>
    </pre>
  </div>
  <figcaption>Demonstrating the difference between setting values using literal notation vs <code>defineProperty</code>.</figcaption>
</figure>
<h3>toLocaleString<br/>toString<br/>valueOf</h3>
<p>Provides a form for output.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
var obj1 = (function () {
  return {prop1 : "p1",
          prop2 : false};
}());

console.log(obj1.toLocaleString());   // [object Object]
console.log(obj1.toString());         // [object Object]
console.log(obj1.valueOf());          // { prop1: 'p1', prop2: false }
      `}</code>
      <output>{`[object Object]<br/>[object Object]<br/>{ prop1: 'p1', prop2: false }`}</output>
    </pre>
  </div>
  <figcaption>toLocaleString simply calls toString in Object.prototype</figcaption>
</figure>
<h2>Object properties</h2>
<p>There is actually only one property which is not depricated, and it is of little use so I have left it down here at the bottom.</p>
<h3>constructor</h3>
<p>Identifies the object from which this instance was built.</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className="language-javascript">{`
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

function Obj1(x) {
  this.prop1 = x;
}
Obj1.prototype.meth1 = function() {
  return "Obj1";
};

function Obj2(x){
  this.prop1 = x*2;
}
Obj2.prototype.meth1 = function() {
  return "Obj2";
};
Obj2.prototype.meth2 = function() {
  return "Obj2Meth2";
};

Obj1.prototype.constructor = Obj2.prototype.constructor;

var obj1 = new Obj1(1);
console.log(obj1.prop1);        // 1
console.log(obj1.meth1());      // Obj1
console.log(obj1.meth2());      // fails

Obj1.prototype = Obj2.prototype;
Obj1.prototype.constructor = Obj2.prototype.constructor;
inheritPrototype(Obj1, Obj2);
var obj2 = new Obj1(1);
console.log(obj2.meth2());      // Obj2Meth2
      `}</code>
      <output>1<br/>Obj1<br/>Uncaught TypeError: obj1.meth2 is not a function(…)<br/>Obj2Meth2</output>
    </pre>
  </div>
  <figcaption>Demonstrating that the constructor property is not actually used in defining inheritance</figcaption>
</figure>
<p>The text around <q cite="#!!ID_OF_REF!!">the quote being quoted</q>.</p>

<h3>References</h3>
<ol>
  <li id="bib1"><cite><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Mozilla.org - Objects</a></cite></li>
</ol>
          </div>
      </div>
);

export default withStyles(styles)(PageContents);
export {title};
export {image};
export {blurb};
export {link};
export {published};
