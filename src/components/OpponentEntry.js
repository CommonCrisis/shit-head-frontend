import React from 'react';
import Card from './Card';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import faker from 'faker';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


const OpponentEntry = (props) => {
    const classes = useStyles();
    const image_source = require(`../images/logo.png`)
    // style

    const topCardsHolderStyle = {
        display: "flex",
        // justifyContent: "left",
        alignItems: "center",
        flexDirection: "row",
    };

    const opponentStyle = {
        display: "flex",
        // justifyContent: "left",
        alignItems: "center",
        flexDirection: "column",
        paddingLeft: "10px"
    };

    const nameStyle = { padding: "10px", fontWeight: "bold", color: props.opponent['is_turn'] === true ? "blue" : "black" };

    return (
        <div style={opponentStyle}>
            {/* <Avatar alt="Remy Sharp" src={image_source} className={classes.large} /> */}
            <span style={nameStyle}>{props.opponent["player_name"]}</span>

            <div className="topCardsHolder" style={topCardsHolderStyle}>
                {
                    props.opponent["top_cards"].map((item) => (
                        <Card
                            cardType={item}
                            hidden={false}
                            scale={.2}
                        />))
                }
            </div>
            <span style={{ padding: "10px" }}>Hand: {props.opponent["hand_cards"].length} | Secret: {props.opponent["hidden_cards"].length}</span>
        </div>
    );
};

export default OpponentEntry;