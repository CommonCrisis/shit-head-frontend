import React from 'react';
import { CARDHEIGHT, CARDWIDTH, } from '../constants';
import cssMapper from '../functions/cardCssMapper';

const Card = (props) => {

  const defineCardStyle = (selected, scale) => {
    var cardImage = "empty"
    if (props.cardType) {
      cardImage = props.hidden === true ? 'back' : props.cardType
    };

    var mapper = cssMapper(cardImage)

    const image_source = selected === false ? require(`../images/new_cards.png`) : require(`../images/new_cards_selected.png`)

    return {
      backgroundImage: `url(${image_source})`,
      backgroundSize: "1300% 400%", // 13 x 4 cards
      backgroundPosition: `${(mapper['row'] / 12) * 100}% ${(mapper['column'] / 3) * 100}%`, // 12 --> cards row -1 and 3 --> cards columns - 1
      height: `${CARDHEIGHT * scale}px`,
      width: `${CARDWIDTH * scale}px`,
      marginLeft: "5px",
    }
  };
  const selected = props.isSelectedHand | props.isSelectedHidden | props.isSelectedTop === true ? true : false
  return (
    <div
      style={defineCardStyle(selected, 0.8)}
      onClick={props.onClick}
    >
    </div>
  );
};

export default Card;
