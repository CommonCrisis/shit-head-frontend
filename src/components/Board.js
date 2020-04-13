import React from 'react';
import Hand from './Hand';
import TableCards from './TableCards';

const Board = props => {
    return (
        <div className="Board">
            <Hand cards={props.handCards} />
            <TableCards cards={props.tableCards} />
        </div>
    );
}

export default Board