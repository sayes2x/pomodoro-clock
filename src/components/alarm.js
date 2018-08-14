import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import backToWork from '../sound/back-to-work.mp3';
import takeABreak from '../sound/take-a-break.mp3';

const Alarm = props => {
  const alarm = props.session ? backToWork : takeABreak;
  return (
    <Fragment>
      <audio autoPlay>
        <source src={alarm} type="audio/mpeg" />
      </audio>
    </Fragment>
  );
};

Alarm.propTypes = {
  session: PropTypes.bool
};

export default Alarm;
