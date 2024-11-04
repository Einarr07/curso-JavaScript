// Array de frutas
const frutas = ["Banana", "Manzana", "Mangostino", "Pera"];
document.write(`El elemento 0 del arreglo es: ${frutas[0]} <br>`);

// Objeto representando una PC
const pc1 = {
    nombre: "FaltoPC",
    procesador: "Intel Core i7",
    ram: "16GB",
    espacio: "1TB"
};

// Usando desestructuración para obtener las propiedades del objeto
const { nombre, procesador, ram, espacio } = pc1;

// Creación de la frase usando template literals
const frase = `
    <br> El nombre de mi PC es: <b>${nombre}</b> <br>
    El procesador es: <b>${procesador}</b> <br>
    La memoria RAM es: <b>${ram}</b> <br>
    El espacio en disco es: <b>${espacio}</b> <br>
`;

// Escribiendo la frase en el documento
document.write(frase);
