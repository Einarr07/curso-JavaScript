// Función para sumar dos números
const sumar = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

// Función para restar dos números
const restar = (num1, num2) => {
    return parseInt(num1) - parseInt(num2);
}

// Función para multiplicar dos números
const multiplicar = (num1, num2) => {
    return parseInt(num1) * parseInt(num2);
}

// Función para dividir dos números, con verificación para evitar división por cero
const dividir = (num1, num2) => {
    if (parseInt(num2) === 0) {
        return "Error: División por cero";
    }
    return parseInt(num1) / parseInt(num2);
}

// Función para solicitar y devolver dos números ingresados por el usuario
const obtenerNumeros = () => {
    let num1 = prompt("Ingrese el primer número:");
    let num2 = prompt("Ingrese el segundo número:");
    return [num1, num2];
}

// Solicita al usuario la operación que desea realizar
alert("¿Qué operación deseas realizar?");
let operacion = prompt("1.- Suma, 2.- Resta, 3.- Multiplicación, 4.- División");

let resultado;  // Variable para almacenar el resultado de la operación

// Realiza la operación seleccionada
if (operacion == 1) {
    let [num1, num2] = obtenerNumeros(); // Solicita los números
    resultado = sumar(num1, num2); // Realiza la suma
    alert(`Tu resultado es: ${resultado}`);
} else if (operacion == 2) {
    let [num1, num2] = obtenerNumeros(); // Solicita los números
    resultado = restar(num1, num2); // Realiza la resta
    alert(`Tu resultado es: ${resultado}`);
} else if (operacion == 3) {
    let [num1, num2] = obtenerNumeros(); // Solicita los números
    resultado = multiplicar(num1, num2); // Realiza la multiplicación
    alert(`Tu resultado es: ${resultado}`);
} else if (operacion == 4) {
    let [num1, num2] = obtenerNumeros(); // Solicita los números
    resultado = dividir(num1, num2); // Realiza la división
    alert(`Tu resultado es: ${resultado}`);
} else {
    alert("No se ha encontrado la operación"); // Mensaje de error para opción inválida
}
