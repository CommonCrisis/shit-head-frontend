import React from 'react';
import { CARDHEIGHT, CARDWIDTH } from '../constants';

const Deck = (props) => {
  const cardBack = props.deckCards.length > 0 ? 'back' : 'empty';

  return (
    <div className="Deck">
      <picture>
        <img
          src={require(`../images/${cardBack}.png`)}
          alt={'Deck'}
          width={CARDWIDTH}
          height={CARDHEIGHT}
        />
      </picture>
    </div>
  );
};

export default Deck;
