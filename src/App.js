import "./App.css";
import "./button.css";
import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import MyClock from "./Clock";
import TodoList from "./TodoList";

function App() {
  Notification.requestPermission();
  const [taskInit, setTaskInit] = useState(false);

  return (
    <div className='App'>
      <div className='ui stackable three column padded grid headerBar'>
        <div className='column'>
          <MyClock />
        </div>
        <div className='column startContainer'>
          {!taskInit && (
            <button
              className='ui big green button'
              onClick={() => setTaskInit(true)}
            >
              Start
            </button>
          )}
          {taskInit && (
            <button
              className='ui big red button'
              onClick={() => setTaskInit(false)}
            >
              End
            </button>
          )}
          {taskInit && (
            <div className='timer'>
              <Timer restType='Break' restInterval='15' restLength='300' />
            </div>
          )}
        </div>
        <div className='column widgetsContainer'>
          <div className='ui compact menu'>
            <a className='item'>
              <i className='globe icon'></i>
              Translate
            </a>
            <a className='item'>
              <i className='video camera icon'></i>
              Channels
            </a>
            <a className='ui pointing dropdown link item'>
              <i className='external square alternate icon'></i>
              Links
              <i class='dropdown icon'></i>
              <div class='menu'>
                <div class='item'>
                  <i class='dropdown icon'></i>
                  <span class='text'>Categories</span>
                  <div class='menu'>
                    <div class='item'>Unread</div>
                    <div class='item'>Promotions</div>
                    <div class='item'>Updates</div>
                  </div>
                </div>
                <div class='item'>Archive</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <TodoList />
    </div>
  );
}
export default App;
