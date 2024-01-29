
let notas = []
agregarElementos = function () {
    let notas = [];
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}
recorrerArreglo = function () {
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        notaR = notas[indice];
        console.log(notaR)
    }
}

generaTabla = function () {
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla")
    contenidoTabla += "<table><tr><td>UNO</td></tr>  <tr><td>DOS</td></tr></table>"
    cmpTabla.innerHTML = contenidoTabla
}
mostrarNotas = function () {
    let cmpTabla = document.getElementById("divTabla")
    let contenidoTabla = "<table> <tr><th>NOTA</th></tr>";
    let miNota;
    for (let i = 0; i < notas.length; i++) {
        miNota = notas[i]
        contenidoTabla+="<tr><td>"+miNota+"</tr></td>"
    }
    contenidoTabla+= "</table>"
    cmpTabla.innerHTML=contenidoTabla;
}
probarAgregar = function () {
    let notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

agregarNota = function (nota) {
    notas.push(nota);
    mostrarNotas()
}
//Funcion para calcular el promediio
calcularPromedio = function () {
    let sumaNotas = 0;
    let promedio = 0;

    for (let indice = 0; indice < notas.length; indice++) {
        sumaNotas += notas[indice]
    }
    promedio = sumaNotas / notas.length
    return promedio;
}
ejecutarPromedio = function () {
    let promedio = calcularPromedio();
    mostrarTexto("lblPromedio", "El promedio es " + promedio)
}