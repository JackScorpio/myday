import React, { Component } from 'react';
import './button.css';
import './App.css';
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
  
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }

  componentDidMount() {
    localStorage.getItem('items') && this.setState({
      items: JSON.parse(localStorage.getItem('items'))
    })
  
  }


  render() {
    let todoEntries = this.state.items;
    let listItems = todoEntries.map(this.createTasks);
    console.log(listItems)
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
        <>
      <div className="todoItems">
       {listItems.map(listItems => (
          <li>
            {<Task text={listItems} key={listItems} />}
          </li>
        ))}
      </div>
      </>
      </div>

    )
  }

}

export default TodoList;