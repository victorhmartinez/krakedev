

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
calcularDescuentoPorVolumen = function(subtotal, cantidad){
    let valorDescuento;
    if(cantidad<3){
        valorDescuento=0
    }else if(cantidad>=3 && cantidad<=5){
        valorDescuento = subtotal * 0.03;
    }else if(cantidad>=6 && cantidad<=11){
        valorDescuento = subtotal * 0.04;
    }else if (cantidad >= 12){
        valorDescuento = subtotal * 0.05;
    }
    return valorDescuento;
}