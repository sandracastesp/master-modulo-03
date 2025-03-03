# master-modulo-03
Repositorio que contiene carpetas en las que se almacenan prácticas y ejercicios realizados durante el módulo 03 del curso Master en Frontend. 

Proyecto 1: Para realizar el proyecto de esta lección se asignó el archivo "tipos-de-dato.js". En primer lugar, se declara, asigna e imprime "Hola Mundo", luego se declaran y asignan datos primitivos de JavaScript: numérico, string, booleano, BigInit, nulo, undefined y symbol y luego se imprime el tipo de valor y el valor designado. Finalmente se realizaron las misma acciones con datos de referencia: objeto, array y función. Se agregaron comentarios que serán de apoyo para señalar y recordar la finalidad de los datos en JavaScript.

Proyecto 2: Para la entrega del proyecto de esta lección enfocada en las comparaciones y decisiones de JavaScript se realizó un archivo llamado "evaluador-notas.js" en el que se codifica un programa capaz mostrar (mediante un valor aleatorio) y evaluar la notas de un estudiante generando un mensaje en la consola (Excelente, Bien, Suficiente "Estudiante no aprueba") de acuerdo al puntaje de su calificación y la condición "if", "else if" y "else" para tomar decisiones en base a las condiciones asignadas y/o mostrar un mensaje distinto si la condición no es verdadera.

Proyecto 3: En la entrega de este proyecto se realizó un programa que de una lista variada de frutas clasificara las frutas de acuerdo con su tipo y las contabilizara de acuerdo a su tipo. Para ello, se declaro un Array para almacenar multiples frutas en una sola variable, luego se creó un objeto para categorizar cada tipo de fruta, se usó for y while para recorrer el arreglo y a su vez contar el número de frutas. Finalmente se imprime en la consola la cantidad de cada tipo de fruta.

Proyecto 4: En este proyecto se creó un sistema en el que es posible realizar un seguimiento de libros de leidos de una persona. Esto fue posible mediante funciones en JavaScript, primero se ejecuta una función (nombrandola, definiendo los parámetros y definiendo la intrucción a seguir cuando se llama a la función). Para el código de este sistema se definió la función "agregarLibro(titulo)" para agregar el título del libro leído al array "librosLeídos" y luego se definió una función "mostrarLibrosLeidos()" en la que en la consola se mostraran los títulos de los libros leídos. Enseguida se llaman a las funciones para ejecutarlas. 

Proyecto 5: Como entrega de este proyecto en el tema de objetos de JavaScript se crearon objetos que incluyeran propiedades y un método para imprimir en consola los datos del libro en un párrafo breve. Primero se declaron los objetos, cada libro leido es un objeto y enseguida se declararon sus propiedades: título, autor, año de publicación y estado del libro. Luego se agregó un método ((describirLibro: (method))), es decir, una función que se asocia al objeto con lo que se imprimió la información básica dando una pequeña descripción de la información de cada libro.

Proyecto 6: Para le entrega de este proyecto como introducción al DOM en JavaScript como interfaz que permite interactuar con el contenido de una página web, se creó una caja de comentarios en dónde usuarios pudieran escribir y agregar comentarios que se muestren en un sitio web en forma de lista. Primero se creó un formulario en el que se pudiera escribir texto y un botón para enviar el comentario. Al hacer click al botón el comentario (fecha y texto) aparece debajo del formulario junto con un botón de "Eliminar comentario". Al poner en práctica los conceptos básicos del DOM se agrearon y modificaron nuevos elementos HTML como <strong> <p> <button>.

Proyecto final: El objetivo de este proyecto es poner el práctica los conocimientos adquiridos en el módulo "JavaScript desde cero"
Incluye: 
1. Sitio que incluye un apartado en dónde el usurio pueda introducir su usuario y contraseña para iniciar sesión, en caso de que no lo haga correctamente se le enviará una alerta: "El usuario o contraseña no coinciden correctamente". Una vez que los datos son correctos con los siguientes datos (Ejemplo: [Usurio:Sandraesp, Contraseña:246810]) se redirige a una caja de comentarios. Se utilizaron nuevamente conceptos del DOM en JS
2. Caja de comentarios en dónde el usuario registrado puede escribir y enviar comentarios que se muestren debajo del formulario en forma de lista junto con la hora y fecha a la que se realizaron y un botón para eliminar el comentario si así lo decide el usuario. Esta caja se utilizó usando la API localStorage para guardar pares clave-valor de forma persistente.