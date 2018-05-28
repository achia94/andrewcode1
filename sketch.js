function setup() {
	createCanvas(480, 270);
}

function draw() {
	background(150, 150, 150);
	ellipseMode(CENTER);
	rectMode(CENTER);

	// Body
	stroke(0, 255, 255);
	fill(0, 155, 0);
	rect(240,145,20,100);

	// Head
	stroke(200, 0, 0,);
	fill(200,0,0,100);
	ellipse(240,115,60,60);

	// Eyes
	stroke(0,0,200);
	fill(0,0,200);
	ellipse(221,115,16,32);
	ellipse(259,115,16,32);

	// legs
	line(230,195,220,205);
	line(250,195,260,205);
}
