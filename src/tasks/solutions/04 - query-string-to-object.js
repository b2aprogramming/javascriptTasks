/** ==== Solution ===*/

function queryToObject(str) {
    let arr = str.split('?');
    let queryVal = arr[1].split('&');
    return queryVal.reduce(function(x, ele) {
        let keyVal = ele.split('=');
        x[keyVal[0]] = x[keyVal[1]];
        return x;
    }, {});
}

const res = queryToObject('http://www.google.com/api/getProducts?prodName=pen&id=3029&price=5212&category=Pens');

console.log(res);
