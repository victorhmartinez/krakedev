jugar = function(){
    let aleatorio;
    aleatorio=lanzarDado();
    cambiarTexto("lblNumero",aleatorio);
    if(aleatorio>3){
        console.log("Es mayor a 3");
        console.log("Ganaste :)");
    }else{
        console.log("Es menor a 3");
        console.log("Estas de malas :(");
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