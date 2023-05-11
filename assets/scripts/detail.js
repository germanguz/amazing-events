// Lo sgte es para buscar el "id" que se manda en la URL
const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

// Fc para imprimir el detalle de la card de acuerdo al id
async function printDetail() {
    try {
        let urlApi = "./assets/scripts/all-events.json"
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        
        // Guardo el array desde la api
        captureList = response.events;

    } catch (error) {
        console.log("Ocurrió un error en fetchApi en details");
        console.log(error);
    }

    // Busco dentro del array el id sacado de la URL
    const event = captureList.find(element => element.id == id);

    // Llamo al id del HTML para luego imprimir
    const container = document.getElementById("container-Detail");

    // esto de abajo es para mostrar la fecha con formato dia, mes, año
    // console.log(event.date);
    let eventDate = new Date(event.date).getUTCDate() + "-" + (new Date(event.date).getUTCMonth()+1) + "-" + new Date(event.date).getUTCFullYear();
    // console.log(eventDate);

    // La sgte es una condicion porque de acuerdo al evento (past o upcoming), puede tener estimate o assistance
    // Si alguna de las claves del objeto/evento encontrado con id, coincide con assistance... sino...
    if(Object.keys(event).includes("assistance") ) {
        const idEncontrado = `
            <figure class="figure-detail">
                <img class="img-detail" src="${event.image}" alt="${event.name}">
            </figure>
            <article class="descrip-detail">
                <h1 class="detail-title">${event.name}</h1>
                <p><span>Date: </span>${eventDate}</p>
                <p><span>Description: </span>${event.description}</p>
                <p><span>Category: </span>${event.category}</p>
                <p><span>Place: </span>${event.place}</p>
                <p><span>Capacity: </span>${event.capacity}</p>
                <p><span>Assistance: </span>${event.assistance}</p>
                <p><span>Price: </span>$${event.price}</p>
            </article>`
        
        // imprime en el HTML
        container.innerHTML = idEncontrado;

    } else {
        const idEncontrado = `
            <figure class="figure-detail">
                <img class="img-detail" src="${event.image}" alt="${event.name}">
            </figure>
            <article class="descrip-detail">
                <h1 class="detail-title">${event.name}</h1>
                <p><span>Date: </span>${eventDate}</p>
                <p><span>Description: </span>${event.description}</p>
                <p><span>Category: </span>${event.category}</p>
                <p><span>Place: </span>${event.place}</p>
                <p><span>Capacity: </span>${event.capacity}</p>
                <p><span>Estimate: </span>${event.estimate}</p>
                <p><span>Price: </span>$${event.price}</p>
            </article>`
        
        // imprime en el HTML
        container.innerHTML = idEncontrado;
    }
}

printDetail();
