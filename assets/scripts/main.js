// console.table(data.events);

// Para el Home
function printAllEvents() {
    let allCards = [];
    let container = document.getElementById("card-home");

    for (let event of data.events) {
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
printAllEvents();















// Prueba para ver el de detalle
// let cardsDeEvents = [];
// for (let event of data.events) {
//     let card = `
//     <div class="detail-flex">
//         <figure class="figure-detail">
//             <img class="img-detail" src="${event.image}" alt="${event.name}">
//         </figure>
//         <article class="descrip-detail">
//             <h1 class="detail-title">${event.name}</h1>
//             <p><span>Date:</span>${event.date}</p>
//             <p><span>Description:</span>${event.description}</p>
//             <p><span>Category:</span>${event.category}</p>
//             <p><span>Place:</span>${event.place}</p>
//             <p><span>Capacity:</span>${event.capacity}</p>
//             <p><span>Assistance or estimate:</span>${event.assistance}</p>
//             <p><span>Price:</span>${event.price}</p>
//         </article>
//     </div> `
//     console.log(card);
//     cardsDeEvents.push(card);
// }
// console.log(cardsDeEvents);

// function printEvent() {
//     let container = document.getElementById("containerDetail");
//     container.innerHTML = cardsDeEvents.join("");
// }
// printEvent();