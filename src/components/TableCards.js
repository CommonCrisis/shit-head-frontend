import React from 'react';
import useWindowDimensions from './WindowSize';
import { CARDHEIGHT, CARDWIDTH } from '../constants';
import Card from './Card';

const TableCards = (props) => {
  const { height, width } = useWindowDimensions();
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
  const HiddenCardsStyle = {
    top: `${20}px`,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    // left: `${width * 0.5 - 0.5 * CARDWIDTH * props.hiddenCards.length}px`,
  };
  const TopCardsStyle = {
    top: `${CARDHEIGHT}px`,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    // left: `${width * 0.5 - 0.5 * CARDWIDTH * props.topCards.length}px`,
  };

  if (props.topCards.length > 0) {
    return (
      <div className="TopCards" style={TopCardsStyle}>
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
      <div className="HiddenCards" style={HiddenCardsStyle}>
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
