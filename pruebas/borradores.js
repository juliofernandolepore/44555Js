/* PRE-ENTREGA 1 */

const minimo = 8;
const vacio1 = "";

/* PROMPT DE NOMBRE */

const interaccion1 = () => {
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

  let mail = prompt("ingrese su correo electronico");

  while (!mail.match(/@/)) {
    alert("el email no contine arroba");
    mail = prompt("ingrese nuevamente su mail");
  }

  document.querySelector("#nombre").innerHTML = ` tu nombre es: "${nombre}"`;
  document.querySelector(
    "#user"
  ).innerHTML = ` tu nombre de usuario es "${usuario}"`;
  document.querySelector("#mail").innerHTML = ` tu mail es: "${mail}"`;
};

/* pre entrega 2 - OBJETOS - ARREGLOS - */

/* Trabajando y practicando con objetos */
const felino = {
  nombre: "tutuca",
  especie: "felino",
  raza: "california",
  edad: 3,
  peso: 5,
};

console.log(`la raza de mi mascota es: ${felino.raza}`);

class Persona {
  constructor(argNombre, argApellido, argEdad, argPeso, argSexo, argSociable) {
    (this.nombre = argNombre),
      (this.apellido = argApellido),
      (this.edad = argEdad),
      (this.peso = argPeso),
      (this.sexo = argSexo),
      (this.sociable = argSociable);
  }
  misDatos() {
    console.log(
      `mi nombre es: ${this.nombre}, mi apellido es: ${this.apellido}, mi edad es: ${this.edad}`
    );
  }
  esSociable() {
    if (this.sociable == true) {
      return `hacer amistad inmediatamente con el`;
    } else {
      return `necesita amigos`;
    }
  }
}
const individuo1 = new Persona("fernando", "lepore", 39, 90, "M", true);
console.log(individuo1);
individuo1.nombre = "julio";
console.log(individuo1.nombre);
individuo1.misDatos();
console.log(individuo1.esSociable());

const individuo2 = new Persona("javier", "torres", 45, 85, "M", false);
individuo2.misDatos();

/* funcion con metodo filter() aplicado a array de objetos */

const filtrar = () => {
  let parametro = prompt(
    "¿hasta cuanto pagarias por producto de acuerdo a tu presupuesto?"
  );
  const filtrado = prodSuper.filter((i) => {
    return i.precio < parametro;
  });
  console.log(
    `segun el monto ingresado: $${parametro} estos son los productos accesibles en la siguiente tabla `
  );
  console.table(filtrado);
};

filtrar();

/* funcion con metodo find() aplicado a array */

const paisesDelMundo = [
  "argentina",
  "ecuador",
  "colombia",
  "peru",
  "bolivia",
  "estados unidos",
  "alemania",
  "italia",
  "francia",
  "portugal",
  "australia",
];

const miFind = () => {
  let parametro = " ";
  parametro = prompt("INGRESA UN PAIS DE TU PREFERENCIA").toLowerCase();
  const filtrado = paisesDelMundo.find((res) => {
    return res === parametro;
  });
  if (filtrado) {
    console.log(filtrado);
    alert(`el pais seleccionado SI EXISTE en el listado oculto`);
  } else if (filtrado === undefined) {
    alert(`el pais seleccionado NO EXISTE en el listado oculto de paises`);
  }
};

miFind();

/* PRE ENTREGA 3 - REFACTORIZANDO */

/* identificadores manipulables (SOLO ID) */
const vacio = "";
const inpUser = document.querySelector("#usuario");
const fLogin = document.querySelector("#login");
const pass = document.querySelector("#password");
const contForm = document.querySelector("#contenedor-form");
const cerrar = document.querySelector("#salir");
const supermercado = document.querySelector("#supermercado");
const registrarse = document.querySelector("#altaUsuario");
const rellenoMultiple = document.querySelector("#vacio");
const ordenar = document.querySelector("#invertir");

/* constantes de inputs (formulario) */
const formulario = document.querySelector("#formRegistro");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const correo = document.querySelector("#correo");
const passForm = document.querySelector("#pass");
const envioFormRegistro = document.querySelector("#alta");



/* CODIGO DURO (verifica login con base de datos simulacion ) */

const constatar = {
  usuario: "fernando",
  pass: "123lepore",
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
    cerrar.textContent = "cerrar sesion";
    supermercado.style.display = "block";
    document.querySelector("h1").textContent = "BIENVENIDO";
  } else {
    inpUser.style.border = "3px solid red";
    pass.style.border = "3px solid red";
  }
};

