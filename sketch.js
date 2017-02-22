var fadeOut;
var d_fadeOut;

var fadeIn;
var d_fadeIn;

var heartBeat;
var d_heartBeat;


var gui;

function setup() {

  createCanvas(windowWidth, windowHeight);

  createP('FadeOut');
  d_fadeOut = createInput(1000);
  fadeOut = createButton('FadeOut');
  fadeOut.mousePressed(exeFadeOut);

  createP('FadeIn');
  d_fadeIn = createInput(1500);
  fadeIn = createButton('FadeIn');
  fadeIn.mousePressed(exeFadeIn);

  createP('HeartBeat');
  d_heartBeat = createInput(1800);
  heartBeat = createButton('HeartBeat');
  heartBeat.mousePressed(exeHeartBeat);

 // Only call draw when then gui is changed
  noLoop();


}



function draw() {

  // this is a piece of cake
  // background(0);
  // fill(myColor);
  // angleMode(DEGREES);
  // arc(width/2, height/2, 100, 100, myAngle/2, 360 - myAngle/2, PIE);

}


function exeFadeOut() {
  var val = d_fadeOut.value();
  createP(val);
  Haptics.fadeOut(int(val));
}


function exeFadeIn() {
  var val = d_fadeIn.value();
  createP(val);
  Haptics.fadeIn(int(val));
}

function exeHeartBeat() {
  var val = d_heartBeat.value();
  createP(val);
  Haptics.heartbeat(int(val));
}