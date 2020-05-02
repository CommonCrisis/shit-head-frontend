import React from 'react';
import { CARDHEIGHT } from '../constants';
import Card from './Card';

const TableCards = (props) => {
  // Functions
  const selectCardTop = (index) => {
    if (props.handCards.length) {
      return;
    }
    let newArr = [...props.isSelectedTop];
    newArr[index] = newArr[index] === true ? false : true;
    props.setIsSelectedTop(newArr);
  };
  const selectCardHidden = (index) => {
    if (props.handCards.length | props.topCards.length) {
      return;
    }
    let newArr = [...props.isSelectedHidden];
    newArr[index] = newArr[index] === true ? false : true;
    props.setIsSelectedHidden(newArr);
  };
  // Style
  const TableCardsStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  };

  if (props.topCards.length > 0) {
    return (
      <div className="TopCards" style={TableCardsStyle}>
        {props.topCards.map((item, index) => (
          <Card
            key={index}
            cardType={item}
            hidden={false}
            isSelectedTop={props.isSelectedTop[index]}
            onClick={() => selectCardTop(index)}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="HiddenCards" style={TableCardsStyle}>
        {props.hiddenCards.map((item, index) => (
          <Card
            key={index}
            cardType={item}
            hidden={true}
            isSelectedHidden={props.isSelectedHidden[index]}
            onClick={() => selectCardHidden(index)}
          />
        ))}
      </div>
    );
  }
};

export default TableCards;
