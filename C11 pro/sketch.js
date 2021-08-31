var jaxon,jaxonAnimation;
var track,trackImage;
var invisibleground1;
var invisibleground2;

function preload(){
//pre-load images
jaxonAnimation=loadAnimation("Runner-1.png","Runner-2.png")
trackImage=loadImage("path.png")
}

function setup(){
//Canvas
createCanvas(400,400);

//jaxon
jaxon=createSprite(200,340,20,20)
jaxon.addAnimation("running",jaxonAnimation)
jaxon.scale=0.5

//track
track=createSprite(200,200)
track.addImage("background",trackImage)
track.velocityY=4
track.scale=1.2

//invisibleground1
invisibleground1=createSprite(100,200,3,200)
invisibleground1.visible=false

//invisibleground2
invisibleground2=createSprite(300,200,3,200)
invisibleground2.visible=false

}
function draw() {
background(65)

//movement of jaxon 
mouseX=jaxon.x

//background movement
track.velocityY=2
if(track.x<0){
track.y=track.height/2
drawSprite();

}
