import axios from 'axios';

const takePile = async (player, gameId, updateStatusSetter) => {
  const response = await axios.get(
    `http://127.0.0.1:54321/play/${gameId}/${player}/take_pile`
  );
  updateStatusSetter(true);
};

export default takePile;
