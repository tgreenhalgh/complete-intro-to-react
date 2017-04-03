import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

//components, tags, elements, etc: are all function calls
var div = React.DOM.div;

var MyTitleFactory = React.createFactory(MyTitle);

var MyFirstComponet = React.createClass({ //createClass makes blueprint
  render: function() {
    return (
      div(null, //attributes (classname, id, etc)
        // React.createElement(MyTitle), // can either be done like this
        // React.createElement(MyTitle) // or as an array: div(null, [..., ...])
        MyTitleFactory({ title: 'Props!! 1', color: 'peru' }),
        MyTitleFactory({ title: 'Thomas!! 2', color: 'mediumaquamarine' }),
        MyTitleFactory({ title: 'Props!! 3', color: 'dodgerblue' }),
        MyTitleFactory({ title: 'Props!! 4', color: 'rebeccapurple' })
      )
    );
  }
});
//createElement((element), whereitgoes)
ReactDOM.render(React.createElement(MyFirstComponet),
  document.getElementById('app'));
