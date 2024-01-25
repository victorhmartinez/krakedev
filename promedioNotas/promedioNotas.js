calcularPromediosNotas = function () {
    let Nota1;
    let Nota2;
    let Nota3;
    let promedio;
    let mensaje;
    Nota1 = recuperarFlotante("txtNota1");
    Nota2 = recuperarFlotante("txtNota2");
    Nota3 = recuperarFlotante("txtNota3");
    promedio = calcularPromedio(Nota1, Nota2, Nota3);
    promedio=promedio.toFixed(2);
    mensaje="el prmedio es "+promedio
    cambiarTexto("lblResultado",mensaje)
}