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
crearProducto= function(){
    let producto1={
        nombre:"Pera",
        precio:0.15,
        stock: 5
    }
    let producto2={
        nombre:"Manzana",
        precio:0.20,
        stock: 4
    }
    console.log(producto1.nombre);
    console.log(producto2.nombre);
    if(producto1.stock>producto2.stock){
        console.log("El producto 1 tiene mayor stock");
    }else if (producto2.stock> producto1.stock){
        console.log("El producto 2 tiene mayor stock");
    }else{
        console.log("Ambos productos tienen el mismo stock");
    }

}