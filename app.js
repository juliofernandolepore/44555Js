/* PRE ENTREGA 3 - REFACTORIZANDO */

/* identificadores manipulables (SOLO ID) */

const inpUser = document.querySelector("#usuario");
const fLogin = document.querySelector("#login");
const pass = document.querySelector("#password");
const contForm = document.querySelector("#contenedor-form");
const cerrar = document.querySelector("#salir");
const supermercado = document.querySelector("#supermercado");
const registrarse = document.querySelector("#altaUsuario");

/* CODIGO DURO (verifica login con base de datos simulacion ) */

const constatar = {
  usuario: "julio",
  pass: "12345678",
};

/* LOCAl STORAGE */
/* funcion convertidora de JS a JSON - reutilizable */

const upLocSt = (llave, valor) => {
  sessionStorage.setItem(llave, JSON.stringify(valor));
  //sin return
};

/* function recuperadora con valor parseado (JSON a JS) */
const recupLS = (llave) => {
  return JSON.parse(sessionStorage.getItem(llave));
};

/* FORMULARIO LOGIN (SUBMIT) */
fLogin.onsubmit = (evento) => {
  evento.preventDefault();
  if (inpUser.value === constatar.usuario && pass.value === constatar.pass) {
    upLocSt("login", true);
    contForm.style.display = "none";
    cerrar.style.display = "block";
    supermercado.style.display = "block";
    document.querySelector("h1").textContent = "BIENVENIDO";
  } else {
    inpUser.style.border = "3px solid red";
  }
};

/* funcion scope general validacion de login (token en storage) */

function estadoLogin(clave) {
  if (clave !== true) {
    contForm.style.display = "flex";
  } else {
    contForm.style.display = "none";
    cerrar.style.display = "block";
    supermercado.style.display = "block";
    registrarse.style.display = "none";
  }
}
/* aqui es login porque es tal cual la llave esta definida en el local
storage - no confudir con el id del html */
estadoLogin(recupLS("login"));

cerrar.onclick = () => {
  sessionStorage.removeItem("login");
  cerrar.innerHTML = "tu sesion ha expirado, inicie sesion nuevamente";
  document.querySelector("h1").textContent = "tu sesion ha caducado";
  supermercado.style.display = "none";
  estadoLogin(recupLS("login"));
};
