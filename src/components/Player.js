import React from "react";
import Hand from "./Hand";

import TableCards from "./TableCards";

import useWindowDimensions from './WindowSize'
import {CARDHEIGHT, CARDWIDTH} from '../constants'

function Player(props) {
    const { height, width } = useWindowDimensions();
    
    const PlayerStyle = {
        // backgroundColor: 'yellow',
        height: `${CARDHEIGHT+20}px`,
        width: `${ width - 100 }px`,
        top: `${height-2*CARDHEIGHT}px`,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
    }
    return (
        <div className="Player" style={ PlayerStyle }>
            <Hand gameId={
                    props.gameId
                }
                handCards={
                    props.handCards
                }
                setisSelected={props.setisSelected}
                isSelected={props.isSelected}/>
            {/* <TableCards gameId={
                    props.gameId
                }
                tableCards={
                    props.tableCards
                }/> */}
        </div>
    );
}

export default Player;
