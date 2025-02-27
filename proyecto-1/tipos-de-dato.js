console.log('Hola Mundo');

// Datos primitivos
let talla = 1.60; // numérico
let nombre = 'Sandra'; // string
let esAprobatorio = true; // booleano

// Datos Tipo especial
let sinValor; // undefined
let valorNulo = null; // nulo
let valorNull = null; // nulo (object error histórico)

// Datos menos comunes
let numeroGrande = 215151515456156145155464546415616516516516156n; // bigint
let id = Symbol("id-unico"); // Symbol

// Imprimir tipos de datos
console.log(typeof talla); // numérico
console.log(typeof nombre); // string
console.log(typeof esAprobatorio); // boolean
console.log(typeof sinValor); // undefined
console.log(valorNulo); // null
console.log(typeof valorNull) //object (error histórico)
console.log(typeof numeroGrande); // BigInt
console.log(typeof id); // symbol

// Imprimir datos
console.log(talla); // numérico
console.log(nombre); // string
console.log(esAprobatorio); // boolean
console.log(sinValor); // undefined
console.log(valorNulo); // null
console.log(numeroGrande); // bigint
console.log(id); // symbol

// Datos de referencia:
// Objeto (colleción de datos que tienen una clave y un valor)
let mascota = {
    nombre: "Kira",
    meses: 11,
    especie: "Canino"
}
// Array (lista de elementos que pueden ser númericos, boleanos, string, etc)
let colores = ["rosa","rojo","azul","verde","amarillo"]

//Función (bloque de código que realiza una tarea específica)
let resta = function resta(a,b) {return a - b}

//Imprimir datos de referencia
console.log(mascota.especie);
console.log(colores[2]);
console.log(resta(10,3));