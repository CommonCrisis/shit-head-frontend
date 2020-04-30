import { useState } from 'react';

const useLocalState = (item) => {
    const [loc, setState] = useState(localStorage.getItem(item));

    const setLoc = (newItem) => {
        localStorage.setItem(item, newItem);
        setState(newItem)
    }

    return [loc, setLoc];
}

export default useLocalState;