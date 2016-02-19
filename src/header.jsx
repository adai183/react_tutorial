var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      text: ''
    }
  },
  render: function(){
    return <div className="input-group">
      <input
      value={this.state.text}
      onChange={this.handleInputState}
      type="text"
      className="form-controle" />
        <span className="input-group-btn">
          <button onClick= {this.handleClick}
          className="btn btn-default"
          type="button">
            Add
          </button>
        </span>
    </div>
  },
  handleClick: function () {
  // send value of the text to Firebase
  this.props.itemsStore.push({
    text: this.state.text,
    done: false
    });
    this.setState({text: ''});
  },
  handleInputState: function (event) {
    this.setState({text: event.target.value});
  }

});
