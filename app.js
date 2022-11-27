/* PRE-ENTREGA 1 */

const minimo = 8;
const vacio = "";

/* PROMPT DE NOMBRE */

let nombre = prompt("por favor ingresa tu nombre");

while (nombre == vacio) {
  alert(`el nombre : "${nombre}" esta vacio`);
  nombre = prompt(`tu nombre: "${nombre}" esta vacio`);
}
while (nombre.length < minimo) {
  alert(`el nombre: "${nombre}" es menor a 8 digitos`);
  nombre = prompt(`tu nombre: "${nombre}" tiene menos de 8 digitos`);
}

/* PROMPT DE USUARIO */

let usuario = prompt("por favor ingresa tu Nombre de Usuario");

while (usuario.lastIndexOf(" ") !== -1) {
    alert("por favor ingrese un usuario sin espacios");
    usuario = prompt("ingrese nuevamente su usuario sin espacios");
  }
while (usuario == vacio) {
  alert(`el nombre de usuario: "${usuario}" esta vacio`);
  usuario = prompt(`ingrese nuevamente nombre de usuario`);
}
while (usuario.length < minimo) {
  alert(
    `USUARIO ERRONEO: " ${usuario}" (demasiado breve, ingrese 8 caracteres)`
  );
  usuario = prompt(`ingrese nuevamente nombre de usuario`);
}

/* PROMPT DE CONTRASEÑA */

let pass = prompt("por favor ingresa una contraseña");

while (pass.lastIndexOf(" ") !== -1) {
  alert("por favor ingrese una contraseña sin espacios");
  pass = prompt("ingrese nuevamente su contraseña sin espacios");
}
while (pass.length < minimo) {
  alert(`"CONTRASEÑA INSEGURA" (ingrese al menos 8 digitos)`);
  pass = prompt("ingrese nuevamente su contraseña con 8 digitos o mas");
}
while (pass.length == vacio) {
  alert(`"CONTRASEÑA ERRONEA" (password vacio)`);
  pass = prompt("ingrese nuevamente su contraseña");
}

let saludo = () => {
  alert(`hola ${nombre} bienvenido!!!!`);
};
saludo();
/* PROMPT DE EMAIL */

let mail = prompt("ingrese nuevo email");

while(!mail.match(/@/)) {
  alert("el email no contine arroba");
  mail = prompt("ingrese nuevamente su mail");
}
