const btnVaciarCarrito = document.querySelector("#vaciar");

let informacionDelLocalStorage = JSON.parse(localStorage.getItem("carrito"));

const cardDelete = (datosbrutos) => {
  const todosLosItems = datosbrutos.reduce((acc, e) => {
    return (
      acc +
      `              
              <div class="card h-8" id="item-${e.id}" style="width: 10rem;">
                  <img src="${e.thumbnail}" class="card-img-top p-1" alt="${e.title}">
                <div class="card-body">
                    <h6 class="card-title">${e.title}</h6>
                    <h6 id="boton-${e.id}"class="boton-card btn btn-info btn-sm ">Borrar del carrito</h6>                
                </div>
              </div>
              `
    );
  }, "");
  document.querySelector(".contenido-carrito").innerHTML = todosLosItems;
};

function vaciarCarrito() {
  localStorage.clear();
}

cardDelete(informacionDelLocalStorage);

btnVaciarCarrito.addEventListener("click", () => {
  vaciarCarrito();
  cardDelete(informacionDelLocalStorage);
  document.querySelector(".contenido-carrito").innerHTML =
    "<h2>El carrito ahora esta vacio</h2>";
});

function borrarDelCarrito(a) {
  const botones = document.querySelectorAll(".boton-card");
  botones.forEach((e) => {
    e.onclick = () => {
      const id = e.id.slice(6);
      console.log(id);
      const filtroNodoConArrayFetch = a.filter((e) => {
        return e.id !== id;
      });
      informacionDelLocalStorage = filtroNodoConArrayFetch;
      localStorage.setItem("carrito", JSON.stringify(filtroNodoConArrayFetch));
      cardDelete(informacionDelLocalStorage);
      borrarDelCarrito(informacionDelLocalStorage);
    };
  });
}

borrarDelCarrito(informacionDelLocalStorage);
