//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
//Variables globales
let palabraSecreta = "";
let intentos=0;
let coincidencias=0;
let errores=0;

//Funcion para verificar si la palabra es mayuscula
esMayuscula = function (caracter) {
    let ascii = caracter.charCodeAt(0);
    //verificacmos el codigo ASCCI de las mayusculas
    if (ascii >= 65 && ascii <= 90) {
        return true;
    } else {
        return false;
    }
}
//Funcion para guardar la palabra secreta
guardarPalabra = function () {
    let palabra = recuperarTexto("txtSecreta");
    let noEsMayuscula = false;
    //Comprobamos el tamaño de la palabra
    if (palabra.length == 5) {
        for (let i = 0; i < palabra.length; i++) {
            if (!esMayuscula(palabra.charAt(i))) {
                noEsMayuscula = true;
            }
        }
        //Comprobamos si existio alguna palabra q no es mayuscula
        if (noEsMayuscula) {
            alert("Debe ingresar una palabra de 5 letras mayúsculas.")
        } else {
            palabraSecreta = palabra;
        }
        console.log(palabra);
    }

}
//FUncion para mostrar la letar en el div
mostrarLetra = function (letra, posicion) {
    mostrarTexto("div" + posicion, letra)
}
//Funcion para validar si la letra en la palabra secreta
validar = function (letra) {
    let letrasEncontradas = 0;
   
        for (let i = 0; i < palabraSecreta.length; i++) {
            //Verificamos si la letra se encuntra dentro de la palabra secreta
            if (palabraSecreta.charAt(i) == letra) {
                //Mostramos la letra en caso de encontrala
                mostrarLetra(letra, i);
                letrasEncontradas++;
                coincidencias++;
            }
        }
        if(letrasEncontradas==0){
            alert("LA LETRA NO ES PARTE DE LA PALABRA")
            errores++;
        }
    }
   
 


// Funcion para recupera la letra ingresada por el usuario
ingresarLetra = function () {
    let letra = recuperarTexto("txtLetra");
    intentos++;
    //Comprobamos si es mayuscula
    if(esMayuscula(letra)){
        validar(letra)
        if(coincidencias==5){
            alert("HAS GANADO")
        }else if(intentos==10){
            alert("HAS PERDIDO")
        }
    }else{
        alert("SOLO SE ACEPTAN MAYUSCULAS")
    }

}