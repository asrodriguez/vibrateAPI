
var fadeOut;
var d_fadeOut;

var gui;
var prueba;
var duracion;

function setup() {

  noCanvas(); 
  // d_fadeOut = select(#d_fadeOut);
  // fadeOut = select(#fadeOut);
  // fadeOut.mousePressed(runFadeOut());
  duracion = createInput();

  prueba = createButton('prueba');
  prueba.mousePressed(vibrar);
  

}



function vibrar(){
 createP(duracion.value());
// Haptics.vibrate(duracion.value());
navigator.vibrate([1000, 500, 2000]);

}

// function runFadeOut(){
//   Haptics.fadeIn([500, 100, 500]);

// }
