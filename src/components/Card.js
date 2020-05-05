import React, { useState } from 'react';
import { CARDHEIGHT, CARDWIDTH, } from '../constants';
import cssMapper from '../functions/cardCssMapper';

const Card = (props) => {

  const [isHovered, setIsHovered] = useState(false);

  const defineCardStyle = (selected, scale) => {
    var cardImage = "empty"
    if (props.cardType) {
      cardImage = props.hidden === true ? 'back' : props.cardType
    };
    var mapper = cssMapper(cardImage)

    const image_source = require(`../images/card_new.png`)
    scale = isHovered === true ? scale + 0.05 : scale

    var margin = props.cropped === true ? `${-(CARDWIDTH * scale * .2)}px` : '5px'

    return {
      backgroundImage: `url(${image_source})`,
      backgroundSize: "1300% 500%", // 13 x 5 cards
      backgroundPosition: `${(mapper['row'] / 12) * 100}% ${(mapper['column'] / 4) * 100}%`, // 12 --> cards row -1 and 3 --> cards columns - 1
      height: `${CARDHEIGHT * scale}px`,
      width: `${CARDWIDTH * scale}px`,
      marginLeft: margin,
      marginTop: selected === true ? "-20px" : "0px"
    }
  };
  const selected = props.isSelectedHand | props.isSelectedHidden | props.isSelectedTop === true ? true : false
  return (
    <div
      style={defineCardStyle(selected, props.scale)}
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(props.hidden === true ? false : true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    </div>
  );
};

export default Card;
