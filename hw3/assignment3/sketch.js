let fr = 5;
function setup() {
  createCanvas(400, 400);
  frameRate(fr);
  noLoop();
}

function draw() {
  
  background(250);

for(let i = 0; i<175; i++){
   let r = random(200);
     noFill(); 
  strokeWeight(1);
  stroke(255, 204, 30);
ellipse(width/2,height/2,r,r);
  stroke(255, 10, 50);
  rect(width/2,height/2,i,r);
  
   stroke(100, 400, 5);
  triangle(100, 100, 100, i*2, r,100);
}
  

  
  
  
}
  function mousePressed() {
  loop();
}
function mouseReleased() {
  noLoop();
}


