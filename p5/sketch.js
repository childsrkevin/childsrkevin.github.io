function setup (){
	createCanvas(400, 400);
    background(255);
    ellipseMode(CENTER);
    rectMode(CENTER);
}


function draw (){
    //background(255,0,0);
    //Body
    fill(255,0,0);
    rect(240,145,20,100);
    //stroke(255,0,0);
    fill(0,0,255);
    ellipse(240,115,60,60);

    fill(0,255,0);
    ellipse(221,115,16,32);
    ellipse(259,115,16,32);


    //stroke(255,255,255);
    line(230,195,220,205);
    line(250,195,260,205);

    //arc();
    //point();
}