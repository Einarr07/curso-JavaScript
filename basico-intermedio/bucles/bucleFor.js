// Bucle FOR que recorre del 0 al 9
for (let i = 0; i < 10; i++) {
    // Saltamos la iteración actual cuando i es igual a 4
    if (i === 4) {
        continue;
    }

    // Imprimimos el valor actual de i
    document.write(i + "<br>");

    // Rompemos el bucle cuando i es igual a 7
    if (i === 7) {
        break;
    }
}

// FOR...IN - Itera sobre los índices del array
document.write("----------------FOR IN--------------------------<br>");
let animales = ["gato", "perro", "tiranosaurio rex"];

for (let index in animales) {
    document.write("For in: Te devuelve la posición de los elementos: ");
    document.write(`${index}<br>`);
}

// FOR...OF - Itera sobre los valores del array
document.write("----------------FOR OF--------------------------<br>");

for (let animal of animales) {
    document.write("For of te devuelve el valor del elemento: ");
    document.write(`${animal}<br>`);
}

// LABEL - Etiquetas para bucles anidados
document.write("----------------LABEL--------------------------<br>");

// Definimos dos arrays: uno con nombres individuales y otro que incluye el primer array como elemento
let array1 = ["María", "Josefa", "Roberta"];
let array2 = ["Pedro", "Marcelo", array1, "Ricardo"];

// Definimos una etiqueta `outerLoop` para el bucle externo, que recorre `array2`
outerLoop: for (let index in array2) {
    // Verificamos si el índice actual de `array2` corresponde a la posición del subarray `array1`
    if (index == 2) {
        // Bucle interno para recorrer `array1` dentro de `array2`
        for (let nombre of array1) {
            // Si encontramos el nombre "María", usamos `continue` con la etiqueta `outerLoop`
            // Esto saltará el resto de la iteración actual del bucle externo, evitando imprimir "María"
            if (nombre == "María") {
                continue outerLoop;
            }
            // Imprimimos el nombre actual si no es "María"
            document.write(`Nombre: ${nombre}<br>`);
        }
    } else {
        // Si el elemento en `array2` no es el subarray, imprimimos directamente su valor
        document.write(`Elemento: ${array2[index]}<br>`);
    }
}

