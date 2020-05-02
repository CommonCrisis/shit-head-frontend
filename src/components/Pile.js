import React from 'react';
import { CARDHEIGHTBOARD, CARDWIDTHBOARD } from '../constants';
import takePile from '../functions/takePile';
import Card from './Card';

const Pile = (props) => {
  const cardBack = 'empty';

  if (!props.pile.length) {
    return (
      <Card>
        cardType={cardBack}
        hidden={false}
      </Card>
    );
  } else {
    return (
      <div
        className="Pile"
        onClick={() => takePile(props.playerName, props.gameId, props.setUpdateStauts, props.setServerMessage)}
      >
        <Card
          cardType={props.pile[props.pile.length - 1]}
          hidden={false}>
        </Card>
      </div>
    );
  }
};

export default Pile;
