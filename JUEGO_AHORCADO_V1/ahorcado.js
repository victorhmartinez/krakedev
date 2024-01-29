//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
esMayuscula = function(caracter){
    let ascii = caracter.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
        return true;
    } else {
        return false;
    }
}