var recwidth = 20;
var numRecs = 50;
var distBetween;
var rectangles = [];
var totSwaps = 0;

function setup (){
	var canv = createCanvas(windowWidth, windowHeight/2);
	frameRate(10);
	var x = (windowWidth - width) / 2;
	var y = (windowHeight-height);
	distBetween = (windowWidth)/numRecs;

  canv.position(x, y);
	for(var i = 0; i < numRecs; i++){
		recheight = Math.floor( random(windowHeight/2) );

		rectangles[i] = new rectangle(i,recheight);

	}
}


function draw (){
	background(240, 238, 236);


	sortRect();
	for(var i = 0; i < numRecs; i++){
		rectangles[i].display();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight/2);
}

function rectangle(arrpos, h){
	this.posx = (windowWidth/numRecs)*arrpos+1;
	this.posy = (windowHeight/2)-h;
	this.width = windowWidth/numRecs;
	this.color = color(0,100,255-(h/2));
	this.height = h;

	this.display = function(){
		fill(this.color);
		noStroke();
		rect(this.posx, this.posy, this.width, this.height);
	}
	this.getHeight = function(){
		return this.height;

	}
	this.setHeight = function(newHeight){
		    this.height = newHeight;
				this.posy = (windowHeight/2)-newHeight;
				this.color=color(0,100,255-(newHeight/2));
		}

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function sortRect(){
	var temp;
		for(var j = 0; j < numRecs-1; j++){
			var height1 = rectangles[j].getHeight();
			var height2 = rectangles[j+1].getHeight();
			if(height1 > height2){
				await sleep(1000);
				temp =rectangles[j].getHeight();
				rectangles[j].setHeight(rectangles[j+1].getHeight());
				rectangles[j+1].setHeight(temp);
				totSwaps++;
				var swap = document.getElementById("total");
				swap.innerHTML = "Bubble Sort Swaps: " + totSwaps;
			}

		}

}
