// Funciones de registro

// Verifica si una condición es verdadera. Si no lo es, muestra un mensaje de error en la consola.
console.assert(5 < 4); // Esto generará un error porque 5 no es menor que 4.

// Limpia la consola, eliminando cualquier mensaje previo.
console.clear(); // Útil para reiniciar la consola durante pruebas.

// Muestra un mensaje de error en la consola.
console.error("Esto es un mensaje de error.");

// Muestra información en la consola (informativa, similar a log pero con otro propósito).
console.info("Esto es un mensaje de información.");

// Muestra un mensaje en la consola (el más común para depuración).
console.log("Esto es un mensaje normal.");

// Muestra texto con estilos personalizados usando formato CSS.
console.log(
    "%c soy un texto",
    "color:red;background-color:black;padding:20px; border:5px solid blue;"
);

// Muestra una tabla en la consola para representar datos estructurados.
console.table(["edad", 23, 22, 14, 51, 53, 35]);

// Muestra un mensaje de advertencia en la consola.
console.warn("Esto es una advertencia.");

// Muestra las propiedades de un objeto en forma interactiva.
console.dir(document); // Ejemplo con el objeto `document`.

// Funciones de conteo

// Cuenta el número de veces que esta línea se ejecuta.
console.count("Conteo"); // Muestra "Conteo: 1".
console.count("Conteo"); // Muestra "Conteo: 2".

// Reinicia el contador de `console.count`.
console.countReset("Conteo");
console.count("Conteo"); // Muestra "Conteo: 1" nuevamente.

// Funciones de agrupación

// Agrupa mensajes en la consola bajo un encabezado.
console.group("Frutas");
console.log("Manzana");
console.log("Pera");
console.log("Naranja");
console.groupEnd(); // Finaliza el grupo.

// Crea un grupo colapsado (no visible inmediatamente hasta que el usuario lo expanda).
console.groupCollapsed("Verduras");
console.log("Lechuga");
console.log("Zanahoria");
console.log("Brocoli");
console.groupEnd();

// Funciones de temporización

// Inicia un temporizador con una etiqueta personalizada.
console.time("Temporizador");

// Registra el tiempo transcurrido desde que se inició el temporizador.
console.timeLog("Temporizador"); // Muestra el tiempo transcurrido hasta este punto.

// Finaliza el temporizador y muestra el tiempo total transcurrido.
console.timeEnd("Temporizador"); // Muestra el tiempo total.
