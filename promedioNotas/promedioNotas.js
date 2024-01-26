calcularPromediosNotas = function () {
    let Nota1;
    let Nota2;
    let Nota3;
    let promedio;
    let mensaje;
    let estado
    Nota1 = recuperarFlotante("txtNota1");
    Nota2 = recuperarFlotante("txtNota2");
    Nota3 = recuperarFlotante("txtNota3");
    promedio = calcularPromedio(Nota1, Nota2, Nota3);
    promedio=promedio.toFixed(2);
    mensaje="El promedio es "+promedio
    cambiarTexto("lblResultado",mensaje)
  if( promedio < 5 && promedio>0){
    estado="REPROBADO";
    cambiarImagen("cmpImagen","./imagenes/Reprobado.gif")
  }else if(promedio>=5 && promedio<=8){
    estado="BUEN TRABAJO";
    cambiarImagen("cmpImagen","./imagenes/BuenTrabajo.gif")
  } else if(promedio >8 && promedio <=10){
    estado="EXCELENTE";
    cambiarImagen("cmpImagen","./imagenes/excelente.gif")
  } else{
    estado="DATOS INCORRECTOS";
    cambiarImagen("cmpImagen","./imagenes/DatosIncorrectos.gif") 
  }
  cambiarTexto("lblMensaje",estado)
  
}