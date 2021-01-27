// Escribimos los niveles dinámicamente
escribeNiveles();


// Asignamos eventos iniciales
var juego_normal = document.querySelector("#juego-normal");
juego_normal.addEventListener("click", iniciaJuegoNormal);

var juego_relax = document.querySelector("#juego-relax");
juego_relax.addEventListener("click", iniciaJuegoRelax);

var control_nivel = document.querySelector("#control-nivel");
control_nivel.addEventListener("click", muestraMenuNiveles);
console.log(control_nivel);


document.querySelector("#bienvenida").classList.add("visible");