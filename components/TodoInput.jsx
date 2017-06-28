import React, { Component } from 'react';

class TodoInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputText: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputText: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Type your todo"
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </div>
    );
  }
}

export default TodoInput;
