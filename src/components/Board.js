import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Deck from './Deck';
import Pile from './Pile';
import Player from './Player';
import ChipMessages from './ChipMessages';
import OpponentEntry from './OpponentEntry';
import selectTopCards from '../functions/selectTopCards';
import Button from '@material-ui/core/Button';
import { BEURL, SCALECARD } from '../constants';
import decryptArray from '../functions/decodeStrings';



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
  const [opponents, setOpponents] = useState([]);
  const [allReady, setAllReady] = useState(false);
  const [gameMessages, setGameMessages] = useState([])

  // Functions

  // const messageUpdater = (newMessages) => {
  //   let newArr = [...gameMessages];
  //   setGameMessages(gameMessages);
  //   // if (newMessages !== newArr) {  }
  //   // newArr[index] = newArr[index] === true ? false : true;

  // };

  const switchButton = () => {
    if (allReady === true) {
      return <Button variant="contained" color={isTurn === true ? "primary" : "secondary"} onClick={() =>
        playCards()
      }>Play Card</Button>
    } else {
      return <Button variant="contained" color={"primary"} onClick={() =>
        selectTopCards(props.playerName, props.gameId, handCards, isSelectedHand, setIsSelectedHand, props.setServerMessage)
      }>Set Cards</Button>
    }

  };

  const updatePlayerCards = async (playerName) => {
    const response = await axios.get(
      `${BEURL}/play/${props.gameId}/${playerName}/update`,
      { headers: { "Accept-Encoding": "gzip" } }
    );
    if (response['data']['type'] === "update") {
      let arr = [];
      for (let i = 0; i < response['data']['players'].length; i++) {
        if (response['data']['players'][i]['player_name'] !== playerName) {
          arr.push(response['data']['players'][i]);
        } else {
          setHandCards(decryptArray(response['data']['players'][i]['hand_cards']));
          setTopCards(decryptArray(response['data']['players'][i]['top_cards']));
          setHiddenCards(decryptArray(response['data']['players'][i]['hidden_cards']));
          setPile(decryptArray(response['data']['board_cards']['pile']));
          setDeckCards(decryptArray(response['data']['board_cards']['deck']));
          setIsTurn(response['data']['players'][i]['is_turn']);
        }
      }
      setOpponents(arr);
      setAllReady(response['data']['all_ready']);
      setGameMessages(response['data']['game_log']);
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


  const playCards = async () => {
    var listOfCards = []
    var cardSelection = []
    var selectionSetter = []

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
    selectionSetter(Array(handCards.length > 0 ? 30 : 3).fill(false));
  };

  // Styles

  const playCardButtonStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: `${SCALECARD * 100}px`
  };

  const tableCards = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: `${SCALECARD * 50}px`
  };

  const opponentsStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: `${SCALECARD * 50}px`
  };

  return (
    <div className="Table">
      {/* <div>
        Logo
  </div> */}
      <div style={opponentsStyle}>
        {
          opponents.map((item) => (
            <OpponentEntry opponent={item} />
          ))
        }
      </div>
      <div className="TableCards" style={tableCards}>
        <Deck {...{ deckCards }} />
        <Pile
          gameId={props.gameId}
          pile={pile}
          setUpdateStauts={props.setUpdate}
          playerName={props.playerName}
          setServerMessage={props.setServerMessage}
        />
        <ChipMessages gameMessages={gameMessages} />
      </div>

      <div style={playCardButtonStyle}>
        {switchButton()}
      </div>
      <div>
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
    </div>
  );
};



export default Board;
