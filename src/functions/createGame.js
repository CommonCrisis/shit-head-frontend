import axios from 'axios';

const createGame = async (
  host,
  gameId,
  playerNameSetter,
  setGameState
) => {

  playerNameSetter(host);
  await axios({
    method: 'post',
    url: 'http://127.0.0.1:54321/play/new_game',
    data: {
      game_id: gameId,
      host: host
    }
  });
  setGameState('PreGame');
};

export default createGame;
