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

function getStartCoord() {
  point = new Coordinate(0, 0);
  while (point.isTaken()) {
    if (point.getCol() != point.getMaxCol()) {
      point.setCol(point.getCol() + 1);
    } else {
      point.setRow(point.getRow() + 1)
      point.setCol(0);
    }
  }
  return point;
}

function checkSliceBoundaries(coordinate){
    if(coordinate.c1.row<getParam().r && coordinate.c1.col<getParam().c &&
        coordinate.c2.row<getParam().r && coordinate.c2.col<getParam().c){
        return coordinate;
    }
}

function findGreaterSlices(starting_point, max_cells) {
  let slices = [];
  if (max_cells % 2) {
    slices = findGreaterSlices(max_cells - 1);
  }
  const denominators = getAllDenominator(max_cells);
  denominators.forEach(
      number => {

      });
}

function getAllDenominator(number) {
  const denominators = [];
  for (let i = n; i > 0; i--) {
    if (!(number % i)) {
      denominators.push(i);
    }
  }
  return denominators;
}

function main(args) {
  console.log(createMatrixBool('data/a_example.in'));
}

main();