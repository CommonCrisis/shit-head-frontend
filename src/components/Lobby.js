import React, { useState } from 'react';
import useWindowDimensions from './windowSize';
import createGame from '../functions/createGame';
import joinGame from '../functions/joinGame';


const Lobby = (props) => {
    // States
    const [addedPlayer, setAddedPlayer] = useState(false);

    // Styles
    const { height, width } = useWindowDimensions();
    const formStyle = {
        backgroundColor: 'pink',
        display: 'flex',
        flexDirection: 'column',
        width: '100px',
        justifyContent: 'center',
    }

    // Functions
    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} style={formStyle}>
                <label>
                    Your Name:
                <input
                        type="text"
                        value={props.playerName}
                        onChange={e => props.setPlayerName(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
                <label>
                    Game ID:
                    <input
                        type="text"
                        value={props.gameId}
                        onChange={e => props.setGameId(e.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <button
                onClick={() =>
                    createGame(props.playerName, props.gameId, props.setPlayerName, props.setGameState)
                }
            >
                Create New Game
            </button>
            <button
                onClick={() =>
                    joinGame(props.playerName, props.gameId, setAddedPlayer, props.setGameState)
                }
            >
                Join Game
            </button>
        </div>
    );
}
export default Lobby;
