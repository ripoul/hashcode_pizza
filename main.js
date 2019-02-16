const fs = require('fs');
const Coordinate = require('./Coordinate');

function createMatrixBool(file) {
    let contenu = fs.readFileSync(file,'utf8');
    let firstLine = contenu.split("\n")[0].split(" ");
    let row = firstLine[0];
    let col = firstLine[1];
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

function checkSliceBoundaries(coordinate){
}

function getStartCoord(){
	
	point= new Coordinate(0, 0);
	while(point.isTaken()) {
		if(point.getCol()!=point.getMaxCol()){
			point.setCol(point.getCol()+1);
		} else {
			point.setRow(point.getRow()+1)
			point.setCol(0);
		}
	}
	return point;
}
console.log(createMatrixBool("data/a_example.in"))