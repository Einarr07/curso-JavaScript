// Seleccionamos el elemento con la clase "contenedor2"
const contenedor2 = document.querySelector(".contenedor2");

// Obtenemos el primer hijo que es un elemento (excluye nodos de texto o comentarios)
const primerHijo = contenedor2.firstElementChild;

// Obtenemos el último hijo que es un elemento
const ultimoHijo = contenedor2.lastElementChild;

// Obtenemos todos los nodos hijos del contenedor (incluye nodos de texto, comentarios, etc.)
const hijos = contenedor2.childNodes;

// Obtenemos solo los hijos que son elementos (excluye nodos de texto o comentarios)
const hijos2 = contenedor2.children;

// Iteramos sobre los hijos que son elementos (colección HTML) e imprimimos el índice en consola
for (hijo in hijos2) {
    console.log(hijo);
}

// Mostramos el primer hijo en la consola
console.log(primerHijo);

// Mostramos el último hijo en la consola
console.log(ultimoHijo);

// Mostramos todos los nodos hijos (incluidos nodos de texto y comentarios)
console.log(hijos);
