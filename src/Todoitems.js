import React, {Component}  from "react";
import Task from './Cards/Task'
import RestMsg from './RestMsg'
import MyClock from './Clock';
import TodoList from './TodoList';

class TodoItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
   componentDidMount () {
     this.setState({taskInit: false})
   }
   setTaskInit = (state) => {
     this.setState({taskInit: state})
   }
  render () {
    let todoEntries = this.props.entries;
    let listItems = todoEntries.map(this.createTasks);
   
    return (
      <>
      <div className="todoItems">
       {listItems.map(listItems => (
          <li>
            {<Task text={listItems} />}
          </li>
        ))}
      </div>
    
      
      </>
      
      
    )
  };

}


export default TodoItems;