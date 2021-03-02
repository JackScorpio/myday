import React from 'react';
import './Clock.css';
import { Component } from 'react';

class Myclock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="clock">
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Myclock;
