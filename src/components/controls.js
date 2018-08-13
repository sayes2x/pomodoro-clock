import React, { Fragment } from 'react';
import { TiMediaPlay, TiMediaPause, TiArrowSync } from 'react-icons/ti';
import { ControlButton } from '../emotion/timerStyle';

const Controls = props => {
  return (
    <Fragment>
      {props.paused ? (
        <Fragment>
          <ControlButton>
            <TiMediaPlay onClick={props.handlePause} />
          </ControlButton>
          <ControlButton>
            <TiArrowSync onClick={props.handleReset} />
          </ControlButton>
        </Fragment>
      ) : (
        <Fragment>
          <ControlButton>
            <TiMediaPause onClick={props.handlePause} />
          </ControlButton>
          <ControlButton>
            <TiArrowSync onClick={props.handleReset} />
          </ControlButton>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Controls;
