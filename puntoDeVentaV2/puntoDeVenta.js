calcularValorTotal = function(){
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    //1. Recuperar el nombre del producto como String
    //2. Recuperar el precio como float
    //3. Recuperar cantidad como int
    //4. Recuperar el porcentaje de descuento como int
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
  
     nombreProducto = recuperarTexto("txtProducto");
     precioProducto = recuperarFloat("txtPrecio");
     cantidad = recuperarInt("txtCantidad");
     


     if(esProductoValido(nombreProducto)& esPrecioValido(precioProducto)& esCantidadValida(cantidad)){
        valorSubtotal = calcularSubtotal(precioProducto,cantidad);
        //5. Mostrar valorSubtotal en el componente lblSubtotal
        mostrarTexto("lblSubtotal",valorSubtotal);
      
       //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
       //7. Mostrar el resultado en el componente lblDescuento
       valorDescuento = calcularDescuentoPorVolumen(valorSubtotal,cantidad);  
       mostrarTexto("lblDescuento",valorDescuento.toFixed(2));
    
       //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
       //   El IVA debe calcularse sobre el valor del subtotal menos el descuento
       //9. Mostrar el resultado en el componente lblValorIVA    
       valorIVA = calcularIVA((valorSubtotal-valorDescuento));
       mostrarTexto("lblValorIVA",valorIVA.toFixed(2));
       //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
       //11. Mostrar el resultado en el componente lblTotal
   
       valorTotal = calcularTotal(valorSubtotal,valorDescuento,valorIVA);  
       mostrarTexto("lblTotal",valorTotal.toFixed(2));
     } else{
        mostrarTexto("lblSubtotal","0.0");
        mostrarTexto("lblDescuento","0.0");
        mostrarTexto("lblValorIVA","0.0");
        mostrarTexto("lblTotal","0.0");
     }
   
  
    
}   
limpiar=function(){
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
        let cmpNombre = document.getElementById("txtProducto");
        cmpNombre.value = "";
        let cmpCantidad = document.getElementById("txtCantidad");
        cmpCantidad.value = "0";
        let cmpPrecio = document.getElementById("txtPrecio");
        cmpPrecio.value = "0.0";
        let cmpDescuento = document.getElementById("txtPorcentajeDescuento");
        cmpDescuento.value = "0";
        let lblComponenteSubtotal = document.getElementById("lblSubtotal");
        lblComponenteSubtotal.innerText = "0.0";
        let lblComponenteDescuento = document.getElementById("lblDescuento");
        lblComponenteDescuento.innerText = "0.0";
        let lblComponenteValorIVA = document.getElementById("lblValorIVA");
        lblComponenteValorIVA.innerText = "0.0";
        let lblComponenteTotal = document.getElementById("lblTotal");
        lblComponenteTotal.innerText = "0.0";
        let lblComponenteResumen = document.getElementById("lblResumen");
        lblComponenteResumen.innerText = "";
}


/**FUnciones para validar los campos */
//Verifica si la cantidad es valida
esProductoValido = function(nombre){
    if(nombre == ""){
        mostrarTexto("lblError1","* Campo obligatorio");
        return false;
    }
    if(nombre.lenght >10){
        mostrarTexto("lblError1","El campo ingresado solo permite 10 caracteres");
        return false;
    }
    mostrarTexto("lblError1","");
    return true;
}
//Verificar si la cantidad es validad
esCantidadValida = function(cantidad){
    let hayErrores = false;
    if(isNaN(cantidad)){
        //alert("Error");
        mostrarTexto("lblError2","Debe de ingresar un número");
        hayErrores = true;
    }
    if(cantidad == null){
        mostrarTexto("lblError2","* Campo obligatorio");
        hayErrores = true;
    }
    if(cantidad<0 || cantidad > 100){
        mostrarTexto("lblError2","El número debe estar entre 0 y 100");
        hayErrores = true;
    }
    if(hayErrores==false){
        mostrarTexto("lblError2","");
    }
    return !hayErrores;
}
//Verifica si el precio es valido
esPrecioValido = function(precio){
    let hayErrores = false;
    if(isNaN(precio)){
        //alert("Error");
        mostrarTexto("lblError3","Debe de ingresar un número");
        hayErrores = true;
    }
    if(precio == null){
        mostrarTexto("lblError3","* Campo obligatorio");
        hayErrores = true;
    }
    if(precio<0 || precio > 50){
        mostrarTexto("lblError3","El número debe estar entre 0 y 50");
        hayErrores = true;
    }
    if(hayErrores==false){
        mostrarTexto("lblError3","");
    }
    return !hayErrores;
}