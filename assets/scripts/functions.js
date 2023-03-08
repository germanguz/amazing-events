// ** FUNCIONES Y PLANTILLAS GENERALES **
// ** FUNCIONES **

// Array vacío para ir actualizando de acuerdo a que página acceda a usar las funciones
let captureList = []; 

// Para las categorías
function printCategory(idCategoria) {
    let allCateg = [];
    let allCategPrint = [];
    let container = document.getElementById(idCategoria);

    data.events.forEach(element => {
        if (!allCateg.includes(element.category)) {
            allCateg.push(element.category)
            allCategPrint.push(templateCategory(element.category))
        }
    });
    container.innerHTML = allCategPrint.join("");
}

// Para las cards
function printEvents(lista) {
    let allCards = [];
    let container = document.getElementById("idCard");

    for (let event of lista) {
        allCards.push(templateCard(event.image, event.name, event.description, event.price, event._id));
    }
    container.innerHTML = allCards.join("");
}


// Filtro cruzado para búsquedas(funciona con "onclick" y "onkeyup" que llaman esta función desde el html)
function captureData() {
    let text = document.getElementById("idSearch").value.toLowerCase();
    let checks = Array.from(document.querySelectorAll(".check:checked")).map(element => element.value);
    
    // *puedo omitir este paso y usar directamente las variables sin olvidar usar el "map" en "checks"
    // creamos un objeto con text y check
    /* let objDatosParaFiltrar = {
        textoAFiltrar: text,
        checksAFiltrar: checks.map(element => element.value)
    } */

    let filtro = captureList.filter(each => {
        return (each.name.toLowerCase().includes(text)) && 
        (checks.length === 0 || checks.includes(each.category))
    })
    if (filtro.length > 0) {
        printEvents(filtro);
    } else {
        let container = document.getElementById("idCard");
        container.innerHTML = templateCardNotFound();
    }
}

// ** PLANTILLAS **

// plantilla de las categorias
function templateCategory(category) {
    return `<label for="${category}">
    <input onclick="captureData()" class="check" type="checkbox" name="choose" id="${category}" value="${category}">
    ${category}</label>`
}

// plantilla de las cards
function templateCard (image, name, description, price, id) {
    return `
        <article class="card">
            <figure>
                <img class="card-image" src="${image}" alt="${name}">
            </figure>
            <h2>${name}</h2>
            <p>${description}</p>
            <div class="base-card">
                <p>Price $${price}</p>
                <a class="but-view" href="./details.html?id=${id}">View more</a>
            </div> 
        </article> `
        // también se puede poner todo en una variable y luego retornarla
}

// plantilla de la card no encontrada
function templateCardNotFound() {
    return `
        <article class="card">
            <figure>
                <img class="card-image" src="/assets/images/not_found.webp" alt="Not found">
            </figure>
            <h2>No events found</h2>
        </article> `
}






// function printAllEvents1(filtro) {
//     let allCards = [];
//     let container = document.getElementById("card-home");

//     for (let event of filtro) {
//         let card = `
//         <article class="card">
//             <figure>
//                 <img class="card-image" src="${event.image}" alt="${event.name}">
//             </figure>
//             <h2>${event.name}</h2>
//             <p>${event.description}</p>
//             <div class="base-card">
//                 <p>Price $${event.price}</p>
//                 <a class="but-view" href="./details.html?id=${event._id}">View more</a>
//             </div> 
//         </article>
//         `
//         allCards.push(card);
//     }
//     container.innerHTML = allCards.join("");
// }
