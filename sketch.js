function setup() {
  createCanvas(400, 400);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel gray canvas.");
   background(220);
}

function draw() {
 circle(width/2,height/4*3,50)
  circle(width/2,height/4*1,50)
  circle(width/4*3,height/2,50)
  circle(width/4*1,height/2,50)
}