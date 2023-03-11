// ** FUNCIONES Y PLANTILLAS GENERALES **
// ****************** FUNCIONES ******************

// Array vacío para ir actualizando de acuerdo a que página acceda a usar las funciones
let captureList = []; 

// Para las categorías
function printCategory(idCategoria) {
    let allCateg = [];
    let allCategPrint = [];
    let container = document.getElementById(idCategoria);

    captureList.forEach(element => {
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
        allCards.push(templateCard(event.image, event.name, event.description, event.price, event.id));
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

async function fetchApi(categoria) {
    try {
        let urlApi = "https://mindhub-ab35.onrender.com/api/amazing-events"
        // let urlApi = "https://mh.up.railway.app/api/amazing-events"
        // let urlApi = "https://mh-h0bh.onrender.com/api/amazing-events"
        
        let fetchResponse = await fetch(urlApi)
        // console.log(fetchResponse);
        let response = await fetchResponse.json()
        // console.log(response);
        // console.table(response.events);

        captureList = response.events;

        // aunque "captureList" está como variable global y printEvents la puede usar, es necesario mandar argumento porque
        // después cuando filtra se envía este "filtro" a printsEvents para poder imprimir ese filtrado
        printEvents(captureList);

        printCategory(categoria);

    } catch (error) {
        console.log("Ocurrió un error en fetchApi");
        console.log(error);
    }
}



// ****************** PLANTILLAS ******************

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
            <h2>No events found!</h2>
            <h3>Try again with other words</h3>
        </article> `
}
