import React, { Component } from 'react';
import { TimeLeft } from '../emotion/clockStyle';

const timeLeft = (elapsedSeconds, time) => {
  let minutes = time - Math.ceil(elapsedSeconds / 60),
    seconds = calculateSeconds(elapsedSeconds % 60);
  return { minutes, seconds };
};

const calculateSeconds = seconds => (seconds === 0 ? 0 : 60 - seconds);

export default class Timer extends Component {
  componentDidMount() {
    this.setTimer();
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearInterval(this.timeout);
    }
  }

  setTimer() {
    this.timeout = setInterval(this.updateClock.bind(this), 50);
  }

  updateClock() {
    this.props.setElapsedTime(this.getElapsedTime());
  }

  getElapsedTime = () => {
    return Math.floor((Date.now() - this.props.startTime) / 1000);
  };

  render() {
    let time = timeLeft(this.props.elapsedTime, this.props.time);
    return (
      <TimeLeft>
        {time.minutes}:
        {time.seconds > 9 ? time.seconds : `0${time.seconds}`}
      </TimeLeft>
    );
  }
}
