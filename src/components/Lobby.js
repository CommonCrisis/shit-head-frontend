import React from 'react';
import useWindowDimensions from './windowSize';
import createGame from '../functions/createGame';
import joinGame from '../functions/joinGame';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Lobby = (props) => {
    // Styles
    const { height, width } = useWindowDimensions();
    const centerAlignment = 6
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: `${width / centerAlignment}px`,
        left: `${width / 2 - width / (centerAlignment * 2)}px`,
        top: `${height / 3}px`,
        justifyContent: 'space-between',
        position: 'absolute',
    }

    const testStyle = {
        top: `${height / 8}px`,
        // position: 'absolute',
    }

    return (
        <div style={formStyle}>
            <div>
                <TextField required id="player-name" label="Name" defaultValue={props.playerName} onChange={e => props.setPlayerName(e.target.value)} />
                <TextField required id="game-id" label="Game ID" defaultValue={props.gameId} onChange={e => props.setGameId(e.target.value)} />
            </div>
            <div style={testStyle}>
                <Button variant="contained" color="primary" onClick={() =>
                    createGame(props.playerName, props.gameId, props.setPlayerName, props.setGameState, props.setUpdatePlayers, props.setServerMessage)
                }>New Game</Button>
                <Button variant="contained" color="secondary" onClick={() =>
                    joinGame(props.playerName, props.gameId, props.setGameState, props.setPlayerName, props.setUpdatePlayers, props.setServerMessage)
                }>Join Game</Button>
            </div>
        </div>
    );
}
export default Lobby;
