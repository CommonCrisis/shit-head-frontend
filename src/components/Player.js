import React from 'react';
import Hand from './Hand';

import TableCards from './TableCards';

import useWindowDimensions from './windowSize';
import { CARDHEIGHT } from '../constants';

function Player(props) {
  const { height, width } = useWindowDimensions();

  const PlayerStyle = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: `${width / 1.5}px`,
    height: `${2.2 * CARDHEIGHT}px`,
    bottom: `${0}px`,
    left: `${width * 0.5 + (-0.5 * width) / 1.5}px`,
  };
  return (
    <div className="Player" style={PlayerStyle}>
      <Hand
        gameId={props.gameId}
        handCards={props.handCards}
        setIsSelectedHand={props.setIsSelectedHand}
        isSelectedHand={props.isSelectedHand}
      />{' '}
      <TableCards
        gameId={props.gameId}
        handCards={props.handCards}
        // Hidden Cards
        hiddenCards={props.hiddenCards}
        setIsSelectedHidden={props.setIsSelectedHidden}
        isSelectedHidden={props.isSelectedHidden}
        // Top Cards
        topCards={props.topCards}
        setIsSelectedTop={props.setIsSelectedTop}
        isSelectedTop={props.isSelectedTop}
      />{' '}
    </div>
  );
}

export default Player;
