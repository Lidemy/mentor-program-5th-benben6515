function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	background('#fcc')
	
	translate(width/2,height/2)
	for(let i = 0; i < 600; i++) {
		let ang = i/10 + frameCount/400
		let r = i*1.1 + noise(i/10)*map(sin(frameCount/100),-1,1,10,100)
		fill(255)
		textSize(map(i,0,600,10,28))
		text(" Lidemy LOVE "[i%13], cos(ang)*r,sin(ang)*r)
		// ellipse(cos(ang)*r,sin(ang)*r,50)
		
	}
	
	// ellipse(mouseX, mouseY, 20, 20);
}