/* View class

The view class is responsible manipulating what the user sees. It is instantiated
with a model object and based on the data provided will update the view.

Author: Jack Collis
Repository: https://github.com/collis96/Game-of-Life

*/

class MainView {
  constructor(model){
    this._model = model;
  }

  renderCells(array){

    for(let i=0; i<model.getColumns(); i++){
      for(let j=0; j<model.getRows(); j++){

        let cell = array[i][j];
        let x = cell.getX();
        let y = cell.getY();

        if(cell.getState()==1){
          if(cell.getGeneration() == 1){

            fill('#51ff70');
            rect(x,y,model.getResolution(),model.getResolution());

          } else if (cell.getGeneration() == 2 ) {

            fill('#48e97e');
            rect(x,y,model.getResolution(),model.getResolution());

          } else if (cell.getGeneration() == 3 ) {

            fill('#3fd28c');
            rect(x,y,model.getResolution(),model.getResolution());

          } else if (cell.getGeneration() == 4 ) {

            fill('#36bc9b');
            rect(x,y,model.getResolution(),model.getResolution());

          } else if (cell.getGeneration() == 5 ) {

            fill('#2da6a9');
            rect(x,y,model.getResolution(),model.getResolution());

          } else if (cell.getGeneration() == 6 ) {

            fill('#248fb7');
            rect(x,y,model.getResolution(),model.getResolution());

          } else if (cell.getGeneration() == 7 ) {

            fill('#1b79c5');
            rect(x,y,model.getResolution(),model.getResolution());

          } else if (cell.getGeneration() == 8 ) {

            fill('#1263d4');
            rect(x,y,model.getResolution(),model.getResolution());

          } else if (cell.getGeneration() == 9 ) {

            fill('#094ce2');
            rect(x,y,model.getResolution(),model.getResolution());

          } else {

            fill('#0036f0');
            rect(x,y,model.getResolution(),model.getResolution());

          }

        } else {

          fill(245)
          rect(x,y,model.getResolution(),model.getResolution());

        }
      }
    }
  }

  renderGrid(){

    let width = model.getWidth();
    let height = model.getHeight();
    let x = width / model.getColumns();
    let y = height / model.getRows();

    for(let i=0;i<height; i=i+y){ //draw columns

      stroke(200);
      line(i, 0, i, width);

    }

    for(let i=0;i<width;i=i+x){ //draw rows

      stroke(200);
      line(0, i, width, i);
      
    }

  }
}
