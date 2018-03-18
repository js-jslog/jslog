import React from 'react';
import {withStyles} from 'material-ui/styles';
import Code from '../../layout/typography/Code.jsx';
import PostContent from '../../layout/wrapping/PostContent.jsx';
import PostHeader from '../../layout/wrapping/PostHeader.jsx';
import CodeBlock, {CodeBlockOutput, CodeBlockErrorOutput} from '../../layout/figure/CodeBlock.jsx';
import { BlockQuote, BodyText, Caption, HeadingBlurb, HeadingTitle, SectionHeading, SectionSubheading } from '../../layout/typography/index.js';
import List, {ListItem} from 'material-ui/List';

const styles = theme => ({
});

const title = "The Object object";
const image = "the-object-object.jpg";
const link = "the-object-object";
const blurb = "A simple look at the Object object";
const published = true;
const date = new Date('01/01/2016');

const PageContents = () => (
  <div>
    <PostHeader>
      <HeadingTitle>
        {title}
      </HeadingTitle>
      <HeadingBlurb>
        {blurb}
      </HeadingBlurb>
    </PostHeader>
    <PostContent>
      <BodyText>
        My obsession with the fundamentals continues today with a look into the native Object methods & properties. The examples used are designed partly to expose the details of the function being used but also as an opportunity to have a bit of a play in general. You may see unnecessary use of IIFE's, or sub-optimal forms. Please excuse these cases. I think the points are still clearly made. Depricated methods have not been included. Information gathered from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Mozilla.org.</a>
      </BodyText>
      <SectionHeading>
        Object methods
      </SectionHeading>
      <BodyText>
        The methods on the <Code>Object</Code> object itself. These methods are not inherited by any created objects through normal instantiation, but they can be if the Object is used as a prototype - <Code>var obj = Object.create(Object);</Code>
      </BodyText>
      <SectionSubheading>
        assign (ES6)
      </SectionSubheading>
      <BodyText>Set all of 1 or more source objects own properties to a target.</BodyText>
      <CodeBlock
        gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
        file="the_two_pillars_of_javascript.js"
      >
        <Caption>Where property names conflict, properties from objects later in the parameter list will take precedence in the new object</Caption>
        <CodeBlockOutput>obj2p1</CodeBlockOutput>
        <CodeBlockOutput>obj1p2</CodeBlockOutput>
        <CodeBlockOutput>obj2p3</CodeBlockOutput>
        <CodeBlockOutput>obj2Meth1</CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        create
      </SectionSubheading>
      <BodyText>
        Creates an object taking the passed object as a prototype.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript2.js"
      >
          <Caption>Demonstrating a key feature of prototypal inheritance (<i>dynamic object extension</i>) being used in both the prototype and the instance</Caption>
          <CodeBlockOutput>protoP1Changed</CodeBlockOutput>
          <CodeBlockOutput>protoMethChanged</CodeBlockOutput>
          <CodeBlockOutput>objP2</CodeBlockOutput>
          <CodeBlockOutput>protoP2</CodeBlockOutput>
      </CodeBlock>
      <BodyText>
        I'd just like to go on record as stating that I believe the term 'shadow', is a gross misnomer in this situation. It is true that a shadow of the instance's property name <b>is</b> (figuratively) cast over the prototype's property of the same name. However in this analogy, we would say that the second propertry is <i>eclipsed</i> by the first. The term shadowing as I have experienced it in computer science has always meant something more akin to mimicry. I believe it's use here to be confusing, but until I am an official spoksman for the language I will follow convention.
      </BodyText>
      <SectionSubheading>
        defineProperties
      </SectionSubheading>
      <BodyText>
        Define several properties on an object at once along with the ability to set attributes of those properties.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript3.js"
      >
          <Caption>Defining both a data and an accessor property at once</Caption>
          <CodeBlockOutput>36500 days</CodeBlockOutput>
          <CodeBlockOutput>365 days</CodeBlockOutput>
          <CodeBlockOutput>0.5</CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        defineProperty
      </SectionSubheading>
      <BodyText>
        Same as above but just for one property with a slightly different parameter list.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript4.js"
      >
          <Caption>Defining both a data and an accessor property using both literal and functional methods</Caption>
          <CodeBlockOutput>36500 days</CodeBlockOutput>
          <CodeBlockOutput>365 days</CodeBlockOutput>
          <CodeBlockOutput>0.5</CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        freeze
      </SectionSubheading>
      <BodyText>
        Make an object totally immutable and returns a copy of this object in the same frozen state.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript5.js"
      >
          <Caption>
            Demonstrating that both the returned object & the original object are frozen
          </Caption>
          <CodeBlockOutput>p1</CodeBlockOutput>
          <CodeBlockOutput>p1</CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        getOwnPropertyDescriptor
      </SectionSubheading>
      <BodyText>
        Return an object description of the properties in the object & their attributes.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript6.js"
      >
          <Caption>
            Demonstrating that the non-enumerable values are included in the output of <Code>getOwnPropertyDescriptor</Code>. Also demonstrating the difference in a property's default attribute value when set through literal vs <Code>defineProperty</Code>.
          </Caption>
          <CodeBlockOutput>
            {`{ value: 100, writable: true, enumerable: true, configurable: true }`}
          </CodeBlockOutput>
          <CodeBlockOutput>
            {`{ get: [Function], set: [Function], enumerable: false, configurable: false }`}
          </CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        getOwnPropertyNames
      </SectionSubheading>
      <BodyText>
        Return an array of the names of the properties in the object.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript7.js"
      >
        <Caption>
          Demonstrating the same as above, but with less information
        </Caption>
        <CodeBlockOutput>
          [ 'years', 'days' ]
        </CodeBlockOutput>
        <CodeBlockOutput>
          [ 'years', 'days' ]
        </CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        getOwnPropertySymbols
      </SectionSubheading>
      <BodyText>//////////////////////////////.</BodyText>
      <SectionSubheading>
        getPrototypeOf
      </SectionSubheading>
      <BodyText>
        Returns the value of the internal [[Prototype]] property.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript8.js"
      >
        <Caption>
          Demonstrating the different ways of aquiring a prototype
        </Caption>
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
      </CodeBlock>
      <SectionSubheading>
        is (ES6)
      </SectionSubheading>
      <BodyText>
        A more accurate comparison than ===.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript9.js"
      >
        <Caption>
          Demonstrating two of the problems with the <Code>===</Code> operator which <Code>is</Code> resolves
        </Caption>
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
      </CodeBlock>
      <SectionSubheading>
        isExtensible
      </SectionSubheading>
      <BodyText>
        Identifies whether an object is extensible.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript10.js"
      >
        <Caption>
          Demonstrating that at least part of the function of all of the object functions used above remove extensibility from the object
        </Caption>
        <CodeBlockOutput>
          true
        </CodeBlockOutput>
        <CodeBlockOutput>
          false
        </CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        isFrozen
      </SectionSubheading>
      <BodyText>
        Identifies whether an object is frozen.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript11.js"
      >
        <Caption>
          Demonstrating that being frozen consists of being non-extensible, sealed and having non-writable properties
        </Caption>
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
      </CodeBlock>
      <SectionSubheading>
        isSealed
      </SectionSubheading>
      <BodyText>Identifies whether an object is frozen.</BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="two_pillars_of_javascript12.js"
      >
        <Caption>
          Demonstrating that being sealed consists only of lacking extensibility & configurability
        </Caption>
        <CodeBlockOutput>
          true
        </CodeBlockOutput>
        <CodeBlockOutput>
          false
        </CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        keys
      </SectionSubheading>
      <BodyText>
        Returns the objects own properties in the order they would be presented in a for-in loop - ie the enumerable ones.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript13.js"
      >
        <Caption>
          Demonstrating the difference between <Code>keys</Code> & <Code>getOwnPropertyNames</Code>
        </Caption>
        <CodeBlockOutput>
          [ 'prop1', 'prop4', 'prop5', 'prop2' ]
        </CodeBlockOutput>
        <CodeBlockOutput>
          [ 'prop1', 'prop4', 'prop5', 'prop2', 'prop3' ]
        </CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        observe (ES6)
      </SectionSubheading>
      <BodyText>
        Asynchronously observe changes to an object.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript14.js"
      >
        <Caption>
          Demonstrating the use of the <Code>observe</Code> method
        </Caption>
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
      </CodeBlock>
      <BodyText>
        There are two features which are not apparent in the example above because of the use of timeouts. These were necessary due to the asynchronous nature of the observation engine.
      </BodyText>
      <BodyText>
        The timeouts are in place to facilitate the use of a console log which separates each result-set from the next. Two other ideas initially occured to me but were proven infeasible due to the two features we will see now
      </BodyText>
      <SectionSubheading>
        Asynchronicity
      </SectionSubheading>
      <BodyText>
        Initially I tried to simply place the console log in between each of the object modifications, as below. However from the logging it is clear to see that the observation engine doesn't process the changes until after all the loggin is complete :
      </BodyText>
      <BodyText>
        Debounce
      </BodyText>
      <BodyText>
        The second feature became aparrent once I moved the logging into the callback function but without using the timeouts. As you will see below the log is only seen once at the top so all callbacks are being handled with a single pass through the callback function. This is known as debouncing and is a key feature of functions which may otherwise be called multiple times in quick succession.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript15.js"
      >
        <Caption>
          Demonstrating the presence of a debounce within the observe engine
        </Caption>
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
      </CodeBlock>
      <SectionSubheading>
        preventExtensions
      </SectionSubheading>
      <BodyText>Prevents new properties from being added to an object.</BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript16.js"
      >
        <Caption>
          Demonstrating the use of the <Code>preventExtensions</Code>
        </Caption>
        <CodeBlockOutput>
          undefined
        </CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        seal
      </SectionSubheading>
      <BodyText>
        Seals the object, meaning that it is not extensible & the properties are not configurable - though they may be still writable.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript17.js"
      >
        <Caption>
          Demonstrating the features of being sealed
        </Caption>
        <CodeBlockOutput>
          p1
        </CodeBlockOutput>
        <CodeBlockOutput>
          p1changed
        </CodeBlockOutput>
        <CodeBlockOutput>
          p1changed
        </CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        setPrototypeOf (ES6)
      </SectionSubheading>
      <BodyText>
        Reassigns the [[Prototype]] property of an object. Better to just create a new object with the correct prototype using Object.create() and then assign the properties over from the old object.
      </BodyText>
      <SectionSubheading>
        unobserve (ES6)
      </SectionSubheading>
      <BodyText>
        Stop opbserving an object with a particular function.
      </BodyText>
      <SectionHeading>
        Object.prototype methods
      </SectionHeading>
      <BodyText>
        These methods are inherited by instances of Object so they are usable by those instances themselves.
      </BodyText>
      <SectionSubheading>
        hasOwnProperty
      </SectionSubheading>
      <BodyText>
        Returns a boolean indicating whether an object has a property, excluding properties it has visability of through inheritance.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript18.js"
      >
        <Caption>
          Demonstrating that while variables down the scope chain from a closure are accessible by the closure, they are not considered properties of the object containing that closure
        </Caption>
        <CodeBlockOutput>
          false
        </CodeBlockOutput>
        <CodeBlockOutput>
          true
        </CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        isPrototypeOf
      </SectionSubheading>
      <BodyText>
        Returns a boolean idenifying whether the specified Object is in the prototype chain of the calling object.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript19.js"
      >
        <Caption>
          Demonstrating the difference between setting the prototype property on the template object prior to instance creation vs setting the value of prototype on the instance itself. The prototype chain is made from the [[Prototype]] property rather than the prototype property. This can only be set during object creation and cannot simply be set after creation.
        </Caption>
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
      </CodeBlock>
      <SectionSubheading>
        propertyIsEnumerable
      </SectionSubheading>
      <BodyText>
        Returns the boolean value of the [[Enumerable]] attribute of the property.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript20.js"
      >
        <Caption>
          Demonstrating the difference between setting values using literal notation vs <Code>defineProperty</Code>.
        </Caption>
        <CodeBlockOutput>
          true
        </CodeBlockOutput>
        <CodeBlockOutput>
          false
        </CodeBlockOutput>
        <CodeBlockOutput>
          false
        </CodeBlockOutput>
      </CodeBlock>
      <SectionSubheading>
        toLocaleString / toString / valueOf
      </SectionSubheading>
      <BodyText>
        Provides a form for output.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript21.js"
      >
        <Caption>
          toLocaleString simply calls toString in Object.prototype
        </Caption>
        <CodeBlockOutput>
          {`[object Object]`}
        </CodeBlockOutput>
        <CodeBlockOutput>
          {`[object Object]`}
        </CodeBlockOutput>
        <CodeBlockOutput>
          {`{ prop1: 'p1', prop2: false }`}
        </CodeBlockOutput>
      </CodeBlock>
      <SectionHeading>
        Object properties
      </SectionHeading>
      <BodyText>
        There is actually only one property which is not depricated, and it is of little use so I have left it down here at the bottom.
      </BodyText>
      <SectionSubheading>
        constructor
      </SectionSubheading>
      <BodyText>
        Identifies the object from which this instance was built.
      </BodyText>
      <CodeBlock
          gist_id="js-jslog/56dd83a4645c8938296d23aae8a5601f"
          file="the_two_pillars_of_javascript22.js"
      >
        <Caption>
          Demonstrating that the constructor property is not actually used in defining inheritance
        </Caption>
        <CodeBlockOutput>
          1
        </CodeBlockOutput>
        <CodeBlockOutput>
          Obj1
        </CodeBlockOutput>
        <CodeBlockOutput>
          {`{ prop1: 'p1', prop2: false }`}
        </CodeBlockOutput>
        <CodeBlockErrorOutput>
          Uncaught TypeError: obj1.meth2 is not a function(…)
        </CodeBlockErrorOutput>
        <CodeBlockOutput>
          Obj2Meth2
        </CodeBlockOutput>
      </CodeBlock>
      <BodyText>
        The text around <q cite="#!!ID_OF_REF!!">the quote being quoted</q>.
      </BodyText>
      <SectionSubheading>
        References
      </SectionSubheading>
      <List>
        <ListItem id="bib1">
          <cite><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">Mozilla.org - Objects</a></cite>
        </ListItem>
      </List>
    </PostContent>
  </div>
);

const StyledPageContents = withStyles(styles)(PageContents);
export {StyledPageContents}
export {title};
export {image};
export {blurb};
export {link};
export {published};
export {date};
