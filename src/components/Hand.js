import React from 'react';
import Card from './Card';

import { CARDHEIGHT } from '../constants';

const Hand = (props) => {

  const handStyle = {
    height: `${CARDHEIGHT * 1.1}px`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
