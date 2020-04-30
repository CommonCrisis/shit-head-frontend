import React, { useState } from 'react';
import Fullscreen from 'react-full-screen';
import Board from './Board';
import Lobby from './Lobby';
import InGameLobby from './InGameLobby';
import useLocalStorage from '../functions/useLocalStorage';
import SnackbarHandler from './SnackbarHandler';


const App = () => {
  // States
  const [gameId, setGameId] = useLocalStorage('gameId');
  // gameState can be: Lobby, preGame, Game
  const [gameState, setGameState] = useState('Lobby');
  const [isFull, setIsFull] = useState(false);
  const [update, setUpdate] = useState(false);
  const [playerName, setPlayerName] = useLocalStorage('playerName');

  const [updatePlayers, setUpdatePlayers] = useState(false);

  const [serverMessage, setServerMessage] = useState({
    'type': 'info',
    "message": 'Hi there - Welcome to this Shit Head Mulitplayer in pre-alpha state :)',
    "open": true
  })

  // Styles

  const fullScreenStyle = {
    position: 'absolute',
    top: '50px',
  };
  if (gameState === 'Lobby') {
    return (
      <div>
        <Lobby {...{ playerName, setPlayerName, gameId, setGameId, setGameState, setUpdatePlayers, setServerMessage }} />
        <SnackbarHandler {...{ serverMessage, setServerMessage }} />
      </div >
    );
  } else if (gameState === 'PreGame') {
    return (
      <div>
        <InGameLobby {...{
          gameId, playerName, setPlayerName, setGameState, setUpdate, setUpdatePlayers, updatePlayers, setServerMessage
        }} />
        <SnackbarHandler {...{ serverMessage, setServerMessage }} />
      </div>
    );
  } else if (gameState === 'Game') {
    return (
      <div className="App">
        <button onClick={() => setIsFull(true)} style={fullScreenStyle}>
          Go Fullscreen
        </button>
        <Fullscreen enabled={isFull} onChange={(isFull) => setIsFull(isFull)}>
          <Board {...{ gameId, update, setUpdate, playerName, setServerMessage }} />
        </Fullscreen>
        <SnackbarHandler {...{ serverMessage, setServerMessage }} />
      </div>
    );
  }
};

export default App;
