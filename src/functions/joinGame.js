import axios from 'axios';
import { BEURL } from '../apiSource';

const joinGame = async (
  playerName,
  gameId,
  setGameState,
  setPlayerName,
  setUpdatePlayers,
  setServerMessage
) => {
  const response = await axios.get(
    `${BEURL}/play/${gameId}/add_player/${playerName}`
  );
  setServerMessage({
    'type': response['data']['type'],
    "message": response['data']['message'],
    "open": true
  })

  if (response['data']['type'] !== "success") {
    return
  } else {
    setPlayerName(playerName);
    setGameState('PreGame');
    setUpdatePlayers(true);
  };
};

export default joinGame;
