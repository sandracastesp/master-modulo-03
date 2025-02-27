// array para nombrar a todas las frutas disponibles.
let frutas = ["kiwi", "limón", "naranja", "manzana", "uva", "arandano", "fresa", "membrillo", "níspero", "ciruela", "mango", "mandarina", "coco", "aguacate", "aceituna", "almendra", "cacahuate", "nuez", "plátano", "cereza", "higo", "melón", "sandia", "pera"]

// objetos para asignar qué frutas corresponden a cada tipo
let tipoFrutas = {
    "frutasAcidas" : ["kiwi", "limón", "naranja", "manzana", "uva", "arandano"], //6 frutas
    "frutasSemiacidas" : ["fresa", "níspero", "ciruela", "mango", "mandarina"], //5 frutas
    "frutasNeutras" : ["coco", "aguacate", "almendra", "cacahuate"], // 4 frutas
    "frutasDulces" : ["plátano", "cereza", "melón", "sandia", "pera"] //5 frutas
}

//contador para For
const contadorFor = {
    "frutasAcidas": 0,
    "frutasSemiacidas": 0,
    "frutasNeutras": 0,
    "frutasDulces": 0,
}

// Comienza uso de For
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
  
    for (let tipo in tipoFrutas) {
      if (tipoFrutas[tipo].includes(fruta)) {
        contadorFor[tipo]++;
      }
    }
  }

//Imprimir usando For
console.log("Conteo de frutas dependiendo su tipo usando for:", contadorFor);


//Comienza uso de while 
  const contadorWhile = {
    "frutasAcidas": 0,
    "frutasSemiacidas": 0,
    "frutasNeutras": 0,
    "frutasDulces": 0,
  }
  
  let contador = 0;
  while (contador < frutas.length) {
    let fruta = frutas[contador];
  
    for (let tipo in tipoFrutas) {
      if (tipoFrutas[tipo].includes(fruta)) {
        contadorWhile[tipo]++;
      }
    }
  
    contador++;
  }
//Imprimir usando While
  console.log("Conteo de frutas dependiendo su usando usando while:", contadorWhile);