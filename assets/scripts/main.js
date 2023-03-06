// console.table(data.events);

// Para el Home

// Para las categorías
function printCategory() {
    let allCateg = [];
    let allCategPrint = [];
    let container = document.getElementById("categoryId");

    data.events.forEach(element => {
        if (!allCateg.includes(element.category)) {
            allCateg.push(element.category)
            allCategPrint.push(templateCategory(element.category))
        }
    });

    container.innerHTML = allCategPrint.join("");
}
printCategory();



// Para las cards
function printAllEvents() {
    let allCards = [];
    let container = document.getElementById("card-home");

    for (let event of data.events) {
        allCards.push(templateCard(event.image, event.name, event.description, event.price, event._id));
    }
    container.innerHTML = allCards.join("");
}
printAllEvents();


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
        </article>
        `
        // también se puede poner todo en una variable y luego retornarla
}

function templateCategory(category) {
    return `<label for="${category}">
    <input onclick="captureData()" class="check" type="checkbox" name="choose" id="${category}" value="${category}">
    ${category}</label>`
}











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