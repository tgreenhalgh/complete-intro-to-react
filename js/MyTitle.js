// es6 module
import React from 'react';

// if it was commonjs, or node style, it would be
// var React = require('react');

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
        h1({ style: { color: this.props.color }}, this.props.title))
        // h1({ style: { color: this.props.color, fontweight: 'bold' }}, this.props.title))
      );
  }
});

// es6 module
export default MyTitle;
