let clientes = [
    { cedula: "1212113", nombre: "Juan", edad: 20 },
    { cedula: "121515", nombre: "Mario", edad: 50 },
    { cedula: "545413", nombre: "pepe", edad: 22 }
];
crearCliente = function () {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarTexto("txtEdad");
    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;
agregarCLiente(nuevoCliente);
}
agregarCLiente = function (cliente) {
    let resultado;
    resultado = buscarClientes(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        alert("Cliente agredo");
        mostrarClientes()
    } else {
        alert("Ya existe el cliente con la cedula: " + cliente.cedula)
    }

}
buscarClientes = function (cedula) {
    let elementoCliente;
    let clienteEncotrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncotrado = elementoCliente;
            break;
        }
    }
    return clienteEncotrado;
}
mostrarClientes = function () {

    let cmpTabla = document.getElementById("tablaClientes");
    let contenidoTabla = "<table><tr>" +
        "<th>CEDULA</th>" +
        "<th>NOMBRE</th>" +
        "<th>EDAD</th>" +
        "</tr>"
        ;
    let elmentoCliente;
    for (let i = 0; i < clientes.length; i++) {
        elmentoCliente = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elmentoCliente.cedula + "</td>"
            + "<td>" + elmentoCliente.nombre + "</td>"
            + "<td>" + elmentoCliente.edad + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}
guadarCmanios=function(){
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorEdad = recuperarTexto("txtEdad");
    let datosCliente = {};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;
    modificarCliente(datosCliente);
    mostrarClientes()
}

modificarCliente=function(cliente){
    let clienteEcontrado=buscarClientes(cliente.cedula)
    if(clienteEcontrado!=null){
        clienteEcontrado.nombre=cliente.nombre;
        clienteEcontrado.edad=cliente.edad;
    }
}
ejecutarBusqueda=function(){
    let valorCedula=recuperarTexto("txtCedulaBusqueda")
    let cliente=buscarClientes(valorCedula);
    if(cliente==null){
        alert("Cliente no encontrado")
    }else{
        mostrarTextoEnCaja("txtCedula",cliente.cedula)
        mostrarTextoEnCaja("txtNombre",cliente.nombre)
        mostrarTextoEnCaja("txtEdad",cliente.edad)

    }
}