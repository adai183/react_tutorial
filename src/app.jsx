var React = require('react');
var ReactDOM = require('react-dom');
var Reactfire = require('reactfire');
var Firebase = require('firebase');
var rooturl = 'https://glowing-torch-1814.firebaseio.com/';

var Hello = React.createClass({
  mixins: [Reactfire],
  componentWillMount: function(){
    this.bindAsObject(new Firebase(rooturl + 'items/'), 'items');
  },
  render: function() {
    console.log(this.state);
    return <h1 className="red">
      Hello!
    </h1>
  }
});
var element = React.createElement(Hello, {});
ReactDOM.render(element, document.querySelector('.container'));
