import React, { Component } from 'react';
import './button.css';
import './App.css';
import TodoItems from './Todoitems'
import Task from './Cards/Task'
import TaskDone from './Cards/TaskDone';

class TodoList extends Component {

  userData;

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    // console.log(this.state)
    this.addItem = this.addItem.bind(this)
  }
  addItem(e) {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        const items = prevState.items.concat(newItem);
        localStorage.setItem('items',JSON.stringify(items))
        return {
          items: prevState.items.concat(newItem)
        };
      });
      
    }
    this._inputElement.value="";
    
    e.preventDefault();

  }

  componentDidMount() {
    localStorage.getItem('items') && this.setState({
      items: JSON.parse(localStorage.getItem('items'))
    })
  
  }


  render() {
    
    return (
 
      <div className="tasks">
        <form onSubmit={this.addItem}>
        <div className="ui action input">
          <input maxLength="18" type="text" ref={(a) => this._inputElement = a}
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