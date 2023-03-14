/**  ==== Solution ====*/

function objectToQuery(obj) {
    let str = '';
    for(let key in obj) {
        if(!str) {
            str += '?' + key + '=' + obj[key]
        } else {
            str += '&' + key + '=' + obj[key]
        }
    }
    return str;
}

const queryStr = objectToQuery({
    prodName:"pen",
    id:"3029",
    price:"5212",
    category:"Pens"
});

console.log(queryStr);
        