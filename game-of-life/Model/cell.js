/* Cell class

Models a given cell, the cell can be alive having a state of 1 or dead having
a state of 0.

The _generation property is how many iterations the cell has survived.

The _neighbours property is the amount of living cells surrounding the current
cell.

Author: Jack Collis
Repository: https://github.com/collis96/Game-of-Life

*/

class Cell {

  constructor(x,y,state){
    this._x = x;
    this._y = y;
    this._state = state;
    this._neighbours = 0;
    this._generation = 0;
  }

  age(){
    if(this._generation == 0){
      this._generation = 1;
    } else {
      this._generation += 1;
    }
  }

  die(){
    this._generation = 0;
  }

  getGeneration(){
    return this._generation;
  }

  getX(){
    return this._x;
  }

  getY(){
    return this._y;
  }

  getState(){
    return this._state;
  }

  getNeighbours(){
    return this._neighbours;
  }

  setGeneration(newGeneration){
    this._generation = newGeneration;
  }

  setNeighbours(newNeighbours){
    this._neighbours = newNeighbours;
  }

  setX(newX){
    this._x = newX;
  }

  setY(newY){
    this._x = newY;
  }

  setState(newState){
    this._state = newState;
  }

}
