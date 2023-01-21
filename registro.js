const registro = () => {

    const dbUsuarios = async () =>{
      const listaUsuarios = "https://63c5b80ef80fabd877eeca38.mockapi.io/nuevos/usuariosTotales"
      const peticion = await fetch(listaUsuarios)
      const respuesta = await peticion.json()
      console.table(respuesta)
      
    }
    
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const errorPass = document.querySelector("#errorPass");
    const errorMail = document.querySelector("#errorMail");
    const enviar = document.querySelector("#botonEnviar");
  
    if (email.value === "") {
      errorMail.className = "text-danger";
      errorMail.innerHTML = "el campo email esta vacio!";
      return false
    }else {
      errorMail.innerHTML = "";
    }
    if(password.value === ""){
      errorPass.className = "text-danger";
      errorPass.innerHTML = "el campo contraseña esta vacio!";
      return false
    }else{
      errorPass.innerHTML = "";
    }
    dbUsuarios()
    
    document.querySelector("#envio").innerHTML =`<div class="alert alert-success" role= "alert"> validacion exitosa </div>`;
  };
  
  document.querySelector("#botonEnviar").addEventListener("click", validarSesion);