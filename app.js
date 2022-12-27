/* PRE ENTREGA 3 - REFACTORIZANDO */

/* CODIGO DURO */

const constatar = {
  usuario: "julio",
  pass: "12345678",
};

/* LOCAl STORAGE */
/* funcion convertidora de JS a JSON - reutilizable */

const upLocSt = (llave, valor) => {
  localStorage.setItem(llave, JSON.stringify(valor));
  //sin return
};

/* function recuperadora con valor parseado (JSON a JS) */
const recupLS = (llave) => {
  return JSON.parse(localStorage.getItem(llave));
};

/* identificadores manipulables */
const inpUser = document.querySelector("#usuario");
const fLogin = document.querySelector("#login");
const pass = document.querySelector("#password");

/* login */
fLogin.onsubmit = (evento) => {
  evento.preventDefault();
  if (inpUser.value === constatar.usuario && pass.value === constatar.pass) {
    upLocSt("login", true);
  } else {
    alert("datos erroneos");
  }
};
