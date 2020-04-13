import React from 'react';
import Card from './Card'

const TableCards = props => {
    return (
        <div className="TableCards">
            <Card number={props.cards[0]} />
            <Card number={props.cards[1]} />
            <Card number={props.cards[2]} />
        </div>
    );
}

export default TableCards