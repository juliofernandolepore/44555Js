// PARA CADA PUNTO, QUIERO QUE SE EVALÚEN TODOS LOS CASOS POSIBLES PRESENTADOS EN LA EJEMPLIFICACIÓN, ASÍ VERIFICAMOS QUE NUESTROS ALGORITMOS FUNCIONAN EN LA TOTALIDAD DE COMPARACIONES POSIBLES.
// COMO TODAVÍA NO SABEMOS HACER CÓDIGO REUTILIZABLE, VAMOS A TENER QUE HACER LA CANTIDAD DE VARIABLES Y ESTRUCTURAS NECESARIAS PARA PODER COMPROBAR TODOS LOS CASOS.
// VAN A TENER QUE CREAR MUCHAS VARIABLES, CON RESPECTO A SUS IDENTIFICADORES, USEN LOS NOMBRES QUE QUIERAN, PERO QUE TENGAN SENTIDO
// LES RECOMIENDO QUE NO COPIEN Y PEGUEN <3

// 1) Crear una estructura condicional que compare el valor de una variable con 
// un color del semáforo (rojo, verde o amarillo) y devuelva un mensaje en consola 
//en true si puede avanzar o false si no. Si no se ingresa un color válido, se debe
// devolver un mensaje en consola que diga: Error: color de semáforo inválido.

// EJEMPLIFICACIÓN DE CASOS
//     "Rojo" --> false
//     "Verde" --> true
//     "Amarillo" --> false
//     "SALKDASD" --> false

/* const colorSemaforo = prompt('elegir un color de semaforo por favor: Verde - Amarillo - Rojo');

let Rojo = 'Rojo'
let Amarillo = "Amarillo"
let Verde = 'Verde'
let invalido = 'Error: color de semáforo inválido'
let noAvanzar = 'es incorrecto no puede avanzar'
 

if (colorSemaforo == Verde || colorSemaforo == 'verde'){
    console.log(` opcion correcta`);
}
else if(colorSemaforo == Rojo || colorSemaforo == 'rojo' || colorSemaforo == Amarillo || colorSemaforo == 'amarillo'){
    console.log(`${noAvanzar}`);
}else{
console.log(` ${colorSemaforo} -- ${invalido}`)
} */


/* 2) Crear una estructura condicional que compare el valor de una variable con 
las vocales y devuelva un mensaje en consola "Es una vocal" si letra es una vocal 
o "No es una vocal" si no lo es. */

// EJEMPLIFICACIÓN DE CASOS
//     'a' // true
//     'n' // false
//     '1' // false
/* let c1 = prompt('ingresa una vocal').toLowerCase()


if (c1 == 'a' || c1 == 'e' || c1 == 'i' || c1 == 'o' || c1 =='u'){
    console.log(`la letra ${c1}: Es una vocal`);
}
else{
    console.log(` la letra ${c1}:  No es una vocal`)
}
*/

// 3) Crear una estructura condicional que compare el valor de una variable con las
// consonantes y devuelva true si letra es una consonante o false si no lo es

// EJEMPLIFICACIÓN DE CASOS
// EJ: 'a' // false
//     'n' // true
//     '2130213' // false

/*  const input = ("Z").toLowerCase()

const expresionConsonante = /[bcdfghjklmnpqrstvwxyz]/
if (input == expresionConsonante.match()){
 console.log("true")
}else{console.log("false")}  */



// 4) Crear una estructura condicional que compare tres valores 
// booleanos: pasoTests, tieneMultasImpagas y pagoImpuestos, y devuelva 
//un mensaje en consola que sea true si una persona está habilitada para 
//renovar su carnet de conducir o false si no. Una persona puede renovar 
//su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos.

// EJEMPLIFICACIÓN DE CASOS
// (true, true, true)    // false
// (true, true, false)   // false
// (true, false, true)   // true
// (true, false, false)  // false
// (false, true, true)   // false
// (false, true, false)  // false
// (false, false, true)  // false
// (false, false, false) // false


/*
const pasoTest = true, tieneMultasPagas = true, pagoImpuestos = false;

if(pasoTest & tieneMultasPagas & pagoImpuestos){
    console.log(true)
}else{console.log(false)}   */


// 5) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es par" si el numero es par, o "Es impar" si el numero es impar. (AVERIGUAR SOBRE OPERADOR RESTO EN JAVASCRIPT, googlear es parte de nuestro trabajo)

// EJEMPLIFICACIÓN DE CASOS
// 3 // 'Es impar'
// 10 // 'Es par'

/*    let numero = 10;

if (numero % 2 == 0){
    console.log(`la variable: ${numero} es par`)
}else{
    console.log(`la variable: ${numero} es impar`)
}  */

// 6) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es positivo" si el número es positivo o "Es negativo" si el número es negativo

// EJEMPLIFICACIÓN DE CASOS
// esPositivoONegativo(3)  // 'Es positivo'
// esPositivoONegativo(-5) // 'Es negativo'

/* let num = -100;
let negativo = num < 0;
let positivo = num > 0;
let cero = num === 0;

if (positivo){
    console.log(`el numero ingresado ${num} es: positivo (${positivo})`)
}else if (negativo) {
    console.log(`el numero ingresado ${num} es: negativo (${negativo})`)
}else{
    console.log("el numero ingresado es cero")
} */

