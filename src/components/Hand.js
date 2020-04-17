import React from 'react';
import Card from './Card';

import useWindowDimensions from './WindowSize';
import { CARDWIDTH } from '../constants';

const Hand = (props) => {
  const { height, width } = useWindowDimensions();

  const handStyle = {
    top: `${20}px`,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    left: `${width * 0.5 - 0.5 * CARDWIDTH * props.handCards.length}px`,
  };

  const selectCard = (index) => {
    let newArr = [...props.isSelectedHand];
    newArr[index] = newArr[index] === true ? false : true;
    props.setIsSelectedHand(newArr);
  };

  return (
    <div className="Hand" style={handStyle}>
      {' '}
      {props.handCards.map((item, index) => (
        <Card
          key={index}
          cardType={item}
          isSelectedHand={props.isSelectedHand[index]}
          onClick={() => selectCard(index)}
        />
      ))}{' '}
    </div>
  );
};

export default Hand;
