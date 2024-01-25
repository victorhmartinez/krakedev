jugar = function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
      mensaje = "El resultado es "+aleatorio+"\nEs mayor a 3"+"\nGanaste";
        cambiarTexto("lblNumero",mensaje);
    }else{
        mensaje = "El resultado es "+aleatorio+"\nEs menor a 3"+"\nPerdiste, estas de malas";
        cambiarTexto("lblNumero",mensaje);
    }
}

//crear una funcion llamada lanzarDado
//No recibe parámetros
//Retorna un numero aleatorio entre 1 y 6
lanzarDado=function(){
    let aleatorio;
    let numeroMultiplicado;
    let numeroEntero
    let valorDado;
    aleatorio = Math.random();
    numeroMultiplicado = aleatorio*6;
    numeroEntero = parseInt(numeroMultiplicado);// Entre 0 y 5
    valorDado = numeroEntero+1;//Entre 1 y 6
    return valorDado;
}