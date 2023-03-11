const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

async function printDetail() {
    try {
        let urlApi = "https://mindhub-ab35.onrender.com/api/amazing-events"
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        
        captureList = response.events;

    } catch (error) {
        console.log("Ocurrió un error en fetchApi en details");
        console.log(error);
    }

    const event = captureList.find(element => element.id == id);
    const container = document.getElementById("container-Detail");
    // esto de abajo es para mostrar la fecha con formato dia, mes, año
    console.log(event.date);
    let eventDate = new Date(event.date).getUTCDate() + "-" + (new Date(event.date).getUTCMonth()+1) + "-" + new Date(event.date).getUTCFullYear();
    console.log(eventDate);
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
            <p><span>Assistance or estimate: </span>${event.assistance}</p>
            <p><span>Price: </span>$${event.price}</p>
        </article>`

    container.innerHTML = idEncontrado;
}

printDetail();
