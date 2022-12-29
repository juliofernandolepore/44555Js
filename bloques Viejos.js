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

const sliceProdSuper = prodSuper.slice();

const ordenar = () => {
  sliceProdSuper.reverse();
  console.table(sliceProdSuper);
  console.log("********************");
};

const busqueda = () => {
  let buscar = " ";
  buscar = prompt("que producto necesitas?").toLowerCase();
  for (let i = 0; i < prodSuper.length; i++) {
    if (prodSuper[i].producto == buscar) {
      console.log(`tu busqueda fue: ${buscar}`);
      console.log(`id: ${prodSuper[i].id}`);
      console.log(`precio: ${prodSuper[i].precio}`);
      console.log(prodSuper[i].descripcion);
    } else {
      console.log(
        `No pude encontrar: "${buscar.toUpperCase()}" entre el listado de productos`
      );
    }
  }
};

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
