// creating a component
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hello World!</div>;
}

// const App = function() {
//   return <div>Hiii</div>;
// }

// the above code is converted into Javascript

/*

"use strict";

var App = function App() {
  return React.createElement(
    "div",
    null,
    "Hiii"
  );
};

*/

ReactDOM.render(<App />,document.querySelector('.container'));

//placing the component in DOM



/*

const App = function(){
  return <ol>
    <li>vinit</li>
    <li>shreya</li>
  	</ol>;
}

the above code gets converted into

"use strict";

var App = function App() {
  return React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "vinit"
    ),
    React.createElement(
      "li",
      null,
      "shreya"
    )
  );
};

*/
