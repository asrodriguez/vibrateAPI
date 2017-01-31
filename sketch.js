
var fadeOut;
var d_fadeOut;

var fadeIn;
var d_fadeIn;

var heartBeat;
var d_heartBeat;


function setup() {

  //noCanvas(); 
  
   createP('FadeOut');
   d_fadeOut = createInput();
   fadeOut = createButton('FadeOut');
   fadeOut.mousePressed(exeFadeOut);
  

  createP('FadeIn');
  d_fadeIn = createInput();
  fadeIn = createButton('FadeIn');
  fadeIn.mousePressed(exeFadeIn);

  createP('HeartBeat');
  d_heartBeat = createInput();
  heartBeat = createButton('HeartBeat');
  heartBeat.mousePressed(exeHeartBeat);

  }


function exeFadeOut(){
	var val = d_fadeOut.value();
	 createP(val);
   Haptics.fadeOut(int(val));
}


function exeFadeIn(){
	var val = d_fadeIn.value();
	createP(val);
	Haptics.fadeIn(int(val));
}

function exeHeartBeat(){
	var val = d_heartBeat.value();
	createP(val);
	Haptics.heartBeat(int(val);
}

