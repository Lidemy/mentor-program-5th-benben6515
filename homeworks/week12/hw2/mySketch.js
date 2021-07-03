function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function eye(x,y,sc) {
	push()
		translate(x,y)
		scale(sc)
		fill(255)
		ellipse(0,0,200)
		fill(0)
		let ang = atan2(mouseY-y, mouseX-x)
		rotate(ang)
		ellipse(30,0,125)
	pop()
}

function draw() {
	
	background(0)
	for (let o = 0; o < height; o+=100){
		for(let i = 0; i < width; i+=100) {
			eye(i, o, 0.4)
		}
	}
	// ellipse(mouseX, mouseY, 20, 20);
}