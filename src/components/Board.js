import React, {useState, useEffect} from 'react';
import axios from 'axios';

import useWindowDimensions from './WindowSize'

import Deck from './Deck';
import Pile from './Pile';
import Player from './Player';
import Hand from './Hand'
import {CARDHEIGHT, CARDWIDTH} from '../constants'



const Board = props => {

    // States
    const [pile, setPile] = useState([]);
    const [update, setUpdate] = useState(false);
    const [handCards, setHandCards] = useState([]);
    const [isSelected, setisSelected] = useState(Array(30).fill(false)); // TODO: init state after first API call - this is for handCards for now
    const [tableCards, setTableCards] = useState([]);
    const [deckCards, setDeckCards] = useState([]);

    // Functions

    const updatePlayerCards = async () => {
        const response = await axios.get(`http://127.0.0.1:54321/play/${
            props.gameId
        }/Hans/update`);
        setHandCards(response.data.game.hand_cards);
        setTableCards(response.data.game.upper_cards);
        setPile(response.data.game.pile);
        setDeckCards(response.data.game.deck);
        setUpdate(true);
    }

    useEffect(() => {
        updatePlayerCards();
    }, [update])


    const playCards = async (handCards) => {
        for (let i = 0; i < handCards.length; i++) {
            if (isSelected[i]) {
                await axios.get(`http://127.0.0.1:54321/play/${props.gameId}/Hans/play_card/${handCards[i]}`);
            }
          };    
        setUpdate(!update);
        setisSelected(Array(30).fill(false));
    }

    // Styles

    const { height, width } = useWindowDimensions();
    const boardStyle = {
        height: `${ height }px`,
        width: `${ width }px`,
    }

    const BoardCardsStyle = {
        height: `${ CARDHEIGHT }px`,
        width: `${ CARDWIDTH*2 + 40 }px`,
        display: 'flex',
        flexDirection: 'row',
        top: `${ height / 2 - CARDHEIGHT}px` ,
        left: `${ width / 2 - CARDWIDTH*2 + 40 }px`,
        position: 'absolute',
    }

    return (
        <div className='Board' style= { boardStyle }>
            <picture>
                <img src={
                        require(`../images/table.png`)
                    }
                    alt={"Selected Card"}
                    width={
                        width
                    }
                    height={
                        height
                    }/>
            </picture>
        <div className='BoardCards' style= { BoardCardsStyle }>
            <Deck deckCards={ deckCards }/>
            <Pile gameId={
                    props.gameId
                }
                pile={pile}/>
            </div>
            <Player gameId={
                    props.gameId
                }
                handCards={handCards}
                setisSelected={setisSelected}
                isSelected={isSelected}
                tableCards={tableCards}/>
            <button onClick={() => playCards(handCards)}>
                Play Cards...
            </button>
        </div>

    );
}

export default Board
