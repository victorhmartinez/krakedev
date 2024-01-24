

calcularValorDescuento=function(monto,porcentajeDescuento){
    let totalDescuento = (monto*porcentajeDescuento)/100;
    return totalDescuento;
}

calcularIVA=function(monto){
    let IVA = (monto*12)/100;
    return IVA;
}

calcularSubtotal=function(precio, cantidad){
    let total = precio*cantidad;
    return total;
}

calcularTotal=function(subtotal, descuento, iva){
    let valorTotal = (subtotal-descuento)+iva;
    return valorTotal;
}