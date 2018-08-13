import React, { Component, Fragment } from 'react';
import { AdjustTimerContainer } from '../emotion/timerStyle';
import AdjustTimer from '../components/adjustTimer';
import { Clock, TimerLabel } from '../emotion/clockStyle';
import Controls from '../components/controls';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: Date.now(),
      elapsedTime: 0,
      session: true,
      sessionLength: 25,
      breakLength: 5
    };
  }

  setElapsedTime = time => {
    const currentTimer = this.state.session
      ? this.state.sessionLength
      : this.state.breakLength;
    if (time / 60 <= currentTimer) {
      this.setState({ elapsedTime: time });
    } else {
      this.setState({
        startTime: Date.now(),
        elapsedTime: 0
      });
      if (this.state.session) {
        this.setState({
          session: false,
          time: this.state.breakLength
        });
      } else {
        this.setState({
          session: true,
          time: this.state.sessionLength
        });
      }
    }
  };

  render() {
    const session = this.state.session;
    const timerLabel = session ? 'Session' : 'Break';
    return (
      <Fragment>
        <AdjustTimerContainer>
          <AdjustTimer label="Break" time={this.state.breakLength} />
          <AdjustTimer label="Session" time={this.state.sessionLength} />
        </AdjustTimerContainer>
        <Clock>
          <TimerLabel>{timerLabel}</TimerLabel>
        </Clock>
        <Controls />
      </Fragment>
    );
  }
}
