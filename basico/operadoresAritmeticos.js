let num1 = 23;
let num2 = 7;

document.write(`
    <strong>Operaciones:</strong><br>
    Suma: ${num1 + num2} <br>
    Resta: ${num1 - num2} <br>
    Multiplicación: ${num1 * num2} <br>
    División: ${num1 / num2} <br>
    Resto: ${num1 % num2} <br>
    Exponencial (num1 ^ num2): ${num1 ** num2} <br>
`);

// Decremento
num2--;
document.write(`Decremento de num2: ${num2} <br>`);

// Incremento
num1++;
document.write(`Incremento de num1: ${num1} <br>`);

// Exponente de num1 al cuadrado
let exponenteNum1 = num1 ** 2;
document.write(`Exponente de num1 al cuadrado: ${exponenteNum1}`);
