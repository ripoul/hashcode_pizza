const fs = require('fs');
const Coordinate = require('./Coordinate');

const fileName = process.argv.slice(2)[0];

function createMatrixBool() {
    param = getParam(fileName)
    let row = param.row;
    let col = param.col;
    let matrix = [];
    let line = [];
    for (let index = 0; index < col; index++) {
        line.push(true);
    }
    for (let index = 0; index < row; index++) {
        matrix.push(line);
    }
    return matrix;
}

function getParam(){
    let contenu = fs.readFileSync(fileName,'utf8');
    firstline = contenu.split("\n")[0].split(" ");
    return {
        row:firstline[0],
        col:firstline[1],
        nbIngredient:firstline[2],
        sizeMax:firstline[3]
    };
}

function checkSliceBoundaries(coordinate){
    if(coordinate.c1.row<getParam().r && coordinate.c1.col<getParam().c &&
        coordinate.c2.row<getParam().r && coordinate.c2.col<getParam().c){
        return coordinate;
    }
}

console.log(createMatrixBool())