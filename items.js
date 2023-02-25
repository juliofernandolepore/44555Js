const inputCarrito = document.querySelector(".inputCarrito")
const contenedorCarrito = document.querySelector(".contenedorCarrito")
const btnBuscarCarrito = document.querySelector(".botonBusquedaCarrito")
const api = "https://api.mercadolibre.com/sites/MLA/search?q=";
const carrito = [];
let preferencia =" ";

btnBuscarCarrito.addEventListener('click', ()=>{
  preferencia += inputCarrito.value;
  fetchCustom()
  if (preferencia){preferencia = "" }})

const fetchCustom = async () => {
  try {
    const peticion = await fetch(`${api}${preferencia}`)
    const envolver = await peticion.json()
    const arreglo = await envolver.results;
    let todosLosItems = "";
    arreglo.forEach((e) => {
      todosLosItems += `              
              <div class="card" id="item-${e.id}" style="width: 10rem;">
                  <img src="${e.thumbnail}" class="card-img-top p-1" alt="${e.title}">
                <div class="card-body">
                  <h5 class="card-title">${e.title}</h5>
                  <h6>Estado: <b>${e.condition}</b><h6>
                  <h6>precio:<b>$${e.price}</b><h6>
                  <h6 id="boton-${e.id}"class="boton-card btn btn-info btn-sm ">Agregar al carrito</h6>                
                </div>
              </div>
              `;
    });
    document.querySelector(".contenedorCarrito").innerHTML = todosLosItems;
  } catch (error) {
    console.log(error)
  } 
  
  const agregarCarrito = () => {
    const todosLosBotones = document.querySelectorAll(".boton-card")
    todosLosBotones.forEach(e => {e.onclick = ()=>{
      const id = e.id.slice(6)
      console.log(id)
    }
    })
  }
  
  agregarCarrito()


};

function cardHtml ( array ) {
  const generarNodos = array.reduce(( acc, element) => {
      return acc + `
          <div class="card" id="pokemon-${element.id}">
              <div class="container-img">
                  <img src=${element.img} alt=${element.name}>
              </div>                
              <h2>
                  ${element.name}
              </h2>
              <button id="boton-${element.id}" class="boton-card">
                  Añadir al carrito
              </button>
          </div>
      `
  }, "")

  contenedor.innerHTML = generarNodos
}



