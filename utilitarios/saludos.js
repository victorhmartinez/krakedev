 saludar= function(){
    let nombre = recuperarTexto("txtSaludo");
    let apellido= recuperarTexto("txtApellido");

    let edad= recuperarInt("txtEdad");
    let estatura= recuperarFloat("txtEstatura");
    let mensajeBienvenida= "Bienvenido"+nombre+" "+apellido
    mostrarTexto("lblResultado",mensajeBienvenida)
 }
 mostrarTexto= function(idComponente,mensaje){
let componente;
componente=document.getElementById(idComponente);
componente.innerText=mensaje;
 }
 recuperarTexto= function(idComponente){
    let componente;
    let valorIngresado
    componente= document.getElementById(idComponente)
    valorIngresado= componente.value;
    return valorIngresado
 }
 recuperarInt= function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorEntero = parseInt(valorCaja);
    return valorEntero;
 }
 recuperarFloat= function(idComponente){
    let valorCaja= recuperarTexto(idComponente);
    let valorFlotante = parseFloat(valorCaja);
    return valorFlotante;
 }