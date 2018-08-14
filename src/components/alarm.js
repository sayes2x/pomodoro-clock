import React, { Component, Fragment } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// eslint-disable-next-line
import Heartbeat from './heartbeat';

import backToWork from '../sound/back-to-work.mp3';
import takeABreak from '../sound/take-a-break.mp3';

export default class Alarm extends Component {
  render() {
    const alarm = this.props.session ? backToWork : takeABreak;
    return (
      <Fragment>
        <audio autoPlay>
          <source src={alarm} type="audio/mpeg" />
        </audio>
      </Fragment>
    );
  }
}
