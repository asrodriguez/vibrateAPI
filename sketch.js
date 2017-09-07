var fadeOut;
var d_fadeOut;

var fadeIn;
var d_fadeIn;

var heartBeat;
var d_heartBeat;


var gui;

var widget1, widget2;
var selected;

function setup() {

  //createCanvas(windowWidth, windowHeight);

  // Create Layout GUI
  //gui = createGui('Editor feedback háptico');
  //gui.addGlobals('numShapes', 'bigRadius', 'shape', 'label', 'radius',  'drawFill', 'fillColor', 'drawStroke', 'strokeColor', 'strokeWidth');


  widget1 = createButton('Widget 1');
  widget1.position(19, 19);
  //widget1.mousePressed(chooseButton);
  widget1.mousePressed(function() {
    navigator.vibrate([16,25,0,25,27,25,0,24,27,23,0,22,20,21,27,19,16,16,15,13,0,8,21,0,15,8,19,13,15,16,0,19,15,21,24,22,17,23,15,24,17,25,20,25,18]);
});




  selected = false;
  createP(selected);

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



/*function draw() {

   //clear();
  // this is a piece of cake
  // background(0);
  // fill(myColor);

}
*/

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


function chooseButton(){
  selected = !selected;
  if (selected) {
   createP("Sin elegir")
  } else {
  createP("Boton elegido" );
  }
}

function fadeInOut() {
  //Haptics.createPattern(Haptics.fadeOut(2000));
  //Haptics.concatenatePatternFuncs(Haptics.heartbeat(1000), Haptics.fadeOut(5000));
  //Haptics.createPattern(Haptics.fadeOut(2000), Haptics.fadeIn(2000),Haptics.heartbeat(3000));
  
  Haptics.patternFactory(Haptics.fadeIn(1000), Haptics.fadeOut(2000));

  createP("acá adentro")

}







