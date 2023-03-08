// Para el Past Events

// Para las categorías
printCategory("categoryId-past");

// Para las cards
function createPastEventsArray(lista) {
    let pastEvArray = [];
    for (let event of lista) {
        if (event.date < data.currentDate) {
            pastEvArray.push(event);
        }
    }
    printEvents(pastEvArray)
    captureList = pastEvArray;
}

// Llamo a la función para que me genere el array filtrado
createPastEventsArray(data.events)





// function printPastEvents() {
//     let pastEvCards = [];
//     let containerPsEv = document.getElementById("card-PastEvents");

//     for (let event of data.events) {
//         if (event.date < data.currentDate) {
//             let card = `
//             <article class="card">
//                 <figure>
//                     <img class="card-image" src="${event.image}" alt="${event.name}">
//                 </figure>
//                 <h2>${event.name}</h2>
//                 <p>${event.description}</p>
//                 <div class="base-card">
//                     <p>Price $${event.price}</p>
//                     <a class="but-view" href="./details.html?id=${event._id}">View more</a>
//                 </div> 
//             </article>
//             `
//             pastEvCards.push(card);
//         }
//     }
//     containerPsEv.innerHTML = pastEvCards.join("");
// }
// printPastEvents();
