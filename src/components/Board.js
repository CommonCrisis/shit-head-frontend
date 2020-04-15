import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Deck from './Deck';
import Pile from './Pile';
import Player from './Player';


const Board = props => {
    const [pile, setPile] = useState([]);
    const [update, setUpdate] = useState(false);
    const [handCards, setHandCards] = useState([]);
    const [tableCards, setTableCards] = useState([]);

    const updatePlayerCards = async () => {
        const response = await axios.get(`http://127.0.0.1:54321/play/${
            props.gameId
        }/Hans/update`);
        setHandCards(response.data.game.hand_cards);
        setTableCards(response.data.game.upper_cards);
        setPile(response.data.game.pile);
        setUpdate(true);
    }

    useEffect(() => {
        updatePlayerCards();
    }, [update])


    return (
        <div className='Board'>
            <div className='BoardCards'>
                <Deck/>
                <Pile gameId={
                        props.gameId
                    }
                    pile={pile}/>
            </div>
            <div className='Players'>
                <Player gameId={
                        props.gameId
                    }
                    handCards={handCards}
                    tableCards={tableCards}/>
            </div>
        </div>
    );
}

export default Board
