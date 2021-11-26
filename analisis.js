//Helpers
function esPar (num) {
    return (num % 2 === 0);
}


function calcularMediana(lista) {
    const sumaLista = lista.reduce(
        (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}

// Calculadora de mediana
function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)) {
        const perMitad1 = lista[mitad - 1];
        const perMitad2 = lista[mitad];
        const mediana = calcularMediana([perMitad1, perMitad2]);
        return mediana;
    } else {
        const perMitad = lista[mitad];
        return perMitad;
    }
}


// Mediana Gral
const salarioCol = colombia.map(
    function (person) {
        return person.salary;
    }
);
salarioCol.sort((a, b) => a - b);

const medianaGralCol = medianaSalarios(salarioCol);

// Mediana del top 10

const sliceStart = (salarioCol.length * 90) / 100;

const salColTop10 = salarioCol.slice(
    sliceStart,
    salarioCol.length
);

const medianaTop10 = medianaSalarios(salColTop10);

console.log({
    medianaGralCol,
    medianaTop10,
})