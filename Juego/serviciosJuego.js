obtenerAleatorio=function(){  
      return Math.floor(Math.random() * 3) + 1;
}
generarElemento=function () {
    // Obtiene un número aleatorio usando la función obtenerAleatorio
    let numeroAleatorio = obtenerAleatorio();

    // Asigna la cadena correspondiente según el número aleatorio
    if (numeroAleatorio == 1) {
        return "piedra";
    } else if (numeroAleatorio == 2) {
        return "papel";
    } else {
        return "tijeras";
    }
}
determinarGanador=function (eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 == eleccionJugador2) {
        return 0; 
    }

    if (
        (eleccionJugador1 == "piedra" && eleccionJugador2 == "tijeras") ||
        (eleccionJugador1 == "papel" && eleccionJugador2 == "piedra") ||
        (eleccionJugador1 == "tijeras" && eleccionJugador2 == "papel")
    ) {
        return 1; 
    } else {
        return 2; 
    }
}
generarRuta= function(nombre){
if(nombre=="tijeras"){
    return "./imagenes/"+nombre+".png"
}else if(nombre=="papel"){
    return "./imagenes/"+nombre+".png"
} else if(nombre=="piedra"){
    return "./imagenes/"+nombre+".png"
}
}