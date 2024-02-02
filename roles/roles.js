let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1105852427", nombre: "Pedro", apellido: "Alvarado", sueldo: 700.0 }
]
let roles = [];
let esNuevo = false;
mostrarOpcionEmpleado = function () {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    desahabilitarOpciones();
    mostrarEmpelado()
}
mostrarOpcionRol = function () {
    mostrarComponente("divRol");
    ocultarComponente("divEmpleado");
    ocultarComponente("divResumen");
    deshabilitarComponente("botonGuardarRol")
}
mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpelado = function () {
    let cmpTabla = document.getElementById("tablaEmpleados")
    let contTabla = "<table><tr>" +
        "<th> CEDULA </th>" +
        "<th> NOMBRE </th>" +
        "<th> APELLIDO </th>" +
        "<th> SUELDO </th>" +
        "</tr>"
    let empleado = null;
    for (let i = 0; i < empleados.length; i++) {
        empleado = empleados[i];
        contTabla += "<tr><td>" + empleado.cedula + "</td>" +
            "<td>" + empleado.nombre + "</td>" +
            "<td>" + empleado.apellido + "</td>" +
            "<td>" + empleado.sueldo + "</td></tr>"
    }
    contTabla += "</table>"
    cmpTabla.innerHTML = contTabla
}
desahabilitarOpciones = function () {
    deshabilitarComponente("txtCedula")
    deshabilitarComponente("txtNombre")
    deshabilitarComponente("txtApellido")
    deshabilitarComponente("txtSueldo")
    deshabilitarComponente("btnGuardar")
}
habiliatOpciones = function () {
    habilitarComponente("txtCedula")
    habilitarComponente("txtNombre")
    habilitarComponente("txtApellido")
    habilitarComponente("txtSueldo")
    habilitarComponente("btnGuardar")
}
ejecutarNuevo = function () {
    habiliatOpciones();

    esNuevo = true;
}
buscarEmpleado = function (cedula) {
    let empleadoEncotrado;
    for (let i = 0; i < empleados.length; i++) {
        if (empleados[i].cedula == cedula) {
            empleadoEncotrado = empleados[i];
            break;
        }
    }
    if (empleadoEncotrado != null) {
        return empleadoEncotrado
    } else {
        return null
    }
}
agregarEmpleado = function (empleado) {
    let empleadoEncotrado = buscarEmpleado(empleado.cedula);
    if (empleadoEncotrado == null) {
        empleados.push(empleado)
        return true
    } else {
        return false
    }
}
guardar = function () {
    let cedula = recuperarTexto("txtCedula");
    let nombre = recuperarTexto("txtNombre");
    let apellido = recuperarTexto("txtApellido");
    let sueldo = recuperarFloat("txtSueldo");
    let sonTodosDigitos = todosDigitos(cedula);
    let sonMayusculasNombre = todasMayusculas(nombre)
    let sonMayusculasApellido = todasMayusculas(apellido)

    if (cedula.length > 0 || nombre.length > 0 || apellido.length > 0 || sueldo > 0.0) {
        if (cedula.length < 10 && !sonTodosDigitos) {
            mostrarTexto("lblErrorCedula", "La cedula deben ser 10 digitos")

        } else if (nombre.length < 3 || !sonMayusculasNombre) {
            mostrarTexto("lblErrorNombre", "El nombre debe tener al menos 3 caracteres y todas mayusculas")
        } else if (apellido.length < 3 || !sonMayusculasApellido) {
            mostrarTexto("lblErrorApellido", "El apellido debe tener al menos 3 caracteres y todas mayusculas")
        } else if (sueldo == NaN) {
            mostrarTexto("lblErrorSueldo", "EL suedo debe ser flotante")

        } else if (sueldo <= 400 || sueldo >= 5000) {
            mostrarTexto("lblErrorSueldo", "El sueldo debe estar entre 400 a 5000")

        } else {
            if (esNuevo) {
                let empleadoNuevo = {};
                let agregado = false;
                empleadoNuevo.cedula = cedula;
                empleadoNuevo.nombre = nombre;
                empleadoNuevo.apellido = apellido;
                empleadoNuevo.sueldo = sueldo;
                agregado = agregarEmpleado(empleadoNuevo);
                if (agregado) {
                    alert("Empleado guardado correctamente");
                    desahabilitarOpciones();
                    mostrarEmpelado();
                    esNuevo = false;
                } else {
                    alert("Ya existe un empleado con esa cedula" + cedula);
                }
            } else {
                let empleadoEncontrado = buscarEmpleado(cedula);
                empleadoEncontrado.nombre = nombre;
                empleadoEncontrado.apellido = apellido;
                empleadoEncontrado.sueldo = sueldo;
                alert("Empleado modificado exitosamente");
                mostrarEmpelado();
                desahabilitarOpciones();
            }
        }
    } else {
        alert("Todos los textos son obligatorios")
    }

}
todosDigitos = function (cedula) {
    let noEsDigito = true;
    for (let i = 0; i < cedula.length; i++) {
        if (!esDigito(cedula[i])) {
            noEsDigito = false;
            break;
        }

    }
    return noEsDigito;
}
todasMayusculas = function (cadena) {
    let todasMayusculas = true;
    for (let i = 0; i < cadena.length; i++) {
        if (!esMayuscula(cadena[i])) {
            todasMayusculas = false;
            break;
        }
    }
    return todasMayusculas;
}
ejecutarBusqueda = function () {
    let cedula = recuperarTexto("txtBusquedaCedula");
    let empleadoEncontrado = buscarEmpleado(cedula);
    if (empleadoEncontrado != null) {
        mostrarTextoEnCaja("txtCedula", empleadoEncontrado.cedula);
        mostrarTextoEnCaja("txtNombre", empleadoEncontrado.nombre);
        mostrarTextoEnCaja("txtApellido", empleadoEncontrado.apellido);
        mostrarTextoEnCaja("txtSueldo", empleadoEncontrado.sueldo);
        //habiliatar y desahabilitar componentes
        deshabilitarComponente("txtCedula")
        habilitarComponente("txtNombre")
        habilitarComponente("txtApellido")
        habilitarComponente("txtSueldo")
        habilitarComponente("btnGuardar")

    } else {
        alert("Empleado no existe")
    }
}
limpiar = function () {
    mostrarTextoEnCaja("txtCedula", " ")

    mostrarTextoEnCaja("txtNombre", " ")
    mostrarTextoEnCaja("txtApellido", " ")
    mostrarTextoEnCaja("txtSueldo", " ")
    esNuevo = false;
    desahabilitarOpciones();
}
buscarPorRol = function () {
    let cedulaRol = recuperarTexto("txtBusquedaCedulaRol")
    let empleadoEncotrado = buscarEmpleado(cedulaRol);
    if (empleadoEncotrado != null) {
        mostrarTexto("infoCedula", empleadoEncotrado.cedula)
        mostrarTexto("infoNombre", empleadoEncotrado.nombre + " " + empleadoEncotrado.apellido)
        mostrarTexto("infoSueldo", empleadoEncotrado.sueldo)

    } else {
        
        mostrarTexto("lblErrorBusqueda", "El empleado no existe")
      
    }
}
calcularAporteEmpleado = function (sueldo) {
    return sueldo * 0.0945;
}
calcularValorAPagar = function (sueldo, aporteIESS, descuento) {
    let valorPagar = 0.0;
    valorPagar = (sueldo - aporteIESS) - descuento;
    return valorPagar;
}
calcularRol = function () {
    let sueldo = recuperarFloatDiv("infoSueldo")
    let descuento = recuperarFloat("txtDescuentos");
    let aporte;

    if (!isNaN(descuento)) {
        aporte = calcularAporteEmpleado(sueldo);
        mostrarTexto("infoIESS", aporte);
        let valorPagar = calcularValorAPagar(sueldo, aporte, descuento);
        mostrarTexto("infoPago", valorPagar);
        habilitarComponente("botonGuardarRol")
    } else {
        alert("Debe ser el descuento un flotante")
    }
}
buscarRol = function (cedula) {
    let rolEncontrado;
    for (let i = 0; i < roles.length; i++) {
        let elemento = roles[i];
        if (cedula == elemento.cedula) {
            rolEncontrado = elemento;
        }
        if (rolEncontrado != null) {
            return rolEncontrado;
        } else {
            return null;
        }
    }
}
agregarRol=function(rol){
    let rolEncontrado = buscarRol(rol.cedula);
    if(rolEncontrado==null){
        roles.push(rol);
        alert("Rol añadido con exito")
        deshabilitarComponente("botonGuardarRol")
    }else{
        alert("Este rol ya existe")
        
    }
}
calcularAporteEmpleador= function(sueldo){
    return sueldo*0.1115;
}

guardarRol=function(){
    let cedula=recuperarTextoDiv("infoCedula");
    let nombre=recuperarTextoDiv("infoNombre")
    let sueldo=recuperarFloatDiv("infoSueldo")
    let aporteEmpleado=recuperarFloatDiv("infoIESS")
    let pago=recuperarFloatDiv("infoPago")
    let aporteEmpleador=calcularAporteEmpleador(sueldo);
    let rol ={};
    rol.cedula=cedula;
    rol.nombre=nombre;
    rol.sueldo=sueldo;
    rol.aporteEmpleado=aporteEmpleado;
    rol.pago=pago;
    rol.aporteEmpleador=aporteEmpleador
    agregarRol(rol);
}