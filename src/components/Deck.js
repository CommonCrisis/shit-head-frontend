import React from 'react';
import Card from './Card';

const Deck = (props) => {
  const cardBack = props.deckCards.length > 0 ? 'back' : 'empty';

  return (
    <div className="Deck">
      <picture>
        <Card>
          cardType={"back"}
        hidden={true}
        </Card>
      </picture>
    </div >
  );
};

export default Deck;
