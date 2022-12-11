/* opcion 1

function itera(arreglo){
    const contenedor = document.querySelector(".container")

    for(let i = 0; i < arreglo.length; i++){
        
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
            <div class="container-img">
                <img src=${arreglo[i].img} alt=${arreglo[i].name}>
            </div> 
            <h2>
                ${arreglo[i].name}
            </h2>
        `
        contenedor.appendChild(card)

    }
}

itera(pokemon)

*/

/* opcion 2

function cards(arreglo){

    const contenedor = document.querySelector(".container")

    arreglo.forEach( individual => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        <div class="container-img">
            <img src=${individual.img} alt=${individual.name}>
        </div> 
            <h2>
                 ${individual.name}
            </h2>
            <button>
                seleccionar
            </button>        
        `
        contenedor.appendChild(card)
        
    });
}

cards(pokemon)

*/

/* opcion 3 innerHTML con reduce

const conReduce = (arreglo) =>{
    const contenedor = document.querySelector(".container")

    const cardReduce = arreglo.reduce((argAcumulador, elemento)=>{
        return argAcumulador + `
        <div class="card"
            <div class="container-img">
                <img src=${elemento.img} alt=${elemento.name}>
            </div> 
            <h2>
                 ${elemento.name}
            </h2>
            <button>
                seleccionar
            </button>
        </div>        
        `
    },"")
    contenedor.innerHTML = cardReduce
}

conReduce(pokemon)
*/

/* opcion 4 innerHTML con for y variable

function recuperaCards(arreglo){
    let acc = ""
    const contenedor = document.querySelector(".container")
    for(let i = 0; i < arreglo.lenght; i++){
        `
        <div class="card"
            <div class="container-img">
                <img src=${arreglo[i].img} alt=${arreglo[i].name}>
            </div> 
            <h2>
                 ${arreglo[i].name}
            </h2>
            <button>
                seleccionar
            </button>
        </div>        
        `
    }
    contenedor.innerHTML = acc
}

recuperaCards(pokemon)

*/

// opcion 5 map con createElement, innerHTML y appendChild

function cards(arreglo){

    const contenedor = document.querySelector(".container")

    arreglo.map( individual => {
        const card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        <div class="container-img">
            <img src=${individual.img} alt=${individual.name}>
        </div> 
            <h2>
                 ${individual.name}
            </h2>
            <button>
                seleccionar
            </button>        
        `
        contenedor.appendChild(card)
        
    });
}

cards(pokemon)