validarPlaca=function(){
    let placa = recuperarTexto("txtPlaca");
    let provincia;
    let erroresEstructura= validarEstructura(placa);

    if(erroresEstructura ==null){
        mostrarTexto("lblResultado","ESTRUCTURA VALIDA");
        provincia=obtenerProvincia(placa);
        if(provincia!=null){
            mostrarTexto("lblProvincia","Provincia: "+provincia); 
        }else{
            mostrarTexto("lblErrores","Provincia incorrecta"); 
        }
    }else{
        mostrarTexto("lblResultado","ESTRUCTURA INVALIDA")
        mostrarTexto("lblErrores",erroresEstructura)
    }
}