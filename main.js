const fs = require('fs');
const Coordinate = require('./Coordinate');

const fileName = process.argv.slice(2)[0]
console.log(fileName)

function createMatrixBool() {
    param = getParam(fileName)
    let x = param.x;
    let y = param.y;
    let matrix = [];
    let line = [];
    for (let index = 0; index < y; index++) {
        line.push(true);
    }
    for (let index = 0; index < x; index++) {
        matrix.push(line);
        
    }
    return matrix;
}

function getParam(){
    let contenu = fs.readFileSync(fileName,'utf8');
    firstline = contenu.split("\n")[0].split(" ");
    return {
        x:firstline[0],
        y:firstline[1],
        nbIngredient:firstline[2],
        sizeMax:firstline[3]
    }
}

function checkSliceBoundaries(coordinate){
    
}

console.log(createMatrixBool())