import './App.css';
import './button.css';
import { Component } from 'react';
import React, {useState, useEffect} from 'react'
import Task from './Cards/Task'
import RestMsg from './RestMsg'
import MyClock from './Clock';

function App() {

  const [taskInit, setTaskInit] = useState(false)

  return (
    <div className="App">
     <div class="ui menu">
      <div class="item">
        <div class="ui primary button">Sign up</div>
      </div>
      <div class="item">
        <div class="ui button">Log-in</div>
      </div>
    </div>
      <MyClock />
    {!(taskInit) && 
    <button className="massive ui green button" onClick={()=> setTaskInit(true)}>
    Start
    </button>
    }
    {taskInit && 
    <button className="massive ui red button">
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
 