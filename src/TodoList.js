import React, { useState, useEffect } from "react";
import "./button.css";
import Subtodo from "./Subtodo";
import Dropdown from "./Dropdown";

function TodoList() {
  const options = {
    All: () => true,
    Pending: (tasks) => !tasks.completed,
    Done: (tasks) => tasks.completed,
  };
  const [filter, setFilter] = useState("All");
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  useEffect(() => {
    const jsonget = localStorage.getItem("tasks");
    const loadedTasks = JSON.parse(jsonget);
    if (loadedTasks) {
      setTasks(loadedTasks);
    }
  }, []);

  useEffect(() => {
    const jsonset = JSON.stringify(tasks);
    localStorage.setItem("tasks", jsonset);
  }, [tasks, task]);

  const addTask = (e) => {
    const newTask = {
      id: new Date().getTime(),
      text: task,
      completed: false,
      subTasks: [],
    };
    e.preventDefault();
    if (newTask.text.trim() !== "") {
      setTasks([...tasks].concat(newTask));
      setTask("");
    }
  };

  function onChange(id) {
    let updatedTasks = [...tasks].map((task) => {
      if (task.id === id) {
        if (task.completed === false) {
          task.completed = true;
          if (task.subTasks) {
            task.subTasks.map((subTask) => {
              if (subTask.completed === false) {
                subTask.completed = true;
              }
            });
          }
        } else {
          task.completed = false;
        }
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    // const answer = window.confirm("Delete task?")
    // if (answer === true) {
    const updatedTasks = [...tasks].filter((task) => task.id !== id);
    setTasks(updatedTasks);
    // }
  }

  return (
    //  Add task input
    <div className='tasks'>
      <div className='functionArea'>
        <div className='ui stackable centered grid container'>
          <div className='addtaskArea'>
            <form className='ui form' onSubmit={addTask}>
              <div className='ui action input' id='addTaskInput'>
                <input
                  maxLength='30'
                  type='text'
                  onChange={(e) => setTask(e.target.value)}
                  value={task}
                  placeholder='Add Todo card..'
                ></input>
                <button className='ui blue button'>Add</button>
              </div>
            </form>
          </div>

          <div className='filterContainer'>
            <Dropdown
              filter={filter}
              onFilterChange={setFilter}
              options={options}
            />
          </div>
        </div>
      </div>

      {/* All tasks container */}

      <div className='ui centered grid taskItems' id='taskItems'>
        {/* Task card */}
        {tasks !== null &&
          tasks.filter(options[filter]).map((task) => (
            <div key={task.id} className='task' draggable='true'>
              <div className='flex-container'>
                <div className='ui raised card draggable'>
                  <div className='content'>
                    <i
                      className='right floated trash link icon'
                      onClick={() => deleteTask(task.id)}
                    ></i>
                    <div className='header'>
                      <h2>
                        <div className='ui checkbox'>
                          <input
                            type='checkbox'
                            checked={task.completed}
                            id={task.id}
                            onChange={() => onChange(task.id)}
                          />
                          <label id='headerLabel' htmlFor={task.id}>
                            {task.text}
                          </label>
                        </div>
                      </h2>
                    </div>
                  </div>

                  <Subtodo
                    task={task}
                    tasks={tasks}
                    setTask={setTask}
                    setTasks={setTasks}
                  />

                  {task.completed === false && (
                    <div className='ui negative message'>
                      <div className='taskstatusbar'>This task is pending.</div>
                    </div>
                  )}
                  {task.completed === true && (
                    <div className='ui positive message'>
                      <div className='taskstatusbar'>This task is done.</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
