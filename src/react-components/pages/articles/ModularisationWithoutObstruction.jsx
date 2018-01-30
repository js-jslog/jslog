import React from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
});

const title = "Modularisation without obstruction";
const image = "modularisation-without-obstruction.jpg";
const link = "modularisation-without-obstruction";
const blurb = "An introductory look at the progressing field of modularisation in JavaScript";
const published = true;

const PageContents = () => (
      <div className="container">
         <div className="section">
<p>During my first attempts at using module patterns I was very concerned with the issue of reducing my application's exposed API. Douglas Crockford's advice to reducing code's exposed API through use of closures was at the forefront of my mind and I gave little consideration to the other side of module patterns. Namely, the modularity element. It seems like an obvious point, but let me illustrate my mistake.</p>
<p>After studying the <a href="http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html">module pattern</a> for a while, you might be tempted to create an application which looks something like this :</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className=" language-javascript">{`
var app = (function () {
    var publicAPI = {
        initialise: function () {
            module1.init();
            module2.init();
        },
        rollCall: function () {
            module1.speak();
            module2.speak();
        }
    };
    var module1 = {
        init: function () {
            module1.value = "module1";
        },
        speak: function () {
            console.log(module1.value);
        }
    };
    var module2 = {
        init: function () {
            module2.value = "module2";
        },
        speak: function () {
            console.log(module2.value);
        }
    };
    return publicAPI;
}());

app.initialise();
app.rollCall();
      `}</code>
      <output>module1<br/>module2</output>
    </pre>
  </div>
  <figcaption>A 'modular' design which does not permit unit testing</figcaption>
</figure>
<p>We have achieved encapsulation of our functionality, and reduced the size of our exposed API to as little as possible. The code is modular to the extent that if I wanted to replace module 2's implementation, I know where I would need to do my rewrite. However, this is not the limit of what we have available to us with modular patterns.</p>
<p>Hiding implementations inside an application wrapper is not the solution. Proper modular design will have your modules <i>loaded</i> into the application rather than being written into the, This way the module exists outside of the application and is therefore exposed for testing purposes, but once loaded into some other code, can be shielded from the global namespace by that codes API.</p>
<div className="row">
  <div className="col-md-6">
    <figure className="image-figure">
      <div className="panel panel-image">
        <div className="panel-heading">Missing the point!</div>
<img src="/images/modular-by-wrapping-implementation.png"></img>
      </div>
      <figcaption>This code is taking advantage of the module pattern, but creating modules inside calling code leaves those modules beyond reach of any unit testing framework</figcaption>
    </figure>
  </div>
  <div className="col-md-6">
    <figure className="image-figure">
      <div className="panel panel-image">
        <div className="panel-heading">Totally modular</div>
<img src="/images/modular-proper.png"></img>
      </div>
      <figcaption>module1.js & module2.js API will not be accessible by the global context when they are running inside the application.js code, but they are still distinct units whose API's can therefore still be tested from outside the application context</figcaption>
    </figure>
  </div>
</div>
<p>Our example above should be rewritten then, like this (using RequireJS syntax):</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className=" language-javascript">{`
/*
 * module1.js
 */
define(function () {
  var module1 = {
    init: function () {
      module1.value = "module1";
    },
    speak: function () {
      console.log(module1.value);
    }
  };
  return module1;
});

/*
 * module2.js
 */
define(function () {
  var module2 = {
    init: function () {
      module2.value = "module2";
    },
    speak: function () {
      console.log(module2.value);
    }
  };
  return module2;
});

/*
 * application.js
 */
define(["./module1", "./module2"], function (module1, module2) {
  var app = {
    initialise: function () {
      module1.init();
      module2.init();
    },
    rollCall: function () {
      module1.speak();
      module2.speak();
    }
  };
  app.initialise();
  app.rollCall();
});
      `}</code>
      <output>module1<br/>module2</output>
    </pre>
  </div>
  <figcaption>A 'modular' design which does permit unit testing</figcaption>
</figure>
<p>Even if you are not familiar with RequireJS yet the idea here should be clear enough. Our modules are now properly decoupled from the application code, we have the ability to test them and they are still not exposed to the global namespace when in the context of the running application.</p>
          </div>
      </div>
);

export default withStyles(styles)(PageContents);
export {title};
export {image};
export {blurb};
export {link};
export {published};
