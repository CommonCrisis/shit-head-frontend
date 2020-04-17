import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useWindowDimensions from './WindowSize';

import Deck from './Deck';
import Pile from './Pile';
import Player from './Player';
import { CARDHEIGHT, CARDWIDTH } from '../constants';

const Board = (props) => {
  // States
  const [pile, setPile] = useState([]);
  const [update, setUpdate] = useState(false);
  const [handCards, setHandCards] = useState([]);
  const [isSelectedHand, setIsSelectedHand] = useState(Array(30).fill(false));
  const [isSelectedHidden, setIsSelectedHidden] = useState(
    Array(3).fill(false)
  );
  const [isSelectedTop, setIsSelectedTop] = useState(Array(3).fill(false));
  const [topCards, setTopCards] = useState([]);
  const [hiddenCards, setHiddenCards] = useState([]);
  const [deckCards, setDeckCards] = useState([]);

  // Functions

  const updatePlayerCards = async () => {
    const response = await axios.get(
      `http://127.0.0.1:54321/play/${props.gameId}/Hans/update`
    );
    setHandCards(response.data.game.hand_cards);
    setTopCards(response.data.game.top_cards);
    setHiddenCards(response.data.game.hidden_cards);
    setPile(response.data.game.pile);
    setDeckCards(response.data.game.deck);
    setUpdate(true);
  };

  useEffect(() => {
    updatePlayerCards();
  }, [update]);

  const playCards = async (listOfCards, cardSelection, selectionSetter) => {
    const arrayLength = handCards.length == true ? 30 : 3;
    if (handCards.length) {
      listOfCards = handCards;
      cardSelection = isSelectedHand;
      selectionSetter = setIsSelectedHand;
    } else if (!handCards.length & topCards.length) {
      listOfCards = topCards;
      cardSelection = isSelectedTop;
      selectionSetter = setIsSelectedTop;
    } else {
      listOfCards = hiddenCards;
      cardSelection = isSelectedHidden;
      selectionSetter = setIsSelectedHidden;
    }

    for (let i = 0; i < listOfCards.length; i++) {
      if (cardSelection[i]) {
        await axios.get(
          `http://127.0.0.1:54321/play/${props.gameId}/Hans/play_card/${listOfCards[i]}`
        );
      }
    }
    setUpdate(!update);
    selectionSetter(Array(arrayLength).fill(false));
  };

  // Styles

  const { height, width } = useWindowDimensions();
  const boardStyle = {
    height: `${height}px`,
    width: `${width}px`,
  };

  const BoardCardsStyle = {
    height: `${CARDHEIGHT}px`,
    width: `${CARDWIDTH * 2 + 40}px`,
    display: 'flex',
    flexDirection: 'row',
    top: `${height / 2 - CARDHEIGHT}px`,
    left: `${width / 2 - CARDWIDTH * 2 + 40}px`,
    position: 'absolute',
  };

  const playCardButtonStyle = {
    bottom: height / 2.5,
    left: width / 2,
    position: 'absolute',
  };

  return (
    <div className="Board" style={boardStyle}>
      {/* Play a Card button - ugly af */}
      <button onClick={() => playCards()} style={playCardButtonStyle}>
        Play Cards...
      </button>
      {/* Table Picture */}
      <picture>
        <img
          src={require(`../images/table.png`)}
          alt={'Selected Card'}
          width={width}
          height={height}
        />
      </picture>
      {/* Board Cards */}
      <div className="BoardCards" style={BoardCardsStyle}>
        <Deck deckCards={deckCards} />
        <Pile gameId={props.gameId} pile={pile} />
      </div>
      <Player
        gameId={props.gameId}
        // Hand Cards
        handCards={handCards}
        setIsSelectedHand={setIsSelectedHand}
        isSelectedHand={isSelectedHand}
        // Hidden Cards
        hiddenCards={hiddenCards}
        setIsSelectedHidden={setIsSelectedHidden}
        isSelectedHidden={isSelectedHidden}
        // Top Cards
        topCards={topCards}
        setIsSelectedTop={setIsSelectedTop}
        isSelectedTop={isSelectedTop}
      />
    </div>
  );
};

export default Board;