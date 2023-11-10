function setup() {
  createCanvas(600, 600);
  background("violet");
}

function draw(){   
  fill("blue")
  stroke("red")
  strokeWeight(3)  
  if(mouseIsPressed) 
  rect(mouseX, mouseY, 20, 30);
}
