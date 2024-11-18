// Métodos de classList
// Seleccionar el elemento con la clase "titulo"
const titulo = document.querySelector(".titulo");

// Agregar una nueva clase al elemento
titulo.classList.add("normal");

// Eliminar una clase específica del elemento
titulo.classList.remove("normal");

// Obtener el nombre de la clase en una posición específica del índice
let valor = titulo.classList.item(1); // Retorna el nombre de la segunda clase
document.write(valor);

// Comprobar si el elemento contiene una clase específica
const nombreClase = "grande";
let valor2 = titulo.classList.contains(nombreClase);

if (valor2) {
    console.log(`La clase ${nombreClase} existe`);
} else {
    console.log(`La clase ${nombreClase} NO existe`);
}

// Alternar una clase en el elemento
// Si la clase existe, se elimina; si no existe, se agrega
titulo.classList.toggle("estilo");

// Reemplazar una clase existente por otra
titulo.classList.replace("grande", "chico");
