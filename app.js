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

const sliceProdSuper = prodSuper.slice();

const ordenar = () => {
  sliceProdSuper.reverse();
  console.table(sliceProdSuper);
  console.log("********************");
};

const busqueda = () => {
  let buscar = " ";
  buscar = prompt("que producto necesitas?");
  for (let i = 0; i < prodSuper.length; i++) {
    if (prodSuper[i].producto == buscar) {
      console.log(`tu busqueda fue: ${buscar}`);
      console.log(`id: ${prodSuper[i].id}`);
      console.log(`precio: ${prodSuper[i].precio}`);
      console.log(prodSuper[i].descripcion);
    } else {
      console.log("no encontre tu producto");
    }
  }
};

const todosLosProductos = () => {
  prodSuper.forEach((elemento) => {
    console.table(elemento);
  });
};

/* funcion con metodo filter() aplicado a array de objetos */

const filtrar = () => {
  let parametro = prompt(
    "ingresa hasta cuanto pagarias por producto de acuerdo a tu presupuesto"
  );
  const filtrado = prodSuper.filter((i) => {
    return i.precio < parametro;
  });
  console.log("segun el monto ingresado estos son los productos accesibles");
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
  parametro = prompt("ingresa un pais").toLowerCase();
  const filtrado = paisesDelMundo.find((res) => {
    return res === parametro;
  });
  if (filtrado) {
    console.log(filtrado);
    alert(`el pais seleccionado si existe en el listado oculto`);
  } else if (filtrado === undefined) {
    alert(`el pais seleccionado no existe en el listado oculto de paises`);
  }
};

miFind();
