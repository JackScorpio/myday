import React from 'react';
import './Clock.css';

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
    let showTime = this.state.date.toLocaleTimeString()
    return (
      <div className="clock">
        <p>{showTime}</p>
      </div>
    );
  }
}

export default Myclock;
