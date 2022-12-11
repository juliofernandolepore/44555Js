/* PRE-ENTREGA 1 */

const minimo = 8;
const vacio = "";

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

/* pre entrega 2 - OBJETOS - ARREGLOS - DOM - */

const prodSuper = [
  {
    id: 685,
    producto: "arroz",
    precio: 200,
    vencimiento: 20 / 01 / 2023,
    descripcion: "arroz blanco premium",
    categoria: "alimento",
    oferta: true,
  },
  {
    id: 589,
    producto: "harina blancaflor",
    precio: 150,
    vencimiento: 02 / 03 / 2023,
    descripcion: "harina integral",
    categoria: "alimento",
    oferta: true,
  },
  {
    id: 884,
    producto: "dulce de leche",
    precio: 300,
    vencimiento: 06 / 06 / 2023,
    descripcion: "dulce de leche la serenisima",
    categoria: "alimentos reposteria",
    oferta: false,
  },
  {
    id: 106,
    producto: "oregano alicante",
    precio: 120,
    vencimiento: 20 / 01 / 2024,
    descripcion: "oregano en sobre de 100 gramos",
    categoria: "alimentos condimentos",
    oferta: false,
  },
  {
    id: 95,
    producto: "papel higienico campanita",
    precio: 500,
    vencimiento: 20 / 01 / 2044,
    descripcion: "rollo 300 metros",
    categoria: "higiene y limpieza",
    oferta: false,
  },
  {
    id: 93,
    producto: "rollo de cocina campanita",
    precio: 500,
    vencimiento: 20 / 01 / 2044,
    descripcion: "rollo 200 metros",
    categoria: "higiene y limpieza",
    oferta: false,
  },
  {
    id: 90,
    producto: "trapo de piso 200 hilos",
    precio: 370,
    vencimiento: 20 / 01 / 2044,
    descripcion: "trapo de piso extra absorvente",
    categoria: "higiene y limpieza",
    oferta: false,
  },
  {
    id: 401,
    producto: "terma 1350 cc ",
    precio: 200,
    vencimiento: 20 / 01 / 2024,
    descripcion: "bebida para diluir",
    categoria: "alimentos y bebidas",
    oferta: true,
  },
  {
    id: 600,
    producto: "coca cola 2.5",
    precio: 450,
    vencimiento: 20 / 01 / 2024,
    descripcion: "coca retornable 2.5",
    categoria: "alimentos y bebidas",
    oferta: false,
  },
  {
    id: 705,
    producto: "azucar chango 1 kg",
    precio: 410,
    vencimiento: 20 / 01 / 2024,
    descripcion: "azucar 1 kg",
    categoria: "alimentos",
    oferta: false,
  },
  {
    id: 95,
    producto: "aceite Cocinero",
    precio: 350,
    vencimiento: 20 / 01 / 2025,
    descripcion: "aceite de girasol 1 litro",
    categoria: "alimentos",
    oferta: false,
  },
  {
    id: 703,
    producto: "leche Larga Vida manfrey",
    precio: 200,
    vencimiento: 10 / 01 / 2024,
    descripcion: "litro de leche entera larga vida",
    categoria: "alimentos",
    oferta: true,
  },
  {
    id: 88,
    producto: "jabon de tocador triple rexona",
    precio: 300,
    vencimiento: 20 / 01 / 2044,
    descripcion: "3 jabones fragancia limon",
    categoria: "higiene y limpieza",
    oferta: true,
  },
  {
    id: 87,
    producto: "dentrifico noc 10 grande",
    precio: 500,
    vencimiento: 20 / 01 / 2024,
    descripcion: "dentrifico grande",
    categoria: "higiene y limpieza",
    oferta: false,
  },
  {
    id: 05,
    producto: "pilas Everready 4 unidades",
    precio: 800,
    vencimiento: 20 / 01 / 2034,
    descripcion: "pilas triple a",
    categoria: "ferreteria",
    oferta: false,
  },
];

/*  ordenar los elementos alfabeticamente o por id. con copia segura en otra variablee 
utilizando los siguientes metodos: spread operator, array.slice , */

//if true aplicar metodo filter en array, mostrando en consola cada una de las ofertas

//hacer un promt con el metodo find para buscar un producto y lo muestre en un alert
const ofertas = () => {
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

const ordernar = () => {};

const filtradoProducto = () => {
  for (variable in prodSuper) {
    console.log(variable);
  }
};
