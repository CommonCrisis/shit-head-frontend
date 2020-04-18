import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useWindowDimensions from './windowSize';

import Deck from './Deck';
import Pile from './Pile';
import Player from './Player';
import { CARDHEIGHT, CARDWIDTH } from '../constants';

const Board = (props) => {
  // States
  const [pile, setPile] = useState([]);
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
    props.setUpdate(false);
  };

  useEffect(() => {
    if (props.update) {
      updatePlayerCards();
    }
  }, [props.update]);

  const playCards = async (listOfCards, cardSelection, selectionSetter) => {
    const arrayLength = handCards.length === true ? 30 : 3;
    if (handCards.length) {
      listOfCards = handCards;
      cardSelection = isSelectedHand;
      selectionSetter = setIsSelectedHand;
    } else if (!handCards.length && topCards.length) {
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
    props.setUpdate(true);
    selectionSetter(Array(arrayLength).fill(false));
  };

  // Styles

  const { height, width } = useWindowDimensions();
  const boardStyle = {
    height: `${height}px`,
    width: `${width}px`,
  };

  const BoardCardsStyle = {
    height: `${CARDHEIGHT * 1.1}px`,
    width: `${CARDWIDTH * 2.5}px`,
    display: 'flex',
    flexDirection: 'row',
    bottom: `${height * 0.5 + CARDHEIGHT * 0.8}px`,
    left: `${width / 2 - CARDWIDTH * 2}px`,
    position: 'absolute',
  };

  const playCardButtonStyle = {
    display: 'flex',
    position: 'absolute',
    // height: `${2.2 * CARDHEIGHT}px`,
    bottom: `${2.5 * CARDHEIGHT}px`,
    left: `${width * 0.45}px`,
  };

  return (
    <div className="Board" style={boardStyle}>
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
        <Pile
          gameId={props.gameId}
          pile={pile}
          setUpdateStauts={props.setUpdate}
        />
      </div>
      {/* Play a Card button - ugly af */}
      <button onClick={() => playCards()} style={playCardButtonStyle}>
        Play Cards...
      </button>
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
      {/* </div> */}
    </div>
  );
};

export default Board;
