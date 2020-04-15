import React from 'react';

const Card = (props) => {
    const empty_card = "empty"

    if (props.isSelected) {
        return(
            <div className="CardSelected" onClick={props.onClick}>
                <picture>
                    <img src={require( `../images/${ props.cardType }.png` )} alt={"Selected Card"} width={345/2} height={528/2} />
                </picture>
            </div>
        );
    }

    if (props.cardType) {
        return (
            <div className="Card" onClick={props.onClick}>
                <picture>
                    <img src={require( `../images/${ props.cardType }.png` )} alt={"Hand card"} width={345/2} height={528/2} />
                </picture>
            </div>
        );
    }
    else {
        return (
            <div className="Card" onClick={props.onClick}>
                <picture>
                <img src={require( `../images/${ empty_card }.png` )} alt={"Empty hand card"} width={345/2} height={528/2} />
                </picture>
            </div>
        );
    }
};

export default Card