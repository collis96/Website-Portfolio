// Draw 2D Ray Casting

let walls = [];
let ray;
let light;

function setup() {
  var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  var height = (window.innerHeight > 0) ? window.innerHeight : screen.height;
  createCanvas(width, height);
  for(let i = 0; i < 5; i++){
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }

  walls.push(new Boundary(0, 0, width, 0));
  walls.push(new Boundary(width, 0, width, height));
  walls.push(new Boundary(width, height, 0, height));
  walls.push(new Boundary(0, height, 0, 0));

  light = new Light();

}

function draw() {
  background(0);
  for(let wall of walls){
    wall.show();
  }
  light.update(mouseX, mouseY);
  light.show();
  light.look(walls);
}
