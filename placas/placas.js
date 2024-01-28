validarPlaca=function(){
    let placa = recuperarTexto("txtPlaca");
    let provincia;
    let tipo;
    let erroresEstructura= validarEstructura(placa);

    if(erroresEstructura ==null){
        mostrarTexto("lblResultado","ESTRUCTURA VALIDA");
        provincia=obtenerProvincia(placa);
        if(provincia!=null){
            mostrarTexto("lblProvincia","Provincia: "+provincia); 
        }else{
            mostrarTexto("lblErrores","Provincia incorrecta"); 
        }
        tipo=obtenerTipoVehículo(placa);
        if(tipo!=null){
            mostrarTexto("lblTipo","Tipo de vehiculo: "+tipo); 
        }else{
            mostrarTexto("lblErrores","Tipo de vehiculo incorrecto"); 
        }
    }else{
        mostrarTexto("lblResultado","ESTRUCTURA INVALIDA")
        mostrarTexto("lblErrores",erroresEstructura)
    }
}