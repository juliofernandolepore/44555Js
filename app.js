const botonBusquedaInicio = document.querySelector(".botonBusquedaInicio");
const inputBusquedaInicio = document.querySelector(".inputBusquedaInicio");
const api = "https://api.mercadolibre.com/sites/MLA/search?q=";
const limite = "&limit=36";
let item = "";

const cargarArticulos = async () => {
  try {
    const respuesta = await fetch(`${api}${item}${limite}`);
    const todoElObjeto = await respuesta.json();
    const arreglo = await todoElObjeto.results;
    let todosLosItems = "";
    todoElObjeto.results.forEach((e) => {
      todosLosItems += `              
              <div class="card" style="width: 10rem;">
                  <img src="${e.thumbnail}" class="card-img-top p-1" alt="${e.title}">
                <div class="card-body">
                  <h6 class="card-title">${e.title}</h6>
                  <h6>Estado: <b>${e.condition}</b><h6>
                  <h6>precio:<b>$${e.price}</b><h6>                  
                </div>
              </div>
              `;
    });
    document.querySelector(".contenedor").innerHTML = todosLosItems;
  } catch (error) {
    console.log(error);
  }
};

botonBusquedaInicio.addEventListener('click', ()=>{
  item += inputBusquedaInicio.value;
  cargarArticulos();
  if (item){
    item=""
  }
})