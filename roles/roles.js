let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "1105852427", nombre: "Pedro", apellido: "Alvarado", sueldo: 700.0 }
]
let esNuevo=false;
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
}
mostrarOpcionResumen = function () {
    mostrarComponente("divResumen");
    ocultarComponente("divEmpleado");
    ocultarComponente("divRol");
}

mostrarEmpelado=function(){
    let cmpTabla= document.getElementById("tablaEmpleados")
    let contTabla="<table><tr>"+
    "<th> CEDULA </th>"+
    "<th> NOMBRE </th>"+
    "<th> APELLIDO </th>"+
    "<th> SUELDO </th>"+
    "</tr>"
    let empleado=null;
    for(let i=0;i<empleados.length;i++){
        empleado=empleados[i];
        contTabla+="<tr><td>"+empleado.cedula+"</td>"+
        "<td>"+empleado.nombre+"</td>"+
        "<td>"+empleado.apellido+"</td>"+
        "<td>"+empleado.sueldo+"</td></tr>"
    }
    contTabla+="</table>"
    cmpTabla.innerHTML=contTabla
}
desahabilitarOpciones=  function(){
    deshabilitarComponente("txtCedula")
    deshabilitarComponente("txtNombre")
    deshabilitarComponente("txtApellido")
    deshabilitarComponente("txtSueldo")
    deshabilitarComponente("btnGuardar")
}
ejecutarNuevo=function(){
    
    habilitarComponente("txtCedula")
    habilitarComponente("txtNombre")
    habilitarComponente("txtApellido")
    habilitarComponente("txtSueldo")
    habilitarComponente("btnGuardar")
    esNuevo=true;
}