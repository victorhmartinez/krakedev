calcularTasaInteres = function (ingresoAnual) {
    let tasaInteres;
    if (ingresoAnual < 300000) {
        tasaInteres = 16
    } else if (ingresoAnual >= 300000 && ingresoAnual < 500000) {
        tasaInteres = 15;
    } else if (ingresoAnual >= 500000 && ingresoAnual < 1000000) {
        tasaInteres = 14;
    } else if (ingresoAnual >= 1000000 && ingresoAnual < 2000000) {
        tasaInteres = 13;
    } else if (ingresoAnual >= 2000000) {
        tasaInteres = 12;
    }
    return tasaInteres;
}
calcularCapacidadPago = function (edad, ingresos, egresos) {
    let cuotaMensual;
    if (edad > 50) {
        cuotaMensual = (egresos - ingresos) * 0.30
    } else if (edad <= 50) {
        cuotaMensual = (egresos - ingresos) * 0.40
    }
    return cuotaMensual;
}
calcularDescuento = function (precio, cantidad) {
    let descuento
    if (cantidad < 3) {
        descuento = 0;
    } else if (cantidad >= 3 && cantidad <= 5) {
        descuento = 2;
    } else if (cantidad >= 6 && cantidad <= 11) {
        descuento = 3;
    } else if (cantidad >= 12) {
        descuento = 4;
    }
    return descuento;
}
determinarColesterolLDL = function (nivelColesterol) {

    if (nivelColesterol < 100) {
        return "Optimo";
    } else if (nivelColesterol >= 100 && nivelColesterol <= 129) {
        return "Casi óptimo";
    } else if (nivelColesterol >= 130 && nivelColesterol <= 159) {
        return "Limite superior del rango normal"
    } else if (nivelColesterol >= 160 && nivelColesterol <= 189) {
        return "Alto";
    } else if (nivelColesterol > 190) {
        return "Muy alto";
    }

}

validarClave = function (clave) {

    if (clave.lenght >= 8 && clave.lenght <= 16) {
        return true;
    } else {
        return false
    }

}

esMayuscula = function (caracter) {
    let ascii = caracter.charCodeAt(0);
    if (ascii >= 65 && ascii <= 90) {
        return true;
    } else {
        return false;
    }
}
esMinuscula = function (caracter) {
    let asccii = caracter.charCodeAt(0);
    if ((asccii >= 97 && asccii <= 122) || (asccii >= 130 && asccii <= 163)) {
        return true;
    } else {
        return false;
    }
}
esDigito = function (caracter) {
    let ascii = caracter.charCodeAt(0);
    if ((ascii >= 48 && ascii <= 57)) {
        return true;
    } else {
        return false;
    }
}
darPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    if (notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) {
        return true;
    } else {
        return false;
    }
}
otorgarPermiso = function (notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90) && notaGeometria > 80) {
        return true;
    } else {
        return false;
    }
}
dejarSalir = function (notaMatematica, notaFisica, notaGeometria) {
    if ((notaMatematica > 90 || notaFisica > 90 || notaGeometria > 90) && notaFisica > notaMatematica) {
        return true;
    } else {
        return false;
    }
}
