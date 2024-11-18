// Seleccionamos el contenedor donde se agregarán los elementos generados dinámicamente
const contenedor = document.querySelector(".flex-container");

// Función para crear la estructura de una "llave"
function crearLlave(nombre, modelo, precio) {
    // Imagen asociada a la llave
    const img = "<img class='llave-img' src='llave-antigua.png'>";
    // Formato HTML para el nombre, modelo y precio de la llave
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    // Devolvemos un array con todos los elementos que conforman la llave
    return [img, nombre, modelo, precio];
}

// Creamos un fragmento de documento para optimizar la inserción de múltiples elementos al DOM
let documentFragment = document.createDocumentFragment();

// Bucle para generar 20 llaves dinámicamente
for (let i = 0; i < 20; i++) {
    // Generamos un modelo aleatorio (número de 5 dígitos)
    let modeloRandom = Math.round(Math.random() * 10000);
    // Generamos un precio aleatorio entre 30 y 40
    let precioRandom = Math.round(Math.random() * 10 + 30);
    // Creamos la estructura de la llave con la función `crearLlave`
    const llave = crearLlave(`Llave ${i + 1}`, `modelo: ${modeloRandom}`, precioRandom);

    // Creamos un contenedor div para cada llave
    let div = document.createElement("div");

    // Agregamos un evento al div para asignar el modelo al campo de datos cuando se haga clic
    div.addEventListener("click", () => {
        document.querySelector(".key-data").value = modeloRandom;
    });

    // Establecemos un índice de tabulación para permitir la navegación con teclado
    div.tabIndex = i;

    // Añadimos clases al div para estilizarlo
    div.classList.add(`item-${i}`, "flex-item");

    // Insertamos el contenido HTML (imagen, nombre, modelo y precio) en el div
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];

    // Agregamos el div al fragmento de documento
    documentFragment.appendChild(div);
}

// Una vez generado el fragmento con todos los elementos, lo insertamos en el contenedor
contenedor.appendChild(documentFragment);
