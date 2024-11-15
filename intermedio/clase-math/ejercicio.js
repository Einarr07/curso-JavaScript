class Calculadora {
    constructor() {}

    sumar(num1, num2) {
        return parseFloat(num1) + parseFloat(num2);
    }

    restar(num1, num2) {
        return parseFloat(num1) - parseFloat(num2);
    }

    multiplicar(num1, num2) {
        return parseFloat(num1) * parseFloat(num2);
    }

    dividir(num1, num2) {
        if (num2 == 0) {
            return "Error: División entre cero no permitida.";
        }
        return parseFloat(num1) / parseFloat(num2);
    }

    potenciar(num, exp) {
        return Math.pow(parseFloat(num), parseFloat(exp));
    }

    raizCuadrada(num) {
        if (num < 0) {
            return "Error: No se puede calcular la raíz cuadrada de un número negativo.";
        }
        return Math.sqrt(parseFloat(num));
    }

    raizCubica(num) {
        return Math.cbrt(parseFloat(num));
    }
}

const calculadora = new Calculadora();

alert("¿Qué operación deseas realizar?");
let operacion = parseInt(prompt(
    "1.- Sumar\n" +
    "2.- Restar\n" +
    "3.- Multiplicar\n" +
    "4.- Dividir\n" +
    "5.- Potenciación\n" +
    "6.- Raíz cuadrada\n" +
    "7.- Raíz cúbica"
));

function obtenerNumero(mensaje) {
    let numero = prompt(mensaje);
    while (isNaN(numero) || numero.trim() === "") {
        numero = prompt("Entrada inválida. " + mensaje);
    }
    return numero;
}

let resultado;

switch (operacion) {
    case 1:
        let suma1 = obtenerNumero("Ingrese el primer número:");
        let suma2 = obtenerNumero("Ingrese el segundo número:");
        resultado = calculadora.sumar(suma1, suma2);
        alert(`El resultado de la suma es: ${resultado}`);
        break;
    case 2:
        let resta1 = obtenerNumero("Ingrese el primer número:");
        let resta2 = obtenerNumero("Ingrese el segundo número:");
        resultado = calculadora.restar(resta1, resta2);
        alert(`El resultado de la resta es: ${resultado}`);
        break;
    case 3:
        let mult1 = obtenerNumero("Ingrese el primer número:");
        let mult2 = obtenerNumero("Ingrese el segundo número:");
        resultado = calculadora.multiplicar(mult1, mult2);
        alert(`El resultado de la multiplicación es: ${resultado}`);
        break;
    case 4:
        let div1 = obtenerNumero("Ingrese el primer número:");
        let div2 = obtenerNumero("Ingrese el segundo número:");
        resultado = calculadora.dividir(div1, div2);
        alert(`El resultado de la división es: ${resultado}`);
        break;
    case 5:
        let base = obtenerNumero("Número a potenciar:");
        let exponente = obtenerNumero("Exponente:");
        resultado = calculadora.potenciar(base, exponente);
        alert(`El resultado de la potenciación es: ${resultado}`);
        break;
    case 6:
        let numRaizCuad = obtenerNumero("De qué número quieres saber la raíz cuadrada?:");
        resultado = calculadora.raizCuadrada(numRaizCuad);
        alert(`La raíz cuadrada de ${numRaizCuad} es: ${resultado}`);
        break;
    case 7:
        let numRaizCub = obtenerNumero("De qué número quieres saber la raíz cúbica?:");
        resultado = calculadora.raizCubica(numRaizCub);
        alert(`La raíz cúbica de ${numRaizCub} es: ${resultado}`);
        break;
    default:
        alert("Operación no válida. Por favor, selecciona una opción del 1 al 7.");
}
