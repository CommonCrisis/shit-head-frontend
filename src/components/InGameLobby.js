import React, { useEffect, useState } from 'react';
import giveCards from '../functions/giveCards';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import FaceIcon from '@material-ui/icons/Face';
import getPlayersInGame from '../functions/getPlayersInGame';
import Button from '@material-ui/core/Button';
import GamesIcon from '@material-ui/icons/Games';


const InGameLobby = (props) => {
    const [players, setPlayers] = useState([]);


    const startGame = () => {
        // props.setGameState('Game');
        giveCards(props.gameId, props.setServerMessage);
        setTimeout(() => { console.log("Waiting for backend update"); }, 3000);
        props.setUpdate(true);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getPlayersInGame(props.gameId, setPlayers, props.setGameState, props.setUpdate);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Styles

    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }));

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <List component="nav" aria-label="Game">
                <ListItem button>
                    <ListItemIcon>
                        <GamesIcon />
                    </ListItemIcon>
                    <ListItemText primary={props.gameId} />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="Players">
                {players.map((item) => (
                    <ListItem button>
                        <ListItemIcon>
                            <FaceIcon />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                    </ListItem>
                ))}
            </List>
            <Button variant="contained" color="primary" onClick={() =>
                startGame()
            }>Start Game</Button>
        </div >
    );
}

export default InGameLobby