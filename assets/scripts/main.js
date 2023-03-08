// console.table(data.events);

// Para el Home

// Para imprimir las categorías
printCategory("categoryId");

// Establezco el array que voy a usar, en este caso el array completo
captureList = data.events;

// Para imprimir las cards
printEvents(captureList);







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