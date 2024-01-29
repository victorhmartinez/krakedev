
let notas = []
agregarElementos = function () {
    let notas = [];
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
recorrerArreglo=function(){
    let notaR;
    for(let indice=0;indice<notas.length;indice++){
        notaR=notas[indice];
        console.log(notaR)
    }
}

probarAgregar = function () {
    let notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function (nota) {
    notas.push(nota);
}
//Funcion para calcular el promediio
calcularPromedio=function(){
    let sumaNotas=0;
    let promedio=0;
   
    for(let indice=0;indice<notas.length;indice++){
       sumaNotas+=notas[indice]
    }
    promedio=sumaNotas/notas.length
    return promedio;
}
ejecutarPromedio=function(){
    let promedio=calcularPromedio();
    mostrarTexto("lblPromedio","El promedio es "+promedio)
}