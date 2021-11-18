
let font
  fontsize = 20;
function preload() {

  font = loadFont('Kolby-Bold.otf');
}
    
let v = [12,45,64,122,377,540,-70,99,622];
let f = [451,-45,135,288,2,-67,89,236,409];
let ures = '';
let a = 0;
let b = 0;
let c = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
   textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER)
 }

function mousePressed()  { 
  ures = 'NE';
  a = 255;
  b = 60;
  c = 0;
  }

function draw() {
  background(a,b,c);
  noStroke();
  
  textSize(200);
  text(ures, 660, 300);
  fill(255);
  textSize(20);
  
  
   for (let i = 0; i < 9; i++) {
    fill(255,60,0);
    ellipse(v[i]+mouseY,f[i]+mouseX,60,50);
     fill(0,0,150)
    text('jaj', v[i]+mouseY,f[i]+mouseX);  

  }  
  
     for (let i = 0; i < 9; i++) {
    fill(255,60,0);
    ellipse(v[i]+mouseY,f[i]+mouseY,60,50);
     fill(0,0,150)
    text('jaj', v[i]+mouseY,f[i]+mouseY);  

  }  
  
     for (let i = 0; i < 9; i++) {
    fill(255,60,0);
    ellipse(v[i]+mouseX,f[i]+mouseY,60,50);
     fill(0,0,150)
    text('jaj', v[i]+mouseX,f[i]+mouseY);  

  }  
  
     for (let i = 0; i < 9; i++) {
    fill(255,60,0);
    ellipse(v[i]+mouseX,f[i]+mouseX,60,50);
     fill(0,0,150)
    text('jaj', v[i]+mouseX,f[i]+mouseX);  

  }  
     for (let i = 0; i < 9; i++) {
    fill(255,60,0);
    ellipse(v[i]-mouseX,f[i]-mouseX,60,50);
     fill(0,0,150)
    text('jaj', v[i]-mouseX,f[i]-mouseX);  

  }  
  for (let i = 0; i < 9; i++) {
    fill(255,60,0);
    ellipse(v[i]-100-mouseX,f[i]-100-mouseX,60,50);
     fill(0,0,150)
    text('jaj', v[i]-100-mouseX,f[i]-100-mouseX);  

  }  
  
  for (let i = 0; i < 9; i++) {
    fill(255,60,0);
    ellipse(v[i]-100-mouseY,f[i]-100-mouseX,60,50);
     fill(0,0,150)
    text('jaj', v[i]-100-mouseY,f[i]-100-mouseX);  

  }  
  for (let i = 0; i < 9; i++) {
    fill(255,60,0);
    ellipse(v[i]-100-mouseX,f[i]-100-mouseY,60,50);
     fill(0,0,150)
    text('jaj', v[i]-100-mouseX,f[i]-100-mouseY);  

  }  
  for (let i = 0; i < 9; i++) {
    fill(255,60,0);
    ellipse(v[i]-100-mouseY,f[i]-100-mouseY,60,50);
     fill(0,0,150)
    text('jaj', v[i]-100-mouseY,f[i]-100-mouseY);  

  }  
  
  
  

}

  
  