/* funcion scope general REUTILIZABLES */
function aJson(value) {
  return JSON.stringify(value);
}
function subitTodoAlSesionStorage(key, value) {
  const soyJson = aJson(value);
  sessionStorage.setItem(key, soyJson);
}

/* VERIFICACION DE ESTADO DE LOGIN PERMANENTE */

function estadoLogin(clave) {
  if (clave !== true) {
    contForm.style.display = "flex";
  } else {
    contForm.style.display = "none";
    cerrar.style.display = "block";
    supermercado.style.display = "block";
    registrarse.style.display = "none";
    //funcion para insertar en sessionstorage copia de productos
  }
}
/* aqui es login porque es tal cual la llave esta definida en el local
storage - no confudir con el id del html */
estadoLogin(recupLS("login"));

cerrar.onclick = () => {
  sessionStorage.removeItem("login");
  sessionStorage.clear();
  cerrar.innerHTML = "tu sesion ha expirado, inicie sesion nuevamente";
  document.querySelector("h1").textContent = "tu sesion ha caducado";
  supermercado.style.display = "none";
  estadoLogin(recupLS("login"));
  registrarse.style.display = "block";
};

registrarse.onclick = () => {
  sessionStorage.clear();
  sessionStorage.setItem("registo", true);
  fLogin.style.display = "none";
  formulario.style.display = "block";
};

const procesoDeregistro = () => {
  if (sessionStorage.getItem("registro")) {
    formulario.style.display = "block";
  }
};
procesoDeregistro();
/* eventos(onclick) dentro de SESION INICIADA */

//const item = document.createElement("div");
//item.textContent = "vacio";

todosLosProductos.onclick = () => {
  prodSuper.forEach((elemento) => {
    const p = document.createElement("p");
    p.style.color = "white";
    p.style.marginLeft = "400px";
    p.innerText = `${elemento.producto} y el precio es: ${elemento.precio}`;
    document.body.appendChild(p);
  });
};

ofertas.onclick = () => {
  prodSuper.forEach((e) => {
    if (e.oferta) {
      const p = document.createElement("p");
      p.style.color = "white";
      p.style.marginLeft = "400px";
      p.innerText = `${e.producto}, precio ${e.precio} con descuento del 25%: ${
        e.precio * 0.75
      } pesos`;
      document.body.appendChild(p);
    }
  });
};

/* evento (onlick) - metodo reverse!!! */
const sliceProdSuper = prodSuper.slice();

ordenar.onclick = () => {
  sliceProdSuper.reverse().forEach((e) => {
    const p = document.createElement("p");
    p.style.color = "brown";
    p.style.marginLeft = "200px";
    p.innerText = `NOMBRE. ${e.producto} ----- DETALLE: ${e.descripcion}`;
    document.body.appendChild(p);
  });
};

btnBusqueda.onclick = () => {
  const resultado = prodSuper.find(
    (e) =>
      e.producto == datoBusqueda.value ||
      e.precio == datoBusqueda.value ||
      e.descripcion == datoBusqueda.value
  );

  if (resultado === undefined) {
    const p = document.createElement("p");
    p.style.color = "yellow";
    p.style.marginLeft = "200px";
    p.innerText = `NO SE ENCONTRO "${datoBusqueda.value}" o no has ingresado un dato`;
    document.body.appendChild(p);
  } else {
    const p = document.createElement("p");
    p.style.color = "black";
    p.style.marginLeft = "200px";
    p.innerText = `tu item solicitado: "${resultado.producto}" (en stock)`;
    document.body.appendChild(p);
  }
};
nombre.onchange = () => {
  const parrafo = document.createElement("p");
  parrafo.innerText = `"${nombre.value}" es un nombre muy corto`;
  parrafo.style.color = "red";
  document.body.appendChild(parrafo);
};

apellido.onchange = () => {
  const p = document.createElement("p");
  p.innerText = `"${apellido.value}" es un apellido muy corto`;
  p.style.color = "red";
  document.body.appendChild(p);
};

correo.onchange = () => {
  const p = document.createElement("p");
  p.innerText = `"${correo.value}" es un correo muy corto`;
  p.style.color = "red";
  document.body.appendChild(p);
};
passForm.onchange = () => {
  const p = document.createElement("p");
  p.innerText = `tu contraseña es muy corta`;
  p.style.color = "red";
  document.body.appendChild(p);
};
