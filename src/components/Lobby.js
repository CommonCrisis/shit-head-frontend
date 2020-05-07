import React from 'react';
import createGame from '../functions/createGame';
import joinGame from '../functions/joinGame';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Lobby = (props) => {
    // Styles
    const formStyle = {
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    }

    const buttonStyle = {
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: '2%'
    }

    return (
        <div style={formStyle}>
            <TextField
                required id="player-name"
                label="Your Name"
                defaultValue={props.playerName}
                onChange={e => props.setPlayerName(e.target.value)}
                inputProps={{
                    maxLength: 10
                }} />

            <TextField required
                id="game-id"
                label="Game ID"
                defaultValue={props.gameId}
                onChange={e => props.setGameId(e.target.value)}
                inputProps={{
                    maxLength: 10
                }}
                helperText="For your friends to join"
            />

            <div style={buttonStyle}>
                <Button variant="contained"
                    color="primary"
                    onClick={() =>
                        createGame(props.playerName,
                            props.gameId,
                            props.setPlayerName,
                            props.setGameState,
                            props.setUpdatePlayers,
                            props.setServerMessage)
                    }>New Game</Button>

                <Button variant="contained"
                    color="secondary"
                    onClick={() =>
                        joinGame(props.playerName,
                            props.gameId,
                            props.setGameState,
                            props.setPlayerName,
                            props.setUpdatePlayers,
                            props.setServerMessage)
                    }>Join Game</Button>
            </div>
        </div >
    );
}
export default Lobby;
