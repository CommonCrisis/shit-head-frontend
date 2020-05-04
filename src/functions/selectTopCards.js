import axios from 'axios';
import { BEURL } from '../apiSource';

const selectTopCards = async (playerName, gameId, handCards, selectedHandCards, setIsSelectedHand, setServerMessage) => {
    var topCards = [];
    for (let i = 0; i < handCards.length; i++) {
        if (selectedHandCards[i]) {
            topCards.push(handCards[i])
        }
    };
    const response = await axios({
        method: 'post',
        url: `${BEURL}/play/${gameId}/${playerName}/top_cards`,
        data: {
            top_cards: topCards
        }
    });
    setServerMessage({
        'type': response['data']['type'],
        "message": response['data']['message'],
        "open": true
    });
    setIsSelectedHand(Array(30).fill(false));
};

export default selectTopCards;