import './App.css';
import './button.css';
import { Component } from 'react';
import React, {useState, useEffect} from 'react'
import Task from './Cards/Task'
import RestMsg from './RestMsg'
import MyClock from './Clock';
import TodoList from './TodoList';

function App() {

  const [taskInit, setTaskInit] = useState(false)

  return (
    <div className="App">
      
     <div className="ui menu">
     <MyClock />
     <TodoList/>
     </div>
      
      {!(taskInit) && 
      <button className="massive ui black button" onClick={()=> setTaskInit(true)}>
      Start
      </button>
      }
      {taskInit && 
      <button className="massive ui grey button" onClick={()=> setTaskInit(false)}>
      End
      </button>
      }
    
      <div>
        <Task topic="Compliance" description="Follow up all compliance projects" status=" "/>
        <Task topic="Products analysis" description="Check all pending analysis tasks" status=" "/>
        <Task topic="After-sales support" description="Clean pending suuport issues" status=" "/>
      </div>
        {taskInit && 
      <div className="flex-container">
        <RestMsg restType="Break" restInterval="3600" restLength="300" />
      </div>
      }
      
      </div>
  );
}
export default App;
 