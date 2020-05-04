import React from 'react';
import Hand from './Hand';
import TableCards from './TableCards';

function Player(props) {

  const PlayerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
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
