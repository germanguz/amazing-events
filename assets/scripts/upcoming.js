// Para el Upcoming Events

// Para las categorías
printCategory("categoryId-upcoming");

// Para las cards
function createUpcomingEventsArray(lista) {
    let upEvArray = [];
    for (let event of lista) {
        if (event.date > data.currentDate) {
            upEvArray.push(event);
        }
    }
    printEvents(upEvArray)
    captureList = upEvArray;
}

// Llamo a la función para que me genere el array filtrado
createUpcomingEventsArray(data.events)

// function printUpcomingEvents(lista) {
//     let upEvCards = [];
//     let containerUpEv = document.getElementById("card-UpEvents");

//     for (let event of lista) {
//         if (event.date > data.currentDate) {
//             // let card = `
//             // <article class="card">
//             //     <figure>
//             //         <img class="card-image" src="${event.image}" alt="${event.name}">
//             //     </figure>
//             //     <h2>${event.name}</h2>
//             //     <p>${event.description}</p>
//             //     <div class="base-card">
//             //         <p>Price $${event.price}</p>
//             //         <a class="but-view" href="./details.html?id=${event._id}">View more</a>
//             //     </div> 
//             // </article>
//             // `
//             upEvCards.push(templateCard(event.image, event.name, event.description, event.price, event._id));
//         }
//     }
//     containerUpEv.innerHTML = upEvCards.join("");
// }
// printUpcomingEvents(data.events);


