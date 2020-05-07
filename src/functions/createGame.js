import axios from 'axios';
import { BEURL } from '../constants';


const createGame = async (
  host,
  gameId,
  playerNameSetter,
  setGameState,
  setUpdatePlayers,
  setServerMessage
) => {

  playerNameSetter(host);
  const response = await axios({
    method: 'post',
    url: `${BEURL}/play/new_game`,
    data: {
      game_id: gameId,
      host: host
    }
  });
  setServerMessage({
    'type': response['data']['type'],
    "message": response['data']['message'],
    "open": true
  })
  if (response['data']['type'] !== "success") {
    return
  } else {
    setGameState('PreGame');
    setUpdatePlayers(true);
  };

};

export default createGame;
