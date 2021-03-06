// import './Task.css'
import React, {useState, useEffect} from 'react';
import TaskDone from './TaskDone'
import TaskPostpone from './TaskPostpone'

const Task = (props) => {

  
    const [taskState, setTaskState] = useState(false);
 

  return (
    <div className="flex-container">
     <div className="ui raised card">
      <div className="content">
        <i className="right floated close link icon"></i>
        <div className="header"><h2>{props.text}</h2></div>
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
  );
}

export default Task;
