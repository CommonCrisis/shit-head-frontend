import React from 'react';
import Hand from './Hand';

import TableCards from './TableCards';

import useWindowDimensions from './WindowSize';
import { CARDHEIGHT } from '../constants';

function Player(props) {
  const { height, width } = useWindowDimensions();

  const PlayerStyle = {
    height: `${CARDHEIGHT + 20}px`,
    width: `${width - 100}px`,
    top: `${height - 3 * CARDHEIGHT}px`,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
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
