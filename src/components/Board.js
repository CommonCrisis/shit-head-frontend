import React, { useState, useEffect } from 'react';
import axios from 'axios';

import useWindowDimensions from './windowSize';

import Deck from './Deck';
import Pile from './Pile';
import Player from './Player';
import { CARDHEIGHT, CARDWIDTH } from '../constants';
import { BEURL } from '../apiSource';

import Button from '@material-ui/core/Button';


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
  const [isTurn, setIsTurn] = useState(false);

  // Functions

  const updatePlayerCards = async (playerName) => {
    const response = await axios.get(
      `${BEURL}/play/${props.gameId}/${playerName}/update`
    );
    if (response['data']['type'] === "update") {
      setHandCards(response['data'][playerName]['hand_cards']);
      setTopCards(response['data'][playerName]['top_cards']);
      setHiddenCards(response['data'][playerName]['hidden_cards']);
      setPile(response['data']['board_cards']['pile']);
      setDeckCards(response['data']['board_cards']['deck']);
      setIsTurn(response['data'][playerName]['is_turn']);
      props.setUpdate(false);
    } else {
      props.setServerMessage({
        'type': response['data']['type'],
        "message": response['data']['message'],
        "open": true
      })
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updatePlayerCards(props.playerName);
    }, 1000);
    if (props.update) {
      updatePlayerCards(props.playerName);
    }
    return () => clearInterval(interval);
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
        const response = await axios.get(
          `${BEURL}/play/${props.gameId}/${props.playerName}/play_card/${listOfCards[i]}`
        );
        props.setServerMessage({
          'type': response['data']['type'],
          "message": response['data']['message'],
          "open": true
        })
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
      <picture>
        <img
          src={require(`../images/table.png`)}
          alt={'Selected Card'}
          width={width}
          height={height}
        />
      </picture>
      <div className="BoardCards" style={BoardCardsStyle}>
        <Deck {...{ deckCards }} />
        <Pile
          gameId={props.gameId}
          pile={pile}
          setUpdateStauts={props.setUpdate}
          playerName={props.playerName}
          setServerMessage={props.setServerMessage}
        />
      </div>
      <Button style={playCardButtonStyle} variant="contained" color={isTurn === true ? "primary" : "secundary"} onClick={() =>
        playCards()
      }>Play Card</Button>
      <Player
        gameId={props.gameId}
        // Hand Cards
        {...{
          handCards,
          setIsSelectedHand,
          isSelectedHand,
          // Hidden Cards
          hiddenCards,
          setIsSelectedHidden,
          isSelectedHidden,
          // Top Cards
          topCards,
          setIsSelectedTop,
          isSelectedTop
        }}
      />
    </div>
  );
};

export default Board;
