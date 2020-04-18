import React from 'react';
import { CARDHEIGHTBOARD, CARDWIDTHBOARD } from '../constants';

const Deck = (props) => {
  const cardBack = props.deckCards.length > 0 ? 'back' : 'empty';

  return (
    <div className="Deck">
      <picture>
        <img
          src={require(`../images/${cardBack}.png`)}
          alt={'Deck'}
          width={CARDWIDTHBOARD}
          height={CARDHEIGHTBOARD}
        />
      </picture>
    </div>
  );
};

export default Deck;
