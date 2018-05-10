function setup() {
  createCanvas(800, 800);
	noStroke();
}

	noStroke();
  fill(250, 200, 200, 100);
  ellipse(mouseX, mouseY, 25, 25);

function draw() {
	background(25);
	if(mouseIsPressed) {
		fill(192,159,195);
		background(50,212,195);
		rect(mouseX, mouseY, 100, 100);
	} else{
		fill(255);
		rect(mouseX, mouseY, 200, 200);
	} 
	ellipse(mouseX, mouseY, 100, 100);	
	}
