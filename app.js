const formulario = document.querySelector("#formulario")
const nombre = document.querySelector("#nombre")
const apellido = document.querySelector("#apellido")
const password = document.querySelector("#password")
const edad = document.querySelector("#edad")
const correo = document.querySelector("#correo")
const contenedor = document.querySelector("#visualizaciones")
const formulario2 = document.querySelector("#formulario2")
const buscar = document.querySelector("#buscar")


formulario.onsubmit = (e) => {
  e.preventDefault()
  if(nombre.value === ""){
    swal("el campo nombre esta vacio!")
    return false
  }
  if(apellido.value === ""){
    swal("el campo apellido esta vacio!")
    return false
  }   
  if(password.value === ""){
    swal("el campo contraseña esta vacio!")
    return false
  }
  if(edad.value === ""){
    swal("el campo edad esta vacio!")
    return false
  } 
  if(correo.value === ""){
    swal("el campo correo esta vacio!")
    return false
  } 

  fetch("https://63c5b80ef80fabd877eeca38.mockapi.io/nuevos/usuariosTotales", {
    method: "POST",
    body: JSON.stringify({
      nombre: nombre.value,
      apellido: apellido.value,
      correo: correo.value,
      password: password.value,
      edad: edad.value,

    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(data => console.log(data.id, data.nombre))

  contenedor.innerHTML = `${formulario.nombre.value} ${formulario.apellido.value} 
      <br>agregado exitosamente a nuestra base de datos`
    swal(`${formulario.nombre.value}, agregado exitosamente al listado`)
    formulario.reset()
}

const apiFuncion = (filtrar) => {
  fetch(`https://63c5b80ef80fabd877eeca38.mockapi.io/nuevos/usuariosTotales/${filtrar}`)
    .then(res => res.json())
    .then(data => {

      contenedor.innerHTML = `el resultado de tu busqueda por ID es: 
      <br> NOMBRE: ${data.nombre}, 
      <br> APELLIDO: ${data.apellido}, 
      <br> EDAD: ${data.edad},
      <br> CORREO ELECTRONICO ${data.correo}`

    })
    .catch(e => { alert("salio mal") })
}

formulario2.onsubmit = (e) => {
  e.preventDefault()
  if (buscar.value === "") {
    contenedor.innerHTML = "la busqueda esta vacia, <br> por favor ingrese un ID"
    return false
  }
  apiFuncion(buscar.value)
}


const constatar = {
  usuario: "fernando",
  pass: "123lepore",
};

const upLocSt = (llave, valor) => {
  sessionStorage.setItem(llave, JSON.stringify(valor));

};


const recupLS = (llave) => {
  return JSON.parse(sessionStorage.getItem(llave));
};

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


function aJson(value) {
  return JSON.stringify(value);
}
function subitTodoAlSesionStorage(key, value) {
  const soyJson = aJson(value);
  sessionStorage.setItem(key, soyJson);
}

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

