probarAtributos = function () {
    let persona = {
        nombre: "Victor",
        apellido: "Martinez",
        edad: 25,
        estaVivo: true
    };
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("No esta vivo");

    } else {
        console.log("Está vivo")
    }
}
crearProducto = function () {
    let producto1 = {
        nombre: "Pera",
        precio: 0.15,
        stock: 5
    }
    let producto2 = {
        nombre: "Manzana",
        precio: 0.20,
        stock: 4
    }
    console.log(producto1.nombre);
    console.log(producto2.nombre);
    if (producto1.stock > producto2.stock) {
        console.log("El producto 1 tiene mayor stock");
    } else if (producto2.stock > producto1.stock) {
        console.log("El producto 2 tiene mayor stock");
    } else {
        console.log("Ambos productos tienen el mismo stock");
    }

}

modificarAtributos = function () {
    let cuenta = {
        numero: 4053124,
        saldo: 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;
    console.log(cuenta.saldo);

}
crearCliente = function () {
    let cliente = {
        cedula: "171500",
        nombre: "Carlos"
    }
    let cliente1 = {};
    cliente1.nombre = "Romeo",
        cliente1.apellido = "Salcedo",
        cliente1.cedula = "1212132"

}

probarIncrementoSaldo= function(){
    let cta={numero:"24121",saldo:34.0}
    incrementarSaldo(cta,100);
    console.log(cta.saldo);
}
probarDeterminarMayor=function(){
    let per1={
        nombre:"Pedro",
        edad: 26
    }
    let per2={
        nombre:"Camilo",
        edad: 19
    }
let mayor=determinarMayor(per1,per2)
if(mayor!=null){
    console.log("El mayor es:"+mayor.nombre)
}
}

incrementarSaldo = function(cuenta,monto){
cuenta.saldo+=monto;
}
determinarMayor=function(persona1, persona2){
if(persona1.edad>persona2.edad){
    return persona1
}else if(persona2.edad>persona1.edad){
return persona2
}else{
    return null
}
}
