/* Model class

The model class is responsible for holding the data and contains the game logic

_fr determines the frame rate of the game.

_density determines the density of living cells in a random game seed.

_running returns true when the game loop is active. (draw() function)

Author: Jack Collis
Repository: https://github.com/collis96/Game-of-Life

*/

class MainModel {

  constructor(){
    this._width = 800;
    this._height = 800;
    this._resolution = 20;
    this._columns = this._width / this._resolution;
    this._rows = this._height / this._resolution;
    this._array = null;
    this._newArr = null;
    this._fr = 10;
    this._density = 0.1;
    this._running = true;
  }

  initArrays(){

    this._array = this.randomSeed();
    this._newArr = this.emptySeed();

  }

  create2DArray(){

    let array = new Array(this._rows);
  	for( let i=0 ; i<array.length; i++){
  		array[i] = new Array(this._columns);
  	}

    return array;

  }

  randomSeed(){

    let grid = this.create2DArray();

    for(let i=0; i<this._rows; i++){
      for(let j=0; j<this._columns; j++){

        let x = i * this._resolution;
        let y = j * this._resolution;
        let rand = random();

        if(rand < this._density){

          grid[i][j] = new Cell(x, y, 1);
          grid[i][j].setGeneration(1);

        } else {

          grid[i][j] = new Cell(x, y, 0);

        }

      }

    }

    for(let i=0; i<this._rows; i++){
      for(let j=0; j<this._columns; j++){

        let neighbourCells = this.countNeighbours(grid, i, j);
        grid[i][j].setNeighbours(neighbourCells);

      }
    }

    return grid;

  }

  emptySeed(){

    let grid = this.create2DArray();

    for(let i=0; i<this._rows; i++){
      for(let j=0; j<this._columns; j++){

        let x = i * this._resolution;
        let y = j * this._resolution;
        grid[i][j] = new Cell(x, y, 0);

      }
    }

    return grid;

  }

  generate(array){

    let temp = array;

    for(let i=0; i<this._rows; i++){
      for(let j=0; j<this._columns; j++){

        let neighbourCells = temp[i][j].getNeighbours();
        let state = temp[i][j].getState();

        /* Game of Life behavior */

        if(state == 0 && neighbourCells == 3){ //Reproduction
          this._newArr[i][j].setState(1);
          this._newArr[i][j].age();
        } else if(state == 1 && neighbourCells < 2){ //Underpopulation
          this._newArr[i][j].setState(0);
          this._newArr[i][j].die();
        } else if(state == 1 && neighbourCells > 3){ //Overpopulation
          this._newArr[i][j].setState(0);
          this._newArr[i][j].die();
        } else {
          this._newArr[i][j].setState(state); //Survival
          this._newArr[i][j].age();
        }

      }
    }

    for(let i=0; i<this._rows; i++){
      for(let j=0; j<this._columns; j++){

        this._newArr[i][j].setNeighbours(this.countNeighbours(this._newArr, i, j)); //recalculate cell neighbours for new array

      }
    }

    this._array = this._newArr;

  }

  countNeighbours(arr, x, y){

    let count = 0;

    for(let i= -1; i < 2; i++){
      for(let j= -1; j < 2; j++){

        if(i==0 && j==0){

          continue;

        } else {

          let row = (x + i + this._rows) % this._rows;
          let column = (y + j + this._columns) % this._columns;
          count += arr[row][column].getState();

        }

      }
    }

    return count;

  }

  getArray(){
    return this._array;
  }

  getNewArray(){
    return this._newArr;
  }

  getWidth(){
    return this._width;
  }

  getHeight(){
    return this._height;
  }

  getResolution(){
    return this._resolution;
  }

  getFrameRate(){
    return this._fr;
  }

  getColumns(){
    return this._columns;
  }

  getRows(){
    return this._rows;
  }

  getDensity(){
    return this._density;
  }

  getRunning(){
    return this._running;
  }

  setRunning(newRunning){
    this._running = newRunning;
  }

  setWidth(newWidth){
    this._width = newWidth;
  }

  setHeight(newHeight){
    this._height = newHeight;
  }

  setResolution(newResolution){
    this._resolution = newResolution;
  }

  setFrameRate(newFrameRate){
    this._fr = newFrameRate;
  }

  setColumns(newColumns){
    this._columns = newColumns;
  }

  setRows(newRows){
    this._rows = newRows;
  }

  setDensity(newDensity){
    this._density = newDensity;
  }

}
