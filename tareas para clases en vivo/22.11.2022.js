/*  1) Crear 4 funciones que reciban 2 parámetros numéricos de cualquier tipo, 
distinto a 0:
a) la función debe retornar la suma de los dos operandos
b) la función debe retornar la resta de los dos opernados
c) la función debe retornar la multiplicación de los dos operandos
// d) la función debe retornar la división de los dos operandos
// Para cada uno de los llamados de las funciones, pasar los dos argumentos 
numéricos y visualizar el retorno en consola.

2) Crear una función que reciba los siguientes parámetros: nombre, apellido, 
edad, direccion y telefono.
// Retornar como cadena de caracteres, la información del usuario. Podés usar
 \n para generar saltos de línea.
// Luego al llamar a la función, pase los 5 argumentos y visualice en consola el 
dato retornado. */

const funcionA = (a, b )=>{
    let resultado = a + b
    return resultado
}
console.log(funcionA(1,3))

const funcionB = (a, b )=>{
    let resultado = a - b
    return resultado
}
console.log(funcionB(10,3))
const funcionC = (a, b )=>{
    let resultado = a * b
    return resultado
}
console.log(funcionC(3,3))
const funcionD = (a, b )=>{
    let resultado = a / b
    return resultado
}
console.log(funcionD(9,3))
const devolver = (nombre, apellido, edad, telefono) => {
    return console.log(valor = `tu nombre es: ${nombre} y tu apellido es: ${apellido}, tu edad es: ${edad} y tu telefono es: ${telefono} `)
}
devolver("fer", "lepore", 39, 351)
