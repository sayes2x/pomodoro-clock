import React, { Component, Fragment } from 'react';
import { Label } from './emotion/timerStyle';
import Timer from './components/timer';
import { Link } from './emotion/appStyle';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Label>Pomodoro Clock</Label>
        <Timer />
        <p>Designed and Coded by</p>
        <Link href="https://www.scottaprice.com/" target="_blank">
          Scott A Price
        </Link>
      </Fragment>
    );
  }
}

export default App;
