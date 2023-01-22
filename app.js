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

