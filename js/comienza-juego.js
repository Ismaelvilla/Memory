
// Asignamos eventos iniciales
var juego_normal = document.querySelector("#juego-normal");
juego_normal.addEventListener("click", iniciaJuegoNormal);

var juego_relax = document.querySelector("#juego-relax");
juego_relax.addEventListener("click", iniciaJuegoRelax);

document.querySelector("#bienvenida").classList.add("visible");