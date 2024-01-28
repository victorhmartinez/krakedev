ejecuatarPrueba1 = function () {
    let mensaje = recuperarTexto("txtCadena");
    recorrerCadena(mensaje);
}
recorrerCadena = function (cadena) {
    //0123
    //Juan
    let caracter = '';
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " posicion " + posicion);
    }
    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " posicion " + posicion);
    }
}
//Inveritir cadena
invertirCadena=function(){
    let mensaje = recuperarTexto("txtCadena");
    recorrerCadenaInversa(mensaje);
}
//Recorrer cadena de manera inversa
recorrerCadenaInversa = function (cadena) {
  
    let letra = '';
    let resultado="";
    for (let posicion = cadena.length; posicion >=0 ; posicion--) {
        letra = cadena.charAt(posicion);
        resultado+=letra;
    }
    mostrarTexto("lblCadenaInversa",resultado)
}