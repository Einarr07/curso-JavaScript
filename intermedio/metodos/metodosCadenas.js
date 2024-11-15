// Declaración de variables iniciales
let cadena = "Cadena como estas?";
let cadena2 = "e";
let numero = 708;

// Función para mostrar resultados de las operaciones
function mostrarResultado(operacion, resultado) {
    document.write(`<strong>${operacion}:</strong> ${resultado}<br>`);
}

// 1. Concatenar dos cadenas
let resultado = cadena.concat(cadena2);
mostrarResultado("Concatenar cadenas", resultado);

// 2. Verificar si una cadena comienza con un valor asignado
resultado = cadena.startsWith(cadena2);
mostrarResultado("¿Comienza con 'e'?", resultado);

// 3. Verificar si una cadena termina con un valor asignado
resultado = cadena.endsWith(cadena2);
mostrarResultado("¿Termina con 'e'?", resultado);

// 4. Verificar si un valor está contenido en una cadena
resultado = cadena.includes(cadena2);
mostrarResultado("¿Incluye 'e'?", resultado);

// 5. Obtener la posición del índice de un carácter
resultado = cadena.indexOf(cadena2);
mostrarResultado("Índice de 'e'", resultado);

// 6. Obtener la última posición de un carácter
resultado = cadena.lastIndexOf(cadena2);
mostrarResultado("Última posición de 'e'", resultado);

// 7. Rellenar al inicio hasta un total de 32 caracteres
resultado = cadena.padStart(32, "?");
mostrarResultado("Rellenar al inicio", resultado);

// 8. Rellenar al final hasta un total de 25 caracteres
resultado = cadena.padEnd(25, ")");
mostrarResultado("Rellenar al final", resultado);

// 9. Repetir una cadena 3 veces
resultado = cadena.repeat(3);
mostrarResultado("Repetir cadena 3 veces", resultado);

// 10. Dividir la cadena en un array según un delimitador
resultado = cadena.split(" ");
mostrarResultado("Dividir en array (por espacios)", resultado.join(", "));

// 11. Extraer un segmento de la cadena
resultado = cadena.substring(0, 3);
mostrarResultado("Subcadena (0-3)", resultado);

// 12. Convertir cadena a minúsculas
resultado = cadena.toLowerCase();
mostrarResultado("Minúsculas", resultado);

// 13. Convertir cadena a mayúsculas
resultado = cadena.toUpperCase();
mostrarResultado("Mayúsculas", resultado);

// 14. Convertir número a cadena
resultado = numero.toString();
mostrarResultado("Convertir número a cadena", resultado);

// 15. Eliminar espacios al inicio y al final
resultado = cadena.trim();
mostrarResultado("Eliminar espacios (inicio y final)", resultado);

// 16. Eliminar espacios solo al final
resultado = cadena.trimEnd();
mostrarResultado("Eliminar espacios al final", resultado);

// 17. Eliminar espacios solo al inicio
resultado = cadena.trimStart();
mostrarResultado("Eliminar espacios al inicio", resultado);
