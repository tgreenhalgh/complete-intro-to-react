/* global React, ReactDOM */
//components, tags, elements, etc: are all function calls
var div = React.DOM.div;
var h1 = React.DOM.h1;

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

var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponet = React.createClass({ //createClass makes blueprint
  render: function() {
    return (
      div(null, //attributes (classname, id, etc)
        // React.createElement(MyTitle), // can either be done like this
        // React.createElement(MyTitle), // or as an array: div(null, [..., ...])
        MyTitleFactory(null),
        MyTitleFactory(null),
        MyTitleFactory(null),
        MyTitleFactory(null)
      )
    );
  }
});
//createElement((element), whereitgoes)
ReactDOM.render(React.createElement(MyFirstComponet),
  document.getElementById('app'));
