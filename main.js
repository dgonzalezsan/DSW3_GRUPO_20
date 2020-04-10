/*Programacion de JavaScript */

var piezas = document.gelElementsByClassName('movil');

var tamWidh = [134,192,134,163,134,163,134,192,134];
var tamheight = [163,134,163,134,192,134,163,134,163];

for(var i=0;i<piezas.length;i++){
	piezas[i].setAttribute("width", tamWidh[i]);
	piezas[i].setAttribute("height", tamHeight[i]);
}
