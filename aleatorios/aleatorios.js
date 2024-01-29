aleatorio = function () {
    return Math.floor(Math.random() * 100) + 1;
}
generarAleatorio = function () {
    let aleatorioGen
    let aleatorios = [];
    let numero = recuperarTexto("txtNumero");
    if(numero>=5 && numero<=20){
        for(let index =0;index<numero;index++){
            console.log(index);
            aleatorioGen=aleatorio();
            aleatorios.push(aleatorioGen)
        }
        mostrarResultados(aleatorios);
    }
}
mostrarResultados=function(arregloNumeros){
let cmpTabla=document.getElementById("cmpTabla");
let contenTabla="<table><tr><th>Números random</th></tr>"
for(let i=0;i<arregloNumeros.length;i++){
    contenTabla+="<tr><td>"+arregloNumeros[i]+"</td></tr>"
}
contenTabla+="</table>"
cmpTabla.innerHTML=contenTabla
}