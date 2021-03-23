import React, { useEffect, useState} from 'react';
import './button.css';


const Subtodo = ({task, tasks, setTask, setTasks}) => {
  const [subTasks, setsubTasks] = useState(task.subTasks)
  const [subTask, setsubTask] = useState("")

  useEffect(() => {
    const newtasks = JSON.stringify(tasks)
    localStorage.setItem("tasks", newtasks)

}, [JSON.stringify(subTasks)])

  const addSubTask = (e, task) => {
    e.preventDefault();
    const newSubTask ={
      id: new Date().getTime(),
      text: subTask,
      completed: false,
    }
      const newSubTasks = task.subTasks.push(newSubTask)

    task.completed = false
    let updatedTasks = [...tasks]
    setsubTasks(newSubTasks)
    setsubTask("");
    setTasks(updatedTasks);
  }

  const deleteSubTask = (task, id) => {
    const newSubTasks = task.subTasks.splice(task.subTasks.findIndex(t => t.id === id ), 1 )
    setsubTasks(newSubTasks)
  }

  function onSubTaskChange(task, id) {
    const targetIndex = task.subTasks.findIndex(t => t.id === id )

    if (task.subTasks[targetIndex].completed === false) {
          task.subTasks[targetIndex].completed = true
        } else {
          task.subTasks[targetIndex].completed = false
          task.completed = false
        }
    let updatedSubtasks = [...task.subTasks]
    let updatedTasks = [...tasks]
  setsubTasks(updatedSubtasks);
  setTasks(updatedTasks);
  }

  return (
    <div className="subTask-container">
      <div className="subTodoList">
        {task.subTasks.map(subTask => 
          <div key={subTask.id} id="subtask">
            <div  className="ui checkbox">
              <input type="checkbox" checked={subTask.completed} id={subTask.id} onChange = {() => onSubTaskChange(task, subTask.id)}/>
              <label className={subTask.completed ? "subTaskDone" : "subTaskUndone"} htmlFor={subTask.id} id="subtasklabel">{subTask.text}</label>
            </div>
              <button className="ui mini icon button" onClick = {() => deleteSubTask(task, subTask.id)}>
              <i className="x icon"></i>
              </button>
          </div>
        )}
      </div>
        <form onSubmit={(e) => addSubTask(e, task)} >
          <div className="ui input" id="addsubtask">
           <input className="subtaskInput" type="text" maxLength="18" value={subTask} onChange={(e) => setsubTask(e.target.value) } placeholder="Add subtask here.."/>
          </div>
        </form>
    </div>
  )

}


export default Subtodo;