mostrarNumeros = function () {
    console.log("antes del for")
    for (let i = 0; i < 4; i++) {
        console.log(i)
    }
    console.log("Despues del for")
}

mostrarNumeros2 = function () {
    console.log("antes del for")
    for (let indice = 1; indice <= 5; indice++) {
        console.log(indice)
    }
    console.log("Despues del for")
}
mostrarPares = function () {
    console.log("antes del for")

    for (x = 2; x <= 10; x += 2) {
        console.log(x)
    }
    console.log("Despues del for")
}
mostrarInversa = function () {
    console.log("antes del for")
    for (let i = 10; i >= 0; i--) {
        console.log(i)
    }
    console.log("Despues del for")
}
hackearNasaPelis= function(){
    //hackeando nasa 0%
    for(let porcentaje =0; porcentaje<=100;porcentaje++){
        console.log("Hackeando...."+porcentaje+"%")
    }
    console.log("La nasa ha sido hackeada")
}
mostrarImpares= function(){
    console.log("antes del for")

    for (x = 1; x <= 21; x += 2) {
        console.log(x)
    }
    console.log("Despues del for")
}