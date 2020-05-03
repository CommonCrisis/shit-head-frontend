import React from 'react';
import Card from './Card';
import { SCALECARD } from '../constants';

const Deck = (props) => {
  const cardBack = props.deckCards.length > 0 ? 'back' : 'empty';

  return (
    <div className="Deck">
      <picture>
        <Card
          cardType={cardBack}
          scale={SCALECARD}
          hidden={true} >
        </Card>
      </picture>
    </div >
  );
};

export default Deck;
