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
     <div className="right item">
     {!(taskInit) && 
      <button className=" large ui green button" onClick={()=> setTaskInit(true)}>
      Start
      </button>
      }
      {taskInit && 
      <button className=" large ui red button" onClick={()=> setTaskInit(false)}>
      End
      </button>
      }
     
     </div>
     </div>
     <div>
      <TodoList/>
        {/* <Task topic="Compliance"/>
        <Task topic="Products analysis" description="Check all pending analysis tasks" status=" "/>
        <Task topic="After-sales support" description="Clean pending suuport issues" status=" "/> */}
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
 