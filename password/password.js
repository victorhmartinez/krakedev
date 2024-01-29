validarPassword = function (password) {
    let tamanioPassword = password.length;
    let tieneMayusculas = false;
    let tieneDigito = false;
    let tieneGuion = false;
    let mensajesError = "";
    if (tamanioPassword >= 8 && tamanioPassword <= 16) {
        for (let index = 0; index < tamanioPassword; index++) {
            if (esMayuscula(password.charAt(index))) {
                tieneMayusculas = true;
            } else if (esDigito(password.charAt(index))) {
                tieneDigito = true;
            } else if (esGuion(password.charAt(index))) {
                tieneGuion = true;
            }
        }
        mensajesError = validarMensaje(tieneMayusculas, "La contraseña no tiene al menos una mayuscula.\n");
        mensajesError = validarMensaje(tieneDigito, "La contraseña no tiene al menos un digito.\n");
        mensajesError = validarMensaje(tieneGuion, "La contraseña no tiene al menos un caracter especial.\n");
    } else {
        mensajesError += mensajesError + "La contraseña tiene que ser entre 8 a 16 digitos.\n"
    }
    return mensajesError;
}

validarMensaje = function (estado, mensaje) {
    if (!estado) {
        return mensaje
    } else {
        return ""
    }
}
ejecutarValidacion = function () {
    let validacion;
    let password = recuperarTexto("txtPassword");
    validacion = validarPassword(password)
    if (validacion.length > 0) {
        mostrarTexto("lblError", validacion)
    } else {
        mostrarTexto("lblBien", "Password correcto")

    }
}