// una lista puede recibir cualquier tipo de dato
const cualquierData = [100, null, true, 0.2, -10, "hola", [10, false]];

// Esto sería incorrect
// cualquierData = 10;

// push: Funcion que agrega un elemento en la posición final
cualquierData.push("linder");

const personas = ["Linder", "Bruno", "Alex", "Pepe"];
// console.log("antes del push", personas);
personas.push("Matias");
personas.push("David");
personas.push("Georgina");
personas.push("Eva");
personas.push("Vladimir");
personas.push("Orlando");
personas.push("Yulber");
personas.push("Claudio");

// console.log("despues del push", personas); // ["Linder", "Bruno", "Alex", "Pepe", "Matias"]

personas.pop();
personas.pop();
personas.pop();

// console.log("despues del pop", personas);

// for while

// console.log("cantidad de elementos", personas.length);
// Estructura del bucle for
// i++
// i = i + 1
// i += 1
for (let i = 0; i < personas.length; i++) {
  // i = indice
  console.log(personas[i]);
  if (i === 4) {
    // sirve para romper el bucle
    break;
  }
}

// queremos hacer la tabla de multiplicar basados en un numero
// const numero = Number(prompt("Ingrese un número para crear su tabla"));

/**
 * 12 x 0 = 0
 * 12 x 1 = 12
 * 12 x 2 = 24
 * ...
 * 12 x 12 = 144
 */

// for (let j = 0; j < 25; j++) {
//   console.log(numero + " x " + j + " = " + numero * j);
// }

// Factorial
const numero = 5; // Number(prompt("Ingrese un número para calcular su factorial"));

// 5 = 1x2x3x4x5 = 120
// 20 = 1x...x20 =
let producto = 1;

for (let k = 1; k <= numero; k++) {
  // producto = producto * k;
  producto *= k;
}

console.log(producto);

// while
/*while (condicion) { 
  accion a ejecutar
}*/

// Vamos a crear un juego que permita al usuario adivinar un numero y en un max de 6 intentos
const numeroMaxIntentos = 6;
// crear un numero ramdon
// Math.random() genera un decima entre 0 y 1
// toFixed() recibe un numero y lo corta a esa cantidad de decimales, pero convierte el numero a string
// Convirtimos el numero a number para poder multiplicarlos x 1000
const numeroAAdivinar = Number(Math.random().toFixed(3)) * 1000;
console.log(numeroAAdivinar);
let contadorDeIntentos = 1;

while (contadorDeIntentos <= numeroMaxIntentos) {
  const numeroPorUsuario = Number(prompt("Ingrese un número"));

  if (numeroPorUsuario === numeroAAdivinar) {
    console.log("Felicidades!!! adivinas el número " + numeroAAdivinar);
    console.log("Lo hiciste en " + contadorDeIntentos + " intentos");
    break;
  } else {
    contadorDeIntentos++;

    if (contadorDeIntentos === numeroMaxIntentos + 1) {
      console.log("Llegaste al número max de intentos :(");
    }
  }
}
