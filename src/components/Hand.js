import React from 'react';
import Card from './Card';

import { CARDHEIGHT } from '../constants';

const Hand = (props) => {

  const handStyle = {
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
          hidden={false}
          onClick={() => selectCard(index)}
        />
      ))}{' '}
    </div>
  );
};

export default Hand;
