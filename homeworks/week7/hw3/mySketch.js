
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}


function drawflower(clr, size=1) {
	push()
		fill(226, 226, 79)
		ellipse(0,0,50)
		ellipseMode(CORNER)
		fill(193, 65, 65)
		if (clr) fill(clr)
	
		for (let i = 0; i < 16; i++) {
			rotate(PI/8)
			ellipse(30,-20,120*size,40)
			line(30, 0, 150*size,-10)
		}
	pop()
}


var clr


function draw() {
	// ellipse(mouseX, mouseY, 20, 20)
	background(50)
	
		push()
			translate(width/5*2, height/2)
			rotate(frameCount/PI/10)
			drawflower('#faa')
		pop()
	
		push()
			translate(width/5*3, height/2)
			rotate(frameCount/PI/10)
			drawflower('#aaf', map(mouseX,0,width,0,1))
		pop()
	
	for (let i = 0; i < width; i+=200) {
		for (let j =0; j < height; j+=200) {
				push()
					translate(i, j)
					rotate((frameCount)/PI/10)
					scale(0.7)
					if (i % 400 == 0) {
						drawflower('#ffa', map(mouseX+i+j,0,width,0,1))
					} else {
						drawflower('#eee', map(mouseX,0,width,0,1))
					}
				pop()
		}
	}
	
	translate(lerp(mouseX, pmouseX, 0.01), lerp(mouseY,pmouseY, 0.01))
	scale(0.5)
	drawflower()
	
	
}