import React from 'react';
import { CARDHEIGHTBOARD, CARDWIDTHBOARD } from '../constants';
import takePile from './takePile';

const Pile = (props) => {
  const cardBack = 'empty';

  const pileStyle = {
    paddingLeft: '20px',
  };

  if (!props.pile.length) {
    return (
      <div className="Pile" style={pileStyle}>
        <picture>
          <img
            src={require(`../images/${cardBack}.png`)}
            alt={'Pile'}
            width={CARDWIDTHBOARD}
            height={CARDHEIGHTBOARD}
          />
        </picture>
      </div>
    );
  } else {
    return (
      <div
        className="Pile"
        onClick={() => takePile('Hans', props.gameId, props.setUpdateStauts)}
        style={pileStyle}
      >
        <picture>
          <img
            src={require(`../images/${props.pile[props.pile.length - 1]}.png`)}
            alt={'Pile'}
            width={CARDWIDTHBOARD}
            height={CARDHEIGHTBOARD}
          />
        </picture>
      </div>
    );
  }
};

export default Pile;
