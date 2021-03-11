import React from 'react';
import './button.css';
import './App.css';
import '@djthoms/pretty-checkbox';

  function TodoList () {

    const FILTER_MAP = {
      All: () => true,
      Pending: tasks => !tasks.completed,
      Done: tasks => tasks.completed
    };
      const [filter, setFilter]= React.useState("All")
      const [tasks, setTasks] = React.useState([])
      const [task, setTask] = React.useState("")
      const [subTask, setSubTask] = React.useState("")
      const [isActive, setActive] = React.useState(false);

      const toggleClass = () => {
        setActive(!isActive);
      };

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
      }, [JSON.stringify(tasks)])
      

      function displayAll() {
           setFilter("All")  
          };

      function displayDone() {
            setFilter("Done")  
           };
      
      function displayPending() {
            setFilter("Pending")
           };

    const addTask = (e) => {

      const newTask = {
        id: new Date().getTime(),
        text: task,
        completed: false,
        subTasks: [
          {id: "1", text: "asd", completed: false},
          {id: "2", text: "xyz", completed: true} 
        ]
      }
      e.preventDefault();
      if (newTask.text.trim()!==""){ 
        setTasks([...tasks].concat(newTask))
        setTask("")
      }      
    }

    const addSubTask = (e, task) => {
      e.preventDefault();
      const newSubTask ={
        id: new Date().getTime(),
        text: subTask,
        completed: false,
      }
            
      // if (newSubTask.text.trim()!==""){
        task.subTasks.push(newSubTask)
      // }
      setTasks(tasks);
      setSubTask("");
    }
        function onChange(id) {
          const updatedTasks = [...tasks].map((task) => {
            if (task.id === id) {
              if (task.completed === false) {
                task.completed = true
              } else {
                task.completed = false
              }
            }
            return task
          })
          setTasks(updatedTasks)
        }
       
    function deleteTask(id) {
      // const answer = window.confirm("Delete task?")
      // if (answer === true) {
        const updatedTasks = [...tasks].filter((task) => task.id !== id)
        setTasks(updatedTasks)
      // }
     
    }

    return (
//  Add task input
      <div className="tasks">
        <div className="functionArea">
        <form onSubmit={addTask}>
        <div className="ui action input" id="addTaskInput">
          <input maxLength="30" 
                type="text" 
                onChange={(e) => setTask(e.target.value)}
                value={task}
                placeholder="Add Todo card..">
          </input>
          <button className="ui blue button">
            Add
          </button>
        {/* filter function */}
        </div>
        </form>
        <div className="ui buttons" >
            <button className="ui button" onClick={displayAll}>All</button>
            <button className="ui button" onClick={displayDone}>Done</button>
            <button className="ui button" onClick={displayPending}>Pending</button>
        </div>
        </div>
        
        {/* All tasks container */}

      <div className="taskItems" id="taskItems">   
        
       {/* Task card */}
       {tasks!==null && 
       tasks.filter(FILTER_MAP[filter]).map(task => (
          <div key={task.id} className="task">
            <div className="flex-container">
             <div className="ui raised card dnd-item">
               <div className="content">
                <i className="right floated trash link icon" onClick = {() => deleteTask(task.id)}></i>
                <div className="header">
                 <h2>
                   <div className="ui checkbox">
                      <input type="checkbox" defaultChecked={task.completed} id={task.id} onChange = {() => onChange(task.id)}/>
                       <label className="headerLabel" htmlFor={task.id}>{task.text}</label>
                    </div>
                  </h2>
                </div>
              </div>
            {/* Subtask */}
              <div className="subTask-container">
                <div className="subTodoList">
                  {task.subTasks.map(subTask => 
                    <div key={subTask.id} className="subTaskUndone" onClick={toggleClass}>{subTask.text}</div>
                  )}
                </div>
              </div>
              <form onSubmit={(e) => addSubTask(e, task)} >
              <div className="ui input">
                <input className="subtaskInput" type="text" id={'subTask' + task.id} maxLength="20" onChange={(e) => setSubTask(e.target.value) } placeholder="Add subtask here.."/>
              </div>
              </form>
            
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