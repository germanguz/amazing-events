function captureData() {
    let text = document.getElementById("idSearch").value.toLowerCase();
    let checks = Array.from(document.querySelectorAll(".check:checked")).map(element => element.value);
    // console.log(text);
    // console.log(checks);
    // creamos un objeto con text y check
    
    // *puedo omitir este paso y usar directamente las variables sin olvidar usar el "map" en "checks"
    /* let objDatosParaFiltrar = {
        textoAFiltrar: text,
        checksAFiltrar: checks.map(element => element.value)
        console.log(objDatosParaFiltrar);
    } */

    let filtro = data.events.filter(each => {
        return (
            each.name.toLowerCase().includes(text)
        ) && (
            checks.length === 0 || checks.includes(each.category)
        )
    })
    // console.log(filtro);
    if (filtro.length > 0) {
        printAllEvents(filtro);
    } else {
        let container = document.getElementById("card-home");
        container.innerHTML = `
        <article class="card">
            
            <h2>EVENTO NO ENCONTRADO</h2>
             
        </article>`
    }
}

function printAllEvents(filtro) {
    let allCards = [];
    let container = document.getElementById("card-home");

    for (let event of filtro) {
        let card = `
        <article class="card">
            <figure>
                <img class="card-image" src="${event.image}" alt="${event.name}">
            </figure>
            <h2>${event.name}</h2>
            <p>${event.description}</p>
            <div class="base-card">
                <p>Price $${event.price}</p>
                <a class="but-view" href="./details.html?id=${event._id}">View more</a>
            </div> 
        </article>
        `
        allCards.push(card);
    }
    container.innerHTML = allCards.join("");
}
