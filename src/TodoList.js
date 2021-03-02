import React, { Component } from 'react';
import './button.css';

class TodoList extends Component {
  render() {
    return (
      <div className="right item">
        <div className="ui action input">
          <input type="text" placeholder="Add Todo card.."></input>
          <button className="ui black button">
            Add
          </button>
        </div>
      </div>
    )
  }
}

export default TodoList;