/** ===== Soltuion ==== */
function getImageNameFolder(str) {
    let path = str.split('.com/');
    let lInd = path[1].lastIndexOf('/');
    let folderPath = path[1].slice(0, lInd);
    let name = path[1].slice(lInd + 1);
    return {
        folderName: folderPath,
        name: name
    }
}

var res = getImageNameFolder('http://www.google.com/images/my-pic.jpg');
// {folderName: "images", name: "my-pic.jpg"}


var res2 = getImageNameFolder('http://www.google.com/products/images/my-pic.jpg');
// {folderName: "products/images", name: "my-pic.jpg"}
