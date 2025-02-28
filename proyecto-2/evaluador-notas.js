let nota = Math.floor(Math.random() * 101);

if (nota >= 0) {
console.log("La calificación del estudiante es:", nota);

if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 75 && nota <= 89) {
  console.log("Bien");
} else if (nota >= 60 && nota <= 74) {
  console.log("Suficiente");
} else {
  console.log("Estudiante no aprueba");
}
} else {
  console.log("Calificación no valida");
}