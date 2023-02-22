const contenedorBusqueda = document.querySelector(".contenedor-busqueda");
const busqueda = document.querySelector("#busqueda");
const inputBusqueda = document.querySelector("#inputBusqueda");

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

busqueda.onsubmit = (e) => {
  e.preventDefault();
  fetchCustom1(inputBusqueda.value);
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
