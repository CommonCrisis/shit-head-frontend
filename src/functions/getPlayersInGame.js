import axios from 'axios';
import { BEURL } from '../constants';


const getPlayersInGame = async (gameId, setPlayers, setGameState, setUpdate, setHost, playerName) => {
    const currentPlayers = await axios.get(
        `${BEURL}/play/${gameId}/get_players`
    );
    setPlayers(currentPlayers.data.players);
    if (playerName === currentPlayers.data.host) {
        setHost(true)
    };
    if (currentPlayers.data.started === true) {
        setGameState('Game');
        setUpdate(true);
    };
}

// response should be object {host: name, players: [host, opponent_1, opponent_2 ...]}

export default getPlayersInGame