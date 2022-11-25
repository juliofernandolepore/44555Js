/* INSTANCIAR OBJETO CLIENTE: NOMBRE, APELLIDO, EDAD, SUELDO, NUMERO DE CUENTA,
DIRECCION, EMAIL, TARJETA DE CREDITO, metodo deuda (llamar al call center) */

class Clientes {
    constructor(argNombre, argApellido, argEdad, argSueldo, argCuenta, 
        argDireccion, argEmail, argTarjetaCred, argDeuda ){
            this.nombre = argNombre,
this.apellido = argApellido,
this.edad = argEdad,
this.sueldo = argSueldo,
this.cuenta = argCuenta,
this.direccion = argDireccion,
this.email = argEmail,
this.tarjeta = argTarjetaCred,          
this.deuda = argDeuda
    }
    deuda (){
        if (this.deuda === true){
            return "llamar a cobranzas"
        }
    }
}

const cliente1 = new Clientes("fer", "lepore", 39, 0, 
0000000000000, "cordoba", "@gmail.com", 4000-0000-000-000, false)

console.log(cliente1)
console.table(cliente1)
console.log(cliente1.deuda)