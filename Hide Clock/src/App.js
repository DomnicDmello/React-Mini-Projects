import { Component } from "react";
import TimeClock from "./Components/TimeClock";

import "./styles.css";

class App extends Component {
  state = {
    showClock: false
  };

  onSwitchClock = () => {
    this.setState((prevState) => {
      const { showClock } = prevState;
      return {
        showClock: !showClock
      };
    });
  };

  render() {
    const { showClock } = this.state;
    return (
      <div className="app-container">
        <button onClick={this.onSwitchClock} type="button" className="button">
          {showClock ? "Hide Clock" : "Show Clock"}
        </button>
        {showClock && <TimeClock />}
      </div>
    );
  }
}

export default App;
