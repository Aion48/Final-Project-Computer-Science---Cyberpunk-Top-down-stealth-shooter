function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(windowWidth != width || windowHeight != height){
     resizeCanvas(windowWidth, windowHeight);
  }
  background(220);
  rect(100,100,100,100);
}
