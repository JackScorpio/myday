import React, { useEffect, useState} from 'react';
import './button.css';


const Subtodo = ({task, tasks, setTasks, setTask}) => {
  const [subTasks, setsubTasks] = useState([])
  const [subTask, setSubTask] = useState("")

  useEffect(() => {
    const jsonset = JSON.stringify(tasks)
    localStorage.setItem("tasks", jsonset)
  }, [JSON.stringify(subTasks)])

  const addSubTask = (e, task) => {
    e.preventDefault();
    const newSubTask ={
      id: new Date().getTime(),
      text: subTask,
      completed: false,
    }
      task.subTasks.push(newSubTask)
    // }
    setsubTasks(task.subTasks)
    // setTask(task);
    setTasks(tasks);
    setSubTask("");
    
  }

  const deleteSubTask = (task, id) => {
    console.log(id)
    const newSubTasks = task.subTasks.splice(task.subTasks.findIndex(t => t.id === id ), 1 )
    console.log(newSubTasks)
    setsubTasks(newSubTasks)
    setTasks(tasks);
    setTask("")
  }

  function onSubTaskChange(task, id) {

    const targetIndex = task.subTasks.findIndex(t => t.id === id )

    if (task.subTasks[targetIndex].completed === false) {
          task.subTasks[targetIndex].completed = true
        } else {
          task.subTasks[targetIndex].completed = false
        }
    
  console.log(task.subTasks[targetIndex].completed)
  console.log(task.subTasks)
  setsubTasks(task.subTasks);
  }

  return (
    <div className="subTask-container">
      <div className="subTodoList">
                  
        {task.subTasks.map(subTask => 
          <div id="subtask">
            <div key={subTask.id} className="ui checkbox">
              <input type="checkbox" defaultChecked={subTask.completed} id={subTask.id} onChange = {() => onSubTaskChange(task, subTask.id)}/>
              <label htmlFor={subTask.id} id="subtasklabel">{subTask.text}</label>
            </div>
              <button className="ui mini icon button" onClick = {() => deleteSubTask(task, subTask.id)}>
              <i className="x icon"></i>
              </button>
          </div>
        )}
      </div>
        <form onSubmit={(e) => addSubTask(e, task)} >
          <div className="ui input">
           <input className="subtaskInput" type="text" maxLength="18" value={subTask} onChange={(e) => setSubTask(e.target.value) } placeholder="Add subtask here.."/>
          </div>
        </form>
    </div>
  )

}


export default Subtodo;