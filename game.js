function setup() {
  createCanvas(windowWidth,  windowWidth * (9/16));
}


function windowResized() {
  resizeCanvas(windowWidth, windowWidth * (9/16));

}

let player;

var playerState = "StationaryF";

var runningPlayerR;
var runningPlayerL;
var runningPlayerF;
var runningPlayerB;

var playArea = [new Point(25,335),
                new Point(106,282),
                new Point(196,236),
                new Point(317,193),
                new Point(434,167),
                new Point(515,155),
                new Point(515,226),
                new Point(723,226),
                new Point(723,293),
                new Point(816,293),
                new Point(816,220),
                new Point(898,220),
                new Point(898,154),
                new Point(1354,154),
                new Point(1354,452),
                new Point(1474,452),
                new Point(1474,423),
                new Point(1596,423),
                new Point(1596,161),
                new Point(1812,161),
                new Point(1812,430),
                new Point(2140,430),
                new Point(2140,135),
                new Point(2282,135),
                new Point(2282,661),
                new Point(1177,661),
                new Point(1177,382),
                new Point(1057,382),
                new Point(1057,660),
                new Point(572,660),
                new Point(315,584),
                new Point(193,526),
                new Point(70,441)
  ];


var objects = [];
var yshift = 0;
var xshift = 0;

var movementSpeed = 8000

var time = 0;




// 16:9 ratio
function draw() {
  background(48,80,157);

  var playerWidth = 13 * (width / 200);
  var playerheight = 16 * (width / 200);

  var playerTopLeft = new Point((width/2) - (playerWidth/2) , (height/2) - (playerheight/2) );
  var playerTopRight = new Point((width/2) + (playerWidth/2), (height/2) - (playerheight/2) );
  var playerBottomLeft = new Point((width/2) - (playerWidth/2), (height/2) + (playerheight/2) );
  var playerBottomRight = new Point((width/2) + (playerWidth/2), (height/2) + (playerheight/2) );


  if(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(UP_ARROW) || keyIsDown(DOWN_ARROW)){
    if(keyIsDown(LEFT_ARROW) ){
      xshift -= 0.001 * movementSpeed
      playerState = "runningL"
    }else
    if(keyIsDown(RIGHT_ARROW) ){
      xshift += 0.001 * movementSpeed
      playerState = "runningR"
    }else
    if(keyIsDown(UP_ARROW)  ){
      yshift -= 0.001 * movementSpeed
      playerState = "runningB"
    }else
    if(keyIsDown(DOWN_ARROW) ){
      yshift += 0.001 * movementSpeed
      playerState = "runningF"
    }
  }else{
    if(playerState == "runningL"){
      playerState = 'StationaryL'
    }
    if(playerState == "runningR"){
      playerState = 'StationaryR'
    }
    if(playerState == "runningB"){
      playerState = 'StationaryB'
    }
    if(playerState == "runningF"){
      playerState = 'StationaryF'
    }
  }

  xshift *= (width / 1000);
  yshift *= (width / 1000);
  let backgroundSize =  (width / 400)
  image(level1background,0 - (xshift),0 - (yshift),770 * backgroundSize,300 * backgroundSize)





  if(playerState == "runningR"){
    image(runningPlayerR[Math.floor((time / 8) % 4)],playerTopLeft.x  , playerTopLeft.y,playerWidth,playerheight);
  }
  if(playerState == 'runningL'){
    image(runningPlayerL[Math.floor((time / 8) % 4)],playerTopLeft.x  , playerTopLeft.y,playerWidth,playerheight);
  }
  if(playerState == 'runningF'){
    image(runningPlayerF[Math.floor((time / 8) % 4)],playerTopLeft.x  , playerTopLeft.y,playerWidth,playerheight);
  }
  if(playerState == 'runningB'){
    image(runningPlayerB[Math.floor((time / 8) % 4)],playerTopLeft.x  , playerTopLeft.y,playerWidth,playerheight);
  }


  if(playerState == 'StationaryF'){
    image(stationaryFront,playerTopLeft.x  , playerTopLeft.y,playerWidth,playerheight);
  }
  if(playerState == 'StationaryB'){
    image(stationaryBack,playerTopLeft.x  , playerTopLeft.y,playerWidth,playerheight);
  }
  if(playerState == 'StationaryL'){
    image(stationaryLeft,playerTopLeft.x  , playerTopLeft.y,playerWidth,playerheight);
  }
  if(playerState == 'StationaryR'){
    image(stationaryRight,playerTopLeft.x  , playerTopLeft.y,playerWidth,playerheight);
  }
  //for(var f = 0; f < objects.length; f++){
    //if(objects[f].type == "rectangle"){

  //  }
//  }
  xshift /= (width / 1000);
  yshift /= (width / 1000);
  time++
}

