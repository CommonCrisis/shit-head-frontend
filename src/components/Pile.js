import React from 'react';

const Pile = (props) => {
    const cardBack = 'empty'
    if (!props.pile.length) {
        return (
            <div className='Pile'>
                <picture>
                    <img src={require( `../images/${ cardBack }.png` )} alt={'Pile'} width={345/2} height={528/2} />
                </picture>
            </div>
        );
    } else {
    return (
        <div className='Pile'>
            <picture>
                <img src={require( `../images/${ props.pile[0] }.png` )} alt={'Pile'} width={345/2} height={528/2} />
            </picture>
        </div>
    );
    }
}


export default Pile