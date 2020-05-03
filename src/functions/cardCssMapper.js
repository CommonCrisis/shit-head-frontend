const cssMapper = (cardString) => {
    if (cardString === "empty") {
        return { "column": 4, "row": 0 } // change once back
    } else if (cardString === "back") {
        return { "column": 4, "row": 1 } // change once empty
    }
    var cardElements = cardString.split("_");
    if (cardElements[0] === 13) {
        cardElements[0] = 0
    };
    const mapping = {
        "H": 0,
        "S": 1,
        "D": 2,
        "C": 3,
    }

    return { "column": mapping[cardElements[1]], "row": cardElements[0] - 1 }
};


export default cssMapper;