
var fadeOut;
var d_fadeOut;

var gui;
var prueba;
var duracion;


var opciones;

function setup() {

  noCanvas(); 
  // d_fadeOut = select(#d_fadeOut);
  // fadeOut = select(#fadeOut);
  // fadeOut.mousePressed(runFadeOut());
  duracion = createInput();

  opciones = createRadio();
  opciones.option("fadeIn");
  opciones.option("fadeOut");
  opciones.option("heartbeat");

  prueba = createButton('Ejecutar');
  prueba.mousePressed(vibrar);
  
}



function vibrar(){
  var val = opciones.value();
  createP(val);
  switch(val){
    case 'fadeIn':
    Haptics.fadeIn(duracion.value());
    break;
 case 'fadeOut':
    Haptics.fadeOut(duracion.value());
    break;
 case 'heartbeat':
    Haptics.heartbeat(duracion.value());
    break;
 
  }
   

 


}

