import React from 'react';
import PropTypes from 'prop-types';
import { TiPlus, TiMinus } from 'react-icons/ti';
import { ControlButton, ControlText } from '../emotion/timerStyle';

const AdjustTimer = props => {
  const handlePlus = () => {
    props.handlePlus(props.label);
  };

  const handleMinus = () => {
    props.handleMinus(props.label);
  };

  return (
    <div>
      <h2>{props.label} Length</h2>
      <ControlButton>
        <TiPlus onClick={handlePlus} />
      </ControlButton>
      <ControlText>{props.time / 60}</ControlText>
      <ControlButton>
        <TiMinus onClick={handleMinus} />
      </ControlButton>
    </div>
  );
};

AdjustTimer.propTypes = {
  handlePlus: PropTypes.func,
  handleMinus: PropTypes.func,
  label: PropTypes.string,
  time: PropTypes.number
};

export default AdjustTimer;
