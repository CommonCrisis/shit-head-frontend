import React, { useState, useEffect } from 'react';
import Fullscreen from 'react-full-screen';
import Board from './Board';
import startGame from './startGame';

const App = () => {
  // States
  const [gameId, setGameId] = useState('testid');
  const [startState, setstartState] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [update, setUpdate] = useState(false);

  // Styles

  const fullScreenStyle = {
    position: 'absolute',
    top: '50px',
  };

  if (!startState) {
    return (
      <button
        onClick={() =>
          startGame(['Hans', 'Gerd'], setstartState, setGameId, setUpdate)
        }
      >
        Start Game!
      </button>
    );
  } else {
    return (
      <div className="App">
        <button onClick={() => setIsFull(true)} style={fullScreenStyle}>
          Go Fullscreen
        </button>
        <Fullscreen enabled={isFull} onChange={(isFull) => setIsFull(isFull)}>
          <Board gameId={gameId} update={update} setUpdate={setUpdate} />
        </Fullscreen>
      </div>
    );
  }
};

export default App;
