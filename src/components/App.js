import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './Board';



const App = () => {
    const [gameId, setGameId] = useState('testid')
    const [startState, setstartState] = useState(false)

    const startGame = async (player_1, player_2) => {
        setstartState(true);
        const response = await axios.get(`http://127.0.0.1:54321/play/new-game?names=${ player_1 }&names=${ player_2 }`
        );
        setGameId(response.data.game_id);
    }

    // useEffect(() => {
    //     startGame('Hans', 'Gerd');
    // }, [gameId]);

    if (!startState){
        return (
            <button onClick={ () => startGame('Hans', 'Gerd')}>Start Game!</button>
        );
    } else {
        return (
            <Board gameId={ gameId }/>
        );
    }
}

export default App