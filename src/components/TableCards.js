import React, { useState} from 'react';

import Card from './Card'

const TableCards = props => {
    const [isSelected, setisSelected] = useState(Array(3).fill(false));
        
    const selectCard = index => {
        let newArr = [...isSelected];
        newArr[index] = (newArr[index] === true) ? false : true
        setisSelected(newArr)
    }

    return (
        <div className='TableCards'>
            {props.tableCards.map((item, index) => (
                    <Card
                        key={index}
                        cardType={item}
                        isSelected={isSelected[index]}
                        onClick={() => selectCard(index)}
                    />
            ))}
        </div>
    );
}


export default TableCards