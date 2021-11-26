// Codigo del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

// Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(l1, l2, b) {
    return Number(l1) + Number(l2) + Number(b);
}

function alturaTriangulo(l1, l2, b){    
    if(l1 === l2 && l1 != b){
        alert("Es un Isoceles!");        
    }   else if(l1 === l2 && l1 === b) {
            alert("Es equilatero")
    }
    const base = l1;
    const lado = b / 2;
    const hipo = Math.sqrt((base*base) - (lado*lado));
    return hipo
}

function areaTriangulo(b, h) {
    return (Number(b) * Number(h)) / 2;
}

console.groupEnd();

// Codigo del circulo
console.group("Circulos");
 
// Diametro

function diametroCirculo(radio){
    return radio *2;
}

// Pi
const PI = Math.PI;
console.log("Pi es igual a: " + PI)

// Circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

// Area

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

//Aqui interactuamos con html
// Cuadrado
function calcPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}
function calcAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area);
}
// Triangulo
function calcPerimetroTriangulo() {
    const side1 = document.getElementById("inputLado1Triangulo");
    const side2 = document.getElementById("inputLado2Triangulo");
    const bs = document.getElementById("inputBaseTriangulo");

    const perimetro = perimetroTriangulo(side1.value, side2.value, bs.value);
    alert(perimetro);
}

function calcAreaTriangulo() {
    const side1 = document.getElementById("inputLado1Triangulo");
    const side2 = document.getElementById("inputLado2Triangulo");
    const base = document.getElementById("inputBaseTriangulo");
    const altura = alturaTriangulo(Number(side1.value), Number(side2.value), Number(base.value)); 


    const area = areaTriangulo(base.value, altura);
    alert(Number(area));
    console.log(area)
}
