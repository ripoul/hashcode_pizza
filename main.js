const fs = require('fs');
const Coordinate = require('./Coordinate');

function createMatrixBool(file) {
    let contenu = fs.readFileSync(file,'utf8');
    let firstLine = contenu.split("\n")[0].split(" ");
    let x = firstLine[0];
    let y = firstLine[1];
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

function checkSliceBoundaries(coordinate){
}

console.log(createMatrixBool("data/a_example.in"))