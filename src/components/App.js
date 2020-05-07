import React, { useState } from 'react';
import Fullscreen from 'react-full-screen';
import Board from './Board';
import Lobby from './Lobby';
import InGameLobby from './InGameLobby';
import useLocalStorage from '../functions/useLocalStorage';
import SnackbarHandler from './SnackbarHandler';
import FullscreenIcon from '@material-ui/icons/Fullscreen';

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
    "message": 'Hi there - Welcome to this Shit Head Mulitplayer in Alpha v0.3 :)',
    "open": true
  })


  // Styles

  const fullScreenStyle = {
    position: 'absolute',
  };

  if (gameState === 'Lobby') {
    return (
      <div>
        <Lobby {...{ playerName, setPlayerName, gameId, setGameId, setGameState, setUpdatePlayers, setServerMessage }} />
        <SnackbarHandler {...{ serverMessage, setServerMessage }} messagePosition={{ vertical: 'top', horizontal: 'center' }} />
        <div>Pre Alpha v0.3</div>
      </div >
    );
  } else if (gameState === 'PreGame') {
    return (
      <div>
        <InGameLobby {...{
          gameId, playerName, setPlayerName, setGameState, setUpdate, setUpdatePlayers, updatePlayers, setServerMessage
        }} />
        <SnackbarHandler {...{ serverMessage, setServerMessage }} messagePosition={{ vertical: 'top', horizontal: 'center' }} />
      </div>
    );
  } else if (gameState === 'Game') {
    return (
      <div className="App">
        <FullscreenIcon onClick={() => setIsFull(true)} style={fullScreenStyle} />
        <Fullscreen enabled={isFull} onChange={(isFull) => setIsFull(isFull)}>
          <Board {...{ gameId, update, setUpdate, playerName, setServerMessage, isFull }} />
        </Fullscreen>
        <SnackbarHandler {...{ serverMessage, setServerMessage }} messagePosition={{ vertical: 'top', horizontal: 'center' }} />
      </div>
    );
  }
};

export default App;
