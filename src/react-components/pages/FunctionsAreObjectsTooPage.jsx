class FunctionsAreObjectsTooPage extends React.Component {
    render () {
      return <div className="container">
         <div className="section">
<p>
This is a concept that many people struggle with. How can functions be objects? And what does that mean for the functions place within the language?
</p>
<p>
One of the reasons people struggle to accept this is because of the syntax differences. Objects are created through the use of constructors while functions are not. Well in fact this is not true, and understand this is the first step to felling comfortable with this concept. 
</p>
<p>
We all know that there are two ways of creating a function right?
</p>
<figure>
  <div className="row">
    <div className="col-md-6">
      <div className="panel panel-code">
        <div className="panel-heading">JavaScript</div>
        <pre>
          <code className=" language-javascript">{`
function func(arg1, arg2) {
    return arg1 + arg2
}
          `}</code>
        </pre>
      </div>
    </div>
    <div className="col-md-6">
      <div className="panel panel-code">
        <div className="panel-heading">JavaScript</div>
        <pre>
          <code className=" language-javascript">{`
var addFunc = new function(arg1, arg2) {
    return arg1 + arg2
};
          `}</code>
        </pre>
      </div>
    </div>
  </div>
  <figcaption>The two sensible ways to create a function</figcaption>
</figure>
<p>
Wrong! There is one further method. A constructor method which suddenly makes functions look a lot more like objects.
</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className=" language-javascript">{`
var addFunc = new Function(
    "arg1",
    "arg2",
    "return arg1 + arg2"
);
      `}</code>
    </pre>
  </div>
  <figcaption>A constructor being employed to create a function <i>object</i></figcaption>
</figure>
<p>
What this highlights is the following :
<ul>
  <li>The <code>addFunc</code> variable is a pointer</li>
  <li>There is a <code>Function()</code> constructor</li>
</ul>
The idea that the <code>addFunc</code> variable is a pointer rather than a primitive should be easily digested. Given our two variable types (value & reference), a function hardly seems like a primitive value after all. However, the existence of a <code>Function()</code> constructor is relatively unknown. I suspect this is mostly due to the fact that at the elementary levels, JavaScript's syntax is heavily inspired by Java, where Objects are instantiated from Classes, inside which functions are defined as quite  separate entities, one of which is called the constructor.
</p>
<p>
But this is not Java. And while we can use a similar syntax for the creation of objects and functions, we need not. And it is this point at which we see the distinction between the Java way, and the JavaScript way.
</p>
<p>
Object and array literal notation show that we need not use a constructor syntax. But they go even further as Nicholas Zaka points out ...
</p>
<blockquote cite="#bib01">
When defining an object via object literal notation, the object constructor is never actually called [..]
</blockquote>
<p>
The preferred method of creating objects and arrays is to use literals where possible and Eric Elliot, the writer of Oreilly's <cite>Programming JavaScript Applications</cite> makes a strong case for <a href="http://ericleads.com/2012/09/stop-using-constructor-functions-in-javascript/">avoiding the constructor pattern for object creation</a> in all cases.
</p>
<h3>The benefits</h3>
<p>
Clearly Java and JavaScript are different, and the preference depends on the task at hand. One key implication for JavaScript, as a direct result of what we have discussed here is that overloading of functions is not possible.
</p>
<p>
This is a consequence of the variable name alone acting as a pointer to the function object, rather than there being a complete function signature. he argument list is contained within the function object definition, and defining a function with a different argument list to the pointer will sever the pointers connection to the original function object.
</p>
<p>
Now this doesn't sound like an advantage, but from stinking turds, great oaks can grow and I have an example of a time when this behaviour made a task I needed to achieve very simple.
</p>
<h4>Function overwriting example</h4>
<h5>The situation</h5>
<p>We have a 3rd party JavaScript application running on our site which provides an API which we wish to call whenever a user clicks on an element on the page.</p>
<h5>The problem</h5>
<p>The API takes 5 seconds to load onto the page. How do we deal with clicks which occur within these 5 seconds</p>
<h5>The answer</h5>
<p>Call a self invoking recursive "dummy" function with the same name as our API method (<code>lateFunction</code>). When the API method becomes available the pointer <code>lateFunction</code> will be reassigned a new function, while the call stack will only know that it needs to once more call the function designated by <code>lateFunction</code>, which is now our API method.
</p>
<p>
Throw in some checks & delays too avoid any infinite loops & too many recursions and there you have it.
</p>
<figure>
  <div className="panel panel-code">
    <div className="panel-heading">JavaScript</div>
    <pre>
      <code className=" language-javascript">{`
/* 
 * Code for handling the early API calls
 */
var timeout_real = 5;  // timeout in seconds
var interval     = 100; // time between iterations
var timeout      = (timeout_real*1000)/interval;

function lateFunction(arg, count) {
  if (count!==0) {
    setTimeout(
      function(){
        lateFunction(arg, count ? count-1 : timeout);
      }, interval
    );
  } else {console.log('The API did not arrive before the specified timeout');}
}

/*
 * Code making the early API call
 */
lateFunction('Log this!!');

/*
 * The API itself - arriving after a delay
 */
setTimeout(
  function(){
    lateFunction = function(arg) {console.log('API available. Parameter to log : ' + arg);};
  }, 5000
);
      `}</code>
      <output>API available. Parameter to log : Log this!!</output>
    </pre>
  </div>
  <figcaption>Demonstration of a buffer mechanism which takes advantage of JavaScript's lack of function overloading</figcaption>
</figure>
<h3>References</h3>
<ul>
  <li id="bib01"><cite>Professional JavaScript for Web Developers, 3rd edition - pg105</cite></li>
</ul>
          </div>
      </div>
    }
};

export default FunctionsAreObjectsTooPage;
