import React, { Component } from "react";
import Stopwatch from "../util/Stopwatch";

export default class StopWatchView extends Component {
  componentDidMount() {
    this.stopwatch = new Stopwatch(document.querySelector(".stopwatch"));
  }

  start = () => {
    this.stopwatch.start();
  };
  stop = () => {
    this.stopwatch.stop();
  };
  restart = () => {
    this.stopwatch.restart();
  };

  render() {
    return (
      <>
        <nav class="controls">
          <button class="sw-button mt-25" onClick={this.start}>
            Start
          </button>

          <button class="sw-button mt-25" onClick={this.stop}>
            Stop
          </button>

          <button class="sw-button mt-25" onClick={this.restart}>
            Restart
          </button>
        </nav>
        <div class="stopwatch mt-25"></div>
      </>
    );
  }
}
