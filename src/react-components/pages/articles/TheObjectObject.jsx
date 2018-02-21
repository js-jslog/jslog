import React from 'react';
import {withStyles} from 'material-ui/styles';

import Code from '../../layout/code/Code.jsx';
import CodeBlock, {CodeBlockOutput, CodeBlockErrorOutput} from '../../layout/code/CodeBlock.jsx';
import Figure, {FigureCaption} from '../../layout/figure/Figure.jsx';
import Typography from 'material-ui/Typography';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import List, {ListItem} from 'material-ui/List';
import {Link} from 'react-router-dom';

const styles = theme => ({
});

const title = "The Object object";
const image = "the-object-object.jpg";
const link = "the-object-object";
const blurb = "A simple look at the Object object";
const published = true;

const PageContents = () => (
  <div>
    <Typography>
      My obsession with the fundamentals continues today with a look into the native Object methods & properties. The examples used are designed partly to expose the details of the function being used but also as an opportunity to have a bit of a play in general. You may see unnecessary use of IIFE's, or sub-optimal forms. Please excuse these cases. I think the points are still clearly made. Depricated methods have not been included. Information gathered from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Mozilla.org.</a>
    </Typography>
    <Typography variant='display1'>
      Object methods
    </Typography>
    <Typography>
      The methods on the <code>Object</code> object itself. These methods are not inherited by any created objects through normal instantiation, but they can be if the Object is used as a prototype - <code>var obj = Object.create(Object);</code>
    </Typography>
    <Typography variant='title'>
      assign (ES6)
    </Typography>
    <Typography>Set all of 1 or more source objects own properties to a target.</Typography>
    <CodeBlock
      gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
      file="the_two_pillars_of_javascript.js"
    >
      <CodeBlockOutput>obj2p1</CodeBlockOutput>
      <CodeBlockOutput>obj1p2</CodeBlockOutput>
      <CodeBlockOutput>obj2p3</CodeBlockOutput>
      <CodeBlockOutput>obj2Meth1</CodeBlockOutput>
      <FigureCaption>Where property names conflict, properties from objects later in the parameter list will take precedence in the new object</FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      create
    </Typography>
    <Typography>
      Creates an object taking the passed object as a prototype.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript2.js"
    >
        <CodeBlockOutput>protoP1Changed</CodeBlockOutput>
        <CodeBlockOutput>protoMethChanged</CodeBlockOutput>
        <CodeBlockOutput>objP2</CodeBlockOutput>
        <CodeBlockOutput>protoP2</CodeBlockOutput>
        <FigureCaption>Demonstrating a key feature of prototypal inheritance (<i>dynamic object extension</i>) being used in both the prototype and the instance</FigureCaption>
    </CodeBlock>
    <Typography>
      I'd just like to go on record as stating that I believe the term 'shadow', is a gross misnomer in this situation. It is true that a shadow of the instance's property name <b>is</b> (figuratively) cast over the prototype's property of the same name. However in this analogy, we would say that the second propertry is <i>eclipsed</i> by the first. The term shadowing as I have experienced it in computer science has always meant something more akin to mimicry. I believe it's use here to be confusing, but until I am an official spoksman for the language I will follow convention.
    </Typography>
    <Typography variant='title'>
      defineProperties
    </Typography>
    <Typography>
      Define several properties on an object at once along with the ability to set attributes of those properties.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript3.js"
    >
        <CodeBlockOutput>36500 days</CodeBlockOutput>
        <CodeBlockOutput>365 days</CodeBlockOutput>
        <CodeBlockOutput>0.5</CodeBlockOutput>
        <FigureCaption>Defining both a data and an accessor property at once</FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      defineProperty
    </Typography>
    <Typography>
      Same as above but just for one property with a slightly different parameter list.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript4.js"
    >
        <CodeBlockOutput>36500 days</CodeBlockOutput>
        <CodeBlockOutput>365 days</CodeBlockOutput>
        <CodeBlockOutput>0.5</CodeBlockOutput>
        <FigureCaption>Defining both a data and an accessor property using both literal and functional methods</FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      freeze
    </Typography>
    <Typography>
      Make an object totally immutable and returns a copy of this object in the same frozen state.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript5.js"
    >
        <CodeBlockOutput>p1</CodeBlockOutput>
        <CodeBlockOutput>p1</CodeBlockOutput>
        <FigureCaption>
          Demonstrating that both the returned object & the original object are frozen
        </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      getOwnPropertyDescriptor
    </Typography>
    <Typography>
      Return an object description of the properties in the object & their attributes.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript6.js"
    >
        <CodeBlockOutput>
          {`{ value: 100, writable: true, enumerable: true, configurable: true }`}
        </CodeBlockOutput>
        <CodeBlockOutput>
          {`{ get: [Function], set: [Function], enumerable: false, configurable: false }`}
        </CodeBlockOutput>
        <FigureCaption>
          Demonstrating that the non-enumerable values are included in the output of <code>getOwnPropertyDescriptor</code>. Also demonstrating the difference in a property's default attribute value when set through literal vs <code>defineProperty</code>.
        </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      getOwnPropertyNames
    </Typography>
    <Typography>
      Return an array of the names of the properties in the object.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript7.js"
    >
      <CodeBlockOutput>
        [ 'years', 'days' ]
      </CodeBlockOutput>
      <CodeBlockOutput>
        [ 'years', 'days' ]
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating the same as above, but with less information
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      getOwnPropertySymbols
    </Typography>
    <Typography>//////////////////////////////.</Typography>
    <Typography variant='title'>
      getPrototypeOf
    </Typography>
    <Typography>
      Returns the value of the internal [[Prototype]] property.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript8.js"
    >
      <CodeBlockOutput>
        {`Object {prop1, "p1"}`}
      </CodeBlockOutput>
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <CodeBlockOutput>
        Obj {`{}`}
      </CodeBlockOutput>
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating the different ways of aquiring a prototype
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      is (ES6)
    </Typography>
    <Typography>
      A more accurate comparison than ===.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript9.js"
    >
      <CodeBlockOutput>
        false
      </CodeBlockOutput>
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <CodeBlockOutput>
        false
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating two of the problems with the <code>===</code> operator which <code>is</code> resolves
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      isExtensible
    </Typography>
    <Typography>
      Identifies whether an object is extensible.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript10.js"
    >
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <CodeBlockOutput>
        false
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating that at least part of the function of all of the object functions used above remove extensibility from the object
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      isFrozen
    </Typography>
    <Typography>
      Identifies whether an object is frozen.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript11.js"
    >
      <CodeBlockOutput>
        false
      </CodeBlockOutput>
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <CodeBlockOutput>
        false
      </CodeBlockOutput>
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating that being frozen consists of being non-extensible, sealed and having non-writable properties
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      isSealed
    </Typography>
    <Typography>Identifies whether an object is frozen.</Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript12.js"
    >
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <CodeBlockOutput>
        false
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating that being sealed consists only of lacking extensibility & configurability
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      keys
    </Typography>
    <Typography>
      Returns the objects own properties in the order they would be presented in a for-in loop - ie the enumerable ones.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript13.js"
    >
      <CodeBlockOutput>
        [ 'prop1', 'prop4', 'prop5', 'prop2' ]
      </CodeBlockOutput>
      <CodeBlockOutput>
        [ 'prop1', 'prop4', 'prop5', 'prop2', 'prop3' ]
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating the difference between <code>keys</code> & <code>getOwnPropertyNames</code>
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      observe (ES6)
    </Typography>
    <Typography>
      Asynchronously observe changes to an object.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript14.js"
    >
      <CodeBlockOutput>
        /////////////OBSERVATION MADE////////////////
      </CodeBlockOutput>
      <CodeBlockOutput>
        Property prop1 was updated : p1 -> p1changed
      </CodeBlockOutput>
      <CodeBlockOutput>
        /////////////OBSERVATION MADE////////////////
      </CodeBlockOutput>
      <CodeBlockOutput>
        Property prop4 was added : p4new
      </CodeBlockOutput>
      <CodeBlockOutput>
        /////////////OBSERVATION MADE////////////////
      </CodeBlockOutput>
      <CodeBlockOutput>
        Property prop4 was deleted : p4new -> undefined
      </CodeBlockOutput>
      <CodeBlockOutput>
        /////////////OBSERVATION MADE////////////////
      </CodeBlockOutput>
      <CodeBlockOutput>
        Some other kind of change.. setPrototype
      </CodeBlockOutput>
      <CodeBlockOutput>
        /////////////OBSERVATION MADE////////////////
      </CodeBlockOutput>
      <CodeBlockOutput>
        Some other kind of change.. reconfigure
      </CodeBlockOutput>
      <CodeBlockOutput>
        /////////////OBSERVATION MADE////////////////
      </CodeBlockOutput>
      <CodeBlockOutput>
        Some other kind of change.. reconfigure
      </CodeBlockOutput>
      <CodeBlockOutput>
        Some other kind of change.. reconfigure
      </CodeBlockOutput>
      <CodeBlockOutput>
        Some other kind of change.. preventExtensions
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating the use of the <code>observe</code> method
      </FigureCaption>
    </CodeBlock>
    <Typography>
      There are two features which are not apparent in the example above because of the use of timeouts. These were necessary due to the asynchronous nature of the observation engine.
    </Typography>
    <Typography>
      The timeouts are in place to facilitate the use of a console log which separates each result-set from the next. Two other ideas initially occured to me but were proven infeasible due to the two features we will see now
    </Typography>
    <Typography variant='title'>
      Asynchronicity
    </Typography>
    <Typography>
      Initially I tried to simply place the console log in between each of the object modifications, as below. However from the logging it is clear to see that the observation engine doesn't process the changes until after all the loggin is complete :
    </Typography>
    <Typography>
      Debounce
    </Typography>
    <Typography>
      The second feature became aparrent once I moved the logging into the callback function but without using the timeouts. As you will see below the log is only seen once at the top so all callbacks are being handled with a single pass through the callback function. This is known as debouncing and is a key feature of functions which may otherwise be called multiple times in quick succession.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript15.js"
    >
      <CodeBlockOutput>
        /////////////OBSERVATION MADE////////////////
      </CodeBlockOutput>
      <CodeBlockOutput>
        Property prop1 was updated : p1 -> p1changed
      </CodeBlockOutput>
      <CodeBlockOutput>
        Property prop4 was added : p4new
      </CodeBlockOutput>
      <CodeBlockOutput>
        Property prop4 was deleted : p4new -> undefined
      </CodeBlockOutput>
      <CodeBlockOutput>
        Some other kind of change.. setPrototype
      </CodeBlockOutput>
      <CodeBlockOutput>
        Some other kind of change.. reconfigure
      </CodeBlockOutput>
      <CodeBlockOutput>
        Some other kind of change.. reconfigure
      </CodeBlockOutput>
      <CodeBlockOutput>
        Some other kind of change.. reconfigure
      </CodeBlockOutput>
      <CodeBlockOutput>
        Some other kind of change.. preventExtensions
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating the presence of a debounce within the observe engine
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      preventExtensions
    </Typography>
    <Typography>Prevents new properties from being added to an object.</Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript16.js"
    >
      <CodeBlockOutput>
        undefined
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating the use of the <code>preventExtensions</code>
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      seal
    </Typography>
    <Typography>
      Seals the object, meaning that it is not extensible & the properties are not configurable - though they may be still writable.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript17.js"
    >
      <CodeBlockOutput>
        p1
      </CodeBlockOutput>
      <CodeBlockOutput>
        p1changed
      </CodeBlockOutput>
      <CodeBlockOutput>
        p1changed
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating the features of being sealed
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      setPrototypeOf (ES6)
    </Typography>
    <Typography>
      Reassigns the [[Prototype]] property of an object. Better to just create a new object with the correct prototype using Object.create() and then assign the properties over from the old object.
    </Typography>
    <Typography variant='title'>
      unobserve (ES6)
    </Typography>
    <Typography>
      Stop opbserving an object with a particular function.
    </Typography>
    <Typography variant='display1'>
      Object.prototype methods
    </Typography>
    <Typography>
      These methods are inherited by instances of Object so they are usable by those instances themselves.
    </Typography>
    <Typography variant='title'>
      hasOwnProperty
    </Typography>
    <Typography>
      Returns a boolean indicating whether an object has a property, excluding properties it has visability of through inheritance.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript18.js"
    >
      <CodeBlockOutput>
        false
      </CodeBlockOutput>
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating that while variables down the scope chain from a closure are accessible by the closure, they are not considered properties of the object containing that closure
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      isPrototypeOf
    </Typography>
    <Typography>
      Returns a boolean idenifying whether the specified Object is in the prototype chain of the calling object.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript19.js"
    >
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <CodeBlockOutput>
        false
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating the difference between setting the prototype property on the template object prior to instance creation vs setting the value of prototype on the instance itself. The prototype chain is made from the [[Prototype]] property rather than the prototype property. This can only be set during object creation and cannot simply be set after creation.
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      propertyIsEnumerable
    </Typography>
    <Typography>
      Returns the boolean value of the [[Enumerable]] attribute of the property.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript20.js"
    >
      <CodeBlockOutput>
        true
      </CodeBlockOutput>
      <CodeBlockOutput>
        false
      </CodeBlockOutput>
      <CodeBlockOutput>
        false
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating the difference between setting values using literal notation vs <code>defineProperty</code>.
      </FigureCaption>
    </CodeBlock>
    <Typography variant='title'>
      toLocaleString / toString / valueOf
    </Typography>
    <Typography>
      Provides a form for output.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript21.js"
    >
      <CodeBlockOutput>
        {`[object Object]`}
      </CodeBlockOutput>
      <CodeBlockOutput>
        {`[object Object]`}
      </CodeBlockOutput>
      <CodeBlockOutput>
        {`{ prop1: 'p1', prop2: false }`}
      </CodeBlockOutput>
      <FigureCaption>
        toLocaleString simply calls toString in Object.prototype
      </FigureCaption>
    </CodeBlock>
    <Typography variant='display1'>
      Object properties
    </Typography>
    <Typography>
      There is actually only one property which is not depricated, and it is of little use so I have left it down here at the bottom.
    </Typography>
    <Typography variant='title'>
      constructor
    </Typography>
    <Typography>
      Identifies the object from which this instance was built.
    </Typography>
    <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript22.js"
    >
      <CodeBlockOutput>
        1
      </CodeBlockOutput>
      <CodeBlockOutput>
        Obj1
      </CodeBlockOutput>
      <CodeBlockOutput>
        {`{ prop1: 'p1', prop2: false }`}
      </CodeBlockOutput>
      <CodeBlockOutput>
        Uncaught TypeError: obj1.meth2 is not a function(…)
      </CodeBlockOutput>
      <CodeBlockOutput>
        Obj2Meth2
      </CodeBlockOutput>
      <FigureCaption>
        Demonstrating that the constructor property is not actually used in defining inheritance
      </FigureCaption>
    </CodeBlock>
    <Typography>
      The text around <q cite="#!!ID_OF_REF!!">the quote being quoted</q>.
    </Typography>
    <Typography variant='title'>
      References
    </Typography>
    <List>
      <ListItem id="bib1">
        <cite><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Mozilla.org - Objects</a></cite>
      </ListItem>
    </List>
  </div>
);

const StyledPageContents = withStyles(styles)(PageContents);
export {StyledPageContents}
export {title};
export {image};
export {blurb};
export {link};
export {published};