function preload() {
  runRight1 = loadImage('Resources/Character/C-run-right1.png');
  runRight2 = loadImage('Resources/Character/C-run-right2.png');
  runRight3 = loadImage('Resources/Character/C-run-right3.png');
  runRight4 = loadImage('Resources/Character/C-run-right4.png');
  runningPlayerR = [runRight1,runRight2,runRight3,runRight4];

  runLeft1 = loadImage('Resources/Character/C-run-left1.png');
  runLeft2 = loadImage('Resources/Character/C-run-left2.png');
  runLeft3 = loadImage('Resources/Character/C-run-left3.png');
  runLeft4 = loadImage('Resources/Character/C-run-left4.png');
  runningPlayerL = [runLeft1,runLeft2,runLeft3,runLeft4];

  runForward1 = loadImage('Resources/Character/C-run-front1.png');
  runForward2 = loadImage('Resources/Character/C-run-front2.png');
  runForward3 = loadImage('Resources/Character/C-run-front3.png');
  runForward4 = loadImage('Resources/Character/C-run-front4.png');
  runningPlayerF = [runForward1,runForward2,runForward3,runForward4];

  runBack1 = loadImage('Resources/Character/C-run-back1.png');
  runBack2 = loadImage('Resources/Character/C-run-back2.png');
  runBack3 = loadImage('Resources/Character/C-run-back3.png');
  runBack4 = loadImage('Resources/Character/C-run-back4.png');
  runningPlayerB = [runBack1,runBack2,runBack3,runBack4];

  stationaryFront = loadImage('Resources/Character/C-Stationary-Front.png');
  stationaryLeft = loadImage('Resources/Character/C-Stationary-left.png');
  stationaryRight = loadImage('Resources/Character/C-Stationary-right.png');
  stationaryBack = loadImage('Resources/Character/C-Stationary-Back.png');

  level1background = loadImage('Resources/Background/Level 1 v1.png');
}

/*

function Object(whatObject,whatDimensions,whatLocation,whatSRC) {
  this.type = whatObject;
  this.dimensions = whatDimensions;
  this.location = whatLocation;
  this.source = whatSRC;
}

*/

function pointInPolygon(point,polygon){
  var amountOfIntersections = 0;
  for(var c = 0; c < polygon.length; c++){
    if(intersects(point.x,point.y,50000000,point.y,polygon[c].x,polygon[c].y,polygon[(c + 1) % polygon.length ].x,polygon[(c + 1) % polygon.length ].y)){
      amountOfIntersections++;
    }
  }
  if( amountOfIntersections % 2 == 0){
    return false;
  }else{
    return true;
  }
}


function intersects(a,b,c,d,p,q,r,s) {
  var number1, number2, number3;
  number1 = (c - a) * (s - q) - (r - p) * (d - b);
  if (number1 === 0) {
    return false;
  } else {
    number3 = ((s - q) * (r - a) + (p - r) * (s - b)) / number1;
    number2 = ((b - d) * (r - a) + (c - a) * (s - b)) / number1;
    return (0 < number3 && number3 < 1) && (0 < number2 && number2 < 1);
  }
}

function Point(x,y){
  this.x = x;
  this.y = y;
}
function mouseClicked() {
  print((mouseX + xshift) + "," + (mouseY + yshift));


}
