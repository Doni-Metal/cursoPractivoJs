const lista = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1]

function calcModa(lista) {
    const listaCount = {};
    lista.map(element => listaCount[element] = (listaCount[element]) ? listaCount[element] += 1 : 1);        
    const listaArray = Object.entries(listaCount).sort(
        (valorAcumulado, nuevoValor) => valorAcumulado[1] - nuevoValor[1]
    );
    return listaArray[listaArray.length - 1]
}

console.log(calcModa(lista));