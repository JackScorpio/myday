import React, { Component } from 'react';
import './button.css';
import './App.css';
import TodoItems from './Todoitems'
import Task from './Cards/Task'
import TaskDone from './Cards/TaskDone';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
         text: "Compliance",
         key: "1"
        },
        {
          text: "Products analysis",
          key: "2"
        },
        {
          text: "After-sales support",
          key: "3"
        }
      ],
    }

    this.addItem = this.addItem.bind(this)
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
    this._inputElement.value="";
    
    e.preventDefault();

  }

  render() {
    
    return (
 
      <div className="tasks">
        <form onSubmit={this.addItem}>
        <div className="ui action input">
          <input maxlength="18" type="text" ref={(a) => this._inputElement = a}
            placeholder="Add Todo card.."></input>
          <button className="ui grey button">
            Add
          </button>
        </div>
        </form>
      <TodoItems entries={this.state.items}/>
      </div>

    )
  }

}

export default TodoList;