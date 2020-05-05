import React from 'react';
import Card from './Card';


const OpponentEntry = (props) => {
    // const image_source = require(`../images/logo.png`)
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
            <span style={nameStyle}>{props.opponent["player_name"]}</span>
            <div className="topCardsHolder" style={topCardsHolderStyle}>
                {
                    props.opponent["top_cards"].map((item, index) => (
                        <Card
                            key={index}
                            cardType={item}
                            hidden={false}
                            scale={.2}
                            cropped={true}
                        />))
                }
            </div>
            <span style={{ padding: "10px" }}>Hand: {props.opponent["hand_cards"].length} | Secret: {props.opponent["hidden_cards"].length}</span>
        </div>
    );
};

export default OpponentEntry;