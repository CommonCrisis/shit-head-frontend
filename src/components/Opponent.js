import React from 'react';
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

function Opponent(props) {
    // Styles

    const useStyles = makeStyles((theme) => ({
        root: {
            backgroundColor: theme.palette.background.paper,
            // height: "100vh", /* Magic here */
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
        },
    }));

    const classes = useStyles();
    const players = ["Hans", "Peter"]
    return (
        <div> Hello I'm your future opponent list </div>
        // <div className={classes.root}>
        //     <List component="nav" aria-label="Game">
        //         <ListItem button>
        //             <ListItemIcon>
        //                 <GamesIcon />
        //             </ListItemIcon>
        //             <ListItemText primary={"Players"} />
        //         </ListItem>
        //         <ListItem button>
        //             <ListItemIcon>
        //                 <GamesIcon />
        //             </ListItemIcon>
        //             <ListItemText primary={"HandCards"} />
        //         </ListItem>
        //     </List>
        //     <Divider />
        //     <List component="nav" aria-label="Players">
        //         {players.map((item) => (
        //             <ListItem button>
        //                 <ListItemIcon>
        //                     <FaceIcon />
        //                 </ListItemIcon>
        //                 <ListItemText primary={item} />
        //             </ListItem>
        //         ))}
        //     </List>
        // </div>
    );
}

export default Opponent;
