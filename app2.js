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
    swal("atencion","coloque su nombre", "warning")
    return false
  }
  if(apellido.value === ""){
    swal("atencion","coloque su apellido", "warning")
    return false
  }   
  if(password.value === ""){
    swal("atencion","introduzca su contraseña", "warning")
    return false
  }
  if(edad.value === ""){
    swal("atencion","coloque su edad", "warning")
    return false
  }
  if (edad.value <= 0 || edad.value >= 120) {
    swal("atencion","complete su edad en numeros por favor", "warning")
    contenedor.innerHTML = "debe introducir un numero"
    return false
  } 
  if(correo.value === ""){
    swal("atencion","el campo correo esta vacio!", "warning")
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
    
      swal("datos ingresados correctamente","bienvenido/a", "success");  
      
      formulario.reset()
}

const apiFuncion = (filtrar) => {
  fetch(`https://63c5b80ef80fabd877eeca38.mockapi.io/nuevos/usuariosTotales/${filtrar}`)
    .then(res => res.json())
    .then(data => {
      if(data.nombre === undefined || data.apellido === undefined){
       swal("cuidado",`el id ${buscar.value} aun no existe en la base de datos`, "error")
       return false
      }
      contenedor.innerHTML = `el resultado de tu busqueda por ID es: 
      <br> NOMBRE: ${data.nombre}, 
      <br> APELLIDO: ${data.apellido}, 
      <br> EDAD: ${data.edad},
      <br> CORREO ELECTRONICO ${data.correo}`
      swal({
        title: "resultado!",
        text: `el resultado de tu busqueda por ID es: 
         NOMBRE: ${data.nombre}, 
         APELLIDO: ${data.apellido}, 
         EDAD: ${data.edad},
         CORREO ELECTRONICO ${data.correo}`
      });
    })
    .catch(e => { swal("cuidado","salio mal","warning") })
}

formulario2.onsubmit = (e) => {
  e.preventDefault()
  if (buscar.value === "") {
    swal("cuidado","el campo no debe estar vacio","error")
    contenedor.innerHTML = "la busqueda esta vacia, <br> por favor ingrese un ID"
    return false
  }
  if (buscar.value <= 0 || buscar.value > 100) {
    swal("atencion","id invalido","error")
    contenedor.innerHTML = "debe introducir un numero"
    return false
  }
  
  apiFuncion(buscar.value)
}

/* peliculas */
const pelis = document.querySelector("#formPelis")
const contenedor = document.querySelector(".contenedor")
const btnBuscar = document.querySelector("#btnBuscar")

const starWars = async (numeroEspecieId)=>{
  try{
    const respuesta = await axios
    .get(`https://swapi.dev/api/species/${numeroEspecieId}/`)
    console.log(respuesta.data)
  }catch (e){
    console.log(`el error fue ${e}`)
  } 
}

starWars(6)

pelis.addEventListener("submit", async (e)=>{
    e.preventDefault()
    console.log("evento activado")
    const preferencia = pelis.elements.consulta.value
    const peticion = await axios.get(`https://swapi.dev/api/people/${preferencia}/`)
    console.log(peticion.data)
})

/* productos */

const formProductos = document.querySelector("#formularioProductos")
const nombreProducto = document.querySelector("#nombreProducto")
const descripcion = document.querySelector("#descripcion")
const precio = document.querySelector("#precio")
const ofertas = document.querySelector("#ofertas")
const stock = document.querySelector("#stock")
const contRes = document.querySelector("#feedback")

const llamadoGetApi = async () => {
  fetch("https://63c5b80ef80fabd877eeca38.mockapi.io/nuevos/productos", {
       
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then((datos)=> console.log(datos))
}

formProductos.onsubmit = (e) => {
  e.preventDefault()
  if(nombreProducto.value === ""){
    swal("el campo nombre de producto esta vacio!")
    return false
  }
  if(descripcion.value === ""){
    swal("el campo descripcion esta vacio!")
    return false
  }   
  if(precio.value === ""){
    swal("el campo precio esta vacio!")
    return false
  }
  if(precio.value <= 0 || precio.value > 100000){
    swal("el campo precio no tiene precio valido!")
    return false
  }
   

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
  const contenido = `${nombreProducto.value} agregado exitosamente a la base de datos`   
  contRes.innerHTML = contenido
  swal( "correcto" , contenido , "success")
    formProductos.reset()
}

/* para revisar hoy  


const iterador = (nodos)=>{
  for (i = 0; i < nodos.lenght; i++){
    if (nodos[i].oferta){
      return swal(nodo[i].precio)
    }
} 
}

ofertas.onclick = () => {
  fetch("https://63c5b80ef80fabd877eeca38.mockapi.io/nuevos/productos", {
       
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then((datos)=> console.log(datos))
  .then (prodSuper =>{

    const ver = iterador(prodSuper)

  })
  ;
}

const resultado = prodSuper.forEach((e) => {
  if (e.oferta) {
    console.log( `${e.nombreProducto}, precio ${e.precio} con descuento del 25%: ${
      e.precio * 0.75
    } pesos`)
    return resultado
  }
})

function cards(arregloFetch) {
  const nodos = arregloFetch.reduce(
    (acc, e) => {
      return (
        acc +
        `
      <div class="card" style="width: 10rem;">
          <img src="${e.thumbnail}" class="card-img-top p-1" alt="${e.title}">
        <div class="card-body">
          <h5 class="card-title">${e.title}</h5>
          <h5>Estado: ${e.condition}<h5>
          <h5>precio: $${e.price}<h5>                  
        </div>
      </div>
      `
      );
    }," "  );
  contenedorCarrito.innerHTML = nodos;
}

*/
