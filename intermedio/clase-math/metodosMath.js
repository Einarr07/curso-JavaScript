// -------------------------
// MÉTODOS DE Math EN JAVASCRIPT
// -------------------------

// 1. Calcula la raíz cuadrada de un número
// let numero = Math.sqrt(25);
// Resultado: 5

// 2. Calcula la raíz cúbica de un número
// let numero = Math.cbrt(25);
// Resultado: Aproximadamente 2.924017738

// 3. Devuelve el número más grande de una lista
// let numero = Math.max(65, 452, 132, 156, 748, 6145, 3, 21);
// Resultado: 6145

// 4. Devuelve el número más pequeño de una lista
// let numero = Math.min(65, 452, 132, 156, 748, 6145, 3, 21);
// Resultado: 3

// 5. Genera un número aleatorio entre 0 y 1
// let numero = Math.random();
// Resultado: Número decimal entre 0 y 1

// 6. Genera un número aleatorio entre 0 y 100
// let random = Math.random() * 100;

// 7. Redondea el número aleatorio generado (entre 0 y 100)
// let numeroRedondeado = Math.round(random);

// 8. Redondea hacia abajo el número aleatorio generado (entre 0 y 99)
// let numero = Math.floor(random);

// 9. Devuelve el valor flotante más cercano que puede representar un número
// let numero = Math.fround(484848484848484848);

// 10. Redondea un número al entero más cercano
// let numero = Math.round(9.9);
// Resultado: 10

// 11. Elimina los decimales de un número
let numero = Math.trunc(8.312165); // Resultado: 8

// Muestra el resultado en la página
document.write("<strong>Resultado:</strong> " + numero);
