var React = require('react');
var ReactDOM = require('react-dom');
var Reactfire = require('reactfire');
var Firebase = require('firebase');
var rooturl = 'https://glowing-torch-1814.firebaseio.com/'
var Header = require('./header');
var List = require('./list');

var App = React.createClass({
  mixins: [Reactfire],
  getInitialState: function () {
    return {
      items: {},
      loaded: false
    }
  },
  componentWillMount: function(){
    this.fb = new Firebase(rooturl + 'items/');
    this.bindAsObject(this.fb, 'items');
    this.fb.on('value', this.handleDataLoaded);
  },
  render: function() {
    return <div className="row panel panel-default">
      <div className="col-md-8 col-md-offset-2">
        <h2 className="text-center">
          Soraya's To-Do List
        </h2>
        <Header itemsStore={this.firebaseRefs.items} />
        <hr />
        <div className={"content " + (this.state.loaded ? 'loaded' : '')}>
          <List items={this.state.items} />
          {this.deleteButton()}
        </div>
      </div>
    </div>
  },
  deleteButton: function () {
    if (!this.state.loaded){
      return
    }else {
      return <div className="text-center clear-complete">
      <hr />
      <button
      type="button"
      onClick={this.onDeleteDoneClick}
      className="btn btn-default">
      clear complete
      </button>
      </div>
    }
  },
  onDeleteDoneClick: function () {
    for(var key in this.state.items){
      if(this.state.items[key].done===true){
        this.fb.child(key).remove();
      }
    }
  },
  handleDataLoaded: function () {
    this.setState({loaded: true})
  }
});
var element = React.createElement(App, {});
ReactDOM.render(element, document.querySelector('.container'));
