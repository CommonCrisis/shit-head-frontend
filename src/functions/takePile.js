import axios from 'axios';
import { BEURL } from '../constants';

const takePile = async (player, gameId, updateStatusSetter, setServerMessage) => {
  const response = await axios.get(
    `${BEURL}/play/${gameId}/${player}/take_pile`
  );
  setServerMessage({
    'type': response['data']['type'],
    "message": response['data']['message'],
    "open": true
  })
  updateStatusSetter(true);
};

export default takePile;
