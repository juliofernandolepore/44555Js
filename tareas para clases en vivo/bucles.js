/* 1) Realice un bucle que tenga como valor inicial 0 y que itere hasta 10 veces. 
Envíe un mensaje en consola por cada iteración, con la siguiente 
frase: "¡¡Oh no, entré en un bucleeee!!" */

for(let i= 0; i < 10; i++){
    console.log('¡¡Oh no, entré en un bucleeee!!')
}

/* 2) Realice un bucle que tenga como valor inicial 20 y que itere hasta 50 veces. 
Visualice en consola cada incremento de la variable inicial. */

for(let iterador = 20 ; iterador < 70 ; iterador++){
    console.log(` el iterador es ${iterador}`)
}

/* 3) Realice un bucle que muestre todas las vocales y consonantes de una palabra.
 La palabra tiene que estar dentro de una variable. */
let ventilador = "ventilador" //10 caracteres

 for(let iterador = 0 ; iterador < ventilador.length ; iterador++ ){
    console.log(`la letra es: ${ventilador[iterador]}`)}

/* 4) Realice un bucle que tenga como valor incial 10 y que itere hasta 100 veces, 
de manera incluyente. Este bucle deberá tener una variable acumuladora para obtener 
la suma de todos los números que se encuentren dentro de dicho rango.*/
let acumulador = 0;

for(let i = 10; i <= 110; i++){
    acumulador += i    
}
console.log(acumulador)

/* 5) Realice un bucle que tenga como valor inicial 0 y que itere hasta 10 veces. 
Haciendo uso de una variable acumuladora, sume solamente los números impares en las 
iteraciones. */
let acumulador2 = 0;
for(let iterador = 0; iterador < 10; iterador++){
    
    if (iterador % 2 !==0){
        console.log(`iteracion impar: ${iterador} `)
        acumulador2 += iterador //iterador impar
    }    
}
console.log(`el acumulador es: ${acumulador2}`)

/* 6) Realice un bucle que coteje cuántas vocales tiene el nombre de un usuario. 
Para valerse de un valor, genere una variable con su nombre. Precisarán de una 
variable acumuladora que cuente la cantidad de vocales. */

let usuario1 = "fernando"

let contadorAcum = 0

for(let i =0; i < usuario1.length ; i++){
    
    if (usuario1[i].match(/[aeiou]/gi)){
        contadorAcum++
     }       
}
console.log(`recorro ${usuario1} y la cantidad de vocales es: ${contadorAcum}`)