import axios from 'axios';
import { BEURL } from '../apiSource';


const updatePlayerCards = async (gameId, playerName, updateSetter) => {
    const response = await axios.get(
        `${BEURL}/play/${gameId}/${playerName}/update`
    );
    setHandCards(response['data']['game'][playerName]['hand_cards']);
    setTopCards(response['data']['game'][playerName]['top_cards']);
    setHiddenCards(response['data']['game'][playerName]['hidden_cards']);
    setPile(response['data']['game'][playerName]['pile']);
    setDeckCards(response['data']['game'][playerName]['deck']);
    updateSetter(false);
};

export default updatePlayerCards