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
  // widget1.mousePressed(chooseButton);
  widget1.mousePressed(concatenar(Haptics.heartbeat(1000)));

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

function concatenar()) {
  //Haptics.createPattern(Haptics.fadeOut(2000));
  //Haptics.concatenatePatternFuncs(Haptics.heartbeat(1000), Haptics.fadeOut(5000));
  //Haptics.createPattern(Haptics.fadeOut(2000), Haptics.fadeIn(2000),Haptics.heartbeat(3000));


  var funcs = arguments;
  var len = arguments.length;

  createP(len);

  /*return function(duration) {
    var i = 0,
      d = duration / len;

    function executeCurrentFunc() {
      funcs[i](d);
    }

    for (i = 0; i < len; i += 1) {
      global.setTimeout(executeCurrentFunc, d);
    }
  };*/

}







