esMayuscula = function(caracter){
    let ascii = caracter.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
        return true;
    } else {
        return false;
    }
}
esDigito = function (caracter) {
    let ascii = caracter.charCodeAt(0);
    if (ascii >= 48 && ascii <= 57) {
        return true;
    } else {
        return false;
    }
}
esGuion = function (caracter) {
    let ascii = caracter.charCodeAt(0);
    if (ascii== 45 || ascii ==42 ||ascii==89) {
        return true;
    } else {
        return false;
    }
}