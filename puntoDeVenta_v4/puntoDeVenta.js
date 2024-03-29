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
     porcentajeDescuento = recuperarInt("txtPorcentajeDescuento");
     valorSubtotal = calcularSubtotal(precioProducto,cantidad);
     //5. Mostrar valorSubtotal en el componente lblSubtotal
     let lblComponenteSubtotal = document.getElementById("lblSubtotal");
     lblComponenteSubtotal.innerText = valorSubtotal;
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10
                Subtotal esperado: 54
            Si el caso de prueba es exitoso, hacer un commit
         */
    //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
    //7. Mostrar el resultado en el componente lblDescuento
    valorDescuento = calcularValorDescuento(valorSubtotal,porcentajeDescuento);  
    let lblComponenteDescuento = document.getElementById("lblDescuento");
    lblComponenteDescuento.innerText = valorDescuento;
    /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
                Descuento esperado: 5.4
            Si el caso de prueba es exitoso, hacer un commit
         */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
	//   El IVA debe calcularse sobre el valor del subtotal menos el descuento
    //9. Mostrar el resultado en el componente lblValorIVA    
    valorIVA = calcularIVA((valorSubtotal-valorDescuento));
    let lblComponenteIva = document.getElementById("lblValorIVA");
    lblComponenteIva.innerText = valorIVA.toFixed(3);
   
    /*
    
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
					--valorSubtotal: 54
					--descuento:5.4
					--valorSubtotal - descuento: 48.6
                IVA esperado: 5.832
            Si el caso de prueba es exitoso, hacer un commit
        */
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    //11. Mostrar el resultado en el componente lblTotal
    valorTotal = calcularTotal(valorSubtotal,valorDescuento,valorIVA);  
    let lblComponenteTotal = document.getElementById("lblTotal");
    lblComponenteTotal.innerText = valorTotal.toFixed(3);
     /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
					--valorSubtotal: 5.4
					--descuento: 5.4
					--IVA: 5.832
                Total esperado: 54.432
            Si el caso de prueba es exitoso, hacer un commit
        */

    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    let lblComponenteResumen = document.getElementById("lblResumen");
    lblComponenteResumen.innerText = "Valor a pagar por "+cantidad+" "+nombreProducto+" con "+porcentajeDescuento+"% de descuento: USD "+valorTotal.toFixed(3);
        /*
            Ejemplo: 
                Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
            Si funciona, hacer un commit
        */ 
    
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

/* SI TODO FUNCIONA, HACER UN PUSH */