const botonBusquedaInicio = document.querySelector(".botonBusquedaInicio");
const inputBusquedaInicio = document.querySelector(".inputBusquedaInicio");

const api = "https://api.mercadolibre.com/sites/MLA/search?q=";
let item = "";
const limite = "&limit=18";
const cargarArticulos = async () => {
  try {
    const respuesta = await fetch(`${api}${item}${limite}`);
    const todoElObjeto = await respuesta.json();
    const arreglo = await todoElObjeto.results;
    console.log(todoElObjeto);
    console.log(arreglo);
    /* console.log(array.title) aca ya no se puede, necesito iterar el arreglo */
    let todosLosItems = "";
    todoElObjeto.results.forEach((e) => {
      todosLosItems += `              
              <div class="card" style="width: 10rem;">
                  <img src="${e.thumbnail}" class="card-img-top p-1" alt="${e.title}">
                <div class="card-body">
                  <h5 class="card-title">${e.title}</h5>
                  <h5>Estado: ${e.condition}<h5>
                  <h5>precio: $${e.price}<h5>                  
                </div>
              </div>
              `;
    });
    document.querySelector(".contenedor").innerHTML = todosLosItems;
  } catch (error) {
    console.log(error);
  }
};
//cargarArticulos();

botonBusquedaInicio.addEventListener('click', ()=>{
  item += inputBusquedaInicio.value;
  cargarArticulos();
})

function cards(arreglo) {
  const nodos = array.reduce(
    (acc, element) => {
      return (
        acc +
        `
          <p>${element.title}<p/>
      `
      );
    },

    " "
  );
  contenedorBusqueda.innerHTML = nodos;
}

const fetchCustom = async (producto, limite) => {
  const cantidadResultados = `&limit=${limite}`;
  const apiMercadolibre = "https://api.mercadolibre.com/sites/MLA/search?q=";
  fetch(apiMercadolibre + producto + cantidadResultados)
    .then((r) => r.json())
    .then((r) => {
      const arreglo = r.results;
      cards(arreglo);
    })
    .catch((e) => {
      console.log(e, "error");
    });
};

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

/* busqueda.onsubmit = (e) => {
  e.preventDefault();
  fetchCustom1(inputBusqueda.value);
}; */

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
