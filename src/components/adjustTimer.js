import React from 'react';
import { TiPlus, TiMinus } from 'react-icons/ti';

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
      <p>
        <TiPlus onClick={handlePlus} /> {props.time / 60}{' '}
        <TiMinus onClick={handleMinus} />
      </p>
    </div>
  );
};

export default AdjustTimer;
