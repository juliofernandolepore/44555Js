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

const maquetadorDeCard = (arregloDelfetch)=>{
  const todosLosItems = arregloDelfetch.reduce((acc, e) => {
    return acc + `              
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
  },"");
  document.querySelector(".contenedorCarrito").innerHTML = todosLosItems;
}

const fetchCustom = async () => {
  try {
    const peticion = await fetch(`${api}${preferencia}`)
    const envolver = await peticion.json()
    const arreglo = await envolver.results;
    maquetadorDeCard(arreglo);
    agregarCarrito(arreglo)
  } catch (error) {
    console.log(error)
  } 
  
};

function agregarCarrito (a) {
  const todosLosBotones = document.querySelectorAll(".boton-card")
  todosLosBotones.forEach(e => {e.onclick = ()=>{
    const id = e.id.slice(6)
    console.log(id)
    const filtroNodoConArrayFetch = a.find((e)=>{
        return e.id == id
    })
    carrito.push(filtroNodoConArrayFetch)
  }
  })
}




