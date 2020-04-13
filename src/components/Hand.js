import React, { useState} from 'react';
import Card from './Card'

const Hand = ( props ) => {
    const [isSelected, setisSelected] = useState([false, false, false]);
    const selectCard = index => {
        let newArr = [...isSelected];
        newArr[index] = (newArr[index] === true) ? false : true
        setisSelected(newArr)
    }
    return (
        <div className="Hand">
            <div className='Card' onClick={() => selectCard(0)}>
                <Card number={ '2H' } isSelected={ isSelected[0] } />
            </div>
            <div className='Card' onClick={() => selectCard(1)}>
                <Card number={ '10H' } isSelected={ isSelected[1] } />
            </div>
            <div className='Card' onClick={() => selectCard(2)}>
                <Card number={ '2C' } isSelected={ isSelected[2] } />
            </div>
        </div>
    );
}

export default Hand
