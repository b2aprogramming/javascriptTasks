/** === Solution === */
function filerWord(str, word) {
    let arr = [];
    if(!str || !word) {
        return arr;
    }
    let fInd = str.indexOf(word);
    let isVal = fInd > -1;
    while(isVal) {
        let txt = str.substr(fInd, word.length);
        arr.push(txt);
        fInd = str.indexOf(word, fInd + word.length + 1);
        isVal = fInd > -1;
    }
    return arr;
}

var res =  filerWord('This is my name. This is my book. This is my Role', 'name');
console.log(res);
              