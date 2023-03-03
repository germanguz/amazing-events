const queryString = location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

function printDetail() {
    const event = data.events.find(element => element._id == id);
    const container = document.getElementById("container-Detail")
    const idEncontrado = `
        <figure class="figure-detail">
            <img class="img-detail" src="${event.image}" alt="${event.nombre}">
        </figure>
        <article class="descrip-detail">
            <h1 class="detail-title">${event.name}</h1>
            <p><span>Date: </span>${event.date}</p>
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