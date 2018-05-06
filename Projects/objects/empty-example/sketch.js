var b = [];
var ballAmount = 100;
function setup (){
	createCanvas(windowWidth, windowHeight);
	for(i = 0; i < ballAmount; i++){
		b[i] = new ball();
	}
}


function draw (){
	background(240, 238, 236);
	textSize(32);
	text('Array of Objects',(windowWidth/2)-100, windowHeight/2);
	for(i = 0; i < ballAmount; i++){
		b[i].move();
		b[i].display();
	}
}

function ball(){

	this.radius = random(30,70);
	this.posx = random(this.radius, width-this.radius);
	this.posy = random(this.radius, height-this.radius);
	this.r = random(0,255);
	this.g = random(0,255);
	this.b = random(0,255);
	this.velocity = random(1,5);
	this.xdirection = 1;
	this.ydirection = 1;

	this.move = function(){
		if(this.posx > width-(this.radius)){
			this.xdirection = -1;
		}
		else if(this.posx < 0){
			this.xdirection = 1;
		}
		else if(this.posy < 0){
			this.ydirection = 1;
		}
		else if(this.posy > height-(this.radius)){
			this.ydirection = -1;
		}

		this.posx += this.xdirection*this.velocity;
		this.posy += this.ydirection*this.velocity;
	}
	this.display = function(){

		fill(this.r,this.g,this.b);
		stroke(this.r,0,0);
		rect(this.posx ,this.posy,this.radius,this.radius,7);
	}
}
