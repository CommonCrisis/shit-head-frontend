import axios from 'axios';
import { BEURL } from '../apiSource';


const giveCards = async (
    gameId,
    setServerMessage
) => {
    const response = await axios.get(
        `${BEURL}/play/${gameId}/give_cards`
    );
    setServerMessage({
        'type': response['data']['type'],
        "message": response['data']['message'],
        "open": true
    })
};

export default giveCards;
