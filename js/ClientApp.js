/* global React, ReactDOM */
//components, tags, elements, etc: are all function calls
var div = React.DOM.div;
var h1 = React.DOM.h1;

console.log("yo!!");
//note: every react component MUST have a `render` method
//and the `render` method must return markup
//also, it should be a `pure` function (no modifying state, etc)
var MyTitle = React.createClass({
  render: function() {
    return (
      div(null,
        h1(null, "React component, eh!"))
      );
  }
});

var MyFirstComponet = React.createClass({ //createClass makes blueprint
  render: function() {
    return (
      div(null, //attributes (classname, id, etc)
        React.createElement(MyTitle), // can either be done like this
        React.createElement(MyTitle), // or as an array: div(null, [..., ...])
        React.createElement(MyTitle),
        React.createElement(MyTitle)
      )
    );
  }
});
//createElement((element), whereitgoes)
ReactDOM.render(React.createElement(MyFirstComponet),
  document.getElementById('app'));
