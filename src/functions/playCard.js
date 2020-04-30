import axios from 'axios';
import { BEURL } from '../apiSource';


const playCard = async (listOfCards, cardSelection, selectionSetter, playerName) => {
    const arrayLength = handCards.length === true ? 30 : 3;
    if (handCards.length) {
        listOfCards = handCards;
        cardSelection = isSelectedHand;
        selectionSetter = setIsSelectedHand;
    } else if (!handCards.length && topCards.length) {
        listOfCards = topCards;
        cardSelection = isSelectedTop;
        selectionSetter = setIsSelectedTop;
    } else {
        listOfCards = hiddenCards;
        cardSelection = isSelectedHidden;
        selectionSetter = setIsSelectedHidden;
    }

    for (let i = 0; i < listOfCards.length; i++) {
        if (cardSelection[i]) {
            await axios.get(
                `${BEURL}/play/${gameId}/${playerName}/play_card/${listOfCards[i]}`
            );
        }
    }
    setUpdate(true);
    selectionSetter(Array(arrayLength).fill(false));
};

export default playCard