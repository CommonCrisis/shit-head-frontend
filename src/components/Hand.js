import React, {useState} from 'react';
import Card from './Card';

import useWindowDimensions from './WindowSize'
import {CARDHEIGHT, CARDWIDTH} from '../constants'

const Hand = (props) => {
    const { height, width } = useWindowDimensions();

    const handStyle = {
        top: `${20}px`,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        left: `${width*.5-.5*CARDWIDTH*props.handCards.length}px`
    }

    const selectCard = index => {
        let newArr = [...props.isSelected];
        newArr[index] = (newArr[index] === true) ? false : true
        props.setisSelected(newArr)
    }

    return (
        <div className="Hand" style={handStyle}>
            {
            props.handCards.map((item, index) => (
                <Card key={index}
                    cardType={item}
                    isSelected={
                        props.isSelected[index]
                    }
                    onClick={
                        () => selectCard(index)
                    }/>
            ))
        } </div>
    );
}

export default Hand
