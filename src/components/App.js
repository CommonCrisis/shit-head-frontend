import React, { useState, useEffect } from 'react';
import Fullscreen from 'react-full-screen';
import Board from './Board';
import Lobby from './Lobby';
import InGameLobby from './InGameLobby';


const App = () => {
  // States
  const [gameId, setGameId] = useState('testid');
  // gameState can be: Lobby, preGame, Game
  const [gameState, setGameState] = useState('Lobby');
  const [isFull, setIsFull] = useState(false);
  const [update, setUpdate] = useState(false);
  const [playerName, setPlayerName] = useState('Dummy')

  // Styles

  const fullScreenStyle = {
    position: 'absolute',
    top: '50px',
  };
  if (gameState === 'Lobby') {
    return (
      <Lobby playerName={playerName} setPlayerName={setPlayerName} gameId={gameId} setGameId={setGameId} setGameState={setGameState} />
    );
  } else if (gameState === 'PreGame') {
    return (
      <InGameLobby gameId={props.gameId} addedPlayer setAddedPlayer playerName={props.playerName} gameState />
    );
  } else if (gameState === 'Game') {
    return (
      <div className="App">
        <button onClick={() => setIsFull(true)} style={fullScreenStyle}>
          Go Fullscreen
        </button>
        <Fullscreen enabled={isFull} onChange={(isFull) => setIsFull(isFull)}>
          <Board gameId={gameId} update={update} setUpdate={setUpdate} playerName={playerName} />
        </Fullscreen>
      </div>
    );
  }
};

export default App;
