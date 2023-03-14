/** === Soltuion - 1 === */
function reverserText(str){
    let txt = '';
    for(let i = str.length-1; i>=0; i--){
       txt += str[i]; 
    }
    return txt;
}
var res = reverse('Hello Rev');

/** === Soltuion - 1 === */

function reverse2(str) {
    return str.split('').reverse().join('');
}
var res2 = reverse2('Hello Rev');


