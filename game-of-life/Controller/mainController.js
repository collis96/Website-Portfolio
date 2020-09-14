/* Controller class

Handles changes to the game state based on user input

Author: Jack Collis
Repository: https://github.com/collis96/Game-of-Life

*/

class MainController {

  constructor(model, view){
    this.model = model;
    this.view = view;
  }

  /**
  Resumes the game loop (draw() function)
  */
  play(){
  	loop();
  }

  /**
  Stops game loop (draw() function)
  */
  pause(){
    noLoop();
  }

}
