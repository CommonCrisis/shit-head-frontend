import React from 'react';
import {CARDHEIGHT, CARDWIDTH} from '../constants'

const Pile = (props) => {
    const cardBack = 'empty'

    const pileStyle = {
        paddingLeft: '20px'
    }

    if (!props.pile.length) {
        return (<div className='Pile'
            style={pileStyle}>
            <picture>
                <img src={
                        require(`../images/${cardBack}.png`)
                    }
                    alt={'Pile'}
                    width={CARDWIDTH}
                    height={CARDHEIGHT}/>
            </picture>
        </div>);
    } else {
        return (<div className='Pile'>
            <picture>
                <img src={
                        require(`../images/${
                            props.pile[props.pile.length - 1]
                        }.png`)
                    }
                    alt={'Pile'}
                    width={CARDWIDTH}
                    height={CARDHEIGHT}/>
            </picture>
        </div>);
    }
}


export default Pile
