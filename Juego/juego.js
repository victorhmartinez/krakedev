jugar= function(seleccionado){
    let elemento= generarElemento();
    let ruta= generarRuta(elemento);
    mostrarImagen("imgComputador",ruta)
    let ganador= determinarGanador(seleccionado,elemento);
    if(ganador==0){
        mostrarTexto("lblGanador","EMPATE")
    }else if(ganador==1){
        mostrarTexto("lblGanador","GANASTE LA PARTIDA")
    }else{
        mostrarTexto("lblGanador","PERDISTE LA PARTIDA")
    }
}