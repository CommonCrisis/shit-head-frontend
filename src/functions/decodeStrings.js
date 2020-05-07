import crypto from 'crypto';

const decryptString = (stringInput) => {
    if (stringInput === "empty" | stringInput === "back") {
        return stringInput
    } else {
        const key = 'EXTRATERRESTRIALRECOMMENDATIONSA'
        const iv = process.env.REACT_APP_IV
        var decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
        decipher.update(stringInput, 'base64', 'binary');

        return decipher.final('binary');
    }
};


const decryptArray = (someArray) => {
    let arr = [];
    for (let i = 0; i < someArray.length; i++) {
        arr.push(decryptString(someArray[i]));
    }
    return arr;
};

export default decryptArray;
