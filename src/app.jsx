var React = require('react');
var ReactDOM = require('react-dom');
var Reactfire = require('reactfire');
var Firebase = require('firebase');
var rooturl = 'https://glowing-torch-1814.firebaseio.com/'
var Header = require('./header');

var App = React.createClass({
  mixins: [Reactfire],
  componentWillMount: function(){
    this.bindAsObject(new Firebase(rooturl + 'items/'), 'items');
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          To-Do List
        </h2>
        <Header />
      </div>
    </div>
  }
});
var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
