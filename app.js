/* PRE-ENTREGA 1 */

const minimo = 8;
const vacio = "";

/* PROMPT DE NOMBRE */

let nombre = prompt("por favor ingresa tu nombre");

if (nombre == vacio) {
  alert(`tu nombre: "${nombre}" esta vacio`);
} else if (nombre.length < 8) {
  alert(
    `tu nombre: "${nombre}" es demasiado breve, ingrese 8 caracteres minimo`
  );
}

/* PROMPT DE USUARIO */

let usuario = prompt("por favor ingresa tu Nombre de Usuario");

if (usuario == vacio) {
  alert(`el nombre de usuario: "${usuario}" esta vacio`);
} else if (usuario.length < minimo) {
  alert(
    `USUARIO ERRONEO: " ${usuario}" (demasiado breve, ingrese 8 caracteres)`
  );
}

/* PROMPT DE CONTRASEÑA */

let pass = prompt("por favor ingresa una contraseña");

if (pass.length < minimo) {
  alert(`"${pass}" CONTRASEÑA INSEGURA (ingrese al menos 8 digitos)`);
} else if (pass.length == vacio) {
  alert(`"${pass}" CONTRASEÑA ERRONEA (password vacio)`);
} else if (pass.lastIndexOf(" ") !== -1) {
  alert("por favor ingrese una contraseña sin espacios");
}

let saludo = () => {
  alert(`hola ${nombre} bienvenido!!!!`);
};
saludo();
/* PROMPT DE EMAIL */

let mail = prompt("ingrese nuevo email");

if (!mail.match(/@/)) {
    alert("el email no contine arroba");
}else if (!mail.match(/0-9/)) {
    alert("el email no contine numeros");
}else if (!mail.match(/a-z/)) {
    alert("el email no contine letras minusculas");
}else if (!mail.match(/A-Z/)) {
    alert("el email no contine letras Mayusculas");
}