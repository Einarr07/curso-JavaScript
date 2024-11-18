// Seleccionamos el contenedor con la clase "contenedor3"
const contenedor3 = document.querySelector(".contenedor3");

// Creamos un párrafo y le asignamos texto
const parrafo = document.createElement("P").innerHTML = "Parrafo";

// Creamos un nuevo elemento H2 y le asignamos texto
const h2Nuevo = document.createElement("H2");
h2Nuevo.innerHTML = "Titulo";

// Seleccionamos un elemento existente con la clase "h2"
const h2Antiguo = document.querySelector(".h2");

// Reemplazar el elemento h2Antiguo por h2Nuevo en el contenedor3
// contenedor3.replaceChild(h2Nuevo, h2Antiguo);

// Eliminar el elemento h2Antiguo del contenedor
// contenedor3.removeChild(h2Antiguo);

// Verificar si el elemento h2Antiguo tiene nodos hijos
let respuesta = h2Antiguo.hasChildNodes(); // Devuelve true o false

if (respuesta) {
    document.write("El elemento tiene hijos");
} else {
    document.write("El elemento NO tiene hijos");
}

// Nodos hermanos del contenedor3
console.log(contenedor3.nextElementSibling); // El siguiente nodo hermano que es un elemento
console.log(contenedor3.previousSibling);    // El nodo hermano anterior (puede incluir nodos de texto)

// Buscar el ancestro más cercano que coincida con el selector ".contenedor3"
console.log(h2Antiguo.closest(".contenedor3"));
