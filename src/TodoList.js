import React, { Component } from 'react';
import './button.css';
import './App.css';
import TaskDone from './TaskDone';
import TaskPostpone from './TaskPostpone'


// class TodoList extends Component {

//   userData;

//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     }
//     // console.log(this.state)
//     this.addItem = this.addItem.bind(this)
//   }

//   componentDidMount() {
//     localStorage.getItem('items') && this.setState({
//       items: JSON.parse(localStorage.getItem('items'))
//     })
  
//   }

  function TodoList () {

      const [tasks, setTasks] = React.useState([])
      const [task, setTask] = React.useState("")
      const [taskState, setTaskState] = React.useState(false);
      
      const addTask = (e) => {

      const newTask = {
        id: new Date().getTime(),
        text: task,
        completed: false
      }
    
      setTasks([...tasks].concat(newTask))
      setTask("")
    
      // this.setState((prevState) => {
      //   const items = prevState.items.concat(newItem);
      //   localStorage.setItem('items',JSON.stringify(items))
      //   return {
      //     items: prevState.items.concat(newItem)
      //   };
      // });
      e.preventDefault();
    }

  
    function deleteTask(id) {
      const updatedTasks = [...tasks].filter((task) => task.id !== id)
      setTasks(updatedTasks)
    }



    // let todoEntries = this.state.items;
    // let listItems = todoEntries.map(this.createTasks);
    // console.log(listItems)
    return (
 
      <div className="tasks">
        <form onSubmit={addTask}>
        <div className="ui action input">
          <input maxLength="18" 
                type="text" 
                onChange={(e) => setTask(e.target.value)}
                value={task}
                placeholder="Add Todo card..">
          </input>
          <button className="ui grey button">
            Add
          </button>
        </div>
        </form>
        
      <div className="taskItems">
       {tasks.map(task => (
          <div key={task.id} className="task">
            
          <div className="flex-container">
            <div className="ui raised card">
               <div className="content">
               <i className="right floated trash link icon" onClick = {() => deleteTask(task.id)}></i>
                <div className="header"><h2>{task.text}</h2></div>
              </div>
            
            <div className="extra content">
              <div className="ui buttons">
                <button className="positive ui button" onClick={() => setTaskState('done')}>Done</button>
                <div className="or"></div>
                <button className="negative ui button" onClick={() => setTaskState('postpone')}>Postpone</button>
              </div>
            </div>
            {taskState==='done' && <TaskDone />}
            {taskState==='postpone' && <TaskPostpone />}

            </div>
            </div>
            
        
            
          </div>
           
          
        ))}
      </div>
      
      </div>

    )
  }



export default TodoList;