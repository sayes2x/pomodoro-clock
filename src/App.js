import React, { Component, Fragment } from 'react';
import { Label } from './emotion/timerStyle';
import Timer from './components/timer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Label>Pomodoro Clock</Label>
        <Timer />
        <p>Designed and Coded by</p>
        <a href="scottaprice.com">Scott A Price</a>
      </Fragment>
    );
  }
}

export default App;
