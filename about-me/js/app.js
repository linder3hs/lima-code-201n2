"use strict";

// // Pregunta 1 Cual es mi segundo nombre
// const respuesta1 = "Anderson";
// // Pregunta 2 En que empresa trabajo actualmente
// const respuesta2 = "VML";
// // Pregunta 3 Cual es mi color favorito
// const respuesta3 = "verde";
// // Pregunta 4 Donde estudie
// const respuesta4 = "Tecsup";
// // Pregunta 5 Cuantos años tengo de experiencia
// const respuesta5 = "7";

// //case sensitive: Es sensible a mayusculas y minusculas
// let puntos = 0;

// const pregunta1 = prompt("¿Cual es mi segundo nombre?"); // anderson
// const pregunta2 = prompt("¿En que empresa trabajo actualmente?");
// // como podemos comparar respuesta1 con el valor de la variable pregunta1
// // Anderson = anderson            anDerSon = anderson
// if (respuesta1.toLowerCase() === pregunta1.toLowerCase()) {
//   // Operadores de asignacion
//   // puntos = puntos + 1; FUNCIONA
//   // puntos++; Solo suma de 1 a 1
//   // Operador de adicion
//   puntos += 1;
// }

// // Al final analizar la cantidad de puntos y en base a ese numero dar un mensaje
// /**
//  * puntos === 5 (Me conoces dms ✅)
//  * puntos > 3 (Me conoces de vista 🧐)
//  * puntos < 3 (No me conoces 🙁)
//  */

const arregloTotal = [
  ["Anderson", "¿Cual es mi segundo nombre?"],
  ["VML", "¿En que empresa trabajo actualmente?"],
  ["verde", "¿Cual es mi color favorito?"],
  ["Tecsup", "Donde estudie"],
];
// indices en los arreglos? (posicion de cada elemento dentro de mi arreglo)
// cual es la posicion inicial? 0
// console.log(arregloTotal[0]);
// console.log(arregloTotal[0][0]);
// console.log(arregloTotal[0][1]);
// console.log(arregloTotal[1]);
// console.log(arregloTotal[1][0]);
// console.log(arregloTotal[2]);
// console.log(arregloTotal[2][0]);
console.log("USANDO FOR");
for (let i = 0; i < arregloTotal.length; i++) {
  console.log(arregloTotal[i][1]);
  // const respuesta = prompt(arregloTotal[i][1]);
}

const people = [
  ["pete", 32, "librarian", null],
  ["Smith", 40, "accountant", "fishing:hiking:rock_climbing"],
  ["bill", null, "artist", null],
];

people[1];
