validarEstructura = function (placa) {
    
    let errores = "";
    let tamanioPlaca = placa.length;
    if (tamanioPlaca !== 7 && tamanioPlaca !== 8) {
        errores += "La placa debe tener 7 u 8 caracteres.";
    } else {
        errores +=  validarMayuscula(placa.charAt(0), "El primer caracter debe ser una letra mayúscula.");
        errores += validarMayuscula(placa.charAt(1), "El segundo caracter debe ser una letra mayúscula.");
        errores += validarMayuscula(placa.charAt(2), "El tercer caracter debe ser una letra mayúscula.");
        if (!esGuion(placa.charAt(3))) {
            errores += "El cuarto caracter debe ser un guión. ";
        }
        errores += validarDigito(placa.charAt(4), "El quinto caracter debe ser un dígito.");
        errores += validarDigito(placa.charAt(5), "El sexto caracter debe ser un dígito.");
        errores += validarDigito(placa.charAt(6), "El séptimo caracter debe ser un dígito.");
        if (tamanioPlaca === 8) {
            errores += validarDigito(placa.charAt(7), "El octavo caracter debe ser un dígito.");
        }
    }
    console.log(errores)
    if(errores.length>0){
        return errores
    }else{
        return null
    }
}
validarMayuscula = function (digito, mensaje) {
    if (!esMayuscula(digito)) {
        return mensaje + "\n";
    }else{
        return ""
    }
}
validarDigito = function (digito, mensaje) {
    if (!esDigito(digito)) {
        return mensaje + "\n ";
    }else{
        return ""
    }
}








