// Declaración de los arreglos iniciales
let nombres = ["Pedro", "María", "Jorge", "Estefano"];
let numeros = [1, 2, 3, 4, 5, 6];

// Mostrar los arreglos originales
document.write("<strong>Array ORIGINAL (nombres):</strong> " + nombres + "<br>");
document.write("<strong>Array ORIGINAL (numeros):</strong> " + numeros + "<br><br>");

// -------------------------
// MÉTODOS TRANSFORMADORES
// -------------------------

// 1. Saca el último elemento de un arreglo
let resultado = nombres.pop();
document.write("<strong>Pop:</strong> Último elemento eliminado: " + resultado + "<br>");
document.write("Array actualizado: " + nombres + "<br><br>");

// 2. Saca el primer elemento de un arreglo
resultado = nombres.shift();
document.write("<strong>Shift:</strong> Primer elemento eliminado: " + resultado + "<br>");
document.write("Array actualizado: " + nombres + "<br><br>");

// 3. Agrega un elemento al final del arreglo
nombres.push("Hernesto");
document.write("<strong>Push:</strong> Agregado 'Hernesto' al final<br>");
document.write("Array actualizado: " + nombres + "<br><br>");

// 4. Invierte los elementos del arreglo de números
resultado = numeros.reverse();
document.write("<strong>Reverse:</strong> Arreglo invertido: " + resultado + "<br><br>");

// 5. Agrega un elemento al inicio del arreglo
numeros.unshift(0);
document.write("<strong>Unshift:</strong> Agregado '0' al inicio<br>");
document.write("Array actualizado: " + numeros + "<br><br>");

// 6. Ordena los elementos de un arreglo
resultado = numeros.sort((a, b) => a - b); // Orden numérico ascendente
document.write("<strong>Sort:</strong> Arreglo ordenado: " + resultado + "<br><br>");

// 7. Agrega y elimina elementos con `splice`
resultado = numeros.splice(1, 3, 56, 89, 85);
document.write("<strong>Splice:</strong> Elementos eliminados: " + resultado + "<br>");
document.write("Array actualizado: " + numeros + "<br><br>");

// -------------------------
// MÉTODOS ACCESORES
// -------------------------

// 8. Une los elementos del arreglo con un separador
resultado = nombres.join(" - ");
document.write("<strong>Join:</strong> Arreglo unido: " + resultado + "<br><br>");

// 9. Selecciona elementos específicos del arreglo
resultado = nombres.slice(0, 2);
document.write("<strong>Slice:</strong> Subarray (posiciones 0 a 2): " + resultado + "<br><br>");

// -------------------------
// MÉTODOS DE REPETICIÓN
// -------------------------

// 10. Filtra los elementos que cumplen una condición
resultado = nombres.filter((nombre) => nombre.length >= 8);
document.write("<strong>Filter:</strong> Nombres con más de 8 caracteres: " + resultado + "<br><br>");

// 11. Itera sobre los elementos del arreglo con `forEach`
document.write("<strong>ForEach:</strong> Iteración sobre 'nombres':<br>");
nombres.forEach((nombre) => {
    document.write("- " + nombre + "<br>");
});
