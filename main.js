const fs = require('fs');
const Coordinate = require('./Coordinate');

const fileName = process.argv.slice(2)[0]
console.log(fileName)

function createMatrixBool() {
    param = getParam(fileName)
    let r = param.r;
    let c = param.c;
    let matrix = [];
    let line = [];
    for (let index = 0; index < c; index++) {
        line.push(true);
    }
    for (let index = 0; index < r; index++) {
        matrix.push(line);
        
    }
    return matrix;
}

function getParam(){
    let contenu = fs.readFileSync(fileName,'utf8');
    firstline = contenu.split("\n")[0].split(" ");
    return {
        r:firstline[0],
        c:firstline[1],
        nbIngredient:firstline[2],
        sizeMax:firstline[3]
    }
}

function checkSliceBoundaries(coordinate){
    
}

console.log(createMatrixBool())