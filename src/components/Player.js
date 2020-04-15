import React from 'react';
import Hand from './Hand';
import TableCards from './TableCards';


function Player(props) {
    return (
        <div className='Player'>
            <Hand gameId={ props.gameId } handCards={ props.handCards }/>
            <TableCards gameId={ props.gameId } tableCards={ props.tableCards }/>
        </div>
    );
};

export default Player