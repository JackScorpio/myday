import React from 'react';
import './button.css';
import './App.css';

import { Dropdown } from 'semantic-ui-react'

  function TodoList () {

      const [tasks, setTasks] = React.useState([])
      const [task, setTask] = React.useState("")

 
      React.useEffect(() => {
        const jsonget = localStorage.getItem("tasks")
        const loadedTasks = JSON.parse(jsonget)

          if(loadedTasks) {
            setTasks(loadedTasks)
          }
      }, [])

      React.useEffect(() => {
        const jsonset = JSON.stringify(tasks)
        localStorage.setItem("tasks", jsonset)
      }, [tasks])


      
    const addTask = (e) => {

      const newTask = {
        id: new Date().getTime(),
        text: task,
        completed: false
      }
      e.preventDefault();
      if (newTask.text.trim()===""){
        alert('Task title is empty!') 
        return null
      }
      
      setTasks([...tasks].concat(newTask))
      setTask("")
      console.log(tasks)
      
    }

      function setTaskDone(id) {
        const updatedTasks = [...tasks].map((task) => {
          if (task.id === id) {
            if (task.completed === false) {
              task.completed = true
            }
          }
          return task
        })
        setTasks(updatedTasks)
      }

      function setTaskPending(id) {
        const updatedTasks = [...tasks].map((task) => {
          if (task.id === id) {
            if (task.completed === true) {
              task.completed = false
            }
          }
          return task
        })
        setTasks(updatedTasks)
      }


    function deleteTask(id) {
      const answer = window.confirm("Delete task?")
      if (answer === true) {
        const updatedTasks = [...tasks].filter((task) => task.id !== id)
        setTasks(updatedTasks)
      }
     
    }

    const filterOptions = [
      {
        key: 'All',
        text: 'All',
        value: 'All',
      },
      {
        key: 'Done',
        text: 'Done',
        value: 'Done',
      },
      {
        key: 'Pending',
        text: 'Pending',
        value: 'Pending',
      },
      
    ]

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
          <Dropdown
            placeholder='Filter'
            selection
            options={filterOptions}
          />
        </div>
        </form>
        
      <div className="taskItems">
       {tasks!==null && tasks.map(task => (
          <div key={task.id} className="task">
            
          <div className="flex-container">
            <div className="ui raised card">
               <div className="content">
               <i className="right floated trash link icon" onClick = {() => deleteTask(task.id)}></i>
                <div className="header"><h2>{task.text}</h2></div>
              </div>
            
            <div className="extra content">
              <div className="ui buttons">
                <button className="positive ui button" onClick={() => setTaskDone(task.id)}>Done</button>
                <div className="or"></div>
                <button className="negative ui button" onClick={() => setTaskPending(task.id)}>Pending</button>
              </div>
            </div>
            {task.completed===false && <div className="ui negative message">
              <div className="header">
                This task is pending.
              </div>
            </div>}
            {task.completed===true && <div className="ui positive message">
              <div className="header">
                This task is done.
              </div>
            </div>}

            </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    )
  }



export default TodoList;