/** === Solution ===*/

function firstLetterCapitalize(str) {
    if(!str || typeof str !== 'string') {
        return str;
    }
    let fLetter = str[0].toUpperCase();
    return fLetter + str.slice(1);
}

const res = firstLetterCapitalize('hello world');

console.log(res);
        