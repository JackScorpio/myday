import './App.css';
import './button.css';
import React, {useState, useEffect} from 'react'
import Timer from './Timer'
import MyClock from './Clock';
import TodoList from './TodoList';


function App() {
  // Notification.requestPermission();
  const [taskInit, setTaskInit] = useState(false)

  return (
    <div className="App">
     <div className="header">
     <div className="clockcontainer">
      <MyClock />
      </div>
       <div className="startbutton">
         {!(taskInit) && 
          <button className="big ui green button" onClick={()=> setTaskInit(true)}>
          Start
          </button>
        }
        {taskInit && 
          <button className="big ui red button" onClick={()=> setTaskInit(false)}>
          End
          </button>
        }
         {taskInit && 
          <div className="timer">
          <Timer restType="Break" restInterval="15" restLength="300" />
          </div>
        }
       </div>
        
       
      
     </div>
       <TodoList/>
      
      </div>
  );
}
export default App;
 