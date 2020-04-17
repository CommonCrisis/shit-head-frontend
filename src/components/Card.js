import React from 'react';
import { CARDHEIGHT, CARDWIDTH } from '../constants';

const Card = (props) => {
  const empty_card = 'empty';
  const cardToShow = props.hidden === true ? 'back' : props.cardType;
  const cardStyle = {
    paddingLeft: '5px',
    paddingTop: '15px',
  };

  const cardStyleSelected = {
    paddingLeft: '5px',
  };
  // Show selected cards
  if (props.isSelectedHand | props.isSelectedHidden | props.isSelectedTop) {
    return (
      <div
        className="CardSelected"
        style={cardStyleSelected}
        onClick={props.onClick}
      >
        <picture>
          <img
            src={require(`../images/${cardToShow}.png`)}
            alt={'Selected Card'}
            width={CARDWIDTH}
            height={CARDHEIGHT}
          />
        </picture>
      </div>
    );
  }

  if (props.cardType) {
    return (
      <div className="Card" style={cardStyle} onClick={props.onClick}>
        <picture>
          <img
            src={require(`../images/${cardToShow}.png`)}
            alt={'Hand card'}
            width={CARDWIDTH}
            height={CARDHEIGHT}
          />
        </picture>
      </div>
    );
  } else {
    return (
      <div className="Card" style={cardStyle} onClick={props.onClick}>
        <picture>
          <img
            src={require(`../images/${empty_card}.png`)}
            alt={'Empty hand card'}
            width={CARDWIDTH}
            height={CARDHEIGHT}
          />
        </picture>
      </div>
    );
  }
};

export default Card;
