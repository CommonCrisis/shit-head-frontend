import axios from 'axios';


const currentPlayers = async (gameId) => {
    const currentPlayers = await axios.get(
        `http://127.0.0.1:54321/play/${gameId}/get_players`
    );
    return currentPlayers;
}

// response should be object {host: name, players: [host, opponent_1, opponent_2 ...]}

export default currentPlayers