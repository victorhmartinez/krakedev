let puntosUsuarios=0;
let puntosComputador=0;
jugar = function (seleccionado) {
    let elemento = generarElemento();
    let ruta = generarRuta(elemento);
    mostrarImagen("imgComputador", ruta)
    let ganador = determinarGanador(seleccionado, elemento);
    if (ganador == 0) {
        mostrarTexto("lblGanador", "EMPATE")
    } else if (ganador == 1) {
        mostrarTexto("lblGanador", "GANASTE LA PARTIDA")
        puntosUsuarios+=1;
        mostrarTexto("lblJuagdor", puntosUsuarios)
    } else {
        mostrarTexto("lblGanador", "PERDISTE LA PARTIDA")
        puntosComputador+=1;
        mostrarTexto("lblComputador", puntosComputador)
    }

    if(puntosUsuarios==5){
        mostrarTexto("lblResultado", "HAS GANADO EL JUEGO")
    }else if(puntosComputador==5){
        mostrarTexto("lblResultado", "El computador te ha vencido")
    }
}   

nuevaPartida= function(){
    puntosComputador=0;
    puntosUsuarios=0;
    mostrarTexto("lblResultado", "");
    mostrarTexto("lblGanador", "");
    mostrarTexto("lblComputador", "0");
    mostrarTexto("lblJuagdor", "0");
    mostrarImagen("imgComputador", '')   
}