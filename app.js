/* PRE ENTREGA 3 - REFACTORIZANDO */

/* identificadores manipulables (SOLO ID) */

const inpUser = document.querySelector("#usuario");
const fLogin = document.querySelector("#login");
const pass = document.querySelector("#password");
const contForm = document.querySelector("#contenedor-form");
const cerrar = document.querySelector("#salir");
const supermercado = document.querySelector("#supermercado");
const registrarse = document.querySelector("#altaUsuario");
const rellenoMultiple = document.querySelector("#vacio");

/* id botones para eventos en sesion activa */

const todosLosProductos = document.querySelector("#allProductos");
const ofertas = document.querySelector("#todasLasOfertas");

/* array para trabajar (productos supermercado) */
const prodSuper = [
  {
    id: 685,
    producto: "arroz",
    precio: 200,
    vencimiento: "20 / 01 / 2023",
    descripcion: "arroz blanco premium",
    categoria: "alimento",
    oferta: true,
  },
  {
    id: 589,
    producto: "harina",
    precio: 150,
    vencimiento: "02 / 03 / 2023",
    descripcion: "harina integral blancaflor",
    categoria: "alimento",
    oferta: true,
  },
  {
    id: 884,
    producto: "dulce de leche",
    precio: 300,
    vencimiento: "06 / 06 / 2023",
    descripcion: "dulce de leche la serenisima",
    categoria: "alimentos reposteria",
    oferta: false,
  },
  {
    id: 106,
    producto: "oregano",
    precio: 120,
    vencimiento: "20 / 01 / 2024",
    descripcion: "oregano en sobre de 100 gramos marca alicante",
    categoria: "alimentos condimentos",
    oferta: false,
  },
  {
    id: 95,
    producto: "papel higienico",
    precio: 500,
    vencimiento: "20 / 01 / 2044",
    descripcion: "rollo 300 metros marca campanita",
    categoria: "higiene y limpieza",
    oferta: false,
  },
  {
    id: 93,
    producto: "rollo de cocina campanita",
    precio: 500,
    vencimiento: "20 / 01 / 2044",
    descripcion: "rollo 200 metros",
    categoria: "higiene y limpieza",
    oferta: false,
  },
  {
    id: 90,
    producto: "trapo de piso 200 hilos",
    precio: 370,
    vencimiento: "20 / 01 / 2044",
    descripcion: "trapo de piso extra absorvente",
    categoria: "higiene y limpieza",
    oferta: false,
  },
  {
    id: 401,
    producto: "terma 1350 cc ",
    precio: 200,
    vencimiento: "20 / 01 / 2024",
    descripcion: "bebida para diluir",
    categoria: "alimentos y bebidas",
    oferta: true,
  },
  {
    id: 600,
    producto: "coca",
    precio: 450,
    vencimiento: "20 / 01 / 2024",
    descripcion: "coca retornable 2.5",
    categoria: "alimentos y bebidas",
    oferta: false,
  },
  {
    id: 705,
    producto: "azucar",
    precio: 410,
    vencimiento: "20 / 01 / 2024",
    descripcion: "azucar 1 kg  chango",
    categoria: "alimentos",
    oferta: false,
  },
  {
    id: 95,
    producto: "aceite",
    precio: 350,
    vencimiento: "20 / 01 / 2025",
    descripcion: "aceite de girasol 1 litro marca Cocinero",
    categoria: "alimentos",
    oferta: false,
  },
  {
    id: 703,
    producto: "leche",
    precio: 200,
    vencimiento: "10 / 01 / 2024",
    descripcion: "litro de leche entera larga vida",
    categoria: "alimentos",
    oferta: true,
  },
  {
    id: 88,
    producto: "jabon",
    precio: 300,
    vencimiento: "20 / 01 / 2044",
    descripcion: "3 jabones fragancia limon, tocador triple rexona",
    categoria: "higiene y limpieza",
    oferta: true,
  },
  {
    id: 87,
    producto: "dentrifico",
    precio: 500,
    vencimiento: "20 / 01 / 2024",
    descripcion: "dentrifico grande noc 10 grande",
    categoria: "higiene y limpieza",
    oferta: false,
  },
  {
    id: 05,
    producto: "pilas",
    precio: 800,
    vencimiento: "20 / 01 / 2034",
    descripcion: "pilas triple a, Everready 4 unidades",
    categoria: "ferreteria",
    oferta: false,
  },
];

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
    cerrar.textContent = "cerrar sesion";
    supermercado.style.display = "block";
    document.querySelector("h1").textContent = "BIENVENIDO";
  } else {
    inpUser.style.border = "3px solid red";
    pass.style.border = "3px solid red";
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
  registrarse.style.display = "block";
};

registrarse.onclick = () => {
  contForm.style.display = "none";
  cerrar.style.display = "none";
};

/* eventos(onclick) dentro de SESION INICIADA */

todosLosProductos.onclick = () => {
  prodSuper.forEach((elemento) => {
    console.table(elemento);
  });
};

ofertas.onclick = () => {
  let total = 0;
  for (let i = 0; i < prodSuper.length; i++) {
    if (prodSuper[i].oferta === true) {
      console.log(`producto: ${prodSuper[i].producto}`);
      console.log(`precio de lista: ${prodSuper[i].precio} pesos`);
      let operacion = (prodSuper[i].precio * 25) / 100;
      let descuentoAplicado = prodSuper[i].precio - operacion;
      console.log(`precio final (descuento 25%): ${descuentoAplicado} pesos`);
      console.log("*****************************");
      total += 1;
    }
  }
  console.log(`Productos con descuento: ${total}`);
};
