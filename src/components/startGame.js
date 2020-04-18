import axios from 'axios';

const startGame = async (
  players,
  startStateSetter,
  gameIdSetter,
  updateStatusSetter
) => {
  const playerString = players.join('&names=');

  // setstartState(true);
  startStateSetter(true);
  const response = await axios.get(
    `http://127.0.0.1:54321/play/new-game?names=${playerString}`
  );
  // setGameId(response.data.game_id);
  gameIdSetter(response.data.game_id);
  updateStatusSetter(true);
};

export default startGame;
