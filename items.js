const inputCarrito = document.querySelector(".inputCarrito")
const contenedorCarrito = document.querySelector(".contenedorCarrito")
const btnBuscarCarrito = document.querySelector(".botonBusquedaCarrito")
const api = "https://api.mercadolibre.com/sites/MLA/search?q=";
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
              <div class="card" style="width: 10rem;">
                  <img src="${e.thumbnail}" class="card-img-top p-1" alt="${e.title}">
                <div class="card-body">
                  <h5 class="card-title">${e.title}</h5>
                  <h6>Estado: <b>${e.condition}</b><h6>
                  <h6>precio:<b>$${e.price}</b><h6>
                  <h6 class="btn btn-primary">Agregar al carrito </h6>                 
                </div>
              </div>
              `;
    });
    document.querySelector(".contenedorCarrito").innerHTML = todosLosItems;
  } catch (error) {
    console.log(error)
  }
  
};