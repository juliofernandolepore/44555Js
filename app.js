/* PROYECTO FINAL DESDE CERO */

const peliculas = () => {

    fetch("https://rickandmortyapi.com/api/character")
  .then((respBruta) => respBruta.json())
  .then((dataDepurada) => {

    console.log(dataDepurada);

    const empaquetado = dataDepurada.results;

    console.log(empaquetado);
  })

  .catch((error) => console.log("algo no funciona"));
}

/* ************************************************************************************* */

fetch("https://63c5b80ef80fabd877eeca38.mockapi.io/usuariosTotales")
  .then(res => res.json())
  .then(data => console.table(data)
  )

  const formUsuarios = document.querySelector("#formUsuarios")
  const inputNom = document.querySelector("#nombre")
  const inputApe = document.querySelector("#apellido")
  const inputCorreo= document.querySelector("#correo")

  formUsuarios.onsubmit = (e)=>{
    e.preventDefault()

    fetch("https://63c5b80ef80fabd877eeca38.mockapi.io/usuariosTotales", {
        method: "POST",
        body: JSON.stringify({
            apellido: inputApe.value ,            
            nombre: inputNom.value,
            correo: inputCorreo.value
        }),
        header: {
            "Content-Type":"application/json"
        }
      })
      .then(res => res.json())
      .then(data => {
        console.table(data)
      })

  }