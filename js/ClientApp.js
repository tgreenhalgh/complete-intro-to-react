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
        // this: the element we've created
        // props: things parents passed in (READONLY)
        // title: key of the prop
        h1(null, this.props.title))
      );
  }
});

var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponet = React.createClass({ //createClass makes blueprint
  render: function() {
    return (
      div(null, //attributes (classname, id, etc)
        // React.createElement(MyTitle), // can either be done like this
        // React.createElement(MyTitle) // or as an array: div(null, [..., ...])
        MyTitleFactory({ title: 'Props!! 1' }),
        MyTitleFactory({ title: 'Props!! 2' }),
        MyTitleFactory({ title: 'Props!! 3' }),
        MyTitleFactory({ title: 'Props!! 4' })
      )
    );
  }
});
//createElement((element), whereitgoes)
ReactDOM.render(React.createElement(MyFirstComponet),
  document.getElementById('app'));
