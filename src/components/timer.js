import React, { Component, Fragment } from 'react';
import Heartbeat from './heartbeat';
import { AdjustTimerContainer } from '../emotion/timerStyle';
import AdjustTimer from './adjustTimer';
import { Clock, TimeLeft, TimerLabel } from '../emotion/clockStyle';
import Controls from './controls';
import Alarm from './alarm';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paused: true,
      timer: 1500,
      session: true,
      sessionLength: 1500,
      breakLength: 300,
      alarm: false
    };
  }

  countdown = () => {
    this.setAlarm();
    const timer = this.state.timer,
      session = this.state.session;
    if (timer > 0) {
      this.setState({
        timer: timer - 1
      });
    } else {
      if (session === true) {
        this.setState({
          timer: this.state.breakLength
        });
      } else {
        this.setState({
          timer: this.state.sessionLength
        });
      }
      this.setState({
        session: !session
      });
    }
  };

  setAlarm = () => {
    const timer = this.state.timer,
      session = this.state.session;
    if (timer === 0) {
      this.setState({
        alarm: true
      });
    } else if (session === true) {
      if (this.state.sessionLength - timer > 3) {
        this.setState({
          alarm: false
        });
      }
    } else if (session === false) {
      if (this.state.breakLength - timer > 3) {
        this.setState({
          alarm: false
        });
      }
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
      if (session === true) {
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
      if (session === true) {
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
    const alarm = this.state.alarm ? (
      <Alarm session={this.state.session} />
    ) : null;
    return (
      <Fragment>
        {alarm}
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
