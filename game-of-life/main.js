let model, view, controller;

function setup() {

	model = new MainModel();
	view  = new MainView(model);
	controller = new MainController(model, view);
	createCanvas(model.getWidth(), model.getHeight());
	frameRate(model.getFrameRate());
	background(255);
	model.initArrays();
	view.renderGrid();
	draw();

}

function draw() {

	model.generate(model.getArray());
	view.renderCells(model.getArray());

}

// Event Listeners

function mousePressed() { //pause and resume

	if(model.getRunning()){
		controller.pause();
		model.setRunning(false);
	} else {
		controller.play();
		model.setRunning(true);
	}

}
