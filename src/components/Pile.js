import React from 'react';
import { CARDHEIGHTBOARD, CARDWIDTHBOARD } from '../constants';
import takePile from '../functions/takePile';

const Pile = (props) => {
  const cardBack = 'empty';

  const pileStyle = {
    backgroundColor: 'black',
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
        onClick={() => takePile(props.playerName, props.gameId, props.setUpdateStauts, props.setServerMessage)}
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
