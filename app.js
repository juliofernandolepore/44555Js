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

const fetchCustom1 = async (producto) => {
  const apiMercadolibre = "https://api.mercadolibre.com/sites/MLA/search?q=";
  fetch(apiMercadolibre + producto)
    .then((r) => r.json())
    .then((r) => {
      const arreglo = r.results;
      console.log(arreglo);
    })
    .catch((e) => {
      console.log(e, "error");
    });
};

const fetchCustom2 = async (producto, marca) => {
  const especificidad = `/${marca}`;
  const apiMercadolibre = "https://api.mercadolibre.com/sites/MLA/search?q=";
  fetch(apiMercadolibre + producto + especificidad)
    .then((r) => r.json())
    .then((r) => {
      const arreglo = r.results;
      console.log(arreglo);
    })
    .catch((e) => {
      console.log(e, "error");
    });
};

let carrito = [];

function addCarrito(arreglo) {
  const botonAgregar = document.querySelector(".boton-card");
  botonAgregar.forEach((boton) => {
    boton.onclick = () => {
      const id = boton.id.slice(6);
      const filtrarProd = arreglo.find((e) => {
        return e.id === Number(id);
      });
      carrito.push(filtrarProd);
      localStorage.setItem("carrito", JSON.stringify(carrito));
    };
  });
}

const productosSeleccionados = JSON.parse(localStorage.getItem("carrito"));
carrito = productosSeleccionados || [];
