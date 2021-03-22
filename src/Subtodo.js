import React, { useEffect, useState} from 'react';
import './button.css';


const Subtodo = ({task, tasks, setTasks}) => {
  const [subTasks, setsubTasks] = useState(task.subTasks)
  const [subTask, setsubTask] = useState("")

  console.log(subTasks)

  useEffect(() => {
    const newtasks = JSON.stringify(tasks)
    localStorage.setItem("tasks", newtasks)
    console.log("subtask change deteced!!")
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
    setsubTask("");
    
  }

  const deleteSubTask = (task, id) => {
    console.log(id)
    const newSubTasks = task.subTasks.splice(task.subTasks.findIndex(t => t.id === id ), 1 )
    console.log(newSubTasks)
    setsubTasks(newSubTasks)
    // setTasks(tasks);

  }

  function onSubTaskChange(task, id) {
    const targetIndex = task.subTasks.findIndex(t => t.id === id )

    if (task.subTasks[targetIndex].completed === false) {
          task.subTasks[targetIndex].completed = true
        } else {
          task.subTasks[targetIndex].completed = false
        }
    let updatedSubtasks = [...task.subTasks]
  console.log(task.subTasks[targetIndex].completed)
  setsubTasks(updatedSubtasks);
  console.log(JSON.stringify(subTasks))
  console.log(tasks)
  }

  return (
    <div className="subTask-container">
      <div className="subTodoList">
        {task.subTasks.map(subTask => 
          <div key={subTask.id} id="subtask">
            <div  className="ui checkbox">
              <input type="checkbox" defaultChecked={subTask.completed} id={subTask.id} onChange = {() => onSubTaskChange(task, subTask.id)}/>
              <label className={subTask.completed ? "subTaskDone" : "subTaskUndone"} htmlFor={subTask.id} id="subtasklabel">{subTask.text}</label>
            </div>
              <button className="ui mini icon button" onClick = {() => deleteSubTask(task, subTask.id)}>
              <i className="x icon"></i>
              </button>
          </div>
        )}
      </div>
        <form onSubmit={(e) => addSubTask(e, task)} >
          <div className="ui input">
           <input className="subtaskInput" type="text" maxLength="18" value={subTask} onChange={(e) => setsubTask(e.target.value) } placeholder="Add subtask here.."/>
          </div>
        </form>
    </div>
  )

}


export default Subtodo;