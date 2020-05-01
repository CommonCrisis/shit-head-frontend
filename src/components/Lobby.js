import React from 'react';
import useWindowDimensions from './WindowSize';
import createGame from '../functions/createGame';
import joinGame from '../functions/joinGame';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Lobby = (props) => {
    // Styles
    const formStyle = {
        height: "100vh", /* Magic here */
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }


    return (
        <div style={formStyle}>
            <div style={{ padding: "15px" }}>
                <div style={{ padding: "10px" }}>
                    <TextField required id="player-name" label="Name" defaultValue={props.playerName} onChange={e => props.setPlayerName(e.target.value)} />
                </div>
                <div style={{ padding: "10px" }}>
                    <TextField required id="game-id" label="Game ID" defaultValue={props.gameId} onChange={e => props.setGameId(e.target.value)} />
                </div>
            </div>
            <div style={{ padding: "10px" }}>
                <div style={{ padding: "5px" }}>
                    <Button variant="contained" color="primary" onClick={() =>
                        createGame(props.playerName, props.gameId, props.setPlayerName, props.setGameState, props.setUpdatePlayers, props.setServerMessage)
                    }>New Game</Button>
                </div>
                <div style={{ padding: "5px" }}>
                    <Button variant="contained" color="secondary" onClick={() =>
                        joinGame(props.playerName, props.gameId, props.setGameState, props.setPlayerName, props.setUpdatePlayers, props.setServerMessage)
                    }>Join Game</Button>
                </div>
            </div>
        </div>
    );
}
export default Lobby;
