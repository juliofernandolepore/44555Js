const endpoint = "pikachu"
const url = `https://pokeapi.co/api/v2/${endpoint}/`

const peticion = async () =>{
    const solicitud = await fetch(url)
    const datos = await solicitud.json();
    console.log(datos) 
}

peticion()