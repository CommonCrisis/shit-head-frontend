import React, {useState, useEffect} from 'react';
import Fullscreen from "react-full-screen";
import axios from 'axios';
import Board from './Board';


const App = () => {
    const [gameId, setGameId] = useState('testid')
    const [startState, setstartState] = useState(false)
    const [isFull, setIsFull] = useState(false)

    const startGame = async (player_1, player_2) => {
        setstartState(true);
        const response = await axios.get(`http://127.0.0.1:54321/play/new-game?names=${player_1}&names=${player_2}`);
        setGameId(response.data.game_id);
    }

    if (!startState) {
        return (
            <button onClick={
                () => startGame('Hans', 'Gerd')
            }>Start Game!</button>
        );
    } else {
        return (
            <div className='App'>
                <button onClick={() => setIsFull(true)}>
                    Go Fullscreen
                </button>
                <Fullscreen
                        enabled={isFull}
                        onChange={isFull => setIsFull(isFull)}
                    >
                <Board gameId={gameId}/>
                </Fullscreen>
            </div>
        );  
    }

}

export default App
