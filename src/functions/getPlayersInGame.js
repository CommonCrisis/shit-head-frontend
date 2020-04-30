import axios from 'axios';
import { BEURL } from '../apiSource';


const getPlayersInGame = async (gameId, setPlayers, setGameState, setUpdate) => {
    const currentPlayers = await axios.get(
        `${BEURL}/play/${gameId}/get_players`
    );
    setPlayers(currentPlayers.data.players);
    if (currentPlayers.data.started === true) {
        setGameState('Game');
        setUpdate(true);
    };
}

// response should be object {host: name, players: [host, opponent_1, opponent_2 ...]}

export default getPlayersInGame