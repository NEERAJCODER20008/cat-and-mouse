 var bgImg;
var cat,catimg1,cat1img2
var mouse,mousemg1,mouse1img2
function preload() {

    bgImg = loadImage("images/garden.png" );
    cat1img1 = loadAnimation("images/cat1.png");
    cat1img2 = loadAnimation("images/cat2.png,cat3.png");
    mouse1img1 = loadAnimation("images/mouse1.png,");
    mouse2img2 = loadAnimation("images/mouse2.png,mouse3.png");
   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background("images/garden.png");
  
    if (cat.x - mouse.x < (cat.width - mouse.width)/2)

    cat.addAnimation("catRunning",cat1img2)
    cat.changeAnimation("catRunning")

    drawSprites();
}


function keyPressed(){

if (keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25
} 


}
