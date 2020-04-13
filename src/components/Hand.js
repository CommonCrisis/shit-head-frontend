import React from 'react';
import Card from './Card'

const Hand = props => {
    return (
        <div className="Hand">
            <Card number={props.cards[0]} />
            <Card number={props.cards[1]} />
            <Card number={props.cards[2]} />
        </div>
    );
}

export default Hand
