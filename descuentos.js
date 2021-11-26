const cupones = {
    clave1: 10,
    clave2: 20,
    clave3: 30,
};

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajeFinal = 100 - descuento;
    const precioFinal = (precio * porcentajeFinal) / 100;
    return precioFinal;
}


function calcularPrecioFinal () {
    const precio = document.getElementById("precio").value;
    const nombreCupon = document.getElementById('cupon').value;
    const cuponDefault = 0;
    const cuponDescuento = cupones[nombreCupon] || cuponDefault;
    const final = calcularPrecioConDescuento(precio, cuponDescuento);
    const printPrice = document.getElementById("PrecioFinal");
    if(cuponDescuento === 0){
        printPrice.innerText = "Lo sentimos este codigo no es valido, vuelva a intentarlo";
    } else {
        printPrice.innerText = "Usted solo va a pagar: $" + final;
    }
}