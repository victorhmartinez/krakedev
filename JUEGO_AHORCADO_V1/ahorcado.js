//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
//Variables globales
let palabraSecreta = "";

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

mostrarLetra = function (letra, posicion) {
    mostrarTexto("div" + posicion, letra)
}