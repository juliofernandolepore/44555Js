/* PRE-ENTREGA 1 */

const minimo = 8;
const vacio = "";

let nombreCompleto = prompt("por favor ingresa tu nombre")


if (nombreCompleto == vacio) {    
    alert(`tu nombre: ${nombreCompleto} esta vacio`)
       
}else if(nombreCompleto.length <= minimo){
    alert(`tu nombre: ${nombreCompleto} es demasiado breve, ingrese 8 caracteres minimo`)    
    }
else{
    
}


let miNombreDeUsuario = prompt("por favor ingresa tu Nombre de Usuario")


if (miNombreDeUsuario == vacio) {    
    alert(`el nombre de usuario:" ${miNombreDeUsuario}" esta vacio`)
       
}else if(miNombreDeUsuario.length <= minimo){
    alert(`SU USUARIO ERRONEO ES: " ${miNombreDeUsuario}" (demasiado breve, ingrese 8 caracteres)`)    
    }
else{
    
}


let miPassword = prompt("por favor ingresa una contraseña")

if (miPassword.length < minimo) {
    alert(`"${miPassword} CONTRASEÑA INSEGURA "(ingrese al menos 8 digitos)"`);
}else if (miPassword.length == vacio){
    alert(`"${miPassword}" CONTRASEÑA ERRONEA (password vacio)`);
}else if(miPassword.lastIndexOf(' ') !== -1){
    alert("por favor ingrese una contraseña sin espacios")
}

let saludoInicial = `hola ${nombreCompleto} bienvenido!!!!`

alert(saludoInicial)

nombreCompleto = prompt("ingrese nuevo email")