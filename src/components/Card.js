import React from 'react';

const Card = (props) => {
    const empty_card = "gray_back"

    if (props.isSelected) {
        return(
            <div className="CardSelected">
                <picture>
                    <img src={require( `../images/${ props.number }.png` )} alt={"asd"} width={345/2} height={528/2} />
                </picture>
            </div>
        );
    }

    if (props.number) {
        return (
            <div className="Card">
                <picture>
                    <img src={require( `../images/${ props.number }.png` )} alt={"asd"} width={345/2} height={528/2} />
                </picture>
            </div>
        );
    }
    else {
        return (
            <div className="Card">
                <picture>
                <img src={require( `../images/${ empty_card }.png` )} alt={"asd"} width={345/2} height={528/2} />
                </picture>
            </div>
        );
    }
};

export default Card