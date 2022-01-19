let timer = 5
let img_med
let img_guer

function setup() { 
  createCanvas(720, 400);
  img_med = loadImage('media/radeau_meduse.jpg');
  img_guer = loadImage('media/guernica.jpg');
} 

function draw() { 
  background(220);
  
  textAlign(CENTER, CENTER);
  textSize(100);
  text('🐀💧🐍 \n' + timer, width/2, height/2);
  
  if (frameCount % 60 == 0 && timer > 0) {
    timer --;
  }
  if (timer == 0) {
    image(img_med, 0, 0);
    img_med.resize(720, 400);
  }
  
}