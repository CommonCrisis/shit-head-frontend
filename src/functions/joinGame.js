import axios from 'axios';

const joinGame = async (
  playerName,
  gameId,
  newPlayerSetter,
  setGameState
) => {
  // const playerString = players.join('&names=');

  const response = await axios.get(
    `http://127.0.0.1:54321/play/${gameId}/add_player/${playerName}`
  );
  console.log(response);
  newPlayerSetter(true);
  setGameState('PreGame');
};

export default joinGame;
