const lista1 = [8, 4, 6, 5, 20, 99, 15, 20];
lista1.sort((a, b) => {
    return a - b;
});

const mitadLista1 = parseInt(lista1.length / 2);
let mediana;

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

if(esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedioElementos = calcularMediana([
        elemento1,
        elemento2,
    ]);
    mediana = promedioElementos;
} else{
    mediana = lista1[mitadLista1]; 
}

function calcularMediana(lista) {
    const sumaLista = lista.reduce(
        (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}
 console.log(
     mediana
 )