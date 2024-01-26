let puntos = 0;
let lanzamientos = 5;

jugar=function(){
    let resultado;
    resultado=lanzarDado();
    mostrarCara(resultado);
    console.log(resultado);
    modificarPuntos(resultado);
    
}
modificarPuntos=function(numero){
    puntos = puntos+numero;
    cambiarTexto("lblPuntos",puntos);
    //si el jugador obtiene mas de 20 puntos mostrar en pantalla un mensaje ganaste
    if(puntos>20){
        cambiarTexto("lblMensaje","GANASTE");
        modificarLanzamientos();
    }else{
        modificarLanzamientos();
    }
}
//no recibe parametros
//resta 1 a la variable lanzamiento,guarda el resultado en la misma variable 
//si lanzamientos llega a 0 mostrar en pantalla el mensaje GAME OVer
modificarLanzamientos=function(){
    lanzamientos =lanzamientos-1;
    cambiarTexto("lblLazamientos",lanzamientos);
    
    if(lanzamientos==0 && puntos<20){
        cambiarTexto("lblMensaje","GAME OVER");
        
    }else if(lanzamientos<0 ){
        limpiar();
    }
}

limpiar = function(){
    //colocar puntaje en 0 y lanzamientos en 5
    cambiarTexto("lblMensaje","");
    cambiarTexto("lblPuntos",0);
    cambiarTexto("lblLazamientos",5);
    cambiarImagen("imgDado","");
    puntos = 0;
    lanzamientos = 5;
}
//funcion mostrarCara, recibe el numero que quier mostrar
// muestra la imagen correspondiente al numero que recibe
//no retorna nada
mostrarCara=function(numero){
    if(numero==1){ // == se compara = se asigna
        cambiarImagen("imgDado","dados1.png");
    }else if(numero==2){
        cambiarImagen("imgDado","dados2.png");
    }else if(numero==3){
        cambiarImagen("imgDado","dados3.png");
    }else if(numero==4){
        cambiarImagen("imgDado","dados4.png");
    }else if(numero==5){
        cambiarImagen("imgDado","dados5.png");
    }else{
        cambiarImagen("imgDado","dados6.png");
    }
}

lanzarDado=function(){
    let aleatorio;
    let aleatorioMultiplicado;
    let aleatorioEntero;
    let valorDado;
    aleatorio=Math.random();
    aleatorioMultiplicado=aleatorio*6;
    aleatorioEntero=parseInt(aleatorioMultiplicado);
    valorDado=aleatorioEntero+1;
    return valorDado;
}