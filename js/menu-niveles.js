function escribeNiveles(){
 var menuNiveles = document.querySelector(".selecciona-nivel ul");   
 niveles.forEach(function(elemento, indice){
     var controlNivel = document.createElement('li');
     var indice_aux = indice +1;
     controlNivel.innerHTML = "<button class='nivel' data-nivel='"+indice+"'>Nivel "+ indice_aux +"</button>";
     menuNiveles.appendChild(controlNivel);
 })
}

function muestraMenuNiveles(evento){
    //console.log('ahora si');
    evento.stopPropagation();
    document.querySelector(".selecciona-nivel").classList.toggle("visible");
}

