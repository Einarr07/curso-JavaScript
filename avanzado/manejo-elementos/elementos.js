// Seleccionamos el contenedor donde vamos a agregar los elementos
const contenedor = document.querySelector(".contenedor");

// Creamos un fragmento para evitar manipular directamente el DOM en cada iteración
const fragmento = document.createDocumentFragment();

// Creamos un bucle para generar los elementos de la lista
for (let i = 0; i < 10; i++) {
    // Creamos un nuevo elemento <li>
    const item = document.createElement("li");

    // Agregamos contenido al elemento <li>
    // Alternativamente, podríamos usar: 
    // const textoItem = document.createTextNode("Es un item de la lista")
    // item.appendChild(textoItem);
    item.innerHTML = "Es un item de la lista";

    // Añadimos el <li> al fragmento, no al DOM directamente
    fragmento.appendChild(item);
}

// Una vez que hemos terminado de crear todos los elementos,
// añadimos el fragmento completo al contenedor
contenedor.appendChild(fragmento);

// Verificamos el contenido del fragmento en la consola
console.log(fragmento);
