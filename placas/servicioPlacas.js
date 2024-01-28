validarEstructura = function (placa) {

    let errores = "";
    let tamanioPlaca = placa.length;
    if (tamanioPlaca !== 7 && tamanioPlaca !== 8) {
        errores += "La placa debe tener 7 u 8 caracteres.";
    } else {
        errores += validarMayuscula(placa.charAt(0), "El primer caracter debe ser una letra mayúscula.");
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
    if (errores.length > 0) {
        return errores
    } else {
        return null
    }
}
validarMayuscula = function (digito, mensaje) {
    if (!esMayuscula(digito)) {
        return mensaje + "\n";
    } else {
        return ""
    }
}
validarDigito = function (digito, mensaje) {
    if (!esDigito(digito)) {
        return mensaje + "\n ";
    } else {
        return ""
    }
}

obtenerProvincia = function (placa) {
    let primerDigito = placa.charAt(0);
    if (primerDigito == "A") {
        return "Azuay";
    } else if (primerDigito == "B") {
        return "Bolívar";
    } else if (primerDigito == "U") {
        return "Cañar";
    } else if (primerDigito == "C") {
        return "Carchi";
    } else if (primerDigito == "X") {
        return "Cotopaxi";
    } else if (primerDigito == "H") {
        return "Chimborazo";
    } else if (primerDigito == "O") {
        return "El Oro";
    } else if (primerDigito == "E") {
        return "Esmeraldas";
    } else if (primerDigito == "W") {
        return "Galápagos";
    } else if (primerDigito == "G") {
        return "Guayas";
    } else if (primerDigito == "I") {
        return "Imbabura";
    } else if (primerDigito == "L") {
        return "Loja";
    } else if (primerDigito == "R") {
        return "Los Ríos";
    } else if (primerDigito == "M") {
        return "Manabí";
    } else if (primerDigito == "V") {
        return "Morona Santiago";
    } else if (primerDigito == "N") {
        return "Napo";
    }  else if (primerDigito == "S") {
        return "Pastaza";
    } else if (primerDigito == "P") {
        return "Pichincha";
    }else if (primerDigito == "K") {
        return "Sucumbios";
    } else if (primerDigito == "Q") {
        return "Orellana";
    } else if (primerDigito == "Y") {
        return "Santa Elena";
    } else if (primerDigito == "T") {
        return "Tungurahua";
    } else if (primerDigito == "Z") {
        return "Zamora Chinchipe";
    }else{
        return null;
    }
}
obtenerTipoVehículo= function( placa){
    let segundoDigito = placa.charAt(1);
    if(segundoDigito=="A" || segundoDigito=="Z"){
        return "Vehículos comerciales(como taxis o autobuses)"
    }else if(segundoDigito=="E"){
        return "Vehículos gubernamentales"
    }else if(segundoDigito=="X"){
        return "Vehículos de uso oficial"
    } else if( segundoDigito=="S"){
        return "Vehículos del gobierno provincial"
    }else if(segundoDigito=="M"){
        return "Vehículos municipales"
    }else{
        return "Vehículo particular (privado)"
    }
}

obtnerDiaPicoYPlaca= function(placa){
    let ultimoDigito = placa.charAt(placa.length-1);
    if(ultimoDigito == 1 || ultimoDigito == 2){
        return "LUNES";
    } else if (ultimoDigito == 3 || ultimoDigito == 4){
        return "MARTES";
    } else if(ultimoDigito == 5  || ultimoDigito == 6){
        return "MIERCOLES";
    } else if(ultimoDigito == 7 || ultimoDigito == 8){
        return "JUEVES";
    } else if(ultimoDigito == 9 || ultimoDigito == 0){
        return "VIERNES"
    };
}

limpiar= function(){
    document.getElementById("txtPlaca").value = '';
    mostrarTexto("lblResultado","");
    mostrarTexto("lblProvincia","");
    mostrarTexto("lblTipo","");
    mostrarTexto("lblPicoYPlaca","");
    mostrarTexto("lblErrores","");
}






