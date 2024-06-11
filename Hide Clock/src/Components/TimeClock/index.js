import { Component } from "react";
import "./index.css";

class TimeClock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log("Constructor method called.....");
  }

  tick = () => {
    console.log("Tick Method is called...");
    this.setState({
      date: new Date()
    });
  };

  componentDidMount() {
    console.log("Component Did mount called");
    console.log("-------------------------");
    this.timerID = setInterval(this.tick, 1000);
  }

  componentDidUpdate() {
    console.log("Component Did Update called....");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount called....");
    clearInterval(this.timerID);
  }

  render() {
    console.log("Render method is called...");
    const { date } = this.state;
    return (
      <div className="bg-container">
        <h2 className="title">Time Clock</h2>
        <p className="time-text">{date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default TimeClock;
