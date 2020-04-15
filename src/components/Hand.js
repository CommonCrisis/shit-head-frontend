import React, {useState} from 'react';
import Card from './Card';

const Hand = (props) => {
    const [isSelected, setisSelected] = useState(Array(100).fill(false)); // TODO: init state after first API call

    const selectCard = index => {
        let newArr = [...isSelected];
        newArr[index] = (newArr[index] === true) ? false : true
        setisSelected(newArr)
    }

    return (
        <div className="Hand">
            {
            props.handCards.map((item, index) => (
                <Card key={index}
                    cardType={item}
                    isSelected={
                        isSelected[index]
                    }
                    onClick={
                        () => selectCard(index)
                    }/>
            ))
        } </div>
    );
}

export default Hand
