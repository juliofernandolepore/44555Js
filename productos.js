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
}) */


 
