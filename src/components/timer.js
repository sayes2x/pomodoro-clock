import React, { Component, Fragment } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import Heartbeat from './heartbeat';
import { AdjustTimerContainer } from '../emotion/timerStyle';
import AdjustTimer from './adjustTimer';
import { Clock, TimeLeft, TimerLabel } from '../emotion/clockStyle';
import Controls from './controls';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      timer: 1500,
      session: true,
      sessionLength: 1500,
      breakLength: 300
    };
  }

  countdown = () => {
    const timer = this.state.timer;
    if (timer > 0) {
      this.setState({
        timer: this.state.timer - 1
      });
    } else {
      if (this.state.session === true) {
        this.setState({
          timer: this.state.breakLength
        });
      } else {
        this.setState({
          timer: this.state.sessionLength
        });
      }
      this.setState({
        session: !this.state.session
      });
    }
  };

  handlePause = () => {
    this.setState({
      paused: !this.state.paused
    });
  };

  handleReset = () => {
    this.setState({
      paused: true,
      timer: 1500,
      session: true,
      sessionLength: 1500,
      breakLength: 300
    });
  };

  handlePlus = label => {
    const session = this.state.session,
      timer = this.state.timer,
      breakLength = this.state.breakLength,
      sessionLength = this.state.sessionLength;
    if (label === 'Break' && breakLength <= 59 * 60) {
      this.setState({
        breakLength: breakLength + 60
      });
      if (session === false) {
        this.setState({
          timer: timer + 60
        });
      }
    } else if (label === 'Session' && sessionLength <= 59 * 60) {
      this.setState({
        sessionLength: sessionLength + 60
      });
      if (this.state.session === true) {
        this.setState({
          timer: timer + 60
        });
      }
    }
  };

  handleMinus = label => {
    const session = this.state.session,
      timer = this.state.timer,
      breakLength = this.state.breakLength,
      sessionLength = this.state.sessionLength;
    if (label === 'Break' && breakLength >= 120) {
      this.setState({
        breakLength: breakLength - 60
      });
      if (session === false) {
        this.setState({
          timer: timer - 60
        });
      }
    } else if (label === 'Session' && sessionLength >= 120) {
      this.setState({
        sessionLength: sessionLength - 60
      });
      if (this.state.session === true) {
        this.setState({
          timer: timer - 60
        });
      }
    }
  };

  render() {
    let minutes = Math.floor(this.state.timer / 60),
      seconds = this.state.timer % 60;
    const timerHeartbeat =
      this.state.paused === true ? null : (
        <Heartbeat heartbeatFunction={this.countdown} />
      );
    const timerLabel = this.state.session ? 'Session' : 'Break';
    return (
      <Fragment>
        <AdjustTimerContainer>
          <AdjustTimer
            handlePlus={this.handlePlus}
            handleMinus={this.handleMinus}
            label="Break"
            time={this.state.breakLength}
          />
          <AdjustTimer
            handlePlus={this.handlePlus}
            handleMinus={this.handleMinus}
            label="Session"
            time={this.state.sessionLength}
          />
        </AdjustTimerContainer>
        <Clock>
          <TimerLabel>{timerLabel}</TimerLabel>
          {timerHeartbeat}
          <TimeLeft>
            {minutes}:{seconds > 9 ? seconds : `0${seconds}`}
          </TimeLeft>
        </Clock>
        <Controls
          paused={this.state.paused}
          handlePause={this.handlePause}
          handleReset={this.handleReset}
        />
      </Fragment>
    );
  }
}
