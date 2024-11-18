// Métodos de seleccion de DOCUMENTOS

// Obtener un elemento por su ID
parrafo = document.getElementById("parrafo");
document.write("Obtener el elemento por id: " + parrafo + "<br>");

// Obtener elementos por el tipo de nodo (en este caso, etiqueta <p>)
elementosP = document.getElementsByTagName("p");
document.write("Obtener elementos por tipo de nodo: " + elementosP[1] + "<br>");

// Seleccionar el primer elemento que coincida con una clase CSS
parrafo2 = document.querySelector(".parrafo2");
document.write("Seleccionar 1 solo elemento: " + parrafo2 + "<br>");

// Seleccionar todos los elementos que coincidan con una clase CSS
parrafo2 = document.querySelectorAll(".parrafo2");
document.write("Seleccionar un elemento específico de la clase: " + parrafo2[2] + "<br>");


