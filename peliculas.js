const pelis = document.querySelector("#formPelis")
const contenedor = document.querySelector(".contenedor")
const btnBuscar = document.querySelector("#btnBuscar")

const starWars = async (numeroEspecieId)=>{
  try{
    const respuesta = await axios
    .get(`https://swapi.dev/api/species/${numeroEspecieId}/`)
    console.log(respuesta.data)
  }catch (e){
    console.log(`el error fue ${e}`)
  } 
}

starWars(6)

pelis.addEventListener("submit", async (e)=>{
    e.preventDefault()
    console.log("evento activado")
    const preferencia = pelis.elements.consulta.value
    const peticion = await axios.get(`https://swapi.dev/api/people/${preferencia}/`)
    console.log(peticion.data)
})


