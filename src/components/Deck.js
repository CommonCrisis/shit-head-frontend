import React from 'react';

const Deck = () => {
    const cardBack = 'Back'
    return (
        <div className='Deck'>
            <picture>
                <img src={require( `../images/${ cardBack }.png` )} alt={'Deck'} width={345/2} height={528/2} />
            </picture>
        </div>
    );
}


export default Deck