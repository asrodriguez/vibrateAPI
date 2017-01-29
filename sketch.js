
var fadeOut;
var d_fadeOut;

var gui;
var prueba;
var duracion;


var opciones;

function setup() {

	//noCanvas(); 
  // d_fadeOut = select(#d_fadeOut);
  // fadeOut = select(#fadeOut);
  // fadeOut.mousePressed(runFadeOut());
  duracion = createInput();

  opciones = createRadio();
  opciones.option("fadeIn");
  opciones.option("fadeOut");
  opciones.option("heartbeat");
  opciones.style('width','60px');

  prueba = createButton('Ejecutar');
}


function draw(){

	prueba.mousePressed(vibrar);

	duracion.value == 


}



function vibrar(){
	var val = opciones.value();
	createP(val);
	switch(val){
		case 'fadeIn':
		Haptics.fadeIn(duracion.value());
		return false;
		break;
		case 'fadeOut':
		Haptics.fadeOut(duracion.value());
		return false;
		break;
		case 'heartbeat':
		Haptics.heartbeat(duracion.value());
		return false;
		break;
	}
return false;
}

