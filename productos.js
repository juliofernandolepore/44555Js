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

/* id botones para eventos en sesion activa */

const todosLosProductos = document.querySelector("#allProductos");
const ofertas = document.querySelector("#todasLasOfertas");
const btnBusqueda = document.querySelector("#busqueda");
const datoBusqueda = document.querySelector("#search");

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
const formProductos = document.querySelector("#formularioProductos")
const nombreProducto = document.querySelector("#nombreProducto")
const descripcion = document.querySelector("#descripcion")
const precio = document.querySelector("#precio")
const oferta = document.querySelector("#oferta")
const stock = document.querySelector("#stock")
const contRes = document.querySelector("#feedback")

formProductos.onsubmit = (e) => {
  e.preventDefault()

  fetch("https://63c5b80ef80fabd877eeca38.mockapi.io/nuevos/productos", {
    method: "POST",
    body: JSON.stringify({
      nombreProducto: nombreProducto.value,
      descripcion: descripcion.value,
      precio: precio.value,
      oferta: oferta.value,
      stock: stock.value,

    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => console.log(data.id, data.nombreProducto))

  contRes.innerHTML = `producto agregado exitosamente a la base de datos`

}