const pelis = document.querySelector("#formPelis")
const contenedor = document.querySelector(".contenedor")
const apiKey = "secreto"

const tarjetasIndividuales = (filtradoFetch)=>{
    const elementosNodos = filtradoFetch.reduce((acumulador, elemento) =>{
        return acumulador + `
        <img src="https://image.tmbd.org/t/p/original${elemento.poster_path}" alt="${elemento.title} `
    }, "")
}

pelis.addEventListener("submit", async function (e) {
    e.preventDefault();
    const preferencia = pelis.elements.consulta.value;
    fetch(`https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=${apiKey}`)
    .then(respuesta => respuesta.json())
    .then(res => console.log(res))
       
})

