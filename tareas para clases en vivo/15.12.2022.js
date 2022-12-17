/*  localStorage y sessionStorage
// SE DEBERÁN REPETIR LOS PUNTOS 2 VECES, PARA EL CASO DE localStorage como 
sessionStorage.
// En estas actividades podemos reutilizar funciones de los primeros puntos, por
 lo tanto podemos hacer funciones de orden superior que tengan funciones callback
  dentro de sí.

/* 1) Crea tres objetos usuario1, usuario2, usuario3 que tengan las propiedades 
nombreUsuario y contrasenia como strings. Los puntos posteriores deben ser probados 
con estos valores. */

const usuario1 = {
  nombreUsuario: "user1",
  contrasenia: "pass1",
};

const usuario2 = {
  nombreUsuario: "userDos",
  contrasenia: "password2",
};

const usuario3 = {
  nombreUsuario: "pedro",
  contrasenia: "passWord3",
};

/* 2)Definí una función saludar que reciba como parámetro un objeto y que modifique 
el HTML de tu página para que aparezca un h1 que diga "Hola, {nombreUsuario}" */

/* 3) Crear una función que cuente con el parámetro valor. Esta deberá convertir 
datos y retornar esos datos en formato JSON.

// 4) Crear una función que cuente con el parámetro cadena. La función debe 
recibir como argumento una cadena JSON  y retornar la conversión de esta cadena a 
valores propios de JavaScript.

// 5) Crear una función que reciba como parámetro: clave y valor. La función deberá 
tener las sentencias adecuadas para poder almacenar en localStorage o sessionStorage los datos proporcionados, junto con sus claves. 

// 6) Crear una función que reciba como parámetro una clave. La función debe 
retornar los datos que se encuentren en el almacenamiento local, no sin antes 
haber sido convertidos a valores de Javascript.

// Tarea adicional:

// LOGIN
// DESDE HTML

// A) Realizar una estructura html que contenga una barra de navegación y un 
<main> que nos sirva para alojar un formulario de inicio de sesión.
// B) Crear en main un formulario, que cuente con los siguientes inputs:
//   - Usuario
//   - Contraseña
//   - Enviar

// DESDE JS

// C) Crear un objeto que contenga dos propiedades: usuario y contraseña. Como 
valor, asocie una cadena de caracteres que ustedes quieran.
// D) A través del document, acceder a los elementos necesarios para poder hacer 
un evento de envío de formulario. 
// E) La función asociada al evento debe poder prevenir el comportamiento por 
defecto que genera el navegador cuando se dispara el evento del envío de formulario.
// F) Validar dentro del evento que el usuario y la contraseña ingresadas desde 
el formulario, coincidan con los valores que contiene el objeto creado en el 
punto C.
// G) En el caso de que no sean iguales a los valores del objeto, devolver un
 alerta con el siguiente mensaje: "Su usuario o contraseña son incorrectos".
// H) Si el usuario y la contraseña son correctos, a través del style, modifique
 a display:none al formulario. A su vez, envíe una alerta con la 
 frase: "Bienvenido ${usuario}", valor hallado en el objeto que hemos creado 
 en el punto C. También suba al localStorage una clave apodada sesión, con el valor 
*/
