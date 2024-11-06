// Función para sumar dos números y mostrar el resultado
function suma(num1, num2) {
    // Calcula la suma de los dos números
    let sum = num1 + num2;
    // Muestra el resultado en el documento
    document.write("La suma es: " + sum);
}

// Llama a la función suma con dos números
suma(23, 43);

// Función para saludar a una persona, personalizando el mensaje con el nombre
function saludar(nombre) {
    // Crea una frase personalizada con el nombre
    let frase = `Hola ${nombre} ¿Cómo estás?`;
    // Muestra la frase en el documento
    document.write("<br>" + frase);
}

// Llama a la función saludar con el nombre "Jhonatan"
saludar("Jhonatan");

// Declaración de una función anónima para obtener el nombre y formatearlo con salto de línea
const getNombre = function(nombre) {
    // Devuelve el nombre con un salto de línea HTML
    return "<br>" + nombre;
}

// Llama a la función getNombre (aunque el resultado no se muestra en el documento)
document.write(getNombre("Kevin <br>"));

// Función flecha para saludar a una persona, similar a la función saludar anterior
const saludar2 = (nombre) => {
    // Crea una frase personalizada con el nombre
    document.write("Soy el saludar 2: ")
    let frase = `Hola ${nombre} ¿Cómo estás?`;
    // Muestra la frase en el documento
    document.write("<br>" + frase);
}

// Llama a la función saludar2 con el nombre "Julian"
saludar2("Julian");
