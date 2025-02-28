// Array en el que se añaden los libros
let librosLeidos = [];


//Definición de la función para agregar libros leidos
function agregarLibro (titulo) {
    if (titulo) {
        librosLeidos.push(titulo);
/*         console.log("Libro agregado:", titulo);
    } else {
        console.log("Escribir nombre de un libro"); */
    }
}

//Definición de la función para imprimir los libros  leidos
function mostrarLibrosLeidos() {
    console.log("Libros leidos:", librosLeidos);
}

agregarLibro("Harry Potter");
agregarLibro("El Principito");
agregarLibro("El retrato de Dorian Gray");
agregarLibro("Rebelión en la granja");
agregarLibro("Ensayo sobre la ceguera");

mostrarLibrosLeidos ();